var crow;
var customer;
var vendor;
var txVal;
var expire;
var fee;
var feeApr;
var funded;
var funders;
var shortFall;
var txstore;
var txData = [];
var txGrid;
var madeContract;

var madeaddress = "0x0918fB47b8Bc3C225d583b8f40E18Ed470985a8f";
var madeabi = [ {
	"constant" : true,
	"inputs" : [ {
		"name" : "txId",
		"type" : "string"
	} ],
	"name" : "getMadeTx",
	"outputs" : [ {
		"name" : "",
		"type" : "address"
	}, {
		"name" : "",
		"type" : "address"
	}, {
		"name" : "",
		"type" : "uint256"
	}, {
		"name" : "",
		"type" : "uint256"
	}, {
		"name" : "",
		"type" : "uint256"
	}, {
		"name" : "",
		"type" : "uint256"
	}, {
		"name" : "",
		"type" : "uint256"
	} ],
	"payable" : false,
	"stateMutability" : "view",
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [ {
		"name" : "vendor",
		"type" : "address"
	}, {
		"name" : "cost",
		"type" : "uint256"
	}, {
		"name" : "escrow_duration",
		"type" : "uint256"
	}, {
		"name" : "fee",
		"type" : "uint256"
	} ],
	"name" : "addMadeWidgetTx",
	"outputs" : [],
	"payable" : false,
	"stateMutability" : "nonpayable",
	"type" : "function"
}, {
	"constant" : true,
	"inputs" : [ {
		"name" : "vendor",
		"type" : "address"
	}, {
		"name" : "index",
		"type" : "uint256"
	} ],
	"name" : "getMadeWidgetTx",
	"outputs" : [ {
		"name" : "",
		"type" : "address"
	}, {
		"name" : "",
		"type" : "address"
	}, {
		"name" : "",
		"type" : "uint256"
	}, {
		"name" : "",
		"type" : "uint256"
	}, {
		"name" : "",
		"type" : "uint256"
	} ],
	"payable" : false,
	"stateMutability" : "view",
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [ {
		"name" : "txId",
		"type" : "string"
	}, {
		"name" : "vendor",
		"type" : "address"
	}, {
		"name" : "txVal",
		"type" : "uint256"
	}, {
		"name" : "expire",
		"type" : "uint256"
	}, {
		"name" : "fee",
		"type" : "uint256"
	}, {
		"name" : "feeApr",
		"type" : "uint256"
	}, {
		"name" : "funded",
		"type" : "uint256"
	}, {
		"name" : "funders",
		"type" : "uint256"
	} ],
	"name" : "addMadeTx",
	"outputs" : [],
	"payable" : false,
	"stateMutability" : "nonpayable",
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [ {
		"name" : "txId",
		"type" : "string"
	}, {
		"name" : "startDate",
		"type" : "uint256"
	}, {
		"name" : "numEth",
		"type" : "uint256"
	} ],
	"name" : "addLadderTx",
	"outputs" : [],
	"payable" : false,
	"stateMutability" : "nonpayable",
	"type" : "function"
}, {
	"constant" : true,
	"inputs" : [ {
		"name" : "txId",
		"type" : "string"
	}, {
		"name" : "index",
		"type" : "uint256"
	} ],
	"name" : "getLadderTx",
	"outputs" : [ {
		"name" : "",
		"type" : "address"
	}, {
		"name" : "",
		"type" : "uint256"
	}, {
		"name" : "",
		"type" : "uint256"
	} ],
	"payable" : false,
	"stateMutability" : "view",
	"type" : "function"
}, {
	"constant" : true,
	"inputs" : [ {
		"name" : "vendor",
		"type" : "address"
	} ],
	"name" : "getVendorTransactionsCount",
	"outputs" : [ {
		"name" : "",
		"type" : "uint256"
	} ],
	"payable" : false,
	"stateMutability" : "view",
	"type" : "function"
}, {
	"constant" : true,
	"inputs" : [ {
		"name" : "txId",
		"type" : "string"
	} ],
	"name" : "getLadderTransactionsCount",
	"outputs" : [ {
		"name" : "",
		"type" : "uint256"
	} ],
	"payable" : false,
	"stateMutability" : "view",
	"type" : "function"
} ];

