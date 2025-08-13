import { importShared, __tla as __tla_0 } from './__federation_fn_import-JJi9_Sb3.js';
import { c as commonjsRequire, b as getDefaultExportFromCjs, a as commonjsGlobal } from './_commonjs-dynamic-modules-DMroSJ9D.js';
let useWiki, wikiProvider;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    var gun$1 = {
        exports: {}
    };
    gun$1.exports;
    (function(module) {
        (function() {
            function USE(arg, req) {
                return req ? commonjsRequire(arg) : arg.slice ? USE[R(arg)] : function(mod, path) {
                    arg(mod = {
                        exports: {}
                    });
                    USE[R(path)] = mod.exports;
                };
                function R(p) {
                    return p.split('/').slice(-1).toString().replace('.js', '');
                }
            }
            {
                var MODULE = module;
            }
            USE(function(module) {
                String.random = function(l, c) {
                    var s = '';
                    l = l || 24;
                    c = c || '0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz';
                    while(l-- > 0){
                        s += c.charAt(Math.floor(Math.random() * c.length));
                    }
                    return s;
                };
                String.match = function(t, o) {
                    var tmp, u;
                    if ('string' !== typeof t) {
                        return false;
                    }
                    if ('string' == typeof o) {
                        o = {
                            '=': o
                        };
                    }
                    o = o || {};
                    tmp = (o['='] || o['*'] || o['>'] || o['<']);
                    if (t === tmp) {
                        return true;
                    }
                    if (u !== o['=']) {
                        return false;
                    }
                    tmp = (o['*'] || o['>']);
                    if (t.slice(0, (tmp || '').length) === tmp) {
                        return true;
                    }
                    if (u !== o['*']) {
                        return false;
                    }
                    if (u !== o['>'] && u !== o['<']) {
                        return (t >= o['>'] && t <= o['<']) ? true : false;
                    }
                    if (u !== o['>'] && t >= o['>']) {
                        return true;
                    }
                    if (u !== o['<'] && t <= o['<']) {
                        return true;
                    }
                    return false;
                };
                String.hash = function(s, c) {
                    if (typeof s !== 'string') {
                        return;
                    }
                    c = c || 0;
                    if (!s.length) {
                        return c;
                    }
                    for(var i = 0, l = s.length, n; i < l; ++i){
                        n = s.charCodeAt(i);
                        c = ((c << 5) - c) + n;
                        c |= 0;
                    }
                    return c;
                };
                var has = Object.prototype.hasOwnProperty;
                Object.plain = function(o) {
                    return o ? (o instanceof Object && o.constructor === Object) || Object.prototype.toString.call(o).match(/^\[object (\w+)\]$/)[1] === 'Object' : false;
                };
                Object.empty = function(o, n) {
                    for(var k in o){
                        if (has.call(o, k) && (!n || -1 == n.indexOf(k))) {
                            return false;
                        }
                    }
                    return true;
                };
                Object.keys = Object.keys || function(o) {
                    var l = [];
                    for(var k in o){
                        if (has.call(o, k)) {
                            l.push(k);
                        }
                    }
                    return l;
                };
                (function() {
                    var u, sT = setTimeout, l = 0, c = 0, sI = (typeof setImmediate !== '' + u && setImmediate) || (function(c, f) {
                        if (typeof MessageChannel == '' + u) {
                            return sT;
                        }
                        (c = new MessageChannel()).port1.onmessage = function(e) {
                            '' == e.data && f();
                        };
                        return function(q) {
                            f = q;
                            c.port2.postMessage('');
                        };
                    }()), check = sT.check = sT.check || (typeof performance !== '' + u && performance) || {
                        now: function() {
                            return +new Date;
                        }
                    };
                    sT.hold = sT.hold || 9;
                    sT.poll = sT.poll || function(f) {
                        if ((sT.hold >= (check.now() - l)) && c++ < 3333) {
                            f();
                            return;
                        }
                        sI(function() {
                            l = check.now();
                            f();
                        }, c = 0);
                    };
                }());
                (function() {
                    var sT = setTimeout, t = sT.turn = sT.turn || function(f) {
                        1 == s.push(f) && p(T);
                    }, s = t.s = [], p = sT.poll, i = 0, f, T = function() {
                        if (f = s[i++]) {
                            f();
                        }
                        if (i == s.length || 99 == i) {
                            s = t.s = s.slice(i);
                            i = 0;
                        }
                        if (s.length) {
                            p(T);
                        }
                    };
                }());
                (function() {
                    var u, sT = setTimeout, T = sT.turn;
                    (sT.each = sT.each || function(l, f, e, S) {
                        S = S || 9;
                        (function t(s, L, r) {
                            if (L = (s = (l || []).splice(0, S)).length) {
                                for(var i = 0; i < L; i++){
                                    if (u !== (r = f(s[i]))) {
                                        break;
                                    }
                                }
                                if (u === r) {
                                    T(t);
                                    return;
                                }
                            }
                            e && e(r);
                        }());
                    })();
                }());
            })(USE, './shim');
            USE(function(module) {
                module.exports = function onto(tag, arg, as) {
                    if (!tag) {
                        return {
                            to: onto
                        };
                    }
                    var u, f = 'function' == typeof arg, tag = (this.tag || (this.tag = {}))[tag] || f && (this.tag[tag] = {
                        tag: tag,
                        to: onto._ = {
                            next: function(arg) {
                                var tmp;
                                if (tmp = this.to) {
                                    tmp.next(arg);
                                }
                            }
                        }
                    });
                    if (f) {
                        var be = {
                            off: onto.off || (onto.off = function() {
                                if (this.next === onto._.next) {
                                    return true;
                                }
                                if (this === this.the.last) {
                                    this.the.last = this.back;
                                }
                                this.to.back = this.back;
                                this.next = onto._.next;
                                this.back.to = this.to;
                                if (this.the.last === this.the) {
                                    delete this.on.tag[this.the.tag];
                                }
                            }),
                            to: onto._,
                            next: arg,
                            the: tag,
                            on: this,
                            as: as
                        };
                        (be.back = tag.last || tag).to = be;
                        return tag.last = be;
                    }
                    if ((tag = tag.to) && u !== arg) {
                        tag.next(arg);
                    }
                    return tag;
                };
            })(USE, './onto');
            USE(function(module) {
                module.exports = function(v) {
                    return v === null || "string" === typeof v || "boolean" === typeof v || ("number" === typeof v && v != Infinity && v != -Infinity && v === v) || (!!v && "string" == typeof v["#"] && Object.keys(v).length === 1 && v["#"]);
                };
            })(USE, './valid');
            USE(function(module) {
                USE('./shim');
                function State() {
                    var t = +new Date;
                    if (last < t) {
                        return N = 0, last = t + State.drift;
                    }
                    return last = t + ((N += 1) / D) + State.drift;
                }
                State.drift = 0;
                var NI = -Infinity, N = 0, D = 999, last = NI, u;
                State.is = function(n, k, o) {
                    var tmp = (k && n && n._ && n._['>']) || o;
                    if (!tmp) {
                        return;
                    }
                    return ('number' == typeof (tmp = tmp[k])) ? tmp : NI;
                };
                State.ify = function(n, k, s, v, soul) {
                    (n = n || {})._ = n._ || {};
                    if (soul) {
                        n._['#'] = soul;
                    }
                    var tmp = n._['>'] || (n._['>'] = {});
                    if (u !== k && k !== '_') {
                        if ('number' == typeof s) {
                            tmp[k] = s;
                        }
                        if (u !== v) {
                            n[k] = v;
                        }
                    }
                    return n;
                };
                module.exports = State;
            })(USE, './state');
            USE(function(module) {
                USE('./shim');
                function Dup(opt) {
                    var dup = {
                        s: {}
                    }, s = dup.s;
                    opt = opt || {
                        max: 999,
                        age: 1000 * 9
                    };
                    dup.check = function(id) {
                        if (!s[id]) {
                            return false;
                        }
                        return dt(id);
                    };
                    var dt = dup.track = function(id) {
                        var it = s[id] || (s[id] = {});
                        it.was = dup.now = +new Date;
                        if (!dup.to) {
                            dup.to = setTimeout(dup.drop, opt.age + 9);
                        }
                        if (dt.ed) {
                            dt.ed(id);
                        }
                        return it;
                    };
                    dup.drop = function(age) {
                        dup.to = null;
                        dup.now = +new Date;
                        var l = Object.keys(s);
                        console.STAT && console.STAT(dup.now, +new Date - dup.now, 'dup drop keys');
                        setTimeout.each(l, function(id) {
                            var it = s[id];
                            if (it && (age || opt.age) > (dup.now - it.was)) {
                                return;
                            }
                            delete s[id];
                        }, 0, 99);
                    };
                    return dup;
                }
                module.exports = Dup;
            })(USE, './dup');
            USE(function(module) {
                USE('./onto');
                module.exports = function ask(cb, as) {
                    if (!this.on) {
                        return;
                    }
                    var lack = (this.opt || {}).lack || 9000;
                    if (!('function' == typeof cb)) {
                        if (!cb) {
                            return;
                        }
                        var id = cb['#'] || cb, tmp = (this.tag || '')[id];
                        if (!tmp) {
                            return;
                        }
                        if (as) {
                            tmp = this.on(id, as);
                            clearTimeout(tmp.err);
                            tmp.err = setTimeout(function() {
                                tmp.off();
                            }, lack);
                        }
                        return true;
                    }
                    var id = (as && as['#']) || random(9);
                    if (!cb) {
                        return id;
                    }
                    var to = this.on(id, cb, as);
                    to.err = to.err || setTimeout(function() {
                        to.off();
                        to.next({
                            err: "Error: No ACK yet.",
                            lack: true
                        });
                    }, lack);
                    return id;
                };
                var random = String.random || function() {
                    return Math.random().toString(36).slice(2);
                };
            })(USE, './ask');
            USE(function(module) {
                function Gun(o) {
                    if (o instanceof Gun) {
                        return (this._ = {
                            $: this
                        }).$;
                    }
                    if (!(this instanceof Gun)) {
                        return new Gun(o);
                    }
                    return Gun.create(this._ = {
                        $: this,
                        opt: o
                    });
                }
                Gun.is = function($) {
                    return ($ instanceof Gun) || ($ && $._ && ($ === $._.$)) || false;
                };
                Gun.version = 0.2020;
                Gun.chain = Gun.prototype;
                Gun.chain.toJSON = function() {};
                USE('./shim');
                Gun.valid = USE('./valid');
                Gun.state = USE('./state');
                Gun.on = USE('./onto');
                Gun.dup = USE('./dup');
                Gun.ask = USE('./ask');
                (function() {
                    Gun.create = function(at) {
                        at.root = at.root || at;
                        at.graph = at.graph || {};
                        at.on = at.on || Gun.on;
                        at.ask = at.ask || Gun.ask;
                        at.dup = at.dup || Gun.dup();
                        var gun = at.$.opt(at.opt);
                        if (!at.once) {
                            at.on('in', universe, at);
                            at.on('out', universe, at);
                            at.on('put', map, at);
                            Gun.on('create', at);
                            at.on('create', at);
                        }
                        at.once = 1;
                        return gun;
                    };
                    function universe(msg) {
                        if (!msg) {
                            return;
                        }
                        if (msg.out === universe) {
                            this.to.next(msg);
                            return;
                        }
                        var eve = this, as = eve.as, at = as.at || as, gun = at.$, dup = at.dup, tmp, DBG = msg.DBG;
                        (tmp = msg['#']) || (tmp = msg['#'] = text_rand(9));
                        if (dup.check(tmp)) {
                            return;
                        }
                        dup.track(tmp);
                        tmp = msg._;
                        msg._ = ('function' == typeof tmp) ? tmp : function() {};
                        (msg.$ && (msg.$ === (msg.$._ || '').$)) || (msg.$ = gun);
                        if (msg['@'] && !msg.put) {
                            ack(msg);
                        }
                        if (!at.ask(msg['@'], msg)) {
                            DBG && (DBG.u = +new Date);
                            if (msg.put) {
                                put(msg);
                                return;
                            } else if (msg.get) {
                                Gun.on.get(msg, gun);
                            }
                        }
                        DBG && (DBG.uc = +new Date);
                        eve.to.next(msg);
                        DBG && (DBG.ua = +new Date);
                        if (msg.nts || msg.NTS) {
                            return;
                        }
                        msg.out = universe;
                        at.on('out', msg);
                        DBG && (DBG.ue = +new Date);
                    }
                    function put(msg) {
                        if (!msg) {
                            return;
                        }
                        var ctx = msg._ || '', root = ctx.root = ((ctx.$ = msg.$ || '')._ || '').root;
                        if (msg['@'] && ctx.faith && !ctx.miss) {
                            msg.out = universe;
                            root.on('out', msg);
                            return;
                        }
                        ctx.latch = root.hatch;
                        ctx.match = root.hatch = [];
                        var put = msg.put;
                        var DBG = ctx.DBG = msg.DBG, S = +new Date;
                        CT = CT || S;
                        if (put['#'] && put['.']) {
                            return;
                        }
                        DBG && (DBG.p = S);
                        ctx['#'] = msg['#'];
                        ctx.msg = msg;
                        ctx.all = 0;
                        ctx.stun = 1;
                        var nl = Object.keys(put);
                        console.STAT && console.STAT(S, ((DBG || ctx).pk = +new Date) - S, 'put sort');
                        var ni = 0, nj, kl, soul, node, states, err, tmp;
                        (function pop(o) {
                            if (nj != ni) {
                                nj = ni;
                                if (!(soul = nl[ni])) {
                                    console.STAT && console.STAT(S, ((DBG || ctx).pd = +new Date) - S, 'put');
                                    fire(ctx);
                                    return;
                                }
                                if (!(node = put[soul])) {
                                    err = ERR + cut(soul) + "no node.";
                                } else if (!(tmp = node._)) {
                                    err = ERR + cut(soul) + "no meta.";
                                } else if (soul !== tmp['#']) {
                                    err = ERR + cut(soul) + "soul not same.";
                                } else if (!(states = tmp['>'])) {
                                    err = ERR + cut(soul) + "no state.";
                                }
                                kl = Object.keys(node || {});
                            }
                            if (err) {
                                msg.err = ctx.err = err;
                                fire(ctx);
                                return;
                            }
                            var i = 0, key;
                            o = o || 0;
                            while(o++ < 9 && (key = kl[i++])){
                                if ('_' === key) {
                                    continue;
                                }
                                var val = node[key], state = states[key];
                                if (u === state) {
                                    err = ERR + cut(key) + "on" + cut(soul) + "no state.";
                                    break;
                                }
                                if (!valid(val)) {
                                    err = ERR + cut(key) + "on" + cut(soul) + "bad " + (typeof val) + cut(val);
                                    break;
                                }
                                ham(val, key, soul, state, msg);
                                ++C;
                            }
                            if ((kl = kl.slice(i)).length) {
                                turn(pop);
                                return;
                            }
                            ++ni;
                            kl = null;
                            pop(o);
                        }());
                    }
                    Gun.on.put = put;
                    function ham(val, key, soul, state, msg) {
                        var ctx = msg._ || '', root = ctx.root, graph = root.graph, tmp;
                        var vertex = graph[soul] || empty, was = state_is(vertex, key, 1), known = vertex[key];
                        var DBG = ctx.DBG;
                        if (tmp = console.STAT) {
                            if (!graph[soul] || !known) {
                                tmp.has = (tmp.has || 0) + 1;
                            }
                        }
                        var now = State();
                        if (state > now) {
                            setTimeout(function() {
                                ham(val, key, soul, state, msg);
                            }, (tmp = state - now) > MD ? MD : tmp);
                            console.STAT && console.STAT(((DBG || ctx).Hf = +new Date), tmp, 'future');
                            return;
                        }
                        if (state < was) {
                            {
                                return;
                            }
                        }
                        if (!ctx.faith) {
                            if (state === was && (val === known || L(val) <= L(known))) {
                                if (!ctx.miss) {
                                    return;
                                }
                            }
                        }
                        ctx.stun++;
                        var aid = msg['#'] + ctx.all++, id = {
                            toString: function() {
                                return aid;
                            },
                            _: ctx
                        };
                        id.toJSON = id.toString;
                        root.dup.track(id)['#'] = msg['#'];
                        DBG && (DBG.ph = DBG.ph || +new Date);
                        root.on('put', {
                            '#': id,
                            '@': msg['@'],
                            put: {
                                '#': soul,
                                '.': key,
                                ':': val,
                                '>': state
                            },
                            ok: msg.ok,
                            _: ctx
                        });
                    }
                    function map(msg) {
                        var DBG;
                        if (DBG = (msg._ || '').DBG) {
                            DBG.pa = +new Date;
                            DBG.pm = DBG.pm || +new Date;
                        }
                        var eve = this, root = eve.as, graph = root.graph, ctx = msg._, put = msg.put, soul = put['#'], key = put['.'], val = put[':'], state = put['>'];
                        msg['#'];
                        var tmp;
                        if ((tmp = ctx.msg) && (tmp = tmp.put) && (tmp = tmp[soul])) {
                            state_ify(tmp, key, state, val, soul);
                        }
                        graph[soul] = state_ify(graph[soul], key, state, val, soul);
                        if (tmp = (root.next || '')[soul]) {
                            tmp.on('in', msg);
                        }
                        fire(ctx);
                        eve.to.next(msg);
                    }
                    function fire(ctx, msg) {
                        var root;
                        if (ctx.stop) {
                            return;
                        }
                        if (!ctx.err && 0 < --ctx.stun) {
                            return;
                        }
                        ctx.stop = 1;
                        if (!(root = ctx.root)) {
                            return;
                        }
                        var tmp = ctx.match;
                        tmp.end = 1;
                        if (tmp === root.hatch) {
                            if (!(tmp = ctx.latch) || tmp.end) {
                                delete root.hatch;
                            } else {
                                root.hatch = tmp;
                            }
                        }
                        ctx.hatch && ctx.hatch();
                        setTimeout.each(ctx.match, function(cb) {
                            cb && cb();
                        });
                        if (!(msg = ctx.msg) || ctx.err || msg.err) {
                            return;
                        }
                        msg.out = universe;
                        ctx.root.on('out', msg);
                        CF();
                    }
                    function ack(msg) {
                        var id = msg['@'] || '', ctx;
                        if (!(ctx = id._)) {
                            var dup = (dup = msg.$) && (dup = dup._) && (dup = dup.root) && (dup = dup.dup);
                            if (!(dup = dup.check(id))) {
                                return;
                            }
                            msg['@'] = dup['#'] || msg['@'];
                            return;
                        }
                        ctx.acks = (ctx.acks || 0) + 1;
                        if (ctx.err = msg.err) {
                            msg['@'] = ctx['#'];
                            fire(ctx);
                        }
                        ctx.ok = msg.ok || ctx.ok;
                        if (!ctx.stop && !ctx.crack) {
                            ctx.crack = ctx.match && ctx.match.push(function() {
                                back(ctx);
                            });
                        }
                        back(ctx);
                    }
                    function back(ctx) {
                        if (!ctx || !ctx.root) {
                            return;
                        }
                        if (ctx.stun || ctx.acks !== ctx.all) {
                            return;
                        }
                        ctx.root.on('in', {
                            '@': ctx['#'],
                            err: ctx.err,
                            ok: ctx.err ? u : ctx.ok || {
                                '': 1
                            }
                        });
                    }
                    var ERR = "Error: Invalid graph!";
                    var cut = function(s) {
                        return " '" + ('' + s).slice(0, 9) + "...' ";
                    };
                    var L = JSON.stringify, MD = 2147483647, State = Gun.state;
                    var C = 0, CT, CF = function() {
                        if (C > 999 && (C / -(CT - (CT = +new Date)) > 1)) {
                            Gun.window && console.log("Warning: You're syncing 1K+ records a second, faster than DOM can update - consider limiting query.");
                            CF = function() {
                                C = 0;
                            };
                        }
                    };
                }());
                (function() {
                    Gun.on.get = function(msg, gun) {
                        var root = gun._, get = msg.get, soul = get['#'], node = root.graph[soul], has = get['.'];
                        var next = root.next || (root.next = {}), at = next[soul];
                        var ctx = msg._ || {}, DBG = ctx.DBG = msg.DBG;
                        DBG && (DBG.g = +new Date);
                        if (!node) {
                            return root.on('get', msg);
                        }
                        if (has) {
                            if ('string' != typeof has || u === node[has]) {
                                if (!((at || '').next || '')[has]) {
                                    root.on('get', msg);
                                    return;
                                }
                            }
                            node = state_ify({}, has, state_is(node, has), node[has], soul);
                        }
                        node && ack(msg, node);
                        root.on('get', msg);
                    };
                    function ack(msg, node) {
                        var S = +new Date, ctx = msg._ || {}, DBG = ctx.DBG = msg.DBG;
                        var to = msg['#'], id = text_rand(9), keys = Object.keys(node || '').sort(), soul = ((node || '')._ || '')['#'];
                        keys.length;
                        var root = msg.$._.root, F = (node === root.graph[soul]);
                        console.STAT && console.STAT(S, ((DBG || ctx).gk = +new Date) - S, 'got keys');
                        node && (function go() {
                            S = +new Date;
                            var i = 0, k, put = {}, tmp;
                            while(i < 9 && (k = keys[i++])){
                                state_ify(put, k, state_is(node, k), node[k], soul);
                            }
                            keys = keys.slice(i);
                            (tmp = {})[soul] = put;
                            put = tmp;
                            var faith;
                            if (F) {
                                faith = function() {};
                                faith.ram = faith.faith = true;
                            }
                            tmp = keys.length;
                            console.STAT && console.STAT(S, -(S - (S = +new Date)), 'got copied some');
                            DBG && (DBG.ga = +new Date);
                            root.on('in', {
                                '@': to,
                                '#': id,
                                put: put,
                                '%': (tmp ? (id = text_rand(9)) : u),
                                $: root.$,
                                _: faith,
                                DBG: DBG,
                                FOO: 1
                            });
                            console.STAT && console.STAT(S, +new Date - S, 'got in');
                            if (!tmp) {
                                return;
                            }
                            setTimeout.turn(go);
                        }());
                        if (!node) {
                            root.on('in', {
                                '@': msg['#']
                            });
                        }
                    }
                    Gun.on.get.ack = ack;
                }());
                (function() {
                    Gun.chain.opt = function(opt) {
                        opt = opt || {};
                        var gun = this, at = gun._, tmp = opt.peers || opt;
                        if (!Object.plain(opt)) {
                            opt = {};
                        }
                        if (!Object.plain(at.opt)) {
                            at.opt = opt;
                        }
                        if ('string' == typeof tmp) {
                            tmp = [
                                tmp
                            ];
                        }
                        if (!Object.plain(at.opt.peers)) {
                            at.opt.peers = {};
                        }
                        if (tmp instanceof Array) {
                            opt.peers = {};
                            tmp.forEach(function(url) {
                                var p = {};
                                p.id = p.url = url;
                                opt.peers[url] = at.opt.peers[url] = at.opt.peers[url] || p;
                            });
                        }
                        obj_each(opt, function each(k) {
                            var v = this[k];
                            if ((this && this.hasOwnProperty(k)) || 'string' == typeof v || Object.empty(v)) {
                                this[k] = v;
                                return;
                            }
                            if (v && v.constructor !== Object && !(v instanceof Array)) {
                                return;
                            }
                            obj_each(v, each);
                        });
                        at.opt.from = opt;
                        Gun.on('opt', at);
                        at.opt.uuid = at.opt.uuid || function uuid(l) {
                            return Gun.state().toString(36).replace('.', '') + String.random(l || 12);
                        };
                        return gun;
                    };
                }());
                var obj_each = function(o, f) {
                    Object.keys(o).forEach(f, o);
                }, text_rand = String.random, turn = setTimeout.turn, valid = Gun.valid, state_is = Gun.state.is, state_ify = Gun.state.ify, u, empty = {}, C;
                Gun.log = function() {
                    return (!Gun.log.off && C.log.apply(C, arguments)), [].slice.call(arguments).join(' ');
                };
                Gun.log.once = function(w, s, o) {
                    return (o = Gun.log.once)[w] = o[w] || 0, o[w]++ || Gun.log(s);
                };
                if (typeof window !== "undefined") {
                    (window.GUN = window.Gun = Gun).window = window;
                }
                try {
                    if (typeof MODULE !== "undefined") {
                        MODULE.exports = Gun;
                    }
                } catch (e) {}
                module.exports = Gun;
                (Gun.window || {}).console = (Gun.window || {}).console || {
                    log: function() {}
                };
                (C = console).only = function(i, s) {
                    return (C.only.i && i === C.only.i && C.only.i++) && (C.log.apply(C, arguments) || s);
                };
                Gun.log.once("welcome", "Hello wonderful person! :) Thanks for using GUN, please ask for help on http://chat.gun.eco if anything takes you longer than 5min to figure out!");
            })(USE, './root');
            USE(function(module) {
                var Gun = USE('./root');
                Gun.chain.back = function(n, opt) {
                    var tmp;
                    n = n || 1;
                    if (-1 === n || Infinity === n) {
                        return this._.root.$;
                    } else if (1 === n) {
                        return (this._.back || this._).$;
                    }
                    var gun = this, at = gun._;
                    if (typeof n === 'string') {
                        n = n.split('.');
                    }
                    if (n instanceof Array) {
                        var i = 0, l = n.length, tmp = at;
                        for(i; i < l; i++){
                            tmp = (tmp || empty)[n[i]];
                        }
                        if (u !== tmp) {
                            return opt ? gun : tmp;
                        } else if ((tmp = at.back)) {
                            return tmp.$.back(n, opt);
                        }
                        return;
                    }
                    if ('function' == typeof n) {
                        var yes, tmp = {
                            back: at
                        };
                        while((tmp = tmp.back) && u === (yes = n(tmp, opt))){}
                        return yes;
                    }
                    if ('number' == typeof n) {
                        return (at.back || at).$.back(n - 1);
                    }
                    return this;
                };
                var empty = {}, u;
            })(USE, './back');
            USE(function(module) {
                var Gun = USE('./root');
                Gun.chain.chain = function(sub) {
                    var gun = this, at = gun._, chain = new (sub || gun).constructor(gun), cat = chain._, root;
                    cat.root = root = at.root;
                    cat.id = ++root.once;
                    cat.back = gun._;
                    cat.on = Gun.on;
                    cat.on('in', Gun.on.in, cat);
                    cat.on('out', Gun.on.out, cat);
                    return chain;
                };
                function output(msg) {
                    var get, at = this.as, back = at.back, root = at.root, tmp;
                    if (!msg.$) {
                        msg.$ = at.$;
                    }
                    this.to.next(msg);
                    if (at.err) {
                        at.on('in', {
                            put: at.put = u,
                            $: at.$
                        });
                        return;
                    }
                    if (get = msg.get) {
                        if (root.pass) {
                            root.pass[at.id] = at;
                        }
                        if (at.lex) {
                            Object.keys(at.lex).forEach(function(k) {
                                tmp[k] = at.lex[k];
                            }, tmp = msg.get = msg.get || {});
                        }
                        if (get['#'] || at.soul) {
                            get['#'] = get['#'] || at.soul;
                            msg['#'] || (msg['#'] = text_rand(9));
                            back = (root.$.get(get['#'])._);
                            if (!(get = get['.'])) {
                                tmp = back.ask && back.ask[''];
                                (back.ask || (back.ask = {}))[''] = back;
                                if (u !== back.put) {
                                    back.on('in', back);
                                    if (tmp) {
                                        return;
                                    }
                                }
                                msg.$ = back.$;
                            } else if (obj_has(back.put, get)) {
                                tmp = back.ask && back.ask[get];
                                (back.ask || (back.ask = {}))[get] = back.$.get(get)._;
                                back.on('in', {
                                    get: get,
                                    put: {
                                        '#': back.soul,
                                        '.': get,
                                        ':': back.put[get],
                                        '>': state_is(root.graph[back.soul], get)
                                    }
                                });
                                if (tmp) {
                                    return;
                                }
                            }
                            root.ask(ack, msg);
                            return root.on('in', msg);
                        }
                        if (get['.']) {
                            if (at.get) {
                                msg = {
                                    get: {
                                        '.': at.get
                                    },
                                    $: at.$
                                };
                                (back.ask || (back.ask = {}))[at.get] = msg.$._;
                                return back.on('out', msg);
                            }
                            msg = {
                                get: at.lex ? msg.get : {},
                                $: at.$
                            };
                            return back.on('out', msg);
                        }
                        (at.ask || (at.ask = {}))[''] = at;
                        if (at.get) {
                            get['.'] = at.get;
                            (back.ask || (back.ask = {}))[at.get] = msg.$._;
                            return back.on('out', msg);
                        }
                    }
                    return back.on('out', msg);
                }
                Gun.on.out = output;
                function input(msg, cat) {
                    cat = cat || this.as;
                    var root = cat.root, gun = msg.$ || (msg.$ = cat.$), at = (gun || '')._ || empty, tmp = msg.put || '', soul = tmp['#'], key = tmp['.'], change = (u !== tmp['=']) ? tmp['='] : tmp[':'], state = tmp['>'] || -Infinity, sat;
                    if (u !== msg.put && (u === tmp['#'] || u === tmp['.'] || (u === tmp[':'] && u === tmp['=']) || u === tmp['>'])) {
                        if (!valid(tmp)) {
                            if (!(soul = ((tmp || '')._ || '')['#'])) {
                                console.log("chain not yet supported for", tmp, '...', msg, cat);
                                return;
                            }
                            gun = cat.root.$.get(soul);
                            return setTimeout.each(Object.keys(tmp).sort(), function(k) {
                                if ('_' == k || u === (state = state_is(tmp, k))) {
                                    return;
                                }
                                cat.on('in', {
                                    $: gun,
                                    put: {
                                        '#': soul,
                                        '.': k,
                                        '=': tmp[k],
                                        '>': state
                                    },
                                    VIA: msg
                                });
                            });
                        }
                        cat.on('in', {
                            $: at.back.$,
                            put: {
                                '#': soul = at.back.soul,
                                '.': key = at.has || at.get,
                                '=': tmp,
                                '>': state_is(at.back.put, key)
                            },
                            via: msg
                        });
                        return;
                    }
                    if ((msg.seen || '')[cat.id]) {
                        return;
                    }
                    (msg.seen || (msg.seen = function() {}))[cat.id] = cat;
                    if (cat !== at) {
                        Object.keys(msg).forEach(function(k) {
                            tmp[k] = msg[k];
                        }, tmp = {});
                        tmp.get = cat.get || tmp.get;
                        if (!cat.soul && !cat.has) {
                            tmp.$$$ = tmp.$$$ || cat.$;
                        } else if (at.soul) {
                            tmp.$ = cat.$;
                            tmp.$$ = tmp.$$ || at.$;
                        }
                        msg = tmp;
                    }
                    unlink(msg, cat);
                    if (((cat.soul) || msg.$$) && state >= state_is(root.graph[soul], key)) {
                        (tmp = root.$.get(soul)._).put = state_ify(tmp.put, key, state, change, soul);
                    }
                    if (!at.soul && state >= state_is(root.graph[soul], key) && (sat = (root.$.get(soul)._.next || '')[key])) {
                        sat.put = change;
                        if ('string' == typeof (tmp = valid(change))) {
                            sat.put = root.$.get(tmp)._.put || change;
                        }
                    }
                    this.to && this.to.next(msg);
                    cat.any && setTimeout.each(Object.keys(cat.any), function(any) {
                        (any = cat.any[any]) && any(msg);
                    }, 0, 99);
                    cat.echo && setTimeout.each(Object.keys(cat.echo), function(lat) {
                        (lat = cat.echo[lat]) && lat.on('in', msg);
                    }, 0, 99);
                    if (((msg.$$ || '')._ || at).soul) {
                        if ((sat = cat.next) && (sat = sat[key])) {
                            tmp = {};
                            Object.keys(msg).forEach(function(k) {
                                tmp[k] = msg[k];
                            });
                            tmp.$ = (msg.$$ || msg.$).get(tmp.get = key);
                            delete tmp.$$;
                            delete tmp.$$$;
                            sat.on('in', tmp);
                        }
                    }
                    link(msg, cat);
                }
                Gun.on.in = input;
                function link(msg, cat) {
                    cat = cat || this.as || msg.$._;
                    if (msg.$$ && this !== Gun.on) {
                        return;
                    }
                    if (!msg.put || cat.soul) {
                        return;
                    }
                    var put = msg.put || '', link = put['='] || put[':'], tmp;
                    var root = cat.root, tat = root.$.get(put['#']).get(put['.'])._;
                    if ('string' != typeof (link = valid(link))) {
                        if (this === Gun.on) {
                            (tat.echo || (tat.echo = {}))[cat.id] = cat;
                        }
                        return;
                    }
                    if ((tat.echo || (tat.echo = {}))[cat.id] && !(root.pass || '')[cat.id]) {
                        return;
                    }
                    if (tmp = root.pass) {
                        if (tmp[link + cat.id]) {
                            return;
                        }
                        tmp[link + cat.id] = 1;
                    }
                    (tat.echo || (tat.echo = {}))[cat.id] = cat;
                    if (cat.has) {
                        cat.link = link;
                    }
                    var sat = root.$.get(tat.link = link)._;
                    (sat.echo || (sat.echo = {}))[tat.id] = tat;
                    var tmp = cat.ask || '';
                    if (tmp[''] || cat.lex) {
                        sat.on('out', {
                            get: {
                                '#': link
                            }
                        });
                    }
                    setTimeout.each(Object.keys(tmp), function(get, sat) {
                        if (!get || !(sat = tmp[get])) {
                            return;
                        }
                        sat.on('out', {
                            get: {
                                '#': link,
                                '.': get
                            }
                        });
                    }, 0, 99);
                }
                Gun.on.link = link;
                function unlink(msg, cat) {
                    var put = msg.put || '', change = (u !== put['=']) ? put['='] : put[':'], root = cat.root, link, tmp;
                    if (u === change) {
                        if (cat.soul && u !== cat.put) {
                            return;
                        }
                        tmp = (msg.$$ || msg.$ || '')._ || '';
                        if (msg['@'] && (u !== tmp.put || u !== cat.put)) {
                            return;
                        }
                        if (link = cat.link || msg.linked) {
                            delete (root.$.get(link)._.echo || '')[cat.id];
                        }
                        if (cat.has) {
                            cat.link = null;
                        }
                        cat.put = u;
                        setTimeout.each(Object.keys(cat.next || ''), function(get, sat) {
                            if (!(sat = cat.next[get])) {
                                return;
                            }
                            if (link) {
                                delete (root.$.get(link).get(get)._.echo || '')[sat.id];
                            }
                            sat.on('in', {
                                get: get,
                                put: u,
                                $: sat.$
                            });
                        }, 0, 99);
                        return;
                    }
                    if (cat.soul) {
                        return;
                    }
                    if (msg.$$) {
                        return;
                    }
                    link = valid(change);
                    tmp = msg.$._ || '';
                    if (link === tmp.link || (cat.has && !tmp.link)) {
                        if ((root.pass || '')[cat.id] && 'string' !== typeof link) ;
                        else {
                            return;
                        }
                    }
                    delete (tmp.echo || '')[cat.id];
                    unlink({
                        get: cat.get,
                        put: u,
                        $: msg.$,
                        linked: msg.linked = msg.linked || tmp.link
                    }, cat);
                }
                Gun.on.unlink = unlink;
                function ack(msg, ev) {
                    var as = this.as, at = as.$._;
                    at.root;
                    var get = as.get || '', tmp = (msg.put || '')[get['#']] || '';
                    if (!msg.put || ('string' == typeof get['.'] && u === tmp[get['.']])) {
                        if (u !== at.put) {
                            return;
                        }
                        if (!at.soul && !at.has) {
                            return;
                        }
                        at.ack = (at.ack || 0) + 1;
                        at.on('in', {
                            get: at.get,
                            put: at.put = u,
                            $: at.$,
                            '@': msg['@']
                        });
                        return;
                    }
                    (msg._ || {}).miss = 1;
                    Gun.on.put(msg);
                    return;
                }
                var empty = {}, u, text_rand = String.random, valid = Gun.valid, obj_has = function(o, k) {
                    return o && Object.prototype.hasOwnProperty.call(o, k);
                }, state = Gun.state, state_is = state.is, state_ify = state.ify;
            })(USE, './chain');
            USE(function(module) {
                var Gun = USE('./root');
                Gun.chain.get = function(key, cb, as) {
                    var gun, tmp;
                    if (typeof key === 'string') {
                        if (key.length == 0) {
                            (gun = this.chain())._.err = {
                                err: Gun.log('0 length key!', key)
                            };
                            if (cb) {
                                cb.call(gun, gun._.err);
                            }
                            return gun;
                        }
                        var back = this, cat = back._;
                        var next = cat.next || empty;
                        if (!(gun = next[key])) {
                            gun = key && cache(key, back);
                        }
                        gun = gun && gun.$;
                    } else if ('function' == typeof key) {
                        if (true === cb) {
                            return soul(this, key, cb, as), this;
                        }
                        gun = this;
                        var cat = gun._, opt = cb || {}, root = cat.root, id;
                        opt.at = cat;
                        opt.ok = key;
                        var wait = {};
                        function any(msg, eve, f) {
                            if (any.stun) {
                                return;
                            }
                            if ((tmp = root.pass) && !tmp[id]) {
                                return;
                            }
                            var at = msg.$._, sat = (msg.$$ || '')._, data = (sat || at).put, odd = (!at.has && !at.soul), test = {}, tmp;
                            if (odd || u === data) {
                                data = (u === ((tmp = msg.put) || '')['=']) ? (u === (tmp || '')[':']) ? tmp : tmp[':'] : tmp['='];
                            }
                            if (('string' == typeof (tmp = Gun.valid(data)))) {
                                data = (u === (tmp = root.$.get(tmp)._.put)) ? opt.not ? u : data : tmp;
                            }
                            if (opt.not && u === data) {
                                return;
                            }
                            if (u === opt.stun) {
                                if ((tmp = root.stun) && tmp.on) {
                                    cat.$.back(function(a) {
                                        tmp.on('' + a.id, test = {});
                                        if ((test.run || 0) < any.id) {
                                            return test;
                                        }
                                    });
                                    !test.run && tmp.on('' + at.id, test = {});
                                    !test.run && sat && tmp.on('' + sat.id, test = {});
                                    if (any.id > test.run) {
                                        if (!test.stun || test.stun.end) {
                                            test.stun = tmp.on('stun');
                                            test.stun = test.stun && test.stun.last;
                                        }
                                        if (test.stun && !test.stun.end) {
                                            (test.stun.add || (test.stun.add = {}))[id] = function() {
                                                any(msg, eve, 1);
                                            };
                                            return;
                                        }
                                    }
                                }
                                if (u === data) {
                                    f = 0;
                                }
                                if ((tmp = root.hatch) && !tmp.end && u === opt.hatch && !f) {
                                    if (wait[at.$._.id]) {
                                        return;
                                    }
                                    wait[at.$._.id] = 1;
                                    tmp.push(function() {
                                        any(msg, eve, 1);
                                    });
                                    return;
                                }
                                wait = {};
                            }
                            if (root.pass) {
                                if (root.pass[id + at.id]) {
                                    return;
                                }
                                root.pass[id + at.id] = 1;
                            }
                            if (opt.on) {
                                opt.ok.call(at.$, data, at.get, msg, eve || any);
                                return;
                            }
                            if (opt.v2020) {
                                opt.ok(msg, eve || any);
                                return;
                            }
                            Object.keys(msg).forEach(function(k) {
                                tmp[k] = msg[k];
                            }, tmp = {});
                            msg = tmp;
                            msg.put = data;
                            opt.ok.call(opt.as, msg, eve || any);
                        }
                        any.at = cat;
                        (cat.any || (cat.any = {}))[id = String.random(7)] = any;
                        any.off = function() {
                            any.stun = 1;
                            if (!cat.any) {
                                return;
                            }
                            delete cat.any[id];
                        };
                        any.rid = rid;
                        any.id = opt.run || ++root.once;
                        tmp = root.pass;
                        (root.pass = {})[id] = 1;
                        opt.out = opt.out || {
                            get: {}
                        };
                        cat.on('out', opt.out);
                        root.pass = tmp;
                        return gun;
                    } else if ('number' == typeof key) {
                        return this.get('' + key, cb, as);
                    } else if ('string' == typeof (tmp = valid(key))) {
                        return this.get(tmp, cb, as);
                    } else if (tmp = this.get.next) {
                        gun = tmp(this, key);
                    }
                    if (!gun) {
                        (gun = this.chain())._.err = {
                            err: Gun.log('Invalid get request!', key)
                        };
                        if (cb) {
                            cb.call(gun, gun._.err);
                        }
                        return gun;
                    }
                    if (cb && 'function' == typeof cb) {
                        gun.get(cb, as);
                    }
                    return gun;
                };
                function cache(key, back) {
                    var cat = back._, next = cat.next, gun = back.chain(), at = gun._;
                    if (!next) {
                        next = cat.next = {};
                    }
                    next[at.get = key] = at;
                    if (back === cat.root.$) {
                        at.soul = key;
                    } else if (cat.soul || cat.has) {
                        at.has = key;
                    }
                    return at;
                }
                function soul(gun, cb, opt, as) {
                    var cat = gun._, acks = 0, tmp;
                    if (tmp = cat.soul || cat.link) {
                        return cb(tmp, as, cat);
                    }
                    if (cat.jam) {
                        return cat.jam.push([
                            cb,
                            as
                        ]);
                    }
                    cat.jam = [
                        [
                            cb,
                            as
                        ]
                    ];
                    gun.get(function go(msg, eve) {
                        if (u === msg.put && !cat.root.opt.super && (tmp = Object.keys(cat.root.opt.peers).length) && ++acks <= tmp) {
                            return;
                        }
                        eve.rid(msg);
                        var at = ((at = msg.$) && at._) || {}, i = 0, as;
                        tmp = cat.jam;
                        delete cat.jam;
                        while(as = tmp[i++]){
                            var cb = as[0];
                            as = as[1];
                            cb && cb(at.link || at.soul || Gun.valid(msg.put) || ((msg.put || {})._ || {})['#'], as, msg, eve);
                        }
                    }, {
                        out: {
                            get: {
                                '.': true
                            }
                        }
                    });
                    return gun;
                }
                function rid(at) {
                    var cat = this.at || this.on;
                    if (!at || cat.soul || cat.has) {
                        return this.off();
                    }
                    if (!(at = (at = (at = at.$ || at)._ || at).id)) {
                        return;
                    }
                    cat.map;
                    var seen;
                    if ((seen = this.seen || (this.seen = {}))[at]) {
                        return true;
                    }
                    seen[at] = true;
                    return;
                }
                var empty = {}, valid = Gun.valid, u;
            })(USE, './get');
            USE(function(module) {
                var Gun = USE('./root');
                Gun.chain.put = function(data, cb, as) {
                    var gun = this, at = gun._, root = at.root;
                    as = as || {};
                    as.root = at.root;
                    as.run || (as.run = root.once);
                    stun(as, at.id);
                    as.ack = as.ack || cb;
                    as.via = as.via || gun;
                    as.data = as.data || data;
                    as.soul || (as.soul = at.soul || ('string' == typeof cb && cb));
                    var s = as.state = as.state || Gun.state();
                    if ('function' == typeof data) {
                        data(function(d) {
                            as.data = d;
                            gun.put(u, u, as);
                        });
                        return gun;
                    }
                    if (!as.soul) {
                        return get(as), gun;
                    }
                    as.$ = root.$.get(as.soul);
                    as.todo = [
                        {
                            it: as.data,
                            ref: as.$
                        }
                    ];
                    as.turn = as.turn || turn;
                    as.ran = as.ran || ran;
                    (function walk() {
                        var to = as.todo, at = to.pop(), d = at.it;
                        at.ref && at.ref._.id;
                        var v, k, cat, tmp, g;
                        stun(as, at.ref);
                        if (tmp = at.todo) {
                            k = tmp.pop();
                            d = d[k];
                            if (tmp.length) {
                                to.push(at);
                            }
                        }
                        k && (to.path || (to.path = [])).push(k);
                        if (!(v = valid(d)) && !(g = Gun.is(d))) {
                            if (!Object.plain(d)) {
                                ran.err(as, "Invalid data: " + check(d) + " at " + (as.via.back(function(at) {
                                    at.get && tmp.push(at.get);
                                }, tmp = []) || tmp.join('.')) + '.' + (to.path || []).join('.'));
                                return;
                            }
                            var seen = as.seen || (as.seen = []), i = seen.length;
                            while(i--){
                                if (d === (tmp = seen[i]).it) {
                                    v = d = tmp.link;
                                    break;
                                }
                            }
                        }
                        if (k && v) {
                            at.node = state_ify(at.node, k, s, d);
                        } else {
                            if (!as.seen) {
                                ran.err(as, "Data at root of graph must be a node (an object).");
                                return;
                            }
                            as.seen.push(cat = {
                                it: d,
                                link: {},
                                todo: g ? [] : Object.keys(d).sort().reverse(),
                                path: (to.path || []).slice(),
                                up: at
                            });
                            at.node = state_ify(at.node, k, s, cat.link);
                            !g && cat.todo.length && to.push(cat);
                            var id = as.seen.length;
                            (as.wait || (as.wait = {}))[id] = '';
                            tmp = (cat.ref = (g ? d : k ? at.ref.get(k) : at.ref))._;
                            (tmp = (d && (d._ || '')['#']) || tmp.soul || tmp.link) ? resolve({
                                soul: tmp
                            }) : cat.ref.get(resolve, {
                                run: as.run,
                                v2020: 1,
                                out: {
                                    get: {
                                        '.': ' '
                                    }
                                }
                            });
                            function resolve(msg, eve) {
                                var end = cat.link['#'];
                                if (eve) {
                                    eve.off();
                                    eve.rid(msg);
                                }
                                var soul = end || msg.soul || (tmp = (msg.$$ || msg.$)._ || '').soul || tmp.link || ((tmp = tmp.put || '')._ || '')['#'] || tmp['#'] || (((tmp = msg.put || '') && msg.$$) ? tmp['#'] : (tmp['='] || tmp[':'] || '')['#']);
                                !end && stun(as, msg.$);
                                if (!soul && !at.link['#']) {
                                    (at.wait || (at.wait = [])).push(function() {
                                        resolve(msg, eve);
                                    });
                                    return;
                                }
                                if (!soul) {
                                    soul = [];
                                    (msg.$$ || msg.$).back(function(at) {
                                        if (tmp = at.soul || at.link) {
                                            return soul.push(tmp);
                                        }
                                        soul.push(at.get);
                                    });
                                    soul = soul.reverse().join('/');
                                }
                                cat.link['#'] = soul;
                                !g && (((as.graph || (as.graph = {}))[soul] = (cat.node || (cat.node = {
                                    _: {}
                                })))._['#'] = soul);
                                delete as.wait[id];
                                cat.wait && setTimeout.each(cat.wait, function(cb) {
                                    cb && cb();
                                });
                                as.ran(as);
                            }
                        }
                        if (!to.length) {
                            return as.ran(as);
                        }
                        as.turn(walk);
                    }());
                    return gun;
                };
                function stun(as, id) {
                    if (!id) {
                        return;
                    }
                    id = (id._ || '').id || id;
                    var run = as.root.stun || (as.root.stun = {
                        on: Gun.on
                    }), test = {}, tmp;
                    as.stun || (as.stun = run.on('stun', function() {}));
                    if (tmp = run.on('' + id)) {
                        tmp.the.last.next(test);
                    }
                    if (test.run >= as.run) {
                        return;
                    }
                    run.on('' + id, function(test) {
                        if (as.stun.end) {
                            this.off();
                            this.to.next(test);
                            return;
                        }
                        test.run = test.run || as.run;
                        test.stun = test.stun || as.stun;
                        return;
                    });
                }
                function ran(as) {
                    if (as.err) {
                        ran.end(as.stun, as.root);
                        return;
                    }
                    if (as.todo.length || as.end || !Object.empty(as.wait)) {
                        return;
                    }
                    as.end = 1;
                    var cat = (as.$.back(-1)._), root = cat.root, ask = cat.ask(function(ack) {
                        root.on('ack', ack);
                        if (ack.err && !ack.lack) {
                            Gun.log(ack);
                        }
                        if (++acks > (as.acks || 0)) {
                            this.off();
                        }
                        if (!as.ack) {
                            return;
                        }
                        as.ack(ack, this);
                    }, as.opt), acks = 0, stun = as.stun, tmp;
                    (tmp = function() {
                        if (!stun) {
                            return;
                        }
                        ran.end(stun, root);
                        setTimeout.each(Object.keys(stun = stun.add || ''), function(cb) {
                            if (cb = stun[cb]) {
                                cb();
                            }
                        });
                    }).hatch = tmp;
                    if (as.ack && !as.ok) {
                        as.ok = as.acks || 9;
                    }
                    (as.via._).on('out', {
                        put: as.out = as.graph,
                        ok: as.ok && {
                            '@': as.ok + 1
                        },
                        opt: as.opt,
                        '#': ask,
                        _: tmp
                    });
                }
                ran.end = function(stun, root) {
                    stun.end = noop;
                    if (stun.the.to === stun && stun === stun.the.last) {
                        delete root.stun;
                    }
                    stun.off();
                };
                ran.err = function(as, err) {
                    (as.ack || noop).call(as, as.out = {
                        err: as.err = Gun.log(err)
                    });
                    as.ran(as);
                };
                function get(as) {
                    var at = as.via._, tmp;
                    as.via = as.via.back(function(at) {
                        if (at.soul || !at.get) {
                            return at.$;
                        }
                        tmp = as.data;
                        (as.data = {})[at.get] = tmp;
                    });
                    if (!as.via || !as.via._.soul) {
                        as.via = at.root.$.get(((as.data || '')._ || '')['#'] || at.$.back('opt.uuid')());
                    }
                    as.via.put(as.data, as.ack, as);
                    return;
                }
                function check(d, tmp) {
                    return ((d && (tmp = d.constructor) && tmp.name) || typeof d);
                }
                var u, noop = function() {}, turn = setTimeout.turn, valid = Gun.valid, state_ify = Gun.state.ify;
            })(USE, './put');
            USE(function(module) {
                var Gun = USE('./root');
                USE('./chain');
                USE('./back');
                USE('./put');
                USE('./get');
                module.exports = Gun;
            })(USE, './index');
            USE(function(module) {
                var Gun = USE('./index');
                Gun.chain.on = function(tag, arg, eas, as) {
                    var gun = this, cat = gun._;
                    cat.root;
                    var act;
                    if (typeof tag === 'string') {
                        if (!arg) {
                            return cat.on(tag);
                        }
                        act = cat.on(tag, arg, eas || cat, as);
                        if (eas && eas.$) {
                            (eas.subs || (eas.subs = [])).push(act);
                        }
                        return gun;
                    }
                    var opt = arg;
                    (opt = (true === opt) ? {
                        change: true
                    } : opt || {}).not = 1;
                    opt.on = 1;
                    gun.get(tag, opt);
                    return gun;
                };
                Gun.chain.once = function(cb, opt) {
                    opt = opt || {};
                    if (!cb) {
                        return none(this);
                    }
                    var gun = this, cat = gun._, root = cat.root;
                    cat.put;
                    var id = String.random(7), tmp;
                    gun.get(function(data, key, msg, eve) {
                        var $ = this, at = $._, one = (at.one || (at.one = {}));
                        if (eve.stun) {
                            return;
                        }
                        if ('' === one[id]) {
                            return;
                        }
                        if (true === (tmp = Gun.valid(data))) {
                            once();
                            return;
                        }
                        if ('string' == typeof tmp) {
                            return;
                        }
                        clearTimeout((cat.one || '')[id]);
                        clearTimeout(one[id]);
                        one[id] = setTimeout(once, opt.wait || 99);
                        function once(f) {
                            if (!at.has && !at.soul) {
                                at = {
                                    put: data,
                                    get: key
                                };
                            }
                            if (u === (tmp = at.put)) {
                                tmp = ((msg.$$ || '')._ || '').put;
                            }
                            if ('string' == typeof Gun.valid(tmp)) {
                                tmp = root.$.get(tmp)._.put;
                                if (tmp === u && !f) {
                                    one[id] = setTimeout(function() {
                                        once(1);
                                    }, opt.wait || 99);
                                    return;
                                }
                            }
                            if (eve.stun) {
                                return;
                            }
                            if ('' === one[id]) {
                                return;
                            }
                            one[id] = '';
                            if (cat.soul || cat.has) {
                                eve.off();
                            }
                            cb.call($, tmp, at.get);
                            clearTimeout(one[id]);
                        }
                    }, {
                        on: 1
                    });
                    return gun;
                };
                function none(gun, opt, chain) {
                    Gun.log.once("valonce", "Chainable val is experimental, its behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it.");
                    (chain = gun.chain())._.nix = gun.once(function(data, key) {
                        chain._.on('in', this._);
                    });
                    chain._.lex = gun._.lex;
                    return chain;
                }
                Gun.chain.off = function() {
                    var gun = this, at = gun._, tmp;
                    var cat = at.back;
                    if (!cat) {
                        return;
                    }
                    at.ack = 0;
                    if (tmp = cat.next) {
                        if (tmp[at.get]) {
                            delete tmp[at.get];
                        }
                    }
                    if (tmp = cat.any) {
                        delete cat.any;
                        cat.any = {};
                    }
                    if (tmp = cat.ask) {
                        delete tmp[at.get];
                    }
                    if (tmp = cat.put) {
                        delete tmp[at.get];
                    }
                    if (tmp = at.soul) {
                        delete cat.root.graph[tmp];
                    }
                    if (tmp = at.map) {
                        Object.keys(tmp).forEach(function(i, at) {
                            at = tmp[i];
                            if (at.link) {
                                cat.root.$.get(at.link).off();
                            }
                        });
                    }
                    if (tmp = at.next) {
                        Object.keys(tmp).forEach(function(i, neat) {
                            neat = tmp[i];
                            neat.$.off();
                        });
                    }
                    at.on('off', {});
                    return gun;
                };
                var u;
            })(USE, './on');
            USE(function(module) {
                var Gun = USE('./index'), next = Gun.chain.get.next;
                Gun.chain.get.next = function(gun, lex) {
                    var tmp;
                    if (!Object.plain(lex)) {
                        return (next || noop)(gun, lex);
                    }
                    if (tmp = ((tmp = lex['#']) || '')['='] || tmp) {
                        return gun.get(tmp);
                    }
                    (tmp = gun.chain()._).lex = lex;
                    gun.on('in', function(eve) {
                        if (String.match(eve.get || (eve.put || '')['.'], lex['.'] || lex['#'] || lex)) {
                            tmp.on('in', eve);
                        }
                        this.to.next(eve);
                    });
                    return tmp.$;
                };
                Gun.chain.map = function(cb, opt, t) {
                    var gun = this, cat = gun._, lex, chain;
                    if (Object.plain(cb)) {
                        lex = cb['.'] ? cb : {
                            '.': cb
                        };
                        cb = u;
                    }
                    if (!cb) {
                        if (chain = cat.each) {
                            return chain;
                        }
                        (cat.each = chain = gun.chain())._.lex = lex || chain._.lex || cat.lex;
                        chain._.nix = gun.back('nix');
                        gun.on('in', map, chain._);
                        return chain;
                    }
                    Gun.log.once("mapfn", "Map functions are experimental, their behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it.");
                    chain = gun.chain();
                    gun.map().on(function(data, key, msg, eve) {
                        var next = (cb || noop).call(this, data, key, msg, eve);
                        if (u === next) {
                            return;
                        }
                        if (data === next) {
                            return chain._.on('in', msg);
                        }
                        if (Gun.is(next)) {
                            return chain._.on('in', next._);
                        }
                        var tmp = {};
                        Object.keys(msg.put).forEach(function(k) {
                            tmp[k] = msg.put[k];
                        }, tmp);
                        tmp['='] = next;
                        chain._.on('in', {
                            get: key,
                            put: tmp
                        });
                    });
                    return chain;
                };
                function map(msg) {
                    this.to.next(msg);
                    var cat = this.as, gun = msg.$, at = gun._, put = msg.put, tmp;
                    if (!at.soul && !msg.$$) {
                        return;
                    }
                    if ((tmp = cat.lex) && !String.match(msg.get || (put || '')['.'], tmp['.'] || tmp['#'] || tmp)) {
                        return;
                    }
                    Gun.on.link(msg, cat);
                }
                var noop = function() {}, u;
            })(USE, './map');
            USE(function(module) {
                var Gun = USE('./index');
                Gun.chain.set = function(item, cb, opt) {
                    var gun = this, root = gun.back(-1), soul, tmp;
                    cb = cb || function() {};
                    opt = opt || {};
                    opt.item = opt.item || item;
                    if (soul = ((item || '')._ || '')['#']) {
                        (item = {})['#'] = soul;
                    }
                    if ('string' == typeof (tmp = Gun.valid(item))) {
                        return gun.get(soul = tmp).put(item, cb, opt);
                    }
                    if (!Gun.is(item)) {
                        if (Object.plain(item)) {
                            item = root.get(soul = gun.back('opt.uuid')()).put(item);
                        }
                        return gun.get(soul || root.back('opt.uuid')(7)).put(item, cb, opt);
                    }
                    gun.put(function(go) {
                        item.get(function(soul, o, msg) {
                            if (!soul) {
                                return cb.call(gun, {
                                    err: Gun.log('Only a node can be linked! Not "' + msg.put + '"!')
                                });
                            }
                            (tmp = {})[soul] = {
                                '#': soul
                            };
                            go(tmp);
                        }, true);
                    });
                    return item;
                };
            })(USE, './set');
            USE(function(module) {
                USE('./shim');
                var noop = function() {};
                var parse = JSON.parseAsync || function(t, cb, r) {
                    var u, d = +new Date;
                    try {
                        cb(u, JSON.parse(t, r), json.sucks(+new Date - d));
                    } catch (e) {
                        cb(e);
                    }
                };
                var json = JSON.stringifyAsync || function(v, cb, r, s) {
                    var u, d = +new Date;
                    try {
                        cb(u, JSON.stringify(v, r, s), json.sucks(+new Date - d));
                    } catch (e) {
                        cb(e);
                    }
                };
                json.sucks = function(d) {
                    if (d > 99) {
                        console.log("Warning: JSON blocking CPU detected. Add `gun/lib/yson.js` to fix.");
                        json.sucks = noop;
                    }
                };
                function Mesh(root) {
                    var mesh = function() {};
                    var opt = root.opt || {};
                    opt.log = opt.log || console.log;
                    opt.gap = opt.gap || opt.wait || 0;
                    opt.max = opt.max || (opt.memory ? (opt.memory * 999 * 999) : 300000000) * 0.3;
                    opt.pack = opt.pack || (opt.max * 0.01 * 0.01);
                    opt.puff = opt.puff || 9;
                    var puff = setTimeout.turn || setTimeout;
                    var dup = root.dup, dup_check = dup.check, dup_track = dup.track;
                    var hear = mesh.hear = function(raw, peer) {
                        if (!raw) {
                            return;
                        }
                        if (opt.max <= raw.length) {
                            return mesh.say({
                                dam: '!',
                                err: "Message too big!"
                            }, peer);
                        }
                        if (mesh === this) {
                            hear.d += raw.length || 0;
                            ++hear.c;
                        }
                        var S = peer.SH = +new Date;
                        var tmp = raw[0], msg;
                        if ('[' === tmp) {
                            parse(raw, function(err, msg) {
                                if (err || !msg) {
                                    return mesh.say({
                                        dam: '!',
                                        err: "DAM JSON parse error."
                                    }, peer);
                                }
                                console.STAT && console.STAT(+new Date, msg.length, '# on hear batch');
                                var P = opt.puff;
                                (function go() {
                                    var S = +new Date;
                                    var i = 0, m;
                                    while(i < P && (m = msg[i++])){
                                        mesh.hear(m, peer);
                                    }
                                    msg = msg.slice(i);
                                    console.STAT && console.STAT(S, +new Date - S, 'hear loop');
                                    flush(peer);
                                    if (!msg.length) {
                                        return;
                                    }
                                    puff(go, 0);
                                }());
                            });
                            raw = '';
                            return;
                        }
                        if ('{' === tmp || ((raw['#'] || Object.plain(raw)) && (msg = raw))) {
                            if (msg) {
                                return hear.one(msg, peer, S);
                            }
                            parse(raw, function(err, msg) {
                                if (err || !msg) {
                                    return mesh.say({
                                        dam: '!',
                                        err: "DAM JSON parse error."
                                    }, peer);
                                }
                                hear.one(msg, peer, S);
                            });
                            return;
                        }
                    };
                    hear.one = function(msg, peer, S) {
                        var id, hash, tmp, ash, DBG;
                        if (msg.DBG) {
                            msg.DBG = DBG = {
                                DBG: msg.DBG
                            };
                        }
                        DBG && (DBG.h = S);
                        DBG && (DBG.hp = +new Date);
                        if (!(id = msg['#'])) {
                            id = msg['#'] = String.random(9);
                        }
                        if (tmp = dup_check(id)) {
                            return;
                        }
                        if (!(hash = msg['##']) && false) ;
                        if (hash && (tmp = msg['@'] || (msg.get && id)) && dup.check(ash = tmp + hash)) {
                            return;
                        }
                        (msg._ = function() {}).via = mesh.leap = peer;
                        if ((tmp = msg['><']) && 'string' == typeof tmp) {
                            tmp.slice(0, 99).split(',').forEach(function(k) {
                                this[k] = 1;
                            }, (msg._).yo = {});
                        }
                        if (tmp = msg.dam) {
                            if (tmp = mesh.hear[tmp]) {
                                tmp(msg, peer, root);
                            }
                            dup_track(id);
                            return;
                        }
                        if (tmp = msg.ok) {
                            msg._.near = tmp['/'];
                        }
                        var S = +new Date;
                        DBG && (DBG.is = S);
                        peer.SI = id;
                        dup_track.ed = function(d) {
                            if (id !== d) {
                                return;
                            }
                            dup_track.ed = 0;
                            if (!(d = dup.s[id])) {
                                return;
                            }
                            d.via = peer;
                            if (msg.get) {
                                d.it = msg;
                            }
                        };
                        root.on('in', mesh.last = msg);
                        DBG && (DBG.hd = +new Date);
                        console.STAT && console.STAT(S, +new Date - S, msg.get ? 'msg get' : msg.put ? 'msg put' : 'msg');
                        dup_track(id);
                        if (ash) {
                            dup_track(ash);
                        }
                        mesh.leap = mesh.last = null;
                    };
                    hear.c = hear.d = 0;
                    (function() {
                        var SMIA = 0;
                        var loop;
                        mesh.hash = function(msg, peer) {
                            var h, s, t;
                            var S = +new Date;
                            json(msg.put, function hash(err, text) {
                                var ss = (s || (s = t = text || '')).slice(0, 32768);
                                h = String.hash(ss, h);
                                s = s.slice(32768);
                                if (s) {
                                    puff(hash, 0);
                                    return;
                                }
                                console.STAT && console.STAT(S, +new Date - S, 'say json+hash');
                                msg._.$put = t;
                                msg['##'] = h;
                                mesh.say(msg, peer);
                                delete msg._.$put;
                            }, sort);
                        };
                        function sort(k, v) {
                            var tmp;
                            if (!(v instanceof Object)) {
                                return v;
                            }
                            Object.keys(v).sort().forEach(sorta, {
                                to: tmp = {},
                                on: v
                            });
                            return tmp;
                        }
                        function sorta(k) {
                            this.to[k] = this.on[k];
                        }
                        mesh.say = function(msg, peer) {
                            var tmp;
                            if ((tmp = this) && (tmp = tmp.to) && tmp.next) {
                                tmp.next(msg);
                            }
                            if (!msg) {
                                return false;
                            }
                            var id, hash, raw, ack = msg['@'];
                            var meta = msg._ || (msg._ = function() {});
                            var DBG = msg.DBG, S = +new Date;
                            meta.y = meta.y || S;
                            if (!peer) {
                                DBG && (DBG.y = S);
                            }
                            if (!(id = msg['#'])) {
                                id = msg['#'] = String.random(9);
                            }
                            !loop && dup_track(id);
                            if (!(hash = msg['##']) && u !== msg.put && !meta.via && ack) {
                                mesh.hash(msg, peer);
                                return;
                            }
                            if (!peer && ack) {
                                peer = ((tmp = dup.s[ack]) && (tmp.via || ((tmp = tmp.it) && (tmp = tmp._) && tmp.via))) || ((tmp = mesh.last) && ack === tmp['#'] && mesh.leap);
                            }
                            if (!peer && ack) {
                                if (dup.s[ack]) {
                                    return;
                                }
                                console.STAT && console.STAT(+new Date, ++SMIA, 'total no peer to ack to');
                                return false;
                            }
                            if (ack && !msg.put && !hash && ((dup.s[ack] || '').it || '')['##']) {
                                return false;
                            }
                            if (!peer && mesh.way) {
                                return mesh.way(msg);
                            }
                            DBG && (DBG.yh = +new Date);
                            if (!(raw = meta.raw)) {
                                mesh.raw(msg, peer);
                                return;
                            }
                            DBG && (DBG.yr = +new Date);
                            if (!peer || !peer.id) {
                                if (!Object.plain(peer || opt.peers)) {
                                    return false;
                                }
                                var S = +new Date;
                                opt.puff;
                                var ps = opt.peers, pl = Object.keys(peer || opt.peers || {});
                                console.STAT && console.STAT(S, +new Date - S, 'peer keys');
                                (function go() {
                                    var S = +new Date;
                                    loop = 1;
                                    var wr = meta.raw;
                                    meta.raw = raw;
                                    var i = 0, p;
                                    while(i < 9 && (p = (pl || '')[i++])){
                                        if (!(p = ps[p] || (peer || '')[p])) {
                                            continue;
                                        }
                                        mesh.say(msg, p);
                                    }
                                    meta.raw = wr;
                                    loop = 0;
                                    pl = pl.slice(i);
                                    console.STAT && console.STAT(S, +new Date - S, 'say loop');
                                    if (!pl.length) {
                                        return;
                                    }
                                    puff(go, 0);
                                    ack && dup_track(ack);
                                }());
                                return;
                            }
                            if (!peer.wire && mesh.wire) {
                                mesh.wire(peer);
                            }
                            if (id === peer.last) {
                                return;
                            }
                            peer.last = id;
                            if (peer === meta.via) {
                                return false;
                            }
                            if ((tmp = meta.yo) && (tmp[peer.url] || tmp[peer.pid] || tmp[peer.id])) {
                                return false;
                            }
                            console.STAT && console.STAT(S, ((DBG || meta).yp = +new Date) - (meta.y || S), 'say prep');
                            !loop && ack && dup_track(ack);
                            if (peer.batch) {
                                peer.tail = (tmp = peer.tail || 0) + raw.length;
                                if (peer.tail <= opt.pack) {
                                    peer.batch += (tmp ? ',' : '') + raw;
                                    return;
                                }
                                flush(peer);
                            }
                            peer.batch = '[';
                            var ST = +new Date;
                            setTimeout(function() {
                                console.STAT && console.STAT(ST, +new Date - ST, '0ms TO');
                                flush(peer);
                            }, opt.gap);
                            send(raw, peer);
                            console.STAT && (ack === peer.SI) && console.STAT(S, +new Date - peer.SH, 'say ack');
                        };
                        mesh.say.c = mesh.say.d = 0;
                        mesh.raw = function(msg, peer) {
                            if (!msg) {
                                return '';
                            }
                            var meta = (msg._) || {}, put, tmp;
                            if (tmp = meta.raw) {
                                return tmp;
                            }
                            if ('string' == typeof msg) {
                                return msg;
                            }
                            var hash = msg['##'], ack = msg['@'];
                            if (hash && ack) {
                                if (!meta.via && dup_check(ack + hash)) {
                                    return false;
                                }
                                if (tmp = (dup.s[ack] || '').it) {
                                    if (hash === tmp['##']) {
                                        return false;
                                    }
                                    if (!tmp['##']) {
                                        tmp['##'] = hash;
                                    }
                                }
                            }
                            if (!msg.dam && !msg['@']) {
                                var i = 0, to = [];
                                tmp = opt.peers;
                                for(var k in tmp){
                                    var p = tmp[k];
                                    to.push(p.url || p.pid || p.id);
                                    if (++i > 6) {
                                        break;
                                    }
                                }
                                if (i > 1) {
                                    msg['><'] = to.join();
                                }
                            }
                            if (msg.put && (tmp = msg.ok)) {
                                msg.ok = {
                                    '@': (tmp['@'] || 1) - 1,
                                    '/': (tmp['/'] == msg._.near) ? mesh.near : tmp['/']
                                };
                            }
                            if (put = meta.$put) {
                                tmp = {};
                                Object.keys(msg).forEach(function(k) {
                                    tmp[k] = msg[k];
                                });
                                tmp.put = ':])([:';
                                json(tmp, function(err, raw) {
                                    if (err) {
                                        return;
                                    }
                                    var S = +new Date;
                                    tmp = raw.indexOf('"put":":])([:"');
                                    res(u, raw = raw.slice(0, tmp + 6) + put + raw.slice(tmp + 14));
                                    console.STAT && console.STAT(S, +new Date - S, 'say slice');
                                });
                                return;
                            }
                            json(msg, res);
                            function res(err, raw) {
                                if (err) {
                                    return;
                                }
                                meta.raw = raw;
                                mesh.say(msg, peer);
                            }
                        };
                    }());
                    function flush(peer) {
                        var tmp = peer.batch, t = 'string' == typeof tmp;
                        if (t) {
                            tmp += ']';
                        }
                        peer.batch = peer.tail = null;
                        if (!tmp) {
                            return;
                        }
                        if (t ? 3 > tmp.length : !tmp.length) {
                            return;
                        }
                        if (!t) {
                            try {
                                tmp = (1 === tmp.length ? tmp[0] : JSON.stringify(tmp));
                            } catch (e) {
                                return opt.log('DAM JSON stringify error', e);
                            }
                        }
                        if (!tmp) {
                            return;
                        }
                        send(tmp, peer);
                    }
                    function send(raw, peer) {
                        try {
                            var wire = peer.wire;
                            if (peer.say) {
                                peer.say(raw);
                            } else if (wire.send) {
                                wire.send(raw);
                            }
                            mesh.say.d += raw.length || 0;
                            ++mesh.say.c;
                        } catch (e) {
                            (peer.queue = peer.queue || []).push(raw);
                        }
                    }
                    mesh.near = 0;
                    mesh.hi = function(peer) {
                        var wire = peer.wire, tmp;
                        if (!wire) {
                            mesh.wire((peer.length && {
                                url: peer,
                                id: peer
                            }) || peer);
                            return;
                        }
                        if (peer.id) {
                            opt.peers[peer.url || peer.id] = peer;
                        } else {
                            tmp = peer.id = peer.id || peer.url || String.random(9);
                            mesh.say({
                                dam: '?',
                                pid: root.opt.pid
                            }, opt.peers[tmp] = peer);
                            delete dup.s[peer.last];
                        }
                        if (!peer.met) {
                            mesh.near++;
                            peer.met = +(new Date);
                            root.on('hi', peer);
                        }
                        tmp = peer.queue;
                        peer.queue = [];
                        setTimeout.each(tmp || [], function(msg) {
                            send(msg, peer);
                        }, 0, 9);
                    };
                    mesh.bye = function(peer) {
                        peer.met && --mesh.near;
                        delete peer.met;
                        root.on('bye', peer);
                        var tmp = +(new Date);
                        tmp = (tmp - (peer.met || tmp));
                        mesh.bye.time = ((mesh.bye.time || tmp) + tmp) / 2;
                    };
                    mesh.hear['!'] = function(msg, peer) {
                        opt.log('Error:', msg.err);
                    };
                    mesh.hear['?'] = function(msg, peer) {
                        if (msg.pid) {
                            if (!peer.pid) {
                                peer.pid = msg.pid;
                            }
                            if (msg['@']) {
                                return;
                            }
                        }
                        mesh.say({
                            dam: '?',
                            pid: opt.pid,
                            '@': msg['#']
                        }, peer);
                        delete dup.s[peer.last];
                    };
                    mesh.hear['mob'] = function(msg, peer) {
                        if (!msg.peers) {
                            return;
                        }
                        var peers = Object.keys(msg.peers), one = peers[(Math.random() * peers.length) >> 0];
                        if (!one) {
                            return;
                        }
                        mesh.bye(peer);
                        mesh.hi(one);
                    };
                    root.on('create', function(root) {
                        root.opt.pid = root.opt.pid || String.random(9);
                        this.to.next(root);
                        root.on('out', mesh.say);
                    });
                    root.on('bye', function(peer, tmp) {
                        peer = opt.peers[peer.id || peer] || peer;
                        this.to.next(peer);
                        peer.bye ? peer.bye() : (tmp = peer.wire) && tmp.close && tmp.close();
                        delete opt.peers[peer.id];
                        peer.wire = null;
                    });
                    root.on('bye', function(peer, tmp) {
                        this.to.next(peer);
                        if (tmp = console.STAT) {
                            tmp.peers = mesh.near;
                        }
                        if (!(tmp = peer.url)) {
                            return;
                        }
                        setTimeout(function() {}, opt.lack || 9000);
                    });
                    root.on('hi', function(peer, tmp) {
                        this.to.next(peer);
                        if (tmp = console.STAT) {
                            tmp.peers = mesh.near;
                        }
                        if (opt.super) {
                            return;
                        }
                        var souls = Object.keys(root.next || '');
                        if (souls.length > 9999 && !console.SUBS) {
                            console.log(console.SUBS = "Warning: You have more than 10K live GETs, which might use more bandwidth than your screen can show - consider `.off()`.");
                        }
                        setTimeout.each(souls, function(soul) {
                            var node = root.next[soul];
                            if (opt.super || (node.ask || '')['']) {
                                mesh.say({
                                    get: {
                                        '#': soul
                                    }
                                }, peer);
                                return;
                            }
                            setTimeout.each(Object.keys(node.ask || ''), function(key) {
                                if (!key) {
                                    return;
                                }
                                mesh.say({
                                    '##': String.hash((root.graph[soul] || '')[key]),
                                    get: {
                                        '#': soul,
                                        '.': key
                                    }
                                }, peer);
                            });
                        });
                    });
                    return mesh;
                }
                var u;
                try {
                    module.exports = Mesh;
                } catch (e) {}
            })(USE, './mesh');
            USE(function(module) {
                var Gun = USE('./index');
                Gun.Mesh = USE('./mesh');
                Gun.on('opt', function(root) {
                    this.to.next(root);
                    if (root.once) {
                        return;
                    }
                    var opt = root.opt;
                    if (false === opt.WebSocket) {
                        return;
                    }
                    var env = Gun.window || {};
                    var websocket = opt.WebSocket || env.WebSocket || env.webkitWebSocket || env.mozWebSocket;
                    if (!websocket) {
                        return;
                    }
                    opt.WebSocket = websocket;
                    var mesh = opt.mesh = opt.mesh || Gun.Mesh(root);
                    mesh.wire || opt.wire;
                    mesh.wire = opt.wire = open;
                    function open(peer) {
                        try {
                            if (!peer || !peer.url) {
                                return wire && wire(peer);
                            }
                            var url = peer.url.replace(/^http/, 'ws');
                            var wire = peer.wire = new opt.WebSocket(url);
                            wire.onclose = function() {
                                reconnect(peer);
                                opt.mesh.bye(peer);
                            };
                            wire.onerror = function(err) {
                                reconnect(peer);
                            };
                            wire.onopen = function() {
                                opt.mesh.hi(peer);
                            };
                            wire.onmessage = function(msg) {
                                if (!msg) {
                                    return;
                                }
                                opt.mesh.hear(msg.data || msg, peer);
                            };
                            return wire;
                        } catch (e) {
                            opt.mesh.bye(peer);
                        }
                    }
                    setTimeout(function() {
                        !opt.super && root.on('out', {
                            dam: 'hi'
                        });
                    }, 1);
                    var wait = 2 * 999;
                    function reconnect(peer) {
                        clearTimeout(peer.defer);
                        if (!opt.peers[peer.url]) {
                            return;
                        }
                        if (doc && peer.retry <= 0) {
                            return;
                        }
                        peer.retry = (peer.retry || opt.retry + 1 || 60) - ((-peer.tried + (peer.tried = +new Date) < wait * 4) ? 1 : 0);
                        peer.defer = setTimeout(function to() {
                            if (doc && doc.hidden) {
                                return setTimeout(to, wait);
                            }
                            open(peer);
                        }, wait);
                    }
                    var doc = ('' + u !== typeof document) && document;
                });
                var u;
            })(USE, './websocket');
            USE(function(module) {
                if (typeof Gun === 'undefined') {
                    return;
                }
                var noop = function() {}, store;
                try {
                    store = (Gun.window || noop).localStorage;
                } catch (e) {}
                if (!store) {
                    Gun.log("Warning: No localStorage exists to persist data to!");
                    store = {
                        setItem: function(k, v) {
                            this[k] = v;
                        },
                        removeItem: function(k) {
                            delete this[k];
                        },
                        getItem: function(k) {
                            return this[k];
                        }
                    };
                }
                var json = JSON.stringifyAsync || function(v, cb, r, s) {
                    var u;
                    try {
                        cb(u, JSON.stringify(v, r, s));
                    } catch (e) {
                        cb(e);
                    }
                };
                Gun.on('create', function lg(root) {
                    this.to.next(root);
                    var opt = root.opt;
                    root.graph;
                    var acks = [], disk, to, size, stop;
                    if (false === opt.localStorage) {
                        return;
                    }
                    opt.prefix = opt.file || 'gun/';
                    try {
                        disk = lg[opt.prefix] = lg[opt.prefix] || JSON.parse(size = store.getItem(opt.prefix)) || {};
                    } catch (e) {
                        disk = lg[opt.prefix] = {};
                    }
                    size = (size || '').length;
                    root.on('get', function(msg) {
                        this.to.next(msg);
                        var lex = msg.get, soul, data, tmp, u;
                        if (!lex || !(soul = lex['#'])) {
                            return;
                        }
                        data = disk[soul] || u;
                        if (data && (tmp = lex['.']) && !Object.plain(tmp)) {
                            data = Gun.state.ify({}, tmp, Gun.state.is(data, tmp), data[tmp], soul);
                        }
                        Gun.on.get.ack(msg, data);
                    });
                    root.on('put', function(msg) {
                        this.to.next(msg);
                        var put = msg.put, soul = put['#'], key = put['.'], id = msg['#'], ok = msg.ok || '';
                        if (!(root.next || '')[soul]) {
                            return;
                        }
                        disk[soul] = Gun.state.ify(disk[soul], key, put['>'], put[':'], soul);
                        if (stop && size > (4999880)) {
                            root.on('in', {
                                '@': id,
                                err: "localStorage max!"
                            });
                            return;
                        }
                        if (!msg['@'] && (!msg._.via || Math.random() < (ok['@'] / ok['/']))) {
                            acks.push(id);
                        }
                        if (to) {
                            return;
                        }
                        to = setTimeout(flush, 9 + (size / 333));
                    });
                    function flush() {
                        if (!acks.length && ((setTimeout.turn || '').s || '').length) {
                            setTimeout(flush, 99);
                            return;
                        }
                        var ack = acks;
                        clearTimeout(to);
                        to = false;
                        acks = [];
                        json(disk, function(err, tmp) {
                            try {
                                !err && store.setItem(opt.prefix, tmp);
                            } catch (e) {
                                err = stop = e || "localStorage failure";
                            }
                            if (err) {
                                Gun.log(err + " Consider using GUN's IndexedDB plugin for RAD for more storage space, https://gun.eco/docs/RAD#install");
                                root.on('localStorage:error', {
                                    err: err,
                                    get: opt.prefix,
                                    put: disk
                                });
                            }
                            size = tmp.length;
                            setTimeout.each(ack, function(id) {
                                root.on('in', {
                                    '@': id,
                                    err: err,
                                    ok: 0
                                });
                            }, 0, 99);
                        });
                    }
                });
            })(USE, './localStorage');
        }());
        (function() {
            var u;
            if ('' + u == typeof Gun) {
                return;
            }
            var DEP = function(n) {
                console.warn("Warning! Deprecated internal utility will break in next version:", n);
            };
            var Type = Gun;
            Type.fn = Type.fn || {
                is: function(fn) {
                    DEP('fn');
                    return (!!fn && 'function' == typeof fn);
                }
            };
            Type.bi = Type.bi || {
                is: function(b) {
                    DEP('bi');
                    return (b instanceof Boolean || typeof b == 'boolean');
                }
            };
            Type.num = Type.num || {
                is: function(n) {
                    DEP('num');
                    return !list_is(n) && ((n - parseFloat(n) + 1) >= 0 || Infinity === n || -Infinity === n);
                }
            };
            Type.text = Type.text || {
                is: function(t) {
                    DEP('text');
                    return (typeof t == 'string');
                }
            };
            Type.text.ify = Type.text.ify || function(t) {
                DEP('text.ify');
                if (Type.text.is(t)) {
                    return t;
                }
                if (typeof JSON !== "undefined") {
                    return JSON.stringify(t);
                }
                return (t && t.toString) ? t.toString() : t;
            };
            Type.text.random = Type.text.random || function(l, c) {
                DEP('text.random');
                var s = '';
                l = l || 24;
                c = c || '0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz';
                while(l > 0){
                    s += c.charAt(Math.floor(Math.random() * c.length));
                    l--;
                }
                return s;
            };
            Type.text.match = Type.text.match || function(t, o) {
                var tmp, u;
                DEP('text.match');
                if ('string' !== typeof t) {
                    return false;
                }
                if ('string' == typeof o) {
                    o = {
                        '=': o
                    };
                }
                o = o || {};
                tmp = (o['='] || o['*'] || o['>'] || o['<']);
                if (t === tmp) {
                    return true;
                }
                if (u !== o['=']) {
                    return false;
                }
                tmp = (o['*'] || o['>'] || o['<']);
                if (t.slice(0, (tmp || '').length) === tmp) {
                    return true;
                }
                if (u !== o['*']) {
                    return false;
                }
                if (u !== o['>'] && u !== o['<']) {
                    return (t >= o['>'] && t <= o['<']) ? true : false;
                }
                if (u !== o['>'] && t >= o['>']) {
                    return true;
                }
                if (u !== o['<'] && t <= o['<']) {
                    return true;
                }
                return false;
            };
            Type.text.hash = Type.text.hash || function(s, c) {
                DEP('text.hash');
                if (typeof s !== 'string') {
                    return;
                }
                c = c || 0;
                if (!s.length) {
                    return c;
                }
                for(var i = 0, l = s.length, n; i < l; ++i){
                    n = s.charCodeAt(i);
                    c = ((c << 5) - c) + n;
                    c |= 0;
                }
                return c;
            };
            Type.list = Type.list || {
                is: function(l) {
                    DEP('list');
                    return (l instanceof Array);
                }
            };
            Type.list.slit = Type.list.slit || Array.prototype.slice;
            Type.list.sort = Type.list.sort || function(k) {
                DEP('list.sort');
                return function(A, B) {
                    if (!A || !B) {
                        return 0;
                    }
                    A = A[k];
                    B = B[k];
                    if (A < B) {
                        return -1;
                    } else if (A > B) {
                        return 1;
                    } else {
                        return 0;
                    }
                };
            };
            Type.list.map = Type.list.map || function(l, c, _) {
                DEP('list.map');
                return obj_map(l, c, _);
            };
            Type.list.index = 1;
            Type.obj = Type.boj || {
                is: function(o) {
                    DEP('obj');
                    return o ? (o instanceof Object && o.constructor === Object) || Object.prototype.toString.call(o).match(/^\[object (\w+)\]$/)[1] === 'Object' : false;
                }
            };
            Type.obj.put = Type.obj.put || function(o, k, v) {
                DEP('obj.put');
                return (o || {})[k] = v, o;
            };
            Type.obj.has = Type.obj.has || function(o, k) {
                DEP('obj.has');
                return o && Object.prototype.hasOwnProperty.call(o, k);
            };
            Type.obj.del = Type.obj.del || function(o, k) {
                DEP('obj.del');
                if (!o) {
                    return;
                }
                o[k] = null;
                delete o[k];
                return o;
            };
            Type.obj.as = Type.obj.as || function(o, k, v, u) {
                DEP('obj.as');
                return o[k] = o[k] || (u === v ? {} : v);
            };
            Type.obj.ify = Type.obj.ify || function(o) {
                DEP('obj.ify');
                if (obj_is(o)) {
                    return o;
                }
                try {
                    o = JSON.parse(o);
                } catch (e) {
                    o = {};
                }
                return o;
            };
            (function() {
                var u;
                function map(v, k) {
                    if (obj_has(this, k) && u !== this[k]) {
                        return;
                    }
                    this[k] = v;
                }
                Type.obj.to = Type.obj.to || function(from, to) {
                    DEP('obj.to');
                    to = to || {};
                    obj_map(from, map, to);
                    return to;
                };
            }());
            Type.obj.copy = Type.obj.copy || function(o) {
                DEP('obj.copy');
                return !o ? o : JSON.parse(JSON.stringify(o));
            };
            (function() {
                function empty(v, i) {
                    var n = this.n, u;
                    if (n && (i === n || (obj_is(n) && obj_has(n, i)))) {
                        return;
                    }
                    if (u !== i) {
                        return true;
                    }
                }
                Type.obj.empty = Type.obj.empty || function(o, n) {
                    DEP('obj.empty');
                    if (!o) {
                        return true;
                    }
                    return obj_map(o, empty, {
                        n: n
                    }) ? false : true;
                };
            }());
            (function() {
                function t(k, v) {
                    if (2 === arguments.length) {
                        t.r = t.r || {};
                        t.r[k] = v;
                        return;
                    }
                    t.r = t.r || [];
                    t.r.push(k);
                }
                var keys = Object.keys, map;
                Object.keys = Object.keys || function(o) {
                    return map(o, function(v, k, t) {
                        t(k);
                    });
                };
                Type.obj.map = map = Type.obj.map || function(l, c, _) {
                    DEP('obj.map');
                    var u, i = 0, x, r, ll, lle, f = 'function' == typeof c;
                    t.r = u;
                    if (keys && obj_is(l)) {
                        ll = keys(l);
                        lle = true;
                    }
                    _ = _ || {};
                    if (list_is(l) || ll) {
                        x = (ll || l).length;
                        for(; i < x; i++){
                            var ii = (i + Type.list.index);
                            if (f) {
                                r = lle ? c.call(_, l[ll[i]], ll[i], t) : c.call(_, l[i], ii, t);
                                if (r !== u) {
                                    return r;
                                }
                            } else {
                                if (c === l[lle ? ll[i] : i]) {
                                    return ll ? ll[i] : ii;
                                }
                            }
                        }
                    } else {
                        for(i in l){
                            if (f) {
                                if (obj_has(l, i)) {
                                    r = _ ? c.call(_, l[i], i, t) : c(l[i], i, t);
                                    if (r !== u) {
                                        return r;
                                    }
                                }
                            } else {
                                if (c === l[i]) {
                                    return i;
                                }
                            }
                        }
                    }
                    return f ? t.r : Type.list.index ? 0 : -1;
                };
            }());
            Type.time = Type.time || {};
            Type.time.is = Type.time.is || function(t) {
                DEP('time');
                return t ? t instanceof Date : (+new Date().getTime());
            };
            var fn_is = Type.fn.is;
            var list_is = Type.list.is;
            var obj = Type.obj, obj_is = obj.is, obj_has = obj.has, obj_map = obj.map;
            var Val = {};
            Val.is = function(v) {
                DEP('val.is');
                if (v === u) {
                    return false;
                }
                if (v === null) {
                    return true;
                }
                if (v === Infinity) {
                    return false;
                }
                if (text_is(v) || bi_is(v) || num_is(v)) {
                    return true;
                }
                return Val.link.is(v) || false;
            };
            Val.link = Val.rel = {
                _: '#'
            };
            (function() {
                Val.link.is = function(v) {
                    DEP('val.link.is');
                    if (v && v[rel_] && !v._ && obj_is(v)) {
                        var o = {};
                        obj_map(v, map, o);
                        if (o.id) {
                            return o.id;
                        }
                    }
                    return false;
                };
                function map(s, k) {
                    var o = this;
                    if (o.id) {
                        return o.id = false;
                    }
                    if (k == rel_ && text_is(s)) {
                        o.id = s;
                    } else {
                        return o.id = false;
                    }
                }
            }());
            Val.link.ify = function(t) {
                DEP('val.link.ify');
                return obj_put({}, rel_, t);
            };
            Type.obj.has._ = '.';
            var rel_ = Val.link._, u;
            var bi_is = Type.bi.is;
            var num_is = Type.num.is;
            var text_is = Type.text.is;
            var obj = Type.obj, obj_is = obj.is, obj_put = obj.put, obj_map = obj.map;
            Type.val = Type.val || Val;
            var Node = {
                _: '_'
            };
            Node.soul = function(n, o) {
                DEP('node.soul');
                return (n && n._ && n._[o || soul_]);
            };
            Node.soul.ify = function(n, o) {
                DEP('node.soul.ify');
                o = (typeof o === 'string') ? {
                    soul: o
                } : o || {};
                n = n || {};
                n._ = n._ || {};
                n._[soul_] = o.soul || n._[soul_] || text_random();
                return n;
            };
            Node.soul._ = Val.link._;
            (function() {
                Node.is = function(n, cb, as) {
                    DEP('node.is');
                    var s;
                    if (!obj_is(n)) {
                        return false;
                    }
                    if (s = Node.soul(n)) {
                        return !obj_map(n, map, {
                            as: as,
                            cb: cb,
                            s: s,
                            n: n
                        });
                    }
                    return false;
                };
                function map(v, k) {
                    if (k === Node._) {
                        return;
                    }
                    if (!Val.is(v)) {
                        return true;
                    }
                    if (this.cb) {
                        this.cb.call(this.as, v, k, this.n, this.s);
                    }
                }
            }());
            (function() {
                Node.ify = function(obj, o, as) {
                    DEP('node.ify');
                    if (!o) {
                        o = {};
                    } else if (typeof o === 'string') {
                        o = {
                            soul: o
                        };
                    } else if ('function' == typeof o) {
                        o = {
                            map: o
                        };
                    }
                    if (o.map) {
                        o.node = o.map.call(as, obj, u, o.node || {});
                    }
                    if (o.node = Node.soul.ify(o.node || {}, o)) {
                        obj_map(obj, map, {
                            o: o,
                            as: as
                        });
                    }
                    return o.node;
                };
                function map(v, k) {
                    var o = this.o, tmp, u;
                    if (o.map) {
                        tmp = o.map.call(this.as, v, '' + k, o.node);
                        if (u === tmp) {
                            obj_del(o.node, k);
                        } else if (o.node) {
                            o.node[k] = tmp;
                        }
                        return;
                    }
                    if (Val.is(v)) {
                        o.node[k] = v;
                    }
                }
            }());
            var obj = Type.obj, obj_is = obj.is, obj_del = obj.del, obj_map = obj.map;
            var text = Type.text, text_random = text.random;
            var soul_ = Node.soul._;
            var u;
            Type.node = Type.node || Node;
            var State = Type.state;
            State.lex = function() {
                DEP('state.lex');
                return State().toString(36).replace('.', '');
            };
            State.to = function(from, k, to) {
                DEP('state.to');
                var val = (from || {})[k];
                if (obj_is(val)) {
                    val = obj_copy(val);
                }
                return State.ify(to, k, State.is(from, k), val, Node.soul(from));
            };
            (function() {
                State.map = function(cb, s, as) {
                    DEP('state.map');
                    var u;
                    var o = obj_is(o = cb || s) ? o : null;
                    cb = fn_is(cb = cb || s) ? cb : null;
                    if (o && !cb) {
                        s = num_is(s) ? s : State();
                        o[N_] = o[N_] || {};
                        obj_map(o, map, {
                            o: o,
                            s: s
                        });
                        return o;
                    }
                    as = as || obj_is(s) ? s : u;
                    s = num_is(s) ? s : State();
                    return function(v, k, o, opt) {
                        if (!cb) {
                            map.call({
                                o: o,
                                s: s
                            }, v, k);
                            return v;
                        }
                        cb.call(as || this || {}, v, k, o, opt);
                        if (obj_has(o, k) && u === o[k]) {
                            return;
                        }
                        map.call({
                            o: o,
                            s: s
                        }, v, k);
                    };
                };
                function map(v, k) {
                    if (N_ === k) {
                        return;
                    }
                    State.ify(this.o, k, this.s);
                }
            }());
            var obj = Type.obj;
            obj.as;
            var obj_has = obj.has, obj_is = obj.is, obj_map = obj.map, obj_copy = obj.copy;
            var num = Type.num, num_is = num.is;
            var fn = Type.fn, fn_is = fn.is;
            var N_ = Node._, u;
            var Graph = {};
            (function() {
                Graph.is = function(g, cb, fn, as) {
                    DEP('graph.is');
                    if (!g || !obj_is(g) || obj_empty(g)) {
                        return false;
                    }
                    return !obj_map(g, map, {
                        cb: cb,
                        fn: fn,
                        as: as
                    });
                };
                function map(n, s) {
                    if (!n || s !== Node.soul(n) || !Node.is(n, this.fn, this.as)) {
                        return true;
                    }
                    if (!this.cb) {
                        return;
                    }
                    nf.n = n;
                    nf.as = this.as;
                    this.cb.call(nf.as, n, s, nf);
                }
                function nf(fn) {
                    if (fn) {
                        Node.is(nf.n, fn, nf.as);
                    }
                }
            }());
            (function() {
                Graph.ify = function(obj, env, as) {
                    DEP('graph.ify');
                    var at = {
                        path: [],
                        obj: obj
                    };
                    if (!env) {
                        env = {};
                    } else if (typeof env === 'string') {
                        env = {
                            soul: env
                        };
                    } else if ('function' == typeof env) {
                        env.map = env;
                    }
                    if (typeof as === 'string') {
                        env.soul = env.soul || as;
                        as = u;
                    }
                    if (env.soul) {
                        at.link = Val.link.ify(env.soul);
                    }
                    env.shell = (as || {}).shell;
                    env.graph = env.graph || {};
                    env.seen = env.seen || [];
                    env.as = env.as || as;
                    node(env, at);
                    env.root = at.node;
                    return env.graph;
                };
                function node(env, at) {
                    var tmp;
                    if (tmp = seen(env, at)) {
                        return tmp;
                    }
                    at.env = env;
                    at.soul = soul;
                    if (Node.ify(at.obj, map, at)) {
                        at.link = at.link || Val.link.ify(Node.soul(at.node));
                        if (at.obj !== env.shell) {
                            env.graph[Val.link.is(at.link)] = at.node;
                        }
                    }
                    return at;
                }
                function map(v, k, n) {
                    var at = this, env = at.env, is, tmp;
                    if (Node._ === k && obj_has(v, Val.link._)) {
                        return n._;
                    }
                    if (!(is = valid(v, k, n, at, env))) {
                        return;
                    }
                    if (!k) {
                        at.node = at.node || n || {};
                        if (obj_has(v, Node._) && Node.soul(v)) {
                            at.node._ = obj_copy(v._);
                        }
                        at.node = Node.soul.ify(at.node, Val.link.is(at.link));
                        at.link = at.link || Val.link.ify(Node.soul(at.node));
                    }
                    if (tmp = env.map) {
                        tmp.call(env.as || {}, v, k, n, at);
                        if (obj_has(n, k)) {
                            v = n[k];
                            if (u === v) {
                                obj_del(n, k);
                                return;
                            }
                            if (!(is = valid(v, k, n, at, env))) {
                                return;
                            }
                        }
                    }
                    if (!k) {
                        return at.node;
                    }
                    if (true === is) {
                        return v;
                    }
                    tmp = node(env, {
                        obj: v,
                        path: at.path.concat(k)
                    });
                    if (!tmp.node) {
                        return;
                    }
                    return tmp.link;
                }
                function soul(id) {
                    var at = this;
                    var prev = Val.link.is(at.link), graph = at.env.graph;
                    at.link = at.link || Val.link.ify(id);
                    at.link[Val.link._] = id;
                    if (at.node && at.node[Node._]) {
                        at.node[Node._][Val.link._] = id;
                    }
                    if (obj_has(graph, prev)) {
                        graph[id] = graph[prev];
                        obj_del(graph, prev);
                    }
                }
                function valid(v, k, n, at, env) {
                    var tmp;
                    if (Val.is(v)) {
                        return true;
                    }
                    if (obj_is(v)) {
                        return 1;
                    }
                    if (tmp = env.invalid) {
                        v = tmp.call(env.as || {}, v, k, n);
                        return valid(v, k, n, at, env);
                    }
                    env.err = "Invalid value at '" + at.path.concat(k).join('.') + "'!";
                    if (Type.list.is(v)) {
                        env.err += " Use `.set(item)` instead of an Array.";
                    }
                }
                function seen(env, at) {
                    var arr = env.seen, i = arr.length, has;
                    while(i--){
                        has = arr[i];
                        if (at.obj === has.obj) {
                            return has;
                        }
                    }
                    arr.push(at);
                }
            }());
            Graph.node = function(node) {
                DEP('graph.node');
                var soul = Node.soul(node);
                if (!soul) {
                    return;
                }
                return obj_put({}, soul, node);
            };
            (function() {
                Graph.to = function(graph, root, opt) {
                    DEP('graph.to');
                    if (!graph) {
                        return;
                    }
                    var obj = {};
                    opt = opt || {
                        seen: {}
                    };
                    obj_map(graph[root], map, {
                        obj: obj,
                        graph: graph,
                        opt: opt
                    });
                    return obj;
                };
                function map(v, k) {
                    var tmp, obj;
                    if (Node._ === k) {
                        if (obj_empty(v, Val.link._)) {
                            return;
                        }
                        this.obj[k] = obj_copy(v);
                        return;
                    }
                    if (!(tmp = Val.link.is(v))) {
                        this.obj[k] = v;
                        return;
                    }
                    if (obj = this.opt.seen[tmp]) {
                        this.obj[k] = obj;
                        return;
                    }
                    this.obj[k] = this.opt.seen[tmp] = Graph.to(this.graph, tmp, this.opt);
                }
            }());
            var fn_is = Type.fn.is;
            var obj = Type.obj, obj_is = obj.is, obj_del = obj.del, obj_has = obj.has, obj_empty = obj.empty, obj_put = obj.put, obj_map = obj.map, obj_copy = obj.copy;
            var u;
            Type.graph = Type.graph || Graph;
        }());
    }(gun$1));
    var gunExports = gun$1.exports;
    var browser = gunExports;
    const Gun$2 = getDefaultExportFromCjs(browser);
    var sea = {
        exports: {}
    };
    sea.exports;
    (function(module) {
        (function() {
            function USE(arg, req) {
                return req ? commonjsRequire(arg) : arg.slice ? USE[R(arg)] : function(mod, path) {
                    arg(mod = {
                        exports: {}
                    });
                    USE[R(path)] = mod.exports;
                };
                function R(p) {
                    return p.split('/').slice(-1).toString().replace('.js', '');
                }
            }
            {
                var MODULE = module;
            }
            USE(function(module) {
                if (typeof self !== "undefined") {
                    module.window = self;
                }
                if (typeof window !== "undefined") {
                    module.window = window;
                }
                var tmp = module.window || module, u;
                var SEA = tmp.SEA || {};
                if (SEA.window = module.window) {
                    SEA.window.SEA = SEA;
                }
                try {
                    if (u + '' !== typeof MODULE) {
                        MODULE.exports = SEA;
                    }
                } catch (e) {}
                module.exports = SEA;
            })(USE, './root');
            USE(function(module) {
                var SEA = USE('./root');
                try {
                    if (SEA.window) {
                        if (location.protocol.indexOf('s') < 0 && location.host.indexOf('localhost') < 0 && !/^127\.\d+\.\d+\.\d+$/.test(location.hostname) && location.protocol.indexOf('file:') < 0) {
                            console.warn('HTTPS needed for WebCrypto in SEA, redirecting...');
                            location.protocol = 'https:';
                        }
                    }
                } catch (e) {}
            })(USE, './https');
            USE(function(module) {
                var u;
                if (u + '' == typeof btoa) {
                    if (u + '' == typeof Buffer) {
                        try {
                            commonjsGlobal.Buffer = USE("buffer", 1).Buffer;
                        } catch (e) {
                            console.log("Please `npm install buffer` or add it to your package.json !");
                        }
                    }
                    commonjsGlobal.btoa = function(data) {
                        return Buffer.from(data, "binary").toString("base64");
                    };
                    commonjsGlobal.atob = function(data) {
                        return Buffer.from(data, "base64").toString("binary");
                    };
                }
            })(USE, './base64');
            USE(function(module) {
                USE('./base64');
                function SeaArray() {}
                Object.assign(SeaArray, {
                    from: Array.from
                });
                SeaArray.prototype = Object.create(Array.prototype);
                SeaArray.prototype.toString = function(enc, start, end) {
                    enc = enc || 'utf8';
                    start = start || 0;
                    const length = this.length;
                    if (enc === 'hex') {
                        const buf = new Uint8Array(this);
                        return [
                            ...Array(((end && (end + 1)) || length) - start).keys()
                        ].map((i)=>buf[i + start].toString(16).padStart(2, '0')).join('');
                    }
                    if (enc === 'utf8') {
                        return Array.from({
                            length: (end || length) - start
                        }, (_, i)=>String.fromCharCode(this[i + start])).join('');
                    }
                    if (enc === 'base64') {
                        return btoa(this);
                    }
                };
                module.exports = SeaArray;
            })(USE, './array');
            USE(function(module) {
                USE('./base64');
                var SeaArray = USE('./array');
                function SafeBuffer(...props) {
                    console.warn('new SafeBuffer() is depreciated, please use SafeBuffer.from()');
                    return SafeBuffer.from(...props);
                }
                SafeBuffer.prototype = Object.create(Array.prototype);
                Object.assign(SafeBuffer, {
                    from () {
                        if (!Object.keys(arguments).length || arguments[0] == null) {
                            throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
                        }
                        const input = arguments[0];
                        let buf;
                        if (typeof input === 'string') {
                            const enc = arguments[1] || 'utf8';
                            if (enc === 'hex') {
                                const bytes = input.match(/([\da-fA-F]{2})/g).map((byte)=>parseInt(byte, 16));
                                if (!bytes || !bytes.length) {
                                    throw new TypeError('Invalid first argument for type \'hex\'.');
                                }
                                buf = SeaArray.from(bytes);
                            } else if (enc === 'utf8' || 'binary' === enc) {
                                const length = input.length;
                                const words = new Uint16Array(length);
                                Array.from({
                                    length: length
                                }, (_, i)=>words[i] = input.charCodeAt(i));
                                buf = SeaArray.from(words);
                            } else if (enc === 'base64') {
                                const dec = atob(input);
                                const length = dec.length;
                                const bytes = new Uint8Array(length);
                                Array.from({
                                    length: length
                                }, (_, i)=>bytes[i] = dec.charCodeAt(i));
                                buf = SeaArray.from(bytes);
                            } else if (enc === 'binary') {
                                buf = SeaArray.from(input);
                            } else {
                                console.info('SafeBuffer.from unknown encoding: ' + enc);
                            }
                            return buf;
                        }
                        input.byteLength;
                        const length = input.byteLength ? input.byteLength : input.length;
                        if (length) {
                            let buf;
                            if (input instanceof ArrayBuffer) {
                                buf = new Uint8Array(input);
                            }
                            return SeaArray.from(buf || input);
                        }
                    },
                    alloc (length, fill = 0) {
                        return SeaArray.from(new Uint8Array(Array.from({
                            length: length
                        }, ()=>fill)));
                    },
                    allocUnsafe (length) {
                        return SeaArray.from(new Uint8Array(Array.from({
                            length: length
                        })));
                    },
                    concat (arr) {
                        if (!Array.isArray(arr)) {
                            throw new TypeError('First argument must be Array containing ArrayBuffer or Uint8Array instances.');
                        }
                        return SeaArray.from(arr.reduce((ret, item)=>ret.concat(Array.from(item)), []));
                    }
                });
                SafeBuffer.prototype.from = SafeBuffer.from;
                SafeBuffer.prototype.toString = SeaArray.prototype.toString;
                module.exports = SafeBuffer;
            })(USE, './buffer');
            USE(function(module) {
                const SEA = USE('./root');
                const api = {
                    Buffer: USE('./buffer')
                };
                var o = {}, u;
                JSON.parseAsync = JSON.parseAsync || function(t, cb, r) {
                    var u;
                    try {
                        cb(u, JSON.parse(t, r));
                    } catch (e) {
                        cb(e);
                    }
                };
                JSON.stringifyAsync = JSON.stringifyAsync || function(v, cb, r, s) {
                    var u;
                    try {
                        cb(u, JSON.stringify(v, r, s));
                    } catch (e) {
                        cb(e);
                    }
                };
                api.parse = function(t, r) {
                    return new Promise(function(res, rej) {
                        JSON.parseAsync(t, function(err, raw) {
                            err ? rej(err) : res(raw);
                        }, r);
                    });
                };
                api.stringify = function(v, r, s) {
                    return new Promise(function(res, rej) {
                        JSON.stringifyAsync(v, function(err, raw) {
                            err ? rej(err) : res(raw);
                        }, r, s);
                    });
                };
                if (SEA.window) {
                    api.crypto = SEA.window.crypto || SEA.window.msCrypto;
                    api.subtle = (api.crypto || o).subtle || (api.crypto || o).webkitSubtle;
                    api.TextEncoder = SEA.window.TextEncoder;
                    api.TextDecoder = SEA.window.TextDecoder;
                    api.random = (len)=>api.Buffer.from(api.crypto.getRandomValues(new Uint8Array(api.Buffer.alloc(len))));
                }
                if (!api.TextDecoder) {
                    const { TextEncoder, TextDecoder } = USE((u + '' == typeof MODULE ? '.' : '') + './lib/text-encoding', 1);
                    api.TextDecoder = TextDecoder;
                    api.TextEncoder = TextEncoder;
                }
                if (!api.crypto) {
                    try {
                        var crypto = USE('crypto', 1);
                        Object.assign(api, {
                            crypto,
                            random: (len)=>api.Buffer.from(crypto.randomBytes(len))
                        });
                        const { Crypto: WebCrypto } = USE('@peculiar/webcrypto', 1);
                        api.ossl = api.subtle = new WebCrypto({
                            directory: 'ossl'
                        }).subtle;
                    } catch (e) {
                        console.log("Please `npm install @peculiar/webcrypto` or add it to your package.json !");
                    }
                }
                module.exports = api;
            })(USE, './shim');
            USE(function(module) {
                var SEA = USE('./root');
                var shim = USE('./shim');
                var s = {};
                s.pbkdf2 = {
                    hash: {
                        name: 'SHA-256'
                    },
                    iter: 100000,
                    ks: 64
                };
                s.ecdsa = {
                    pair: {
                        name: 'ECDSA',
                        namedCurve: 'P-256'
                    },
                    sign: {
                        name: 'ECDSA',
                        hash: {
                            name: 'SHA-256'
                        }
                    }
                };
                s.ecdh = {
                    name: 'ECDH',
                    namedCurve: 'P-256'
                };
                s.jwk = function(pub, d) {
                    pub = pub.split('.');
                    var x = pub[0], y = pub[1];
                    var jwk = {
                        kty: "EC",
                        crv: "P-256",
                        x: x,
                        y: y,
                        ext: true
                    };
                    jwk.key_ops = d ? [
                        'sign'
                    ] : [
                        'verify'
                    ];
                    if (d) {
                        jwk.d = d;
                    }
                    return jwk;
                };
                s.keyToJwk = function(keyBytes) {
                    const keyB64 = keyBytes.toString('base64');
                    const k = keyB64.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=/g, '');
                    return {
                        kty: 'oct',
                        k: k,
                        ext: false,
                        alg: 'A256GCM'
                    };
                };
                s.recall = {
                    validity: 12 * 60 * 60,
                    hook: function(props) {
                        return props;
                    }
                };
                s.check = function(t) {
                    return (typeof t == 'string') && ('SEA{' === t.slice(0, 4));
                };
                s.parse = async function p(t) {
                    try {
                        var yes = (typeof t == 'string');
                        if (yes && 'SEA{' === t.slice(0, 4)) {
                            t = t.slice(3);
                        }
                        return yes ? await shim.parse(t) : t;
                    } catch (e) {}
                    return t;
                };
                SEA.opt = s;
                module.exports = s;
            })(USE, './settings');
            USE(function(module) {
                var shim = USE('./shim');
                module.exports = async function(d, o) {
                    var t = (typeof d == 'string') ? d : await shim.stringify(d);
                    var hash = await shim.subtle.digest({
                        name: o || 'SHA-256'
                    }, new shim.TextEncoder().encode(t));
                    return shim.Buffer.from(hash);
                };
            })(USE, './sha256');
            USE(function(module) {
                const __shim = USE('./shim');
                const subtle = __shim.subtle;
                const ossl = __shim.ossl ? __shim.ossl : subtle;
                const sha1hash = (b)=>ossl.digest({
                        name: 'SHA-1'
                    }, new ArrayBuffer(b));
                module.exports = sha1hash;
            })(USE, './sha1');
            USE(function(module) {
                var SEA = USE('./root');
                var shim = USE('./shim');
                var S = USE('./settings');
                var sha = USE('./sha256');
                var u;
                SEA.work = SEA.work || (async (data, pair, cb, opt)=>{
                    try {
                        var salt = (pair || {}).epub || pair;
                        opt = opt || {};
                        if (salt instanceof Function) {
                            cb = salt;
                            salt = u;
                        }
                        data = (typeof data == 'string') ? data : await shim.stringify(data);
                        if ('sha' === (opt.name || '').toLowerCase().slice(0, 3)) {
                            var rsha = shim.Buffer.from(await sha(data, opt.name), 'binary').toString(opt.encode || 'base64');
                            if (cb) {
                                try {
                                    cb(rsha);
                                } catch (e) {
                                    console.log(e);
                                }
                            }
                            return rsha;
                        }
                        salt = salt || shim.random(9);
                        var key = await (shim.ossl || shim.subtle).importKey('raw', new shim.TextEncoder().encode(data), {
                            name: opt.name || 'PBKDF2'
                        }, false, [
                            'deriveBits'
                        ]);
                        var work = await (shim.ossl || shim.subtle).deriveBits({
                            name: opt.name || 'PBKDF2',
                            iterations: opt.iterations || S.pbkdf2.iter,
                            salt: new shim.TextEncoder().encode(opt.salt || salt),
                            hash: opt.hash || S.pbkdf2.hash
                        }, key, opt.length || (S.pbkdf2.ks * 8));
                        data = shim.random(data.length);
                        var r = shim.Buffer.from(work, 'binary').toString(opt.encode || 'base64');
                        if (cb) {
                            try {
                                cb(r);
                            } catch (e) {
                                console.log(e);
                            }
                        }
                        return r;
                    } catch (e) {
                        console.log(e);
                        SEA.err = e;
                        if (SEA.throw) {
                            throw e;
                        }
                        if (cb) {
                            cb();
                        }
                        return;
                    }
                });
                module.exports = SEA.work;
            })(USE, './work');
            USE(function(module) {
                var SEA = USE('./root');
                var shim = USE('./shim');
                USE('./settings');
                SEA.name = SEA.name || (async (cb, opt)=>{
                    try {
                        if (cb) {
                            try {
                                cb();
                            } catch (e) {
                                console.log(e);
                            }
                        }
                        return;
                    } catch (e) {
                        console.log(e);
                        SEA.err = e;
                        if (SEA.throw) {
                            throw e;
                        }
                        if (cb) {
                            cb();
                        }
                        return;
                    }
                });
                SEA.pair = SEA.pair || (async (cb, opt)=>{
                    try {
                        var ecdhSubtle = shim.ossl || shim.subtle;
                        var sa = await shim.subtle.generateKey({
                            name: 'ECDSA',
                            namedCurve: 'P-256'
                        }, true, [
                            'sign',
                            'verify'
                        ]).then(async (keys)=>{
                            var key = {};
                            key.priv = (await shim.subtle.exportKey('jwk', keys.privateKey)).d;
                            var pub = await shim.subtle.exportKey('jwk', keys.publicKey);
                            key.pub = pub.x + '.' + pub.y;
                            return key;
                        });
                        try {
                            var dh = await ecdhSubtle.generateKey({
                                name: 'ECDH',
                                namedCurve: 'P-256'
                            }, true, [
                                'deriveKey'
                            ]).then(async (keys)=>{
                                var key = {};
                                key.epriv = (await ecdhSubtle.exportKey('jwk', keys.privateKey)).d;
                                var pub = await ecdhSubtle.exportKey('jwk', keys.publicKey);
                                key.epub = pub.x + '.' + pub.y;
                                return key;
                            });
                        } catch (e) {
                            if (SEA.window) {
                                throw e;
                            }
                            if (e == 'Error: ECDH is not a supported algorithm') {
                                console.log('Ignoring ECDH...');
                            } else {
                                throw e;
                            }
                        }
                        dh = dh || {};
                        var r = {
                            pub: sa.pub,
                            priv: sa.priv,
                            epub: dh.epub,
                            epriv: dh.epriv
                        };
                        if (cb) {
                            try {
                                cb(r);
                            } catch (e) {
                                console.log(e);
                            }
                        }
                        return r;
                    } catch (e) {
                        console.log(e);
                        SEA.err = e;
                        if (SEA.throw) {
                            throw e;
                        }
                        if (cb) {
                            cb();
                        }
                        return;
                    }
                });
                module.exports = SEA.pair;
            })(USE, './pair');
            USE(function(module) {
                var SEA = USE('./root');
                var shim = USE('./shim');
                var S = USE('./settings');
                var sha = USE('./sha256');
                var u;
                SEA.sign = SEA.sign || (async (data, pair, cb, opt)=>{
                    try {
                        opt = opt || {};
                        if (!(pair || opt).priv) {
                            if (!SEA.I) {
                                throw 'No signing key.';
                            }
                            pair = await SEA.I(null, {
                                what: data,
                                how: 'sign',
                                why: opt.why
                            });
                        }
                        if (u === data) {
                            throw '`undefined` not allowed.';
                        }
                        var json = await S.parse(data);
                        var check = opt.check = opt.check || json;
                        if (SEA.verify && (SEA.opt.check(check) || (check && check.s && check.m)) && u !== await SEA.verify(check, pair)) {
                            var r = await S.parse(check);
                            if (!opt.raw) {
                                r = 'SEA' + await shim.stringify(r);
                            }
                            if (cb) {
                                try {
                                    cb(r);
                                } catch (e) {
                                    console.log(e);
                                }
                            }
                            return r;
                        }
                        var pub = pair.pub;
                        var priv = pair.priv;
                        var jwk = S.jwk(pub, priv);
                        var hash = await sha(json);
                        var sig = await (shim.ossl || shim.subtle).importKey('jwk', jwk, {
                            name: 'ECDSA',
                            namedCurve: 'P-256'
                        }, false, [
                            'sign'
                        ]).then((key)=>(shim.ossl || shim.subtle).sign({
                                name: 'ECDSA',
                                hash: {
                                    name: 'SHA-256'
                                }
                            }, key, new Uint8Array(hash)));
                        var r = {
                            m: json,
                            s: shim.Buffer.from(sig, 'binary').toString(opt.encode || 'base64')
                        };
                        if (!opt.raw) {
                            r = 'SEA' + await shim.stringify(r);
                        }
                        if (cb) {
                            try {
                                cb(r);
                            } catch (e) {
                                console.log(e);
                            }
                        }
                        return r;
                    } catch (e) {
                        console.log(e);
                        SEA.err = e;
                        if (SEA.throw) {
                            throw e;
                        }
                        if (cb) {
                            cb();
                        }
                        return;
                    }
                });
                module.exports = SEA.sign;
            })(USE, './sign');
            USE(function(module) {
                var SEA = USE('./root');
                var shim = USE('./shim');
                var S = USE('./settings');
                var sha = USE('./sha256');
                var u;
                SEA.verify = SEA.verify || (async (data, pair, cb, opt)=>{
                    try {
                        var json = await S.parse(data);
                        if (false === pair) {
                            var raw = await S.parse(json.m);
                            if (cb) {
                                try {
                                    cb(raw);
                                } catch (e) {
                                    console.log(e);
                                }
                            }
                            return raw;
                        }
                        opt = opt || {};
                        var pub = pair.pub || pair;
                        var key = SEA.opt.slow_leak ? await SEA.opt.slow_leak(pub) : await (shim.ossl || shim.subtle).importKey('jwk', S.jwk(pub), {
                            name: 'ECDSA',
                            namedCurve: 'P-256'
                        }, false, [
                            'verify'
                        ]);
                        var hash = await sha(json.m);
                        var buf, sig, check, tmp;
                        try {
                            buf = shim.Buffer.from(json.s, opt.encode || 'base64');
                            sig = new Uint8Array(buf);
                            check = await (shim.ossl || shim.subtle).verify({
                                name: 'ECDSA',
                                hash: {
                                    name: 'SHA-256'
                                }
                            }, key, sig, new Uint8Array(hash));
                            if (!check) {
                                throw "Signature did not match.";
                            }
                        } catch (e) {
                            if (SEA.opt.fallback) {
                                return await SEA.opt.fall_verify(data, pair, cb, opt);
                            }
                        }
                        var r = check ? await S.parse(json.m) : u;
                        if (cb) {
                            try {
                                cb(r);
                            } catch (e) {
                                console.log(e);
                            }
                        }
                        return r;
                    } catch (e) {
                        console.log(e);
                        SEA.err = e;
                        if (SEA.throw) {
                            throw e;
                        }
                        if (cb) {
                            cb();
                        }
                        return;
                    }
                });
                module.exports = SEA.verify;
                var knownKeys = {};
                SEA.opt.slow_leak = (pair)=>{
                    if (knownKeys[pair]) return knownKeys[pair];
                    var jwk = S.jwk(pair);
                    knownKeys[pair] = (shim.ossl || shim.subtle).importKey("jwk", jwk, {
                        name: 'ECDSA',
                        namedCurve: 'P-256'
                    }, false, [
                        "verify"
                    ]);
                    return knownKeys[pair];
                };
                var O = SEA.opt;
                SEA.opt.fall_verify = async function(data, pair, cb, opt, f) {
                    if (f === SEA.opt.fallback) {
                        throw "Signature did not match";
                    }
                    f = f || 1;
                    var tmp = data || '';
                    data = SEA.opt.unpack(data) || data;
                    var json = await S.parse(data), pub = pair.pub || pair, key = await SEA.opt.slow_leak(pub);
                    var hash = (f <= SEA.opt.fallback) ? shim.Buffer.from(await shim.subtle.digest({
                        name: 'SHA-256'
                    }, new shim.TextEncoder().encode(await S.parse(json.m)))) : await sha(json.m);
                    var buf;
                    var sig;
                    var check;
                    try {
                        buf = shim.Buffer.from(json.s, opt.encode || 'base64');
                        sig = new Uint8Array(buf);
                        check = await (shim.ossl || shim.subtle).verify({
                            name: 'ECDSA',
                            hash: {
                                name: 'SHA-256'
                            }
                        }, key, sig, new Uint8Array(hash));
                        if (!check) {
                            throw "Signature did not match.";
                        }
                    } catch (e) {
                        try {
                            buf = shim.Buffer.from(json.s, 'utf8');
                            sig = new Uint8Array(buf);
                            check = await (shim.ossl || shim.subtle).verify({
                                name: 'ECDSA',
                                hash: {
                                    name: 'SHA-256'
                                }
                            }, key, sig, new Uint8Array(hash));
                        } catch (e) {
                            if (!check) {
                                throw "Signature did not match.";
                            }
                        }
                    }
                    var r = check ? await S.parse(json.m) : u;
                    O.fall_soul = tmp['#'];
                    O.fall_key = tmp['.'];
                    O.fall_val = data;
                    O.fall_state = tmp['>'];
                    if (cb) {
                        try {
                            cb(r);
                        } catch (e) {
                            console.log(e);
                        }
                    }
                    return r;
                };
                SEA.opt.fallback = 2;
            })(USE, './verify');
            USE(function(module) {
                var shim = USE('./shim');
                var S = USE('./settings');
                var sha256hash = USE('./sha256');
                const importGen = async (key, salt, opt)=>{
                    const combo = key + (salt || shim.random(8)).toString('utf8');
                    const hash = shim.Buffer.from(await sha256hash(combo), 'binary');
                    const jwkKey = S.keyToJwk(hash);
                    return await shim.subtle.importKey('jwk', jwkKey, {
                        name: 'AES-GCM'
                    }, false, [
                        'encrypt',
                        'decrypt'
                    ]);
                };
                module.exports = importGen;
            })(USE, './aeskey');
            USE(function(module) {
                var SEA = USE('./root');
                var shim = USE('./shim');
                USE('./settings');
                var aeskey = USE('./aeskey');
                var u;
                SEA.encrypt = SEA.encrypt || (async (data, pair, cb, opt)=>{
                    try {
                        opt = opt || {};
                        var key = (pair || opt).epriv || pair;
                        if (u === data) {
                            throw '`undefined` not allowed.';
                        }
                        if (!key) {
                            if (!SEA.I) {
                                throw 'No encryption key.';
                            }
                            pair = await SEA.I(null, {
                                what: data,
                                how: 'encrypt',
                                why: opt.why
                            });
                            key = pair.epriv || pair;
                        }
                        var msg = (typeof data == 'string') ? data : await shim.stringify(data);
                        var rand = {
                            s: shim.random(9),
                            iv: shim.random(15)
                        };
                        var ct = await aeskey(key, rand.s, opt).then((aes)=>(shim.subtle).encrypt({
                                name: opt.name || 'AES-GCM',
                                iv: new Uint8Array(rand.iv)
                            }, aes, new shim.TextEncoder().encode(msg)));
                        var r = {
                            ct: shim.Buffer.from(ct, 'binary').toString(opt.encode || 'base64'),
                            iv: rand.iv.toString(opt.encode || 'base64'),
                            s: rand.s.toString(opt.encode || 'base64')
                        };
                        if (!opt.raw) {
                            r = 'SEA' + await shim.stringify(r);
                        }
                        if (cb) {
                            try {
                                cb(r);
                            } catch (e) {
                                console.log(e);
                            }
                        }
                        return r;
                    } catch (e) {
                        console.log(e);
                        SEA.err = e;
                        if (SEA.throw) {
                            throw e;
                        }
                        if (cb) {
                            cb();
                        }
                        return;
                    }
                });
                module.exports = SEA.encrypt;
            })(USE, './encrypt');
            USE(function(module) {
                var SEA = USE('./root');
                var shim = USE('./shim');
                var S = USE('./settings');
                var aeskey = USE('./aeskey');
                SEA.decrypt = SEA.decrypt || (async (data, pair, cb, opt)=>{
                    try {
                        opt = opt || {};
                        var key = (pair || opt).epriv || pair;
                        if (!key) {
                            if (!SEA.I) {
                                throw 'No decryption key.';
                            }
                            pair = await SEA.I(null, {
                                what: data,
                                how: 'decrypt',
                                why: opt.why
                            });
                            key = pair.epriv || pair;
                        }
                        var json = await S.parse(data);
                        var buf, bufiv, bufct;
                        try {
                            buf = shim.Buffer.from(json.s, opt.encode || 'base64');
                            bufiv = shim.Buffer.from(json.iv, opt.encode || 'base64');
                            bufct = shim.Buffer.from(json.ct, opt.encode || 'base64');
                            var ct = await aeskey(key, buf, opt).then((aes)=>(shim.subtle).decrypt({
                                    name: opt.name || 'AES-GCM',
                                    iv: new Uint8Array(bufiv),
                                    tagLength: 128
                                }, aes, new Uint8Array(bufct)));
                        } catch (e) {
                            if ('utf8' === opt.encode) {
                                throw "Could not decrypt";
                            }
                            if (SEA.opt.fallback) {
                                opt.encode = 'utf8';
                                return await SEA.decrypt(data, pair, cb, opt);
                            }
                        }
                        var r = await S.parse(new shim.TextDecoder('utf8').decode(ct));
                        if (cb) {
                            try {
                                cb(r);
                            } catch (e) {
                                console.log(e);
                            }
                        }
                        return r;
                    } catch (e) {
                        console.log(e);
                        SEA.err = e;
                        if (SEA.throw) {
                            throw e;
                        }
                        if (cb) {
                            cb();
                        }
                        return;
                    }
                });
                module.exports = SEA.decrypt;
            })(USE, './decrypt');
            USE(function(module) {
                var SEA = USE('./root');
                var shim = USE('./shim');
                USE('./settings');
                SEA.secret = SEA.secret || (async (key, pair, cb, opt)=>{
                    try {
                        opt = opt || {};
                        if (!pair || !pair.epriv || !pair.epub) {
                            if (!SEA.I) {
                                throw 'No secret mix.';
                            }
                            pair = await SEA.I(null, {
                                what: key,
                                how: 'secret',
                                why: opt.why
                            });
                        }
                        var pub = key.epub || key;
                        var epub = pair.epub;
                        var epriv = pair.epriv;
                        var ecdhSubtle = shim.ossl || shim.subtle;
                        var pubKeyData = keysToEcdhJwk(pub);
                        var props = Object.assign({
                            public: await ecdhSubtle.importKey(...pubKeyData, true, [])
                        }, {
                            name: 'ECDH',
                            namedCurve: 'P-256'
                        });
                        var privKeyData = keysToEcdhJwk(epub, epriv);
                        var derived = await ecdhSubtle.importKey(...privKeyData, false, [
                            'deriveBits'
                        ]).then(async (privKey)=>{
                            var derivedBits = await ecdhSubtle.deriveBits(props, privKey, 256);
                            var rawBits = new Uint8Array(derivedBits);
                            var derivedKey = await ecdhSubtle.importKey('raw', rawBits, {
                                name: 'AES-GCM',
                                length: 256
                            }, true, [
                                'encrypt',
                                'decrypt'
                            ]);
                            return ecdhSubtle.exportKey('jwk', derivedKey).then(({ k })=>k);
                        });
                        var r = derived;
                        if (cb) {
                            try {
                                cb(r);
                            } catch (e) {
                                console.log(e);
                            }
                        }
                        return r;
                    } catch (e) {
                        console.log(e);
                        SEA.err = e;
                        if (SEA.throw) {
                            throw e;
                        }
                        if (cb) {
                            cb();
                        }
                        return;
                    }
                });
                var keysToEcdhJwk = (pub, d)=>{
                    var [x, y] = pub.split('.');
                    var jwk = d ? {
                        d: d
                    } : {};
                    return [
                        'jwk',
                        Object.assign(jwk, {
                            x: x,
                            y: y,
                            kty: 'EC',
                            crv: 'P-256',
                            ext: true
                        }),
                        {
                            name: 'ECDH',
                            namedCurve: 'P-256'
                        }
                    ];
                };
                module.exports = SEA.secret;
            })(USE, './secret');
            USE(function(module) {
                var SEA = USE('./root');
                SEA.certify = SEA.certify || (async (certificants, policy = {}, authority, cb, opt = {})=>{
                    try {
                        console.log('SEA.certify() is an early experimental community supported method that may change API behavior without warning in any future version.');
                        certificants = (()=>{
                            var data = [];
                            if (certificants) {
                                if ((typeof certificants === 'string' || Array.isArray(certificants)) && certificants.indexOf('*') > -1) return '*';
                                if (typeof certificants === 'string') return certificants;
                                if (Array.isArray(certificants)) {
                                    if (certificants.length === 1 && certificants[0]) return typeof certificants[0] === 'object' && certificants[0].pub ? certificants[0].pub : typeof certificants[0] === 'string' ? certificants[0] : null;
                                    certificants.map((certificant)=>{
                                        if (typeof certificant === 'string') data.push(certificant);
                                        else if (typeof certificant === 'object' && certificant.pub) data.push(certificant.pub);
                                    });
                                }
                                if (typeof certificants === 'object' && certificants.pub) return certificants.pub;
                                return data.length > 0 ? data : null;
                            }
                            return;
                        })();
                        if (!certificants) return console.log("No certificant found.");
                        const expiry = opt.expiry && (typeof opt.expiry === 'number' || typeof opt.expiry === 'string') ? parseFloat(opt.expiry) : null;
                        const readPolicy = (policy || {}).read ? policy.read : null;
                        const writePolicy = (policy || {}).write ? policy.write : typeof policy === 'string' || Array.isArray(policy) || policy["+"] || policy["#"] || policy["."] || policy["="] || policy["*"] || policy[">"] || policy["<"] ? policy : null;
                        const block = (opt || {}).block || (opt || {}).blacklist || (opt || {}).ban || {};
                        const readBlock = block.read && (typeof block.read === 'string' || (block.read || {})['#']) ? block.read : null;
                        const writeBlock = typeof block === 'string' ? block : block.write && (typeof block.write === 'string' || block.write['#']) ? block.write : null;
                        if (!readPolicy && !writePolicy) return console.log("No policy found.");
                        const data = JSON.stringify({
                            c: certificants,
                            ...(expiry ? {
                                e: expiry
                            } : {}),
                            ...(readPolicy ? {
                                r: readPolicy
                            } : {}),
                            ...(writePolicy ? {
                                w: writePolicy
                            } : {}),
                            ...(readBlock ? {
                                rb: readBlock
                            } : {}),
                            ...(writeBlock ? {
                                wb: writeBlock
                            } : {})
                        });
                        const certificate = await SEA.sign(data, authority, null, {
                            raw: 1
                        });
                        var r = certificate;
                        if (!opt.raw) {
                            r = 'SEA' + JSON.stringify(r);
                        }
                        if (cb) {
                            try {
                                cb(r);
                            } catch (e) {
                                console.log(e);
                            }
                        }
                        return r;
                    } catch (e) {
                        SEA.err = e;
                        if (SEA.throw) {
                            throw e;
                        }
                        if (cb) {
                            cb();
                        }
                        return;
                    }
                });
                module.exports = SEA.certify;
            })(USE, './certify');
            USE(function(module) {
                var shim = USE('./shim');
                var SEA = USE('./root');
                SEA.work = USE('./work');
                SEA.sign = USE('./sign');
                SEA.verify = USE('./verify');
                SEA.encrypt = USE('./encrypt');
                SEA.decrypt = USE('./decrypt');
                SEA.certify = USE('./certify');
                SEA.random = SEA.random || shim.random;
                SEA.Buffer = SEA.Buffer || USE('./buffer');
                SEA.keyid = SEA.keyid || (async (pub)=>{
                    try {
                        const pb = shim.Buffer.concat(pub.replace(/-/g, '+').replace(/_/g, '/').split('.').map((t)=>shim.Buffer.from(t, 'base64')));
                        const id = shim.Buffer.concat([
                            shim.Buffer.from([
                                0x99,
                                pb.length / 0x100,
                                pb.length % 0x100
                            ]),
                            pb
                        ]);
                        const sha1 = await sha1hash(id);
                        const hash = shim.Buffer.from(sha1, 'binary');
                        return hash.toString('hex', hash.length - 8);
                    } catch (e) {
                        console.log(e);
                        throw e;
                    }
                });
                ((SEA.window || {}).GUN || {}).SEA = SEA;
                module.exports = SEA;
            })(USE, './sea');
            USE(function(module) {
                var SEA = USE('./sea'), Gun, u;
                if (SEA.window) {
                    Gun = SEA.window.GUN || {
                        chain: {}
                    };
                } else {
                    Gun = USE((u + '' == typeof MODULE ? '.' : '') + './gun', 1);
                }
                SEA.GUN = Gun;
                function User(root) {
                    this._ = {
                        $: this
                    };
                }
                User.prototype = (function() {
                    function F() {}
                    F.prototype = Gun.chain;
                    return new F();
                }());
                User.prototype.constructor = User;
                Gun.chain.user = function(pub) {
                    var gun = this, root = gun.back(-1), user;
                    if (pub) {
                        pub = SEA.opt.pub((pub._ || '')['#']) || pub;
                        return root.get('~' + pub);
                    }
                    if (user = root.back('user')) {
                        return user;
                    }
                    var root = (root._), at = root, uuid = at.opt.uuid || lex;
                    (at = (user = at.user = gun.chain(new User))._).opt = {};
                    at.opt.uuid = function(cb) {
                        var id = uuid(), pub = root.user;
                        if (!pub || !(pub = pub.is) || !(pub = pub.pub)) {
                            return id;
                        }
                        id = '~' + pub + '/' + id;
                        if (cb && cb.call) {
                            cb(null, id);
                        }
                        return id;
                    };
                    return user;
                };
                function lex() {
                    return Gun.state().toString(36).replace('.', '');
                }
                Gun.User = User;
                User.GUN = Gun;
                User.SEA = Gun.SEA = SEA;
                module.exports = User;
            })(USE, './user');
            USE(function(module) {
                var u, Gun = ('' + u != typeof GUN) ? (GUN || {
                    chain: {}
                }) : USE(('' + u === typeof MODULE ? '.' : '') + './gun', 1);
                Gun.chain.then = function(cb, opt) {
                    var gun = this, p = (new Promise(function(res, rej) {
                        gun.once(res, opt);
                    }));
                    return cb ? p.then(cb) : p;
                };
            })(USE, './then');
            USE(function(module) {
                var User = USE('./user'), SEA = User.SEA, Gun = User.GUN, noop = function() {};
                User.prototype.create = function(...args) {
                    var pair = typeof args[0] === 'object' && (args[0].pub || args[0].epub) ? args[0] : typeof args[1] === 'object' && (args[1].pub || args[1].epub) ? args[1] : null;
                    var alias = pair && (pair.pub || pair.epub) ? pair.pub : typeof args[0] === 'string' ? args[0] : null;
                    var pass = pair && (pair.pub || pair.epub) ? pair : alias && typeof args[1] === 'string' ? args[1] : null;
                    var cb = args.filter((arg)=>typeof arg === 'function')[0] || null;
                    var opt = args && args.length > 1 && typeof args[args.length - 1] === 'object' ? args[args.length - 1] : {};
                    var gun = this, cat = (gun._), root = gun.back(-1);
                    cb = cb || noop;
                    opt = opt || {};
                    if (false !== opt.check) {
                        var err;
                        if (!alias) {
                            err = "No user.";
                        }
                        if ((pass || '').length < 8) {
                            err = "Password too short!";
                        }
                        if (err) {
                            cb({
                                err: Gun.log(err)
                            });
                            return gun;
                        }
                    }
                    if (cat.ing) {
                        (cb || noop)({
                            err: Gun.log("User is already being created or authenticated!"),
                            wait: true
                        });
                        return gun;
                    }
                    cat.ing = true;
                    var act = {};
                    act.a = function(pubs) {
                        act.pubs = pubs;
                        if (pubs && !opt.already) {
                            var ack = {
                                err: Gun.log('User already created!')
                            };
                            cat.ing = false;
                            (cb || noop)(ack);
                            gun.leave();
                            return;
                        }
                        act.salt = String.random(64);
                        SEA.work(pass, act.salt, act.b);
                    };
                    act.b = function(proof) {
                        act.proof = proof;
                        pair ? act.c(pair) : SEA.pair(act.c);
                    };
                    act.c = function(pair) {
                        var tmp;
                        act.pair = pair || {};
                        if (tmp = cat.root.user) {
                            tmp._.sea = pair;
                            tmp.is = {
                                pub: pair.pub,
                                epub: pair.epub,
                                alias: alias
                            };
                        }
                        act.data = {
                            pub: pair.pub
                        };
                        act.d();
                    };
                    act.d = function() {
                        act.data.alias = alias;
                        act.e();
                    };
                    act.e = function() {
                        act.data.epub = act.pair.epub;
                        SEA.encrypt({
                            priv: act.pair.priv,
                            epriv: act.pair.epriv
                        }, act.proof, act.f, {
                            raw: 1
                        });
                    };
                    act.f = function(auth) {
                        act.data.auth = JSON.stringify({
                            ek: auth,
                            s: act.salt
                        });
                        act.g(act.data.auth);
                    };
                    act.g = function(auth) {
                        var tmp;
                        act.data.auth = act.data.auth || auth;
                        root.get(tmp = '~' + act.pair.pub).put(act.data).on(act.h);
                        var link = {};
                        link[tmp] = {
                            '#': tmp
                        };
                        root.get('~@' + alias).put(link).get(tmp).on(act.i);
                    };
                    act.h = function(data, key, msg, eve) {
                        eve.off();
                        act.h.ok = 1;
                        act.i();
                    };
                    act.i = function(data, key, msg, eve) {
                        if (eve) {
                            act.i.ok = 1;
                            eve.off();
                        }
                        if (!act.h.ok || !act.i.ok) {
                            return;
                        }
                        cat.ing = false;
                        cb({
                            ok: 0,
                            pub: act.pair.pub
                        });
                        if (noop === cb) {
                            pair ? gun.auth(pair) : gun.auth(alias, pass);
                        }
                    };
                    root.get('~@' + alias).once(act.a);
                    return gun;
                };
                User.prototype.leave = function(opt, cb) {
                    var gun = this, user = (gun.back(-1)._).user;
                    if (user) {
                        delete user.is;
                        delete user._.is;
                        delete user._.sea;
                    }
                    if (SEA.window) {
                        try {
                            var sS = {};
                            sS = SEA.window.sessionStorage;
                            delete sS.recall;
                            delete sS.pair;
                        } catch (e) {}
                    }
                    return gun;
                };
            })(USE, './create');
            USE(function(module) {
                var User = USE('./user'), SEA = User.SEA, Gun = User.GUN, noop = function() {};
                User.prototype.auth = function(...args) {
                    var pair = typeof args[0] === 'object' && (args[0].pub || args[0].epub) ? args[0] : typeof args[1] === 'object' && (args[1].pub || args[1].epub) ? args[1] : null;
                    var alias = !pair && typeof args[0] === 'string' ? args[0] : null;
                    var pass = (alias || (pair && !(pair.priv && pair.epriv))) && typeof args[1] === 'string' ? args[1] : null;
                    var cb = args.filter((arg)=>typeof arg === 'function')[0] || null;
                    var opt = args && args.length > 1 && typeof args[args.length - 1] === 'object' ? args[args.length - 1] : {};
                    var gun = this, cat = (gun._), root = gun.back(-1);
                    if (cat.ing) {
                        (cb || noop)({
                            err: Gun.log("User is already being created or authenticated!"),
                            wait: true
                        });
                        return gun;
                    }
                    cat.ing = true;
                    var act = {}, u, tries = 9;
                    act.a = function(data) {
                        if (!data) {
                            return act.b();
                        }
                        if (!data.pub) {
                            var tmp = [];
                            Object.keys(data).forEach(function(k) {
                                if ('_' == k) {
                                    return;
                                }
                                tmp.push(data[k]);
                            });
                            return act.b(tmp);
                        }
                        if (act.name) {
                            return act.f(data);
                        }
                        act.c((act.data = data).auth);
                    };
                    act.b = function(list) {
                        var get = (act.list = (act.list || []).concat(list || [])).shift();
                        if (u === get) {
                            if (act.name) {
                                return act.err('Your user account is not published for dApps to access, please consider syncing it online, or allowing local access by adding your device as a peer.');
                            }
                            if (alias && tries--) {
                                root.get('~@' + alias).once(act.a);
                                return;
                            }
                            return act.err('Wrong user or password.');
                        }
                        root.get(get).once(act.a);
                    };
                    act.c = function(auth) {
                        if (u === auth) {
                            return act.b();
                        }
                        if ('string' == typeof auth) {
                            return act.c(obj_ify(auth));
                        }
                        SEA.work(pass, (act.auth = auth).s, act.d, act.enc);
                    };
                    act.d = function(proof) {
                        SEA.decrypt(act.auth.ek, proof, act.e, act.enc);
                    };
                    act.e = function(half) {
                        if (u === half) {
                            if (!act.enc) {
                                act.enc = {
                                    encode: 'utf8'
                                };
                                return act.c(act.auth);
                            }
                            act.enc = null;
                            return act.b();
                        }
                        act.half = half;
                        act.f(act.data);
                    };
                    act.f = function(pair) {
                        var half = act.half || {}, data = act.data || {};
                        act.g(act.lol = {
                            pub: pair.pub || data.pub,
                            epub: pair.epub || data.epub,
                            priv: pair.priv || half.priv,
                            epriv: pair.epriv || half.epriv
                        });
                    };
                    act.g = function(pair) {
                        if (!pair || !pair.pub || !pair.epub) {
                            return act.b();
                        }
                        act.pair = pair;
                        var user = (root._).user, at = (user._);
                        at.tag;
                        var upt = at.opt;
                        at = user._ = root.get('~' + pair.pub)._;
                        at.opt = upt;
                        user.is = {
                            pub: pair.pub,
                            epub: pair.epub,
                            alias: alias || pair.pub
                        };
                        at.sea = act.pair;
                        cat.ing = false;
                        try {
                            if (pass && u == (obj_ify(cat.root.graph['~' + pair.pub].auth) || '')[':']) {
                                opt.shuffle = opt.change = pass;
                            }
                        } catch (e) {}
                        opt.change ? act.z() : (cb || noop)(at);
                        if (SEA.window && ((gun.back('user')._).opt || opt).remember) {
                            try {
                                var sS = {};
                                sS = SEA.window.sessionStorage;
                                sS.recall = true;
                                sS.pair = JSON.stringify(pair);
                            } catch (e) {}
                        }
                        try {
                            if (root._.tag.auth) {
                                (root._).on('auth', at);
                            } else {
                                setTimeout(function() {
                                    (root._).on('auth', at);
                                }, 1);
                            }
                        } catch (e) {
                            Gun.log("Your 'auth' callback crashed with:", e);
                        }
                    };
                    act.h = function(data) {
                        if (!data) {
                            return act.b();
                        }
                        alias = data.alias;
                        if (!alias) alias = data.alias = "~" + pair.pub;
                        if (!data.auth) {
                            return act.g(pair);
                        }
                        pair = null;
                        act.c((act.data = data).auth);
                    };
                    act.z = function() {
                        act.salt = String.random(64);
                        SEA.work(opt.change, act.salt, act.y);
                    };
                    act.y = function(proof) {
                        SEA.encrypt({
                            priv: act.pair.priv,
                            epriv: act.pair.epriv
                        }, proof, act.x, {
                            raw: 1
                        });
                    };
                    act.x = function(auth) {
                        act.w(JSON.stringify({
                            ek: auth,
                            s: act.salt
                        }));
                    };
                    act.w = function(auth) {
                        if (opt.shuffle) {
                            console.log('migrate core account from UTF8 & shuffle');
                            var tmp = {};
                            Object.keys(act.data).forEach(function(k) {
                                tmp[k] = act.data[k];
                            });
                            delete tmp._;
                            tmp.auth = auth;
                            root.get('~' + act.pair.pub).put(tmp);
                        }
                        root.get('~' + act.pair.pub).get('auth').put(auth, cb || noop);
                    };
                    act.err = function(e) {
                        var ack = {
                            err: Gun.log(e || 'User cannot be found!')
                        };
                        cat.ing = false;
                        (cb || noop)(ack);
                    };
                    act.plugin = function(name) {
                        if (!(act.name = name)) {
                            return act.err();
                        }
                        var tmp = [
                            name
                        ];
                        if ('~' !== name[0]) {
                            tmp[1] = '~' + name;
                            tmp[2] = '~@' + name;
                        }
                        act.b(tmp);
                    };
                    if (pair) {
                        if (pair.priv && pair.epriv) act.g(pair);
                        else root.get('~' + pair.pub).once(act.h);
                    } else if (alias) {
                        root.get('~@' + alias).once(act.a);
                    } else if (!alias && !pass) {
                        SEA.name(act.plugin);
                    }
                    return gun;
                };
                function obj_ify(o) {
                    if ('string' != typeof o) {
                        return o;
                    }
                    try {
                        o = JSON.parse(o);
                    } catch (e) {
                        o = {};
                    }
                    return o;
                }
            })(USE, './auth');
            USE(function(module) {
                var User = USE('./user'), SEA = User.SEA;
                User.GUN;
                User.prototype.recall = function(opt, cb) {
                    var gun = this, root = gun.back(-1);
                    opt = opt || {};
                    if (opt && opt.sessionStorage) {
                        if (SEA.window) {
                            try {
                                var sS = {};
                                sS = SEA.window.sessionStorage;
                                if (sS) {
                                    (root._).opt.remember = true;
                                    ((gun.back('user')._).opt || opt).remember = true;
                                    if (sS.recall || sS.pair) root.user().auth(JSON.parse(sS.pair), cb);
                                }
                            } catch (e) {}
                        }
                        return gun;
                    }
                    return gun;
                };
            })(USE, './recall');
            USE(function(module) {
                var User = USE('./user'), SEA = User.SEA, Gun = User.GUN, noop = function() {};
                User.prototype.pair = function() {
                    var user = this, proxy;
                    try {
                        proxy = new Proxy({
                            DANGER: '\u2620'
                        }, {
                            get: function(t, p, r) {
                                if (!user.is || !(user._ || '').sea) {
                                    return;
                                }
                                return user._.sea[p];
                            }
                        });
                    } catch (e) {}
                    return proxy;
                };
                User.prototype.delete = async function(alias, pass, cb) {
                    console.log("user.delete() IS DEPRECATED AND WILL BE MOVED TO A MODULE!!!");
                    var gun = this;
                    gun.back(-1);
                    var user = gun.back('user');
                    try {
                        user.auth(alias, pass, function(ack) {
                            var pub = (user.is || {}).pub;
                            user.map().once(function() {
                                this.put(null);
                            });
                            user.leave();
                            (cb || noop)({
                                ok: 0
                            });
                        });
                    } catch (e) {
                        Gun.log('User.delete failed! Error:', e);
                    }
                    return gun;
                };
                User.prototype.alive = async function() {
                    console.log("user.alive() IS DEPRECATED!!!");
                    const gunRoot = this.back(-1);
                    try {
                        await authRecall(gunRoot);
                        return gunRoot._.user._;
                    } catch (e) {
                        const err = 'No session!';
                        Gun.log(err);
                        throw {
                            err
                        };
                    }
                };
                User.prototype.trust = async function(user) {
                    console.log("`.trust` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!");
                    if (Gun.is(user)) {
                        user.get('pub').get((ctx, ev)=>{
                            console.log(ctx, ev);
                        });
                    }
                    user.get('trust').get(path).put(theirPubkey);
                };
                User.prototype.grant = function(to, cb) {
                    console.log("`.grant` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!");
                    var gun = this, user = gun.back(-1).user(), pair = user._.sea, path = '';
                    gun.back(function(at) {
                        if (at.is) {
                            return;
                        }
                        path += (at.get || '');
                    });
                    (async function() {
                        var enc, sec = await user.get('grant').get(pair.pub).get(path).then();
                        sec = await SEA.decrypt(sec, pair);
                        if (!sec) {
                            sec = SEA.random(16).toString();
                            enc = await SEA.encrypt(sec, pair);
                            user.get('grant').get(pair.pub).get(path).put(enc);
                        }
                        var pub = to.get('pub').then();
                        var epub = to.get('epub').then();
                        pub = await pub;
                        epub = await epub;
                        var dh = await SEA.secret(epub, pair);
                        enc = await SEA.encrypt(sec, dh);
                        user.get('grant').get(pub).get(path).put(enc, cb);
                    }());
                    return gun;
                };
                User.prototype.secret = function(data, cb) {
                    console.log("`.secret` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!");
                    var gun = this, user = gun.back(-1).user(), pair = user.pair(), path = '';
                    gun.back(function(at) {
                        if (at.is) {
                            return;
                        }
                        path += (at.get || '');
                    });
                    (async function() {
                        var enc, sec = await user.get('trust').get(pair.pub).get(path).then();
                        sec = await SEA.decrypt(sec, pair);
                        if (!sec) {
                            sec = SEA.random(16).toString();
                            enc = await SEA.encrypt(sec, pair);
                            user.get('trust').get(pair.pub).get(path).put(enc);
                        }
                        enc = await SEA.encrypt(data, sec);
                        gun.put(enc, cb);
                    }());
                    return gun;
                };
                module.exports = User;
            })(USE, './share');
            USE(function(module) {
                var SEA = USE('./sea'), S = USE('./settings'), u;
                var Gun = (SEA.window || '').GUN || USE(('' + u === typeof MODULE ? '.' : '') + './gun', 1);
                Gun.on('opt', function(at) {
                    if (!at.sea) {
                        at.sea = {
                            own: {}
                        };
                        at.on('put', check, at);
                    }
                    this.to.next(at);
                });
                function check(msg) {
                    var eve = this, at = eve.as, put = msg.put, soul = put['#'], key = put['.'], val = put[':'], state = put['>'], id = msg['#'], tmp;
                    if (!soul || !key) {
                        return;
                    }
                    if ((msg._ || '').faith && (at.opt || '').faith && 'function' == typeof msg._) {
                        SEA.opt.pack(put, function(raw) {
                            SEA.verify(raw, false, function(data) {
                                put['='] = SEA.opt.unpack(data);
                                eve.to.next(msg);
                            });
                        });
                        return;
                    }
                    var no = function(why) {
                        at.on('in', {
                            '@': id,
                            err: msg.err = why
                        });
                    };
                    (msg._ || '').DBG && ((msg._ || '').DBG.c = +new Date);
                    if (0 <= soul.indexOf('<?')) {
                        tmp = parseFloat(soul.split('<?')[1] || '');
                        if (tmp && (state < (Gun.state() - (tmp * 1000)))) {
                            (tmp = msg._) && (tmp.stun) && (tmp.stun--);
                            return;
                        }
                    }
                    if ('~@' === soul) {
                        check.alias(eve, msg, val, key, soul, at, no);
                        return;
                    }
                    if ('~@' === soul.slice(0, 2)) {
                        check.pubs(eve, msg, val, key, soul, at, no);
                        return;
                    }
                    if (tmp = SEA.opt.pub(soul)) {
                        check.pub(eve, msg, val, key, soul, at, no, at.user || '', tmp);
                        return;
                    }
                    if (0 <= soul.indexOf('#')) {
                        check.hash(eve, msg, val, key, soul, at, no);
                        return;
                    }
                    check.any(eve, msg, val, key, soul, at, no, at.user || '');
                    return;
                }
                check.hash = function(eve, msg, val, key, soul, at, no) {
                    SEA.work(val, null, function(data) {
                        function hexToBase64(hexStr) {
                            let base64 = "";
                            for(let i = 0; i < hexStr.length; i++){
                                base64 += !(i - 1 & 1) ? String.fromCharCode(parseInt(hexStr.substring(i - 1, i + 1), 16)) : "";
                            }
                            return btoa(base64);
                        }
                        if (data && data === key.split('#').slice(-1)[0]) {
                            return eve.to.next(msg);
                        } else if (data && data === hexToBase64(key.split('#').slice(-1)[0])) {
                            return eve.to.next(msg);
                        }
                        no("Data hash not same as hash!");
                    }, {
                        name: 'SHA-256'
                    });
                };
                check.alias = function(eve, msg, val, key, soul, at, no) {
                    if (!val) {
                        return no("Data must exist!");
                    }
                    if ('~@' + key === link_is(val)) {
                        return eve.to.next(msg);
                    }
                    no("Alias not same!");
                };
                check.pubs = function(eve, msg, val, key, soul, at, no) {
                    if (!val) {
                        return no("Alias must exist!");
                    }
                    if (key === link_is(val)) {
                        return eve.to.next(msg);
                    }
                    no("Alias not same!");
                };
                check.pub = async function(eve, msg, val, key, soul, at, no, user, pub) {
                    var tmp;
                    const raw = await S.parse(val) || {};
                    const verify = (certificate, certificant, cb)=>{
                        if (certificate.m && certificate.s && certificant && pub) return SEA.verify(certificate, pub, (data)=>{
                            if (u !== data && u !== data.e && msg.put['>'] && msg.put['>'] > parseFloat(data.e)) return no("Certificate expired.");
                            if (u !== data && data.c && data.w && (data.c === certificant || data.c.indexOf('*') > -1)) {
                                let path = soul.indexOf('/') > -1 ? soul.replace(soul.substring(0, soul.indexOf('/') + 1), '') : '';
                                String.match = String.match || Gun.text.match;
                                const w = Array.isArray(data.w) ? data.w : typeof data.w === 'object' || typeof data.w === 'string' ? [
                                    data.w
                                ] : [];
                                for (const lex of w){
                                    if ((String.match(path, lex['#']) && String.match(key, lex['.'])) || (!lex['.'] && String.match(path, lex['#'])) || (!lex['#'] && String.match(key, lex['.'])) || String.match((path ? path + '/' + key : key), lex['#'] || lex)) {
                                        if (lex['+'] && lex['+'].indexOf('*') > -1 && path && path.indexOf(certificant) == -1 && key.indexOf(certificant) == -1) return no(`Path "${path}" or key "${key}" must contain string "${certificant}".`);
                                        if (data.wb && (typeof data.wb === 'string' || ((data.wb || {})['#']))) {
                                            var root = eve.as.root.$.back(-1);
                                            if (typeof data.wb === 'string' && '~' !== data.wb.slice(0, 1)) root = root.get('~' + pub);
                                            return root.get(data.wb).get(certificant).once((value)=>{
                                                if (value && (value === 1 || value === true)) return no(`Certificant ${certificant} blocked.`);
                                                return cb(data);
                                            });
                                        }
                                        return cb(data);
                                    }
                                }
                                return no("Certificate verification fail.");
                            }
                        });
                        return;
                    };
                    if ('pub' === key && '~' + pub === soul) {
                        if (val === pub) return eve.to.next(msg);
                        return no("Account not same!");
                    }
                    if ((tmp = user.is) && tmp.pub && !raw['*'] && !raw['+'] && (pub === tmp.pub || (pub !== tmp.pub && ((msg._.msg || {}).opt || {}).cert))) {
                        SEA.opt.pack(msg.put, (packed)=>{
                            SEA.sign(packed, (user._).sea, async function(data) {
                                if (u === data) return no(SEA.err || 'Signature fail.');
                                msg.put[':'] = {
                                    ':': tmp = SEA.opt.unpack(data.m),
                                    '~': data.s
                                };
                                msg.put['='] = tmp;
                                if (pub === user.is.pub) {
                                    if (tmp = link_is(val)) (at.sea.own[tmp] = at.sea.own[tmp] || {})[pub] = 1;
                                    JSON.stringifyAsync(msg.put[':'], function(err, s) {
                                        if (err) {
                                            return no(err || "Stringify error.");
                                        }
                                        msg.put[':'] = s;
                                        return eve.to.next(msg);
                                    });
                                    return;
                                }
                                if (pub !== user.is.pub && ((msg._.msg || {}).opt || {}).cert) {
                                    const cert = await S.parse(msg._.msg.opt.cert);
                                    if (cert && cert.m && cert.s) verify(cert, user.is.pub, (_)=>{
                                        msg.put[':']['+'] = cert;
                                        msg.put[':']['*'] = user.is.pub;
                                        JSON.stringifyAsync(msg.put[':'], function(err, s) {
                                            if (err) {
                                                return no(err || "Stringify error.");
                                            }
                                            msg.put[':'] = s;
                                            return eve.to.next(msg);
                                        });
                                        return;
                                    });
                                }
                            }, {
                                raw: 1
                            });
                        });
                        return;
                    }
                    SEA.opt.pack(msg.put, (packed)=>{
                        SEA.verify(packed, raw['*'] || pub, function(data) {
                            var tmp;
                            data = SEA.opt.unpack(data);
                            if (u === data) return no("Unverified data.");
                            if ((tmp = link_is(data)) && pub === SEA.opt.pub(tmp)) (at.sea.own[tmp] = at.sea.own[tmp] || {})[pub] = 1;
                            if (raw['+'] && raw['+']['m'] && raw['+']['s'] && raw['*']) verify(raw['+'], raw['*'], (_)=>{
                                msg.put['='] = data;
                                return eve.to.next(msg);
                            });
                            else {
                                msg.put['='] = data;
                                return eve.to.next(msg);
                            }
                        });
                    });
                    return;
                };
                check.any = function(eve, msg, val, key, soul, at, no, user) {
                    if (at.opt.secure) {
                        return no("Soul missing public key at '" + key + "'.");
                    }
                    at.on('secure', function(msg) {
                        this.off();
                        if (!at.opt.secure) {
                            return eve.to.next(msg);
                        }
                        no("Data cannot be changed.");
                    }).on.on('secure', msg);
                    return;
                };
                var valid = Gun.valid, link_is = function(d, l) {
                    return 'string' == typeof (l = valid(d)) && l;
                };
                (Gun.state || '').ify;
                var pubcut = /[^\w_-]/;
                SEA.opt.pub = function(s) {
                    if (!s) {
                        return;
                    }
                    s = s.split('~');
                    if (!s || !(s = s[1])) {
                        return;
                    }
                    s = s.split(pubcut).slice(0, 2);
                    if (!s || 2 != s.length) {
                        return;
                    }
                    if ('@' === (s[0] || '')[0]) {
                        return;
                    }
                    s = s.slice(0, 2).join('.');
                    return s;
                };
                SEA.opt.stringy = function(t) {};
                SEA.opt.pack = function(d, cb, k, n, s) {
                    var tmp, f;
                    if (SEA.opt.check(d)) {
                        return cb(d);
                    }
                    if (d && d['#'] && d['.'] && d['>']) {
                        tmp = d[':'];
                        f = 1;
                    }
                    JSON.parseAsync(f ? tmp : d, function(err, meta) {
                        var sig = ((u !== (meta || '')[':']) && (meta || '')['~']);
                        if (!sig) {
                            cb(d);
                            return;
                        }
                        cb({
                            m: {
                                '#': s || d['#'],
                                '.': k || d['.'],
                                ':': (meta || '')[':'],
                                '>': d['>'] || Gun.state.is(n, k)
                            },
                            s: sig
                        });
                    });
                };
                var O = SEA.opt;
                SEA.opt.unpack = function(d, k, n) {
                    var tmp;
                    if (u === d) {
                        return;
                    }
                    if (d && (u !== (tmp = d[':']))) {
                        return tmp;
                    }
                    k = k || O.fall_key;
                    if (!n && O.fall_val) {
                        n = {};
                        n[k] = O.fall_val;
                    }
                    if (!k || !n) {
                        return;
                    }
                    if (d === n[k]) {
                        return d;
                    }
                    if (!SEA.opt.check(n[k])) {
                        return d;
                    }
                    var soul = (n && n._ && n._['#']) || O.fall_soul, s = Gun.state.is(n, k) || O.fall_state;
                    if (d && 4 === d.length && soul === d[0] && k === d[1] && fl(s) === fl(d[3])) {
                        return d[2];
                    }
                    if (s < SEA.opt.shuffle_attack) {
                        return d;
                    }
                };
                SEA.opt.shuffle_attack = 1546329600000;
                var fl = Math.floor;
            })(USE, './index');
        }());
    }(sea));
    sea.exports;
    var Gun$1 = (typeof window !== "undefined") ? window.Gun : gunExports;
    const rel_ = '#';
    const node_ = '_';
    Gun$1.chain.unset = function(node) {
        if (this && node && node[node_] && node[node_].put && node[node_].put[node_] && node[node_].put[node_][rel_]) {
            this.put({
                [node[node_].put[node_][rel_]]: null
            });
        }
        return this;
    };
    const gun = Gun$2([
        "http://localhost:3000/gun"
    ]);
    gun.clear = function() {
        localStorage.clear();
        sessionStorage.clear();
        indexedDB.databases().then((dbs)=>{
            for (let db of dbs){
                if (db.name) {
                    indexedDB.deleteDatabase(db.name);
                }
            }
        });
        console.log("Local data cleared");
    };
    gun.lookup = async function(key, id) {
        const ref = await gun.get(key).get(id).then();
        const soul = ref?._?.[">"] && Object.keys(ref._[">"])[0];
        if (!soul) return null;
        const data = await gun.get(soul).then();
        return data ? {
            id,
            ...data
        } : null;
    };
    const { ref, inject, provide, computed, onMounted, onUnmounted } = await importShared('vue');
    wikiProvider = function(instance) {
        const wiki = ref(null);
        const pages = ref([]);
        computed(()=>pages.value.length);
        const createPage = async (formData)=>{
            const id = crypto.randomUUID();
            const data = Object.fromEntries(formData.entries());
            data.id = id;
            pages.value.push(data);
            const node = gun.get(`wiki-plugin/${id}`).put(data);
            gun.get("wikis").get(instance).set(node);
            wiki.value = data;
            return node;
        };
        const setPage = async (id)=>{
            wiki.value = pages.value.find((x)=>x.id === id) || null;
            return wiki.value || void 0;
        };
        const editPage = async (formData)=>{
            const id = wiki.value?.id;
            if (!id) return;
            pages.value = pages.value.filter((x)=>x.id !== id);
            await removePage(id);
            const node = await createPage(formData);
            return node;
        };
        const removePage = async (id)=>{
            const node = gun.get(`wiki-plugin/${id}`);
            node.then(()=>{
                gun.get("wikis").get(instance).unset(node);
            });
            wiki.value = null;
        };
        onMounted(()=>{
            gun.get("wikis").get(instance).map().once((data)=>{
                if (data) {
                    const exists = pages.value.some((x)=>x.id === data.id);
                    if (!exists) {
                        pages.value.push(data);
                    }
                }
            });
        });
        onUnmounted(()=>{
            gun.get("wikis").get(instance).map().off();
        });
        provide("wiki", {
            wiki,
            pages,
            createPage,
            setPage,
            editPage,
            removePage
        });
    };
    useWiki = function() {
        const data = inject("wiki");
        if (!data) {
            throw new Error("Composable must have a wiki provider.");
        }
        return data;
    };
});
export { useWiki as u, wikiProvider as w, __tla };
