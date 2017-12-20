self.deposit = function(addr, inputAmount) {
    var amount = self.utility.ethToWei(inputAmount, self.getDivisor(addr)),
        token = self.getToken(addr);
    if (amount.lte(0)) return self.dialogError("You must specify a valid amount to deposit."), void ga("send", {
        hitType: "event",
        eventCategory: "Error",
        eventAction: "Deposit - invalid amount",
        eventLabel: token.name,
        eventValue: inputAmount
    });
    "0x0000000000000000000000000000000000000" === addr.slice(0, 39) ? self.utility.getBalance(self.web3, self.accounts[self.selectedAccount].addr, function(err, result) {
        var balanceLessGas = result.minus(new BigNumber(self.ethGasPrice).times(self.config.gasDeposit));
        amount.gt(balanceLessGas) && amount.lt(balanceLessGas.times(new BigNumber(1.1))) && (amount = balanceLessGas), amount.lte(result) ? self.utility.send(self.web3, self.ledgerEth, self.contractEtherDelta, self.selectedContract, "deposit", [{
            gas: self.config.gasDeposit,
            gasPrice: self.ethGasPrice,
            value: amount.toNumber()
        }], self.accounts[self.selectedAccount].addr, self.accounts[self.selectedAccount].pk, self.accounts[self.selectedAccount].kind, self.nonce, function(errSend, resultSend) {
            self.nonce = resultSend.nonce, self.addPending(errSend, {
                txHash: resultSend.txHash
            }), self.alertTxResult(errSend, resultSend), ga("send", {
                hitType: "event",
                eventCategory: "Action",
                eventAction: "Deposit",
                eventLabel: token.name,
                eventValue: inputAmount
            })
        }) : (self.dialogError("You can't deposit more Ether than you have."), ga("send", {
            hitType: "event",
            eventCategory: "Error",
            eventAction: "Deposit - not enough balance",
            eventLabel: token.name,
            eventValue: inputAmount
        }))
    }) : self.utility.call(self.web3, self.contractToken, token.addr, "allowance", [self.accounts[self.selectedAccount].addr, self.selectedContract], function(errAllowance, resultAllowance) {
        resultAllowance.gt(0) && amount.gt(resultAllowance) && (amount = resultAllowance), self.utility.call(self.web3, self.contractToken, token.addr, "balanceOf", [self.accounts[self.selectedAccount].addr], function(errBalanceOf, resultBalanceOf) {
            if (amount.gt(resultBalanceOf) && amount.lt(resultBalanceOf.times(new BigNumber(1.1))) && (amount = resultBalanceOf), amount.lte(resultBalanceOf)) {
                var txs = [];
                async.series([function(callbackSeries) {
                    resultAllowance.eq(0) ? self.utility.send(self.web3, self.ledgerEth, self.contractToken, addr, "approve", [self.selectedContract, amount, {
                        gas: self.config.gasApprove,
                        gasPrice: self.ethGasPrice,
                        value: 0
                    }], self.accounts[self.selectedAccount].addr, self.accounts[self.selectedAccount].pk, self.accounts[self.selectedAccount].kind, self.nonce, function(errSend, resultSend) {
                        self.nonce = resultSend.nonce, txs.push(resultSend), callbackSeries(null, {
                            errSend: errSend,
                            resultSend: resultSend
                        })
                    }) : callbackSeries(null, void 0)
                }, function(callbackSeries) {
                    self.utility.send(self.web3, self.ledgerEth, self.contractEtherDelta, self.selectedContract, "depositToken", [addr, amount, {
                        gas: self.config.gasDeposit,
                        gasPrice: self.ethGasPrice,
                        value: 0
                    }], self.accounts[self.selectedAccount].addr, self.accounts[self.selectedAccount].pk, self.accounts[self.selectedAccount].kind, self.nonce, function (errSend, resultSend) {
                        self.nonce = resultSend.nonce, txs.push(resultSend), callbackSeries(null, {
                            errSend: errSend,
                            resultSend: resultSend
                        })
                    })
                }]