if (typeof (web3) === "undefined") {
} else {
	web3 = new Web3(web3.currentProvider);
	madeContract = web3.eth.contract(madeabi).at(madeaddress);

}

function handleClick(e) {

}

function addClickHandlers() {
	// var table = document.getElementById("escrowTable");
	var popwin = document.getElementById("popup");
	var table = document.getElementById("txGrid");
	var rows = table.getElementsByTagName("tr");
	for (i = 1; i < rows.length; i++) {
		currentRow = table.rows[i];
		currentCol = table.rows[i].getElementsByTagName("td")[1];

		var createClickHandler = function(row) {
			return function() {
				crow = row;
				ladderHandler();
			};
		};

		currentRow.onclick = createClickHandler(currentRow);
	}
}

function ladderHandler() {
	var cell_tx_id = crow.getElementsByTagName("td")[0].innerText;
	var fundCount = -1;
	var fi = 0;
	var canvas = document.getElementById("ladder"), c = canvas.getContext("2d"), boxSize = 20, boxes = Math
			.floor(300 / boxSize);
	var sdresult;
	var ethresult;
	// c.beginPath();

	madeContract.getLadderTransactionsCount(cell_tx_id,
			function(error, result) {

				if (!error) {
					fundCount = result.c[0];
				} else {
					fundCount = -1;
				}
				c.beginPath();
				for (var row = 0; row < boxes; row++) {
					for (var column = 0; column < boxes; column++) {
						var x = column * boxSize;
						var y = row * boxSize;

						c.lineWidth = 3;
						c.strokeStyle = "grey";
						c.fillStyle = "white";
						c.rect(x, y, boxSize, boxSize);
						c.fill();
						c.stroke();
					}
				}
				while (fi < fundCount) {

					madeContract.getLadderTx(cell_tx_id, fi, function(error,
							result) {
						if (!error) {
							ethresult = result[2].c[0];
							sdresult = result[1].c[0];
							console.log(result[0], result[1].c[0],
									result[2].c[0]);
							var ethRow = 0;
							var dateCol = 0;
							for (var row = boxes - 1; row > -1; row--) {
								for (var column = 0; column < boxes; column++) {
									var x = column * boxSize;
									var y = row * boxSize;
									if (row >= (boxes - ethresult)
											&& column >= (sdresult - 1)) {
										c.fillStyle = "green";
										c.fillRect(x, y, boxSize, boxSize);
										c.stroke();
									}
									/*
									 * else{ c.fillStyle = "white"; c.rect(x, y,
									 * boxSize, boxSize); c.fill(); c.stroke(); }
									 * if((row==0&&(column==4||column==5||column==6))||(row==2&&(column==4||column==5||column==6))||(row==0&&(column==4||column==5||column==6))||(row==3&&(column==4||column==5||column==6))||(row==6&&(column==4||column==5||column==6))||(row==12&&(column==4||column==5||column==6))||(row==16&&(column==4||column==5||column==6))||(row==9&&(column==3||column==0||column==5))||(row==8&&(column==2||column==9||column==0))||(row==10&&(column==2||column==3||column==7))||(row==19&&(column==2||column==3||column==7))||(row==16&&(column==2||column==3||column==7))||(row==7&&(column==2||column==3||column==7))||(row==12&&(column==2||column==3||column==7))||(row==19&&(column==2||column==3||column==7))||(row==1&&(column==2||column==3||column==7))||(row==142&&(column==2||column==3||column==7))||(row==16&&(column==2||column==3||column==7))||(row==32&&(column==2||column==3||column==7))||(row==52&&(column==2||column==3||column==7))){
									 * c.fillStyle = "green"; c.fillRect(x, y,
									 * boxSize, boxSize); c.stroke();
									 *  } else{ c.fillStyle = "white"; c.rect(x,
									 * y, boxSize, boxSize); c.fill();
									 * c.stroke(); }
									 */
								}
							}
						} else
							console.error(error);
					});
					fi++;

				}
				fi = fundCount
			});

	c.closePath();
	document.getElementById("txid").innerHTML = "<h5>Escrow ladder for Transaction id:"
			+ cell_tx_id + "</h5>";
	document.getElementById("ladderGrid").style.display = "block";
	document.getElementById("ladder").style.display = "block";

}

