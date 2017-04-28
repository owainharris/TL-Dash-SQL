(function() {
    var a = "\n//# sourceURL=",
        k = "' of type ",
        n = '<script type="text/javascript" src="',
        q = "SCRIPT",
        r = "annotatedtimeline",
        t = "annotationchart",
        u = "array",
        v = "browserchart",
        w = "complete",
        x = "corechart",
        y = "dygraph",
        z = "function",
        A = "hasOwnProperty",
        B = "https://www.gstatic.com/charts/%{version}/third_party/%{subdir}/%{filename}",
        C = "imagechart",
        D = "number",
        E = "object",
        F = "orgchart",
        G = "propertyIsEnumerable",
        H = "string",
        I = "text/javascript",
        J = "toLocaleString",
        K = "ui",
        L = "ui_base",
        M = "webfontloader";

    function N() {
        return function(b) {
            return b
        }
    }

    function O() {
        return function() {}
    }

    function P(b) {
        return function() {
            return this[b]
        }
    }
    var Q,
        R = R || {};
    R.global = this;
    R.P = function(b) {
        return void 0 !== b
    };
    R.ud = function(b, c, d) {
        b = b.split(".");
        d = d || R.global;
        b[0] in d || !d.execScript || d.execScript("var " + b[0]);
        for (var e; b.length && (e = b.shift());)
            !b.length && R.P(c) ? d[e] = c : d = d[e] ? d[e] : d[e] = {}
    };
    R.Fq = function(b, c) {
        R.ud(b, c)
    };
    R.ea = !0;
    R.$ = "en";
    R.jd = !0;
    R.Pi = !1;
    R.ii = !R.ea;
    R.Se = !1;
    R.Ys = function(b) {
        if (R.Td())
            throw Error("goog.provide can not be used within a goog.module.");
        R.Df(b)
    };
    R.Df = function(b, c) {
        R.ud(b, c)
    };
    R.Vi = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
    R.ee = function(b) {
        if (!R.K(b) || !b || -1 == b.search(R.Vi))
            throw Error("Invalid module identifier");
        if (!R.Td())
            throw Error("Module " + b + " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
        if (R.na.fe)
            throw Error("goog.module may only be called once per module.");
        R.na.fe = b
    };
    R.ee.get = function() {
        return null
    };
    R.ee.pr = function() {
        return null
    };
    R.na = null;
    R.Td = function() {
        return null != R.na
    };
    R.ee.rd = function() {
        R.na.rd = !0
    };
    R.Ut = function(b) {
        if (R.ii)
            throw b = b || "", Error("Importing test-only code into non-debug environment" + (b ? ": " + b : "."));
    };
    R.Wq = O();
    R.vr = function(b) {
        b = b.split(".");
        for (var c = R.global, d; d = b.shift();)
            if (R.mb(c[d]))
                c = c[d];
            else
                return null;
        return c
    };
    R.Cr = function(b, c) {
        c = c || R.global;
        for (var d in b)
            c[d] = b[d]
    };
    R.wp = function(b, c, d, e) {
        if (R.Pe) {
            var f;
            b = b.replace(/\\/g, "/");
            var g = R.ma;
            e && "boolean" !== typeof e || (e = e ? {
                module: "goog"
            } : {});
            for (var h = 0; f = c[h]; h++)
                g.dc[f] = b, g.Yd[b] = e;
            for (e = 0; c = d[e]; e++)
                b in g.pb || (g.pb[b] = {}), g.pb[b][c] = !0
        }
    };
    R.Bu = !1;
    R.on = !0;
    R.Sk = function(b) {
        R.global.console && R.global.console.error(b)
    };
    R.mt = O();
    R.Qa = "";
    R.Wa = O();
    R.vp = function() {
        throw Error("unimplemented abstract method");
    };
    R.xp = function(b) {
        b.Od = void 0;
        b.or = function() {
            if (b.Od)
                return b.Od;
            R.ea && (R.Ig[R.Ig.length] = b);
            return b.Od = new b
        }
    };
    R.Ig = [];
    R.wi = !0;
    R.Mi = R.ea;
    R.Rk = {};
    R.Pe = !1;
    R.lf = "detect";
    R.Ri = "transpile.js";
    R.Pe && (R.ma = {
            Yd: {},
            dc: {},
            pb: {},
            Mh: {},
            ze: {},
            Ab: {}
        }, R.Dg = function() {
            var b = R.global.document;
            return null != b && "write" in b
        }, R.Oj = function() {
            if (R.P(R.global.$h))
                R.Qa = R.global.$h;
            else if (R.Dg())
                for (var b = R.global.document.getElementsByTagName(q), c = b.length - 1; 0 <= c; --c) {
                    var d = b[c].src,
                        e = d.lastIndexOf("?"),
                        e = -1 == e ? d.length : e;
                    if ("base.js" == d.substr(e - 7, 7)) {
                        R.Qa = d.substr(0, e - 7);
                        break
                    }
                }
        }, R.Nd = function(b, c) {
            (R.global.Nm || R.im)(b, c) && (R.ma.ze[b] = !0)
        }, R.ri = !(R.global.atob || !R.global.document || !R.global.document.all),
        R.nk = function(b, c, d) {
            R.Nd("", 'goog.retrieveAndExec_("' + b + '", ' + c + ", " + d + ");")
        }, R.ie = [], R.Fu = function(b, c) {
            return R.wi && R.P(R.global.JSON) ? "goog.loadModule(" + R.global.JSON.stringify(c + a + b + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + c + "\n;return exports});\n//# sourceURL=" + b + "\n"
        }, R.Qk = function() {
            var b = R.ie.length;
            if (0 < b) {
                var c = R.ie;
                R.ie = [];
                for (var d = 0; d < b; d++)
                    R.fh(c[d])
            }
        }, R.Es = function(b) {
            R.Ng(b) && R.aj(b) && R.fh(R.Qa + R.Hd(b))
        }, R.Ng = function(b) {
            var c = (b = R.Hd(b)) && R.ma.Yd[b] || {},
                d = c.lang ||
                "es3";
            return b && ("goog" == c.module || R.jh(d)) ? R.Qa + b in R.ma.Ab : !1
        }, R.aj = function(b) {
            if ((b = R.Hd(b)) && b in R.ma.pb)
                for (var c in R.ma.pb[b])
                    if (!R.Ck(c) && !R.Ng(c))
                        return !1;
            return !0
        }, R.fh = function(b) {
            if (b in R.ma.Ab) {
                var c = R.ma.Ab[b];
                delete R.ma.Ab[b];
                R.hk(c)
            }
        }, R.As = O(), R.hm = function(b) {
            R.global.document.write(n + b + '">\x3c/script>')
        }, R.bj = function(b) {
            var c = R.global.document,
                d = c.createElement("script");
            d.type = I;
            d.src = b;
            d.defer = !1;
            d.async = !1;
            c.head.appendChild(d)
        }, R.im = function(b, c) {
            if (R.Dg()) {
                var d = R.global.document;
                if (!R.Se && d.readyState == w) {
                    if (/\bdeps.js$/.test(b))
                        return !1;
                    throw Error('Cannot write "' + b + '" after document load');
                }
                void 0 === c ? R.ri ? (c = " onreadystatechange='goog.onScriptLoad_(this, " + ++R.ah + ")' ", d.write(n + b + '"' + c + ">\x3c/script>")) : R.Se ? R.bj(b) : R.hm(b) : d.write('<script type="text/javascript">' + R.jl(c) + "\x3c/script>");
                return !0
            }
            return !1
        }, R.jl = function(b) {
            return b.replace(/<\/(SCRIPT)/ig, "\\x3c\\$1")
        }, R.jh = function(b) {
            if ("always" == R.lf)
                return !0;
            if ("never" == R.lf)
                return !1;
            R.Oc || (R.Oc = R.uj());
            if (b in
                R.Oc)
                return R.Oc[b];
            throw Error("Unknown language mode: " + b);
        }, R.Oc = null, R.ah = 0, R.Ss = function(b, c) {
            b.readyState == w && R.ah == c && R.Qk();
            return !0
        }, R.Gu = function(b) {
            function c(b) {
                if (!(b in f.ze || b in f.Mh)) {
                    f.Mh[b] = !0;
                    if (b in f.pb)
                        for (var g in f.pb[b])
                            if (!R.Ck(g))
                                if (g in f.dc)
                                    c(f.dc[g]);
                                else
                                    throw Error("Undefined nameToPath for " + g);
                    b in e || (e[b] = !0, d.push(b))
                }
            }
            var d = [],
                e = {},
                f = R.ma;
            c(b);
            for (b = 0; b < d.length; b++) {
                var g = d[b];
                R.ma.ze[g] = !0
            }
            var h = R.na;
            R.na = null;
            for (b = 0; b < d.length; b++)
                if (g = d[b]) {
                    var l = f.Yd[g] || {},
                        m = R.jh(l.lang || "es3");
                    "goog" == l.module || m ? R.nk(R.Qa + g, "goog" == l.module, m) : R.Nd(R.Qa + g)
                } else
                    throw R.na = h, Error("Undefined script input");
            R.na = h
        }, R.Hd = function(b) {
            return b in R.ma.dc ? R.ma.dc[b] : null
        }, R.Oj(), R.global.Om || R.Nd(R.Qa + "deps.js"));
    R.zs = function(b) {
        var c = R.na;
        try {
            R.na = {
                fe: void 0,
                rd: !1
            };
            var d;
            if (R.Aa(b))
                d = b.call(void 0, {});
            else if (R.K(b))
                d = R.Ok.call(void 0, b);
            else
                throw Error("Invalid module definition");
            var e = R.na.fe;
            if (!R.K(e) || !e)
                throw Error('Invalid module name "' + e + '"');
            R.na.rd ? R.Df(e, d) : R.Mi && Object.seal && R.la(d) && Object.seal(d);
            R.Rk[e] = d
        } finally {
            R.na = c
        }
    };
    R.Ok = function(b) {
        eval(b);
        return {}
    };
    R.Ls = function(b) {
        b = b.split("/");
        for (var c = 0; c < b.length;)
            "." == b[c] ? b.splice(c, 1) : c && ".." == b[c] && b[c - 1] && ".." != b[c - 1] ? b.splice(--c, 2) : c++;
        return b.join("/")
    };
    R.Nk = function(b) {
        if (R.global.bi)
            return R.global.bi(b);
        try {
            var c = new R.global.XMLHttpRequest;
            c.open("get", b, !1);
            c.send();
            return 0 == c.status || 200 == c.status ? c.responseText : null
        } catch (d) {
            return null
        }
    };
    R.ot = O();
    R.qu = function(b, c) {
        var d = R.global.$jscomp;
        d || (R.global.$jscomp = d = {});
        var e = d.we;
        if (!e) {
            var f = R.Qa + R.Ri,
                g = R.Nk(f);
            if (g) {
                eval(g + a + f);
                if (R.global.$gwtExport && R.global.$gwtExport.$jscomp && !R.global.$gwtExport.$jscomp.transpile)
                    throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: ' + JSON.stringify(R.global.$gwtExport));
                R.global.$jscomp.we = R.global.$gwtExport.$jscomp.transpile;
                d = R.global.$jscomp;
                e = d.we
            }
        }
        if (!e)
            var h = " requires transpilation but no transpiler was found.",
                h = h + ' Please add "//javascript/closure:transpiler" as a data dependency to ensure it is included.',
                e = d.we = function(b, c) {
                    R.Sk(c + h);
                    return b
                };
        return e(b, c)
    };
    R.Z = function(b) {
        var c = typeof b;
        if (c == E)
            if (b) {
                if (b instanceof Array)
                    return u;
                if (b instanceof Object)
                    return c;
                var d = Object.prototype.toString.call(b);
                if ("[object Window]" == d)
                    return E;
                if ("[object Array]" == d || typeof b.length == D && "undefined" != typeof b.splice && "undefined" != typeof b.propertyIsEnumerable && !b.propertyIsEnumerable("splice"))
                    return u;
                if ("[object Function]" == d || "undefined" != typeof b.call && "undefined" != typeof b.propertyIsEnumerable && !b.propertyIsEnumerable("call"))
                    return z
            } else
                return "null";
        else if (c ==
            z && "undefined" == typeof b.call)
            return E;
        return c
    };
    R.js = function(b) {
        return null === b
    };
    R.mb = function(b) {
        return null != b
    };
    R.isArray = function(b) {
        return R.Z(b) == u
    };
    R.Yb = function(b) {
        var c = R.Z(b);
        return c == u || c == E && typeof b.length == D
    };
    R.Tr = function(b) {
        return R.la(b) && typeof b.getFullYear == z
    };
    R.K = function(b) {
        return typeof b == H
    };
    R.qk = function(b) {
        return "boolean" == typeof b
    };
    R.ac = function(b) {
        return typeof b == D
    };
    R.Aa = function(b) {
        return R.Z(b) == z
    };
    R.la = function(b) {
        var c = typeof b;
        return c == E && null != b || c == z
    };
    R.xg = function(b) {
        return b[R.eb] || (b[R.eb] = ++R.Vl)
    };
    R.Fr = function(b) {
        return !!b[R.eb]
    };
    R.ol = function(b) {
        null !== b && "removeAttribute" in b && b.removeAttribute(R.eb);
        try {
            delete b[R.eb]
        } catch (c) {}
    };
    R.eb = "closure_uid_" + (1E9 * Math.random() >>> 0);
    R.Vl = 0;
    R.nr = R.xg;
    R.gt = R.ol;
    R.qj = function(b) {
        var c = R.Z(b);
        if (c == E || c == u) {
            if (b.clone)
                return b.clone();
            var c = c == u ? [] : {},
                d;
            for (d in b)
                c[d] = R.qj(b[d]);
            return c
        }
        return b
    };
    R.gj = function(b, c, d) {
        return b.call.apply(b.bind, arguments)
    };
    R.fj = function(b, c, d) {
        if (!b)
            throw Error();
        if (2 < arguments.length) {
            var e = Array.prototype.slice.call(arguments, 2);
            return function() {
                var d = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(d, e);
                return b.apply(c, d)
            }
        }
        return function() {
            return b.apply(c, arguments)
        }
    };
    R.bind = function(b, c, d) {
        R.bind = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? R.gj : R.fj;
        return R.bind.apply(null, arguments)
    };
    R.ob = function(b, c) {
        var d = Array.prototype.slice.call(arguments, 1);
        return function() {
            var c = d.slice();
            c.push.apply(c, arguments);
            return b.apply(this, c)
        }
    };
    R.Gs = function(b, c) {
        for (var d in c)
            b[d] = c[d]
    };
    R.now = R.jd && Date.now || function() {
        return +new Date
    };
    R.hk = function(b) {
        if (R.global.execScript)
            R.global.execScript(b, "JavaScript");
        else if (R.global.eval) {
            if (null == R.uc)
                if (R.global.eval("var _evalTest_ = 1;"), "undefined" != typeof R.global._evalTest_) {
                    try {
                        delete R.global._evalTest_
                    } catch (e) {}
                    R.uc = !0
                } else
                    R.uc = !1;
            if (R.uc)
                R.global.eval(b);
            else {
                var c = R.global.document,
                    d = c.createElement(q);
                d.type = I;
                d.defer = !1;
                d.appendChild(c.createTextNode(b));
                c.body.appendChild(d);
                c.body.removeChild(d)
            }
        } else
            throw Error("goog.globalEval not available");
    };
    R.uc = null;
    R.kr = function(b, c) {
        function d(b) {
            b = b.split("-");
            for (var c = [], d = 0; d < b.length; d++)
                c.push(e(b[d]));
            return c.join("-")
        }

        function e(b) {
            return R.If[b] || b
        }
        if ("." == String(b).charAt(0))
            throw Error('className passed in goog.getCssName must not start with ".". You passed: ' + b);
        var f;
        f = R.If ? "BY_WHOLE" == R.Bj ? e : d : N();
        b = c ? b + "-" + f(c) : f(b);
        return R.global.ai ? R.global.ai(b) : b
    };
    R.Ct = function(b, c) {
        R.If = b;
        R.Bj = c
    };
    R.qr = function(b, c) {
        c && (b = b.replace(/\{\$([^}]+)}/g, function(b, e) {
            return null != c && e in c ? c[e] : b
        }));
        return b
    };
    R.rr = N();
    R.Ja = function(b, c) {
        R.ud(b, c, void 0)
    };
    R.Rq = function(b, c, d) {
        b[c] = d
    };
    R.kb = function(b, c) {
        function d() {}
        d.prototype = c.prototype;
        b.Uc = c.prototype;
        b.prototype = new d;
        b.prototype.constructor = b;
        b.ej = function(b, d, g) {
            for (var e = Array(arguments.length - 2), f = 2; f < arguments.length; f++)
                e[f - 2] = arguments[f];
            return c.prototype[d].apply(b, e)
        }
    };
    R.ej = function(b, c, d) {
        var e = arguments.callee.caller;
        if (R.Pi || R.ea && !e)
            throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
        if (e.Uc) {
            for (var f = Array(arguments.length - 1), g = 1; g < arguments.length; g++)
                f[g - 1] = arguments[g];
            return e.Uc.constructor.apply(b, f)
        }
        f = Array(arguments.length - 2);
        for (g = 2; g < arguments.length; g++)
            f[g - 2] = arguments[g];
        for (var g = !1, h = b.constructor; h; h = h.Uc && h.Uc.constructor)
            if (h.prototype[c] ===
                e)
                g = !0;
            else if (g)
            return h.prototype[c].apply(b, f);
        if (b[c] === e)
            return b.constructor.prototype[c].apply(b, f);
        throw Error("goog.base called from a method of one name to a method of a different name");
    };
    R.scope = function(b) {
        if (R.Td())
            throw Error("goog.scope is not supported within a goog.module.");
        b.call(R.global)
    };
    R.qa = function(b, c) {
        var d = c.constructor,
            e = c.Nl;
        d && d != Object.prototype.constructor || (d = function() {
            throw Error("cannot instantiate an interface (no constructor defined).");
        });
        d = R.qa.vj(d, b);
        b && R.kb(d, b);
        delete c.constructor;
        delete c.Nl;
        R.qa.sf(d.prototype, c);
        null != e && (e instanceof Function ? e(d) : R.qa.sf(d, e));
        return d
    };
    R.qa.Li = R.ea;
    R.qa.vj = function(b, c) {
        function d() {
            var c = b.apply(this, arguments) || this;
            c[R.eb] = c[R.eb];
            this.constructor === d && e && Object.seal instanceof Function && Object.seal(c);
            return c
        }
        if (!R.qa.Li)
            return b;
        var e = !R.qa.Gk(c);
        return d
    };
    R.qa.Gk = function(b) {
        return b && b.prototype && b.prototype[R.Ti]
    };
    R.qa.cf = ["constructor", A, "isPrototypeOf", G, J, "toString", "valueOf"];
    R.qa.sf = function(b, c) {
        for (var d in c)
            Object.prototype.hasOwnProperty.call(c, d) && (b[d] = c[d]);
        for (var e = 0; e < R.qa.cf.length; e++)
            d = R.qa.cf[e], Object.prototype.hasOwnProperty.call(c, d) && (b[d] = c[d])
    };
    R.ju = O();
    R.Ti = "goog_defineClass_legacy_unsealable";
    R.uj = function() {
        function b(b, c) {
            e ? d[b] = !0 : c() ? d[b] = !1 : e = d[b] = !0
        }

        function c(b) {
            try {
                return !!eval(b)
            } catch (g) {
                return !1
            }
        }
        var d = {
                es3: !1
            },
            e = !1;
        b("es5", function() {
            return c("[1,].length==1")
        });
        b("es6", function() {
            return c('(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()')
        });
        b("es6-impl",
            function() {
                return !0
            });
        b("es7", function() {
            return c("2 ** 2 == 4")
        });
        b("es8", function() {
            return c("async () => 1, true")
        });
        return d
    };
    R.debug = {};
    R.debug.Error = function(b) {
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, R.debug.Error);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        b && (this.message = String(b))
    };
    R.kb(R.debug.Error, Error);
    R.debug.Error.prototype.name = "CustomError";
    R.a = {};
    R.a.ga = {
        Oa: 1,
        wm: 2,
        nc: 3,
        Km: 4,
        qn: 5,
        pn: 6,
        Ho: 7,
        Tm: 8,
        DOCUMENT: 9,
        gn: 10,
        ki: 11,
        xo: 12
    };
    R.f = {};
    R.f.fd = !1;
    R.f.mi = !1;
    R.f.nf = {
        $e: "\u00a0"
    };
    R.f.startsWith = function(b, c) {
        return 0 == b.lastIndexOf(c, 0)
    };
    R.f.endsWith = function(b, c) {
        var d = b.length - c.length;
        return 0 <= d && b.indexOf(c, d) == d
    };
    R.f.oj = function(b) {
        return 0 == R.f.wf("tel:", b.substr(0, 4))
    };
    R.f.gq = function(b, c) {
        return 0 == R.f.wf(c, b.substr(b.length - c.length, c.length))
    };
    R.f.hq = function(b, c) {
        return b.toLowerCase() == c.toLowerCase()
    };
    R.f.Pl = function(b, c) {
        for (var d = b.split("%s"), e = "", f = Array.prototype.slice.call(arguments, 1); f.length && 1 < d.length;)
            e += d.shift() + f.shift();
        return e + d.join("%s")
    };
    R.f.mq = function(b) {
        return b.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
    };
    R.f.Rd = function(b) {
        return /^[\s\xa0]*$/.test(b)
    };
    R.f.Wr = function(b) {
        return 0 == b.length
    };
    R.f.Cc = R.f.Rd;
    R.f.tk = function(b) {
        return R.f.Rd(R.f.Yk(b))
    };
    R.f.Vr = R.f.tk;
    R.f.Rr = function(b) {
        return !/[^\t\n\r ]/.test(b)
    };
    R.f.Or = function(b) {
        return !/[^a-zA-Z]/.test(b)
    };
    R.f.ks = function(b) {
        return !/[^0-9]/.test(b)
    };
    R.f.Pr = function(b) {
        return !/[^a-zA-Z0-9]/.test(b)
    };
    R.f.rs = function(b) {
        return " " == b
    };
    R.f.ss = function(b) {
        return 1 == b.length && " " <= b && "~" >= b || "\u0080" <= b && "\ufffd" >= b
    };
    R.f.fu = function(b) {
        return b.replace(/(\r\n|\r|\n)+/g, " ")
    };
    R.f.nj = function(b) {
        return b.replace(/(\r\n|\r|\n)/g, "\n")
    };
    R.f.Ns = function(b) {
        return b.replace(/\xa0|\s/g, " ")
    };
    R.f.Ms = function(b) {
        return b.replace(/\xa0|[ \t]+/g, " ")
    };
    R.f.lq = function(b) {
        return b.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
    };
    R.f.trim = R.jd && String.prototype.trim ? function(b) {
        return b.trim()
    } : function(b) {
        return b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    };
    R.f.trimLeft = function(b) {
        return b.replace(/^[\s\xa0]+/, "")
    };
    R.f.trimRight = function(b) {
        return b.replace(/[\s\xa0]+$/, "")
    };
    R.f.wf = function(b, c) {
        b = String(b).toLowerCase();
        c = String(c).toLowerCase();
        return b < c ? -1 : b == c ? 0 : 1
    };
    R.f.mh = function(b, c, d) {
        if (b == c)
            return 0;
        if (!b)
            return -1;
        if (!c)
            return 1;
        for (var e = b.toLowerCase().match(d), f = c.toLowerCase().match(d), g = Math.min(e.length, f.length), h = 0; h < g; h++) {
            d = e[h];
            var l = f[h];
            if (d != l)
                return b = parseInt(d, 10), !isNaN(b) && (c = parseInt(l, 10), !isNaN(c) && b - c) ? b - c : d < l ? -1 : 1
        }
        return e.length != f.length ? e.length - f.length : b < c ? -1 : 1
    };
    R.f.Mr = function(b, c) {
        return R.f.mh(b, c, /\d+|\D+/g)
    };
    R.f.Sj = function(b, c) {
        return R.f.mh(b, c, /\d+|\.\d+|\D+/g)
    };
    R.f.Qs = R.f.Sj;
    R.f.Au = function(b) {
        return encodeURIComponent(String(b))
    };
    R.f.yu = function(b) {
        return decodeURIComponent(b.replace(/\+/g, " "))
    };
    R.f.kh = function(b, c) {
        return b.replace(/(\r\n|\r|\n)/g, c ? "<br />" : "<br>")
    };
    R.f.xa = function(b, c) {
        if (c)
            b = b.replace(R.f.Ae, "&amp;").replace(R.f.Ze, "&lt;").replace(R.f.We, "&gt;").replace(R.f.gf, "&quot;").replace(R.f.jf, "&#39;").replace(R.f.bf, "&#0;"), R.f.fd && (b = b.replace(R.f.Te, "&#101;"));
        else {
            if (!R.f.Rh.test(b))
                return b; -
            1 != b.indexOf("&") && (b = b.replace(R.f.Ae, "&amp;")); -
            1 != b.indexOf("<") && (b = b.replace(R.f.Ze, "&lt;")); -
            1 != b.indexOf(">") && (b = b.replace(R.f.We, "&gt;")); -
            1 != b.indexOf('"') && (b = b.replace(R.f.gf, "&quot;")); -
            1 != b.indexOf("'") && (b = b.replace(R.f.jf, "&#39;")); -
            1 != b.indexOf("\x00") &&
                (b = b.replace(R.f.bf, "&#0;"));
            R.f.fd && -1 != b.indexOf("e") && (b = b.replace(R.f.Te, "&#101;"))
        }
        return b
    };
    R.f.Ae = /&/g;
    R.f.Ze = /</g;
    R.f.We = />/g;
    R.f.gf = /"/g;
    R.f.jf = /'/g;
    R.f.bf = /\x00/g;
    R.f.Te = /e/g;
    R.f.Rh = R.f.fd ? /[\x00&<>"'e]/ : /[\x00&<>"']/;
    R.f.Jh = function(b) {
        return R.f.contains(b, "&") ? !R.f.mi && "document" in R.global ? R.f.Kh(b) : R.f.Yl(b) : b
    };
    R.f.vu = function(b, c) {
        return R.f.contains(b, "&") ? R.f.Kh(b, c) : b
    };
    R.f.Kh = function(b, c) {
        var d = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"'
            },
            e;
        e = c ? c.createElement("div") : R.global.document.createElement("div");
        return b.replace(R.f.oi, function(b, c) {
            var f = d[b];
            if (f)
                return f;
            "#" == c.charAt(0) && (c = Number("0" + c.substr(1)), isNaN(c) || (f = String.fromCharCode(c)));
            f || (e.innerHTML = b + " ", f = e.firstChild.nodeValue.slice(0, -1));
            return d[b] = f
        })
    };
    R.f.Yl = function(b) {
        return b.replace(/&([^;]+);/g, function(b, d) {
            switch (d) {
                case "amp":
                    return "&";
                case "lt":
                    return "<";
                case "gt":
                    return ">";
                case "quot":
                    return '"';
                default:
                    return "#" != d.charAt(0) || (d = Number("0" + d.substr(1)), isNaN(d)) ? b : String.fromCharCode(d)
            }
        })
    };
    R.f.oi = /&([^;\s<&]+);?/g;
    R.f.em = function(b) {
        return R.f.kh(b.replace(/  /g, " &#160;"), void 0)
    };
    R.f.Xs = function(b) {
        return b.replace(/(^|[\n ]) /g, "$1" + R.f.nf.$e)
    };
    R.f.iu = function(b, c) {
        for (var d = c.length, e = 0; e < d; e++) {
            var f = 1 == d ? c : c.charAt(e);
            if (b.charAt(0) == f && b.charAt(b.length - 1) == f)
                return b.substring(1, b.length - 1)
        }
        return b
    };
    R.f.truncate = function(b, c, d) {
        d && (b = R.f.Jh(b));
        b.length > c && (b = b.substring(0, c - 3) + "...");
        d && (b = R.f.xa(b));
        return b
    };
    R.f.tu = function(b, c, d, e) {
        d && (b = R.f.Jh(b));
        e && b.length > c ? (e > c && (e = c), b = b.substring(0, c - e) + "..." + b.substring(b.length - e)) : b.length > c && (e = Math.floor(c / 2), b = b.substring(0, e + c % 2) + "..." + b.substring(b.length - e));
        d && (b = R.f.xa(b));
        return b
    };
    R.f.re = {
        "\x00": "\\0",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\x0B",
        '"': '\\"',
        "\\": "\\\\",
        "<": "<"
    };
    R.f.Ec = {
        "'": "\\'"
    };
    R.f.quote = function(b) {
        b = String(b);
        for (var c = ['"'], d = 0; d < b.length; d++) {
            var e = b.charAt(d),
                f = e.charCodeAt(0);
            c[d + 1] = R.f.re[e] || (31 < f && 127 > f ? e : R.f.Lf(e))
        }
        c.push('"');
        return c.join("")
    };
    R.f.Qq = function(b) {
        for (var c = [], d = 0; d < b.length; d++)
            c[d] = R.f.Lf(b.charAt(d));
        return c.join("")
    };
    R.f.Lf = function(b) {
        if (b in R.f.Ec)
            return R.f.Ec[b];
        if (b in R.f.re)
            return R.f.Ec[b] = R.f.re[b];
        var c,
            d = b.charCodeAt(0);
        if (31 < d && 127 > d)
            c = b;
        else {
            if (256 > d) {
                if (c = "\\x", 16 > d || 256 < d)
                    c += "0"
            } else
                c = "\\u", 4096 > d && (c += "0");
            c += d.toString(16).toUpperCase()
        }
        return R.f.Ec[b] = c
    };
    R.f.contains = function(b, c) {
        return -1 != b.indexOf(c)
    };
    R.f.xf = function(b, c) {
        return R.f.contains(b.toLowerCase(), c.toLowerCase())
    };
    R.f.tq = function(b, c) {
        return b && c ? b.split(c).length - 1 : 0
    };
    R.f.Ib = function(b, c, d) {
        var e = b;
        0 <= c && c < b.length && 0 < d && (e = b.substr(0, c) + b.substr(c + d, b.length - c - d));
        return e
    };
    R.f.remove = function(b, c) {
        return b.replace(c, "")
    };
    R.f.ct = function(b, c) {
        c = new RegExp(R.f.je(c), "g");
        return b.replace(c, "")
    };
    R.f.kt = function(b, c, d) {
        c = new RegExp(R.f.je(c), "g");
        return b.replace(c, d.replace(/\$/g, "$$$$"))
    };
    R.f.je = function(b) {
        return String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    };
    R.f.repeat = String.prototype.repeat ? function(b, c) {
        return b.repeat(c)
    } : function(b, c) {
        return Array(c + 1).join(b)
    };
    R.f.Vs = function(b, c, d) {
        b = R.P(d) ? b.toFixed(d) : String(b);
        d = b.indexOf("."); -
        1 == d && (d = b.length);
        return R.f.repeat("0", Math.max(0, c - d)) + b
    };
    R.f.Yk = function(b) {
        return null == b ? "" : String(b)
    };
    R.f.aq = function(b) {
        return Array.prototype.join.call(arguments, "")
    };
    R.f.yr = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ R.now()).toString(36)
    };
    R.f.Qb = function(b, c) {
        var d = 0;
        b = R.f.trim(String(b)).split(".");
        c = R.f.trim(String(c)).split(".");
        for (var e = Math.max(b.length, c.length), f = 0; 0 == d && f < e; f++) {
            var g = b[f] || "",
                h = c[f] || "";
            do {
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                if (0 == g[0].length && 0 == h[0].length)
                    break;
                d = R.f.nd(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || R.f.nd(0 == g[2].length, 0 == h[2].length) || R.f.nd(g[2], h[2]);
                g = g[3];
                h = h[3]
            } while (0 == d)
        }
        return d
    };
    R.f.nd = function(b, c) {
        return b < c ? -1 : b > c ? 1 : 0
    };
    R.f.Gr = function(b) {
        for (var c = 0, d = 0; d < b.length; ++d)
            c = 31 * c + b.charCodeAt(d) >>> 0;
        return c
    };
    R.f.Zl = 2147483648 * Math.random() | 0;
    R.f.Bq = function() {
        return "goog_" + R.f.Zl++
    };
    R.f.mu = function(b) {
        var c = Number(b);
        return 0 == c && R.f.Rd(b) ? NaN : c
    };
    R.f.as = function(b) {
        return /^[a-z]+([A-Z][a-z]*)*$/.test(b)
    };
    R.f.ts = function(b) {
        return /^([A-Z][a-z]*)+$/.test(b)
    };
    R.f.lu = function(b) {
        return String(b).replace(/\-([a-z])/g, function(b, d) {
            return d.toUpperCase()
        })
    };
    R.f.ou = function(b) {
        return String(b).replace(/([A-Z])/g, "-$1").toLowerCase()
    };
    R.f.pu = function(b, c) {
        c = R.K(c) ? R.f.je(c) : "\\s";
        return b.replace(new RegExp("(^" + (c ? "|[" + c + "]+" : "") + ")([a-z])", "g"), function(b, c, f) {
            return c + f.toUpperCase()
        })
    };
    R.f.fq = function(b) {
        return String(b.charAt(0)).toUpperCase() + String(b.substr(1)).toLowerCase()
    };
    R.f.parseInt = function(b) {
        isFinite(b) && (b = String(b));
        return R.K(b) ? /^\s*-?0x/i.test(b) ? parseInt(b, 16) : parseInt(b, 10) : NaN
    };
    R.f.$t = function(b, c, d) {
        b = b.split(c);
        for (var e = []; 0 < d && b.length;)
            e.push(b.shift()), d--;
        b.length && e.push(b.join(c));
        return e
    };
    R.f.ws = function(b, c) {
        if (c)
            typeof c == H && (c = [c]);
        else
            return b;
        for (var d = -1, e = 0; e < c.length; e++)
            if ("" != c[e]) {
                var f = b.lastIndexOf(c[e]);
                f > d && (d = f)
            }
        return -1 == d ? b : b.slice(d + 1)
    };
    R.f.Kq = function(b, c) {
        var d = [],
            e = [];
        if (b == c)
            return 0;
        if (!b.length || !c.length)
            return Math.max(b.length, c.length);
        for (var f = 0; f < c.length + 1; f++)
            d[f] = f;
        for (f = 0; f < b.length; f++) {
            e[0] = f + 1;
            for (var g = 0; g < c.length; g++)
                e[g + 1] = Math.min(e[g] + 1, d[g + 1] + 1, d[g] + Number(b[f] != c[g]));
            for (g = 0; g < d.length; g++)
                d[g] = e[g]
        }
        return e[c.length]
    };
    R.u = {};
    R.u.oa = R.ea;
    R.u.hc = function(b, c) {
        c.unshift(b);
        R.debug.Error.call(this, R.f.Pl.apply(null, c));
        c.shift()
    };
    R.kb(R.u.hc, R.debug.Error);
    R.u.hc.prototype.name = "AssertionError";
    R.u.ei = function(b) {
        throw b;
    };
    R.u.sd = R.u.ei;
    R.u.Ia = function(b, c, d, e) {
        var f = "Assertion failed";
        if (d)
            var f = f + (": " + d),
                g = e;
        else
            b && (f += ": " + b, g = c);
        b = new R.u.hc("" + f, g || []);
        R.u.sd(b)
    };
    R.u.Gt = function(b) {
        R.u.oa && (R.u.sd = b)
    };
    R.u.assert = function(b, c, d) {
        R.u.oa && !b && R.u.Ia("", null, c, Array.prototype.slice.call(arguments, 2));
        return b
    };
    R.u.ia = function(b, c) {
        R.u.oa && R.u.sd(new R.u.hc("Failure" + (b ? ": " + b : ""), Array.prototype.slice.call(arguments, 1)))
    };
    R.u.Sp = function(b, c, d) {
        R.u.oa && !R.ac(b) && R.u.Ia("Expected number but got %s: %s.", [R.Z(b), b], c, Array.prototype.slice.call(arguments, 2));
        return b
    };
    R.u.Vp = function(b, c, d) {
        R.u.oa && !R.K(b) && R.u.Ia("Expected string but got %s: %s.", [R.Z(b), b], c, Array.prototype.slice.call(arguments, 2));
        return b
    };
    R.u.Gp = function(b, c, d) {
        R.u.oa && !R.Aa(b) && R.u.Ia("Expected function but got %s: %s.", [R.Z(b), b], c, Array.prototype.slice.call(arguments, 2));
        return b
    };
    R.u.Tp = function(b, c, d) {
        R.u.oa && !R.la(b) && R.u.Ia("Expected object but got %s: %s.", [R.Z(b), b], c, Array.prototype.slice.call(arguments, 2));
        return b
    };
    R.u.Dp = function(b, c, d) {
        R.u.oa && !R.isArray(b) && R.u.Ia("Expected array but got %s: %s.", [R.Z(b), b], c, Array.prototype.slice.call(arguments, 2));
        return b
    };
    R.u.Ep = function(b, c, d) {
        R.u.oa && !R.qk(b) && R.u.Ia("Expected boolean but got %s: %s.", [R.Z(b), b], c, Array.prototype.slice.call(arguments, 2));
        return b
    };
    R.u.Fp = function(b, c, d) {
        !R.u.oa || R.la(b) && b.nodeType == R.a.ga.Oa || R.u.Ia("Expected Element but got %s: %s.", [R.Z(b), b], c, Array.prototype.slice.call(arguments, 2));
        return b
    };
    R.u.Hp = function(b, c, d, e) {
        !R.u.oa || b instanceof c || R.u.Ia("Expected instanceof %s but got %s.", [R.u.wg(c), R.u.wg(b)], d, Array.prototype.slice.call(arguments, 3));
        return b
    };
    R.u.Up = function() {
        for (var b in Object.prototype)
            R.u.ia(b + " should not be enumerable in Object.prototype.")
    };
    R.u.wg = function(b) {
        return b instanceof Function ? b.displayName || b.name || "unknown type name" : b instanceof Object ? b.constructor.displayName || b.constructor.name || Object.prototype.toString.call(b) : null === b ? "null" : typeof b
    };
    R.j = {};
    R.Ea = R.jd;
    R.j.Ca = !1;
    R.j.hl = function(b) {
        return b[b.length - 1]
    };
    R.j.vs = R.j.hl;
    R.j.indexOf = R.Ea && (R.j.Ca || Array.prototype.indexOf) ? function(b, c, d) {
        return Array.prototype.indexOf.call(b, c, d)
    } : function(b, c, d) {
        d = null == d ? 0 : 0 > d ? Math.max(0, b.length + d) : d;
        if (R.K(b))
            return R.K(c) && 1 == c.length ? b.indexOf(c, d) : -1;
        for (; d < b.length; d++)
            if (d in b && b[d] === c)
                return d;
        return -1
    };
    R.j.lastIndexOf = R.Ea && (R.j.Ca || Array.prototype.lastIndexOf) ? function(b, c, d) {
        return Array.prototype.lastIndexOf.call(b, c, null == d ? b.length - 1 : d)
    } : function(b, c, d) {
        d = null == d ? b.length - 1 : d;
        0 > d && (d = Math.max(0, b.length + d));
        if (R.K(b))
            return R.K(c) && 1 == c.length ? b.lastIndexOf(c, d) : -1;
        for (; 0 <= d; d--)
            if (d in b && b[d] === c)
                return d;
        return -1
    };
    R.j.forEach = R.Ea && (R.j.Ca || Array.prototype.forEach) ? function(b, c, d) {
        Array.prototype.forEach.call(b, c, d)
    } : function(b, c, d) {
        for (var e = b.length, f = R.K(b) ? b.split("") : b, g = 0; g < e; g++)
            g in f && c.call(d, f[g], g, b)
    };
    R.j.Uf = function(b, c) {
        for (var d = R.K(b) ? b.split("") : b, e = b.length - 1; 0 <= e; --e)
            e in d && c.call(void 0, d[e], e, b)
    };
    R.j.filter = R.Ea && (R.j.Ca || Array.prototype.filter) ? function(b, c, d) {
        return Array.prototype.filter.call(b, c, d)
    } : function(b, c, d) {
        for (var e = b.length, f = [], g = 0, h = R.K(b) ? b.split("") : b, l = 0; l < e; l++)
            if (l in h) {
                var m = h[l];
                c.call(d, m, l, b) && (f[g++] = m)
            }
        return f
    };
    R.j.map = R.Ea && (R.j.Ca || Array.prototype.map) ? function(b, c, d) {
        return Array.prototype.map.call(b, c, d)
    } : function(b, c, d) {
        for (var e = b.length, f = Array(e), g = R.K(b) ? b.split("") : b, h = 0; h < e; h++)
            h in g && (f[h] = c.call(d, g[h], h, b));
        return f
    };
    R.j.reduce = R.Ea && (R.j.Ca || Array.prototype.reduce) ? function(b, c, d, e) {
        e && (c = R.bind(c, e));
        return Array.prototype.reduce.call(b, c, d)
    } : function(b, c, d, e) {
        var f = d;
        R.j.forEach(b, function(d, h) {
            f = c.call(e, f, d, h, b)
        });
        return f
    };
    R.j.reduceRight = R.Ea && (R.j.Ca || Array.prototype.reduceRight) ? function(b, c, d, e) {
        e && (c = R.bind(c, e));
        return Array.prototype.reduceRight.call(b, c, d)
    } : function(b, c, d, e) {
        var f = d;
        R.j.Uf(b, function(d, h) {
            f = c.call(e, f, d, h, b)
        });
        return f
    };
    R.j.some = R.Ea && (R.j.Ca || Array.prototype.some) ? function(b, c, d) {
        return Array.prototype.some.call(b, c, d)
    } : function(b, c, d) {
        for (var e = b.length, f = R.K(b) ? b.split("") : b, g = 0; g < e; g++)
            if (g in f && c.call(d, f[g], g, b))
                return !0;
        return !1
    };
    R.j.every = R.Ea && (R.j.Ca || Array.prototype.every) ? function(b, c, d) {
        return Array.prototype.every.call(b, c, d)
    } : function(b, c, d) {
        for (var e = b.length, f = R.K(b) ? b.split("") : b, g = 0; g < e; g++)
            if (g in f && !c.call(d, f[g], g, b))
                return !1;
        return !0
    };
    R.j.count = function(b, c, d) {
        var e = 0;
        R.j.forEach(b, function(b, g, h) {
            c.call(d, b, g, h) && ++e
        }, d);
        return e
    };
    R.j.find = function(b, c, d) {
        c = R.j.findIndex(b, c, d);
        return 0 > c ? null : R.K(b) ? b.charAt(c) : b[c]
    };
    R.j.findIndex = function(b, c, d) {
        for (var e = b.length, f = R.K(b) ? b.split("") : b, g = 0; g < e; g++)
            if (g in f && c.call(d, f[g], g, b))
                return g;
        return -1
    };
    R.j.Sq = function(b, c, d) {
        c = R.j.Pj(b, c, d);
        return 0 > c ? null : R.K(b) ? b.charAt(c) : b[c]
    };
    R.j.Pj = function(b, c, d) {
        for (var e = R.K(b) ? b.split("") : b, f = b.length - 1; 0 <= f; f--)
            if (f in e && c.call(d, e[f], f, b))
                return f;
        return -1
    };
    R.j.contains = function(b, c) {
        return 0 <= R.j.indexOf(b, c)
    };
    R.j.Cc = function(b) {
        return 0 == b.length
    };
    R.j.clear = function(b) {
        if (!R.isArray(b))
            for (var c = b.length - 1; 0 <= c; c--)
                delete b[c];
        b.length = 0
    };
    R.j.Jr = function(b, c) {
        R.j.contains(b, c) || b.push(c)
    };
    R.j.Eg = function(b, c, d) {
        R.j.splice(b, d, 0, c)
    };
    R.j.Lr = function(b, c, d) {
        R.ob(R.j.splice, b, d, 0).apply(null, c)
    };
    R.j.insertBefore = function(b, c, d) {
        var e;
        2 == arguments.length || 0 > (e = R.j.indexOf(b, d)) ? b.push(c) : R.j.Eg(b, c, e)
    };
    R.j.remove = function(b, c) {
        c = R.j.indexOf(b, c);
        var d;
        (d = 0 <= c) && R.j.Ib(b, c);
        return d
    };
    R.j.jt = function(b, c) {
        c = R.j.lastIndexOf(b, c);
        return 0 <= c ? (R.j.Ib(b, c), !0) : !1
    };
    R.j.Ib = function(b, c) {
        return 1 == Array.prototype.splice.call(b, c, 1).length
    };
    R.j.ht = function(b, c, d) {
        c = R.j.findIndex(b, c, d);
        return 0 <= c ? (R.j.Ib(b, c), !0) : !1
    };
    R.j.dt = function(b, c, d) {
        var e = 0;
        R.j.Uf(b, function(f, g) {
            c.call(d, f, g, b) && R.j.Ib(b, g) && e++
        });
        return e
    };
    R.j.concat = function(b) {
        return Array.prototype.concat.apply(Array.prototype, arguments)
    };
    R.j.join = function(b) {
        return Array.prototype.concat.apply(Array.prototype, arguments)
    };
    R.j.Hh = function(b) {
        var c = b.length;
        if (0 < c) {
            for (var d = Array(c), e = 0; e < c; e++)
                d[e] = b[e];
            return d
        }
        return []
    };
    R.j.clone = R.j.Hh;
    R.j.extend = function(b, c) {
        for (var d = 1; d < arguments.length; d++) {
            var e = arguments[d];
            if (R.Yb(e)) {
                var f = b.length || 0,
                    g = e.length || 0;
                b.length = f + g;
                for (var h = 0; h < g; h++)
                    b[f + h] = e[h]
            } else
                b.push(e)
        }
    };
    R.j.splice = function(b, c, d, e) {
        return Array.prototype.splice.apply(b, R.j.slice(arguments, 1))
    };
    R.j.slice = function(b, c, d) {
        return 2 >= arguments.length ? Array.prototype.slice.call(b, c) : Array.prototype.slice.call(b, c, d)
    };
    R.j.ft = function(b, c, d) {
        function e(b) {
            return R.la(b) ? "o" + R.xg(b) : (typeof b).charAt(0) + b
        }
        c = c || b;
        d = d || e;
        for (var f = {}, g = 0, h = 0; h < b.length;) {
            var l = b[h++],
                m = d(l);
            Object.prototype.hasOwnProperty.call(f, m) || (f[m] = !0, c[g++] = l)
        }
        c.length = g
    };
    R.j.uf = function(b, c, d) {
        return R.j.vf(b, d || R.j.Ta, !1, c)
    };
    R.j.Yp = function(b, c, d) {
        return R.j.vf(b, c, !0, void 0, d)
    };
    R.j.vf = function(b, c, d, e, f) {
        for (var g = 0, h = b.length, l; g < h;) {
            var m = g + h >> 1,
                p;
            p = d ? c.call(f, b[m], m, b) : c(e, b[m]);
            0 < p ? g = m + 1 : (h = m, l = !p)
        }
        return l ? g : ~g
    };
    R.j.sort = function(b, c) {
        b.sort(c || R.j.Ta)
    };
    R.j.bu = function(b, c) {
        for (var d = Array(b.length), e = 0; e < b.length; e++)
            d[e] = {
                index: e,
                value: b[e]
            };
        var f = c || R.j.Ta;
        R.j.sort(d, function(b, c) {
            return f(b.value, c.value) || b.index - c.index
        });
        for (e = 0; e < b.length; e++)
            b[e] = d[e].value
    };
    R.j.Ll = function(b, c, d) {
        var e = d || R.j.Ta;
        R.j.sort(b, function(b, d) {
            return e(c(b), c(d))
        })
    };
    R.j.Zt = function(b, c, d) {
        R.j.Ll(b, function(b) {
            return b[c]
        }, d)
    };
    R.j.qs = function(b, c, d) {
        c = c || R.j.Ta;
        for (var e = 1; e < b.length; e++) {
            var f = c(b[e - 1], b[e]);
            if (0 < f || 0 == f && d)
                return !1
        }
        return !0
    };
    R.j.Tb = function(b, c, d) {
        if (!R.Yb(b) || !R.Yb(c) || b.length != c.length)
            return !1;
        var e = b.length;
        d = d || R.j.Cj;
        for (var f = 0; f < e; f++)
            if (!d(b[f], c[f]))
                return !1;
        return !0
    };
    R.j.nq = function(b, c, d) {
        d = d || R.j.Ta;
        for (var e = Math.min(b.length, c.length), f = 0; f < e; f++) {
            var g = d(b[f], c[f]);
            if (0 != g)
                return g
        }
        return R.j.Ta(b.length, c.length)
    };
    R.j.Ta = function(b, c) {
        return b > c ? 1 : b < c ? -1 : 0
    };
    R.j.Nr = function(b, c) {
        return -R.j.Ta(b, c)
    };
    R.j.Cj = function(b, c) {
        return b === c
    };
    R.j.Wp = function(b, c, d) {
        d = R.j.uf(b, c, d);
        return 0 > d ? (R.j.Eg(b, c, -(d + 1)), !0) : !1
    };
    R.j.Xp = function(b, c, d) {
        c = R.j.uf(b, c, d);
        return 0 <= c ? R.j.Ib(b, c) : !1
    };
    R.j.$p = function(b, c, d) {
        for (var e = {}, f = 0; f < b.length; f++) {
            var g = b[f],
                h = c.call(d, g, f, b);
            R.P(h) && (e[h] || (e[h] = [])).push(g)
        }
        return e
    };
    R.j.nu = function(b, c, d) {
        var e = {};
        R.j.forEach(b, function(f, g) {
            e[c.call(d, f, g, b)] = f
        });
        return e
    };
    R.j.$s = function(b, c, d) {
        var e = [],
            f = 0,
            g = b;
        d = d || 1;
        void 0 !== c && (f = b, g = c);
        if (0 > d * (g - f))
            return [];
        if (0 < d)
            for (b = f; b < g; b += d)
                e.push(b);
        else
            for (b = f; b > g; b += d)
                e.push(b);
        return e
    };
    R.j.repeat = function(b, c) {
        for (var d = [], e = 0; e < c; e++)
            d[e] = b;
        return d
    };
    R.j.Rj = function(b) {
        for (var c = [], d = 0; d < arguments.length; d++) {
            var e = arguments[d];
            if (R.isArray(e))
                for (var f = 0; f < e.length; f += 8192)
                    for (var g = R.j.Rj.apply(null, R.j.slice(e, f, f + 8192)), h = 0; h < g.length; h++)
                        c.push(g[h]);
            else
                c.push(e)
        }
        return c
    };
    R.j.rotate = function(b, c) {
        b.length && (c %= b.length, 0 < c ? Array.prototype.unshift.apply(b, b.splice(-c, c)) : 0 > c && Array.prototype.push.apply(b, b.splice(0, -c)));
        return b
    };
    R.j.Is = function(b, c, d) {
        c = Array.prototype.splice.call(b, c, 1);
        Array.prototype.splice.call(b, d, 0, c[0])
    };
    R.j.Hu = function(b) {
        if (!arguments.length)
            return [];
        for (var c = [], d = arguments[0].length, e = 1; e < arguments.length; e++)
            arguments[e].length < d && (d = arguments[e].length);
        for (e = 0; e < d; e++) {
            for (var f = [], g = 0; g < arguments.length; g++)
                f.push(arguments[g][e]);
            c.push(f)
        }
        return c
    };
    R.j.Yt = function(b, c) {
        c = c || Math.random;
        for (var d = b.length - 1; 0 < d; d--) {
            var e = Math.floor(c() * (d + 1)),
                f = b[d];
            b[d] = b[e];
            b[e] = f
        }
    };
    R.j.sq = function(b, c) {
        var d = [];
        R.j.forEach(c, function(c) {
            d.push(b[c])
        });
        return d
    };
    R.j.pq = function(b, c, d) {
        return R.j.concat.apply([], R.j.map(b, c, d))
    };
    R.h = {};
    R.h.i = {};
    R.h.i.ni = !1;
    R.h.i.Ye = R.h.i.ni || ("ar" == R.$.substring(0, 2).toLowerCase() || "fa" == R.$.substring(0, 2).toLowerCase() || "he" == R.$.substring(0, 2).toLowerCase() || "iw" == R.$.substring(0, 2).toLowerCase() || "ps" == R.$.substring(0, 2).toLowerCase() || "sd" == R.$.substring(0, 2).toLowerCase() || "ug" == R.$.substring(0, 2).toLowerCase() || "ur" == R.$.substring(0, 2).toLowerCase() || "yi" == R.$.substring(0, 2).toLowerCase()) && (2 == R.$.length || "-" == R.$.substring(2, 3) || "_" == R.$.substring(2, 3)) || 3 <= R.$.length && "ckb" == R.$.substring(0, 3).toLowerCase() &&
        (3 == R.$.length || "-" == R.$.substring(3, 4) || "_" == R.$.substring(3, 4));
    R.h.i.wb = {
        xi: "\u202a",
        Ci: "\u202b",
        ef: "\u202c",
        zi: "\u200e",
        Di: "\u200f"
    };
    R.h.i.O = {
        $a: 1,
        cb: -1,
        ua: 0
    };
    R.h.i.mc = "right";
    R.h.i.kc = "left";
    R.h.i.Nn = R.h.i.Ye ? R.h.i.kc : R.h.i.mc;
    R.h.i.Mn = R.h.i.Ye ? R.h.i.mc : R.h.i.kc;
    R.h.i.Tl = function(b) {
        return typeof b == D ? 0 < b ? R.h.i.O.$a : 0 > b ? R.h.i.O.cb : R.h.i.O.ua : null == b ? null : b ? R.h.i.O.cb : R.h.i.O.$a
    };
    R.h.i.Fb = "A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff";
    R.h.i.Kb = "\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc";
    R.h.i.lk = /<[^>]*>|&[^;]+;/g;
    R.h.i.Ya = function(b, c) {
        return c ? b.replace(R.h.i.lk, "") : b
    };
    R.h.i.xl = new RegExp("[" + R.h.i.Kb + "]");
    R.h.i.Tk = new RegExp("[" + R.h.i.Fb + "]");
    R.h.i.Ld = function(b, c) {
        return R.h.i.xl.test(R.h.i.Ya(b, c))
    };
    R.h.i.Er = R.h.i.Ld;
    R.h.i.Bg = function(b) {
        return R.h.i.Tk.test(R.h.i.Ya(b, void 0))
    };
    R.h.i.Wk = new RegExp("^[" + R.h.i.Fb + "]");
    R.h.i.Cl = new RegExp("^[" + R.h.i.Kb + "]");
    R.h.i.Ek = function(b) {
        return R.h.i.Cl.test(b)
    };
    R.h.i.zk = function(b) {
        return R.h.i.Wk.test(b)
    };
    R.h.i.gs = function(b) {
        return !R.h.i.zk(b) && !R.h.i.Ek(b)
    };
    R.h.i.Uk = new RegExp("^[^" + R.h.i.Kb + "]*[" + R.h.i.Fb + "]");
    R.h.i.zl = new RegExp("^[^" + R.h.i.Fb + "]*[" + R.h.i.Kb + "]");
    R.h.i.Ah = function(b, c) {
        return R.h.i.zl.test(R.h.i.Ya(b, c))
    };
    R.h.i.os = R.h.i.Ah;
    R.h.i.Ml = function(b, c) {
        return R.h.i.Uk.test(R.h.i.Ya(b, c))
    };
    R.h.i.ds = R.h.i.Ml;
    R.h.i.Vg = /^http:\/\/.*/;
    R.h.i.hs = function(b, c) {
        b = R.h.i.Ya(b, c);
        return R.h.i.Vg.test(b) || !R.h.i.Bg(b) && !R.h.i.Ld(b)
    };
    R.h.i.Vk = new RegExp("[" + R.h.i.Fb + "][^" + R.h.i.Kb + "]*$");
    R.h.i.Al = new RegExp("[" + R.h.i.Kb + "][^" + R.h.i.Fb + "]*$");
    R.h.i.Kj = function(b, c) {
        return R.h.i.Vk.test(R.h.i.Ya(b, c))
    };
    R.h.i.bs = R.h.i.Kj;
    R.h.i.Lj = function(b, c) {
        return R.h.i.Al.test(R.h.i.Ya(b, c))
    };
    R.h.i.ls = R.h.i.Lj;
    R.h.i.Bl = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
    R.h.i.ns = function(b) {
        return R.h.i.Bl.test(b)
    };
    R.h.i.ij = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;
    R.h.i.Dr = function(b, c) {
        c = (void 0 === c ? R.h.i.Ld(b) : c) ? R.h.i.wb.Di : R.h.i.wb.zi;
        return b.replace(R.h.i.ij, c + "$&" + c)
    };
    R.h.i.Nq = function(b) {
        return "<" == b.charAt(0) ? b.replace(/<\w+/, "$& dir=rtl") : "\n<span dir=rtl>" + b + "</span>"
    };
    R.h.i.Oq = function(b) {
        return R.h.i.wb.Ci + b + R.h.i.wb.ef
    };
    R.h.i.Lq = function(b) {
        return "<" == b.charAt(0) ? b.replace(/<\w+/, "$& dir=ltr") : "\n<span dir=ltr>" + b + "</span>"
    };
    R.h.i.Mq = function(b) {
        return R.h.i.wb.xi + b + R.h.i.wb.ef
    };
    R.h.i.Ij = /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g;
    R.h.i.Kk = /left/gi;
    R.h.i.wl = /right/gi;
    R.h.i.Rl = /%%%%/g;
    R.h.i.Fs = function(b) {
        return b.replace(R.h.i.Ij, ":$1 $4 $3 $2").replace(R.h.i.Kk, "%%%%").replace(R.h.i.wl, R.h.i.kc).replace(R.h.i.Rl, R.h.i.mc)
    };
    R.h.i.Jj = /([\u0591-\u05f2])"/g;
    R.h.i.Kl = /([\u0591-\u05f2])'/g;
    R.h.i.Ks = function(b) {
        return b.replace(R.h.i.Jj, "$1\u05f4").replace(R.h.i.Kl, "$1\u05f3")
    };
    R.h.i.fm = /\s+/;
    R.h.i.kk = /[\d\u06f0-\u06f9]/;
    R.h.i.yl = .4;
    R.h.i.Mf = function(b, c) {
        var d = 0,
            e = 0,
            f = !1;
        b = R.h.i.Ya(b, c).split(R.h.i.fm);
        for (c = 0; c < b.length; c++) {
            var g = b[c];
            R.h.i.Ah(g) ? (d++, e++) : R.h.i.Vg.test(g) ? f = !0 : R.h.i.Bg(g) ? e++ : R.h.i.kk.test(g) && (f = !0)
        }
        return 0 == e ? f ? R.h.i.O.$a : R.h.i.O.ua : d / e > R.h.i.yl ? R.h.i.O.cb : R.h.i.O.$a
    };
    R.h.i.Gq = function(b, c) {
        return R.h.i.Mf(b, c) == R.h.i.O.cb
    };
    R.h.i.Dt = function(b, c) {
        b && (c = R.h.i.Tl(c)) && (b.style.textAlign = c == R.h.i.O.cb ? R.h.i.mc : R.h.i.kc, b.dir = c == R.h.i.O.cb ? "rtl" : "ltr")
    };
    R.h.i.Et = function(b, c) {
        switch (R.h.i.Mf(c)) {
            case R.h.i.O.$a:
                b.dir = "ltr";
                break;
            case R.h.i.O.cb:
                b.dir = "rtl";
                break;
            default:
                b.removeAttribute("dir")
        }
    };
    R.h.i.jn = O();
    R.f.op = O();
    R.f.H = function() {
        this.Tc = "";
        this.Qi = R.f.H.mf
    };
    R.f.H.prototype.Ka = !0;
    R.f.H.prototype.wa = P("Tc");
    R.f.H.prototype.toString = function() {
        return "Const{" + this.Tc + "}"
    };
    R.f.H.v = function(b) {
        if (b instanceof R.f.H && b.constructor === R.f.H && b.Qi === R.f.H.mf)
            return b.Tc;
        R.u.ia("expected object of type Const, got '" + b + "'");
        return "type_error:Const"
    };
    R.f.H.from = function(b) {
        return R.f.H.zj(b)
    };
    R.f.H.mf = {};
    R.f.H.zj = function(b) {
        var c = new R.f.H;
        c.Tc = b;
        return c
    };
    R.f.H.EMPTY = R.f.H.from("");
    R.b = {};
    R.b.G = function() {
        this.Mc = "";
        this.Si = R.b.G.aa
    };
    R.b.G.prototype.Ka = !0;
    R.b.G.prototype.wa = P("Mc");
    R.b.G.prototype.Md = !0;
    R.b.G.prototype.jb = function() {
        return R.h.i.O.$a
    };
    R.ea && (R.b.G.prototype.toString = function() {
        return "TrustedResourceUrl{" + this.Mc + "}"
    });
    R.b.G.v = function(b) {
        if (b instanceof R.b.G && b.constructor === R.b.G && b.Si === R.b.G.aa)
            return b.Mc;
        R.u.ia("expected object of type TrustedResourceUrl, got '" + b + k + R.Z(b));
        return "type_error:TrustedResourceUrl"
    };
    R.b.G.format = function(b, c) {
        var d = R.f.H.v(b);
        if (!R.b.G.Uh.test(d))
            throw Error("Invalid TrustedResourceUrl format: " + d);
        b = d.replace(R.b.G.Ve, function(b, f) {
            if (!Object.prototype.hasOwnProperty.call(c, f))
                throw Error('Found marker, "' + f + '", in format string, "' + d + '", but no valid label mapping found in args: ' + JSON.stringify(c));
            b = c[f];
            return b instanceof R.f.H ? R.f.H.v(b) : encodeURIComponent(String(b))
        });
        return R.b.G.Sb(b)
    };
    R.b.G.Ve = /%{(\w+)}/g;
    R.b.G.Uh = /^(?:https:)?\/\/[0-9a-z.:[\]-]+\/|^\/[^\/\\]/i;
    R.b.G.vc = function(b) {
        return R.b.G.Sb(R.f.H.v(b))
    };
    R.b.G.Yq = function(b) {
        for (var c = "", d = 0; d < b.length; d++)
            c += R.f.H.v(b[d]);
        return R.b.G.Sb(c)
    };
    R.b.G.aa = {};
    R.b.G.Sb = function(b) {
        var c = new R.b.G;
        c.Mc = b;
        return c
    };
    R.object = {};
    R.object.is = function(b, c) {
        return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
    };
    R.object.forEach = function(b, c, d) {
        for (var e in b)
            c.call(d, b[e], e, b)
    };
    R.object.filter = function(b, c, d) {
        var e = {},
            f;
        for (f in b)
            c.call(d, b[f], f, b) && (e[f] = b[f]);
        return e
    };
    R.object.map = function(b, c, d) {
        var e = {},
            f;
        for (f in b)
            e[f] = c.call(d, b[f], f, b);
        return e
    };
    R.object.some = function(b, c, d) {
        for (var e in b)
            if (c.call(d, b[e], e, b))
                return !0;
        return !1
    };
    R.object.every = function(b, c, d) {
        for (var e in b)
            if (!c.call(d, b[e], e, b))
                return !1;
        return !0
    };
    R.object.jr = function(b) {
        var c = 0,
            d;
        for (d in b)
            c++;
        return c
    };
    R.object.gr = function(b) {
        for (var c in b)
            return c
    };
    R.object.ir = function(b) {
        for (var c in b)
            return b[c]
    };
    R.object.contains = function(b, c) {
        return R.object.sj(b, c)
    };
    R.object.Br = function(b) {
        var c = [],
            d = 0,
            e;
        for (e in b)
            c[d++] = b[e];
        return c
    };
    R.object.hg = function(b) {
        var c = [],
            d = 0,
            e;
        for (e in b)
            c[d++] = e;
        return c
    };
    R.object.Ar = function(b, c) {
        for (var d = R.Yb(c), e = d ? c : arguments, d = d ? 0 : 1; d < e.length && (b = b[e[d]], R.P(b)); d++)
        ;
        return b
    };
    R.object.rj = function(b, c) {
        return null !== b && c in b
    };
    R.object.sj = function(b, c) {
        for (var d in b)
            if (b[d] == c)
                return !0;
        return !1
    };
    R.object.Qj = function(b, c, d) {
        for (var e in b)
            if (c.call(d, b[e], e, b))
                return e
    };
    R.object.Tq = function(b, c, d) {
        return (c = R.object.Qj(b, c, d)) && b[c]
    };
    R.object.Cc = function(b) {
        for (var c in b)
            return !1;
        return !0
    };
    R.object.clear = function(b) {
        for (var c in b)
            delete b[c]
    };
    R.object.remove = function(b, c) {
        var d;
        (d = c in b) && delete b[c];
        return d
    };
    R.object.add = function(b, c, d) {
        if (null !== b && c in b)
            throw Error('The object already contains the key "' + c + '"');
        R.object.set(b, c, d)
    };
    R.object.get = function(b, c, d) {
        return null !== b && c in b ? b[c] : d
    };
    R.object.set = function(b, c, d) {
        b[c] = d
    };
    R.object.It = function(b, c, d) {
        return c in b ? b[c] : b[c] = d
    };
    R.object.Xt = function(b, c, d) {
        if (c in b)
            return b[c];
        d = d();
        return b[c] = d
    };
    R.object.Tb = function(b, c) {
        for (var d in b)
            if (!(d in c) || b[d] !== c[d])
                return !1;
        for (d in c)
            if (!(d in b))
                return !1;
        return !0
    };
    R.object.clone = function(b) {
        var c = {},
            d;
        for (d in b)
            c[d] = b[d];
        return c
    };
    R.object.$l = function(b) {
        var c = R.Z(b);
        if (c == E || c == u) {
            if (R.Aa(b.clone))
                return b.clone();
            var c = c == u ? [] : {},
                d;
            for (d in b)
                c[d] = R.object.$l(b[d]);
            return c
        }
        return b
    };
    R.object.su = function(b) {
        var c = {},
            d;
        for (d in b)
            c[b[d]] = d;
        return c
    };
    R.object.ff = ["constructor", A, "isPrototypeOf", G, J, "toString", "valueOf"];
    R.object.extend = function(b, c) {
        for (var d, e, f = 1; f < arguments.length; f++) {
            e = arguments[f];
            for (d in e)
                b[d] = e[d];
            for (var g = 0; g < R.object.ff.length; g++)
                d = R.object.ff[g], Object.prototype.hasOwnProperty.call(e, d) && (b[d] = e[d])
        }
    };
    R.object.create = function(b) {
        var c = arguments.length;
        if (1 == c && R.isArray(arguments[0]))
            return R.object.create.apply(null, arguments[0]);
        if (c % 2)
            throw Error("Uneven number of arguments");
        for (var d = {}, e = 0; e < c; e += 2)
            d[arguments[e]] = arguments[e + 1];
        return d
    };
    R.object.wj = function(b) {
        var c = arguments.length;
        if (1 == c && R.isArray(arguments[0]))
            return R.object.wj.apply(null, arguments[0]);
        for (var d = {}, e = 0; e < c; e++)
            d[arguments[e]] = !0;
        return d
    };
    R.object.vq = function(b) {
        var c = b;
        Object.isFrozen && !Object.isFrozen(b) && (c = Object.create(b), Object.freeze(c));
        return c
    };
    R.object.Yr = function(b) {
        return !!Object.isFrozen && Object.isFrozen(b)
    };
    R.object.er = function(b, c) {
        if (!b)
            return [];
        if (!Object.getOwnPropertyNames || !Object.getPrototypeOf)
            return R.object.hg(b);
        for (var d = {}; b && (b !== Object.prototype || c);) {
            for (var e = Object.getOwnPropertyNames(b), f = 0; f < e.length; f++)
                d[e[f]] = !0;
            b = Object.getPrototypeOf(b)
        }
        return R.object.hg(d)
    };
    var google = {
        l: {}
    };
    google.l.m = {};
    google.l.m.Na = {
        ql: {
            gstatic: {
                debug: R.f.H.from("https://www.gstatic.com/charts/debug/%{version}/js/jsapi_debug_%{package}_module.js"),
                debug_i18n: R.f.H.from("https://www.gstatic.com/charts/debug/%{version}/i18n/jsapi_debug_i18n_%{package}_module__%{language}.js"),
                compiled: R.f.H.from("https://www.gstatic.com/charts/%{version}/js/jsapi_compiled_%{package}_module.js"),
                compiled_i18n: R.f.H.from("https://www.gstatic.com/charts/%{version}/i18n/jsapi_compiled_i18n_%{package}_module__%{language}.js"),
                css: R.f.H.from("https://www.gstatic.com/charts/%{version}/css/%{subdir}/%{filename}"),
                css2: R.f.H.from("https://www.gstatic.com/charts/%{version}/css/%{subdir1}/%{subdir2}/%{filename}"),
                third_party: R.f.H.from(B),
                third_party2: R.f.H.from("https://www.gstatic.com/charts/%{version}/third_party/%{subdir1}/%{subdir2}/%{filename}"),
                third_party_gen: R.f.H.from(B)
            }
        },
        Ej: ["default"],
        Fj: {
            format: [],
            "default": ["format"],
            ui: ["default"],
            ui_base: ["default"],
            flashui: [K],
            fw: [K],
            annotatedtimeline: [t],
            annotationchart: [K, "controls", x, "table"],
            areachart: v,
            bar: ["fw", y, M],
            barchart: v,
            browserchart: [K],
            calendar: ["fw"],
            charteditor: [K, x, C, r, "gauge", "motionchart", F, "table"],
            charteditor_base: [L, x, C, r, "gauge", "motionchart", F, "table_base"],
            clusterchart: [x, "d3"],
            columnchart: v,
            controls: [K],
            controls_base: [L],
            corechart: [K],
            gantt: ["fw", y],
            gauge: [K],
            geochart: [K],
            geomap: ["flashui"],
            geomap_base: [L],
            helloworld: ["fw"],
            imagechart: [K],
            imageareachart: C,
            imagebarchart: C,
            imagelinechart: C,
            imagepiechart: C,
            imagesparkline: C,
            intensitymap: [K],
            line: ["fw", y, M],
            linechart: v,
            map: [K],
            motionchart: ["flashui"],
            orgchart: [K],
            overtimecharts: [K, x],
            piechart: v,
            sankey: ["fw", "d3", "d3.sankey"],
            scatter: ["fw", y, M],
            scatterchart: v,
            table: [K],
            table_base: [L],
            timeline: ["fw", K, y],
            treemap: [K],
            wordtree: [K]
        },
        Dh: {
            d3: {
                subdir1: "d3",
                subdir2: "v3",
                filename: "d3.js"
            },
            "d3.sankey": {
                subdir: "d3_sankey",
                filename: "d3.sankey.js"
            },
            webfontloader: {
                subdir: M,
                filename: "webfont.js"
            }
        },
        Ch: {
            dygraph: {
                subdir: "dygraphs",
                filename: "dygraph-tickers-combined.js"
            }
        },
        Aj: {
            "default": [{
                subdir: "core",
                filename: "tooltip.css"
            }],
            annotationchart: [{
                subdir: t,
                filename: "annotationchart.css"
            }],
            charteditor: [{
                subdir: "charteditor",
                filename: "charteditor.css"
            }],
            charteditor_base: [{
                subdir: "charteditor_base",
                filename: "charteditor_base.css"
            }],
            controls: [{
                subdir: "controls",
                filename: "controls.css"
            }],
            imagesparkline: [{
                subdir: C,
                filename: "imagesparkline.css"
            }],
            intensitymap: [{
                subdir: "intensitymap",
                filename: "intensitymap.css"
            }],
            orgchart: [{
                subdir: F,
                filename: "orgchart.css"
            }],
            table: [{
                subdir: "table",
                filename: "table.css"
            }, {
                subdir: "util",
                filename: "format.css"
            }],
            table_base: [{
                subdir: "util",
                filename: "format.css"
            }, {
                subdir: "table",
                filename: "table_base.css"
            }],
            ui: [{
                subdir: "util",
                filename: "util.css"
            }],
            ui_base: [{
                subdir: "util",
                filename: "util_base.css"
            }]
        }
    };
    google.l.m.Ai = {
        af: !0,
        am: !0,
        az: !0,
        ar: !0,
        arb: "ar",
        bg: !0,
        bn: !0,
        ca: !0,
        cs: !0,
        cmn: "zh",
        da: !0,
        de: !0,
        el: !0,
        en: !0,
        en_gb: !0,
        es: !0,
        es_419: !0,
        et: !0,
        eu: !0,
        fa: !0,
        fi: !0,
        fil: !0,
        fr: !0,
        fr_ca: !0,
        gl: !0,
        ka: !0,
        gu: !0,
        he: "iw",
        hi: !0,
        hr: !0,
        hu: !0,
        hy: !0,
        id: !0,
        "in": "id",
        is: !0,
        it: !0,
        iw: !0,
        ja: !0,
        ji: "yi",
        jv: !1,
        jw: "jv",
        km: !0,
        kn: !0,
        ko: !0,
        lo: !0,
        lt: !0,
        lv: !0,
        ml: !0,
        mn: !0,
        mo: "ro",
        mr: !0,
        ms: !0,
        nb: "no",
        ne: !0,
        nl: !0,
        no: !0,
        pl: !0,
        pt: "pt_br",
        pt_br: !0,
        pt_pt: !0,
        ro: !0,
        ru: !0,
        si: !0,
        sk: !0,
        sl: !0,
        sr: !0,
        sv: !0,
        sw: !0,
        swh: "sw",
        ta: !0,
        te: !0,
        th: !0,
        tl: "fil",
        tr: !0,
        uk: !0,
        ur: !0,
        vi: !0,
        yi: !1,
        zh: "zh_cn",
        zh_cn: !0,
        zh_hk: !0,
        zh_tw: !0,
        zsm: "ms",
        zu: !0
    };
    google.l.m.Pa = {};
    google.l.m.Pa.count = 0;
    google.l.m.Pa.Hf = function(b) {
        function c() {
            g = !0;
            for (var b = e.length, c = 0; c < b; c++)
                e[c]()
        }

        function d() {
            h = !0;
            for (var b = f.length, c = 0; c < b; c++)
                f[c]()
        }
        var e = [],
            f = [],
            g = !1,
            h = !1,
            l = "load-css-" + google.l.m.Pa.count++,
            m = {
                done: function(b) {
                    e.push(b);
                    g && b();
                    return m
                },
                ia: function(b) {
                    f.push(b);
                    h && b();
                    return m
                }
            },
            p = document.createElement("link");
        p.setAttribute("id", l);
        p.setAttribute("rel", "stylesheet");
        p.setAttribute("type", "text/css");
        "undefined" !== typeof p.addEventListener ? (p.addEventListener("load", c, !1), p.addEventListener("error",
            d, !1)) : "undefined" !== typeof p.attachEvent && p.attachEvent("onload", function() {
            var b,
                e = document.styleSheets.length;
            try {
                for (; e--;)
                    if (b = document.styleSheets[e], b.id === l) {
                        c();
                        return
                    }
            } catch (na) {}
            g || d()
        });
        try {
            document.getElementsByTagName("head")[0].appendChild(p), p.setAttribute("href", b)
        } catch (ma) {
            c()
        }
        return m
    };
    google.l.m.Pa.load = function(b, c) {
        c = c || O();
        google.l.m.Pa.Hf(b).done(c).ia(O())
    };
    google.l.m.Pa.Fc = function(b, c) {
        b = R.j.map(b, function(b) {
            return google.l.m.ab.Jd(b)
        });
        var d = null;
        R.j.forEach(b, function(b) {
            b = R.b.G.v(b);
            d = google.l.m.Pa.Hf(b)
        });
        c && (d ? d.done(c) : c())
    };
    R.a.c = function(b) {
        this.Ql = b
    };
    R.a.c.prototype.toString = P("Ql");
    R.a.c.jm = new R.a.c("A");
    R.a.c.lm = new R.a.c("ABBR");
    R.a.c.nm = new R.a.c("ACRONYM");
    R.a.c.om = new R.a.c("ADDRESS");
    R.a.c.sm = new R.a.c("APPLET");
    R.a.c.tm = new R.a.c("AREA");
    R.a.c.um = new R.a.c("ARTICLE");
    R.a.c.vm = new R.a.c("ASIDE");
    R.a.c.AUDIO = new R.a.c("AUDIO");
    R.a.c.xm = new R.a.c("B");
    R.a.c.ym = new R.a.c("BASE");
    R.a.c.zm = new R.a.c("BASEFONT");
    R.a.c.Am = new R.a.c("BDI");
    R.a.c.Bm = new R.a.c("BDO");
    R.a.c.Em = new R.a.c("BIG");
    R.a.c.Fm = new R.a.c("BLOCKQUOTE");
    R.a.c.Gm = new R.a.c("BODY");
    R.a.c.Me = new R.a.c("BR");
    R.a.c.Hm = new R.a.c("BUTTON");
    R.a.c.Im = new R.a.c("CANVAS");
    R.a.c.Jm = new R.a.c("CAPTION");
    R.a.c.Lm = new R.a.c("CENTER");
    R.a.c.Mm = new R.a.c("CITE");
    R.a.c.Pm = new R.a.c("CODE");
    R.a.c.Qm = new R.a.c("COL");
    R.a.c.Rm = new R.a.c("COLGROUP");
    R.a.c.Sm = new R.a.c("COMMAND");
    R.a.c.Um = new R.a.c("DATA");
    R.a.c.Vm = new R.a.c("DATALIST");
    R.a.c.Wm = new R.a.c("DD");
    R.a.c.Xm = new R.a.c("DEL");
    R.a.c.Ym = new R.a.c("DETAILS");
    R.a.c.Zm = new R.a.c("DFN");
    R.a.c.$m = new R.a.c("DIALOG");
    R.a.c.an = new R.a.c("DIR");
    R.a.c.cn = new R.a.c("DIV");
    R.a.c.dn = new R.a.c("DL");
    R.a.c.hn = new R.a.c("DT");
    R.a.c.nn = new R.a.c("EM");
    R.a.c.EMBED = new R.a.c("EMBED");
    R.a.c.tn = new R.a.c("FIELDSET");
    R.a.c.un = new R.a.c("FIGCAPTION");
    R.a.c.vn = new R.a.c("FIGURE");
    R.a.c.FONT = new R.a.c("FONT");
    R.a.c.wn = new R.a.c("FOOTER");
    R.a.c.xn = new R.a.c("FORM");
    R.a.c.yn = new R.a.c("FRAME");
    R.a.c.zn = new R.a.c("FRAMESET");
    R.a.c.An = new R.a.c("H1");
    R.a.c.Bn = new R.a.c("H2");
    R.a.c.Cn = new R.a.c("H3");
    R.a.c.Dn = new R.a.c("H4");
    R.a.c.En = new R.a.c("H5");
    R.a.c.Fn = new R.a.c("H6");
    R.a.c.Gn = new R.a.c("HEAD");
    R.a.c.Hn = new R.a.c("HEADER");
    R.a.c.In = new R.a.c("HGROUP");
    R.a.c.Jn = new R.a.c("HR");
    R.a.c.Kn = new R.a.c("HTML");
    R.a.c.Ln = new R.a.c("I");
    R.a.c.On = new R.a.c("IFRAME");
    R.a.c.Pn = new R.a.c("IMG");
    R.a.c.Qn = new R.a.c("INPUT");
    R.a.c.Rn = new R.a.c("INS");
    R.a.c.Wn = new R.a.c("ISINDEX");
    R.a.c.Yn = new R.a.c("KBD");
    R.a.c.Zn = new R.a.c("KEYGEN");
    R.a.c.$n = new R.a.c("LABEL");
    R.a.c.bo = new R.a.c("LEGEND");
    R.a.c.co = new R.a.c("LI");
    R.a.c.eo = new R.a.c("LINK");
    R.a.c.io = new R.a.c("MAP");
    R.a.c.jo = new R.a.c("MARK");
    R.a.c.oo = new R.a.c("MATH");
    R.a.c.po = new R.a.c("MENU");
    R.a.c.qo = new R.a.c("META");
    R.a.c.so = new R.a.c("METER");
    R.a.c.uo = new R.a.c("NAV");
    R.a.c.vo = new R.a.c("NOFRAMES");
    R.a.c.wo = new R.a.c("NOSCRIPT");
    R.a.c.OBJECT = new R.a.c("OBJECT");
    R.a.c.zo = new R.a.c("OL");
    R.a.c.Ao = new R.a.c("OPTGROUP");
    R.a.c.Bo = new R.a.c("OPTION");
    R.a.c.Co = new R.a.c("OUTPUT");
    R.a.c.Do = new R.a.c("P");
    R.a.c.Eo = new R.a.c("PARAM");
    R.a.c.Go = new R.a.c("PRE");
    R.a.c.Io = new R.a.c("PROGRESS");
    R.a.c.Q = new R.a.c("Q");
    R.a.c.Jo = new R.a.c("RP");
    R.a.c.Ko = new R.a.c("RT");
    R.a.c.Lo = new R.a.c("RUBY");
    R.a.c.No = new R.a.c("S");
    R.a.c.Po = new R.a.c("SAMP");
    R.a.c.SCRIPT = new R.a.c(q);
    R.a.c.Qo = new R.a.c("SECTION");
    R.a.c.Ro = new R.a.c("SELECT");
    R.a.c.So = new R.a.c("SMALL");
    R.a.c.To = new R.a.c("SOURCE");
    R.a.c.Uo = new R.a.c("SPAN");
    R.a.c.Vo = new R.a.c("STRIKE");
    R.a.c.Wo = new R.a.c("STRONG");
    R.a.c.STYLE = new R.a.c("STYLE");
    R.a.c.Xo = new R.a.c("SUB");
    R.a.c.Yo = new R.a.c("SUMMARY");
    R.a.c.Zo = new R.a.c("SUP");
    R.a.c.$o = new R.a.c("SVG");
    R.a.c.ap = new R.a.c("TABLE");
    R.a.c.bp = new R.a.c("TBODY");
    R.a.c.cp = new R.a.c("TD");
    R.a.c.ep = new R.a.c("TEMPLATE");
    R.a.c.fp = new R.a.c("TEXTAREA");
    R.a.c.gp = new R.a.c("TFOOT");
    R.a.c.hp = new R.a.c("TH");
    R.a.c.ip = new R.a.c("THEAD");
    R.a.c.jp = new R.a.c("TIME");
    R.a.c.kp = new R.a.c("TITLE");
    R.a.c.lp = new R.a.c("TR");
    R.a.c.TRACK = new R.a.c("TRACK");
    R.a.c.np = new R.a.c("TT");
    R.a.c.pp = new R.a.c("U");
    R.a.c.qp = new R.a.c("UL");
    R.a.c.rp = new R.a.c("VAR");
    R.a.c.VIDEO = new R.a.c("VIDEO");
    R.a.c.sp = new R.a.c("WBR");
    R.a.Vc = {};
    R.a.Vc.Zi = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    R.a.Vc.Ik = function(b) {
        return !0 === R.a.Vc.Zi[b]
    };
    R.g = {};
    R.g.userAgent = {};
    R.g.userAgent.C = {};
    R.g.userAgent.C.jg = function() {
        var b = R.g.userAgent.C.$j();
        return b && (b = b.userAgent) ? b : ""
    };
    R.g.userAgent.C.$j = function() {
        return R.global.navigator
    };
    R.g.userAgent.C.Lh = R.g.userAgent.C.jg();
    R.g.userAgent.C.Wt = function(b) {
        R.g.userAgent.C.Lh = b || R.g.userAgent.C.jg()
    };
    R.g.userAgent.C.Cb = function() {
        return R.g.userAgent.C.Lh
    };
    R.g.userAgent.C.L = function(b) {
        return R.f.contains(R.g.userAgent.C.Cb(), b)
    };
    R.g.userAgent.C.cl = function() {
        return R.f.xf(R.g.userAgent.C.Cb(), "WebKit")
    };
    R.g.userAgent.C.Nf = function(b) {
        for (var c = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, d = [], e; e = c.exec(b);)
            d.push([e[1], e[2], e[3] || void 0]);
        return d
    };
    R.g.userAgent.A = {};
    R.g.userAgent.A.dh = function() {
        return R.g.userAgent.C.L("Opera")
    };
    R.g.userAgent.A.al = function() {
        return R.g.userAgent.C.L("Trident") || R.g.userAgent.C.L("MSIE")
    };
    R.g.userAgent.A.be = function() {
        return R.g.userAgent.C.L("Edge")
    };
    R.g.userAgent.A.$k = function() {
        return R.g.userAgent.C.L("Firefox")
    };
    R.g.userAgent.A.eh = function() {
        return R.g.userAgent.C.L("Safari") && !(R.g.userAgent.A.$d() || R.g.userAgent.A.ae() || R.g.userAgent.A.dh() || R.g.userAgent.A.be() || R.g.userAgent.A.Wg() || R.g.userAgent.C.L("Android"))
    };
    R.g.userAgent.A.ae = function() {
        return R.g.userAgent.C.L("Coast")
    };
    R.g.userAgent.A.bl = function() {
        return (R.g.userAgent.C.L("iPad") || R.g.userAgent.C.L("iPhone")) && !R.g.userAgent.A.eh() && !R.g.userAgent.A.$d() && !R.g.userAgent.A.ae() && R.g.userAgent.C.L("AppleWebKit")
    };
    R.g.userAgent.A.$d = function() {
        return (R.g.userAgent.C.L("Chrome") || R.g.userAgent.C.L("CriOS")) && !R.g.userAgent.A.be()
    };
    R.g.userAgent.A.Zk = function() {
        return R.g.userAgent.C.L("Android") && !(R.g.userAgent.A.Lg() || R.g.userAgent.A.vk() || R.g.userAgent.A.Wd() || R.g.userAgent.A.Wg())
    };
    R.g.userAgent.A.Wd = R.g.userAgent.A.dh;
    R.g.userAgent.A.Dc = R.g.userAgent.A.al;
    R.g.userAgent.A.Va = R.g.userAgent.A.be;
    R.g.userAgent.A.vk = R.g.userAgent.A.$k;
    R.g.userAgent.A.ps = R.g.userAgent.A.eh;
    R.g.userAgent.A.Sr = R.g.userAgent.A.ae;
    R.g.userAgent.A.$r = R.g.userAgent.A.bl;
    R.g.userAgent.A.Lg = R.g.userAgent.A.$d;
    R.g.userAgent.A.Qr = R.g.userAgent.A.Zk;
    R.g.userAgent.A.Wg = function() {
        return R.g.userAgent.C.L("Silk")
    };
    R.g.userAgent.A.Wb = function() {
        function b(b) {
            b = R.j.find(b, e);
            return d[b] || ""
        }
        var c = R.g.userAgent.C.Cb();
        if (R.g.userAgent.A.Dc())
            return R.g.userAgent.A.Zj(c);
        var c = R.g.userAgent.C.Nf(c),
            d = {};
        R.j.forEach(c, function(b) {
            d[b[0]] = b[1]
        });
        var e = R.ob(R.object.rj, d);
        return R.g.userAgent.A.Wd() ? b(["Version", "Opera"]) : R.g.userAgent.A.Va() ? b(["Edge"]) : R.g.userAgent.A.Lg() ? b(["Chrome", "CriOS"]) : (c = c[2]) && c[1] || ""
    };
    R.g.userAgent.A.ya = function(b) {
        return 0 <= R.f.Qb(R.g.userAgent.A.Wb(), b)
    };
    R.g.userAgent.A.Zj = function(b) {
        var c = /rv: *([\d\.]*)/.exec(b);
        if (c && c[1])
            return c[1];
        var c = "",
            d = /MSIE +([\d\.]+)/.exec(b);
        if (d && d[1])
            if (b = /Trident\/(\d.\d)/.exec(b), "7.0" == d[1])
                if (b && b[1])
                    switch (b[1]) {
                        case "4.0":
                            c = "8.0";
                            break;
                        case "5.0":
                            c = "9.0";
                            break;
                        case "6.0":
                            c = "10.0";
                            break;
                        case "7.0":
                            c = "11.0"
                    }
                else
                    c = "7.0";
        else
            c = d[1];
        return c
    };
    R.b.V = function() {
        this.Jc = "";
        this.Gi = R.b.V.aa
    };
    R.b.V.prototype.Ka = !0;
    R.b.V.aa = {};
    R.b.V.vc = function(b) {
        b = R.f.H.v(b);
        return 0 === b.length ? R.b.V.EMPTY : R.b.V.qd(b)
    };
    R.b.V.prototype.wa = P("Jc");
    R.ea && (R.b.V.prototype.toString = function() {
        return "SafeScript{" + this.Jc + "}"
    });
    R.b.V.v = function(b) {
        if (b instanceof R.b.V && b.constructor === R.b.V && b.Gi === R.b.V.aa)
            return b.Jc;
        R.u.ia("expected object of type SafeScript, got '" + b + k + R.Z(b));
        return "type_error:SafeScript"
    };
    R.b.V.qd = function(b) {
        return (new R.b.V).lb(b)
    };
    R.b.V.prototype.lb = function(b) {
        this.Jc = b;
        return this
    };
    R.b.V.EMPTY = R.b.V.qd("");
    R.b.I = function() {
        this.Lc = "";
        this.Ii = R.b.I.aa
    };
    R.b.I.prototype.Ka = !0;
    R.b.I.aa = {};
    R.b.I.vc = function(b) {
        b = R.f.H.v(b);
        return 0 === b.length ? R.b.I.EMPTY : R.b.I.zb(b)
    };
    R.b.I.iq = O();
    R.b.I.prototype.wa = P("Lc");
    R.ea && (R.b.I.prototype.toString = function() {
        return "SafeStyle{" + this.Lc + "}"
    });
    R.b.I.v = function(b) {
        if (b instanceof R.b.I && b.constructor === R.b.I && b.Ii === R.b.I.aa)
            return b.Lc;
        R.u.ia("expected object of type SafeStyle, got '" + b + k + R.Z(b));
        return "type_error:SafeStyle"
    };
    R.b.I.zb = function(b) {
        return (new R.b.I).lb(b)
    };
    R.b.I.prototype.lb = function(b) {
        this.Lc = b;
        return this
    };
    R.b.I.EMPTY = R.b.I.zb("");
    R.b.I.Za = "zClosurez";
    R.b.I.create = function(b) {
        var c = "",
            d;
        for (d in b) {
            if (!/^[-_a-zA-Z0-9]+$/.test(d))
                throw Error("Name allows only [-_a-zA-Z0-9], got: " + d);
            var e = b[d];
            null != e && (e instanceof R.f.H ? e = R.f.H.v(e) : R.b.I.Wi.test(e) ? R.b.I.ik(e) || (R.u.ia("String value requires balanced quotes, got: " + e), e = R.b.I.Za) : (R.u.ia("String value allows only [-,.\"'%_!# a-zA-Z0-9], rgb() and rgba(), got: " + e), e = R.b.I.Za), c += d + ":" + e + ";")
        }
        return c ? R.b.I.zb(c) : R.b.I.EMPTY
    };
    R.b.I.ik = function(b) {
        for (var c = !0, d = !0, e = 0; e < b.length; e++) {
            var f = b.charAt(e);
            "'" == f && d ? c = !c : '"' == f && c && (d = !d)
        }
        return c && d
    };
    R.b.I.Wi = /^([-,."'%_!# a-zA-Z0-9]+|(?:rgb|hsl)a?\([0-9.%, ]+\))$/;
    R.b.I.concat = function(b) {
        function c(b) {
            R.isArray(b) ? R.j.forEach(b, c) : d += R.b.I.v(b)
        }
        var d = "";
        R.j.forEach(arguments, c);
        return d ? R.b.I.zb(d) : R.b.I.EMPTY
    };
    R.b.R = function() {
        this.Kc = "";
        this.Hi = R.b.R.aa
    };
    R.b.R.prototype.Ka = !0;
    R.b.R.aa = {};
    R.b.R.concat = function(b) {
        function c(b) {
            R.isArray(b) ? R.j.forEach(b, c) : d += R.b.R.v(b)
        }
        var d = "";
        R.j.forEach(arguments, c);
        return R.b.R.Rb(d)
    };
    R.b.R.vc = function(b) {
        b = R.f.H.v(b);
        return 0 === b.length ? R.b.R.EMPTY : R.b.R.Rb(b)
    };
    R.b.R.prototype.wa = P("Kc");
    R.ea && (R.b.R.prototype.toString = function() {
        return "SafeStyleSheet{" + this.Kc + "}"
    });
    R.b.R.v = function(b) {
        if (b instanceof R.b.R && b.constructor === R.b.R && b.Hi === R.b.R.aa)
            return b.Kc;
        R.u.ia("expected object of type SafeStyleSheet, got '" + b + k + R.Z(b));
        return "type_error:SafeStyleSheet"
    };
    R.b.R.Rb = function(b) {
        return (new R.b.R).lb(b)
    };
    R.b.R.prototype.lb = function(b) {
        this.Kc = b;
        return this
    };
    R.b.R.EMPTY = R.b.R.Rb("");
    R.va = {};
    R.va.url = {};
    R.va.url.tj = function(b) {
        return R.va.url.yg().createObjectURL(b)
    };
    R.va.url.qt = function(b) {
        R.va.url.yg().revokeObjectURL(b)
    };
    R.va.url.yg = function() {
        var b = R.va.url.Sf();
        if (null != b)
            return b;
        throw Error("This browser doesn't seem to support blob URLs");
    };
    R.va.url.Sf = function() {
        return R.P(R.global.URL) && R.P(R.global.URL.createObjectURL) ? R.global.URL : R.P(R.global.webkitURL) && R.P(R.global.webkitURL.createObjectURL) ? R.global.webkitURL : R.P(R.global.createObjectURL) ? R.global : null
    };
    R.va.url.Zp = function() {
        return null != R.va.url.Sf()
    };
    R.b.w = function() {
        this.La = "";
        this.Ki = R.b.w.aa
    };
    R.b.w.Za = "about:invalid#zClosurez";
    R.b.w.prototype.Ka = !0;
    R.b.w.prototype.wa = P("La");
    R.b.w.prototype.Md = !0;
    R.b.w.prototype.jb = function() {
        return R.h.i.O.$a
    };
    R.ea && (R.b.w.prototype.toString = function() {
        return "SafeUrl{" + this.La + "}"
    });
    R.b.w.v = function(b) {
        if (b instanceof R.b.w && b.constructor === R.b.w && b.Ki === R.b.w.aa)
            return b.La;
        R.u.ia("expected object of type SafeUrl, got '" + b + k + R.Z(b));
        return "type_error:SafeUrl"
    };
    R.b.w.vc = function(b) {
        return R.b.w.Ha(R.f.H.v(b))
    };
    R.b.hf = /^(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm))$/i;
    R.b.w.Xq = function(b) {
        b = R.b.hf.test(b.type) ? R.va.url.tj(b) : R.b.w.Za;
        return R.b.w.Ha(b)
    };
    R.b.di = /^data:([^;,]*);base64,[a-z0-9+\/]+=*$/i;
    R.b.w.Zq = function(b) {
        var c = b.match(R.b.di),
            c = c && R.b.hf.test(c[1]);
        return R.b.w.Ha(c ? b : R.b.w.Za)
    };
    R.b.w.cr = function(b) {
        R.f.oj(b) || (b = R.b.w.Za);
        return R.b.w.Ha(b)
    };
    R.b.w.dr = function(b) {
        return R.b.w.Ha(R.b.G.v(b))
    };
    R.b.Ji = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;
    R.b.w.Xa = function(b) {
        if (b instanceof R.b.w)
            return b;
        b = b.Ka ? b.wa() : String(b);
        R.b.Ji.test(b) || (b = R.b.w.Za);
        return R.b.w.Ha(b)
    };
    R.b.w.aa = {};
    R.b.w.Ha = function(b) {
        var c = new R.b.w;
        c.La = b;
        return c
    };
    R.b.w.mm = R.b.w.Ha("about:blank");
    R.b.o = function() {
        this.La = "";
        this.Fi = R.b.o.aa;
        this.tc = null
    };
    R.b.o.prototype.Md = !0;
    R.b.o.prototype.jb = P("tc");
    R.b.o.prototype.Ka = !0;
    R.b.o.prototype.wa = P("La");
    R.ea && (R.b.o.prototype.toString = function() {
        return "SafeHtml{" + this.La + "}"
    });
    R.b.o.v = function(b) {
        if (b instanceof R.b.o && b.constructor === R.b.o && b.Fi === R.b.o.aa)
            return b.La;
        R.u.ia("expected object of type SafeHtml, got '" + b + k + R.Z(b));
        return "type_error:SafeHtml"
    };
    R.b.o.xa = function(b) {
        if (b instanceof R.b.o)
            return b;
        var c = null;
        b.Md && (c = b.jb());
        return R.b.o.pa(R.f.xa(b.Ka ? b.wa() : String(b)), c)
    };
    R.b.o.Hr = function(b) {
        if (b instanceof R.b.o)
            return b;
        b = R.b.o.xa(b);
        return R.b.o.pa(R.f.kh(R.b.o.v(b)), b.jb())
    };
    R.b.o.Ir = function(b) {
        if (b instanceof R.b.o)
            return b;
        b = R.b.o.xa(b);
        return R.b.o.pa(R.f.em(R.b.o.v(b)), b.jb())
    };
    R.b.o.from = R.b.o.xa;
    R.b.o.pf = /^[a-zA-Z0-9-]+$/;
    R.b.o.Ui = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    };
    R.b.o.Bi = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    };
    R.b.o.create = function(b, c, d) {
        R.b.o.dm(String(b));
        return R.b.o.hb(String(b), c, d)
    };
    R.b.o.dm = function(b) {
        if (!R.b.o.pf.test(b))
            throw Error("Invalid tag name <" + b + ">.");
        if (b.toUpperCase() in R.b.o.Bi)
            throw Error("Tag name <" + b + "> is not allowed for SafeHtml.");
    };
    R.b.o.uq = function(b, c, d, e) {
        b && R.b.G.v(b);
        var f = {};
        f.src = b || null;
        f.srcdoc = c && R.b.o.v(c);
        b = R.b.o.rc(f, {
            sandbox: ""
        }, d);
        return R.b.o.hb("iframe", b, e)
    };
    R.b.o.xq = function(b, c, d, e) {
        if (!R.b.o.lj())
            throw Error("The browser does not support sandboxed iframes.");
        var f = {};
        f.src = b ? R.b.w.v(R.b.w.Xa(b)) : null;
        f.srcdoc = c || null;
        f.sandbox = "";
        b = R.b.o.rc(f, {}, d);
        return R.b.o.hb("iframe", b, e)
    };
    R.b.o.lj = function() {
        return R.global.HTMLIFrameElement && "sandbox" in R.global.HTMLIFrameElement.prototype
    };
    R.b.o.zq = function(b, c) {
        R.b.G.v(b);
        b = R.b.o.rc({
            src: b
        }, {}, c);
        return R.b.o.hb("script", b)
    };
    R.b.o.yq = function(b, c) {
        for (var d in c) {
            var e = d.toLowerCase();
            if ("language" == e || "src" == e || "text" == e || "type" == e)
                throw Error('Cannot set "' + e + '" attribute');
        }
        d = "";
        b = R.j.concat(b);
        for (e = 0; e < b.length; e++)
            d += R.b.V.v(b[e]);
        b = R.b.o.pa(d, R.h.i.O.ua);
        return R.b.o.hb("script", c, b)
    };
    R.b.o.Aq = function(b, c) {
        c = R.b.o.rc({
            type: "text/css"
        }, {}, c);
        var d = "";
        b = R.j.concat(b);
        for (var e = 0; e < b.length; e++)
            d += R.b.R.v(b[e]);
        b = R.b.o.pa(d, R.h.i.O.ua);
        return R.b.o.hb("style", c, b)
    };
    R.b.o.wq = function(b, c) {
        b = R.b.w.v(R.b.w.Xa(b));
        (R.g.userAgent.A.Dc() || R.g.userAgent.A.Va()) && R.f.contains(b, ";") && (b = "'" + b.replace(/'/g, "%27") + "'");
        return R.b.o.hb("meta", {
            "http-equiv": "refresh",
            content: (c || 0) + "; url=" + b
        })
    };
    R.b.o.Uj = function(b, c, d) {
        if (d instanceof R.f.H)
            d = R.f.H.v(d);
        else if ("style" == c.toLowerCase())
            d = R.b.o.dk(d);
        else {
            if (/^on/i.test(c))
                throw Error('Attribute "' + c + '" requires goog.string.Const value, "' + d + '" given.');
            if (c.toLowerCase() in R.b.o.Ui)
                if (d instanceof R.b.G)
                    d = R.b.G.v(d);
                else if (d instanceof R.b.w)
                d = R.b.w.v(d);
            else if (R.K(d))
                d = R.b.w.Xa(d).wa();
            else
                throw Error('Attribute "' + c + '" on tag "' + b + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + d + '" given.');
        }
        d.Ka && (d = d.wa());
        return c + '="' + R.f.xa(String(d)) + '"'
    };
    R.b.o.dk = function(b) {
        if (!R.la(b))
            throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof b + " given: " + b);
        b instanceof R.b.I || (b = R.b.I.create(b));
        return R.b.I.v(b)
    };
    R.b.o.Cq = function(b, c, d, e) {
        c = R.b.o.create(c, d, e);
        c.tc = b;
        return c
    };
    R.b.o.concat = function(b) {
        function c(b) {
            R.isArray(b) ? R.j.forEach(b, c) : (b = R.b.o.xa(b), e += R.b.o.v(b), b = b.jb(), d == R.h.i.O.ua ? d = b : b != R.h.i.O.ua && d != b && (d = null))
        }
        var d = R.h.i.O.ua,
            e = "";
        R.j.forEach(arguments, c);
        return R.b.o.pa(e, d)
    };
    R.b.o.qq = function(b, c) {
        var d = R.b.o.concat(R.j.slice(arguments, 1));
        d.tc = b;
        return d
    };
    R.b.o.aa = {};
    R.b.o.pa = function(b, c) {
        return (new R.b.o).lb(b, c)
    };
    R.b.o.prototype.lb = function(b, c) {
        this.La = b;
        this.tc = c;
        return this
    };
    R.b.o.hb = function(b, c, d) {
        var e = null,
            f;
        f = "<" + b + R.b.o.Ol(b, c);
        R.mb(d) ? R.isArray(d) || (d = [d]) : d = [];
        R.a.Vc.Ik(b.toLowerCase()) ? f += ">" : (e = R.b.o.concat(d), f += ">" + R.b.o.v(e) + "</" + b + ">", e = e.jb());
        (b = c && c.dir) && (e = /^(ltr|rtl|auto)$/i.test(b) ? R.h.i.O.ua : null);
        return R.b.o.pa(f, e)
    };
    R.b.o.Ol = function(b, c) {
        var d = "";
        if (c)
            for (var e in c) {
                if (!R.b.o.pf.test(e))
                    throw Error('Invalid attribute name "' + e + '".');
                var f = c[e];
                R.mb(f) && (d += " " + R.b.o.Uj(b, e, f))
            }
        return d
    };
    R.b.o.rc = function(b, c, d) {
        var e = {},
            f;
        for (f in b)
            e[f] = b[f];
        for (f in c)
            e[f] = c[f];
        for (f in d) {
            var g = f.toLowerCase();
            if (g in b)
                throw Error('Cannot override "' + g + '" attribute, got "' + f + '" with value "' + d[f] + '"');
            g in c && delete e[g];
            e[f] = d[f]
        }
        return e
    };
    R.b.o.fn = R.b.o.pa("<!DOCTYPE html>", R.h.i.O.ua);
    R.b.o.EMPTY = R.b.o.pa("", R.h.i.O.ua);
    R.b.o.Me = R.b.o.pa("<br>", R.h.i.O.ua);
    R.b.rb = {};
    R.b.rb.Dl = function(b, c) {
        return R.b.o.pa(c, null)
    };
    R.b.rb.ut = function(b, c) {
        return R.b.V.qd(c)
    };
    R.b.rb.wt = function(b, c) {
        return R.b.I.zb(c)
    };
    R.b.rb.yt = function(b, c) {
        return R.b.R.Rb(c)
    };
    R.b.rb.At = function(b, c) {
        return R.b.w.Ha(c)
    };
    R.b.rb.uu = function(b, c) {
        return R.b.G.Sb(c)
    };
    R.s = {};
    R.s.Zs = function(b) {
        return Math.floor(Math.random() * b)
    };
    R.s.wu = function(b, c) {
        return b + Math.random() * (c - b)
    };
    R.s.jq = function(b, c, d) {
        return Math.min(Math.max(b, c), d)
    };
    R.s.hh = function(b, c) {
        b %= c;
        return 0 > b * c ? b + c : b
    };
    R.s.xs = function(b, c, d) {
        return b + d * (c - b)
    };
    R.s.Js = function(b, c, d) {
        return Math.abs(b - c) <= (d || 1E-6)
    };
    R.s.ue = function(b) {
        return R.s.hh(b, 360)
    };
    R.s.cu = function(b) {
        return R.s.hh(b, 2 * Math.PI)
    };
    R.s.Ih = function(b) {
        return b * Math.PI / 180
    };
    R.s.Sl = function(b) {
        return 180 * b / Math.PI
    };
    R.s.Bp = function(b, c) {
        return c * Math.cos(R.s.Ih(b))
    };
    R.s.Cp = function(b, c) {
        return c * Math.sin(R.s.Ih(b))
    };
    R.s.angle = function(b, c, d, e) {
        return R.s.ue(R.s.Sl(Math.atan2(e - c, d - b)))
    };
    R.s.Ap = function(b, c) {
        b = R.s.ue(c) - R.s.ue(b);
        180 < b ? b -= 360 : -180 >= b && (b = 360 + b);
        return b
    };
    R.s.sign = function(b) {
        return 0 < b ? 1 : 0 > b ? -1 : b
    };
    R.s.Cs = function(b, c, d, e) {
        d = d || function(b, c) {
            return b == c
        };
        e = e || function(c) {
            return b[c]
        };
        for (var f = b.length, g = c.length, h = [], l = 0; l < f + 1; l++)
            h[l] = [], h[l][0] = 0;
        for (var m = 0; m < g + 1; m++)
            h[0][m] = 0;
        for (l = 1; l <= f; l++)
            for (m = 1; m <= g; m++)
                d(b[l - 1], c[m - 1]) ? h[l][m] = h[l - 1][m - 1] + 1 : h[l][m] = Math.max(h[l - 1][m], h[l][m - 1]);
        for (var p = [], l = f, m = g; 0 < l && 0 < m;)
            d(b[l - 1], c[m - 1]) ? (p.unshift(e(l - 1, m - 1)), l--, m--) : h[l - 1][m] > h[l][m - 1] ? l-- : m--;
        return p
    };
    R.s.ve = function(b) {
        return R.j.reduce(arguments, function(b, d) {
            return b + d
        }, 0)
    };
    R.s.dj = function(b) {
        return R.s.ve.apply(null, arguments) / arguments.length
    };
    R.s.Fl = function(b) {
        var c = arguments.length;
        if (2 > c)
            return 0;
        var d = R.s.dj.apply(null, arguments);
        return R.s.ve.apply(null, R.j.map(arguments, function(b) {
            return Math.pow(b - d, 2)
        })) / (c - 1)
    };
    R.s.du = function(b) {
        return Math.sqrt(R.s.Fl.apply(null, arguments))
    };
    R.s.Zr = function(b) {
        return isFinite(b) && 0 == b % 1
    };
    R.s.Xr = function(b) {
        return isFinite(b) && !isNaN(b)
    };
    R.s.fs = function(b) {
        return 0 == b && 0 > 1 / b
    };
    R.s.Bs = function(b) {
        if (0 < b) {
            var c = Math.round(Math.log(b) * Math.LOG10E);
            return c - (parseFloat("1e" + c) > b ? 1 : 0)
        }
        return 0 == b ? -Infinity : NaN
    };
    R.s.st = function(b, c) {
        return Math.floor(b + (c || 2E-15))
    };
    R.s.rt = function(b, c) {
        return Math.ceil(b - (c || 2E-15))
    };
    R.s.U = function(b, c) {
        this.x = R.P(b) ? b : 0;
        this.y = R.P(c) ? c : 0
    };
    R.s.U.prototype.clone = function() {
        return new R.s.U(this.x, this.y)
    };
    R.ea && (R.s.U.prototype.toString = function() {
        return "(" + this.x + ", " + this.y + ")"
    });
    R.s.U.prototype.Tb = function(b) {
        return b instanceof R.s.U && R.s.U.Tb(this, b)
    };
    R.s.U.Tb = function(b, c) {
        return b == c ? !0 : b && c ? b.x == c.x && b.y == c.y : !1
    };
    R.s.U.Iq = function(b, c) {
        var d = b.x - c.x;
        b = b.y - c.y;
        return Math.sqrt(d * d + b * b)
    };
    R.s.U.Ds = function(b) {
        return Math.sqrt(b.x * b.x + b.y * b.y)
    };
    R.s.U.azimuth = function(b) {
        return R.s.angle(0, 0, b.x, b.y)
    };
    R.s.U.au = function(b, c) {
        var d = b.x - c.x;
        b = b.y - c.y;
        return d * d + b * b
    };
    R.s.U.Hq = function(b, c) {
        return new R.s.U(b.x - c.x, b.y - c.y)
    };
    R.s.U.ve = function(b, c) {
        return new R.s.U(b.x + c.x, b.y + c.y)
    };
    Q = R.s.U.prototype;
    Q.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    Q.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    Q.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    Q.translate = function(b, c) {
        b instanceof R.s.U ? (this.x += b.x, this.y += b.y) : (this.x += Number(b), R.ac(c) && (this.y += c));
        return this
    };
    Q.scale = function(b, c) {
        c = R.ac(c) ? c : b;
        this.x *= b;
        this.y *= c;
        return this
    };
    R.s.xb = function(b, c) {
        this.width = b;
        this.height = c
    };
    R.s.xb.Tb = function(b, c) {
        return b == c ? !0 : b && c ? b.width == c.width && b.height == c.height : !1
    };
    R.s.xb.prototype.clone = function() {
        return new R.s.xb(this.width, this.height)
    };
    R.ea && (R.s.xb.prototype.toString = function() {
        return "(" + this.width + " x " + this.height + ")"
    });
    Q = R.s.xb.prototype;
    Q.cj = function() {
        return this.width * this.height
    };
    Q.Cc = function() {
        return !this.cj()
    };
    Q.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Q.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Q.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    Q.scale = function(b, c) {
        c = R.ac(c) ? c : b;
        this.width *= b;
        this.height *= c;
        return this
    };
    R.g.userAgent.T = {};
    R.g.userAgent.T.Bk = function() {
        return R.g.userAgent.C.L("Presto")
    };
    R.g.userAgent.T.Fk = function() {
        return R.g.userAgent.C.L("Trident") || R.g.userAgent.C.L("MSIE")
    };
    R.g.userAgent.T.Va = function() {
        return R.g.userAgent.C.L("Edge")
    };
    R.g.userAgent.T.Yg = function() {
        return R.g.userAgent.C.cl() && !R.g.userAgent.T.Va()
    };
    R.g.userAgent.T.wk = function() {
        return R.g.userAgent.C.L("Gecko") && !R.g.userAgent.T.Yg() && !R.g.userAgent.T.Fk() && !R.g.userAgent.T.Va()
    };
    R.g.userAgent.T.Wb = function() {
        var b = R.g.userAgent.C.Cb();
        if (b) {
            var b = R.g.userAgent.C.Nf(b),
                c = R.g.userAgent.T.Yj(b);
            if (c)
                return "Gecko" == c[0] ? R.g.userAgent.T.fk(b) : c[1];
            var b = b[0],
                d;
            if (b && (d = b[2]) && (d = /Trident\/([^\s;]+)/.exec(d)))
                return d[1]
        }
        return ""
    };
    R.g.userAgent.T.Yj = function(b) {
        if (!R.g.userAgent.T.Va())
            return b[1];
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            if ("Edge" == d[0])
                return d
        }
    };
    R.g.userAgent.T.ya = function(b) {
        return 0 <= R.f.Qb(R.g.userAgent.T.Wb(), b)
    };
    R.g.userAgent.T.fk = function(b) {
        return (b = R.j.find(b, function(b) {
            return "Firefox" == b[0]
        })) && b[1] || ""
    };
    R.g.userAgent.platform = {};
    R.g.userAgent.platform.Kg = function() {
        return R.g.userAgent.C.L("Android")
    };
    R.g.userAgent.platform.Tg = function() {
        return R.g.userAgent.C.L("iPod")
    };
    R.g.userAgent.platform.Sg = function() {
        return R.g.userAgent.C.L("iPhone") && !R.g.userAgent.C.L("iPod") && !R.g.userAgent.C.L("iPad")
    };
    R.g.userAgent.platform.Rg = function() {
        return R.g.userAgent.C.L("iPad")
    };
    R.g.userAgent.platform.Qg = function() {
        return R.g.userAgent.platform.Sg() || R.g.userAgent.platform.Rg() || R.g.userAgent.platform.Tg()
    };
    R.g.userAgent.platform.Ug = function() {
        return R.g.userAgent.C.L("Macintosh")
    };
    R.g.userAgent.platform.yk = function() {
        return R.g.userAgent.C.L("Linux")
    };
    R.g.userAgent.platform.$g = function() {
        return R.g.userAgent.C.L("Windows")
    };
    R.g.userAgent.platform.Mg = function() {
        return R.g.userAgent.C.L("CrOS")
    };
    R.g.userAgent.platform.Wb = function() {
        var b = R.g.userAgent.C.Cb(),
            c = "";
        R.g.userAgent.platform.$g() ? (c = /Windows (?:NT|Phone) ([0-9.]+)/, c = (b = c.exec(b)) ? b[1] : "0.0") : R.g.userAgent.platform.Qg() ? (c = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, c = (b = c.exec(b)) && b[1].replace(/_/g, ".")) : R.g.userAgent.platform.Ug() ? (c = /Mac OS X ([0-9_.]+)/, c = (b = c.exec(b)) ? b[1].replace(/_/g, ".") : "10") : R.g.userAgent.platform.Kg() ? (c = /Android\s+([^\);]+)(\)|;)/, c = (b = c.exec(b)) && b[1]) : R.g.userAgent.platform.Mg() && (c = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,
            c = (b = c.exec(b)) && b[1]);
        return c || ""
    };
    R.g.userAgent.platform.ya = function(b) {
        return 0 <= R.f.Qb(R.g.userAgent.platform.Wb(), b)
    };
    R.Ma = {};
    R.Ma.object = function(b, c) {
        return c
    };
    R.Ma.qe = function(b) {
        R.Ma.qe[" "](b);
        return b
    };
    R.Ma.qe[" "] = R.Wa;
    R.Ma.cq = function(b, c) {
        try {
            return R.Ma.qe(b[c]), !0
        } catch (d) {}
        return !1
    };
    R.Ma.cache = function(b, c, d, e) {
        e = e ? e(c) : c;
        return Object.prototype.hasOwnProperty.call(b, e) ? b[e] : b[e] = d(c)
    };
    R.userAgent = {};
    R.userAgent.Ee = !1;
    R.userAgent.Ce = !1;
    R.userAgent.De = !1;
    R.userAgent.Je = !1;
    R.userAgent.dd = !1;
    R.userAgent.He = !1;
    R.userAgent.Sh = !1;
    R.userAgent.Mb = R.userAgent.Ee || R.userAgent.Ce || R.userAgent.De || R.userAgent.dd || R.userAgent.Je || R.userAgent.He;
    R.userAgent.ek = function() {
        return R.g.userAgent.C.Cb()
    };
    R.userAgent.kg = function() {
        return R.global.navigator || null
    };
    R.userAgent.df = R.userAgent.Mb ? R.userAgent.He : R.g.userAgent.A.Wd();
    R.userAgent.W = R.userAgent.Mb ? R.userAgent.Ee : R.g.userAgent.A.Dc();
    R.userAgent.Re = R.userAgent.Mb ? R.userAgent.Ce : R.g.userAgent.T.Va();
    R.userAgent.ln = R.userAgent.Re || R.userAgent.W;
    R.userAgent.gd = R.userAgent.Mb ? R.userAgent.De : R.g.userAgent.T.wk();
    R.userAgent.Ob = R.userAgent.Mb ? R.userAgent.Je || R.userAgent.dd : R.g.userAgent.T.Yg();
    R.userAgent.Ak = function() {
        return R.userAgent.Ob && R.g.userAgent.C.L("Mobile")
    };
    R.userAgent.to = R.userAgent.dd || R.userAgent.Ak();
    R.userAgent.Oo = R.userAgent.Ob;
    R.userAgent.Gj = function() {
        var b = R.userAgent.kg();
        return b && b.platform || ""
    };
    R.userAgent.Fo = R.userAgent.Gj();
    R.userAgent.Ge = !1;
    R.userAgent.Ke = !1;
    R.userAgent.Fe = !1;
    R.userAgent.Le = !1;
    R.userAgent.Be = !1;
    R.userAgent.bd = !1;
    R.userAgent.ad = !1;
    R.userAgent.cd = !1;
    R.userAgent.Fa = R.userAgent.Ge || R.userAgent.Ke || R.userAgent.Fe || R.userAgent.Le || R.userAgent.Be || R.userAgent.bd || R.userAgent.ad || R.userAgent.cd;
    R.userAgent.ho = R.userAgent.Fa ? R.userAgent.Ge : R.g.userAgent.platform.Ug();
    R.userAgent.tp = R.userAgent.Fa ? R.userAgent.Ke : R.g.userAgent.platform.$g();
    R.userAgent.xk = function() {
        return R.g.userAgent.platform.yk() || R.g.userAgent.platform.Mg()
    };
    R.userAgent.fo = R.userAgent.Fa ? R.userAgent.Fe : R.userAgent.xk();
    R.userAgent.Jk = function() {
        var b = R.userAgent.kg();
        return !!b && R.f.contains(b.appVersion || "", "X11")
    };
    R.userAgent.up = R.userAgent.Fa ? R.userAgent.Le : R.userAgent.Jk();
    R.userAgent.rm = R.userAgent.Fa ? R.userAgent.Be : R.g.userAgent.platform.Kg();
    R.userAgent.Un = R.userAgent.Fa ? R.userAgent.bd : R.g.userAgent.platform.Sg();
    R.userAgent.Tn = R.userAgent.Fa ? R.userAgent.ad : R.g.userAgent.platform.Rg();
    R.userAgent.Vn = R.userAgent.Fa ? R.userAgent.cd : R.g.userAgent.platform.Tg();
    R.userAgent.Sn = R.userAgent.Fa ? R.userAgent.bd || R.userAgent.ad || R.userAgent.cd : R.g.userAgent.platform.Qg();
    R.userAgent.Hj = function() {
        var b = "",
            c = R.userAgent.gk();
        c && (b = c ? c[1] : "");
        return R.userAgent.W && (c = R.userAgent.$f(), null != c && c > parseFloat(b)) ? String(c) : b
    };
    R.userAgent.gk = function() {
        var b = R.userAgent.ek();
        if (R.userAgent.gd)
            return /rv\:([^\);]+)(\)|;)/.exec(b);
        if (R.userAgent.Re)
            return /Edge\/([\d\.]+)/.exec(b);
        if (R.userAgent.W)
            return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(b);
        if (R.userAgent.Ob)
            return /WebKit\/(\S+)/.exec(b);
        if (R.userAgent.df)
            return /(?:Version)[ \/]?(\S+)/.exec(b)
    };
    R.userAgent.$f = function() {
        var b = R.global.document;
        return b ? b.documentMode : void 0
    };
    R.userAgent.VERSION = R.userAgent.Hj();
    R.userAgent.compare = function(b, c) {
        return R.f.Qb(b, c)
    };
    R.userAgent.Hk = {};
    R.userAgent.ya = function(b) {
        return R.userAgent.Sh || R.Ma.cache(R.userAgent.Hk, b, function() {
            return 0 <= R.f.Qb(R.userAgent.VERSION, b)
        })
    };
    R.userAgent.us = R.userAgent.ya;
    R.userAgent.$b = function(b) {
        return Number(R.userAgent.li) >= b
    };
    R.userAgent.Ur = R.userAgent.$b;
    var S;
    var T = R.global.document,
        aa = R.userAgent.$f();
    S = T && R.userAgent.W ? aa || ("CSS1Compat" == T.compatMode ? parseInt(R.userAgent.VERSION, 10) : 5) : void 0;
    R.userAgent.li = S;
    R.a.sb = {
        Xh: !R.userAgent.W || R.userAgent.$b(9),
        Yh: !R.userAgent.gd && !R.userAgent.W || R.userAgent.W && R.userAgent.$b(9) || R.userAgent.gd && R.userAgent.ya("1.9.1"),
        Ne: R.userAgent.W && !R.userAgent.ya("9"),
        Zh: R.userAgent.W || R.userAgent.df || R.userAgent.Ob,
        pi: R.userAgent.W,
        ao: R.userAgent.W && !R.userAgent.$b(9)
    };
    R.a.M = {};
    R.a.M.Xn = {
        pm: "afterbegin",
        qm: "afterend",
        Cm: "beforebegin",
        Dm: "beforeend"
    };
    R.a.M.Kr = function(b, c, d) {
        b.insertAdjacentHTML(c, R.b.o.v(d))
    };
    R.a.M.Ni = {
        MATH: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    };
    R.a.M.yh = function(b, c) {
        if (R.u.oa && R.a.M.Ni[b.tagName.toUpperCase()])
            throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + b.tagName + ".");
        b.innerHTML = R.b.o.v(c)
    };
    R.a.M.Pt = function(b, c) {
        b.outerHTML = R.b.o.v(c)
    };
    R.a.M.St = function(b, c) {
        b.style.cssText = R.b.I.v(c)
    };
    R.a.M.Jq = function(b, c) {
        b.write(R.b.o.v(c))
    };
    R.a.M.Bt = function(b, c) {
        c = c instanceof R.b.w ? c : R.b.w.Xa(c);
        b.href = R.b.w.v(c)
    };
    R.a.M.Lt = function(b, c) {
        c = c instanceof R.b.w ? c : R.b.w.Xa(c);
        b.src = R.b.w.v(c)
    };
    R.a.M.Ft = function(b, c) {
        b.src = R.b.G.v(c)
    };
    R.a.M.Ht = function(b, c) {
        b.src = R.b.G.v(c)
    };
    R.a.M.Jt = function(b, c) {
        b.src = R.b.G.v(c)
    };
    R.a.M.Kt = function(b, c) {
        b.srcdoc = R.b.o.v(c)
    };
    R.a.M.Mt = function(b, c, d) {
        b.rel = d;
        R.f.xf(d, "stylesheet") ? b.href = R.b.G.v(c) : b.href = c instanceof R.b.G ? R.b.G.v(c) : c instanceof R.b.w ? R.b.w.v(c) : R.b.w.Xa(c).wa()
    };
    R.a.M.Ot = function(b, c) {
        b.data = R.b.G.v(c)
    };
    R.a.M.Rt = function(b, c) {
        b.src = R.b.G.v(c)
    };
    R.a.M.Nt = function(b, c) {
        c = c instanceof R.b.w ? c : R.b.w.Xa(c);
        b.href = R.b.w.v(c)
    };
    R.a.M.Ts = function(b, c, d, e, f) {
        b = b instanceof R.b.w ? b : R.b.w.Xa(b);
        return (c || window).open(R.b.w.v(b), d ? R.f.H.v(d) : "", e, f)
    };
    R.a.M.Qp = O();
    R.a.M.Ip = O();
    R.a.M.Np = O();
    R.a.M.Mp = O();
    R.a.M.Jp = O();
    R.a.M.Kp = O();
    R.a.M.Lp = O();
    R.a.M.Op = O();
    R.a.M.Pp = O();
    R.a.M.Eq = function(b) {
        return R.la(b) ? b.constructor.displayName || b.constructor.name || Object.prototype.toString.call(b) : void 0 === b ? "undefined" : null === b ? "null" : typeof b
    };
    R.a.Th = !1;
    R.a.Ie = !1;
    R.a.ci = R.a.Th || R.a.Ie;
    R.a.Cd = function(b) {
        return b ? new R.a.vb(R.a.Ua(b)) : R.a.Dj || (R.a.Dj = new R.a.vb)
    };
    R.a.Vj = function() {
        return document
    };
    R.a.Dd = function(b) {
        return R.a.Fd(document, b)
    };
    R.a.Fd = function(b, c) {
        return R.K(c) ? b.getElementById(c) : c
    };
    R.a.ak = function(b) {
        return R.a.vg(document, b)
    };
    R.a.vg = function(b, c) {
        return R.a.Fd(b, c)
    };
    R.a.Oh = R.a.Dd;
    R.a.getElementsByTagName = function(b, c) {
        return (c || document).getElementsByTagName(String(b))
    };
    R.a.Gd = function(b, c, d) {
        return R.a.wc(document, b, c, d)
    };
    R.a.dg = function(b, c) {
        var d = c || document;
        return R.a.md(d) ? d.querySelectorAll("." + b) : R.a.wc(document, "*", b, c)
    };
    R.a.Ed = function(b, c) {
        var d = c || document;
        return (d.getElementsByClassName ? d.getElementsByClassName(b)[0] : R.a.md(d) ? d.querySelector("." + b) : R.a.wc(document, "*", b, c)[0]) || null
    };
    R.a.ug = function(b, c) {
        return R.a.Ed(b, c)
    };
    R.a.md = function(b) {
        return !(!b.querySelectorAll || !b.querySelector)
    };
    R.a.wc = function(b, c, d, e) {
        b = e || b;
        c = c && "*" != c ? String(c).toUpperCase() : "";
        if (R.a.md(b) && (c || d))
            return b.querySelectorAll(c + (d ? "." + d : ""));
        if (d && b.getElementsByClassName) {
            b = b.getElementsByClassName(d);
            if (c) {
                e = {};
                for (var f = 0, g = 0, h; h = b[g]; g++)
                    c == h.nodeName && (e[f++] = h);
                e.length = f;
                return e
            }
            return b
        }
        b = b.getElementsByTagName(c || "*");
        if (d) {
            e = {};
            for (g = f = 0; h = b[g]; g++)
                c = h.className, typeof c.split == z && R.j.contains(c.split(/\s+/), d) && (e[f++] = h);
            e.length = f;
            return e
        }
        return b
    };
    R.a.Ph = R.a.Gd;
    R.a.Sc = function(b, c) {
        R.object.forEach(c, function(c, e) {
            "style" == e ? b.style.cssText = c : "class" == e ? b.className = c : "for" == e ? b.htmlFor = c : R.a.Qe.hasOwnProperty(e) ? b.setAttribute(R.a.Qe[e], c) : R.f.startsWith(e, "aria-") || R.f.startsWith(e, "data-") ? b.setAttribute(e, c) : b[e] = c
        })
    };
    R.a.Qe = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    R.a.zg = function(b) {
        return R.a.Ag(b || window)
    };
    R.a.Ag = function(b) {
        b = b.document;
        b = R.a.Zb(b) ? b.documentElement : b.body;
        return new R.s.xb(b.clientWidth, b.clientHeight)
    };
    R.a.Wj = function() {
        return R.a.Ad(window)
    };
    R.a.lr = function(b) {
        return R.a.Ad(b)
    };
    R.a.Ad = function(b) {
        var c = b.document,
            d = 0;
        if (c) {
            var d = c.body,
                e = c.documentElement;
            if (!e || !d)
                return 0;
            b = R.a.Ag(b).height;
            if (R.a.Zb(c) && e.scrollHeight)
                d = e.scrollHeight != b ? e.scrollHeight : e.offsetHeight;
            else {
                var c = e.scrollHeight,
                    f = e.offsetHeight;
                e.clientHeight != f && (c = d.scrollHeight, f = d.offsetHeight);
                d = c > b ? c > f ? c : f : c < f ? c : f
            }
        }
        return d
    };
    R.a.wr = function(b) {
        return R.a.Cd((b || R.global || window).document).ag()
    };
    R.a.ag = function() {
        return R.a.cg(document)
    };
    R.a.cg = function(b) {
        var c = R.a.Bd(b);
        b = R.a.Kd(b);
        return R.userAgent.W && R.userAgent.ya("10") && b.pageYOffset != c.scrollTop ? new R.s.U(c.scrollLeft, c.scrollTop) : new R.s.U(b.pageXOffset || c.scrollLeft, b.pageYOffset || c.scrollTop)
    };
    R.a.Xj = function() {
        return R.a.Bd(document)
    };
    R.a.Bd = function(b) {
        return b.scrollingElement ? b.scrollingElement : !R.userAgent.Ob && R.a.Zb(b) ? b.documentElement : b.body || b.documentElement
    };
    R.a.Db = function(b) {
        return b ? R.a.Kd(b) : window
    };
    R.a.Kd = function(b) {
        return b.parentWindow || b.defaultView
    };
    R.a.pd = function(b, c, d) {
        return R.a.Ff(document, arguments)
    };
    R.a.Ff = function(b, c) {
        var d = String(c[0]),
            e = c[1];
        if (!R.a.sb.Xh && e && (e.name || e.type)) {
            d = ["<", d];
            e.name && d.push(' name="', R.f.xa(e.name), '"');
            if (e.type) {
                d.push(' type="', R.f.xa(e.type), '"');
                var f = {};
                R.object.extend(f, e);
                delete f.type;
                e = f
            }
            d.push(">");
            d = d.join("")
        }
        d = b.createElement(d);
        e && (R.K(e) ? d.className = e : R.isArray(e) ? d.className = e.join(" ") : R.a.Sc(d, e));
        2 < c.length && R.a.rf(b, d, c, 2);
        return d
    };
    R.a.rf = function(b, c, d, e) {
        function f(d) {
            d && c.appendChild(R.K(d) ? b.createTextNode(d) : d)
        }
        for (; e < d.length; e++) {
            var g = d[e];
            R.Yb(g) && !R.a.Ud(g) ? R.j.forEach(R.a.Vd(g) ? R.j.Hh(g) : g, f) : f(g)
        }
    };
    R.a.Qh = R.a.pd;
    R.a.createElement = function(b) {
        return R.a.Sa(document, b)
    };
    R.a.Sa = function(b, c) {
        return b.createElement(String(c))
    };
    R.a.createTextNode = function(b) {
        return document.createTextNode(String(b))
    };
    R.a.xj = function(b, c, d) {
        return R.a.Gf(document, b, c, !!d)
    };
    R.a.Gf = function(b, c, d, e) {
        for (var f = R.a.Sa(b, "TABLE"), g = f.appendChild(R.a.Sa(b, "TBODY")), h = 0; h < c; h++) {
            for (var l = R.a.Sa(b, "TR"), m = 0; m < d; m++) {
                var p = R.a.Sa(b, "TD");
                e && R.a.oe(p, R.f.nf.$e);
                l.appendChild(p)
            }
            g.appendChild(l)
        }
        return f
    };
    R.a.rq = function(b) {
        var c = R.j.map(arguments, R.f.H.v),
            c = R.b.rb.Dl(R.f.H.from("Constant HTML string, that gets turned into a Node later, so it will be automatically balanced."), c.join(""));
        return R.a.qh(c)
    };
    R.a.qh = function(b) {
        return R.a.rh(document, b)
    };
    R.a.rh = function(b, c) {
        var d = R.a.Sa(b, "DIV");
        R.a.sb.pi ? (R.a.M.yh(d, R.b.o.concat(R.b.o.Me, c)), d.removeChild(d.firstChild)) : R.a.M.yh(d, c);
        return R.a.pj(b, d)
    };
    R.a.pj = function(b, c) {
        if (1 == c.childNodes.length)
            return c.removeChild(c.firstChild);
        for (b = b.createDocumentFragment(); c.firstChild;)
            b.appendChild(c.firstChild);
        return b
    };
    R.a.rk = function() {
        return R.a.Zb(document)
    };
    R.a.Zb = function(b) {
        return R.a.ci ? R.a.Ie : "CSS1Compat" == b.compatMode
    };
    R.a.canHaveChildren = function(b) {
        if (b.nodeType != R.a.ga.Oa)
            return !1;
        switch (b.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case q:
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    R.a.appendChild = function(b, c) {
        b.appendChild(c)
    };
    R.a.append = function(b, c) {
        R.a.rf(R.a.Ua(b), b, arguments, 1)
    };
    R.a.ke = function(b) {
        for (var c; c = b.firstChild;)
            b.removeChild(c)
    };
    R.a.Hg = function(b, c) {
        c.parentNode && c.parentNode.insertBefore(b, c)
    };
    R.a.Gg = function(b, c) {
        c.parentNode && c.parentNode.insertBefore(b, c.nextSibling)
    };
    R.a.Fg = function(b, c, d) {
        b.insertBefore(c, b.childNodes[d] || null)
    };
    R.a.removeNode = function(b) {
        return b && b.parentNode ? b.parentNode.removeChild(b) : null
    };
    R.a.ph = function(b, c) {
        var d = c.parentNode;
        d && d.replaceChild(b, c)
    };
    R.a.Tf = function(b) {
        var c,
            d = b.parentNode;
        if (d && d.nodeType != R.a.ga.ki) {
            if (b.removeNode)
                return b.removeNode(!1);
            for (; c = b.firstChild;)
                d.insertBefore(c, b);
            return R.a.removeNode(b)
        }
    };
    R.a.Zf = function(b) {
        return R.a.sb.Yh && void 0 != b.children ? b.children : R.j.filter(b.childNodes, function(b) {
            return b.nodeType == R.a.ga.Oa
        })
    };
    R.a.eg = function(b) {
        return R.P(b.firstElementChild) ? b.firstElementChild : R.a.xc(b.firstChild, !0)
    };
    R.a.ig = function(b) {
        return R.P(b.lastElementChild) ? b.lastElementChild : R.a.xc(b.lastChild, !1)
    };
    R.a.lg = function(b) {
        return R.P(b.nextElementSibling) ? b.nextElementSibling : R.a.xc(b.nextSibling, !0)
    };
    R.a.sg = function(b) {
        return R.P(b.previousElementSibling) ? b.previousElementSibling : R.a.xc(b.previousSibling, !1)
    };
    R.a.xc = function(b, c) {
        for (; b && b.nodeType != R.a.ga.Oa;)
            b = c ? b.nextSibling : b.previousSibling;
        return b
    };
    R.a.mg = function(b) {
        if (!b)
            return null;
        if (b.firstChild)
            return b.firstChild;
        for (; b && !b.nextSibling;)
            b = b.parentNode;
        return b ? b.nextSibling : null
    };
    R.a.tg = function(b) {
        if (!b)
            return null;
        if (!b.previousSibling)
            return b.parentNode;
        for (b = b.previousSibling; b && b.lastChild;)
            b = b.lastChild;
        return b
    };
    R.a.Ud = function(b) {
        return R.la(b) && 0 < b.nodeType
    };
    R.a.Qd = function(b) {
        return R.la(b) && b.nodeType == R.a.ga.Oa
    };
    R.a.Zg = function(b) {
        return R.la(b) && b.window == b
    };
    R.a.rg = function(b) {
        var c;
        if (R.a.sb.Zh && !(R.userAgent.W && R.userAgent.ya("9") && !R.userAgent.ya("10") && R.global.SVGElement && b instanceof R.global.SVGElement) && (c = b.parentElement))
            return c;
        c = b.parentNode;
        return R.a.Qd(c) ? c : null
    };
    R.a.contains = function(b, c) {
        if (!b || !c)
            return !1;
        if (b.contains && c.nodeType == R.a.ga.Oa)
            return b == c || b.contains(c);
        if ("undefined" != typeof b.compareDocumentPosition)
            return b == c || !!(b.compareDocumentPosition(c) & 16);
        for (; c && b != c;)
            c = c.parentNode;
        return c == b
    };
    R.a.zf = function(b, c) {
        if (b == c)
            return 0;
        if (b.compareDocumentPosition)
            return b.compareDocumentPosition(c) & 2 ? 1 : -1;
        if (R.userAgent.W && !R.userAgent.$b(9)) {
            if (b.nodeType == R.a.ga.DOCUMENT)
                return -1;
            if (c.nodeType == R.a.ga.DOCUMENT)
                return 1
        }
        if ("sourceIndex" in b || b.parentNode && "sourceIndex" in b.parentNode) {
            var d = b.nodeType == R.a.ga.Oa,
                e = c.nodeType == R.a.ga.Oa;
            if (d && e)
                return b.sourceIndex - c.sourceIndex;
            var f = b.parentNode,
                g = c.parentNode;
            return f == g ? R.a.Bf(b, c) : !d && R.a.contains(f, c) ? -1 * R.a.Af(b, c) : !e && R.a.contains(g,
                b) ? R.a.Af(c, b) : (d ? b.sourceIndex : f.sourceIndex) - (e ? c.sourceIndex : g.sourceIndex)
        }
        e = R.a.Ua(b);
        d = e.createRange();
        d.selectNode(b);
        d.collapse(!0);
        b = e.createRange();
        b.selectNode(c);
        b.collapse(!0);
        return d.compareBoundaryPoints(R.global.Range.START_TO_END, b)
    };
    R.a.Af = function(b, c) {
        var d = b.parentNode;
        if (d == c)
            return -1;
        for (; c.parentNode != d;)
            c = c.parentNode;
        return R.a.Bf(c, b)
    };
    R.a.Bf = function(b, c) {
        for (; c = c.previousSibling;)
            if (c == b)
                return -1;
        return 1
    };
    R.a.Pf = function(b) {
        var c,
            d = arguments.length;
        if (!d)
            return null;
        if (1 == d)
            return arguments[0];
        var e = [],
            f = Infinity;
        for (c = 0; c < d; c++) {
            for (var g = [], h = arguments[c]; h;)
                g.unshift(h), h = h.parentNode;
            e.push(g);
            f = Math.min(f, g.length)
        }
        g = null;
        for (c = 0; c < f; c++) {
            for (var h = e[0][c], l = 1; l < d; l++)
                if (h != e[l][c])
                    return g;
            g = h
        }
        return g
    };
    R.a.Ua = function(b) {
        return b.nodeType == R.a.ga.DOCUMENT ? b : b.ownerDocument || b.document
    };
    R.a.fg = function(b) {
        return b.contentDocument || b.contentWindow.document
    };
    R.a.gg = function(b) {
        try {
            return b.contentWindow || (b.contentDocument ? R.a.Db(b.contentDocument) : null)
        } catch (c) {}
        return null
    };
    R.a.oe = function(b, c) {
        if ("textContent" in b)
            b.textContent = c;
        else if (b.nodeType == R.a.ga.nc)
            b.data = c;
        else if (b.firstChild && b.firstChild.nodeType == R.a.ga.nc) {
            for (; b.lastChild != b.firstChild;)
                b.removeChild(b.lastChild);
            b.firstChild.data = c
        } else {
            R.a.ke(b);
            var d = R.a.Ua(b);
            b.appendChild(d.createTextNode(String(c)))
        }
    };
    R.a.qg = function(b) {
        if ("outerHTML" in b)
            return b.outerHTML;
        var c = R.a.Ua(b),
            c = R.a.Sa(c, "DIV");
        c.appendChild(b.cloneNode(!0));
        return c.innerHTML
    };
    R.a.Qf = function(b, c) {
        var d = [];
        return R.a.wd(b, c, d, !0) ? d[0] : void 0
    };
    R.a.Rf = function(b, c) {
        var d = [];
        R.a.wd(b, c, d, !1);
        return d
    };
    R.a.wd = function(b, c, d, e) {
        if (null != b)
            for (b = b.firstChild; b;) {
                if (c(b) && (d.push(b), e) || R.a.wd(b, c, d, e))
                    return !0;
                b = b.nextSibling
            }
        return !1
    };
    R.a.kf = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    };
    R.a.lc = {
        IMG: " ",
        BR: "\n"
    };
    R.a.Sd = function(b) {
        return R.a.Cg(b) && R.a.Xg(b)
    };
    R.a.wh = function(b, c) {
        c ? b.tabIndex = 0 : (b.tabIndex = -1, b.removeAttribute("tabIndex"))
    };
    R.a.Og = function(b) {
        var c;
        return (c = R.a.dl(b) ? !b.disabled && (!R.a.Cg(b) || R.a.Xg(b)) : R.a.Sd(b)) && R.userAgent.W ? R.a.jk(b) : c
    };
    R.a.Cg = function(b) {
        return R.userAgent.W && !R.userAgent.ya("9") ? (b = b.getAttributeNode("tabindex"), R.mb(b) && b.specified) : b.hasAttribute("tabindex")
    };
    R.a.Xg = function(b) {
        b = b.tabIndex;
        return R.ac(b) && 0 <= b && 32768 > b
    };
    R.a.dl = function(b) {
        return "A" == b.tagName || "INPUT" == b.tagName || "TEXTAREA" == b.tagName || "SELECT" == b.tagName || "BUTTON" == b.tagName
    };
    R.a.jk = function(b) {
        b = !R.Aa(b.getBoundingClientRect) || R.userAgent.W && null == b.parentElement ? {
            height: b.offsetHeight,
            width: b.offsetWidth
        } : b.getBoundingClientRect();
        return R.mb(b) && 0 < b.height && 0 < b.width
    };
    R.a.yc = function(b) {
        if (R.a.sb.Ne && null !== b && "innerText" in b)
            b = R.f.nj(b.innerText);
        else {
            var c = [];
            R.a.Id(b, c, !0);
            b = c.join("")
        }
        b = b.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        b = b.replace(/\u200B/g, "");
        R.a.sb.Ne || (b = b.replace(/ +/g, " "));
        " " != b && (b = b.replace(/^\s*/, ""));
        return b
    };
    R.a.zr = function(b) {
        var c = [];
        R.a.Id(b, c, !1);
        return c.join("")
    };
    R.a.Id = function(b, c, d) {
        if (!(b.nodeName in R.a.kf))
            if (b.nodeType == R.a.ga.nc)
                d ? c.push(String(b.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : c.push(b.nodeValue);
            else if (b.nodeName in R.a.lc)
            c.push(R.a.lc[b.nodeName]);
        else
            for (b = b.firstChild; b;)
                R.a.Id(b, c, d), b = b.nextSibling
    };
    R.a.og = function(b) {
        return R.a.yc(b).length
    };
    R.a.pg = function(b, c) {
        c = c || R.a.Ua(b).body;
        for (var d = []; b && b != c;) {
            for (var e = b; e = e.previousSibling;)
                d.unshift(R.a.yc(e));
            b = b.parentNode
        }
        return R.f.trimLeft(d.join("")).replace(/ +/g, " ").length
    };
    R.a.ng = function(b, c, d) {
        b = [b];
        for (var e = 0, f = null; 0 < b.length && e < c;)
            if (f = b.pop(), !(f.nodeName in R.a.kf))
                if (f.nodeType == R.a.ga.nc)
                    var g = f.nodeValue.replace(/(\r\n|\r|\n)/g, "").replace(/ +/g, " "),
                        e = e + g.length;
                else if (f.nodeName in R.a.lc)
            e += R.a.lc[f.nodeName].length;
        else
            for (g = f.childNodes.length - 1; 0 <= g; g--)
                b.push(f.childNodes[g]);
        R.la(d) && (d.bt = f ? f.nodeValue.length + c - e - 1 : 0, d.node = f);
        return f
    };
    R.a.Vd = function(b) {
        if (b && typeof b.length == D) {
            if (R.la(b))
                return typeof b.item == z || typeof b.item == H;
            if (R.Aa(b))
                return typeof b.item == z
        }
        return !1
    };
    R.a.zd = function(b, c, d, e) {
        if (!c && !d)
            return null;
        var f = c ? String(c).toUpperCase() : null;
        return R.a.yd(b, function(b) {
            return (!f || b.nodeName == f) && (!d || R.K(b.className) && R.j.contains(b.className.split(/\s+/), d))
        }, !0, e)
    };
    R.a.Wf = function(b, c, d) {
        return R.a.zd(b, null, c, d)
    };
    R.a.yd = function(b, c, d, e) {
        b && !d && (b = b.parentNode);
        for (d = 0; b && (null == e || d <= e);) {
            if (c(b))
                return b;
            b = b.parentNode;
            d++
        }
        return null
    };
    R.a.Vf = function(b) {
        try {
            return b && b.activeElement
        } catch (c) {}
        return null
    };
    R.a.xr = function() {
        var b = R.a.Db();
        return R.P(b.devicePixelRatio) ? b.devicePixelRatio : b.matchMedia ? R.a.Hc(3) || R.a.Hc(2) || R.a.Hc(1.5) || R.a.Hc(1) || .75 : 1
    };
    R.a.Hc = function(b) {
        return R.a.Db().matchMedia("(min-resolution: " + b + "dppx),(min--moz-device-pixel-ratio: " + b + "),(min-resolution: " + 96 * b + "dpi)").matches ? b : 0
    };
    R.a.Yf = function(b) {
        return b.getContext("2d")
    };
    R.a.vb = function(b) {
        this.X = b || R.global.document || document
    };
    Q = R.a.vb.prototype;
    Q.Cd = R.a.Cd;
    Q.Vj = P("X");
    Q.Dd = function(b) {
        return R.a.Fd(this.X, b)
    };
    Q.ak = function(b) {
        return R.a.vg(this.X, b)
    };
    Q.Oh = R.a.vb.prototype.Dd;
    Q.getElementsByTagName = function(b, c) {
        return (c || this.X).getElementsByTagName(String(b))
    };
    Q.Gd = function(b, c, d) {
        return R.a.wc(this.X, b, c, d)
    };
    Q.dg = function(b, c) {
        return R.a.dg(b, c || this.X)
    };
    Q.Ed = function(b, c) {
        return R.a.Ed(b, c || this.X)
    };
    Q.ug = function(b, c) {
        return R.a.ug(b, c || this.X)
    };
    Q.Ph = R.a.vb.prototype.Gd;
    Q.Sc = R.a.Sc;
    Q.zg = function(b) {
        return R.a.zg(b || this.Db())
    };
    Q.Wj = function() {
        return R.a.Ad(this.Db())
    };
    Q.pd = function(b, c, d) {
        return R.a.Ff(this.X, arguments)
    };
    Q.Qh = R.a.vb.prototype.pd;
    Q.createElement = function(b) {
        return R.a.Sa(this.X, b)
    };
    Q.createTextNode = function(b) {
        return this.X.createTextNode(String(b))
    };
    Q.xj = function(b, c, d) {
        return R.a.Gf(this.X, b, c, !!d)
    };
    Q.qh = function(b) {
        return R.a.rh(this.X, b)
    };
    Q.rk = function() {
        return R.a.Zb(this.X)
    };
    Q.Db = function() {
        return R.a.Kd(this.X)
    };
    Q.Xj = function() {
        return R.a.Bd(this.X)
    };
    Q.ag = function() {
        return R.a.cg(this.X)
    };
    Q.Vf = function(b) {
        return R.a.Vf(b || this.X)
    };
    Q.appendChild = R.a.appendChild;
    Q.append = R.a.append;
    Q.canHaveChildren = R.a.canHaveChildren;
    Q.ke = R.a.ke;
    Q.Hg = R.a.Hg;
    Q.Gg = R.a.Gg;
    Q.Fg = R.a.Fg;
    Q.removeNode = R.a.removeNode;
    Q.ph = R.a.ph;
    Q.Tf = R.a.Tf;
    Q.Zf = R.a.Zf;
    Q.eg = R.a.eg;
    Q.ig = R.a.ig;
    Q.lg = R.a.lg;
    Q.sg = R.a.sg;
    Q.mg = R.a.mg;
    Q.tg = R.a.tg;
    Q.Ud = R.a.Ud;
    Q.Qd = R.a.Qd;
    Q.Zg = R.a.Zg;
    Q.rg = R.a.rg;
    Q.contains = R.a.contains;
    Q.zf = R.a.zf;
    Q.Pf = R.a.Pf;
    Q.Ua = R.a.Ua;
    Q.fg = R.a.fg;
    Q.gg = R.a.gg;
    Q.oe = R.a.oe;
    Q.qg = R.a.qg;
    Q.Qf = R.a.Qf;
    Q.Rf = R.a.Rf;
    Q.Sd = R.a.Sd;
    Q.wh = R.a.wh;
    Q.Og = R.a.Og;
    Q.yc = R.a.yc;
    Q.og = R.a.og;
    Q.pg = R.a.pg;
    Q.ng = R.a.ng;
    Q.Vd = R.a.Vd;
    Q.zd = R.a.zd;
    Q.Wf = R.a.Wf;
    Q.yd = R.a.yd;
    Q.Yf = R.a.Yf;
    R.b.ha = {};
    R.b.ha.tt = function(b) {
        R.b.ha.Jb();
        return R.b.o.pa(b, null)
    };
    R.b.ha.vt = function(b) {
        R.b.ha.Jb();
        return R.b.I.zb(b)
    };
    R.b.ha.xt = function(b) {
        R.b.ha.Jb();
        return R.b.R.Rb(b)
    };
    R.b.ha.zt = function(b) {
        R.b.ha.Jb();
        return R.b.w.Ha(b)
    };
    R.b.ha.xe = function(b) {
        R.b.ha.Jb();
        return R.b.G.Sb(b)
    };
    R.b.ha.Jb = R.Wa;
    R.b.ha.Qt = function(b) {
        R.b.ha.Jb = b
    };
    R.async = {};
    R.async.jc = function(b, c, d) {
        this.Lk = d;
        this.yj = b;
        this.ul = c;
        this.Ic = 0;
        this.Bc = null
    };
    R.async.jc.prototype.get = function() {
        var b;
        0 < this.Ic ? (this.Ic--, b = this.Bc, this.Bc = b.next, b.next = null) : b = this.yj();
        return b
    };
    R.async.jc.prototype.put = function(b) {
        this.ul(b);
        this.Ic < this.Lk && (this.Ic++, b.next = this.Bc, this.Bc = b)
    };
    R.debug.Y = {};
    R.debug.rn = O();
    R.debug.Y.Hb = [];
    R.debug.Y.ge = [];
    R.debug.Y.ih = !1;
    R.debug.Y.register = function(b) {
        R.debug.Y.Hb[R.debug.Y.Hb.length] = b;
        if (R.debug.Y.ih)
            for (var c = R.debug.Y.ge, d = 0; d < c.length; d++)
                b(R.bind(c[d].gm, c[d]))
    };
    R.debug.Y.Hs = function(b) {
        R.debug.Y.ih = !0;
        for (var c = R.bind(b.gm, b), d = 0; d < R.debug.Y.Hb.length; d++)
            R.debug.Y.Hb[d](c);
        R.debug.Y.ge.push(b)
    };
    R.debug.Y.xu = function(b) {
        var c = R.debug.Y.ge;
        b = R.bind(b.v, b);
        for (var d = 0; d < R.debug.Y.Hb.length; d++)
            R.debug.Y.Hb[d](b);
        c.length--
    };
    R.J = {};
    R.J.sc = function(b) {
        return function() {
            return b
        }
    };
    R.J.sn = R.J.sc(!1);
    R.J.mp = R.J.sc(!0);
    R.J.yo = R.J.sc(null);
    R.J.mk = N();
    R.J.error = function(b) {
        return function() {
            throw Error(b);
        }
    };
    R.J.ia = function(b) {
        return function() {
            throw b;
        }
    };
    R.J.lock = function(b, c) {
        c = c || 0;
        return function() {
            return b.apply(this, Array.prototype.slice.call(arguments, 0, c))
        }
    };
    R.J.Ps = function(b) {
        return function() {
            return arguments[b]
        }
    };
    R.J.Ws = function(b, c) {
        var d = Array.prototype.slice.call(arguments, 1);
        return function() {
            var c = Array.prototype.slice.call(arguments);
            c.push.apply(c, d);
            return b.apply(this, c)
        }
    };
    R.J.Eu = function(b, c) {
        return R.J.Hl(b, R.J.sc(c))
    };
    R.J.Pq = function(b, c) {
        return function(d) {
            return c ? b == d : b === d
        }
    };
    R.J.oq = function(b, c) {
        var d = arguments,
            e = d.length;
        return function() {
            var b;
            e && (b = d[e - 1].apply(this, arguments));
            for (var c = e - 2; 0 <= c; c--)
                b = d[c].call(this, b);
            return b
        }
    };
    R.J.Hl = function(b) {
        var c = arguments,
            d = c.length;
        return function() {
            for (var b, f = 0; f < d; f++)
                b = c[f].apply(this, arguments);
            return b
        }
    };
    R.J.zp = function(b) {
        var c = arguments,
            d = c.length;
        return function() {
            for (var b = 0; b < d; b++)
                if (!c[b].apply(this, arguments))
                    return !1;
            return !0
        }
    };
    R.J.Us = function(b) {
        var c = arguments,
            d = c.length;
        return function() {
            for (var b = 0; b < d; b++)
                if (c[b].apply(this, arguments))
                    return !0;
            return !1
        }
    };
    R.J.Os = function(b) {
        return function() {
            return !b.apply(this, arguments)
        }
    };
    R.J.create = function(b, c) {
        function d() {}
        d.prototype = b.prototype;
        var e = new d;
        b.apply(e, Array.prototype.slice.call(arguments, 1));
        return e
    };
    R.J.Wh = !0;
    R.J.bq = function(b) {
        var c = !1,
            d;
        return function() {
            if (!R.J.Wh)
                return b();
            c || (d = b(), c = !0);
            return d
        }
    };
    R.J.once = function(b) {
        var c = b;
        return function() {
            if (c) {
                var b = c;
                c = null;
                b()
            }
        }
    };
    R.J.Dq = function(b, c, d) {
        var e = 0;
        return function(f) {
            R.global.clearTimeout(e);
            var g = arguments;
            e = R.global.setTimeout(function() {
                b.apply(d, g)
            }, c)
        }
    };
    R.J.ku = function(b, c, d) {
        function e() {
            g = R.global.setTimeout(f, c);
            b.apply(d, l)
        }

        function f() {
            g = 0;
            h && (h = !1, e())
        }
        var g = 0,
            h = !1,
            l = [];
        return function(b) {
            l = arguments;
            g ? h = !0 : e()
        }
    };
    R.J.at = function(b, c, d) {
        function e() {
            f = 0
        }
        var f = 0;
        return function(g) {
            f || (f = R.global.setTimeout(e, c), b.apply(d, arguments))
        }
    };
    R.async.Fh = function(b) {
        R.global.setTimeout(function() {
            throw b;
        }, 0)
    };
    R.async.ra = function(b, c, d) {
        var e = b;
        c && (e = R.bind(b, c));
        e = R.async.ra.Nh(e);
        R.Aa(R.global.setImmediate) && (d || R.async.ra.cm()) ? R.global.setImmediate(e) : (R.async.ra.xh || (R.async.ra.xh = R.async.ra.ck()), R.async.ra.xh(e))
    };
    R.async.ra.cm = function() {
        return R.global.Window && R.global.Window.prototype && !R.g.userAgent.A.Va() && R.global.Window.prototype.setImmediate == R.global.setImmediate ? !1 : !0
    };
    R.async.ra.ck = function() {
        var b = R.global.MessageChannel;
        "undefined" === typeof b && "undefined" !== typeof window && window.postMessage && window.addEventListener && !R.g.userAgent.T.Bk() && (b = function() {
            var b = document.createElement("IFRAME");
            b.style.display = "none";
            b.src = "";
            document.documentElement.appendChild(b);
            var c = b.contentWindow,
                b = c.document;
            b.open();
            b.write("");
            b.close();
            var d = "callImmediate" + Math.random(),
                e = "file:" == c.location.protocol ? "*" : c.location.protocol + "//" + c.location.host,
                b = R.bind(function(b) {
                    if (("*" ==
                            e || b.origin == e) && b.data == d)
                        this.port1.onmessage()
                }, this);
            c.addEventListener("message", b, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    c.postMessage(d, e)
                }
            }
        });
        if ("undefined" !== typeof b && !R.g.userAgent.A.Dc()) {
            var c = new b,
                d = {},
                e = d;
            c.port1.onmessage = function() {
                if (R.P(d.next)) {
                    d = d.next;
                    var b = d.yf;
                    d.yf = null;
                    b()
                }
            };
            return function(b) {
                e.next = {
                    yf: b
                };
                e = e.next;
                c.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange" in document.createElement(q) ? function(b) {
            var c = document.createElement(q);
            c.onreadystatechange = function() {
                c.onreadystatechange = null;
                c.parentNode.removeChild(c);
                c = null;
                b();
                b = null
            };
            document.documentElement.appendChild(c)
        } : function(b) {
            R.global.setTimeout(b, 0)
        }
    };
    R.async.ra.Nh = R.J.mk;
    R.debug.Y.register(function(b) {
        R.async.ra.Nh = b
    });
    R.async.Ga = function() {
        this.$c = this.Lb = null
    };
    R.async.Ga.ed = 100;
    R.async.Ga.Vb = new R.async.jc(function() {
        return new R.async.kd
    }, function(b) {
        b.reset()
    }, R.async.Ga.ed);
    R.async.Ga.prototype.add = function(b, c) {
        var d = R.async.Ga.Vb.get();
        d.set(b, c);
        this.$c ? this.$c.next = d : this.Lb = d;
        this.$c = d
    };
    R.async.Ga.prototype.remove = function() {
        var b = null;
        this.Lb && (b = this.Lb, this.Lb = this.Lb.next, this.Lb || (this.$c = null), b.next = null);
        return b
    };
    R.async.kd = function() {
        this.next = this.scope = this.xd = null
    };
    R.async.kd.prototype.set = function(b, c) {
        this.xd = b;
        this.scope = c;
        this.next = null
    };
    R.async.kd.prototype.reset = function() {
        this.next = this.scope = this.xd = null
    };
    R.async.N = function(b, c) {
        R.async.N.Qc || R.async.N.pk();
        R.async.N.Zc || (R.async.N.Qc(), R.async.N.Zc = !0);
        R.async.N.ye.add(b, c)
    };
    R.async.N.pk = function() {
        if (-1 != String(R.global.Promise).indexOf("[native code]")) {
            var b = R.global.Promise.resolve(void 0);
            R.async.N.Qc = function() {
                b.then(R.async.N.Nc)
            }
        } else
            R.async.N.Qc = function() {
                R.async.ra(R.async.N.Nc)
            }
    };
    R.async.N.Vq = function(b) {
        R.async.N.Qc = function() {
            R.async.ra(R.async.N.Nc);
            b && b(R.async.N.Nc)
        }
    };
    R.async.N.Zc = !1;
    R.async.N.ye = new R.async.Ga;
    R.ea && (R.async.N.nt = function() {
        R.async.N.Zc = !1;
        R.async.N.ye = new R.async.Ga
    });
    R.async.N.Nc = function() {
        for (var b; b = R.async.N.ye.remove();) {
            try {
                b.xd.call(b.scope)
            } catch (c) {
                R.async.Fh(c)
            }
            R.async.Ga.Vb.put(b)
        }
        R.async.N.Zc = !1
    };
    R.oh = {};
    R.oh.Mo = O();
    R.Thenable = O();
    R.Thenable.prototype.then = O();
    R.Thenable.Xe = "$goog_Thenable";
    R.Thenable.qf = function(b) {
        b.prototype.then = b.prototype.then;
        b.prototype[R.Thenable.Xe] = !0
    };
    R.Thenable.Pg = function(b) {
        if (!b)
            return !1;
        try {
            return !!b[R.Thenable.Xe]
        } catch (c) {
            return !1
        }
    };
    R.Promise = function(b, c) {
        this.sa = R.Promise.S.bb;
        this.Ba = void 0;
        this.yb = this.Ra = this.ba = null;
        this.td = !1;
        0 < R.Promise.fb ? this.Xc = 0 : 0 == R.Promise.fb && (this.zc = !1);
        R.Promise.Da && (this.se = [], U(this, Error("created")), this.Jf = 0);
        if (b != R.Wa)
            try {
                var d = this;
                b.call(c, function(b) {
                    V(d, R.Promise.S.Nb, b)
                }, function(b) {
                    if (R.ea && !(b instanceof R.Promise.ub))
                        try {
                            if (b instanceof Error)
                                throw b;
                            throw Error("Promise rejected.");
                        } catch (f) {}
                    V(d, R.Promise.S.za, b)
                })
            } catch (e) {
                V(this, R.Promise.S.za, e)
            }
    };
    R.Promise.Da = !1;
    R.Promise.fb = 0;
    R.Promise.S = {
        bb: 0,
        Vh: 1,
        Nb: 2,
        za: 3
    };
    R.Promise.Oe = function() {
        this.next = this.context = this.Gb = this.ec = this.gb = null;
        this.oc = !1
    };
    R.Promise.Oe.prototype.reset = function() {
        this.context = this.Gb = this.ec = this.gb = null;
        this.oc = !1
    };
    R.Promise.ed = 100;
    R.Promise.Vb = new R.async.jc(function() {
        return new R.Promise.Oe
    }, function(b) {
        b.reset()
    }, R.Promise.ed);
    R.Promise.Xf = function(b, c, d) {
        var e = R.Promise.Vb.get();
        e.ec = b;
        e.Gb = c;
        e.context = d;
        return e
    };
    R.Promise.vl = function(b) {
        R.Promise.Vb.put(b)
    };
    R.Promise.resolve = function(b) {
        if (b instanceof R.Promise)
            return b;
        var c = new R.Promise(R.Wa);
        V(c, R.Promise.S.Nb, b);
        return c
    };
    R.Promise.reject = function(b) {
        return new R.Promise(function(c, d) {
            d(b)
        })
    };
    R.Promise.Pc = function(b, c, d) {
        R.Promise.gh(b, c, d, null) || R.async.N(R.ob(c, b))
    };
    R.Promise.race = function(b) {
        return new R.Promise(function(c, d) {
            b.length || c(void 0);
            for (var e = 0, f; e < b.length; e++)
                f = b[e], R.Promise.Pc(f, c, d)
        })
    };
    R.Promise.all = function(b) {
        return new R.Promise(function(c, d) {
            var e = b.length,
                f = [];
            if (e)
                for (var g = function(b, d) {
                        e--;
                        f[b] = d;
                        0 == e && c(f)
                    }, h = function(b) {
                        d(b)
                    }, l = 0, m; l < b.length; l++)
                    m = b[l], R.Promise.Pc(m, R.ob(g, l), h);
            else
                c(f)
        })
    };
    R.Promise.yp = function(b) {
        return new R.Promise(function(c) {
            var d = b.length,
                e = [];
            if (d)
                for (var f = function(b, f, g) {
                        d--;
                        e[b] = f ? {
                            Tj: !0,
                            value: g
                        } : {
                            Tj: !1,
                            reason: g
                        };
                        0 == d && c(e)
                    }, g = 0, h; g < b.length; g++)
                    h = b[g], R.Promise.Pc(h, R.ob(f, g, !0), R.ob(f, g, !1));
            else
                c(e)
        })
    };
    R.Promise.Uq = function(b) {
        return new R.Promise(function(c, d) {
            var e = b.length,
                f = [];
            if (e)
                for (var g = function(b) {
                        c(b)
                    }, h = function(b, c) {
                        e--;
                        f[b] = c;
                        0 == e && d(f)
                    }, l = 0, m; l < b.length; l++)
                    m = b[l], R.Promise.Pc(m, g, R.ob(h, l));
            else
                c(void 0)
        })
    };
    R.Promise.Du = function() {
        var b,
            c,
            d = new R.Promise(function(d, f) {
                b = d;
                c = f
            });
        return new R.Promise.Ei(d, b, c)
    };
    R.Promise.prototype.then = function(b, c, d) {
        R.Promise.Da && U(this, Error("then"));
        return ba(this, R.Aa(b) ? b : null, R.Aa(c) ? c : null, d)
    };
    R.Thenable.qf(R.Promise);
    R.Promise.prototype.cancel = function(b) {
        this.sa == R.Promise.S.bb && R.async.N(function() {
            var c = new R.Promise.ub(b);
            W(this, c)
        }, this)
    };

    function W(b, c) {
        if (b.sa == R.Promise.S.bb)
            if (b.ba) {
                var d = b.ba;
                if (d.Ra) {
                    for (var e = 0, f = null, g = null, h = d.Ra; h && (h.oc || (e++, h.gb == b && (f = h), !(f && 1 < e))); h = h.next)
                        f || (g = h);
                    f && (d.sa == R.Promise.S.bb && 1 == e ? W(d, c) : (g ? (e = g, e.next == d.yb && (d.yb = e), e.next = e.next.next) : ca(d), da(d, f, R.Promise.S.za, c)))
                }
                b.ba = null
            } else
                V(b, R.Promise.S.za, c)
    }

    function ea(b, c) {
        b.Ra || b.sa != R.Promise.S.Nb && b.sa != R.Promise.S.za || fa(b);
        b.yb ? b.yb.next = c : b.Ra = c;
        b.yb = c
    }

    function ba(b, c, d, e) {
        var f = R.Promise.Xf(null, null, null);
        f.gb = new R.Promise(function(b, h) {
            f.ec = c ? function(d) {
                try {
                    var f = c.call(e, d);
                    b(f)
                } catch (p) {
                    h(p)
                }
            } : b;
            f.Gb = d ? function(c) {
                try {
                    var f = d.call(e, c);
                    !R.P(f) && c instanceof R.Promise.ub ? h(c) : b(f)
                } catch (p) {
                    h(p)
                }
            } : h
        });
        f.gb.ba = b;
        ea(b, f);
        return f.gb
    }
    R.Promise.prototype.Wl = function(b) {
        this.sa = R.Promise.S.bb;
        V(this, R.Promise.S.Nb, b)
    };
    R.Promise.prototype.Xl = function(b) {
        this.sa = R.Promise.S.bb;
        V(this, R.Promise.S.za, b)
    };

    function V(b, c, d) {
        b.sa == R.Promise.S.bb && (b === d && (c = R.Promise.S.za, d = new TypeError("Promise cannot resolve to itself")), b.sa = R.Promise.S.Vh, R.Promise.gh(d, b.Wl, b.Xl, b) || (b.Ba = d, b.sa = c, b.ba = null, fa(b), c != R.Promise.S.za || d instanceof R.Promise.ub || R.Promise.$i(b, d)))
    }
    R.Promise.gh = function(b, c, d, e) {
        if (b instanceof R.Promise)
            return R.Promise.Da && U(b, Error("then")), ea(b, R.Promise.Xf(c || R.Wa, d || null, e)), !0;
        if (R.Thenable.Pg(b))
            return b.then(c, d, e), !0;
        if (R.la(b))
            try {
                var f = b.then;
                if (R.Aa(f))
                    return R.Promise.Ul(b, f, c, d, e), !0
            } catch (g) {
                return d.call(e, g), !0
            }
        return !1
    };
    R.Promise.Ul = function(b, c, d, e, f) {
        function g(b) {
            l || (l = !0, e.call(f, b))
        }

        function h(b) {
            l || (l = !0, d.call(f, b))
        }
        var l = !1;
        try {
            c.call(b, h, g)
        } catch (m) {
            g(m)
        }
    };

    function fa(b) {
        b.td || (b.td = !0, R.async.N(b.Nj, b))
    }

    function ca(b) {
        var c = null;
        b.Ra && (c = b.Ra, b.Ra = c.next, c.next = null);
        b.Ra || (b.yb = null);
        return c
    }
    R.Promise.prototype.Nj = function() {
        for (var b; b = ca(this);)
            R.Promise.Da && this.Jf++, da(this, b, this.sa, this.Ba);
        this.td = !1
    };

    function da(b, c, d, e) {
        if (d == R.Promise.S.za && c.Gb && !c.oc)
            if (0 < R.Promise.fb)
                for (; b && b.Xc; b = b.ba)
                    R.global.clearTimeout(b.Xc), b.Xc = 0;
            else if (0 == R.Promise.fb)
            for (; b && b.zc; b = b.ba)
                b.zc = !1;
        if (c.gb)
            c.gb.ba = null, R.Promise.Jg(c, d, e);
        else
            try {
                c.oc ? c.ec.call(c.context) : R.Promise.Jg(c, d, e)
            } catch (f) {
                R.Promise.Ac.call(null, f)
            }
        R.Promise.vl(c)
    }
    R.Promise.Jg = function(b, c, d) {
        c == R.Promise.S.Nb ? b.ec.call(b.context, d) : b.Gb && b.Gb.call(b.context, d)
    };

    function U(b, c) {
        if (R.Promise.Da && R.K(c.stack)) {
            var d = c.stack.split("\n", 4)[3];
            c = c.message;
            c += Array(11 - c.length).join(" ");
            b.se.push(c + d)
        }
    }

    function ga(b, c) {
        if (R.Promise.Da && c && R.K(c.stack) && b.se.length) {
            for (var d = ["Promise trace:"], e = b; e; e = e.ba) {
                for (var f = b.Jf; 0 <= f; f--)
                    d.push(e.se[f]);
                d.push("Value: [" + (e.sa == R.Promise.S.za ? "REJECTED" : "FULFILLED") + "] <" + String(e.Ba) + ">")
            }
            c.stack += "\n\n" + d.join("\n")
        }
    }
    R.Promise.$i = function(b, c) {
        0 < R.Promise.fb ? b.Xc = R.global.setTimeout(function() {
            ga(b, c);
            R.Promise.Ac.call(null, c)
        }, R.Promise.fb) : 0 == R.Promise.fb && (b.zc = !0, R.async.N(function() {
            b.zc && (ga(b, c), R.Promise.Ac.call(null, c))
        }))
    };
    R.Promise.Ac = R.async.Fh;
    R.Promise.Vt = function(b) {
        R.Promise.Ac = b
    };
    R.Promise.ub = function(b) {
        R.debug.Error.call(this, b)
    };
    R.kb(R.Promise.ub, R.debug.Error);
    R.Promise.ub.prototype.name = "cancel";
    R.Promise.Ei = function(b, c, d) {
        this.oh = b;
        this.resolve = c;
        this.reject = d
    };
    /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/




    R.async.B = function(b, c) {
        this.Rc = [];
        this.nh = b;
        this.Kf = c || null;
        this.Eb = this.Bb = !1;
        this.Ba = void 0;
        this.pe = this.hj = this.ld = !1;
        this.Wc = 0;
        this.ba = null;
        this.pc = 0;
        R.async.B.Da && (this.od = null, Error.captureStackTrace && (b = {
            stack: ""
        }, Error.captureStackTrace(b, R.async.B), typeof b.stack == H && (this.od = b.stack.replace(/^[^\n]*\n/, ""))))
    };
    R.async.B.Oi = !1;
    R.async.B.Da = !1;
    Q = R.async.B.prototype;
    Q.cancel = function(b) {
        if (this.Bb)
            this.Ba instanceof R.async.B && this.Ba.cancel();
        else {
            if (this.ba) {
                var c = this.ba;
                delete this.ba;
                b ? c.cancel(b) : (c.pc--, 0 >= c.pc && c.cancel())
            }
            this.nh ? this.nh.call(this.Kf, this) : this.pe = !0;
            this.Bb || this.ib(new R.async.B.tb(this))
        }
    };
    Q.Ef = function(b, c) {
        this.ld = !1;
        X(this, b, c)
    };

    function X(b, c, d) {
        b.Bb = !0;
        b.Ba = d;
        b.Eb = !c;
        ha(b)
    }

    function ia(b) {
        if (b.Bb) {
            if (!b.pe)
                throw new R.async.B.gc(b);
            b.pe = !1
        }
    }
    Q.Pb = function(b) {
        ia(this);
        X(this, !0, b)
    };
    Q.ib = function(b) {
        ia(this);
        ja(this, b);
        X(this, !1, b)
    };

    function ja(b, c) {
        R.async.B.Da && b.od && R.la(c) && c.stack && /^[^\n]+(\n   [^\n]+)+/.test(c.stack) && (c.stack = c.stack + "\nDEFERRED OPERATION:\n" + b.od)
    }

    function Y(b, c, d) {
        return Z(b, c, null, d)
    }

    function ka(b, c) {
        Z(b, null, c, void 0)
    }

    function Z(b, c, d, e) {
        b.Rc.push([c, d, e]);
        b.Bb && ha(b);
        return b
    }
    Q.then = function(b, c, d) {
        var e,
            f,
            g = new R.Promise(function(b, c) {
                e = b;
                f = c
            });
        Z(this, e, function(b) {
            b instanceof R.async.B.tb ? g.cancel() : f(b)
        });
        return g.then(b, c, d)
    };
    R.Thenable.qf(R.async.B);
    R.async.B.prototype.jj = function() {
        var b = new R.async.B;
        Z(this, b.Pb, b.ib, b);
        b.ba = this;
        this.pc++;
        return b
    };

    function la(b) {
        return R.j.some(b.Rc, function(b) {
            return R.Aa(b[1])
        })
    }

    function ha(b) {
        b.Wc && b.Bb && la(b) && (R.async.B.bm(b.Wc), b.Wc = 0);
        b.ba && (b.ba.pc--, delete b.ba);
        for (var c = b.Ba, d = !1, e = !1; b.Rc.length && !b.ld;) {
            var f = b.Rc.shift(),
                g = f[0],
                h = f[1],
                f = f[2];
            if (g = b.Eb ? h : g)
                try {
                    var l = g.call(f || b.Kf, c);
                    R.P(l) && (b.Eb = b.Eb && (l == c || l instanceof Error), b.Ba = c = l);
                    if (R.Thenable.Pg(c) || typeof R.global.Promise === z && c instanceof R.global.Promise)
                        e = !0, b.ld = !0
                } catch (m) {
                    c = m, b.Eb = !0, ja(b, c), la(b) || (d = !0)
                }
        }
        b.Ba = c;
        e ? (e = R.bind(b.Ef, b, !0), l = R.bind(b.Ef, b, !1), c instanceof R.async.B ? (Z(c, e, l), c.hj = !0) : c.then(e, l)) : R.async.B.Oi && c instanceof Error && !(c instanceof R.async.B.tb) && (d = b.Eb = !0);
        d && (b.Wc = R.async.B.Gl(c))
    }
    R.async.B.Bh = function(b) {
        var c = new R.async.B;
        c.Pb(b);
        return c
    };
    R.async.B.$q = function(b) {
        var c = new R.async.B;
        c.Pb();
        Y(c, function() {
            return b
        });
        return c
    };
    R.async.B.ia = function(b) {
        var c = new R.async.B;
        c.ib(b);
        return c
    };
    R.async.B.eq = function() {
        var b = new R.async.B;
        b.cancel();
        return b
    };
    R.async.B.Cu = function(b, c, d) {
        return b instanceof R.async.B ? Y(b.jj(), c, d) : Y(R.async.B.Bh(b), c, d)
    };
    R.async.B.gc = function(b) {
        R.debug.Error.call(this);
        this.Ab = b
    };
    R.kb(R.async.B.gc, R.debug.Error);
    R.async.B.gc.prototype.message = "Deferred has already fired";
    R.async.B.gc.prototype.name = "AlreadyCalledError";
    R.async.B.tb = function(b) {
        R.debug.Error.call(this);
        this.Ab = b
    };
    R.kb(R.async.B.tb, R.debug.Error);
    R.async.B.tb.prototype.message = "Deferred was canceled";
    R.async.B.tb.prototype.name = "CanceledError";
    R.async.B.Ue = function(b) {
        this.Xb = R.global.setTimeout(R.bind(this.Eh, this), 0);
        this.Mj = b
    };
    R.async.B.Ue.prototype.Eh = function() {
        delete R.async.B.Ub[this.Xb];
        throw this.Mj;
    };
    R.async.B.Ub = {};
    R.async.B.Gl = function(b) {
        b = new R.async.B.Ue(b);
        R.async.B.Ub[b.Xb] = b;
        return b.Xb
    };
    R.async.B.bm = function(b) {
        var c = R.async.B.Ub[b];
        c && (R.global.clearTimeout(c.Xb), delete R.async.B.Ub[b])
    };
    R.async.B.Rp = function() {
        var b = R.async.B.Ub,
            c;
        for (c in b) {
            var d = b[c];
            R.global.clearTimeout(d.Xb);
            d.Eh()
        }
    };
    R.D = {};
    R.D.F = {};
    R.D.F.hd = "closure_verification";
    R.D.F.gi = 5E3;
    R.D.F.le = [];
    R.D.F.Fc = function(b, c) {
        b = R.j.map(b, R.b.ha.xe);
        return R.D.F.sh(b, c)
    };
    R.D.F.sh = function(b, c) {
        function d() {
            var e = b.shift(),
                e = R.D.F.fc(e, c);
            b.length && Z(e, d, d, void 0);
            return e
        }
        if (!b.length)
            return R.async.B.Bh(null);
        var e = R.D.F.le.length;
        R.j.extend(R.D.F.le, b);
        if (e)
            return R.D.F.uh;
        b = R.D.F.le;
        R.D.F.uh = d();
        return R.D.F.uh
    };
    R.D.F.load = function(b, c) {
        b = R.b.ha.xe(b);
        return R.D.F.fc(b, c)
    };
    R.D.F.fc = function(b, c) {
        var d = c || {};
        c = d.document || document;
        var e = R.b.G.v(b),
            f = R.a.createElement(q);
        b = {
            vh: f,
            Gh: void 0
        };
        var g = new R.async.B(R.D.F.mj, b),
            h = null,
            l = R.mb(d.timeout) ? d.timeout : R.D.F.gi;
        0 < l && (h = window.setTimeout(function() {
            R.D.F.qc(f, !0);
            g.ib(new R.D.F.Error(R.D.F.ic.TIMEOUT, "Timeout reached for loading script " + e))
        }, l), b.Gh = h);
        f.onload = f.onreadystatechange = function() {
            f.readyState && "loaded" != f.readyState && f.readyState != w || (R.D.F.qc(f, d.kq || !1, h), g.Pb(null))
        };
        f.onerror = function() {
            R.D.F.qc(f, !0, h);
            g.ib(new R.D.F.Error(R.D.F.ic.ti, "Error while loading script " + e))
        };
        b = d.attributes || {};
        R.object.extend(b, {
            type: I,
            charset: "UTF-8",
            src: e
        });
        R.a.Sc(f, b);
        R.D.F.bk(c).appendChild(f);
        return g
    };
    R.D.F.ys = function(b, c, d) {
        b = R.b.ha.xe(b);
        return R.D.F.El(b, c, d)
    };
    R.D.F.El = function(b, c, d) {
        R.global[R.D.F.hd] || (R.global[R.D.F.hd] = {});
        var e = R.global[R.D.F.hd],
            f = R.b.G.v(b);
        if (R.P(e[c]))
            return R.async.B.ia(new R.D.F.Error(R.D.F.ic.Yi, "Verification object " + c + " already defined."));
        b = R.D.F.fc(b, d);
        var g = new R.async.B(R.bind(b.cancel, b));
        Y(b, function() {
            var b = e[c];
            R.P(b) ? (g.Pb(b), delete e[c]) : g.ib(new R.D.F.Error(R.D.F.ic.Xi, "Script " + f + " loaded, but verification object " + c + " was not defined."))
        });
        ka(b, function(b) {
            R.P(e[c]) && delete e[c];
            g.ib(b)
        });
        return g
    };
    R.D.F.bk = function(b) {
        var c = R.a.getElementsByTagName("HEAD", b);
        return !c || R.j.Cc(c) ? b.documentElement : c[0]
    };
    R.D.F.mj = function() {
        if (this && this.vh) {
            var b = this.vh;
            b && b.tagName == q && R.D.F.qc(b, !0, this.Gh)
        }
    };
    R.D.F.qc = function(b, c, d) {
        R.mb(d) && R.global.clearTimeout(d);
        b.onload = R.Wa;
        b.onerror = R.Wa;
        b.onreadystatechange = R.Wa;
        c && window.setTimeout(function() {
            R.a.removeNode(b)
        }, 0)
    };
    R.D.F.ic = {
        ti: 0,
        TIMEOUT: 1,
        Xi: 2,
        Yi: 3
    };
    R.D.F.Error = function(b, c) {
        var d = "Jsloader error (code #" + b + ")";
        c && (d += ": " + c);
        R.debug.Error.call(this, d);
        this.code = b
    };
    R.kb(R.D.F.Error, R.debug.Error);
    google.l.m.ab = {};
    google.l.m.ab.Jd = function(b) {
        return R.b.G.format(b.format, b.tf)
    };
    google.l.m.ab.load = function(b, c, d) {
        b = R.b.G.format(b, c);
        b = R.D.F.fc(b, {
            attributes: {
                async: !1,
                defer: !1
            }
        });
        d && Y(b, d)
    };
    google.l.m.ab.Fc = function(b, c) {
        b = R.j.map(b, function(b) {
            return b ? google.l.m.ab.Jd(b) : null
        });
        var d = null;
        !R.userAgent.W || R.userAgent.ya(11) ? R.j.forEach(b, function(b) {
            b && (d = R.D.F.fc(b, {
                attributes: {
                    async: !1,
                    defer: !1
                }
            }))
        }) : d = R.D.F.sh(b, {
            attributes: {
                async: !1,
                defer: !1
            }
        });
        c && (d ? Y(d, c) : c())
    };
    google.l.m.Zd = {};
    google.l.m.bc = "unknown";
    google.l.m.log = O();
    google.l.m.error = O();
    google.l.m.Pd = !1;
    google.l.m.Xd = !1;
    google.l.m.qb = google.l.m.Na.ql.gstatic;
    google.l.m.Tt = function(b) {
        google.l.m.qb = b
    };
    google.l.m.Cf = function(b) {
        function c(b) {
            for (var e = [], g = 0; g < b.length; g++) {
                var h = b[g];
                if (!d[h]) {
                    d[h] = !0;
                    var l = google.l.m.Na.Fj[h] || [],
                        e = e.concat(c(R.K(l) ? [l] : l));
                    R.K(l) || e.push(h)
                }
            }
            return e
        }
        var d = {};
        return c(b)
    };
    google.l.m.rl = function() {
        google.l.m.Zd = {}
    };
    google.l.m.Dk = function(b) {
        return google.l.m.Zd[b]
    };
    google.l.m.Il = function(b) {
        google.l.m.Zd[b] = !0
    };
    google.l.m.Of = function(b, c) {
        var d = [],
            e = b;
        c && (e = R.j.map(e, c));
        for (c = 0; c < e.length; c++) {
            var f = e[c];
            google.l.m.Dk(f) || (d.push(b[c]), google.l.m.Il(f))
        }
        return d
    };
    google.l.m.Pk = function(b, c) {
        b = google.l.m.Of(google.l.m.Cf(b));
        google.l.m.log("Load packages + dependencies - previous: " + b);
        b = R.j.map(b, function(b) {
            return google.l.m.fl(b)
        });
        google.l.m.ab.Fc(b, c)
    };
    google.l.m.Ve = /%{(\w+)}/g;
    google.l.m.fl = function(b) {
        var c = {
            version: google.l.m.bc,
            language: google.l.m.Gc,
            "package": b
        };
        google.l.m.Na.Dh[b] ? (b = google.l.m.Na.Dh[b], R.object.extend(c, b), b = google.l.m.qb[b.subdir ? "third_party" : "third_party2"]) : google.l.m.Na.Ch[b] ? (R.object.extend(c, google.l.m.Na.Ch[b]), b = google.l.m.qb.third_party_gen) : b = google.l.m.qb[(google.l.m.Pd ? "debug" : google.l.m.Xd ? "pseudo" : "compiled") + (google.l.m.Gc ? "_i18n" : "")];
        return b ? {
            format: b,
            tf: c
        } : null
    };
    google.l.m.Mk = function(b, c) {
        b = google.l.m.Cf(b);
        var d = [];
        R.j.forEach(b, function(b) {
            R.j.forEach(google.l.m.Na.Aj[b] || [], function(b) {
                d.push(b)
            })
        });
        0 === d.length ? c && c() : (d = google.l.m.Of(d, function(b) {
            return (b.subdir || b.subdir1 + "/" + b.subdir2) + "/" + b.filename
        }), b = R.j.map(d, function(b) {
            return google.l.m.bh(b)
        }), google.l.m.Pa.Fc(b, c))
    };
    google.l.m.bh = function(b) {
        var c = google.l.m.qb.css,
            d = {
                version: google.l.m.bc,
                subdir: b.subdir,
                filename: b.filename
            };
        b.subdir2 && (c = google.l.m.qb.css2, d.subdir1 = b.subdir1, d.subdir2 = b.subdir2);
        return {
            format: c,
            tf: d
        }
    };
    google.l.m.Xk = function(b) {
        return R.b.G.v(google.l.m.ab.Jd(google.l.m.bh(b)))
    };
    google.l.m.lh = function(b) {
        for (var c = b.replace(/-/g, "_").toLowerCase(); R.K(c);)
            b = c, c = google.l.m.Ai[c], c === b && (c = !1);
        c || (b.match(/_[^_]+$/) ? (b = b.replace(/_[^_]+$/, ""), b = google.l.m.lh(b)) : b = "en");
        return b
    };
    google.l.m.il = function(b, c) {
        var d = c.debug || !1,
            e = c.pseudo || !1,
            f = c.language || "",
            f = google.l.m.lh(f);
        b || (b = c.version || "unknown");
        (google.l.m.bc && google.l.m.bc !== b || google.l.m.Gc && google.l.m.Gc !== f || google.l.m.Pd !== d || google.l.m.Xd !== e) && google.l.m.rl();
        "en" === f && (f = "");
        google.l.m.bc = b;
        google.l.m.Gc = f;
        google.l.m.Pd = d;
        google.l.m.Xd = e;
        R.Ja("google.visualization.ModulePath", google.l.m.qb.format);
        R.Ja("google.visualization.Version", b);
        R.Ja("google.visualization.Locale", f);
        R.Ja("google.visualization.isDebug",
            d);
        R.Ja("google.visualization.isPseudo", e);
        R.Ja("google.visualization.mapsApiKey", c.mapsApiKey)
    };
    google.l.m.cc = !1;
    google.l.m.load = function(b, c) {
        if (google.l.m.cc)
            google.l.m.me(function() {
                google.l.m.load(b, c)
            });
        else {
            google.l.m.cc = !0;
            var d = function() {
                google.l.m.cc = !1;
                google.l.m.log("afterLoading " + c.packages + " for " + document.location.href);
                google.l.m.ce()
            };
            google.l.m.log("google.charts.load version " + b);
            google.l.m.il(b, c);
            var e = c.packages;
            e && 0 !== e.length || (e = google.l.m.Na.Ej);
            google.l.m.me(c.callback);
            google.l.m.log("Now begin loading css and js for " + document.location.href);
            google.l.m.Mk(e, function() {
                google.l.m.Pk(e,
                    d)
            })
        }
    };
    google.l.m.Jl = function(b) {
        if ("undefined" == typeof window)
            google.l.m.log("window not defined");
        else if (window.addEventListener)
            window.addEventListener("load", b, !1);
        else if (window.attachEvent)
            window.attachEvent("onload", b);
        else {
            var c = window.onload;
            window.onload = function(d) {
                c && c(d);
                b()
            }
        }
    };
    google.l.m.Yc = !1;
    google.l.m.Jl(function() {
        google.l.m.Yc = !0;
        google.l.m.log("window loaded");
        google.l.m.ce()
    });
    google.l.m.ce = function() {
        google.l.m.Yc = google.l.m.Yc || document && document.readyState === w;
        !google.l.m.cc && google.l.m.Yc && google.l.m.kj()
    };
    google.l.m.vd = [];
    google.l.m.me = function(b) {
        b && google.l.m.vd.push(b);
        google.l.m.cc || (google.l.m.log("onload and not loading"), google.l.m.ce())
    };
    google.l.m.kj = function() {
        var b = google.l.m.vd;
        google.l.m.vd = [];
        for (google.l.m.log("Now call all callbacks for " + document.location.href); 0 < b.length;)
            b.shift()()
    };
    google.l.m.kl = function() {
        var b = 0;
        "visualization" === arguments[b] && b++;
        var c = "current";
        R.K(arguments[b]) && (c = arguments[b], b++);
        var d = {};
        arguments.length > b && (d = arguments[b]);
        google.l.m.load(c, d)
    };
    google.l.m.ll = google.l.m.me;
    R.Ja("google.charts.loader.publicLoad", google.l.m.kl);
    R.Ja("google.charts.loader.publicSetOnLoadCallback", google.l.m.ll);
    R.Ja("google.charts.loader.makeCssUrl", google.l.m.Xk);
}).call(this);