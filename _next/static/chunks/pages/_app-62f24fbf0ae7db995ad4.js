_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [200], {
        "+tY/": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            })), n.d(t, "b", (function() {
                return i
            }));
            var r = n("q1tI"),
                o = Object(r.createContext)(null);
            o.displayName = "PopoverContext";
            var i = o.Provider
        },
        0: function(e, t, n) {
            n("74v/"), e.exports = n("nOHt")
        },
        "4nv/": function(e, t, n) {
            "use strict";

            function r(e, t, n, r) {
                n && Object.defineProperty(e, t, {
                    enumerable: n.enumerable,
                    configurable: n.configurable,
                    writable: n.writable,
                    value: n.initializer ? n.initializer.call(r) : void 0
                })
            }
            n.d(t, "a", (function() {
                return r
            }))
        },
        "5DmW": function(e, t, n) {
            var r = n("I+eb"),
                o = n("0Dky"),
                i = n("/GqU"),
                a = n("Bs8V").f,
                c = n("g6v/"),
                u = o((function() {
                    a(1)
                }));
            r({
                target: "Object",
                stat: !0,
                forced: !c || u,
                sham: !c
            }, {
                getOwnPropertyDescriptor: function(e, t) {
                    return a(i(e), t)
                }
            })
        },
        "74v/": function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return n("cha2")
            }])
        },
        "7nDK": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            })), n.d(t, "b", (function() {
                return i
            }));
            var r = n("q1tI"),
                o = Object(r.createContext)(null);
            o.displayName = "PopoverManagerContext";
            var i = o.Provider
        },
        "8Bbg": function(e, t, n) {
            e.exports = n("B5Ud")
        },
        ACih: function(e, t, n) {
            "use strict"
        },
        B5Ud: function(e, t, n) {
            "use strict";
            var r = n("vJKn"),
                o = n("/GRZ"),
                i = n("i2R6"),
                a = n("48fX"),
                c = n("tCBg"),
                u = n("T0f4"),
                s = n("qVT1");

            function f(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = u(e);
                    if (t) {
                        var o = u(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }
            var l = n("AroE");
            t.__esModule = !0, t.Container = function(e) {
                0;
                return e.children
            }, t.createUrl = b, t.default = void 0;
            var d = l(n("q1tI")),
                p = n("g/15");

            function h(e) {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = s(r.mark((function e(t) {
                    var n, o, i;
                    return r.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.Component, o = t.ctx, e.next = 3, (0, p.loadGetInitialProps)(n, o);
                            case 3:
                                return i = e.sent, e.abrupt("return", {
                                    pageProps: i
                                });
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            t.AppInitialProps = p.AppInitialProps, t.NextWebVitalsMetric = p.NextWebVitalsMetric;
            var m = function(e) {
                a(n, e);
                var t = f(n);

                function n() {
                    return o(this, n), t.apply(this, arguments)
                }
                return i(n, [{
                    key: "componentDidCatch",
                    value: function(e, t) {
                        throw e
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.router,
                            n = e.Component,
                            r = e.pageProps,
                            o = e.__N_SSG,
                            i = e.__N_SSP;
                        return d.default.createElement(n, Object.assign({}, r, o || i ? {} : {
                            url: b(t)
                        }))
                    }
                }]), n
            }(d.default.Component);

            function b(e) {
                var t = e.pathname,
                    n = e.asPath,
                    r = e.query;
                return {
                    get query() {
                        return r
                    },
                    get pathname() {
                        return t
                    },
                    get asPath() {
                        return n
                    },
                    back: function() {
                        e.back()
                    },
                    push: function(t, n) {
                        return e.push(t, n)
                    },
                    pushTo: function(t, n) {
                        var r = n ? t : "",
                            o = n || t;
                        return e.push(r, o)
                    },
                    replace: function(t, n) {
                        return e.replace(t, n)
                    },
                    replaceTo: function(t, n) {
                        var r = n ? t : "",
                            o = n || t;
                        return e.replace(r, o)
                    }
                }
            }
            t.default = m, m.origGetInitialProps = h, m.getInitialProps = h
        },
        BO21: function(e, t, n) {},
        EaFg: function(e, t, n) {
            "use strict";

            function r(e, t, n, r, o) {
                var i = {};
                return Object.keys(r).forEach((function(e) {
                    i[e] = r[e]
                })), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = n.slice().reverse().reduce((function(n, r) {
                    return r(e, t, n) || n
                }), i), o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
            }
            n.d(t, "a", (function() {
                return r
            }))
        },
        GKVU: function(e, t, n) {
            "use strict";
            var r = n("I+eb"),
                o = n("hXpO");
            r({
                target: "String",
                proto: !0,
                forced: n("rwPt")("anchor")
            }, {
                anchor: function(e) {
                    return o(this, "a", "name", e)
                }
            })
        },
        "H+61": function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            n.d(t, "a", (function() {
                return r
            }))
        },
        JrLk: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var r = n("ufqH"),
                o = n("vOnD"),
                i = n("AFXh"),
                a = Object(o.d)(i.a).withConfig({
                    componentId: "sc-1bheiy9-0"
                })(["border-color:", ";color:", ";&:hover{background:", ";}&:focus{border-color:", ";}&:active{background:", ";border-color:", ";}&:disabled{background:transparent;border-color:", ";color:", ";}"], (function(e) {
                    var t = e.theme;
                    return Object(r.j)(.5, t.interactive.normal)
                }), (function(e) {
                    return e.theme.header.primary
                }), (function(e) {
                    return e.theme.backgroundModifier.active
                }), (function(e) {
                    return e.theme.accent.primary
                }), (function(e) {
                    return e.theme.background.tertiary
                }), (function(e) {
                    return e.theme.background.tertiary
                }), (function(e) {
                    return e.theme.interactive.muted
                }), (function(e) {
                    return e.theme.text.muted
                }))
        },
        Mka9: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n("2vnA"),
                o = n("q1tI"),
                i = function(e) {
                    Object(o.useEffect)((function() {
                        return Object(r.autorun)(e)
                    }))
                }
        },
        UlJF: function(e, t, n) {
            "use strict";

            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function o(e, t, n) {
                return t && r(e.prototype, t), n && r(e, n), e
            }
            n.d(t, "a", (function() {
                return o
            }))
        },
        ZUW4: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var r = n("q1tI"),
                o = r.useLayoutEffect
        },
        cha2: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() {
                return Hr
            }));
            var r = n("nKUr"),
                o = n("cpVT"),
                i = n("H+61"),
                a = n("UlJF");

            function c(e, t) {
                return (c = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function u(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && c(e, t)
            }

            function s(e) {
                return (s = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function f(e, t) {
                return !t || "object" !== s(t) && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function l(e) {
                return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            n("pome"), n("BO21");
            var d, p, h, v = n("2vnA"),
                m = n("aoTL"),
                b = n("8Bbg"),
                g = n.n(b),
                y = n("q1tI"),
                O = n.n(y),
                w = n("vOnD"),
                j = (n("yXV3"), n("pDQq"), n("5DmW"), n("4nv/")),
                x = n("EaFg"),
                k = (n("ACih"), n("CqYv")),
                E = (d = function() {
                    function e(t, n) {
                        Object(i.a)(this, e), this.id = Object(k.a)(), this.manager = void 0, this.render = void 0, this.manager = t, this.render = n.render
                    }
                    return Object(a.a)(e, [{
                        key: "dismiss",
                        value: function() {
                            this.manager.dismiss(this)
                        }
                    }]), e
                }(), Object(x.a)(d.prototype, "dismiss", [v.action], Object.getOwnPropertyDescriptor(d.prototype, "dismiss"), d.prototype), d),
                P = (p = function() {
                    function e() {
                        Object(i.a)(this, e), Object(j.a)(this, "modals", h, this)
                    }
                    return Object(a.a)(e, [{
                        key: "spawn",
                        value: function(e) {
                            this.modals.push(new E(this, e))
                        }
                    }, {
                        key: "dismiss",
                        value: function(e) {
                            var t = this.modals.indexOf(e);
                            t >= 0 && this.modals.splice(t, 1)
                        }
                    }]), e
                }(), h = Object(x.a)(p.prototype, "modals", [v.observable], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return []
                    }
                }), Object(x.a)(p.prototype, "spawn", [v.action], Object.getOwnPropertyDescriptor(p.prototype, "spawn"), p.prototype), Object(x.a)(p.prototype, "dismiss", [v.action], Object.getOwnPropertyDescriptor(p.prototype, "dismiss"), p.prototype), p),
                S = n("+VeW"),
                D = (n("+2oP"), n("EGzX")),
                C = n("8jkX"),
                I = n("ufqH"),
                M = n("mrSG"),
                L = "right-scroll-bar-position",
                A = "width-before-scroll-bar";

            function N(e) {
                return e
            }

            function T(e, t) {
                void 0 === t && (t = N);
                var n = [],
                    r = !1;
                return {
                    read: function() {
                        if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                        return n.length ? n[n.length - 1] : e
                    },
                    useMedium: function(e) {
                        var o = t(e, r);
                        return n.push(o),
                            function() {
                                n = n.filter((function(e) {
                                    return e !== o
                                }))
                            }
                    },
                    assignSyncMedium: function(e) {
                        for (r = !0; n.length;) {
                            var t = n;
                            n = [], t.forEach(e)
                        }
                        n = {
                            push: function(t) {
                                return e(t)
                            },
                            filter: function() {
                                return n
                            }
                        }
                    },
                    assignMedium: function(e) {
                        r = !0;
                        var t = [];
                        if (n.length) {
                            var o = n;
                            n = [], o.forEach(e), t = n
                        }
                        var i = function() {
                                var n = t;
                                t = [], n.forEach(e)
                            },
                            a = function() {
                                return Promise.resolve().then(i)
                            };
                        a(), n = {
                            push: function(e) {
                                t.push(e), a()
                            },
                            filter: function(e) {
                                return t = t.filter(e), n
                            }
                        }
                    }
                }
            }

            function R(e, t) {
                return void 0 === t && (t = N), T(e, t)
            }

            function B(e) {
                void 0 === e && (e = {});
                var t = T(null);
                return t.options = M.a({
                    async: !0,
                    ssr: !1
                }, e), t
            }
            var W = B();

            function F(e, t) {
                return function(e, t) {
                    var n = Object(y.useState)((function() {
                        return {
                            value: e,
                            callback: t,
                            facade: {
                                get current() {
                                    return n.value
                                },
                                set current(e) {
                                    var t = n.value;
                                    t !== e && (n.value = e, n.callback(e, t))
                                }
                            }
                        }
                    }))[0];
                    return n.callback = t, n.facade
                }(t, (function(t) {
                    return e.forEach((function(e) {
                        return function(e, t) {
                            return "function" === typeof e ? e(t) : e && (e.current = t), e
                        }(e, t)
                    }))
                }))
            }
            var _ = function() {},
                z = y.forwardRef((function(e, t) {
                    var n = y.useRef(null),
                        r = y.useState({
                            onScrollCapture: _,
                            onWheelCapture: _,
                            onTouchMoveCapture: _
                        }),
                        o = r[0],
                        i = r[1],
                        a = e.forwardProps,
                        c = e.children,
                        u = e.className,
                        s = e.removeScrollBar,
                        f = e.enabled,
                        l = e.shards,
                        d = e.sideCar,
                        p = e.noIsolation,
                        h = e.inert,
                        v = e.allowPinchZoom,
                        m = e.as,
                        b = void 0 === m ? "div" : m,
                        g = M.b(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]),
                        O = d,
                        w = F([n, t]),
                        j = M.a({}, g, o);
                    return y.createElement(y.Fragment, null, f && y.createElement(O, {
                        sideCar: W,
                        removeScrollBar: s,
                        shards: l,
                        noIsolation: p,
                        inert: h,
                        setCallbacks: i,
                        allowPinchZoom: !!v,
                        lockRef: n
                    }), a ? y.cloneElement(y.Children.only(c), M.a({}, j, {
                        ref: w
                    })) : y.createElement(b, M.a({}, j, {
                        className: u,
                        ref: w
                    }), c))
                }));

            function q() {
                return (q = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            z.defaultProps = {
                enabled: !0,
                removeScrollBar: !0,
                inert: !1
            }, z.classNames = {
                fullWidth: A,
                zeroRight: L
            };
            n("17x9");
            var U = "data-focus-lock",
                H = "data-focus-lock-disabled",
                G = {
                    width: "1px",
                    height: "0px",
                    padding: 0,
                    overflow: "hidden",
                    position: "fixed",
                    top: "1px",
                    left: "1px"
                },
                V = function(e) {
                    var t = e.children;
                    return y.createElement(y.Fragment, null, y.createElement("div", {
                        key: "guard-first",
                        "data-focus-guard": !0,
                        "data-focus-auto-guard": !0,
                        style: G
                    }), t, t && y.createElement("div", {
                        key: "guard-last",
                        "data-focus-guard": !0,
                        "data-focus-auto-guard": !0,
                        style: G
                    }))
                };
            V.propTypes = {}, V.defaultProps = {
                children: null
            };
            var X = R({}, (function(e) {
                    return {
                        target: e.target,
                        currentTarget: e.currentTarget
                    }
                })),
                Y = R(),
                Z = R(),
                K = B({
                    async: !0
                }),
                J = [],
                Q = y.forwardRef((function(e, t) {
                    var n, r = y.useState(),
                        o = r[0],
                        i = r[1],
                        a = y.useRef(),
                        c = y.useRef(!1),
                        u = y.useRef(null),
                        s = e.children,
                        f = e.disabled,
                        l = e.noFocusGuards,
                        d = e.persistentFocus,
                        p = e.crossFrame,
                        h = e.autoFocus,
                        v = (e.allowTextSelection, e.group),
                        m = e.className,
                        b = e.whiteList,
                        g = e.shards,
                        O = void 0 === g ? J : g,
                        w = e.as,
                        j = void 0 === w ? "div" : w,
                        x = e.lockProps,
                        k = void 0 === x ? {} : x,
                        E = e.sideCar,
                        P = e.returnFocus,
                        S = e.onActivation,
                        D = e.onDeactivation,
                        C = y.useState({})[0],
                        I = y.useCallback((function() {
                            u.current = u.current || document && document.activeElement, a.current && S && S(a.current), c.current = !0
                        }), [S]),
                        M = y.useCallback((function() {
                            c.current = !1, D && D(a.current)
                        }), [D]),
                        L = y.useCallback((function(e) {
                            var t = u.current;
                            if (Boolean(P) && t && t.focus) {
                                var n = "object" === typeof P ? P : void 0;
                                u.current = null, e ? Promise.resolve().then((function() {
                                    return t.focus(n)
                                })) : t.focus(n)
                            }
                        }), [P]),
                        A = y.useCallback((function(e) {
                            c.current && X.useMedium(e)
                        }), []),
                        N = Y.useMedium,
                        T = y.useCallback((function(e) {
                            a.current !== e && (a.current = e, i(e))
                        }), []);
                    var R = q(((n = {})[H] = f && "disabled", n[U] = v, n), k),
                        B = !0 !== l,
                        W = B && "tail" !== l,
                        _ = F([t, T]);
                    return y.createElement(y.Fragment, null, B && [y.createElement("div", {
                        key: "guard-first",
                        "data-focus-guard": !0,
                        tabIndex: f ? -1 : 0,
                        style: G
                    }), y.createElement("div", {
                        key: "guard-nearest",
                        "data-focus-guard": !0,
                        tabIndex: f ? -1 : 1,
                        style: G
                    })], !f && y.createElement(E, {
                        id: C,
                        sideCar: K,
                        observed: o,
                        disabled: f,
                        persistentFocus: d,
                        crossFrame: p,
                        autoFocus: h,
                        whiteList: b,
                        shards: O,
                        onActivation: I,
                        onDeactivation: M,
                        returnFocus: L
                    }), y.createElement(j, q({
                        ref: _
                    }, R, {
                        className: m,
                        onBlur: N,
                        onFocus: A
                    }), s), W && y.createElement("div", {
                        "data-focus-guard": !0,
                        tabIndex: f ? -1 : 0,
                        style: G
                    }))
                }));
            Q.propTypes = {}, Q.defaultProps = {
                children: void 0,
                disabled: !1,
                returnFocus: !1,
                noFocusGuards: !1,
                autoFocus: !0,
                persistentFocus: !1,
                crossFrame: !0,
                allowTextSelection: void 0,
                group: void 0,
                className: void 0,
                whiteList: void 0,
                shards: void 0,
                as: "div",
                lockProps: {},
                onActivation: void 0,
                onDeactivation: void 0
            };
            var $ = Q,
                ee = B(),
                te = "data-focus-on-hidden",
                ne = y.forwardRef((function(e, t) {
                    var n = y.useState(!1),
                        r = n[0],
                        o = n[1],
                        i = e.children,
                        a = e.autoFocus,
                        c = e.shards,
                        u = e.enabled,
                        s = void 0 === u || u,
                        f = e.scrollLock,
                        l = void 0 === f || f,
                        d = e.focusLock,
                        p = void 0 === d || d,
                        h = e.returnFocus,
                        v = void 0 === h || h,
                        m = e.inert,
                        b = e.allowPinchZoom,
                        g = e.sideCar,
                        O = e.className,
                        w = e.shouldIgnore,
                        j = e.style,
                        x = e.as,
                        k = M.b(e, ["children", "autoFocus", "shards", "enabled", "scrollLock", "focusLock", "returnFocus", "inert", "allowPinchZoom", "sideCar", "className", "shouldIgnore", "style", "as"]),
                        E = g,
                        P = r.onActivation,
                        S = r.onDeactivation,
                        D = M.b(r, ["onActivation", "onDeactivation"]);
                    return y.createElement(y.Fragment, null, y.createElement($, {
                        ref: t,
                        sideCar: g,
                        disabled: !(r && s && p),
                        returnFocus: v,
                        autoFocus: a,
                        shards: c,
                        onActivation: P,
                        onDeactivation: S,
                        className: O,
                        as: z,
                        whiteList: w,
                        lockProps: M.a({}, D, {
                            sideCar: g,
                            shards: c,
                            allowPinchZoom: b,
                            as: x,
                            inert: m,
                            style: j,
                            enabled: s && l
                        })
                    }, i), s && y.createElement(E, M.a({}, k, {
                        sideCar: ee,
                        setLockProps: o,
                        shards: c
                    })))
                })),
                re = function(e) {
                    var t = e.sideCar,
                        n = M.b(e, ["sideCar"]);
                    if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
                    var r = t.read();
                    if (!r) throw new Error("Sidecar medium not found");
                    return y.createElement(r, M.a({}, n))
                };

            function oe(e, t) {
                return e.useMedium(t), re
            }
            re.isSideCarExport = !0;
            var ie = function(e, t) {
                    return function(n) {
                        var r, o = [];

                        function i() {
                            r = e(o.map((function(e) {
                                return e.props
                            }))), t(r)
                        }
                        var a, c, u, s = function(e) {
                            var t, a;

                            function c() {
                                return e.apply(this, arguments) || this
                            }
                            a = e, (t = c).prototype = Object.create(a.prototype), t.prototype.constructor = t, t.__proto__ = a, c.peek = function() {
                                return r
                            };
                            var u = c.prototype;
                            return u.componentDidMount = function() {
                                o.push(this), i()
                            }, u.componentDidUpdate = function() {
                                i()
                            }, u.componentWillUnmount = function() {
                                var e = o.indexOf(this);
                                o.splice(e, 1), i()
                            }, u.render = function() {
                                return O.a.createElement(n, this.props)
                            }, c
                        }(y.PureComponent);
                        return a = s, c = "displayName", u = "SideEffect(" + function(e) {
                            return e.displayName || e.name || "Component"
                        }(n) + ")", c in a ? Object.defineProperty(a, c, {
                            value: u,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : a[c] = u, s
                    }
                },
                ae = function(e) {
                    for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
                    return t
                },
                ce = function(e) {
                    return Array.isArray(e) ? e : [e]
                },
                ue = function() {
                    return document && ae(document.querySelectorAll("[data-no-focus-lock]")).some((function(e) {
                        return e.contains(document.activeElement)
                    }))
                },
                se = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                fe = function e(t) {
                    for (var n = t.length, r = 0; r < n; r += 1)
                        for (var o = function(n) {
                                if (r !== n && t[r].contains(t[n])) return {
                                    v: e(t.filter((function(e) {
                                        return e !== t[n]
                                    })))
                                }
                            }, i = 0; i < n; i += 1) {
                            var a = o(i);
                            if ("object" === ("undefined" === typeof a ? "undefined" : se(a))) return a.v
                        }
                    return t
                },
                le = function e(t) {
                    return t.parentNode ? e(t.parentNode) : t
                },
                de = function(e) {
                    return ce(e).filter(Boolean).reduce((function(e, t) {
                        var n = t.getAttribute(U);
                        return e.push.apply(e, n ? fe(ae(le(t).querySelectorAll('[data-focus-lock="' + n + '"]:not([' + H + '="disabled"])'))) : [t]), e
                    }), [])
                },
                pe = function(e) {
                    return e === document.activeElement
                },
                he = function(e) {
                    var t = document && document.activeElement;
                    return !(!t || t.dataset && t.dataset.focusGuard) && de(e).reduce((function(e, n) {
                        return e || n.contains(t) || function(e) {
                            return t = ae(e.querySelectorAll("iframe")), n = pe, !!t.filter((function(e) {
                                return e === n
                            }))[0];
                            var t, n
                        }(n)
                    }), !1)
                },
                ve = function(e, t) {
                    var n = e.tabIndex - t.tabIndex,
                        r = e.index - t.index;
                    if (n) {
                        if (!e.tabIndex) return 1;
                        if (!t.tabIndex) return -1
                    }
                    return n || r
                },
                me = function(e, t, n) {
                    return ae(e).map((function(e, t) {
                        return {
                            node: e,
                            index: t,
                            tabIndex: n && -1 === e.tabIndex ? (e.dataset || {}).focusGuard ? 0 : -1 : e.tabIndex
                        }
                    })).filter((function(e) {
                        return !t || e.tabIndex >= 0
                    })).sort(ve)
                },
                be = ["button:enabled:not([readonly])", "select:enabled:not([readonly])", "textarea:enabled:not([readonly])", "input:enabled:not([readonly])", "a[href]", "area[href]", "iframe", "object", "embed", "[tabindex]", "[contenteditable]", "[autofocus]"],
                ge = be.join(","),
                ye = ge + ", [data-focus-guard]",
                Oe = function(e, t) {
                    return e.reduce((function(e, n) {
                        return e.concat(ae(n.querySelectorAll(t ? ye : ge)), n.parentNode ? ae(n.parentNode.querySelectorAll(be.join(","))).filter((function(e) {
                            return e === n
                        })) : [])
                    }), [])
                },
                we = function e(t) {
                    return !t || t === document || t.nodeType === Node.DOCUMENT_NODE || !((n = window.getComputedStyle(t, null)) && n.getPropertyValue && ("none" === n.getPropertyValue("display") || "hidden" === n.getPropertyValue("visibility"))) && e(t.parentNode && t.parentNode.nodeType === t.DOCUMENT_FRAGMENT_NODE ? t.parentNode.host : t.parentNode);
                    var n
                },
                je = function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    return n.push(t), t.parentNode && e(t.parentNode, n), n
                },
                xe = function(e, t) {
                    for (var n = je(e), r = je(t), o = 0; o < n.length; o += 1) {
                        var i = n[o];
                        if (r.indexOf(i) >= 0) return i
                    }
                    return !1
                },
                ke = function(e) {
                    return ae(e).filter((function(e) {
                        return we(e)
                    })).filter((function(e) {
                        return function(e) {
                            return !(("INPUT" === e.tagName || "BUTTON" === e.tagName) && ("hidden" === e.type || e.disabled))
                        }(e)
                    }))
                },
                Ee = function(e, t) {
                    return me(ke(Oe(e, t)), !0, t)
                },
                Pe = function(e) {
                    return me(ke(Oe(e)), !1)
                },
                Se = function(e) {
                    return ke(function(e) {
                        var t = e.querySelectorAll("[data-autofocus-inside]");
                        return ae(t).map((function(e) {
                            return Oe([e])
                        })).reduce((function(e, t) {
                            return e.concat(t)
                        }), [])
                    }(e))
                },
                De = function(e) {
                    return "INPUT" === e.tagName && "radio" === e.type
                },
                Ce = function(e, t) {
                    return De(e) && e.name ? function(e, t) {
                        return t.filter(De).filter((function(t) {
                            return t.name === e.name
                        })).filter((function(e) {
                            return e.checked
                        }))[0] || e
                    }(e, t) : e
                },
                Ie = function(e, t) {
                    return e.length > 1 ? e.indexOf(Ce(e[t], e)) : t
                },
                Me = function(e) {
                    return e[0] && e.length > 1 ? Ce(e[0], e) : e[0]
                },
                Le = function(e) {
                    return e && e.dataset && e.dataset.focusGuard
                },
                Ae = function(e) {
                    return !Le(e)
                },
                Ne = function(e, t, n, r) {
                    var o = e.length,
                        i = e[0],
                        a = e[o - 1],
                        c = Le(n);
                    if (!(e.indexOf(n) >= 0)) {
                        var u = t.indexOf(n),
                            s = t.indexOf(r || u),
                            f = e.indexOf(r),
                            l = u - s,
                            d = t.indexOf(i),
                            p = t.indexOf(a),
                            h = function(e) {
                                var t = new Set;
                                return e.forEach((function(n) {
                                    return t.add(Ce(n, e))
                                })), e.filter((function(e) {
                                    return t.has(e)
                                }))
                            }(t),
                            v = h.indexOf(n) - h.indexOf(r || u),
                            m = Ie(e, 0),
                            b = Ie(e, o - 1);
                        return -1 === u || -1 === f ? "NEW_FOCUS" : !l && f >= 0 ? f : u <= d && c && Math.abs(l) > 1 ? b : u >= p && c && Math.abs(l) > 1 ? m : l && Math.abs(v) > 1 ? f : u <= d ? b : u > p ? m : l ? Math.abs(l) > 1 ? f : (o + f + l) % o : void 0
                    }
                },
                Te = function(e, t, n) {
                    var r = ce(e),
                        o = ce(t),
                        i = r[0],
                        a = null;
                    return o.filter(Boolean).forEach((function(e) {
                        a = xe(a || e, e) || a, n.filter(Boolean).forEach((function(e) {
                            var t = xe(i, e);
                            t && (a = !a || t.contains(a) ? t : xe(t, a))
                        }))
                    })), a
                },
                Re = function(e, t) {
                    var n = document && document.activeElement,
                        r = de(e).filter(Ae),
                        o = Te(n || e, e, r),
                        i = Pe(r),
                        a = Ee(r).filter((function(e) {
                            var t = e.node;
                            return Ae(t)
                        }));
                    if (a[0] || (a = i)[0]) {
                        var c, u = Pe([o]).map((function(e) {
                                return e.node
                            })),
                            s = function(e, t) {
                                var n = new Map;
                                return t.forEach((function(e) {
                                    return n.set(e.node, e)
                                })), e.map((function(e) {
                                    return n.get(e)
                                })).filter(Boolean)
                            }(u, a),
                            f = s.map((function(e) {
                                return e.node
                            })),
                            l = Ne(f, u, n, t);
                        if ("NEW_FOCUS" === l) {
                            var d = i.map((function(e) {
                                return e.node
                            })).filter((c = function(e) {
                                return e.reduce((function(e, t) {
                                    return e.concat(Se(t))
                                }), [])
                            }(r), function(e) {
                                return !!e.autofocus || e.dataset && !!e.dataset.autofocus || c.indexOf(e) >= 0
                            }));
                            return {
                                node: d && d.length ? Me(d) : Me(f)
                            }
                        }
                        return void 0 === l ? l : s[l]
                    }
                },
                Be = 0,
                We = !1,
                Fe = function(e, t) {
                    var n, r = Re(e, t);
                    if (!We && r) {
                        if (Be > 2) return console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), We = !0, void setTimeout((function() {
                            We = !1
                        }), 1);
                        Be++, (n = r.node).focus(), n.contentWindow && n.contentWindow.focus(), Be--
                    }
                };

            function _e(e) {
                var t = window.setImmediate;
                "undefined" !== typeof t ? t(e) : setTimeout(e, 1)
            }
            var ze = function() {
                    return document && document.activeElement === document.body || ue()
                },
                qe = null,
                Ue = null,
                He = null,
                Ge = !1,
                Ve = function() {
                    return !0
                };

            function Xe(e, t, n, r) {
                var o = null,
                    i = e;
                do {
                    var a = r[i];
                    if (a.guard) a.node.dataset.focusAutoGuard && (o = a);
                    else {
                        if (!a.lockItem) break;
                        if (i !== e) return;
                        o = null
                    }
                } while ((i += n) !== t);
                o && (o.node.tabIndex = 0)
            }
            var Ye = function(e) {
                    return e && "current" in e ? e.current : e
                },
                Ze = function() {
                    var e, t = !1;
                    if (qe) {
                        var n = qe,
                            r = n.observed,
                            o = n.persistentFocus,
                            i = n.autoFocus,
                            a = n.shards,
                            c = n.crossFrame,
                            u = r || He && He.portaledElement,
                            s = document && document.activeElement;
                        if (u) {
                            var f = [u].concat(a.map(Ye).filter(Boolean));
                            if (s && ! function(e) {
                                    return (qe.whiteList || Ve)(e)
                                }(s) || (o || (c ? Boolean(Ge) : "meanwhile" === Ge) || !ze() || !Ue && i) && (!u || he(f) || (e = s, He && He.portaledElement === e) || (document && !Ue && s && !i ? (s.blur && s.blur(), document.body.focus()) : (t = Fe(f, Ue), He = {})), Ge = !1, Ue = document && document.activeElement), document) {
                                var l = document && document.activeElement,
                                    d = function(e) {
                                        var t = de(e).filter(Ae),
                                            n = Te(e, e, t),
                                            r = Ee([n], !0),
                                            o = Ee(t).filter((function(e) {
                                                var t = e.node;
                                                return Ae(t)
                                            })).map((function(e) {
                                                return e.node
                                            }));
                                        return r.map((function(e) {
                                            var t = e.node;
                                            return {
                                                node: t,
                                                index: e.index,
                                                lockItem: o.indexOf(t) >= 0,
                                                guard: Le(t)
                                            }
                                        }))
                                    }(f),
                                    p = d.map((function(e) {
                                        return e.node
                                    })).indexOf(l);
                                p > -1 && (d.filter((function(e) {
                                    var t = e.guard,
                                        n = e.node;
                                    return t && n.dataset.focusAutoGuard
                                })).forEach((function(e) {
                                    return e.node.removeAttribute("tabIndex")
                                })), Xe(p, d.length, 1, d), Xe(p, -1, -1, d))
                            }
                        }
                    }
                    return t
                },
                Ke = function(e) {
                    Ze() && e && (e.stopPropagation(), e.preventDefault())
                },
                Je = function() {
                    return _e(Ze)
                },
                Qe = function(e) {
                    var t = e.target,
                        n = e.currentTarget;
                    n.contains(t) || (He = {
                        observerNode: n,
                        portaledElement: t
                    })
                },
                $e = function() {
                    Ge = "just", setTimeout((function() {
                        Ge = "meanwhile"
                    }), 0)
                };
            X.assignSyncMedium(Qe), Y.assignMedium(Je), Z.assignMedium((function(e) {
                return e({
                    moveFocusInside: Fe,
                    focusInside: he
                })
            }));
            var et, tt = ie((function(e) {
                return e.filter((function(e) {
                    return !e.disabled
                }))
            }), (function(e) {
                var t = e.slice(-1)[0];
                t && !qe && (document.addEventListener("focusin", Ke, !0), document.addEventListener("focusout", Je), window.addEventListener("blur", $e));
                var n = qe,
                    r = n && t && t.id === n.id;
                qe = t, n && !r && (n.onDeactivation(), e.filter((function(e) {
                    return e.id === n.id
                })).length || n.returnFocus(!t)), t ? (Ue = null, r && n.observed === t.observed || t.onActivation(), Ze(), _e(Ze)) : (document.removeEventListener("focusin", Ke, !0), document.removeEventListener("focusout", Je), window.removeEventListener("blur", $e), Ue = null)
            }))((function() {
                return null
            }));
            oe(K, tt);

            function nt() {
                if (!document) return null;
                var e = document.createElement("style");
                e.type = "text/css";
                var t = et || n.nc;
                return t && e.setAttribute("nonce", t), e
            }
            var rt = function() {
                    var e = 0,
                        t = null;
                    return {
                        add: function(n) {
                            var r, o;
                            0 == e && (t = nt()) && (o = n, (r = t).styleSheet ? r.styleSheet.cssText = o : r.appendChild(document.createTextNode(o)), function(e) {
                                (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
                            }(t)), e++
                        },
                        remove: function() {
                            !--e && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
                        }
                    }
                },
                ot = function() {
                    var e = function() {
                        var e = rt();
                        return function(t) {
                            y.useEffect((function() {
                                return e.add(t),
                                    function() {
                                        e.remove()
                                    }
                            }), [])
                        }
                    }();
                    return function(t) {
                        var n = t.styles;
                        return e(n), null
                    }
                },
                it = {
                    left: 0,
                    top: 0,
                    right: 0,
                    gap: 0
                },
                at = function(e) {
                    return parseInt(e || "", 10) || 0
                },
                ct = function(e) {
                    if (void 0 === e && (e = "margin"), "undefined" === typeof window) return it;
                    var t = function(e) {
                            var t = window.getComputedStyle(document.body),
                                n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                                r = t["padding" === e ? "paddingTop" : "marginTop"],
                                o = t["padding" === e ? "paddingRight" : "marginRight"];
                            return [at(n), at(r), at(o)]
                        }(e),
                        n = document.documentElement.clientWidth,
                        r = window.innerWidth;
                    return {
                        left: t[0],
                        top: t[1],
                        right: t[2],
                        gap: Math.max(0, r - n + t[2] - t[0])
                    }
                },
                ut = ot(),
                st = function(e, t, n, r) {
                    var o = e.left,
                        i = e.top,
                        a = e.right,
                        c = e.gap;
                    return void 0 === n && (n = "margin"), "\n  .with-scroll-bars-hidden {\n   overflow: hidden " + r + ";\n   padding-right: " + c + "px " + r + ";\n  }\n  body {\n    overflow: hidden " + r + ";\n    " + [t && "position: relative " + r + ";", "margin" === n && "\n    padding-left: " + o + "px;\n    padding-top: " + i + "px;\n    padding-right: " + a + "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: " + c + "px " + r + ";\n    ", "padding" === n && "padding-right: " + c + "px " + r + ";"].filter(Boolean).join("") + "\n  }\n  \n  ." + L + " {\n    right: " + c + "px " + r + ";\n  }\n  \n  ." + A + " {\n    margin-right: " + c + "px " + r + ";\n  }\n  \n  ." + L + " ." + L + " {\n    right: 0 " + r + ";\n  }\n  \n  ." + A + " ." + A + " {\n    margin-right: 0 " + r + ";\n  }\n"
                },
                ft = function(e) {
                    var t = y.useState(ct(e.gapMode)),
                        n = t[0],
                        r = t[1];
                    y.useEffect((function() {
                        r(ct(e.gapMode))
                    }), [e.gapMode]);
                    var o = e.noRelative,
                        i = e.noImportant,
                        a = e.gapMode,
                        c = void 0 === a ? "margin" : a;
                    return y.createElement(ut, {
                        styles: st(n, !o, c, i ? "" : "!important")
                    })
                },
                lt = function(e, t) {
                    var n = t;
                    do {
                        if (dt(e, n)) {
                            var r = pt(e, n);
                            if (r[1] > r[2]) return !0
                        }
                        n = n.parentNode
                    } while (n && n !== document.body);
                    return !1
                },
                dt = function(e, t) {
                    return "v" === e ? function(e) {
                        var t = window.getComputedStyle(e);
                        return "hidden" !== t.overflowY && !(t.overflowY === t.overflowX && "visible" === t.overflowY)
                    }(t) : function(e) {
                        var t = window.getComputedStyle(e);
                        return "hidden" !== t.overflowX && !(t.overflowY === t.overflowX && "visible" === t.overflowX)
                    }(t)
                },
                pt = function(e, t) {
                    return "v" === e ? [(n = t).scrollTop, n.scrollHeight, n.clientHeight] : function(e) {
                        return [e.scrollLeft, e.scrollWidth, e.clientWidth]
                    }(t);
                    var n
                },
                ht = !1;
            if ("undefined" !== typeof window) try {
                var vt = Object.defineProperty({}, "passive", {
                    get: function() {
                        return ht = !0, !0
                    }
                });
                window.addEventListener("test", vt, vt), window.removeEventListener("test", vt, vt)
            } catch (Gr) {
                ht = !1
            }
            var mt = !!ht && {
                    passive: !1
                },
                bt = function(e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
                },
                gt = function(e) {
                    return [e.deltaX, e.deltaY]
                },
                yt = function(e) {
                    return e && "current" in e ? e.current : e
                },
                Ot = function(e) {
                    return "\n  .block-interactivity-" + e + " {pointer-events: none;}\n  .allow-interactivity-" + e + " {pointer-events: all;}\n"
                },
                wt = 0,
                jt = [];
            oe(W, (function(e) {
                var t = y.useRef([]),
                    n = y.useRef([0, 0]),
                    r = y.useRef(),
                    o = y.useState(wt++)[0],
                    i = y.useState((function() {
                        return ot()
                    }))[0],
                    a = y.useRef(e);
                y.useEffect((function() {
                    a.current = e
                }), [e]), y.useEffect((function() {
                    if (e.inert) {
                        document.body.classList.add("block-interactivity-" + o);
                        var t = [e.lockRef.current].concat((e.shards || []).map(yt)).filter(Boolean);
                        return t.forEach((function(e) {
                                return e.classList.add("allow-interactivity-" + o)
                            })),
                            function() {
                                document.body.classList.remove("block-interactivity-" + o), t.forEach((function(e) {
                                    return e.classList.remove("allow-interactivity-" + o)
                                }))
                            }
                    }
                }), [e.inert, e.lockRef.current, e.shards]);
                var c = y.useCallback((function(e, t) {
                        if ("touches" in e && 2 === e.touches.length) return !a.current.allowPinchZoom;
                        var o, i = bt(e),
                            c = n.current,
                            u = "deltaX" in e ? e.deltaX : c[0] - i[0],
                            s = "deltaY" in e ? e.deltaY : c[1] - i[1],
                            f = e.target,
                            l = Math.abs(u) > Math.abs(s) ? "h" : "v",
                            d = lt(l, f);
                        if (!d) return !0;
                        if (d ? o = l : (o = "v" === l ? "h" : "v", d = lt(l, f)), !d) return !1;
                        if (!r.current && "changedTouches" in e && (u || s) && (r.current = o), !o) return !0;
                        var p = r.current || o;
                        return function(e, t, n, r, o) {
                            var i = r,
                                a = n.target,
                                c = t.contains(a),
                                u = !1,
                                s = i > 0,
                                f = 0,
                                l = 0;
                            do {
                                var d = pt(e, a),
                                    p = d[0],
                                    h = d[1] - d[2] - p;
                                (p || h) && dt(e, a) && (f += h, l += p), a = a.parentNode
                            } while (!c && a !== document.body || c && (t.contains(a) || t === a));
                            return (s && (o && 0 === f || !o && i > f) || !s && (o && 0 === l || !o && -i > l)) && (u = !0), u
                        }(p, t, e, "h" === p ? u : s, !0)
                    }), []),
                    u = y.useCallback((function(e) {
                        var n = e;
                        if (jt.length && jt[jt.length - 1] === i) {
                            var r = "deltaY" in n ? gt(n) : bt(n),
                                o = t.current.filter((function(e) {
                                    return e.name === n.type && e.target === n.target && (t = e.delta, o = r, t[0] === o[0] && t[1] === o[1]);
                                    var t, o
                                }))[0];
                            if (o && o.should) n.preventDefault();
                            else if (!o) {
                                var u = (a.current.shards || []).map(yt).filter(Boolean).filter((function(e) {
                                    return e.contains(n.target)
                                }));
                                (u.length > 0 ? c(n, u[0]) : !a.current.noIsolation) && n.preventDefault()
                            }
                        }
                    }), []),
                    s = y.useCallback((function(e, n, r, o) {
                        var i = {
                            name: e,
                            delta: n,
                            target: r,
                            should: o
                        };
                        t.current.push(i), setTimeout((function() {
                            t.current = t.current.filter((function(e) {
                                return e !== i
                            }))
                        }), 1)
                    }), []),
                    f = y.useCallback((function(e) {
                        n.current = bt(e), r.current = void 0
                    }), []),
                    l = y.useCallback((function(t) {
                        s(t.type, gt(t), t.target, c(t, e.lockRef.current))
                    }), []),
                    d = y.useCallback((function(t) {
                        s(t.type, bt(t), t.target, c(t, e.lockRef.current))
                    }), []);
                y.useEffect((function() {
                    return jt.push(i), e.setCallbacks({
                            onScrollCapture: l,
                            onWheelCapture: l,
                            onTouchMoveCapture: d
                        }), document.addEventListener("wheel", u, mt), document.addEventListener("touchmove", u, mt), document.addEventListener("touchstart", f, mt),
                        function() {
                            jt = jt.filter((function(e) {
                                return e !== i
                            })), document.removeEventListener("wheel", u, mt), document.removeEventListener("touchmove", u, mt), document.removeEventListener("touchstart", f, mt)
                        }
                }), []);
                var p = e.removeScrollBar,
                    h = e.inert;
                return y.createElement(y.Fragment, null, h ? y.createElement(i, {
                    styles: Ot(o)
                }) : null, p ? y.createElement(ft, {
                    gapMode: "margin"
                }) : null)
            }));
            var xt = "undefined" !== typeof document ? document.body : null,
                kt = new WeakMap,
                Et = new WeakMap,
                Pt = {},
                St = 0,
                Dt = ot(),
                Ct = function() {
                    return y.createElement(Dt, {
                        styles: "\n [data-focus-on-hidden] {\n   pointer-events: none !important;\n }\n"
                    })
                },
                It = function(e) {
                    return "current" in e ? e.current : e
                };
            var Mt = oe(ee, (function(e) {
                    var t = e.setLockProps,
                        n = e.onEscapeKey,
                        r = e.onClickOutside,
                        o = e.shards,
                        i = e.onActivation,
                        a = e.onDeactivation,
                        c = e.noIsolation,
                        u = Object(y.useState)(void 0),
                        s = u[0],
                        f = u[1],
                        l = Object(y.useRef)(null),
                        d = Object(y.useRef)(0);
                    return y.useEffect((function() {
                        var e = function(e) {
                                e.defaultPrevented || "Escape" !== e.code && "Escape" !== e.key && 27 !== e.keyCode || !n || n(e)
                            },
                            t = function(e) {
                                e.defaultPrevented || e.target === l.current || e instanceof MouseEvent && 0 !== e.button || o && o.map(It).some((function(t) {
                                    return t && t.contains(e.target) || t === e.target
                                })) || r && r(e)
                            },
                            i = function(e) {
                                t(e), d.current = e.touches.length
                            },
                            a = function(e) {
                                d.current = e.touches.length
                            };
                        if (s) return document.addEventListener("keydown", e), document.addEventListener("mousedown", t), document.addEventListener("touchstart", i), document.addEventListener("touchend", a),
                            function() {
                                document.removeEventListener("keydown", e), document.removeEventListener("mousedown", t), document.removeEventListener("touchstart", i), document.removeEventListener("touchend", a)
                            }
                    }), [s, r, n]), Object(y.useEffect)((function() {
                        if (s) return i && i(s),
                            function() {
                                a && a()
                            }
                    }), [!!s]), Object(y.useEffect)((function() {
                        var e = function() {
                                return null
                            },
                            n = !1;
                        return t({
                                onMouseDown: function(e) {
                                    l.current = e.target
                                },
                                onTouchStart: function(e) {
                                    l.current = e.target
                                },
                                onActivation: function(t) {
                                    e = function(e, t, n) {
                                        void 0 === t && (t = xt), void 0 === n && (n = "data-aria-hidden");
                                        var r = Array.isArray(e) ? e : [e];
                                        Pt[n] || (Pt[n] = new WeakMap);
                                        var o = Pt[n],
                                            i = [],
                                            a = function(e) {
                                                !e || r.indexOf(e) >= 0 || Array.prototype.forEach.call(e.children, (function(e) {
                                                    if (r.some((function(t) {
                                                            return e.contains(t)
                                                        }))) a(e);
                                                    else {
                                                        var t = e.getAttribute("aria-hidden"),
                                                            c = null !== t && "false" !== t,
                                                            u = (kt.get(e) || 0) + 1,
                                                            s = (o.get(e) || 0) + 1;
                                                        kt.set(e, u), o.set(e, s), i.push(e), 1 === u && c && Et.set(e, !0), 1 === s && e.setAttribute(n, "true"), c || e.setAttribute("aria-hidden", "true")
                                                    }
                                                }))
                                            };
                                        return a(t), St++,
                                            function() {
                                                i.forEach((function(e) {
                                                    var t = kt.get(e) - 1,
                                                        r = o.get(e) - 1;
                                                    kt.set(e, t), o.set(e, r), t || (Et.has(e) || e.removeAttribute("aria-hidden"), Et.delete(e)), r || e.removeAttribute(n)
                                                })), --St || (kt = new WeakMap, kt = new WeakMap, Et = new WeakMap, Pt = {})
                                            }
                                    }([t].concat((o || []).map(It)), document.body, c ? void 0 : te), f((function() {
                                        return t
                                    }))
                                },
                                onDeactivation: function() {
                                    e(), n || f(null)
                                }
                            }),
                            function() {
                                n = !0, t(!1)
                            }
                    }), []), y.createElement(Ct, null)
                })),
                Lt = function(e) {
                    return y.createElement(Mt, M.a({}, e))
                },
                At = y.forwardRef((function(e, t) {
                    return y.createElement(ne, M.a({}, e, {
                        ref: t,
                        sideCar: Lt
                    }))
                })),
                Nt = n("p+cf"),
                Tt = n("ytgV"),
                Rt = n("xnAi"),
                Bt = w.d.div.withConfig({
                    componentId: "bzx27k-0"
                })(["position:fixed;z-index:", ";top:0;right:0;bottom:0;left:0;width:100%;pointer-events:none;"], Nt.b),
                Wt = w.d.div.withConfig({
                    componentId: "bzx27k-1"
                })(["", ";"], Object(I.a)()),
                Ft = Object(w.d)(At).withConfig({
                    componentId: "bzx27k-2"
                })(["width:100%;height:100%;display:flex;justify-content:center;align-items:center;"]),
                _t = Object(w.d)(D.animated.div).withConfig({
                    componentId: "bzx27k-3"
                })(["", ";background:", ";opacity:0.85;pointer-events:all;"], Object(I.a)(), Object(I.g)(0, 0, 0)),
                zt = Object(w.d)(D.animated.div).withConfig({
                    componentId: "bzx27k-4"
                })(["position:relative;width:100%;height:100%;display:flex;justify-content:center;align-items:center;pointer-events:none;& > *{pointer-events:all;}"]);

            function qt() {
                var e = Object(Tt.a)(S.a),
                    t = Object(m.b)((function() {
                        return e.modals.slice()
                    })),
                    n = Object(C.useTransition)(t, {
                        key: function(e) {
                            return e.id
                        },
                        config: {
                            friction: 15,
                            tension: 300,
                            clamp: !0
                        },
                        from: {
                            contentOpacity: 0,
                            contentScale: .9,
                            filterOpacity: 0
                        },
                        enter: {
                            contentOpacity: 1,
                            contentScale: 1,
                            filterOpacity: .85
                        },
                        leave: {
                            contentOpacity: 0,
                            contentScale: .9,
                            filterOpacity: 0
                        }
                    });
                return Object(r.jsx)(Bt, {
                    children: n((function(e, t) {
                        return Object(r.jsx)(Rt.b, {
                            value: t,
                            children: Object(r.jsxs)(Wt, {
                                children: [Object(r.jsx)(_t, {
                                    style: {
                                        opacity: e.filterOpacity
                                    }
                                }), Object(r.jsx)(Ft, {
                                    onClickOutside: function() {
                                        return t.dismiss()
                                    },
                                    onEscapeKey: function() {
                                        return t.dismiss()
                                    },
                                    children: Object(r.jsx)(zt, {
                                        role: "dialog",
                                        style: {
                                            opacity: e.contentOpacity,
                                            scale: e.contentScale
                                        },
                                        children: t.render()
                                    })
                                })]
                            })
                        })
                    }))
                })
            }
            n("ma9I");
            var Ut = n("y25k");

            function Ht(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Gt(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = l(e);
                    if (t) {
                        var o = l(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return f(this, n)
                }
            }
            var Vt, Xt, Yt = function(e) {
                u(n, e);
                var t = Gt(n);

                function n() {
                    var e;
                    Object(i.a)(this, n);
                    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                    return (e = t.call.apply(t, [this].concat(o))).state = {}, e
                }
                return Object(a.a)(n, [{
                    key: "componentDidCatch",
                    value: function(e, t) {
                        this.setState({
                            caughtError: {
                                error: e,
                                info: t
                            }
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props.children,
                            t = this.state.caughtError;
                        return t ? Object(r.jsx)(Ut.a, function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Ht(Object(n), !0).forEach((function(t) {
                                    Object(o.a)(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ht(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, t)) : e
                    }
                }]), n
            }(y.Component);
            n("TeQF"), n("fbCW"), n("sMBO");

            function Zt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Kt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Zt(Object(n), !0).forEach((function(t) {
                        Object(o.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Jt = (Vt = function() {
                    function e() {
                        Object(i.a)(this, e), Object(j.a)(this, "popovers", Xt, this)
                    }
                    return Object(a.a)(e, [{
                        key: "spawn",
                        value: function(e) {
                            this.popovers.push(e)
                        }
                    }, {
                        key: "dismiss",
                        value: function(e) {
                            var t, n = this.popovers.find((function(t) {
                                return t.name === e
                            }));
                            n && (null === (t = n.onDismiss) || void 0 === t || t.call(n), this.popovers = this.popovers.filter((function(t) {
                                return t.name !== e
                            })))
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            var n = this.popovers.find((function(t) {
                                return t.name === e
                            }));
                            if (n) {
                                var r = this.popovers.indexOf(n);
                                this.popovers[r] = Kt(Kt({}, n), t)
                            }
                        }
                    }]), e
                }(), Xt = Object(x.a)(Vt.prototype, "popovers", [v.observable], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return []
                    }
                }), Object(x.a)(Vt.prototype, "spawn", [v.action], Object.getOwnPropertyDescriptor(Vt.prototype, "spawn"), Vt.prototype), Object(x.a)(Vt.prototype, "dismiss", [v.action], Object.getOwnPropertyDescriptor(Vt.prototype, "dismiss"), Vt.prototype), Object(x.a)(Vt.prototype, "update", [v.action], Object.getOwnPropertyDescriptor(Vt.prototype, "update"), Vt.prototype), Vt),
                Qt = n("7nDK");
            n("2B1R"), n("GKVU");

            function $t(e) {
                var t = e.getBoundingClientRect();
                return {
                    width: t.width,
                    height: t.height,
                    top: t.top,
                    right: t.right,
                    bottom: t.bottom,
                    left: t.left,
                    x: t.left,
                    y: t.top
                }
            }

            function en(e) {
                if ("[object Window]" !== e.toString()) {
                    var t = e.ownerDocument;
                    return t && t.defaultView || window
                }
                return e
            }

            function tn(e) {
                var t = en(e);
                return {
                    scrollLeft: t.pageXOffset,
                    scrollTop: t.pageYOffset
                }
            }

            function nn(e) {
                return e instanceof en(e).Element || e instanceof Element
            }

            function rn(e) {
                return e instanceof en(e).HTMLElement || e instanceof HTMLElement
            }

            function on(e) {
                return "undefined" !== typeof ShadowRoot && (e instanceof en(e).ShadowRoot || e instanceof ShadowRoot)
            }

            function an(e) {
                return e ? (e.nodeName || "").toLowerCase() : null
            }

            function cn(e) {
                return ((nn(e) ? e.ownerDocument : e.document) || window.document).documentElement
            }

            function un(e) {
                return $t(cn(e)).left + tn(e).scrollLeft
            }

            function sn(e) {
                return en(e).getComputedStyle(e)
            }

            function fn(e) {
                var t = sn(e),
                    n = t.overflow,
                    r = t.overflowX,
                    o = t.overflowY;
                return /auto|scroll|overlay|hidden/.test(n + o + r)
            }

            function ln(e, t, n) {
                void 0 === n && (n = !1);
                var r = cn(t),
                    o = $t(e),
                    i = rn(t),
                    a = {
                        scrollLeft: 0,
                        scrollTop: 0
                    },
                    c = {
                        x: 0,
                        y: 0
                    };
                return (i || !i && !n) && (("body" !== an(t) || fn(r)) && (a = function(e) {
                    return e !== en(e) && rn(e) ? {
                        scrollLeft: (t = e).scrollLeft,
                        scrollTop: t.scrollTop
                    } : tn(e);
                    var t
                }(t)), rn(t) ? ((c = $t(t)).x += t.clientLeft, c.y += t.clientTop) : r && (c.x = un(r))), {
                    x: o.left + a.scrollLeft - c.x,
                    y: o.top + a.scrollTop - c.y,
                    width: o.width,
                    height: o.height
                }
            }

            function dn(e) {
                return {
                    x: e.offsetLeft,
                    y: e.offsetTop,
                    width: e.offsetWidth,
                    height: e.offsetHeight
                }
            }

            function pn(e) {
                return "html" === an(e) ? e : e.assignedSlot || e.parentNode || (on(e) ? e.host : null) || cn(e)
            }

            function hn(e) {
                return ["html", "body", "#document"].indexOf(an(e)) >= 0 ? e.ownerDocument.body : rn(e) && fn(e) ? e : hn(pn(e))
            }

            function vn(e, t) {
                var n;
                void 0 === t && (t = []);
                var r = hn(e),
                    o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    i = en(r),
                    a = o ? [i].concat(i.visualViewport || [], fn(r) ? r : []) : r,
                    c = t.concat(a);
                return o ? c : c.concat(vn(pn(a)))
            }

            function mn(e) {
                return ["table", "td", "th"].indexOf(an(e)) >= 0
            }

            function bn(e) {
                return rn(e) && "fixed" !== sn(e).position ? e.offsetParent : null
            }

            function gn(e) {
                for (var t = en(e), n = bn(e); n && mn(n) && "static" === sn(n).position;) n = bn(n);
                return n && ("html" === an(n) || "body" === an(n) && "static" === sn(n).position) ? t : n || function(e) {
                    for (var t = navigator.userAgent.toLowerCase().includes("firefox"), n = pn(e); rn(n) && ["html", "body"].indexOf(an(n)) < 0;) {
                        var r = sn(n);
                        if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || ["transform", "perspective"].includes(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter) return n;
                        n = n.parentNode
                    }
                    return null
                }(e) || t
            }
            var yn = "top",
                On = "bottom",
                wn = "right",
                jn = "left",
                xn = "auto",
                kn = [yn, On, wn, jn],
                En = "start",
                Pn = "end",
                Sn = "viewport",
                Dn = "popper",
                Cn = kn.reduce((function(e, t) {
                    return e.concat([t + "-" + En, t + "-" + Pn])
                }), []),
                In = [].concat(kn, [xn]).reduce((function(e, t) {
                    return e.concat([t, t + "-" + En, t + "-" + Pn])
                }), []),
                Mn = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

            function Ln(e) {
                var t = new Map,
                    n = new Set,
                    r = [];

                function o(e) {
                    n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) {
                        if (!n.has(e)) {
                            var r = t.get(e);
                            r && o(r)
                        }
                    })), r.push(e)
                }
                return e.forEach((function(e) {
                    t.set(e.name, e)
                })), e.forEach((function(e) {
                    n.has(e.name) || o(e)
                })), r
            }

            function An(e) {
                var t;
                return function() {
                    return t || (t = new Promise((function(n) {
                        Promise.resolve().then((function() {
                            t = void 0, n(e())
                        }))
                    }))), t
                }
            }
            var Nn = {
                placement: "bottom",
                modifiers: [],
                strategy: "absolute"
            };

            function Tn() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return !t.some((function(e) {
                    return !(e && "function" === typeof e.getBoundingClientRect)
                }))
            }

            function Rn(e) {
                void 0 === e && (e = {});
                var t = e,
                    n = t.defaultModifiers,
                    r = void 0 === n ? [] : n,
                    o = t.defaultOptions,
                    i = void 0 === o ? Nn : o;
                return function(e, t, n) {
                    void 0 === n && (n = i);
                    var o = {
                            placement: "bottom",
                            orderedModifiers: [],
                            options: Object.assign({}, Nn, i),
                            modifiersData: {},
                            elements: {
                                reference: e,
                                popper: t
                            },
                            attributes: {},
                            styles: {}
                        },
                        a = [],
                        c = !1,
                        u = {
                            state: o,
                            setOptions: function(n) {
                                s(), o.options = Object.assign({}, i, o.options, n), o.scrollParents = {
                                    reference: nn(e) ? vn(e) : e.contextElement ? vn(e.contextElement) : [],
                                    popper: vn(t)
                                };
                                var c = function(e) {
                                    var t = Ln(e);
                                    return Mn.reduce((function(e, n) {
                                        return e.concat(t.filter((function(e) {
                                            return e.phase === n
                                        })))
                                    }), [])
                                }(function(e) {
                                    var t = e.reduce((function(e, t) {
                                        var n = e[t.name];
                                        return e[t.name] = n ? Object.assign({}, n, t, {
                                            options: Object.assign({}, n.options, t.options),
                                            data: Object.assign({}, n.data, t.data)
                                        }) : t, e
                                    }), {});
                                    return Object.keys(t).map((function(e) {
                                        return t[e]
                                    }))
                                }([].concat(r, o.options.modifiers)));
                                return o.orderedModifiers = c.filter((function(e) {
                                    return e.enabled
                                })), o.orderedModifiers.forEach((function(e) {
                                    var t = e.name,
                                        n = e.options,
                                        r = void 0 === n ? {} : n,
                                        i = e.effect;
                                    if ("function" === typeof i) {
                                        var c = i({
                                                state: o,
                                                name: t,
                                                instance: u,
                                                options: r
                                            }),
                                            s = function() {};
                                        a.push(c || s)
                                    }
                                })), u.update()
                            },
                            forceUpdate: function() {
                                if (!c) {
                                    var e = o.elements,
                                        t = e.reference,
                                        n = e.popper;
                                    if (Tn(t, n)) {
                                        o.rects = {
                                            reference: ln(t, gn(n), "fixed" === o.options.strategy),
                                            popper: dn(n)
                                        }, o.reset = !1, o.placement = o.options.placement, o.orderedModifiers.forEach((function(e) {
                                            return o.modifiersData[e.name] = Object.assign({}, e.data)
                                        }));
                                        for (var r = 0; r < o.orderedModifiers.length; r++)
                                            if (!0 !== o.reset) {
                                                var i = o.orderedModifiers[r],
                                                    a = i.fn,
                                                    s = i.options,
                                                    f = void 0 === s ? {} : s,
                                                    l = i.name;
                                                "function" === typeof a && (o = a({
                                                    state: o,
                                                    options: f,
                                                    name: l,
                                                    instance: u
                                                }) || o)
                                            } else o.reset = !1, r = -1
                                    }
                                }
                            },
                            update: An((function() {
                                return new Promise((function(e) {
                                    u.forceUpdate(), e(o)
                                }))
                            })),
                            destroy: function() {
                                s(), c = !0
                            }
                        };
                    if (!Tn(e, t)) return u;

                    function s() {
                        a.forEach((function(e) {
                            return e()
                        })), a = []
                    }
                    return u.setOptions(n).then((function(e) {
                        !c && n.onFirstUpdate && n.onFirstUpdate(e)
                    })), u
                }
            }
            var Bn = {
                passive: !0
            };
            var Wn = {
                name: "eventListeners",
                enabled: !0,
                phase: "write",
                fn: function() {},
                effect: function(e) {
                    var t = e.state,
                        n = e.instance,
                        r = e.options,
                        o = r.scroll,
                        i = void 0 === o || o,
                        a = r.resize,
                        c = void 0 === a || a,
                        u = en(t.elements.popper),
                        s = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                    return i && s.forEach((function(e) {
                            e.addEventListener("scroll", n.update, Bn)
                        })), c && u.addEventListener("resize", n.update, Bn),
                        function() {
                            i && s.forEach((function(e) {
                                e.removeEventListener("scroll", n.update, Bn)
                            })), c && u.removeEventListener("resize", n.update, Bn)
                        }
                },
                data: {}
            };

            function Fn(e) {
                return e.split("-")[0]
            }

            function _n(e) {
                return e.split("-")[1]
            }

            function zn(e) {
                return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
            }

            function qn(e) {
                var t, n = e.reference,
                    r = e.element,
                    o = e.placement,
                    i = o ? Fn(o) : null,
                    a = o ? _n(o) : null,
                    c = n.x + n.width / 2 - r.width / 2,
                    u = n.y + n.height / 2 - r.height / 2;
                switch (i) {
                    case yn:
                        t = {
                            x: c,
                            y: n.y - r.height
                        };
                        break;
                    case On:
                        t = {
                            x: c,
                            y: n.y + n.height
                        };
                        break;
                    case wn:
                        t = {
                            x: n.x + n.width,
                            y: u
                        };
                        break;
                    case jn:
                        t = {
                            x: n.x - r.width,
                            y: u
                        };
                        break;
                    default:
                        t = {
                            x: n.x,
                            y: n.y
                        }
                }
                var s = i ? zn(i) : null;
                if (null != s) {
                    var f = "y" === s ? "height" : "width";
                    switch (a) {
                        case En:
                            t[s] = t[s] - (n[f] / 2 - r[f] / 2);
                            break;
                        case Pn:
                            t[s] = t[s] + (n[f] / 2 - r[f] / 2)
                    }
                }
                return t
            }
            var Un = {
                    name: "popperOffsets",
                    enabled: !0,
                    phase: "read",
                    fn: function(e) {
                        var t = e.state,
                            n = e.name;
                        t.modifiersData[n] = qn({
                            reference: t.rects.reference,
                            element: t.rects.popper,
                            strategy: "absolute",
                            placement: t.placement
                        })
                    },
                    data: {}
                },
                Hn = Math.max,
                Gn = Math.min,
                Vn = Math.round,
                Xn = {
                    top: "auto",
                    right: "auto",
                    bottom: "auto",
                    left: "auto"
                };

            function Yn(e) {
                var t, n = e.popper,
                    r = e.popperRect,
                    o = e.placement,
                    i = e.offsets,
                    a = e.position,
                    c = e.gpuAcceleration,
                    u = e.adaptive,
                    s = e.roundOffsets,
                    f = !0 === s ? function(e) {
                        var t = e.x,
                            n = e.y,
                            r = window.devicePixelRatio || 1;
                        return {
                            x: Vn(Vn(t * r) / r) || 0,
                            y: Vn(Vn(n * r) / r) || 0
                        }
                    }(i) : "function" === typeof s ? s(i) : i,
                    l = f.x,
                    d = void 0 === l ? 0 : l,
                    p = f.y,
                    h = void 0 === p ? 0 : p,
                    v = i.hasOwnProperty("x"),
                    m = i.hasOwnProperty("y"),
                    b = jn,
                    g = yn,
                    y = window;
                if (u) {
                    var O = gn(n),
                        w = "clientHeight",
                        j = "clientWidth";
                    O === en(n) && "static" !== sn(O = cn(n)).position && (w = "scrollHeight", j = "scrollWidth"), o === yn && (g = On, h -= O[w] - r.height, h *= c ? 1 : -1), o === jn && (b = wn, d -= O[j] - r.width, d *= c ? 1 : -1)
                }
                var x, k = Object.assign({
                    position: a
                }, u && Xn);
                return c ? Object.assign({}, k, ((x = {})[g] = m ? "0" : "", x[b] = v ? "0" : "", x.transform = (y.devicePixelRatio || 1) < 2 ? "translate(" + d + "px, " + h + "px)" : "translate3d(" + d + "px, " + h + "px, 0)", x)) : Object.assign({}, k, ((t = {})[g] = m ? h + "px" : "", t[b] = v ? d + "px" : "", t.transform = "", t))
            }
            var Zn = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };

            function Kn(e) {
                return e.replace(/left|right|bottom|top/g, (function(e) {
                    return Zn[e]
                }))
            }
            var Jn = {
                start: "end",
                end: "start"
            };

            function Qn(e) {
                return e.replace(/start|end/g, (function(e) {
                    return Jn[e]
                }))
            }

            function $n(e, t) {
                var n = t.getRootNode && t.getRootNode();
                if (e.contains(t)) return !0;
                if (n && on(n)) {
                    var r = t;
                    do {
                        if (r && e.isSameNode(r)) return !0;
                        r = r.parentNode || r.host
                    } while (r)
                }
                return !1
            }

            function er(e) {
                return Object.assign({}, e, {
                    left: e.x,
                    top: e.y,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                })
            }

            function tr(e, t) {
                return t === Sn ? er(function(e) {
                    var t = en(e),
                        n = cn(e),
                        r = t.visualViewport,
                        o = n.clientWidth,
                        i = n.clientHeight,
                        a = 0,
                        c = 0;
                    return r && (o = r.width, i = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = r.offsetLeft, c = r.offsetTop)), {
                        width: o,
                        height: i,
                        x: a + un(e),
                        y: c
                    }
                }(e)) : rn(t) ? function(e) {
                    var t = $t(e);
                    return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
                }(t) : er(function(e) {
                    var t, n = cn(e),
                        r = tn(e),
                        o = null == (t = e.ownerDocument) ? void 0 : t.body,
                        i = Hn(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
                        a = Hn(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
                        c = -r.scrollLeft + un(e),
                        u = -r.scrollTop;
                    return "rtl" === sn(o || n).direction && (c += Hn(n.clientWidth, o ? o.clientWidth : 0) - i), {
                        width: i,
                        height: a,
                        x: c,
                        y: u
                    }
                }(cn(e)))
            }

            function nr(e, t, n) {
                var r = "clippingParents" === t ? function(e) {
                        var t = vn(pn(e)),
                            n = ["absolute", "fixed"].indexOf(sn(e).position) >= 0 && rn(e) ? gn(e) : e;
                        return nn(n) ? t.filter((function(e) {
                            return nn(e) && $n(e, n) && "body" !== an(e)
                        })) : []
                    }(e) : [].concat(t),
                    o = [].concat(r, [n]),
                    i = o[0],
                    a = o.reduce((function(t, n) {
                        var r = tr(e, n);
                        return t.top = Hn(r.top, t.top), t.right = Gn(r.right, t.right), t.bottom = Gn(r.bottom, t.bottom), t.left = Hn(r.left, t.left), t
                    }), tr(e, i));
                return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a
            }

            function rr(e) {
                return Object.assign({}, {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }, e)
            }

            function or(e, t) {
                return t.reduce((function(t, n) {
                    return t[n] = e, t
                }), {})
            }

            function ir(e, t) {
                void 0 === t && (t = {});
                var n = t,
                    r = n.placement,
                    o = void 0 === r ? e.placement : r,
                    i = n.boundary,
                    a = void 0 === i ? "clippingParents" : i,
                    c = n.rootBoundary,
                    u = void 0 === c ? Sn : c,
                    s = n.elementContext,
                    f = void 0 === s ? Dn : s,
                    l = n.altBoundary,
                    d = void 0 !== l && l,
                    p = n.padding,
                    h = void 0 === p ? 0 : p,
                    v = rr("number" !== typeof h ? h : or(h, kn)),
                    m = f === Dn ? "reference" : Dn,
                    b = e.elements.reference,
                    g = e.rects.popper,
                    y = e.elements[d ? m : f],
                    O = nr(nn(y) ? y : y.contextElement || cn(e.elements.popper), a, u),
                    w = $t(b),
                    j = qn({
                        reference: w,
                        element: g,
                        strategy: "absolute",
                        placement: o
                    }),
                    x = er(Object.assign({}, g, j)),
                    k = f === Dn ? x : w,
                    E = {
                        top: O.top - k.top + v.top,
                        bottom: k.bottom - O.bottom + v.bottom,
                        left: O.left - k.left + v.left,
                        right: k.right - O.right + v.right
                    },
                    P = e.modifiersData.offset;
                if (f === Dn && P) {
                    var S = P[o];
                    Object.keys(E).forEach((function(e) {
                        var t = [wn, On].indexOf(e) >= 0 ? 1 : -1,
                            n = [yn, On].indexOf(e) >= 0 ? "y" : "x";
                        E[e] += S[n] * t
                    }))
                }
                return E
            }

            function ar(e, t, n) {
                return Hn(e, Gn(t, n))
            }

            function cr(e, t, n) {
                return void 0 === n && (n = {
                    x: 0,
                    y: 0
                }), {
                    top: e.top - t.height - n.y,
                    right: e.right - t.width + n.x,
                    bottom: e.bottom - t.height + n.y,
                    left: e.left - t.width - n.x
                }
            }

            function ur(e) {
                return [yn, wn, On, jn].some((function(t) {
                    return e[t] >= 0
                }))
            }
            var sr = Rn({
                    defaultModifiers: [Wn, Un, {
                        name: "computeStyles",
                        enabled: !0,
                        phase: "beforeWrite",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = n.gpuAcceleration,
                                o = void 0 === r || r,
                                i = n.adaptive,
                                a = void 0 === i || i,
                                c = n.roundOffsets,
                                u = void 0 === c || c,
                                s = {
                                    placement: Fn(t.placement),
                                    popper: t.elements.popper,
                                    popperRect: t.rects.popper,
                                    gpuAcceleration: o
                                };
                            null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, Yn(Object.assign({}, s, {
                                offsets: t.modifiersData.popperOffsets,
                                position: t.options.strategy,
                                adaptive: a,
                                roundOffsets: u
                            })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, Yn(Object.assign({}, s, {
                                offsets: t.modifiersData.arrow,
                                position: "absolute",
                                adaptive: !1,
                                roundOffsets: u
                            })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-placement": t.placement
                            })
                        },
                        data: {}
                    }, {
                        name: "applyStyles",
                        enabled: !0,
                        phase: "write",
                        fn: function(e) {
                            var t = e.state;
                            Object.keys(t.elements).forEach((function(e) {
                                var n = t.styles[e] || {},
                                    r = t.attributes[e] || {},
                                    o = t.elements[e];
                                rn(o) && an(o) && (Object.assign(o.style, n), Object.keys(r).forEach((function(e) {
                                    var t = r[e];
                                    !1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
                                })))
                            }))
                        },
                        effect: function(e) {
                            var t = e.state,
                                n = {
                                    popper: {
                                        position: t.options.strategy,
                                        left: "0",
                                        top: "0",
                                        margin: "0"
                                    },
                                    arrow: {
                                        position: "absolute"
                                    },
                                    reference: {}
                                };
                            return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                                function() {
                                    Object.keys(t.elements).forEach((function(e) {
                                        var r = t.elements[e],
                                            o = t.attributes[e] || {},
                                            i = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
                                                return e[t] = "", e
                                            }), {});
                                        rn(r) && an(r) && (Object.assign(r.style, i), Object.keys(o).forEach((function(e) {
                                            r.removeAttribute(e)
                                        })))
                                    }))
                                }
                        },
                        requires: ["computeStyles"]
                    }, {
                        name: "offset",
                        enabled: !0,
                        phase: "main",
                        requires: ["popperOffsets"],
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = e.name,
                                o = n.offset,
                                i = void 0 === o ? [0, 0] : o,
                                a = In.reduce((function(e, n) {
                                    return e[n] = function(e, t, n) {
                                        var r = Fn(e),
                                            o = [jn, yn].indexOf(r) >= 0 ? -1 : 1,
                                            i = "function" === typeof n ? n(Object.assign({}, t, {
                                                placement: e
                                            })) : n,
                                            a = i[0],
                                            c = i[1];
                                        return a = a || 0, c = (c || 0) * o, [jn, wn].indexOf(r) >= 0 ? {
                                            x: c,
                                            y: a
                                        } : {
                                            x: a,
                                            y: c
                                        }
                                    }(n, t.rects, i), e
                                }), {}),
                                c = a[t.placement],
                                u = c.x,
                                s = c.y;
                            null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += s), t.modifiersData[r] = a
                        }
                    }, {
                        name: "flip",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = e.name;
                            if (!t.modifiersData[r]._skip) {
                                for (var o = n.mainAxis, i = void 0 === o || o, a = n.altAxis, c = void 0 === a || a, u = n.fallbackPlacements, s = n.padding, f = n.boundary, l = n.rootBoundary, d = n.altBoundary, p = n.flipVariations, h = void 0 === p || p, v = n.allowedAutoPlacements, m = t.options.placement, b = Fn(m), g = u || (b === m || !h ? [Kn(m)] : function(e) {
                                        if (Fn(e) === xn) return [];
                                        var t = Kn(e);
                                        return [Qn(e), t, Qn(t)]
                                    }(m)), y = [m].concat(g).reduce((function(e, n) {
                                        return e.concat(Fn(n) === xn ? function(e, t) {
                                            void 0 === t && (t = {});
                                            var n = t,
                                                r = n.placement,
                                                o = n.boundary,
                                                i = n.rootBoundary,
                                                a = n.padding,
                                                c = n.flipVariations,
                                                u = n.allowedAutoPlacements,
                                                s = void 0 === u ? In : u,
                                                f = _n(r),
                                                l = f ? c ? Cn : Cn.filter((function(e) {
                                                    return _n(e) === f
                                                })) : kn,
                                                d = l.filter((function(e) {
                                                    return s.indexOf(e) >= 0
                                                }));
                                            0 === d.length && (d = l);
                                            var p = d.reduce((function(t, n) {
                                                return t[n] = ir(e, {
                                                    placement: n,
                                                    boundary: o,
                                                    rootBoundary: i,
                                                    padding: a
                                                })[Fn(n)], t
                                            }), {});
                                            return Object.keys(p).sort((function(e, t) {
                                                return p[e] - p[t]
                                            }))
                                        }(t, {
                                            placement: n,
                                            boundary: f,
                                            rootBoundary: l,
                                            padding: s,
                                            flipVariations: h,
                                            allowedAutoPlacements: v
                                        }) : n)
                                    }), []), O = t.rects.reference, w = t.rects.popper, j = new Map, x = !0, k = y[0], E = 0; E < y.length; E++) {
                                    var P = y[E],
                                        S = Fn(P),
                                        D = _n(P) === En,
                                        C = [yn, On].indexOf(S) >= 0,
                                        I = C ? "width" : "height",
                                        M = ir(t, {
                                            placement: P,
                                            boundary: f,
                                            rootBoundary: l,
                                            altBoundary: d,
                                            padding: s
                                        }),
                                        L = C ? D ? wn : jn : D ? On : yn;
                                    O[I] > w[I] && (L = Kn(L));
                                    var A = Kn(L),
                                        N = [];
                                    if (i && N.push(M[S] <= 0), c && N.push(M[L] <= 0, M[A] <= 0), N.every((function(e) {
                                            return e
                                        }))) {
                                        k = P, x = !1;
                                        break
                                    }
                                    j.set(P, N)
                                }
                                if (x)
                                    for (var T = function(e) {
                                            var t = y.find((function(t) {
                                                var n = j.get(t);
                                                if (n) return n.slice(0, e).every((function(e) {
                                                    return e
                                                }))
                                            }));
                                            if (t) return k = t, "break"
                                        }, R = h ? 3 : 1; R > 0; R--) {
                                        if ("break" === T(R)) break
                                    }
                                t.placement !== k && (t.modifiersData[r]._skip = !0, t.placement = k, t.reset = !0)
                            }
                        },
                        requiresIfExists: ["offset"],
                        data: {
                            _skip: !1
                        }
                    }, {
                        name: "preventOverflow",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = e.name,
                                o = n.mainAxis,
                                i = void 0 === o || o,
                                a = n.altAxis,
                                c = void 0 !== a && a,
                                u = n.boundary,
                                s = n.rootBoundary,
                                f = n.altBoundary,
                                l = n.padding,
                                d = n.tether,
                                p = void 0 === d || d,
                                h = n.tetherOffset,
                                v = void 0 === h ? 0 : h,
                                m = ir(t, {
                                    boundary: u,
                                    rootBoundary: s,
                                    padding: l,
                                    altBoundary: f
                                }),
                                b = Fn(t.placement),
                                g = _n(t.placement),
                                y = !g,
                                O = zn(b),
                                w = "x" === O ? "y" : "x",
                                j = t.modifiersData.popperOffsets,
                                x = t.rects.reference,
                                k = t.rects.popper,
                                E = "function" === typeof v ? v(Object.assign({}, t.rects, {
                                    placement: t.placement
                                })) : v,
                                P = {
                                    x: 0,
                                    y: 0
                                };
                            if (j) {
                                if (i || c) {
                                    var S = "y" === O ? yn : jn,
                                        D = "y" === O ? On : wn,
                                        C = "y" === O ? "height" : "width",
                                        I = j[O],
                                        M = j[O] + m[S],
                                        L = j[O] - m[D],
                                        A = p ? -k[C] / 2 : 0,
                                        N = g === En ? x[C] : k[C],
                                        T = g === En ? -k[C] : -x[C],
                                        R = t.elements.arrow,
                                        B = p && R ? dn(R) : {
                                            width: 0,
                                            height: 0
                                        },
                                        W = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                                            top: 0,
                                            right: 0,
                                            bottom: 0,
                                            left: 0
                                        },
                                        F = W[S],
                                        _ = W[D],
                                        z = ar(0, x[C], B[C]),
                                        q = y ? x[C] / 2 - A - z - F - E : N - z - F - E,
                                        U = y ? -x[C] / 2 + A + z + _ + E : T + z + _ + E,
                                        H = t.elements.arrow && gn(t.elements.arrow),
                                        G = H ? "y" === O ? H.clientTop || 0 : H.clientLeft || 0 : 0,
                                        V = t.modifiersData.offset ? t.modifiersData.offset[t.placement][O] : 0,
                                        X = j[O] + q - V - G,
                                        Y = j[O] + U - V;
                                    if (i) {
                                        var Z = ar(p ? Gn(M, X) : M, I, p ? Hn(L, Y) : L);
                                        j[O] = Z, P[O] = Z - I
                                    }
                                    if (c) {
                                        var K = "x" === O ? yn : jn,
                                            J = "x" === O ? On : wn,
                                            Q = j[w],
                                            $ = Q + m[K],
                                            ee = Q - m[J],
                                            te = ar(p ? Gn($, X) : $, Q, p ? Hn(ee, Y) : ee);
                                        j[w] = te, P[w] = te - Q
                                    }
                                }
                                t.modifiersData[r] = P
                            }
                        },
                        requiresIfExists: ["offset"]
                    }, {
                        name: "arrow",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t, n = e.state,
                                r = e.name,
                                o = n.elements.arrow,
                                i = n.modifiersData.popperOffsets,
                                a = Fn(n.placement),
                                c = zn(a),
                                u = [jn, wn].indexOf(a) >= 0 ? "height" : "width";
                            if (o && i) {
                                var s = n.modifiersData[r + "#persistent"].padding,
                                    f = dn(o),
                                    l = "y" === c ? yn : jn,
                                    d = "y" === c ? On : wn,
                                    p = n.rects.reference[u] + n.rects.reference[c] - i[c] - n.rects.popper[u],
                                    h = i[c] - n.rects.reference[c],
                                    v = gn(o),
                                    m = v ? "y" === c ? v.clientHeight || 0 : v.clientWidth || 0 : 0,
                                    b = p / 2 - h / 2,
                                    g = s[l],
                                    y = m - f[u] - s[d],
                                    O = m / 2 - f[u] / 2 + b,
                                    w = ar(g, O, y),
                                    j = c;
                                n.modifiersData[r] = ((t = {})[j] = w, t.centerOffset = w - O, t)
                            }
                        },
                        effect: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = e.name,
                                o = n.element,
                                i = void 0 === o ? "[data-popper-arrow]" : o,
                                a = n.padding,
                                c = void 0 === a ? 0 : a;
                            null != i && ("string" !== typeof i || (i = t.elements.popper.querySelector(i))) && $n(t.elements.popper, i) && (c = "function" === typeof c ? c(Object.assign({}, t.rects, {
                                placement: t.placement
                            })) : c, t.elements.arrow = i, t.modifiersData[r + "#persistent"] = {
                                padding: rr("number" !== typeof c ? c : or(c, kn))
                            })
                        },
                        requires: ["popperOffsets"],
                        requiresIfExists: ["preventOverflow"]
                    }, {
                        name: "hide",
                        enabled: !0,
                        phase: "main",
                        requiresIfExists: ["preventOverflow"],
                        fn: function(e) {
                            var t = e.state,
                                n = e.name,
                                r = t.rects.reference,
                                o = t.rects.popper,
                                i = t.modifiersData.preventOverflow,
                                a = ir(t, {
                                    elementContext: "reference"
                                }),
                                c = ir(t, {
                                    altBoundary: !0
                                }),
                                u = cr(a, r),
                                s = cr(c, o, i),
                                f = ur(u),
                                l = ur(s);
                            t.modifiersData[n] = {
                                referenceClippingOffsets: u,
                                popperEscapeOffsets: s,
                                isReferenceHidden: f,
                                hasPopperEscaped: l
                            }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-reference-hidden": f,
                                "data-popper-escaped": l
                            })
                        }
                    }]
                }),
                fr = n("+tY/");

            function lr(e) {
                var t = e.popover,
                    n = Object(Tt.a)(Qt.a),
                    o = Object(y.useRef)(null);
                return Object(y.useLayoutEffect)((function() {
                    var e = o.current;
                    if (e) {
                        var n = sr(t.anchor, e, {
                            placement: t.placement,
                            modifiers: [{
                                name: "offset",
                                options: {
                                    offset: [0, 8]
                                }
                            }]
                        });
                        return function() {
                            n.destroy()
                        }
                    }
                })), Object(r.jsx)(fr.b, {
                    value: t,
                    children: Object(r.jsx)(At, {
                        ref: o,
                        shards: t.shards,
                        onClickOutside: function() {
                            return n.dismiss(t.name)
                        },
                        onEscapeKey: function() {
                            return n.dismiss(t.name)
                        },
                        children: t.render()
                    })
                })
            }
            var dr = w.d.div.withConfig({
                componentId: "sc-1ru3l2d-0"
            })(["& > *{z-index:", ";}"], Nt.c);

            function pr() {
                var e = Object(Tt.a)(Qt.a);
                return Object(m.b)((function() {
                    return Object(r.jsx)(dr, {
                        children: e.popovers.map((function(e) {
                            return Object(r.jsx)(lr, {
                                popover: e
                            }, e.name)
                        }))
                    })
                }))
            }
            n("yq1k"), n("T63A"), n("tkto"), n("JTJg");
            var hr, vr, mr, br = n("xvhg"),
                gr = n("adZo"),
                yr = {
                    color: "dark",
                    display: "cozy",
                    fontSize: 16,
                    confirmExit: !1,
                    expandSections: !1
                };

            function Or(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function wr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Or(Object(n), !0).forEach((function(t) {
                        Object(o.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Or(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var jr = (hr = v.computed.struct, vr = function() {
                    function e() {
                        Object(i.a)(this, e), Object(j.a)(this, "settings", mr, this)
                    }
                    return Object(a.a)(e, [{
                        key: "load",
                        value: function() {
                            for (var e, t = this.settings, n = JSON.parse(null !== (e = localStorage.getItem("settings")) && void 0 !== e ? e : "{}"), r = 0, o = Object.entries(n); r < o.length; r++) {
                                var i = Object(br.a)(o[r], 2),
                                    a = i[0],
                                    c = i[1];
                                Object.keys(t).includes(a) && (t[a] = c)
                            }
                        }
                    }, {
                        key: "dump",
                        value: function() {
                            var e = JSON.stringify(this.settings);
                            localStorage.setItem("settings", e)
                        }
                    }, {
                        key: "theme",
                        get: function() {
                            var e = this.settings,
                                t = e.color,
                                n = e.display,
                                r = e.fontSize;
                            return wr(wr({}, gr.b[t]), {}, {
                                appearance: {
                                    color: t,
                                    display: n,
                                    fontSize: r
                                }
                            })
                        }
                    }]), e
                }(), mr = Object(x.a)(vr.prototype, "settings", [v.observable], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return wr({}, yr)
                    }
                }), Object(x.a)(vr.prototype, "theme", [hr], Object.getOwnPropertyDescriptor(vr.prototype, "theme"), vr.prototype), vr),
                xr = n("Lu/x");
            n("mRH6");

            function kr() {
                var e, t, n = (e = ["", ""], t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                })));
                return kr = function() {
                    return n
                }, n
            }
            var Er, Pr, Sr = Object(w.b)(kr(), Object(w.c)(["", ";html,body{padding:0;margin:0;background:", ";line-height:1;color:", ";font-family:", ";font-size:", "px;text-rendering:optimizeLegibility;text-size-adjust:100%;height:100%;overflow:hidden;}button,input,textarea{font-family:inherit;}#app,#__next{height:100%;}pre,code{font-family:", ";}a{color:", ";text-decoration:none;&:hover{text-decoration:underline;}}img{text-indent:100%;white-space:nowrap;overflow:hidden;}*{box-sizing:border-box;-webkit-tap-highlight-color:transparent;scrollbar-color:", ";scrollbar-width:auto;&::-webkit-scrollbar{", ";}&::-webkit-scroll-corner{background-color:transparent;}&::-webkit-scrollbar-thumb{background-color:", ";border:4px solid transparent;border-radius:8px;min-height:40px;background-clip:padding-box;}&::-webkit-scrollbar-track{background-color:", ";border:4px solid transparent;border-radius:8px;margin-bottom:8px;background-clip:padding-box;}&::-webkit-scrollbar-corner{background-color:transparent;}&::-webkit-resizer{background-image:", ";background-repeat:no-repeat;background-position:bottom right;}}"], [300, 400, 500, 600, 700].map((function(e) {
                return Object(I.d)({
                    fontFamily: "Whitney",
                    fontStyle: "normal",
                    fontWeight: String(e),
                    fontFilePath: "/static/whitney-".concat(e),
                    fileFormats: ["woff2", "woff"],
                    fontDisplay: "swap"
                })
            })), (function(e) {
                return e.theme.background.primary
            }), (function(e) {
                return e.theme.text.normal
            }), (function(e) {
                return e.theme.font.sans
            }), (function(e) {
                return e.theme.appearance.fontSize
            }), (function(e) {
                return e.theme.font.mono
            }), (function(e) {
                return e.theme.text.link
            }), (function(e) {
                var t = e.theme;
                return "".concat(t.scrollbar.auto.thumb, " ").concat(t.scrollbar.auto.track)
            }), Object(I.i)(16), (function(e) {
                return e.theme.scrollbar.auto.thumb
            }), (function(e) {
                return e.theme.scrollbar.auto.track
            }), (function(e) {
                var t = e.theme;
                return 'url("/static/resizer-'.concat(t.appearance.color, '.svg")')
            })));
            n("x0AG");

            function Dr(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Cr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Dr(Object(n), !0).forEach((function(t) {
                        Object(o.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Dr(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Ir = (Er = function() {
                    function e() {
                        Object(i.a)(this, e), Object(j.a)(this, "tooltips", Pr, this)
                    }
                    return Object(a.a)(e, [{
                        key: "add",
                        value: function(e) {
                            var t = this,
                                n = Object(k.a)();
                            return this.tooltips.push(Cr(Cr({}, e), {}, {
                                    id: n
                                })),
                                function() {
                                    var e = t.tooltips.findIndex((function(e) {
                                        return e.id === n
                                    }));
                                    e >= 0 && t.tooltips.splice(e, 1)
                                }
                        }
                    }]), e
                }(), Pr = Object(x.a)(Er.prototype, "tooltips", [v.observable], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return []
                    }
                }), Object(x.a)(Er.prototype, "add", [v.action], Object.getOwnPropertyDescriptor(Er.prototype, "add"), Er.prototype), Er),
                Mr = n("srCQ"),
                Lr = (n("qePV"), n("Mka9")),
                Ar = n("ZUW4"),
                Nr = Object(w.d)(D.animated.div).withConfig({
                    componentId: "sc-1q1pha4-0"
                })(["padding:8px 11px;background:", ";border-radius:4px;font-size:15px;font-weight:500;color:", ";box-shadow:", ";transform-origin:bottom;"], Object(I.g)(0, 0, 0), Object(I.g)(255, 255, 255), (function(e) {
                    return e.theme.elavation.high
                })),
                Tr = w.d.div.withConfig({
                    componentId: "sc-1q1pha4-1"
                })(["&,&::before{", ' position:absolute;z-index:-1;}&::before{content:"";transform:rotate(45deg);background:', ";}"], Object(I.i)(10), Object(I.g)(0, 0, 0));

            function Rr(e) {
                var t = e.tooltip,
                    n = Object(y.useRef)(null),
                    o = Object(y.useRef)(null);
                Object(Ar.a)((function() {
                    var e = n.current,
                        r = o.current;
                    if (e && r) {
                        var i = sr(t.anchor, e, {
                            placement: "top",
                            modifiers: [{
                                name: "offset",
                                options: {
                                    offset: [0, 4]
                                }
                            }, {
                                name: "arrow",
                                options: {
                                    element: r
                                }
                            }]
                        });
                        return function() {
                            i.destroy()
                        }
                    }
                }));
                var i = Object(y.useState)(!1),
                    a = i[0],
                    c = i[1],
                    u = Object(C.useTransition)(a, {
                        key: Number(a),
                        config: {
                            friction: 20,
                            tension: 400,
                            clamp: !0
                        },
                        from: {
                            opacity: 0,
                            scale: .9
                        },
                        enter: {
                            opacity: 1,
                            scale: 1
                        },
                        leave: {
                            opacity: 0,
                            scale: .9
                        }
                    }),
                    s = function() {
                        return c(!0)
                    },
                    f = function() {
                        return c(!1)
                    };
                return Object(Lr.a)((function() {
                    return t.anchor.addEventListener("mouseenter", s), t.anchor.addEventListener("mouseleave", f),
                        function() {
                            t.anchor.removeEventListener("mouseenter", s), t.anchor.removeEventListener("mouseleave", f)
                        }
                })), u((function(e, i) {
                    return i && Object(r.jsx)("div", {
                        ref: n,
                        style: {
                            pointerEvents: "none",
                            position: "absolute"
                        },
                        children: Object(r.jsxs)(Nr, {
                            style: e,
                            children: [t.content, Object(r.jsx)(Tr, {
                                ref: o
                            })]
                        })
                    })
                }))
            }
            var Br = w.d.div.withConfig({
                componentId: "den5bi-0"
            })(["& > *{z-index:", ";}"], Nt.d);

            function Wr() {
                var e = Object(Tt.a)(Mr.a);
                return Object(m.b)((function() {
                    return Object(r.jsx)(Br, {
                        children: e.tooltips.map((function(e) {
                            return Object(r.jsx)(Rr, {
                                tooltip: e
                            }, e.id)
                        }))
                    })
                }))
            }

            function Fr(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function _r(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Fr(Object(n), !0).forEach((function(t) {
                        Object(o.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Fr(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function zr(e, t) {
                var n;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return qr(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return qr(e, t)
                        }(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, a = !0,
                    c = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = n.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        c = !0, i = e
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (c) throw i
                        }
                    }
                }
            }

            function qr(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Ur(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = l(e);
                    if (t) {
                        var o = l(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return f(this, n)
                }
            }
            var Hr = function(e) {
                u(n, e);
                var t = Ur(n);

                function n(e) {
                    var r;
                    return Object(i.a)(this, n), (r = t.call(this, e)).preferenceManager = new jr, r.modalManager = new P, r.popoverManager = new Jt, r.tooltipManager = new Ir, r.disposers = [], r
                }
                return Object(a.a)(n, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        this.preferenceManager.load(), this.disposers.push(Object(v.autorun)((function() {
                            return e.preferenceManager.dump()
                        }), {
                            delay: 500
                        }))
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        var e, t = zr(this.disposers);
                        try {
                            for (t.s(); !(e = t.n()).done;) {
                                (0, e.value)()
                            }
                        } catch (Gr) {
                            t.e(Gr)
                        } finally {
                            t.f()
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props,
                            n = t.Component,
                            o = t.pageProps;
                        return Object(r.jsx)(m.a, {
                            children: function() {
                                return Object(r.jsxs)(w.a, {
                                    theme: e.preferenceManager.theme,
                                    children: [Object(r.jsx)(Sr, {}), Object(r.jsx)(Yt, {
                                        children: Object(r.jsx)(xr.b, {
                                            value: e.preferenceManager,
                                            children: Object(r.jsx)(S.b, {
                                                value: e.modalManager,
                                                children: Object(r.jsx)(Qt.b, {
                                                    value: e.popoverManager,
                                                    children: Object(r.jsxs)(Mr.b, {
                                                        value: e.tooltipManager,
                                                        children: [Object(r.jsx)(n, _r({}, o)), Object(r.jsx)(qt, {}), Object(r.jsx)(pr, {}), Object(r.jsx)(Wr, {})]
                                                    })
                                                })
                                            })
                                        })
                                    })]
                                })
                            }
                        })
                    }
                }]), n
            }(g.a)
        },
        pDQq: function(e, t, n) {
            "use strict";
            var r = n("I+eb"),
                o = n("I8vh"),
                i = n("ppGB"),
                a = n("UMSQ"),
                c = n("ewvW"),
                u = n("ZfDv"),
                s = n("hBjN"),
                f = n("Hd5f")("splice"),
                l = Math.max,
                d = Math.min,
                p = 9007199254740991,
                h = "Maximum allowed length exceeded";
            r({
                target: "Array",
                proto: !0,
                forced: !f
            }, {
                splice: function(e, t) {
                    var n, r, f, v, m, b, g = c(this),
                        y = a(g.length),
                        O = o(e, y),
                        w = arguments.length;
                    if (0 === w ? n = r = 0 : 1 === w ? (n = 0, r = y - O) : (n = w - 2, r = d(l(i(t), 0), y - O)), y + n - r > p) throw TypeError(h);
                    for (f = u(g, r), v = 0; v < r; v++)(m = O + v) in g && s(f, v, g[m]);
                    if (f.length = r, n < r) {
                        for (v = O; v < y - r; v++) b = v + n, (m = v + r) in g ? g[b] = g[m] : delete g[b];
                        for (v = y; v > y - r + n; v--) delete g[v - 1]
                    } else if (n > r)
                        for (v = y - r; v > O; v--) b = v + n - 1, (m = v + r - 1) in g ? g[b] = g[m] : delete g[b];
                    for (v = 0; v < n; v++) g[v + O] = arguments[v + 2];
                    return g.length = y - r + n, f
                }
            })
        },
        pome: function(e, t, n) {},
        tkto: function(e, t, n) {
            var r = n("I+eb"),
                o = n("ewvW"),
                i = n("33Wh");
            r({
                target: "Object",
                stat: !0,
                forced: n("0Dky")((function() {
                    i(1)
                }))
            }, {
                keys: function(e) {
                    return i(o(e))
                }
            })
        },
        x0AG: function(e, t, n) {
            "use strict";
            var r = n("I+eb"),
                o = n("tycR").findIndex,
                i = n("RNIs"),
                a = "findIndex",
                c = !0;
            a in [] && Array(1).findIndex((function() {
                c = !1
            })), r({
                target: "Array",
                proto: !0,
                forced: c
            }, {
                findIndex: function(e) {
                    return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
                }
            }), i(a)
        },
        y25k: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return O
            }));
            n("ma9I"), n("4mDm"), n("Tskq"), n("07d7"), n("rB9j"), n("PKPk"), n("UxlC"), n("3bBZ");
            var r = n("nKUr"),
                o = n("g4pe"),
                i = n.n(o),
                a = n("YFqc"),
                c = n.n(a),
                u = n("20a2"),
                s = n.n(u),
                f = (n("q1tI"), n("vOnD")),
                l = n("pWTd"),
                d = n("GyG+"),
                p = n("JrLk"),
                h = n("B4ld"),
                v = f.d.div.withConfig({
                    componentId: "sc-1ewc626-0"
                })(["height:100%;overflow:auto;padding:64px 32px 0;", "{padding:32px 16px;}"], h.b),
                m = f.d.h1.withConfig({
                    componentId: "sc-1ewc626-1"
                })(["margin:0;color:", ";font-size:28px;"], (function(e) {
                    return e.theme.header.primary
                })),
                b = f.d.p.withConfig({
                    componentId: "sc-1ewc626-2"
                })(["margin:16px 0;max-width:600px;font-size:16px;line-height:1.375;"]),
                g = Object(f.d)(l.a).withConfig({
                    componentId: "sc-1ewc626-3"
                })(["max-width:1200px;margin-bottom:32px;"]),
                y = new Map([
                    [400, "Bad request"],
                    [403, "Forbidden"],
                    [404, "Page not found"],
                    [405, "Method not allowed"],
                    [500, "Internal server error"]
                ]);

            function O(e) {
                var t, n = e.error,
                    o = e.info,
                    a = e.title,
                    u = e.statusCode,
                    f = null !== a && void 0 !== a ? a : u && y.has(u) ? "Error ".concat(u, ": ").concat(y.get(u)) : "An unexpected error has occurred";
                return Object(r.jsxs)(v, {
                    children: [Object(r.jsx)(i.a, {
                        children: Object(r.jsx)("title", {
                            children: f
                        }, "title")
                    }), Object(r.jsx)(m, {
                        children: f
                    }), Object(r.jsxs)(b, {
                        children: ["If you didn't expect this, please report it on the", " ", Object(r.jsx)("a", {
                            href: "/discord",
                            target: "blank",
                            rel: "noopener",
                            children: "Server Hỗ Trợ"
                        }), ", or create an issue on the", " ", Object(r.jsx)("a", {
                            href: "https://github.com/discohook/site",
                            target: "blank",
                            rel: "noopener",
                            children: "GitHub repository"
                        }), "."]
                    }), u ? Object(r.jsx)(c.a, {
                        href: "/",
                        children: Object(r.jsx)(p.a, {
                            children: "Home"
                        })
                    }) : Object(r.jsx)(d.a, {
                        onClick: function() {
                            return s.a.reload()
                        },
                        children: "Refresh"
                    }), n && o && Object(r.jsxs)(r.Fragment, {
                        children: [Object(r.jsx)(b, {
                            children: "Technical details are provided below (please forward this)"
                        }), Object(r.jsxs)(g, {
                            children: [String(n), "\n", null === (t = n.stack) || void 0 === t ? void 0 : t.replace(String(n), "").replace(/^\n|\n$/g, ""), o.componentStack]
                        })]
                    })]
                })
            }
        }
    },
    [
        [0, 1, 2, 3, 0, 4]
    ]
]);
//# sourceMappingURL=_app-62f24fbf0ae7db995ad4.js.map