function ladderHandler1() {
	var canvas = document.getElementById("ladder1"), c = canvas
			.getContext("2d"), boxSize = 20, boxes = Math.floor(300 / boxSize);
	canvas.addEventListener('click', handleClick);
	canvas.addEventListener('mousemove', handleClick);

	c.beginPath();
	c.fillStyle = "white";
	c.lineWidth = 3;
	c.strokeStyle = "grey";
	for (var row = 0; row < boxes; row++) {
		for (var column = 0; column < boxes; column++) {
			var x = column * boxSize;
			var y = row * boxSize;
			// c.rect(x, y, boxSize, boxSize);
			if ((row == 4 && (column == 4 || column == 5 || column == 6))
					|| (row == 2 && (column == 4 || column == 5 || column == 6))
					|| (row == 8 && (column == 1 || column == 2 || column == 3))
					|| (row == 13 && (column == 4 || column == 5 || column == 6))
					|| (row == 16 && (column == 14 || column == 1 || column == 8))
					|| (row == 22 && (column == 1 || column == 5 || column == 6))
					|| (row == 10 && (column == 14 || column == 5 || column == 16))
					|| (row == 19 && (column == 3 || column == 10 || column == 5))
					|| (row == 8 && (column == 2 || column == 9 || column == 0))
					|| (row == 12 && (column == 2 || column == 3 || column == 7))) {

				c.fillStyle = "green";
				// c.fill();
				c.fillRect(x, y, boxSize, boxSize);
				c.stroke();

			} else {
				c.fillStyle = "white";
				c.rect(x, y, boxSize, boxSize);
				c.fill();
				c.stroke();
			}
		}
	}
	c.closePath();

	document.getElementById("ladderGrid1").style.display = "block";
	document.getElementById("ladder1").style.display = "block";

}

function ladderHandler2() {
	var canvas = document.getElementById("ladder2"), c = canvas
			.getContext("2d"), boxSize = 20, boxes = Math.floor(300 / boxSize);
	canvas.addEventListener('click', handleClick);
	canvas.addEventListener('mousemove', handleClick);

	c.beginPath();
	c.fillStyle = "white";
	c.lineWidth = 3;
	c.strokeStyle = "grey";
	for (var row = 0; row < boxes; row++) {
		for (var column = 0; column < boxes; column++) {
			var x = column * boxSize;
			var y = row * boxSize;
			// c.rect(x, y, boxSize, boxSize);
			if ((row == 10 && (column == 4 || column == 5 || column == 6))
					|| (row == 12 && (column == 4 || column == 5 || column == 6))
					|| (row == 20 && (column == 14 || column == 5 || column == 9))
					|| (row == 5 && (column == 4 || column == 5 || column == 6))
					|| (row == 16 && (column == 14 || column == 9 || column == 20))
					|| (row == 2 && (column == 14 || column == 8 || column == 22))
					|| (row == 16 && (column == 4 || column == 5 || column == 6))
					|| (row == 19 && (column == 3 || column == 0 || column == 5))
					|| (row == 18 && (column == 22 || column == 9 || column == 20))
					|| (row == 15 && (column == 2 || column == 3 || column == 7))
					|| (row == 11 && (column == 4 || column == 5 || column == 6))
					|| (row == 16 && (column == 4 || column == 5 || column == 6))
					|| (row == 9 && (column == 3 || column == 0 || column == 5))
					|| (row == 8 && (column == 2 || column == 9 || column == 0))
					|| (row == 10 && (column == 2 || column == 3 || column == 7))
					|| (row == 19 && (column == 2 || column == 3 || column == 7))
					|| (row == 16 && (column == 2 || column == 3 || column == 7))
					|| (row == 7 && (column == 2 || column == 3 || column == 7))) {
				c.fillStyle = "green";
				// c.fill();
				c.fillRect(x, y, boxSize, boxSize);
				c.stroke();

			} else {
				c.fillStyle = "white";
				c.rect(x, y, boxSize, boxSize);
				c.fill();
				c.stroke();
			}
		}
	}
	c.closePath();

	document.getElementById("ladderGrid2").style.display = "block";
	document.getElementById("ladder2").style.display = "block";

}

