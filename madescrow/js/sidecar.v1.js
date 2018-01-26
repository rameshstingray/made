/*!
 * Gitter Sidecar v1.2.4
 * https://sidecar.gitter.im/
 */
var sidecar = function(t) {
    function e(n) {
        if (r[n]) return r[n].exports;
        var o = r[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return t[n].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
    }
    var r = {};
    return e.m = t, e.c = r, e.p = "", e(0)
}([function(t, e, r) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = r(3),
        i = n(o),
        a = r(12),
        u = n(a),
        c = r(29),
        s = n(c),
        l = function(t, e) {
            return t[e] || function() {
                return t[e] = {}, t[e]
            }()
        },
        f = l(window, "gitter"),
        b = {
            Chat: s["default"]
        };
    (0, i["default"])(f, b);
    var y = new u["default"]("gitter-sidecar-ready", {
        detail: b
    });
    if (document.dispatchEvent(y), !((f.chat || {}).options || {}).disableDefaultChat) {
        var p = l(f, "chat");
        p.defaultChat = new s["default"](p.options || {})
    }
    e["default"] = b
}, function(t, e, r) {
    "use strict";
    var n = r(15),
        o = r(14),
        i = "function" == typeof Symbol && "symbol" == typeof Symbol(),
        a = Object.prototype.toString,
        u = function(t) {
            return "function" == typeof t && "[object Function]" === a.call(t)
        },
        c = function() {
            var t = {};
            try {
                Object.defineProperty(t, "x", {
                    enumerable: !1,
                    value: t
                });
                for (var e in t) return !1;
                return t.x === t
            } catch (r) {
                return !1
            }
        },
        s = Object.defineProperty && c(),
        l = function(t, e, r, n) {
            (!(e in t) || u(n) && n()) && (s ? Object.defineProperty(t, e, {
                configurable: !0,
                enumerable: !1,
                value: r,
                writable: !0
            }) : t[e] = r)
        },
        f = function(t, e) {
            var r = arguments.length > 2 ? arguments[2] : {},
                a = n(e);
            i && (a = a.concat(Object.getOwnPropertySymbols(e))), o(a, function(n) {
                l(t, n, e[n], r[n])
            })
        };
    f.supportsDescriptors = !!s, t.exports = f
}, function(t, e) {
    "use strict";
    var r = Function.prototype.toString,
        n = /^\s*class /,
        o = function(t) {
            try {
                var e = r.call(t),
                    o = e.replace(/\/\/.*\n/g, ""),
                    i = o.replace(/\/\*[.\s\S]*\*\//g, ""),
                    a = i.replace(/\n/gm, " ").replace(/ {2}/g, " ");
                return n.test(a)
            } catch (u) {
                return !1
            }
        },
        i = function(t) {
            try {
                return o(t) ? !1 : (r.call(t), !0)
            } catch (e) {
                return !1
            }
        },
        a = Object.prototype.toString,
        u = "[object Function]",
        c = "[object GeneratorFunction]",
        s = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
    t.exports = function(t) {
        if (!t) return !1;
        if ("function" != typeof t && "object" != typeof t) return !1;
        if (s) return i(t);
        if (o(t)) return !1;
        var e = a.call(t);
        return e === u || e === c
    }
}, function(t, e) {
    "use strict";

    function r(t) {
        if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(t)
    }

    function n() {
        try {
            if (!Object.assign) return !1;
            var t = new String("abc");
            if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
            for (var e = {}, r = 0; 10 > r; r++) e["_" + String.fromCharCode(r)] = r;
            var n = Object.getOwnPropertyNames(e).map(function(t) {
                return e[t]
            });
            if ("0123456789" !== n.join("")) return !1;
            var o = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                o[t] = t
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, o)).join("")
        } catch (i) {
            return !1
        }
    }
    var o = Object.prototype.hasOwnProperty,
        i = Object.prototype.propertyIsEnumerable;
    t.exports = n() ? Object.assign : function(t, e) {
        for (var n, a, u = r(t), c = 1; c < arguments.length; c++) {
            n = Object(arguments[c]);
            for (var s in n) o.call(n, s) && (u[s] = n[s]);
            if (Object.getOwnPropertySymbols) {
                a = Object.getOwnPropertySymbols(n);
                for (var l = 0; l < a.length; l++) i.call(n, a[l]) && (u[a[l]] = n[a[l]])
            }
        }
        return u
    }
}, function(t, e, r) {
    "use strict";
    var n = r(5),
        o = r(1).supportsDescriptors; /*
										 * ! https://mths.be/array-from v0.2.0
										 * by @mathias
										 */
    t.exports = function(t) {
        var e = o ? Object.defineProperty : function(t, e, r) {
                t[e] = r.value
            },
            r = this;
        if (null === t || "undefined" == typeof t) throw new TypeError("`Array.from` requires an array-like object, not `null` or `undefined`");
        var i, a, u = n.ToObject(t);
        if (arguments.length > 1) {
            if (i = arguments[1], !n.IsCallable(i)) throw new TypeError("When provided, the second argument to `Array.from` must be a function");
            arguments.length > 2 && (a = arguments[2])
        }
        for (var c, s, l = n.ToLength(u.length), f = n.IsCallable(r) ? n.ToObject(new r(l)) : new Array(l), b = 0; l > b;) c = u[b], s = i ? "undefined" == typeof a ? i(c, b) : n.Call(i, a, [c, b]) : c, e(f, b, {
            value: s,
            configurable: !0,
            enumerable: !0,
            writable: !0
        }), b += 1;
        return f.length = l, f
    }
}, function(t, e, r) {
    "use strict";
    var n = Object.prototype.toString,
        o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator,
        i = o ? Symbol.prototype.toString : n,
        a = r(7),
        u = r(6),
        c = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1,
        s = r(18),
        l = r(9),
        f = r(8),
        b = r(19),
        y = r(21),
        p = parseInt,
        d = r(25),
        M = d.call(Function.call, String.prototype.slice),
        g = d.call(Function.call, RegExp.prototype.test, /^0b[01]+$/i),
        h = d.call(Function.call, RegExp.prototype.test, /^0o[0-7]+$/i),
        m = ["", "​", "￾"].join(""),
        N = new RegExp("[" + m + "]", "g"),
        j = d.call(Function.call, RegExp.prototype.test, N),
        w = /^[\-\+]0x[0-9a-f]+$/i,
        x = d.call(Function.call, RegExp.prototype.test, w),
        L = ["	\n\x0B\f\r   ᠎    ", "         　\u2028", "\u2029\ufeff"].join(""),
        T = new RegExp("(^[" + L + "]+)|([" + L + "]+$)", "g"),
        v = d.call(Function.call, String.prototype.replace),
        E = function(t) {
            return v(t, T, "")
        },
        D = r(17),
        S = r(26),
        z = s(s({}, D), {
            Call: function(t, e) {
                var r = arguments.length > 2 ? arguments[2] : [];
                if (!this.IsCallable(t)) throw new TypeError(t + " is not a function");
                return t.apply(e, r)
            },
            ToPrimitive: y,
            ToNumber: function(t) {
                var e = b(t) ? t : y(t, "number");
                if ("symbol" == typeof e) throw new TypeError("Cannot convert a Symbol value to a number");
                if ("string" == typeof e) {
                    if (g(e)) return this.ToNumber(p(M(e, 2), 2));
                    if (h(e)) return this.ToNumber(p(M(e, 2), 8));
                    if (j(e) || x(e)) return NaN;
                    var r = E(e);
                    if (r !== e) return this.ToNumber(r)
                }
                return Number(e)
            },
            ToInt16: function(t) {
                var e = this.ToUint16(t);
                return e >= 32768 ? e - 65536 : e
            },
            ToInt8: function(t) {
                var e = this.ToUint8(t);
                return e >= 128 ? e - 256 : e
            },
            ToUint8: function(t) {
                var e = this.ToNumber(t);
                if (a(e) || 0 === e || !u(e)) return 0;
                var r = l(e) * Math.floor(Math.abs(e));
                return f(r, 256)
            },
            ToUint8Clamp: function(t) {
                var e = this.ToNumber(t);
                if (a(e) || 0 >= e) return 0;
                if (e >= 255) return 255;
                var r = Math.floor(t);
                return e > r + .5 ? r + 1 : r + .5 > e ? r : r % 2 !== 0 ? r + 1 : r
            },
            ToString: function(t) {
                if ("symbol" == typeof t) throw new TypeError("Cannot convert a Symbol value to a string");
                return String(t)
            },
            ToObject: function(t) {
                return this.RequireObjectCoercible(t), Object(t)
            },
            ToPropertyKey: function(t) {
                var e = this.ToPrimitive(t, String);
                return "symbol" == typeof e ? i.call(e) : this.ToString(e)
            },
            ToLength: function(t) {
                var e = this.ToInteger(t);
                return 0 >= e ? 0 : e > c ? c : e
            },
            CanonicalNumericIndexString: function(t) {
                if ("[object String]" !== n.call(t)) throw new TypeError("must be a string");
                if ("-0" === t) return -0;
                var e = this.ToNumber(t);
                return this.SameValue(this.ToString(e), t) ? e : void 0
            },
            RequireObjectCoercible: D.CheckObjectCoercible,
            IsArray: Array.isArray || function(t) {
                return "[object Array]" === n.call(t)
            },
            IsConstructor: function(t) {
                return this.IsCallable(t)
            },
            IsExtensible: function(t) {
                return Object.preventExtensions ? b(t) ? !1 : Object.isExtensible(t) : !0
            },
            IsInteger: function(t) {
                if ("number" != typeof t || a(t) || !u(t)) return !1;
                var e = Math.abs(t);
                return Math.floor(e) === e
            },
            IsPropertyKey: function(t) {
                return "string" == typeof t || "symbol" == typeof t
            },
            IsRegExp: function(t) {
                if (!t || "object" != typeof t) return !1;
                if (o) {
                    var e = t[Symbol.match];
                    if ("undefined" != typeof e) return D.ToBoolean(e)
                }
                return S(t)
            },
            SameValueZero: function(t, e) {
                return t === e || a(t) && a(e)
            }
        });
    delete z.CheckObjectCoercible, t.exports = z
}, function(t, e) {
    var r = Number.isNaN || function(t) {
        return t !== t
    };
    t.exports = Number.isFinite || function(t) {
        return "number" == typeof t && !r(t) && t !== 1 / 0 && t !== -(1 / 0)
    }
}, function(t, e) {
    t.exports = Number.isNaN || function(t) {
        return t !== t
    }
}, function(t, e) {
    t.exports = function(t, e) {
        var r = t % e;
        return Math.floor(r >= 0 ? r : r + e)
    }
}, function(t, e) {
    t.exports = function(t) {
        return t >= 0 ? 1 : -1
    }
}, function(t, e) {
    t.exports = function(t) {
        return null === t || "function" != typeof t && "object" != typeof t
    }
}, function(t, e, r) {
    "use strict";
    var n = r(5),
        o = r(4),
        i = function(t) {
            try {
                return t(), !0
            } catch (e) {
                return !1
            }
        };
    t.exports = function() {
        var t = n.IsCallable(Array.from) && i(function() {
            Array.from({
                length: -(1 / 0)
            })
        }) && !i(function() {
            Array.from([], void 0)
        });
        return t ? Array.from : o
    }
}, function(t, e) {
    "use strict";

    function r(t, e) {
        var r = e.bubbles,
            n = void 0 === r ? !1 : r,
            o = e.cancelable,
            i = void 0 === o ? !1 : o,
            a = e.detail,
            u = void 0 === a ? void 0 : a,
            c = void 0;
        try {
            c = new window.CustomEvent(t, {
                bubbles: n,
                cancelable: i,
                detail: u
            })
        } catch (s) {
            c = document.createEvent("CustomEvent"), c.initCustomEvent(t, n, i, u)
        }
        return c
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e["default"] = r, r.prototype = window.Event.prototype
}, function(t, e, r) {
    "use strict";
    var n = r(1),
        o = r(4),
        i = r(11),
        a = r(27),
        u = function(t) {
            return o.call(Array, arguments)
        };
    n(u, {
        implementation: o,
        getPolyfill: i,
        shim: a
    }), t.exports = u
}, function(t, e) {
    var r = Object.prototype.hasOwnProperty,
        n = Object.prototype.toString;
    t.exports = function(t, e, o) {
        if ("[object Function]" !== n.call(e)) throw new TypeError("iterator must be a function");
        var i = t.length;
        if (i === +i)
            for (var a = 0; i > a; a++) e.call(o, t[a], a, t);
        else
            for (var u in t) r.call(t, u) && e.call(o, t[u], u, t)
    }
}, function(t, e, r) {
    "use strict";
    var n = Object.prototype.hasOwnProperty,
        o = Object.prototype.toString,
        i = Array.prototype.slice,
        a = r(16),
        u = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        c = function() {}.propertyIsEnumerable("prototype"),
        s = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
        l = function(t) {
            var e = t.constructor;
            return e && e.prototype === t
        },
        f = {
            $console: !0,
            $frame: !0,
            $frameElement: !0,
            $frames: !0,
            $parent: !0,
            $self: !0,
            $webkitIndexedDB: !0,
            $webkitStorageInfo: !0,
            $window: !0
        },
        b = function() {
            if ("undefined" == typeof window) return !1;
            for (var t in window) try {
                if (!f["$" + t] && n.call(window, t) && null !== window[t] && "object" == typeof window[t]) try {
                    l(window[t])
                } catch (e) {
                    return !0
                }
            } catch (e) {
                return !0
            }
            return !1
        }(),
        y = function(t) {
            if ("undefined" == typeof window || !b) return l(t);
            try {
                return l(t)
            } catch (e) {
                return !1
            }
        },
        p = function(t) {
            var e = null !== t && "object" == typeof t,
                r = "[object Function]" === o.call(t),
                i = a(t),
                l = e && "[object String]" === o.call(t),
                f = [];
            if (!e && !r && !i) throw new TypeError("Object.keys called on a non-object");
            var b = c && r;
            if (l && t.length > 0 && !n.call(t, 0))
                for (var p = 0; p < t.length; ++p) f.push(String(p));
            if (i && t.length > 0)
                for (var d = 0; d < t.length; ++d) f.push(String(d));
            else
                for (var M in t) b && "prototype" === M || !n.call(t, M) || f.push(String(M));
            if (u)
                for (var g = y(t), h = 0; h < s.length; ++h) g && "constructor" === s[h] || !n.call(t, s[h]) || f.push(s[h]);
            return f
        };
    p.shim = function() {
        if (Object.keys) {
            var t = function() {
                return 2 === (Object.keys(arguments) || "").length
            }(1, 2);
            if (!t) {
                var e = Object.keys;
                Object.keys = function(t) {
                    return e(a(t) ? i.call(t) : t)
                }
            }
        } else Object.keys = p;
        return Object.keys || p
    }, t.exports = p
}, function(t, e) {
    "use strict";
    var r = Object.prototype.toString;
    t.exports = function(t) {
        var e = r.call(t),
            n = "[object Arguments]" === e;
        return n || (n = "[object Array]" !== e && null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && "[object Function]" === r.call(t.callee)), n
    }
}, function(t, e, r) {
    "use strict";
    var n = r(7),
        o = r(6),
        i = r(9),
        a = r(8),
        u = r(2),
        c = r(20),
        s = {
            ToPrimitive: c,
            ToBoolean: function(t) {
                return Boolean(t)
            },
            ToNumber: function(t) {
                return Number(t)
            },
            ToInteger: function(t) {
                var e = this.ToNumber(t);
                return n(e) ? 0 : 0 !== e && o(e) ? i(e) * Math.floor(Math.abs(e)) : e
            },
            ToInt32: function(t) {
                return this.ToNumber(t) >> 0
            },
            ToUint32: function(t) {
                return this.ToNumber(t) >>> 0
            },
            ToUint16: function(t) {
                var e = this.ToNumber(t);
                if (n(e) || 0 === e || !o(e)) return 0;
                var r = i(e) * Math.floor(Math.abs(e));
                return a(r, 65536)
            },
            ToString: function(t) {
                return String(t)
            },
            ToObject: function(t) {
                return this.CheckObjectCoercible(t), Object(t)
            },
            CheckObjectCoercible: function(t, e) {
                if (null == t) throw new TypeError(e || "Cannot call method on " + t);
                return t
            },
            IsCallable: u,
            SameValue: function(t, e) {
                return t === e ? 0 === t ? 1 / t === 1 / e : !0 : n(t) && n(e)
            }
        };
    t.exports = s
}, function(t, e) {
    var r = Object.prototype.hasOwnProperty;
    t.exports = Object.assign || function(t, e) {
        for (var n in e) r.call(e, n) && (t[n] = e[n]);
        return t
    }
}, function(t, e) {
    t.exports = function(t) {
        return null === t || "function" != typeof t && "object" != typeof t
    }
}, function(t, e, r) {
    "use strict";
    var n = Object.prototype.toString,
        o = r(10),
        i = r(2),
        a = {
            "[[DefaultValue]]": function(t, e) {
                var r = e || ("[object Date]" === n.call(t) ? String : Number);
                if (r === String || r === Number) {
                    var a, u, c = r === String ? ["toString", "valueOf"] : ["valueOf", "toString"];
                    for (u = 0; u < c.length; ++u)
                        if (i(t[c[u]]) && (a = t[c[u]](), o(a))) return a;
                    throw new TypeError("No default value")
                }
                throw new TypeError("invalid [[DefaultValue]] hint supplied")
            }
        };
    t.exports = function(t, e) {
        return o(t) ? t : a["[[DefaultValue]]"](t, e)
    }
}, function(t, e, r) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator,
        o = r(10),
        i = r(2),
        a = r(22),
        u = r(23),
        c = function(t, e) {
            if ("undefined" == typeof t || null === t) throw new TypeError("Cannot call method on " + t);
            if ("string" != typeof e || "number" !== e && "string" !== e) throw new TypeError('hint must be "string" or "number"');
            var r, n, a, u = "string" === e ? ["toString", "valueOf"] : ["valueOf", "toString"];
            for (a = 0; a < u.length; ++a)
                if (r = t[u[a]], i(r) && (n = r.call(t), o(n))) return n;
            throw new TypeError("No default value")
        },
        s = function(t, e) {
            var r = t[e];
            if (null !== r && "undefined" != typeof r) {
                if (!i(r)) throw new TypeError(r + " returned for property " + e + " of object " + t + " is not a function");
                return r
            }
        };
    t.exports = function(t, e) {
        if (o(t)) return t;
        var r = "default";
        arguments.length > 1 && (e === String ? r = "string" : e === Number && (r = "number"));
        var i;
        if (n && (Symbol.toPrimitive ? i = s(t, Symbol.toPrimitive) : u(t) && (i = Symbol.prototype.valueOf)), "undefined" != typeof i) {
            var l = i.call(t, r);
            if (o(l)) return l;
            throw new TypeError("unable to convert exotic object to primitive")
        }
        return "default" === r && (a(t) || u(t)) && (r = "string"), c(t, "default" === r ? "number" : r)
    }
}, function(t, e) {
    "use strict";
    var r = Date.prototype.getDay,
        n = function(t) {
            try {
                return r.call(t), !0
            } catch (e) {
                return !1
            }
        },
        o = Object.prototype.toString,
        i = "[object Date]",
        a = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
    t.exports = function(t) {
        return "object" != typeof t || null === t ? !1 : a ? n(t) : o.call(t) === i
    }
}, function(t, e) {
    "use strict";
    var r = Object.prototype.toString,
        n = "function" == typeof Symbol && "symbol" == typeof Symbol();
    if (n) {
        var o = Symbol.prototype.toString,
            i = /^Symbol\(.*\)$/,
            a = function(t) {
                return "symbol" != typeof t.valueOf() ? !1 : i.test(o.call(t))
            };
        t.exports = function(t) {
            if ("symbol" == typeof t) return !0;
            if ("[object Symbol]" !== r.call(t)) return !1;
            try {
                return a(t)
            } catch (e) {
                return !1
            }
        }
    } else t.exports = function(t) {
        return !1
    }
}, function(t, e) {
    var r = "Function.prototype.bind called on incompatible ",
        n = Array.prototype.slice,
        o = Object.prototype.toString,
        i = "[object Function]";
    t.exports = function(t) {
        var e = this;
        if ("function" != typeof e || o.call(e) !== i) throw new TypeError(r + e);
        for (var a, u = n.call(arguments, 1), c = function() {
                if (this instanceof a) {
                    var r = e.apply(this, u.concat(n.call(arguments)));
                    return Object(r) === r ? r : this
                }
                return e.apply(t, u.concat(n.call(arguments)))
            }, s = Math.max(0, e.length - u.length), l = [], f = 0; s > f; f++) l.push("$" + f);
        if (a = Function("binder", "return function (" + l.join(",") + "){ return binder.apply(this,arguments); }")(c), e.prototype) {
            var b = function() {};
            b.prototype = e.prototype, a.prototype = new b, b.prototype = null
        }
        return a
    }
}, function(t, e, r) {
    var n = r(24);
    t.exports = Function.prototype.bind || n
}, function(t, e) {
    "use strict";
    var r = RegExp.prototype.exec,
        n = function(t) {
            try {
                return r.call(t), !0
            } catch (e) {
                return !1
            }
        },
        o = Object.prototype.toString,
        i = "[object RegExp]",
        a = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
    t.exports = function(t) {
        return "object" != typeof t ? !1 : a ? n(t) : o.call(t) === i
    }
}, function(t, e, r) {
    "use strict";
    var n = r(1),
        o = r(11);
    t.exports = function() {
        var t = o();
        return n(Array, {
            from: t
        }, {
            from: function() {
                return Array.from !== t
            }
        }), t
    }
}, function(t, e) {
    "use strict";

    function r(t) {
        if ("function" == typeof Symbol) return Symbol(t);
        var e = Math.random().toString(36).substr(2, 8);
        return t + e
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e["default"] = r
}, function(t, e, r) {
    "use strict";

    function n(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e["default"] = t, e
    }

    function o(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, r, n) {
                return r && t(e.prototype, r), n && t(e, n), e
            }
        }(),
        u = r(13),
        c = r(3),
        s = o(c),
        l = (r(35), r(28)),
        f = o(l),
        b = r(12),
        y = o(b),
        p = r(31),
        d = o(p),
        M = r(33),
        g = o(M),
        h = r(30),
        m = n(h),
        N = r(32),
        j = o(N);
    (0, u.shim)();
    var w = function(t) {
            if (t) {
                var e = t.trim().toLowerCase();
                if ("true" === e || "1" === e) return !0;
                if ("false" === e || "0" === e) return !1
            }
            return t
        },
        x = function(t, e) {
            if (!e) return t;
            var r = {};
            return Object.keys(t).forEach(function(t) {
                var n = "data-" + t;
                if (e.hasAttribute(n)) {
                    var o = e.getAttribute(n);
                    r[t] = o
                }
            }), (0, s["default"])({}, t, r)
        },
        L = 32,
        T = 13,
        v = function(t, e) {
            t = (0, m["default"])(t);
            var r = function(t) {
                if ("click" === t.type || "keydown" === t.type && (t.keyCode === L || t.keyCode === T)) {
                    for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), o = 1; r > o; o++) n[o - 1] = arguments[o];
                    e.call.apply(e, [this, t].concat(n))
                }
            };
            return m.on(t, "click keydown", r),
                function() {
                    m.off(t, "click keydown", r)
                }
        },
        E = function() {
            var t = new d["default"],
                e = t.createElement("style");
            return e.innerHTML = g["default"], m.prependElementTo(e, (0, m["default"])("head")[0]), t
        },
        D = function(t) {
            var e = new d["default"],
                r = t.targetElement;
            return r.forEach(function(r) {
                var n = x(t, r);
                if (n.room) {
                    var o = e.createElement("iframe");
                    o.setAttribute("frameborder", "0"), o.src = "" + t.host + n.room + "/~embed", r.appendChild(o)
                } else console.error("Gitter Sidecar: No room specified for targetElement", r)
            }), e
        },
        S = function(t) {
            var e = t.options,
                r = new d["default"];
            return e.targetElement.forEach(function(n) {
                var o = r.createElement("div");
                o.classList.add("gitter-chat-embed-action-bar"), n.insertBefore(o, n.firstChild);
                var i = r.createElement("a");
                i.classList.add("gitter-chat-embed-action-bar-item"), i.classList.add("gitter-chat-embed-action-bar-item-pop-out"), i.setAttribute("aria-label", "Open Chat in Gitter.im"), i.setAttribute("href", "" + e.host + e.room), i.setAttribute("target", "_blank"), o.appendChild(i);
                var a = r.createElement("button");
                a.classList.add("gitter-chat-embed-action-bar-item"), a.classList.add("gitter-chat-embed-action-bar-item-collapse-chat"), a.setAttribute("aria-label", "Collapse Gitter Chat"), v(a, function(e) {
                    t.toggleChat(!1), e.preventDefault()
                }), o.appendChild(a)
            }), r
        },
        z = document.body || document.documentElement,
        O = {
            room: void 0,
            targetElement: void 0,
            activationElement: void 0,
            showChatByDefault: !1,
            preload: !1,
            useStyles: !0,
            layout: "fixed",
            host: "https://gitter.im/"
        },
        A = (0, f["default"])("DEFAULTS"),
        I = (0, f["default"])("OPTIONS"),
        C = (0, f["default"])("ELEMENTSTORE"),
        k = (0, f["default"])("EVENTHANDLESTORE"),
        U = (0, f["default"])("INIT"),
        _ = (0, f["default"])("ISEMBEDDED"),
        Y = (0, f["default"])("EMBEDCHATONCE"),
        Q = (0, f["default"])("TOGGLETARGETELEMENTS"),
        P = function() {
            function t() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                i(this, t), this[C] = new d["default"], this[k] = [], this[A] = (0, s["default"])({}, O), this[I] = (0, s["default"])({}, this[A], e), this[U]()
            }
            return a(t, [{
                key: U,
                value: function() {
                    var t = this,
                        e = this[I];
                    e.useStyles && this[C].add(E()), e.targetElement = (0, m["default"])(e.targetElement || function() {
                        var e = t[C].createElement("aside");
                        return e.classList.add("gitter-chat-embed"), e.classList.add("is-collapsed"), z.appendChild(e), e
                    }()), e.targetElement.forEach(function(e) {
                        var r = t[C].createElement("div");
                        r.classList.add("gitter-chat-embed-loading-wrapper"), r.innerHTML = '\n        <div class="gitter-chat-embed-loading-indicator gitter-icon"></div>\n      ', e.insertBefore(r, e.firstChild)
                    }), S(this), e.preload && this.toggleChat(!1), e.showChatByDefault ? this.toggleChat(!0) : (void 0 === e.activationElement || e.activationElement === !0 ? e.activationElement = (0, m["default"])(function() {
                        var r = t[C].createElement("a");
                        return r.href = "" + e.host + e.room, r.innerHTML = "Open Chat", r.classList.add("gitter-open-chat-button"), z.appendChild(r), r
                    }()) : e.activationElement && (e.activationElement = (0, m["default"])(e.activationElement)), e.activationElement && (v(e.activationElement, function(e) {
                        t.toggleChat(!0), e.preventDefault()
                    }), e.targetElement.forEach(function(t) {
                        m.on(t, "gitter-chat-toggle", function(t) {
                            var r = t.detail.state;
                            e.activationElement.forEach(function(t) {
                                m.toggleClass(t, "is-collapsed", r)
                            })
                        })
                    })));
                    var r = v((0, m["default"])(".js-gitter-toggle-chat-button"), function(e) {
                        var r = w(e.target.getAttribute("data-gitter-toggle-chat-state"));
                        t.toggleChat(null !== r ? r : "toggle"), e.preventDefault()
                    });
                    this[k].push(r), e.targetElement.forEach(function(e) {
                        var r = new y["default"]("gitter-chat-started", {
                            detail: {
                                chat: t
                            }
                        });
                        e.dispatchEvent(r)
                    });
                    var n = new y["default"]("gitter-sidecar-instance-started", {
                        detail: {
                            chat: this
                        }
                    });
                    document.dispatchEvent(n)
                }
            }, {
                key: Y,
                value: function() {
                    if (!this[_]) {
                        var t = this[I],
                            e = D(t);
                        this[C].add(e)
                    }
                    this[_] = !0
                }
            }, {
                key: Q,
                value: function(t) {
                    var e = this[I];
                    e.targetElement || console.warn("Gitter Sidecar: No chat embed elements to toggle visibility on");
                    var r = e.targetElement;
                    r.forEach(function(e) {
                        "toggle" === t ? m.toggleClass(e, "is-collapsed") : m.toggleClass(e, "is-collapsed", !t);
                        var r = new y["default"]("gitter-chat-toggle", {
                            detail: {
                                state: t
                            }
                        });
                        e.dispatchEvent(r)
                    })
                }
            }, {
                key: "toggleChat",
                value: function(t) {
                    var e = this,
                        r = this[I];
                    t && !this[_] ? ! function() {
                        var n = r.targetElement;
                        n.forEach(function(t) {
                            t.classList.add("is-loading")
                        }), setTimeout(function() {
                            e[Y](), e[Q](t), n.forEach(function(t) {
                                t.classList.remove("is-loading")
                            })
                        }, 300)
                    }() : (this[Y](), this[Q](t))
                }
            }, {
                key: "destroy",
                value: function() {
                    this[k].forEach(function(t) {
                        t()
                    }), this[C].destroy()
                }
            }, {
                key: "options",
                get: function() {
                    return (0, j["default"])(this[I])
                }
            }]), t
        }();
    e["default"] = P
}, function(t, e) {
    "use strict";

    function r(t) {
        if (Array.isArray(t)) {
            for (var e = 0, r = Array(t.length); e < t.length; e++) r[e] = t[e];
            return r
        }
        return Array.from(t)
    }

    function n(t, e) {
        return c(t).forEach(function() {
            e && e.apply(void 0, arguments)
        }), this
    }

    function o(t, e, r) {
        return e.split(/\s/).forEach(function(e) {
            n(t, function(t) {
                t.addEventListener(e, r)
            })
        }), this
    }

    function i(t, e, r) {
        return e.split(/\s/).forEach(function(e) {
            n(t, function(t) {
                t.removeEventListener(e, r)
            })
        }), this
    }

    function a(t, e) {
        var r = (e.children || [])[0];
        r ? e.insertBefore(t, r) : e.appendChild(t)
    }

    function u(t, e, r) {
        return void 0 !== r ? r ? t.classList.add(e) : t.classList.remove(e) : t.classList.toggle(e), r
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.forEach = n, e.on = o, e.off = i, e.prependElementTo = a, e.toggleClass = u;
    var c = function() {
            for (var t = arguments.length, e = Array(t), r = 0; t > r; r++) e[r] = arguments[r];
            return e.reduce(function(t, e) {
                return !e || void 0 === e.length || Array.isArray(e) || window && (!window || e instanceof window.constructor) || (e = Array.prototype.slice.call(e)), t.concat(e)
            }, [])
        },
        s = function() {
            for (var t = arguments.length, e = Array(t), n = 0; t > n; n++) e[n] = arguments[n];
            var o = e;
            if ("string" == typeof e[0]) {
                var i;
                o = (i = document.querySelectorAll).call.apply(i, [document].concat(e))
            }
            return c.apply(void 0, r(o))
        },
        l = function() {
            return s.apply(void 0, arguments)
        };
    e["default"] = l
}, function(t, e, r) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function() {
            function t(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, r, n) {
                return r && t(e.prototype, r), n && t(e, n), e
            }
        }(),
        a = r(3),
        u = (n(a), function(t) {
            t && t.parentElement.removeChild(t)
        }),
        c = function() {
            function t() {
                o(this, t), this.elements = []
            }
            return i(t, [{
                key: "createElement",
                value: function() {
                    for (var t = arguments.length, e = Array(t), r = 0; t > r; r++) e[r] = arguments[r];
                    var n = document.createElement.apply(document, e);
                    return this.add(n), n
                }
            }, {
                key: "add",
                value: function() {
                    for (var e = arguments.length, r = Array(e), n = 0; e > n; n++) r[n] = arguments[n];
                    var o = [].concat(r).reduce(function(e, r) {
                        return r ? r instanceof t ? e.concat(r.elements) : e.concat(r) : e
                    }, []);
                    this.elements = this.elements.concat(o)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.elements.forEach(function(t) {
                        return u(t)
                    }), this.elements = []
                }
            }]), t
        }();
    e["default"] = c
}, function(t, e) {
    "use strict";

    function r(t) {
        var e = {};
        return Object.keys(t).forEach(function(r) {
            Object.defineProperty(e, r, {
                value: t[r],
                writable: !1,
                configurable: !1
            })
        }), e
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e["default"] = r
}, function(t, e, r) {
    e = t.exports = r(34)(), e.push([t.id, ".gitter-hidden{box-sizing:border-box;display:none}.gitter-icon{box-sizing:border-box;width:22px;height:22px;fill:currentColor}.gitter-chat-embed{box-sizing:border-box;z-index:100;position:fixed;top:0;left:60%;bottom:0;right:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;background-color:#fff;border-left:1px solid #333;box-shadow:-12px 0 18px 0 rgba(50,50,50,.3);-webkit-transition:-webkit-transform .3s cubic-bezier(.16,.22,.22,1.7);transition:-webkit-transform .3s cubic-bezier(.16,.22,.22,1.7);transition:transform .3s cubic-bezier(.16,.22,.22,1.7);transition:transform .3s cubic-bezier(.16,.22,.22,1.7),-webkit-transform .3s cubic-bezier(.16,.22,.22,1.7)}@context border-box{.gitter-chat-embed{box-sizing:border-box;background-color:#fff}}.gitter-chat-embed.is-collapsed:not(.is-loading){box-sizing:border-box;-webkit-transform:translateX(110%);transform:translateX(110%)}.gitter-chat-embed:after{box-sizing:border-box;content:'';z-index:-1;position:absolute;top:0;left:100%;bottom:0;right:-100%;background-color:#fff}@context border-box{.gitter-chat-embed:after{box-sizing:border-box;background-color:#fff}}@media(max-width:1150px){.gitter-chat-embed{box-sizing:border-box;left:45%}}@media(max-width:944px){.gitter-chat-embed{box-sizing:border-box;left:30%}}@media(max-width:600px){.gitter-chat-embed{box-sizing:border-box;left:15%}}@media(max-width:500px){.gitter-chat-embed{box-sizing:border-box;left:0;border-left:none}}.gitter-chat-embed>iframe{box-sizing:border-box;-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%;height:100%;border:0}.gitter-chat-embed-loading-wrapper{box-sizing:border-box;position:absolute;top:0;left:0;bottom:0;right:0;display:none;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;-ms-grid-row-align:center;align-items:center}.is-loading .gitter-chat-embed-loading-wrapper{box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex}.gitter-chat-embed-loading-indicator{box-sizing:border-box;opacity:.75;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNzkyIDE3OTIiIGZpbGw9IiMzYTMxMzMiPjxwYXRoIGQ9Ik01MjYgMTM5NHEwIDUzLTM3LjUgOTAuNXQtOTAuNSAzNy41cS01MiAwLTkwLTM4dC0zOC05MHEwLTUzIDM3LjUtOTAuNXQ5MC41LTM3LjUgOTAuNSAzNy41IDM3LjUgOTAuNXptNDk4IDIwNnEwIDUzLTM3LjUgOTAuNXQtOTAuNSAzNy41LTkwLjUtMzcuNS0zNy41LTkwLjUgMzcuNS05MC41IDkwLjUtMzcuNSA5MC41IDM3LjUgMzcuNSA5MC41em0tNzA0LTcwNHEwIDUzLTM3LjUgOTAuNXQtOTAuNSAzNy41LTkwLjUtMzcuNS0zNy41LTkwLjUgMzcuNS05MC41IDkwLjUtMzcuNSA5MC41IDM3LjUgMzcuNSA5MC41em0xMjAyIDQ5OHEwIDUyLTM4IDkwdC05MCAzOHEtNTMgMC05MC41LTM3LjV0LTM3LjUtOTAuNSAzNy41LTkwLjUgOTAuNS0zNy41IDkwLjUgMzcuNSAzNy41IDkwLjV6bS05NjQtOTk2cTAgNjYtNDcgMTEzdC0xMTMgNDctMTEzLTQ3LTQ3LTExMyA0Ny0xMTMgMTEzLTQ3IDExMyA0NyA0NyAxMTN6bTExNzAgNDk4cTAgNTMtMzcuNSA5MC41dC05MC41IDM3LjUtOTAuNS0zNy41LTM3LjUtOTAuNSAzNy41LTkwLjUgOTAuNS0zNy41IDkwLjUgMzcuNSAzNy41IDkwLjV6bS02NDAtNzA0cTAgODAtNTYgMTM2dC0xMzYgNTYtMTM2LTU2LTU2LTEzNiA1Ni0xMzYgMTM2LTU2IDEzNiA1NiA1NiAxMzZ6bTUzMCAyMDZxMCA5My02NiAxNTguNXQtMTU4IDY1LjVxLTkzIDAtMTU4LjUtNjUuNXQtNjUuNS0xNTguNXEwLTkyIDY1LjUtMTU4dDE1OC41LTY2cTkyIDAgMTU4IDY2dDY2IDE1OHoiLz48L3N2Zz4=);-webkit-animation:spin 2s infinite linear;animation:spin 2s infinite linear}@-webkit-keyframes spin{0%{box-sizing:border-box;-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{box-sizing:border-box;-webkit-transform:rotate(359.9deg);transform:rotate(359.9deg)}}@keyframes spin{0%{box-sizing:border-box;-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{box-sizing:border-box;-webkit-transform:rotate(359.9deg);transform:rotate(359.9deg)}}.gitter-chat-embed-action-bar{position:absolute;top:0;left:0;right:0;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;padding-bottom:.7em;background:-webkit-linear-gradient(top,#fff,#fff 50%,hsla(0,0%,100%,0));background:linear-gradient(180deg,#fff 0,#fff 50%,hsla(0,0%,100%,0))}.gitter-chat-embed-action-bar,.gitter-chat-embed-action-bar-item{box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex}.gitter-chat-embed-action-bar-item{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:40px;height:40px;padding-left:0;padding-right:0;opacity:.65;background:none;background-position:50%;background-repeat:no-repeat;background-size:22px 22px;border:0;outline:none;cursor:pointer;cursor:hand;-webkit-transition:all .2s ease;transition:all .2s ease}.gitter-chat-embed-action-bar-item:focus,.gitter-chat-embed-action-bar-item:hover{box-sizing:border-box;opacity:1}.gitter-chat-embed-action-bar-item:active{box-sizing:border-box;-webkit-filter:hue-rotate(80deg) saturate(150);filter:hue-rotate(80deg) saturate(150)}.gitter-chat-embed-action-bar-item-pop-out{box-sizing:border-box;margin-right:-4px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMTcxLjQyOSIgZmlsbD0iIzNhMzEzMyI+PHBhdGggZD0iTTE1Ny4xNDMsMTAzLjU3MXYzNS43MTRjMCw4Ljg1NC0zLjE0NCwxNi40MjYtOS40MzEsMjIuNzEzcy0xMy44NTgsOS40MzEtMjIuNzEyLDkuNDMxSDMyLjE0MyBjLTguODU0LDAtMTYuNDI1LTMuMTQ0LTIyLjcxMi05LjQzMVMwLDE0OC4xNCwwLDEzOS4yODVWNDYuNDI5YzAtOC44NTQsMy4xNDQtMTYuNDI1LDkuNDMxLTIyLjcxMiBjNi4yODctNi4yODcsMTMuODU4LTkuNDMxLDIyLjcxMi05LjQzMWg3OC41NzJjMS4wNDEsMCwxLjg5NiwwLjMzNSwyLjU2NiwxLjAwNGMwLjY3LDAuNjcsMS4wMDQsMS41MjUsMS4wMDQsMi41NjdWMjUgYzAsMS4wNDItMC4zMzQsMS44OTctMS4wMDQsMi41NjdjLTAuNjcsMC42Ny0xLjUyNSwxLjAwNC0yLjU2NiwxLjAwNEgzMi4xNDNjLTQuOTExLDAtOS4xMTUsMS43NDktMTIuNjEyLDUuMjQ2IHMtNS4yNDYsNy43MDEtNS4yNDYsMTIuNjEydjkyLjg1NmMwLDQuOTExLDEuNzQ5LDkuMTE1LDUuMjQ2LDEyLjYxMnM3LjcwMSw1LjI0NSwxMi42MTIsNS4yNDVIMTI1YzQuOTEsMCw5LjExNS0xLjc0OCwxMi42MTEtNS4yNDUgYzMuNDk3LTMuNDk3LDUuMjQ2LTcuNzAxLDUuMjQ2LTEyLjYxMnYtMzUuNzE0YzAtMS4wNDIsMC4zMzQtMS44OTcsMS4wMDQtMi41NjdjMC42Ny0wLjY2OSwxLjUyNS0xLjAwNCwyLjU2Ny0xLjAwNGg3LjE0MyBjMS4wNDIsMCwxLjg5NywwLjMzNSwyLjU2NywxLjAwNEMxNTYuODA5LDEwMS42NzQsMTU3LjE0MywxMDIuNTI5LDE1Ny4xNDMsMTAzLjU3MXogTTIwMCw3LjE0M3Y1Ny4xNDMgYzAsMS45MzUtMC43MDcsMy42MDktMi4xMjEsNS4wMjJjLTEuNDEzLDEuNDE0LTMuMDg4LDIuMTIxLTUuMDIxLDIuMTIxYy0xLjkzNSwwLTMuNjA5LTAuNzA3LTUuMDIyLTIuMTIxbC0xOS42NDQtMTkuNjQzIGwtNzIuNzY3LDcyLjc2OWMtMC43NDQsMC43NDQtMS42LDEuMTE1LTIuNTY3LDEuMTE1cy0xLjgyMy0wLjM3MS0yLjU2Ny0xLjExNUw3Ny41NjcsMTA5LjcxYy0wLjc0NC0wLjc0NC0xLjExNi0xLjYtMS4xMTYtMi41NjcgYzAtMC45NjcsMC4zNzItMS44MjIsMS4xMTYtMi41NjZsNzIuNzY4LTcyLjc2OGwtMTkuNjQ0LTE5LjY0M2MtMS40MTMtMS40MTQtMi4xMi0zLjA4OC0yLjEyLTUuMDIyYzAtMS45MzUsMC43MDctMy42MDksMi4xMi01LjAyMiBDMTMyLjEwNSwwLjcwNywxMzMuNzc5LDAsMTM1LjcxNSwwaDU3LjE0M2MxLjkzNCwwLDMuNjA4LDAuNzA3LDUuMDIxLDIuMTIxQzE5OS4yOTMsMy41MzQsMjAwLDUuMjA4LDIwMCw3LjE0M3oiLz48L3N2Zz4=)}.gitter-chat-embed-action-bar-item-collapse-chat{box-sizing:border-box;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNzEuNDI5IDE3MS40MjkiIGZpbGw9IiMzYTMxMzMiPjxwYXRoIGQ9Ik0xMjIuNDMzLDEwNi4xMzhsLTE2LjI5NSwxNi4yOTVjLTAuNzQ0LDAuNzQ0LTEuNiwxLjExNi0yLjU2NiwxLjExNmMtMC45NjgsMC0xLjgyMy0wLjM3Mi0yLjU2Ny0xLjExNmwtMTUuMjktMTUuMjkgbC0xNS4yOSwxNS4yOWMtMC43NDQsMC43NDQtMS42LDEuMTE2LTIuNTY3LDEuMTE2cy0xLjgyMy0wLjM3Mi0yLjU2Ny0xLjExNmwtMTYuMjk0LTE2LjI5NWMtMC43NDQtMC43NDQtMS4xMTYtMS42LTEuMTE2LTIuNTY2IGMwLTAuOTY4LDAuMzcyLTEuODIzLDEuMTE2LTIuNTY3bDE1LjI5LTE1LjI5bC0xNS4yOS0xNS4yOWMtMC43NDQtMC43NDQtMS4xMTYtMS42LTEuMTE2LTIuNTY3czAuMzcyLTEuODIzLDEuMTE2LTIuNTY3IEw2NS4yOSw0OC45OTZjMC43NDQtMC43NDQsMS42LTEuMTE2LDIuNTY3LTEuMTE2czEuODIzLDAuMzcyLDIuNTY3LDEuMTE2bDE1LjI5LDE1LjI5bDE1LjI5LTE1LjI5IGMwLjc0NC0wLjc0NCwxLjYtMS4xMTYsMi41NjctMS4xMTZjMC45NjcsMCwxLjgyMiwwLjM3MiwyLjU2NiwxLjExNmwxNi4yOTUsMTYuMjk0YzAuNzQ0LDAuNzQ0LDEuMTE2LDEuNiwxLjExNiwyLjU2NyBzLTAuMzcyLDEuODIzLTEuMTE2LDIuNTY3bC0xNS4yOSwxNS4yOWwxNS4yOSwxNS4yOWMwLjc0NCwwLjc0NCwxLjExNiwxLjYsMS4xMTYsMi41NjcgQzEyMy41NDksMTA0LjUzOSwxMjMuMTc3LDEwNS4zOTQsMTIyLjQzMywxMDYuMTM4eiBNMTQ2LjQyOSw4NS43MTRjMC0xMS4wMTItMi43MTctMjEuMTY4LTguMTQ4LTMwLjQ2OSBzLTEyLjc5Ny0xNi42NjctMjIuMDk4LTIyLjA5OFM5Ni43MjYsMjUsODUuNzE0LDI1cy0yMS4xNjgsMi43MTYtMzAuNDY5LDguMTQ3UzM4LjU3OSw0NS45NDUsMzMuMTQ3LDU1LjI0NlMyNSw3NC43MDMsMjUsODUuNzE0IHMyLjcxNiwyMS4xNjgsOC4xNDcsMzAuNDY5czEyLjc5NywxNi42NjYsMjIuMDk4LDIyLjA5OHMxOS40NTcsOC4xNDgsMzAuNDY5LDguMTQ4czIxLjE2OC0yLjcxNywzMC40NjktOC4xNDggczE2LjY2Ni0xMi43OTcsMjIuMDk4LTIyLjA5OFMxNDYuNDI5LDk2LjcyNiwxNDYuNDI5LDg1LjcxNHogTTE3MS40MjksODUuNzE0YzAsMTUuNTUxLTMuODMyLDI5Ljg5My0xMS40OTYsNDMuMDI0IGMtNy42NjQsMTMuMTMzLTE4LjA2MiwyMy41My0zMS4xOTQsMzEuMTk0Yy0xMy4xMzIsNy42NjQtMjcuNDc0LDExLjQ5Ni00My4wMjQsMTEuNDk2cy0yOS44OTItMy44MzItNDMuMDI0LTExLjQ5NiBjLTEzLjEzMy03LjY2NC0yMy41MzEtMTguMDYyLTMxLjE5NC0zMS4xOTRDMy44MzIsMTE1LjYwNywwLDEwMS4yNjUsMCw4NS43MTRTMy44MzIsNTUuODIyLDExLjQ5Niw0Mi42OSBjNy42NjQtMTMuMTMzLDE4LjA2Mi0yMy41MzEsMzEuMTk0LTMxLjE5NEM1NS44MjIsMy44MzIsNzAuMTY0LDAsODUuNzE0LDBzMjkuODkzLDMuODMyLDQzLjAyNCwxMS40OTYgYzEzLjEzMyw3LjY2NCwyMy41MywxOC4wNjIsMzEuMTk0LDMxLjE5NEMxNjcuNTk3LDU1LjgyMiwxNzEuNDI5LDcwLjE2NCwxNzEuNDI5LDg1LjcxNHoiLz48L3N2Zz4=)}.gitter-open-chat-button{z-index:100;position:fixed;bottom:0;right:10px;padding:1em 3em;background-color:#36bc98;border:0;border-top-left-radius:.5em;border-top-right-radius:.5em;font-family:sans-serif;font-size:12px;letter-spacing:1px;text-transform:uppercase;text-align:center;text-decoration:none;cursor:pointer;cursor:hand;-webkit-transition:all .3s ease;transition:all .3s ease}.gitter-open-chat-button,.gitter-open-chat-button:visited{box-sizing:border-box;color:#fff}.gitter-open-chat-button:focus,.gitter-open-chat-button:hover{box-sizing:border-box;background-color:#3ea07f;color:#fff}.gitter-open-chat-button:focus{box-sizing:border-box;box-shadow:0 0 8px rgba(62,160,127,.6);outline:none}.gitter-open-chat-button:active{box-sizing:border-box;color:#eee}.gitter-open-chat-button.is-collapsed{box-sizing:border-box;-webkit-transform:translateY(120%);transform:translateY(120%)}", ""])
}, function(t, e) {
    t.exports = function() {
        var t = [];
        return t.toString = function() {
            for (var t = [], e = 0; e < this.length; e++) {
                var r = this[e];
                r[2] ? t.push("@media " + r[2] + "{" + r[1] + "}") : t.push(r[1])
            }
            return t.join("")
        }, t.i = function(e, r) {
            "string" == typeof e && (e = [
                [null, e, ""]
            ]);
            for (var n = {}, o = 0; o < this.length; o++) {
                var i = this[o][0];
                "number" == typeof i && (n[i] = !0)
            }
            for (o = 0; o < e.length; o++) {
                var a = e[o];
                "number" == typeof a[0] && n[a[0]] || (r && !a[2] ? a[2] = r : r && (a[2] = "(" + a[2] + ") and (" + r + ")"), t.push(a))
            }
        }, t
    }
}, function(t, e, r) {
    var n;
    (function(t, o, i) {
        /*
		 * ! @overview es6-promise - a tiny implementation of Promises/A+.
		 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner
		 * and contributors (Conversion to ES6 API by Jake Archibald) @license
		 * Licensed under MIT license See
		 * https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
		 * 
		 * @version 3.2.1
		 */
        (function() {
            "use strict";

            function a(t) {
                return "function" == typeof t || "object" == typeof t && null !== t
            }

            function u(t) {
                return "function" == typeof t
            }

            function c(t) {
                W = t
            }

            function s(t) {
                tt = t
            }

            function l() {
                return function() {
                    t.nextTick(d)
                }
            }

            function f() {
                return function() {
                    V(d)
                }
            }

            function b() {
                var t = 0,
                    e = new nt(d),
                    r = document.createTextNode("");
                return e.observe(r, {
                        characterData: !0
                    }),
                    function() {
                        r.data = t = ++t % 2
                    }
            }

            function y() {
                var t = new MessageChannel;
                return t.port1.onmessage = d,
                    function() {
                        t.port2.postMessage(0)
                    }
            }

            function p() {
                return function() {
                    setTimeout(d, 1)
                }
            }

            function d() {
                for (var t = 0; J > t; t += 2) {
                    var e = at[t],
                        r = at[t + 1];
                    e(r), at[t] = void 0, at[t + 1] = void 0
                }
                J = 0
            }

            function M() {
                try {
                    var t = r(39);
                    return V = t.runOnLoop || t.runOnContext, f()
                } catch (e) {
                    return p()
                }
            }

            function g(t, e) {
                var r = this,
                    n = new this.constructor(m);
                void 0 === n[st] && Y(n);
                var o = r._state;
                if (o) {
                    var i = arguments[o - 1];
                    tt(function() {
                        k(o, n, i, r._result)
                    })
                } else O(r, n, t, e);
                return n
            }

            function h(t) {
                var e = this;
                if (t && "object" == typeof t && t.constructor === e) return t;
                var r = new e(m);
                return E(r, t), r
            }

            function m() {}

            function N() {
                return new TypeError("You cannot resolve a promise with itself")
            }

            function j() {
                return new TypeError("A promises callback cannot return that same promise.")
            }

            function w(t) {
                try {
                    return t.then
                } catch (e) {
                    return yt.error = e, yt
                }
            }

            function x(t, e, r, n) {
                try {
                    t.call(e, r, n)
                } catch (o) {
                    return o
                }
            }

            function L(t, e, r) {
                tt(function(t) {
                    var n = !1,
                        o = x(r, e, function(r) {
                            n || (n = !0, e !== r ? E(t, r) : S(t, r))
                        }, function(e) {
                            n || (n = !0, z(t, e))
                        }, "Settle: " + (t._label || " unknown promise"));
                    !n && o && (n = !0, z(t, o))
                }, t)
            }

            function T(t, e) {
                e._state === ft ? S(t, e._result) : e._state === bt ? z(t, e._result) : O(e, void 0, function(e) {
                    E(t, e)
                }, function(e) {
                    z(t, e)
                })
            }

            function v(t, e, r) {
                e.constructor === t.constructor && r === ut && constructor.resolve === ct ? T(t, e) : r === yt ? z(t, yt.error) : void 0 === r ? S(t, e) : u(r) ? L(t, e, r) : S(t, e)
            }

            function E(t, e) {
                t === e ? z(t, N()) : a(e) ? v(t, e, w(e)) : S(t, e)
            }

            function D(t) {
                t._onerror && t._onerror(t._result), A(t)
            }

            function S(t, e) {
                t._state === lt && (t._result = e, t._state = ft, 0 !== t._subscribers.length && tt(A, t))
            }

            function z(t, e) {
                t._state === lt && (t._state = bt, t._result = e, tt(D, t))
            }

            function O(t, e, r, n) {
                var o = t._subscribers,
                    i = o.length;
                t._onerror = null, o[i] = e, o[i + ft] = r, o[i + bt] = n, 0 === i && t._state && tt(A, t)
            }

            function A(t) {
                var e = t._subscribers,
                    r = t._state;
                if (0 !== e.length) {
                    for (var n, o, i = t._result, a = 0; a < e.length; a += 3) n = e[a], o = e[a + r], n ? k(r, n, o, i) : o(i);
                    t._subscribers.length = 0
                }
            }

            function I() {
                this.error = null
            }

            function C(t, e) {
                try {
                    return t(e)
                } catch (r) {
                    return pt.error = r, pt
                }
            }

            function k(t, e, r, n) {
                var o, i, a, c, s = u(r);
                if (s) {
                    if (o = C(r, n), o === pt ? (c = !0, i = o.error, o = null) : a = !0, e === o) return void z(e, j())
                } else o = n, a = !0;
                e._state !== lt || (s && a ? E(e, o) : c ? z(e, i) : t === ft ? S(e, o) : t === bt && z(e, o))
            }

            function U(t, e) {
                try {
                    e(function(e) {
                        E(t, e)
                    }, function(e) {
                        z(t, e)
                    })
                } catch (r) {
                    z(t, r)
                }
            }

            function _() {
                return dt++
            }

            function Y(t) {
                t[st] = dt++, t._state = void 0, t._result = void 0, t._subscribers = []
            }

            function Q(t) {
                return new Nt(this, t).promise
            }

            function P(t) {
                var e = this;
                return new e(K(t) ? function(r, n) {
                    for (var o = t.length, i = 0; o > i; i++) e.resolve(t[i]).then(r, n)
                } : function(t, e) {
                    e(new TypeError("You must pass an array to race."))
                })
            }

            function B(t) {
                var e = this,
                    r = new e(m);
                return z(r, t), r
            }

            function H() {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
            }

            function F() {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
            }

            function R(t) {
                this[st] = _(), this._result = this._state = void 0, this._subscribers = [], m !== t && ("function" != typeof t && H(), this instanceof R ? U(this, t) : F())
            }

            function G(t, e) {
                this._instanceConstructor = t, this.promise = new t(m), this.promise[st] || Y(this.promise), K(e) ? (this._input = e, this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? S(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && S(this.promise, this._result))) : z(this.promise, Z())
            }

            function Z() {
                return new Error("Array Methods must be provided an Array")
            }

            function X() {
                var t;
                if ("undefined" != typeof o) t = o;
                else if ("undefined" != typeof self) t = self;
                else try {
                    t = Function("return this")()
                } catch (e) {
                    throw new Error("polyfill failed because global object is unavailable in this environment")
                }
                var r = t.Promise;
                r && "[object Promise]" === Object.prototype.toString.call(r.resolve()) && !r.cast || (t.Promise = mt)
            }
            var $;
            $ = Array.isArray ? Array.isArray : function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            };
            var V, W, q, K = $,
                J = 0,
                tt = function(t, e) {
                    at[J] = t, at[J + 1] = e, J += 2, 2 === J && (W ? W(d) : q())
                },
                et = "undefined" != typeof window ? window : void 0,
                rt = et || {},
                nt = rt.MutationObserver || rt.WebKitMutationObserver,
                ot = "undefined" == typeof self && "undefined" != typeof t && "[object process]" === {}.toString.call(t),
                it = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                at = new Array(1e3);
            q = ot ? l() : nt ? b() : it ? y() : void 0 === et ? M() : p();
            var ut = g,
                ct = h,
                st = Math.random().toString(36).substring(16),
                lt = void 0,
                ft = 1,
                bt = 2,
                yt = new I,
                pt = new I,
                dt = 0,
                Mt = Q,
                gt = P,
                ht = B,
                mt = R;
            R.all = Mt, R.race = gt, R.resolve = ct, R.reject = ht, R._setScheduler = c, R._setAsap = s, R._asap = tt, R.prototype = {
                constructor: R,
                then: ut,
                "catch": function(t) {
                    return this.then(null, t)
                }
            };
            var Nt = G;
            G.prototype._enumerate = function() {
                for (var t = this.length, e = this._input, r = 0; this._state === lt && t > r; r++) this._eachEntry(e[r], r)
            }, G.prototype._eachEntry = function(t, e) {
                var r = this._instanceConstructor,
                    n = r.resolve;
                if (n === ct) {
                    var o = w(t);
                    if (o === ut && t._state !== lt) this._settledAt(t._state, e, t._result);
                    else if ("function" != typeof o) this._remaining--, this._result[e] = t;
                    else if (r === mt) {
                        var i = new r(m);
                        v(i, t, o), this._willSettleAt(i, e)
                    } else this._willSettleAt(new r(function(e) {
                        e(t)
                    }), e)
                } else this._willSettleAt(n(t), e)
            }, G.prototype._settledAt = function(t, e, r) {
                var n = this.promise;
                n._state === lt && (this._remaining--, t === bt ? z(n, r) : this._result[e] = r), 0 === this._remaining && S(n, this._result)
            }, G.prototype._willSettleAt = function(t, e) {
                var r = this;
                O(t, void 0, function(t) {
                    r._settledAt(ft, e, t)
                }, function(t) {
                    r._settledAt(bt, e, t)
                })
            };
            var jt = X,
                wt = {
                    Promise: mt,
                    polyfill: jt
                };
            r(36).amd ? (n = function() {
                return wt
            }.call(e, r, e, i), !(void 0 !== n && (i.exports = n))) : "undefined" != typeof i && i.exports ? i.exports = wt : "undefined" != typeof this && (this.ES6Promise = wt), jt()
        }).call(this)
    }).call(e, r(38), function() {
        return this
    }(), r(37)(t))
}, function(t, e) {
    t.exports = function() {
        throw new Error("define cannot be used indirect")
    }
}, function(t, e) {
    t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children = [], t.webpackPolyfill = 1), t
    }
}, function(t, e) {
    function r() {
        s && a && (s = !1, a.length ? c = a.concat(c) : l = -1, c.length && n())
    }

    function n() {
        if (!s) {
            var t = setTimeout(r);
            s = !0;
            for (var e = c.length; e;) {
                for (a = c, c = []; ++l < e;) a && a[l].run();
                l = -1, e = c.length
            }
            a = null, s = !1, clearTimeout(t)
        }
    }

    function o(t, e) {
        this.fun = t, this.array = e
    }

    function i() {}
    var a, u = t.exports = {},
        c = [],
        s = !1,
        l = -1;
    u.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        c.push(new o(t, e)), 1 !== c.length || s || setTimeout(n, 0)
    }, o.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, u.title = "browser", u.browser = !0, u.env = {}, u.argv = [], u.version = "", u.versions = {}, u.on = i, u.addListener = i, u.once = i, u.off = i, u.removeListener = i, u.removeAllListeners = i, u.emit = i, u.binding = function(t) {
        throw new Error("process.binding is not supported")
    }, u.cwd = function() {
        return "/"
    }, u.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }, u.umask = function() {
        return 0
    }
}, function(t, e) {}]);
// # sourceMappingURL=sidecar.js.map
