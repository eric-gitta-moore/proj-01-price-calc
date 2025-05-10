var e, t, i, o, n, r, a, s, l, c, u, d, p, f, h, m, y, g;
import {u as v, g as b, s as w, a as S, n as C, r as x, b as k, c as _, d as $, e as T, $ as P, o as I, f as F, w as z, h as O, i as j, j as A, t as N, k as D, l as B, m as E, p as M, q as R, v as L, x as V, y as U, z as H, I as W, A as Z, F as q, B as G, C as J, D as X, P as Y, E as K, G as Q, H as ee, J as te, K as ie, L as oe, M as ne, N as re, O as ae, Q as se} from "./index-tVeulKPs.js";
const le = {};
function ce(e) {
    return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(e)
}
function ue(e) {
    switch (typeof e) {
    case "undefined":
        return !0;
    case "string":
        if (0 == e.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length)
            return !0;
        break;
    case "boolean":
        if (!e)
            return !0;
        break;
    case "number":
        if (0 === e || isNaN(e))
            return !0;
        break;
    case "object":
        if (null === e || 0 === e.length)
            return !0;
        for (const t in e)
            return !1;
        return !0
    }
    return !1
}
function de(e) {
    return "function" == typeof Array.isArray ? Array.isArray(e) : "[object Array]" === Object.prototype.toString.call(e)
}
function pe(e) {
    return "[object Object]" === Object.prototype.toString.call(e)
}
function fe(e) {
    return "function" == typeof e
}
const he = Object.freeze(Object.defineProperty({
    __proto__: null,
    amount: function(e) {
        return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(e)
    },
    array: de,
    carNo: function(e) {
        const t = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/
          , i = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
        return 7 === e.length ? i.test(e) : 8 === e.length && t.test(e)
    },
    chinese: function(e) {
        return /^[\u4e00-\u9fa5]+$/gi.test(e)
    },
    code: function(e, t=6) {
        return new RegExp(`^\\d{${t}}$`).test(e)
    },
    contains: function(e, t) {
        return e.indexOf(t) >= 0
    },
    date: function(e) {
        return !!e && (ce(e) && (e = +e),
        !/Invalid|NaN/.test(new Date(e).toString()))
    },
    dateISO: function(e) {
        return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
    },
    digits: function(e) {
        return /^\d+$/.test(e)
    },
    email: function(e) {
        return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(e)
    },
    empty: ue,
    enOrNum: function(e) {
        return /^[0-9a-zA-Z]*$/g.test(e)
    },
    func: fe,
    idCard: function(e) {
        return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(e)
    },
    image: function(e) {
        const t = e.split("?")[0];
        return /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i.test(t)
    },
    jsonString: function(e) {
        if ("string" == typeof e)
            try {
                const t = JSON.parse(e);
                return !("object" != typeof t || !t)
            } catch (t) {
                return !1
            }
        return !1
    },
    landline: function(e) {
        return /^\d{3,4}-\d{7,8}(-\d{3,4})?$/.test(e)
    },
    letter: function(e) {
        return /^[a-zA-Z]*$/.test(e)
    },
    mobile: function(e) {
        return /^1([3589]\d|4[5-9]|6[1-2,4-7]|7[0-8])\d{8}$/.test(e)
    },
    number: ce,
    object: pe,
    promise: function(e) {
        return pe(e) && fe(e.then) && fe(e.catch)
    },
    range: function(e, t) {
        return e >= t[0] && e <= t[1]
    },
    rangeLength: function(e, t) {
        return e.length >= t[0] && e.length <= t[1]
    },
    regExp: function(e) {
        return e && "[object RegExp]" === Object.prototype.toString.call(e)
    },
    string: function(e) {
        return "string" == typeof e
    },
    url: function(e) {
        return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(e)
    },
    video: function(e) {
        return /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i.test(e)
    }
}, Symbol.toStringTag, {
    value: "Module"
}));
function me(e, t=15) {
    return +parseFloat(Number(e).toPrecision(t))
}
function ye(e) {
    const t = e.toString().split(/[eE]/)
      , i = (t[0].split(".")[1] || "").length - +(t[1] || 0);
    return i > 0 ? i : 0
}
function ge(e) {
    if (-1 === e.toString().indexOf("e"))
        return Number(e.toString().replace(".", ""));
    const t = ye(e);
    return t > 0 ? me(Number(e) * Math.pow(10, t)) : Number(e)
}
function ve(e) {
    (e > Number.MAX_SAFE_INTEGER || e < Number.MIN_SAFE_INTEGER) && console.warn(`${e} 超出了精度限制，结果可能不正确`)
}
function be(e, t) {
    const [i,o,...n] = e;
    let r = t(i, o);
    return n.forEach((e => {
        r = t(r, e)
    }
    )),
    r
}
function we(...e) {
    if (e.length > 2)
        return be(e, we);
    const [t,i] = e
      , o = ge(t)
      , n = ge(i)
      , r = ye(t) + ye(i)
      , a = o * n;
    return ve(a),
    a / Math.pow(10, r)
}
function Se(...e) {
    if (e.length > 2)
        return be(e, Se);
    const [t,i] = e
      , o = ge(t)
      , n = ge(i);
    return ve(o),
    ve(n),
    we(o / n, me(Math.pow(10, ye(i) - ye(t))))
}
function Ce(e) {
    let t = this.$parent;
    for (; t; ) {
        if (!t.$options || t.$options.name === e)
            return t;
        t = t.$parent
    }
    return !1
}
function xe(e, t=new WeakMap) {
    if (null === e || "object" != typeof e)
        return e;
    if (t.has(e))
        return t.get(e);
    let i;
    if (e instanceof Date)
        i = new Date(e.getTime());
    else if (e instanceof RegExp)
        i = new RegExp(e);
    else if (e instanceof Map)
        i = new Map(Array.from(e, ( ([e,i]) => [e, xe(i, t)])));
    else if (e instanceof Set)
        i = new Set(Array.from(e, (e => xe(e, t))));
    else if (Array.isArray(e))
        i = e.map((e => xe(e, t)));
    else if ("[object Object]" === Object.prototype.toString.call(e)) {
        i = Object.create(Object.getPrototypeOf(e)),
        t.set(e, i);
        for (const [o,n] of Object.entries(e))
            i[o] = xe(n, t)
    } else
        i = Object.assign({}, e);
    return t.set(e, i),
    i
}
function ke(e={}, t={}) {
    if ("object" != typeof (e = xe(e)) || null === e || "object" != typeof t || null === t)
        return e;
    const i = Array.isArray(e) ? e.slice() : Object.assign({}, e);
    for (const o in t) {
        if (!t.hasOwnProperty(o))
            continue;
        const e = t[o]
          , n = i[o];
        e instanceof Date ? i[o] = new Date(e) : e instanceof RegExp ? i[o] = new RegExp(e) : e instanceof Map ? i[o] = new Map(e) : e instanceof Set ? i[o] = new Set(e) : i[o] = "object" == typeof e && null !== e ? ke(n, e) : e
    }
    return i
}
function _e(e=null, t="yyyy-mm-dd") {
    let i;
    i = e ? /^\d{10}$/.test(null == e ? void 0 : e.toString().trim()) ? new Date(1e3 * e) : "string" == typeof e && /^\d+$/.test(e.trim()) ? new Date(Number(e)) : "string" == typeof e && e.includes("-") && !e.includes("T") ? new Date(e.replace(/-/g, "/")) : new Date(e) : new Date;
    const o = {
        y: i.getFullYear().toString(),
        m: (i.getMonth() + 1).toString().padStart(2, "0"),
        d: i.getDate().toString().padStart(2, "0"),
        h: i.getHours().toString().padStart(2, "0"),
        M: i.getMinutes().toString().padStart(2, "0"),
        s: i.getSeconds().toString().padStart(2, "0")
    };
    for (const n in o) {
        const [e] = new RegExp(`${n}+`).exec(t) || [];
        if (e) {
            const i = "y" === n && 2 === e.length ? 2 : 0;
            t = t.replace(e, o[n].slice(i))
        }
    }
    return t
}
function $e(e, t="both") {
    return e = String(e),
    "both" == t ? e.replace(/^\s+|\s+$/g, "") : "left" == t ? e.replace(/^\s*/, "") : "right" == t ? e.replace(/(\s*$)/g, "") : "all" == t ? e.replace(/\s+/g, "") : e
}
function Te(e={}, t=!0, i="brackets") {
    const o = t ? "?" : ""
      , n = [];
    -1 == ["indices", "brackets", "repeat", "comma"].indexOf(i) && (i = "brackets");
    for (const r in e) {
        const t = e[r];
        if (!(["", void 0, null].indexOf(t) >= 0))
            if (t.constructor === Array)
                switch (i) {
                case "indices":
                    for (let i = 0; i < t.length; i++)
                        n.push(`${r}[${i}]=${t[i]}`);
                    break;
                case "brackets":
                default:
                    t.forEach((e => {
                        n.push(`${r}[]=${e}`)
                    }
                    ));
                    break;
                case "repeat":
                    t.forEach((e => {
                        n.push(`${r}=${e}`)
                    }
                    ));
                    break;
                case "comma":
                    let e = "";
                    t.forEach((t => {
                        e += (e ? "," : "") + t
                    }
                    )),
                    n.push(`${r}=${e}`)
                }
            else
                n.push(`${r}=${t}`)
    }
    return n.length ? o + n.join("&") : ""
}
function Pe() {
    var e;
    const t = S()
      , i = null == (e = t[t.length - 1]) ? void 0 : e.route;
    return `/${i || ""}`
}
String.prototype.padStart || (String.prototype.padStart = function(e, t=" ") {
    if ("[object String]" !== Object.prototype.toString.call(t))
        throw new TypeError("fillString must be String");
    const i = this;
    if (i.length >= e)
        return String(i);
    const o = e - i.length;
    let n = Math.ceil(o / t.length);
    for (; n >>= 1; )
        t += t,
        1 === n && (t += t);
    return t.slice(0, o) + i
}
);
const Ie = Object.freeze(Object.defineProperty({
    __proto__: null,
    $parent: Ce,
    addStyle: function(e, t="object") {
        if (ue(e) || "object" == typeof e && "object" === t || "string" === t && "string" == typeof e)
            return e;
        if ("object" === t) {
            const t = (e = $e(e)).split(";")
              , i = {};
            for (let e = 0; e < t.length; e++)
                if (t[e]) {
                    const o = t[e].split(":");
                    i[$e(o[0])] = $e(o[1])
                }
            return i
        }
        let i = "";
        for (const o in e) {
            i += `${o.replace(/([A-Z])/g, "-$1").toLowerCase()}:${e[o]};`
        }
        return $e(i)
    },
    addUnit: function(e="auto", t=((e => {
        return null == (e = null == (t = null == uni ? void 0 : uni.$uv) ? void 0 : t.config) ? void 0 : e.unit;
        var t
    }
    )() ? (e => {
        return null == (e = null == (t = null == uni ? void 0 : uni.$uv) ? void 0 : t.config) ? void 0 : e.unit;
        var t
    }
    )() : "px")) {
        return ce(e = String(e)) ? `${e}${t}` : e
    },
    deepClone: xe,
    deepMerge: ke,
    error: function(e) {},
    formValidate: function(e, t) {
        const i = Ce.call(e, "uv-form-item")
          , o = Ce.call(e, "uv-form");
        i && o && o.validateField(i.prop, ( () => {}
        ), t)
    },
    getDuration: function(e, t=!0) {
        const i = parseInt(e);
        return t ? /s$/.test(e) ? e : e > 30 ? `${e}ms` : `${e}s` : /ms$/.test(e) ? i : /s$/.test(e) ? i > 30 ? i : 1e3 * i : i
    },
    getHistoryPage: function(e=0) {
        const t = S();
        return t[t.length - 1 + e]
    },
    getProperty: function(e, t) {
        if (e) {
            if ("string" != typeof t || "" === t)
                return "";
            if (-1 !== t.indexOf(".")) {
                const i = t.split(".");
                let o = e[i[0]] || {};
                for (let e = 1; e < i.length; e++)
                    o && (o = o[i[e]]);
                return o
            }
            return e[t]
        }
    },
    getPx: function(e, t=!1) {
        return ce(e) ? t ? `${e}px` : Number(e) : /(rpx|upx)$/.test(e) ? t ? `${v(parseInt(e))}px` : Number(v(parseInt(e))) : t ? `${parseInt(e)}px` : parseInt(e)
    },
    guid: function(e=32, t=!0, i=null) {
        const o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("")
          , n = [];
        if (i = i || o.length,
        e)
            for (let r = 0; r < e; r++)
                n[r] = o[0 | Math.random() * i];
        else {
            let e;
            n[8] = n[13] = n[18] = n[23] = "-",
            n[14] = "4";
            for (let t = 0; t < 36; t++)
                n[t] || (e = 0 | 16 * Math.random(),
                n[t] = o[19 == t ? 3 & e | 8 : e])
        }
        return t ? (n.shift(),
        `u${n.join("")}`) : n.join("")
    },
    os: function() {
        return b().platform.toLowerCase()
    },
    padZero: function(e) {
        return `00${e}`.slice(-2)
    },
    page: Pe,
    pages: function() {
        return S()
    },
    priceFormat: function(e, t=0, i=".", o=",") {
        e = `${e}`.replace(/[^0-9+-Ee.]/g, "");
        const n = isFinite(+e) ? +e : 0
          , r = isFinite(+t) ? Math.abs(t) : 0
          , a = void 0 === o ? "," : o
          , s = void 0 === i ? "." : i;
        let l = "";
        l = (r ? function(e, t) {
            const i = Math.pow(10, t);
            let o = Se(Math.round(Math.abs(we(e, i))), i);
            return e < 0 && 0 !== o && (o = we(o, -1)),
            o
        }(n, r) + "" : `${Math.round(n)}`).split(".");
        const c = /(-?\d+)(\d{3})/;
        for (; c.test(l[0]); )
            l[0] = l[0].replace(c, `$1${a}$2`);
        return (l[1] || "").length < r && (l[1] = l[1] || "",
        l[1] += new Array(r - l[1].length + 1).join("0")),
        l.join(s)
    },
    queryParams: Te,
    random: function(e, t) {
        if (e >= 0 && t > 0 && t >= e) {
            const i = t - e + 1;
            return Math.floor(Math.random() * i + e)
        }
        return 0
    },
    randomArray: function(e=[]) {
        return e.sort(( () => Math.random() - .5))
    },
    range: function(e=0, t=0, i=0) {
        return Math.max(e, Math.min(t, Number(i)))
    },
    setConfig: function({props: e={}, config: t={}, color: i={}, zIndex: o={}}) {
        const {deepMerge: n} = uni.$uv;
        uni.$uv.config = n(uni.$uv.config, t),
        uni.$uv.props = n(uni.$uv.props, e),
        uni.$uv.color = n(uni.$uv.color, i),
        uni.$uv.zIndex = n(uni.$uv.zIndex, o)
    },
    setProperty: function(e, t, i) {
        if (!e)
            return;
        const o = function(e, t, i) {
            if (1 !== t.length)
                for (; t.length > 1; ) {
                    const n = t[0];
                    e[n] && "object" == typeof e[n] || (e[n] = {}),
                    t.shift(),
                    o(e[n], t, i)
                }
            else
                e[t[0]] = i
        };
        if ("string" != typeof t || "" === t)
            ;
        else if (-1 !== t.indexOf(".")) {
            const n = t.split(".");
            o(e, n, i)
        } else
            e[t] = i
    },
    sleep: function(e=30) {
        return new Promise((t => {
            setTimeout(( () => {
                t()
            }
            ), e)
        }
        ))
    },
    sys: function() {
        return b()
    },
    timeFormat: _e,
    timeFrom: function(e=null, t="yyyy-mm-dd") {
        null == e && (e = Number(new Date)),
        10 == (e = parseInt(e)).toString().length && (e *= 1e3);
        let i = (new Date).getTime() - e;
        i = parseInt(i / 1e3);
        let o = "";
        switch (!0) {
        case i < 300:
            o = "刚刚";
            break;
        case i >= 300 && i < 3600:
            o = `${parseInt(i / 60)}分钟前`;
            break;
        case i >= 3600 && i < 86400:
            o = `${parseInt(i / 3600)}小时前`;
            break;
        case i >= 86400 && i < 2592e3:
            o = `${parseInt(i / 86400)}天前`;
            break;
        default:
            o = !1 === t ? i >= 2592e3 && i < 31536e3 ? `${parseInt(i / 2592e3)}个月前` : `${parseInt(i / 31536e3)}年前` : _e(e, t)
        }
        return o
    },
    toast: function(e, t=2e3) {
        w({
            title: String(e),
            icon: "none",
            duration: t
        })
    },
    trim: $e,
    type2icon: function(e="success", t=!1) {
        -1 == ["primary", "info", "error", "warning", "success"].indexOf(e) && (e = "success");
        let i = "";
        switch (e) {
        case "primary":
        case "info":
            i = "info-circle";
            break;
        case "error":
            i = "close-circle";
            break;
        case "warning":
            i = "error-circle";
            break;
        default:
            i = "checkmark-circle"
        }
        return t && (i += "-fill"),
        i
    }
}, Symbol.toStringTag, {
    value: "Module"
}));
const Fe = (new class {
    constructor() {
        this.config = {
            type: "navigateTo",
            url: "",
            delta: 1,
            params: {},
            animationType: "pop-in",
            animationDuration: 300,
            intercept: !1,
            events: {}
        },
        this.route = this.route.bind(this)
    }
    addRootPath(e) {
        return "/" === e[0] ? e : `/${e}`
    }
    mixinParam(e, t) {
        e = e && this.addRootPath(e);
        let i = "";
        return /.*\/.*\?.*=.*/.test(e) ? (i = Te(t, !1),
        e + `&${i}`) : (i = Te(t),
        e + i)
    }
    async route(e={}, t={}) {
        let i = {};
        if ("string" == typeof e ? (i.url = this.mixinParam(e, t),
        i.type = "navigateTo") : (i = ke(this.config, e),
        i.url = this.mixinParam(e.url, e.params)),
        i.url !== Pe())
            if (t.intercept && (i.intercept = t.intercept),
            i.params = t,
            i = ke(this.config, i),
            "function" == typeof i.intercept) {
                await new Promise(( (e, t) => {
                    i.intercept(i, e)
                }
                )) && this.openPage(i)
            } else
                this.openPage(i)
    }
    openPage(e) {
        const {url: t, type: i, delta: o, animationType: n, animationDuration: r, events: a} = e;
        "navigateTo" != e.type && "to" != e.type || C({
            url: t,
            animationType: n,
            animationDuration: r,
            events: a
        }),
        "redirectTo" != e.type && "redirect" != e.type || x({
            url: t
        }),
        "switchTab" != e.type && "tab" != e.type || k({
            url: t
        }),
        "reLaunch" != e.type && "launch" != e.type || _({
            url: t
        }),
        "navigateBack" != e.type && "back" != e.type || $({
            delta: o
        })
    }
}
).route;
let ze, Oe = null;
function je(e, t=500, i=!1) {
    if (null !== Oe && clearTimeout(Oe),
    i) {
        const i = !Oe;
        Oe = setTimeout(( () => {
            Oe = null
        }
        ), t),
        i && "function" == typeof e && e()
    } else
        Oe = setTimeout(( () => {
            "function" == typeof e && e()
        }
        ), t)
}
function Ae(e, t=500, i=!0) {
    i ? ze || (ze = !0,
    "function" == typeof e && e(),
    setTimeout(( () => {
        ze = !1
    }
    ), t)) : ze || (ze = !0,
    setTimeout(( () => {
        ze = !1,
        "function" == typeof e && e()
    }
    ), t))
}
const Ne = {
    props: {
        customStyle: {
            type: [Object, String],
            default: () => ({})
        },
        customClass: {
            type: String,
            default: ""
        },
        url: {
            type: String,
            default: ""
        },
        linkType: {
            type: String,
            default: "navigateTo"
        }
    },
    data: () => ({}),
    onLoad() {
        this.$uv.getRect = this.$uvGetRect
    },
    created() {
        this.$uv.getRect = this.$uvGetRect
    },
    computed: {
        $uv() {
            var e, t;
            return {
                ...Ie,
                test: he,
                route: Fe,
                debounce: je,
                throttle: Ae,
                unit: null == (t = null == (e = null == uni ? void 0 : uni.$uv) ? void 0 : e.config) ? void 0 : t.unit
            }
        },
        bem: () => function(e, t, i) {
            const o = `uv-${e}--`
              , n = {};
            return t && t.map((e => {
                n[o + this[e]] = !0
            }
            )),
            i && i.map((e => {
                this[e] ? n[o + e] = this[e] : delete n[o + e]
            }
            )),
            Object.keys(n)
        }
    },
    methods: {
        openPage(e="url") {
            const t = this[e];
            t && uni[this.linkType]({
                url: t
            })
        },
        $uvGetRect(e, t) {
            return new Promise((i => {
                T().in(this)[t ? "selectAll" : "select"](e).boundingClientRect((e => {
                    t && Array.isArray(e) && e.length && i(e),
                    !t && e && i(e)
                }
                )).exec()
            }
            ))
        },
        getParentData(e="") {
            this.parent || (this.parent = {}),
            this.parent = this.$uv.$parent.call(this, e),
            this.parent.children && -1 === this.parent.children.indexOf(this) && this.parent.children.push(this),
            this.parent && this.parentData && Object.keys(this.parentData).map((e => {
                this.parentData[e] = this.parent[e]
            }
            ))
        },
        preventEvent(e) {
            e && "function" == typeof e.stopPropagation && e.stopPropagation()
        },
        noop(e) {
            this.preventEvent(e)
        }
    },
    onReachBottom() {
        P("uvOnReachBottom")
    },
    beforeDestroy() {
        if (this.parent && de(this.parent.children)) {
            const e = this.parent.children;
            e.map(( (t, i) => {
                t === this && e.splice(i, 1)
            }
            ))
        }
    },
    unmounted() {
        if (this.parent && de(this.parent.children)) {
            const e = this.parent.children;
            e.map(( (t, i) => {
                t === this && e.splice(i, 1)
            }
            ))
        }
    }
}
  , De = {
    "uvicon-level": "e68f",
    "uvicon-checkbox-mark": "e659",
    "uvicon-folder": "e694",
    "uvicon-movie": "e67c",
    "uvicon-star-fill": "e61e",
    "uvicon-star": "e618",
    "uvicon-phone-fill": "e6ac",
    "uvicon-phone": "e6ba",
    "uvicon-apple-fill": "e635",
    "uvicon-backspace": "e64d",
    "uvicon-attach": "e640",
    "uvicon-empty-data": "e671",
    "uvicon-empty-address": "e68a",
    "uvicon-empty-favor": "e662",
    "uvicon-empty-car": "e657",
    "uvicon-empty-order": "e66b",
    "uvicon-empty-list": "e672",
    "uvicon-empty-search": "e677",
    "uvicon-empty-permission": "e67d",
    "uvicon-empty-news": "e67e",
    "uvicon-empty-history": "e685",
    "uvicon-empty-coupon": "e69b",
    "uvicon-empty-page": "e60e",
    "uvicon-empty-wifi-off": "e6cc",
    "uvicon-reload": "e627",
    "uvicon-order": "e695",
    "uvicon-server-man": "e601",
    "uvicon-search": "e632",
    "uvicon-more-dot-fill": "e66f",
    "uvicon-scan": "e631",
    "uvicon-map": "e665",
    "uvicon-map-fill": "e6a8",
    "uvicon-tags": "e621",
    "uvicon-tags-fill": "e613",
    "uvicon-eye": "e664",
    "uvicon-eye-fill": "e697",
    "uvicon-eye-off": "e69c",
    "uvicon-eye-off-outline": "e688",
    "uvicon-mic": "e66d",
    "uvicon-mic-off": "e691",
    "uvicon-calendar": "e65c",
    "uvicon-trash": "e623",
    "uvicon-trash-fill": "e6ce",
    "uvicon-play-left": "e6bf",
    "uvicon-play-right": "e6b3",
    "uvicon-minus": "e614",
    "uvicon-plus": "e625",
    "uvicon-info-circle": "e69f",
    "uvicon-info-circle-fill": "e6a7",
    "uvicon-question-circle": "e622",
    "uvicon-question-circle-fill": "e6bc",
    "uvicon-close": "e65a",
    "uvicon-checkmark": "e64a",
    "uvicon-checkmark-circle": "e643",
    "uvicon-checkmark-circle-fill": "e668",
    "uvicon-setting": "e602",
    "uvicon-setting-fill": "e6d0",
    "uvicon-heart": "e6a2",
    "uvicon-heart-fill": "e68b",
    "uvicon-camera": "e642",
    "uvicon-camera-fill": "e650",
    "uvicon-more-circle": "e69e",
    "uvicon-more-circle-fill": "e684",
    "uvicon-chat": "e656",
    "uvicon-chat-fill": "e63f",
    "uvicon-bag": "e647",
    "uvicon-error-circle": "e66e",
    "uvicon-error-circle-fill": "e655",
    "uvicon-close-circle": "e64e",
    "uvicon-close-circle-fill": "e666",
    "uvicon-share": "e629",
    "uvicon-share-fill": "e6bb",
    "uvicon-share-square": "e6c4",
    "uvicon-shopping-cart": "e6cb",
    "uvicon-shopping-cart-fill": "e630",
    "uvicon-bell": "e651",
    "uvicon-bell-fill": "e604",
    "uvicon-list": "e690",
    "uvicon-list-dot": "e6a9",
    "uvicon-zhifubao-circle-fill": "e617",
    "uvicon-weixin-circle-fill": "e6cd",
    "uvicon-weixin-fill": "e620",
    "uvicon-qq-fill": "e608",
    "uvicon-qq-circle-fill": "e6b9",
    "uvicon-moments-circel-fill": "e6c2",
    "uvicon-moments": "e6a0",
    "uvicon-car": "e64f",
    "uvicon-car-fill": "e648",
    "uvicon-warning-fill": "e6c7",
    "uvicon-warning": "e6c1",
    "uvicon-clock-fill": "e64b",
    "uvicon-clock": "e66c",
    "uvicon-edit-pen": "e65d",
    "uvicon-edit-pen-fill": "e679",
    "uvicon-email": "e673",
    "uvicon-email-fill": "e683",
    "uvicon-minus-circle": "e6a5",
    "uvicon-plus-circle": "e603",
    "uvicon-plus-circle-fill": "e611",
    "uvicon-file-text": "e687",
    "uvicon-file-text-fill": "e67f",
    "uvicon-pushpin": "e6d1",
    "uvicon-pushpin-fill": "e6b6",
    "uvicon-grid": "e68c",
    "uvicon-grid-fill": "e698",
    "uvicon-play-circle": "e6af",
    "uvicon-play-circle-fill": "e62a",
    "uvicon-pause-circle-fill": "e60c",
    "uvicon-pause": "e61c",
    "uvicon-pause-circle": "e696",
    "uvicon-gift-fill": "e6b0",
    "uvicon-gift": "e680",
    "uvicon-kefu-ermai": "e660",
    "uvicon-server-fill": "e610",
    "uvicon-coupon-fill": "e64c",
    "uvicon-coupon": "e65f",
    "uvicon-integral": "e693",
    "uvicon-integral-fill": "e6b1",
    "uvicon-home-fill": "e68e",
    "uvicon-home": "e67b",
    "uvicon-account": "e63a",
    "uvicon-account-fill": "e653",
    "uvicon-thumb-down-fill": "e628",
    "uvicon-thumb-down": "e60a",
    "uvicon-thumb-up": "e612",
    "uvicon-thumb-up-fill": "e62c",
    "uvicon-lock-fill": "e6a6",
    "uvicon-lock-open": "e68d",
    "uvicon-lock-opened-fill": "e6a1",
    "uvicon-lock": "e69d",
    "uvicon-red-packet": "e6c3",
    "uvicon-photo-fill": "e6b4",
    "uvicon-photo": "e60d",
    "uvicon-volume-off-fill": "e6c8",
    "uvicon-volume-off": "e6bd",
    "uvicon-volume-fill": "e624",
    "uvicon-volume": "e605",
    "uvicon-download": "e670",
    "uvicon-arrow-up-fill": "e636",
    "uvicon-arrow-down-fill": "e638",
    "uvicon-play-left-fill": "e6ae",
    "uvicon-play-right-fill": "e6ad",
    "uvicon-arrow-downward": "e634",
    "uvicon-arrow-leftward": "e63b",
    "uvicon-arrow-rightward": "e644",
    "uvicon-arrow-upward": "e641",
    "uvicon-arrow-down": "e63e",
    "uvicon-arrow-right": "e63c",
    "uvicon-arrow-left": "e646",
    "uvicon-arrow-up": "e633",
    "uvicon-skip-back-left": "e6c5",
    "uvicon-skip-forward-right": "e61f",
    "uvicon-arrow-left-double": "e637",
    "uvicon-man": "e675",
    "uvicon-woman": "e626",
    "uvicon-en": "e6b8",
    "uvicon-twitte": "e607",
    "uvicon-twitter-circle-fill": "e6cf"
}
  , Be = (e, t) => {
    const i = e.__vccOpts || e;
    for (const [o,n] of t)
        i[o] = n;
    return i
}
;
const Ee = Be({
    name: "uv-icon",
    emits: ["click"],
    mixins: [le, Ne, {
        props: {
            name: {
                type: String,
                default: ""
            },
            color: {
                type: String,
                default: "#606266"
            },
            size: {
                type: [String, Number],
                default: "16px"
            },
            bold: {
                type: Boolean,
                default: !1
            },
            index: {
                type: [String, Number],
                default: null
            },
            hoverClass: {
                type: String,
                default: ""
            },
            customPrefix: {
                type: String,
                default: "uvicon"
            },
            label: {
                type: [String, Number],
                default: ""
            },
            labelPos: {
                type: String,
                default: "right"
            },
            labelSize: {
                type: [String, Number],
                default: "15px"
            },
            labelColor: {
                type: String,
                default: "#606266"
            },
            space: {
                type: [String, Number],
                default: "3px"
            },
            imgMode: {
                type: String,
                default: "aspectFit"
            },
            width: {
                type: [String, Number],
                default: ""
            },
            height: {
                type: [String, Number],
                default: ""
            },
            top: {
                type: [String, Number],
                default: 0
            },
            stop: {
                type: Boolean,
                default: !1
            },
            ...null == (t = null == (e = uni.$uv) ? void 0 : e.props) ? void 0 : t.icon
        }
    }],
    data: () => ({
        colorType: ["primary", "success", "info", "error", "warning"]
    }),
    computed: {
        uClasses() {
            let e = [];
            return e.push(this.customPrefix),
            e.push(this.customPrefix + "-" + this.name),
            this.color && this.colorType.includes(this.color) && e.push("uv-icon__icon--" + this.color),
            e
        },
        iconStyle() {
            let e = {};
            return e = {
                fontSize: this.$uv.addUnit(this.size),
                lineHeight: this.$uv.addUnit(this.size),
                fontWeight: this.bold ? "bold" : "normal",
                top: this.$uv.addUnit(this.top)
            },
            this.color && !this.colorType.includes(this.color) && (e.color = this.color),
            e
        },
        isImg() {
            const e = this.name.indexOf("data:") > -1 && this.name.indexOf("base64") > -1;
            return -1 !== this.name.indexOf("/") || e
        },
        imgStyle() {
            let e = {};
            return e.width = this.width ? this.$uv.addUnit(this.width) : this.$uv.addUnit(this.size),
            e.height = this.height ? this.$uv.addUnit(this.height) : this.$uv.addUnit(this.size),
            e
        },
        icon() {
            const e = De["uvicon-" + this.name];
            return e ? unescape(`%u${e}`) : ["uvicon"].indexOf(this.customPrefix) > -1 ? this.name : ""
        }
    },
    methods: {
        clickHandler(e) {
            this.$emit("click", this.index),
            this.stop && this.preventEvent(e)
        }
    }
}, [["render", function(e, t, i, o, n, r) {
    const a = B
      , s = E
      , l = M;
    return I(),
    F(l, {
        class: j(["uv-icon", ["uv-icon--" + e.labelPos]]),
        onClick: r.clickHandler
    }, {
        default: z(( () => [r.isImg ? (I(),
        F(a, {
            key: 0,
            class: "uv-icon__img",
            src: e.name,
            mode: e.imgMode,
            style: O([r.imgStyle, e.$uv.addStyle(e.customStyle)])
        }, null, 8, ["src", "mode", "style"])) : (I(),
        F(s, {
            key: 1,
            class: j(["uv-icon__icon", r.uClasses]),
            style: O([r.iconStyle, e.$uv.addStyle(e.customStyle)]),
            "hover-class": e.hoverClass
        }, {
            default: z(( () => [A(N(r.icon), 1)])),
            _: 1
        }, 8, ["class", "style", "hover-class"])), "" !== e.label ? (I(),
        F(s, {
            key: 2,
            class: "uv-icon__label",
            style: O({
                color: e.labelColor,
                fontSize: e.$uv.addUnit(e.labelSize),
                marginLeft: "right" == e.labelPos ? e.$uv.addUnit(e.space) : 0,
                marginTop: "bottom" == e.labelPos ? e.$uv.addUnit(e.space) : 0,
                marginRight: "left" == e.labelPos ? e.$uv.addUnit(e.space) : 0,
                marginBottom: "top" == e.labelPos ? e.$uv.addUnit(e.space) : 0
            })
        }, {
            default: z(( () => [A(N(e.label), 1)])),
            _: 1
        }, 8, ["style"])) : D("", !0)])),
        _: 1
    }, 8, ["onClick", "class"])
}
], ["__scopeId", "data-v-eab170a5"]]);
function Me(e, t) {
    return "string" == typeof e ? t : e
}
class Re {
    constructor(e, t) {
        this.options = e,
        this.animation = R({
            ...e
        }),
        this.currentStepAnimates = {},
        this.next = 0,
        this.$ = t
    }
    _nvuePushAnimates(e, t) {
        let i = this.currentStepAnimates[this.next]
          , o = {};
        if (o = i || {
            styles: {},
            config: {}
        },
        Le.includes(e)) {
            o.styles.transform || (o.styles.transform = "");
            let i = "";
            "rotate" === e && (i = "deg"),
            o.styles.transform += `${e}(${t + i}) `
        } else
            o.styles[e] = `${t}`;
        this.currentStepAnimates[this.next] = o
    }
    _animateRun(e={}, t={}) {
        let i = this.$.$refs.ani.ref;
        if (i)
            return new Promise(( (o, n) => {
                nvueAnimation.transition(i, {
                    styles: e,
                    ...t
                }, (e => {
                    o()
                }
                ))
            }
            ))
    }
    _nvueNextAnimate(e, t=0, i) {
        let o = e[t];
        if (o) {
            let {styles: n, config: r} = o;
            this._animateRun(n, r).then(( () => {
                t += 1,
                this._nvueNextAnimate(e, t, i)
            }
            ))
        } else
            this.currentStepAnimates = {},
            "function" == typeof i && i(),
            this.isEnd = !0
    }
    step(e={}) {
        return this.animation.step(e),
        this
    }
    run(e) {
        this.$.animationData = this.animation.export(),
        this.$.timer = setTimeout(( () => {
            "function" == typeof e && e()
        }
        ), this.$.durationTime)
    }
}
const Le = ["matrix", "matrix3d", "rotate", "rotate3d", "rotateX", "rotateY", "rotateZ", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "translate", "translate3d", "translateX", "translateY", "translateZ"];
function Ve(e, t) {
    if (t)
        return clearTimeout(t.timer),
        new Re(e,t)
}
Le.concat(["opacity", "backgroundColor"], ["width", "height", "left", "right", "top", "bottom"]).forEach((e => {
    Re.prototype[e] = function(...t) {
        return this.animation[e](...t),
        this
    }
}
));
const Ue = Be({
    name: "uv-transition",
    mixins: [le, Ne],
    emits: ["click", "change"],
    props: {
        show: {
            type: Boolean,
            default: !1
        },
        mode: {
            type: [Array, String, null],
            default: () => "fade"
        },
        duration: {
            type: [String, Number],
            default: 300
        },
        timingFunction: {
            type: String,
            default: "ease-out"
        },
        customClass: {
            type: String,
            default: ""
        },
        cellChild: {
            type: Boolean,
            default: !1
        }
    },
    data: () => ({
        isShow: !1,
        transform: "",
        opacity: 1,
        animationData: {},
        durationTime: 300,
        config: {}
    }),
    watch: {
        show: {
            handler(e) {
                e ? this.open() : this.isShow && this.close()
            },
            immediate: !0
        }
    },
    computed: {
        transformStyles() {
            const e = {
                transform: this.transform,
                opacity: this.opacity,
                ...this.$uv.addStyle(this.customStyle),
                "transition-duration": this.duration / 1e3 + "s"
            };
            return this.$uv.addStyle(e, "string")
        }
    },
    created() {
        this.config = {
            duration: this.duration,
            timingFunction: this.timingFunction,
            transformOrigin: "50% 50%",
            delay: 0
        },
        this.durationTime = this.duration
    },
    methods: {
        init(e={}) {
            e.duration && (this.durationTime = e.duration),
            this.animation = Ve(Object.assign(this.config, e), this)
        },
        onClick() {
            this.$emit("click", {
                detail: this.isShow
            })
        },
        step(e, t={}) {
            if (this.animation) {
                for (let t in e)
                    try {
                        "object" == typeof e[t] ? this.animation[t](...e[t]) : this.animation[t](e[t])
                    } catch (i) {
                        console.error(`方法 ${t} 不存在`)
                    }
                return this.animation.step(t),
                this
            }
        },
        run(e) {
            this.animation && this.animation.run(e)
        },
        open() {
            clearTimeout(this.timer),
            this.transform = "",
            this.isShow = !0;
            let {opacity: e, transform: t} = this.styleInit(!1);
            void 0 !== e && (this.opacity = e),
            this.transform = t,
            this.$nextTick(( () => {
                this.timer = setTimeout(( () => {
                    this.animation = Ve(this.config, this),
                    this.tranfromInit(!1).step(),
                    this.animation.run(),
                    this.opacity = 1,
                    this.$emit("change", {
                        detail: this.isShow
                    }),
                    this.transform = ""
                }
                ), 20)
            }
            ))
        },
        close(e) {
            this.animation && this.tranfromInit(!0).step().run(( () => {
                this.isShow = !1,
                this.animationData = null,
                this.animation = null;
                let {opacity: e, transform: t} = this.styleInit(!1);
                this.opacity = e || 1,
                this.transform = t,
                this.$emit("change", {
                    detail: this.isShow
                })
            }
            ))
        },
        styleInit(e) {
            let t = {
                transform: ""
            }
              , i = (e, i) => {
                "fade" === i ? t.opacity = this.animationType(e)[i] : t.transform += this.animationType(e)[i] + " "
            }
            ;
            return "string" == typeof this.mode ? i(e, this.mode) : this.mode.forEach((t => {
                i(e, t)
            }
            )),
            t
        },
        tranfromInit(e) {
            let t = (e, t) => {
                let i = null;
                "fade" === t ? i = e ? 0 : 1 : (i = e ? "-100%" : "0",
                "zoom-in" === t && (i = e ? .8 : 1),
                "zoom-out" === t && (i = e ? 1.2 : 1),
                "slide-right" === t && (i = e ? "100%" : "0"),
                "slide-bottom" === t && (i = e ? "100%" : "0")),
                this.animation[this.animationMode()[t]](i)
            }
            ;
            return "string" == typeof this.mode ? t(e, this.mode) : this.mode.forEach((i => {
                t(e, i)
            }
            )),
            this.animation
        },
        animationType: e => ({
            fade: e ? 1 : 0,
            "slide-top": `translateY(${e ? "0" : "-100%"})`,
            "slide-right": `translateX(${e ? "0" : "100%"})`,
            "slide-bottom": `translateY(${e ? "0" : "100%"})`,
            "slide-left": `translateX(${e ? "0" : "-100%"})`,
            "zoom-in": `scaleX(${e ? 1 : .8}) scaleY(${e ? 1 : .8})`,
            "zoom-out": `scaleX(${e ? 1 : 1.2}) scaleY(${e ? 1 : 1.2})`
        }),
        animationMode: () => ({
            fade: "opacity",
            "slide-top": "translateY",
            "slide-right": "translateX",
            "slide-bottom": "translateY",
            "slide-left": "translateX",
            "zoom-in": "scale",
            "zoom-out": "scale"
        }),
        toLine: e => e.replace(/([A-Z])/g, "-$1").toLowerCase()
    }
}, [["render", function(e, t, i, o, n, r) {
    const a = M;
    return n.isShow ? (I(),
    F(a, {
        key: 0,
        ref: "ani",
        animation: n.animationData,
        class: j(i.customClass),
        style: O(r.transformStyles),
        onClick: r.onClick
    }, {
        default: z(( () => [L(e.$slots, "default")])),
        _: 3
    }, 8, ["animation", "class", "style", "onClick"])) : D("", !0)
}
]]);
const He = Be({
    name: "uv-alert",
    mixins: [le, Ne, {
        props: {
            title: {
                type: String,
                default: ""
            },
            type: {
                type: String,
                default: "warning"
            },
            description: {
                type: String,
                default: ""
            },
            closable: {
                type: Boolean,
                default: !1
            },
            showIcon: {
                type: Boolean,
                default: !1
            },
            effect: {
                type: String,
                default: "light"
            },
            center: {
                type: Boolean,
                default: !1
            },
            fontSize: {
                type: [String, Number],
                default: 14
            },
            ...null == (o = null == (i = uni.$uv) ? void 0 : i.props) ? void 0 : o.alert
        }
    }],
    emits: ["click"],
    data: () => ({
        show: !0
    }),
    computed: {
        iconColor() {
            return "light" === this.effect ? this.type : "#fff"
        },
        iconName() {
            switch (this.type) {
            case "success":
                return "checkmark-circle-fill";
            case "error":
                return "close-circle-fill";
            case "warning":
            default:
                return "error-circle-fill";
            case "info":
                return "info-circle-fill";
            case "primary":
                return "more-circle-fill"
            }
        }
    },
    methods: {
        clickHandler() {
            this.$emit("click")
        },
        closeHandler() {
            this.show = !1
        }
    }
}, [["render", function(e, t, i, o, n, r) {
    const a = Me(V("uv-icon"), Ee)
      , s = M
      , l = E
      , c = Me(V("uv-transition"), Ue);
    return I(),
    F(c, {
        mode: "fade",
        show: n.show
    }, {
        default: z(( () => [U(s, {
            class: j(["uv-alert", [`uv-alert--${e.type}--${e.effect}`]]),
            onClick: H(r.clickHandler, ["stop"]),
            style: O([e.$uv.addStyle(e.customStyle)])
        }, {
            default: z(( () => [e.showIcon ? (I(),
            F(s, {
                key: 0,
                class: "uv-alert__icon"
            }, {
                default: z(( () => [U(a, {
                    name: r.iconName,
                    size: "18",
                    color: r.iconColor
                }, null, 8, ["name", "color"])])),
                _: 1
            })) : D("", !0), U(s, {
                class: "uv-alert__content",
                style: O([{
                    paddingRight: e.closable ? "20px" : 0
                }])
            }, {
                default: z(( () => [e.title ? (I(),
                F(l, {
                    key: 0,
                    class: j(["uv-alert__content__title", ["dark" === e.effect ? "uv-alert__text--dark" : `uv-alert__text--${e.type}--light`]]),
                    style: O([{
                        fontSize: e.$uv.addUnit(e.fontSize),
                        textAlign: e.center ? "center" : "left"
                    }])
                }, {
                    default: z(( () => [A(N(e.title), 1)])),
                    _: 1
                }, 8, ["style", "class"])) : D("", !0), e.description ? (I(),
                F(l, {
                    key: 1,
                    class: j(["uv-alert__content__desc", ["dark" === e.effect ? "uv-alert__text--dark" : `uv-alert__text--${e.type}--light`]]),
                    style: O([{
                        fontSize: e.$uv.addUnit(e.fontSize),
                        textAlign: e.center ? "center" : "left"
                    }])
                }, {
                    default: z(( () => [A(N(e.description), 1)])),
                    _: 1
                }, 8, ["style", "class"])) : D("", !0)])),
                _: 1
            }, 8, ["style"]), e.closable ? (I(),
            F(s, {
                key: 1,
                class: "uv-alert__close",
                onClick: H(r.closeHandler, ["stop"])
            }, {
                default: z(( () => [U(a, {
                    name: "close",
                    color: r.iconColor,
                    size: "15"
                }, null, 8, ["color"])])),
                _: 1
            }, 8, ["onClick"])) : D("", !0)])),
            _: 1
        }, 8, ["class", "onClick", "style"])])),
        _: 1
    }, 8, ["show"])
}
], ["__scopeId", "data-v-7b8540b0"]]);
const We = Be({
    name: "uv-input",
    mixins: [le, Ne, {
        props: {
            value: {
                type: [String, Number],
                default: ""
            },
            modelValue: {
                type: [String, Number],
                default: ""
            },
            type: {
                type: String,
                default: "text"
            },
            disabled: {
                type: Boolean,
                default: !1
            },
            disabledColor: {
                type: String,
                default: "#f5f7fa"
            },
            clearable: {
                type: Boolean,
                default: !1
            },
            password: {
                type: Boolean,
                default: !1
            },
            maxlength: {
                type: [String, Number],
                default: -1
            },
            placeholder: {
                type: String,
                default: null
            },
            placeholderClass: {
                type: String,
                default: "input-placeholder"
            },
            placeholderStyle: {
                type: [String, Object],
                default: "color: #c0c4cc"
            },
            confirmType: {
                type: String,
                default: "done"
            },
            confirmHold: {
                type: Boolean,
                default: !1
            },
            holdKeyboard: {
                type: Boolean,
                default: !1
            },
            focus: {
                type: Boolean,
                default: !1
            },
            autoBlur: {
                type: Boolean,
                default: !1
            },
            cursor: {
                type: [String, Number],
                default: -1
            },
            cursorSpacing: {
                type: [String, Number],
                default: 30
            },
            selectionStart: {
                type: [String, Number],
                default: -1
            },
            selectionEnd: {
                type: [String, Number],
                default: -1
            },
            adjustPosition: {
                type: Boolean,
                default: !0
            },
            inputAlign: {
                type: String,
                default: "left"
            },
            fontSize: {
                type: [String, Number],
                default: "14px"
            },
            color: {
                type: String,
                default: "#303133"
            },
            prefixIcon: {
                type: String,
                default: ""
            },
            prefixIconStyle: {
                type: [String, Object],
                default: ""
            },
            suffixIcon: {
                type: String,
                default: ""
            },
            suffixIconStyle: {
                type: [String, Object],
                default: ""
            },
            border: {
                type: String,
                default: "surround"
            },
            readonly: {
                type: Boolean,
                default: !1
            },
            shape: {
                type: String,
                default: "square"
            },
            formatter: {
                type: [Function, null],
                default: null
            },
            ignoreCompositionEvent: {
                type: Boolean,
                default: !0
            },
            ...null == (r = null == (n = uni.$uv) ? void 0 : n.props) ? void 0 : r.input
        }
    }],
    data: () => ({
        innerValue: "",
        focused: !1,
        innerFormatter: e => e
    }),
    created() {
        this.innerValue = this.modelValue
    },
    watch: {
        value(e) {
            this.innerValue = e
        },
        modelValue(e) {
            this.innerValue = e
        }
    },
    computed: {
        isShowClear() {
            const {clearable: e, readonly: t, focused: i, innerValue: o} = this;
            return !!e && !t && !!i && "" !== o
        },
        inputClass() {
            let e = []
              , {border: t, disabled: i, shape: o} = this;
            return "surround" === t && (e = e.concat(["uv-border", "uv-input--radius"])),
            e.push(`uv-input--${o}`),
            "bottom" === t && (e = e.concat(["uv-border-bottom", "uv-input--no-radius"])),
            e.join(" ")
        },
        wrapperStyle() {
            const e = {};
            return this.disabled && (e.backgroundColor = this.disabledColor),
            "none" === this.border ? e.padding = "0" : (e.paddingTop = "6px",
            e.paddingBottom = "6px",
            e.paddingLeft = "9px",
            e.paddingRight = "9px"),
            this.$uv.deepMerge(e, this.$uv.addStyle(this.customStyle))
        },
        inputStyle() {
            const e = {
                color: this.color,
                fontSize: this.$uv.addUnit(this.fontSize),
                textAlign: this.inputAlign
            };
            return (this.disabled || this.readonly) && (e["pointer-events"] = "none"),
            e
        }
    },
    methods: {
        setFormatter(e) {
            this.innerFormatter = e
        },
        onInput(e) {
            let {value: t=""} = e.detail || {};
            const i = (this.formatter || this.innerFormatter)(t);
            this.innerValue = t,
            this.$nextTick(( () => {
                this.innerValue = i,
                this.valueChange()
            }
            ))
        },
        onBlur(e) {
            this.$emit("blur", e.detail.value),
            this.$uv.sleep(100).then(( () => {
                this.focused = !1
            }
            )),
            this.$uv.formValidate(this, "blur")
        },
        onFocus(e) {
            this.focused = !0,
            this.$emit("focus")
        },
        onConfirm(e) {
            this.$emit("confirm", this.innerValue)
        },
        onkeyboardheightchange(e) {
            this.$emit("keyboardheightchange", e)
        },
        valueChange() {
            this.isClear && (this.innerValue = "");
            const e = this.innerValue;
            this.$nextTick(( () => {
                this.$emit("input", e),
                this.$emit("update:modelValue", e),
                this.$emit("change", e),
                this.$uv.formValidate(this, "change")
            }
            ))
        },
        onClear() {
            this.innerValue = "",
            this.isClear = !0,
            this.$uv.sleep(200).then((e => {
                this.isClear = !1
            }
            )),
            this.$nextTick(( () => {
                this.$emit("clear"),
                this.valueChange()
            }
            ))
        },
        clickHandler() {}
    }
}, [["render", function(e, t, i, o, n, r) {
    const a = Me(V("uv-icon"), Ee)
      , s = M
      , l = W;
    return I(),
    F(s, {
        class: j(["uv-input", r.inputClass]),
        style: O([r.wrapperStyle])
    }, {
        default: z(( () => [U(s, {
            class: "uv-input__content"
        }, {
            default: z(( () => [U(s, {
                class: "uv-input__content__prefix-icon"
            }, {
                default: z(( () => [L(e.$slots, "prefix", {}, ( () => [e.prefixIcon ? (I(),
                F(a, {
                    key: 0,
                    name: e.prefixIcon,
                    size: "18",
                    customStyle: e.prefixIconStyle
                }, null, 8, ["name", "customStyle"])) : D("", !0)]), !0)])),
                _: 3
            }), U(s, {
                class: "uv-input__content__field-wrapper",
                onClick: r.clickHandler
            }, {
                default: z(( () => [U(l, {
                    class: "uv-input__content__field-wrapper__field",
                    style: O([r.inputStyle]),
                    type: e.type,
                    focus: e.focus,
                    cursor: e.cursor,
                    value: n.innerValue,
                    "auto-blur": e.autoBlur,
                    disabled: e.disabled || e.readonly,
                    maxlength: e.maxlength,
                    placeholder: e.placeholder,
                    "placeholder-style": e.placeholderStyle,
                    "placeholder-class": e.placeholderClass,
                    "confirm-type": e.confirmType,
                    "confirm-hold": e.confirmHold,
                    "hold-keyboard": e.holdKeyboard,
                    "cursor-spacing": e.cursorSpacing,
                    "adjust-position": e.adjustPosition,
                    "selection-end": e.selectionEnd,
                    "selection-start": e.selectionStart,
                    password: e.password || "password" === e.type || void 0,
                    ignoreCompositionEvent: e.ignoreCompositionEvent,
                    onInput: r.onInput,
                    onBlur: r.onBlur,
                    onFocus: r.onFocus,
                    onConfirm: r.onConfirm,
                    onKeyboardheightchange: r.onkeyboardheightchange
                }, null, 8, ["style", "type", "focus", "cursor", "value", "auto-blur", "disabled", "maxlength", "placeholder", "placeholder-style", "placeholder-class", "confirm-type", "confirm-hold", "hold-keyboard", "cursor-spacing", "adjust-position", "selection-end", "selection-start", "password", "ignoreCompositionEvent", "onInput", "onBlur", "onFocus", "onConfirm", "onKeyboardheightchange"])])),
                _: 1
            }, 8, ["onClick"]), r.isShowClear ? (I(),
            F(s, {
                key: 0,
                class: "uv-input__content__clear",
                onClick: r.onClear
            }, {
                default: z(( () => [U(a, {
                    name: "close",
                    size: "11",
                    color: "#ffffff",
                    customStyle: "line-height: 12px"
                })])),
                _: 1
            }, 8, ["onClick"])) : D("", !0), U(s, {
                class: "uv-input__content__subfix-icon"
            }, {
                default: z(( () => [L(e.$slots, "suffix", {}, ( () => [e.suffixIcon ? (I(),
                F(a, {
                    key: 0,
                    name: e.suffixIcon,
                    size: "18",
                    customStyle: e.suffixIconStyle
                }, null, 8, ["name", "customStyle"])) : D("", !0)]), !0)])),
                _: 3
            })])),
            _: 3
        })])),
        _: 3
    }, 8, ["class", "style"])
}
], ["__scopeId", "data-v-7b2b9846"]]);
function Ze(e, t=!0) {
    if ((e = String(e).toLowerCase()) && /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(e)) {
        if (4 === e.length) {
            let t = "#";
            for (let i = 1; i < 4; i += 1)
                t += e.slice(i, i + 1).concat(e.slice(i, i + 1));
            e = t
        }
        const i = [];
        for (let t = 1; t < 7; t += 2)
            i.push(parseInt(`0x${e.slice(t, t + 2)}`));
        return t ? `rgb(${i[0]},${i[1]},${i[2]})` : i
    }
    if (/^(rgb|RGB)/.test(e)) {
        return e.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",").map((e => Number(e)))
    }
    return e
}
function qe(e) {
    const t = e;
    if (/^(rgb|RGB)/.test(t)) {
        const e = t.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
        let i = "#";
        for (let t = 0; t < e.length; t++) {
            let o = Number(e[t]).toString(16);
            o = 1 == String(o).length ? `0${o}` : o,
            "0" === o && (o += o),
            i += o
        }
        return 7 !== i.length && (i = t),
        i
    }
    if (!/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t))
        return t;
    {
        const e = t.replace(/#/, "").split("");
        if (6 === e.length)
            return t;
        if (3 === e.length) {
            let t = "#";
            for (let i = 0; i < e.length; i += 1)
                t += e[i] + e[i];
            return t
        }
    }
}
const Ge = Be({
    name: "uv-loading-icon",
    mixins: [le, Ne, {
        props: {
            show: {
                type: Boolean,
                default: !0
            },
            color: {
                type: String,
                default: "#909193"
            },
            textColor: {
                type: String,
                default: "#909193"
            },
            vertical: {
                type: Boolean,
                default: !1
            },
            mode: {
                type: String,
                default: "spinner"
            },
            size: {
                type: [String, Number],
                default: 24
            },
            textSize: {
                type: [String, Number],
                default: 15
            },
            textStyle: {
                type: Object,
                default: () => ({})
            },
            text: {
                type: [String, Number],
                default: ""
            },
            timingFunction: {
                type: String,
                default: "linear"
            },
            duration: {
                type: [String, Number],
                default: 1200
            },
            inactiveColor: {
                type: String,
                default: ""
            },
            ...null == (s = null == (a = uni.$uv) ? void 0 : a.props) ? void 0 : s.loadingIcon
        }
    }],
    data: () => ({
        array12: Array.from({
            length: 12
        }),
        aniAngel: 360,
        webviewHide: !1,
        loading: !1
    }),
    computed: {
        otherBorderColor() {
            const e = function(e="rgb(0, 0, 0)", t="rgb(255, 255, 255)", i=10) {
                const o = Ze(e, !1)
                  , n = o[0]
                  , r = o[1]
                  , a = o[2]
                  , s = Ze(t, !1)
                  , l = (s[0] - n) / i
                  , c = (s[1] - r) / i
                  , u = (s[2] - a) / i
                  , d = [];
                for (let p = 0; p < i; p++) {
                    let o = qe(`rgb(${Math.round(l * p + n)},${Math.round(c * p + r)},${Math.round(u * p + a)})`);
                    0 === p && (o = qe(e)),
                    p === i - 1 && (o = qe(t)),
                    d.push(o)
                }
                return d
            }(this.color, "#ffffff", 100)[80];
            return "circle" === this.mode ? this.inactiveColor ? this.inactiveColor : e : "transparent"
        }
    },
    watch: {
        show(e) {}
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            setTimeout(( () => {}
            ), 20)
        },
        addEventListenerToWebview() {
            const e = S()
              , t = e[e.length - 1].$getAppWebview();
            t.addEventListener("hide", ( () => {
                this.webviewHide = !0
            }
            )),
            t.addEventListener("show", ( () => {
                this.webviewHide = !1
            }
            ))
        }
    }
}, [["render", function(e, t, i, o, n, r) {
    const a = M
      , s = E;
    return e.show ? (I(),
    F(a, {
        key: 0,
        class: j(["uv-loading-icon", [e.vertical && "uv-loading-icon--vertical"]]),
        style: O([e.$uv.addStyle(e.customStyle)])
    }, {
        default: z(( () => [n.webviewHide ? D("", !0) : (I(),
        F(a, {
            key: 0,
            class: j(["uv-loading-icon__spinner", [`uv-loading-icon__spinner--${e.mode}`]]),
            ref: "ani",
            style: O({
                color: e.color,
                width: e.$uv.addUnit(e.size),
                height: e.$uv.addUnit(e.size),
                borderTopColor: e.color,
                borderBottomColor: r.otherBorderColor,
                borderLeftColor: r.otherBorderColor,
                borderRightColor: r.otherBorderColor,
                "animation-duration": `${e.duration}ms`,
                "animation-timing-function": "semicircle" === e.mode || "circle" === e.mode ? e.timingFunction : ""
            })
        }, {
            default: z(( () => ["spinner" === e.mode ? (I(!0),
            Z(q, {
                key: 0
            }, G(n.array12, ( (e, t) => (I(),
            F(a, {
                key: t,
                class: "uv-loading-icon__dot"
            })))), 128)) : D("", !0)])),
            _: 1
        }, 8, ["class", "style"])), e.text ? (I(),
        F(s, {
            key: 1,
            class: "uv-loading-icon__text",
            style: O([{
                fontSize: e.$uv.addUnit(e.textSize),
                color: e.textColor
            }, e.$uv.addStyle(e.textStyle)])
        }, {
            default: z(( () => [A(N(e.text), 1)])),
            _: 1
        }, 8, ["style"])) : D("", !0)])),
        _: 1
    }, 8, ["style", "class"])) : D("", !0)
}
], ["__scopeId", "data-v-3dff3dce"]]);
const Je = Be({
    name: "uv-button",
    mixins: [le, Ne, {
        props: {
            hairline: {
                type: Boolean,
                default: !0
            },
            type: {
                type: String,
                default: "info"
            },
            size: {
                type: String,
                default: "normal"
            },
            shape: {
                type: String,
                default: "square"
            },
            plain: {
                type: Boolean,
                default: !1
            },
            disabled: {
                type: Boolean,
                default: !1
            },
            loading: {
                type: Boolean,
                default: !1
            },
            loadingText: {
                type: [String, Number],
                default: ""
            },
            loadingMode: {
                type: String,
                default: "spinner"
            },
            loadingSize: {
                type: [String, Number],
                default: 14
            },
            openType: {
                type: String,
                default: ""
            },
            formType: {
                type: String,
                default: ""
            },
            appParameter: {
                type: String,
                default: ""
            },
            hoverStopPropagation: {
                type: Boolean,
                default: !0
            },
            lang: {
                type: String,
                default: "en"
            },
            sessionFrom: {
                type: String,
                default: ""
            },
            sendMessageTitle: {
                type: String,
                default: ""
            },
            sendMessagePath: {
                type: String,
                default: ""
            },
            sendMessageImg: {
                type: String,
                default: ""
            },
            showMessageCard: {
                type: Boolean,
                default: !0
            },
            dataName: {
                type: String,
                default: ""
            },
            throttleTime: {
                type: [String, Number],
                default: 0
            },
            hoverStartTime: {
                type: [String, Number],
                default: 0
            },
            hoverStayTime: {
                type: [String, Number],
                default: 200
            },
            text: {
                type: [String, Number],
                default: ""
            },
            icon: {
                type: String,
                default: ""
            },
            iconSize: {
                type: [String, Number],
                default: ""
            },
            iconColor: {
                type: String,
                default: "#000000"
            },
            color: {
                type: String,
                default: ""
            },
            customTextStyle: {
                type: [Object, String],
                default: ""
            },
            ...null == (c = null == (l = uni.$uv) ? void 0 : l.props) ? void 0 : c.button
        }
    }],
    emits: ["click"],
    data: () => ({}),
    computed: {
        bemClass() {
            return this.color ? this.bem("button", ["shape", "size"], ["disabled", "plain", "hairline"]) : this.bem("button", ["type", "shape", "size"], ["disabled", "plain", "hairline"])
        },
        loadingColor() {
            return this.plain ? this.color ? this.color : "#3c9cff" : "info" === this.type ? "#c9c9c9" : "rgb(200, 200, 200)"
        },
        iconColorCom() {
            return this.iconColor ? this.iconColor : this.plain ? this.color ? this.color : this.type : "info" === this.type ? "#000000" : "#ffffff"
        },
        baseColor() {
            let e = {};
            return this.color && (e.color = this.plain ? this.color : "white",
            this.plain || (e["background-color"] = this.color),
            -1 !== this.color.indexOf("gradient") ? (e.borderTopWidth = 0,
            e.borderRightWidth = 0,
            e.borderBottomWidth = 0,
            e.borderLeftWidth = 0,
            this.plain || (e.backgroundImage = this.color)) : (e.borderColor = this.color,
            e.borderWidth = "1px",
            e.borderStyle = "solid")),
            e
        },
        nvueTextStyle() {
            let e = {};
            return "info" === this.type && (e.color = "#323233"),
            this.color && (e.color = this.plain ? this.color : "white"),
            e.fontSize = this.textSize + "px",
            e
        },
        textSize() {
            let e = 14
              , {size: t} = this;
            return "large" === t && (e = 16),
            "normal" === t && (e = 14),
            "small" === t && (e = 12),
            "mini" === t && (e = 10),
            e
        },
        getIconSize() {
            const e = this.iconSize ? this.iconSize : 1.35 * this.textSize;
            return this.$uv.addUnit(e)
        },
        btnWrapperStyle() {
            const e = {}
              , t = this.$uv.addStyle(this.customStyle);
            return t.width && (e.width = t.width),
            e
        }
    },
    methods: {
        clickHandler() {
            this.disabled || this.loading || Ae(( () => {
                this.$emit("click")
            }
            ), this.throttleTime)
        }
    }
}, [["render", function(e, t, i, o, n, r) {
    const a = Me(V("uv-loading-icon"), Ge)
      , s = E
      , l = Me(V("uv-icon"), Ee)
      , c = J
      , u = M;
    return I(),
    F(u, {
        class: "uv-button-wrapper",
        style: O([r.btnWrapperStyle])
    }, {
        default: z(( () => [U(c, {
            "hover-start-time": Number(e.hoverStartTime),
            "hover-stay-time": Number(e.hoverStayTime),
            "form-type": e.formType,
            "open-type": e.openType,
            "app-parameter": e.appParameter,
            "hover-stop-propagation": e.hoverStopPropagation,
            "send-message-title": e.sendMessageTitle,
            "send-message-path": e.sendMessagePath,
            lang: e.lang,
            "data-name": e.dataName,
            "session-from": e.sessionFrom,
            "send-message-img": e.sendMessageImg,
            "show-message-card": e.showMessageCard,
            "hover-class": e.disabled || e.loading ? "" : "uv-button--active",
            class: j(["uv-button uv-reset-button", r.bemClass]),
            style: O([r.baseColor, e.$uv.addStyle(e.customStyle)]),
            onClick: r.clickHandler
        }, {
            default: z(( () => [e.loading ? (I(),
            Z(q, {
                key: 0
            }, [U(a, {
                mode: e.loadingMode,
                size: 1.15 * e.loadingSize,
                color: r.loadingColor
            }, null, 8, ["mode", "size", "color"]), U(s, {
                class: "uv-button__loading-text",
                style: O([{
                    fontSize: r.textSize + "px"
                }, e.$uv.addStyle(e.customTextStyle)])
            }, {
                default: z(( () => [A(N(e.loadingText || e.text), 1)])),
                _: 1
            }, 8, ["style"])], 64)) : (I(),
            Z(q, {
                key: 1
            }, [e.icon ? (I(),
            F(l, {
                key: 0,
                name: e.icon,
                color: r.iconColorCom,
                size: r.getIconSize,
                customStyle: {
                    marginRight: "2px"
                }
            }, null, 8, ["name", "color", "size"])) : D("", !0), L(e.$slots, "default", {}, ( () => [U(s, {
                class: "uv-button__text",
                style: O([{
                    fontSize: r.textSize + "px"
                }, e.$uv.addStyle(e.customTextStyle)])
            }, {
                default: z(( () => [A(N(e.text), 1)])),
                _: 1
            }, 8, ["style"])]), !0), L(e.$slots, "suffix", {}, void 0, !0)], 64))])),
            _: 3
        }, 8, ["hover-start-time", "hover-stay-time", "form-type", "open-type", "app-parameter", "hover-stop-propagation", "send-message-title", "send-message-path", "lang", "data-name", "session-from", "send-message-img", "show-message-card", "hover-class", "style", "onClick", "class"])])),
        _: 3
    }, 8, ["style"])
}
], ["__scopeId", "data-v-646dddbc"]]);
const Xe = Be({
    name: "uv-overlay",
    emits: ["click"],
    mixins: [le, Ne, {
        props: {
            show: {
                type: Boolean,
                default: !1
            },
            zIndex: {
                type: [String, Number],
                default: 10070
            },
            duration: {
                type: [String, Number],
                default: 300
            },
            opacity: {
                type: [String, Number],
                default: .5
            },
            ...null == (d = null == (u = uni.$uv) ? void 0 : u.props) ? void 0 : d.overlay
        }
    }],
    watch: {
        show(e) {
            document.querySelector("body").style.overflow = e ? "hidden" : ""
        }
    },
    computed: {
        overlayStyle() {
            const e = {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: this.zIndex,
                bottom: 0,
                "background-color": `rgba(0, 0, 0, ${this.opacity})`
            };
            return this.$uv.deepMerge(e, this.$uv.addStyle(this.customStyle))
        }
    },
    methods: {
        clickHandler() {
            this.$emit("click")
        },
        clear() {}
    }
}, [["render", function(e, t, i, o, n, r) {
    const a = Me(V("uv-transition"), Ue);
    return I(),
    F(a, {
        show: e.show,
        mode: "fade",
        "custom-class": "uv-overlay",
        duration: e.duration,
        "custom-style": r.overlayStyle,
        onClick: r.clickHandler,
        onTouchmove: H(r.clear, ["stop", "prevent"])
    }, {
        default: z(( () => [L(e.$slots, "default", {}, void 0, !0)])),
        _: 3
    }, 8, ["show", "duration", "custom-style", "onClick", "onTouchmove"])
}
], ["__scopeId", "data-v-0c47b2a6"]]);
const Ye = Be({
    name: "uv-status-bar",
    mixins: [le, Ne, {
        props: {
            bgColor: {
                type: String,
                default: "transparent"
            }
        }
    }],
    data: () => ({}),
    computed: {
        style() {
            const e = {};
            return e.height = this.$uv.addUnit(this.$uv.sys().statusBarHeight, "px"),
            this.bgColor && (this.bgColor.indexOf("gradient") > -1 ? e.backgroundImage = this.bgColor : e.background = this.bgColor),
            this.$uv.deepMerge(e, this.$uv.addStyle(this.customStyle))
        }
    }
}, [["render", function(e, t, i, o, n, r) {
    const a = M;
    return I(),
    F(a, {
        style: O([r.style]),
        class: "uv-status-bar"
    }, {
        default: z(( () => [L(e.$slots, "default", {}, void 0, !0)])),
        _: 3
    }, 8, ["style"])
}
], ["__scopeId", "data-v-c48287dc"]]);
const Ke = Be({
    name: "uv-safe-bottom",
    mixins: [le, Ne],
    data: () => ({
        safeAreaBottomHeight: 0,
        isNvue: !1
    }),
    computed: {
        style() {
            return this.$uv.deepMerge({}, this.$uv.addStyle(this.customStyle))
        }
    },
    mounted() {}
}, [["render", function(e, t, i, o, n, r) {
    const a = M;
    return I(),
    F(a, {
        class: j(["uv-safe-bottom", [!n.isNvue && "uv-safe-area-inset-bottom"]]),
        style: O([r.style])
    }, null, 8, ["style", "class"])
}
], ["__scopeId", "data-v-71c4b1ce"]]);
const Qe = Be({
    name: "uv-popup",
    components: {
        keypress: {
            name: "Keypress",
            props: {
                disable: {
                    type: Boolean,
                    default: !1
                }
            },
            mounted() {
                const e = {
                    esc: ["Esc", "Escape"],
                    tab: "Tab",
                    enter: "Enter",
                    space: [" ", "Spacebar"],
                    up: ["Up", "ArrowUp"],
                    left: ["Left", "ArrowLeft"],
                    right: ["Right", "ArrowRight"],
                    down: ["Down", "ArrowDown"],
                    delete: ["Backspace", "Delete", "Del"]
                };
                document.addEventListener("keyup", (t => {
                    if (this.disable)
                        return;
                    const i = Object.keys(e).find((i => {
                        const o = t.key
                          , n = e[i];
                        return n === o || Array.isArray(n) && n.includes(o)
                    }
                    ));
                    i && setTimeout(( () => {
                        this.$emit(i, {})
                    }
                    ), 0)
                }
                ))
            },
            render: () => {}
        }
    },
    mixins: [le, Ne],
    emits: ["change", "maskClick"],
    props: {
        mode: {
            type: String,
            default: "center"
        },
        duration: {
            type: [String, Number],
            default: 300
        },
        zIndex: {
            type: [String, Number],
            default: 997
        },
        bgColor: {
            type: String,
            default: "#ffffff"
        },
        safeArea: {
            type: Boolean,
            default: !0
        },
        overlay: {
            type: Boolean,
            default: !0
        },
        closeOnClickOverlay: {
            type: Boolean,
            default: !0
        },
        overlayOpacity: {
            type: [Number, String],
            default: .4
        },
        overlayStyle: {
            type: [Object, String],
            default: ""
        },
        safeAreaInsetBottom: {
            type: Boolean,
            default: !0
        },
        safeAreaInsetTop: {
            type: Boolean,
            default: !1
        },
        closeable: {
            type: Boolean,
            default: !1
        },
        closeIconPos: {
            type: String,
            default: "top-right"
        },
        zoom: {
            type: Boolean,
            default: !0
        },
        round: {
            type: [Number, String],
            default: 0
        },
        ...null == (f = null == (p = uni.$uv) ? void 0 : p.props) ? void 0 : f.popup
    },
    watch: {
        type: {
            handler: function(e) {
                this.config[e] && this[this.config[e]](!0)
            },
            immediate: !0
        },
        isDesktop: {
            handler: function(e) {
                this.config[e] && this[this.config[this.mode]](!0)
            },
            immediate: !0
        },
        showPopup(e) {
            document.getElementsByTagName("body")[0].style.overflow = e ? "hidden" : "visible"
        }
    },
    data() {
        return {
            ani: [],
            showPopup: !1,
            showTrans: !1,
            popupWidth: 0,
            popupHeight: 0,
            config: {
                top: "top",
                bottom: "bottom",
                center: "center",
                left: "left",
                right: "right",
                message: "top",
                dialog: "center",
                share: "bottom"
            },
            transitionStyle: {
                position: "fixed",
                left: 0,
                right: 0
            },
            maskShow: !0,
            mkclick: !0,
            popupClass: this.isDesktop ? "fixforpc-top" : "top",
            direction: ""
        }
    },
    computed: {
        isDesktop() {
            return this.popupWidth >= 500 && this.popupHeight >= 500
        },
        bg() {
            return "" === this.bgColor || "none" === this.bgColor || this.$uv.getPx(this.round) > 0 ? "transparent" : this.bgColor
        },
        contentStyle() {
            const e = {};
            if (this.bgColor && (e.backgroundColor = this.bg),
            this.round) {
                const t = this.$uv.addUnit(this.round)
                  , i = this.direction ? this.direction : this.mode;
                e.backgroundColor = this.bgColor,
                "top" === i ? (e.borderBottomLeftRadius = t,
                e.borderBottomRightRadius = t) : "bottom" === i ? (e.borderTopLeftRadius = t,
                e.borderTopRightRadius = t) : "center" === i && (e.borderRadius = t)
            }
            return this.$uv.deepMerge(e, this.$uv.addStyle(this.customStyle))
        }
    },
    unmounted() {
        this.setH5Visible()
    },
    created() {
        this.messageChild = null,
        this.clearPropagation = !1
    },
    methods: {
        setH5Visible() {
            document.getElementsByTagName("body")[0].style.overflow = "visible"
        },
        closeMask() {
            this.maskShow = !1
        },
        clear(e) {
            e.stopPropagation(),
            this.clearPropagation = !0
        },
        open(e) {
            if (this.showPopup)
                return;
            if (e && -1 !== ["top", "center", "bottom", "left", "right", "message", "dialog", "share"].indexOf(e) ? this.direction = e : e = this.mode,
            !this.config[e])
                return this.$uv.error(`缺少类型：${e}`);
            this[this.config[e]](),
            this.$emit("change", {
                show: !0,
                type: e
            })
        },
        close(e) {
            this.showTrans = !1,
            this.$emit("change", {
                show: !1,
                type: this.mode
            }),
            clearTimeout(this.timer),
            this.timer = setTimeout(( () => {
                this.showPopup = !1
            }
            ), 300)
        },
        touchstart() {
            this.clearPropagation = !1
        },
        onTap() {
            this.clearPropagation ? this.clearPropagation = !1 : (this.$emit("maskClick"),
            this.closeOnClickOverlay && this.close())
        },
        top(e) {
            this.popupClass = this.isDesktop ? "fixforpc-top" : "top",
            this.ani = ["slide-top"],
            this.transitionStyle = {
                position: "fixed",
                zIndex: this.zIndex,
                left: 0,
                right: 0,
                backgroundColor: this.bg
            },
            e || (this.showPopup = !0,
            this.showTrans = !0,
            this.$nextTick(( () => {
                this.messageChild && "message" === this.mode && this.messageChild.timerClose()
            }
            )))
        },
        bottom(e) {
            this.popupClass = "bottom",
            this.ani = ["slide-bottom"],
            this.transitionStyle = {
                position: "fixed",
                zIndex: this.zIndex,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: this.bg
            },
            e || (this.showPopup = !0,
            this.showTrans = !0)
        },
        center(e) {
            this.popupClass = "center",
            this.ani = this.zoom ? ["zoom-in", "fade"] : ["fade"],
            this.transitionStyle = {
                position: "fixed",
                zIndex: this.zIndex,
                display: "flex",
                flexDirection: "column",
                bottom: 0,
                left: 0,
                right: 0,
                top: 0,
                justifyContent: "center",
                alignItems: "center"
            },
            e || (this.showPopup = !0,
            this.showTrans = !0)
        },
        left(e) {
            this.popupClass = "left",
            this.ani = ["slide-left"],
            this.transitionStyle = {
                position: "fixed",
                zIndex: this.zIndex,
                left: 0,
                bottom: 0,
                top: 0,
                backgroundColor: this.bg,
                display: "flex",
                flexDirection: "column"
            },
            e || (this.showPopup = !0,
            this.showTrans = !0)
        },
        right(e) {
            this.popupClass = "right",
            this.ani = ["slide-right"],
            this.transitionStyle = {
                position: "fixed",
                zIndex: this.zIndex,
                bottom: 0,
                right: 0,
                top: 0,
                backgroundColor: this.bg,
                display: "flex",
                flexDirection: "column"
            },
            e || (this.showPopup = !0,
            this.showTrans = !0)
        }
    }
}, [["render", function(e, t, i, o, n, r) {
    const a = Me(V("uv-overlay"), Xe)
      , s = Me(V("uv-status-bar"), Ye)
      , l = Me(V("uv-safe-bottom"), Ke)
      , c = Me(V("uv-icon"), Ee)
      , u = M
      , d = Me(V("uv-transition"), Ue)
      , p = X("keypress");
    return n.showPopup ? (I(),
    F(u, {
        key: 0,
        class: j(["uv-popup", [n.popupClass, r.isDesktop ? "fixforpc-z-index" : ""]]),
        style: O([{
            zIndex: i.zIndex
        }])
    }, {
        default: z(( () => [U(u, {
            onTouchstart: r.touchstart
        }, {
            default: z(( () => [n.maskShow && i.overlay ? (I(),
            F(a, {
                key: "1",
                show: n.showTrans,
                duration: i.duration,
                "custom-style": i.overlayStyle,
                opacity: i.overlayOpacity,
                zIndex: i.zIndex,
                onClick: r.onTap
            }, null, 8, ["show", "duration", "custom-style", "opacity", "zIndex", "onClick"])) : D("", !0), U(d, {
                key: "2",
                mode: n.ani,
                name: "content",
                "custom-style": n.transitionStyle,
                duration: i.duration,
                show: n.showTrans,
                onClick: r.onTap
            }, {
                default: z(( () => [U(u, {
                    class: j(["uv-popup__content", [n.popupClass]]),
                    style: O([r.contentStyle]),
                    onClick: r.clear
                }, {
                    default: z(( () => [i.safeAreaInsetTop ? (I(),
                    F(s, {
                        key: 0
                    })) : D("", !0), L(e.$slots, "default", {}, void 0, !0), i.safeAreaInsetBottom ? (I(),
                    F(l, {
                        key: 1
                    })) : D("", !0), i.closeable ? (I(),
                    F(u, {
                        key: 2,
                        onClick: H(r.close, ["stop"]),
                        class: j(["uv-popup__content__close", ["uv-popup__content__close--" + i.closeIconPos]]),
                        "hover-class": "uv-popup__content__close--hover",
                        "hover-stay-time": "150"
                    }, {
                        default: z(( () => [U(c, {
                            name: "close",
                            color: "#909399",
                            size: "18",
                            bold: ""
                        })])),
                        _: 1
                    }, 8, ["onClick", "class"])) : D("", !0)])),
                    _: 3
                }, 8, ["style", "class", "onClick"])])),
                _: 3
            }, 8, ["mode", "custom-style", "duration", "show", "onClick"])])),
            _: 3
        }, 8, ["onTouchstart"]), n.maskShow ? (I(),
        F(p, {
            key: 0,
            onEsc: r.onTap
        }, null, 8, ["onEsc"])) : D("", !0)])),
        _: 3
    }, 8, ["class", "style"])) : D("", !0)
}
], ["__scopeId", "data-v-b8024930"]]);
const et = Be({
    name: "uv-toolbar",
    emits: ["confirm", "cancel"],
    mixins: [le, Ne, {
        props: {
            show: {
                type: Boolean,
                default: !0
            },
            showBorder: {
                type: Boolean,
                default: !1
            },
            cancelText: {
                type: String,
                default: "取消"
            },
            confirmText: {
                type: String,
                default: "确认"
            },
            cancelColor: {
                type: String,
                default: "#909193"
            },
            confirmColor: {
                type: String,
                default: "#3c9cff"
            },
            title: {
                type: String,
                default: ""
            },
            ...null == (m = null == (h = uni.$uv) ? void 0 : h.props) ? void 0 : m.toolbar
        }
    }],
    methods: {
        cancel() {
            this.$emit("cancel")
        },
        confirm() {
            this.$emit("confirm")
        }
    }
}, [["render", function(e, t, i, o, n, r) {
    const a = E
      , s = M;
    return e.show ? (I(),
    F(s, {
        key: 0,
        class: j(["uv-toolbar", {
            "uv-border-bottom": e.showBorder
        }]),
        onTouchmove: H(e.noop, ["stop", "prevent"])
    }, {
        default: z(( () => [U(s, {
            class: "uv-toolbar__cancel__wrapper",
            "hover-class": "uv-hover-class"
        }, {
            default: z(( () => [U(a, {
                class: "uv-toolbar__wrapper__cancel",
                onClick: r.cancel,
                style: O({
                    color: e.cancelColor
                })
            }, {
                default: z(( () => [A(N(e.cancelText), 1)])),
                _: 1
            }, 8, ["onClick", "style"])])),
            _: 1
        }), e.title ? (I(),
        F(a, {
            key: 0,
            class: "uv-toolbar__title uv-line-1"
        }, {
            default: z(( () => [A(N(e.title), 1)])),
            _: 1
        })) : D("", !0), U(s, {
            class: "uv-toolbar__confirm__wrapper",
            "hover-class": "uv-hover-class"
        }, {
            default: z(( () => [U(a, {
                class: "uv-toolbar__wrapper__confirm",
                onClick: r.confirm,
                style: O({
                    color: e.confirmColor
                })
            }, {
                default: z(( () => [A(N(e.confirmText), 1)])),
                _: 1
            }, 8, ["onClick", "style"])])),
            _: 1
        })])),
        _: 1
    }, 8, ["class", "onTouchmove"])) : D("", !0)
}
], ["__scopeId", "data-v-2f73cab8"]]);
const tt = Be({
    name: "uv-picker",
    emits: ["confirm", "cancel", "close", "change"],
    mixins: [le, Ne, {
        props: {
            showToolbar: {
                type: Boolean,
                default: !0
            },
            title: {
                type: String,
                default: ""
            },
            round: {
                type: [String, Number],
                default: 0
            },
            columns: {
                type: Array,
                default: () => []
            },
            loading: {
                type: Boolean,
                default: !1
            },
            itemHeight: {
                type: [String, Number],
                default: 44
            },
            cancelText: {
                type: String,
                default: "取消"
            },
            confirmText: {
                type: String,
                default: "确定"
            },
            cancelColor: {
                type: String,
                default: "#909193"
            },
            confirmColor: {
                type: String,
                default: "#3c9cff"
            },
            color: {
                type: String,
                default: ""
            },
            activeColor: {
                type: String,
                default: ""
            },
            visibleItemCount: {
                type: [String, Number],
                default: 5
            },
            keyName: {
                type: String,
                default: "text"
            },
            closeOnClickOverlay: {
                type: Boolean,
                default: !0
            },
            closeOnClickConfirm: {
                type: Boolean,
                default: !0
            },
            defaultIndex: {
                type: Array,
                default: () => []
            },
            immediateChange: {
                type: Boolean,
                default: !0
            },
            ...null == (g = null == (y = uni.$uv) ? void 0 : y.props) ? void 0 : g.picker
        }
    }],
    computed: {
        textStyle() {
            return (e, t) => {
                const i = {
                    display: "block"
                };
                return this.color && (i.color = this.color),
                this.activeColor && t === this.innerIndex[e] && (i.color = this.activeColor),
                i
            }
        }
    },
    data: () => ({
        lastIndex: [],
        innerIndex: [],
        innerColumns: [],
        columnIndex: 0
    }),
    watch: {
        defaultIndex: {
            immediate: !0,
            handler(e) {
                this.setIndexs(e, !0)
            }
        },
        columns: {
            deep: !0,
            immediate: !0,
            handler(e) {
                this.setColumns(e)
            }
        }
    },
    methods: {
        open() {
            this.$refs.pickerPopup.open()
        },
        close() {
            this.$refs.pickerPopup.close()
        },
        popupChange(e) {
            e.show || this.$emit("close")
        },
        getItemText(e) {
            return this.$uv.test.object(e) ? e[this.keyName] : e
        },
        cancel() {
            this.$emit("cancel"),
            this.close()
        },
        confirm() {
            this.$emit("confirm", this.$uv.deepClone({
                indexs: this.innerIndex,
                value: this.innerColumns.map(( (e, t) => e[this.innerIndex[t]])),
                values: this.innerColumns
            })),
            this.closeOnClickConfirm && this.close()
        },
        changeHandler(e) {
            const {value: t} = e.detail;
            let i = 0
              , o = 0;
            for (let r = 0; r < t.length; r++) {
                let e = t[r];
                if (e !== (this.lastIndex[r] || 0)) {
                    o = r,
                    i = e;
                    break
                }
            }
            this.columnIndex = o;
            const n = this.innerColumns;
            this.setLastIndex(t),
            this.setIndexs(t),
            this.$emit("change", {
                value: this.innerColumns.map(( (e, i) => e[t[i]])),
                index: i,
                indexs: t,
                values: n,
                columnIndex: o
            })
        },
        setIndexs(e, t) {
            this.innerIndex = this.$uv.deepClone(e),
            t && this.setLastIndex(e)
        },
        setLastIndex(e) {
            this.lastIndex = this.$uv.deepClone(e)
        },
        setColumnValues(e, t) {
            this.innerColumns.splice(e, 1, t);
            let i = this.$uv.deepClone(this.innerIndex);
            for (let o = 0; o < this.innerColumns.length; o++)
                o > this.columnIndex && (i[o] = 0);
            this.setIndexs(i)
        },
        getColumnValues(e) {
            return (async () => {
                await this.$uv.sleep()
            }
            )(),
            this.innerColumns[e]
        },
        setColumns(e) {
            this.innerColumns = this.$uv.deepClone(e),
            0 === this.innerIndex.length && (this.innerIndex = new Array(e.length).fill(0))
        },
        getIndexs() {
            return this.innerIndex
        },
        getValues() {
            return (async () => {
                await this.$uv.sleep()
            }
            )(),
            this.innerColumns.map(( (e, t) => e[this.innerIndex[t]]))
        }
    }
}, [["render", function(e, t, i, o, n, r) {
    const a = Me(V("uv-toolbar"), et)
      , s = E
      , l = Y
      , c = K
      , u = Me(V("uv-loading-icon"), Ge)
      , d = M
      , p = Me(V("uv-popup"), Qe);
    return I(),
    F(p, {
        ref: "pickerPopup",
        mode: "bottom",
        round: e.round,
        "close-on-click-overlay": e.closeOnClickOverlay,
        onChange: r.popupChange
    }, {
        default: z(( () => [U(d, {
            class: "uv-picker"
        }, {
            default: z(( () => [e.showToolbar ? (I(),
            F(a, {
                key: 0,
                cancelColor: e.cancelColor,
                confirmColor: e.confirmColor,
                cancelText: e.cancelText,
                confirmText: e.confirmText,
                title: e.title,
                onCancel: r.cancel,
                onConfirm: r.confirm
            }, null, 8, ["cancelColor", "confirmColor", "cancelText", "confirmText", "title", "onCancel", "onConfirm"])) : D("", !0), U(c, {
                class: "uv-picker__view",
                indicatorStyle: `height: ${e.$uv.addUnit(e.itemHeight)}`,
                value: n.innerIndex,
                immediateChange: e.immediateChange,
                style: O({
                    height: `${e.$uv.addUnit(e.visibleItemCount * e.itemHeight)}`
                }),
                onChange: r.changeHandler
            }, {
                default: z(( () => [(I(!0),
                Z(q, null, G(n.innerColumns, ( (t, i) => (I(),
                F(l, {
                    key: i,
                    class: "uv-picker__view__column"
                }, {
                    default: z(( () => [e.$uv.test.array(t) ? (I(!0),
                    Z(q, {
                        key: 0
                    }, G(t, ( (t, o) => (I(),
                    F(s, {
                        class: "uv-picker__view__column__item uv-line-1",
                        key: o,
                        style: O([{
                            height: e.$uv.addUnit(e.itemHeight),
                            lineHeight: e.$uv.addUnit(e.itemHeight),
                            fontWeight: o === n.innerIndex[i] ? "bold" : "normal"
                        }, r.textStyle(i, o)])
                    }, {
                        default: z(( () => [A(N(r.getItemText(t)), 1)])),
                        _: 2
                    }, 1032, ["style"])))), 128)) : D("", !0)])),
                    _: 2
                }, 1024)))), 128))])),
                _: 1
            }, 8, ["indicatorStyle", "value", "immediateChange", "style", "onChange"]), e.loading ? (I(),
            F(d, {
                key: 1,
                class: "uv-picker--loading"
            }, {
                default: z(( () => [U(u, {
                    mode: "circle"
                })])),
                _: 1
            })) : D("", !0)])),
            _: 1
        })])),
        _: 1
    }, 8, ["round", "close-on-click-overlay", "onChange"])
}
], ["__scopeId", "data-v-e71dff16"]]);
var it = Object.prototype.toString;
function ot(e) {
    return "[object Array]" === it.call(e)
}
function nt(e, t) {
    if (null != e)
        if ("object" != typeof e && (e = [e]),
        ot(e))
            for (var i = 0, o = e.length; i < o; i++)
                t.call(null, e[i], i, e);
        else
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && t.call(null, e[n], n, e)
}
function rt() {
    let e = {};
    function t(t, i) {
        "object" == typeof e[i] && "object" == typeof t ? e[i] = rt(e[i], t) : e[i] = "object" == typeof t ? rt({}, t) : t
    }
    for (let i = 0, o = arguments.length; i < o; i++)
        nt(arguments[i], t);
    return e
}
function at(e) {
    return void 0 === e
}
function st(e) {
    return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
function lt(e, t, i) {
    if (!t)
        return e;
    var o, n;
    if (i)
        o = i(t);
    else if (n = t,
    "undefined" != typeof URLSearchParams && n instanceof URLSearchParams)
        o = t.toString();
    else {
        var r = [];
        nt(t, (function(e, t) {
            null != e && (ot(e) ? t += "[]" : e = [e],
            nt(e, (function(e) {
                !function(e) {
                    return "[object Date]" === it.call(e)
                }(e) ? function(e) {
                    return null !== e && "object" == typeof e
                }(e) && (e = JSON.stringify(e)) : e = e.toISOString(),
                r.push(st(t) + "=" + st(e))
            }
            )))
        }
        )),
        o = r.join("&")
    }
    if (o) {
        var a = e.indexOf("#");
        -1 !== a && (e = e.slice(0, a)),
        e += (-1 === e.indexOf("?") ? "?" : "&") + o
    }
    return e
}
const ct = (e, t) => {
    let i = {};
    return e.forEach((e => {
        at(t[e]) || (i[e] = t[e])
    }
    )),
    i
}
  , ut = e => (e => new Promise(( (t, i) => {
    let o = lt((n = e.baseURL,
    r = e.url,
    n && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r) ? function(e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }(n, r) : r), e.params, e.paramsSerializer);
    var n, r;
    const a = {
        url: o,
        header: e.header,
        complete: n => {
            e.fullPath = o,
            n.config = e,
            n.rawData = n.data;
            try {
                let t = !1;
                const i = typeof e.forcedJSONParsing;
                "boolean" === i ? t = e.forcedJSONParsing : "object" === i && (t = (e.forcedJSONParsing.include || []).includes(e.method)),
                t && "string" == typeof n.data && (n.data = JSON.parse(n.data))
            } catch (r) {}
            !function(e, t, i) {
                const o = i.config.validateStatus
                  , n = i.statusCode;
                !n || o && !o(n) ? t(i) : e(i)
            }(t, i, n)
        }
    };
    let s;
    if ("UPLOAD" === e.method) {
        delete a.header["content-type"],
        delete a.header["Content-Type"];
        let t = {
            filePath: e.filePath,
            name: e.name
        };
        const i = ["files", "file", "timeout", "formData"];
        s = Q({
            ...a,
            ...t,
            ...ct(i, e)
        })
    } else if ("DOWNLOAD" === e.method) {
        const t = ["timeout"];
        s = ee({
            ...a,
            ...ct(t, e)
        })
    } else {
        const t = ["data", "method", "timeout", "dataType", "responseType", "withCredentials"];
        s = te({
            ...a,
            ...ct(t, e)
        })
    }
    e.getTask && e.getTask(s, e)
}
)))(e);
function dt() {
    this.handlers = []
}
dt.prototype.use = function(e, t) {
    return this.handlers.push({
        fulfilled: e,
        rejected: t
    }),
    this.handlers.length - 1
}
,
dt.prototype.eject = function(e) {
    this.handlers[e] && (this.handlers[e] = null)
}
,
dt.prototype.forEach = function(e) {
    this.handlers.forEach((t => {
        null !== t && e(t)
    }
    ))
}
;
const pt = (e, t, i) => {
    let o = {};
    return e.forEach((e => {
        at(i[e]) ? at(t[e]) || (o[e] = t[e]) : o[e] = i[e]
    }
    )),
    o
}
  , ft = {
    baseURL: "",
    header: {},
    method: "GET",
    dataType: "json",
    paramsSerializer: null,
    responseType: "text",
    custom: {},
    timeout: 6e4,
    withCredentials: !1,
    validateStatus: function(e) {
        return e >= 200 && e < 300
    },
    forcedJSONParsing: !0
};
var ht = function() {
    function e(e, t) {
        return null != t && e instanceof t
    }
    var t, i, o;
    try {
        t = Map
    } catch (s) {
        t = function() {}
    }
    try {
        i = Set
    } catch (s) {
        i = function() {}
    }
    try {
        o = Promise
    } catch (s) {
        o = function() {}
    }
    function n(r, s, l, c, u) {
        "object" == typeof s && (l = s.depth,
        c = s.prototype,
        u = s.includeNonEnumerable,
        s = s.circular);
        var d = []
          , p = []
          , f = "undefined" != typeof Buffer;
        return void 0 === s && (s = !0),
        void 0 === l && (l = 1 / 0),
        function r(l, h) {
            if (null === l)
                return null;
            if (0 === h)
                return l;
            var m, y;
            if ("object" != typeof l)
                return l;
            if (e(l, t))
                m = new t;
            else if (e(l, i))
                m = new i;
            else if (e(l, o))
                m = new o((function(e, t) {
                    l.then((function(t) {
                        e(r(t, h - 1))
                    }
                    ), (function(e) {
                        t(r(e, h - 1))
                    }
                    ))
                }
                ));
            else if (n.__isArray(l))
                m = [];
            else if (n.__isRegExp(l))
                m = new RegExp(l.source,a(l)),
                l.lastIndex && (m.lastIndex = l.lastIndex);
            else if (n.__isDate(l))
                m = new Date(l.getTime());
            else {
                if (f && Buffer.isBuffer(l))
                    return Buffer.from ? m = Buffer.from(l) : (m = new Buffer(l.length),
                    l.copy(m)),
                    m;
                e(l, Error) ? m = Object.create(l) : void 0 === c ? (y = Object.getPrototypeOf(l),
                m = Object.create(y)) : (m = Object.create(c),
                y = c)
            }
            if (s) {
                var g = d.indexOf(l);
                if (-1 != g)
                    return p[g];
                d.push(l),
                p.push(m)
            }
            for (var v in e(l, t) && l.forEach((function(e, t) {
                var i = r(t, h - 1)
                  , o = r(e, h - 1);
                m.set(i, o)
            }
            )),
            e(l, i) && l.forEach((function(e) {
                var t = r(e, h - 1);
                m.add(t)
            }
            )),
            l) {
                Object.getOwnPropertyDescriptor(l, v) && (m[v] = r(l[v], h - 1));
                try {
                    if ("undefined" === Object.getOwnPropertyDescriptor(l, v).set)
                        continue;
                    m[v] = r(l[v], h - 1)
                } catch (k) {
                    if (k instanceof TypeError)
                        continue;
                    if (k instanceof ReferenceError)
                        continue
                }
            }
            if (Object.getOwnPropertySymbols) {
                var b = Object.getOwnPropertySymbols(l);
                for (v = 0; v < b.length; v++) {
                    var w = b[v];
                    (!(C = Object.getOwnPropertyDescriptor(l, w)) || C.enumerable || u) && (m[w] = r(l[w], h - 1),
                    Object.defineProperty(m, w, C))
                }
            }
            if (u) {
                var S = Object.getOwnPropertyNames(l);
                for (v = 0; v < S.length; v++) {
                    var C, x = S[v];
                    (C = Object.getOwnPropertyDescriptor(l, x)) && C.enumerable || (m[x] = r(l[x], h - 1),
                    Object.defineProperty(m, x, C))
                }
            }
            return m
        }(r, l)
    }
    function r(e) {
        return Object.prototype.toString.call(e)
    }
    function a(e) {
        var t = "";
        return e.global && (t += "g"),
        e.ignoreCase && (t += "i"),
        e.multiline && (t += "m"),
        t
    }
    return n.clonePrototype = function(e) {
        if (null === e)
            return null;
        var t = function() {};
        return t.prototype = e,
        new t
    }
    ,
    n.__objToStr = r,
    n.__isDate = function(e) {
        return "object" == typeof e && "[object Date]" === r(e)
    }
    ,
    n.__isArray = function(e) {
        return "object" == typeof e && "[object Array]" === r(e)
    }
    ,
    n.__isRegExp = function(e) {
        return "object" == typeof e && "[object RegExp]" === r(e)
    }
    ,
    n.__getRegExpFlags = a,
    n
}();
class mt {
    constructor(e={}) {
        var t;
        t = e,
        "[object Object]" !== Object.prototype.toString.call(t) && (e = {},
        console.warn("设置全局参数必须接收一个Object")),
        this.config = ht({
            ...ft,
            ...e
        }),
        this.interceptors = {
            request: new dt,
            response: new dt
        }
    }
    setConfig(e) {
        this.config = e(this.config)
    }
    middleware(e) {
        e = ( (e, t={}) => {
            const i = t.method || e.method || "GET";
            let o = {
                baseURL: t.baseURL || e.baseURL || "",
                method: i,
                url: t.url || "",
                params: t.params || {},
                custom: {
                    ...e.custom || {},
                    ...t.custom || {}
                },
                header: rt(e.header || {}, t.header || {})
            };
            if (o = {
                ...o,
                ...pt(["getTask", "validateStatus", "paramsSerializer", "forcedJSONParsing"], e, t)
            },
            "DOWNLOAD" === i) {
                const i = ["timeout"];
                o = {
                    ...o,
                    ...pt(i, e, t)
                }
            } else if ("UPLOAD" === i)
                delete o.header["content-type"],
                delete o.header["Content-Type"],
                ["files", "file", "filePath", "name", "timeout", "formData"].forEach((e => {
                    at(t[e]) || (o[e] = t[e])
                }
                )),
                at(o.timeout) && !at(e.timeout) && (o.timeout = e.timeout);
            else {
                const i = ["data", "timeout", "dataType", "responseType", "withCredentials"];
                o = {
                    ...o,
                    ...pt(i, e, t)
                }
            }
            return o
        }
        )(this.config, e);
        let t = [ut, void 0]
          , i = Promise.resolve(e);
        for (this.interceptors.request.forEach((function(e) {
            t.unshift(e.fulfilled, e.rejected)
        }
        )),
        this.interceptors.response.forEach((function(e) {
            t.push(e.fulfilled, e.rejected)
        }
        )); t.length; )
            i = i.then(t.shift(), t.shift());
        return i
    }
    request(e={}) {
        return this.middleware(e)
    }
    get(e, t={}) {
        return this.middleware({
            url: e,
            method: "GET",
            ...t
        })
    }
    post(e, t, i={}) {
        return this.middleware({
            url: e,
            data: t,
            method: "POST",
            ...i
        })
    }
    put(e, t, i={}) {
        return this.middleware({
            url: e,
            data: t,
            method: "PUT",
            ...i
        })
    }
    delete(e, t, i={}) {
        return this.middleware({
            url: e,
            data: t,
            method: "DELETE",
            ...i
        })
    }
    connect(e, t, i={}) {
        return this.middleware({
            url: e,
            data: t,
            method: "CONNECT",
            ...i
        })
    }
    head(e, t, i={}) {
        return this.middleware({
            url: e,
            data: t,
            method: "HEAD",
            ...i
        })
    }
    options(e, t, i={}) {
        return this.middleware({
            url: e,
            data: t,
            method: "OPTIONS",
            ...i
        })
    }
    trace(e, t, i={}) {
        return this.middleware({
            url: e,
            data: t,
            method: "TRACE",
            ...i
        })
    }
    upload(e, t={}) {
        return t.url = e,
        t.method = "UPLOAD",
        this.middleware(t)
    }
    download(e, t={}) {
        return t.url = e,
        t.method = "DOWNLOAD",
        this.middleware(t)
    }
    get version() {
        return "3.1.0"
    }
}
const yt = Be({
    data: () => ({
        isVerified: !1,
        password: "",
        showPasswordModal: !1,
        passwordBox: "{width:'480rpx'}",
        waterTypes: [{
            label: "豆种",
            value: 100
        }, {
            label: "粗糯",
            value: 600
        }, {
            label: "细糯",
            value: 1600
        }, {
            label: "糯化",
            value: 8e3
        }, {
            label: "糯冰",
            value: 4e4
        }, {
            label: "正冰",
            value: 1e5
        }, {
            label: "高冰",
            value: 4e5
        }, {
            label: "玻璃种",
            value: 1e6
        }],
        waterTypeLabels: ["豆种", "粗糯", "细糯", "糯化", "糯冰", "正冰", "高冰", "玻璃种"],
        selectedWaterType: null,
        selectedWaterTypeIndex: 0,
        colorColumns: [["浅绿", "果绿", "阳绿", "帝王绿", "粉紫", "茄紫", "帝王紫", "黄色", "浅黄色", "红色", "浅红色", "蓝水", "蓝底", "晴水", "晴底", "飘绿花", "飘蓝花"], ["满色", "50%", "低于一半"]],
        colorLevelData: {
            "浅绿": ["满色", "50%", "低于一半"],
            "果绿": ["满色", "50%", "低于一半"],
            "阳绿": ["满色", "50%", "低于一半"],
            "帝王绿": ["满色", "50%", "低于一半"],
            "粉紫": ["满色", "50%", "低于一半"],
            "茄紫": ["满色", "50%", "低于一半"],
            "帝王紫": ["满色", "50%", "低于一半"],
            "黄色": ["满色", "50%", "低于一半"],
            "浅黄色": ["满色", "50%", "低于一半"],
            "红色": ["满色", "50%", "低于一半"],
            "浅红色": ["满色", "50%", "低于一半"],
            "蓝水": ["满色", "50%", "低于一半"],
            "蓝底": ["满色", "50%", "低于一半"],
            "晴水": ["满色", "50%", "低于一半"],
            "晴底": ["满色", "50%", "低于一半"],
            "飘绿花": ["高于一半", "低于一半"],
            "飘蓝花": ["高于一半", "低于一半"]
        },
        selectedColor: "",
        selectedColorIndex: 0,
        selectedColorLevel: "",
        selectedColorLevelIndex: 0,
        selectedDensity: null,
        shapeColumns: [["镯型", "挂件尺寸", "蛋面尺寸"], ["宽版轮胎镯", "胖圆条手镯", "圆条手镯", "正装手镯", "贵妃镯", "美人镯", "方镯", "怪异镯"]],
        shapeData: {
            "镯型": ["宽版轮胎镯", "胖圆条手镯", "圆条手镯", "正装手镯", "贵妃镯", "美人镯", "方镯", "怪异镯"],
            "挂件尺寸": ["正装宽四高六", "小于宽四高六", "大于宽四高六"],
            "蛋面尺寸": ["6：8", "7：9", "8：10", "10：12", "12：14", "14：16"]
        },
        selectedShapeType: "",
        selectedShapeTypeIndex: 0,
        selectedShape: "",
        selectedShapeIndex: 0,
        flawTypes: ["无瑕疵", "绺裂", "一条石纹", "多条石纹", "死棉团", "多个死棉团", "黑点", "多个黑点", "沙眼", "多个沙眼", "藓细微", "藓50%面积", "藓大于50%"],
        selectedFlaw1: "",
        selectedFlaw1Index: 0,
        selectedFlaw2: "",
        selectedFlaw2Index: 0,
        selectedFlaw3: "",
        selectedFlaw3Index: 0,
        carvingPrice: "",
        finalPrice: null,
        showChineseFormat: !1,
        mutexGroups: [["一条石纹", "多条石纹"], ["死棉团", "多个死棉团"], ["黑点", "多个黑点"], ["沙眼", "多个沙眼"], ["藓细微", "藓50%面积", "藓大于50%"]],
        availableFlawTypes1: ["无瑕疵", "绺裂", "一条石纹", "多条石纹", "死棉团", "多个死棉团", "黑点", "多个黑点", "沙眼", "多个沙眼", "藓细微", "藓50%面积", "藓大于50%"],
        availableFlawTypes2: ["无瑕疵", "绺裂", "一条石纹", "多条石纹", "死棉团", "多个死棉团", "黑点", "多个黑点", "沙眼", "多个沙眼", "藓细微", "藓50%面积", "藓大于50%"],
        availableFlawTypes3: ["无瑕疵", "绺裂", "一条石纹", "多条石纹", "死棉团", "多个死棉团", "黑点", "多个黑点", "沙眼", "多个沙眼", "藓细微", "藓50%面积", "藓大于50%"]
    }),
    computed: {
        displayPrice() {
            return this.finalPrice ? this.showChineseFormat && parseFloat(this.finalPrice) >= 1e4 ? this.convertToChineseFormat(this.finalPrice) : this.finalPrice : ""
        }
    },
    methods: {
        verifyPassword() {
            if (!this.password)
                return void w({
                    title: "请输入密码",
                    icon: "none"
                });
            ie({
                title: "验证中..."
            });
            (new mt).post("http://localhost:3001", {
                cardKey: this.password
            }, {
                dataType: "json",
                withCredentials: !1
            }).then((e => {
                if (oe(),
                e.data && e.data.valid) {
                    this.isVerified = !0,
                    this.showPasswordModal = !1;
                    try {
                        ne("jade_calculator_verified", "true"),
                        "ACTIVATION_SUCCESS" == e.data.code && ne("jade_calculator_verified_time", (new Date).getTime())
                    } catch (t) {
                        console.error("存储验证状态失败", t)
                    }
                    w({
                        title: "验证成功",
                        icon: "success"
                    }),
                    this.$refs.pwdverify.close()
                } else
                    w({
                        title: "密码错误，请重试",
                        icon: "none"
                    }),
                    this.password = ""
            }
            )).catch((e => {
                oe(),
                console.error("验证请求失败", e),
                w({
                    title: "网络错误，请重试",
                    icon: "none"
                })
            }
            ))
        },
        checkVerification() {
            try {
                const e = re("jade_calculator_verified")
                  , t = re("jade_calculator_verified_time");
                if ("true" === e && t) {
                    const e = (new Date).getTime();
                    if (e - t < 864e5)
                        return this.isVerified = !0,
                        !0
                }
            } catch (e) {
                console.error("读取验证状态失败", e)
            }
            return !1
        },
        openWaterPicker() {
            this.isVerified ? this.$refs.waterPicker.open() : this.$refs.pwdverify.open()
        },
        onWaterChange(e) {
            const {index: t} = e;
            this.selectedWaterTypeIndex = t
        },
        onWaterConfirm(e) {
            this.selectedWaterType = this.waterTypes[this.selectedWaterTypeIndex].value
        },
        getWaterTypeLabel(e) {
            const t = this.waterTypes.find((t => t.value === e));
            return t ? t.label : ""
        },
        openColorPicker() {
            this.isVerified ? this.$refs.colorPicker.open() : this.showPasswordModal = !0
        },
        onColorChange(e) {
            const {columnIndex: t, index: i} = e;
            0 === t ? (this.selectedColorIndex = i,
            this.$refs.colorPicker.setColumnValues(1, this.colorLevelData[this.colorColumns[0][i]])) : this.selectedColorLevelIndex = i
        },
        onColorConfirm(e) {
            const {value: t} = e;
            this.selectedColor = t[0],
            this.selectedColorLevel = t[1]
        },
        onShapeChange(e) {
            const {columnIndex: t, index: i} = e;
            0 === t ? (this.selectedShapeTypeIndex = i,
            this.$refs.shapePicker.setColumnValues(1, this.shapeData[this.shapeColumns[0][i]])) : this.selectedShapeIndex = i
        },
        onShapeConfirm(e) {
            const {value: t} = e;
            this.selectedShapeType = t[0],
            this.selectedShape = t[1]
        },
        openShapePicker() {
            this.isVerified ? this.$refs.shapePicker.open() : this.showPasswordModal = !0
        },
        openFlaw1Picker() {
            this.isVerified ? this.$refs.flaw1Picker.open() : this.showPasswordModal = !0
        },
        openFlaw2Picker() {
            this.isVerified ? this.$refs.flaw2Picker.open() : this.showPasswordModal = !0
        },
        openFlaw3Picker() {
            this.isVerified ? this.$refs.flaw3Picker.open() : this.showPasswordModal = !0
        },
        onFlaw1Change(e) {
            const {index: t, value: i} = e;
            this.selectedFlaw1Index = t
        },
        onFlaw1Confirm(e) {
            const {value: t, index: i} = e;
            this.selectedFlaw1 = t[0],
            this.selectedFlaw1Index = i,
            this.updateAvailableFlawTypes()
        },
        onFlaw2Change(e) {
            const {index: t, value: i} = e;
            this.selectedFlaw2Index = t
        },
        onFlaw2Confirm(e) {
            const {value: t, index: i} = e;
            this.selectedFlaw2 = t[0],
            this.selectedFlaw2Index = i,
            this.updateAvailableFlawTypes()
        },
        onFlaw3Change(e) {
            const {index: t, value: i} = e;
            this.selectedFlaw3Index = t
        },
        onFlaw3Confirm(e) {
            const {value: t, index: i} = e;
            this.selectedFlaw3 = t[0],
            this.selectedFlaw3Index = i,
            this.updateAvailableFlawTypes()
        },
        updateAvailableFlawTypes() {
            const e = ["无瑕疵", "绺裂", "一条石纹", "多条石纹", "死棉团", "多个死棉团", "黑点", "多个黑点", "沙眼", "多个沙眼", "藓细微", "藓50%面积", "藓大于50%"]
              , t = [this.selectedFlaw1, this.selectedFlaw2, this.selectedFlaw3].filter((e => e))
              , i = this.getSelectedMutexTypes(t);
            console.log("已选择的瑕疵:", t),
            console.log("互斥类型:", i),
            this.availableFlawTypes1 = this.getAvailableFlawTypesForPicker(1, e, t, i),
            this.availableFlawTypes2 = this.getAvailableFlawTypesForPicker(2, e, t, i),
            this.availableFlawTypes3 = this.getAvailableFlawTypesForPicker(3, e, t, i)
        },
        getSelectedMutexTypes(e) {
            const t = [];
            return this.mutexGroups.forEach((i => {
                e.filter((e => i.includes(e))).length > 0 && t.push(...i)
            }
            )),
            t
        },
        getAvailableFlawTypesForPicker(e, t, i, o) {
            const n = 1 === e ? this.selectedFlaw1 : 2 === e ? this.selectedFlaw2 : this.selectedFlaw3
              , r = i.filter((t => (1 !== e || t !== this.selectedFlaw1) && ((2 !== e || t !== this.selectedFlaw2) && (3 !== e || t !== this.selectedFlaw3))));
            return t.filter((e => {
                if (e === n)
                    return !0;
                if (r.includes(e))
                    return !1;
                for (const t of this.mutexGroups)
                    if (t.includes(e))
                        for (const e of r)
                            if (t.includes(e))
                                return !1;
                return !0
            }
            ))
        },
        calculatePrice() {
            if (!this.isVerified)
                return void (this.showPasswordModal = !0);
            if (!(this.selectedWaterType && this.selectedColor && this.selectedColorLevel && this.selectedShape))
                return void w({
                    title: "请完整填写所有必选项",
                    icon: "none"
                });
            let e = this.selectedWaterType * this.getColorMultiplier() * this.getShapeMultiplier() * this.getFlawMultiplier();
            this.carvingPrice && (e += Number(this.carvingPrice)),
            this.finalPrice = e.toFixed(2),
            this.showChineseFormat = !1
        },
        getColorMultiplier() {
            var e;
            return (null == (e = {
                "浅绿": {
                    "满色": 5,
                    "50%": 3,
                    "低于一半": 2
                },
                "果绿": {
                    "满色": 10,
                    "50%": 5,
                    "低于一半": 3
                },
                "阳绿": {
                    "满色": 20,
                    "50%": 10,
                    "低于一半": 6
                },
                "帝王绿": {
                    "满色": 80,
                    "50%": 30,
                    "低于一半": 15
                },
                "粉紫": {
                    "满色": 10,
                    "50%": 6,
                    "低于一半": 3
                },
                "茄紫": {
                    "满色": 20,
                    "50%": 10,
                    "低于一半": 5
                },
                "帝王紫": {
                    "满色": 60,
                    "50%": 30,
                    "低于一半": 15
                },
                "黄色": {
                    "满色": 15,
                    "50%": 9,
                    "低于一半": 6
                },
                "浅黄色": {
                    "满色": 10,
                    "50%": 6,
                    "低于一半": 4
                },
                "红色": {
                    "满色": 45,
                    "50%": 30,
                    "低于一半": 15
                },
                "浅红色": {
                    "满色": 30,
                    "50%": 20,
                    "低于一半": 10
                },
                "蓝水": {
                    "满色": 10,
                    "50%": 6,
                    "低于一半": 4
                },
                "蓝底": {
                    "满色": 5,
                    "50%": 3,
                    "低于一半": 2
                },
                "晴水": {
                    "满色": 12,
                    "50%": 8,
                    "低于一半": 4
                },
                "晴底": {
                    "满色": 6,
                    "50%": 4,
                    "低于一半": 2
                },
                "飘绿花": {
                    "高于一半": 5,
                    "低于一半": 4
                },
                "飘蓝花": {
                    "高于一半": 3,
                    "低于一半": 2
                }
            }[this.selectedColor]) ? void 0 : e[this.selectedColorLevel]) || 1
        },
        getShapeMultiplier() {
            return {
                "镯型": {
                    "宽版轮胎镯": 1.3,
                    "胖圆条手镯": 1.2,
                    "圆条手镯": 1,
                    "正装手镯": 1,
                    "贵妃镯": .8,
                    "美人镯": .7,
                    "方镯": .9,
                    "怪异镯": .8
                },
                "挂件尺寸": {
                    "正装宽四高六": .1,
                    "小于宽四高六": .08,
                    "大于宽四高六": .15
                },
                "蛋面尺寸": {
                    "6：8": .03,
                    "7：9": .06,
                    "8：10": .08,
                    "10：12": .1,
                    "12：14": .12,
                    "14：16": .15
                }
            }[this.selectedShapeType][this.selectedShape] || 1
        },
        getFlawMultiplier() {
            let e = [1];
            return this.selectedFlaw1 && e.push(this.getFlawValue(this.selectedFlaw1)),
            this.selectedFlaw2 && e.push(this.getFlawValue(this.selectedFlaw2)),
            this.selectedFlaw3 && e.push(this.getFlawValue(this.selectedFlaw3)),
            Math.min(...e)
        },
        getFlawValue: e => ({
            "无瑕疵": 1,
            "绺裂": .1,
            "一条石纹": .8,
            "多条石纹": .3,
            "死棉团": .9,
            "多个死棉团": .5,
            "黑点": .9,
            "多个黑点": .7,
            "沙眼": .5,
            "多个沙眼": .2,
            "藓细微": .8,
            "藓50%面积": .5,
            "藓大于50%": .2
        }[e] || 1),
        togglePriceFormat() {
            console.log("切换价格显示格式"),
            this.showChineseFormat = !this.showChineseFormat
        },
        convertToChineseFormat(e) {
            const t = parseFloat(e);
            if (t >= 1e4) {
                return (t / 1e4).toFixed(2).replace(/\.?0+$/, "") + "万"
            }
            return e
        }
    },
    onLoad() {
        ae({
            title: "翡翠价格计算器"
        }),
        se({
            frontColor: "#ffffff",
            backgroundColor: "#15803D"
        }),
        this.updateAvailableFlawTypes(),
        this.checkVerification()
    }
}, [["render", function(e, t, i, o, n, r) {
    const a = Me(V("uv-alert"), He)
      , s = Me(V("uv-input"), We)
      , l = Me(V("uv-button"), Je)
      , c = M
      , u = Me(V("uv-popup"), Qe)
      , d = E
      , p = Me(V("uv-icon"), Ee)
      , f = Me(V("uv-picker"), tt);
    return I(),
    F(c, {
        class: "content"
    }, {
        default: z(( () => [U(u, {
            ref: "pwdverify",
            modelValue: n.showPasswordModal,
            "onUpdate:modelValue": t[1] || (t[1] = e => n.showPasswordModal = e),
            title: "卡密验证",
            "show-cancel-button": !1,
            "close-on-click-overlay": !1,
            customStyle: n.passwordBox
        }, {
            default: z(( () => [U(a, {
                title: "卡密从初次验证后24小时内有效.",
                type: "warning",
                description: ""
            }), U(c, {
                class: "password-container"
            }, {
                default: z(( () => [U(s, {
                    modelValue: n.password,
                    "onUpdate:modelValue": t[0] || (t[0] = e => n.password = e),
                    type: "text",
                    placeholder: "请输入卡密",
                    customStyle: {
                        width: "100%",
                        marginBottom: "20rpx",
                        backgroundColor: "#f5f5f5",
                        borderRadius: "8rpx",
                        padding: "20rpx"
                    }
                }, null, 8, ["modelValue"]), U(l, {
                    type: "primary",
                    onClick: r.verifyPassword,
                    customStyle: {
                        backgroundColor: "#15803D",
                        borderColor: "#15803D"
                    }
                }, {
                    default: z(( () => [A("验证")])),
                    _: 1
                }, 8, ["onClick"])])),
                _: 1
            })])),
            _: 1
        }, 8, ["modelValue", "customStyle"]), U(c, {
            class: "page-title"
        }, {
            default: z(( () => [U(d, {
                class: "title-text"
            }, {
                default: z(( () => [A("翡翠价格计算器")])),
                _: 1
            }), U(c, {
                class: "divider"
            })])),
            _: 1
        }), U(c, {
            class: "section"
        }, {
            default: z(( () => [U(c, {
                class: "section-header"
            }, {
                default: z(( () => [U(c, {
                    class: "section-title"
                }, {
                    default: z(( () => [U(p, {
                        name: "feicui1",
                        "custom-prefix": "custom-icon",
                        size: "30",
                        color: "#15803D"
                    }), A("种水")])),
                    _: 1
                }), U(c, {
                    class: "select-group"
                }, {
                    default: z(( () => [U(c, {
                        class: "picker-row"
                    }, {
                        default: z(( () => [U(c, {
                            class: "picker-wrapper",
                            onClick: r.openWaterPicker
                        }, {
                            default: z(( () => [U(d, {
                                class: "picker-text"
                            }, {
                                default: z(( () => [A(N(n.selectedWaterType ? r.getWaterTypeLabel(n.selectedWaterType) : "请选择种水"), 1)])),
                                _: 1
                            }), U(d, {
                                class: "picker-arrow"
                            }, {
                                default: z(( () => [A("▼")])),
                                _: 1
                            })])),
                            _: 1
                        }, 8, ["onClick"])])),
                        _: 1
                    })])),
                    _: 1
                })])),
                _: 1
            }), U(f, {
                ref: "waterPicker",
                columns: [n.waterTypeLabels],
                onConfirm: r.onWaterConfirm,
                onChange: r.onWaterChange,
                activeColor: "#15803D"
            }, null, 8, ["columns", "onConfirm", "onChange"])])),
            _: 1
        }), U(c, {
            class: "section"
        }, {
            default: z(( () => [U(c, {
                class: "section-header"
            }, {
                default: z(( () => [U(c, {
                    class: "section-title"
                }, {
                    default: z(( () => [U(p, {
                        name: "sehuan",
                        "custom-prefix": "custom-icon",
                        size: "30",
                        color: "#15803D"
                    }), A("颜色")])),
                    _: 1
                }), U(c, {
                    class: "select-group"
                }, {
                    default: z(( () => [U(c, {
                        class: "picker-row"
                    }, {
                        default: z(( () => [U(c, {
                            class: "picker-wrapper",
                            onClick: r.openColorPicker
                        }, {
                            default: z(( () => [U(d, {
                                class: "picker-text"
                            }, {
                                default: z(( () => [A(N(n.selectedColor ? `${n.selectedColor} - ${n.selectedColorLevel}` : "请选择颜色"), 1)])),
                                _: 1
                            }), U(d, {
                                class: "picker-arrow"
                            }, {
                                default: z(( () => [A("▼")])),
                                _: 1
                            })])),
                            _: 1
                        }, 8, ["onClick"])])),
                        _: 1
                    })])),
                    _: 1
                })])),
                _: 1
            }), U(f, {
                ref: "colorPicker",
                columns: n.colorColumns,
                onConfirm: r.onColorConfirm,
                onChange: r.onColorChange,
                activeColor: "#15803D"
            }, null, 8, ["columns", "onConfirm", "onChange"])])),
            _: 1
        }), U(c, {
            class: "section"
        }, {
            default: z(( () => [U(c, {
                class: "section-header"
            }, {
                default: z(( () => [U(c, {
                    class: "section-title"
                }, {
                    default: z(( () => [U(p, {
                        name: "zumulv",
                        "custom-prefix": "custom-icon",
                        size: "30",
                        color: "#15803D"
                    }), A("形状及尺寸")])),
                    _: 1
                }), U(c, {
                    class: "select-group"
                }, {
                    default: z(( () => [U(c, {
                        class: "picker-row"
                    }, {
                        default: z(( () => [U(c, {
                            class: "picker-wrapper",
                            onClick: r.openShapePicker
                        }, {
                            default: z(( () => [U(d, {
                                class: "picker-text"
                            }, {
                                default: z(( () => [A(N(n.selectedShapeType ? `${n.selectedShapeType} - ${n.selectedShape}` : "请选择形状"), 1)])),
                                _: 1
                            }), U(d, {
                                class: "picker-arrow"
                            }, {
                                default: z(( () => [A("▼")])),
                                _: 1
                            })])),
                            _: 1
                        }, 8, ["onClick"])])),
                        _: 1
                    })])),
                    _: 1
                })])),
                _: 1
            }), U(f, {
                ref: "shapePicker",
                columns: n.shapeColumns,
                onConfirm: r.onShapeConfirm,
                onChange: r.onShapeChange,
                activeColor: "#15803D"
            }, null, 8, ["columns", "onConfirm", "onChange"])])),
            _: 1
        }), U(c, {
            class: "section"
        }, {
            default: z(( () => [U(c, {
                class: "section-header"
            }, {
                default: z(( () => [U(c, {
                    class: "section-title"
                }, {
                    default: z(( () => [U(p, {
                        name: "quexianxiaci",
                        "custom-prefix": "custom-icon",
                        size: "30",
                        color: "#15803D"
                    }), A("瑕疵1")])),
                    _: 1
                }), U(c, {
                    class: "select-group"
                }, {
                    default: z(( () => [U(c, {
                        class: "picker-row"
                    }, {
                        default: z(( () => [U(c, {
                            class: "picker-wrapper",
                            onClick: r.openFlaw1Picker
                        }, {
                            default: z(( () => [U(d, {
                                class: "picker-text"
                            }, {
                                default: z(( () => [A(N(n.selectedFlaw1 || "请选择瑕疵1"), 1)])),
                                _: 1
                            }), U(d, {
                                class: "picker-arrow"
                            }, {
                                default: z(( () => [A("▼")])),
                                _: 1
                            })])),
                            _: 1
                        }, 8, ["onClick"])])),
                        _: 1
                    })])),
                    _: 1
                })])),
                _: 1
            }), U(f, {
                ref: "flaw1Picker",
                columns: [n.availableFlawTypes1],
                onConfirm: r.onFlaw1Confirm,
                onChange: r.onFlaw1Change,
                activeColor: "#15803D"
            }, null, 8, ["columns", "onConfirm", "onChange"])])),
            _: 1
        }), U(c, {
            class: "section"
        }, {
            default: z(( () => [U(c, {
                class: "section-header"
            }, {
                default: z(( () => [U(c, {
                    class: "section-title"
                }, {
                    default: z(( () => [U(p, {
                        name: "quexianxiaci",
                        "custom-prefix": "custom-icon",
                        size: "30",
                        color: "#15803D"
                    }), A("瑕疵2")])),
                    _: 1
                }), U(c, {
                    class: "select-group"
                }, {
                    default: z(( () => [U(c, {
                        class: "picker-row"
                    }, {
                        default: z(( () => [U(c, {
                            class: "picker-wrapper",
                            onClick: r.openFlaw2Picker
                        }, {
                            default: z(( () => [U(d, {
                                class: "picker-text"
                            }, {
                                default: z(( () => [A(N(n.selectedFlaw2 || "请选择瑕疵2"), 1)])),
                                _: 1
                            }), U(d, {
                                class: "picker-arrow"
                            }, {
                                default: z(( () => [A("▼")])),
                                _: 1
                            })])),
                            _: 1
                        }, 8, ["onClick"])])),
                        _: 1
                    })])),
                    _: 1
                })])),
                _: 1
            }), U(f, {
                ref: "flaw2Picker",
                columns: [n.availableFlawTypes2],
                onConfirm: r.onFlaw2Confirm,
                onChange: r.onFlaw2Change,
                activeColor: "#15803D"
            }, null, 8, ["columns", "onConfirm", "onChange"])])),
            _: 1
        }), U(c, {
            class: "section"
        }, {
            default: z(( () => [U(c, {
                class: "section-header"
            }, {
                default: z(( () => [U(c, {
                    class: "section-title"
                }, {
                    default: z(( () => [U(p, {
                        name: "quexianxiaci",
                        "custom-prefix": "custom-icon",
                        size: "30",
                        color: "#15803D"
                    }), A("瑕疵3")])),
                    _: 1
                }), U(c, {
                    class: "select-group"
                }, {
                    default: z(( () => [U(c, {
                        class: "picker-row"
                    }, {
                        default: z(( () => [U(c, {
                            class: "picker-wrapper",
                            onClick: r.openFlaw3Picker
                        }, {
                            default: z(( () => [U(d, {
                                class: "picker-text"
                            }, {
                                default: z(( () => [A(N(n.selectedFlaw3 || "请选择瑕疵3"), 1)])),
                                _: 1
                            }), U(d, {
                                class: "picker-arrow"
                            }, {
                                default: z(( () => [A("▼")])),
                                _: 1
                            })])),
                            _: 1
                        }, 8, ["onClick"])])),
                        _: 1
                    })])),
                    _: 1
                })])),
                _: 1
            }), U(f, {
                ref: "flaw3Picker",
                columns: [n.availableFlawTypes3],
                onConfirm: r.onFlaw3Confirm,
                onChange: r.onFlaw3Change,
                activeColor: "#15803D"
            }, null, 8, ["columns", "onConfirm", "onChange"])])),
            _: 1
        }), U(c, {
            class: "section"
        }, {
            default: z(( () => [U(c, {
                class: "section-header"
            }, {
                default: z(( () => [U(c, {
                    class: "section-title"
                }, {
                    default: z(( () => [U(p, {
                        name: "feicui",
                        "custom-prefix": "custom-icon",
                        size: "30",
                        color: "#15803D"
                    }), A("雕刻加价")])),
                    _: 1
                }), U(c, {
                    class: "select-group"
                }, {
                    default: z(( () => [U(c, {
                        class: "picker-row"
                    }, {
                        default: z(( () => [U(s, {
                            modelValue: n.carvingPrice,
                            "onUpdate:modelValue": t[2] || (t[2] = e => n.carvingPrice = e),
                            type: "number",
                            fontSize: "38rpx",
                            color: "15803D",
                            placeholder: "请输入雕刻加价金额",
                            customStyle: {
                                flex: 1,
                                height: "80rpx",
                                backgroundColor: "#f5f5f5",
                                borderRadius: "8rpx",
                                padding: "0 30rpx"
                            }
                        }, null, 8, ["modelValue"])])),
                        _: 1
                    })])),
                    _: 1
                })])),
                _: 1
            })])),
            _: 1
        }), U(c, {
            class: "calc-button"
        }, {
            default: z(( () => [U(l, {
                type: "primary",
                onClick: r.calculatePrice,
                shape: "circle",
                customStyle: {
                    backgroundColor: "#15803D",
                    borderColor: "#15803D",
                    fontSize: "32rpx",
                    padding: "20rpx 60rpx"
                }
            }, {
                default: z(( () => [A("计算价格")])),
                _: 1
            }, 8, ["onClick"])])),
            _: 1
        }), n.finalPrice ? (I(),
        F(c, {
            key: 0,
            class: "result-area"
        }, {
            default: z(( () => [U(d, {
                class: "price",
                onClick: r.togglePriceFormat
            }, {
                default: z(( () => [A(N(r.displayPrice), 1)])),
                _: 1
            }, 8, ["onClick"]), U(d, {
                class: "note"
            }, {
                default: z(( () => [A("结果为市场参考，建议上下幅度不超过30%")])),
                _: 1
            })])),
            _: 1
        })) : D("", !0)])),
        _: 1
    })
}
], ["__scopeId", "data-v-81ccb325"]]);
export {yt as default};