function ladderHandler3() {
	var canvas = document.getElementById("ladder3"), c = canvas
			.getContext("2d"), boxSize = 20, boxes = Math.floor(300 / boxSize);
	canvas.addEventListener('click', handleClick);
	canvas.addEventListener('mousemove', handleClick);

	c.beginPath();
	c.fillStyle = "white";
	c.lineWidth = 3;
	c.strokeStyle = "grey";
	for (var row = 0; row < boxes; row++) {
		for (var column = 0; column < boxes; column++) {
			var x = column * boxSize;
			var y = row * boxSize;
			// c.rect(x, y, boxSize, boxSize);
			if ((row == 10 && (column == 4 || column == 5 || column == 6))
					|| (row == 1 && (column == 4 || column == 5 || column == 6))
					|| (row == 0 && (column == 4 || column == 5 || column == 6))
					|| (row == 13 && (column == 4 || column == 5 || column == 6))
					|| (row == 6 && (column == 14 || column == 2 || column == 6))
					|| (row == 2 && (column == 14 || column == 15 || column == 6))
					|| (row == 6 && (column == 14 || column == 2 || column == 6))
					|| (row == 9 && (column == 13 || column == 20 || column == 5))
					|| (row == 8 && (column == 20 || column == 9 || column == 0))
					|| (row == 2 && (column == 2 || column == 3 || column == 7))
					|| (row == 12 && (column == 4 || column == 5 || column == 6))
					|| (row == 16 && (column == 4 || column == 5 || column == 6))
					|| (row == 9 && (column == 3 || column == 0 || column == 5))
					|| (row == 8 && (column == 2 || column == 9 || column == 0))
					|| (row == 10 && (column == 2 || column == 3 || column == 7))
					|| (row == 19 && (column == 2 || column == 3 || column == 7))
					|| (row == 16 && (column == 2 || column == 3 || column == 7))
					|| (row == 7 && (column == 2 || column == 3 || column == 7))) {
				c.fillStyle = "green";
				// c.fill();
				c.fillRect(x, y, boxSize, boxSize);
				c.stroke();

			} else {
				c.fillStyle = "white";
				c.rect(x, y, boxSize, boxSize);
				c.fill();
				c.stroke();
			}
		}
	}
	c.closePath();
	document.getElementById("ladderGrid3").style.display = "block";
	document.getElementById("ladder3").style.display = "block";
}

function close_fund() {
	document.getElementById("popup_fund").style.display = "none"
}

function close_ladder() {
	document.getElementById("ladderGrid").style.display = "none"
	document.getElementById("ladder").style.display = "none"

}

function close_ladder1() {

	document.getElementById("ladderGrid1").style.display = "none"
	document.getElementById("ladder1").style.display = "none"

}
function close_ladder2() {
	document.getElementById("ladderGrid2").style.display = "none"
	document.getElementById("ladder2").style.display = "none"

}
function close_ladder3() {
	document.getElementById("ladderGrid3").style.display = "none"
	document.getElementById("ladder3").style.display = "none"

}

function fund_visibility_click(id) {
	document.getElementById("popup_fund").style.display = "block";
}

function send_fund(cell_tx_id, cell_customer, cell_vendor, cell_txVal,
		cell_txExpire, cell_txFee, cell_txFeeApr, cell_txFunded, cell_txFunders) {

	madeContract.addMadeTx(cell_tx_id, cell_vendor, cell_txVal, cell_txExpire,
			cell_txFee, cell_txFeeApr, cell_txFunded, cell_txFunders, function(
					error, result) {

				if (!error)
					console.log(result);
				else
					console.error(error);
			});

	madeContract.getMadeTx(cell_tx_id, function(error, result) {

		if (!error)
			console.log(result);
		else
			console.error(error);
	});

}

function send_ladder(cell_tx_id, num_eth, escrow) {

	/*
	 * madeContract.addLadderTx(cell_tx_id,escrow,num_eth,function(error,
	 * result){
	 * 
	 * if(!error){ console.log(result); ladderHandler(); } else
	 * console.error(error); });
	 */
	madeContract.addLadderTx(cell_tx_id, escrow, num_eth, ladderHandler);
}

