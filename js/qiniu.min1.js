!function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.qiniu = e() : t.qiniu = e()
}("undefined" != typeof self ? self : this, function () {
    return function (t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {i: r, l: !1, exports: {}};
            return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
        }

        var n = {};
        return e.m = t, e.c = n, e.d = function (t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {configurable: !1, enumerable: !0, get: r})
        }, e.n = function (t) {
            var n = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "/dist/", e(e.s = 58)
    }([function (t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }, function (t, e) {
        var n = t.exports = {version: "2.5.7"};
        "number" == typeof __e && (__e = n)
    }, function (t, e, n) {
        var r = n(30)("wks"), o = n(20), i = n(0).Symbol, u = "function" == typeof i;
        (t.exports = function (t) {
            return r[t] || (r[t] = u && i[t] || (u ? i : o)("Symbol." + t))
        }).store = r
    }, function (t, e, n) {
        var r = n(7);
        t.exports = function (t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t
        }
    }, function (t, e, n) {
        var r = n(0), o = n(1), i = n(17), u = n(5), s = n(9), a = function (t, e, n) {
            var c, f, l, p = t & a.F, h = t & a.G, d = t & a.S, v = t & a.P, y = t & a.B, m = t & a.W,
                g = h ? o : o[e] || (o[e] = {}), b = g.prototype, _ = h ? r : d ? r[e] : (r[e] || {}).prototype;
            for (c in h && (n = e), n) (f = !p && _ && void 0 !== _[c]) && s(g, c) || (l = f ? _[c] : n[c], g[c] = h && "function" != typeof _[c] ? n[c] : y && f ? i(l, r) : m && _[c] == l ? function (t) {
                var e = function (e, n, r) {
                    if (this instanceof t) {
                        switch (arguments.length) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(e);
                            case 2:
                                return new t(e, n)
                        }
                        return new t(e, n, r)
                    }
                    return t.apply(this, arguments)
                };
                return e.prototype = t.prototype, e
            }(l) : v && "function" == typeof l ? i(Function.call, l) : l, v && ((g.virtual || (g.virtual = {}))[c] = l, t & a.R && b && !b[c] && u(b, c, l)))
        };
        a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, t.exports = a
    }, function (t, e, n) {
        var r = n(6), o = n(19);
        t.exports = n(8) ? function (t, e, n) {
            return r.f(t, e, o(1, n))
        } : function (t, e, n) {
            return t[e] = n, t
        }
    }, function (t, e, n) {
        var r = n(3), o = n(41), i = n(28), u = Object.defineProperty;
        e.f = n(8) ? Object.defineProperty : function (t, e, n) {
            if (r(t), e = i(e, !0), r(n), o) try {
                return u(t, e, n)
            } catch (t) {
            }
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value), t
        }
    }, function (t, e) {
        t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }, function (t, e, n) {
        t.exports = !n(10)(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, function (t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function (t, e) {
            return n.call(t, e)
        }
    }, function (t, e) {
        t.exports = function (t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }, function (t, e, n) {
        var r = n(45), o = n(26);
        t.exports = function (t) {
            return r(o(t))
        }
    }, function (t, e) {
        t.exports = !0
    }, function (t, e) {
        t.exports = {}
    }, function (t, e, n) {
        var r = n(44), o = n(31);
        t.exports = Object.keys || function (t) {
            return r(t, o)
        }
    }, function (t, e) {
        var n = {}.toString;
        t.exports = function (t) {
            return n.call(t).slice(8, -1)
        }
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function o(t) {
            return (0, d.default)(t).filter(function (t) {
                return t.startsWith("x:")
            }).map(function (e) {
                return [e, t[e].toString()]
            })
        }

        function i(t) {
            return "qiniu_js_sdk_upload_file_" + t.name + "_size_" + t.size
        }

        function u(t) {
            return {Authorization: "UpToken " + t}
        }

        function s() {
            return window.XMLHttpRequest ? new XMLHttpRequest : new window.ActiveXObject("Microsoft.XMLHTTP")
        }

        function a(t) {
            return new l.default(function (e, n) {
                var r = new FileReader;
                r.readAsArrayBuffer(t), r.onload = function (t) {
                    var n = t.target.result;
                    e(n)
                }, r.onerror = function () {
                    n(new Error("fileReader 读取错误"))
                }
            })
        }

        function c(t, e) {
            return new l.default(function (n, r) {
                var o = s();
                o.open(e.method, t), e.onCreate && e.onCreate(o), e.headers && (0, d.default)(e.headers).forEach(function (t) {
                    return o.setRequestHeader(t, e.headers[t])
                }), o.upload.addEventListener("progress", function (t) {
                    t.lengthComputable && e.onProgress && e.onProgress({loaded: t.loaded, total: t.total})
                }), o.onreadystatechange = function () {
                    var t = o.responseText;
                    if (4 === o.readyState) {
                        var e = o.getResponseHeader("x-reqId") || "";
                        if (200 !== o.status) {
                            var i = "xhr request failed, code: " + o.status + ";";
                            return t && (i = i + " response: " + t), void r({
                                code: o.status,
                                message: i,
                                reqId: e,
                                isRequestError: !0
                            })
                        }
                        try {
                            n({data: JSON.parse(t), reqId: e})
                        } catch (t) {
                            r(t)
                        }
                    }
                }, o.send(e.body)
            })
        }

        function f() {
            return "http:" === window.location.protocol ? "http:" : "https:"
        }

        e.__esModule = !0;
        var l = r(n(24)), p = r(n(54)), h = r(n(86)), d = r(n(55));
        e.isChunkExpired = function (t) {
            var e = t + 864e5;
            return (new Date).getTime() > e
        }, e.getChunks = function (t, e) {
            for (var n = [], r = Math.ceil(t.size / e), o = 0; o < r; o++) {
                var i = t.slice(e * o, o === r - 1 ? t.size : e * (o + 1));
                n.push(i)
            }
            return n
        }, e.filterParams = o, e.sum = function (t) {
            return t.reduce(function (t, e) {
                return t + e
            }, 0)
        }, e.setLocalFileInfo = function (t, e) {
            try {
                localStorage.setItem(i(t), (0, h.default)(e))
            } catch (t) {
                window.console && window.console.warn && console.warn("setLocalFileInfo failed")
            }
        }, e.removeLocalFileInfo = function (t) {
            try {
                localStorage.removeItem(i(t))
            } catch (t) {
                window.console && window.console.warn && console.warn("removeLocalFileInfo failed")
            }
        }, e.getLocalFileInfo = function (t) {
            try {
                return JSON.parse(localStorage.getItem(i(t))) || []
            } catch (t) {
                return window.console && window.console.warn && console.warn("getLocalFileInfo failed"), []
            }
        }, e.createMkFileUrl = function (t, e, n, r) {
            var i = t + "/mkfile/" + e;
            null != n && (i += "/key/" + (0, v.urlSafeBase64Encode)(n)), r.mimeType && (i += "/mimeType/" + (0, v.urlSafeBase64Encode)(r.mimeType));
            var u = r.fname;
            return u && (i += "/fname/" + (0, v.urlSafeBase64Encode)(u)), r.params && o(r.params).forEach(function (t) {
                return i += "/" + encodeURIComponent(t[0]) + "/" + (0, v.urlSafeBase64Encode)(t[1])
            }), i
        }, e.getHeadersForChunkUpload = function (t) {
            var e = u(t);
            return (0, p.default)({"content-type": "application/octet-stream"}, e)
        }, e.getHeadersForMkFile = function (t) {
            var e = u(t);
            return (0, p.default)({"content-type": "text/plain"}, e)
        }, e.createXHR = s, e.computeMd5 = function (t) {
            return a(t).then(function (t) {
                var e = new m.default.ArrayBuffer;
                return e.append(t), e.end()
            })
        }, e.readAsArrayBuffer = a, e.request = c, e.getPortFromUrl = function (t) {
            if (t && t.match) {
                var e = t.match(/(^https?)/);
                if (!e) return "";
                var n = e[1];
                return (e = t.match(/^https?:\/\/([^:^\/]*):(\d*)/)) ? e[2] : "http" === n ? "80" : "443"
            }
            return ""
        }, e.getDomainFromUrl = function (t) {
            if (t && t.match) {
                var e = t.match(/^https?:\/\/([^:^\/]*)/);
                return e ? e[1] : ""
            }
            return ""
        }, e.getUploadUrl = function (t, e) {
            var n = f();
            if (null != t.region) {
                var r = y.regionUphostMap[t.region], o = t.useCdnDomain ? r.cdnUphost : r.srcUphost;
                return l.default.resolve(n + "//" + o)
            }
            return function (t) {
                try {
                    var e = function (t) {
                        var e = t.split(":"), n = e[0], r = JSON.parse((0, v.urlSafeBase64Decode)(e[2]));
                        return r.ak = n, r.bucket = r.scope.split(":")[0], r
                    }(t);
                    return c(f() + "//api.qiniu.com/v2/query?ak=" + e.ak + "&bucket=" + e.bucket, {method: "GET"})
                } catch (t) {
                    return l.default.reject(t)
                }
            }(e).then(function (t) {
                var e = t.data.up.acc.main;
                return n + "//" + e[0]
            })
        }, e.isContainFileMimeType = function (t, e) {
            return e.indexOf(t) > -1
        };
        var v = n(56), y = n(37), m = r(n(91))
    }, function (t, e, n) {
        var r = n(18);
        t.exports = function (t, e, n) {
            if (r(t), void 0 === e) return t;
            switch (n) {
                case 1:
                    return function (n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function (n, r) {
                        return t.call(e, n, r)
                    };
                case 3:
                    return function (n, r, o) {
                        return t.call(e, n, r, o)
                    }
            }
            return function () {
                return t.apply(e, arguments)
            }
        }
    }, function (t, e) {
        t.exports = function (t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    }, function (t, e) {
        t.exports = function (t, e) {
            return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
        }
    }, function (t, e) {
        var n = 0, r = Math.random();
        t.exports = function (t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
        }
    }, function (t, e, n) {
        var r = n(6).f, o = n(9), i = n(2)("toStringTag");
        t.exports = function (t, e, n) {
            t && !o(t = n ? t : t.prototype, i) && r(t, i, {configurable: !0, value: e})
        }
    }, function (t, e) {
        e.f = {}.propertyIsEnumerable
    }, function (t, e, n) {
        "use strict";
        e.__esModule = !0, e.default = function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
    }, function (t, e, n) {
        t.exports = {default: n(59), __esModule: !0}
    }, function (t, e) {
        var n = Math.ceil, r = Math.floor;
        t.exports = function (t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
        }
    }, function (t, e) {
        t.exports = function (t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    }, function (t, e, n) {
        var r = n(7), o = n(0).document, i = r(o) && r(o.createElement);
        t.exports = function (t) {
            return i ? o.createElement(t) : {}
        }
    }, function (t, e, n) {
        var r = n(7);
        t.exports = function (t, e) {
            if (!r(t)) return t;
            var n, o;
            if (e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
            if ("function" == typeof (n = t.valueOf) && !r(o = n.call(t))) return o;
            if (!e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function (t, e, n) {
        var r = n(30)("keys"), o = n(20);
        t.exports = function (t) {
            return r[t] || (r[t] = o(t))
        }
    }, function (t, e, n) {
        var r = n(1), o = n(0), i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
        (t.exports = function (t, e) {
            return i[t] || (i[t] = void 0 !== e ? e : {})
        })("versions", []).push({
            version: r.version,
            mode: n(12) ? "pure" : "global",
            copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
        })
    }, function (t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function (t, e, n) {
        var r = n(26);
        t.exports = function (t) {
            return Object(r(t))
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(18);
        t.exports.f = function (t) {
            return new function (t) {
                var e, n;
                this.promise = new t(function (t, r) {
                    if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
                    e = t, n = r
                }), this.resolve = r(e), this.reject = r(n)
            }(t)
        }
    }, function (t, e) {
        e.f = Object.getOwnPropertySymbols
    }, function (t, e, n) {
        e.f = n(2)
    }, function (t, e, n) {
        var r = n(0), o = n(1), i = n(12), u = n(35), s = n(6).f;
        t.exports = function (t) {
            var e = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
            "_" == t.charAt(0) || t in e || s(e, t, {value: u.f(t)})
        }
    }, function (t, e, n) {
        "use strict";
        e.__esModule = !0, e.regionUphostMap = {
            z0: {srcUphost: "up.qiniup.com", cdnUphost: "upload.qiniup.com"},
            z1: {srcUphost: "up-z1.qiniup.com", cdnUphost: "upload-z1.qiniup.com"},
            z2: {srcUphost: "up-z2.qiniup.com", cdnUphost: "upload-z2.qiniup.com"},
            na0: {srcUphost: "up-na0.qiniup.com", cdnUphost: "upload-na0.qiniup.com"},
            as0: {srcUphost: "up-as0.qiniup.com", cdnUphost: "upload-as0.qiniup.com"}
        }, e.region = {z0: "z0", z1: "z1", z2: "z2", na0: "na0", as0: "as0"}
    }, function (t, e) {
    }, function (t, e, n) {
        "use strict";
        var r = n(60)(!0);
        n(40)(String, "String", function (t) {
            this._t = String(t), this._i = 0
        }, function () {
            var t, e = this._t, n = this._i;
            return n >= e.length ? {value: void 0, done: !0} : (t = r(e, n), this._i += t.length, {value: t, done: !1})
        })
    }, function (t, e, n) {
        "use strict";
        var r = n(12), o = n(4), i = n(42), u = n(5), s = n(13), a = n(61), c = n(21), f = n(65), l = n(2)("iterator"),
            p = !([].keys && "next" in [].keys()), h = function () {
                return this
            };
        t.exports = function (t, e, n, d, v, y, m) {
            a(n, e, d);
            var g, b, _, x = function (t) {
                    if (!p && t in C) return C[t];
                    switch (t) {
                        case"keys":
                        case"values":
                            return function () {
                                return new n(this, t)
                            }
                    }
                    return function () {
                        return new n(this, t)
                    }
                }, w = e + " Iterator", S = "values" == v, k = !1, C = t.prototype,
                P = C[l] || C["@@iterator"] || v && C[v], O = P || x(v), M = v ? S ? x("entries") : O : void 0,
                U = "Array" == e && C.entries || P;
            if (U && (_ = f(U.call(new t))) !== Object.prototype && _.next && (c(_, w, !0), r || "function" == typeof _[l] || u(_, l, h)), S && P && "values" !== P.name && (k = !0, O = function () {
                return P.call(this)
            }), r && !m || !p && !k && C[l] || u(C, l, O), s[e] = O, s[w] = h, v) if (g = {
                values: S ? O : x("values"),
                keys: y ? O : x("keys"),
                entries: M
            }, m) for (b in g) b in C || i(C, b, g[b]); else o(o.P + o.F * (p || k), e, g);
            return g
        }
    }, function (t, e, n) {
        t.exports = !n(8) && !n(10)(function () {
            return 7 != Object.defineProperty(n(27)("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, function (t, e, n) {
        t.exports = n(5)
    }, function (t, e, n) {
        var r = n(3), o = n(62), i = n(31), u = n(29)("IE_PROTO"), s = function () {
        }, a = function () {
            var t, e = n(27)("iframe"), r = i.length;
            for (e.style.display = "none", n(47).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), a = t.F; r--;) delete a.prototype[i[r]];
            return a()
        };
        t.exports = Object.create || function (t, e) {
            var n;
            return null !== t ? (s.prototype = r(t), n = new s, s.prototype = null, n[u] = t) : n = a(), void 0 === e ? n : o(n, e)
        }
    }, function (t, e, n) {
        var r = n(9), o = n(11), i = n(63)(!1), u = n(29)("IE_PROTO");
        t.exports = function (t, e) {
            var n, s = o(t), a = 0, c = [];
            for (n in s) n != u && r(s, n) && c.push(n);
            for (; e.length > a;) r(s, n = e[a++]) && (~i(c, n) || c.push(n));
            return c
        }
    }, function (t, e, n) {
        var r = n(15);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
            return "String" == r(t) ? t.split("") : Object(t)
        }
    }, function (t, e, n) {
        var r = n(25), o = Math.min;
        t.exports = function (t) {
            return t > 0 ? o(r(t), 9007199254740991) : 0
        }
    }, function (t, e, n) {
        var r = n(0).document;
        t.exports = r && r.documentElement
    }, function (t, e, n) {
        n(66);
        for (var r = n(0), o = n(5), i = n(13), u = n(2)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), a = 0; a < s.length; a++) {
            var c = s[a], f = r[c], l = f && f.prototype;
            l && !l[u] && o(l, u, c), i[c] = i.Array
        }
    }, function (t, e, n) {
        var r = n(15), o = n(2)("toStringTag"), i = "Arguments" == r(function () {
            return arguments
        }());
        t.exports = function (t) {
            var e, n, u;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
                try {
                    return t[e]
                } catch (t) {
                }
            }(e = Object(t), o)) ? n : i ? r(e) : "Object" == (u = r(e)) && "function" == typeof e.callee ? "Arguments" : u
        }
    }, function (t, e, n) {
        var r = n(3), o = n(18), i = n(2)("species");
        t.exports = function (t, e) {
            var n, u = r(t).constructor;
            return void 0 === u || void 0 == (n = r(u)[i]) ? e : o(n)
        }
    }, function (t, e, n) {
        var r, o, i, u = n(17), s = n(75), a = n(47), c = n(27), f = n(0), l = f.process, p = f.setImmediate,
            h = f.clearImmediate, d = f.MessageChannel, v = f.Dispatch, y = 0, m = {}, g = function () {
                var t = +this;
                if (m.hasOwnProperty(t)) {
                    var e = m[t];
                    delete m[t], e()
                }
            }, b = function (t) {
                g.call(t.data)
            };
        p && h || (p = function (t) {
            for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
            return m[++y] = function () {
                s("function" == typeof t ? t : Function(t), e)
            }, r(y), y
        }, h = function (t) {
            delete m[t]
        }, "process" == n(15)(l) ? r = function (t) {
            l.nextTick(u(g, t, 1))
        } : v && v.now ? r = function (t) {
            v.now(u(g, t, 1))
        } : d ? (i = (o = new d).port2, o.port1.onmessage = b, r = u(i.postMessage, i, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (r = function (t) {
            f.postMessage(t + "", "*")
        }, f.addEventListener("message", b, !1)) : r = "onreadystatechange" in c("script") ? function (t) {
            a.appendChild(c("script")).onreadystatechange = function () {
                a.removeChild(this), g.call(t)
            }
        } : function (t) {
            setTimeout(u(g, t, 1), 0)
        }), t.exports = {set: p, clear: h}
    }, function (t, e) {
        t.exports = function (t) {
            try {
                return {e: !1, v: t()}
            } catch (t) {
                return {e: !0, v: t}
            }
        }
    }, function (t, e, n) {
        var r = n(3), o = n(7), i = n(33);
        t.exports = function (t, e) {
            if (r(t), o(e) && e.constructor === t) return e;
            var n = i.f(t);
            return (0, n.resolve)(e), n.promise
        }
    }, function (t, e, n) {
        t.exports = {default: n(83), __esModule: !0}
    }, function (t, e, n) {
        t.exports = {default: n(88), __esModule: !0}
    }, function (t, e, n) {
        "use strict";
        e.__esModule = !0, e.urlSafeBase64Encode = function (t) {
            return (t = function (t) {
                var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", n = void 0, r = void 0,
                    o = void 0, i = void 0, u = void 0, s = void 0, a = void 0, c = void 0, f = 0, l = 0, p = "",
                    h = [];
                if (!t) return t;
                t = function (t) {
                    if (null === t || void 0 === t) return "";
                    var e = t + "", n = "", r = void 0, o = void 0, i = 0;
                    r = o = 0, i = e.length;
                    for (var u = 0; u < i; u++) {
                        var s = e.charCodeAt(u), a = null;
                        if (s < 128) o++; else if (s > 127 && s < 2048) a = String.fromCharCode(s >> 6 | 192, 63 & s | 128); else if (63488 & s ^ !0) a = String.fromCharCode(s >> 12 | 224, s >> 6 & 63 | 128, 63 & s | 128); else {
                            if (64512 & s ^ !0) throw new RangeError("Unmatched trail surrogate at " + u);
                            var c = e.charCodeAt(++u);
                            if (64512 & c ^ !0) throw new RangeError("Unmatched lead surrogate at " + (u - 1));
                            s = ((1023 & s) << 10) + (1023 & c) + 65536, a = String.fromCharCode(s >> 18 | 240, s >> 12 & 63 | 128, s >> 6 & 63 | 128, 63 & s | 128)
                        }
                        null !== a && (o > r && (n += e.slice(r, o)), n += a, r = o = u + 1)
                    }
                    return o > r && (n += e.slice(r, i)), n
                }(t + "");
                do {
                    n = t.charCodeAt(f++), r = t.charCodeAt(f++), o = t.charCodeAt(f++), i = (c = n << 16 | r << 8 | o) >> 18 & 63, u = c >> 12 & 63, s = c >> 6 & 63, a = 63 & c, h[l++] = e.charAt(i) + e.charAt(u) + e.charAt(s) + e.charAt(a)
                } while (f < t.length);
                switch (p = h.join(""), t.length % 3) {
                    case 1:
                        p = p.slice(0, -2) + "==";
                        break;
                    case 2:
                        p = p.slice(0, -1) + "="
                }
                return p
            }(t)).replace(/\//g, "_").replace(/\+/g, "-")
        }, e.urlSafeBase64Decode = function (t) {
            return function (t) {
                var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", n = void 0, r = void 0,
                    o = void 0, i = void 0, u = void 0, s = void 0, a = void 0, c = void 0, f = 0, l = 0, p = [];
                if (!t) return t;
                t += "";
                do {
                    i = e.indexOf(t.charAt(f++)), u = e.indexOf(t.charAt(f++)), s = e.indexOf(t.charAt(f++)), a = e.indexOf(t.charAt(f++)), n = (c = i << 18 | u << 12 | s << 6 | a) >> 16 & 255, r = c >> 8 & 255, o = 255 & c, p[l++] = 64 === s ? String.fromCharCode(n) : 64 === a ? String.fromCharCode(n, r) : String.fromCharCode(n, r, o)
                } while (f < t.length);
                return p.join("")
            }(t = t.replace(/_/g, "/").replace(/-/g, "+"))
        }
    }, function (t, e, n) {
        var r = n(44), o = n(31).concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function (t) {
            return r(t, o)
        }
    }, function (t, e, n) {
        "use strict";
        e.__esModule = !0, e.pipeline = e.exif = e.imageInfo = e.watermark = e.imageMogr2 = e.getUploadUrl = e.filterParams = e.getHeadersForMkFile = e.getHeadersForChunkUpload = e.createMkFileUrl = e.region = e.upload = void 0;
        var r = n(37), o = n(16), i = n(92), u = n(94), s = n(95), a = new (n(109).StatisticsLogger);
        e.upload = function (t, e, n, r, o) {
            var u = {file: t, key: e, token: n, putExtra: r, config: o};
            return new s.Observable(function (t) {
                var e = new i.UploadManager(u, {
                    onData: function (e) {
                        return t.next(e)
                    }, onError: function (e) {
                        return t.error(e)
                    }, onComplete: function (e) {
                        return t.complete(e)
                    }
                }, a);
                return e.putFile(), e.stop.bind(e)
            })
        }, e.region = r.region, e.createMkFileUrl = o.createMkFileUrl, e.getHeadersForChunkUpload = o.getHeadersForChunkUpload, e.getHeadersForMkFile = o.getHeadersForMkFile, e.filterParams = o.filterParams, e.getUploadUrl = o.getUploadUrl, e.imageMogr2 = u.imageMogr2, e.watermark = u.watermark, e.imageInfo = u.imageInfo, e.exif = u.exif, e.pipeline = u.pipeline
    }, function (t, e, n) {
        n(38), n(39), n(48), n(69), n(81), n(82), t.exports = n(1).Promise
    }, function (t, e, n) {
        var r = n(25), o = n(26);
        t.exports = function (t) {
            return function (e, n) {
                var i, u, s = String(o(e)), a = r(n), c = s.length;
                return a < 0 || a >= c ? t ? "" : void 0 : (i = s.charCodeAt(a)) < 55296 || i > 56319 || a + 1 === c || (u = s.charCodeAt(a + 1)) < 56320 || u > 57343 ? t ? s.charAt(a) : i : t ? s.slice(a, a + 2) : u - 56320 + (i - 55296 << 10) + 65536
            }
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(43), o = n(19), i = n(21), u = {};
        n(5)(u, n(2)("iterator"), function () {
            return this
        }), t.exports = function (t, e, n) {
            t.prototype = r(u, {next: o(1, n)}), i(t, e + " Iterator")
        }
    }, function (t, e, n) {
        var r = n(6), o = n(3), i = n(14);
        t.exports = n(8) ? Object.defineProperties : function (t, e) {
            o(t);
            for (var n, u = i(e), s = u.length, a = 0; s > a;) r.f(t, n = u[a++], e[n]);
            return t
        }
    }, function (t, e, n) {
        var r = n(11), o = n(46), i = n(64);
        t.exports = function (t) {
            return function (e, n, u) {
                var s, a = r(e), c = o(a.length), f = i(u, c);
                if (t && n != n) {
                    for (; c > f;) if ((s = a[f++]) != s) return !0
                } else for (; c > f; f++) if ((t || f in a) && a[f] === n) return t || f || 0;
                return !t && -1
            }
        }
    }, function (t, e, n) {
        var r = n(25), o = Math.max, i = Math.min;
        t.exports = function (t, e) {
            return (t = r(t)) < 0 ? o(t + e, 0) : i(t, e)
        }
    }, function (t, e, n) {
        var r = n(9), o = n(32), i = n(29)("IE_PROTO"), u = Object.prototype;
        t.exports = Object.getPrototypeOf || function (t) {
            return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(67), o = n(68), i = n(13), u = n(11);
        t.exports = n(40)(Array, "Array", function (t, e) {
            this._t = u(t), this._i = 0, this._k = e
        }, function () {
            var t = this._t, e = this._k, n = this._i++;
            return !t || n >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
        }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
    }, function (t, e) {
        t.exports = function () {
        }
    }, function (t, e) {
        t.exports = function (t, e) {
            return {value: e, done: !!t}
        }
    }, function (t, e, n) {
        "use strict";
        var r, o, i, u, s = n(12), a = n(0), c = n(17), f = n(49), l = n(4), p = n(7), h = n(18), d = n(70), v = n(71),
            y = n(50), m = n(51).set, g = n(76)(), b = n(33), _ = n(52), x = n(77), w = n(53), S = a.TypeError,
            k = a.process, C = k && k.versions, P = C && C.v8 || "", O = a.Promise, M = "process" == f(k),
            U = function () {
            }, E = o = b.f, A = !!function () {
                try {
                    var t = O.resolve(1), e = (t.constructor = {})[n(2)("species")] = function (t) {
                        t(U, U)
                    };
                    return (M || "function" == typeof PromiseRejectionEvent) && t.then(U) instanceof e && 0 !== P.indexOf("6.6") && -1 === x.indexOf("Chrome/66")
                } catch (t) {
                }
            }(), j = function (t) {
                var e;
                return !(!p(t) || "function" != typeof (e = t.then)) && e
            }, I = function (t, e) {
                if (!t._n) {
                    t._n = !0;
                    var n = t._c;
                    g(function () {
                        for (var r = t._v, o = 1 == t._s, i = 0; n.length > i;) !function (e) {
                            var n, i, u, s = o ? e.ok : e.fail, a = e.resolve, c = e.reject, f = e.domain;
                            try {
                                s ? (o || (2 == t._h && T(t), t._h = 1), !0 === s ? n = r : (f && f.enter(), n = s(r), f && (f.exit(), u = !0)), n === e.promise ? c(S("Promise-chain cycle")) : (i = j(n)) ? i.call(n, a, c) : a(n)) : c(r)
                            } catch (t) {
                                f && !u && f.exit(), c(t)
                            }
                        }(n[i++]);
                        t._c = [], t._n = !1, e && !t._h && F(t)
                    })
                }
            }, F = function (t) {
                m.call(a, function () {
                    var e, n, r, o = t._v, i = L(t);
                    if (i && (e = _(function () {
                        M ? k.emit("unhandledRejection", o, t) : (n = a.onunhandledrejection) ? n({
                            promise: t,
                            reason: o
                        }) : (r = a.console) && r.error && r.error("Unhandled promise rejection", o)
                    }), t._h = M || L(t) ? 2 : 1), t._a = void 0, i && e.e) throw e.v
                })
            }, L = function (t) {
                return 1 !== t._h && 0 === (t._a || t._c).length
            }, T = function (t) {
                m.call(a, function () {
                    var e;
                    M ? k.emit("rejectionHandled", t) : (e = a.onrejectionhandled) && e({promise: t, reason: t._v})
                })
            }, R = function (t) {
                var e = this;
                e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), I(e, !0))
            }, q = function (t) {
                var e, n = this;
                if (!n._d) {
                    n._d = !0, n = n._w || n;
                    try {
                        if (n === t) throw S("Promise can't be resolved itself");
                        (e = j(t)) ? g(function () {
                            var r = {_w: n, _d: !1};
                            try {
                                e.call(t, c(q, r, 1), c(R, r, 1))
                            } catch (t) {
                                R.call(r, t)
                            }
                        }) : (n._v = t, n._s = 1, I(n, !1))
                    } catch (t) {
                        R.call({_w: n, _d: !1}, t)
                    }
                }
            };
        A || (O = function (t) {
            d(this, O, "Promise", "_h"), h(t), r.call(this);
            try {
                t(c(q, this, 1), c(R, this, 1))
            } catch (t) {
                R.call(this, t)
            }
        }, (r = function (t) {
            this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
        }).prototype = n(78)(O.prototype, {
            then: function (t, e) {
                var n = E(y(this, O));
                return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = M ? k.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && I(this, !1), n.promise
            }, catch: function (t) {
                return this.then(void 0, t)
            }
        }), i = function () {
            var t = new r;
            this.promise = t, this.resolve = c(q, t, 1), this.reject = c(R, t, 1)
        }, b.f = E = function (t) {
            return t === O || t === u ? new i(t) : o(t)
        }), l(l.G + l.W + l.F * !A, {Promise: O}), n(21)(O, "Promise"), n(79)("Promise"), u = n(1).Promise, l(l.S + l.F * !A, "Promise", {
            reject: function (t) {
                var e = E(this);
                return (0, e.reject)(t), e.promise
            }
        }), l(l.S + l.F * (s || !A), "Promise", {
            resolve: function (t) {
                return w(s && this === u ? O : this, t)
            }
        }), l(l.S + l.F * !(A && n(80)(function (t) {
            O.all(t).catch(U)
        })), "Promise", {
            all: function (t) {
                var e = this, n = E(e), r = n.resolve, o = n.reject, i = _(function () {
                    var n = [], i = 0, u = 1;
                    v(t, !1, function (t) {
                        var s = i++, a = !1;
                        n.push(void 0), u++, e.resolve(t).then(function (t) {
                            a || (a = !0, n[s] = t, --u || r(n))
                        }, o)
                    }), --u || r(n)
                });
                return i.e && o(i.v), n.promise
            }, race: function (t) {
                var e = this, n = E(e), r = n.reject, o = _(function () {
                    v(t, !1, function (t) {
                        e.resolve(t).then(n.resolve, r)
                    })
                });
                return o.e && r(o.v), n.promise
            }
        })
    }, function (t, e) {
        t.exports = function (t, e, n, r) {
            if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
            return t
        }
    }, function (t, e, n) {
        var r = n(17), o = n(72), i = n(73), u = n(3), s = n(46), a = n(74), c = {}, f = {};
        (e = t.exports = function (t, e, n, l, p) {
            var h, d, v, y, m = p ? function () {
                return t
            } : a(t), g = r(n, l, e ? 2 : 1), b = 0;
            if ("function" != typeof m) throw TypeError(t + " is not iterable!");
            if (i(m)) {
                for (h = s(t.length); h > b; b++) if ((y = e ? g(u(d = t[b])[0], d[1]) : g(t[b])) === c || y === f) return y
            } else for (v = m.call(t); !(d = v.next()).done;) if ((y = o(v, g, d.value, e)) === c || y === f) return y
        }).BREAK = c, e.RETURN = f
    }, function (t, e, n) {
        var r = n(3);
        t.exports = function (t, e, n, o) {
            try {
                return o ? e(r(n)[0], n[1]) : e(n)
            } catch (e) {
                var i = t.return;
                throw void 0 !== i && r(i.call(t)), e
            }
        }
    }, function (t, e, n) {
        var r = n(13), o = n(2)("iterator"), i = Array.prototype;
        t.exports = function (t) {
            return void 0 !== t && (r.Array === t || i[o] === t)
        }
    }, function (t, e, n) {
        var r = n(49), o = n(2)("iterator"), i = n(13);
        t.exports = n(1).getIteratorMethod = function (t) {
            if (void 0 != t) return t[o] || t["@@iterator"] || i[r(t)]
        }
    }, function (t, e) {
        t.exports = function (t, e, n) {
            var r = void 0 === n;
            switch (e.length) {
                case 0:
                    return r ? t() : t.call(n);
                case 1:
                    return r ? t(e[0]) : t.call(n, e[0]);
                case 2:
                    return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
                case 3:
                    return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
                case 4:
                    return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
            }
            return t.apply(n, e)
        }
    }, function (t, e, n) {
        var r = n(0), o = n(51).set, i = r.MutationObserver || r.WebKitMutationObserver, u = r.process, s = r.Promise,
            a = "process" == n(15)(u);
        t.exports = function () {
            var t, e, n, c = function () {
                var r, o;
                for (a && (r = u.domain) && r.exit(); t;) {
                    o = t.fn, t = t.next;
                    try {
                        o()
                    } catch (r) {
                        throw t ? n() : e = void 0, r
                    }
                }
                e = void 0, r && r.enter()
            };
            if (a) n = function () {
                u.nextTick(c)
            }; else if (!i || r.navigator && r.navigator.standalone) if (s && s.resolve) {
                var f = s.resolve(void 0);
                n = function () {
                    f.then(c)
                }
            } else n = function () {
                o.call(r, c)
            }; else {
                var l = !0, p = document.createTextNode("");
                new i(c).observe(p, {characterData: !0}), n = function () {
                    p.data = l = !l
                }
            }
            return function (r) {
                var o = {fn: r, next: void 0};
                e && (e.next = o), t || (t = o, n()), e = o
            }
        }
    }, function (t, e, n) {
        var r = n(0).navigator;
        t.exports = r && r.userAgent || ""
    }, function (t, e, n) {
        var r = n(5);
        t.exports = function (t, e, n) {
            for (var o in e) n && t[o] ? t[o] = e[o] : r(t, o, e[o]);
            return t
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(0), o = n(1), i = n(6), u = n(8), s = n(2)("species");
        t.exports = function (t) {
            var e = "function" == typeof o[t] ? o[t] : r[t];
            u && e && !e[s] && i.f(e, s, {
                configurable: !0, get: function () {
                    return this
                }
            })
        }
    }, function (t, e, n) {
        var r = n(2)("iterator"), o = !1;
        try {
            var i = [7][r]();
            i.return = function () {
                o = !0
            }, Array.from(i, function () {
                throw 2
            })
        } catch (t) {
        }
        t.exports = function (t, e) {
            if (!e && !o) return !1;
            var n = !1;
            try {
                var i = [7], u = i[r]();
                u.next = function () {
                    return {done: n = !0}
                }, i[r] = function () {
                    return u
                }, t(i)
            } catch (t) {
            }
            return n
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(4), o = n(1), i = n(0), u = n(50), s = n(53);
        r(r.P + r.R, "Promise", {
            finally: function (t) {
                var e = u(this, o.Promise || i.Promise), n = "function" == typeof t;
                return this.then(n ? function (n) {
                    return s(e, t()).then(function () {
                        return n
                    })
                } : t, n ? function (n) {
                    return s(e, t()).then(function () {
                        throw n
                    })
                } : t)
            }
        })
    }, function (t, e, n) {
        "use strict";
        var r = n(4), o = n(33), i = n(52);
        r(r.S, "Promise", {
            try: function (t) {
                var e = o.f(this), n = i(t);
                return (n.e ? e.reject : e.resolve)(n.v), e.promise
            }
        })
    }, function (t, e, n) {
        n(84), t.exports = n(1).Object.assign
    }, function (t, e, n) {
        var r = n(4);
        r(r.S + r.F, "Object", {assign: n(85)})
    }, function (t, e, n) {
        "use strict";
        var r = n(14), o = n(34), i = n(22), u = n(32), s = n(45), a = Object.assign;
        t.exports = !a || n(10)(function () {
            var t = {}, e = {}, n = Symbol(), r = "abcdefghijklmnopqrst";
            return t[n] = 7, r.split("").forEach(function (t) {
                e[t] = t
            }), 7 != a({}, t)[n] || Object.keys(a({}, e)).join("") != r
        }) ? function (t, e) {
            for (var n = u(t), a = arguments.length, c = 1, f = o.f, l = i.f; a > c;) for (var p, h = s(arguments[c++]), d = f ? r(h).concat(f(h)) : r(h), v = d.length, y = 0; v > y;) l.call(h, p = d[y++]) && (n[p] = h[p]);
            return n
        } : a
    }, function (t, e, n) {
        t.exports = {default: n(87), __esModule: !0}
    }, function (t, e, n) {
        var r = n(1), o = r.JSON || (r.JSON = {stringify: JSON.stringify});
        t.exports = function (t) {
            return o.stringify.apply(o, arguments)
        }
    }, function (t, e, n) {
        n(89), t.exports = n(1).Object.keys
    }, function (t, e, n) {
        var r = n(32), o = n(14);
        n(90)("keys", function () {
            return function (t) {
                return o(r(t))
            }
        })
    }, function (t, e, n) {
        var r = n(4), o = n(1), i = n(10);
        t.exports = function (t, e) {
            var n = (o.Object || {})[t] || Object[t], u = {};
            u[t] = e(n), r(r.S + r.F * i(function () {
                n(1)
            }), "Object", u)
        }
    }, function (t, e, n) {
        var r;
        r = function (t) {
            "use strict";

            function e(t, e) {
                var n = t[0], r = t[1], o = t[2], i = t[3];
                r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & o | ~r & i) + e[0] - 680876936 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & o) + e[1] - 389564586 | 0) << 12 | i >>> 20) + n | 0) & n | ~i & r) + e[2] + 606105819 | 0) << 17 | o >>> 15) + i | 0) & i | ~o & n) + e[3] - 1044525330 | 0) << 22 | r >>> 10) + o | 0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & o | ~r & i) + e[4] - 176418897 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & o) + e[5] + 1200080426 | 0) << 12 | i >>> 20) + n | 0) & n | ~i & r) + e[6] - 1473231341 | 0) << 17 | o >>> 15) + i | 0) & i | ~o & n) + e[7] - 45705983 | 0) << 22 | r >>> 10) + o | 0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & o | ~r & i) + e[8] + 1770035416 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & o) + e[9] - 1958414417 | 0) << 12 | i >>> 20) + n | 0) & n | ~i & r) + e[10] - 42063 | 0) << 17 | o >>> 15) + i | 0) & i | ~o & n) + e[11] - 1990404162 | 0) << 22 | r >>> 10) + o | 0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & o | ~r & i) + e[12] + 1804603682 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & o) + e[13] - 40341101 | 0) << 12 | i >>> 20) + n | 0) & n | ~i & r) + e[14] - 1502002290 | 0) << 17 | o >>> 15) + i | 0) & i | ~o & n) + e[15] + 1236535329 | 0) << 22 | r >>> 10) + o | 0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & i | o & ~i) + e[1] - 165796510 | 0) << 5 | n >>> 27) + r | 0) & o | r & ~o) + e[6] - 1069501632 | 0) << 9 | i >>> 23) + n | 0) & r | n & ~r) + e[11] + 643717713 | 0) << 14 | o >>> 18) + i | 0) & n | i & ~n) + e[0] - 373897302 | 0) << 20 | r >>> 12) + o | 0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & i | o & ~i) + e[5] - 701558691 | 0) << 5 | n >>> 27) + r | 0) & o | r & ~o) + e[10] + 38016083 | 0) << 9 | i >>> 23) + n | 0) & r | n & ~r) + e[15] - 660478335 | 0) << 14 | o >>> 18) + i | 0) & n | i & ~n) + e[4] - 405537848 | 0) << 20 | r >>> 12) + o | 0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & i | o & ~i) + e[9] + 568446438 | 0) << 5 | n >>> 27) + r | 0) & o | r & ~o) + e[14] - 1019803690 | 0) << 9 | i >>> 23) + n | 0) & r | n & ~r) + e[3] - 187363961 | 0) << 14 | o >>> 18) + i | 0) & n | i & ~n) + e[8] + 1163531501 | 0) << 20 | r >>> 12) + o | 0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & i | o & ~i) + e[13] - 1444681467 | 0) << 5 | n >>> 27) + r | 0) & o | r & ~o) + e[2] - 51403784 | 0) << 9 | i >>> 23) + n | 0) & r | n & ~r) + e[7] + 1735328473 | 0) << 14 | o >>> 18) + i | 0) & n | i & ~n) + e[12] - 1926607734 | 0) << 20 | r >>> 12) + o | 0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r ^ o ^ i) + e[5] - 378558 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ o) + e[8] - 2022574463 | 0) << 11 | i >>> 21) + n | 0) ^ n ^ r) + e[11] + 1839030562 | 0) << 16 | o >>> 16) + i | 0) ^ i ^ n) + e[14] - 35309556 | 0) << 23 | r >>> 9) + o | 0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r ^ o ^ i) + e[1] - 1530992060 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ o) + e[4] + 1272893353 | 0) << 11 | i >>> 21) + n | 0) ^ n ^ r) + e[7] - 155497632 | 0) << 16 | o >>> 16) + i | 0) ^ i ^ n) + e[10] - 1094730640 | 0) << 23 | r >>> 9) + o | 0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r ^ o ^ i) + e[13] + 681279174 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ o) + e[0] - 358537222 | 0) << 11 | i >>> 21) + n | 0) ^ n ^ r) + e[3] - 722521979 | 0) << 16 | o >>> 16) + i | 0) ^ i ^ n) + e[6] + 76029189 | 0) << 23 | r >>> 9) + o | 0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r ^ o ^ i) + e[9] - 640364487 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ o) + e[12] - 421815835 | 0) << 11 | i >>> 21) + n | 0) ^ n ^ r) + e[15] + 530742520 | 0) << 16 | o >>> 16) + i | 0) ^ i ^ n) + e[2] - 995338651 | 0) << 23 | r >>> 9) + o | 0, r = ((r += ((i = ((i += (r ^ ((n = ((n += (o ^ (r | ~i)) + e[0] - 198630844 | 0) << 6 | n >>> 26) + r | 0) | ~o)) + e[7] + 1126891415 | 0) << 10 | i >>> 22) + n | 0) ^ ((o = ((o += (n ^ (i | ~r)) + e[14] - 1416354905 | 0) << 15 | o >>> 17) + i | 0) | ~n)) + e[5] - 57434055 | 0) << 21 | r >>> 11) + o | 0, r = ((r += ((i = ((i += (r ^ ((n = ((n += (o ^ (r | ~i)) + e[12] + 1700485571 | 0) << 6 | n >>> 26) + r | 0) | ~o)) + e[3] - 1894986606 | 0) << 10 | i >>> 22) + n | 0) ^ ((o = ((o += (n ^ (i | ~r)) + e[10] - 1051523 | 0) << 15 | o >>> 17) + i | 0) | ~n)) + e[1] - 2054922799 | 0) << 21 | r >>> 11) + o | 0, r = ((r += ((i = ((i += (r ^ ((n = ((n += (o ^ (r | ~i)) + e[8] + 1873313359 | 0) << 6 | n >>> 26) + r | 0) | ~o)) + e[15] - 30611744 | 0) << 10 | i >>> 22) + n | 0) ^ ((o = ((o += (n ^ (i | ~r)) + e[6] - 1560198380 | 0) << 15 | o >>> 17) + i | 0) | ~n)) + e[13] + 1309151649 | 0) << 21 | r >>> 11) + o | 0, r = ((r += ((i = ((i += (r ^ ((n = ((n += (o ^ (r | ~i)) + e[4] - 145523070 | 0) << 6 | n >>> 26) + r | 0) | ~o)) + e[11] - 1120210379 | 0) << 10 | i >>> 22) + n | 0) ^ ((o = ((o += (n ^ (i | ~r)) + e[2] + 718787259 | 0) << 15 | o >>> 17) + i | 0) | ~n)) + e[9] - 343485551 | 0) << 21 | r >>> 11) + o | 0, t[0] = n + t[0] | 0, t[1] = r + t[1] | 0, t[2] = o + t[2] | 0, t[3] = i + t[3] | 0
            }

            function n(t) {
                var e, n = [];
                for (e = 0; e < 64; e += 4) n[e >> 2] = t.charCodeAt(e) + (t.charCodeAt(e + 1) << 8) + (t.charCodeAt(e + 2) << 16) + (t.charCodeAt(e + 3) << 24);
                return n
            }

            function r(t) {
                var e, n = [];
                for (e = 0; e < 64; e += 4) n[e >> 2] = t[e] + (t[e + 1] << 8) + (t[e + 2] << 16) + (t[e + 3] << 24);
                return n
            }

            function o(t) {
                var r, o, i, u, s, a, c = t.length, f = [1732584193, -271733879, -1732584194, 271733878];
                for (r = 64; r <= c; r += 64) e(f, n(t.substring(r - 64, r)));
                for (o = (t = t.substring(r - 64)).length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], r = 0; r < o; r += 1) i[r >> 2] |= t.charCodeAt(r) << (r % 4 << 3);
                if (i[r >> 2] |= 128 << (r % 4 << 3), r > 55) for (e(f, i), r = 0; r < 16; r += 1) i[r] = 0;
                return u = (u = 8 * c).toString(16).match(/(.*?)(.{0,8})$/), s = parseInt(u[2], 16), a = parseInt(u[1], 16) || 0, i[14] = s, i[15] = a, e(f, i), f
            }

            function i(t) {
                var e, n = "";
                for (e = 0; e < 4; e += 1) n += f[t >> 8 * e + 4 & 15] + f[t >> 8 * e & 15];
                return n
            }

            function u(t) {
                var e;
                for (e = 0; e < t.length; e += 1) t[e] = i(t[e]);
                return t.join("")
            }

            function s(t) {
                return /[\u0080-\uFFFF]/.test(t) && (t = unescape(encodeURIComponent(t))), t
            }

            function a(t) {
                var e, n = [], r = t.length;
                for (e = 0; e < r - 1; e += 2) n.push(parseInt(t.substr(e, 2), 16));
                return String.fromCharCode.apply(String, n)
            }

            function c() {
                this.reset()
            }

            var f = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
            return u(o("hello")), "undefined" == typeof ArrayBuffer || ArrayBuffer.prototype.slice || function () {
                function e(t, e) {
                    return (t = 0 | t || 0) < 0 ? Math.max(t + e, 0) : Math.min(t, e)
                }

                ArrayBuffer.prototype.slice = function (n, r) {
                    var o, i, u, s, a = this.byteLength, c = e(n, a), f = a;
                    return r !== t && (f = e(r, a)), c > f ? new ArrayBuffer(0) : (o = f - c, i = new ArrayBuffer(o), u = new Uint8Array(i), s = new Uint8Array(this, c, o), u.set(s), i)
                }
            }(), c.prototype.append = function (t) {
                return this.appendBinary(s(t)), this
            }, c.prototype.appendBinary = function (t) {
                this._buff += t, this._length += t.length;
                var r, o = this._buff.length;
                for (r = 64; r <= o; r += 64) e(this._hash, n(this._buff.substring(r - 64, r)));
                return this._buff = this._buff.substring(r - 64), this
            }, c.prototype.end = function (t) {
                var e, n, r = this._buff, o = r.length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (e = 0; e < o; e += 1) i[e >> 2] |= r.charCodeAt(e) << (e % 4 << 3);
                return this._finish(i, o), n = u(this._hash), t && (n = a(n)), this.reset(), n
            }, c.prototype.reset = function () {
                return this._buff = "", this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this
            }, c.prototype.getState = function () {
                return {buff: this._buff, length: this._length, hash: this._hash}
            }, c.prototype.setState = function (t) {
                return this._buff = t.buff, this._length = t.length, this._hash = t.hash, this
            }, c.prototype.destroy = function () {
                delete this._hash, delete this._buff, delete this._length
            }, c.prototype._finish = function (t, n) {
                var r, o, i, u = n;
                if (t[u >> 2] |= 128 << (u % 4 << 3), u > 55) for (e(this._hash, t), u = 0; u < 16; u += 1) t[u] = 0;
                r = (r = 8 * this._length).toString(16).match(/(.*?)(.{0,8})$/), o = parseInt(r[2], 16), i = parseInt(r[1], 16) || 0, t[14] = o, t[15] = i, e(this._hash, t)
            }, c.hash = function (t, e) {
                return c.hashBinary(s(t), e)
            }, c.hashBinary = function (t, e) {
                var n = u(o(t));
                return e ? a(n) : n
            }, c.ArrayBuffer = function () {
                this.reset()
            }, c.ArrayBuffer.prototype.append = function (t) {
                var n, o, i, u, s,
                    a = (o = this._buff.buffer, i = t, u = !0, (s = new Uint8Array(o.byteLength + i.byteLength)).set(new Uint8Array(o)), s.set(new Uint8Array(i), o.byteLength), u ? s : s.buffer),
                    c = a.length;
                for (this._length += t.byteLength, n = 64; n <= c; n += 64) e(this._hash, r(a.subarray(n - 64, n)));
                return this._buff = n - 64 < c ? new Uint8Array(a.buffer.slice(n - 64)) : new Uint8Array(0), this
            }, c.ArrayBuffer.prototype.end = function (t) {
                var e, n, r = this._buff, o = r.length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (e = 0; e < o; e += 1) i[e >> 2] |= r[e] << (e % 4 << 3);
                return this._finish(i, o), n = u(this._hash), t && (n = a(n)), this.reset(), n
            }, c.ArrayBuffer.prototype.reset = function () {
                return this._buff = new Uint8Array(0), this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this
            }, c.ArrayBuffer.prototype.getState = function () {
                var t, e = c.prototype.getState.call(this);
                return e.buff = (t = e.buff, String.fromCharCode.apply(null, new Uint8Array(t))), e
            }, c.ArrayBuffer.prototype.setState = function (t) {
                return t.buff = function (t, e) {
                    var n, r = t.length, o = new ArrayBuffer(r), i = new Uint8Array(o);
                    for (n = 0; n < r; n += 1) i[n] = t.charCodeAt(n);
                    return i
                }(t.buff), c.prototype.setState.call(this, t)
            }, c.ArrayBuffer.prototype.destroy = c.prototype.destroy, c.ArrayBuffer.prototype._finish = c.prototype._finish, c.ArrayBuffer.hash = function (t, n) {
                var o = u(function (t) {
                    var n, o, i, u, s, a, c = t.length, f = [1732584193, -271733879, -1732584194, 271733878];
                    for (n = 64; n <= c; n += 64) e(f, r(t.subarray(n - 64, n)));
                    for (o = (t = n - 64 < c ? t.subarray(n - 64) : new Uint8Array(0)).length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], n = 0; n < o; n += 1) i[n >> 2] |= t[n] << (n % 4 << 3);
                    if (i[n >> 2] |= 128 << (n % 4 << 3), n > 55) for (e(f, i), n = 0; n < 16; n += 1) i[n] = 0;
                    return u = (u = 8 * c).toString(16).match(/(.*?)(.{0,8})$/), s = parseInt(u[2], 16), a = parseInt(u[1], 16) || 0, i[14] = s, i[15] = a, e(f, i), f
                }(new Uint8Array(t)));
                return n ? a(o) : o
            }, c
        }, t.exports = r()
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {default: t}
        }

        e.__esModule = !0, e.UploadManager = void 0;
        var o = r(n(24)), i = r(n(54)), u = r(n(23)), s = n(16), a = n(93);
        e.UploadManager = function () {
            function t(e, n, r) {
                var o = this;
                (0, u.default)(this, t), this.config = (0, i.default)({
                    useCdnDomain: !0,
                    disableStatisticsReport: !1,
                    retryCount: 3,
                    checkByMD5: !1,
                    concurrentRequestLimit: 3,
                    region: null
                }, e.config), this.putExtra = (0, i.default)({
                    fname: "",
                    params: {},
                    mimeType: null
                }, e.putExtra), this.statisticsLogger = r, this.progress = null, this.xhrList = [], this.xhrHandler = function (t) {
                    return o.xhrList.push(t)
                }, this.aborted = !1, this.file = e.file, this.key = e.key, this.token = e.token, this.onData = function () {
                }, this.onError = function () {
                }, this.onComplete = function () {
                }, this.retryCount = 0, (0, i.default)(this, n)
            }

            return t.prototype.putFile = function () {
                var t = this;
                if (this.aborted = !1, this.putExtra.fname || (this.putExtra.fname = this.file.name), this.putExtra.mimeType && this.putExtra.mimeType.length && !(0, s.isContainFileMimeType)(this.file.type, this.putExtra.mimeType)) {
                    var e = new Error("file type doesn't match with what you specify");
                    return this.onError(e), o.default.reject(e)
                }
                var n = (0, s.getUploadUrl)(this.config, this.token).then(function (e) {
                    return t.uploadUrl = e, t.uploadAt = (new Date).getTime(), t.file.size > 4194304 ? t.resumeUpload() : t.directUpload()
                });
                return n.then(function (e) {
                    t.onComplete(e.data), t.config.disableStatisticsReport || t.sendLog(e.reqId, 200)
                }, function (e) {
                    if (t.clear(), e.isRequestError && !t.config.disableStatisticsReport) {
                        var n = t.aborted ? "" : e.reqId, r = t.aborted ? -2 : e.code;
                        t.sendLog(n, r)
                    }
                    var o = e.isRequestError && 0 === e.code && !t.aborted, i = ++t.retryCount <= t.config.retryCount;
                    o && i ? t.putFile() : t.onError(e)
                }), n
            }, t.prototype.clear = function () {
                this.xhrList.forEach(function (t) {
                    return t.abort()
                }), this.xhrList = []
            }, t.prototype.stop = function () {
                this.clear(), this.aborted = !0
            }, t.prototype.sendLog = function (t, e) {
                this.statisticsLogger.log({
                    code: e,
                    reqId: t,
                    host: (0, s.getDomainFromUrl)(this.uploadUrl),
                    remoteIp: "",
                    port: (0, s.getPortFromUrl)(this.uploadUrl),
                    duration: ((new Date).getTime() - this.uploadAt) / 1e3,
                    time: Math.floor(this.uploadAt / 1e3),
                    bytesSent: this.progress ? this.progress.total.loaded : 0,
                    upType: "jssdk-h5",
                    size: this.file.size
                }, this.token)
            }, t.prototype.directUpload = function () {
                var t = this, e = new FormData;
                return e.append("file", this.file), e.append("token", this.token), null != this.key && e.append("key", this.key), e.append("fname", this.putExtra.fname), (0, s.filterParams)(this.putExtra.params).forEach(function (t) {
                    return e.append(t[0], t[1])
                }), (0, s.request)(this.uploadUrl, {
                    method: "POST", body: e, onProgress: function (e) {
                        t.updateDirectProgress(e.loaded, e.total)
                    }, onCreate: this.xhrHandler
                }).then(function (e) {
                    return t.finishDirectProgress(), e
                })
            }, t.prototype.resumeUpload = function () {
                var t = this;
                this.loaded = {
                    mkFileProgress: 0,
                    chunks: null
                }, this.ctxList = [], this.localInfo = (0, s.getLocalFileInfo)(this.file), this.chunks = (0, s.getChunks)(this.file, 4194304), this.initChunksProgress();
                var e = new a.Pool(function (e) {
                    return t.uploadChunk(e)
                }, this.config.concurrentRequestLimit), n = this.chunks.map(function (t, n) {
                    return e.enqueue({chunk: t, index: n})
                }), r = o.default.all(n).then(function () {
                    return t.mkFileReq()
                });
                return r.then(function (e) {
                    (0, s.removeLocalFileInfo)(t.file)
                }, function (e) {
                    701 !== e.code ? (0, s.setLocalFileInfo)(t.file, t.ctxList) : (0, s.removeLocalFileInfo)(t.file)
                }), r
            }, t.prototype.uploadChunk = function (t) {
                var e = this, n = t.index, r = t.chunk, i = this.localInfo[n], u = this.uploadUrl + "/mkblk/" + r.size,
                    a = i && !(0, s.isChunkExpired)(i.time), c = this.config.checkByMD5, f = function () {
                        return e.updateChunkProgress(r.size, n), e.ctxList[n] = {
                            ctx: i.ctx,
                            time: i.time,
                            md5: i.md5
                        }, o.default.resolve(null)
                    };
                return a && !c ? f() : (0, s.computeMd5)(r).then(function (t) {
                    if (a && t === i.md5) return f();
                    var o = (0, s.getHeadersForChunkUpload)(e.token), c = e.xhrHandler;
                    return (0, s.request)(u, {
                        method: "POST", headers: o, body: r, onProgress: function (t) {
                            e.updateChunkProgress(t.loaded, n)
                        }, onCreate: c
                    }).then(function (r) {
                        e.ctxList[n] = {time: (new Date).getTime(), ctx: r.data.ctx, md5: t}
                    })
                })
            }, t.prototype.mkFileReq = function () {
                var t = this, e = (0, i.default)({mimeType: "application/octet-stream"}, this.putExtra),
                    n = (0, s.createMkFileUrl)(this.uploadUrl, this.file.size, this.key, e),
                    r = this.ctxList.map(function (t) {
                        return t.ctx
                    }).join(","), u = (0, s.getHeadersForMkFile)(this.token), a = this.xhrHandler;
                return (0, s.request)(n, {method: "POST", body: r, headers: u, onCreate: a}).then(function (e) {
                    return t.updateMkFileProgress(1), o.default.resolve(e)
                })
            }, t.prototype.updateDirectProgress = function (t, e) {
                this.progress = {total: this.getProgressInfoItem(t, e + 1)}, this.onData(this.progress)
            }, t.prototype.finishDirectProgress = function () {
                var t = this.progress.total;
                this.progress.total = this.getProgressInfoItem(t.loaded + 1, t.size), this.onData(this.progress)
            }, t.prototype.initChunksProgress = function () {
                this.loaded.chunks = this.chunks.map(function (t) {
                    return 0
                }), this.notifyResumeProgress()
            }, t.prototype.updateChunkProgress = function (t, e) {
                this.loaded.chunks[e] = t, this.notifyResumeProgress()
            }, t.prototype.updateMkFileProgress = function (t) {
                this.loaded.mkFileProgress = t, this.notifyResumeProgress()
            }, t.prototype.notifyResumeProgress = function () {
                var t = this;
                this.progress = {
                    total: this.getProgressInfoItem((0, s.sum)(this.loaded.chunks) + this.loaded.mkFileProgress, this.file.size + 1),
                    chunks: this.chunks.map(function (e, n) {
                        return t.getProgressInfoItem(t.loaded.chunks[n], e.size)
                    })
                }, this.onData(this.progress)
            }, t.prototype.getProgressInfoItem = function (t, e) {
                return {loaded: t, size: e, percent: t / e * 100}
            }, t
        }()
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {default: t}
        }

        e.__esModule = !0, e.Pool = void 0;
        var o = r(n(24)), i = r(n(23));
        e.Pool = function () {
            function t(e, n) {
                (0, i.default)(this, t), this.runTask = e, this.queue = [], this.processing = [], this.limit = n
            }

            return t.prototype.enqueue = function (t) {
                var e = this;
                return new o.default(function (n, r) {
                    e.queue.push({task: t, resolve: n, reject: r}), e.check()
                })
            }, t.prototype.run = function (t) {
                var e = this;
                this.queue = this.queue.filter(function (e) {
                    return e !== t
                }), this.processing.push(t), this.runTask(t.task).then(function () {
                    e.processing = e.processing.filter(function (e) {
                        return e !== t
                    }), t.resolve(), e.check()
                }, function (e) {
                    return t.reject(e)
                })
            }, t.prototype.check = function () {
                var t = this, e = this.processing.length, n = this.limit - e;
                this.queue.slice(0, n).forEach(function (e, n) {
                    t.run(e)
                })
            }, t
        }()
    }, function (t, e, n) {
        "use strict";

        function r(t, e) {
            return t = encodeURIComponent(t), "/" !== e.slice(e.length - 1) && (e += "/"), e + t
        }

        function o(t, e, n) {
            if (!/^\d$/.test(t.mode)) throw"mode should be number in imageView2";
            var o = t.mode, i = t.w, u = t.h, s = t.q, a = t.format;
            if (!i && !u) throw"param w and h is empty in imageView2";
            var c = "imageView2/" + encodeURIComponent(o);
            return c += i ? "/w/" + encodeURIComponent(i) : "", c += u ? "/h/" + encodeURIComponent(u) : "", c += s ? "/q/" + encodeURIComponent(s) : "", c += a ? "/format/" + encodeURIComponent(a) : "", e && (c = r(e, n) + "?" + c), c
        }

        function i(t, e, n) {
            var o = t["auto-orient"], i = t.thumbnail, u = t.strip, s = t.gravity, a = t.crop, c = t.quality,
                f = t.rotate, l = t.format, p = t.blur, h = "imageMogr2";
            return h += o ? "/auto-orient" : "", h += i ? "/thumbnail/" + encodeURIComponent(i) : "", h += u ? "/strip" : "", h += s ? "/gravity/" + encodeURIComponent(s) : "", h += c ? "/quality/" + encodeURIComponent(c) : "", h += a ? "/crop/" + encodeURIComponent(a) : "", h += f ? "/rotate/" + encodeURIComponent(f) : "", h += l ? "/format/" + encodeURIComponent(l) : "", h += p ? "/blur/" + encodeURIComponent(p) : "", e && (h = r(e, n) + "?" + h), h
        }

        function u(t, e, n) {
            var o = t.mode;
            if (!o) throw"mode can't be empty in watermark";
            var i = "watermark/" + o;
            if (1 !== o && 2 !== o) throw"mode is wrong";
            if (1 === o) {
                var u = t.image;
                if (!u) throw"image can't be empty in watermark";
                i += u ? "/image/" + (0, a.urlSafeBase64Encode)(u) : ""
            }
            if (2 === o) {
                var s = t.text, c = t.font, f = t.fontsize, l = t.fill;
                if (!s) throw"text can't be empty in watermark";
                i += s ? "/text/" + (0, a.urlSafeBase64Encode)(s) : "", i += c ? "/font/" + (0, a.urlSafeBase64Encode)(c) : "", i += f ? "/fontsize/" + f : "", i += l ? "/fill/" + (0, a.urlSafeBase64Encode)(l) : ""
            }
            var p = t.dissolve, h = t.gravity, d = t.dx, v = t.dy;
            return i += p ? "/dissolve/" + encodeURIComponent(p) : "", i += h ? "/gravity/" + encodeURIComponent(h) : "", i += d ? "/dx/" + encodeURIComponent(d) : "", i += v ? "/dy/" + encodeURIComponent(v) : "", e && (i = r(e, n) + "?" + i), i
        }

        e.__esModule = !0, e.imageView2 = o, e.imageMogr2 = i, e.watermark = u, e.imageInfo = function (t, e) {
            var n = r(t, e) + "?imageInfo";
            return (0, s.request)(n, {method: "GET"})
        }, e.exif = function (t, e) {
            var n = r(t, e) + "?exif";
            return (0, s.request)(n, {method: "GET"})
        }, e.pipeline = function (t, e, n) {
            var s = void 0, a = void 0, c = "";
            if ("[object Array]" === Object.prototype.toString.call(t)) {
                for (var f = 0, l = t.length; f < l; f++) {
                    if (!(s = t[f]).fop) throw"fop can't be empty in pipeline";
                    switch (s.fop) {
                        case"watermark":
                            c += u(s) + "|";
                            break;
                        case"imageView2":
                            c += o(s) + "|";
                            break;
                        case"imageMogr2":
                            c += i(s) + "|";
                            break;
                        default:
                            a = !0
                    }
                    if (a) throw"fop is wrong in pipeline"
                }
                if (e) {
                    var p = (c = r(e, n) + "?" + c).length;
                    "|" === c.slice(p - 1) && (c = c.slice(0, p - 1))
                }
                return c
            }
            throw"pipeline's first param should be array"
        };
        var s = n(16), a = n(56)
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {default: t}
        }

        e.__esModule = !0, e.Observable = void 0;
        var o = r(n(96)), i = r(n(23));
        e.Observable = function () {
            function t(e) {
                (0, i.default)(this, t), this.subscribeAction = e
            }

            return t.prototype.subscribe = function (t, e, n) {
                var r = new u(t, e, n), o = this.subscribeAction(r);
                return new s(r, o)
            }, t
        }();
        var u = function () {
            function t(e, n, r) {
                (0, i.default)(this, t), this.isStopped = !1, "object" === (void 0 === e ? "undefined" : (0, o.default)(e)) ? (this._onNext = e.next, this._onError = e.error, this._onCompleted = e.complete) : (this._onNext = e, this._onError = n, this._onCompleted = r)
            }

            return t.prototype.next = function (t) {
                !this.isStopped && this._onNext && this._onNext(t)
            }, t.prototype.error = function (t) {
                !this.isStopped && this._onError && (this.isStopped = !0, this._onError(t))
            }, t.prototype.complete = function (t) {
                !this.isStopped && this._onCompleted && (this.isStopped = !0, this._onCompleted(t))
            }, t
        }(), s = function () {
            function t(e, n) {
                (0, i.default)(this, t), this.observer = e, this.result = n
            }

            return t.prototype.unsubscribe = function () {
                this.observer.isStopped = !0, this.result()
            }, t
        }()
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {default: t}
        }

        e.__esModule = !0;
        var o = r(n(97)), i = r(n(99)),
            u = "function" == typeof i.default && "symbol" == typeof o.default ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof i.default && t.constructor === i.default && t !== i.default.prototype ? "symbol" : typeof t
            };
        e.default = "function" == typeof i.default && "symbol" === u(o.default) ? function (t) {
            return void 0 === t ? "undefined" : u(t)
        } : function (t) {
            return t && "function" == typeof i.default && t.constructor === i.default && t !== i.default.prototype ? "symbol" : void 0 === t ? "undefined" : u(t)
        }
    }, function (t, e, n) {
        t.exports = {default: n(98), __esModule: !0}
    }, function (t, e, n) {
        n(39), n(48), t.exports = n(35).f("iterator")
    }, function (t, e, n) {
        t.exports = {default: n(100), __esModule: !0}
    }, function (t, e, n) {
        n(101), n(38), n(107), n(108), t.exports = n(1).Symbol
    }, function (t, e, n) {
        "use strict";
        var r = n(0), o = n(9), i = n(8), u = n(4), s = n(42), a = n(102).KEY, c = n(10), f = n(30), l = n(21),
            p = n(20), h = n(2), d = n(35), v = n(36), y = n(103), m = n(104), g = n(3), b = n(7), _ = n(11), x = n(28),
            w = n(19), S = n(43), k = n(105), C = n(106), P = n(6), O = n(14), M = C.f, U = P.f, E = k.f, A = r.Symbol,
            j = r.JSON, I = j && j.stringify, F = h("_hidden"), L = h("toPrimitive"), T = {}.propertyIsEnumerable,
            R = f("symbol-registry"), q = f("symbols"), B = f("op-symbols"), z = Object.prototype,
            D = "function" == typeof A, N = r.QObject, H = !N || !N.prototype || !N.prototype.findChild,
            G = i && c(function () {
                return 7 != S(U({}, "a", {
                    get: function () {
                        return U(this, "a", {value: 7}).a
                    }
                })).a
            }) ? function (t, e, n) {
                var r = M(z, e);
                r && delete z[e], U(t, e, n), r && t !== z && U(z, e, r)
            } : U, V = function (t) {
                var e = q[t] = S(A.prototype);
                return e._k = t, e
            }, J = D && "symbol" == typeof A.iterator ? function (t) {
                return "symbol" == typeof t
            } : function (t) {
                return t instanceof A
            }, W = function (t, e, n) {
                return t === z && W(B, e, n), g(t), e = x(e, !0), g(n), o(q, e) ? (n.enumerable ? (o(t, F) && t[F][e] && (t[F][e] = !1), n = S(n, {enumerable: w(0, !1)})) : (o(t, F) || U(t, F, w(1, {})), t[F][e] = !0), G(t, e, n)) : U(t, e, n)
            }, X = function (t, e) {
                g(t);
                for (var n, r = y(e = _(e)), o = 0, i = r.length; i > o;) W(t, n = r[o++], e[n]);
                return t
            }, K = function (t) {
                var e = T.call(this, t = x(t, !0));
                return !(this === z && o(q, t) && !o(B, t)) && (!(e || !o(this, t) || !o(q, t) || o(this, F) && this[F][t]) || e)
            }, Y = function (t, e) {
                if (t = _(t), e = x(e, !0), t !== z || !o(q, e) || o(B, e)) {
                    var n = M(t, e);
                    return !n || !o(q, e) || o(t, F) && t[F][e] || (n.enumerable = !0), n
                }
            }, $ = function (t) {
                for (var e, n = E(_(t)), r = [], i = 0; n.length > i;) o(q, e = n[i++]) || e == F || e == a || r.push(e);
                return r
            }, Q = function (t) {
                for (var e, n = t === z, r = E(n ? B : _(t)), i = [], u = 0; r.length > u;) !o(q, e = r[u++]) || n && !o(z, e) || i.push(q[e]);
                return i
            };
        D || (s((A = function () {
            if (this instanceof A) throw TypeError("Symbol is not a constructor!");
            var t = p(arguments.length > 0 ? arguments[0] : void 0), e = function (n) {
                this === z && e.call(B, n), o(this, F) && o(this[F], t) && (this[F][t] = !1), G(this, t, w(1, n))
            };
            return i && H && G(z, t, {configurable: !0, set: e}), V(t)
        }).prototype, "toString", function () {
            return this._k
        }), C.f = Y, P.f = W, n(57).f = k.f = $, n(22).f = K, n(34).f = Q, i && !n(12) && s(z, "propertyIsEnumerable", K, !0), d.f = function (t) {
            return V(h(t))
        }), u(u.G + u.W + u.F * !D, {Symbol: A});
        for (var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), tt = 0; Z.length > tt;) h(Z[tt++]);
        for (var et = O(h.store), nt = 0; et.length > nt;) v(et[nt++]);
        u(u.S + u.F * !D, "Symbol", {
            for: function (t) {
                return o(R, t += "") ? R[t] : R[t] = A(t)
            }, keyFor: function (t) {
                if (!J(t)) throw TypeError(t + " is not a symbol!");
                for (var e in R) if (R[e] === t) return e
            }, useSetter: function () {
                H = !0
            }, useSimple: function () {
                H = !1
            }
        }), u(u.S + u.F * !D, "Object", {
            create: function (t, e) {
                return void 0 === e ? S(t) : X(S(t), e)
            },
            defineProperty: W,
            defineProperties: X,
            getOwnPropertyDescriptor: Y,
            getOwnPropertyNames: $,
            getOwnPropertySymbols: Q
        }), j && u(u.S + u.F * (!D || c(function () {
            var t = A();
            return "[null]" != I([t]) || "{}" != I({a: t}) || "{}" != I(Object(t))
        })), "JSON", {
            stringify: function (t) {
                for (var e, n, r = [t], o = 1; arguments.length > o;) r.push(arguments[o++]);
                if (n = e = r[1], (b(e) || void 0 !== t) && !J(t)) return m(e) || (e = function (t, e) {
                    if ("function" == typeof n && (e = n.call(this, t, e)), !J(e)) return e
                }), r[1] = e, I.apply(j, r)
            }
        }), A.prototype[L] || n(5)(A.prototype, L, A.prototype.valueOf), l(A, "Symbol"), l(Math, "Math", !0), l(r.JSON, "JSON", !0)
    }, function (t, e, n) {
        var r = n(20)("meta"), o = n(7), i = n(9), u = n(6).f, s = 0, a = Object.isExtensible || function () {
            return !0
        }, c = !n(10)(function () {
            return a(Object.preventExtensions({}))
        }), f = function (t) {
            u(t, r, {value: {i: "O" + ++s, w: {}}})
        }, l = t.exports = {
            KEY: r, NEED: !1, fastKey: function (t, e) {
                if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!i(t, r)) {
                    if (!a(t)) return "F";
                    if (!e) return "E";
                    f(t)
                }
                return t[r].i
            }, getWeak: function (t, e) {
                if (!i(t, r)) {
                    if (!a(t)) return !0;
                    if (!e) return !1;
                    f(t)
                }
                return t[r].w
            }, onFreeze: function (t) {
                return c && l.NEED && a(t) && !i(t, r) && f(t), t
            }
        }
    }, function (t, e, n) {
        var r = n(14), o = n(34), i = n(22);
        t.exports = function (t) {
            var e = r(t), n = o.f;
            if (n) for (var u, s = n(t), a = i.f, c = 0; s.length > c;) a.call(t, u = s[c++]) && e.push(u);
            return e
        }
    }, function (t, e, n) {
        var r = n(15);
        t.exports = Array.isArray || function (t) {
            return "Array" == r(t)
        }
    }, function (t, e, n) {
        var r = n(11), o = n(57).f, i = {}.toString,
            u = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        t.exports.f = function (t) {
            return u && "[object Window]" == i.call(t) ? function (t) {
                try {
                    return o(t)
                } catch (t) {
                    return u.slice()
                }
            }(t) : o(r(t))
        }
    }, function (t, e, n) {
        var r = n(22), o = n(19), i = n(11), u = n(28), s = n(9), a = n(41), c = Object.getOwnPropertyDescriptor;
        e.f = n(8) ? c : function (t, e) {
            if (t = i(t), e = u(e, !0), a) try {
                return c(t, e)
            } catch (t) {
            }
            if (s(t, e)) return o(!r.f.call(t, e), t[e])
        }
    }, function (t, e, n) {
        n(36)("asyncIterator")
    }, function (t, e, n) {
        n(36)("observable")
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {default: t}
        }

        e.__esModule = !0, e.StatisticsLogger = void 0;
        var o = r(n(55)), i = r(n(23)), u = n(16);
        e.StatisticsLogger = function () {
            function t() {
                (0, i.default)(this, t)
            }

            return t.prototype.log = function (t, e) {
                var n = "";
                (0, o.default)(t).forEach(function (e) {
                    return n += t[e] + ","
                }), this.send(n, e)
            }, t.prototype.send = function (t, e) {
                var n = (0, u.createXHR)(), r = 0;
                n.open("POST", "https://uplog.qbox.me/log/3"), n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), n.setRequestHeader("Authorization", "UpToken " + e), n.onreadystatechange = function () {
                    4 === n.readyState && 200 !== n.status && ++r <= 3 && n.send(t)
                }, n.send(t)
            }, t
        }()
    }])
});
//# sourceMappingURL=qiniu.min.js.map