function fund_visibility(id) {
	/*
	 * close_fund(); var cell_tx_id =
	 * crow.getElementsByTagName("td")[0].innerHTML; var cell_customer =
	 * crow.getElementsByTagName("td")[2].innerHTML; var cell_vendor =
	 * crow.getElementsByTagName("td")[3].innerHTML; var cell_txVal =
	 * crow.getElementsByTagName("td")[4].innerHTML; var cell_txExpire =
	 * crow.getElementsByTagName("td")[5].innerHTML; var cell_txFee =
	 * crow.getElementsByTagName("td")[6].innerHTML; var cell_txFeeApr =
	 * crow.getElementsByTagName("td")[7].innerHTML; var cell_txFunded =
	 * crow.getElementsByTagName("td")[10].innerHTML; var cell_txFunders =
	 * crow.getElementsByTagName("td")[11].innerHTML;
	 * 
	 * var num_eth = document.getElementById("fund_num_eth").innerHTML; var
	 * escrow = document.getElementById("fund_escrow").innerHTML;
	 */
	var cell_tx_id = crow.getElementsByTagName("td")[0].innerText;
	var cell_customer = crow.getElementsByTagName("td")[2].innerText;
	var cell_vendor = crow.getElementsByTagName("td")[3].innerText;
	var cell_txVal = crow.getElementsByTagName("td")[4].innerText;
	var cell_txExpire = crow.getElementsByTagName("td")[5].innerText;
	var cell_txFee = crow.getElementsByTagName("td")[6].innerText;
	var cell_txFeeApr = crow.getElementsByTagName("td")[7].innerText;
	var cell_txFunded = crow.getElementsByTagName("td")[10].innerText;
	var cell_txFunders = crow.getElementsByTagName("td")[11].innerText;

	var num_eth = document.getElementById("fund_num_eth").value;
	var escrow = document.getElementById("fund_escrow").value;
	send_ladder(cell_tx_id, num_eth, escrow);
	// ladderHandler();
	var e = document.getElementById(id);
	if (e.style.display == 'block')
		e.style.display = 'none';
	else
		e.style.display = 'block';
	close_fund();
	send_fund(cell_tx_id, cell_customer, cell_vendor, cell_txVal,
			cell_txExpire, cell_txFee, cell_txFeeApr, cell_txFunded,
			cell_txFunders);
}

function Ladder(e) {
}
function startTXGrid(txData) {
	txGrid = $('#txGrid')
			.grid(
					{
						fixedHeader : true,
						dataSoruce : txData,
						columns : [
								{
									title : "TX-ID",
									width : 70,
									field : 'txid',
									align : 'center'
								},
								{
									width : 70,
									tmpl : '<a class="btn mr-2 mb-2 page-scroll"  style="color:white ;background-color: blue" onclick="addClickHandlers();">Ladder</a>',
									align : 'center'
								},

								{
									title : "Customer",
									width : 70,
									field : 'customer',
									align : 'center'
								}, {
									title : "Vendor",
									width : 70,
									field : 'vendor',
									align : 'center'
								}, {
									title : "Transaction Value (ETH)",
									width : 70,
									field : 'txval',
									align : 'center'
								}, {
									title : "Time To Expiration",
									width : 70,
									field : 'expire',
									align : 'center'
								}, {
									title : "Fee",
									width : 70,
									field : 'fee',
									align : 'center'
								}, {
									title : "Fee APR",
									width : 70,
									field : 'feeapr',
									align : 'center'
								}, {
									title : "Customer",
									width : 70,
									field : 'customerfund',
									align : 'center'
								}, {
									title : "Vendor",
									width : 70,
									field : 'vendorfund',
									align : 'center'
								}, {
									title : "Funded",
									width : 70,
									field : 'tfunded',
									align : 'center'
								}, {
									title : "#Funders",
									width : 70,
									field : 'tfunders',
									align : 'center'
								}, {
									title : "Short Fall",
									width : 70,
									field : 'short',
									align : 'center'
								}, ]
					});

}