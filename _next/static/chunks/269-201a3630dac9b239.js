(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [269],
  {
    9931: function (t, e, r) {
      var n;
      function i(t) {
        this.rand = t;
      }
      if (
        ((t.exports = function (t) {
          return n || (n = new i(null)), n.generate(t);
        }),
        (t.exports.Rand = i),
        (i.prototype.generate = function (t) {
          return this._rand(t);
        }),
        (i.prototype._rand = function (t) {
          if (this.rand.getBytes) return this.rand.getBytes(t);
          for (var e = new Uint8Array(t), r = 0; r < e.length; r++)
            e[r] = this.rand.getByte();
          return e;
        }),
        "object" == typeof self)
      )
        self.crypto && self.crypto.getRandomValues
          ? (i.prototype._rand = function (t) {
              var e = new Uint8Array(t);
              return self.crypto.getRandomValues(e), e;
            })
          : self.msCrypto && self.msCrypto.getRandomValues
          ? (i.prototype._rand = function (t) {
              var e = new Uint8Array(t);
              return self.msCrypto.getRandomValues(e), e;
            })
          : "object" == typeof window &&
            (i.prototype._rand = function () {
              throw Error("Not implemented yet");
            });
      else
        try {
          var o = r(9214);
          if ("function" != typeof o.randomBytes) throw Error("Not supported");
          i.prototype._rand = function (t) {
            return o.randomBytes(t);
          };
        } catch (t) {}
    },
    1924: function (t, e, r) {
      "use strict";
      var n = r(210),
        i = r(5559),
        o = i(n("String.prototype.indexOf"));
      t.exports = function (t, e) {
        var r = n(t, !!e);
        return "function" == typeof r && o(t, ".prototype.") > -1 ? i(r) : r;
      };
    },
    5559: function (t, e, r) {
      "use strict";
      var n = r(8612),
        i = r(210),
        o = i("%Function.prototype.apply%"),
        a = i("%Function.prototype.call%"),
        s = i("%Reflect.apply%", !0) || n.call(a, o),
        f = i("%Object.getOwnPropertyDescriptor%", !0),
        u = i("%Object.defineProperty%", !0),
        h = i("%Math.max%");
      if (u)
        try {
          u({}, "a", { value: 1 });
        } catch (t) {
          u = null;
        }
      t.exports = function (t) {
        var e = s(n, a, arguments);
        return (
          f &&
            u &&
            f(e, "length").configurable &&
            u(e, "length", {
              value: 1 + h(0, t.length - (arguments.length - 1)),
            }),
          e
        );
      };
      var c = function () {
        return s(n, o, arguments);
      };
      u ? u(t.exports, "apply", { value: c }) : (t.exports.apply = c);
    },
    1027: function (t, e, r) {
      var n = r(9509).Buffer,
        i = r(9681).Transform,
        o = r(2553).s;
      function a(t) {
        i.call(this),
          (this.hashMode = "string" == typeof t),
          this.hashMode
            ? (this[t] = this._finalOrDigest)
            : (this.final = this._finalOrDigest),
          this._final && ((this.__final = this._final), (this._final = null)),
          (this._decoder = null),
          (this._encoding = null);
      }
      r(5717)(a, i),
        (a.prototype.update = function (t, e, r) {
          "string" == typeof t && (t = n.from(t, e));
          var i = this._update(t);
          return this.hashMode ? this : (r && (i = this._toString(i, r)), i);
        }),
        (a.prototype.setAutoPadding = function () {}),
        (a.prototype.getAuthTag = function () {
          throw Error("trying to get auth tag in unsupported state");
        }),
        (a.prototype.setAuthTag = function () {
          throw Error("trying to set auth tag in unsupported state");
        }),
        (a.prototype.setAAD = function () {
          throw Error("trying to set aad in unsupported state");
        }),
        (a.prototype._transform = function (t, e, r) {
          var n;
          try {
            this.hashMode ? this._update(t) : this.push(this._update(t));
          } catch (t) {
            n = t;
          } finally {
            r(n);
          }
        }),
        (a.prototype._flush = function (t) {
          var e;
          try {
            this.push(this.__final());
          } catch (t) {
            e = t;
          }
          t(e);
        }),
        (a.prototype._finalOrDigest = function (t) {
          var e = this.__final() || n.alloc(0);
          return t && (e = this._toString(e, t, !0)), e;
        }),
        (a.prototype._toString = function (t, e, r) {
          if (
            (this._decoder ||
              ((this._decoder = new o(e)), (this._encoding = e)),
            this._encoding !== e)
          )
            throw Error("can't switch encodings");
          var n = this._decoder.write(t);
          return r && (n += this._decoder.end()), n;
        }),
        (t.exports = a);
    },
    3482: function (t, e, r) {
      "use strict";
      var n = r(5717),
        i = r(2318),
        o = r(9785),
        a = r(9072),
        s = r(1027);
      function f(t) {
        s.call(this, "digest"), (this._hash = t);
      }
      n(f, s),
        (f.prototype._update = function (t) {
          this._hash.update(t);
        }),
        (f.prototype._final = function () {
          return this._hash.digest();
        }),
        (t.exports = function (t) {
          return "md5" === (t = t.toLowerCase())
            ? new i()
            : "rmd160" === t || "ripemd160" === t
            ? new o()
            : new f(a(t));
        });
    },
    6266: function (t, e, r) {
      "use strict";
      var n = e;
      (n.version = r(8597).i8),
        (n.utils = r(953)),
        (n.rand = r(9931)),
        (n.curve = r(8254)),
        (n.curves = r(788)),
        (n.ec = r(7954)),
        (n.eddsa = r(5980));
    },
    4918: function (t, e, r) {
      "use strict";
      var n = r(3785),
        i = r(953),
        o = i.getNAF,
        a = i.getJSF,
        s = i.assert;
      function f(t, e) {
        (this.type = t),
          (this.p = new n(e.p, 16)),
          (this.red = e.prime ? n.red(e.prime) : n.mont(this.p)),
          (this.zero = new n(0).toRed(this.red)),
          (this.one = new n(1).toRed(this.red)),
          (this.two = new n(2).toRed(this.red)),
          (this.n = e.n && new n(e.n, 16)),
          (this.g = e.g && this.pointFromJSON(e.g, e.gRed)),
          (this._wnafT1 = [, , , ,]),
          (this._wnafT2 = [, , , ,]),
          (this._wnafT3 = [, , , ,]),
          (this._wnafT4 = [, , , ,]),
          (this._bitLength = this.n ? this.n.bitLength() : 0);
        var r = this.n && this.p.div(this.n);
        !r || r.cmpn(100) > 0
          ? (this.redN = null)
          : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
      }
      function u(t, e) {
        (this.curve = t), (this.type = e), (this.precomputed = null);
      }
      (t.exports = f),
        (f.prototype.point = function () {
          throw Error("Not implemented");
        }),
        (f.prototype.validate = function () {
          throw Error("Not implemented");
        }),
        (f.prototype._fixedNafMul = function (t, e) {
          s(t.precomputed);
          var r,
            n,
            i = t._getDoubles(),
            a = o(e, 1, this._bitLength),
            f = (1 << (i.step + 1)) - (i.step % 2 == 0 ? 2 : 1);
          f /= 3;
          var u = [];
          for (r = 0; r < a.length; r += i.step) {
            n = 0;
            for (var h = r + i.step - 1; h >= r; h--) n = (n << 1) + a[h];
            u.push(n);
          }
          for (
            var c = this.jpoint(null, null, null),
              l = this.jpoint(null, null, null),
              d = f;
            d > 0;
            d--
          ) {
            for (r = 0; r < u.length; r++)
              (n = u[r]) === d
                ? (l = l.mixedAdd(i.points[r]))
                : n === -d && (l = l.mixedAdd(i.points[r].neg()));
            c = c.add(l);
          }
          return c.toP();
        }),
        (f.prototype._wnafMul = function (t, e) {
          var r = 4,
            n = t._getNAFPoints(r);
          r = n.wnd;
          for (
            var i = n.points,
              a = o(e, r, this._bitLength),
              f = this.jpoint(null, null, null),
              u = a.length - 1;
            u >= 0;
            u--
          ) {
            for (var h = 0; u >= 0 && 0 === a[u]; u--) h++;
            if ((u >= 0 && h++, (f = f.dblp(h)), u < 0)) break;
            var c = a[u];
            s(0 !== c),
              (f =
                "affine" === t.type
                  ? c > 0
                    ? f.mixedAdd(i[(c - 1) >> 1])
                    : f.mixedAdd(i[(-c - 1) >> 1].neg())
                  : c > 0
                  ? f.add(i[(c - 1) >> 1])
                  : f.add(i[(-c - 1) >> 1].neg()));
          }
          return "affine" === t.type ? f.toP() : f;
        }),
        (f.prototype._wnafMulAdd = function (t, e, r, n, i) {
          var s,
            f,
            u,
            h = this._wnafT1,
            c = this._wnafT2,
            l = this._wnafT3,
            d = 0;
          for (s = 0; s < n; s++) {
            var p = (u = e[s])._getNAFPoints(t);
            (h[s] = p.wnd), (c[s] = p.points);
          }
          for (s = n - 1; s >= 1; s -= 2) {
            var b = s - 1,
              y = s;
            if (1 !== h[b] || 1 !== h[y]) {
              (l[b] = o(r[b], h[b], this._bitLength)),
                (l[y] = o(r[y], h[y], this._bitLength)),
                (d = Math.max(l[b].length, d)),
                (d = Math.max(l[y].length, d));
              continue;
            }
            var m = [e[b], null, null, e[y]];
            0 === e[b].y.cmp(e[y].y)
              ? ((m[1] = e[b].add(e[y])),
                (m[2] = e[b].toJ().mixedAdd(e[y].neg())))
              : 0 === e[b].y.cmp(e[y].y.redNeg())
              ? ((m[1] = e[b].toJ().mixedAdd(e[y])),
                (m[2] = e[b].add(e[y].neg())))
              : ((m[1] = e[b].toJ().mixedAdd(e[y])),
                (m[2] = e[b].toJ().mixedAdd(e[y].neg())));
            var g = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
              v = a(r[b], r[y]);
            for (
              f = 0,
                d = Math.max(v[0].length, d),
                l[b] = Array(d),
                l[y] = Array(d);
              f < d;
              f++
            ) {
              var w = 0 | v[0][f],
                M = 0 | v[1][f];
              (l[b][f] = g[(w + 1) * 3 + (M + 1)]), (l[y][f] = 0), (c[b] = m);
            }
          }
          var _ = this.jpoint(null, null, null),
            S = this._wnafT4;
          for (s = d; s >= 0; s--) {
            for (var A = 0; s >= 0; ) {
              var E = !0;
              for (f = 0; f < n; f++)
                (S[f] = 0 | l[f][s]), 0 !== S[f] && (E = !1);
              if (!E) break;
              A++, s--;
            }
            if ((s >= 0 && A++, (_ = _.dblp(A)), s < 0)) break;
            for (f = 0; f < n; f++) {
              var x = S[f];
              0 !== x &&
                (x > 0
                  ? (u = c[f][(x - 1) >> 1])
                  : x < 0 && (u = c[f][(-x - 1) >> 1].neg()),
                (_ = "affine" === u.type ? _.mixedAdd(u) : _.add(u)));
            }
          }
          for (s = 0; s < n; s++) c[s] = null;
          return i ? _ : _.toP();
        }),
        (f.BasePoint = u),
        (u.prototype.eq = function () {
          throw Error("Not implemented");
        }),
        (u.prototype.validate = function () {
          return this.curve.validate(this);
        }),
        (f.prototype.decodePoint = function (t, e) {
          t = i.toArray(t, e);
          var r = this.p.byteLength();
          if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 == 2 * r)
            return (
              6 === t[0]
                ? s(t[t.length - 1] % 2 == 0)
                : 7 === t[0] && s(t[t.length - 1] % 2 == 1),
              this.point(t.slice(1, 1 + r), t.slice(1 + r, 1 + 2 * r))
            );
          if ((2 === t[0] || 3 === t[0]) && t.length - 1 === r)
            return this.pointFromX(t.slice(1, 1 + r), 3 === t[0]);
          throw Error("Unknown point format");
        }),
        (u.prototype.encodeCompressed = function (t) {
          return this.encode(t, !0);
        }),
        (u.prototype._encode = function (t) {
          var e = this.curve.p.byteLength(),
            r = this.getX().toArray("be", e);
          return t
            ? [this.getY().isEven() ? 2 : 3].concat(r)
            : [4].concat(r, this.getY().toArray("be", e));
        }),
        (u.prototype.encode = function (t, e) {
          return i.encode(this._encode(e), t);
        }),
        (u.prototype.precompute = function (t) {
          if (this.precomputed) return this;
          var e = { doubles: null, naf: null, beta: null };
          return (
            (e.naf = this._getNAFPoints(8)),
            (e.doubles = this._getDoubles(4, t)),
            (e.beta = this._getBeta()),
            (this.precomputed = e),
            this
          );
        }),
        (u.prototype._hasDoubles = function (t) {
          if (!this.precomputed) return !1;
          var e = this.precomputed.doubles;
          return (
            !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step)
          );
        }),
        (u.prototype._getDoubles = function (t, e) {
          if (this.precomputed && this.precomputed.doubles)
            return this.precomputed.doubles;
          for (var r = [this], n = this, i = 0; i < e; i += t) {
            for (var o = 0; o < t; o++) n = n.dbl();
            r.push(n);
          }
          return { step: t, points: r };
        }),
        (u.prototype._getNAFPoints = function (t) {
          if (this.precomputed && this.precomputed.naf)
            return this.precomputed.naf;
          for (
            var e = [this],
              r = (1 << t) - 1,
              n = 1 === r ? null : this.dbl(),
              i = 1;
            i < r;
            i++
          )
            e[i] = e[i - 1].add(n);
          return { wnd: t, points: e };
        }),
        (u.prototype._getBeta = function () {
          return null;
        }),
        (u.prototype.dblp = function (t) {
          for (var e = this, r = 0; r < t; r++) e = e.dbl();
          return e;
        });
    },
    1138: function (t, e, r) {
      "use strict";
      var n = r(953),
        i = r(3785),
        o = r(5717),
        a = r(4918),
        s = n.assert;
      function f(t) {
        (this.twisted = (0 | t.a) != 1),
          (this.mOneA = this.twisted && (0 | t.a) == -1),
          (this.extended = this.mOneA),
          a.call(this, "edwards", t),
          (this.a = new i(t.a, 16).umod(this.red.m)),
          (this.a = this.a.toRed(this.red)),
          (this.c = new i(t.c, 16).toRed(this.red)),
          (this.c2 = this.c.redSqr()),
          (this.d = new i(t.d, 16).toRed(this.red)),
          (this.dd = this.d.redAdd(this.d)),
          s(!this.twisted || 0 === this.c.fromRed().cmpn(1)),
          (this.oneC = (0 | t.c) == 1);
      }
      function u(t, e, r, n, o) {
        a.BasePoint.call(this, t, "projective"),
          null === e && null === r && null === n
            ? ((this.x = this.curve.zero),
              (this.y = this.curve.one),
              (this.z = this.curve.one),
              (this.t = this.curve.zero),
              (this.zOne = !0))
            : ((this.x = new i(e, 16)),
              (this.y = new i(r, 16)),
              (this.z = n ? new i(n, 16) : this.curve.one),
              (this.t = o && new i(o, 16)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              this.z.red || (this.z = this.z.toRed(this.curve.red)),
              this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)),
              (this.zOne = this.z === this.curve.one),
              !this.curve.extended ||
                this.t ||
                ((this.t = this.x.redMul(this.y)),
                this.zOne || (this.t = this.t.redMul(this.z.redInvm()))));
      }
      o(f, a),
        (t.exports = f),
        (f.prototype._mulA = function (t) {
          return this.mOneA ? t.redNeg() : this.a.redMul(t);
        }),
        (f.prototype._mulC = function (t) {
          return this.oneC ? t : this.c.redMul(t);
        }),
        (f.prototype.jpoint = function (t, e, r, n) {
          return this.point(t, e, r, n);
        }),
        (f.prototype.pointFromX = function (t, e) {
          (t = new i(t, 16)).red || (t = t.toRed(this.red));
          var r = t.redSqr(),
            n = this.c2.redSub(this.a.redMul(r)),
            o = this.one.redSub(this.c2.redMul(this.d).redMul(r)),
            a = n.redMul(o.redInvm()),
            s = a.redSqrt();
          if (0 !== s.redSqr().redSub(a).cmp(this.zero))
            throw Error("invalid point");
          var f = s.fromRed().isOdd();
          return ((e && !f) || (!e && f)) && (s = s.redNeg()), this.point(t, s);
        }),
        (f.prototype.pointFromY = function (t, e) {
          (t = new i(t, 16)).red || (t = t.toRed(this.red));
          var r = t.redSqr(),
            n = r.redSub(this.c2),
            o = r.redMul(this.d).redMul(this.c2).redSub(this.a),
            a = n.redMul(o.redInvm());
          if (0 === a.cmp(this.zero)) {
            if (!e) return this.point(this.zero, t);
            throw Error("invalid point");
          }
          var s = a.redSqrt();
          if (0 !== s.redSqr().redSub(a).cmp(this.zero))
            throw Error("invalid point");
          return (
            s.fromRed().isOdd() !== e && (s = s.redNeg()), this.point(s, t)
          );
        }),
        (f.prototype.validate = function (t) {
          if (t.isInfinity()) return !0;
          t.normalize();
          var e = t.x.redSqr(),
            r = t.y.redSqr(),
            n = e.redMul(this.a).redAdd(r),
            i = this.c2.redMul(this.one.redAdd(this.d.redMul(e).redMul(r)));
          return 0 === n.cmp(i);
        }),
        o(u, a.BasePoint),
        (f.prototype.pointFromJSON = function (t) {
          return u.fromJSON(this, t);
        }),
        (f.prototype.point = function (t, e, r, n) {
          return new u(this, t, e, r, n);
        }),
        (u.fromJSON = function (t, e) {
          return new u(t, e[0], e[1], e[2]);
        }),
        (u.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " y: " +
                this.y.fromRed().toString(16, 2) +
                " z: " +
                this.z.fromRed().toString(16, 2) +
                ">";
        }),
        (u.prototype.isInfinity = function () {
          return (
            0 === this.x.cmpn(0) &&
            (0 === this.y.cmp(this.z) ||
              (this.zOne && 0 === this.y.cmp(this.curve.c)))
          );
        }),
        (u.prototype._extDbl = function () {
          var t = this.x.redSqr(),
            e = this.y.redSqr(),
            r = this.z.redSqr();
          r = r.redIAdd(r);
          var n = this.curve._mulA(t),
            i = this.x.redAdd(this.y).redSqr().redISub(t).redISub(e),
            o = n.redAdd(e),
            a = o.redSub(r),
            s = n.redSub(e),
            f = i.redMul(a),
            u = o.redMul(s),
            h = i.redMul(s),
            c = a.redMul(o);
          return this.curve.point(f, u, c, h);
        }),
        (u.prototype._projDbl = function () {
          var t,
            e,
            r,
            n,
            i,
            o,
            a = this.x.redAdd(this.y).redSqr(),
            s = this.x.redSqr(),
            f = this.y.redSqr();
          if (this.curve.twisted) {
            var u = (n = this.curve._mulA(s)).redAdd(f);
            this.zOne
              ? ((t = a.redSub(s).redSub(f).redMul(u.redSub(this.curve.two))),
                (e = u.redMul(n.redSub(f))),
                (r = u.redSqr().redSub(u).redSub(u)))
              : ((i = this.z.redSqr()),
                (o = u.redSub(i).redISub(i)),
                (t = a.redSub(s).redISub(f).redMul(o)),
                (e = u.redMul(n.redSub(f))),
                (r = u.redMul(o)));
          } else
            (n = s.redAdd(f)),
              (i = this.curve._mulC(this.z).redSqr()),
              (o = n.redSub(i).redSub(i)),
              (t = this.curve._mulC(a.redISub(n)).redMul(o)),
              (e = this.curve._mulC(n).redMul(s.redISub(f))),
              (r = n.redMul(o));
          return this.curve.point(t, e, r);
        }),
        (u.prototype.dbl = function () {
          return this.isInfinity()
            ? this
            : this.curve.extended
            ? this._extDbl()
            : this._projDbl();
        }),
        (u.prototype._extAdd = function (t) {
          var e = this.y.redSub(this.x).redMul(t.y.redSub(t.x)),
            r = this.y.redAdd(this.x).redMul(t.y.redAdd(t.x)),
            n = this.t.redMul(this.curve.dd).redMul(t.t),
            i = this.z.redMul(t.z.redAdd(t.z)),
            o = r.redSub(e),
            a = i.redSub(n),
            s = i.redAdd(n),
            f = r.redAdd(e),
            u = o.redMul(a),
            h = s.redMul(f),
            c = o.redMul(f),
            l = a.redMul(s);
          return this.curve.point(u, h, l, c);
        }),
        (u.prototype._projAdd = function (t) {
          var e,
            r,
            n = this.z.redMul(t.z),
            i = n.redSqr(),
            o = this.x.redMul(t.x),
            a = this.y.redMul(t.y),
            s = this.curve.d.redMul(o).redMul(a),
            f = i.redSub(s),
            u = i.redAdd(s),
            h = this.x
              .redAdd(this.y)
              .redMul(t.x.redAdd(t.y))
              .redISub(o)
              .redISub(a),
            c = n.redMul(f).redMul(h);
          return (
            this.curve.twisted
              ? ((e = n.redMul(u).redMul(a.redSub(this.curve._mulA(o)))),
                (r = f.redMul(u)))
              : ((e = n.redMul(u).redMul(a.redSub(o))),
                (r = this.curve._mulC(f).redMul(u))),
            this.curve.point(c, e, r)
          );
        }),
        (u.prototype.add = function (t) {
          return this.isInfinity()
            ? t
            : t.isInfinity()
            ? this
            : this.curve.extended
            ? this._extAdd(t)
            : this._projAdd(t);
        }),
        (u.prototype.mul = function (t) {
          return this._hasDoubles(t)
            ? this.curve._fixedNafMul(this, t)
            : this.curve._wnafMul(this, t);
        }),
        (u.prototype.mulAdd = function (t, e, r) {
          return this.curve._wnafMulAdd(1, [this, e], [t, r], 2, !1);
        }),
        (u.prototype.jmulAdd = function (t, e, r) {
          return this.curve._wnafMulAdd(1, [this, e], [t, r], 2, !0);
        }),
        (u.prototype.normalize = function () {
          if (this.zOne) return this;
          var t = this.z.redInvm();
          return (
            (this.x = this.x.redMul(t)),
            (this.y = this.y.redMul(t)),
            this.t && (this.t = this.t.redMul(t)),
            (this.z = this.curve.one),
            (this.zOne = !0),
            this
          );
        }),
        (u.prototype.neg = function () {
          return this.curve.point(
            this.x.redNeg(),
            this.y,
            this.z,
            this.t && this.t.redNeg()
          );
        }),
        (u.prototype.getX = function () {
          return this.normalize(), this.x.fromRed();
        }),
        (u.prototype.getY = function () {
          return this.normalize(), this.y.fromRed();
        }),
        (u.prototype.eq = function (t) {
          return (
            this === t ||
            (0 === this.getX().cmp(t.getX()) && 0 === this.getY().cmp(t.getY()))
          );
        }),
        (u.prototype.eqXToP = function (t) {
          var e = t.toRed(this.curve.red).redMul(this.z);
          if (0 === this.x.cmp(e)) return !0;
          for (var r = t.clone(), n = this.curve.redN.redMul(this.z); ; ) {
            if ((r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0)) return !1;
            if ((e.redIAdd(n), 0 === this.x.cmp(e))) return !0;
          }
        }),
        (u.prototype.toP = u.prototype.normalize),
        (u.prototype.mixedAdd = u.prototype.add);
    },
    8254: function (t, e, r) {
      "use strict";
      var n = e;
      (n.base = r(4918)),
        (n.short = r(6673)),
        (n.mont = r(2881)),
        (n.edwards = r(1138));
    },
    2881: function (t, e, r) {
      "use strict";
      var n = r(3785),
        i = r(5717),
        o = r(4918),
        a = r(953);
      function s(t) {
        o.call(this, "mont", t),
          (this.a = new n(t.a, 16).toRed(this.red)),
          (this.b = new n(t.b, 16).toRed(this.red)),
          (this.i4 = new n(4).toRed(this.red).redInvm()),
          (this.two = new n(2).toRed(this.red)),
          (this.a24 = this.i4.redMul(this.a.redAdd(this.two)));
      }
      function f(t, e, r) {
        o.BasePoint.call(this, t, "projective"),
          null === e && null === r
            ? ((this.x = this.curve.one), (this.z = this.curve.zero))
            : ((this.x = new n(e, 16)),
              (this.z = new n(r, 16)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.z.red || (this.z = this.z.toRed(this.curve.red)));
      }
      i(s, o),
        (t.exports = s),
        (s.prototype.validate = function (t) {
          var e = t.normalize().x,
            r = e.redSqr(),
            n = r.redMul(e).redAdd(r.redMul(this.a)).redAdd(e);
          return 0 === n.redSqrt().redSqr().cmp(n);
        }),
        i(f, o.BasePoint),
        (s.prototype.decodePoint = function (t, e) {
          return this.point(a.toArray(t, e), 1);
        }),
        (s.prototype.point = function (t, e) {
          return new f(this, t, e);
        }),
        (s.prototype.pointFromJSON = function (t) {
          return f.fromJSON(this, t);
        }),
        (f.prototype.precompute = function () {}),
        (f.prototype._encode = function () {
          return this.getX().toArray("be", this.curve.p.byteLength());
        }),
        (f.fromJSON = function (t, e) {
          return new f(t, e[0], e[1] || t.one);
        }),
        (f.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " z: " +
                this.z.fromRed().toString(16, 2) +
                ">";
        }),
        (f.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0);
        }),
        (f.prototype.dbl = function () {
          var t = this.x.redAdd(this.z).redSqr(),
            e = this.x.redSub(this.z).redSqr(),
            r = t.redSub(e),
            n = t.redMul(e),
            i = r.redMul(e.redAdd(this.curve.a24.redMul(r)));
          return this.curve.point(n, i);
        }),
        (f.prototype.add = function () {
          throw Error("Not supported on Montgomery curve");
        }),
        (f.prototype.diffAdd = function (t, e) {
          var r = this.x.redAdd(this.z),
            n = this.x.redSub(this.z),
            i = t.x.redAdd(t.z),
            o = t.x.redSub(t.z).redMul(r),
            a = i.redMul(n),
            s = e.z.redMul(o.redAdd(a).redSqr()),
            f = e.x.redMul(o.redISub(a).redSqr());
          return this.curve.point(s, f);
        }),
        (f.prototype.mul = function (t) {
          for (
            var e = t.clone(),
              r = this,
              n = this.curve.point(null, null),
              i = [];
            0 !== e.cmpn(0);
            e.iushrn(1)
          )
            i.push(e.andln(1));
          for (var o = i.length - 1; o >= 0; o--)
            0 === i[o]
              ? ((r = r.diffAdd(n, this)), (n = n.dbl()))
              : ((n = r.diffAdd(n, this)), (r = r.dbl()));
          return n;
        }),
        (f.prototype.mulAdd = function () {
          throw Error("Not supported on Montgomery curve");
        }),
        (f.prototype.jumlAdd = function () {
          throw Error("Not supported on Montgomery curve");
        }),
        (f.prototype.eq = function (t) {
          return 0 === this.getX().cmp(t.getX());
        }),
        (f.prototype.normalize = function () {
          return (
            (this.x = this.x.redMul(this.z.redInvm())),
            (this.z = this.curve.one),
            this
          );
        }),
        (f.prototype.getX = function () {
          return this.normalize(), this.x.fromRed();
        });
    },
    6673: function (t, e, r) {
      "use strict";
      var n = r(953),
        i = r(3785),
        o = r(5717),
        a = r(4918),
        s = n.assert;
      function f(t) {
        a.call(this, "short", t),
          (this.a = new i(t.a, 16).toRed(this.red)),
          (this.b = new i(t.b, 16).toRed(this.red)),
          (this.tinv = this.two.redInvm()),
          (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
          (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)),
          (this.endo = this._getEndomorphism(t)),
          (this._endoWnafT1 = [, , , ,]),
          (this._endoWnafT2 = [, , , ,]);
      }
      function u(t, e, r, n) {
        a.BasePoint.call(this, t, "affine"),
          null === e && null === r
            ? ((this.x = null), (this.y = null), (this.inf = !0))
            : ((this.x = new i(e, 16)),
              (this.y = new i(r, 16)),
              n &&
                (this.x.forceRed(this.curve.red),
                this.y.forceRed(this.curve.red)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              (this.inf = !1));
      }
      function h(t, e, r, n) {
        a.BasePoint.call(this, t, "jacobian"),
          null === e && null === r && null === n
            ? ((this.x = this.curve.one),
              (this.y = this.curve.one),
              (this.z = new i(0)))
            : ((this.x = new i(e, 16)),
              (this.y = new i(r, 16)),
              (this.z = new i(n, 16))),
          this.x.red || (this.x = this.x.toRed(this.curve.red)),
          this.y.red || (this.y = this.y.toRed(this.curve.red)),
          this.z.red || (this.z = this.z.toRed(this.curve.red)),
          (this.zOne = this.z === this.curve.one);
      }
      o(f, a),
        (t.exports = f),
        (f.prototype._getEndomorphism = function (t) {
          if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            if (t.beta) e = new i(t.beta, 16).toRed(this.red);
            else {
              var e,
                r,
                n,
                o = this._getEndoRoots(this.p);
              e = (e = 0 > o[0].cmp(o[1]) ? o[0] : o[1]).toRed(this.red);
            }
            if (t.lambda) r = new i(t.lambda, 16);
            else {
              var a = this._getEndoRoots(this.n);
              0 === this.g.mul(a[0]).x.cmp(this.g.x.redMul(e))
                ? (r = a[0])
                : ((r = a[1]),
                  s(0 === this.g.mul(r).x.cmp(this.g.x.redMul(e))));
            }
            return (
              (n = t.basis
                ? t.basis.map(function (t) {
                    return { a: new i(t.a, 16), b: new i(t.b, 16) };
                  })
                : this._getEndoBasis(r)),
              { beta: e, lambda: r, basis: n }
            );
          }
        }),
        (f.prototype._getEndoRoots = function (t) {
          var e = t === this.p ? this.red : i.mont(t),
            r = new i(2).toRed(e).redInvm(),
            n = r.redNeg(),
            o = new i(3).toRed(e).redNeg().redSqrt().redMul(r);
          return [n.redAdd(o).fromRed(), n.redSub(o).fromRed()];
        }),
        (f.prototype._getEndoBasis = function (t) {
          for (
            var e,
              r,
              n,
              o,
              a,
              s,
              f,
              u,
              h,
              c = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
              l = t,
              d = this.n.clone(),
              p = new i(1),
              b = new i(0),
              y = new i(0),
              m = new i(1),
              g = 0;
            0 !== l.cmpn(0);

          ) {
            var v = d.div(l);
            (u = d.sub(v.mul(l))), (h = y.sub(v.mul(p)));
            var w = m.sub(v.mul(b));
            if (!n && 0 > u.cmp(c))
              (e = f.neg()), (r = p), (n = u.neg()), (o = h);
            else if (n && 2 == ++g) break;
            (f = u), (d = l), (l = u), (y = p), (p = h), (m = b), (b = w);
          }
          (a = u.neg()), (s = h);
          var M = n.sqr().add(o.sqr());
          return (
            a.sqr().add(s.sqr()).cmp(M) >= 0 && ((a = e), (s = r)),
            n.negative && ((n = n.neg()), (o = o.neg())),
            a.negative && ((a = a.neg()), (s = s.neg())),
            [
              { a: n, b: o },
              { a: a, b: s },
            ]
          );
        }),
        (f.prototype._endoSplit = function (t) {
          var e = this.endo.basis,
            r = e[0],
            n = e[1],
            i = n.b.mul(t).divRound(this.n),
            o = r.b.neg().mul(t).divRound(this.n),
            a = i.mul(r.a),
            s = o.mul(n.a),
            f = i.mul(r.b),
            u = o.mul(n.b);
          return { k1: t.sub(a).sub(s), k2: f.add(u).neg() };
        }),
        (f.prototype.pointFromX = function (t, e) {
          (t = new i(t, 16)).red || (t = t.toRed(this.red));
          var r = t
              .redSqr()
              .redMul(t)
              .redIAdd(t.redMul(this.a))
              .redIAdd(this.b),
            n = r.redSqrt();
          if (0 !== n.redSqr().redSub(r).cmp(this.zero))
            throw Error("invalid point");
          var o = n.fromRed().isOdd();
          return ((e && !o) || (!e && o)) && (n = n.redNeg()), this.point(t, n);
        }),
        (f.prototype.validate = function (t) {
          if (t.inf) return !0;
          var e = t.x,
            r = t.y,
            n = this.a.redMul(e),
            i = e.redSqr().redMul(e).redIAdd(n).redIAdd(this.b);
          return 0 === r.redSqr().redISub(i).cmpn(0);
        }),
        (f.prototype._endoWnafMulAdd = function (t, e, r) {
          for (
            var n = this._endoWnafT1, i = this._endoWnafT2, o = 0;
            o < t.length;
            o++
          ) {
            var a = this._endoSplit(e[o]),
              s = t[o],
              f = s._getBeta();
            a.k1.negative && (a.k1.ineg(), (s = s.neg(!0))),
              a.k2.negative && (a.k2.ineg(), (f = f.neg(!0))),
              (n[2 * o] = s),
              (n[2 * o + 1] = f),
              (i[2 * o] = a.k1),
              (i[2 * o + 1] = a.k2);
          }
          for (
            var u = this._wnafMulAdd(1, n, i, 2 * o, r), h = 0;
            h < 2 * o;
            h++
          )
            (n[h] = null), (i[h] = null);
          return u;
        }),
        o(u, a.BasePoint),
        (f.prototype.point = function (t, e, r) {
          return new u(this, t, e, r);
        }),
        (f.prototype.pointFromJSON = function (t, e) {
          return u.fromJSON(this, t, e);
        }),
        (u.prototype._getBeta = function () {
          if (this.curve.endo) {
            var t = this.precomputed;
            if (t && t.beta) return t.beta;
            var e = this.curve.point(
              this.x.redMul(this.curve.endo.beta),
              this.y
            );
            if (t) {
              var r = this.curve,
                n = function (t) {
                  return r.point(t.x.redMul(r.endo.beta), t.y);
                };
              (t.beta = e),
                (e.precomputed = {
                  beta: null,
                  naf: t.naf && { wnd: t.naf.wnd, points: t.naf.points.map(n) },
                  doubles: t.doubles && {
                    step: t.doubles.step,
                    points: t.doubles.points.map(n),
                  },
                });
            }
            return e;
          }
        }),
        (u.prototype.toJSON = function () {
          return this.precomputed
            ? [
                this.x,
                this.y,
                this.precomputed && {
                  doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1),
                  },
                  naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1),
                  },
                },
              ]
            : [this.x, this.y];
        }),
        (u.fromJSON = function (t, e, r) {
          "string" == typeof e && (e = JSON.parse(e));
          var n = t.point(e[0], e[1], r);
          if (!e[2]) return n;
          function i(e) {
            return t.point(e[0], e[1], r);
          }
          var o = e[2];
          return (
            (n.precomputed = {
              beta: null,
              doubles: o.doubles && {
                step: o.doubles.step,
                points: [n].concat(o.doubles.points.map(i)),
              },
              naf: o.naf && {
                wnd: o.naf.wnd,
                points: [n].concat(o.naf.points.map(i)),
              },
            }),
            n
          );
        }),
        (u.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " y: " +
                this.y.fromRed().toString(16, 2) +
                ">";
        }),
        (u.prototype.isInfinity = function () {
          return this.inf;
        }),
        (u.prototype.add = function (t) {
          if (this.inf) return t;
          if (t.inf) return this;
          if (this.eq(t)) return this.dbl();
          if (this.neg().eq(t) || 0 === this.x.cmp(t.x))
            return this.curve.point(null, null);
          var e = this.y.redSub(t.y);
          0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(t.x).redInvm()));
          var r = e.redSqr().redISub(this.x).redISub(t.x),
            n = e.redMul(this.x.redSub(r)).redISub(this.y);
          return this.curve.point(r, n);
        }),
        (u.prototype.dbl = function () {
          if (this.inf) return this;
          var t = this.y.redAdd(this.y);
          if (0 === t.cmpn(0)) return this.curve.point(null, null);
          var e = this.curve.a,
            r = this.x.redSqr(),
            n = t.redInvm(),
            i = r.redAdd(r).redIAdd(r).redIAdd(e).redMul(n),
            o = i.redSqr().redISub(this.x.redAdd(this.x)),
            a = i.redMul(this.x.redSub(o)).redISub(this.y);
          return this.curve.point(o, a);
        }),
        (u.prototype.getX = function () {
          return this.x.fromRed();
        }),
        (u.prototype.getY = function () {
          return this.y.fromRed();
        }),
        (u.prototype.mul = function (t) {
          return ((t = new i(t, 16)), this.isInfinity())
            ? this
            : this._hasDoubles(t)
            ? this.curve._fixedNafMul(this, t)
            : this.curve.endo
            ? this.curve._endoWnafMulAdd([this], [t])
            : this.curve._wnafMul(this, t);
        }),
        (u.prototype.mulAdd = function (t, e, r) {
          var n = [this, e],
            i = [t, r];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(n, i)
            : this.curve._wnafMulAdd(1, n, i, 2);
        }),
        (u.prototype.jmulAdd = function (t, e, r) {
          var n = [this, e],
            i = [t, r];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(n, i, !0)
            : this.curve._wnafMulAdd(1, n, i, 2, !0);
        }),
        (u.prototype.eq = function (t) {
          return (
            this === t ||
            (this.inf === t.inf &&
              (this.inf || (0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))))
          );
        }),
        (u.prototype.neg = function (t) {
          if (this.inf) return this;
          var e = this.curve.point(this.x, this.y.redNeg());
          if (t && this.precomputed) {
            var r = this.precomputed,
              n = function (t) {
                return t.neg();
              };
            e.precomputed = {
              naf: r.naf && { wnd: r.naf.wnd, points: r.naf.points.map(n) },
              doubles: r.doubles && {
                step: r.doubles.step,
                points: r.doubles.points.map(n),
              },
            };
          }
          return e;
        }),
        (u.prototype.toJ = function () {
          return this.inf
            ? this.curve.jpoint(null, null, null)
            : this.curve.jpoint(this.x, this.y, this.curve.one);
        }),
        o(h, a.BasePoint),
        (f.prototype.jpoint = function (t, e, r) {
          return new h(this, t, e, r);
        }),
        (h.prototype.toP = function () {
          if (this.isInfinity()) return this.curve.point(null, null);
          var t = this.z.redInvm(),
            e = t.redSqr(),
            r = this.x.redMul(e),
            n = this.y.redMul(e).redMul(t);
          return this.curve.point(r, n);
        }),
        (h.prototype.neg = function () {
          return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
        }),
        (h.prototype.add = function (t) {
          if (this.isInfinity()) return t;
          if (t.isInfinity()) return this;
          var e = t.z.redSqr(),
            r = this.z.redSqr(),
            n = this.x.redMul(e),
            i = t.x.redMul(r),
            o = this.y.redMul(e.redMul(t.z)),
            a = t.y.redMul(r.redMul(this.z)),
            s = n.redSub(i),
            f = o.redSub(a);
          if (0 === s.cmpn(0))
            return 0 !== f.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var u = s.redSqr(),
            h = u.redMul(s),
            c = n.redMul(u),
            l = f.redSqr().redIAdd(h).redISub(c).redISub(c),
            d = f.redMul(c.redISub(l)).redISub(o.redMul(h)),
            p = this.z.redMul(t.z).redMul(s);
          return this.curve.jpoint(l, d, p);
        }),
        (h.prototype.mixedAdd = function (t) {
          if (this.isInfinity()) return t.toJ();
          if (t.isInfinity()) return this;
          var e = this.z.redSqr(),
            r = this.x,
            n = t.x.redMul(e),
            i = this.y,
            o = t.y.redMul(e).redMul(this.z),
            a = r.redSub(n),
            s = i.redSub(o);
          if (0 === a.cmpn(0))
            return 0 !== s.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var f = a.redSqr(),
            u = f.redMul(a),
            h = r.redMul(f),
            c = s.redSqr().redIAdd(u).redISub(h).redISub(h),
            l = s.redMul(h.redISub(c)).redISub(i.redMul(u)),
            d = this.z.redMul(a);
          return this.curve.jpoint(c, l, d);
        }),
        (h.prototype.dblp = function (t) {
          if (0 === t || this.isInfinity()) return this;
          if (!t) return this.dbl();
          if (this.curve.zeroA || this.curve.threeA) {
            var e,
              r = this;
            for (e = 0; e < t; e++) r = r.dbl();
            return r;
          }
          var n = this.curve.a,
            i = this.curve.tinv,
            o = this.x,
            a = this.y,
            s = this.z,
            f = s.redSqr().redSqr(),
            u = a.redAdd(a);
          for (e = 0; e < t; e++) {
            var h = o.redSqr(),
              c = u.redSqr(),
              l = c.redSqr(),
              d = h.redAdd(h).redIAdd(h).redIAdd(n.redMul(f)),
              p = o.redMul(c),
              b = d.redSqr().redISub(p.redAdd(p)),
              y = p.redISub(b),
              m = d.redMul(y);
            m = m.redIAdd(m).redISub(l);
            var g = u.redMul(s);
            e + 1 < t && (f = f.redMul(l)), (o = b), (s = g), (u = m);
          }
          return this.curve.jpoint(o, u.redMul(i), s);
        }),
        (h.prototype.dbl = function () {
          return this.isInfinity()
            ? this
            : this.curve.zeroA
            ? this._zeroDbl()
            : this.curve.threeA
            ? this._threeDbl()
            : this._dbl();
        }),
        (h.prototype._zeroDbl = function () {
          if (this.zOne) {
            var t,
              e,
              r,
              n = this.x.redSqr(),
              i = this.y.redSqr(),
              o = i.redSqr(),
              a = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
            a = a.redIAdd(a);
            var s = n.redAdd(n).redIAdd(n),
              f = s.redSqr().redISub(a).redISub(a),
              u = o.redIAdd(o);
            (u = (u = u.redIAdd(u)).redIAdd(u)),
              (t = f),
              (e = s.redMul(a.redISub(f)).redISub(u)),
              (r = this.y.redAdd(this.y));
          } else {
            var h = this.x.redSqr(),
              c = this.y.redSqr(),
              l = c.redSqr(),
              d = this.x.redAdd(c).redSqr().redISub(h).redISub(l);
            d = d.redIAdd(d);
            var p = h.redAdd(h).redIAdd(h),
              b = p.redSqr(),
              y = l.redIAdd(l);
            (y = (y = y.redIAdd(y)).redIAdd(y)),
              (t = b.redISub(d).redISub(d)),
              (e = p.redMul(d.redISub(t)).redISub(y)),
              (r = (r = this.y.redMul(this.z)).redIAdd(r));
          }
          return this.curve.jpoint(t, e, r);
        }),
        (h.prototype._threeDbl = function () {
          if (this.zOne) {
            var t,
              e,
              r,
              n = this.x.redSqr(),
              i = this.y.redSqr(),
              o = i.redSqr(),
              a = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
            a = a.redIAdd(a);
            var s = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
              f = s.redSqr().redISub(a).redISub(a);
            t = f;
            var u = o.redIAdd(o);
            (u = (u = u.redIAdd(u)).redIAdd(u)),
              (e = s.redMul(a.redISub(f)).redISub(u)),
              (r = this.y.redAdd(this.y));
          } else {
            var h = this.z.redSqr(),
              c = this.y.redSqr(),
              l = this.x.redMul(c),
              d = this.x.redSub(h).redMul(this.x.redAdd(h));
            d = d.redAdd(d).redIAdd(d);
            var p = l.redIAdd(l),
              b = (p = p.redIAdd(p)).redAdd(p);
            (t = d.redSqr().redISub(b)),
              (r = this.y.redAdd(this.z).redSqr().redISub(c).redISub(h));
            var y = c.redSqr();
            (y = (y = (y = y.redIAdd(y)).redIAdd(y)).redIAdd(y)),
              (e = d.redMul(p.redISub(t)).redISub(y));
          }
          return this.curve.jpoint(t, e, r);
        }),
        (h.prototype._dbl = function () {
          var t = this.curve.a,
            e = this.x,
            r = this.y,
            n = this.z,
            i = n.redSqr().redSqr(),
            o = e.redSqr(),
            a = r.redSqr(),
            s = o.redAdd(o).redIAdd(o).redIAdd(t.redMul(i)),
            f = e.redAdd(e),
            u = (f = f.redIAdd(f)).redMul(a),
            h = s.redSqr().redISub(u.redAdd(u)),
            c = u.redISub(h),
            l = a.redSqr();
          l = (l = (l = l.redIAdd(l)).redIAdd(l)).redIAdd(l);
          var d = s.redMul(c).redISub(l),
            p = r.redAdd(r).redMul(n);
          return this.curve.jpoint(h, d, p);
        }),
        (h.prototype.trpl = function () {
          if (!this.curve.zeroA) return this.dbl().add(this);
          var t = this.x.redSqr(),
            e = this.y.redSqr(),
            r = this.z.redSqr(),
            n = e.redSqr(),
            i = t.redAdd(t).redIAdd(t),
            o = i.redSqr(),
            a = this.x.redAdd(e).redSqr().redISub(t).redISub(n),
            s = (a = (a = (a = a.redIAdd(a)).redAdd(a).redIAdd(a)).redISub(
              o
            )).redSqr(),
            f = n.redIAdd(n);
          f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
          var u = i.redIAdd(a).redSqr().redISub(o).redISub(s).redISub(f),
            h = e.redMul(u);
          h = (h = h.redIAdd(h)).redIAdd(h);
          var c = this.x.redMul(s).redISub(h);
          c = (c = c.redIAdd(c)).redIAdd(c);
          var l = this.y.redMul(u.redMul(f.redISub(u)).redISub(a.redMul(s)));
          l = (l = (l = l.redIAdd(l)).redIAdd(l)).redIAdd(l);
          var d = this.z.redAdd(a).redSqr().redISub(r).redISub(s);
          return this.curve.jpoint(c, l, d);
        }),
        (h.prototype.mul = function (t, e) {
          return (t = new i(t, e)), this.curve._wnafMul(this, t);
        }),
        (h.prototype.eq = function (t) {
          if ("affine" === t.type) return this.eq(t.toJ());
          if (this === t) return !0;
          var e = this.z.redSqr(),
            r = t.z.redSqr();
          if (0 !== this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0)) return !1;
          var n = e.redMul(this.z),
            i = r.redMul(t.z);
          return 0 === this.y.redMul(i).redISub(t.y.redMul(n)).cmpn(0);
        }),
        (h.prototype.eqXToP = function (t) {
          var e = this.z.redSqr(),
            r = t.toRed(this.curve.red).redMul(e);
          if (0 === this.x.cmp(r)) return !0;
          for (var n = t.clone(), i = this.curve.redN.redMul(e); ; ) {
            if ((n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0)) return !1;
            if ((r.redIAdd(i), 0 === this.x.cmp(r))) return !0;
          }
        }),
        (h.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC JPoint Infinity>"
            : "<EC JPoint x: " +
                this.x.toString(16, 2) +
                " y: " +
                this.y.toString(16, 2) +
                " z: " +
                this.z.toString(16, 2) +
                ">";
        }),
        (h.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0);
        });
    },
    788: function (t, e, r) {
      "use strict";
      var n,
        i = e,
        o = r(3715),
        a = r(8254),
        s = r(953).assert;
      function f(t) {
        "short" === t.type
          ? (this.curve = new a.short(t))
          : "edwards" === t.type
          ? (this.curve = new a.edwards(t))
          : (this.curve = new a.mont(t)),
          (this.g = this.curve.g),
          (this.n = this.curve.n),
          (this.hash = t.hash),
          s(this.g.validate(), "Invalid curve"),
          s(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
      }
      function u(t, e) {
        Object.defineProperty(i, t, {
          configurable: !0,
          enumerable: !0,
          get: function () {
            var r = new f(e);
            return (
              Object.defineProperty(i, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
              }),
              r
            );
          },
        });
      }
      (i.PresetCurve = f),
        u("p192", {
          type: "short",
          prime: "p192",
          p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
          a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
          b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
          n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
          hash: o.sha256,
          gRed: !1,
          g: [
            "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
            "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811",
          ],
        }),
        u("p224", {
          type: "short",
          prime: "p224",
          p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
          a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
          b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
          n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
          hash: o.sha256,
          gRed: !1,
          g: [
            "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
            "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34",
          ],
        }),
        u("p256", {
          type: "short",
          prime: null,
          p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
          a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
          b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
          n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
          hash: o.sha256,
          gRed: !1,
          g: [
            "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
            "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5",
          ],
        }),
        u("p384", {
          type: "short",
          prime: null,
          p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
          a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
          b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
          n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
          hash: o.sha384,
          gRed: !1,
          g: [
            "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
            "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f",
          ],
        }),
        u("p521", {
          type: "short",
          prime: null,
          p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
          a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
          b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
          n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
          hash: o.sha512,
          gRed: !1,
          g: [
            "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
            "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650",
          ],
        }),
        u("curve25519", {
          type: "mont",
          prime: "p25519",
          p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
          a: "76d06",
          b: "1",
          n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
          hash: o.sha256,
          gRed: !1,
          g: ["9"],
        }),
        u("ed25519", {
          type: "edwards",
          prime: "p25519",
          p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
          a: "-1",
          c: "1",
          d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
          n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
          hash: o.sha256,
          gRed: !1,
          g: [
            "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
            "6666666666666666666666666666666666666666666666666666666666666658",
          ],
        });
      try {
        n = r(1037);
      } catch (t) {
        n = void 0;
      }
      u("secp256k1", {
        type: "short",
        prime: "k256",
        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
        a: "0",
        b: "7",
        n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
        h: "1",
        hash: o.sha256,
        beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
        lambda:
          "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
        basis: [
          {
            a: "3086d221a7d46bcde86c90e49284eb15",
            b: "-e4437ed6010e88286f547fa90abfe4c3",
          },
          {
            a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
            b: "3086d221a7d46bcde86c90e49284eb15",
          },
        ],
        gRed: !1,
        g: [
          "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
          "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
          n,
        ],
      });
    },
    7954: function (t, e, r) {
      "use strict";
      var n = r(3785),
        i = r(2156),
        o = r(953),
        a = r(788),
        s = r(9931),
        f = o.assert,
        u = r(1251),
        h = r(611);
      function c(t) {
        if (!(this instanceof c)) return new c(t);
        "string" == typeof t &&
          (f(Object.prototype.hasOwnProperty.call(a, t), "Unknown curve " + t),
          (t = a[t])),
          t instanceof a.PresetCurve && (t = { curve: t }),
          (this.curve = t.curve.curve),
          (this.n = this.curve.n),
          (this.nh = this.n.ushrn(1)),
          (this.g = this.curve.g),
          (this.g = t.curve.g),
          this.g.precompute(t.curve.n.bitLength() + 1),
          (this.hash = t.hash || t.curve.hash);
      }
      (t.exports = c),
        (c.prototype.keyPair = function (t) {
          return new u(this, t);
        }),
        (c.prototype.keyFromPrivate = function (t, e) {
          return u.fromPrivate(this, t, e);
        }),
        (c.prototype.keyFromPublic = function (t, e) {
          return u.fromPublic(this, t, e);
        }),
        (c.prototype.genKeyPair = function (t) {
          t || (t = {});
          for (
            var e = new i({
                hash: this.hash,
                pers: t.pers,
                persEnc: t.persEnc || "utf8",
                entropy: t.entropy || s(this.hash.hmacStrength),
                entropyEnc: (t.entropy && t.entropyEnc) || "utf8",
                nonce: this.n.toArray(),
              }),
              r = this.n.byteLength(),
              o = this.n.sub(new n(2));
            ;

          ) {
            var a = new n(e.generate(r));
            if (!(a.cmp(o) > 0)) return a.iaddn(1), this.keyFromPrivate(a);
          }
        }),
        (c.prototype._truncateToN = function (t, e) {
          var r = 8 * t.byteLength() - this.n.bitLength();
          return (r > 0 && (t = t.ushrn(r)), !e && t.cmp(this.n) >= 0)
            ? t.sub(this.n)
            : t;
        }),
        (c.prototype.sign = function (t, e, r, o) {
          "object" == typeof r && ((o = r), (r = null)),
            o || (o = {}),
            (e = this.keyFromPrivate(e, r)),
            (t = this._truncateToN(new n(t, 16)));
          for (
            var a = this.n.byteLength(),
              s = e.getPrivate().toArray("be", a),
              f = t.toArray("be", a),
              u = new i({
                hash: this.hash,
                entropy: s,
                nonce: f,
                pers: o.pers,
                persEnc: o.persEnc || "utf8",
              }),
              c = this.n.sub(new n(1)),
              l = 0;
            ;
            l++
          ) {
            var d = o.k ? o.k(l) : new n(u.generate(this.n.byteLength()));
            if (
              !(0 >= (d = this._truncateToN(d, !0)).cmpn(1) || d.cmp(c) >= 0)
            ) {
              var p = this.g.mul(d);
              if (!p.isInfinity()) {
                var b = p.getX(),
                  y = b.umod(this.n);
                if (0 !== y.cmpn(0)) {
                  var m = d.invm(this.n).mul(y.mul(e.getPrivate()).iadd(t));
                  if (0 !== (m = m.umod(this.n)).cmpn(0)) {
                    var g =
                      (p.getY().isOdd() ? 1 : 0) | (0 !== b.cmp(y) ? 2 : 0);
                    return (
                      o.canonical &&
                        m.cmp(this.nh) > 0 &&
                        ((m = this.n.sub(m)), (g ^= 1)),
                      new h({ r: y, s: m, recoveryParam: g })
                    );
                  }
                }
              }
            }
          }
        }),
        (c.prototype.verify = function (t, e, r, i) {
          (t = this._truncateToN(new n(t, 16))), (r = this.keyFromPublic(r, i));
          var o,
            a = (e = new h(e, "hex")).r,
            s = e.s;
          if (
            0 > a.cmpn(1) ||
            a.cmp(this.n) >= 0 ||
            0 > s.cmpn(1) ||
            s.cmp(this.n) >= 0
          )
            return !1;
          var f = s.invm(this.n),
            u = f.mul(t).umod(this.n),
            c = f.mul(a).umod(this.n);
          return this.curve._maxwellTrick
            ? !(o = this.g.jmulAdd(u, r.getPublic(), c)).isInfinity() &&
                o.eqXToP(a)
            : !(o = this.g.mulAdd(u, r.getPublic(), c)).isInfinity() &&
                0 === o.getX().umod(this.n).cmp(a);
        }),
        (c.prototype.recoverPubKey = function (t, e, r, i) {
          f((3 & r) === r, "The recovery param is more than two bits"),
            (e = new h(e, i));
          var o = this.n,
            a = new n(t),
            s = e.r,
            u = e.s,
            c = 1 & r,
            l = r >> 1;
          if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && l)
            throw Error("Unable to find sencond key candinate");
          s = l
            ? this.curve.pointFromX(s.add(this.curve.n), c)
            : this.curve.pointFromX(s, c);
          var d = e.r.invm(o),
            p = o.sub(a).mul(d).umod(o),
            b = u.mul(d).umod(o);
          return this.g.mulAdd(p, s, b);
        }),
        (c.prototype.getKeyRecoveryParam = function (t, e, r, n) {
          if (null !== (e = new h(e, n)).recoveryParam) return e.recoveryParam;
          for (var i, o = 0; o < 4; o++) {
            try {
              i = this.recoverPubKey(t, e, o);
            } catch (t) {
              continue;
            }
            if (i.eq(r)) return o;
          }
          throw Error("Unable to find valid recovery factor");
        });
    },
    1251: function (t, e, r) {
      "use strict";
      var n = r(3785),
        i = r(953).assert;
      function o(t, e) {
        (this.ec = t),
          (this.priv = null),
          (this.pub = null),
          e.priv && this._importPrivate(e.priv, e.privEnc),
          e.pub && this._importPublic(e.pub, e.pubEnc);
      }
      (t.exports = o),
        (o.fromPublic = function (t, e, r) {
          return e instanceof o ? e : new o(t, { pub: e, pubEnc: r });
        }),
        (o.fromPrivate = function (t, e, r) {
          return e instanceof o ? e : new o(t, { priv: e, privEnc: r });
        }),
        (o.prototype.validate = function () {
          var t = this.getPublic();
          return t.isInfinity()
            ? { result: !1, reason: "Invalid public key" }
            : t.validate()
            ? t.mul(this.ec.curve.n).isInfinity()
              ? { result: !0, reason: null }
              : { result: !1, reason: "Public key * N != O" }
            : { result: !1, reason: "Public key is not a point" };
        }),
        (o.prototype.getPublic = function (t, e) {
          return ("string" == typeof t && ((e = t), (t = null)),
          this.pub || (this.pub = this.ec.g.mul(this.priv)),
          e)
            ? this.pub.encode(e, t)
            : this.pub;
        }),
        (o.prototype.getPrivate = function (t) {
          return "hex" === t ? this.priv.toString(16, 2) : this.priv;
        }),
        (o.prototype._importPrivate = function (t, e) {
          (this.priv = new n(t, e || 16)),
            (this.priv = this.priv.umod(this.ec.curve.n));
        }),
        (o.prototype._importPublic = function (t, e) {
          if (t.x || t.y) {
            "mont" === this.ec.curve.type
              ? i(t.x, "Need x coordinate")
              : ("short" === this.ec.curve.type ||
                  "edwards" === this.ec.curve.type) &&
                i(t.x && t.y, "Need both x and y coordinate"),
              (this.pub = this.ec.curve.point(t.x, t.y));
            return;
          }
          this.pub = this.ec.curve.decodePoint(t, e);
        }),
        (o.prototype.derive = function (t) {
          return (
            t.validate() || i(t.validate(), "public point not validated"),
            t.mul(this.priv).getX()
          );
        }),
        (o.prototype.sign = function (t, e, r) {
          return this.ec.sign(t, this, e, r);
        }),
        (o.prototype.verify = function (t, e) {
          return this.ec.verify(t, e, this);
        }),
        (o.prototype.inspect = function () {
          return (
            "<Key priv: " +
            (this.priv && this.priv.toString(16, 2)) +
            " pub: " +
            (this.pub && this.pub.inspect()) +
            " >"
          );
        });
    },
    611: function (t, e, r) {
      "use strict";
      var n = r(3785),
        i = r(953),
        o = i.assert;
      function a(t, e) {
        if (t instanceof a) return t;
        this._importDER(t, e) ||
          (o(t.r && t.s, "Signature without r or s"),
          (this.r = new n(t.r, 16)),
          (this.s = new n(t.s, 16)),
          void 0 === t.recoveryParam
            ? (this.recoveryParam = null)
            : (this.recoveryParam = t.recoveryParam));
      }
      function s() {
        this.place = 0;
      }
      function f(t, e) {
        var r = t[e.place++];
        if (!(128 & r)) return r;
        var n = 15 & r;
        if (0 === n || n > 4) return !1;
        for (var i = 0, o = 0, a = e.place; o < n; o++, a++)
          (i <<= 8), (i |= t[a]), (i >>>= 0);
        return !(i <= 127) && ((e.place = a), i);
      }
      function u(t) {
        for (var e = 0, r = t.length - 1; !t[e] && !(128 & t[e + 1]) && e < r; )
          e++;
        return 0 === e ? t : t.slice(e);
      }
      function h(t, e) {
        if (e < 128) {
          t.push(e);
          return;
        }
        var r = 1 + ((Math.log(e) / Math.LN2) >>> 3);
        for (t.push(128 | r); --r; ) t.push((e >>> (r << 3)) & 255);
        t.push(e);
      }
      (t.exports = a),
        (a.prototype._importDER = function (t, e) {
          t = i.toArray(t, e);
          var r = new s();
          if (48 !== t[r.place++]) return !1;
          var o = f(t, r);
          if (!1 === o || o + r.place !== t.length || 2 !== t[r.place++])
            return !1;
          var a = f(t, r);
          if (!1 === a) return !1;
          var u = t.slice(r.place, a + r.place);
          if (((r.place += a), 2 !== t[r.place++])) return !1;
          var h = f(t, r);
          if (!1 === h || t.length !== h + r.place) return !1;
          var c = t.slice(r.place, h + r.place);
          if (0 === u[0]) {
            if (!(128 & u[1])) return !1;
            u = u.slice(1);
          }
          if (0 === c[0]) {
            if (!(128 & c[1])) return !1;
            c = c.slice(1);
          }
          return (
            (this.r = new n(u)),
            (this.s = new n(c)),
            (this.recoveryParam = null),
            !0
          );
        }),
        (a.prototype.toDER = function (t) {
          var e = this.r.toArray(),
            r = this.s.toArray();
          for (
            128 & e[0] && (e = [0].concat(e)),
              128 & r[0] && (r = [0].concat(r)),
              e = u(e),
              r = u(r);
            !r[0] && !(128 & r[1]);

          )
            r = r.slice(1);
          var n = [2];
          h(n, e.length), (n = n.concat(e)).push(2), h(n, r.length);
          var o = n.concat(r),
            a = [48];
          return h(a, o.length), (a = a.concat(o)), i.encode(a, t);
        });
    },
    5980: function (t, e, r) {
      "use strict";
      var n = r(3715),
        i = r(788),
        o = r(953),
        a = o.assert,
        s = o.parseBytes,
        f = r(9087),
        u = r(3622);
      function h(t) {
        if (
          (a("ed25519" === t, "only tested with ed25519 so far"),
          !(this instanceof h))
        )
          return new h(t);
        (t = i[t].curve),
          (this.curve = t),
          (this.g = t.g),
          this.g.precompute(t.n.bitLength() + 1),
          (this.pointClass = t.point().constructor),
          (this.encodingLength = Math.ceil(t.n.bitLength() / 8)),
          (this.hash = n.sha512);
      }
      (t.exports = h),
        (h.prototype.sign = function (t, e) {
          t = s(t);
          var r = this.keyFromSecret(e),
            n = this.hashInt(r.messagePrefix(), t),
            i = this.g.mul(n),
            o = this.encodePoint(i),
            a = this.hashInt(o, r.pubBytes(), t).mul(r.priv()),
            f = n.add(a).umod(this.curve.n);
          return this.makeSignature({ R: i, S: f, Rencoded: o });
        }),
        (h.prototype.verify = function (t, e, r) {
          (t = s(t)), (e = this.makeSignature(e));
          var n = this.keyFromPublic(r),
            i = this.hashInt(e.Rencoded(), n.pubBytes(), t),
            o = this.g.mul(e.S());
          return e.R().add(n.pub().mul(i)).eq(o);
        }),
        (h.prototype.hashInt = function () {
          for (var t = this.hash(), e = 0; e < arguments.length; e++)
            t.update(arguments[e]);
          return o.intFromLE(t.digest()).umod(this.curve.n);
        }),
        (h.prototype.keyFromPublic = function (t) {
          return f.fromPublic(this, t);
        }),
        (h.prototype.keyFromSecret = function (t) {
          return f.fromSecret(this, t);
        }),
        (h.prototype.makeSignature = function (t) {
          return t instanceof u ? t : new u(this, t);
        }),
        (h.prototype.encodePoint = function (t) {
          var e = t.getY().toArray("le", this.encodingLength);
          return (e[this.encodingLength - 1] |= t.getX().isOdd() ? 128 : 0), e;
        }),
        (h.prototype.decodePoint = function (t) {
          var e = (t = o.parseBytes(t)).length - 1,
            r = t.slice(0, e).concat(-129 & t[e]),
            n = (128 & t[e]) != 0,
            i = o.intFromLE(r);
          return this.curve.pointFromY(i, n);
        }),
        (h.prototype.encodeInt = function (t) {
          return t.toArray("le", this.encodingLength);
        }),
        (h.prototype.decodeInt = function (t) {
          return o.intFromLE(t);
        }),
        (h.prototype.isPoint = function (t) {
          return t instanceof this.pointClass;
        });
    },
    9087: function (t, e, r) {
      "use strict";
      var n = r(953),
        i = n.assert,
        o = n.parseBytes,
        a = n.cachedProperty;
      function s(t, e) {
        (this.eddsa = t),
          (this._secret = o(e.secret)),
          t.isPoint(e.pub) ? (this._pub = e.pub) : (this._pubBytes = o(e.pub));
      }
      (s.fromPublic = function (t, e) {
        return e instanceof s ? e : new s(t, { pub: e });
      }),
        (s.fromSecret = function (t, e) {
          return e instanceof s ? e : new s(t, { secret: e });
        }),
        (s.prototype.secret = function () {
          return this._secret;
        }),
        a(s, "pubBytes", function () {
          return this.eddsa.encodePoint(this.pub());
        }),
        a(s, "pub", function () {
          return this._pubBytes
            ? this.eddsa.decodePoint(this._pubBytes)
            : this.eddsa.g.mul(this.priv());
        }),
        a(s, "privBytes", function () {
          var t = this.eddsa,
            e = this.hash(),
            r = t.encodingLength - 1,
            n = e.slice(0, t.encodingLength);
          return (n[0] &= 248), (n[r] &= 127), (n[r] |= 64), n;
        }),
        a(s, "priv", function () {
          return this.eddsa.decodeInt(this.privBytes());
        }),
        a(s, "hash", function () {
          return this.eddsa.hash().update(this.secret()).digest();
        }),
        a(s, "messagePrefix", function () {
          return this.hash().slice(this.eddsa.encodingLength);
        }),
        (s.prototype.sign = function (t) {
          return (
            i(this._secret, "KeyPair can only verify"), this.eddsa.sign(t, this)
          );
        }),
        (s.prototype.verify = function (t, e) {
          return this.eddsa.verify(t, e, this);
        }),
        (s.prototype.getSecret = function (t) {
          return (
            i(this._secret, "KeyPair is public only"),
            n.encode(this.secret(), t)
          );
        }),
        (s.prototype.getPublic = function (t) {
          return n.encode(this.pubBytes(), t);
        }),
        (t.exports = s);
    },
    3622: function (t, e, r) {
      "use strict";
      var n = r(3785),
        i = r(953),
        o = i.assert,
        a = i.cachedProperty,
        s = i.parseBytes;
      function f(t, e) {
        (this.eddsa = t),
          "object" != typeof e && (e = s(e)),
          Array.isArray(e) &&
            (e = {
              R: e.slice(0, t.encodingLength),
              S: e.slice(t.encodingLength),
            }),
          o(e.R && e.S, "Signature without R or S"),
          t.isPoint(e.R) && (this._R = e.R),
          e.S instanceof n && (this._S = e.S),
          (this._Rencoded = Array.isArray(e.R) ? e.R : e.Rencoded),
          (this._Sencoded = Array.isArray(e.S) ? e.S : e.Sencoded);
      }
      a(f, "S", function () {
        return this.eddsa.decodeInt(this.Sencoded());
      }),
        a(f, "R", function () {
          return this.eddsa.decodePoint(this.Rencoded());
        }),
        a(f, "Rencoded", function () {
          return this.eddsa.encodePoint(this.R());
        }),
        a(f, "Sencoded", function () {
          return this.eddsa.encodeInt(this.S());
        }),
        (f.prototype.toBytes = function () {
          return this.Rencoded().concat(this.Sencoded());
        }),
        (f.prototype.toHex = function () {
          return i.encode(this.toBytes(), "hex").toUpperCase();
        }),
        (t.exports = f);
    },
    1037: function (t) {
      t.exports = {
        doubles: {
          step: 4,
          points: [
            [
              "e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a",
              "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821",
            ],
            [
              "8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508",
              "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf",
            ],
            [
              "175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739",
              "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695",
            ],
            [
              "363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640",
              "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9",
            ],
            [
              "8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c",
              "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36",
            ],
            [
              "723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda",
              "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f",
            ],
            [
              "eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa",
              "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999",
            ],
            [
              "100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0",
              "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09",
            ],
            [
              "e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d",
              "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d",
            ],
            [
              "feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d",
              "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088",
            ],
            [
              "da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1",
              "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d",
            ],
            [
              "53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0",
              "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8",
            ],
            [
              "8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047",
              "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a",
            ],
            [
              "385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862",
              "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453",
            ],
            [
              "6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7",
              "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160",
            ],
            [
              "3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd",
              "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0",
            ],
            [
              "85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83",
              "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6",
            ],
            [
              "948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a",
              "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589",
            ],
            [
              "6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8",
              "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17",
            ],
            [
              "e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d",
              "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda",
            ],
            [
              "e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725",
              "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd",
            ],
            [
              "213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754",
              "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2",
            ],
            [
              "4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c",
              "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6",
            ],
            [
              "fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6",
              "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f",
            ],
            [
              "76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39",
              "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01",
            ],
            [
              "c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891",
              "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3",
            ],
            [
              "d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b",
              "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f",
            ],
            [
              "b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03",
              "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7",
            ],
            [
              "e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d",
              "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78",
            ],
            [
              "a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070",
              "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1",
            ],
            [
              "90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4",
              "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150",
            ],
            [
              "8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da",
              "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82",
            ],
            [
              "e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11",
              "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc",
            ],
            [
              "8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e",
              "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b",
            ],
            [
              "e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41",
              "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51",
            ],
            [
              "b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef",
              "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45",
            ],
            [
              "d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8",
              "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120",
            ],
            [
              "324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d",
              "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84",
            ],
            [
              "4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96",
              "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d",
            ],
            [
              "9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd",
              "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d",
            ],
            [
              "6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5",
              "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8",
            ],
            [
              "a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266",
              "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8",
            ],
            [
              "7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71",
              "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac",
            ],
            [
              "928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac",
              "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f",
            ],
            [
              "85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751",
              "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962",
            ],
            [
              "ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e",
              "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907",
            ],
            [
              "827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241",
              "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec",
            ],
            [
              "eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3",
              "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d",
            ],
            [
              "e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f",
              "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414",
            ],
            [
              "1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19",
              "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd",
            ],
            [
              "146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be",
              "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0",
            ],
            [
              "fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9",
              "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811",
            ],
            [
              "da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2",
              "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1",
            ],
            [
              "a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13",
              "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c",
            ],
            [
              "174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c",
              "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73",
            ],
            [
              "959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba",
              "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd",
            ],
            [
              "d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151",
              "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405",
            ],
            [
              "64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073",
              "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589",
            ],
            [
              "8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458",
              "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e",
            ],
            [
              "13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b",
              "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27",
            ],
            [
              "bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366",
              "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1",
            ],
            [
              "8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa",
              "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482",
            ],
            [
              "8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0",
              "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945",
            ],
            [
              "dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787",
              "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573",
            ],
            [
              "f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e",
              "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82",
            ],
          ],
        },
        naf: {
          wnd: 7,
          points: [
            [
              "f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9",
              "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672",
            ],
            [
              "2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4",
              "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6",
            ],
            [
              "5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc",
              "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da",
            ],
            [
              "acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe",
              "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37",
            ],
            [
              "774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb",
              "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b",
            ],
            [
              "f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8",
              "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81",
            ],
            [
              "d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e",
              "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58",
            ],
            [
              "defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34",
              "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77",
            ],
            [
              "2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c",
              "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a",
            ],
            [
              "352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5",
              "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c",
            ],
            [
              "2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f",
              "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67",
            ],
            [
              "9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714",
              "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402",
            ],
            [
              "daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729",
              "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55",
            ],
            [
              "c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db",
              "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482",
            ],
            [
              "6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4",
              "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82",
            ],
            [
              "1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5",
              "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396",
            ],
            [
              "605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479",
              "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49",
            ],
            [
              "62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d",
              "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf",
            ],
            [
              "80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f",
              "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a",
            ],
            [
              "7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb",
              "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7",
            ],
            [
              "d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9",
              "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933",
            ],
            [
              "49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963",
              "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a",
            ],
            [
              "77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74",
              "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6",
            ],
            [
              "f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530",
              "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37",
            ],
            [
              "463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b",
              "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e",
            ],
            [
              "f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247",
              "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6",
            ],
            [
              "caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1",
              "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476",
            ],
            [
              "2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120",
              "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40",
            ],
            [
              "7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435",
              "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61",
            ],
            [
              "754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18",
              "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683",
            ],
            [
              "e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8",
              "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5",
            ],
            [
              "186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb",
              "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b",
            ],
            [
              "df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f",
              "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417",
            ],
            [
              "5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143",
              "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868",
            ],
            [
              "290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba",
              "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a",
            ],
            [
              "af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45",
              "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6",
            ],
            [
              "766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a",
              "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996",
            ],
            [
              "59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e",
              "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e",
            ],
            [
              "f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8",
              "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d",
            ],
            [
              "7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c",
              "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2",
            ],
            [
              "948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519",
              "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e",
            ],
            [
              "7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab",
              "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437",
            ],
            [
              "3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca",
              "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311",
            ],
            [
              "d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf",
              "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4",
            ],
            [
              "1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610",
              "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575",
            ],
            [
              "733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4",
              "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d",
            ],
            [
              "15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c",
              "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d",
            ],
            [
              "a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940",
              "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629",
            ],
            [
              "e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980",
              "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06",
            ],
            [
              "311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3",
              "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374",
            ],
            [
              "34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf",
              "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee",
            ],
            [
              "f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63",
              "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1",
            ],
            [
              "d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448",
              "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b",
            ],
            [
              "32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf",
              "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661",
            ],
            [
              "7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5",
              "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6",
            ],
            [
              "ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6",
              "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e",
            ],
            [
              "16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5",
              "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d",
            ],
            [
              "eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99",
              "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc",
            ],
            [
              "78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51",
              "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4",
            ],
            [
              "494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5",
              "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c",
            ],
            [
              "a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5",
              "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b",
            ],
            [
              "c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997",
              "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913",
            ],
            [
              "841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881",
              "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154",
            ],
            [
              "5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5",
              "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865",
            ],
            [
              "36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66",
              "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc",
            ],
            [
              "336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726",
              "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224",
            ],
            [
              "8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede",
              "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e",
            ],
            [
              "1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94",
              "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6",
            ],
            [
              "85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31",
              "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511",
            ],
            [
              "29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51",
              "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b",
            ],
            [
              "a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252",
              "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2",
            ],
            [
              "4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5",
              "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c",
            ],
            [
              "d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b",
              "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3",
            ],
            [
              "ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4",
              "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d",
            ],
            [
              "af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f",
              "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700",
            ],
            [
              "e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889",
              "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4",
            ],
            [
              "591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246",
              "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196",
            ],
            [
              "11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984",
              "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4",
            ],
            [
              "3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a",
              "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257",
            ],
            [
              "cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030",
              "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13",
            ],
            [
              "c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197",
              "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096",
            ],
            [
              "c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593",
              "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38",
            ],
            [
              "a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef",
              "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f",
            ],
            [
              "347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38",
              "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448",
            ],
            [
              "da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a",
              "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a",
            ],
            [
              "c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111",
              "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4",
            ],
            [
              "4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502",
              "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437",
            ],
            [
              "3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea",
              "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7",
            ],
            [
              "cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26",
              "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d",
            ],
            [
              "b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986",
              "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a",
            ],
            [
              "d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e",
              "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54",
            ],
            [
              "48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4",
              "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77",
            ],
            [
              "dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda",
              "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517",
            ],
            [
              "6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859",
              "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10",
            ],
            [
              "e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f",
              "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125",
            ],
            [
              "eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c",
              "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e",
            ],
            [
              "13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942",
              "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1",
            ],
            [
              "ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a",
              "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2",
            ],
            [
              "b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80",
              "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423",
            ],
            [
              "ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d",
              "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8",
            ],
            [
              "8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1",
              "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758",
            ],
            [
              "52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63",
              "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375",
            ],
            [
              "e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352",
              "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d",
            ],
            [
              "7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193",
              "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec",
            ],
            [
              "5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00",
              "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0",
            ],
            [
              "32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58",
              "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c",
            ],
            [
              "e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7",
              "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4",
            ],
            [
              "8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8",
              "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f",
            ],
            [
              "4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e",
              "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649",
            ],
            [
              "3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d",
              "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826",
            ],
            [
              "674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b",
              "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5",
            ],
            [
              "d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f",
              "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87",
            ],
            [
              "30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6",
              "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b",
            ],
            [
              "be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297",
              "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc",
            ],
            [
              "93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a",
              "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c",
            ],
            [
              "b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c",
              "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f",
            ],
            [
              "d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52",
              "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a",
            ],
            [
              "d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb",
              "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46",
            ],
            [
              "463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065",
              "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f",
            ],
            [
              "7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917",
              "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03",
            ],
            [
              "74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9",
              "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08",
            ],
            [
              "30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3",
              "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8",
            ],
            [
              "9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57",
              "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373",
            ],
            [
              "176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66",
              "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3",
            ],
            [
              "75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8",
              "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8",
            ],
            [
              "809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721",
              "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1",
            ],
            [
              "1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180",
              "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9",
            ],
          ],
        },
      };
    },
    953: function (t, e, r) {
      "use strict";
      var n = e,
        i = r(3785),
        o = r(9746),
        a = r(4504);
      (n.assert = o),
        (n.toArray = a.toArray),
        (n.zero2 = a.zero2),
        (n.toHex = a.toHex),
        (n.encode = a.encode),
        (n.getNAF = function (t, e, r) {
          var n = Array(Math.max(t.bitLength(), r) + 1);
          n.fill(0);
          for (var i = 1 << (e + 1), o = t.clone(), a = 0; a < n.length; a++) {
            var s,
              f = o.andln(i - 1);
            o.isOdd()
              ? ((s = f > (i >> 1) - 1 ? (i >> 1) - f : f), o.isubn(s))
              : (s = 0),
              (n[a] = s),
              o.iushrn(1);
          }
          return n;
        }),
        (n.getJSF = function (t, e) {
          var r = [[], []];
          (t = t.clone()), (e = e.clone());
          for (var n = 0, i = 0; t.cmpn(-n) > 0 || e.cmpn(-i) > 0; ) {
            var o,
              a,
              s,
              f = (t.andln(3) + n) & 3,
              u = (e.andln(3) + i) & 3;
            3 === f && (f = -1),
              3 === u && (u = -1),
              (a =
                (1 & f) == 0
                  ? 0
                  : (3 == (o = (t.andln(7) + n) & 7) || 5 === o) && 2 === u
                  ? -f
                  : f),
              r[0].push(a),
              (s =
                (1 & u) == 0
                  ? 0
                  : (3 == (o = (e.andln(7) + i) & 7) || 5 === o) && 2 === f
                  ? -u
                  : u),
              r[1].push(s),
              2 * n === a + 1 && (n = 1 - n),
              2 * i === s + 1 && (i = 1 - i),
              t.iushrn(1),
              e.iushrn(1);
          }
          return r;
        }),
        (n.cachedProperty = function (t, e, r) {
          var n = "_" + e;
          t.prototype[e] = function () {
            return void 0 !== this[n] ? this[n] : (this[n] = r.call(this));
          };
        }),
        (n.parseBytes = function (t) {
          return "string" == typeof t ? n.toArray(t, "hex") : t;
        }),
        (n.intFromLE = function (t) {
          return new i(t, "hex", "le");
        });
    },
    3785: function (t, e, r) {
      !(function (t, e) {
        "use strict";
        function n(t, e) {
          if (!t) throw Error(e || "Assertion failed");
        }
        function i(t, e) {
          t.super_ = e;
          var r = function () {};
          (r.prototype = e.prototype),
            (t.prototype = new r()),
            (t.prototype.constructor = t);
        }
        function o(t, e, r) {
          if (o.isBN(t)) return t;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== t &&
              (("le" === e || "be" === e) && ((r = e), (e = 10)),
              this._init(t || 0, e || 10, r || "be"));
        }
        "object" == typeof t ? (t.exports = o) : (e.BN = o),
          (o.BN = o),
          (o.wordSize = 26);
        try {
          u =
            "undefined" != typeof window && void 0 !== window.Buffer
              ? window.Buffer
              : r(5568).Buffer;
        } catch (t) {}
        function a(t, e) {
          var r = t.charCodeAt(e);
          return r >= 65 && r <= 70
            ? r - 55
            : r >= 97 && r <= 102
            ? r - 87
            : (r - 48) & 15;
        }
        function s(t, e, r) {
          var n = a(t, r);
          return r - 1 >= e && (n |= a(t, r - 1) << 4), n;
        }
        function f(t, e, r, n) {
          for (var i = 0, o = Math.min(t.length, r), a = e; a < o; a++) {
            var s = t.charCodeAt(a) - 48;
            (i *= n),
              s >= 49
                ? (i += s - 49 + 10)
                : s >= 17
                ? (i += s - 17 + 10)
                : (i += s);
          }
          return i;
        }
        (o.isBN = function (t) {
          return (
            t instanceof o ||
            (null !== t &&
              "object" == typeof t &&
              t.constructor.wordSize === o.wordSize &&
              Array.isArray(t.words))
          );
        }),
          (o.max = function (t, e) {
            return t.cmp(e) > 0 ? t : e;
          }),
          (o.min = function (t, e) {
            return 0 > t.cmp(e) ? t : e;
          }),
          (o.prototype._init = function (t, e, r) {
            if ("number" == typeof t) return this._initNumber(t, e, r);
            if ("object" == typeof t) return this._initArray(t, e, r);
            "hex" === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36);
            var i = 0;
            "-" === (t = t.toString().replace(/\s+/g, ""))[0] &&
              (i++, (this.negative = 1)),
              i < t.length &&
                (16 === e
                  ? this._parseHex(t, i, r)
                  : (this._parseBase(t, e, i),
                    "le" === r && this._initArray(this.toArray(), e, r)));
          }),
          (o.prototype._initNumber = function (t, e, r) {
            t < 0 && ((this.negative = 1), (t = -t)),
              t < 67108864
                ? ((this.words = [67108863 & t]), (this.length = 1))
                : t < 4503599627370496
                ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                  (this.length = 2))
                : (n(t < 9007199254740992),
                  (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                  (this.length = 3)),
              "le" === r && this._initArray(this.toArray(), e, r);
          }),
          (o.prototype._initArray = function (t, e, r) {
            if ((n("number" == typeof t.length), t.length <= 0))
              return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(t.length / 3)),
              (this.words = Array(this.length));
            for (var i, o, a = 0; a < this.length; a++) this.words[a] = 0;
            var s = 0;
            if ("be" === r)
              for (a = t.length - 1, i = 0; a >= 0; a -= 3)
                (o = t[a] | (t[a - 1] << 8) | (t[a - 2] << 16)),
                  (this.words[i] |= (o << s) & 67108863),
                  (this.words[i + 1] = (o >>> (26 - s)) & 67108863),
                  (s += 24) >= 26 && ((s -= 26), i++);
            else if ("le" === r)
              for (a = 0, i = 0; a < t.length; a += 3)
                (o = t[a] | (t[a + 1] << 8) | (t[a + 2] << 16)),
                  (this.words[i] |= (o << s) & 67108863),
                  (this.words[i + 1] = (o >>> (26 - s)) & 67108863),
                  (s += 24) >= 26 && ((s -= 26), i++);
            return this.strip();
          }),
          (o.prototype._parseHex = function (t, e, r) {
            (this.length = Math.ceil((t.length - e) / 6)),
              (this.words = Array(this.length));
            for (var n, i = 0; i < this.length; i++) this.words[i] = 0;
            var o = 0,
              a = 0;
            if ("be" === r)
              for (i = t.length - 1; i >= e; i -= 2)
                (n = s(t, e, i) << o),
                  (this.words[a] |= 67108863 & n),
                  o >= 18
                    ? ((o -= 18), (a += 1), (this.words[a] |= n >>> 26))
                    : (o += 8);
            else
              for (
                i = (t.length - e) % 2 == 0 ? e + 1 : e;
                i < t.length;
                i += 2
              )
                (n = s(t, e, i) << o),
                  (this.words[a] |= 67108863 & n),
                  o >= 18
                    ? ((o -= 18), (a += 1), (this.words[a] |= n >>> 26))
                    : (o += 8);
            this.strip();
          }),
          (o.prototype._parseBase = function (t, e, r) {
            (this.words = [0]), (this.length = 1);
            for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
            n--, (i = (i / e) | 0);
            for (
              var o = t.length - r,
                a = o % n,
                s = Math.min(o, o - a) + r,
                u = 0,
                h = r;
              h < s;
              h += n
            )
              (u = f(t, h, h + n, e)),
                this.imuln(i),
                this.words[0] + u < 67108864
                  ? (this.words[0] += u)
                  : this._iaddn(u);
            if (0 !== a) {
              var c = 1;
              for (u = f(t, h, t.length, e), h = 0; h < a; h++) c *= e;
              this.imuln(c),
                this.words[0] + u < 67108864
                  ? (this.words[0] += u)
                  : this._iaddn(u);
            }
            this.strip();
          }),
          (o.prototype.copy = function (t) {
            t.words = Array(this.length);
            for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
            (t.length = this.length),
              (t.negative = this.negative),
              (t.red = this.red);
          }),
          (o.prototype.clone = function () {
            var t = new o(null);
            return this.copy(t), t;
          }),
          (o.prototype._expand = function (t) {
            for (; this.length < t; ) this.words[this.length++] = 0;
            return this;
          }),
          (o.prototype.strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--;
            return this._normSign();
          }),
          (o.prototype._normSign = function () {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            );
          }),
          (o.prototype.inspect = function () {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          });
        var u,
          h = [
            "",
            "0",
            "00",
            "000",
            "0000",
            "00000",
            "000000",
            "0000000",
            "00000000",
            "000000000",
            "0000000000",
            "00000000000",
            "000000000000",
            "0000000000000",
            "00000000000000",
            "000000000000000",
            "0000000000000000",
            "00000000000000000",
            "000000000000000000",
            "0000000000000000000",
            "00000000000000000000",
            "000000000000000000000",
            "0000000000000000000000",
            "00000000000000000000000",
            "000000000000000000000000",
            "0000000000000000000000000",
          ],
          c = [
            0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
          ],
          l = [
            0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
            16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
            11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
            5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
            20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
            60466176,
          ];
        function d(t, e, r) {
          r.negative = e.negative ^ t.negative;
          var n = (t.length + e.length) | 0;
          (r.length = n), (n = (n - 1) | 0);
          var i = 0 | t.words[0],
            o = 0 | e.words[0],
            a = i * o,
            s = 67108863 & a,
            f = (a / 67108864) | 0;
          r.words[0] = s;
          for (var u = 1; u < n; u++) {
            for (
              var h = f >>> 26,
                c = 67108863 & f,
                l = Math.min(u, e.length - 1),
                d = Math.max(0, u - t.length + 1);
              d <= l;
              d++
            ) {
              var p = (u - d) | 0;
              (h +=
                ((a = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + c) /
                  67108864) |
                0),
                (c = 67108863 & a);
            }
            (r.words[u] = 0 | c), (f = 0 | h);
          }
          return 0 !== f ? (r.words[u] = 0 | f) : r.length--, r.strip();
        }
        (o.prototype.toString = function (t, e) {
          if (((e = 0 | e || 1), 16 === (t = t || 10) || "hex" === t)) {
            r = "";
            for (var r, i = 0, o = 0, a = 0; a < this.length; a++) {
              var s = this.words[a],
                f = (((s << i) | o) & 16777215).toString(16);
              (r =
                0 != (o = (s >>> (24 - i)) & 16777215) || a !== this.length - 1
                  ? h[6 - f.length] + f + r
                  : f + r),
                (i += 2) >= 26 && ((i -= 26), a--);
            }
            for (0 !== o && (r = o.toString(16) + r); r.length % e != 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          if (t === (0 | t) && t >= 2 && t <= 36) {
            var u = c[t],
              d = l[t];
            r = "";
            var p = this.clone();
            for (p.negative = 0; !p.isZero(); ) {
              var b = p.modn(d).toString(t);
              r = (p = p.idivn(d)).isZero() ? b + r : h[u - b.length] + b + r;
            }
            for (this.isZero() && (r = "0" + r); r.length % e != 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          n(!1, "Base should be between 2 and 36");
        }),
          (o.prototype.toNumber = function () {
            var t = this.words[0];
            return (
              2 === this.length
                ? (t += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (t += 4503599627370496 + 67108864 * this.words[1])
                : this.length > 2 &&
                  n(!1, "Number can only safely store up to 53 bits"),
              0 !== this.negative ? -t : t
            );
          }),
          (o.prototype.toJSON = function () {
            return this.toString(16);
          }),
          (o.prototype.toBuffer = function (t, e) {
            return n(void 0 !== u), this.toArrayLike(u, t, e);
          }),
          (o.prototype.toArray = function (t, e) {
            return this.toArrayLike(Array, t, e);
          }),
          (o.prototype.toArrayLike = function (t, e, r) {
            var i,
              o,
              a = this.byteLength(),
              s = r || Math.max(1, a);
            n(a <= s, "byte array longer than desired length"),
              n(s > 0, "Requested array length <= 0"),
              this.strip();
            var f = new t(s),
              u = this.clone();
            if ("le" === e) {
              for (o = 0; !u.isZero(); o++)
                (i = u.andln(255)), u.iushrn(8), (f[o] = i);
              for (; o < s; o++) f[o] = 0;
            } else {
              for (o = 0; o < s - a; o++) f[o] = 0;
              for (o = 0; !u.isZero(); o++)
                (i = u.andln(255)), u.iushrn(8), (f[s - o - 1] = i);
            }
            return f;
          }),
          Math.clz32
            ? (o.prototype._countBits = function (t) {
                return 32 - Math.clz32(t);
              })
            : (o.prototype._countBits = function (t) {
                var e = t,
                  r = 0;
                return (
                  e >= 4096 && ((r += 13), (e >>>= 13)),
                  e >= 64 && ((r += 7), (e >>>= 7)),
                  e >= 8 && ((r += 4), (e >>>= 4)),
                  e >= 2 && ((r += 2), (e >>>= 2)),
                  r + e
                );
              }),
          (o.prototype._zeroBits = function (t) {
            if (0 === t) return 26;
            var e = t,
              r = 0;
            return (
              (8191 & e) == 0 && ((r += 13), (e >>>= 13)),
              (127 & e) == 0 && ((r += 7), (e >>>= 7)),
              (15 & e) == 0 && ((r += 4), (e >>>= 4)),
              (3 & e) == 0 && ((r += 2), (e >>>= 2)),
              (1 & e) == 0 && r++,
              r
            );
          }),
          (o.prototype.bitLength = function () {
            var t = this.words[this.length - 1],
              e = this._countBits(t);
            return (this.length - 1) * 26 + e;
          }),
          (o.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var t = 0, e = 0; e < this.length; e++) {
              var r = this._zeroBits(this.words[e]);
              if (((t += r), 26 !== r)) break;
            }
            return t;
          }),
          (o.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }),
          (o.prototype.toTwos = function (t) {
            return 0 !== this.negative
              ? this.abs().inotn(t).iaddn(1)
              : this.clone();
          }),
          (o.prototype.fromTwos = function (t) {
            return this.testn(t - 1)
              ? this.notn(t).iaddn(1).ineg()
              : this.clone();
          }),
          (o.prototype.isNeg = function () {
            return 0 !== this.negative;
          }),
          (o.prototype.neg = function () {
            return this.clone().ineg();
          }),
          (o.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
          }),
          (o.prototype.iuor = function (t) {
            for (; this.length < t.length; ) this.words[this.length++] = 0;
            for (var e = 0; e < t.length; e++)
              this.words[e] = this.words[e] | t.words[e];
            return this.strip();
          }),
          (o.prototype.ior = function (t) {
            return n((this.negative | t.negative) == 0), this.iuor(t);
          }),
          (o.prototype.or = function (t) {
            return this.length > t.length
              ? this.clone().ior(t)
              : t.clone().ior(this);
          }),
          (o.prototype.uor = function (t) {
            return this.length > t.length
              ? this.clone().iuor(t)
              : t.clone().iuor(this);
          }),
          (o.prototype.iuand = function (t) {
            var e;
            e = this.length > t.length ? t : this;
            for (var r = 0; r < e.length; r++)
              this.words[r] = this.words[r] & t.words[r];
            return (this.length = e.length), this.strip();
          }),
          (o.prototype.iand = function (t) {
            return n((this.negative | t.negative) == 0), this.iuand(t);
          }),
          (o.prototype.and = function (t) {
            return this.length > t.length
              ? this.clone().iand(t)
              : t.clone().iand(this);
          }),
          (o.prototype.uand = function (t) {
            return this.length > t.length
              ? this.clone().iuand(t)
              : t.clone().iuand(this);
          }),
          (o.prototype.iuxor = function (t) {
            this.length > t.length
              ? ((e = this), (r = t))
              : ((e = t), (r = this));
            for (var e, r, n = 0; n < r.length; n++)
              this.words[n] = e.words[n] ^ r.words[n];
            if (this !== e)
              for (; n < e.length; n++) this.words[n] = e.words[n];
            return (this.length = e.length), this.strip();
          }),
          (o.prototype.ixor = function (t) {
            return n((this.negative | t.negative) == 0), this.iuxor(t);
          }),
          (o.prototype.xor = function (t) {
            return this.length > t.length
              ? this.clone().ixor(t)
              : t.clone().ixor(this);
          }),
          (o.prototype.uxor = function (t) {
            return this.length > t.length
              ? this.clone().iuxor(t)
              : t.clone().iuxor(this);
          }),
          (o.prototype.inotn = function (t) {
            n("number" == typeof t && t >= 0);
            var e = 0 | Math.ceil(t / 26),
              r = t % 26;
            this._expand(e), r > 0 && e--;
            for (var i = 0; i < e; i++)
              this.words[i] = 67108863 & ~this.words[i];
            return (
              r > 0 &&
                (this.words[i] = ~this.words[i] & (67108863 >> (26 - r))),
              this.strip()
            );
          }),
          (o.prototype.notn = function (t) {
            return this.clone().inotn(t);
          }),
          (o.prototype.setn = function (t, e) {
            n("number" == typeof t && t >= 0);
            var r = (t / 26) | 0,
              i = t % 26;
            return (
              this._expand(r + 1),
              e
                ? (this.words[r] = this.words[r] | (1 << i))
                : (this.words[r] = this.words[r] & ~(1 << i)),
              this.strip()
            );
          }),
          (o.prototype.iadd = function (t) {
            if (0 !== this.negative && 0 === t.negative)
              return (
                (this.negative = 0),
                (e = this.isub(t)),
                (this.negative ^= 1),
                this._normSign()
              );
            if (0 === this.negative && 0 !== t.negative)
              return (
                (t.negative = 0),
                (e = this.isub(t)),
                (t.negative = 1),
                e._normSign()
              );
            this.length > t.length
              ? ((r = this), (n = t))
              : ((r = t), (n = this));
            for (var e, r, n, i = 0, o = 0; o < n.length; o++)
              (e = (0 | r.words[o]) + (0 | n.words[o]) + i),
                (this.words[o] = 67108863 & e),
                (i = e >>> 26);
            for (; 0 !== i && o < r.length; o++)
              (e = (0 | r.words[o]) + i),
                (this.words[o] = 67108863 & e),
                (i = e >>> 26);
            if (((this.length = r.length), 0 !== i))
              (this.words[this.length] = i), this.length++;
            else if (r !== this)
              for (; o < r.length; o++) this.words[o] = r.words[o];
            return this;
          }),
          (o.prototype.add = function (t) {
            var e;
            return 0 !== t.negative && 0 === this.negative
              ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
              : 0 === t.negative && 0 !== this.negative
              ? ((this.negative = 0), (e = t.sub(this)), (this.negative = 1), e)
              : this.length > t.length
              ? this.clone().iadd(t)
              : t.clone().iadd(this);
          }),
          (o.prototype.isub = function (t) {
            if (0 !== t.negative) {
              t.negative = 0;
              var e,
                r,
                n = this.iadd(t);
              return (t.negative = 1), n._normSign();
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(t),
                (this.negative = 1),
                this._normSign()
              );
            var i = this.cmp(t);
            if (0 === i)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              );
            i > 0 ? ((e = this), (r = t)) : ((e = t), (r = this));
            for (var o = 0, a = 0; a < r.length; a++)
              (o = (n = (0 | e.words[a]) - (0 | r.words[a]) + o) >> 26),
                (this.words[a] = 67108863 & n);
            for (; 0 !== o && a < e.length; a++)
              (o = (n = (0 | e.words[a]) + o) >> 26),
                (this.words[a] = 67108863 & n);
            if (0 === o && a < e.length && e !== this)
              for (; a < e.length; a++) this.words[a] = e.words[a];
            return (
              (this.length = Math.max(this.length, a)),
              e !== this && (this.negative = 1),
              this.strip()
            );
          }),
          (o.prototype.sub = function (t) {
            return this.clone().isub(t);
          });
        var p = function (t, e, r) {
          var n,
            i,
            o,
            a = t.words,
            s = e.words,
            f = r.words,
            u = 0,
            h = 0 | a[0],
            c = 8191 & h,
            l = h >>> 13,
            d = 0 | a[1],
            p = 8191 & d,
            b = d >>> 13,
            y = 0 | a[2],
            m = 8191 & y,
            g = y >>> 13,
            v = 0 | a[3],
            w = 8191 & v,
            M = v >>> 13,
            _ = 0 | a[4],
            S = 8191 & _,
            A = _ >>> 13,
            E = 0 | a[5],
            x = 8191 & E,
            O = E >>> 13,
            k = 0 | a[6],
            R = 8191 & k,
            P = k >>> 13,
            j = 0 | a[7],
            I = 8191 & j,
            T = j >>> 13,
            B = 0 | a[8],
            N = 8191 & B,
            L = B >>> 13,
            C = 0 | a[9],
            q = 8191 & C,
            U = C >>> 13,
            F = 0 | s[0],
            D = 8191 & F,
            z = F >>> 13,
            H = 0 | s[1],
            W = 8191 & H,
            K = H >>> 13,
            V = 0 | s[2],
            Z = 8191 & V,
            G = V >>> 13,
            $ = 0 | s[3],
            J = 8191 & $,
            Y = $ >>> 13,
            X = 0 | s[4],
            Q = 8191 & X,
            tt = X >>> 13,
            te = 0 | s[5],
            tr = 8191 & te,
            tn = te >>> 13,
            ti = 0 | s[6],
            to = 8191 & ti,
            ta = ti >>> 13,
            ts = 0 | s[7],
            tf = 8191 & ts,
            tu = ts >>> 13,
            th = 0 | s[8],
            tc = 8191 & th,
            tl = th >>> 13,
            td = 0 | s[9],
            tp = 8191 & td,
            tb = td >>> 13;
          (r.negative = t.negative ^ e.negative), (r.length = 19);
          var ty =
            (((u + (n = Math.imul(c, D))) | 0) +
              ((8191 & (i = ((i = Math.imul(c, z)) + Math.imul(l, D)) | 0)) <<
                13)) |
            0;
          (u = ((((o = Math.imul(l, z)) + (i >>> 13)) | 0) + (ty >>> 26)) | 0),
            (ty &= 67108863),
            (n = Math.imul(p, D)),
            (i = ((i = Math.imul(p, z)) + Math.imul(b, D)) | 0),
            (o = Math.imul(b, z));
          var tm =
            (((u + (n = (n + Math.imul(c, W)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, K)) | 0) + Math.imul(l, W)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(l, K)) | 0) + (i >>> 13)) | 0) +
              (tm >>> 26)) |
            0),
            (tm &= 67108863),
            (n = Math.imul(m, D)),
            (i = ((i = Math.imul(m, z)) + Math.imul(g, D)) | 0),
            (o = Math.imul(g, z)),
            (n = (n + Math.imul(p, W)) | 0),
            (i = ((i = (i + Math.imul(p, K)) | 0) + Math.imul(b, W)) | 0),
            (o = (o + Math.imul(b, K)) | 0);
          var tg =
            (((u + (n = (n + Math.imul(c, Z)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, G)) | 0) + Math.imul(l, Z)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(l, G)) | 0) + (i >>> 13)) | 0) +
              (tg >>> 26)) |
            0),
            (tg &= 67108863),
            (n = Math.imul(w, D)),
            (i = ((i = Math.imul(w, z)) + Math.imul(M, D)) | 0),
            (o = Math.imul(M, z)),
            (n = (n + Math.imul(m, W)) | 0),
            (i = ((i = (i + Math.imul(m, K)) | 0) + Math.imul(g, W)) | 0),
            (o = (o + Math.imul(g, K)) | 0),
            (n = (n + Math.imul(p, Z)) | 0),
            (i = ((i = (i + Math.imul(p, G)) | 0) + Math.imul(b, Z)) | 0),
            (o = (o + Math.imul(b, G)) | 0);
          var tv =
            (((u + (n = (n + Math.imul(c, J)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, Y)) | 0) + Math.imul(l, J)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(l, Y)) | 0) + (i >>> 13)) | 0) +
              (tv >>> 26)) |
            0),
            (tv &= 67108863),
            (n = Math.imul(S, D)),
            (i = ((i = Math.imul(S, z)) + Math.imul(A, D)) | 0),
            (o = Math.imul(A, z)),
            (n = (n + Math.imul(w, W)) | 0),
            (i = ((i = (i + Math.imul(w, K)) | 0) + Math.imul(M, W)) | 0),
            (o = (o + Math.imul(M, K)) | 0),
            (n = (n + Math.imul(m, Z)) | 0),
            (i = ((i = (i + Math.imul(m, G)) | 0) + Math.imul(g, Z)) | 0),
            (o = (o + Math.imul(g, G)) | 0),
            (n = (n + Math.imul(p, J)) | 0),
            (i = ((i = (i + Math.imul(p, Y)) | 0) + Math.imul(b, J)) | 0),
            (o = (o + Math.imul(b, Y)) | 0);
          var tw =
            (((u + (n = (n + Math.imul(c, Q)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, tt)) | 0) + Math.imul(l, Q)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(l, tt)) | 0) + (i >>> 13)) | 0) +
              (tw >>> 26)) |
            0),
            (tw &= 67108863),
            (n = Math.imul(x, D)),
            (i = ((i = Math.imul(x, z)) + Math.imul(O, D)) | 0),
            (o = Math.imul(O, z)),
            (n = (n + Math.imul(S, W)) | 0),
            (i = ((i = (i + Math.imul(S, K)) | 0) + Math.imul(A, W)) | 0),
            (o = (o + Math.imul(A, K)) | 0),
            (n = (n + Math.imul(w, Z)) | 0),
            (i = ((i = (i + Math.imul(w, G)) | 0) + Math.imul(M, Z)) | 0),
            (o = (o + Math.imul(M, G)) | 0),
            (n = (n + Math.imul(m, J)) | 0),
            (i = ((i = (i + Math.imul(m, Y)) | 0) + Math.imul(g, J)) | 0),
            (o = (o + Math.imul(g, Y)) | 0),
            (n = (n + Math.imul(p, Q)) | 0),
            (i = ((i = (i + Math.imul(p, tt)) | 0) + Math.imul(b, Q)) | 0),
            (o = (o + Math.imul(b, tt)) | 0);
          var tM =
            (((u + (n = (n + Math.imul(c, tr)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, tn)) | 0) + Math.imul(l, tr)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(l, tn)) | 0) + (i >>> 13)) | 0) +
              (tM >>> 26)) |
            0),
            (tM &= 67108863),
            (n = Math.imul(R, D)),
            (i = ((i = Math.imul(R, z)) + Math.imul(P, D)) | 0),
            (o = Math.imul(P, z)),
            (n = (n + Math.imul(x, W)) | 0),
            (i = ((i = (i + Math.imul(x, K)) | 0) + Math.imul(O, W)) | 0),
            (o = (o + Math.imul(O, K)) | 0),
            (n = (n + Math.imul(S, Z)) | 0),
            (i = ((i = (i + Math.imul(S, G)) | 0) + Math.imul(A, Z)) | 0),
            (o = (o + Math.imul(A, G)) | 0),
            (n = (n + Math.imul(w, J)) | 0),
            (i = ((i = (i + Math.imul(w, Y)) | 0) + Math.imul(M, J)) | 0),
            (o = (o + Math.imul(M, Y)) | 0),
            (n = (n + Math.imul(m, Q)) | 0),
            (i = ((i = (i + Math.imul(m, tt)) | 0) + Math.imul(g, Q)) | 0),
            (o = (o + Math.imul(g, tt)) | 0),
            (n = (n + Math.imul(p, tr)) | 0),
            (i = ((i = (i + Math.imul(p, tn)) | 0) + Math.imul(b, tr)) | 0),
            (o = (o + Math.imul(b, tn)) | 0);
          var t_ =
            (((u + (n = (n + Math.imul(c, to)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, ta)) | 0) + Math.imul(l, to)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(l, ta)) | 0) + (i >>> 13)) | 0) +
              (t_ >>> 26)) |
            0),
            (t_ &= 67108863),
            (n = Math.imul(I, D)),
            (i = ((i = Math.imul(I, z)) + Math.imul(T, D)) | 0),
            (o = Math.imul(T, z)),
            (n = (n + Math.imul(R, W)) | 0),
            (i = ((i = (i + Math.imul(R, K)) | 0) + Math.imul(P, W)) | 0),
            (o = (o + Math.imul(P, K)) | 0),
            (n = (n + Math.imul(x, Z)) | 0),
            (i = ((i = (i + Math.imul(x, G)) | 0) + Math.imul(O, Z)) | 0),
            (o = (o + Math.imul(O, G)) | 0),
            (n = (n + Math.imul(S, J)) | 0),
            (i = ((i = (i + Math.imul(S, Y)) | 0) + Math.imul(A, J)) | 0),
            (o = (o + Math.imul(A, Y)) | 0),
            (n = (n + Math.imul(w, Q)) | 0),
            (i = ((i = (i + Math.imul(w, tt)) | 0) + Math.imul(M, Q)) | 0),
            (o = (o + Math.imul(M, tt)) | 0),
            (n = (n + Math.imul(m, tr)) | 0),
            (i = ((i = (i + Math.imul(m, tn)) | 0) + Math.imul(g, tr)) | 0),
            (o = (o + Math.imul(g, tn)) | 0),
            (n = (n + Math.imul(p, to)) | 0),
            (i = ((i = (i + Math.imul(p, ta)) | 0) + Math.imul(b, to)) | 0),
            (o = (o + Math.imul(b, ta)) | 0);
          var tS =
            (((u + (n = (n + Math.imul(c, tf)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, tu)) | 0) + Math.imul(l, tf)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(l, tu)) | 0) + (i >>> 13)) | 0) +
              (tS >>> 26)) |
            0),
            (tS &= 67108863),
            (n = Math.imul(N, D)),
            (i = ((i = Math.imul(N, z)) + Math.imul(L, D)) | 0),
            (o = Math.imul(L, z)),
            (n = (n + Math.imul(I, W)) | 0),
            (i = ((i = (i + Math.imul(I, K)) | 0) + Math.imul(T, W)) | 0),
            (o = (o + Math.imul(T, K)) | 0),
            (n = (n + Math.imul(R, Z)) | 0),
            (i = ((i = (i + Math.imul(R, G)) | 0) + Math.imul(P, Z)) | 0),
            (o = (o + Math.imul(P, G)) | 0),
            (n = (n + Math.imul(x, J)) | 0),
            (i = ((i = (i + Math.imul(x, Y)) | 0) + Math.imul(O, J)) | 0),
            (o = (o + Math.imul(O, Y)) | 0),
            (n = (n + Math.imul(S, Q)) | 0),
            (i = ((i = (i + Math.imul(S, tt)) | 0) + Math.imul(A, Q)) | 0),
            (o = (o + Math.imul(A, tt)) | 0),
            (n = (n + Math.imul(w, tr)) | 0),
            (i = ((i = (i + Math.imul(w, tn)) | 0) + Math.imul(M, tr)) | 0),
            (o = (o + Math.imul(M, tn)) | 0),
            (n = (n + Math.imul(m, to)) | 0),
            (i = ((i = (i + Math.imul(m, ta)) | 0) + Math.imul(g, to)) | 0),
            (o = (o + Math.imul(g, ta)) | 0),
            (n = (n + Math.imul(p, tf)) | 0),
            (i = ((i = (i + Math.imul(p, tu)) | 0) + Math.imul(b, tf)) | 0),
            (o = (o + Math.imul(b, tu)) | 0);
          var tA =
            (((u + (n = (n + Math.imul(c, tc)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, tl)) | 0) + Math.imul(l, tc)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(l, tl)) | 0) + (i >>> 13)) | 0) +
              (tA >>> 26)) |
            0),
            (tA &= 67108863),
            (n = Math.imul(q, D)),
            (i = ((i = Math.imul(q, z)) + Math.imul(U, D)) | 0),
            (o = Math.imul(U, z)),
            (n = (n + Math.imul(N, W)) | 0),
            (i = ((i = (i + Math.imul(N, K)) | 0) + Math.imul(L, W)) | 0),
            (o = (o + Math.imul(L, K)) | 0),
            (n = (n + Math.imul(I, Z)) | 0),
            (i = ((i = (i + Math.imul(I, G)) | 0) + Math.imul(T, Z)) | 0),
            (o = (o + Math.imul(T, G)) | 0),
            (n = (n + Math.imul(R, J)) | 0),
            (i = ((i = (i + Math.imul(R, Y)) | 0) + Math.imul(P, J)) | 0),
            (o = (o + Math.imul(P, Y)) | 0),
            (n = (n + Math.imul(x, Q)) | 0),
            (i = ((i = (i + Math.imul(x, tt)) | 0) + Math.imul(O, Q)) | 0),
            (o = (o + Math.imul(O, tt)) | 0),
            (n = (n + Math.imul(S, tr)) | 0),
            (i = ((i = (i + Math.imul(S, tn)) | 0) + Math.imul(A, tr)) | 0),
            (o = (o + Math.imul(A, tn)) | 0),
            (n = (n + Math.imul(w, to)) | 0),
            (i = ((i = (i + Math.imul(w, ta)) | 0) + Math.imul(M, to)) | 0),
            (o = (o + Math.imul(M, ta)) | 0),
            (n = (n + Math.imul(m, tf)) | 0),
            (i = ((i = (i + Math.imul(m, tu)) | 0) + Math.imul(g, tf)) | 0),
            (o = (o + Math.imul(g, tu)) | 0),
            (n = (n + Math.imul(p, tc)) | 0),
            (i = ((i = (i + Math.imul(p, tl)) | 0) + Math.imul(b, tc)) | 0),
            (o = (o + Math.imul(b, tl)) | 0);
          var tE =
            (((u + (n = (n + Math.imul(c, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, tb)) | 0) + Math.imul(l, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(l, tb)) | 0) + (i >>> 13)) | 0) +
              (tE >>> 26)) |
            0),
            (tE &= 67108863),
            (n = Math.imul(q, W)),
            (i = ((i = Math.imul(q, K)) + Math.imul(U, W)) | 0),
            (o = Math.imul(U, K)),
            (n = (n + Math.imul(N, Z)) | 0),
            (i = ((i = (i + Math.imul(N, G)) | 0) + Math.imul(L, Z)) | 0),
            (o = (o + Math.imul(L, G)) | 0),
            (n = (n + Math.imul(I, J)) | 0),
            (i = ((i = (i + Math.imul(I, Y)) | 0) + Math.imul(T, J)) | 0),
            (o = (o + Math.imul(T, Y)) | 0),
            (n = (n + Math.imul(R, Q)) | 0),
            (i = ((i = (i + Math.imul(R, tt)) | 0) + Math.imul(P, Q)) | 0),
            (o = (o + Math.imul(P, tt)) | 0),
            (n = (n + Math.imul(x, tr)) | 0),
            (i = ((i = (i + Math.imul(x, tn)) | 0) + Math.imul(O, tr)) | 0),
            (o = (o + Math.imul(O, tn)) | 0),
            (n = (n + Math.imul(S, to)) | 0),
            (i = ((i = (i + Math.imul(S, ta)) | 0) + Math.imul(A, to)) | 0),
            (o = (o + Math.imul(A, ta)) | 0),
            (n = (n + Math.imul(w, tf)) | 0),
            (i = ((i = (i + Math.imul(w, tu)) | 0) + Math.imul(M, tf)) | 0),
            (o = (o + Math.imul(M, tu)) | 0),
            (n = (n + Math.imul(m, tc)) | 0),
            (i = ((i = (i + Math.imul(m, tl)) | 0) + Math.imul(g, tc)) | 0),
            (o = (o + Math.imul(g, tl)) | 0);
          var tx =
            (((u + (n = (n + Math.imul(p, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(p, tb)) | 0) + Math.imul(b, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(b, tb)) | 0) + (i >>> 13)) | 0) +
              (tx >>> 26)) |
            0),
            (tx &= 67108863),
            (n = Math.imul(q, Z)),
            (i = ((i = Math.imul(q, G)) + Math.imul(U, Z)) | 0),
            (o = Math.imul(U, G)),
            (n = (n + Math.imul(N, J)) | 0),
            (i = ((i = (i + Math.imul(N, Y)) | 0) + Math.imul(L, J)) | 0),
            (o = (o + Math.imul(L, Y)) | 0),
            (n = (n + Math.imul(I, Q)) | 0),
            (i = ((i = (i + Math.imul(I, tt)) | 0) + Math.imul(T, Q)) | 0),
            (o = (o + Math.imul(T, tt)) | 0),
            (n = (n + Math.imul(R, tr)) | 0),
            (i = ((i = (i + Math.imul(R, tn)) | 0) + Math.imul(P, tr)) | 0),
            (o = (o + Math.imul(P, tn)) | 0),
            (n = (n + Math.imul(x, to)) | 0),
            (i = ((i = (i + Math.imul(x, ta)) | 0) + Math.imul(O, to)) | 0),
            (o = (o + Math.imul(O, ta)) | 0),
            (n = (n + Math.imul(S, tf)) | 0),
            (i = ((i = (i + Math.imul(S, tu)) | 0) + Math.imul(A, tf)) | 0),
            (o = (o + Math.imul(A, tu)) | 0),
            (n = (n + Math.imul(w, tc)) | 0),
            (i = ((i = (i + Math.imul(w, tl)) | 0) + Math.imul(M, tc)) | 0),
            (o = (o + Math.imul(M, tl)) | 0);
          var tO =
            (((u + (n = (n + Math.imul(m, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(m, tb)) | 0) + Math.imul(g, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(g, tb)) | 0) + (i >>> 13)) | 0) +
              (tO >>> 26)) |
            0),
            (tO &= 67108863),
            (n = Math.imul(q, J)),
            (i = ((i = Math.imul(q, Y)) + Math.imul(U, J)) | 0),
            (o = Math.imul(U, Y)),
            (n = (n + Math.imul(N, Q)) | 0),
            (i = ((i = (i + Math.imul(N, tt)) | 0) + Math.imul(L, Q)) | 0),
            (o = (o + Math.imul(L, tt)) | 0),
            (n = (n + Math.imul(I, tr)) | 0),
            (i = ((i = (i + Math.imul(I, tn)) | 0) + Math.imul(T, tr)) | 0),
            (o = (o + Math.imul(T, tn)) | 0),
            (n = (n + Math.imul(R, to)) | 0),
            (i = ((i = (i + Math.imul(R, ta)) | 0) + Math.imul(P, to)) | 0),
            (o = (o + Math.imul(P, ta)) | 0),
            (n = (n + Math.imul(x, tf)) | 0),
            (i = ((i = (i + Math.imul(x, tu)) | 0) + Math.imul(O, tf)) | 0),
            (o = (o + Math.imul(O, tu)) | 0),
            (n = (n + Math.imul(S, tc)) | 0),
            (i = ((i = (i + Math.imul(S, tl)) | 0) + Math.imul(A, tc)) | 0),
            (o = (o + Math.imul(A, tl)) | 0);
          var tk =
            (((u + (n = (n + Math.imul(w, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(w, tb)) | 0) + Math.imul(M, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(M, tb)) | 0) + (i >>> 13)) | 0) +
              (tk >>> 26)) |
            0),
            (tk &= 67108863),
            (n = Math.imul(q, Q)),
            (i = ((i = Math.imul(q, tt)) + Math.imul(U, Q)) | 0),
            (o = Math.imul(U, tt)),
            (n = (n + Math.imul(N, tr)) | 0),
            (i = ((i = (i + Math.imul(N, tn)) | 0) + Math.imul(L, tr)) | 0),
            (o = (o + Math.imul(L, tn)) | 0),
            (n = (n + Math.imul(I, to)) | 0),
            (i = ((i = (i + Math.imul(I, ta)) | 0) + Math.imul(T, to)) | 0),
            (o = (o + Math.imul(T, ta)) | 0),
            (n = (n + Math.imul(R, tf)) | 0),
            (i = ((i = (i + Math.imul(R, tu)) | 0) + Math.imul(P, tf)) | 0),
            (o = (o + Math.imul(P, tu)) | 0),
            (n = (n + Math.imul(x, tc)) | 0),
            (i = ((i = (i + Math.imul(x, tl)) | 0) + Math.imul(O, tc)) | 0),
            (o = (o + Math.imul(O, tl)) | 0);
          var tR =
            (((u + (n = (n + Math.imul(S, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(S, tb)) | 0) + Math.imul(A, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(A, tb)) | 0) + (i >>> 13)) | 0) +
              (tR >>> 26)) |
            0),
            (tR &= 67108863),
            (n = Math.imul(q, tr)),
            (i = ((i = Math.imul(q, tn)) + Math.imul(U, tr)) | 0),
            (o = Math.imul(U, tn)),
            (n = (n + Math.imul(N, to)) | 0),
            (i = ((i = (i + Math.imul(N, ta)) | 0) + Math.imul(L, to)) | 0),
            (o = (o + Math.imul(L, ta)) | 0),
            (n = (n + Math.imul(I, tf)) | 0),
            (i = ((i = (i + Math.imul(I, tu)) | 0) + Math.imul(T, tf)) | 0),
            (o = (o + Math.imul(T, tu)) | 0),
            (n = (n + Math.imul(R, tc)) | 0),
            (i = ((i = (i + Math.imul(R, tl)) | 0) + Math.imul(P, tc)) | 0),
            (o = (o + Math.imul(P, tl)) | 0);
          var tP =
            (((u + (n = (n + Math.imul(x, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(x, tb)) | 0) + Math.imul(O, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(O, tb)) | 0) + (i >>> 13)) | 0) +
              (tP >>> 26)) |
            0),
            (tP &= 67108863),
            (n = Math.imul(q, to)),
            (i = ((i = Math.imul(q, ta)) + Math.imul(U, to)) | 0),
            (o = Math.imul(U, ta)),
            (n = (n + Math.imul(N, tf)) | 0),
            (i = ((i = (i + Math.imul(N, tu)) | 0) + Math.imul(L, tf)) | 0),
            (o = (o + Math.imul(L, tu)) | 0),
            (n = (n + Math.imul(I, tc)) | 0),
            (i = ((i = (i + Math.imul(I, tl)) | 0) + Math.imul(T, tc)) | 0),
            (o = (o + Math.imul(T, tl)) | 0);
          var tj =
            (((u + (n = (n + Math.imul(R, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(R, tb)) | 0) + Math.imul(P, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(P, tb)) | 0) + (i >>> 13)) | 0) +
              (tj >>> 26)) |
            0),
            (tj &= 67108863),
            (n = Math.imul(q, tf)),
            (i = ((i = Math.imul(q, tu)) + Math.imul(U, tf)) | 0),
            (o = Math.imul(U, tu)),
            (n = (n + Math.imul(N, tc)) | 0),
            (i = ((i = (i + Math.imul(N, tl)) | 0) + Math.imul(L, tc)) | 0),
            (o = (o + Math.imul(L, tl)) | 0);
          var tI =
            (((u + (n = (n + Math.imul(I, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(I, tb)) | 0) + Math.imul(T, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(T, tb)) | 0) + (i >>> 13)) | 0) +
              (tI >>> 26)) |
            0),
            (tI &= 67108863),
            (n = Math.imul(q, tc)),
            (i = ((i = Math.imul(q, tl)) + Math.imul(U, tc)) | 0),
            (o = Math.imul(U, tl));
          var tT =
            (((u + (n = (n + Math.imul(N, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(N, tb)) | 0) + Math.imul(L, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(L, tb)) | 0) + (i >>> 13)) | 0) +
              (tT >>> 26)) |
            0),
            (tT &= 67108863);
          var tB =
            (((u + (n = Math.imul(q, tp))) | 0) +
              ((8191 & (i = ((i = Math.imul(q, tb)) + Math.imul(U, tp)) | 0)) <<
                13)) |
            0;
          return (
            (u =
              ((((o = Math.imul(U, tb)) + (i >>> 13)) | 0) + (tB >>> 26)) | 0),
            (tB &= 67108863),
            (f[0] = ty),
            (f[1] = tm),
            (f[2] = tg),
            (f[3] = tv),
            (f[4] = tw),
            (f[5] = tM),
            (f[6] = t_),
            (f[7] = tS),
            (f[8] = tA),
            (f[9] = tE),
            (f[10] = tx),
            (f[11] = tO),
            (f[12] = tk),
            (f[13] = tR),
            (f[14] = tP),
            (f[15] = tj),
            (f[16] = tI),
            (f[17] = tT),
            (f[18] = tB),
            0 !== u && ((f[19] = u), r.length++),
            r
          );
        };
        function b(t, e, r) {
          return new y().mulp(t, e, r);
        }
        function y(t, e) {
          (this.x = t), (this.y = e);
        }
        Math.imul || (p = d),
          (o.prototype.mulTo = function (t, e) {
            var r = this.length + t.length;
            return 10 === this.length && 10 === t.length
              ? p(this, t, e)
              : r < 63
              ? d(this, t, e)
              : r < 1024
              ? (function (t, e, r) {
                  (r.negative = e.negative ^ t.negative),
                    (r.length = t.length + e.length);
                  for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
                    var a = i;
                    i = 0;
                    for (
                      var s = 67108863 & n,
                        f = Math.min(o, e.length - 1),
                        u = Math.max(0, o - t.length + 1);
                      u <= f;
                      u++
                    ) {
                      var h = o - u,
                        c = (0 | t.words[h]) * (0 | e.words[u]),
                        l = 67108863 & c;
                      (a = (a + ((c / 67108864) | 0)) | 0),
                        (s = 67108863 & (l = (l + s) | 0)),
                        (i += (a = (a + (l >>> 26)) | 0) >>> 26),
                        (a &= 67108863);
                    }
                    (r.words[o] = s), (n = a), (a = i);
                  }
                  return 0 !== n ? (r.words[o] = n) : r.length--, r.strip();
                })(this, t, e)
              : b(this, t, e);
          }),
          (y.prototype.makeRBT = function (t) {
            for (
              var e = Array(t), r = o.prototype._countBits(t) - 1, n = 0;
              n < t;
              n++
            )
              e[n] = this.revBin(n, r, t);
            return e;
          }),
          (y.prototype.revBin = function (t, e, r) {
            if (0 === t || t === r - 1) return t;
            for (var n = 0, i = 0; i < e; i++)
              (n |= (1 & t) << (e - i - 1)), (t >>= 1);
            return n;
          }),
          (y.prototype.permute = function (t, e, r, n, i, o) {
            for (var a = 0; a < o; a++) (n[a] = e[t[a]]), (i[a] = r[t[a]]);
          }),
          (y.prototype.transform = function (t, e, r, n, i, o) {
            this.permute(o, t, e, r, n, i);
            for (var a = 1; a < i; a <<= 1)
              for (
                var s = a << 1,
                  f = Math.cos((2 * Math.PI) / s),
                  u = Math.sin((2 * Math.PI) / s),
                  h = 0;
                h < i;
                h += s
              )
                for (var c = f, l = u, d = 0; d < a; d++) {
                  var p = r[h + d],
                    b = n[h + d],
                    y = r[h + d + a],
                    m = n[h + d + a],
                    g = c * y - l * m;
                  (m = c * m + l * y),
                    (y = g),
                    (r[h + d] = p + y),
                    (n[h + d] = b + m),
                    (r[h + d + a] = p - y),
                    (n[h + d + a] = b - m),
                    d !== s &&
                      ((g = f * c - u * l), (l = f * l + u * c), (c = g));
                }
          }),
          (y.prototype.guessLen13b = function (t, e) {
            var r = 1 | Math.max(e, t),
              n = 1 & r,
              i = 0;
            for (r = (r / 2) | 0; r; r >>>= 1) i++;
            return 1 << (i + 1 + n);
          }),
          (y.prototype.conjugate = function (t, e, r) {
            if (!(r <= 1))
              for (var n = 0; n < r / 2; n++) {
                var i = t[n];
                (t[n] = t[r - n - 1]),
                  (t[r - n - 1] = i),
                  (i = e[n]),
                  (e[n] = -e[r - n - 1]),
                  (e[r - n - 1] = -i);
              }
          }),
          (y.prototype.normalize13b = function (t, e) {
            for (var r = 0, n = 0; n < e / 2; n++) {
              var i =
                8192 * Math.round(t[2 * n + 1] / e) +
                Math.round(t[2 * n] / e) +
                r;
              (t[n] = 67108863 & i),
                (r = i < 67108864 ? 0 : (i / 67108864) | 0);
            }
            return t;
          }),
          (y.prototype.convert13b = function (t, e, r, i) {
            for (var o = 0, a = 0; a < e; a++)
              (o += 0 | t[a]),
                (r[2 * a] = 8191 & o),
                (o >>>= 13),
                (r[2 * a + 1] = 8191 & o),
                (o >>>= 13);
            for (a = 2 * e; a < i; ++a) r[a] = 0;
            n(0 === o), n((-8192 & o) == 0);
          }),
          (y.prototype.stub = function (t) {
            for (var e = Array(t), r = 0; r < t; r++) e[r] = 0;
            return e;
          }),
          (y.prototype.mulp = function (t, e, r) {
            var n = 2 * this.guessLen13b(t.length, e.length),
              i = this.makeRBT(n),
              o = this.stub(n),
              a = Array(n),
              s = Array(n),
              f = Array(n),
              u = Array(n),
              h = Array(n),
              c = Array(n),
              l = r.words;
            (l.length = n),
              this.convert13b(t.words, t.length, a, n),
              this.convert13b(e.words, e.length, u, n),
              this.transform(a, o, s, f, n, i),
              this.transform(u, o, h, c, n, i);
            for (var d = 0; d < n; d++) {
              var p = s[d] * h[d] - f[d] * c[d];
              (f[d] = s[d] * c[d] + f[d] * h[d]), (s[d] = p);
            }
            return (
              this.conjugate(s, f, n),
              this.transform(s, f, l, o, n, i),
              this.conjugate(l, o, n),
              this.normalize13b(l, n),
              (r.negative = t.negative ^ e.negative),
              (r.length = t.length + e.length),
              r.strip()
            );
          }),
          (o.prototype.mul = function (t) {
            var e = new o(null);
            return (e.words = Array(this.length + t.length)), this.mulTo(t, e);
          }),
          (o.prototype.mulf = function (t) {
            var e = new o(null);
            return (e.words = Array(this.length + t.length)), b(this, t, e);
          }),
          (o.prototype.imul = function (t) {
            return this.clone().mulTo(t, this);
          }),
          (o.prototype.imuln = function (t) {
            n("number" == typeof t), n(t < 67108864);
            for (var e = 0, r = 0; r < this.length; r++) {
              var i = (0 | this.words[r]) * t,
                o = (67108863 & i) + (67108863 & e);
              (e >>= 26),
                (e += ((i / 67108864) | 0) + (o >>> 26)),
                (this.words[r] = 67108863 & o);
            }
            return 0 !== e && ((this.words[r] = e), this.length++), this;
          }),
          (o.prototype.muln = function (t) {
            return this.clone().imuln(t);
          }),
          (o.prototype.sqr = function () {
            return this.mul(this);
          }),
          (o.prototype.isqr = function () {
            return this.imul(this.clone());
          }),
          (o.prototype.pow = function (t) {
            var e = (function (t) {
              for (var e = Array(t.bitLength()), r = 0; r < e.length; r++) {
                var n = (r / 26) | 0,
                  i = r % 26;
                e[r] = (t.words[n] & (1 << i)) >>> i;
              }
              return e;
            })(t);
            if (0 === e.length) return new o(1);
            for (
              var r = this, n = 0;
              n < e.length && 0 === e[n];
              n++, r = r.sqr()
            );
            if (++n < e.length)
              for (var i = r.sqr(); n < e.length; n++, i = i.sqr())
                0 !== e[n] && (r = r.mul(i));
            return r;
          }),
          (o.prototype.iushln = function (t) {
            n("number" == typeof t && t >= 0);
            var e,
              r = t % 26,
              i = (t - r) / 26,
              o = (67108863 >>> (26 - r)) << (26 - r);
            if (0 !== r) {
              var a = 0;
              for (e = 0; e < this.length; e++) {
                var s = this.words[e] & o,
                  f = ((0 | this.words[e]) - s) << r;
                (this.words[e] = f | a), (a = s >>> (26 - r));
              }
              a && ((this.words[e] = a), this.length++);
            }
            if (0 !== i) {
              for (e = this.length - 1; e >= 0; e--)
                this.words[e + i] = this.words[e];
              for (e = 0; e < i; e++) this.words[e] = 0;
              this.length += i;
            }
            return this.strip();
          }),
          (o.prototype.ishln = function (t) {
            return n(0 === this.negative), this.iushln(t);
          }),
          (o.prototype.iushrn = function (t, e, r) {
            n("number" == typeof t && t >= 0),
              (i = e ? (e - (e % 26)) / 26 : 0);
            var i,
              o = t % 26,
              a = Math.min((t - o) / 26, this.length),
              s = 67108863 ^ ((67108863 >>> o) << o),
              f = r;
            if (((i -= a), (i = Math.max(0, i)), f)) {
              for (var u = 0; u < a; u++) f.words[u] = this.words[u];
              f.length = a;
            }
            if (0 === a);
            else if (this.length > a)
              for (this.length -= a, u = 0; u < this.length; u++)
                this.words[u] = this.words[u + a];
            else (this.words[0] = 0), (this.length = 1);
            var h = 0;
            for (u = this.length - 1; u >= 0 && (0 !== h || u >= i); u--) {
              var c = 0 | this.words[u];
              (this.words[u] = (h << (26 - o)) | (c >>> o)), (h = c & s);
            }
            return (
              f && 0 !== h && (f.words[f.length++] = h),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this.strip()
            );
          }),
          (o.prototype.ishrn = function (t, e, r) {
            return n(0 === this.negative), this.iushrn(t, e, r);
          }),
          (o.prototype.shln = function (t) {
            return this.clone().ishln(t);
          }),
          (o.prototype.ushln = function (t) {
            return this.clone().iushln(t);
          }),
          (o.prototype.shrn = function (t) {
            return this.clone().ishrn(t);
          }),
          (o.prototype.ushrn = function (t) {
            return this.clone().iushrn(t);
          }),
          (o.prototype.testn = function (t) {
            n("number" == typeof t && t >= 0);
            var e = t % 26,
              r = (t - e) / 26;
            return !(this.length <= r) && !!(this.words[r] & (1 << e));
          }),
          (o.prototype.imaskn = function (t) {
            n("number" == typeof t && t >= 0);
            var e = t % 26,
              r = (t - e) / 26;
            return (n(
              0 === this.negative,
              "imaskn works only with positive numbers"
            ),
            this.length <= r)
              ? this
              : (0 !== e && r++,
                (this.length = Math.min(r, this.length)),
                0 !== e &&
                  (this.words[this.length - 1] &=
                    67108863 ^ ((67108863 >>> e) << e)),
                this.strip());
          }),
          (o.prototype.maskn = function (t) {
            return this.clone().imaskn(t);
          }),
          (o.prototype.iaddn = function (t) {
            return (n("number" == typeof t), n(t < 67108864), t < 0)
              ? this.isubn(-t)
              : 0 !== this.negative
              ? 1 === this.length && (0 | this.words[0]) < t
                ? ((this.words[0] = t - (0 | this.words[0])),
                  (this.negative = 0),
                  this)
                : ((this.negative = 0),
                  this.isubn(t),
                  (this.negative = 1),
                  this)
              : this._iaddn(t);
          }),
          (o.prototype._iaddn = function (t) {
            this.words[0] += t;
            for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
              (this.words[e] -= 67108864),
                e === this.length - 1
                  ? (this.words[e + 1] = 1)
                  : this.words[e + 1]++;
            return (this.length = Math.max(this.length, e + 1)), this;
          }),
          (o.prototype.isubn = function (t) {
            if ((n("number" == typeof t), n(t < 67108864), t < 0))
              return this.iaddn(-t);
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(t), (this.negative = 1), this
              );
            if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var e = 0; e < this.length && this.words[e] < 0; e++)
                (this.words[e] += 67108864), (this.words[e + 1] -= 1);
            return this.strip();
          }),
          (o.prototype.addn = function (t) {
            return this.clone().iaddn(t);
          }),
          (o.prototype.subn = function (t) {
            return this.clone().isubn(t);
          }),
          (o.prototype.iabs = function () {
            return (this.negative = 0), this;
          }),
          (o.prototype.abs = function () {
            return this.clone().iabs();
          }),
          (o.prototype._ishlnsubmul = function (t, e, r) {
            var i,
              o,
              a = t.length + r;
            this._expand(a);
            var s = 0;
            for (i = 0; i < t.length; i++) {
              o = (0 | this.words[i + r]) + s;
              var f = (0 | t.words[i]) * e;
              (o -= 67108863 & f),
                (s = (o >> 26) - ((f / 67108864) | 0)),
                (this.words[i + r] = 67108863 & o);
            }
            for (; i < this.length - r; i++)
              (s = (o = (0 | this.words[i + r]) + s) >> 26),
                (this.words[i + r] = 67108863 & o);
            if (0 === s) return this.strip();
            for (n(-1 === s), s = 0, i = 0; i < this.length; i++)
              (s = (o = -(0 | this.words[i]) + s) >> 26),
                (this.words[i] = 67108863 & o);
            return (this.negative = 1), this.strip();
          }),
          (o.prototype._wordDiv = function (t, e) {
            var r,
              n = this.length - t.length,
              i = this.clone(),
              a = t,
              s = 0 | a.words[a.length - 1];
            0 != (n = 26 - this._countBits(s)) &&
              ((a = a.ushln(n)), i.iushln(n), (s = 0 | a.words[a.length - 1]));
            var f = i.length - a.length;
            if ("mod" !== e) {
              ((r = new o(null)).length = f + 1), (r.words = Array(r.length));
              for (var u = 0; u < r.length; u++) r.words[u] = 0;
            }
            var h = i.clone()._ishlnsubmul(a, 1, f);
            0 === h.negative && ((i = h), r && (r.words[f] = 1));
            for (var c = f - 1; c >= 0; c--) {
              var l =
                (0 | i.words[a.length + c]) * 67108864 +
                (0 | i.words[a.length + c - 1]);
              for (
                l = Math.min((l / s) | 0, 67108863), i._ishlnsubmul(a, l, c);
                0 !== i.negative;

              )
                l--,
                  (i.negative = 0),
                  i._ishlnsubmul(a, 1, c),
                  i.isZero() || (i.negative ^= 1);
              r && (r.words[c] = l);
            }
            return (
              r && r.strip(),
              i.strip(),
              "div" !== e && 0 !== n && i.iushrn(n),
              { div: r || null, mod: i }
            );
          }),
          (o.prototype.divmod = function (t, e, r) {
            var i, a, s;
            return (n(!t.isZero()), this.isZero())
              ? { div: new o(0), mod: new o(0) }
              : 0 !== this.negative && 0 === t.negative
              ? ((s = this.neg().divmod(t, e)),
                "mod" !== e && (i = s.div.neg()),
                "div" !== e &&
                  ((a = s.mod.neg()), r && 0 !== a.negative && a.iadd(t)),
                { div: i, mod: a })
              : 0 === this.negative && 0 !== t.negative
              ? ((s = this.divmod(t.neg(), e)),
                "mod" !== e && (i = s.div.neg()),
                { div: i, mod: s.mod })
              : (this.negative & t.negative) != 0
              ? ((s = this.neg().divmod(t.neg(), e)),
                "div" !== e &&
                  ((a = s.mod.neg()), r && 0 !== a.negative && a.isub(t)),
                { div: s.div, mod: a })
              : t.length > this.length || 0 > this.cmp(t)
              ? { div: new o(0), mod: this }
              : 1 === t.length
              ? "div" === e
                ? { div: this.divn(t.words[0]), mod: null }
                : "mod" === e
                ? { div: null, mod: new o(this.modn(t.words[0])) }
                : {
                    div: this.divn(t.words[0]),
                    mod: new o(this.modn(t.words[0])),
                  }
              : this._wordDiv(t, e);
          }),
          (o.prototype.div = function (t) {
            return this.divmod(t, "div", !1).div;
          }),
          (o.prototype.mod = function (t) {
            return this.divmod(t, "mod", !1).mod;
          }),
          (o.prototype.umod = function (t) {
            return this.divmod(t, "mod", !0).mod;
          }),
          (o.prototype.divRound = function (t) {
            var e = this.divmod(t);
            if (e.mod.isZero()) return e.div;
            var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
              n = t.ushrn(1),
              i = t.andln(1),
              o = r.cmp(n);
            return o < 0 || (1 === i && 0 === o)
              ? e.div
              : 0 !== e.div.negative
              ? e.div.isubn(1)
              : e.div.iaddn(1);
          }),
          (o.prototype.modn = function (t) {
            n(t <= 67108863);
            for (var e = 67108864 % t, r = 0, i = this.length - 1; i >= 0; i--)
              r = (e * r + (0 | this.words[i])) % t;
            return r;
          }),
          (o.prototype.idivn = function (t) {
            n(t <= 67108863);
            for (var e = 0, r = this.length - 1; r >= 0; r--) {
              var i = (0 | this.words[r]) + 67108864 * e;
              (this.words[r] = (i / t) | 0), (e = i % t);
            }
            return this.strip();
          }),
          (o.prototype.divn = function (t) {
            return this.clone().idivn(t);
          }),
          (o.prototype.egcd = function (t) {
            n(0 === t.negative), n(!t.isZero());
            var e = this,
              r = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (
              var i = new o(1), a = new o(0), s = new o(0), f = new o(1), u = 0;
              e.isEven() && r.isEven();

            )
              e.iushrn(1), r.iushrn(1), ++u;
            for (var h = r.clone(), c = e.clone(); !e.isZero(); ) {
              for (
                var l = 0, d = 1;
                (e.words[0] & d) == 0 && l < 26;
                ++l, d <<= 1
              );
              if (l > 0)
                for (e.iushrn(l); l-- > 0; )
                  (i.isOdd() || a.isOdd()) && (i.iadd(h), a.isub(c)),
                    i.iushrn(1),
                    a.iushrn(1);
              for (
                var p = 0, b = 1;
                (r.words[0] & b) == 0 && p < 26;
                ++p, b <<= 1
              );
              if (p > 0)
                for (r.iushrn(p); p-- > 0; )
                  (s.isOdd() || f.isOdd()) && (s.iadd(h), f.isub(c)),
                    s.iushrn(1),
                    f.iushrn(1);
              e.cmp(r) >= 0
                ? (e.isub(r), i.isub(s), a.isub(f))
                : (r.isub(e), s.isub(i), f.isub(a));
            }
            return { a: s, b: f, gcd: r.iushln(u) };
          }),
          (o.prototype._invmp = function (t) {
            n(0 === t.negative), n(!t.isZero());
            var e,
              r = this,
              i = t.clone();
            r = 0 !== r.negative ? r.umod(t) : r.clone();
            for (
              var a = new o(1), s = new o(0), f = i.clone();
              r.cmpn(1) > 0 && i.cmpn(1) > 0;

            ) {
              for (
                var u = 0, h = 1;
                (r.words[0] & h) == 0 && u < 26;
                ++u, h <<= 1
              );
              if (u > 0)
                for (r.iushrn(u); u-- > 0; )
                  a.isOdd() && a.iadd(f), a.iushrn(1);
              for (
                var c = 0, l = 1;
                (i.words[0] & l) == 0 && c < 26;
                ++c, l <<= 1
              );
              if (c > 0)
                for (i.iushrn(c); c-- > 0; )
                  s.isOdd() && s.iadd(f), s.iushrn(1);
              r.cmp(i) >= 0 ? (r.isub(i), a.isub(s)) : (i.isub(r), s.isub(a));
            }
            return 0 > (e = 0 === r.cmpn(1) ? a : s).cmpn(0) && e.iadd(t), e;
          }),
          (o.prototype.gcd = function (t) {
            if (this.isZero()) return t.abs();
            if (t.isZero()) return this.abs();
            var e = this.clone(),
              r = t.clone();
            (e.negative = 0), (r.negative = 0);
            for (var n = 0; e.isEven() && r.isEven(); n++)
              e.iushrn(1), r.iushrn(1);
            for (;;) {
              for (; e.isEven(); ) e.iushrn(1);
              for (; r.isEven(); ) r.iushrn(1);
              var i = e.cmp(r);
              if (i < 0) {
                var o = e;
                (e = r), (r = o);
              } else if (0 === i || 0 === r.cmpn(1)) break;
              e.isub(r);
            }
            return r.iushln(n);
          }),
          (o.prototype.invm = function (t) {
            return this.egcd(t).a.umod(t);
          }),
          (o.prototype.isEven = function () {
            return (1 & this.words[0]) == 0;
          }),
          (o.prototype.isOdd = function () {
            return (1 & this.words[0]) == 1;
          }),
          (o.prototype.andln = function (t) {
            return this.words[0] & t;
          }),
          (o.prototype.bincn = function (t) {
            n("number" == typeof t);
            var e = t % 26,
              r = (t - e) / 26,
              i = 1 << e;
            if (this.length <= r)
              return this._expand(r + 1), (this.words[r] |= i), this;
            for (var o = i, a = r; 0 !== o && a < this.length; a++) {
              var s = 0 | this.words[a];
              (s += o), (o = s >>> 26), (s &= 67108863), (this.words[a] = s);
            }
            return 0 !== o && ((this.words[a] = o), this.length++), this;
          }),
          (o.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }),
          (o.prototype.cmpn = function (t) {
            var e,
              r = t < 0;
            if (0 !== this.negative && !r) return -1;
            if (0 === this.negative && r) return 1;
            if ((this.strip(), this.length > 1)) e = 1;
            else {
              r && (t = -t), n(t <= 67108863, "Number is too big");
              var i = 0 | this.words[0];
              e = i === t ? 0 : i < t ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (o.prototype.cmp = function (t) {
            if (0 !== this.negative && 0 === t.negative) return -1;
            if (0 === this.negative && 0 !== t.negative) return 1;
            var e = this.ucmp(t);
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (o.prototype.ucmp = function (t) {
            if (this.length > t.length) return 1;
            if (this.length < t.length) return -1;
            for (var e = 0, r = this.length - 1; r >= 0; r--) {
              var n = 0 | this.words[r],
                i = 0 | t.words[r];
              if (n !== i) {
                n < i ? (e = -1) : n > i && (e = 1);
                break;
              }
            }
            return e;
          }),
          (o.prototype.gtn = function (t) {
            return 1 === this.cmpn(t);
          }),
          (o.prototype.gt = function (t) {
            return 1 === this.cmp(t);
          }),
          (o.prototype.gten = function (t) {
            return this.cmpn(t) >= 0;
          }),
          (o.prototype.gte = function (t) {
            return this.cmp(t) >= 0;
          }),
          (o.prototype.ltn = function (t) {
            return -1 === this.cmpn(t);
          }),
          (o.prototype.lt = function (t) {
            return -1 === this.cmp(t);
          }),
          (o.prototype.lten = function (t) {
            return 0 >= this.cmpn(t);
          }),
          (o.prototype.lte = function (t) {
            return 0 >= this.cmp(t);
          }),
          (o.prototype.eqn = function (t) {
            return 0 === this.cmpn(t);
          }),
          (o.prototype.eq = function (t) {
            return 0 === this.cmp(t);
          }),
          (o.red = function (t) {
            return new S(t);
          }),
          (o.prototype.toRed = function (t) {
            return (
              n(!this.red, "Already a number in reduction context"),
              n(0 === this.negative, "red works only with positives"),
              t.convertTo(this)._forceRed(t)
            );
          }),
          (o.prototype.fromRed = function () {
            return (
              n(
                this.red,
                "fromRed works only with numbers in reduction context"
              ),
              this.red.convertFrom(this)
            );
          }),
          (o.prototype._forceRed = function (t) {
            return (this.red = t), this;
          }),
          (o.prototype.forceRed = function (t) {
            return (
              n(!this.red, "Already a number in reduction context"),
              this._forceRed(t)
            );
          }),
          (o.prototype.redAdd = function (t) {
            return (
              n(this.red, "redAdd works only with red numbers"),
              this.red.add(this, t)
            );
          }),
          (o.prototype.redIAdd = function (t) {
            return (
              n(this.red, "redIAdd works only with red numbers"),
              this.red.iadd(this, t)
            );
          }),
          (o.prototype.redSub = function (t) {
            return (
              n(this.red, "redSub works only with red numbers"),
              this.red.sub(this, t)
            );
          }),
          (o.prototype.redISub = function (t) {
            return (
              n(this.red, "redISub works only with red numbers"),
              this.red.isub(this, t)
            );
          }),
          (o.prototype.redShl = function (t) {
            return (
              n(this.red, "redShl works only with red numbers"),
              this.red.shl(this, t)
            );
          }),
          (o.prototype.redMul = function (t) {
            return (
              n(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.mul(this, t)
            );
          }),
          (o.prototype.redIMul = function (t) {
            return (
              n(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.imul(this, t)
            );
          }),
          (o.prototype.redSqr = function () {
            return (
              n(this.red, "redSqr works only with red numbers"),
              this.red._verify1(this),
              this.red.sqr(this)
            );
          }),
          (o.prototype.redISqr = function () {
            return (
              n(this.red, "redISqr works only with red numbers"),
              this.red._verify1(this),
              this.red.isqr(this)
            );
          }),
          (o.prototype.redSqrt = function () {
            return (
              n(this.red, "redSqrt works only with red numbers"),
              this.red._verify1(this),
              this.red.sqrt(this)
            );
          }),
          (o.prototype.redInvm = function () {
            return (
              n(this.red, "redInvm works only with red numbers"),
              this.red._verify1(this),
              this.red.invm(this)
            );
          }),
          (o.prototype.redNeg = function () {
            return (
              n(this.red, "redNeg works only with red numbers"),
              this.red._verify1(this),
              this.red.neg(this)
            );
          }),
          (o.prototype.redPow = function (t) {
            return (
              n(this.red && !t.red, "redPow(normalNum)"),
              this.red._verify1(this),
              this.red.pow(this, t)
            );
          });
        var m = { k256: null, p224: null, p192: null, p25519: null };
        function g(t, e) {
          (this.name = t),
            (this.p = new o(e, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new o(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp());
        }
        function v() {
          g.call(
            this,
            "k256",
            "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
          );
        }
        function w() {
          g.call(
            this,
            "p224",
            "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
          );
        }
        function M() {
          g.call(
            this,
            "p192",
            "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
          );
        }
        function _() {
          g.call(
            this,
            "25519",
            "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
          );
        }
        function S(t) {
          if ("string" == typeof t) {
            var e = o._prime(t);
            (this.m = e.p), (this.prime = e);
          } else
            n(t.gtn(1), "modulus must be greater than 1"),
              (this.m = t),
              (this.prime = null);
        }
        function A(t) {
          S.call(this, t),
            (this.shift = this.m.bitLength()),
            this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new o(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv));
        }
        (g.prototype._tmp = function () {
          var t = new o(null);
          return (t.words = Array(Math.ceil(this.n / 13))), t;
        }),
          (g.prototype.ireduce = function (t) {
            var e,
              r = t;
            do
              this.split(r, this.tmp),
                (e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength());
            while (e > this.n);
            var n = e < this.n ? -1 : r.ucmp(this.p);
            return (
              0 === n
                ? ((r.words[0] = 0), (r.length = 1))
                : n > 0
                ? r.isub(this.p)
                : void 0 !== r.strip
                ? r.strip()
                : r._strip(),
              r
            );
          }),
          (g.prototype.split = function (t, e) {
            t.iushrn(this.n, 0, e);
          }),
          (g.prototype.imulK = function (t) {
            return t.imul(this.k);
          }),
          i(v, g),
          (v.prototype.split = function (t, e) {
            for (var r = Math.min(t.length, 9), n = 0; n < r; n++)
              e.words[n] = t.words[n];
            if (((e.length = r), t.length <= 9)) {
              (t.words[0] = 0), (t.length = 1);
              return;
            }
            var i = t.words[9];
            for (n = 10, e.words[e.length++] = 4194303 & i; n < t.length; n++) {
              var o = 0 | t.words[n];
              (t.words[n - 10] = ((4194303 & o) << 4) | (i >>> 22)), (i = o);
            }
            (i >>>= 22),
              (t.words[n - 10] = i),
              0 === i && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
          }),
          (v.prototype.imulK = function (t) {
            (t.words[t.length] = 0),
              (t.words[t.length + 1] = 0),
              (t.length += 2);
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = 0 | t.words[r];
              (e += 977 * n),
                (t.words[r] = 67108863 & e),
                (e = 64 * n + ((e / 67108864) | 0));
            }
            return (
              0 === t.words[t.length - 1] &&
                (t.length--, 0 === t.words[t.length - 1] && t.length--),
              t
            );
          }),
          i(w, g),
          i(M, g),
          i(_, g),
          (_.prototype.imulK = function (t) {
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = (0 | t.words[r]) * 19 + e,
                i = 67108863 & n;
              (n >>>= 26), (t.words[r] = i), (e = n);
            }
            return 0 !== e && (t.words[t.length++] = e), t;
          }),
          (o._prime = function (t) {
            var e;
            if (m[t]) return m[t];
            if ("k256" === t) e = new v();
            else if ("p224" === t) e = new w();
            else if ("p192" === t) e = new M();
            else if ("p25519" === t) e = new _();
            else throw Error("Unknown prime " + t);
            return (m[t] = e), e;
          }),
          (S.prototype._verify1 = function (t) {
            n(0 === t.negative, "red works only with positives"),
              n(t.red, "red works only with red numbers");
          }),
          (S.prototype._verify2 = function (t, e) {
            n((t.negative | e.negative) == 0, "red works only with positives"),
              n(t.red && t.red === e.red, "red works only with red numbers");
          }),
          (S.prototype.imod = function (t) {
            return this.prime
              ? this.prime.ireduce(t)._forceRed(this)
              : t.umod(this.m)._forceRed(this);
          }),
          (S.prototype.neg = function (t) {
            return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
          }),
          (S.prototype.add = function (t, e) {
            this._verify2(t, e);
            var r = t.add(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
          }),
          (S.prototype.iadd = function (t, e) {
            this._verify2(t, e);
            var r = t.iadd(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r;
          }),
          (S.prototype.sub = function (t, e) {
            this._verify2(t, e);
            var r = t.sub(e);
            return 0 > r.cmpn(0) && r.iadd(this.m), r._forceRed(this);
          }),
          (S.prototype.isub = function (t, e) {
            this._verify2(t, e);
            var r = t.isub(e);
            return 0 > r.cmpn(0) && r.iadd(this.m), r;
          }),
          (S.prototype.shl = function (t, e) {
            return this._verify1(t), this.imod(t.ushln(e));
          }),
          (S.prototype.imul = function (t, e) {
            return this._verify2(t, e), this.imod(t.imul(e));
          }),
          (S.prototype.mul = function (t, e) {
            return this._verify2(t, e), this.imod(t.mul(e));
          }),
          (S.prototype.isqr = function (t) {
            return this.imul(t, t.clone());
          }),
          (S.prototype.sqr = function (t) {
            return this.mul(t, t);
          }),
          (S.prototype.sqrt = function (t) {
            if (t.isZero()) return t.clone();
            var e = this.m.andln(3);
            if ((n(e % 2 == 1), 3 === e)) {
              var r = this.m.add(new o(1)).iushrn(2);
              return this.pow(t, r);
            }
            for (
              var i = this.m.subn(1), a = 0;
              !i.isZero() && 0 === i.andln(1);

            )
              a++, i.iushrn(1);
            n(!i.isZero());
            var s = new o(1).toRed(this),
              f = s.redNeg(),
              u = this.m.subn(1).iushrn(1),
              h = this.m.bitLength();
            for (
              h = new o(2 * h * h).toRed(this);
              0 !== this.pow(h, u).cmp(f);

            )
              h.redIAdd(f);
            for (
              var c = this.pow(h, i),
                l = this.pow(t, i.addn(1).iushrn(1)),
                d = this.pow(t, i),
                p = a;
              0 !== d.cmp(s);

            ) {
              for (var b = d, y = 0; 0 !== b.cmp(s); y++) b = b.redSqr();
              n(y < p);
              var m = this.pow(c, new o(1).iushln(p - y - 1));
              (l = l.redMul(m)), (c = m.redSqr()), (d = d.redMul(c)), (p = y);
            }
            return l;
          }),
          (S.prototype.invm = function (t) {
            var e = t._invmp(this.m);
            return 0 !== e.negative
              ? ((e.negative = 0), this.imod(e).redNeg())
              : this.imod(e);
          }),
          (S.prototype.pow = function (t, e) {
            if (e.isZero()) return new o(1).toRed(this);
            if (0 === e.cmpn(1)) return t.clone();
            var r = Array(16);
            (r[0] = new o(1).toRed(this)), (r[1] = t);
            for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
            var i = r[0],
              a = 0,
              s = 0,
              f = e.bitLength() % 26;
            for (0 === f && (f = 26), n = e.length - 1; n >= 0; n--) {
              for (var u = e.words[n], h = f - 1; h >= 0; h--) {
                var c = (u >> h) & 1;
                if ((i !== r[0] && (i = this.sqr(i)), 0 === c && 0 === a)) {
                  s = 0;
                  continue;
                }
                (a <<= 1),
                  (a |= c),
                  (4 == ++s || (0 === n && 0 === h)) &&
                    ((i = this.mul(i, r[a])), (s = 0), (a = 0));
              }
              f = 26;
            }
            return i;
          }),
          (S.prototype.convertTo = function (t) {
            var e = t.umod(this.m);
            return e === t ? e.clone() : e;
          }),
          (S.prototype.convertFrom = function (t) {
            var e = t.clone();
            return (e.red = null), e;
          }),
          (o.mont = function (t) {
            return new A(t);
          }),
          i(A, S),
          (A.prototype.convertTo = function (t) {
            return this.imod(t.ushln(this.shift));
          }),
          (A.prototype.convertFrom = function (t) {
            var e = this.imod(t.mul(this.rinv));
            return (e.red = null), e;
          }),
          (A.prototype.imul = function (t, e) {
            if (t.isZero() || e.isZero())
              return (t.words[0] = 0), (t.length = 1), t;
            var r = t.imul(e),
              n = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              o = i;
            return (
              i.cmp(this.m) >= 0
                ? (o = i.isub(this.m))
                : 0 > i.cmpn(0) && (o = i.iadd(this.m)),
              o._forceRed(this)
            );
          }),
          (A.prototype.mul = function (t, e) {
            if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
            var r = t.mul(e),
              n = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              a = i;
            return (
              i.cmp(this.m) >= 0
                ? (a = i.isub(this.m))
                : 0 > i.cmpn(0) && (a = i.iadd(this.m)),
              a._forceRed(this)
            );
          }),
          (A.prototype.invm = function (t) {
            return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
          });
      })((t = r.nmd(t)), this);
    },
    6877: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      let n = r(339);
      function i(t) {
        return (
          !!("string" == typeof t && /^(0x)?[0-9a-f]{512}$/i.test(t)) &&
          !!(/^(0x)?[0-9a-f]{512}$/.test(t) || /^(0x)?[0-9A-F]{512}$/.test(t))
        );
      }
      function o(t, e) {
        "object" == typeof e &&
          e.constructor === Uint8Array &&
          (e = n.bytesToHex(e));
        let r = n.keccak256(e).replace("0x", "");
        for (let e = 0; e < 12; e += 4) {
          let n =
              ((parseInt(r.substr(e, 2), 16) << 8) +
                parseInt(r.substr(e + 2, 2), 16)) &
              2047,
            i = (function (t) {
              if (t >= 48 && t <= 57) return t - 48;
              if (t >= 65 && t <= 70) return t - 55;
              if (t >= 97 && t <= 102) return t - 87;
              throw Error("invalid bloom");
            })(t.charCodeAt(t.length - 1 - Math.floor(n / 4))),
            o = 1 << n % 4;
          if ((i & o) !== o) return !1;
        }
        return !0;
      }
      function a(t) {
        return (
          "string" == typeof t &&
          !!(
            /^(0x)?[0-9a-f]{64}$/i.test(t) &&
            (/^(0x)?[0-9a-f]{64}$/.test(t) || /^(0x)?[0-9A-F]{64}$/.test(t))
          )
        );
      }
      function s(t) {
        return (
          "string" == typeof t &&
          !!(
            t.match(/^(0x)?[0-9a-fA-F]{40}$/) ||
            t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)
          )
        );
      }
      (e.isBloom = i),
        (e.isInBloom = o),
        (e.isUserEthereumAddressInBloom = function (t, e) {
          if (!i(t)) throw Error("Invalid bloom given");
          if (!s(e)) throw Error(`Invalid ethereum address given: "${e}"`);
          let r = n.padLeft(e, 64);
          return o(t, r);
        }),
        (e.isContractAddressInBloom = function (t, e) {
          if (!i(t)) throw Error("Invalid bloom given");
          if (!s(e)) throw Error(`Invalid contract address given: "${e}"`);
          return o(t, e);
        }),
        (e.isTopicInBloom = function (t, e) {
          if (!i(t)) throw Error("Invalid bloom given");
          if (!a(e)) throw Error("Invalid topic");
          return o(t, e);
        }),
        (e.isTopic = a),
        (e.isAddress = s);
    },
    339: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      let n = r(1094);
      function i(t) {
        if (null == t) throw Error("cannot convert null value to array");
        if ("string" == typeof t) {
          let e = t.match(/^(0x)?[0-9a-fA-F]*$/);
          if (!e) throw Error("invalid hexidecimal string");
          if ("0x" !== e[1]) throw Error("hex string must have 0x prefix");
          (t = t.substring(2)).length % 2 && (t = "0" + t);
          let r = [];
          for (let e = 0; e < t.length; e += 2)
            r.push(parseInt(t.substr(e, 2), 16));
          return o(new Uint8Array(r));
        }
        if (
          (function (t) {
            if (
              !t ||
              parseInt(String(t.length)) != t.length ||
              "string" == typeof t
            )
              return !1;
            for (let e = 0; e < t.length; e++) {
              let r = t[e];
              if (r < 0 || r >= 256 || parseInt(String(r)) != r) return !1;
            }
            return !0;
          })(t)
        )
          return o(new Uint8Array(t));
        throw Error("invalid arrayify value");
      }
      function o(t) {
        return (
          void 0 !== t.slice ||
            (t.slice = () => {
              let e = Array.prototype.slice.call(arguments);
              return o(new Uint8Array(Array.prototype.slice.apply(t, e)));
            }),
          t
        );
      }
      (e.keccak256 = function (t) {
        return "0x" + n.keccak_256(i(t));
      }),
        (e.padLeft = (t, e) => {
          let r = /^0x/i.test(t) || "number" == typeof t;
          t = t.toString().replace(/^0x/i, "");
          let n = e - t.length + 1 >= 0 ? e - t.length + 1 : 0;
          return (r ? "0x" : "") + Array(n).join("0") + t;
        }),
        (e.bytesToHex = function (t) {
          let e = [];
          for (let r = 0; r < t.length; r++)
            e.push((t[r] >>> 4).toString(16)), e.push((15 & t[r]).toString(16));
          return `0x${e.join("").replace(/^0+/, "")}`;
        }),
        (e.toByteArray = i);
    },
    5443: function (t, e, r) {
      "use strict";
      var n = r(8764).Buffer;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.createHashFunction = function (t) {
          return function (e) {
            var r = t();
            return r.update(e), n.from(r.digest());
          };
        });
    },
    2192: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = r(5443),
        i = r(5811);
      (e.keccak224 = n.createHashFunction(function () {
        return i("keccak224");
      })),
        (e.keccak256 = n.createHashFunction(function () {
          return i("keccak256");
        })),
        (e.keccak384 = n.createHashFunction(function () {
          return i("keccak384");
        })),
        (e.keccak512 = n.createHashFunction(function () {
          return i("keccak512");
        }));
    },
    472: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = r(1798);
      (e.getRandomBytes = function (t) {
        return new Promise(function (e, r) {
          n(t, function (t, n) {
            if (t) {
              r(t);
              return;
            }
            e(n);
          });
        });
      }),
        (e.getRandomBytesSync = function (t) {
          return n(t);
        });
    },
    5053: function (t, e, r) {
      "use strict";
      var n =
          (this && this.__awaiter) ||
          function (t, e, r, n) {
            return new (r || (r = Promise))(function (i, o) {
              function a(t) {
                try {
                  f(n.next(t));
                } catch (t) {
                  o(t);
                }
              }
              function s(t) {
                try {
                  f(n.throw(t));
                } catch (t) {
                  o(t);
                }
              }
              function f(t) {
                var e;
                t.done
                  ? i(t.value)
                  : ((e = t.value) instanceof r
                      ? e
                      : new r(function (t) {
                          t(e);
                        })
                    ).then(a, s);
              }
              f((n = n.apply(t, e || [])).next());
            });
          },
        i =
          (this && this.__generator) ||
          function (t, e) {
            var r,
              n,
              i,
              o,
              a = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function s(o) {
              return function (s) {
                return (function (o) {
                  if (r) throw TypeError("Generator is already executing.");
                  for (; a; )
                    try {
                      if (
                        ((r = 1),
                        n &&
                          (i =
                            2 & o[0]
                              ? n.return
                              : o[0]
                              ? n.throw || ((i = n.return) && i.call(n), 0)
                              : n.next) &&
                          !(i = i.call(n, o[1])).done)
                      )
                        return i;
                      switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                        case 0:
                        case 1:
                          i = o;
                          break;
                        case 4:
                          return a.label++, { value: o[1], done: !1 };
                        case 5:
                          a.label++, (n = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (
                            !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                            (6 === o[0] || 2 === o[0])
                          ) {
                            a = 0;
                            continue;
                          }
                          if (
                            3 === o[0] &&
                            (!i || (o[1] > i[0] && o[1] < i[3]))
                          ) {
                            a.label = o[1];
                            break;
                          }
                          if (6 === o[0] && a.label < i[1]) {
                            (a.label = i[1]), (i = o);
                            break;
                          }
                          if (i && a.label < i[2]) {
                            (a.label = i[2]), a.ops.push(o);
                            break;
                          }
                          i[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      o = e.call(t, a);
                    } catch (t) {
                      (o = [6, t]), (n = 0);
                    } finally {
                      r = i = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, s]);
              };
            }
          };
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = r(7221),
        a = r(472);
      (e.createPrivateKey = function () {
        return n(this, void 0, void 0, function () {
          var t;
          return i(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, a.getRandomBytes(32)];
              case 1:
                if (((t = e.sent()), o.privateKeyVerify(t))) return [2, t];
                return [3, 0];
              case 2:
                return [2];
            }
          });
        });
      }),
        (e.createPrivateKeySync = function () {
          for (;;) {
            var t = a.getRandomBytesSync(32);
            if (o.privateKeyVerify(t)) return t;
          }
        }),
        (function (t) {
          for (var r in t) e.hasOwnProperty(r) || (e[r] = t[r]);
        })(r(7221));
    },
    8670: function (t, e, r) {
      "use strict";
      var n = r(8764).Buffer,
        i =
          (this && this.__read) ||
          function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var n,
              i,
              o = r.call(t),
              a = [];
            try {
              for (; (void 0 === e || e-- > 0) && !(n = o.next()).done; )
                a.push(n.value);
            } catch (t) {
              i = { error: t };
            } finally {
              try {
                n && !n.done && (r = o.return) && r.call(o);
              } finally {
                if (i) throw i.error;
              }
            }
            return a;
          },
        o =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isZeroAddress =
          e.zeroAddress =
          e.importPublic =
          e.privateToAddress =
          e.privateToPublic =
          e.publicToAddress =
          e.pubToAddress =
          e.isValidPublic =
          e.isValidPrivate =
          e.generateAddress2 =
          e.generateAddress =
          e.isValidChecksumAddress =
          e.toChecksumAddress =
          e.isValidAddress =
          e.Account =
            void 0);
      var a = o(r(7596)),
        s = r(4538),
        f = r(5053),
        u = r(4846),
        h = r(6861),
        c = r(4651),
        l = r(5641),
        d = r(3746),
        p = r(2971),
        b = (function () {
          function t(t, e, r, n) {
            void 0 === t && (t = new s.BN(0)),
              void 0 === e && (e = new s.BN(0)),
              void 0 === r && (r = h.KECCAK256_RLP),
              void 0 === n && (n = h.KECCAK256_NULL),
              (this.nonce = t),
              (this.balance = e),
              (this.stateRoot = r),
              (this.codeHash = n),
              this._validate();
          }
          return (
            (t.fromAccountData = function (e) {
              var r = e.nonce,
                n = e.balance,
                i = e.stateRoot,
                o = e.codeHash;
              return new t(
                r ? new s.BN((0, c.toBuffer)(r)) : void 0,
                n ? new s.BN((0, c.toBuffer)(n)) : void 0,
                i ? (0, c.toBuffer)(i) : void 0,
                o ? (0, c.toBuffer)(o) : void 0
              );
            }),
            (t.fromRlpSerializedAccount = function (t) {
              var e = s.rlp.decode(t);
              if (!Array.isArray(e))
                throw Error("Invalid serialized account input. Must be array");
              return this.fromValuesArray(e);
            }),
            (t.fromValuesArray = function (e) {
              var r = i(e, 4),
                n = r[0],
                o = r[1],
                a = r[2],
                f = r[3];
              return new t(new s.BN(n), new s.BN(o), a, f);
            }),
            (t.prototype._validate = function () {
              if (this.nonce.lt(new s.BN(0)))
                throw Error("nonce must be greater than zero");
              if (this.balance.lt(new s.BN(0)))
                throw Error("balance must be greater than zero");
              if (32 !== this.stateRoot.length)
                throw Error("stateRoot must have a length of 32");
              if (32 !== this.codeHash.length)
                throw Error("codeHash must have a length of 32");
            }),
            (t.prototype.raw = function () {
              return [
                (0, p.bnToUnpaddedBuffer)(this.nonce),
                (0, p.bnToUnpaddedBuffer)(this.balance),
                this.stateRoot,
                this.codeHash,
              ];
            }),
            (t.prototype.serialize = function () {
              return s.rlp.encode(this.raw());
            }),
            (t.prototype.isContract = function () {
              return !this.codeHash.equals(h.KECCAK256_NULL);
            }),
            (t.prototype.isEmpty = function () {
              return (
                this.balance.isZero() &&
                this.nonce.isZero() &&
                this.codeHash.equals(h.KECCAK256_NULL)
              );
            }),
            t
          );
        })();
      (e.Account = b),
        (e.isValidAddress = function (t) {
          try {
            (0, d.assertIsString)(t);
          } catch (t) {
            return !1;
          }
          return /^0x[0-9a-fA-F]{40}$/.test(t);
        }),
        (e.toChecksumAddress = function (t, e) {
          (0, d.assertIsHexString)(t);
          var r = (0, u.stripHexPrefix)(t).toLowerCase(),
            n = "";
          e && (n = (0, p.toType)(e, p.TypeOutput.BN).toString() + "0x");
          for (
            var i = (0, l.keccakFromString)(n + r).toString("hex"),
              o = "0x",
              a = 0;
            a < r.length;
            a++
          )
            parseInt(i[a], 16) >= 8 ? (o += r[a].toUpperCase()) : (o += r[a]);
          return o;
        }),
        (e.isValidChecksumAddress = function (t, r) {
          return (
            (0, e.isValidAddress)(t) && (0, e.toChecksumAddress)(t, r) === t
          );
        }),
        (e.generateAddress = function (t, e) {
          (0, d.assertIsBuffer)(t), (0, d.assertIsBuffer)(e);
          var r = new s.BN(e);
          return r.isZero()
            ? (0, l.rlphash)([t, null]).slice(-20)
            : (0, l.rlphash)([t, n.from(r.toArray())]).slice(-20);
        }),
        (e.generateAddress2 = function (t, e, r) {
          return (
            (0, d.assertIsBuffer)(t),
            (0, d.assertIsBuffer)(e),
            (0, d.assertIsBuffer)(r),
            (0, a.default)(20 === t.length),
            (0, a.default)(32 === e.length),
            (0, l.keccak256)(
              n.concat([n.from("ff", "hex"), t, e, (0, l.keccak256)(r)])
            ).slice(-20)
          );
        }),
        (e.isValidPrivate = function (t) {
          return (0, f.privateKeyVerify)(t);
        }),
        (e.isValidPublic = function (t, e) {
          return (void 0 === e && (e = !1),
          (0, d.assertIsBuffer)(t),
          64 === t.length)
            ? (0, f.publicKeyVerify)(n.concat([n.from([4]), t]))
            : !!e && (0, f.publicKeyVerify)(t);
        }),
        (e.pubToAddress = function (t, e) {
          return (
            void 0 === e && (e = !1),
            (0, d.assertIsBuffer)(t),
            e &&
              64 !== t.length &&
              (t = n.from((0, f.publicKeyConvert)(t, !1).slice(1))),
            (0, a.default)(64 === t.length),
            (0, l.keccak)(t).slice(-20)
          );
        }),
        (e.publicToAddress = e.pubToAddress),
        (e.privateToPublic = function (t) {
          return (
            (0, d.assertIsBuffer)(t),
            n.from((0, f.publicKeyCreate)(t, !1)).slice(1)
          );
        }),
        (e.privateToAddress = function (t) {
          return (0, e.publicToAddress)((0, e.privateToPublic)(t));
        }),
        (e.importPublic = function (t) {
          return (
            (0, d.assertIsBuffer)(t),
            64 !== t.length &&
              (t = n.from((0, f.publicKeyConvert)(t, !1).slice(1))),
            t
          );
        }),
        (e.zeroAddress = function () {
          var t = (0, c.zeros)(20);
          return (0, c.bufferToHex)(t);
        }),
        (e.isZeroAddress = function (t) {
          try {
            (0, d.assertIsString)(t);
          } catch (t) {
            return !1;
          }
          return (0, e.zeroAddress)() === t;
        });
    },
    6871: function (t, e, r) {
      "use strict";
      var n = r(8764).Buffer,
        i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Address = void 0);
      var o = i(r(7596)),
        a = r(4538),
        s = r(4651),
        f = r(8670),
        u = (function () {
          function t(t) {
            (0, o.default)(20 === t.length, "Invalid address length"),
              (this.buf = t);
          }
          return (
            (t.zero = function () {
              return new t((0, s.zeros)(20));
            }),
            (t.fromString = function (e) {
              return (
                (0, o.default)((0, f.isValidAddress)(e), "Invalid address"),
                new t((0, s.toBuffer)(e))
              );
            }),
            (t.fromPublicKey = function (e) {
              (0, o.default)(n.isBuffer(e), "Public key should be Buffer");
              var r = (0, f.pubToAddress)(e);
              return new t(r);
            }),
            (t.fromPrivateKey = function (e) {
              (0, o.default)(n.isBuffer(e), "Private key should be Buffer");
              var r = (0, f.privateToAddress)(e);
              return new t(r);
            }),
            (t.generate = function (e, r) {
              return (
                (0, o.default)(a.BN.isBN(r)),
                new t((0, f.generateAddress)(e.buf, r.toArrayLike(n)))
              );
            }),
            (t.generate2 = function (e, r, i) {
              return (
                (0, o.default)(n.isBuffer(r)),
                (0, o.default)(n.isBuffer(i)),
                new t((0, f.generateAddress2)(e.buf, r, i))
              );
            }),
            (t.prototype.equals = function (t) {
              return this.buf.equals(t.buf);
            }),
            (t.prototype.isZero = function () {
              return this.equals(t.zero());
            }),
            (t.prototype.isPrecompileOrSystemAddress = function () {
              var t = new a.BN(this.buf),
                e = new a.BN(0),
                r = new a.BN("ffff", "hex");
              return t.gte(e) && t.lte(r);
            }),
            (t.prototype.toString = function () {
              return "0x" + this.buf.toString("hex");
            }),
            (t.prototype.toBuffer = function () {
              return n.from(this.buf);
            }),
            t
          );
        })();
      e.Address = u;
    },
    4651: function (t, e, r) {
      "use strict";
      var n = r(8764).Buffer,
        i =
          (this && this.__values) ||
          function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
              r = e && t[e],
              n = 0;
            if (r) return r.call(t);
            if (t && "number" == typeof t.length)
              return {
                next: function () {
                  return (
                    t && n >= t.length && (t = void 0),
                    { value: t && t[n++], done: !t }
                  );
                },
              };
            throw TypeError(
              e ? "Object is not iterable." : "Symbol.iterator is not defined."
            );
          },
        o =
          (this && this.__read) ||
          function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var n,
              i,
              o = r.call(t),
              a = [];
            try {
              for (; (void 0 === e || e-- > 0) && !(n = o.next()).done; )
                a.push(n.value);
            } catch (t) {
              i = { error: t };
            } finally {
              try {
                n && !n.done && (r = o.return) && r.call(o);
              } finally {
                if (i) throw i.error;
              }
            }
            return a;
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.bufArrToArr =
          e.arrToBufArr =
          e.validateNoLeadingZeroes =
          e.baToJSON =
          e.toUtf8 =
          e.addHexPrefix =
          e.toUnsigned =
          e.fromSigned =
          e.bufferToHex =
          e.bufferToInt =
          e.toBuffer =
          e.unpadHexString =
          e.unpadArray =
          e.unpadBuffer =
          e.setLengthRight =
          e.setLengthLeft =
          e.zeros =
          e.intToBuffer =
          e.intToHex =
            void 0);
      var a = r(4538),
        s = r(4846),
        f = r(3746);
      (e.intToHex = function (t) {
        if (!Number.isSafeInteger(t) || t < 0)
          throw Error("Received an invalid integer type: ".concat(t));
        return "0x".concat(t.toString(16));
      }),
        (e.intToBuffer = function (t) {
          var r = (0, e.intToHex)(t);
          return n.from((0, s.padToEven)(r.slice(2)), "hex");
        }),
        (e.zeros = function (t) {
          return n.allocUnsafe(t).fill(0);
        });
      var u = function (t, r, n) {
        var i = (0, e.zeros)(r);
        return n
          ? t.length < r
            ? (t.copy(i), i)
            : t.slice(0, r)
          : t.length < r
          ? (t.copy(i, r - t.length), i)
          : t.slice(-r);
      };
      (e.setLengthLeft = function (t, e) {
        return (0, f.assertIsBuffer)(t), u(t, e, !1);
      }),
        (e.setLengthRight = function (t, e) {
          return (0, f.assertIsBuffer)(t), u(t, e, !0);
        });
      var h = function (t) {
        for (var e = t[0]; t.length > 0 && "0" === e.toString(); )
          e = (t = t.slice(1))[0];
        return t;
      };
      (e.unpadBuffer = function (t) {
        return (0, f.assertIsBuffer)(t), h(t);
      }),
        (e.unpadArray = function (t) {
          return (0, f.assertIsArray)(t), h(t);
        }),
        (e.unpadHexString = function (t) {
          return (0, f.assertIsHexString)(t), h((t = (0, s.stripHexPrefix)(t)));
        }),
        (e.toBuffer = function (t) {
          if (null == t) return n.allocUnsafe(0);
          if (n.isBuffer(t) || Array.isArray(t) || t instanceof Uint8Array)
            return n.from(t);
          if ("string" == typeof t) {
            if (!(0, s.isHexString)(t))
              throw Error(
                "Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: ".concat(
                  t
                )
              );
            return n.from((0, s.padToEven)((0, s.stripHexPrefix)(t)), "hex");
          }
          if ("number" == typeof t) return (0, e.intToBuffer)(t);
          if (a.BN.isBN(t)) {
            if (t.isNeg())
              throw Error(
                "Cannot convert negative BN to buffer. Given: ".concat(t)
              );
            return t.toArrayLike(n);
          }
          if (t.toArray) return n.from(t.toArray());
          if (t.toBuffer) return n.from(t.toBuffer());
          throw Error("invalid type");
        }),
        (e.bufferToInt = function (t) {
          return new a.BN((0, e.toBuffer)(t)).toNumber();
        }),
        (e.bufferToHex = function (t) {
          return "0x" + (t = (0, e.toBuffer)(t)).toString("hex");
        }),
        (e.fromSigned = function (t) {
          return new a.BN(t).fromTwos(256);
        }),
        (e.toUnsigned = function (t) {
          return n.from(t.toTwos(256).toArray());
        }),
        (e.addHexPrefix = function (t) {
          return "string" != typeof t
            ? t
            : (0, s.isHexPrefixed)(t)
            ? t
            : "0x" + t;
        }),
        (e.toUtf8 = function (t) {
          if ((t = (0, s.stripHexPrefix)(t)).length % 2 != 0)
            throw Error(
              "Invalid non-even hex string input for toUtf8() provided"
            );
          return n
            .from(t.replace(/^(00)+|(00)+$/g, ""), "hex")
            .toString("utf8");
        }),
        (e.baToJSON = function (t) {
          if (n.isBuffer(t)) return "0x".concat(t.toString("hex"));
          if (t instanceof Array) {
            for (var r = [], i = 0; i < t.length; i++)
              r.push((0, e.baToJSON)(t[i]));
            return r;
          }
        }),
        (e.validateNoLeadingZeroes = function (t) {
          var e, r;
          try {
            for (
              var n = i(Object.entries(t)), a = n.next();
              !a.done;
              a = n.next()
            ) {
              var s = o(a.value, 2),
                f = s[0],
                u = s[1];
              if (void 0 !== u && u.length > 0 && 0 === u[0])
                throw Error(
                  ""
                    .concat(f, " cannot have leading zeroes, received: ")
                    .concat(u.toString("hex"))
                );
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              a && !a.done && (r = n.return) && r.call(n);
            } finally {
              if (e) throw e.error;
            }
          }
        }),
        (e.arrToBufArr = function t(e) {
          return Array.isArray(e)
            ? e.map(function (e) {
                return t(e);
              })
            : n.from(e);
        }),
        (e.bufArrToArr = function t(e) {
          return Array.isArray(e)
            ? e.map(function (e) {
                return t(e);
              })
            : Uint8Array.from(null != e ? e : []);
        });
    },
    6861: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.KECCAK256_RLP =
          e.KECCAK256_RLP_S =
          e.KECCAK256_RLP_ARRAY =
          e.KECCAK256_RLP_ARRAY_S =
          e.KECCAK256_NULL =
          e.KECCAK256_NULL_S =
          e.TWO_POW256 =
          e.MAX_INTEGER =
          e.MAX_UINT64 =
            void 0);
      var n = r(8764),
        i = r(4538);
      (e.MAX_UINT64 = new i.BN("ffffffffffffffff", 16)),
        (e.MAX_INTEGER = new i.BN(
          "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
          16
        )),
        (e.TWO_POW256 = new i.BN(
          "10000000000000000000000000000000000000000000000000000000000000000",
          16
        )),
        (e.KECCAK256_NULL_S =
          "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470"),
        (e.KECCAK256_NULL = n.Buffer.from(e.KECCAK256_NULL_S, "hex")),
        (e.KECCAK256_RLP_ARRAY_S =
          "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347"),
        (e.KECCAK256_RLP_ARRAY = n.Buffer.from(e.KECCAK256_RLP_ARRAY_S, "hex")),
        (e.KECCAK256_RLP_S =
          "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"),
        (e.KECCAK256_RLP = n.Buffer.from(e.KECCAK256_RLP_S, "hex"));
    },
    4538: function (t, e, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, r, n) {
                void 0 === n && (n = r);
                var i = Object.getOwnPropertyDescriptor(e, r);
                (!i ||
                  ("get" in i
                    ? !e.__esModule
                    : i.writable || i.configurable)) &&
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return e[r];
                    },
                  }),
                  Object.defineProperty(t, n, i);
              }
            : function (t, e, r, n) {
                void 0 === n && (n = r), (t[n] = e[r]);
              }),
        i =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (t, e) {
                Object.defineProperty(t, "default", {
                  enumerable: !0,
                  value: e,
                });
              }
            : function (t, e) {
                t.default = e;
              }),
        o =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var r in t)
                "default" !== r &&
                  Object.prototype.hasOwnProperty.call(t, r) &&
                  n(e, t, r);
            return i(e, t), e;
          },
        a =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.rlp = e.BN = void 0);
      var s = a(r(3550));
      e.BN = s.default;
      var f = o(r(1675));
      e.rlp = f;
    },
    5641: function (t, e, r) {
      "use strict";
      var n = r(8764).Buffer;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.rlphash =
          e.ripemd160FromArray =
          e.ripemd160FromString =
          e.ripemd160 =
          e.sha256FromArray =
          e.sha256FromString =
          e.sha256 =
          e.keccakFromArray =
          e.keccakFromHexString =
          e.keccakFromString =
          e.keccak256 =
          e.keccak =
            void 0);
      var i = r(2192),
        o = r(3482),
        a = r(4538),
        s = r(4651),
        f = r(3746);
      (e.keccak = function (t, e) {
        switch ((void 0 === e && (e = 256), (0, f.assertIsBuffer)(t), e)) {
          case 224:
            return (0, i.keccak224)(t);
          case 256:
            return (0, i.keccak256)(t);
          case 384:
            return (0, i.keccak384)(t);
          case 512:
            return (0, i.keccak512)(t);
          default:
            throw Error("Invald algorithm: keccak".concat(e));
        }
      }),
        (e.keccak256 = function (t) {
          return (0, e.keccak)(t);
        }),
        (e.keccakFromString = function (t, r) {
          void 0 === r && (r = 256), (0, f.assertIsString)(t);
          var i = n.from(t, "utf8");
          return (0, e.keccak)(i, r);
        }),
        (e.keccakFromHexString = function (t, r) {
          return (
            void 0 === r && (r = 256),
            (0, f.assertIsHexString)(t),
            (0, e.keccak)((0, s.toBuffer)(t), r)
          );
        }),
        (e.keccakFromArray = function (t, r) {
          return (
            void 0 === r && (r = 256),
            (0, f.assertIsArray)(t),
            (0, e.keccak)((0, s.toBuffer)(t), r)
          );
        });
      var u = function (t) {
        return (t = (0, s.toBuffer)(t)), o("sha256").update(t).digest();
      };
      (e.sha256 = function (t) {
        return (0, f.assertIsBuffer)(t), u(t);
      }),
        (e.sha256FromString = function (t) {
          return (0, f.assertIsString)(t), u(t);
        }),
        (e.sha256FromArray = function (t) {
          return (0, f.assertIsArray)(t), u(t);
        });
      var h = function (t, e) {
        t = (0, s.toBuffer)(t);
        var r = o("rmd160").update(t).digest();
        return !0 === e ? (0, s.setLengthLeft)(r, 32) : r;
      };
      (e.ripemd160 = function (t, e) {
        return (0, f.assertIsBuffer)(t), h(t, e);
      }),
        (e.ripemd160FromString = function (t, e) {
          return (0, f.assertIsString)(t), h(t, e);
        }),
        (e.ripemd160FromArray = function (t, e) {
          return (0, f.assertIsArray)(t), h(t, e);
        }),
        (e.rlphash = function (t) {
          return (0, e.keccak)(a.rlp.encode(t));
        });
    },
    3746: function (t, e, r) {
      "use strict";
      var n = r(8764).Buffer;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.assertIsString =
          e.assertIsArray =
          e.assertIsBuffer =
          e.assertIsHexString =
            void 0);
      var i = r(4846);
      (e.assertIsHexString = function (t) {
        if (!(0, i.isHexString)(t))
          throw Error(
            "This method only supports 0x-prefixed hex strings but input was: ".concat(
              t
            )
          );
      }),
        (e.assertIsBuffer = function (t) {
          if (!n.isBuffer(t))
            throw Error(
              "This method only supports Buffer but input was: ".concat(t)
            );
        }),
        (e.assertIsArray = function (t) {
          if (!Array.isArray(t))
            throw Error(
              "This method only supports number arrays but input was: ".concat(
                t
              )
            );
        }),
        (e.assertIsString = function (t) {
          if ("string" != typeof t)
            throw Error(
              "This method only supports strings but input was: ".concat(t)
            );
        });
    },
    2751: function (t, e, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, r, n) {
                void 0 === n && (n = r);
                var i = Object.getOwnPropertyDescriptor(e, r);
                (!i ||
                  ("get" in i
                    ? !e.__esModule
                    : i.writable || i.configurable)) &&
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return e[r];
                    },
                  }),
                  Object.defineProperty(t, n, i);
              }
            : function (t, e, r, n) {
                void 0 === n && (n = r), (t[n] = e[r]);
              }),
        i =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var r in t)
              "default" === r ||
                Object.prototype.hasOwnProperty.call(e, r) ||
                n(e, t, r);
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isHexString =
          e.getKeys =
          e.fromAscii =
          e.fromUtf8 =
          e.toAscii =
          e.arrayContainsArray =
          e.getBinarySize =
          e.padToEven =
          e.stripHexPrefix =
          e.isHexPrefixed =
            void 0),
        i(r(6861), e),
        i(r(8670), e),
        i(r(6871), e),
        i(r(5641), e),
        i(r(7112), e),
        i(r(4651), e),
        i(r(867), e),
        i(r(4538), e),
        i(r(2971), e);
      var o = r(4846);
      Object.defineProperty(e, "isHexPrefixed", {
        enumerable: !0,
        get: function () {
          return o.isHexPrefixed;
        },
      }),
        Object.defineProperty(e, "stripHexPrefix", {
          enumerable: !0,
          get: function () {
            return o.stripHexPrefix;
          },
        }),
        Object.defineProperty(e, "padToEven", {
          enumerable: !0,
          get: function () {
            return o.padToEven;
          },
        }),
        Object.defineProperty(e, "getBinarySize", {
          enumerable: !0,
          get: function () {
            return o.getBinarySize;
          },
        }),
        Object.defineProperty(e, "arrayContainsArray", {
          enumerable: !0,
          get: function () {
            return o.arrayContainsArray;
          },
        }),
        Object.defineProperty(e, "toAscii", {
          enumerable: !0,
          get: function () {
            return o.toAscii;
          },
        }),
        Object.defineProperty(e, "fromUtf8", {
          enumerable: !0,
          get: function () {
            return o.fromUtf8;
          },
        }),
        Object.defineProperty(e, "fromAscii", {
          enumerable: !0,
          get: function () {
            return o.fromAscii;
          },
        }),
        Object.defineProperty(e, "getKeys", {
          enumerable: !0,
          get: function () {
            return o.getKeys;
          },
        }),
        Object.defineProperty(e, "isHexString", {
          enumerable: !0,
          get: function () {
            return o.isHexString;
          },
        });
    },
    4846: function (t, e, r) {
      "use strict";
      var n = r(8764).Buffer;
      function i(t) {
        if ("string" != typeof t)
          throw Error(
            "[isHexPrefixed] input must be type 'string', received type ".concat(
              typeof t
            )
          );
        return "0" === t[0] && "x" === t[1];
      }
      function o(t) {
        var e = t;
        if ("string" != typeof e)
          throw Error(
            "[padToEven] value must be type 'string', received ".concat(
              typeof e
            )
          );
        return e.length % 2 && (e = "0".concat(e)), e;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isHexString =
          e.getKeys =
          e.fromAscii =
          e.fromUtf8 =
          e.toAscii =
          e.arrayContainsArray =
          e.getBinarySize =
          e.padToEven =
          e.stripHexPrefix =
          e.isHexPrefixed =
            void 0),
        (e.isHexPrefixed = i),
        (e.stripHexPrefix = function (t) {
          if ("string" != typeof t)
            throw Error(
              "[stripHexPrefix] input must be type 'string', received ".concat(
                typeof t
              )
            );
          return i(t) ? t.slice(2) : t;
        }),
        (e.padToEven = o),
        (e.getBinarySize = function (t) {
          if ("string" != typeof t)
            throw Error(
              "[getBinarySize] method requires input type 'string', recieved ".concat(
                typeof t
              )
            );
          return n.byteLength(t, "utf8");
        }),
        (e.arrayContainsArray = function (t, e, r) {
          if (!0 !== Array.isArray(t))
            throw Error(
              "[arrayContainsArray] method requires input 'superset' to be an array, got type '".concat(
                typeof t,
                "'"
              )
            );
          if (!0 !== Array.isArray(e))
            throw Error(
              "[arrayContainsArray] method requires input 'subset' to be an array, got type '".concat(
                typeof e,
                "'"
              )
            );
          return e[r ? "some" : "every"](function (e) {
            return t.indexOf(e) >= 0;
          });
        }),
        (e.toAscii = function (t) {
          var e = "",
            r = 0,
            n = t.length;
          for ("0x" === t.substring(0, 2) && (r = 2); r < n; r += 2)
            e += String.fromCharCode(parseInt(t.substr(r, 2), 16));
          return e;
        }),
        (e.fromUtf8 = function (t) {
          var e = n.from(t, "utf8");
          return "0x".concat(o(e.toString("hex")).replace(/^0+|0+$/g, ""));
        }),
        (e.fromAscii = function (t) {
          for (var e = "", r = 0; r < t.length; r++) {
            var n = t.charCodeAt(r).toString(16);
            e += n.length < 2 ? "0".concat(n) : n;
          }
          return "0x".concat(e);
        }),
        (e.getKeys = function (t, e, r) {
          if (!Array.isArray(t))
            throw Error(
              "[getKeys] method expects input 'params' to be an array, got ".concat(
                typeof t
              )
            );
          if ("string" != typeof e)
            throw Error(
              "[getKeys] method expects input 'key' to be type 'string', got ".concat(
                typeof t
              )
            );
          for (var n = [], i = 0; i < t.length; i++) {
            var o = t[i][e];
            if (r && !o) o = "";
            else if ("string" != typeof o)
              throw Error(
                "invalid abi - expected type 'string', received ".concat(
                  typeof o
                )
              );
            n.push(o);
          }
          return n;
        }),
        (e.isHexString = function (t, e) {
          return (
            "string" == typeof t &&
            !!t.match(/^0x[0-9A-Fa-f]*$/) &&
            (!e || t.length === 2 + 2 * e)
          );
        });
    },
    867: function (t, e, r) {
      "use strict";
      var n = r(8764).Buffer,
        i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.defineProperties = void 0);
      var o = i(r(7596)),
        a = r(4846),
        s = r(4538),
        f = r(4651);
      e.defineProperties = function (t, e, r) {
        if (
          ((t.raw = []),
          (t._fields = []),
          (t.toJSON = function (e) {
            if ((void 0 === e && (e = !1), e)) {
              var r = {};
              return (
                t._fields.forEach(function (e) {
                  r[e] = "0x".concat(t[e].toString("hex"));
                }),
                r
              );
            }
            return (0, f.baToJSON)(t.raw);
          }),
          (t.serialize = function () {
            return s.rlp.encode(t.raw);
          }),
          e.forEach(function (e, r) {
            function i() {
              return t.raw[r];
            }
            function a(i) {
              "00" !== (i = (0, f.toBuffer)(i)).toString("hex") ||
                e.allowZero ||
                (i = n.allocUnsafe(0)),
                e.allowLess && e.length
                  ? ((i = (0, f.unpadBuffer)(i)),
                    (0, o.default)(
                      e.length >= i.length,
                      "The field "
                        .concat(e.name, " must not have more ")
                        .concat(e.length, " bytes")
                    ))
                  : !(e.allowZero && 0 === i.length) &&
                    e.length &&
                    (0, o.default)(
                      e.length === i.length,
                      "The field "
                        .concat(e.name, " must have byte length of ")
                        .concat(e.length)
                    ),
                (t.raw[r] = i);
            }
            t._fields.push(e.name),
              Object.defineProperty(t, e.name, {
                enumerable: !0,
                configurable: !0,
                get: i,
                set: a,
              }),
              e.default && (t[e.name] = e.default),
              e.alias &&
                Object.defineProperty(t, e.alias, {
                  enumerable: !1,
                  configurable: !0,
                  set: a,
                  get: i,
                });
          }),
          r)
        ) {
          if (
            ("string" == typeof r &&
              (r = n.from((0, a.stripHexPrefix)(r), "hex")),
            n.isBuffer(r) && (r = s.rlp.decode(r)),
            Array.isArray(r))
          ) {
            if (r.length > t._fields.length)
              throw Error("wrong number of fields in data");
            r.forEach(function (e, r) {
              t[t._fields[r]] = (0, f.toBuffer)(e);
            });
          } else if ("object" == typeof r) {
            var i = Object.keys(r);
            e.forEach(function (e) {
              -1 !== i.indexOf(e.name) && (t[e.name] = r[e.name]),
                -1 !== i.indexOf(e.alias) && (t[e.alias] = r[e.alias]);
            });
          } else throw Error("invalid data");
        }
      };
    },
    7112: function (t, e, r) {
      "use strict";
      var n = r(8764).Buffer;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.hashPersonalMessage =
          e.isValidSignature =
          e.fromRpcSig =
          e.toCompactSig =
          e.toRpcSig =
          e.ecrecover =
          e.ecsign =
            void 0);
      var i = r(5053),
        o = r(4538),
        a = r(4651),
        s = r(5641),
        f = r(3746),
        u = r(2971);
      function h(t, e) {
        var r = (0, u.toType)(t, u.TypeOutput.BN);
        if (r.eqn(0) || r.eqn(1)) return (0, u.toType)(t, u.TypeOutput.BN);
        if (!e) return r.subn(27);
        var n = (0, u.toType)(e, u.TypeOutput.BN);
        return r.sub(n.muln(2).addn(35));
      }
      function c(t) {
        var e = new o.BN(t);
        return e.eqn(0) || e.eqn(1);
      }
      (e.ecsign = function (t, e, r) {
        var o = (0, i.ecdsaSign)(t, e),
          a = o.signature,
          s = o.recid,
          f = n.from(a.slice(0, 32)),
          h = n.from(a.slice(32, 64));
        if (!r || "number" == typeof r) {
          if (r && !Number.isSafeInteger(r))
            throw Error(
              "The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)"
            );
          return { r: f, s: h, v: r ? s + (2 * r + 35) : s + 27 };
        }
        return {
          r: f,
          s: h,
          v: (0, u.toType)(r, u.TypeOutput.BN)
            .muln(2)
            .addn(35)
            .addn(s)
            .toArrayLike(n),
        };
      }),
        (e.ecrecover = function (t, e, r, o, s) {
          var f = n.concat(
              [(0, a.setLengthLeft)(r, 32), (0, a.setLengthLeft)(o, 32)],
              64
            ),
            u = h(e, s);
          if (!c(u)) throw Error("Invalid signature v value");
          var l = (0, i.ecdsaRecover)(f, u.toNumber(), t);
          return n.from((0, i.publicKeyConvert)(l, !1).slice(1));
        }),
        (e.toRpcSig = function (t, e, r, i) {
          if (!c(h(t, i))) throw Error("Invalid signature v value");
          return (0, a.bufferToHex)(
            n.concat([
              (0, a.setLengthLeft)(e, 32),
              (0, a.setLengthLeft)(r, 32),
              (0, a.toBuffer)(t),
            ])
          );
        }),
        (e.toCompactSig = function (t, e, r, i) {
          if (!c(h(t, i))) throw Error("Invalid signature v value");
          var o = (0, u.toType)(t, u.TypeOutput.Number),
            s = r;
          return (
            ((o > 28 && o % 2 == 1) || 1 === o || 28 === o) &&
              ((s = n.from(r)), (s[0] |= 128)),
            (0, a.bufferToHex)(
              n.concat([
                (0, a.setLengthLeft)(e, 32),
                (0, a.setLengthLeft)(s, 32),
              ])
            )
          );
        }),
        (e.fromRpcSig = function (t) {
          var e,
            r,
            n,
            i = (0, a.toBuffer)(t);
          if (i.length >= 65)
            (e = i.slice(0, 32)),
              (r = i.slice(32, 64)),
              (n = (0, a.bufferToInt)(i.slice(64)));
          else if (64 === i.length)
            (e = i.slice(0, 32)),
              (r = i.slice(32, 64)),
              (n = (0, a.bufferToInt)(i.slice(32, 33)) >> 7),
              (r[0] &= 127);
          else throw Error("Invalid signature length");
          return n < 27 && (n += 27), { v: n, r: e, s: r };
        }),
        (e.isValidSignature = function (t, e, r, n, i) {
          void 0 === n && (n = !0);
          var a = new o.BN(
              "7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0",
              16
            ),
            s = new o.BN(
              "fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",
              16
            );
          if (32 !== e.length || 32 !== r.length || !c(h(t, i))) return !1;
          var f = new o.BN(e),
            u = new o.BN(r);
          return (
            !(f.isZero() || f.gt(s) || u.isZero() || u.gt(s)) &&
            (!n || 1 !== u.cmp(a))
          );
        }),
        (e.hashPersonalMessage = function (t) {
          (0, f.assertIsBuffer)(t);
          var e = n.from(
            "\x19Ethereum Signed Message:\n".concat(t.length),
            "utf-8"
          );
          return (0, s.keccak)(n.concat([e, t]));
        });
    },
    2971: function (t, e, r) {
      "use strict";
      var n,
        i,
        o = r(8764).Buffer;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.toType =
          e.TypeOutput =
          e.bnToRlp =
          e.bnToUnpaddedBuffer =
          e.bnToHex =
            void 0);
      var a = r(4538),
        s = r(4846),
        f = r(4651);
      function u(t) {
        return (0, f.unpadBuffer)(t.toArrayLike(o));
      }
      (e.bnToHex = function (t) {
        return "0x".concat(t.toString(16));
      }),
        (e.bnToUnpaddedBuffer = u),
        (e.bnToRlp = function (t) {
          return u(t);
        }),
        ((n = i = e.TypeOutput || (e.TypeOutput = {}))[(n.Number = 0)] =
          "Number"),
        (n[(n.BN = 1)] = "BN"),
        (n[(n.Buffer = 2)] = "Buffer"),
        (n[(n.PrefixedHexString = 3)] = "PrefixedHexString"),
        (e.toType = function (t, e) {
          if (null === t) return null;
          if (void 0 !== t) {
            if ("string" != typeof t || (0, s.isHexString)(t)) {
              if ("number" == typeof t && !Number.isSafeInteger(t))
                throw Error(
                  "The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)"
                );
            } else
              throw Error(
                "A string must be provided with a 0x-prefix, given: ".concat(t)
              );
            var r = (0, f.toBuffer)(t);
            if (e === i.Buffer) return r;
            if (e === i.BN) return new a.BN(r);
            if (e !== i.Number) return "0x".concat(r.toString("hex"));
            var n = new a.BN(r),
              o = new a.BN(Number.MAX_SAFE_INTEGER.toString());
            if (n.gt(o))
              throw Error(
                "The provided number is greater than MAX_SAFE_INTEGER (please use an alternative output type)"
              );
            return n.toNumber();
          }
        });
    },
    4278: function (t, e, r) {
      "use strict";
      var n = r(3614),
        i = r(3206),
        o = new n(0),
        a = new n(-1),
        s = {
          noether: "0",
          wei: "1",
          kwei: "1000",
          Kwei: "1000",
          babbage: "1000",
          femtoether: "1000",
          mwei: "1000000",
          Mwei: "1000000",
          lovelace: "1000000",
          picoether: "1000000",
          gwei: "1000000000",
          Gwei: "1000000000",
          shannon: "1000000000",
          nanoether: "1000000000",
          nano: "1000000000",
          szabo: "1000000000000",
          microether: "1000000000000",
          micro: "1000000000000",
          finney: "1000000000000000",
          milliether: "1000000000000000",
          milli: "1000000000000000",
          ether: "1000000000000000000",
          kether: "1000000000000000000000",
          grand: "1000000000000000000000",
          mether: "1000000000000000000000000",
          gether: "1000000000000000000000000000",
          tether: "1000000000000000000000000000000",
        };
      function f(t) {
        var e = s[t ? t.toLowerCase() : "ether"];
        if ("string" != typeof e)
          throw Error(
            "[ethjs-unit] the unit provided " +
              t +
              " doesn't exists, please use the one of the following units " +
              JSON.stringify(s, null, 2)
          );
        return new n(e, 10);
      }
      function u(t) {
        if ("string" == typeof t) {
          if (!t.match(/^-?[0-9.]+$/))
            throw Error(
              "while converting number to string, invalid number value '" +
                t +
                "', should be a number matching (^-?[0-9.]+)."
            );
          return t;
        }
        if ("number" == typeof t) return String(t);
        if (
          "object" == typeof t &&
          t.toString &&
          (t.toTwos || t.dividedToIntegerBy)
        )
          return t.toPrecision ? String(t.toPrecision()) : t.toString(10);
        throw Error(
          "while converting number to string, invalid number value '" +
            t +
            "' type " +
            typeof t +
            "."
        );
      }
      t.exports = {
        unitMap: s,
        numberToString: u,
        getValueOfUnit: f,
        fromWei: function (t, e, r) {
          var n = i(t),
            u = n.lt(o),
            h = f(e),
            c = s[e].length - 1 || 1,
            l = r || {};
          u && (n = n.mul(a));
          for (var d = n.mod(h).toString(10); d.length < c; ) d = "0" + d;
          l.pad || (d = d.match(/^([0-9]*[1-9]|0)(0*)/)[1]);
          var p = n.div(h).toString(10);
          l.commify && (p = p.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
          var b = "" + p + ("0" == d ? "" : "." + d);
          return u && (b = "-" + b), b;
        },
        toWei: function (t, e) {
          var r = u(t),
            i = f(e),
            o = s[e].length - 1 || 1,
            h = "-" === r.substring(0, 1);
          if ((h && (r = r.substring(1)), "." === r))
            throw Error(
              "[ethjs-unit] while converting number " +
                t +
                " to wei, invalid value"
            );
          var c = r.split(".");
          if (c.length > 2)
            throw Error(
              "[ethjs-unit] while converting number " +
                t +
                " to wei,  too many decimal points"
            );
          var l = c[0],
            d = c[1];
          if ((l || (l = "0"), d || (d = "0"), d.length > o))
            throw Error(
              "[ethjs-unit] while converting number " +
                t +
                " to wei, too many decimal places"
            );
          for (; d.length < o; ) d += "0";
          (l = new n(l)), (d = new n(d));
          var p = l.mul(i).add(d);
          return h && (p = p.mul(a)), new n(p.toString(10), 10);
        },
      };
    },
    3614: function (t, e, r) {
      !(function (t, e) {
        "use strict";
        function n(t, e) {
          if (!t) throw Error(e || "Assertion failed");
        }
        function i(t, e) {
          t.super_ = e;
          var r = function () {};
          (r.prototype = e.prototype),
            (t.prototype = new r()),
            (t.prototype.constructor = t);
        }
        function o(t, e, r) {
          if (o.isBN(t)) return t;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== t &&
              (("le" === e || "be" === e) && ((r = e), (e = 10)),
              this._init(t || 0, e || 10, r || "be"));
        }
        "object" == typeof t ? (t.exports = o) : (e.BN = o),
          (o.BN = o),
          (o.wordSize = 26);
        try {
          f = r(8764).Buffer;
        } catch (t) {}
        function a(t, e, r) {
          for (var n = 0, i = Math.min(t.length, r), o = e; o < i; o++) {
            var a = t.charCodeAt(o) - 48;
            (n <<= 4),
              a >= 49 && a <= 54
                ? (n |= a - 49 + 10)
                : a >= 17 && a <= 22
                ? (n |= a - 17 + 10)
                : (n |= 15 & a);
          }
          return n;
        }
        function s(t, e, r, n) {
          for (var i = 0, o = Math.min(t.length, r), a = e; a < o; a++) {
            var s = t.charCodeAt(a) - 48;
            (i *= n),
              s >= 49
                ? (i += s - 49 + 10)
                : s >= 17
                ? (i += s - 17 + 10)
                : (i += s);
          }
          return i;
        }
        (o.isBN = function (t) {
          return (
            t instanceof o ||
            (null !== t &&
              "object" == typeof t &&
              t.constructor.wordSize === o.wordSize &&
              Array.isArray(t.words))
          );
        }),
          (o.max = function (t, e) {
            return t.cmp(e) > 0 ? t : e;
          }),
          (o.min = function (t, e) {
            return 0 > t.cmp(e) ? t : e;
          }),
          (o.prototype._init = function (t, e, r) {
            if ("number" == typeof t) return this._initNumber(t, e, r);
            if ("object" == typeof t) return this._initArray(t, e, r);
            "hex" === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36);
            var i = 0;
            "-" === (t = t.toString().replace(/\s+/g, ""))[0] && i++,
              16 === e ? this._parseHex(t, i) : this._parseBase(t, e, i),
              "-" === t[0] && (this.negative = 1),
              this.strip(),
              "le" === r && this._initArray(this.toArray(), e, r);
          }),
          (o.prototype._initNumber = function (t, e, r) {
            t < 0 && ((this.negative = 1), (t = -t)),
              t < 67108864
                ? ((this.words = [67108863 & t]), (this.length = 1))
                : t < 4503599627370496
                ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                  (this.length = 2))
                : (n(t < 9007199254740992),
                  (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                  (this.length = 3)),
              "le" === r && this._initArray(this.toArray(), e, r);
          }),
          (o.prototype._initArray = function (t, e, r) {
            if ((n("number" == typeof t.length), t.length <= 0))
              return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(t.length / 3)),
              (this.words = Array(this.length));
            for (var i, o, a = 0; a < this.length; a++) this.words[a] = 0;
            var s = 0;
            if ("be" === r)
              for (a = t.length - 1, i = 0; a >= 0; a -= 3)
                (o = t[a] | (t[a - 1] << 8) | (t[a - 2] << 16)),
                  (this.words[i] |= (o << s) & 67108863),
                  (this.words[i + 1] = (o >>> (26 - s)) & 67108863),
                  (s += 24) >= 26 && ((s -= 26), i++);
            else if ("le" === r)
              for (a = 0, i = 0; a < t.length; a += 3)
                (o = t[a] | (t[a + 1] << 8) | (t[a + 2] << 16)),
                  (this.words[i] |= (o << s) & 67108863),
                  (this.words[i + 1] = (o >>> (26 - s)) & 67108863),
                  (s += 24) >= 26 && ((s -= 26), i++);
            return this.strip();
          }),
          (o.prototype._parseHex = function (t, e) {
            (this.length = Math.ceil((t.length - e) / 6)),
              (this.words = Array(this.length));
            for (var r, n, i = 0; i < this.length; i++) this.words[i] = 0;
            var o = 0;
            for (i = t.length - 6, r = 0; i >= e; i -= 6)
              (n = a(t, i, i + 6)),
                (this.words[r] |= (n << o) & 67108863),
                (this.words[r + 1] |= (n >>> (26 - o)) & 4194303),
                (o += 24) >= 26 && ((o -= 26), r++);
            i + 6 !== e &&
              ((n = a(t, e, i + 6)),
              (this.words[r] |= (n << o) & 67108863),
              (this.words[r + 1] |= (n >>> (26 - o)) & 4194303)),
              this.strip();
          }),
          (o.prototype._parseBase = function (t, e, r) {
            (this.words = [0]), (this.length = 1);
            for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
            n--, (i = (i / e) | 0);
            for (
              var o = t.length - r,
                a = o % n,
                f = Math.min(o, o - a) + r,
                u = 0,
                h = r;
              h < f;
              h += n
            )
              (u = s(t, h, h + n, e)),
                this.imuln(i),
                this.words[0] + u < 67108864
                  ? (this.words[0] += u)
                  : this._iaddn(u);
            if (0 !== a) {
              var c = 1;
              for (u = s(t, h, t.length, e), h = 0; h < a; h++) c *= e;
              this.imuln(c),
                this.words[0] + u < 67108864
                  ? (this.words[0] += u)
                  : this._iaddn(u);
            }
          }),
          (o.prototype.copy = function (t) {
            t.words = Array(this.length);
            for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
            (t.length = this.length),
              (t.negative = this.negative),
              (t.red = this.red);
          }),
          (o.prototype.clone = function () {
            var t = new o(null);
            return this.copy(t), t;
          }),
          (o.prototype._expand = function (t) {
            for (; this.length < t; ) this.words[this.length++] = 0;
            return this;
          }),
          (o.prototype.strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--;
            return this._normSign();
          }),
          (o.prototype._normSign = function () {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            );
          }),
          (o.prototype.inspect = function () {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          });
        var f,
          u = [
            "",
            "0",
            "00",
            "000",
            "0000",
            "00000",
            "000000",
            "0000000",
            "00000000",
            "000000000",
            "0000000000",
            "00000000000",
            "000000000000",
            "0000000000000",
            "00000000000000",
            "000000000000000",
            "0000000000000000",
            "00000000000000000",
            "000000000000000000",
            "0000000000000000000",
            "00000000000000000000",
            "000000000000000000000",
            "0000000000000000000000",
            "00000000000000000000000",
            "000000000000000000000000",
            "0000000000000000000000000",
          ],
          h = [
            0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
          ],
          c = [
            0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
            16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
            11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
            5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
            20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
            60466176,
          ];
        function l(t, e, r) {
          r.negative = e.negative ^ t.negative;
          var n = (t.length + e.length) | 0;
          (r.length = n), (n = (n - 1) | 0);
          var i = 0 | t.words[0],
            o = 0 | e.words[0],
            a = i * o,
            s = 67108863 & a,
            f = (a / 67108864) | 0;
          r.words[0] = s;
          for (var u = 1; u < n; u++) {
            for (
              var h = f >>> 26,
                c = 67108863 & f,
                l = Math.min(u, e.length - 1),
                d = Math.max(0, u - t.length + 1);
              d <= l;
              d++
            ) {
              var p = (u - d) | 0;
              (h +=
                ((a = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + c) /
                  67108864) |
                0),
                (c = 67108863 & a);
            }
            (r.words[u] = 0 | c), (f = 0 | h);
          }
          return 0 !== f ? (r.words[u] = 0 | f) : r.length--, r.strip();
        }
        (o.prototype.toString = function (t, e) {
          if (((e = 0 | e || 1), 16 === (t = t || 10) || "hex" === t)) {
            r = "";
            for (var r, i = 0, o = 0, a = 0; a < this.length; a++) {
              var s = this.words[a],
                f = (((s << i) | o) & 16777215).toString(16);
              (r =
                0 != (o = (s >>> (24 - i)) & 16777215) || a !== this.length - 1
                  ? u[6 - f.length] + f + r
                  : f + r),
                (i += 2) >= 26 && ((i -= 26), a--);
            }
            for (0 !== o && (r = o.toString(16) + r); r.length % e != 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          if (t === (0 | t) && t >= 2 && t <= 36) {
            var l = h[t],
              d = c[t];
            r = "";
            var p = this.clone();
            for (p.negative = 0; !p.isZero(); ) {
              var b = p.modn(d).toString(t);
              r = (p = p.idivn(d)).isZero() ? b + r : u[l - b.length] + b + r;
            }
            for (this.isZero() && (r = "0" + r); r.length % e != 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          n(!1, "Base should be between 2 and 36");
        }),
          (o.prototype.toNumber = function () {
            var t = this.words[0];
            return (
              2 === this.length
                ? (t += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (t += 4503599627370496 + 67108864 * this.words[1])
                : this.length > 2 &&
                  n(!1, "Number can only safely store up to 53 bits"),
              0 !== this.negative ? -t : t
            );
          }),
          (o.prototype.toJSON = function () {
            return this.toString(16);
          }),
          (o.prototype.toBuffer = function (t, e) {
            return n(void 0 !== f), this.toArrayLike(f, t, e);
          }),
          (o.prototype.toArray = function (t, e) {
            return this.toArrayLike(Array, t, e);
          }),
          (o.prototype.toArrayLike = function (t, e, r) {
            var i,
              o,
              a = this.byteLength(),
              s = r || Math.max(1, a);
            n(a <= s, "byte array longer than desired length"),
              n(s > 0, "Requested array length <= 0"),
              this.strip();
            var f = new t(s),
              u = this.clone();
            if ("le" === e) {
              for (o = 0; !u.isZero(); o++)
                (i = u.andln(255)), u.iushrn(8), (f[o] = i);
              for (; o < s; o++) f[o] = 0;
            } else {
              for (o = 0; o < s - a; o++) f[o] = 0;
              for (o = 0; !u.isZero(); o++)
                (i = u.andln(255)), u.iushrn(8), (f[s - o - 1] = i);
            }
            return f;
          }),
          Math.clz32
            ? (o.prototype._countBits = function (t) {
                return 32 - Math.clz32(t);
              })
            : (o.prototype._countBits = function (t) {
                var e = t,
                  r = 0;
                return (
                  e >= 4096 && ((r += 13), (e >>>= 13)),
                  e >= 64 && ((r += 7), (e >>>= 7)),
                  e >= 8 && ((r += 4), (e >>>= 4)),
                  e >= 2 && ((r += 2), (e >>>= 2)),
                  r + e
                );
              }),
          (o.prototype._zeroBits = function (t) {
            if (0 === t) return 26;
            var e = t,
              r = 0;
            return (
              (8191 & e) == 0 && ((r += 13), (e >>>= 13)),
              (127 & e) == 0 && ((r += 7), (e >>>= 7)),
              (15 & e) == 0 && ((r += 4), (e >>>= 4)),
              (3 & e) == 0 && ((r += 2), (e >>>= 2)),
              (1 & e) == 0 && r++,
              r
            );
          }),
          (o.prototype.bitLength = function () {
            var t = this.words[this.length - 1],
              e = this._countBits(t);
            return (this.length - 1) * 26 + e;
          }),
          (o.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var t = 0, e = 0; e < this.length; e++) {
              var r = this._zeroBits(this.words[e]);
              if (((t += r), 26 !== r)) break;
            }
            return t;
          }),
          (o.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }),
          (o.prototype.toTwos = function (t) {
            return 0 !== this.negative
              ? this.abs().inotn(t).iaddn(1)
              : this.clone();
          }),
          (o.prototype.fromTwos = function (t) {
            return this.testn(t - 1)
              ? this.notn(t).iaddn(1).ineg()
              : this.clone();
          }),
          (o.prototype.isNeg = function () {
            return 0 !== this.negative;
          }),
          (o.prototype.neg = function () {
            return this.clone().ineg();
          }),
          (o.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
          }),
          (o.prototype.iuor = function (t) {
            for (; this.length < t.length; ) this.words[this.length++] = 0;
            for (var e = 0; e < t.length; e++)
              this.words[e] = this.words[e] | t.words[e];
            return this.strip();
          }),
          (o.prototype.ior = function (t) {
            return n((this.negative | t.negative) == 0), this.iuor(t);
          }),
          (o.prototype.or = function (t) {
            return this.length > t.length
              ? this.clone().ior(t)
              : t.clone().ior(this);
          }),
          (o.prototype.uor = function (t) {
            return this.length > t.length
              ? this.clone().iuor(t)
              : t.clone().iuor(this);
          }),
          (o.prototype.iuand = function (t) {
            var e;
            e = this.length > t.length ? t : this;
            for (var r = 0; r < e.length; r++)
              this.words[r] = this.words[r] & t.words[r];
            return (this.length = e.length), this.strip();
          }),
          (o.prototype.iand = function (t) {
            return n((this.negative | t.negative) == 0), this.iuand(t);
          }),
          (o.prototype.and = function (t) {
            return this.length > t.length
              ? this.clone().iand(t)
              : t.clone().iand(this);
          }),
          (o.prototype.uand = function (t) {
            return this.length > t.length
              ? this.clone().iuand(t)
              : t.clone().iuand(this);
          }),
          (o.prototype.iuxor = function (t) {
            this.length > t.length
              ? ((e = this), (r = t))
              : ((e = t), (r = this));
            for (var e, r, n = 0; n < r.length; n++)
              this.words[n] = e.words[n] ^ r.words[n];
            if (this !== e)
              for (; n < e.length; n++) this.words[n] = e.words[n];
            return (this.length = e.length), this.strip();
          }),
          (o.prototype.ixor = function (t) {
            return n((this.negative | t.negative) == 0), this.iuxor(t);
          }),
          (o.prototype.xor = function (t) {
            return this.length > t.length
              ? this.clone().ixor(t)
              : t.clone().ixor(this);
          }),
          (o.prototype.uxor = function (t) {
            return this.length > t.length
              ? this.clone().iuxor(t)
              : t.clone().iuxor(this);
          }),
          (o.prototype.inotn = function (t) {
            n("number" == typeof t && t >= 0);
            var e = 0 | Math.ceil(t / 26),
              r = t % 26;
            this._expand(e), r > 0 && e--;
            for (var i = 0; i < e; i++)
              this.words[i] = 67108863 & ~this.words[i];
            return (
              r > 0 &&
                (this.words[i] = ~this.words[i] & (67108863 >> (26 - r))),
              this.strip()
            );
          }),
          (o.prototype.notn = function (t) {
            return this.clone().inotn(t);
          }),
          (o.prototype.setn = function (t, e) {
            n("number" == typeof t && t >= 0);
            var r = (t / 26) | 0,
              i = t % 26;
            return (
              this._expand(r + 1),
              e
                ? (this.words[r] = this.words[r] | (1 << i))
                : (this.words[r] = this.words[r] & ~(1 << i)),
              this.strip()
            );
          }),
          (o.prototype.iadd = function (t) {
            if (0 !== this.negative && 0 === t.negative)
              return (
                (this.negative = 0),
                (e = this.isub(t)),
                (this.negative ^= 1),
                this._normSign()
              );
            if (0 === this.negative && 0 !== t.negative)
              return (
                (t.negative = 0),
                (e = this.isub(t)),
                (t.negative = 1),
                e._normSign()
              );
            this.length > t.length
              ? ((r = this), (n = t))
              : ((r = t), (n = this));
            for (var e, r, n, i = 0, o = 0; o < n.length; o++)
              (e = (0 | r.words[o]) + (0 | n.words[o]) + i),
                (this.words[o] = 67108863 & e),
                (i = e >>> 26);
            for (; 0 !== i && o < r.length; o++)
              (e = (0 | r.words[o]) + i),
                (this.words[o] = 67108863 & e),
                (i = e >>> 26);
            if (((this.length = r.length), 0 !== i))
              (this.words[this.length] = i), this.length++;
            else if (r !== this)
              for (; o < r.length; o++) this.words[o] = r.words[o];
            return this;
          }),
          (o.prototype.add = function (t) {
            var e;
            return 0 !== t.negative && 0 === this.negative
              ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
              : 0 === t.negative && 0 !== this.negative
              ? ((this.negative = 0), (e = t.sub(this)), (this.negative = 1), e)
              : this.length > t.length
              ? this.clone().iadd(t)
              : t.clone().iadd(this);
          }),
          (o.prototype.isub = function (t) {
            if (0 !== t.negative) {
              t.negative = 0;
              var e,
                r,
                n = this.iadd(t);
              return (t.negative = 1), n._normSign();
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(t),
                (this.negative = 1),
                this._normSign()
              );
            var i = this.cmp(t);
            if (0 === i)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              );
            i > 0 ? ((e = this), (r = t)) : ((e = t), (r = this));
            for (var o = 0, a = 0; a < r.length; a++)
              (o = (n = (0 | e.words[a]) - (0 | r.words[a]) + o) >> 26),
                (this.words[a] = 67108863 & n);
            for (; 0 !== o && a < e.length; a++)
              (o = (n = (0 | e.words[a]) + o) >> 26),
                (this.words[a] = 67108863 & n);
            if (0 === o && a < e.length && e !== this)
              for (; a < e.length; a++) this.words[a] = e.words[a];
            return (
              (this.length = Math.max(this.length, a)),
              e !== this && (this.negative = 1),
              this.strip()
            );
          }),
          (o.prototype.sub = function (t) {
            return this.clone().isub(t);
          });
        var d = function (t, e, r) {
          var n,
            i,
            o,
            a = t.words,
            s = e.words,
            f = r.words,
            u = 0,
            h = 0 | a[0],
            c = 8191 & h,
            l = h >>> 13,
            d = 0 | a[1],
            p = 8191 & d,
            b = d >>> 13,
            y = 0 | a[2],
            m = 8191 & y,
            g = y >>> 13,
            v = 0 | a[3],
            w = 8191 & v,
            M = v >>> 13,
            _ = 0 | a[4],
            S = 8191 & _,
            A = _ >>> 13,
            E = 0 | a[5],
            x = 8191 & E,
            O = E >>> 13,
            k = 0 | a[6],
            R = 8191 & k,
            P = k >>> 13,
            j = 0 | a[7],
            I = 8191 & j,
            T = j >>> 13,
            B = 0 | a[8],
            N = 8191 & B,
            L = B >>> 13,
            C = 0 | a[9],
            q = 8191 & C,
            U = C >>> 13,
            F = 0 | s[0],
            D = 8191 & F,
            z = F >>> 13,
            H = 0 | s[1],
            W = 8191 & H,
            K = H >>> 13,
            V = 0 | s[2],
            Z = 8191 & V,
            G = V >>> 13,
            $ = 0 | s[3],
            J = 8191 & $,
            Y = $ >>> 13,
            X = 0 | s[4],
            Q = 8191 & X,
            tt = X >>> 13,
            te = 0 | s[5],
            tr = 8191 & te,
            tn = te >>> 13,
            ti = 0 | s[6],
            to = 8191 & ti,
            ta = ti >>> 13,
            ts = 0 | s[7],
            tf = 8191 & ts,
            tu = ts >>> 13,
            th = 0 | s[8],
            tc = 8191 & th,
            tl = th >>> 13,
            td = 0 | s[9],
            tp = 8191 & td,
            tb = td >>> 13;
          (r.negative = t.negative ^ e.negative), (r.length = 19);
          var ty =
            (((u + (n = Math.imul(c, D))) | 0) +
              ((8191 & (i = ((i = Math.imul(c, z)) + Math.imul(l, D)) | 0)) <<
                13)) |
            0;
          (u = ((((o = Math.imul(l, z)) + (i >>> 13)) | 0) + (ty >>> 26)) | 0),
            (ty &= 67108863),
            (n = Math.imul(p, D)),
            (i = ((i = Math.imul(p, z)) + Math.imul(b, D)) | 0),
            (o = Math.imul(b, z));
          var tm =
            (((u + (n = (n + Math.imul(c, W)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, K)) | 0) + Math.imul(l, W)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(l, K)) | 0) + (i >>> 13)) | 0) +
              (tm >>> 26)) |
            0),
            (tm &= 67108863),
            (n = Math.imul(m, D)),
            (i = ((i = Math.imul(m, z)) + Math.imul(g, D)) | 0),
            (o = Math.imul(g, z)),
            (n = (n + Math.imul(p, W)) | 0),
            (i = ((i = (i + Math.imul(p, K)) | 0) + Math.imul(b, W)) | 0),
            (o = (o + Math.imul(b, K)) | 0);
          var tg =
            (((u + (n = (n + Math.imul(c, Z)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, G)) | 0) + Math.imul(l, Z)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(l, G)) | 0) + (i >>> 13)) | 0) +
              (tg >>> 26)) |
            0),
            (tg &= 67108863),
            (n = Math.imul(w, D)),
            (i = ((i = Math.imul(w, z)) + Math.imul(M, D)) | 0),
            (o = Math.imul(M, z)),
            (n = (n + Math.imul(m, W)) | 0),
            (i = ((i = (i + Math.imul(m, K)) | 0) + Math.imul(g, W)) | 0),
            (o = (o + Math.imul(g, K)) | 0),
            (n = (n + Math.imul(p, Z)) | 0),
            (i = ((i = (i + Math.imul(p, G)) | 0) + Math.imul(b, Z)) | 0),
            (o = (o + Math.imul(b, G)) | 0);
          var tv =
            (((u + (n = (n + Math.imul(c, J)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, Y)) | 0) + Math.imul(l, J)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(l, Y)) | 0) + (i >>> 13)) | 0) +
              (tv >>> 26)) |
            0),
            (tv &= 67108863),
            (n = Math.imul(S, D)),
            (i = ((i = Math.imul(S, z)) + Math.imul(A, D)) | 0),
            (o = Math.imul(A, z)),
            (n = (n + Math.imul(w, W)) | 0),
            (i = ((i = (i + Math.imul(w, K)) | 0) + Math.imul(M, W)) | 0),
            (o = (o + Math.imul(M, K)) | 0),
            (n = (n + Math.imul(m, Z)) | 0),
            (i = ((i = (i + Math.imul(m, G)) | 0) + Math.imul(g, Z)) | 0),
            (o = (o + Math.imul(g, G)) | 0),
            (n = (n + Math.imul(p, J)) | 0),
            (i = ((i = (i + Math.imul(p, Y)) | 0) + Math.imul(b, J)) | 0),
            (o = (o + Math.imul(b, Y)) | 0);
          var tw =
            (((u + (n = (n + Math.imul(c, Q)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, tt)) | 0) + Math.imul(l, Q)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(l, tt)) | 0) + (i >>> 13)) | 0) +
              (tw >>> 26)) |
            0),
            (tw &= 67108863),
            (n = Math.imul(x, D)),
            (i = ((i = Math.imul(x, z)) + Math.imul(O, D)) | 0),
            (o = Math.imul(O, z)),
            (n = (n + Math.imul(S, W)) | 0),
            (i = ((i = (i + Math.imul(S, K)) | 0) + Math.imul(A, W)) | 0),
            (o = (o + Math.imul(A, K)) | 0),
            (n = (n + Math.imul(w, Z)) | 0),
            (i = ((i = (i + Math.imul(w, G)) | 0) + Math.imul(M, Z)) | 0),
            (o = (o + Math.imul(M, G)) | 0),
            (n = (n + Math.imul(m, J)) | 0),
            (i = ((i = (i + Math.imul(m, Y)) | 0) + Math.imul(g, J)) | 0),
            (o = (o + Math.imul(g, Y)) | 0),
            (n = (n + Math.imul(p, Q)) | 0),
            (i = ((i = (i + Math.imul(p, tt)) | 0) + Math.imul(b, Q)) | 0),
            (o = (o + Math.imul(b, tt)) | 0);
          var tM =
            (((u + (n = (n + Math.imul(c, tr)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, tn)) | 0) + Math.imul(l, tr)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(l, tn)) | 0) + (i >>> 13)) | 0) +
              (tM >>> 26)) |
            0),
            (tM &= 67108863),
            (n = Math.imul(R, D)),
            (i = ((i = Math.imul(R, z)) + Math.imul(P, D)) | 0),
            (o = Math.imul(P, z)),
            (n = (n + Math.imul(x, W)) | 0),
            (i = ((i = (i + Math.imul(x, K)) | 0) + Math.imul(O, W)) | 0),
            (o = (o + Math.imul(O, K)) | 0),
            (n = (n + Math.imul(S, Z)) | 0),
            (i = ((i = (i + Math.imul(S, G)) | 0) + Math.imul(A, Z)) | 0),
            (o = (o + Math.imul(A, G)) | 0),
            (n = (n + Math.imul(w, J)) | 0),
            (i = ((i = (i + Math.imul(w, Y)) | 0) + Math.imul(M, J)) | 0),
            (o = (o + Math.imul(M, Y)) | 0),
            (n = (n + Math.imul(m, Q)) | 0),
            (i = ((i = (i + Math.imul(m, tt)) | 0) + Math.imul(g, Q)) | 0),
            (o = (o + Math.imul(g, tt)) | 0),
            (n = (n + Math.imul(p, tr)) | 0),
            (i = ((i = (i + Math.imul(p, tn)) | 0) + Math.imul(b, tr)) | 0),
            (o = (o + Math.imul(b, tn)) | 0);
          var t_ =
            (((u + (n = (n + Math.imul(c, to)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, ta)) | 0) + Math.imul(l, to)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(l, ta)) | 0) + (i >>> 13)) | 0) +
              (t_ >>> 26)) |
            0),
            (t_ &= 67108863),
            (n = Math.imul(I, D)),
            (i = ((i = Math.imul(I, z)) + Math.imul(T, D)) | 0),
            (o = Math.imul(T, z)),
            (n = (n + Math.imul(R, W)) | 0),
            (i = ((i = (i + Math.imul(R, K)) | 0) + Math.imul(P, W)) | 0),
            (o = (o + Math.imul(P, K)) | 0),
            (n = (n + Math.imul(x, Z)) | 0),
            (i = ((i = (i + Math.imul(x, G)) | 0) + Math.imul(O, Z)) | 0),
            (o = (o + Math.imul(O, G)) | 0),
            (n = (n + Math.imul(S, J)) | 0),
            (i = ((i = (i + Math.imul(S, Y)) | 0) + Math.imul(A, J)) | 0),
            (o = (o + Math.imul(A, Y)) | 0),
            (n = (n + Math.imul(w, Q)) | 0),
            (i = ((i = (i + Math.imul(w, tt)) | 0) + Math.imul(M, Q)) | 0),
            (o = (o + Math.imul(M, tt)) | 0),
            (n = (n + Math.imul(m, tr)) | 0),
            (i = ((i = (i + Math.imul(m, tn)) | 0) + Math.imul(g, tr)) | 0),
            (o = (o + Math.imul(g, tn)) | 0),
            (n = (n + Math.imul(p, to)) | 0),
            (i = ((i = (i + Math.imul(p, ta)) | 0) + Math.imul(b, to)) | 0),
            (o = (o + Math.imul(b, ta)) | 0);
          var tS =
            (((u + (n = (n + Math.imul(c, tf)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, tu)) | 0) + Math.imul(l, tf)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(l, tu)) | 0) + (i >>> 13)) | 0) +
              (tS >>> 26)) |
            0),
            (tS &= 67108863),
            (n = Math.imul(N, D)),
            (i = ((i = Math.imul(N, z)) + Math.imul(L, D)) | 0),
            (o = Math.imul(L, z)),
            (n = (n + Math.imul(I, W)) | 0),
            (i = ((i = (i + Math.imul(I, K)) | 0) + Math.imul(T, W)) | 0),
            (o = (o + Math.imul(T, K)) | 0),
            (n = (n + Math.imul(R, Z)) | 0),
            (i = ((i = (i + Math.imul(R, G)) | 0) + Math.imul(P, Z)) | 0),
            (o = (o + Math.imul(P, G)) | 0),
            (n = (n + Math.imul(x, J)) | 0),
            (i = ((i = (i + Math.imul(x, Y)) | 0) + Math.imul(O, J)) | 0),
            (o = (o + Math.imul(O, Y)) | 0),
            (n = (n + Math.imul(S, Q)) | 0),
            (i = ((i = (i + Math.imul(S, tt)) | 0) + Math.imul(A, Q)) | 0),
            (o = (o + Math.imul(A, tt)) | 0),
            (n = (n + Math.imul(w, tr)) | 0),
            (i = ((i = (i + Math.imul(w, tn)) | 0) + Math.imul(M, tr)) | 0),
            (o = (o + Math.imul(M, tn)) | 0),
            (n = (n + Math.imul(m, to)) | 0),
            (i = ((i = (i + Math.imul(m, ta)) | 0) + Math.imul(g, to)) | 0),
            (o = (o + Math.imul(g, ta)) | 0),
            (n = (n + Math.imul(p, tf)) | 0),
            (i = ((i = (i + Math.imul(p, tu)) | 0) + Math.imul(b, tf)) | 0),
            (o = (o + Math.imul(b, tu)) | 0);
          var tA =
            (((u + (n = (n + Math.imul(c, tc)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, tl)) | 0) + Math.imul(l, tc)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(l, tl)) | 0) + (i >>> 13)) | 0) +
              (tA >>> 26)) |
            0),
            (tA &= 67108863),
            (n = Math.imul(q, D)),
            (i = ((i = Math.imul(q, z)) + Math.imul(U, D)) | 0),
            (o = Math.imul(U, z)),
            (n = (n + Math.imul(N, W)) | 0),
            (i = ((i = (i + Math.imul(N, K)) | 0) + Math.imul(L, W)) | 0),
            (o = (o + Math.imul(L, K)) | 0),
            (n = (n + Math.imul(I, Z)) | 0),
            (i = ((i = (i + Math.imul(I, G)) | 0) + Math.imul(T, Z)) | 0),
            (o = (o + Math.imul(T, G)) | 0),
            (n = (n + Math.imul(R, J)) | 0),
            (i = ((i = (i + Math.imul(R, Y)) | 0) + Math.imul(P, J)) | 0),
            (o = (o + Math.imul(P, Y)) | 0),
            (n = (n + Math.imul(x, Q)) | 0),
            (i = ((i = (i + Math.imul(x, tt)) | 0) + Math.imul(O, Q)) | 0),
            (o = (o + Math.imul(O, tt)) | 0),
            (n = (n + Math.imul(S, tr)) | 0),
            (i = ((i = (i + Math.imul(S, tn)) | 0) + Math.imul(A, tr)) | 0),
            (o = (o + Math.imul(A, tn)) | 0),
            (n = (n + Math.imul(w, to)) | 0),
            (i = ((i = (i + Math.imul(w, ta)) | 0) + Math.imul(M, to)) | 0),
            (o = (o + Math.imul(M, ta)) | 0),
            (n = (n + Math.imul(m, tf)) | 0),
            (i = ((i = (i + Math.imul(m, tu)) | 0) + Math.imul(g, tf)) | 0),
            (o = (o + Math.imul(g, tu)) | 0),
            (n = (n + Math.imul(p, tc)) | 0),
            (i = ((i = (i + Math.imul(p, tl)) | 0) + Math.imul(b, tc)) | 0),
            (o = (o + Math.imul(b, tl)) | 0);
          var tE =
            (((u + (n = (n + Math.imul(c, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, tb)) | 0) + Math.imul(l, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(l, tb)) | 0) + (i >>> 13)) | 0) +
              (tE >>> 26)) |
            0),
            (tE &= 67108863),
            (n = Math.imul(q, W)),
            (i = ((i = Math.imul(q, K)) + Math.imul(U, W)) | 0),
            (o = Math.imul(U, K)),
            (n = (n + Math.imul(N, Z)) | 0),
            (i = ((i = (i + Math.imul(N, G)) | 0) + Math.imul(L, Z)) | 0),
            (o = (o + Math.imul(L, G)) | 0),
            (n = (n + Math.imul(I, J)) | 0),
            (i = ((i = (i + Math.imul(I, Y)) | 0) + Math.imul(T, J)) | 0),
            (o = (o + Math.imul(T, Y)) | 0),
            (n = (n + Math.imul(R, Q)) | 0),
            (i = ((i = (i + Math.imul(R, tt)) | 0) + Math.imul(P, Q)) | 0),
            (o = (o + Math.imul(P, tt)) | 0),
            (n = (n + Math.imul(x, tr)) | 0),
            (i = ((i = (i + Math.imul(x, tn)) | 0) + Math.imul(O, tr)) | 0),
            (o = (o + Math.imul(O, tn)) | 0),
            (n = (n + Math.imul(S, to)) | 0),
            (i = ((i = (i + Math.imul(S, ta)) | 0) + Math.imul(A, to)) | 0),
            (o = (o + Math.imul(A, ta)) | 0),
            (n = (n + Math.imul(w, tf)) | 0),
            (i = ((i = (i + Math.imul(w, tu)) | 0) + Math.imul(M, tf)) | 0),
            (o = (o + Math.imul(M, tu)) | 0),
            (n = (n + Math.imul(m, tc)) | 0),
            (i = ((i = (i + Math.imul(m, tl)) | 0) + Math.imul(g, tc)) | 0),
            (o = (o + Math.imul(g, tl)) | 0);
          var tx =
            (((u + (n = (n + Math.imul(p, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(p, tb)) | 0) + Math.imul(b, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(b, tb)) | 0) + (i >>> 13)) | 0) +
              (tx >>> 26)) |
            0),
            (tx &= 67108863),
            (n = Math.imul(q, Z)),
            (i = ((i = Math.imul(q, G)) + Math.imul(U, Z)) | 0),
            (o = Math.imul(U, G)),
            (n = (n + Math.imul(N, J)) | 0),
            (i = ((i = (i + Math.imul(N, Y)) | 0) + Math.imul(L, J)) | 0),
            (o = (o + Math.imul(L, Y)) | 0),
            (n = (n + Math.imul(I, Q)) | 0),
            (i = ((i = (i + Math.imul(I, tt)) | 0) + Math.imul(T, Q)) | 0),
            (o = (o + Math.imul(T, tt)) | 0),
            (n = (n + Math.imul(R, tr)) | 0),
            (i = ((i = (i + Math.imul(R, tn)) | 0) + Math.imul(P, tr)) | 0),
            (o = (o + Math.imul(P, tn)) | 0),
            (n = (n + Math.imul(x, to)) | 0),
            (i = ((i = (i + Math.imul(x, ta)) | 0) + Math.imul(O, to)) | 0),
            (o = (o + Math.imul(O, ta)) | 0),
            (n = (n + Math.imul(S, tf)) | 0),
            (i = ((i = (i + Math.imul(S, tu)) | 0) + Math.imul(A, tf)) | 0),
            (o = (o + Math.imul(A, tu)) | 0),
            (n = (n + Math.imul(w, tc)) | 0),
            (i = ((i = (i + Math.imul(w, tl)) | 0) + Math.imul(M, tc)) | 0),
            (o = (o + Math.imul(M, tl)) | 0);
          var tO =
            (((u + (n = (n + Math.imul(m, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(m, tb)) | 0) + Math.imul(g, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(g, tb)) | 0) + (i >>> 13)) | 0) +
              (tO >>> 26)) |
            0),
            (tO &= 67108863),
            (n = Math.imul(q, J)),
            (i = ((i = Math.imul(q, Y)) + Math.imul(U, J)) | 0),
            (o = Math.imul(U, Y)),
            (n = (n + Math.imul(N, Q)) | 0),
            (i = ((i = (i + Math.imul(N, tt)) | 0) + Math.imul(L, Q)) | 0),
            (o = (o + Math.imul(L, tt)) | 0),
            (n = (n + Math.imul(I, tr)) | 0),
            (i = ((i = (i + Math.imul(I, tn)) | 0) + Math.imul(T, tr)) | 0),
            (o = (o + Math.imul(T, tn)) | 0),
            (n = (n + Math.imul(R, to)) | 0),
            (i = ((i = (i + Math.imul(R, ta)) | 0) + Math.imul(P, to)) | 0),
            (o = (o + Math.imul(P, ta)) | 0),
            (n = (n + Math.imul(x, tf)) | 0),
            (i = ((i = (i + Math.imul(x, tu)) | 0) + Math.imul(O, tf)) | 0),
            (o = (o + Math.imul(O, tu)) | 0),
            (n = (n + Math.imul(S, tc)) | 0),
            (i = ((i = (i + Math.imul(S, tl)) | 0) + Math.imul(A, tc)) | 0),
            (o = (o + Math.imul(A, tl)) | 0);
          var tk =
            (((u + (n = (n + Math.imul(w, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(w, tb)) | 0) + Math.imul(M, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(M, tb)) | 0) + (i >>> 13)) | 0) +
              (tk >>> 26)) |
            0),
            (tk &= 67108863),
            (n = Math.imul(q, Q)),
            (i = ((i = Math.imul(q, tt)) + Math.imul(U, Q)) | 0),
            (o = Math.imul(U, tt)),
            (n = (n + Math.imul(N, tr)) | 0),
            (i = ((i = (i + Math.imul(N, tn)) | 0) + Math.imul(L, tr)) | 0),
            (o = (o + Math.imul(L, tn)) | 0),
            (n = (n + Math.imul(I, to)) | 0),
            (i = ((i = (i + Math.imul(I, ta)) | 0) + Math.imul(T, to)) | 0),
            (o = (o + Math.imul(T, ta)) | 0),
            (n = (n + Math.imul(R, tf)) | 0),
            (i = ((i = (i + Math.imul(R, tu)) | 0) + Math.imul(P, tf)) | 0),
            (o = (o + Math.imul(P, tu)) | 0),
            (n = (n + Math.imul(x, tc)) | 0),
            (i = ((i = (i + Math.imul(x, tl)) | 0) + Math.imul(O, tc)) | 0),
            (o = (o + Math.imul(O, tl)) | 0);
          var tR =
            (((u + (n = (n + Math.imul(S, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(S, tb)) | 0) + Math.imul(A, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(A, tb)) | 0) + (i >>> 13)) | 0) +
              (tR >>> 26)) |
            0),
            (tR &= 67108863),
            (n = Math.imul(q, tr)),
            (i = ((i = Math.imul(q, tn)) + Math.imul(U, tr)) | 0),
            (o = Math.imul(U, tn)),
            (n = (n + Math.imul(N, to)) | 0),
            (i = ((i = (i + Math.imul(N, ta)) | 0) + Math.imul(L, to)) | 0),
            (o = (o + Math.imul(L, ta)) | 0),
            (n = (n + Math.imul(I, tf)) | 0),
            (i = ((i = (i + Math.imul(I, tu)) | 0) + Math.imul(T, tf)) | 0),
            (o = (o + Math.imul(T, tu)) | 0),
            (n = (n + Math.imul(R, tc)) | 0),
            (i = ((i = (i + Math.imul(R, tl)) | 0) + Math.imul(P, tc)) | 0),
            (o = (o + Math.imul(P, tl)) | 0);
          var tP =
            (((u + (n = (n + Math.imul(x, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(x, tb)) | 0) + Math.imul(O, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(O, tb)) | 0) + (i >>> 13)) | 0) +
              (tP >>> 26)) |
            0),
            (tP &= 67108863),
            (n = Math.imul(q, to)),
            (i = ((i = Math.imul(q, ta)) + Math.imul(U, to)) | 0),
            (o = Math.imul(U, ta)),
            (n = (n + Math.imul(N, tf)) | 0),
            (i = ((i = (i + Math.imul(N, tu)) | 0) + Math.imul(L, tf)) | 0),
            (o = (o + Math.imul(L, tu)) | 0),
            (n = (n + Math.imul(I, tc)) | 0),
            (i = ((i = (i + Math.imul(I, tl)) | 0) + Math.imul(T, tc)) | 0),
            (o = (o + Math.imul(T, tl)) | 0);
          var tj =
            (((u + (n = (n + Math.imul(R, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(R, tb)) | 0) + Math.imul(P, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(P, tb)) | 0) + (i >>> 13)) | 0) +
              (tj >>> 26)) |
            0),
            (tj &= 67108863),
            (n = Math.imul(q, tf)),
            (i = ((i = Math.imul(q, tu)) + Math.imul(U, tf)) | 0),
            (o = Math.imul(U, tu)),
            (n = (n + Math.imul(N, tc)) | 0),
            (i = ((i = (i + Math.imul(N, tl)) | 0) + Math.imul(L, tc)) | 0),
            (o = (o + Math.imul(L, tl)) | 0);
          var tI =
            (((u + (n = (n + Math.imul(I, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(I, tb)) | 0) + Math.imul(T, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(T, tb)) | 0) + (i >>> 13)) | 0) +
              (tI >>> 26)) |
            0),
            (tI &= 67108863),
            (n = Math.imul(q, tc)),
            (i = ((i = Math.imul(q, tl)) + Math.imul(U, tc)) | 0),
            (o = Math.imul(U, tl));
          var tT =
            (((u + (n = (n + Math.imul(N, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(N, tb)) | 0) + Math.imul(L, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(L, tb)) | 0) + (i >>> 13)) | 0) +
              (tT >>> 26)) |
            0),
            (tT &= 67108863);
          var tB =
            (((u + (n = Math.imul(q, tp))) | 0) +
              ((8191 & (i = ((i = Math.imul(q, tb)) + Math.imul(U, tp)) | 0)) <<
                13)) |
            0;
          return (
            (u =
              ((((o = Math.imul(U, tb)) + (i >>> 13)) | 0) + (tB >>> 26)) | 0),
            (tB &= 67108863),
            (f[0] = ty),
            (f[1] = tm),
            (f[2] = tg),
            (f[3] = tv),
            (f[4] = tw),
            (f[5] = tM),
            (f[6] = t_),
            (f[7] = tS),
            (f[8] = tA),
            (f[9] = tE),
            (f[10] = tx),
            (f[11] = tO),
            (f[12] = tk),
            (f[13] = tR),
            (f[14] = tP),
            (f[15] = tj),
            (f[16] = tI),
            (f[17] = tT),
            (f[18] = tB),
            0 !== u && ((f[19] = u), r.length++),
            r
          );
        };
        function p(t, e, r) {
          return new b().mulp(t, e, r);
        }
        function b(t, e) {
          (this.x = t), (this.y = e);
        }
        Math.imul || (d = l),
          (o.prototype.mulTo = function (t, e) {
            var r = this.length + t.length;
            return 10 === this.length && 10 === t.length
              ? d(this, t, e)
              : r < 63
              ? l(this, t, e)
              : r < 1024
              ? (function (t, e, r) {
                  (r.negative = e.negative ^ t.negative),
                    (r.length = t.length + e.length);
                  for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
                    var a = i;
                    i = 0;
                    for (
                      var s = 67108863 & n,
                        f = Math.min(o, e.length - 1),
                        u = Math.max(0, o - t.length + 1);
                      u <= f;
                      u++
                    ) {
                      var h = o - u,
                        c = (0 | t.words[h]) * (0 | e.words[u]),
                        l = 67108863 & c;
                      (a = (a + ((c / 67108864) | 0)) | 0),
                        (s = 67108863 & (l = (l + s) | 0)),
                        (i += (a = (a + (l >>> 26)) | 0) >>> 26),
                        (a &= 67108863);
                    }
                    (r.words[o] = s), (n = a), (a = i);
                  }
                  return 0 !== n ? (r.words[o] = n) : r.length--, r.strip();
                })(this, t, e)
              : p(this, t, e);
          }),
          (b.prototype.makeRBT = function (t) {
            for (
              var e = Array(t), r = o.prototype._countBits(t) - 1, n = 0;
              n < t;
              n++
            )
              e[n] = this.revBin(n, r, t);
            return e;
          }),
          (b.prototype.revBin = function (t, e, r) {
            if (0 === t || t === r - 1) return t;
            for (var n = 0, i = 0; i < e; i++)
              (n |= (1 & t) << (e - i - 1)), (t >>= 1);
            return n;
          }),
          (b.prototype.permute = function (t, e, r, n, i, o) {
            for (var a = 0; a < o; a++) (n[a] = e[t[a]]), (i[a] = r[t[a]]);
          }),
          (b.prototype.transform = function (t, e, r, n, i, o) {
            this.permute(o, t, e, r, n, i);
            for (var a = 1; a < i; a <<= 1)
              for (
                var s = a << 1,
                  f = Math.cos((2 * Math.PI) / s),
                  u = Math.sin((2 * Math.PI) / s),
                  h = 0;
                h < i;
                h += s
              )
                for (var c = f, l = u, d = 0; d < a; d++) {
                  var p = r[h + d],
                    b = n[h + d],
                    y = r[h + d + a],
                    m = n[h + d + a],
                    g = c * y - l * m;
                  (m = c * m + l * y),
                    (y = g),
                    (r[h + d] = p + y),
                    (n[h + d] = b + m),
                    (r[h + d + a] = p - y),
                    (n[h + d + a] = b - m),
                    d !== s &&
                      ((g = f * c - u * l), (l = f * l + u * c), (c = g));
                }
          }),
          (b.prototype.guessLen13b = function (t, e) {
            var r = 1 | Math.max(e, t),
              n = 1 & r,
              i = 0;
            for (r = (r / 2) | 0; r; r >>>= 1) i++;
            return 1 << (i + 1 + n);
          }),
          (b.prototype.conjugate = function (t, e, r) {
            if (!(r <= 1))
              for (var n = 0; n < r / 2; n++) {
                var i = t[n];
                (t[n] = t[r - n - 1]),
                  (t[r - n - 1] = i),
                  (i = e[n]),
                  (e[n] = -e[r - n - 1]),
                  (e[r - n - 1] = -i);
              }
          }),
          (b.prototype.normalize13b = function (t, e) {
            for (var r = 0, n = 0; n < e / 2; n++) {
              var i =
                8192 * Math.round(t[2 * n + 1] / e) +
                Math.round(t[2 * n] / e) +
                r;
              (t[n] = 67108863 & i),
                (r = i < 67108864 ? 0 : (i / 67108864) | 0);
            }
            return t;
          }),
          (b.prototype.convert13b = function (t, e, r, i) {
            for (var o = 0, a = 0; a < e; a++)
              (o += 0 | t[a]),
                (r[2 * a] = 8191 & o),
                (o >>>= 13),
                (r[2 * a + 1] = 8191 & o),
                (o >>>= 13);
            for (a = 2 * e; a < i; ++a) r[a] = 0;
            n(0 === o), n((-8192 & o) == 0);
          }),
          (b.prototype.stub = function (t) {
            for (var e = Array(t), r = 0; r < t; r++) e[r] = 0;
            return e;
          }),
          (b.prototype.mulp = function (t, e, r) {
            var n = 2 * this.guessLen13b(t.length, e.length),
              i = this.makeRBT(n),
              o = this.stub(n),
              a = Array(n),
              s = Array(n),
              f = Array(n),
              u = Array(n),
              h = Array(n),
              c = Array(n),
              l = r.words;
            (l.length = n),
              this.convert13b(t.words, t.length, a, n),
              this.convert13b(e.words, e.length, u, n),
              this.transform(a, o, s, f, n, i),
              this.transform(u, o, h, c, n, i);
            for (var d = 0; d < n; d++) {
              var p = s[d] * h[d] - f[d] * c[d];
              (f[d] = s[d] * c[d] + f[d] * h[d]), (s[d] = p);
            }
            return (
              this.conjugate(s, f, n),
              this.transform(s, f, l, o, n, i),
              this.conjugate(l, o, n),
              this.normalize13b(l, n),
              (r.negative = t.negative ^ e.negative),
              (r.length = t.length + e.length),
              r.strip()
            );
          }),
          (o.prototype.mul = function (t) {
            var e = new o(null);
            return (e.words = Array(this.length + t.length)), this.mulTo(t, e);
          }),
          (o.prototype.mulf = function (t) {
            var e = new o(null);
            return (e.words = Array(this.length + t.length)), p(this, t, e);
          }),
          (o.prototype.imul = function (t) {
            return this.clone().mulTo(t, this);
          }),
          (o.prototype.imuln = function (t) {
            n("number" == typeof t), n(t < 67108864);
            for (var e = 0, r = 0; r < this.length; r++) {
              var i = (0 | this.words[r]) * t,
                o = (67108863 & i) + (67108863 & e);
              (e >>= 26),
                (e += ((i / 67108864) | 0) + (o >>> 26)),
                (this.words[r] = 67108863 & o);
            }
            return 0 !== e && ((this.words[r] = e), this.length++), this;
          }),
          (o.prototype.muln = function (t) {
            return this.clone().imuln(t);
          }),
          (o.prototype.sqr = function () {
            return this.mul(this);
          }),
          (o.prototype.isqr = function () {
            return this.imul(this.clone());
          }),
          (o.prototype.pow = function (t) {
            var e = (function (t) {
              for (var e = Array(t.bitLength()), r = 0; r < e.length; r++) {
                var n = (r / 26) | 0,
                  i = r % 26;
                e[r] = (t.words[n] & (1 << i)) >>> i;
              }
              return e;
            })(t);
            if (0 === e.length) return new o(1);
            for (
              var r = this, n = 0;
              n < e.length && 0 === e[n];
              n++, r = r.sqr()
            );
            if (++n < e.length)
              for (var i = r.sqr(); n < e.length; n++, i = i.sqr())
                0 !== e[n] && (r = r.mul(i));
            return r;
          }),
          (o.prototype.iushln = function (t) {
            n("number" == typeof t && t >= 0);
            var e,
              r = t % 26,
              i = (t - r) / 26,
              o = (67108863 >>> (26 - r)) << (26 - r);
            if (0 !== r) {
              var a = 0;
              for (e = 0; e < this.length; e++) {
                var s = this.words[e] & o,
                  f = ((0 | this.words[e]) - s) << r;
                (this.words[e] = f | a), (a = s >>> (26 - r));
              }
              a && ((this.words[e] = a), this.length++);
            }
            if (0 !== i) {
              for (e = this.length - 1; e >= 0; e--)
                this.words[e + i] = this.words[e];
              for (e = 0; e < i; e++) this.words[e] = 0;
              this.length += i;
            }
            return this.strip();
          }),
          (o.prototype.ishln = function (t) {
            return n(0 === this.negative), this.iushln(t);
          }),
          (o.prototype.iushrn = function (t, e, r) {
            n("number" == typeof t && t >= 0),
              (i = e ? (e - (e % 26)) / 26 : 0);
            var i,
              o = t % 26,
              a = Math.min((t - o) / 26, this.length),
              s = 67108863 ^ ((67108863 >>> o) << o),
              f = r;
            if (((i -= a), (i = Math.max(0, i)), f)) {
              for (var u = 0; u < a; u++) f.words[u] = this.words[u];
              f.length = a;
            }
            if (0 === a);
            else if (this.length > a)
              for (this.length -= a, u = 0; u < this.length; u++)
                this.words[u] = this.words[u + a];
            else (this.words[0] = 0), (this.length = 1);
            var h = 0;
            for (u = this.length - 1; u >= 0 && (0 !== h || u >= i); u--) {
              var c = 0 | this.words[u];
              (this.words[u] = (h << (26 - o)) | (c >>> o)), (h = c & s);
            }
            return (
              f && 0 !== h && (f.words[f.length++] = h),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this.strip()
            );
          }),
          (o.prototype.ishrn = function (t, e, r) {
            return n(0 === this.negative), this.iushrn(t, e, r);
          }),
          (o.prototype.shln = function (t) {
            return this.clone().ishln(t);
          }),
          (o.prototype.ushln = function (t) {
            return this.clone().iushln(t);
          }),
          (o.prototype.shrn = function (t) {
            return this.clone().ishrn(t);
          }),
          (o.prototype.ushrn = function (t) {
            return this.clone().iushrn(t);
          }),
          (o.prototype.testn = function (t) {
            n("number" == typeof t && t >= 0);
            var e = t % 26,
              r = (t - e) / 26;
            return !(this.length <= r) && !!(this.words[r] & (1 << e));
          }),
          (o.prototype.imaskn = function (t) {
            n("number" == typeof t && t >= 0);
            var e = t % 26,
              r = (t - e) / 26;
            return (n(
              0 === this.negative,
              "imaskn works only with positive numbers"
            ),
            this.length <= r)
              ? this
              : (0 !== e && r++,
                (this.length = Math.min(r, this.length)),
                0 !== e &&
                  (this.words[this.length - 1] &=
                    67108863 ^ ((67108863 >>> e) << e)),
                this.strip());
          }),
          (o.prototype.maskn = function (t) {
            return this.clone().imaskn(t);
          }),
          (o.prototype.iaddn = function (t) {
            return (n("number" == typeof t), n(t < 67108864), t < 0)
              ? this.isubn(-t)
              : 0 !== this.negative
              ? 1 === this.length && (0 | this.words[0]) < t
                ? ((this.words[0] = t - (0 | this.words[0])),
                  (this.negative = 0),
                  this)
                : ((this.negative = 0),
                  this.isubn(t),
                  (this.negative = 1),
                  this)
              : this._iaddn(t);
          }),
          (o.prototype._iaddn = function (t) {
            this.words[0] += t;
            for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
              (this.words[e] -= 67108864),
                e === this.length - 1
                  ? (this.words[e + 1] = 1)
                  : this.words[e + 1]++;
            return (this.length = Math.max(this.length, e + 1)), this;
          }),
          (o.prototype.isubn = function (t) {
            if ((n("number" == typeof t), n(t < 67108864), t < 0))
              return this.iaddn(-t);
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(t), (this.negative = 1), this
              );
            if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var e = 0; e < this.length && this.words[e] < 0; e++)
                (this.words[e] += 67108864), (this.words[e + 1] -= 1);
            return this.strip();
          }),
          (o.prototype.addn = function (t) {
            return this.clone().iaddn(t);
          }),
          (o.prototype.subn = function (t) {
            return this.clone().isubn(t);
          }),
          (o.prototype.iabs = function () {
            return (this.negative = 0), this;
          }),
          (o.prototype.abs = function () {
            return this.clone().iabs();
          }),
          (o.prototype._ishlnsubmul = function (t, e, r) {
            var i,
              o,
              a = t.length + r;
            this._expand(a);
            var s = 0;
            for (i = 0; i < t.length; i++) {
              o = (0 | this.words[i + r]) + s;
              var f = (0 | t.words[i]) * e;
              (o -= 67108863 & f),
                (s = (o >> 26) - ((f / 67108864) | 0)),
                (this.words[i + r] = 67108863 & o);
            }
            for (; i < this.length - r; i++)
              (s = (o = (0 | this.words[i + r]) + s) >> 26),
                (this.words[i + r] = 67108863 & o);
            if (0 === s) return this.strip();
            for (n(-1 === s), s = 0, i = 0; i < this.length; i++)
              (s = (o = -(0 | this.words[i]) + s) >> 26),
                (this.words[i] = 67108863 & o);
            return (this.negative = 1), this.strip();
          }),
          (o.prototype._wordDiv = function (t, e) {
            var r,
              n = this.length - t.length,
              i = this.clone(),
              a = t,
              s = 0 | a.words[a.length - 1];
            0 != (n = 26 - this._countBits(s)) &&
              ((a = a.ushln(n)), i.iushln(n), (s = 0 | a.words[a.length - 1]));
            var f = i.length - a.length;
            if ("mod" !== e) {
              ((r = new o(null)).length = f + 1), (r.words = Array(r.length));
              for (var u = 0; u < r.length; u++) r.words[u] = 0;
            }
            var h = i.clone()._ishlnsubmul(a, 1, f);
            0 === h.negative && ((i = h), r && (r.words[f] = 1));
            for (var c = f - 1; c >= 0; c--) {
              var l =
                (0 | i.words[a.length + c]) * 67108864 +
                (0 | i.words[a.length + c - 1]);
              for (
                l = Math.min((l / s) | 0, 67108863), i._ishlnsubmul(a, l, c);
                0 !== i.negative;

              )
                l--,
                  (i.negative = 0),
                  i._ishlnsubmul(a, 1, c),
                  i.isZero() || (i.negative ^= 1);
              r && (r.words[c] = l);
            }
            return (
              r && r.strip(),
              i.strip(),
              "div" !== e && 0 !== n && i.iushrn(n),
              { div: r || null, mod: i }
            );
          }),
          (o.prototype.divmod = function (t, e, r) {
            var i, a, s;
            return (n(!t.isZero()), this.isZero())
              ? { div: new o(0), mod: new o(0) }
              : 0 !== this.negative && 0 === t.negative
              ? ((s = this.neg().divmod(t, e)),
                "mod" !== e && (i = s.div.neg()),
                "div" !== e &&
                  ((a = s.mod.neg()), r && 0 !== a.negative && a.iadd(t)),
                { div: i, mod: a })
              : 0 === this.negative && 0 !== t.negative
              ? ((s = this.divmod(t.neg(), e)),
                "mod" !== e && (i = s.div.neg()),
                { div: i, mod: s.mod })
              : (this.negative & t.negative) != 0
              ? ((s = this.neg().divmod(t.neg(), e)),
                "div" !== e &&
                  ((a = s.mod.neg()), r && 0 !== a.negative && a.isub(t)),
                { div: s.div, mod: a })
              : t.length > this.length || 0 > this.cmp(t)
              ? { div: new o(0), mod: this }
              : 1 === t.length
              ? "div" === e
                ? { div: this.divn(t.words[0]), mod: null }
                : "mod" === e
                ? { div: null, mod: new o(this.modn(t.words[0])) }
                : {
                    div: this.divn(t.words[0]),
                    mod: new o(this.modn(t.words[0])),
                  }
              : this._wordDiv(t, e);
          }),
          (o.prototype.div = function (t) {
            return this.divmod(t, "div", !1).div;
          }),
          (o.prototype.mod = function (t) {
            return this.divmod(t, "mod", !1).mod;
          }),
          (o.prototype.umod = function (t) {
            return this.divmod(t, "mod", !0).mod;
          }),
          (o.prototype.divRound = function (t) {
            var e = this.divmod(t);
            if (e.mod.isZero()) return e.div;
            var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
              n = t.ushrn(1),
              i = t.andln(1),
              o = r.cmp(n);
            return o < 0 || (1 === i && 0 === o)
              ? e.div
              : 0 !== e.div.negative
              ? e.div.isubn(1)
              : e.div.iaddn(1);
          }),
          (o.prototype.modn = function (t) {
            n(t <= 67108863);
            for (var e = 67108864 % t, r = 0, i = this.length - 1; i >= 0; i--)
              r = (e * r + (0 | this.words[i])) % t;
            return r;
          }),
          (o.prototype.idivn = function (t) {
            n(t <= 67108863);
            for (var e = 0, r = this.length - 1; r >= 0; r--) {
              var i = (0 | this.words[r]) + 67108864 * e;
              (this.words[r] = (i / t) | 0), (e = i % t);
            }
            return this.strip();
          }),
          (o.prototype.divn = function (t) {
            return this.clone().idivn(t);
          }),
          (o.prototype.egcd = function (t) {
            n(0 === t.negative), n(!t.isZero());
            var e = this,
              r = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (
              var i = new o(1), a = new o(0), s = new o(0), f = new o(1), u = 0;
              e.isEven() && r.isEven();

            )
              e.iushrn(1), r.iushrn(1), ++u;
            for (var h = r.clone(), c = e.clone(); !e.isZero(); ) {
              for (
                var l = 0, d = 1;
                (e.words[0] & d) == 0 && l < 26;
                ++l, d <<= 1
              );
              if (l > 0)
                for (e.iushrn(l); l-- > 0; )
                  (i.isOdd() || a.isOdd()) && (i.iadd(h), a.isub(c)),
                    i.iushrn(1),
                    a.iushrn(1);
              for (
                var p = 0, b = 1;
                (r.words[0] & b) == 0 && p < 26;
                ++p, b <<= 1
              );
              if (p > 0)
                for (r.iushrn(p); p-- > 0; )
                  (s.isOdd() || f.isOdd()) && (s.iadd(h), f.isub(c)),
                    s.iushrn(1),
                    f.iushrn(1);
              e.cmp(r) >= 0
                ? (e.isub(r), i.isub(s), a.isub(f))
                : (r.isub(e), s.isub(i), f.isub(a));
            }
            return { a: s, b: f, gcd: r.iushln(u) };
          }),
          (o.prototype._invmp = function (t) {
            n(0 === t.negative), n(!t.isZero());
            var e,
              r = this,
              i = t.clone();
            r = 0 !== r.negative ? r.umod(t) : r.clone();
            for (
              var a = new o(1), s = new o(0), f = i.clone();
              r.cmpn(1) > 0 && i.cmpn(1) > 0;

            ) {
              for (
                var u = 0, h = 1;
                (r.words[0] & h) == 0 && u < 26;
                ++u, h <<= 1
              );
              if (u > 0)
                for (r.iushrn(u); u-- > 0; )
                  a.isOdd() && a.iadd(f), a.iushrn(1);
              for (
                var c = 0, l = 1;
                (i.words[0] & l) == 0 && c < 26;
                ++c, l <<= 1
              );
              if (c > 0)
                for (i.iushrn(c); c-- > 0; )
                  s.isOdd() && s.iadd(f), s.iushrn(1);
              r.cmp(i) >= 0 ? (r.isub(i), a.isub(s)) : (i.isub(r), s.isub(a));
            }
            return 0 > (e = 0 === r.cmpn(1) ? a : s).cmpn(0) && e.iadd(t), e;
          }),
          (o.prototype.gcd = function (t) {
            if (this.isZero()) return t.abs();
            if (t.isZero()) return this.abs();
            var e = this.clone(),
              r = t.clone();
            (e.negative = 0), (r.negative = 0);
            for (var n = 0; e.isEven() && r.isEven(); n++)
              e.iushrn(1), r.iushrn(1);
            for (;;) {
              for (; e.isEven(); ) e.iushrn(1);
              for (; r.isEven(); ) r.iushrn(1);
              var i = e.cmp(r);
              if (i < 0) {
                var o = e;
                (e = r), (r = o);
              } else if (0 === i || 0 === r.cmpn(1)) break;
              e.isub(r);
            }
            return r.iushln(n);
          }),
          (o.prototype.invm = function (t) {
            return this.egcd(t).a.umod(t);
          }),
          (o.prototype.isEven = function () {
            return (1 & this.words[0]) == 0;
          }),
          (o.prototype.isOdd = function () {
            return (1 & this.words[0]) == 1;
          }),
          (o.prototype.andln = function (t) {
            return this.words[0] & t;
          }),
          (o.prototype.bincn = function (t) {
            n("number" == typeof t);
            var e = t % 26,
              r = (t - e) / 26,
              i = 1 << e;
            if (this.length <= r)
              return this._expand(r + 1), (this.words[r] |= i), this;
            for (var o = i, a = r; 0 !== o && a < this.length; a++) {
              var s = 0 | this.words[a];
              (s += o), (o = s >>> 26), (s &= 67108863), (this.words[a] = s);
            }
            return 0 !== o && ((this.words[a] = o), this.length++), this;
          }),
          (o.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }),
          (o.prototype.cmpn = function (t) {
            var e,
              r = t < 0;
            if (0 !== this.negative && !r) return -1;
            if (0 === this.negative && r) return 1;
            if ((this.strip(), this.length > 1)) e = 1;
            else {
              r && (t = -t), n(t <= 67108863, "Number is too big");
              var i = 0 | this.words[0];
              e = i === t ? 0 : i < t ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (o.prototype.cmp = function (t) {
            if (0 !== this.negative && 0 === t.negative) return -1;
            if (0 === this.negative && 0 !== t.negative) return 1;
            var e = this.ucmp(t);
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (o.prototype.ucmp = function (t) {
            if (this.length > t.length) return 1;
            if (this.length < t.length) return -1;
            for (var e = 0, r = this.length - 1; r >= 0; r--) {
              var n = 0 | this.words[r],
                i = 0 | t.words[r];
              if (n !== i) {
                n < i ? (e = -1) : n > i && (e = 1);
                break;
              }
            }
            return e;
          }),
          (o.prototype.gtn = function (t) {
            return 1 === this.cmpn(t);
          }),
          (o.prototype.gt = function (t) {
            return 1 === this.cmp(t);
          }),
          (o.prototype.gten = function (t) {
            return this.cmpn(t) >= 0;
          }),
          (o.prototype.gte = function (t) {
            return this.cmp(t) >= 0;
          }),
          (o.prototype.ltn = function (t) {
            return -1 === this.cmpn(t);
          }),
          (o.prototype.lt = function (t) {
            return -1 === this.cmp(t);
          }),
          (o.prototype.lten = function (t) {
            return 0 >= this.cmpn(t);
          }),
          (o.prototype.lte = function (t) {
            return 0 >= this.cmp(t);
          }),
          (o.prototype.eqn = function (t) {
            return 0 === this.cmpn(t);
          }),
          (o.prototype.eq = function (t) {
            return 0 === this.cmp(t);
          }),
          (o.red = function (t) {
            return new _(t);
          }),
          (o.prototype.toRed = function (t) {
            return (
              n(!this.red, "Already a number in reduction context"),
              n(0 === this.negative, "red works only with positives"),
              t.convertTo(this)._forceRed(t)
            );
          }),
          (o.prototype.fromRed = function () {
            return (
              n(
                this.red,
                "fromRed works only with numbers in reduction context"
              ),
              this.red.convertFrom(this)
            );
          }),
          (o.prototype._forceRed = function (t) {
            return (this.red = t), this;
          }),
          (o.prototype.forceRed = function (t) {
            return (
              n(!this.red, "Already a number in reduction context"),
              this._forceRed(t)
            );
          }),
          (o.prototype.redAdd = function (t) {
            return (
              n(this.red, "redAdd works only with red numbers"),
              this.red.add(this, t)
            );
          }),
          (o.prototype.redIAdd = function (t) {
            return (
              n(this.red, "redIAdd works only with red numbers"),
              this.red.iadd(this, t)
            );
          }),
          (o.prototype.redSub = function (t) {
            return (
              n(this.red, "redSub works only with red numbers"),
              this.red.sub(this, t)
            );
          }),
          (o.prototype.redISub = function (t) {
            return (
              n(this.red, "redISub works only with red numbers"),
              this.red.isub(this, t)
            );
          }),
          (o.prototype.redShl = function (t) {
            return (
              n(this.red, "redShl works only with red numbers"),
              this.red.shl(this, t)
            );
          }),
          (o.prototype.redMul = function (t) {
            return (
              n(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.mul(this, t)
            );
          }),
          (o.prototype.redIMul = function (t) {
            return (
              n(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.imul(this, t)
            );
          }),
          (o.prototype.redSqr = function () {
            return (
              n(this.red, "redSqr works only with red numbers"),
              this.red._verify1(this),
              this.red.sqr(this)
            );
          }),
          (o.prototype.redISqr = function () {
            return (
              n(this.red, "redISqr works only with red numbers"),
              this.red._verify1(this),
              this.red.isqr(this)
            );
          }),
          (o.prototype.redSqrt = function () {
            return (
              n(this.red, "redSqrt works only with red numbers"),
              this.red._verify1(this),
              this.red.sqrt(this)
            );
          }),
          (o.prototype.redInvm = function () {
            return (
              n(this.red, "redInvm works only with red numbers"),
              this.red._verify1(this),
              this.red.invm(this)
            );
          }),
          (o.prototype.redNeg = function () {
            return (
              n(this.red, "redNeg works only with red numbers"),
              this.red._verify1(this),
              this.red.neg(this)
            );
          }),
          (o.prototype.redPow = function (t) {
            return (
              n(this.red && !t.red, "redPow(normalNum)"),
              this.red._verify1(this),
              this.red.pow(this, t)
            );
          });
        var y = { k256: null, p224: null, p192: null, p25519: null };
        function m(t, e) {
          (this.name = t),
            (this.p = new o(e, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new o(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp());
        }
        function g() {
          m.call(
            this,
            "k256",
            "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
          );
        }
        function v() {
          m.call(
            this,
            "p224",
            "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
          );
        }
        function w() {
          m.call(
            this,
            "p192",
            "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
          );
        }
        function M() {
          m.call(
            this,
            "25519",
            "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
          );
        }
        function _(t) {
          if ("string" == typeof t) {
            var e = o._prime(t);
            (this.m = e.p), (this.prime = e);
          } else
            n(t.gtn(1), "modulus must be greater than 1"),
              (this.m = t),
              (this.prime = null);
        }
        function S(t) {
          _.call(this, t),
            (this.shift = this.m.bitLength()),
            this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new o(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv));
        }
        (m.prototype._tmp = function () {
          var t = new o(null);
          return (t.words = Array(Math.ceil(this.n / 13))), t;
        }),
          (m.prototype.ireduce = function (t) {
            var e,
              r = t;
            do
              this.split(r, this.tmp),
                (e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength());
            while (e > this.n);
            var n = e < this.n ? -1 : r.ucmp(this.p);
            return (
              0 === n
                ? ((r.words[0] = 0), (r.length = 1))
                : n > 0
                ? r.isub(this.p)
                : r.strip(),
              r
            );
          }),
          (m.prototype.split = function (t, e) {
            t.iushrn(this.n, 0, e);
          }),
          (m.prototype.imulK = function (t) {
            return t.imul(this.k);
          }),
          i(g, m),
          (g.prototype.split = function (t, e) {
            for (var r = Math.min(t.length, 9), n = 0; n < r; n++)
              e.words[n] = t.words[n];
            if (((e.length = r), t.length <= 9)) {
              (t.words[0] = 0), (t.length = 1);
              return;
            }
            var i = t.words[9];
            for (n = 10, e.words[e.length++] = 4194303 & i; n < t.length; n++) {
              var o = 0 | t.words[n];
              (t.words[n - 10] = ((4194303 & o) << 4) | (i >>> 22)), (i = o);
            }
            (i >>>= 22),
              (t.words[n - 10] = i),
              0 === i && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
          }),
          (g.prototype.imulK = function (t) {
            (t.words[t.length] = 0),
              (t.words[t.length + 1] = 0),
              (t.length += 2);
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = 0 | t.words[r];
              (e += 977 * n),
                (t.words[r] = 67108863 & e),
                (e = 64 * n + ((e / 67108864) | 0));
            }
            return (
              0 === t.words[t.length - 1] &&
                (t.length--, 0 === t.words[t.length - 1] && t.length--),
              t
            );
          }),
          i(v, m),
          i(w, m),
          i(M, m),
          (M.prototype.imulK = function (t) {
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = (0 | t.words[r]) * 19 + e,
                i = 67108863 & n;
              (n >>>= 26), (t.words[r] = i), (e = n);
            }
            return 0 !== e && (t.words[t.length++] = e), t;
          }),
          (o._prime = function (t) {
            var e;
            if (y[t]) return y[t];
            if ("k256" === t) e = new g();
            else if ("p224" === t) e = new v();
            else if ("p192" === t) e = new w();
            else if ("p25519" === t) e = new M();
            else throw Error("Unknown prime " + t);
            return (y[t] = e), e;
          }),
          (_.prototype._verify1 = function (t) {
            n(0 === t.negative, "red works only with positives"),
              n(t.red, "red works only with red numbers");
          }),
          (_.prototype._verify2 = function (t, e) {
            n((t.negative | e.negative) == 0, "red works only with positives"),
              n(t.red && t.red === e.red, "red works only with red numbers");
          }),
          (_.prototype.imod = function (t) {
            return this.prime
              ? this.prime.ireduce(t)._forceRed(this)
              : t.umod(this.m)._forceRed(this);
          }),
          (_.prototype.neg = function (t) {
            return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
          }),
          (_.prototype.add = function (t, e) {
            this._verify2(t, e);
            var r = t.add(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
          }),
          (_.prototype.iadd = function (t, e) {
            this._verify2(t, e);
            var r = t.iadd(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r;
          }),
          (_.prototype.sub = function (t, e) {
            this._verify2(t, e);
            var r = t.sub(e);
            return 0 > r.cmpn(0) && r.iadd(this.m), r._forceRed(this);
          }),
          (_.prototype.isub = function (t, e) {
            this._verify2(t, e);
            var r = t.isub(e);
            return 0 > r.cmpn(0) && r.iadd(this.m), r;
          }),
          (_.prototype.shl = function (t, e) {
            return this._verify1(t), this.imod(t.ushln(e));
          }),
          (_.prototype.imul = function (t, e) {
            return this._verify2(t, e), this.imod(t.imul(e));
          }),
          (_.prototype.mul = function (t, e) {
            return this._verify2(t, e), this.imod(t.mul(e));
          }),
          (_.prototype.isqr = function (t) {
            return this.imul(t, t.clone());
          }),
          (_.prototype.sqr = function (t) {
            return this.mul(t, t);
          }),
          (_.prototype.sqrt = function (t) {
            if (t.isZero()) return t.clone();
            var e = this.m.andln(3);
            if ((n(e % 2 == 1), 3 === e)) {
              var r = this.m.add(new o(1)).iushrn(2);
              return this.pow(t, r);
            }
            for (
              var i = this.m.subn(1), a = 0;
              !i.isZero() && 0 === i.andln(1);

            )
              a++, i.iushrn(1);
            n(!i.isZero());
            var s = new o(1).toRed(this),
              f = s.redNeg(),
              u = this.m.subn(1).iushrn(1),
              h = this.m.bitLength();
            for (
              h = new o(2 * h * h).toRed(this);
              0 !== this.pow(h, u).cmp(f);

            )
              h.redIAdd(f);
            for (
              var c = this.pow(h, i),
                l = this.pow(t, i.addn(1).iushrn(1)),
                d = this.pow(t, i),
                p = a;
              0 !== d.cmp(s);

            ) {
              for (var b = d, y = 0; 0 !== b.cmp(s); y++) b = b.redSqr();
              n(y < p);
              var m = this.pow(c, new o(1).iushln(p - y - 1));
              (l = l.redMul(m)), (c = m.redSqr()), (d = d.redMul(c)), (p = y);
            }
            return l;
          }),
          (_.prototype.invm = function (t) {
            var e = t._invmp(this.m);
            return 0 !== e.negative
              ? ((e.negative = 0), this.imod(e).redNeg())
              : this.imod(e);
          }),
          (_.prototype.pow = function (t, e) {
            if (e.isZero()) return new o(1);
            if (0 === e.cmpn(1)) return t.clone();
            var r = Array(16);
            (r[0] = new o(1).toRed(this)), (r[1] = t);
            for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
            var i = r[0],
              a = 0,
              s = 0,
              f = e.bitLength() % 26;
            for (0 === f && (f = 26), n = e.length - 1; n >= 0; n--) {
              for (var u = e.words[n], h = f - 1; h >= 0; h--) {
                var c = (u >> h) & 1;
                if ((i !== r[0] && (i = this.sqr(i)), 0 === c && 0 === a)) {
                  s = 0;
                  continue;
                }
                (a <<= 1),
                  (a |= c),
                  (4 == ++s || (0 === n && 0 === h)) &&
                    ((i = this.mul(i, r[a])), (s = 0), (a = 0));
              }
              f = 26;
            }
            return i;
          }),
          (_.prototype.convertTo = function (t) {
            var e = t.umod(this.m);
            return e === t ? e.clone() : e;
          }),
          (_.prototype.convertFrom = function (t) {
            var e = t.clone();
            return (e.red = null), e;
          }),
          (o.mont = function (t) {
            return new S(t);
          }),
          i(S, _),
          (S.prototype.convertTo = function (t) {
            return this.imod(t.ushln(this.shift));
          }),
          (S.prototype.convertFrom = function (t) {
            var e = this.imod(t.mul(this.rinv));
            return (e.red = null), e;
          }),
          (S.prototype.imul = function (t, e) {
            if (t.isZero() || e.isZero())
              return (t.words[0] = 0), (t.length = 1), t;
            var r = t.imul(e),
              n = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              o = i;
            return (
              i.cmp(this.m) >= 0
                ? (o = i.isub(this.m))
                : 0 > i.cmpn(0) && (o = i.iadd(this.m)),
              o._forceRed(this)
            );
          }),
          (S.prototype.mul = function (t, e) {
            if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
            var r = t.mul(e),
              n = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              a = i;
            return (
              i.cmp(this.m) >= 0
                ? (a = i.isub(this.m))
                : 0 > i.cmpn(0) && (a = i.iadd(this.m)),
              a._forceRed(this)
            );
          }),
          (S.prototype.invm = function (t) {
            return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
          });
      })((t = r.nmd(t)), this);
    },
    7187: function (t) {
      "use strict";
      var e,
        r = "object" == typeof Reflect ? Reflect : null,
        n =
          r && "function" == typeof r.apply
            ? r.apply
            : function (t, e, r) {
                return Function.prototype.apply.call(t, e, r);
              };
      e =
        r && "function" == typeof r.ownKeys
          ? r.ownKeys
          : Object.getOwnPropertySymbols
          ? function (t) {
              return Object.getOwnPropertyNames(t).concat(
                Object.getOwnPropertySymbols(t)
              );
            }
          : function (t) {
              return Object.getOwnPropertyNames(t);
            };
      var i =
        Number.isNaN ||
        function (t) {
          return t != t;
        };
      function o() {
        o.init.call(this);
      }
      (t.exports = o),
        (t.exports.once = function (t, e) {
          return new Promise(function (r, n) {
            function i(r) {
              t.removeListener(e, o), n(r);
            }
            function o() {
              "function" == typeof t.removeListener &&
                t.removeListener("error", i),
                r([].slice.call(arguments));
            }
            b(t, e, o, { once: !0 }),
              "error" !== e &&
                "function" == typeof t.on &&
                b(t, "error", i, { once: !0 });
          });
        }),
        (o.EventEmitter = o),
        (o.prototype._events = void 0),
        (o.prototype._eventsCount = 0),
        (o.prototype._maxListeners = void 0);
      var a = 10;
      function s(t) {
        if ("function" != typeof t)
          throw TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof t
          );
      }
      function f(t) {
        return void 0 === t._maxListeners
          ? o.defaultMaxListeners
          : t._maxListeners;
      }
      function u(t, e, r, n) {
        if (
          (s(r),
          void 0 === (o = t._events)
            ? ((o = t._events = Object.create(null)), (t._eventsCount = 0))
            : (void 0 !== o.newListener &&
                (t.emit("newListener", e, r.listener ? r.listener : r),
                (o = t._events)),
              (a = o[e])),
          void 0 === a)
        )
          (a = o[e] = r), ++t._eventsCount;
        else if (
          ("function" == typeof a
            ? (a = o[e] = n ? [r, a] : [a, r])
            : n
            ? a.unshift(r)
            : a.push(r),
          (i = f(t)) > 0 && a.length > i && !a.warned)
        ) {
          a.warned = !0;
          var i,
            o,
            a,
            u = Error(
              "Possible EventEmitter memory leak detected. " +
                a.length +
                " " +
                String(e) +
                " listeners added. Use emitter.setMaxListeners() to increase limit"
            );
          (u.name = "MaxListenersExceededWarning"),
            (u.emitter = t),
            (u.type = e),
            (u.count = a.length),
            console && console.warn && console.warn(u);
        }
        return t;
      }
      function h() {
        if (!this.fired)
          return (this.target.removeListener(this.type, this.wrapFn),
          (this.fired = !0),
          0 == arguments.length)
            ? this.listener.call(this.target)
            : this.listener.apply(this.target, arguments);
      }
      function c(t, e, r) {
        var n = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r },
          i = h.bind(n);
        return (i.listener = r), (n.wrapFn = i), i;
      }
      function l(t, e, r) {
        var n = t._events;
        if (void 0 === n) return [];
        var i = n[e];
        return void 0 === i
          ? []
          : "function" == typeof i
          ? r
            ? [i.listener || i]
            : [i]
          : r
          ? (function (t) {
              for (var e = Array(t.length), r = 0; r < e.length; ++r)
                e[r] = t[r].listener || t[r];
              return e;
            })(i)
          : p(i, i.length);
      }
      function d(t) {
        var e = this._events;
        if (void 0 !== e) {
          var r = e[t];
          if ("function" == typeof r) return 1;
          if (void 0 !== r) return r.length;
        }
        return 0;
      }
      function p(t, e) {
        for (var r = Array(e), n = 0; n < e; ++n) r[n] = t[n];
        return r;
      }
      function b(t, e, r, n) {
        if ("function" == typeof t.on) n.once ? t.once(e, r) : t.on(e, r);
        else if ("function" == typeof t.addEventListener)
          t.addEventListener(e, function i(o) {
            n.once && t.removeEventListener(e, i), r(o);
          });
        else
          throw TypeError(
            'The "emitter" argument must be of type EventEmitter. Received type ' +
              typeof t
          );
      }
      Object.defineProperty(o, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
          return a;
        },
        set: function (t) {
          if ("number" != typeof t || t < 0 || i(t))
            throw RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                t +
                "."
            );
          a = t;
        },
      }),
        (o.init = function () {
          (void 0 === this._events ||
            this._events === Object.getPrototypeOf(this)._events) &&
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (o.prototype.setMaxListeners = function (t) {
          if ("number" != typeof t || t < 0 || i(t))
            throw RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                t +
                "."
            );
          return (this._maxListeners = t), this;
        }),
        (o.prototype.getMaxListeners = function () {
          return f(this);
        }),
        (o.prototype.emit = function (t) {
          for (var e = [], r = 1; r < arguments.length; r++)
            e.push(arguments[r]);
          var i = "error" === t,
            o = this._events;
          if (void 0 !== o) i = i && void 0 === o.error;
          else if (!i) return !1;
          if (i) {
            if ((e.length > 0 && (a = e[0]), a instanceof Error)) throw a;
            var a,
              s = Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
            throw ((s.context = a), s);
          }
          var f = o[t];
          if (void 0 === f) return !1;
          if ("function" == typeof f) n(f, this, e);
          else
            for (var u = f.length, h = p(f, u), r = 0; r < u; ++r)
              n(h[r], this, e);
          return !0;
        }),
        (o.prototype.addListener = function (t, e) {
          return u(this, t, e, !1);
        }),
        (o.prototype.on = o.prototype.addListener),
        (o.prototype.prependListener = function (t, e) {
          return u(this, t, e, !0);
        }),
        (o.prototype.once = function (t, e) {
          return s(e), this.on(t, c(this, t, e)), this;
        }),
        (o.prototype.prependOnceListener = function (t, e) {
          return s(e), this.prependListener(t, c(this, t, e)), this;
        }),
        (o.prototype.removeListener = function (t, e) {
          var r, n, i, o, a;
          if ((s(e), void 0 === (n = this._events) || void 0 === (r = n[t])))
            return this;
          if (r === e || r.listener === e)
            0 == --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete n[t],
                n.removeListener &&
                  this.emit("removeListener", t, r.listener || e));
          else if ("function" != typeof r) {
            for (i = -1, o = r.length - 1; o >= 0; o--)
              if (r[o] === e || r[o].listener === e) {
                (a = r[o].listener), (i = o);
                break;
              }
            if (i < 0) return this;
            0 === i
              ? r.shift()
              : (function (t, e) {
                  for (; e + 1 < t.length; e++) t[e] = t[e + 1];
                  t.pop();
                })(r, i),
              1 === r.length && (n[t] = r[0]),
              void 0 !== n.removeListener &&
                this.emit("removeListener", t, a || e);
          }
          return this;
        }),
        (o.prototype.off = o.prototype.removeListener),
        (o.prototype.removeAllListeners = function (t) {
          var e, r, n;
          if (void 0 === (r = this._events)) return this;
          if (void 0 === r.removeListener)
            return (
              0 == arguments.length
                ? ((this._events = Object.create(null)),
                  (this._eventsCount = 0))
                : void 0 !== r[t] &&
                  (0 == --this._eventsCount
                    ? (this._events = Object.create(null))
                    : delete r[t]),
              this
            );
          if (0 == arguments.length) {
            var i,
              o = Object.keys(r);
            for (n = 0; n < o.length; ++n)
              "removeListener" !== (i = o[n]) && this.removeAllListeners(i);
            return (
              this.removeAllListeners("removeListener"),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ("function" == typeof (e = r[t])) this.removeListener(t, e);
          else if (void 0 !== e)
            for (n = e.length - 1; n >= 0; n--) this.removeListener(t, e[n]);
          return this;
        }),
        (o.prototype.listeners = function (t) {
          return l(this, t, !0);
        }),
        (o.prototype.rawListeners = function (t) {
          return l(this, t, !1);
        }),
        (o.listenerCount = function (t, e) {
          return "function" == typeof t.listenerCount
            ? t.listenerCount(e)
            : d.call(t, e);
        }),
        (o.prototype.listenerCount = d),
        (o.prototype.eventNames = function () {
          return this._eventsCount > 0 ? e(this._events) : [];
        });
    },
    4029: function (t, e, r) {
      "use strict";
      var n = r(5320),
        i = Object.prototype.toString,
        o = Object.prototype.hasOwnProperty,
        a = function (t, e, r) {
          for (var n = 0, i = t.length; n < i; n++)
            o.call(t, n) && (null == r ? e(t[n], n, t) : e.call(r, t[n], n, t));
        },
        s = function (t, e, r) {
          for (var n = 0, i = t.length; n < i; n++)
            null == r ? e(t.charAt(n), n, t) : e.call(r, t.charAt(n), n, t);
        },
        f = function (t, e, r) {
          for (var n in t)
            o.call(t, n) && (null == r ? e(t[n], n, t) : e.call(r, t[n], n, t));
        };
      t.exports = function (t, e, r) {
        var o;
        if (!n(e)) throw TypeError("iterator must be a function");
        arguments.length >= 3 && (o = r),
          "[object Array]" === i.call(t)
            ? a(t, e, o)
            : "string" == typeof t
            ? s(t, e, o)
            : f(t, e, o);
      };
    },
    7648: function (t) {
      "use strict";
      var e = Array.prototype.slice,
        r = Object.prototype.toString;
      t.exports = function (t) {
        var n,
          i = this;
        if ("function" != typeof i || "[object Function]" !== r.call(i))
          throw TypeError(
            "Function.prototype.bind called on incompatible " + i
          );
        for (
          var o = e.call(arguments, 1),
            a = Math.max(0, i.length - o.length),
            s = [],
            f = 0;
          f < a;
          f++
        )
          s.push("$" + f);
        if (
          ((n = Function(
            "binder",
            "return function (" +
              s.join(",") +
              "){ return binder.apply(this,arguments); }"
          )(function () {
            if (!(this instanceof n))
              return i.apply(t, o.concat(e.call(arguments)));
            var r = i.apply(this, o.concat(e.call(arguments)));
            return Object(r) === r ? r : this;
          })),
          i.prototype)
        ) {
          var u = function () {};
          (u.prototype = i.prototype),
            (n.prototype = new u()),
            (u.prototype = null);
        }
        return n;
      };
    },
    8612: function (t, e, r) {
      "use strict";
      var n = r(7648);
      t.exports = Function.prototype.bind || n;
    },
    210: function (t, e, r) {
      "use strict";
      var n,
        i = SyntaxError,
        o = Function,
        a = TypeError,
        s = function (t) {
          try {
            return o('"use strict"; return (' + t + ").constructor;")();
          } catch (t) {}
        },
        f = Object.getOwnPropertyDescriptor;
      if (f)
        try {
          f({}, "");
        } catch (t) {
          f = null;
        }
      var u = function () {
          throw new a();
        },
        h = f
          ? (function () {
              try {
                return arguments.callee, u;
              } catch (t) {
                try {
                  return f(arguments, "callee").get;
                } catch (t) {
                  return u;
                }
              }
            })()
          : u,
        c = r(1405)(),
        l =
          Object.getPrototypeOf ||
          function (t) {
            return t.__proto__;
          },
        d = {},
        p = "undefined" == typeof Uint8Array ? n : l(Uint8Array),
        b = {
          "%AggregateError%":
            "undefined" == typeof AggregateError ? n : AggregateError,
          "%Array%": Array,
          "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? n : ArrayBuffer,
          "%ArrayIteratorPrototype%": c ? l([][Symbol.iterator]()) : n,
          "%AsyncFromSyncIteratorPrototype%": n,
          "%AsyncFunction%": d,
          "%AsyncGenerator%": d,
          "%AsyncGeneratorFunction%": d,
          "%AsyncIteratorPrototype%": d,
          "%Atomics%": "undefined" == typeof Atomics ? n : Atomics,
          "%BigInt%": "undefined" == typeof BigInt ? n : BigInt,
          "%BigInt64Array%":
            "undefined" == typeof BigInt64Array ? n : BigInt64Array,
          "%BigUint64Array%":
            "undefined" == typeof BigUint64Array ? n : BigUint64Array,
          "%Boolean%": Boolean,
          "%DataView%": "undefined" == typeof DataView ? n : DataView,
          "%Date%": Date,
          "%decodeURI%": decodeURI,
          "%decodeURIComponent%": decodeURIComponent,
          "%encodeURI%": encodeURI,
          "%encodeURIComponent%": encodeURIComponent,
          "%Error%": Error,
          "%eval%": eval,
          "%EvalError%": EvalError,
          "%Float32Array%":
            "undefined" == typeof Float32Array ? n : Float32Array,
          "%Float64Array%":
            "undefined" == typeof Float64Array ? n : Float64Array,
          "%FinalizationRegistry%":
            "undefined" == typeof FinalizationRegistry
              ? n
              : FinalizationRegistry,
          "%Function%": o,
          "%GeneratorFunction%": d,
          "%Int8Array%": "undefined" == typeof Int8Array ? n : Int8Array,
          "%Int16Array%": "undefined" == typeof Int16Array ? n : Int16Array,
          "%Int32Array%": "undefined" == typeof Int32Array ? n : Int32Array,
          "%isFinite%": isFinite,
          "%isNaN%": isNaN,
          "%IteratorPrototype%": c ? l(l([][Symbol.iterator]())) : n,
          "%JSON%": "object" == typeof JSON ? JSON : n,
          "%Map%": "undefined" == typeof Map ? n : Map,
          "%MapIteratorPrototype%":
            "undefined" != typeof Map && c
              ? l(new Map()[Symbol.iterator]())
              : n,
          "%Math%": Math,
          "%Number%": Number,
          "%Object%": Object,
          "%parseFloat%": parseFloat,
          "%parseInt%": parseInt,
          "%Promise%": "undefined" == typeof Promise ? n : Promise,
          "%Proxy%": "undefined" == typeof Proxy ? n : Proxy,
          "%RangeError%": RangeError,
          "%ReferenceError%": ReferenceError,
          "%Reflect%": "undefined" == typeof Reflect ? n : Reflect,
          "%RegExp%": RegExp,
          "%Set%": "undefined" == typeof Set ? n : Set,
          "%SetIteratorPrototype%":
            "undefined" != typeof Set && c
              ? l(new Set()[Symbol.iterator]())
              : n,
          "%SharedArrayBuffer%":
            "undefined" == typeof SharedArrayBuffer ? n : SharedArrayBuffer,
          "%String%": String,
          "%StringIteratorPrototype%": c ? l(""[Symbol.iterator]()) : n,
          "%Symbol%": c ? Symbol : n,
          "%SyntaxError%": i,
          "%ThrowTypeError%": h,
          "%TypedArray%": p,
          "%TypeError%": a,
          "%Uint8Array%": "undefined" == typeof Uint8Array ? n : Uint8Array,
          "%Uint8ClampedArray%":
            "undefined" == typeof Uint8ClampedArray ? n : Uint8ClampedArray,
          "%Uint16Array%": "undefined" == typeof Uint16Array ? n : Uint16Array,
          "%Uint32Array%": "undefined" == typeof Uint32Array ? n : Uint32Array,
          "%URIError%": URIError,
          "%WeakMap%": "undefined" == typeof WeakMap ? n : WeakMap,
          "%WeakRef%": "undefined" == typeof WeakRef ? n : WeakRef,
          "%WeakSet%": "undefined" == typeof WeakSet ? n : WeakSet,
        };
      try {
        null.error;
      } catch (t) {
        var y = l(l(t));
        b["%Error.prototype%"] = y;
      }
      var m = function t(e) {
          var r;
          if ("%AsyncFunction%" === e) r = s("async function () {}");
          else if ("%GeneratorFunction%" === e) r = s("function* () {}");
          else if ("%AsyncGeneratorFunction%" === e)
            r = s("async function* () {}");
          else if ("%AsyncGenerator%" === e) {
            var n = t("%AsyncGeneratorFunction%");
            n && (r = n.prototype);
          } else if ("%AsyncIteratorPrototype%" === e) {
            var i = t("%AsyncGenerator%");
            i && (r = l(i.prototype));
          }
          return (b[e] = r), r;
        },
        g = {
          "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
          "%ArrayPrototype%": ["Array", "prototype"],
          "%ArrayProto_entries%": ["Array", "prototype", "entries"],
          "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
          "%ArrayProto_keys%": ["Array", "prototype", "keys"],
          "%ArrayProto_values%": ["Array", "prototype", "values"],
          "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
          "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
          "%AsyncGeneratorPrototype%": [
            "AsyncGeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%BooleanPrototype%": ["Boolean", "prototype"],
          "%DataViewPrototype%": ["DataView", "prototype"],
          "%DatePrototype%": ["Date", "prototype"],
          "%ErrorPrototype%": ["Error", "prototype"],
          "%EvalErrorPrototype%": ["EvalError", "prototype"],
          "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
          "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
          "%FunctionPrototype%": ["Function", "prototype"],
          "%Generator%": ["GeneratorFunction", "prototype"],
          "%GeneratorPrototype%": [
            "GeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
          "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
          "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
          "%JSONParse%": ["JSON", "parse"],
          "%JSONStringify%": ["JSON", "stringify"],
          "%MapPrototype%": ["Map", "prototype"],
          "%NumberPrototype%": ["Number", "prototype"],
          "%ObjectPrototype%": ["Object", "prototype"],
          "%ObjProto_toString%": ["Object", "prototype", "toString"],
          "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
          "%PromisePrototype%": ["Promise", "prototype"],
          "%PromiseProto_then%": ["Promise", "prototype", "then"],
          "%Promise_all%": ["Promise", "all"],
          "%Promise_reject%": ["Promise", "reject"],
          "%Promise_resolve%": ["Promise", "resolve"],
          "%RangeErrorPrototype%": ["RangeError", "prototype"],
          "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
          "%RegExpPrototype%": ["RegExp", "prototype"],
          "%SetPrototype%": ["Set", "prototype"],
          "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
          "%StringPrototype%": ["String", "prototype"],
          "%SymbolPrototype%": ["Symbol", "prototype"],
          "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
          "%TypedArrayPrototype%": ["TypedArray", "prototype"],
          "%TypeErrorPrototype%": ["TypeError", "prototype"],
          "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
          "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
          "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
          "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
          "%URIErrorPrototype%": ["URIError", "prototype"],
          "%WeakMapPrototype%": ["WeakMap", "prototype"],
          "%WeakSetPrototype%": ["WeakSet", "prototype"],
        },
        v = r(8612),
        w = r(7642),
        M = v.call(Function.call, Array.prototype.concat),
        _ = v.call(Function.apply, Array.prototype.splice),
        S = v.call(Function.call, String.prototype.replace),
        A = v.call(Function.call, String.prototype.slice),
        E = v.call(Function.call, RegExp.prototype.exec),
        x =
          /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        O = /\\(\\)?/g,
        k = function (t) {
          var e = A(t, 0, 1),
            r = A(t, -1);
          if ("%" === e && "%" !== r)
            throw new i("invalid intrinsic syntax, expected closing `%`");
          if ("%" === r && "%" !== e)
            throw new i("invalid intrinsic syntax, expected opening `%`");
          var n = [];
          return (
            S(t, x, function (t, e, r, i) {
              n[n.length] = r ? S(i, O, "$1") : e || t;
            }),
            n
          );
        },
        R = function (t, e) {
          var r,
            n = t;
          if ((w(g, n) && (n = "%" + (r = g[n])[0] + "%"), w(b, n))) {
            var o = b[n];
            if ((o === d && (o = m(n)), void 0 === o && !e))
              throw new a(
                "intrinsic " +
                  t +
                  " exists, but is not available. Please file an issue!"
              );
            return { alias: r, name: n, value: o };
          }
          throw new i("intrinsic " + t + " does not exist!");
        };
      t.exports = function (t, e) {
        if ("string" != typeof t || 0 === t.length)
          throw new a("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && "boolean" != typeof e)
          throw new a('"allowMissing" argument must be a boolean');
        if (null === E(/^%?[^%]*%?$/, t))
          throw new i(
            "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
          );
        var r = k(t),
          n = r.length > 0 ? r[0] : "",
          o = R("%" + n + "%", e),
          s = o.name,
          u = o.value,
          h = !1,
          c = o.alias;
        c && ((n = c[0]), _(r, M([0, 1], c)));
        for (var l = 1, d = !0; l < r.length; l += 1) {
          var p = r[l],
            y = A(p, 0, 1),
            m = A(p, -1);
          if (
            ('"' === y ||
              "'" === y ||
              "`" === y ||
              '"' === m ||
              "'" === m ||
              "`" === m) &&
            y !== m
          )
            throw new i("property names with quotes must have matching quotes");
          if (
            (("constructor" !== p && d) || (h = !0),
            (n += "." + p),
            w(b, (s = "%" + n + "%")))
          )
            u = b[s];
          else if (null != u) {
            if (!(p in u)) {
              if (!e)
                throw new a(
                  "base intrinsic for " +
                    t +
                    " exists, but the property is not available."
                );
              return;
            }
            if (f && l + 1 >= r.length) {
              var g = f(u, p);
              u =
                (d = !!g) && "get" in g && !("originalValue" in g.get)
                  ? g.get
                  : u[p];
            } else (d = w(u, p)), (u = u[p]);
            d && !h && (b[s] = u);
          }
        }
        return u;
      };
    },
    7296: function (t, e, r) {
      "use strict";
      var n = r(210)("%Object.getOwnPropertyDescriptor%", !0);
      if (n)
        try {
          n([], "length");
        } catch (t) {
          n = null;
        }
      t.exports = n;
    },
    1405: function (t, e, r) {
      "use strict";
      var n = "undefined" != typeof Symbol && Symbol,
        i = r(5419);
      t.exports = function () {
        return (
          "function" == typeof n &&
          "function" == typeof Symbol &&
          "symbol" == typeof n("foo") &&
          "symbol" == typeof Symbol("bar") &&
          i()
        );
      };
    },
    5419: function (t) {
      "use strict";
      t.exports = function () {
        if (
          "function" != typeof Symbol ||
          "function" != typeof Object.getOwnPropertySymbols
        )
          return !1;
        if ("symbol" == typeof Symbol.iterator) return !0;
        var t = {},
          e = Symbol("test"),
          r = Object(e);
        if (
          "string" == typeof e ||
          "[object Symbol]" !== Object.prototype.toString.call(e) ||
          "[object Symbol]" !== Object.prototype.toString.call(r)
        )
          return !1;
        for (e in ((t[e] = 42), t)) return !1;
        if (
          ("function" == typeof Object.keys && 0 !== Object.keys(t).length) ||
          ("function" == typeof Object.getOwnPropertyNames &&
            0 !== Object.getOwnPropertyNames(t).length)
        )
          return !1;
        var n = Object.getOwnPropertySymbols(t);
        if (
          1 !== n.length ||
          n[0] !== e ||
          !Object.prototype.propertyIsEnumerable.call(t, e)
        )
          return !1;
        if ("function" == typeof Object.getOwnPropertyDescriptor) {
          var i = Object.getOwnPropertyDescriptor(t, e);
          if (42 !== i.value || !0 !== i.enumerable) return !1;
        }
        return !0;
      };
    },
    6410: function (t, e, r) {
      "use strict";
      var n = r(5419);
      t.exports = function () {
        return n() && !!Symbol.toStringTag;
      };
    },
    7642: function (t, e, r) {
      "use strict";
      var n = r(8612);
      t.exports = n.call(Function.call, Object.prototype.hasOwnProperty);
    },
    3349: function (t, e, r) {
      "use strict";
      var n = r(9509).Buffer,
        i = r(8473).Transform;
      function o(t) {
        i.call(this),
          (this._block = n.allocUnsafe(t)),
          (this._blockSize = t),
          (this._blockOffset = 0),
          (this._length = [0, 0, 0, 0]),
          (this._finalized = !1);
      }
      r(5717)(o, i),
        (o.prototype._transform = function (t, e, r) {
          var n = null;
          try {
            this.update(t, e);
          } catch (t) {
            n = t;
          }
          r(n);
        }),
        (o.prototype._flush = function (t) {
          var e = null;
          try {
            this.push(this.digest());
          } catch (t) {
            e = t;
          }
          t(e);
        }),
        (o.prototype.update = function (t, e) {
          if (
            ((function (t, e) {
              if (!n.isBuffer(t) && "string" != typeof t)
                throw TypeError(e + " must be a string or a buffer");
            })(t, "Data"),
            this._finalized)
          )
            throw Error("Digest already called");
          n.isBuffer(t) || (t = n.from(t, e));
          for (
            var r = this._block, i = 0;
            this._blockOffset + t.length - i >= this._blockSize;

          ) {
            for (var o = this._blockOffset; o < this._blockSize; )
              r[o++] = t[i++];
            this._update(), (this._blockOffset = 0);
          }
          for (; i < t.length; ) r[this._blockOffset++] = t[i++];
          for (var a = 0, s = 8 * t.length; s > 0; ++a)
            (this._length[a] += s),
              (s = (this._length[a] / 4294967296) | 0) > 0 &&
                (this._length[a] -= 4294967296 * s);
          return this;
        }),
        (o.prototype._update = function () {
          throw Error("_update is not implemented");
        }),
        (o.prototype.digest = function (t) {
          if (this._finalized) throw Error("Digest already called");
          this._finalized = !0;
          var e = this._digest();
          void 0 !== t && (e = e.toString(t)),
            this._block.fill(0),
            (this._blockOffset = 0);
          for (var r = 0; r < 4; ++r) this._length[r] = 0;
          return e;
        }),
        (o.prototype._digest = function () {
          throw Error("_digest is not implemented");
        }),
        (t.exports = o);
    },
    2156: function (t, e, r) {
      "use strict";
      var n = r(3715),
        i = r(4504),
        o = r(9746);
      function a(t) {
        if (!(this instanceof a)) return new a(t);
        (this.hash = t.hash),
          (this.predResist = !!t.predResist),
          (this.outLen = this.hash.outSize),
          (this.minEntropy = t.minEntropy || this.hash.hmacStrength),
          (this._reseed = null),
          (this.reseedInterval = null),
          (this.K = null),
          (this.V = null);
        var e = i.toArray(t.entropy, t.entropyEnc || "hex"),
          r = i.toArray(t.nonce, t.nonceEnc || "hex"),
          n = i.toArray(t.pers, t.persEnc || "hex");
        o(
          e.length >= this.minEntropy / 8,
          "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
        ),
          this._init(e, r, n);
      }
      (t.exports = a),
        (a.prototype._init = function (t, e, r) {
          var n = t.concat(e).concat(r);
          (this.K = Array(this.outLen / 8)), (this.V = Array(this.outLen / 8));
          for (var i = 0; i < this.V.length; i++)
            (this.K[i] = 0), (this.V[i] = 1);
          this._update(n),
            (this._reseed = 1),
            (this.reseedInterval = 281474976710656);
        }),
        (a.prototype._hmac = function () {
          return new n.hmac(this.hash, this.K);
        }),
        (a.prototype._update = function (t) {
          var e = this._hmac().update(this.V).update([0]);
          t && (e = e.update(t)),
            (this.K = e.digest()),
            (this.V = this._hmac().update(this.V).digest()),
            t &&
              ((this.K = this._hmac()
                .update(this.V)
                .update([1])
                .update(t)
                .digest()),
              (this.V = this._hmac().update(this.V).digest()));
        }),
        (a.prototype.reseed = function (t, e, r, n) {
          "string" != typeof e && ((n = r), (r = e), (e = null)),
            (t = i.toArray(t, e)),
            (r = i.toArray(r, n)),
            o(
              t.length >= this.minEntropy / 8,
              "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
            ),
            this._update(t.concat(r || [])),
            (this._reseed = 1);
        }),
        (a.prototype.generate = function (t, e, r, n) {
          if (this._reseed > this.reseedInterval)
            throw Error("Reseed is required");
          "string" != typeof e && ((n = r), (r = e), (e = null)),
            r && ((r = i.toArray(r, n || "hex")), this._update(r));
          for (var o = []; o.length < t; )
            (this.V = this._hmac().update(this.V).digest()),
              (o = o.concat(this.V));
          var a = o.slice(0, t);
          return this._update(r), this._reseed++, i.encode(a, e);
        });
    },
    2584: function (t, e, r) {
      "use strict";
      var n = r(6410)(),
        i = r(1924)("Object.prototype.toString"),
        o = function (t) {
          return (
            (!n || !t || "object" != typeof t || !(Symbol.toStringTag in t)) &&
            "[object Arguments]" === i(t)
          );
        },
        a = function (t) {
          return (
            !!o(t) ||
            (null !== t &&
              "object" == typeof t &&
              "number" == typeof t.length &&
              t.length >= 0 &&
              "[object Array]" !== i(t) &&
              "[object Function]" === i(t.callee))
          );
        },
        s = (function () {
          return o(arguments);
        })();
      (o.isLegacyArguments = a), (t.exports = s ? o : a);
    },
    5320: function (t) {
      "use strict";
      var e,
        r,
        n = Function.prototype.toString,
        i = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
      if ("function" == typeof i && "function" == typeof Object.defineProperty)
        try {
          (e = Object.defineProperty({}, "length", {
            get: function () {
              throw r;
            },
          })),
            (r = {}),
            i(
              function () {
                throw 42;
              },
              null,
              e
            );
        } catch (t) {
          t !== r && (i = null);
        }
      else i = null;
      var o = /^\s*class\b/,
        a = function (t) {
          try {
            var e = n.call(t);
            return o.test(e);
          } catch (t) {
            return !1;
          }
        },
        s = function (t) {
          try {
            if (a(t)) return !1;
            return n.call(t), !0;
          } catch (t) {
            return !1;
          }
        },
        f = Object.prototype.toString,
        u = "function" == typeof Symbol && !!Symbol.toStringTag,
        h = !(0 in [,]),
        c = function () {
          return !1;
        };
      if ("object" == typeof document) {
        var l = document.all;
        f.call(l) === f.call(document.all) &&
          (c = function (t) {
            if ((h || !t) && (void 0 === t || "object" == typeof t))
              try {
                var e = f.call(t);
                return (
                  ("[object HTMLAllCollection]" === e ||
                    "[object HTML document.all class]" === e ||
                    "[object HTMLCollection]" === e ||
                    "[object Object]" === e) &&
                  null == t("")
                );
              } catch (t) {}
            return !1;
          });
      }
      t.exports = i
        ? function (t) {
            if (c(t)) return !0;
            if (!t || ("function" != typeof t && "object" != typeof t))
              return !1;
            try {
              i(t, null, e);
            } catch (t) {
              if (t !== r) return !1;
            }
            return !a(t) && s(t);
          }
        : function (t) {
            if (c(t)) return !0;
            if (!t || ("function" != typeof t && "object" != typeof t))
              return !1;
            if (u) return s(t);
            if (a(t)) return !1;
            var e = f.call(t);
            return (
              !!(
                "[object Function]" === e ||
                "[object GeneratorFunction]" === e ||
                /^\[object HTML/.test(e)
              ) && s(t)
            );
          };
    },
    8662: function (t, e, r) {
      "use strict";
      var n,
        i = Object.prototype.toString,
        o = Function.prototype.toString,
        a = /^\s*(?:function)?\*/,
        s = r(6410)(),
        f = Object.getPrototypeOf,
        u = function () {
          if (!s) return !1;
          try {
            return Function("return function*() {}")();
          } catch (t) {}
        };
      t.exports = function (t) {
        if ("function" != typeof t) return !1;
        if (a.test(o.call(t))) return !0;
        if (!s) return "[object GeneratorFunction]" === i.call(t);
        if (!f) return !1;
        if (void 0 === n) {
          var e = u();
          n = !!e && f(e);
        }
        return f(t) === n;
      };
    },
    3944: function (t) {
      t.exports = function (t) {
        if ("string" != typeof t)
          throw Error(
            "[is-hex-prefixed] value must be type 'string', is currently type " +
              typeof t +
              ", while checking isHexPrefixed."
          );
        return "0x" === t.slice(0, 2);
      };
    },
    5692: function (t, e, r) {
      "use strict";
      var n = r(4029),
        i = r(3083),
        o = r(1924),
        a = o("Object.prototype.toString"),
        s = r(6410)(),
        f = r(7296),
        u = "undefined" == typeof globalThis ? r.g : globalThis,
        h = i(),
        c =
          o("Array.prototype.indexOf", !0) ||
          function (t, e) {
            for (var r = 0; r < t.length; r += 1) if (t[r] === e) return r;
            return -1;
          },
        l = o("String.prototype.slice"),
        d = {},
        p = Object.getPrototypeOf;
      s &&
        f &&
        p &&
        n(h, function (t) {
          var e = new u[t]();
          if (Symbol.toStringTag in e) {
            var r = p(e),
              n = f(r, Symbol.toStringTag);
            n || (n = f(p(r), Symbol.toStringTag)), (d[t] = n.get);
          }
        });
      var b = function (t) {
        var e = !1;
        return (
          n(d, function (r, n) {
            if (!e)
              try {
                e = r.call(t) === n;
              } catch (t) {}
          }),
          e
        );
      };
      t.exports = function (t) {
        return (
          !!t &&
          "object" == typeof t &&
          (s && Symbol.toStringTag in t
            ? !!f && b(t)
            : c(h, l(a(t), 8, -1)) > -1)
        );
      };
    },
    5811: function (t, e, r) {
      t.exports = r(6066)(r(9653));
    },
    6066: function (t, e, r) {
      let n = r(7016),
        i = r(8784);
      t.exports = function (t) {
        let e = n(t),
          r = i(t);
        return function (t, n) {
          let i = "string" == typeof t ? t.toLowerCase() : t;
          switch (i) {
            case "keccak224":
              return new e(1152, 448, null, 224, n);
            case "keccak256":
              return new e(1088, 512, null, 256, n);
            case "keccak384":
              return new e(832, 768, null, 384, n);
            case "keccak512":
              return new e(576, 1024, null, 512, n);
            case "sha3-224":
              return new e(1152, 448, 6, 224, n);
            case "sha3-256":
              return new e(1088, 512, 6, 256, n);
            case "sha3-384":
              return new e(832, 768, 6, 384, n);
            case "sha3-512":
              return new e(576, 1024, 6, 512, n);
            case "shake128":
              return new r(1344, 256, 31, n);
            case "shake256":
              return new r(1088, 512, 31, n);
            default:
              throw Error("Invald algorithm: " + t);
          }
        };
      };
    },
    7016: function (t, e, r) {
      var n = r(8764).Buffer;
      let { Transform: i } = r(8473);
      t.exports = (t) =>
        class e extends i {
          constructor(e, r, n, i, o) {
            super(o),
              (this._rate = e),
              (this._capacity = r),
              (this._delimitedSuffix = n),
              (this._hashBitLength = i),
              (this._options = o),
              (this._state = new t()),
              this._state.initialize(e, r),
              (this._finalized = !1);
          }
          _transform(t, e, r) {
            let n = null;
            try {
              this.update(t, e);
            } catch (t) {
              n = t;
            }
            r(n);
          }
          _flush(t) {
            let e = null;
            try {
              this.push(this.digest());
            } catch (t) {
              e = t;
            }
            t(e);
          }
          update(t, e) {
            if (!n.isBuffer(t) && "string" != typeof t)
              throw TypeError("Data must be a string or a buffer");
            if (this._finalized) throw Error("Digest already called");
            return (
              n.isBuffer(t) || (t = n.from(t, e)), this._state.absorb(t), this
            );
          }
          digest(t) {
            if (this._finalized) throw Error("Digest already called");
            (this._finalized = !0),
              this._delimitedSuffix &&
                this._state.absorbLastFewBits(this._delimitedSuffix);
            let e = this._state.squeeze(this._hashBitLength / 8);
            return void 0 !== t && (e = e.toString(t)), this._resetState(), e;
          }
          _resetState() {
            return this._state.initialize(this._rate, this._capacity), this;
          }
          _clone() {
            let t = new e(
              this._rate,
              this._capacity,
              this._delimitedSuffix,
              this._hashBitLength,
              this._options
            );
            return (
              this._state.copy(t._state), (t._finalized = this._finalized), t
            );
          }
        };
    },
    8784: function (t, e, r) {
      var n = r(8764).Buffer;
      let { Transform: i } = r(8473);
      t.exports = (t) =>
        class e extends i {
          constructor(e, r, n, i) {
            super(i),
              (this._rate = e),
              (this._capacity = r),
              (this._delimitedSuffix = n),
              (this._options = i),
              (this._state = new t()),
              this._state.initialize(e, r),
              (this._finalized = !1);
          }
          _transform(t, e, r) {
            let n = null;
            try {
              this.update(t, e);
            } catch (t) {
              n = t;
            }
            r(n);
          }
          _flush() {}
          _read(t) {
            this.push(this.squeeze(t));
          }
          update(t, e) {
            if (!n.isBuffer(t) && "string" != typeof t)
              throw TypeError("Data must be a string or a buffer");
            if (this._finalized) throw Error("Squeeze already called");
            return (
              n.isBuffer(t) || (t = n.from(t, e)), this._state.absorb(t), this
            );
          }
          squeeze(t, e) {
            this._finalized ||
              ((this._finalized = !0),
              this._state.absorbLastFewBits(this._delimitedSuffix));
            let r = this._state.squeeze(t);
            return void 0 !== e && (r = r.toString(e)), r;
          }
          _resetState() {
            return this._state.initialize(this._rate, this._capacity), this;
          }
          _clone() {
            let t = new e(
              this._rate,
              this._capacity,
              this._delimitedSuffix,
              this._options
            );
            return (
              this._state.copy(t._state), (t._finalized = this._finalized), t
            );
          }
        };
    },
    4040: function (t, e) {
      let r = [
        1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0,
        2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136,
        0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905,
        2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648,
        32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896,
        2147483648, 2147483649, 0, 2147516424, 2147483648,
      ];
      e.p1600 = function (t) {
        for (let e = 0; e < 24; ++e) {
          let n = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40],
            i = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41],
            o = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42],
            a = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43],
            s = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44],
            f = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45],
            u = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46],
            h = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47],
            c = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48],
            l = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49],
            d = c ^ ((o << 1) | (a >>> 31)),
            p = l ^ ((a << 1) | (o >>> 31)),
            b = t[0] ^ d,
            y = t[1] ^ p,
            m = t[10] ^ d,
            g = t[11] ^ p,
            v = t[20] ^ d,
            w = t[21] ^ p,
            M = t[30] ^ d,
            _ = t[31] ^ p,
            S = t[40] ^ d,
            A = t[41] ^ p;
          (d = n ^ ((s << 1) | (f >>> 31))), (p = i ^ ((f << 1) | (s >>> 31)));
          let E = t[2] ^ d,
            x = t[3] ^ p,
            O = t[12] ^ d,
            k = t[13] ^ p,
            R = t[22] ^ d,
            P = t[23] ^ p,
            j = t[32] ^ d,
            I = t[33] ^ p,
            T = t[42] ^ d,
            B = t[43] ^ p;
          (d = o ^ ((u << 1) | (h >>> 31))), (p = a ^ ((h << 1) | (u >>> 31)));
          let N = t[4] ^ d,
            L = t[5] ^ p,
            C = t[14] ^ d,
            q = t[15] ^ p,
            U = t[24] ^ d,
            F = t[25] ^ p,
            D = t[34] ^ d,
            z = t[35] ^ p,
            H = t[44] ^ d,
            W = t[45] ^ p;
          (d = s ^ ((c << 1) | (l >>> 31))), (p = f ^ ((l << 1) | (c >>> 31)));
          let K = t[6] ^ d,
            V = t[7] ^ p,
            Z = t[16] ^ d,
            G = t[17] ^ p,
            $ = t[26] ^ d,
            J = t[27] ^ p,
            Y = t[36] ^ d,
            X = t[37] ^ p,
            Q = t[46] ^ d,
            tt = t[47] ^ p;
          (d = u ^ ((n << 1) | (i >>> 31))), (p = h ^ ((i << 1) | (n >>> 31)));
          let te = t[8] ^ d,
            tr = t[9] ^ p,
            tn = t[18] ^ d,
            ti = t[19] ^ p,
            to = t[28] ^ d,
            ta = t[29] ^ p,
            ts = t[38] ^ d,
            tf = t[39] ^ p,
            tu = t[48] ^ d,
            th = t[49] ^ p,
            tc = (g << 4) | (m >>> 28),
            tl = (m << 4) | (g >>> 28),
            td = (v << 3) | (w >>> 29),
            tp = (w << 3) | (v >>> 29),
            tb = (_ << 9) | (M >>> 23),
            ty = (M << 9) | (_ >>> 23),
            tm = (S << 18) | (A >>> 14),
            tg = (A << 18) | (S >>> 14),
            tv = (E << 1) | (x >>> 31),
            tw = (x << 1) | (E >>> 31),
            tM = (k << 12) | (O >>> 20),
            t_ = (O << 12) | (k >>> 20),
            tS = (R << 10) | (P >>> 22),
            tA = (P << 10) | (R >>> 22),
            tE = (I << 13) | (j >>> 19),
            tx = (j << 13) | (I >>> 19),
            tO = (T << 2) | (B >>> 30),
            tk = (B << 2) | (T >>> 30),
            tR = (L << 30) | (N >>> 2),
            tP = (N << 30) | (L >>> 2),
            tj = (C << 6) | (q >>> 26),
            tI = (q << 6) | (C >>> 26),
            tT = (F << 11) | (U >>> 21),
            tB = (U << 11) | (F >>> 21),
            tN = (D << 15) | (z >>> 17),
            tL = (z << 15) | (D >>> 17),
            tC = (W << 29) | (H >>> 3),
            tq = (H << 29) | (W >>> 3),
            tU = (K << 28) | (V >>> 4),
            tF = (V << 28) | (K >>> 4),
            tD = (G << 23) | (Z >>> 9),
            tz = (Z << 23) | (G >>> 9),
            tH = ($ << 25) | (J >>> 7),
            tW = (J << 25) | ($ >>> 7),
            tK = (Y << 21) | (X >>> 11),
            tV = (X << 21) | (Y >>> 11),
            tZ = (tt << 24) | (Q >>> 8),
            tG = (Q << 24) | (tt >>> 8),
            t$ = (te << 27) | (tr >>> 5),
            tJ = (tr << 27) | (te >>> 5),
            tY = (tn << 20) | (ti >>> 12),
            tX = (ti << 20) | (tn >>> 12),
            tQ = (ta << 7) | (to >>> 25),
            t0 = (to << 7) | (ta >>> 25),
            t1 = (ts << 8) | (tf >>> 24),
            t2 = (tf << 8) | (ts >>> 24),
            t6 = (tu << 14) | (th >>> 18),
            t3 = (th << 14) | (tu >>> 18);
          (t[0] = b ^ (~tM & tT)),
            (t[1] = y ^ (~t_ & tB)),
            (t[10] = tU ^ (~tY & td)),
            (t[11] = tF ^ (~tX & tp)),
            (t[20] = tv ^ (~tj & tH)),
            (t[21] = tw ^ (~tI & tW)),
            (t[30] = t$ ^ (~tc & tS)),
            (t[31] = tJ ^ (~tl & tA)),
            (t[40] = tR ^ (~tD & tQ)),
            (t[41] = tP ^ (~tz & t0)),
            (t[2] = tM ^ (~tT & tK)),
            (t[3] = t_ ^ (~tB & tV)),
            (t[12] = tY ^ (~td & tE)),
            (t[13] = tX ^ (~tp & tx)),
            (t[22] = tj ^ (~tH & t1)),
            (t[23] = tI ^ (~tW & t2)),
            (t[32] = tc ^ (~tS & tN)),
            (t[33] = tl ^ (~tA & tL)),
            (t[42] = tD ^ (~tQ & tb)),
            (t[43] = tz ^ (~t0 & ty)),
            (t[4] = tT ^ (~tK & t6)),
            (t[5] = tB ^ (~tV & t3)),
            (t[14] = td ^ (~tE & tC)),
            (t[15] = tp ^ (~tx & tq)),
            (t[24] = tH ^ (~t1 & tm)),
            (t[25] = tW ^ (~t2 & tg)),
            (t[34] = tS ^ (~tN & tZ)),
            (t[35] = tA ^ (~tL & tG)),
            (t[44] = tQ ^ (~tb & tO)),
            (t[45] = t0 ^ (~ty & tk)),
            (t[6] = tK ^ (~t6 & b)),
            (t[7] = tV ^ (~t3 & y)),
            (t[16] = tE ^ (~tC & tU)),
            (t[17] = tx ^ (~tq & tF)),
            (t[26] = t1 ^ (~tm & tv)),
            (t[27] = t2 ^ (~tg & tw)),
            (t[36] = tN ^ (~tZ & t$)),
            (t[37] = tL ^ (~tG & tJ)),
            (t[46] = tb ^ (~tO & tR)),
            (t[47] = ty ^ (~tk & tP)),
            (t[8] = t6 ^ (~b & tM)),
            (t[9] = t3 ^ (~y & t_)),
            (t[18] = tC ^ (~tU & tY)),
            (t[19] = tq ^ (~tF & tX)),
            (t[28] = tm ^ (~tv & tj)),
            (t[29] = tg ^ (~tw & tI)),
            (t[38] = tZ ^ (~t$ & tc)),
            (t[39] = tG ^ (~tJ & tl)),
            (t[48] = tO ^ (~tR & tD)),
            (t[49] = tk ^ (~tP & tz)),
            (t[0] ^= r[2 * e]),
            (t[1] ^= r[2 * e + 1]);
        }
      };
    },
    9653: function (t, e, r) {
      var n = r(8764).Buffer;
      let i = r(4040);
      function o() {
        (this.state = [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ]),
          (this.blockSize = null),
          (this.count = 0),
          (this.squeezing = !1);
      }
      (o.prototype.initialize = function (t, e) {
        for (let t = 0; t < 50; ++t) this.state[t] = 0;
        (this.blockSize = t / 8), (this.count = 0), (this.squeezing = !1);
      }),
        (o.prototype.absorb = function (t) {
          for (let e = 0; e < t.length; ++e)
            (this.state[~~(this.count / 4)] ^= t[e] << (8 * (this.count % 4))),
              (this.count += 1),
              this.count === this.blockSize &&
                (i.p1600(this.state), (this.count = 0));
        }),
        (o.prototype.absorbLastFewBits = function (t) {
          (this.state[~~(this.count / 4)] ^= t << (8 * (this.count % 4))),
            (128 & t) != 0 &&
              this.count === this.blockSize - 1 &&
              i.p1600(this.state),
            (this.state[~~((this.blockSize - 1) / 4)] ^=
              128 << (8 * ((this.blockSize - 1) % 4))),
            i.p1600(this.state),
            (this.count = 0),
            (this.squeezing = !0);
        }),
        (o.prototype.squeeze = function (t) {
          this.squeezing || this.absorbLastFewBits(1);
          let e = n.alloc(t);
          for (let r = 0; r < t; ++r)
            (e[r] =
              (this.state[~~(this.count / 4)] >>> (8 * (this.count % 4))) &
              255),
              (this.count += 1),
              this.count === this.blockSize &&
                (i.p1600(this.state), (this.count = 0));
          return e;
        }),
        (o.prototype.copy = function (t) {
          for (let e = 0; e < 50; ++e) t.state[e] = this.state[e];
          (t.blockSize = this.blockSize),
            (t.count = this.count),
            (t.squeezing = this.squeezing);
        }),
        (t.exports = o);
    },
    2318: function (t, e, r) {
      "use strict";
      var n = r(5717),
        i = r(3349),
        o = r(9509).Buffer,
        a = Array(16);
      function s() {
        i.call(this, 64),
          (this._a = 1732584193),
          (this._b = 4023233417),
          (this._c = 2562383102),
          (this._d = 271733878);
      }
      function f(t, e) {
        return (t << e) | (t >>> (32 - e));
      }
      function u(t, e, r, n, i, o, a) {
        return (f((t + ((e & r) | (~e & n)) + i + o) | 0, a) + e) | 0;
      }
      function h(t, e, r, n, i, o, a) {
        return (f((t + ((e & n) | (r & ~n)) + i + o) | 0, a) + e) | 0;
      }
      function c(t, e, r, n, i, o, a) {
        return (f((t + (e ^ r ^ n) + i + o) | 0, a) + e) | 0;
      }
      function l(t, e, r, n, i, o, a) {
        return (f((t + (r ^ (e | ~n)) + i + o) | 0, a) + e) | 0;
      }
      n(s, i),
        (s.prototype._update = function () {
          for (var t = a, e = 0; e < 16; ++e)
            t[e] = this._block.readInt32LE(4 * e);
          var r = this._a,
            n = this._b,
            i = this._c,
            o = this._d;
          (r = u(r, n, i, o, t[0], 3614090360, 7)),
            (o = u(o, r, n, i, t[1], 3905402710, 12)),
            (i = u(i, o, r, n, t[2], 606105819, 17)),
            (n = u(n, i, o, r, t[3], 3250441966, 22)),
            (r = u(r, n, i, o, t[4], 4118548399, 7)),
            (o = u(o, r, n, i, t[5], 1200080426, 12)),
            (i = u(i, o, r, n, t[6], 2821735955, 17)),
            (n = u(n, i, o, r, t[7], 4249261313, 22)),
            (r = u(r, n, i, o, t[8], 1770035416, 7)),
            (o = u(o, r, n, i, t[9], 2336552879, 12)),
            (i = u(i, o, r, n, t[10], 4294925233, 17)),
            (n = u(n, i, o, r, t[11], 2304563134, 22)),
            (r = u(r, n, i, o, t[12], 1804603682, 7)),
            (o = u(o, r, n, i, t[13], 4254626195, 12)),
            (i = u(i, o, r, n, t[14], 2792965006, 17)),
            (n = u(n, i, o, r, t[15], 1236535329, 22)),
            (r = h(r, n, i, o, t[1], 4129170786, 5)),
            (o = h(o, r, n, i, t[6], 3225465664, 9)),
            (i = h(i, o, r, n, t[11], 643717713, 14)),
            (n = h(n, i, o, r, t[0], 3921069994, 20)),
            (r = h(r, n, i, o, t[5], 3593408605, 5)),
            (o = h(o, r, n, i, t[10], 38016083, 9)),
            (i = h(i, o, r, n, t[15], 3634488961, 14)),
            (n = h(n, i, o, r, t[4], 3889429448, 20)),
            (r = h(r, n, i, o, t[9], 568446438, 5)),
            (o = h(o, r, n, i, t[14], 3275163606, 9)),
            (i = h(i, o, r, n, t[3], 4107603335, 14)),
            (n = h(n, i, o, r, t[8], 1163531501, 20)),
            (r = h(r, n, i, o, t[13], 2850285829, 5)),
            (o = h(o, r, n, i, t[2], 4243563512, 9)),
            (i = h(i, o, r, n, t[7], 1735328473, 14)),
            (n = h(n, i, o, r, t[12], 2368359562, 20)),
            (r = c(r, n, i, o, t[5], 4294588738, 4)),
            (o = c(o, r, n, i, t[8], 2272392833, 11)),
            (i = c(i, o, r, n, t[11], 1839030562, 16)),
            (n = c(n, i, o, r, t[14], 4259657740, 23)),
            (r = c(r, n, i, o, t[1], 2763975236, 4)),
            (o = c(o, r, n, i, t[4], 1272893353, 11)),
            (i = c(i, o, r, n, t[7], 4139469664, 16)),
            (n = c(n, i, o, r, t[10], 3200236656, 23)),
            (r = c(r, n, i, o, t[13], 681279174, 4)),
            (o = c(o, r, n, i, t[0], 3936430074, 11)),
            (i = c(i, o, r, n, t[3], 3572445317, 16)),
            (n = c(n, i, o, r, t[6], 76029189, 23)),
            (r = c(r, n, i, o, t[9], 3654602809, 4)),
            (o = c(o, r, n, i, t[12], 3873151461, 11)),
            (i = c(i, o, r, n, t[15], 530742520, 16)),
            (n = c(n, i, o, r, t[2], 3299628645, 23)),
            (r = l(r, n, i, o, t[0], 4096336452, 6)),
            (o = l(o, r, n, i, t[7], 1126891415, 10)),
            (i = l(i, o, r, n, t[14], 2878612391, 15)),
            (n = l(n, i, o, r, t[5], 4237533241, 21)),
            (r = l(r, n, i, o, t[12], 1700485571, 6)),
            (o = l(o, r, n, i, t[3], 2399980690, 10)),
            (i = l(i, o, r, n, t[10], 4293915773, 15)),
            (n = l(n, i, o, r, t[1], 2240044497, 21)),
            (r = l(r, n, i, o, t[8], 1873313359, 6)),
            (o = l(o, r, n, i, t[15], 4264355552, 10)),
            (i = l(i, o, r, n, t[6], 2734768916, 15)),
            (n = l(n, i, o, r, t[13], 1309151649, 21)),
            (r = l(r, n, i, o, t[4], 4149444226, 6)),
            (o = l(o, r, n, i, t[11], 3174756917, 10)),
            (i = l(i, o, r, n, t[2], 718787259, 15)),
            (n = l(n, i, o, r, t[9], 3951481745, 21)),
            (this._a = (this._a + r) | 0),
            (this._b = (this._b + n) | 0),
            (this._c = (this._c + i) | 0),
            (this._d = (this._d + o) | 0);
        }),
        (s.prototype._digest = function () {
          (this._block[this._blockOffset++] = 128),
            this._blockOffset > 56 &&
              (this._block.fill(0, this._blockOffset, 64),
              this._update(),
              (this._blockOffset = 0)),
            this._block.fill(0, this._blockOffset, 56),
            this._block.writeUInt32LE(this._length[0], 56),
            this._block.writeUInt32LE(this._length[1], 60),
            this._update();
          var t = o.allocUnsafe(16);
          return (
            t.writeInt32LE(this._a, 0),
            t.writeInt32LE(this._b, 4),
            t.writeInt32LE(this._c, 8),
            t.writeInt32LE(this._d, 12),
            t
          );
        }),
        (t.exports = s);
    },
    4504: function (t, e) {
      "use strict";
      var r = e;
      function n(t) {
        return 1 === t.length ? "0" + t : t;
      }
      function i(t) {
        for (var e = "", r = 0; r < t.length; r++) e += n(t[r].toString(16));
        return e;
      }
      (r.toArray = function (t, e) {
        if (Array.isArray(t)) return t.slice();
        if (!t) return [];
        var r = [];
        if ("string" != typeof t) {
          for (var n = 0; n < t.length; n++) r[n] = 0 | t[n];
          return r;
        }
        if ("hex" === e) {
          (t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (t = "0" + t);
          for (var n = 0; n < t.length; n += 2)
            r.push(parseInt(t[n] + t[n + 1], 16));
        } else
          for (var n = 0; n < t.length; n++) {
            var i = t.charCodeAt(n),
              o = i >> 8,
              a = 255 & i;
            o ? r.push(o, a) : r.push(a);
          }
        return r;
      }),
        (r.zero2 = n),
        (r.toHex = i),
        (r.encode = function (t, e) {
          return "hex" === e ? i(t) : t;
        });
    },
    7596: function (t, e, r) {
      var n = r(3454),
        i = r(8764).Buffer;
      !(function () {
        var e = {
            992: function (t) {
              t.exports = function (t, r, n) {
                if (t.filter) return t.filter(r, n);
                if (null == t || "function" != typeof r) throw TypeError();
                for (var i = [], o = 0; o < t.length; o++)
                  if (e.call(t, o)) {
                    var a = t[o];
                    r.call(n, a, o, t) && i.push(a);
                  }
                return i;
              };
              var e = Object.prototype.hasOwnProperty;
            },
            167: function (t, e, r) {
              "use strict";
              function i(t) {
                return (i =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (t) {
                        return typeof t;
                      }
                    : function (t) {
                        return t &&
                          "function" == typeof Symbol &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? "symbol"
                          : typeof t;
                      })(t);
              }
              var o,
                a,
                s = r(23).codes,
                f = s.ERR_AMBIGUOUS_ARGUMENT,
                u = s.ERR_INVALID_ARG_TYPE,
                h = s.ERR_INVALID_ARG_VALUE,
                c = s.ERR_INVALID_RETURN_VALUE,
                l = s.ERR_MISSING_ARGS,
                d = r(545),
                p = r(177).inspect,
                b = r(177).types,
                y = b.isPromise,
                m = b.isRegExp,
                g = Object.assign ? Object.assign : r(604).assign,
                v = Object.is ? Object.is : r(208);
              function w() {
                var t = r(176);
                (o = t.isDeepEqual), (a = t.isDeepStrictEqual);
              }
              var M = !1,
                _ = (t.exports = x),
                S = {};
              function A(t) {
                if (t.message instanceof Error) throw t.message;
                throw new d(t);
              }
              function E(t, e, r, n) {
                if (!r) {
                  var i = !1;
                  if (0 === e)
                    (i = !0), (n = "No value argument passed to `assert.ok()`");
                  else if (n instanceof Error) throw n;
                  var o = new d({
                    actual: r,
                    expected: !0,
                    message: n,
                    operator: "==",
                    stackStartFn: t,
                  });
                  throw ((o.generatedMessage = i), o);
                }
              }
              function x() {
                for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
                  e[r] = arguments[r];
                E.apply(void 0, [x, e.length].concat(e));
              }
              (_.fail = function t(e, r, i, o, a) {
                var s,
                  f = arguments.length;
                if (
                  (0 === f
                    ? (s = "Failed")
                    : 1 === f
                    ? ((i = e), (e = void 0))
                    : (!1 === M &&
                        ((M = !0),
                        (n.emitWarning
                          ? n.emitWarning
                          : console.warn.bind(console))(
                          "assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.",
                          "DeprecationWarning",
                          "DEP0094"
                        )),
                      2 === f && (o = "!=")),
                  i instanceof Error)
                )
                  throw i;
                var u = {
                  actual: e,
                  expected: r,
                  operator: void 0 === o ? "fail" : o,
                  stackStartFn: a || t,
                };
                void 0 !== i && (u.message = i);
                var h = new d(u);
                throw (s && ((h.message = s), (h.generatedMessage = !0)), h);
              }),
                (_.AssertionError = d),
                (_.ok = x),
                (_.equal = function t(e, r, n) {
                  if (arguments.length < 2) throw new l("actual", "expected");
                  e != r &&
                    A({
                      actual: e,
                      expected: r,
                      message: n,
                      operator: "==",
                      stackStartFn: t,
                    });
                }),
                (_.notEqual = function t(e, r, n) {
                  if (arguments.length < 2) throw new l("actual", "expected");
                  e == r &&
                    A({
                      actual: e,
                      expected: r,
                      message: n,
                      operator: "!=",
                      stackStartFn: t,
                    });
                }),
                (_.deepEqual = function t(e, r, n) {
                  if (arguments.length < 2) throw new l("actual", "expected");
                  void 0 === o && w(),
                    o(e, r) ||
                      A({
                        actual: e,
                        expected: r,
                        message: n,
                        operator: "deepEqual",
                        stackStartFn: t,
                      });
                }),
                (_.notDeepEqual = function t(e, r, n) {
                  if (arguments.length < 2) throw new l("actual", "expected");
                  void 0 === o && w(),
                    o(e, r) &&
                      A({
                        actual: e,
                        expected: r,
                        message: n,
                        operator: "notDeepEqual",
                        stackStartFn: t,
                      });
                }),
                (_.deepStrictEqual = function t(e, r, n) {
                  if (arguments.length < 2) throw new l("actual", "expected");
                  void 0 === o && w(),
                    a(e, r) ||
                      A({
                        actual: e,
                        expected: r,
                        message: n,
                        operator: "deepStrictEqual",
                        stackStartFn: t,
                      });
                }),
                (_.notDeepStrictEqual = function t(e, r, n) {
                  if (arguments.length < 2) throw new l("actual", "expected");
                  void 0 === o && w(),
                    a(e, r) &&
                      A({
                        actual: e,
                        expected: r,
                        message: n,
                        operator: "notDeepStrictEqual",
                        stackStartFn: t,
                      });
                }),
                (_.strictEqual = function t(e, r, n) {
                  if (arguments.length < 2) throw new l("actual", "expected");
                  v(e, r) ||
                    A({
                      actual: e,
                      expected: r,
                      message: n,
                      operator: "strictEqual",
                      stackStartFn: t,
                    });
                }),
                (_.notStrictEqual = function t(e, r, n) {
                  if (arguments.length < 2) throw new l("actual", "expected");
                  v(e, r) &&
                    A({
                      actual: e,
                      expected: r,
                      message: n,
                      operator: "notStrictEqual",
                      stackStartFn: t,
                    });
                });
              var O = function t(e, r, n) {
                var i = this;
                !(function (t, e) {
                  if (!(t instanceof e))
                    throw TypeError("Cannot call a class as a function");
                })(this, t),
                  r.forEach(function (t) {
                    t in e &&
                      (void 0 !== n &&
                      "string" == typeof n[t] &&
                      m(e[t]) &&
                      e[t].test(n[t])
                        ? (i[t] = n[t])
                        : (i[t] = e[t]));
                  });
              };
              function k(t, e, r, n) {
                if ("function" != typeof e) {
                  if (m(e)) return e.test(t);
                  if (2 == arguments.length)
                    throw new u("expected", ["Function", "RegExp"], e);
                  if ("object" !== i(t) || null === t) {
                    var s = new d({
                      actual: t,
                      expected: e,
                      message: r,
                      operator: "deepStrictEqual",
                      stackStartFn: n,
                    });
                    throw ((s.operator = n.name), s);
                  }
                  var f = Object.keys(e);
                  if (e instanceof Error) f.push("name", "message");
                  else if (0 === f.length)
                    throw new h("error", e, "may not be an empty object");
                  return (
                    void 0 === o && w(),
                    f.forEach(function (i) {
                      ("string" == typeof t[i] && m(e[i]) && e[i].test(t[i])) ||
                        (function (t, e, r, n, i, o) {
                          if (!(r in t) || !a(t[r], e[r])) {
                            if (!n) {
                              var s = new O(t, i),
                                f = new O(e, i, t),
                                u = new d({
                                  actual: s,
                                  expected: f,
                                  operator: "deepStrictEqual",
                                  stackStartFn: o,
                                });
                              throw (
                                ((u.actual = t),
                                (u.expected = e),
                                (u.operator = o.name),
                                u)
                              );
                            }
                            A({
                              actual: t,
                              expected: e,
                              message: n,
                              operator: o.name,
                              stackStartFn: o,
                            });
                          }
                        })(t, e, i, r, f, n);
                    }),
                    !0
                  );
                }
                return (
                  (void 0 !== e.prototype && t instanceof e) ||
                  (!Error.isPrototypeOf(e) && !0 === e.call({}, t))
                );
              }
              function R(t) {
                if ("function" != typeof t) throw new u("fn", "Function", t);
                try {
                  t();
                } catch (t) {
                  return t;
                }
                return S;
              }
              function P(t) {
                return (
                  y(t) ||
                  (null !== t &&
                    "object" === i(t) &&
                    "function" == typeof t.then &&
                    "function" == typeof t.catch)
                );
              }
              function j(t) {
                return Promise.resolve().then(function () {
                  var e;
                  if ("function" == typeof t) {
                    if (!P((e = t())))
                      throw new c("instance of Promise", "promiseFn", e);
                  } else if (P(t)) e = t;
                  else throw new u("promiseFn", ["Function", "Promise"], t);
                  return Promise.resolve()
                    .then(function () {
                      return e;
                    })
                    .then(function () {
                      return S;
                    })
                    .catch(function (t) {
                      return t;
                    });
                });
              }
              function I(t, e, r, n) {
                if ("string" == typeof r) {
                  if (4 == arguments.length)
                    throw new u(
                      "error",
                      ["Object", "Error", "Function", "RegExp"],
                      r
                    );
                  if ("object" === i(e) && null !== e) {
                    if (e.message === r)
                      throw new f(
                        "error/message",
                        'The error message "'.concat(
                          e.message,
                          '" is identical to the message.'
                        )
                      );
                  } else if (e === r)
                    throw new f(
                      "error/message",
                      'The error "'.concat(e, '" is identical to the message.')
                    );
                  (n = r), (r = void 0);
                } else if (
                  null != r &&
                  "object" !== i(r) &&
                  "function" != typeof r
                )
                  throw new u(
                    "error",
                    ["Object", "Error", "Function", "RegExp"],
                    r
                  );
                if (e === S) {
                  var o = "";
                  r && r.name && (o += " (".concat(r.name, ")")),
                    (o += n ? ": ".concat(n) : ".");
                  var a = "rejects" === t.name ? "rejection" : "exception";
                  A({
                    actual: void 0,
                    expected: r,
                    operator: t.name,
                    message: "Missing expected ".concat(a).concat(o),
                    stackStartFn: t,
                  });
                }
                if (r && !k(e, r, n, t)) throw e;
              }
              function T(t, e, r, n) {
                if (e !== S) {
                  if (
                    ("string" == typeof r && ((n = r), (r = void 0)),
                    !r || k(e, r))
                  ) {
                    var i = n ? ": ".concat(n) : ".",
                      o =
                        "doesNotReject" === t.name ? "rejection" : "exception";
                    A({
                      actual: e,
                      expected: r,
                      operator: t.name,
                      message:
                        "Got unwanted ".concat(o).concat(i, "\n") +
                        'Actual message: "'.concat(e && e.message, '"'),
                      stackStartFn: t,
                    });
                  }
                  throw e;
                }
              }
              (_.throws = function t(e) {
                for (
                  var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1;
                  i < r;
                  i++
                )
                  n[i - 1] = arguments[i];
                I.apply(void 0, [t, R(e)].concat(n));
              }),
                (_.rejects = function t(e) {
                  for (
                    var r = arguments.length,
                      n = Array(r > 1 ? r - 1 : 0),
                      i = 1;
                    i < r;
                    i++
                  )
                    n[i - 1] = arguments[i];
                  return j(e).then(function (e) {
                    return I.apply(void 0, [t, e].concat(n));
                  });
                }),
                (_.doesNotThrow = function t(e) {
                  for (
                    var r = arguments.length,
                      n = Array(r > 1 ? r - 1 : 0),
                      i = 1;
                    i < r;
                    i++
                  )
                    n[i - 1] = arguments[i];
                  T.apply(void 0, [t, R(e)].concat(n));
                }),
                (_.doesNotReject = function t(e) {
                  for (
                    var r = arguments.length,
                      n = Array(r > 1 ? r - 1 : 0),
                      i = 1;
                    i < r;
                    i++
                  )
                    n[i - 1] = arguments[i];
                  return j(e).then(function (e) {
                    return T.apply(void 0, [t, e].concat(n));
                  });
                }),
                (_.ifError = function t(e) {
                  if (null != e) {
                    var r = "ifError got unwanted exception: ";
                    "object" === i(e) && "string" == typeof e.message
                      ? 0 === e.message.length && e.constructor
                        ? (r += e.constructor.name)
                        : (r += e.message)
                      : (r += p(e));
                    var n = new d({
                        actual: e,
                        expected: null,
                        operator: "ifError",
                        message: r,
                        stackStartFn: t,
                      }),
                      o = e.stack;
                    if ("string" == typeof o) {
                      var a = o.split("\n");
                      a.shift();
                      for (
                        var s = n.stack.split("\n"), f = 0;
                        f < a.length;
                        f++
                      ) {
                        var u = s.indexOf(a[f]);
                        if (-1 !== u) {
                          s = s.slice(0, u);
                          break;
                        }
                      }
                      n.stack = ""
                        .concat(s.join("\n"), "\n")
                        .concat(a.join("\n"));
                    }
                    throw n;
                  }
                }),
                (_.strict = g(
                  function t() {
                    for (
                      var e = arguments.length, r = Array(e), n = 0;
                      n < e;
                      n++
                    )
                      r[n] = arguments[n];
                    E.apply(void 0, [t, r.length].concat(r));
                  },
                  _,
                  {
                    equal: _.strictEqual,
                    deepEqual: _.deepStrictEqual,
                    notEqual: _.notStrictEqual,
                    notDeepEqual: _.notDeepStrictEqual,
                  }
                )),
                (_.strict.strict = _.strict);
            },
            545: function (t, e, r) {
              "use strict";
              function i(t, e) {
                for (var r = 0; r < e.length; r++) {
                  var n = e[r];
                  (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n);
                }
              }
              function o(t, e) {
                return e && ("object" === c(e) || "function" == typeof e)
                  ? e
                  : a(t);
              }
              function a(t) {
                if (void 0 === t)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              }
              function s(t) {
                var e = "function" == typeof Map ? new Map() : void 0;
                return (s = function (t) {
                  if (
                    null === t ||
                    -1 === Function.toString.call(t).indexOf("[native code]")
                  )
                    return t;
                  if ("function" != typeof t)
                    throw TypeError(
                      "Super expression must either be null or a function"
                    );
                  if (void 0 !== e) {
                    if (e.has(t)) return e.get(t);
                    e.set(t, r);
                  }
                  function r() {
                    return f(t, arguments, h(this).constructor);
                  }
                  return (
                    (r.prototype = Object.create(t.prototype, {
                      constructor: {
                        value: r,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                      },
                    })),
                    u(r, t)
                  );
                })(t);
              }
              function f(t, e, r) {
                return (f = !(function () {
                  if (
                    "undefined" == typeof Reflect ||
                    !Reflect.construct ||
                    Reflect.construct.sham
                  )
                    return !1;
                  if ("function" == typeof Proxy) return !0;
                  try {
                    return (
                      Date.prototype.toString.call(
                        Reflect.construct(Date, [], function () {})
                      ),
                      !0
                    );
                  } catch (t) {
                    return !1;
                  }
                })()
                  ? function (t, e, r) {
                      var n = [null];
                      n.push.apply(n, e);
                      var i = new (Function.bind.apply(t, n))();
                      return r && u(i, r.prototype), i;
                    }
                  : Reflect.construct).apply(null, arguments);
              }
              function u(t, e) {
                return (u =
                  Object.setPrototypeOf ||
                  function (t, e) {
                    return (t.__proto__ = e), t;
                  })(t, e);
              }
              function h(t) {
                return (h = Object.setPrototypeOf
                  ? Object.getPrototypeOf
                  : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                    })(t);
              }
              function c(t) {
                return (c =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (t) {
                        return typeof t;
                      }
                    : function (t) {
                        return t &&
                          "function" == typeof Symbol &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? "symbol"
                          : typeof t;
                      })(t);
              }
              var l = r(177).inspect,
                d = r(23).codes.ERR_INVALID_ARG_TYPE;
              function p(t, e, r) {
                return (
                  (void 0 === r || r > t.length) && (r = t.length),
                  t.substring(r - e.length, r) === e
                );
              }
              var b = "",
                y = "",
                m = "",
                g = "",
                v = {
                  deepStrictEqual: "Expected values to be strictly deep-equal:",
                  strictEqual: "Expected values to be strictly equal:",
                  strictEqualObject:
                    'Expected "actual" to be reference-equal to "expected":',
                  deepEqual: "Expected values to be loosely deep-equal:",
                  equal: "Expected values to be loosely equal:",
                  notDeepStrictEqual:
                    'Expected "actual" not to be strictly deep-equal to:',
                  notStrictEqual:
                    'Expected "actual" to be strictly unequal to:',
                  notStrictEqualObject:
                    'Expected "actual" not to be reference-equal to "expected":',
                  notDeepEqual:
                    'Expected "actual" not to be loosely deep-equal to:',
                  notEqual: 'Expected "actual" to be loosely unequal to:',
                  notIdentical: "Values identical but not reference-equal:",
                };
              function w(t) {
                var e = Object.keys(t),
                  r = Object.create(Object.getPrototypeOf(t));
                return (
                  e.forEach(function (e) {
                    r[e] = t[e];
                  }),
                  Object.defineProperty(r, "message", { value: t.message }),
                  r
                );
              }
              function M(t) {
                return l(t, {
                  compact: !1,
                  customInspect: !1,
                  depth: 1e3,
                  maxArrayLength: 1 / 0,
                  showHidden: !1,
                  breakLength: 1 / 0,
                  showProxy: !1,
                  sorted: !0,
                  getters: !0,
                });
              }
              var _ = (function (t) {
                var e, r;
                function s(t) {
                  if (
                    (!(function (t, e) {
                      if (!(t instanceof e))
                        throw TypeError("Cannot call a class as a function");
                    })(this, s),
                    "object" !== c(t) || null === t)
                  )
                    throw new d("options", "Object", t);
                  var e,
                    r = t.message,
                    i = t.operator,
                    f = t.stackStartFn,
                    u = t.actual,
                    l = t.expected,
                    _ = Error.stackTraceLimit;
                  if (((Error.stackTraceLimit = 0), null != r))
                    e = o(this, h(s).call(this, String(r)));
                  else if (
                    (n.stderr &&
                      n.stderr.isTTY &&
                      (n.stderr &&
                      n.stderr.getColorDepth &&
                      1 !== n.stderr.getColorDepth()
                        ? ((b = "\x1b[34m"),
                          (y = "\x1b[32m"),
                          (g = "\x1b[39m"),
                          (m = "\x1b[31m"))
                        : ((b = ""), (y = ""), (g = ""), (m = ""))),
                    "object" === c(u) &&
                      null !== u &&
                      "object" === c(l) &&
                      null !== l &&
                      "stack" in u &&
                      u instanceof Error &&
                      "stack" in l &&
                      l instanceof Error &&
                      ((u = w(u)), (l = w(l))),
                    "deepStrictEqual" === i || "strictEqual" === i)
                  )
                    e = o(
                      this,
                      h(s).call(
                        this,
                        (function (t, e, r) {
                          var i = "",
                            o = "",
                            a = 0,
                            s = "",
                            f = !1,
                            u = M(t),
                            h = u.split("\n"),
                            l = M(e).split("\n"),
                            d = 0,
                            w = "";
                          if (
                            ("strictEqual" === r &&
                              "object" === c(t) &&
                              "object" === c(e) &&
                              null !== t &&
                              null !== e &&
                              (r = "strictEqualObject"),
                            1 === h.length && 1 === l.length && h[0] !== l[0])
                          ) {
                            var _ = h[0].length + l[0].length;
                            if (_ <= 10) {
                              if (
                                ("object" !== c(t) || null === t) &&
                                ("object" !== c(e) || null === e) &&
                                (0 !== t || 0 !== e)
                              )
                                return (
                                  "".concat(v[r], "\n\n") +
                                  "".concat(h[0], " !== ").concat(l[0], "\n")
                                );
                            } else if (
                              "strictEqualObject" !== r &&
                              _ <
                                (n.stderr && n.stderr.isTTY
                                  ? n.stderr.columns
                                  : 80)
                            ) {
                              for (; h[0][d] === l[0][d]; ) d++;
                              d > 2 &&
                                ((w = "\n  ".concat(
                                  (function (t, e) {
                                    if (
                                      ((e = Math.floor(e)),
                                      0 == t.length || 0 == e)
                                    )
                                      return "";
                                    var r = t.length * e;
                                    for (
                                      e = Math.floor(Math.log(e) / Math.log(2));
                                      e;

                                    )
                                      (t += t), e--;
                                    return t + t.substring(0, r - t.length);
                                  })(" ", d),
                                  "^"
                                )),
                                (d = 0));
                            }
                          }
                          for (
                            var S = h[h.length - 1], A = l[l.length - 1];
                            S === A &&
                            (d++ < 2
                              ? (s = "\n  ".concat(S).concat(s))
                              : (i = S),
                            h.pop(),
                            l.pop(),
                            0 !== h.length && 0 !== l.length);

                          )
                            (S = h[h.length - 1]), (A = l[l.length - 1]);
                          var E = Math.max(h.length, l.length);
                          if (0 === E) {
                            var x = u.split("\n");
                            if (x.length > 30)
                              for (
                                x[26] = "".concat(b, "...").concat(g);
                                x.length > 27;

                              )
                                x.pop();
                            return ""
                              .concat(v.notIdentical, "\n\n")
                              .concat(x.join("\n"), "\n");
                          }
                          d > 3 &&
                            ((s = "\n".concat(b, "...").concat(g).concat(s)),
                            (f = !0)),
                            "" !== i &&
                              ((s = "\n  ".concat(i).concat(s)), (i = ""));
                          var O = 0,
                            k =
                              v[r] +
                              "\n"
                                .concat(y, "+ actual")
                                .concat(g, " ")
                                .concat(m, "- expected")
                                .concat(g),
                            R = " "
                              .concat(b, "...")
                              .concat(g, " Lines skipped");
                          for (d = 0; d < E; d++) {
                            var P = d - a;
                            if (h.length < d + 1)
                              P > 1 &&
                                d > 2 &&
                                (P > 4
                                  ? ((o += "\n".concat(b, "...").concat(g)),
                                    (f = !0))
                                  : P > 3 &&
                                    ((o += "\n  ".concat(l[d - 2])), O++),
                                (o += "\n  ".concat(l[d - 1])),
                                O++),
                                (a = d),
                                (i += "\n"
                                  .concat(m, "-")
                                  .concat(g, " ")
                                  .concat(l[d])),
                                O++;
                            else if (l.length < d + 1)
                              P > 1 &&
                                d > 2 &&
                                (P > 4
                                  ? ((o += "\n".concat(b, "...").concat(g)),
                                    (f = !0))
                                  : P > 3 &&
                                    ((o += "\n  ".concat(h[d - 2])), O++),
                                (o += "\n  ".concat(h[d - 1])),
                                O++),
                                (a = d),
                                (o += "\n"
                                  .concat(y, "+")
                                  .concat(g, " ")
                                  .concat(h[d])),
                                O++;
                            else {
                              var j = l[d],
                                I = h[d],
                                T =
                                  I !== j &&
                                  (!p(I, ",") || I.slice(0, -1) !== j);
                              T &&
                                p(j, ",") &&
                                j.slice(0, -1) === I &&
                                ((T = !1), (I += ",")),
                                T
                                  ? (P > 1 &&
                                      d > 2 &&
                                      (P > 4
                                        ? ((o += "\n"
                                            .concat(b, "...")
                                            .concat(g)),
                                          (f = !0))
                                        : P > 3 &&
                                          ((o += "\n  ".concat(h[d - 2])), O++),
                                      (o += "\n  ".concat(h[d - 1])),
                                      O++),
                                    (a = d),
                                    (o += "\n"
                                      .concat(y, "+")
                                      .concat(g, " ")
                                      .concat(I)),
                                    (i += "\n"
                                      .concat(m, "-")
                                      .concat(g, " ")
                                      .concat(j)),
                                    (O += 2))
                                  : ((o += i),
                                    (i = ""),
                                    (1 === P || 0 === d) &&
                                      ((o += "\n  ".concat(I)), O++));
                            }
                            if (O > 20 && d < E - 2)
                              return (
                                ""
                                  .concat(k)
                                  .concat(R, "\n")
                                  .concat(o, "\n")
                                  .concat(b, "...")
                                  .concat(g)
                                  .concat(i, "\n") +
                                "".concat(b, "...").concat(g)
                              );
                          }
                          return ""
                            .concat(k)
                            .concat(f ? R : "", "\n")
                            .concat(o)
                            .concat(i)
                            .concat(s)
                            .concat(w);
                        })(u, l, i)
                      )
                    );
                  else if (
                    "notDeepStrictEqual" === i ||
                    "notStrictEqual" === i
                  ) {
                    var S = v[i],
                      A = M(u).split("\n");
                    if (
                      ("notStrictEqual" === i &&
                        "object" === c(u) &&
                        null !== u &&
                        (S = v.notStrictEqualObject),
                      A.length > 30)
                    )
                      for (
                        A[26] = "".concat(b, "...").concat(g);
                        A.length > 27;

                      )
                        A.pop();
                    e =
                      1 === A.length
                        ? o(
                            this,
                            h(s).call(this, "".concat(S, " ").concat(A[0]))
                          )
                        : o(
                            this,
                            h(s).call(
                              this,
                              "".concat(S, "\n\n").concat(A.join("\n"), "\n")
                            )
                          );
                  } else {
                    var E = M(u),
                      x = "",
                      O = v[i];
                    "notDeepEqual" === i || "notEqual" === i
                      ? (E = "".concat(v[i], "\n\n").concat(E)).length > 1024 &&
                        (E = "".concat(E.slice(0, 1021), "..."))
                      : ((x = "".concat(M(l))),
                        E.length > 512 &&
                          (E = "".concat(E.slice(0, 509), "...")),
                        x.length > 512 &&
                          (x = "".concat(x.slice(0, 509), "...")),
                        "deepEqual" === i || "equal" === i
                          ? (E = ""
                              .concat(O, "\n\n")
                              .concat(E, "\n\nshould equal\n\n"))
                          : (x = " ".concat(i, " ").concat(x))),
                      (e = o(this, h(s).call(this, "".concat(E).concat(x))));
                  }
                  return (
                    (Error.stackTraceLimit = _),
                    (e.generatedMessage = !r),
                    Object.defineProperty(a(e), "name", {
                      value: "AssertionError [ERR_ASSERTION]",
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    }),
                    (e.code = "ERR_ASSERTION"),
                    (e.actual = u),
                    (e.expected = l),
                    (e.operator = i),
                    Error.captureStackTrace && Error.captureStackTrace(a(e), f),
                    e.stack,
                    (e.name = "AssertionError"),
                    o(e)
                  );
                }
                return (
                  !(function (t, e) {
                    if ("function" != typeof e && null !== e)
                      throw TypeError(
                        "Super expression must either be null or a function"
                      );
                    (t.prototype = Object.create(e && e.prototype, {
                      constructor: { value: t, writable: !0, configurable: !0 },
                    })),
                      e && u(t, e);
                  })(s, t),
                  (e = [
                    {
                      key: "toString",
                      value: function () {
                        return ""
                          .concat(this.name, " [")
                          .concat(this.code, "]: ")
                          .concat(this.message);
                      },
                    },
                    {
                      key: l.custom,
                      value: function (t, e) {
                        return l(
                          this,
                          (function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                              var r = null != arguments[e] ? arguments[e] : {},
                                n = Object.keys(r);
                              "function" ==
                                typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                  Object.getOwnPropertySymbols(r).filter(
                                    function (t) {
                                      return Object.getOwnPropertyDescriptor(
                                        r,
                                        t
                                      ).enumerable;
                                    }
                                  )
                                )),
                                n.forEach(function (e) {
                                  var n, i;
                                  (n = t),
                                    (i = r[e]),
                                    e in n
                                      ? Object.defineProperty(n, e, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                        })
                                      : (n[e] = i);
                                });
                            }
                            return t;
                          })({}, e, { customInspect: !1, depth: 0 })
                        );
                      },
                    },
                  ]),
                  i(s.prototype, e),
                  r && i(s, r),
                  s
                );
              })(s(Error));
              t.exports = _;
            },
            23: function (t, e, r) {
              "use strict";
              function n(t) {
                return (n =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (t) {
                        return typeof t;
                      }
                    : function (t) {
                        return t &&
                          "function" == typeof Symbol &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? "symbol"
                          : typeof t;
                      })(t);
              }
              function i(t) {
                return (i = Object.setPrototypeOf
                  ? Object.getPrototypeOf
                  : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                    })(t);
              }
              function o(t, e) {
                return (o =
                  Object.setPrototypeOf ||
                  function (t, e) {
                    return (t.__proto__ = e), t;
                  })(t, e);
              }
              var a,
                s,
                f = {};
              function u(t, e, r) {
                r || (r = Error);
                var a = (function (r) {
                  function a(r, o, s) {
                    var f, u;
                    return (
                      !(function (t, e) {
                        if (!(t instanceof e))
                          throw TypeError("Cannot call a class as a function");
                      })(this, a),
                      ((f =
                        (u = i(a).call(
                          this,
                          "string" == typeof e ? e : e(r, o, s)
                        )) &&
                        ("object" === n(u) || "function" == typeof u)
                          ? u
                          : (function (t) {
                              if (void 0 === t)
                                throw ReferenceError(
                                  "this hasn't been initialised - super() hasn't been called"
                                );
                              return t;
                            })(this)).code = t),
                      f
                    );
                  }
                  return (
                    !(function (t, e) {
                      if ("function" != typeof e && null !== e)
                        throw TypeError(
                          "Super expression must either be null or a function"
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        e && o(t, e);
                    })(a, r),
                    a
                  );
                })(r);
                f[t] = a;
              }
              function h(t, e) {
                if (!Array.isArray(t))
                  return "of ".concat(e, " ").concat(String(t));
                var r = t.length;
                return ((t = t.map(function (t) {
                  return String(t);
                })),
                r > 2)
                  ? "one of "
                      .concat(e, " ")
                      .concat(t.slice(0, r - 1).join(", "), ", or ") + t[r - 1]
                  : 2 === r
                  ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1])
                  : "of ".concat(e, " ").concat(t[0]);
              }
              u(
                "ERR_AMBIGUOUS_ARGUMENT",
                'The "%s" argument is ambiguous. %s',
                TypeError
              ),
                u(
                  "ERR_INVALID_ARG_TYPE",
                  function (t, e, i) {
                    if (
                      ((void 0 === a && (a = r(167)),
                      a("string" == typeof t, "'name' must be a string"),
                      "string" == typeof e &&
                        ((o = "not "),
                        e.substr(!s || s < 0 ? 0 : +s, o.length) === o))
                        ? ((l = "must not be"), (e = e.replace(/^not /, "")))
                        : (l = "must be"),
                      (f = " argument"),
                      (void 0 === u || u > t.length) && (u = t.length),
                      t.substring(u - f.length, u) === f)
                    )
                      d = "The "
                        .concat(t, " ")
                        .concat(l, " ")
                        .concat(h(e, "type"));
                    else {
                      var o,
                        s,
                        f,
                        u,
                        c,
                        l,
                        d,
                        p = ("number" != typeof c && (c = 0),
                        c + 1 > t.length || -1 === t.indexOf(".", c))
                          ? "argument"
                          : "property";
                      d = 'The "'
                        .concat(t, '" ')
                        .concat(p, " ")
                        .concat(l, " ")
                        .concat(h(e, "type"));
                    }
                    return d + ". Received type ".concat(n(i));
                  },
                  TypeError
                ),
                u(
                  "ERR_INVALID_ARG_VALUE",
                  function (t, e) {
                    var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : "is invalid";
                    void 0 === s && (s = r(177));
                    var i = s.inspect(e);
                    return (
                      i.length > 128 && (i = "".concat(i.slice(0, 128), "...")),
                      "The argument '"
                        .concat(t, "' ")
                        .concat(n, ". Received ")
                        .concat(i)
                    );
                  },
                  TypeError,
                  RangeError
                ),
                u(
                  "ERR_INVALID_RETURN_VALUE",
                  function (t, e, r) {
                    var i;
                    return (
                      (i =
                        r && r.constructor && r.constructor.name
                          ? "instance of ".concat(r.constructor.name)
                          : "type ".concat(n(r))),
                      "Expected "
                        .concat(t, ' to be returned from the "')
                        .concat(e, '"') + " function but got ".concat(i, ".")
                    );
                  },
                  TypeError
                ),
                u(
                  "ERR_MISSING_ARGS",
                  function () {
                    for (
                      var t = arguments.length, e = Array(t), n = 0;
                      n < t;
                      n++
                    )
                      e[n] = arguments[n];
                    void 0 === a && (a = r(167)),
                      a(e.length > 0, "At least one arg needs to be specified");
                    var i = "The ",
                      o = e.length;
                    switch (
                      ((e = e.map(function (t) {
                        return '"'.concat(t, '"');
                      })),
                      o)
                    ) {
                      case 1:
                        i += "".concat(e[0], " argument");
                        break;
                      case 2:
                        i += ""
                          .concat(e[0], " and ")
                          .concat(e[1], " arguments");
                        break;
                      default:
                        i +=
                          e.slice(0, o - 1).join(", ") +
                          ", and ".concat(e[o - 1], " arguments");
                    }
                    return "".concat(i, " must be specified");
                  },
                  TypeError
                ),
                (t.exports.codes = f);
            },
            176: function (t, e, r) {
              "use strict";
              function n(t, e) {
                return (
                  (function (t) {
                    if (Array.isArray(t)) return t;
                  })(t) ||
                  (function (t, e) {
                    var r = [],
                      n = !0,
                      i = !1,
                      o = void 0;
                    try {
                      for (
                        var a, s = t[Symbol.iterator]();
                        !(n = (a = s.next()).done) &&
                        (r.push(a.value), !e || r.length !== e);
                        n = !0
                      );
                    } catch (t) {
                      (i = !0), (o = t);
                    } finally {
                      try {
                        n || null == s.return || s.return();
                      } finally {
                        if (i) throw o;
                      }
                    }
                    return r;
                  })(t, e) ||
                  (function () {
                    throw TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()
                );
              }
              function i(t) {
                return (i =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (t) {
                        return typeof t;
                      }
                    : function (t) {
                        return t &&
                          "function" == typeof Symbol &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? "symbol"
                          : typeof t;
                      })(t);
              }
              var o = void 0 !== /a/g.flags,
                a = function (t) {
                  var e = [];
                  return (
                    t.forEach(function (t) {
                      return e.push(t);
                    }),
                    e
                  );
                },
                s = function (t) {
                  var e = [];
                  return (
                    t.forEach(function (t, r) {
                      return e.push([r, t]);
                    }),
                    e
                  );
                },
                f = Object.is ? Object.is : r(208),
                u = Object.getOwnPropertySymbols
                  ? Object.getOwnPropertySymbols
                  : function () {
                      return [];
                    },
                h = Number.isNaN ? Number.isNaN : r(718);
              function c(t) {
                return t.call.bind(t);
              }
              var l = c(Object.prototype.hasOwnProperty),
                d = c(Object.prototype.propertyIsEnumerable),
                p = c(Object.prototype.toString),
                b = r(177).types,
                y = b.isAnyArrayBuffer,
                m = b.isArrayBufferView,
                g = b.isDate,
                v = b.isMap,
                w = b.isRegExp,
                M = b.isSet,
                _ = b.isNativeError,
                S = b.isBoxedPrimitive,
                A = b.isNumberObject,
                E = b.isStringObject,
                x = b.isBooleanObject,
                O = b.isBigIntObject,
                k = b.isSymbolObject,
                R = b.isFloat32Array,
                P = b.isFloat64Array;
              function j(t) {
                if (0 === t.length || t.length > 10) return !0;
                for (var e = 0; e < t.length; e++) {
                  var r = t.charCodeAt(e);
                  if (r < 48 || r > 57) return !0;
                }
                return 10 === t.length && t >= 4294967296;
              }
              function I(t) {
                return Object.keys(t)
                  .filter(j)
                  .concat(
                    u(t).filter(Object.prototype.propertyIsEnumerable.bind(t))
                  );
              }
              /*!
               * The buffer module from node.js, for the browser.
               *
               * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
               * @license  MIT
               */ function T(t, e) {
                if (t === e) return 0;
                for (
                  var r = t.length, n = e.length, i = 0, o = Math.min(r, n);
                  i < o;
                  ++i
                )
                  if (t[i] !== e[i]) {
                    (r = t[i]), (n = e[i]);
                    break;
                  }
                return r < n ? -1 : n < r ? 1 : 0;
              }
              var B = void 0;
              function N(t, e, r, n) {
                if (t === e) return 0 !== t || !r || f(t, e);
                if (r) {
                  if ("object" !== i(t))
                    return "number" == typeof t && h(t) && h(e);
                  if (
                    "object" !== i(e) ||
                    null === t ||
                    null === e ||
                    Object.getPrototypeOf(t) !== Object.getPrototypeOf(e)
                  )
                    return !1;
                } else {
                  if (null === t || "object" !== i(t))
                    return (null === e || "object" !== i(e)) && t == e;
                  if (null === e || "object" !== i(e)) return !1;
                }
                var a = p(t);
                if (a !== p(e)) return !1;
                if (Array.isArray(t)) {
                  if (t.length !== e.length) return !1;
                  var s = I(t, B),
                    u = I(e, B);
                  return s.length === u.length && C(t, e, r, n, 1, s);
                }
                if (
                  "[object Object]" === a &&
                  ((!v(t) && v(e)) || (!M(t) && M(e)))
                )
                  return !1;
                if (g(t)) {
                  if (
                    !g(e) ||
                    Date.prototype.getTime.call(t) !==
                      Date.prototype.getTime.call(e)
                  )
                    return !1;
                } else if (w(t)) {
                  if (
                    !w(e) ||
                    (o
                      ? t.source !== e.source || t.flags !== e.flags
                      : RegExp.prototype.toString.call(t) !==
                        RegExp.prototype.toString.call(e))
                  )
                    return !1;
                } else if (_(t) || t instanceof Error) {
                  if (t.message !== e.message || t.name !== e.name) return !1;
                } else if (m(t)) {
                  if (!r && (R(t) || P(t))) {
                    if (
                      !(function (t, e) {
                        if (t.byteLength !== e.byteLength) return !1;
                        for (var r = 0; r < t.byteLength; r++)
                          if (t[r] !== e[r]) return !1;
                        return !0;
                      })(t, e)
                    )
                      return !1;
                  } else if (
                    t.byteLength !== e.byteLength ||
                    0 !==
                      T(
                        new Uint8Array(t.buffer, t.byteOffset, t.byteLength),
                        new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
                      )
                  )
                    return !1;
                  var c = I(t, B),
                    l = I(e, B);
                  return c.length === l.length && C(t, e, r, n, 0, c);
                } else if (M(t))
                  return !!M(e) && t.size === e.size && C(t, e, r, n, 2);
                else if (v(t))
                  return !!v(e) && t.size === e.size && C(t, e, r, n, 3);
                else if (y(t)) {
                  if (
                    t.byteLength !== e.byteLength ||
                    0 !== T(new Uint8Array(t), new Uint8Array(e))
                  )
                    return !1;
                } else if (
                  S(t) &&
                  (A(t)
                    ? !(
                        A(e) &&
                        f(
                          Number.prototype.valueOf.call(t),
                          Number.prototype.valueOf.call(e)
                        )
                      )
                    : E(t)
                    ? !E(e) ||
                      String.prototype.valueOf.call(t) !==
                        String.prototype.valueOf.call(e)
                    : x(t)
                    ? !x(e) ||
                      Boolean.prototype.valueOf.call(t) !==
                        Boolean.prototype.valueOf.call(e)
                    : O(t)
                    ? !O(e) ||
                      BigInt.prototype.valueOf.call(t) !==
                        BigInt.prototype.valueOf.call(e)
                    : !k(e) ||
                      Symbol.prototype.valueOf.call(t) !==
                        Symbol.prototype.valueOf.call(e))
                )
                  return !1;
                return C(t, e, r, n, 0);
              }
              function L(t, e) {
                return e.filter(function (e) {
                  return d(t, e);
                });
              }
              function C(t, e, r, o, f, h) {
                if (5 == arguments.length) {
                  h = Object.keys(t);
                  var c = Object.keys(e);
                  if (h.length !== c.length) return !1;
                }
                for (var p = 0; p < h.length; p++) if (!l(e, h[p])) return !1;
                if (r && 5 == arguments.length) {
                  var b = u(t);
                  if (0 !== b.length) {
                    var y = 0;
                    for (p = 0; p < b.length; p++) {
                      var m = b[p];
                      if (d(t, m)) {
                        if (!d(e, m)) return !1;
                        h.push(m), y++;
                      } else if (d(e, m)) return !1;
                    }
                    var g = u(e);
                    if (b.length !== g.length && L(e, g).length !== y)
                      return !1;
                  } else {
                    var v = u(e);
                    if (0 !== v.length && 0 !== L(e, v).length) return !1;
                  }
                }
                if (
                  0 === h.length &&
                  (0 === f || (1 === f && 0 === t.length) || 0 === t.size)
                )
                  return !0;
                if (void 0 === o)
                  o = { val1: new Map(), val2: new Map(), position: 0 };
                else {
                  var w = o.val1.get(t);
                  if (void 0 !== w) {
                    var M = o.val2.get(e);
                    if (void 0 !== M) return w === M;
                  }
                  o.position++;
                }
                o.val1.set(t, o.position), o.val2.set(e, o.position);
                var _ = (function (t, e, r, o, f, u) {
                  var h = 0;
                  if (2 === u) {
                    if (
                      !(function (t, e, r, n) {
                        for (var o = null, s = a(t), f = 0; f < s.length; f++) {
                          var u = s[f];
                          if ("object" === i(u) && null !== u)
                            null === o && (o = new Set()), o.add(u);
                          else if (!e.has(u)) {
                            if (
                              r ||
                              !(function (t, e, r) {
                                var n = U(r);
                                return null != n ? n : e.has(n) && !t.has(n);
                              })(t, e, u)
                            )
                              return !1;
                            null === o && (o = new Set()), o.add(u);
                          }
                        }
                        if (null !== o) {
                          for (var h = a(e), c = 0; c < h.length; c++) {
                            var l = h[c];
                            if ("object" === i(l) && null !== l) {
                              if (!q(o, l, r, n)) return !1;
                            } else if (!r && !t.has(l) && !q(o, l, r, n))
                              return !1;
                          }
                          return 0 === o.size;
                        }
                        return !0;
                      })(t, e, r, f)
                    )
                      return !1;
                  } else if (3 === u) {
                    if (
                      !(function (t, e, r, o) {
                        for (var a = null, f = s(t), u = 0; u < f.length; u++) {
                          var h = n(f[u], 2),
                            c = h[0],
                            l = h[1];
                          if ("object" === i(c) && null !== c)
                            null === a && (a = new Set()), a.add(c);
                          else {
                            var d = e.get(c);
                            if ((void 0 === d && !e.has(c)) || !N(l, d, r, o)) {
                              if (
                                r ||
                                !(function (t, e, r, n, i) {
                                  var o = U(r);
                                  if (null != o) return o;
                                  var a = e.get(o);
                                  return (
                                    !!(
                                      (void 0 !== a || e.has(o)) &&
                                      N(n, a, !1, i)
                                    ) &&
                                    !t.has(o) &&
                                    N(n, a, !1, i)
                                  );
                                })(t, e, c, l, o)
                              )
                                return !1;
                              null === a && (a = new Set()), a.add(c);
                            }
                          }
                        }
                        if (null !== a) {
                          for (var p = s(e), b = 0; b < p.length; b++) {
                            var y = n(p[b], 2),
                              c = y[0],
                              m = y[1];
                            if ("object" === i(c) && null !== c) {
                              if (!F(a, t, c, m, r, o)) return !1;
                            } else if (
                              !r &&
                              (!t.has(c) || !N(t.get(c), m, !1, o)) &&
                              !F(a, t, c, m, !1, o)
                            )
                              return !1;
                          }
                          return 0 === a.size;
                        }
                        return !0;
                      })(t, e, r, f)
                    )
                      return !1;
                  } else if (1 === u)
                    for (; h < t.length; h++)
                      if (l(t, h)) {
                        if (!l(e, h) || !N(t[h], e[h], r, f)) return !1;
                      } else {
                        if (l(e, h)) return !1;
                        for (var c = Object.keys(t); h < c.length; h++) {
                          var d = c[h];
                          if (!l(e, d) || !N(t[d], e[d], r, f)) return !1;
                        }
                        if (c.length !== Object.keys(e).length) return !1;
                        return !0;
                      }
                  for (h = 0; h < o.length; h++) {
                    var p = o[h];
                    if (!N(t[p], e[p], r, f)) return !1;
                  }
                  return !0;
                })(t, e, r, h, o, f);
                return o.val1.delete(t), o.val2.delete(e), _;
              }
              function q(t, e, r, n) {
                for (var i = a(t), o = 0; o < i.length; o++) {
                  var s = i[o];
                  if (N(e, s, r, n)) return t.delete(s), !0;
                }
                return !1;
              }
              function U(t) {
                switch (i(t)) {
                  case "undefined":
                    return null;
                  case "object":
                    return;
                  case "symbol":
                    return !1;
                  case "string":
                    t = +t;
                  case "number":
                    if (h(t)) return !1;
                }
                return !0;
              }
              function F(t, e, r, n, i, o) {
                for (var s = a(t), f = 0; f < s.length; f++) {
                  var u = s[f];
                  if (N(r, u, i, o) && N(n, e.get(u), i, o))
                    return t.delete(u), !0;
                }
                return !1;
              }
              t.exports = {
                isDeepEqual: function (t, e) {
                  return N(t, e, !1);
                },
                isDeepStrictEqual: function (t, e) {
                  return N(t, e, !0);
                },
              };
            },
            256: function (t, e, r) {
              "use strict";
              var n = r(500),
                i = r(139),
                o = i(n("String.prototype.indexOf"));
              t.exports = function (t, e) {
                var r = n(t, !!e);
                return "function" == typeof r && o(t, ".prototype.") > -1
                  ? i(r)
                  : r;
              };
            },
            139: function (t, e, r) {
              "use strict";
              var n = r(174),
                i = r(500),
                o = i("%Function.prototype.apply%"),
                a = i("%Function.prototype.call%"),
                s = i("%Reflect.apply%", !0) || n.call(a, o),
                f = i("%Object.getOwnPropertyDescriptor%", !0),
                u = i("%Object.defineProperty%", !0),
                h = i("%Math.max%");
              if (u)
                try {
                  u({}, "a", { value: 1 });
                } catch (t) {
                  u = null;
                }
              t.exports = function (t) {
                var e = s(n, a, arguments);
                return (
                  f &&
                    u &&
                    f(e, "length").configurable &&
                    u(e, "length", {
                      value: 1 + h(0, t.length - (arguments.length - 1)),
                    }),
                  e
                );
              };
              var c = function () {
                return s(n, o, arguments);
              };
              u ? u(t.exports, "apply", { value: c }) : (t.exports.apply = c);
            },
            69: function (t, e, r) {
              "use strict";
              var n = r(935),
                i =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol("foo"),
                o = Object.prototype.toString,
                a = Array.prototype.concat,
                s = Object.defineProperty,
                f =
                  s &&
                  (function () {
                    var t = {};
                    try {
                      for (var e in (s(t, "x", { enumerable: !1, value: t }),
                      t))
                        return !1;
                      return t.x === t;
                    } catch (t) {
                      return !1;
                    }
                  })(),
                u = function (t, e, r, n) {
                  (!(e in t) ||
                    ("function" == typeof n &&
                      "[object Function]" === o.call(n) &&
                      n())) &&
                    (f
                      ? s(t, e, {
                          configurable: !0,
                          enumerable: !1,
                          value: r,
                          writable: !0,
                        })
                      : (t[e] = r));
                },
                h = function (t, e) {
                  var r = arguments.length > 2 ? arguments[2] : {},
                    o = n(e);
                  i && (o = a.call(o, Object.getOwnPropertySymbols(e)));
                  for (var s = 0; s < o.length; s += 1)
                    u(t, o[s], e[o[s]], r[o[s]]);
                };
              (h.supportsDescriptors = !!f), (t.exports = h);
            },
            604: function (t) {
              "use strict";
              function e(t, e) {
                if (null == t)
                  throw TypeError("Cannot convert first argument to object");
                for (var r = Object(t), n = 1; n < arguments.length; n++) {
                  var i = arguments[n];
                  if (null != i)
                    for (
                      var o = Object.keys(Object(i)), a = 0, s = o.length;
                      a < s;
                      a++
                    ) {
                      var f = o[a],
                        u = Object.getOwnPropertyDescriptor(i, f);
                      void 0 !== u && u.enumerable && (r[f] = i[f]);
                    }
                }
                return r;
              }
              t.exports = {
                assign: e,
                polyfill: function () {
                  Object.assign ||
                    Object.defineProperty(Object, "assign", {
                      enumerable: !1,
                      configurable: !0,
                      writable: !0,
                      value: e,
                    });
                },
              };
            },
            144: function (t) {
              var e = Object.prototype.hasOwnProperty,
                r = Object.prototype.toString;
              t.exports = function (t, n, i) {
                if ("[object Function]" !== r.call(n))
                  throw TypeError("iterator must be a function");
                var o = t.length;
                if (o === +o) for (var a = 0; a < o; a++) n.call(i, t[a], a, t);
                else for (var s in t) e.call(t, s) && n.call(i, t[s], s, t);
              };
            },
            426: function (t) {
              "use strict";
              var e = Array.prototype.slice,
                r = Object.prototype.toString;
              t.exports = function (t) {
                var n,
                  i = this;
                if ("function" != typeof i || "[object Function]" !== r.call(i))
                  throw TypeError(
                    "Function.prototype.bind called on incompatible " + i
                  );
                for (
                  var o = e.call(arguments, 1),
                    a = Math.max(0, i.length - o.length),
                    s = [],
                    f = 0;
                  f < a;
                  f++
                )
                  s.push("$" + f);
                if (
                  ((n = Function(
                    "binder",
                    "return function (" +
                      s.join(",") +
                      "){ return binder.apply(this,arguments); }"
                  )(function () {
                    if (!(this instanceof n))
                      return i.apply(t, o.concat(e.call(arguments)));
                    var r = i.apply(this, o.concat(e.call(arguments)));
                    return Object(r) === r ? r : this;
                  })),
                  i.prototype)
                ) {
                  var u = function () {};
                  (u.prototype = i.prototype),
                    (n.prototype = new u()),
                    (u.prototype = null);
                }
                return n;
              };
            },
            174: function (t, e, r) {
              "use strict";
              var n = r(426);
              t.exports = Function.prototype.bind || n;
            },
            500: function (t, e, r) {
              "use strict";
              var n,
                i = SyntaxError,
                o = Function,
                a = TypeError,
                s = function (t) {
                  try {
                    return o('"use strict"; return (' + t + ").constructor;")();
                  } catch (t) {}
                },
                f = Object.getOwnPropertyDescriptor;
              if (f)
                try {
                  f({}, "");
                } catch (t) {
                  f = null;
                }
              var u = function () {
                  throw new a();
                },
                h = f
                  ? (function () {
                      try {
                        return arguments.callee, u;
                      } catch (t) {
                        try {
                          return f(arguments, "callee").get;
                        } catch (t) {
                          return u;
                        }
                      }
                    })()
                  : u,
                c = r(115)(),
                l =
                  Object.getPrototypeOf ||
                  function (t) {
                    return t.__proto__;
                  },
                d = {},
                p = "undefined" == typeof Uint8Array ? n : l(Uint8Array),
                b = {
                  "%AggregateError%":
                    "undefined" == typeof AggregateError ? n : AggregateError,
                  "%Array%": Array,
                  "%ArrayBuffer%":
                    "undefined" == typeof ArrayBuffer ? n : ArrayBuffer,
                  "%ArrayIteratorPrototype%": c ? l([][Symbol.iterator]()) : n,
                  "%AsyncFromSyncIteratorPrototype%": n,
                  "%AsyncFunction%": d,
                  "%AsyncGenerator%": d,
                  "%AsyncGeneratorFunction%": d,
                  "%AsyncIteratorPrototype%": d,
                  "%Atomics%": "undefined" == typeof Atomics ? n : Atomics,
                  "%BigInt%": "undefined" == typeof BigInt ? n : BigInt,
                  "%Boolean%": Boolean,
                  "%DataView%": "undefined" == typeof DataView ? n : DataView,
                  "%Date%": Date,
                  "%decodeURI%": decodeURI,
                  "%decodeURIComponent%": decodeURIComponent,
                  "%encodeURI%": encodeURI,
                  "%encodeURIComponent%": encodeURIComponent,
                  "%Error%": Error,
                  "%eval%": eval,
                  "%EvalError%": EvalError,
                  "%Float32Array%":
                    "undefined" == typeof Float32Array ? n : Float32Array,
                  "%Float64Array%":
                    "undefined" == typeof Float64Array ? n : Float64Array,
                  "%FinalizationRegistry%":
                    "undefined" == typeof FinalizationRegistry
                      ? n
                      : FinalizationRegistry,
                  "%Function%": o,
                  "%GeneratorFunction%": d,
                  "%Int8Array%":
                    "undefined" == typeof Int8Array ? n : Int8Array,
                  "%Int16Array%":
                    "undefined" == typeof Int16Array ? n : Int16Array,
                  "%Int32Array%":
                    "undefined" == typeof Int32Array ? n : Int32Array,
                  "%isFinite%": isFinite,
                  "%isNaN%": isNaN,
                  "%IteratorPrototype%": c ? l(l([][Symbol.iterator]())) : n,
                  "%JSON%": "object" == typeof JSON ? JSON : n,
                  "%Map%": "undefined" == typeof Map ? n : Map,
                  "%MapIteratorPrototype%":
                    "undefined" != typeof Map && c
                      ? l(new Map()[Symbol.iterator]())
                      : n,
                  "%Math%": Math,
                  "%Number%": Number,
                  "%Object%": Object,
                  "%parseFloat%": parseFloat,
                  "%parseInt%": parseInt,
                  "%Promise%": "undefined" == typeof Promise ? n : Promise,
                  "%Proxy%": "undefined" == typeof Proxy ? n : Proxy,
                  "%RangeError%": RangeError,
                  "%ReferenceError%": ReferenceError,
                  "%Reflect%": "undefined" == typeof Reflect ? n : Reflect,
                  "%RegExp%": RegExp,
                  "%Set%": "undefined" == typeof Set ? n : Set,
                  "%SetIteratorPrototype%":
                    "undefined" != typeof Set && c
                      ? l(new Set()[Symbol.iterator]())
                      : n,
                  "%SharedArrayBuffer%":
                    "undefined" == typeof SharedArrayBuffer
                      ? n
                      : SharedArrayBuffer,
                  "%String%": String,
                  "%StringIteratorPrototype%": c ? l(""[Symbol.iterator]()) : n,
                  "%Symbol%": c ? Symbol : n,
                  "%SyntaxError%": i,
                  "%ThrowTypeError%": h,
                  "%TypedArray%": p,
                  "%TypeError%": a,
                  "%Uint8Array%":
                    "undefined" == typeof Uint8Array ? n : Uint8Array,
                  "%Uint8ClampedArray%":
                    "undefined" == typeof Uint8ClampedArray
                      ? n
                      : Uint8ClampedArray,
                  "%Uint16Array%":
                    "undefined" == typeof Uint16Array ? n : Uint16Array,
                  "%Uint32Array%":
                    "undefined" == typeof Uint32Array ? n : Uint32Array,
                  "%URIError%": URIError,
                  "%WeakMap%": "undefined" == typeof WeakMap ? n : WeakMap,
                  "%WeakRef%": "undefined" == typeof WeakRef ? n : WeakRef,
                  "%WeakSet%": "undefined" == typeof WeakSet ? n : WeakSet,
                },
                y = function t(e) {
                  var r;
                  if ("%AsyncFunction%" === e) r = s("async function () {}");
                  else if ("%GeneratorFunction%" === e)
                    r = s("function* () {}");
                  else if ("%AsyncGeneratorFunction%" === e)
                    r = s("async function* () {}");
                  else if ("%AsyncGenerator%" === e) {
                    var n = t("%AsyncGeneratorFunction%");
                    n && (r = n.prototype);
                  } else if ("%AsyncIteratorPrototype%" === e) {
                    var i = t("%AsyncGenerator%");
                    i && (r = l(i.prototype));
                  }
                  return (b[e] = r), r;
                },
                m = {
                  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
                  "%ArrayPrototype%": ["Array", "prototype"],
                  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
                  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
                  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
                  "%ArrayProto_values%": ["Array", "prototype", "values"],
                  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
                  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
                  "%AsyncGeneratorPrototype%": [
                    "AsyncGeneratorFunction",
                    "prototype",
                    "prototype",
                  ],
                  "%BooleanPrototype%": ["Boolean", "prototype"],
                  "%DataViewPrototype%": ["DataView", "prototype"],
                  "%DatePrototype%": ["Date", "prototype"],
                  "%ErrorPrototype%": ["Error", "prototype"],
                  "%EvalErrorPrototype%": ["EvalError", "prototype"],
                  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
                  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
                  "%FunctionPrototype%": ["Function", "prototype"],
                  "%Generator%": ["GeneratorFunction", "prototype"],
                  "%GeneratorPrototype%": [
                    "GeneratorFunction",
                    "prototype",
                    "prototype",
                  ],
                  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
                  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
                  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
                  "%JSONParse%": ["JSON", "parse"],
                  "%JSONStringify%": ["JSON", "stringify"],
                  "%MapPrototype%": ["Map", "prototype"],
                  "%NumberPrototype%": ["Number", "prototype"],
                  "%ObjectPrototype%": ["Object", "prototype"],
                  "%ObjProto_toString%": ["Object", "prototype", "toString"],
                  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
                  "%PromisePrototype%": ["Promise", "prototype"],
                  "%PromiseProto_then%": ["Promise", "prototype", "then"],
                  "%Promise_all%": ["Promise", "all"],
                  "%Promise_reject%": ["Promise", "reject"],
                  "%Promise_resolve%": ["Promise", "resolve"],
                  "%RangeErrorPrototype%": ["RangeError", "prototype"],
                  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
                  "%RegExpPrototype%": ["RegExp", "prototype"],
                  "%SetPrototype%": ["Set", "prototype"],
                  "%SharedArrayBufferPrototype%": [
                    "SharedArrayBuffer",
                    "prototype",
                  ],
                  "%StringPrototype%": ["String", "prototype"],
                  "%SymbolPrototype%": ["Symbol", "prototype"],
                  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
                  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
                  "%TypeErrorPrototype%": ["TypeError", "prototype"],
                  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
                  "%Uint8ClampedArrayPrototype%": [
                    "Uint8ClampedArray",
                    "prototype",
                  ],
                  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
                  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
                  "%URIErrorPrototype%": ["URIError", "prototype"],
                  "%WeakMapPrototype%": ["WeakMap", "prototype"],
                  "%WeakSetPrototype%": ["WeakSet", "prototype"],
                },
                g = r(174),
                v = r(101),
                w = g.call(Function.call, Array.prototype.concat),
                M = g.call(Function.apply, Array.prototype.splice),
                _ = g.call(Function.call, String.prototype.replace),
                S = g.call(Function.call, String.prototype.slice),
                A = g.call(Function.call, RegExp.prototype.exec),
                E =
                  /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                x = /\\(\\)?/g,
                O = function (t) {
                  var e = S(t, 0, 1),
                    r = S(t, -1);
                  if ("%" === e && "%" !== r)
                    throw new i(
                      "invalid intrinsic syntax, expected closing `%`"
                    );
                  if ("%" === r && "%" !== e)
                    throw new i(
                      "invalid intrinsic syntax, expected opening `%`"
                    );
                  var n = [];
                  return (
                    _(t, E, function (t, e, r, i) {
                      n[n.length] = r ? _(i, x, "$1") : e || t;
                    }),
                    n
                  );
                },
                k = function (t, e) {
                  var r,
                    n = t;
                  if ((v(m, n) && (n = "%" + (r = m[n])[0] + "%"), v(b, n))) {
                    var o = b[n];
                    if ((o === d && (o = y(n)), void 0 === o && !e))
                      throw new a(
                        "intrinsic " +
                          t +
                          " exists, but is not available. Please file an issue!"
                      );
                    return { alias: r, name: n, value: o };
                  }
                  throw new i("intrinsic " + t + " does not exist!");
                };
              t.exports = function (t, e) {
                if ("string" != typeof t || 0 === t.length)
                  throw new a("intrinsic name must be a non-empty string");
                if (arguments.length > 1 && "boolean" != typeof e)
                  throw new a('"allowMissing" argument must be a boolean');
                if (null === A(/^%?[^%]*%?$/g, t))
                  throw new i(
                    "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
                  );
                var r = O(t),
                  n = r.length > 0 ? r[0] : "",
                  o = k("%" + n + "%", e),
                  s = o.name,
                  u = o.value,
                  h = !1,
                  c = o.alias;
                c && ((n = c[0]), M(r, w([0, 1], c)));
                for (var l = 1, d = !0; l < r.length; l += 1) {
                  var p = r[l],
                    y = S(p, 0, 1),
                    m = S(p, -1);
                  if (
                    ('"' === y ||
                      "'" === y ||
                      "`" === y ||
                      '"' === m ||
                      "'" === m ||
                      "`" === m) &&
                    y !== m
                  )
                    throw new i(
                      "property names with quotes must have matching quotes"
                    );
                  if (
                    (("constructor" !== p && d) || (h = !0),
                    (n += "." + p),
                    v(b, (s = "%" + n + "%")))
                  )
                    u = b[s];
                  else if (null != u) {
                    if (!(p in u)) {
                      if (!e)
                        throw new a(
                          "base intrinsic for " +
                            t +
                            " exists, but the property is not available."
                        );
                      return;
                    }
                    if (f && l + 1 >= r.length) {
                      var g = f(u, p);
                      u =
                        (d = !!g) && "get" in g && !("originalValue" in g.get)
                          ? g.get
                          : u[p];
                    } else (d = v(u, p)), (u = u[p]);
                    d && !h && (b[s] = u);
                  }
                }
                return u;
              };
            },
            942: function (t, e, r) {
              "use strict";
              var n = "undefined" != typeof Symbol && Symbol,
                i = r(773);
              t.exports = function () {
                return (
                  "function" == typeof n &&
                  "function" == typeof Symbol &&
                  "symbol" == typeof n("foo") &&
                  "symbol" == typeof Symbol("bar") &&
                  i()
                );
              };
            },
            773: function (t) {
              "use strict";
              t.exports = function () {
                if (
                  "function" != typeof Symbol ||
                  "function" != typeof Object.getOwnPropertySymbols
                )
                  return !1;
                if ("symbol" == typeof Symbol.iterator) return !0;
                var t = {},
                  e = Symbol("test"),
                  r = Object(e);
                if (
                  "string" == typeof e ||
                  "[object Symbol]" !== Object.prototype.toString.call(e) ||
                  "[object Symbol]" !== Object.prototype.toString.call(r)
                )
                  return !1;
                for (e in ((t[e] = 42), t)) return !1;
                if (
                  ("function" == typeof Object.keys &&
                    0 !== Object.keys(t).length) ||
                  ("function" == typeof Object.getOwnPropertyNames &&
                    0 !== Object.getOwnPropertyNames(t).length)
                )
                  return !1;
                var n = Object.getOwnPropertySymbols(t);
                if (
                  1 !== n.length ||
                  n[0] !== e ||
                  !Object.prototype.propertyIsEnumerable.call(t, e)
                )
                  return !1;
                if ("function" == typeof Object.getOwnPropertyDescriptor) {
                  var i = Object.getOwnPropertyDescriptor(t, e);
                  if (42 !== i.value || !0 !== i.enumerable) return !1;
                }
                return !0;
              };
            },
            115: function (t, e, r) {
              "use strict";
              var n = "undefined" != typeof Symbol && Symbol,
                i = r(832);
              t.exports = function () {
                return (
                  "function" == typeof n &&
                  "function" == typeof Symbol &&
                  "symbol" == typeof n("foo") &&
                  "symbol" == typeof Symbol("bar") &&
                  i()
                );
              };
            },
            832: function (t) {
              "use strict";
              t.exports = function () {
                if (
                  "function" != typeof Symbol ||
                  "function" != typeof Object.getOwnPropertySymbols
                )
                  return !1;
                if ("symbol" == typeof Symbol.iterator) return !0;
                var t = {},
                  e = Symbol("test"),
                  r = Object(e);
                if (
                  "string" == typeof e ||
                  "[object Symbol]" !== Object.prototype.toString.call(e) ||
                  "[object Symbol]" !== Object.prototype.toString.call(r)
                )
                  return !1;
                for (e in ((t[e] = 42), t)) return !1;
                if (
                  ("function" == typeof Object.keys &&
                    0 !== Object.keys(t).length) ||
                  ("function" == typeof Object.getOwnPropertyNames &&
                    0 !== Object.getOwnPropertyNames(t).length)
                )
                  return !1;
                var n = Object.getOwnPropertySymbols(t);
                if (
                  1 !== n.length ||
                  n[0] !== e ||
                  !Object.prototype.propertyIsEnumerable.call(t, e)
                )
                  return !1;
                if ("function" == typeof Object.getOwnPropertyDescriptor) {
                  var i = Object.getOwnPropertyDescriptor(t, e);
                  if (42 !== i.value || !0 !== i.enumerable) return !1;
                }
                return !0;
              };
            },
            101: function (t, e, r) {
              "use strict";
              var n = r(174);
              t.exports = n.call(
                Function.call,
                Object.prototype.hasOwnProperty
              );
            },
            782: function (t) {
              "function" == typeof Object.create
                ? (t.exports = function (t, e) {
                    e &&
                      ((t.super_ = e),
                      (t.prototype = Object.create(e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })));
                  })
                : (t.exports = function (t, e) {
                    if (e) {
                      t.super_ = e;
                      var r = function () {};
                      (r.prototype = e.prototype),
                        (t.prototype = new r()),
                        (t.prototype.constructor = t);
                    }
                  });
            },
            157: function (t) {
              "use strict";
              var e =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.toStringTag,
                r = Object.prototype.toString,
                n = function (t) {
                  return (
                    (!e ||
                      !t ||
                      "object" != typeof t ||
                      !(Symbol.toStringTag in t)) &&
                    "[object Arguments]" === r.call(t)
                  );
                },
                i = function (t) {
                  return (
                    !!n(t) ||
                    (null !== t &&
                      "object" == typeof t &&
                      "number" == typeof t.length &&
                      t.length >= 0 &&
                      "[object Array]" !== r.call(t) &&
                      "[object Function]" === r.call(t.callee))
                  );
                },
                o = (function () {
                  return n(arguments);
                })();
              (n.isLegacyArguments = i), (t.exports = o ? n : i);
            },
            391: function (t) {
              "use strict";
              var e = Object.prototype.toString,
                r = Function.prototype.toString,
                n = /^\s*(?:function)?\*/,
                i =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.toStringTag,
                o = Object.getPrototypeOf,
                a = (function () {
                  if (!i) return !1;
                  try {
                    return Function("return function*() {}")();
                  } catch (t) {}
                })(),
                s = a ? o(a) : {};
              t.exports = function (t) {
                return (
                  "function" == typeof t &&
                  (!!n.test(r.call(t)) ||
                    (i
                      ? o(t) === s
                      : "[object GeneratorFunction]" === e.call(t)))
                );
              };
            },
            460: function (t) {
              "use strict";
              t.exports = function (t) {
                return t != t;
              };
            },
            718: function (t, e, r) {
              "use strict";
              var n = r(139),
                i = r(69),
                o = r(460),
                a = r(625),
                s = r(171),
                f = n(a(), Number);
              i(f, { getPolyfill: a, implementation: o, shim: s }),
                (t.exports = f);
            },
            625: function (t, e, r) {
              "use strict";
              var n = r(460);
              t.exports = function () {
                return Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a")
                  ? Number.isNaN
                  : n;
              };
            },
            171: function (t, e, r) {
              "use strict";
              var n = r(69),
                i = r(625);
              t.exports = function () {
                var t = i();
                return (
                  n(
                    Number,
                    { isNaN: t },
                    {
                      isNaN: function () {
                        return Number.isNaN !== t;
                      },
                    }
                  ),
                  t
                );
              };
            },
            994: function (t, e, n) {
              "use strict";
              var i = n(144),
                o = n(349),
                a = n(256),
                s = a("Object.prototype.toString"),
                f = n(942)() && "symbol" == typeof Symbol.toStringTag,
                u = o(),
                h =
                  a("Array.prototype.indexOf", !0) ||
                  function (t, e) {
                    for (var r = 0; r < t.length; r += 1)
                      if (t[r] === e) return r;
                    return -1;
                  },
                c = a("String.prototype.slice"),
                l = {},
                d = n(466),
                p = Object.getPrototypeOf;
              f &&
                d &&
                p &&
                i(u, function (t) {
                  var e = new r.g[t]();
                  if (!(Symbol.toStringTag in e))
                    throw EvalError(
                      "this engine has support for Symbol.toStringTag, but " +
                        t +
                        " does not have the property! Please report this."
                    );
                  var n = p(e),
                    i = d(n, Symbol.toStringTag);
                  i || (i = d(p(n), Symbol.toStringTag)), (l[t] = i.get);
                });
              var b = function (t) {
                var e = !1;
                return (
                  i(l, function (r, n) {
                    if (!e)
                      try {
                        e = r.call(t) === n;
                      } catch (t) {}
                  }),
                  e
                );
              };
              t.exports = function (t) {
                return (
                  !!t &&
                  "object" == typeof t &&
                  (f ? !!d && b(t) : h(u, c(s(t), 8, -1)) > -1)
                );
              };
            },
            208: function (t) {
              "use strict";
              var e = function (t) {
                return t != t;
              };
              t.exports = function (t, r) {
                return 0 === t && 0 === r
                  ? 1 / t == 1 / r
                  : !!(t === r || (e(t) && e(r)));
              };
            },
            579: function (t, e, r) {
              "use strict";
              var n;
              if (!Object.keys) {
                var i = Object.prototype.hasOwnProperty,
                  o = Object.prototype.toString,
                  a = r(412),
                  s = Object.prototype.propertyIsEnumerable,
                  f = !s.call({ toString: null }, "toString"),
                  u = s.call(function () {}, "prototype"),
                  h = [
                    "toString",
                    "toLocaleString",
                    "valueOf",
                    "hasOwnProperty",
                    "isPrototypeOf",
                    "propertyIsEnumerable",
                    "constructor",
                  ],
                  c = function (t) {
                    var e = t.constructor;
                    return e && e.prototype === t;
                  },
                  l = {
                    $applicationCache: !0,
                    $console: !0,
                    $external: !0,
                    $frame: !0,
                    $frameElement: !0,
                    $frames: !0,
                    $innerHeight: !0,
                    $innerWidth: !0,
                    $onmozfullscreenchange: !0,
                    $onmozfullscreenerror: !0,
                    $outerHeight: !0,
                    $outerWidth: !0,
                    $pageXOffset: !0,
                    $pageYOffset: !0,
                    $parent: !0,
                    $scrollLeft: !0,
                    $scrollTop: !0,
                    $scrollX: !0,
                    $scrollY: !0,
                    $self: !0,
                    $webkitIndexedDB: !0,
                    $webkitStorageInfo: !0,
                    $window: !0,
                  },
                  d = (function () {
                    if ("undefined" == typeof window) return !1;
                    for (var t in window)
                      try {
                        if (
                          !l["$" + t] &&
                          i.call(window, t) &&
                          null !== window[t] &&
                          "object" == typeof window[t]
                        )
                          try {
                            c(window[t]);
                          } catch (t) {
                            return !0;
                          }
                      } catch (t) {
                        return !0;
                      }
                    return !1;
                  })(),
                  p = function (t) {
                    if ("undefined" == typeof window || !d) return c(t);
                    try {
                      return c(t);
                    } catch (t) {
                      return !1;
                    }
                  };
                n = function (t) {
                  var e = null !== t && "object" == typeof t,
                    r = "[object Function]" === o.call(t),
                    n = a(t),
                    s = e && "[object String]" === o.call(t),
                    c = [];
                  if (!e && !r && !n)
                    throw TypeError("Object.keys called on a non-object");
                  var l = u && r;
                  if (s && t.length > 0 && !i.call(t, 0))
                    for (var d = 0; d < t.length; ++d) c.push(String(d));
                  if (n && t.length > 0)
                    for (var b = 0; b < t.length; ++b) c.push(String(b));
                  else
                    for (var y in t)
                      !(l && "prototype" === y) &&
                        i.call(t, y) &&
                        c.push(String(y));
                  if (f)
                    for (var m = p(t), g = 0; g < h.length; ++g)
                      !(m && "constructor" === h[g]) &&
                        i.call(t, h[g]) &&
                        c.push(h[g]);
                  return c;
                };
              }
              t.exports = n;
            },
            935: function (t, e, r) {
              "use strict";
              var n = Array.prototype.slice,
                i = r(412),
                o = Object.keys,
                a = o
                  ? function (t) {
                      return o(t);
                    }
                  : r(579),
                s = Object.keys;
              (a.shim = function () {
                return (
                  Object.keys
                    ? !(function () {
                        var t = Object.keys(arguments);
                        return t && t.length === arguments.length;
                      })(1, 2) &&
                      (Object.keys = function (t) {
                        return i(t) ? s(n.call(t)) : s(t);
                      })
                    : (Object.keys = a),
                  Object.keys || a
                );
              }),
                (t.exports = a);
            },
            412: function (t) {
              "use strict";
              var e = Object.prototype.toString;
              t.exports = function (t) {
                var r = e.call(t),
                  n = "[object Arguments]" === r;
                return (
                  n ||
                    (n =
                      "[object Array]" !== r &&
                      null !== t &&
                      "object" == typeof t &&
                      "number" == typeof t.length &&
                      t.length >= 0 &&
                      "[object Function]" === e.call(t.callee)),
                  n
                );
              };
            },
            369: function (t) {
              t.exports = function (t) {
                return t instanceof i;
              };
            },
            584: function (t, e, r) {
              "use strict";
              var n = r(157),
                i = r(391),
                o = r(490),
                a = r(994);
              function s(t) {
                return t.call.bind(t);
              }
              var f = "undefined" != typeof BigInt,
                u = "undefined" != typeof Symbol,
                h = s(Object.prototype.toString),
                c = s(Number.prototype.valueOf),
                l = s(String.prototype.valueOf),
                d = s(Boolean.prototype.valueOf);
              if (f) var p = s(BigInt.prototype.valueOf);
              if (u) var b = s(Symbol.prototype.valueOf);
              function y(t, e) {
                if ("object" != typeof t) return !1;
                try {
                  return e(t), !0;
                } catch (t) {
                  return !1;
                }
              }
              function m(t) {
                return "[object Map]" === h(t);
              }
              function g(t) {
                return "[object Set]" === h(t);
              }
              function v(t) {
                return "[object WeakMap]" === h(t);
              }
              function w(t) {
                return "[object WeakSet]" === h(t);
              }
              function M(t) {
                return "[object ArrayBuffer]" === h(t);
              }
              function _(t) {
                return (
                  "undefined" != typeof ArrayBuffer &&
                  (M.working ? M(t) : t instanceof ArrayBuffer)
                );
              }
              function S(t) {
                return "[object DataView]" === h(t);
              }
              function A(t) {
                return (
                  "undefined" != typeof DataView &&
                  (S.working ? S(t) : t instanceof DataView)
                );
              }
              (e.isArgumentsObject = n),
                (e.isGeneratorFunction = i),
                (e.isTypedArray = a),
                (e.isPromise = function (t) {
                  return (
                    ("undefined" != typeof Promise && t instanceof Promise) ||
                    (null !== t &&
                      "object" == typeof t &&
                      "function" == typeof t.then &&
                      "function" == typeof t.catch)
                  );
                }),
                (e.isArrayBufferView = function (t) {
                  return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
                    ? ArrayBuffer.isView(t)
                    : a(t) || A(t);
                }),
                (e.isUint8Array = function (t) {
                  return "Uint8Array" === o(t);
                }),
                (e.isUint8ClampedArray = function (t) {
                  return "Uint8ClampedArray" === o(t);
                }),
                (e.isUint16Array = function (t) {
                  return "Uint16Array" === o(t);
                }),
                (e.isUint32Array = function (t) {
                  return "Uint32Array" === o(t);
                }),
                (e.isInt8Array = function (t) {
                  return "Int8Array" === o(t);
                }),
                (e.isInt16Array = function (t) {
                  return "Int16Array" === o(t);
                }),
                (e.isInt32Array = function (t) {
                  return "Int32Array" === o(t);
                }),
                (e.isFloat32Array = function (t) {
                  return "Float32Array" === o(t);
                }),
                (e.isFloat64Array = function (t) {
                  return "Float64Array" === o(t);
                }),
                (e.isBigInt64Array = function (t) {
                  return "BigInt64Array" === o(t);
                }),
                (e.isBigUint64Array = function (t) {
                  return "BigUint64Array" === o(t);
                }),
                (m.working = "undefined" != typeof Map && m(new Map())),
                (e.isMap = function (t) {
                  return (
                    "undefined" != typeof Map &&
                    (m.working ? m(t) : t instanceof Map)
                  );
                }),
                (g.working = "undefined" != typeof Set && g(new Set())),
                (e.isSet = function (t) {
                  return (
                    "undefined" != typeof Set &&
                    (g.working ? g(t) : t instanceof Set)
                  );
                }),
                (v.working = "undefined" != typeof WeakMap && v(new WeakMap())),
                (e.isWeakMap = function (t) {
                  return (
                    "undefined" != typeof WeakMap &&
                    (v.working ? v(t) : t instanceof WeakMap)
                  );
                }),
                (w.working = "undefined" != typeof WeakSet && w(new WeakSet())),
                (e.isWeakSet = function (t) {
                  return w(t);
                }),
                (M.working =
                  "undefined" != typeof ArrayBuffer && M(new ArrayBuffer())),
                (e.isArrayBuffer = _),
                (S.working =
                  "undefined" != typeof ArrayBuffer &&
                  "undefined" != typeof DataView &&
                  S(new DataView(new ArrayBuffer(1), 0, 1))),
                (e.isDataView = A);
              var E =
                "undefined" != typeof SharedArrayBuffer
                  ? SharedArrayBuffer
                  : void 0;
              function x(t) {
                return "[object SharedArrayBuffer]" === h(t);
              }
              function O(t) {
                return (
                  void 0 !== E &&
                  (void 0 === x.working && (x.working = x(new E())),
                  x.working ? x(t) : t instanceof E)
                );
              }
              function k(t) {
                return y(t, c);
              }
              function R(t) {
                return y(t, l);
              }
              function P(t) {
                return y(t, d);
              }
              function j(t) {
                return f && y(t, p);
              }
              function I(t) {
                return u && y(t, b);
              }
              (e.isSharedArrayBuffer = O),
                (e.isAsyncFunction = function (t) {
                  return "[object AsyncFunction]" === h(t);
                }),
                (e.isMapIterator = function (t) {
                  return "[object Map Iterator]" === h(t);
                }),
                (e.isSetIterator = function (t) {
                  return "[object Set Iterator]" === h(t);
                }),
                (e.isGeneratorObject = function (t) {
                  return "[object Generator]" === h(t);
                }),
                (e.isWebAssemblyCompiledModule = function (t) {
                  return "[object WebAssembly.Module]" === h(t);
                }),
                (e.isNumberObject = k),
                (e.isStringObject = R),
                (e.isBooleanObject = P),
                (e.isBigIntObject = j),
                (e.isSymbolObject = I),
                (e.isBoxedPrimitive = function (t) {
                  return k(t) || R(t) || P(t) || j(t) || I(t);
                }),
                (e.isAnyArrayBuffer = function (t) {
                  return "undefined" != typeof Uint8Array && (_(t) || O(t));
                }),
                ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(
                  function (t) {
                    Object.defineProperty(e, t, {
                      enumerable: !1,
                      value: function () {
                        throw Error(t + " is not supported in userland");
                      },
                    });
                  }
                );
            },
            177: function (t, e, r) {
              var i =
                  Object.getOwnPropertyDescriptors ||
                  function (t) {
                    for (
                      var e = Object.keys(t), r = {}, n = 0;
                      n < e.length;
                      n++
                    )
                      r[e[n]] = Object.getOwnPropertyDescriptor(t, e[n]);
                    return r;
                  },
                o = /%[sdj%]/g;
              (e.format = function (t) {
                if (!v(t)) {
                  for (var e = [], r = 0; r < arguments.length; r++)
                    e.push(u(arguments[r]));
                  return e.join(" ");
                }
                for (
                  var r = 1,
                    n = arguments,
                    i = n.length,
                    a = String(t).replace(o, function (t) {
                      if ("%%" === t) return "%";
                      if (r >= i) return t;
                      switch (t) {
                        case "%s":
                          return String(n[r++]);
                        case "%d":
                          return Number(n[r++]);
                        case "%j":
                          try {
                            return JSON.stringify(n[r++]);
                          } catch (t) {
                            return "[Circular]";
                          }
                        default:
                          return t;
                      }
                    }),
                    s = n[r];
                  r < i;
                  s = n[++r]
                )
                  m(s) || !_(s) ? (a += " " + s) : (a += " " + u(s));
                return a;
              }),
                (e.deprecate = function (t, r) {
                  if (void 0 !== n && !0 === n.noDeprecation) return t;
                  if (void 0 === n)
                    return function () {
                      return e.deprecate(t, r).apply(this, arguments);
                    };
                  var i = !1;
                  return function () {
                    if (!i) {
                      if (n.throwDeprecation) throw Error(r);
                      n.traceDeprecation ? console.trace(r) : console.error(r),
                        (i = !0);
                    }
                    return t.apply(this, arguments);
                  };
                });
              var a = {},
                s = /^$/;
              if (n.env.NODE_DEBUG) {
                var f = n.env.NODE_DEBUG;
                s = RegExp(
                  "^" +
                    (f = f
                      .replace(/[|\\{}()[\]^$+?.]/g, "\\$&")
                      .replace(/\*/g, ".*")
                      .replace(/,/g, "$|^")
                      .toUpperCase()) +
                    "$",
                  "i"
                );
              }
              function u(t, r) {
                var n = { seen: [], stylize: c };
                return (
                  arguments.length >= 3 && (n.depth = arguments[2]),
                  arguments.length >= 4 && (n.colors = arguments[3]),
                  y(r) ? (n.showHidden = r) : r && e._extend(n, r),
                  w(n.showHidden) && (n.showHidden = !1),
                  w(n.depth) && (n.depth = 2),
                  w(n.colors) && (n.colors = !1),
                  w(n.customInspect) && (n.customInspect = !0),
                  n.colors && (n.stylize = h),
                  l(n, t, n.depth)
                );
              }
              function h(t, e) {
                var r = u.styles[e];
                return r
                  ? "\x1b[" +
                      u.colors[r][0] +
                      "m" +
                      t +
                      "\x1b[" +
                      u.colors[r][1] +
                      "m"
                  : t;
              }
              function c(t, e) {
                return t;
              }
              function l(t, r, n) {
                if (
                  t.customInspect &&
                  r &&
                  E(r.inspect) &&
                  r.inspect !== e.inspect &&
                  !(r.constructor && r.constructor.prototype === r)
                ) {
                  var i,
                    o,
                    a,
                    s,
                    f,
                    u = r.inspect(n, t);
                  return v(u) || (u = l(t, u, n)), u;
                }
                var h = (function (t, e) {
                  if (w(e)) return t.stylize("undefined", "undefined");
                  if (v(e)) {
                    var r =
                      "'" +
                      JSON.stringify(e)
                        .replace(/^"|"$/g, "")
                        .replace(/'/g, "\\'")
                        .replace(/\\"/g, '"') +
                      "'";
                    return t.stylize(r, "string");
                  }
                  return g(e)
                    ? t.stylize("" + e, "number")
                    : y(e)
                    ? t.stylize("" + e, "boolean")
                    : m(e)
                    ? t.stylize("null", "null")
                    : void 0;
                })(t, r);
                if (h) return h;
                var c = Object.keys(r),
                  _ =
                    ((s = {}),
                    c.forEach(function (t, e) {
                      s[t] = !0;
                    }),
                    s);
                if (
                  (t.showHidden && (c = Object.getOwnPropertyNames(r)),
                  A(r) &&
                    (c.indexOf("message") >= 0 ||
                      c.indexOf("description") >= 0))
                )
                  return d(r);
                if (0 === c.length) {
                  if (E(r)) {
                    var x = r.name ? ": " + r.name : "";
                    return t.stylize("[Function" + x + "]", "special");
                  }
                  if (M(r))
                    return t.stylize(
                      RegExp.prototype.toString.call(r),
                      "regexp"
                    );
                  if (S(r))
                    return t.stylize(Date.prototype.toString.call(r), "date");
                  if (A(r)) return d(r);
                }
                var O = "",
                  k = !1,
                  P = ["{", "}"];
                return (b(r) && ((k = !0), (P = ["[", "]"])),
                E(r) &&
                  (O = " [Function" + (r.name ? ": " + r.name : "") + "]"),
                M(r) && (O = " " + RegExp.prototype.toString.call(r)),
                S(r) && (O = " " + Date.prototype.toUTCString.call(r)),
                A(r) && (O = " " + d(r)),
                0 !== c.length || (k && 0 != r.length))
                  ? n < 0
                    ? M(r)
                      ? t.stylize(RegExp.prototype.toString.call(r), "regexp")
                      : t.stylize("[Object]", "special")
                    : (t.seen.push(r),
                      (f = k
                        ? (function (t, e, r, n, i) {
                            for (var o = [], a = 0, s = e.length; a < s; ++a)
                              R(e, String(a))
                                ? o.push(p(t, e, r, n, String(a), !0))
                                : o.push("");
                            return (
                              i.forEach(function (i) {
                                i.match(/^\d+$/) ||
                                  o.push(p(t, e, r, n, i, !0));
                              }),
                              o
                            );
                          })(t, r, n, _, c)
                        : c.map(function (e) {
                            return p(t, r, n, _, e, k);
                          })),
                      t.seen.pop(),
                      (i = O),
                      (o = P),
                      (a = 0),
                      f.reduce(function (t, e) {
                        return (
                          a++,
                          e.indexOf("\n") >= 0 && a++,
                          t + e.replace(/\u001b\[\d\d?m/g, "").length + 1
                        );
                      }, 0) > 60
                        ? o[0] +
                          ("" === i ? "" : i + "\n ") +
                          " " +
                          f.join(",\n  ") +
                          " " +
                          o[1]
                        : o[0] + i + " " + f.join(", ") + " " + o[1])
                  : P[0] + O + P[1];
              }
              function d(t) {
                return "[" + Error.prototype.toString.call(t) + "]";
              }
              function p(t, e, r, n, i, o) {
                var a, s, f;
                if (
                  ((f = Object.getOwnPropertyDescriptor(e, i) || {
                    value: e[i],
                  }).get
                    ? (s = f.set
                        ? t.stylize("[Getter/Setter]", "special")
                        : t.stylize("[Getter]", "special"))
                    : f.set && (s = t.stylize("[Setter]", "special")),
                  R(n, i) || (a = "[" + i + "]"),
                  !s &&
                    (0 > t.seen.indexOf(f.value)
                      ? (s = m(r)
                          ? l(t, f.value, null)
                          : l(t, f.value, r - 1)).indexOf("\n") > -1 &&
                        (s = o
                          ? s
                              .split("\n")
                              .map(function (t) {
                                return "  " + t;
                              })
                              .join("\n")
                              .substr(2)
                          : "\n" +
                            s
                              .split("\n")
                              .map(function (t) {
                                return "   " + t;
                              })
                              .join("\n"))
                      : (s = t.stylize("[Circular]", "special"))),
                  w(a))
                ) {
                  if (o && i.match(/^\d+$/)) return s;
                  (a = JSON.stringify("" + i)).match(
                    /^"([a-zA-Z_][a-zA-Z_0-9]*)"$/
                  )
                    ? ((a = a.substr(1, a.length - 2)),
                      (a = t.stylize(a, "name")))
                    : ((a = a
                        .replace(/'/g, "\\'")
                        .replace(/\\"/g, '"')
                        .replace(/(^"|"$)/g, "'")),
                      (a = t.stylize(a, "string")));
                }
                return a + ": " + s;
              }
              function b(t) {
                return Array.isArray(t);
              }
              function y(t) {
                return "boolean" == typeof t;
              }
              function m(t) {
                return null === t;
              }
              function g(t) {
                return "number" == typeof t;
              }
              function v(t) {
                return "string" == typeof t;
              }
              function w(t) {
                return void 0 === t;
              }
              function M(t) {
                return _(t) && "[object RegExp]" === x(t);
              }
              function _(t) {
                return "object" == typeof t && null !== t;
              }
              function S(t) {
                return _(t) && "[object Date]" === x(t);
              }
              function A(t) {
                return (
                  _(t) && ("[object Error]" === x(t) || t instanceof Error)
                );
              }
              function E(t) {
                return "function" == typeof t;
              }
              function x(t) {
                return Object.prototype.toString.call(t);
              }
              function O(t) {
                return t < 10 ? "0" + t.toString(10) : t.toString(10);
              }
              (e.debuglog = function (t) {
                if (!a[(t = t.toUpperCase())]) {
                  if (s.test(t)) {
                    var r = n.pid;
                    a[t] = function () {
                      var n = e.format.apply(e, arguments);
                      console.error("%s %d: %s", t, r, n);
                    };
                  } else a[t] = function () {};
                }
                return a[t];
              }),
                (e.inspect = u),
                (u.colors = {
                  bold: [1, 22],
                  italic: [3, 23],
                  underline: [4, 24],
                  inverse: [7, 27],
                  white: [37, 39],
                  grey: [90, 39],
                  black: [30, 39],
                  blue: [34, 39],
                  cyan: [36, 39],
                  green: [32, 39],
                  magenta: [35, 39],
                  red: [31, 39],
                  yellow: [33, 39],
                }),
                (u.styles = {
                  special: "cyan",
                  number: "yellow",
                  boolean: "yellow",
                  undefined: "grey",
                  null: "bold",
                  string: "green",
                  date: "magenta",
                  regexp: "red",
                }),
                (e.types = r(584)),
                (e.isArray = b),
                (e.isBoolean = y),
                (e.isNull = m),
                (e.isNullOrUndefined = function (t) {
                  return null == t;
                }),
                (e.isNumber = g),
                (e.isString = v),
                (e.isSymbol = function (t) {
                  return "symbol" == typeof t;
                }),
                (e.isUndefined = w),
                (e.isRegExp = M),
                (e.types.isRegExp = M),
                (e.isObject = _),
                (e.isDate = S),
                (e.types.isDate = S),
                (e.isError = A),
                (e.types.isNativeError = A),
                (e.isFunction = E),
                (e.isPrimitive = function (t) {
                  return (
                    null === t ||
                    "boolean" == typeof t ||
                    "number" == typeof t ||
                    "string" == typeof t ||
                    "symbol" == typeof t ||
                    void 0 === t
                  );
                }),
                (e.isBuffer = r(369));
              var k = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ];
              function R(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
              }
              (e.log = function () {
                var t, r;
                console.log(
                  "%s - %s",
                  ((r = [
                    O((t = new Date()).getHours()),
                    O(t.getMinutes()),
                    O(t.getSeconds()),
                  ].join(":")),
                  [t.getDate(), k[t.getMonth()], r].join(" ")),
                  e.format.apply(e, arguments)
                );
              }),
                (e.inherits = r(782)),
                (e._extend = function (t, e) {
                  if (!e || !_(e)) return t;
                  for (var r = Object.keys(e), n = r.length; n--; )
                    t[r[n]] = e[r[n]];
                  return t;
                });
              var P =
                "undefined" != typeof Symbol
                  ? Symbol("util.promisify.custom")
                  : void 0;
              function j(t, e) {
                if (!t) {
                  var r = Error("Promise was rejected with a falsy value");
                  (r.reason = t), (t = r);
                }
                return e(t);
              }
              (e.promisify = function (t) {
                if ("function" != typeof t)
                  throw TypeError(
                    'The "original" argument must be of type Function'
                  );
                if (P && t[P]) {
                  var e = t[P];
                  if ("function" != typeof e)
                    throw TypeError(
                      'The "util.promisify.custom" argument must be of type Function'
                    );
                  return (
                    Object.defineProperty(e, P, {
                      value: e,
                      enumerable: !1,
                      writable: !1,
                      configurable: !0,
                    }),
                    e
                  );
                }
                function e() {
                  for (
                    var e,
                      r,
                      n = new Promise(function (t, n) {
                        (e = t), (r = n);
                      }),
                      i = [],
                      o = 0;
                    o < arguments.length;
                    o++
                  )
                    i.push(arguments[o]);
                  i.push(function (t, n) {
                    t ? r(t) : e(n);
                  });
                  try {
                    t.apply(this, i);
                  } catch (t) {
                    r(t);
                  }
                  return n;
                }
                return (
                  Object.setPrototypeOf(e, Object.getPrototypeOf(t)),
                  P &&
                    Object.defineProperty(e, P, {
                      value: e,
                      enumerable: !1,
                      writable: !1,
                      configurable: !0,
                    }),
                  Object.defineProperties(e, i(t))
                );
              }),
                (e.promisify.custom = P),
                (e.callbackify = function (t) {
                  if ("function" != typeof t)
                    throw TypeError(
                      'The "original" argument must be of type Function'
                    );
                  function e() {
                    for (var e = [], r = 0; r < arguments.length; r++)
                      e.push(arguments[r]);
                    var i = e.pop();
                    if ("function" != typeof i)
                      throw TypeError(
                        "The last argument must be of type Function"
                      );
                    var o = this,
                      a = function () {
                        return i.apply(o, arguments);
                      };
                    t.apply(this, e).then(
                      function (t) {
                        n.nextTick(a.bind(null, null, t));
                      },
                      function (t) {
                        n.nextTick(j.bind(null, t, a));
                      }
                    );
                  }
                  return (
                    Object.setPrototypeOf(e, Object.getPrototypeOf(t)),
                    Object.defineProperties(e, i(t)),
                    e
                  );
                });
            },
            490: function (t, e, n) {
              "use strict";
              var i = n(144),
                o = n(349),
                a = n(256),
                s = a("Object.prototype.toString"),
                f = n(942)() && "symbol" == typeof Symbol.toStringTag,
                u = o(),
                h = a("String.prototype.slice"),
                c = {},
                l = n(466),
                d = Object.getPrototypeOf;
              f &&
                l &&
                d &&
                i(u, function (t) {
                  if ("function" == typeof r.g[t]) {
                    var e = new r.g[t]();
                    if (!(Symbol.toStringTag in e))
                      throw EvalError(
                        "this engine has support for Symbol.toStringTag, but " +
                          t +
                          " does not have the property! Please report this."
                      );
                    var n = d(e),
                      i = l(n, Symbol.toStringTag);
                    i || (i = l(d(n), Symbol.toStringTag)), (c[t] = i.get);
                  }
                });
              var p = function (t) {
                  var e = !1;
                  return (
                    i(c, function (r, n) {
                      if (!e)
                        try {
                          var i = r.call(t);
                          i === n && (e = i);
                        } catch (t) {}
                    }),
                    e
                  );
                },
                b = n(994);
              t.exports = function (t) {
                return !!b(t) && (f ? p(t) : h(s(t), 8, -1));
              };
            },
            349: function (t, e, n) {
              "use strict";
              var i = n(992);
              t.exports = function () {
                return i(
                  [
                    "BigInt64Array",
                    "BigUint64Array",
                    "Float32Array",
                    "Float64Array",
                    "Int16Array",
                    "Int32Array",
                    "Int8Array",
                    "Uint16Array",
                    "Uint32Array",
                    "Uint8Array",
                    "Uint8ClampedArray",
                  ],
                  function (t) {
                    return "function" == typeof r.g[t];
                  }
                );
              };
            },
            466: function (t, e, r) {
              "use strict";
              var n = r(500)("%Object.getOwnPropertyDescriptor%", !0);
              if (n)
                try {
                  n([], "length");
                } catch (t) {
                  n = null;
                }
              t.exports = n;
            },
          },
          o = {};
        function a(t) {
          var r = o[t];
          if (void 0 !== r) return r.exports;
          var n = (o[t] = { exports: {} }),
            i = !0;
          try {
            e[t](n, n.exports, a), (i = !1);
          } finally {
            i && delete o[t];
          }
          return n.exports;
        }
        a.ab = "//";
        var s = a(167);
        t.exports = s;
      })();
    },
    9681: function (t, e, r) {
      var n = r(3454);
      !(function () {
        var e = {
            782: function (t) {
              "function" == typeof Object.create
                ? (t.exports = function (t, e) {
                    e &&
                      ((t.super_ = e),
                      (t.prototype = Object.create(e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })));
                  })
                : (t.exports = function (t, e) {
                    if (e) {
                      t.super_ = e;
                      var r = function () {};
                      (r.prototype = e.prototype),
                        (t.prototype = new r()),
                        (t.prototype.constructor = t);
                    }
                  });
            },
            646: function (t) {
              "use strict";
              let e = {};
              function r(t, r, n) {
                n || (n = Error);
                class i extends n {
                  constructor(t, e, n) {
                    super("string" == typeof r ? r : r(t, e, n));
                  }
                }
                (i.prototype.name = n.name), (i.prototype.code = t), (e[t] = i);
              }
              function n(t, e) {
                if (!Array.isArray(t)) return `of ${e} ${String(t)}`;
                {
                  let r = t.length;
                  return ((t = t.map((t) => String(t))), r > 2)
                    ? `one of ${e} ${t.slice(0, r - 1).join(", ")}, or ` +
                        t[r - 1]
                    : 2 === r
                    ? `one of ${e} ${t[0]} or ${t[1]}`
                    : `of ${e} ${t[0]}`;
                }
              }
              r(
                "ERR_INVALID_OPT_VALUE",
                function (t, e) {
                  return (
                    'The value "' + e + '" is invalid for option "' + t + '"'
                  );
                },
                TypeError
              ),
                r(
                  "ERR_INVALID_ARG_TYPE",
                  function (t, e, r) {
                    var i, o, a, s, f;
                    let u, h;
                    if (
                      ("string" == typeof e &&
                      ((i = "not "),
                      e.substr(!o || o < 0 ? 0 : +o, i.length) === i)
                        ? ((u = "must not be"), (e = e.replace(/^not /, "")))
                        : (u = "must be"),
                      (a = " argument"),
                      (void 0 === s || s > t.length) && (s = t.length),
                      t.substring(s - a.length, s) === a)
                    )
                      h = `The ${t} ${u} ${n(e, "type")}`;
                    else {
                      let r = ("number" != typeof f && (f = 0),
                      f + 1 > t.length || -1 === t.indexOf(".", f))
                        ? "argument"
                        : "property";
                      h = `The "${t}" ${r} ${u} ${n(e, "type")}`;
                    }
                    return h + `. Received type ${typeof r}`;
                  },
                  TypeError
                ),
                r("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
                r("ERR_METHOD_NOT_IMPLEMENTED", function (t) {
                  return "The " + t + " method is not implemented";
                }),
                r("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
                r("ERR_STREAM_DESTROYED", function (t) {
                  return "Cannot call " + t + " after a stream was destroyed";
                }),
                r("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
                r("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
                r("ERR_STREAM_WRITE_AFTER_END", "write after end"),
                r(
                  "ERR_STREAM_NULL_VALUES",
                  "May not write null values to stream",
                  TypeError
                ),
                r(
                  "ERR_UNKNOWN_ENCODING",
                  function (t) {
                    return "Unknown encoding: " + t;
                  },
                  TypeError
                ),
                r(
                  "ERR_STREAM_UNSHIFT_AFTER_END_EVENT",
                  "stream.unshift() after end event"
                ),
                (t.exports.q = e);
            },
            403: function (t, e, r) {
              "use strict";
              var i =
                Object.keys ||
                function (t) {
                  var e = [];
                  for (var r in t) e.push(r);
                  return e;
                };
              t.exports = h;
              var o = r(709),
                a = r(337);
              r(782)(h, o);
              for (var s = i(a.prototype), f = 0; f < s.length; f++) {
                var u = s[f];
                h.prototype[u] || (h.prototype[u] = a.prototype[u]);
              }
              function h(t) {
                if (!(this instanceof h)) return new h(t);
                o.call(this, t),
                  a.call(this, t),
                  (this.allowHalfOpen = !0),
                  t &&
                    (!1 === t.readable && (this.readable = !1),
                    !1 === t.writable && (this.writable = !1),
                    !1 === t.allowHalfOpen &&
                      ((this.allowHalfOpen = !1), this.once("end", c)));
              }
              function c() {
                this._writableState.ended || n.nextTick(l, this);
              }
              function l(t) {
                t.end();
              }
              Object.defineProperty(h.prototype, "writableHighWaterMark", {
                enumerable: !1,
                get: function () {
                  return this._writableState.highWaterMark;
                },
              }),
                Object.defineProperty(h.prototype, "writableBuffer", {
                  enumerable: !1,
                  get: function () {
                    return (
                      this._writableState && this._writableState.getBuffer()
                    );
                  },
                }),
                Object.defineProperty(h.prototype, "writableLength", {
                  enumerable: !1,
                  get: function () {
                    return this._writableState.length;
                  },
                }),
                Object.defineProperty(h.prototype, "destroyed", {
                  enumerable: !1,
                  get: function () {
                    return (
                      void 0 !== this._readableState &&
                      void 0 !== this._writableState &&
                      this._readableState.destroyed &&
                      this._writableState.destroyed
                    );
                  },
                  set: function (t) {
                    void 0 !== this._readableState &&
                      void 0 !== this._writableState &&
                      ((this._readableState.destroyed = t),
                      (this._writableState.destroyed = t));
                  },
                });
            },
            889: function (t, e, r) {
              "use strict";
              t.exports = i;
              var n = r(170);
              function i(t) {
                if (!(this instanceof i)) return new i(t);
                n.call(this, t);
              }
              r(782)(i, n),
                (i.prototype._transform = function (t, e, r) {
                  r(null, t);
                });
            },
            709: function (t, e, i) {
              "use strict";
              (t.exports = x), (x.ReadableState = E), i(361).EventEmitter;
              var o,
                a,
                s,
                f,
                u,
                h = function (t, e) {
                  return t.listeners(e).length;
                },
                c = i(678),
                l = i(300).Buffer,
                d = r.g.Uint8Array || function () {},
                p = i(837);
              a = p && p.debuglog ? p.debuglog("stream") : function () {};
              var b = i(379),
                y = i(25),
                m = i(776).getHighWaterMark,
                g = i(646).q,
                v = g.ERR_INVALID_ARG_TYPE,
                w = g.ERR_STREAM_PUSH_AFTER_EOF,
                M = g.ERR_METHOD_NOT_IMPLEMENTED,
                _ = g.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
              i(782)(x, c);
              var S = y.errorOrDestroy,
                A = ["error", "close", "destroy", "pause", "resume"];
              function E(t, e, r) {
                (o = o || i(403)),
                  (t = t || {}),
                  "boolean" != typeof r && (r = e instanceof o),
                  (this.objectMode = !!t.objectMode),
                  r &&
                    (this.objectMode =
                      this.objectMode || !!t.readableObjectMode),
                  (this.highWaterMark = m(this, t, "readableHighWaterMark", r)),
                  (this.buffer = new b()),
                  (this.length = 0),
                  (this.pipes = null),
                  (this.pipesCount = 0),
                  (this.flowing = null),
                  (this.ended = !1),
                  (this.endEmitted = !1),
                  (this.reading = !1),
                  (this.sync = !0),
                  (this.needReadable = !1),
                  (this.emittedReadable = !1),
                  (this.readableListening = !1),
                  (this.resumeScheduled = !1),
                  (this.paused = !0),
                  (this.emitClose = !1 !== t.emitClose),
                  (this.autoDestroy = !!t.autoDestroy),
                  (this.destroyed = !1),
                  (this.defaultEncoding = t.defaultEncoding || "utf8"),
                  (this.awaitDrain = 0),
                  (this.readingMore = !1),
                  (this.decoder = null),
                  (this.encoding = null),
                  t.encoding &&
                    (s || (s = i(704).s),
                    (this.decoder = new s(t.encoding)),
                    (this.encoding = t.encoding));
              }
              function x(t) {
                if (((o = o || i(403)), !(this instanceof x))) return new x(t);
                var e = this instanceof o;
                (this._readableState = new E(t, this, e)),
                  (this.readable = !0),
                  t &&
                    ("function" == typeof t.read && (this._read = t.read),
                    "function" == typeof t.destroy &&
                      (this._destroy = t.destroy)),
                  c.call(this);
              }
              function O(t, e, r, n, i) {
                a("readableAddChunk", e);
                var o,
                  s,
                  f,
                  u,
                  h,
                  c = t._readableState;
                if (null === e)
                  (c.reading = !1),
                    (function (t, e) {
                      if ((a("onEofChunk"), !e.ended)) {
                        if (e.decoder) {
                          var r = e.decoder.end();
                          r &&
                            r.length &&
                            (e.buffer.push(r),
                            (e.length += e.objectMode ? 1 : r.length));
                        }
                        (e.ended = !0),
                          e.sync
                            ? P(t)
                            : ((e.needReadable = !1),
                              e.emittedReadable ||
                                ((e.emittedReadable = !0), j(t)));
                      }
                    })(t, c);
                else {
                  if (
                    (i ||
                      ((o = c),
                      (s = e),
                      l.isBuffer(s) ||
                        s instanceof d ||
                        "string" == typeof s ||
                        void 0 === s ||
                        o.objectMode ||
                        (f = new v(
                          "chunk",
                          ["string", "Buffer", "Uint8Array"],
                          s
                        )),
                      (h = f)),
                    h)
                  )
                    S(t, h);
                  else if (c.objectMode || (e && e.length > 0)) {
                    if (
                      ("string" == typeof e ||
                        c.objectMode ||
                        Object.getPrototypeOf(e) === l.prototype ||
                        ((u = e), (e = l.from(u))),
                      n)
                    )
                      c.endEmitted ? S(t, new _()) : k(t, c, e, !0);
                    else if (c.ended) S(t, new w());
                    else {
                      if (c.destroyed) return !1;
                      (c.reading = !1),
                        c.decoder && !r
                          ? ((e = c.decoder.write(e)),
                            c.objectMode || 0 !== e.length
                              ? k(t, c, e, !1)
                              : I(t, c))
                          : k(t, c, e, !1);
                    }
                  } else n || ((c.reading = !1), I(t, c));
                }
                return (
                  !c.ended && (c.length < c.highWaterMark || 0 === c.length)
                );
              }
              function k(t, e, r, n) {
                e.flowing && 0 === e.length && !e.sync
                  ? ((e.awaitDrain = 0), t.emit("data", r))
                  : ((e.length += e.objectMode ? 1 : r.length),
                    n ? e.buffer.unshift(r) : e.buffer.push(r),
                    e.needReadable && P(t)),
                  I(t, e);
              }
              function R(t, e) {
                if (t <= 0 || (0 === e.length && e.ended)) return 0;
                if (e.objectMode) return 1;
                if (t != t)
                  return e.flowing && e.length
                    ? e.buffer.head.data.length
                    : e.length;
                if (t > e.highWaterMark) {
                  var r;
                  e.highWaterMark =
                    ((r = t) >= 1073741824
                      ? (r = 1073741824)
                      : (r--,
                        (r |= r >>> 1),
                        (r |= r >>> 2),
                        (r |= r >>> 4),
                        (r |= r >>> 8),
                        (r |= r >>> 16),
                        r++),
                    r);
                }
                return t <= e.length
                  ? t
                  : e.ended
                  ? e.length
                  : ((e.needReadable = !0), 0);
              }
              function P(t) {
                var e = t._readableState;
                a("emitReadable", e.needReadable, e.emittedReadable),
                  (e.needReadable = !1),
                  e.emittedReadable ||
                    (a("emitReadable", e.flowing),
                    (e.emittedReadable = !0),
                    n.nextTick(j, t));
              }
              function j(t) {
                var e = t._readableState;
                a("emitReadable_", e.destroyed, e.length, e.ended),
                  !e.destroyed &&
                    (e.length || e.ended) &&
                    (t.emit("readable"), (e.emittedReadable = !1)),
                  (e.needReadable =
                    !e.flowing && !e.ended && e.length <= e.highWaterMark),
                  C(t);
              }
              function I(t, e) {
                e.readingMore || ((e.readingMore = !0), n.nextTick(T, t, e));
              }
              function T(t, e) {
                for (
                  ;
                  !e.reading &&
                  !e.ended &&
                  (e.length < e.highWaterMark || (e.flowing && 0 === e.length));

                ) {
                  var r = e.length;
                  if ((a("maybeReadMore read 0"), t.read(0), r === e.length))
                    break;
                }
                e.readingMore = !1;
              }
              function B(t) {
                var e = t._readableState;
                (e.readableListening = t.listenerCount("readable") > 0),
                  e.resumeScheduled && !e.paused
                    ? (e.flowing = !0)
                    : t.listenerCount("data") > 0 && t.resume();
              }
              function N(t) {
                a("readable nexttick read 0"), t.read(0);
              }
              function L(t, e) {
                a("resume", e.reading),
                  e.reading || t.read(0),
                  (e.resumeScheduled = !1),
                  t.emit("resume"),
                  C(t),
                  e.flowing && !e.reading && t.read(0);
              }
              function C(t) {
                var e = t._readableState;
                for (a("flow", e.flowing); e.flowing && null !== t.read(); );
              }
              function q(t, e) {
                var r;
                return 0 === e.length
                  ? null
                  : (e.objectMode
                      ? (r = e.buffer.shift())
                      : !t || t >= e.length
                      ? ((r = e.decoder
                          ? e.buffer.join("")
                          : 1 === e.buffer.length
                          ? e.buffer.first()
                          : e.buffer.concat(e.length)),
                        e.buffer.clear())
                      : (r = e.buffer.consume(t, e.decoder)),
                    r);
              }
              function U(t) {
                var e = t._readableState;
                a("endReadable", e.endEmitted),
                  e.endEmitted || ((e.ended = !0), n.nextTick(F, e, t));
              }
              function F(t, e) {
                if (
                  (a("endReadableNT", t.endEmitted, t.length),
                  !t.endEmitted &&
                    0 === t.length &&
                    ((t.endEmitted = !0),
                    (e.readable = !1),
                    e.emit("end"),
                    t.autoDestroy))
                ) {
                  var r = e._writableState;
                  (!r || (r.autoDestroy && r.finished)) && e.destroy();
                }
              }
              function D(t, e) {
                for (var r = 0, n = t.length; r < n; r++)
                  if (t[r] === e) return r;
                return -1;
              }
              Object.defineProperty(x.prototype, "destroyed", {
                enumerable: !1,
                get: function () {
                  return (
                    void 0 !== this._readableState &&
                    this._readableState.destroyed
                  );
                },
                set: function (t) {
                  this._readableState && (this._readableState.destroyed = t);
                },
              }),
                (x.prototype.destroy = y.destroy),
                (x.prototype._undestroy = y.undestroy),
                (x.prototype._destroy = function (t, e) {
                  e(t);
                }),
                (x.prototype.push = function (t, e) {
                  var r,
                    n = this._readableState;
                  return (
                    n.objectMode
                      ? (r = !0)
                      : "string" == typeof t &&
                        ((e = e || n.defaultEncoding) !== n.encoding &&
                          ((t = l.from(t, e)), (e = "")),
                        (r = !0)),
                    O(this, t, e, !1, r)
                  );
                }),
                (x.prototype.unshift = function (t) {
                  return O(this, t, null, !0, !1);
                }),
                (x.prototype.isPaused = function () {
                  return !1 === this._readableState.flowing;
                }),
                (x.prototype.setEncoding = function (t) {
                  s || (s = i(704).s);
                  var e = new s(t);
                  (this._readableState.decoder = e),
                    (this._readableState.encoding =
                      this._readableState.decoder.encoding);
                  for (
                    var r = this._readableState.buffer.head, n = "";
                    null !== r;

                  )
                    (n += e.write(r.data)), (r = r.next);
                  return (
                    this._readableState.buffer.clear(),
                    "" !== n && this._readableState.buffer.push(n),
                    (this._readableState.length = n.length),
                    this
                  );
                }),
                (x.prototype.read = function (t) {
                  a("read", t), (t = parseInt(t, 10));
                  var e,
                    r = this._readableState,
                    n = t;
                  if (
                    (0 !== t && (r.emittedReadable = !1),
                    0 === t &&
                      r.needReadable &&
                      ((0 !== r.highWaterMark
                        ? r.length >= r.highWaterMark
                        : r.length > 0) ||
                        r.ended))
                  )
                    return (
                      a("read: emitReadable", r.length, r.ended),
                      0 === r.length && r.ended ? U(this) : P(this),
                      null
                    );
                  if (0 === (t = R(t, r)) && r.ended)
                    return 0 === r.length && U(this), null;
                  var i = r.needReadable;
                  return (
                    a("need readable", i),
                    (0 === r.length || r.length - t < r.highWaterMark) &&
                      a("length less than watermark", (i = !0)),
                    r.ended || r.reading
                      ? a("reading or ended", (i = !1))
                      : i &&
                        (a("do read"),
                        (r.reading = !0),
                        (r.sync = !0),
                        0 === r.length && (r.needReadable = !0),
                        this._read(r.highWaterMark),
                        (r.sync = !1),
                        r.reading || (t = R(n, r))),
                    null === (e = t > 0 ? q(t, r) : null)
                      ? ((r.needReadable = r.length <= r.highWaterMark),
                        (t = 0))
                      : ((r.length -= t), (r.awaitDrain = 0)),
                    0 === r.length &&
                      (r.ended || (r.needReadable = !0),
                      n !== t && r.ended && U(this)),
                    null !== e && this.emit("data", e),
                    e
                  );
                }),
                (x.prototype._read = function (t) {
                  S(this, new M("_read()"));
                }),
                (x.prototype.pipe = function (t, e) {
                  var r = this,
                    i = this._readableState;
                  switch (i.pipesCount) {
                    case 0:
                      i.pipes = t;
                      break;
                    case 1:
                      i.pipes = [i.pipes, t];
                      break;
                    default:
                      i.pipes.push(t);
                  }
                  (i.pipesCount += 1),
                    a("pipe count=%d opts=%j", i.pipesCount, e);
                  var o =
                    (e && !1 === e.end) || t === n.stdout || t === n.stderr
                      ? b
                      : s;
                  function s() {
                    a("onend"), t.end();
                  }
                  i.endEmitted ? n.nextTick(o) : r.once("end", o),
                    t.on("unpipe", function e(n, o) {
                      a("onunpipe"),
                        n === r &&
                          o &&
                          !1 === o.hasUnpiped &&
                          ((o.hasUnpiped = !0),
                          a("cleanup"),
                          t.removeListener("close", d),
                          t.removeListener("finish", p),
                          t.removeListener("drain", f),
                          t.removeListener("error", l),
                          t.removeListener("unpipe", e),
                          r.removeListener("end", s),
                          r.removeListener("end", b),
                          r.removeListener("data", c),
                          (u = !0),
                          i.awaitDrain &&
                            (!t._writableState || t._writableState.needDrain) &&
                            f());
                    });
                  var f = function () {
                    var t = r._readableState;
                    a("pipeOnDrain", t.awaitDrain),
                      t.awaitDrain && t.awaitDrain--,
                      0 === t.awaitDrain &&
                        h(r, "data") &&
                        ((t.flowing = !0), C(r));
                  };
                  t.on("drain", f);
                  var u = !1;
                  function c(e) {
                    a("ondata");
                    var n = t.write(e);
                    a("dest.write", n),
                      !1 === n &&
                        (((1 === i.pipesCount && i.pipes === t) ||
                          (i.pipesCount > 1 && -1 !== D(i.pipes, t))) &&
                          !u &&
                          (a("false write response, pause", i.awaitDrain),
                          i.awaitDrain++),
                        r.pause());
                  }
                  function l(e) {
                    a("onerror", e),
                      b(),
                      t.removeListener("error", l),
                      0 === h(t, "error") && S(t, e);
                  }
                  function d() {
                    t.removeListener("finish", p), b();
                  }
                  function p() {
                    a("onfinish"), t.removeListener("close", d), b();
                  }
                  function b() {
                    a("unpipe"), r.unpipe(t);
                  }
                  return (
                    r.on("data", c),
                    (function (t, e, r) {
                      if ("function" == typeof t.prependListener)
                        return t.prependListener(e, r);
                      t._events && t._events[e]
                        ? Array.isArray(t._events[e])
                          ? t._events[e].unshift(r)
                          : (t._events[e] = [r, t._events[e]])
                        : t.on(e, r);
                    })(t, "error", l),
                    t.once("close", d),
                    t.once("finish", p),
                    t.emit("pipe", r),
                    i.flowing || (a("pipe resume"), r.resume()),
                    t
                  );
                }),
                (x.prototype.unpipe = function (t) {
                  var e = this._readableState,
                    r = { hasUnpiped: !1 };
                  if (0 === e.pipesCount) return this;
                  if (1 === e.pipesCount)
                    return (
                      (t && t !== e.pipes) ||
                        (t || (t = e.pipes),
                        (e.pipes = null),
                        (e.pipesCount = 0),
                        (e.flowing = !1),
                        t && t.emit("unpipe", this, r)),
                      this
                    );
                  if (!t) {
                    var n = e.pipes,
                      i = e.pipesCount;
                    (e.pipes = null), (e.pipesCount = 0), (e.flowing = !1);
                    for (var o = 0; o < i; o++)
                      n[o].emit("unpipe", this, { hasUnpiped: !1 });
                    return this;
                  }
                  var a = D(e.pipes, t);
                  return (
                    -1 === a ||
                      (e.pipes.splice(a, 1),
                      (e.pipesCount -= 1),
                      1 === e.pipesCount && (e.pipes = e.pipes[0]),
                      t.emit("unpipe", this, r)),
                    this
                  );
                }),
                (x.prototype.on = function (t, e) {
                  var r = c.prototype.on.call(this, t, e),
                    i = this._readableState;
                  return (
                    "data" === t
                      ? ((i.readableListening =
                          this.listenerCount("readable") > 0),
                        !1 !== i.flowing && this.resume())
                      : "readable" !== t ||
                        i.endEmitted ||
                        i.readableListening ||
                        ((i.readableListening = i.needReadable = !0),
                        (i.flowing = !1),
                        (i.emittedReadable = !1),
                        a("on readable", i.length, i.reading),
                        i.length ? P(this) : i.reading || n.nextTick(N, this)),
                    r
                  );
                }),
                (x.prototype.addListener = x.prototype.on),
                (x.prototype.removeListener = function (t, e) {
                  var r = c.prototype.removeListener.call(this, t, e);
                  return "readable" === t && n.nextTick(B, this), r;
                }),
                (x.prototype.removeAllListeners = function (t) {
                  var e = c.prototype.removeAllListeners.apply(this, arguments);
                  return (
                    ("readable" === t || void 0 === t) && n.nextTick(B, this), e
                  );
                }),
                (x.prototype.resume = function () {
                  var t,
                    e = this._readableState;
                  return (
                    e.flowing ||
                      (a("resume"),
                      (e.flowing = !e.readableListening),
                      (t = e).resumeScheduled ||
                        ((t.resumeScheduled = !0), n.nextTick(L, this, t))),
                    (e.paused = !1),
                    this
                  );
                }),
                (x.prototype.pause = function () {
                  return (
                    a("call pause flowing=%j", this._readableState.flowing),
                    !1 !== this._readableState.flowing &&
                      (a("pause"),
                      (this._readableState.flowing = !1),
                      this.emit("pause")),
                    (this._readableState.paused = !0),
                    this
                  );
                }),
                (x.prototype.wrap = function (t) {
                  var e = this,
                    r = this._readableState,
                    n = !1;
                  for (var i in (t.on("end", function () {
                    if ((a("wrapped end"), r.decoder && !r.ended)) {
                      var t = r.decoder.end();
                      t && t.length && e.push(t);
                    }
                    e.push(null);
                  }),
                  t.on("data", function (i) {
                    a("wrapped data"),
                      r.decoder && (i = r.decoder.write(i)),
                      (!r.objectMode || null != i) &&
                        (r.objectMode || (i && i.length)) &&
                        (e.push(i) || ((n = !0), t.pause()));
                  }),
                  t))
                    void 0 === this[i] &&
                      "function" == typeof t[i] &&
                      (this[i] = (function (e) {
                        return function () {
                          return t[e].apply(t, arguments);
                        };
                      })(i));
                  for (var o = 0; o < A.length; o++)
                    t.on(A[o], this.emit.bind(this, A[o]));
                  return (
                    (this._read = function (e) {
                      a("wrapped _read", e), n && ((n = !1), t.resume());
                    }),
                    this
                  );
                }),
                "function" == typeof Symbol &&
                  (x.prototype[Symbol.asyncIterator] = function () {
                    return void 0 === f && (f = i(871)), f(this);
                  }),
                Object.defineProperty(x.prototype, "readableHighWaterMark", {
                  enumerable: !1,
                  get: function () {
                    return this._readableState.highWaterMark;
                  },
                }),
                Object.defineProperty(x.prototype, "readableBuffer", {
                  enumerable: !1,
                  get: function () {
                    return this._readableState && this._readableState.buffer;
                  },
                }),
                Object.defineProperty(x.prototype, "readableFlowing", {
                  enumerable: !1,
                  get: function () {
                    return this._readableState.flowing;
                  },
                  set: function (t) {
                    this._readableState && (this._readableState.flowing = t);
                  },
                }),
                (x._fromList = q),
                Object.defineProperty(x.prototype, "readableLength", {
                  enumerable: !1,
                  get: function () {
                    return this._readableState.length;
                  },
                }),
                "function" == typeof Symbol &&
                  (x.from = function (t, e) {
                    return void 0 === u && (u = i(727)), u(x, t, e);
                  });
            },
            170: function (t, e, r) {
              "use strict";
              t.exports = h;
              var n = r(646).q,
                i = n.ERR_METHOD_NOT_IMPLEMENTED,
                o = n.ERR_MULTIPLE_CALLBACK,
                a = n.ERR_TRANSFORM_ALREADY_TRANSFORMING,
                s = n.ERR_TRANSFORM_WITH_LENGTH_0,
                f = r(403);
              function u(t, e) {
                var r = this._transformState;
                r.transforming = !1;
                var n = r.writecb;
                if (null === n) return this.emit("error", new o());
                (r.writechunk = null),
                  (r.writecb = null),
                  null != e && this.push(e),
                  n(t);
                var i = this._readableState;
                (i.reading = !1),
                  (i.needReadable || i.length < i.highWaterMark) &&
                    this._read(i.highWaterMark);
              }
              function h(t) {
                if (!(this instanceof h)) return new h(t);
                f.call(this, t),
                  (this._transformState = {
                    afterTransform: u.bind(this),
                    needTransform: !1,
                    transforming: !1,
                    writecb: null,
                    writechunk: null,
                    writeencoding: null,
                  }),
                  (this._readableState.needReadable = !0),
                  (this._readableState.sync = !1),
                  t &&
                    ("function" == typeof t.transform &&
                      (this._transform = t.transform),
                    "function" == typeof t.flush && (this._flush = t.flush)),
                  this.on("prefinish", c);
              }
              function c() {
                var t = this;
                "function" != typeof this._flush ||
                this._readableState.destroyed
                  ? l(this, null, null)
                  : this._flush(function (e, r) {
                      l(t, e, r);
                    });
              }
              function l(t, e, r) {
                if (e) return t.emit("error", e);
                if ((null != r && t.push(r), t._writableState.length))
                  throw new s();
                if (t._transformState.transforming) throw new a();
                return t.push(null);
              }
              r(782)(h, f),
                (h.prototype.push = function (t, e) {
                  return (
                    (this._transformState.needTransform = !1),
                    f.prototype.push.call(this, t, e)
                  );
                }),
                (h.prototype._transform = function (t, e, r) {
                  r(new i("_transform()"));
                }),
                (h.prototype._write = function (t, e, r) {
                  var n = this._transformState;
                  if (
                    ((n.writecb = r),
                    (n.writechunk = t),
                    (n.writeencoding = e),
                    !n.transforming)
                  ) {
                    var i = this._readableState;
                    (n.needTransform ||
                      i.needReadable ||
                      i.length < i.highWaterMark) &&
                      this._read(i.highWaterMark);
                  }
                }),
                (h.prototype._read = function (t) {
                  var e = this._transformState;
                  null === e.writechunk || e.transforming
                    ? (e.needTransform = !0)
                    : ((e.transforming = !0),
                      this._transform(
                        e.writechunk,
                        e.writeencoding,
                        e.afterTransform
                      ));
                }),
                (h.prototype._destroy = function (t, e) {
                  f.prototype._destroy.call(this, t, function (t) {
                    e(t);
                  });
                });
            },
            337: function (t, e, i) {
              "use strict";
              function o(t) {
                var e = this;
                (this.next = null),
                  (this.entry = null),
                  (this.finish = function () {
                    (function (t, e, r) {
                      var n = t.entry;
                      for (t.entry = null; n; ) {
                        var i = n.callback;
                        e.pendingcb--, i(void 0), (n = n.next);
                      }
                      e.corkedRequestsFree.next = t;
                    })(e, t);
                  });
              }
              (t.exports = x), (x.WritableState = E);
              var a,
                s,
                f = { deprecate: i(769) },
                u = i(678),
                h = i(300).Buffer,
                c = r.g.Uint8Array || function () {},
                l = i(25),
                d = i(776).getHighWaterMark,
                p = i(646).q,
                b = p.ERR_INVALID_ARG_TYPE,
                y = p.ERR_METHOD_NOT_IMPLEMENTED,
                m = p.ERR_MULTIPLE_CALLBACK,
                g = p.ERR_STREAM_CANNOT_PIPE,
                v = p.ERR_STREAM_DESTROYED,
                w = p.ERR_STREAM_NULL_VALUES,
                M = p.ERR_STREAM_WRITE_AFTER_END,
                _ = p.ERR_UNKNOWN_ENCODING,
                S = l.errorOrDestroy;
              function A() {}
              function E(t, e, r) {
                (a = a || i(403)),
                  (t = t || {}),
                  "boolean" != typeof r && (r = e instanceof a),
                  (this.objectMode = !!t.objectMode),
                  r &&
                    (this.objectMode =
                      this.objectMode || !!t.writableObjectMode),
                  (this.highWaterMark = d(this, t, "writableHighWaterMark", r)),
                  (this.finalCalled = !1),
                  (this.needDrain = !1),
                  (this.ending = !1),
                  (this.ended = !1),
                  (this.finished = !1),
                  (this.destroyed = !1);
                var s = !1 === t.decodeStrings;
                (this.decodeStrings = !s),
                  (this.defaultEncoding = t.defaultEncoding || "utf8"),
                  (this.length = 0),
                  (this.writing = !1),
                  (this.corked = 0),
                  (this.sync = !0),
                  (this.bufferProcessing = !1),
                  (this.onwrite = function (t) {
                    (function (t, e) {
                      var r,
                        i,
                        o = t._writableState,
                        a = o.sync,
                        s = o.writecb;
                      if ("function" != typeof s) throw new m();
                      if (
                        (((r = o).writing = !1),
                        (r.writecb = null),
                        (r.length -= r.writelen),
                        (r.writelen = 0),
                        e)
                      )
                        (i = t),
                          --o.pendingcb,
                          a
                            ? (n.nextTick(s, e),
                              n.nextTick(I, i, o),
                              (i._writableState.errorEmitted = !0),
                              S(i, e))
                            : (s(e),
                              (i._writableState.errorEmitted = !0),
                              S(i, e),
                              I(i, o));
                      else {
                        var f = P(o) || t.destroyed;
                        f ||
                          o.corked ||
                          o.bufferProcessing ||
                          !o.bufferedRequest ||
                          R(t, o),
                          a ? n.nextTick(k, t, o, f, s) : k(t, o, f, s);
                      }
                    })(e, t);
                  }),
                  (this.writecb = null),
                  (this.writelen = 0),
                  (this.bufferedRequest = null),
                  (this.lastBufferedRequest = null),
                  (this.pendingcb = 0),
                  (this.prefinished = !1),
                  (this.errorEmitted = !1),
                  (this.emitClose = !1 !== t.emitClose),
                  (this.autoDestroy = !!t.autoDestroy),
                  (this.bufferedRequestCount = 0),
                  (this.corkedRequestsFree = new o(this));
              }
              function x(t) {
                var e = this instanceof (a = a || i(403));
                if (!e && !s.call(x, this)) return new x(t);
                (this._writableState = new E(t, this, e)),
                  (this.writable = !0),
                  t &&
                    ("function" == typeof t.write && (this._write = t.write),
                    "function" == typeof t.writev && (this._writev = t.writev),
                    "function" == typeof t.destroy &&
                      (this._destroy = t.destroy),
                    "function" == typeof t.final && (this._final = t.final)),
                  u.call(this);
              }
              function O(t, e, r, n, i, o, a) {
                (e.writelen = n),
                  (e.writecb = a),
                  (e.writing = !0),
                  (e.sync = !0),
                  e.destroyed
                    ? e.onwrite(new v("write"))
                    : r
                    ? t._writev(i, e.onwrite)
                    : t._write(i, o, e.onwrite),
                  (e.sync = !1);
              }
              function k(t, e, r, n) {
                var i;
                r ||
                  (0 === (i = e).length &&
                    i.needDrain &&
                    ((i.needDrain = !1), t.emit("drain"))),
                  e.pendingcb--,
                  n(),
                  I(t, e);
              }
              function R(t, e) {
                e.bufferProcessing = !0;
                var r = e.bufferedRequest;
                if (t._writev && r && r.next) {
                  var n = Array(e.bufferedRequestCount),
                    i = e.corkedRequestsFree;
                  i.entry = r;
                  for (var a = 0, s = !0; r; )
                    (n[a] = r), r.isBuf || (s = !1), (r = r.next), (a += 1);
                  (n.allBuffers = s),
                    O(t, e, !0, e.length, n, "", i.finish),
                    e.pendingcb++,
                    (e.lastBufferedRequest = null),
                    i.next
                      ? ((e.corkedRequestsFree = i.next), (i.next = null))
                      : (e.corkedRequestsFree = new o(e)),
                    (e.bufferedRequestCount = 0);
                } else {
                  for (; r; ) {
                    var f = r.chunk,
                      u = r.encoding,
                      h = r.callback,
                      c = e.objectMode ? 1 : f.length;
                    if (
                      (O(t, e, !1, c, f, u, h),
                      (r = r.next),
                      e.bufferedRequestCount--,
                      e.writing)
                    )
                      break;
                  }
                  null === r && (e.lastBufferedRequest = null);
                }
                (e.bufferedRequest = r), (e.bufferProcessing = !1);
              }
              function P(t) {
                return (
                  t.ending &&
                  0 === t.length &&
                  null === t.bufferedRequest &&
                  !t.finished &&
                  !t.writing
                );
              }
              function j(t, e) {
                t._final(function (r) {
                  e.pendingcb--,
                    r && S(t, r),
                    (e.prefinished = !0),
                    t.emit("prefinish"),
                    I(t, e);
                });
              }
              function I(t, e) {
                var r,
                  i = P(e);
                if (
                  i &&
                  ((r = e).prefinished ||
                    r.finalCalled ||
                    ("function" != typeof t._final || r.destroyed
                      ? ((r.prefinished = !0), t.emit("prefinish"))
                      : (r.pendingcb++,
                        (r.finalCalled = !0),
                        n.nextTick(j, t, r))),
                  0 === e.pendingcb &&
                    ((e.finished = !0), t.emit("finish"), e.autoDestroy))
                ) {
                  var o = t._readableState;
                  (!o || (o.autoDestroy && o.endEmitted)) && t.destroy();
                }
                return i;
              }
              i(782)(x, u),
                (E.prototype.getBuffer = function () {
                  for (var t = this.bufferedRequest, e = []; t; )
                    e.push(t), (t = t.next);
                  return e;
                }),
                (function () {
                  try {
                    Object.defineProperty(E.prototype, "buffer", {
                      get: f.deprecate(
                        function () {
                          return this.getBuffer();
                        },
                        "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                        "DEP0003"
                      ),
                    });
                  } catch (t) {}
                })(),
                "function" == typeof Symbol &&
                Symbol.hasInstance &&
                "function" == typeof Function.prototype[Symbol.hasInstance]
                  ? ((s = Function.prototype[Symbol.hasInstance]),
                    Object.defineProperty(x, Symbol.hasInstance, {
                      value: function (t) {
                        return (
                          !!s.call(this, t) ||
                          (this === x && t && t._writableState instanceof E)
                        );
                      },
                    }))
                  : (s = function (t) {
                      return t instanceof this;
                    }),
                (x.prototype.pipe = function () {
                  S(this, new g());
                }),
                (x.prototype.write = function (t, e, r) {
                  var i,
                    o,
                    a,
                    s,
                    f,
                    u,
                    l,
                    d = this._writableState,
                    p = !1,
                    y =
                      !d.objectMode &&
                      ((i = t), h.isBuffer(i) || i instanceof c);
                  return (
                    y && !h.isBuffer(t) && ((o = t), (t = h.from(o))),
                    ("function" == typeof e && ((r = e), (e = null)),
                    y ? (e = "buffer") : e || (e = d.defaultEncoding),
                    "function" != typeof r && (r = A),
                    d.ending)
                      ? ((a = r), S(this, (s = new M())), n.nextTick(a, s))
                      : (y ||
                          ((f = t),
                          (u = r),
                          null === f
                            ? (l = new w())
                            : "string" == typeof f ||
                              d.objectMode ||
                              (l = new b("chunk", ["string", "Buffer"], f)),
                          !l || (S(this, l), n.nextTick(u, l), 0))) &&
                        (d.pendingcb++,
                        (p = (function (t, e, r, n, i, o) {
                          if (!r) {
                            var a,
                              s,
                              f =
                                ((a = n),
                                (s = i),
                                e.objectMode ||
                                  !1 === e.decodeStrings ||
                                  "string" != typeof a ||
                                  (a = h.from(a, s)),
                                a);
                            n !== f && ((r = !0), (i = "buffer"), (n = f));
                          }
                          var u = e.objectMode ? 1 : n.length;
                          e.length += u;
                          var c = e.length < e.highWaterMark;
                          if (
                            (c || (e.needDrain = !0), e.writing || e.corked)
                          ) {
                            var l = e.lastBufferedRequest;
                            (e.lastBufferedRequest = {
                              chunk: n,
                              encoding: i,
                              isBuf: r,
                              callback: o,
                              next: null,
                            }),
                              l
                                ? (l.next = e.lastBufferedRequest)
                                : (e.bufferedRequest = e.lastBufferedRequest),
                              (e.bufferedRequestCount += 1);
                          } else O(t, e, !1, u, n, i, o);
                          return c;
                        })(this, d, y, t, e, r))),
                    p
                  );
                }),
                (x.prototype.cork = function () {
                  this._writableState.corked++;
                }),
                (x.prototype.uncork = function () {
                  var t = this._writableState;
                  !t.corked ||
                    (t.corked--,
                    t.writing ||
                      t.corked ||
                      t.bufferProcessing ||
                      !t.bufferedRequest ||
                      R(this, t));
                }),
                (x.prototype.setDefaultEncoding = function (t) {
                  if (
                    ("string" == typeof t && (t = t.toLowerCase()),
                    !(
                      [
                        "hex",
                        "utf8",
                        "utf-8",
                        "ascii",
                        "binary",
                        "base64",
                        "ucs2",
                        "ucs-2",
                        "utf16le",
                        "utf-16le",
                        "raw",
                      ].indexOf((t + "").toLowerCase()) > -1
                    ))
                  )
                    throw new _(t);
                  return (this._writableState.defaultEncoding = t), this;
                }),
                Object.defineProperty(x.prototype, "writableBuffer", {
                  enumerable: !1,
                  get: function () {
                    return (
                      this._writableState && this._writableState.getBuffer()
                    );
                  },
                }),
                Object.defineProperty(x.prototype, "writableHighWaterMark", {
                  enumerable: !1,
                  get: function () {
                    return this._writableState.highWaterMark;
                  },
                }),
                (x.prototype._write = function (t, e, r) {
                  r(new y("_write()"));
                }),
                (x.prototype._writev = null),
                (x.prototype.end = function (t, e, r) {
                  var i,
                    o,
                    a,
                    s = this._writableState;
                  return (
                    "function" == typeof t
                      ? ((r = t), (t = null), (e = null))
                      : "function" == typeof e && ((r = e), (e = null)),
                    null != t && this.write(t, e),
                    s.corked && ((s.corked = 1), this.uncork()),
                    s.ending ||
                      ((i = this),
                      (o = s),
                      (a = r),
                      (o.ending = !0),
                      I(i, o),
                      a && (o.finished ? n.nextTick(a) : i.once("finish", a)),
                      (o.ended = !0),
                      (i.writable = !1)),
                    this
                  );
                }),
                Object.defineProperty(x.prototype, "writableLength", {
                  enumerable: !1,
                  get: function () {
                    return this._writableState.length;
                  },
                }),
                Object.defineProperty(x.prototype, "destroyed", {
                  enumerable: !1,
                  get: function () {
                    return (
                      void 0 !== this._writableState &&
                      this._writableState.destroyed
                    );
                  },
                  set: function (t) {
                    this._writableState && (this._writableState.destroyed = t);
                  },
                }),
                (x.prototype.destroy = l.destroy),
                (x.prototype._undestroy = l.undestroy),
                (x.prototype._destroy = function (t, e) {
                  e(t);
                });
            },
            871: function (t, e, r) {
              "use strict";
              function i(t, e, r) {
                return (
                  e in t
                    ? Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[e] = r),
                  t
                );
              }
              var o,
                a = r(698),
                s = Symbol("lastResolve"),
                f = Symbol("lastReject"),
                u = Symbol("error"),
                h = Symbol("ended"),
                c = Symbol("lastPromise"),
                l = Symbol("handlePromise"),
                d = Symbol("stream");
              function p(t, e) {
                return { value: t, done: e };
              }
              function b(t) {
                var e = t[s];
                if (null !== e) {
                  var r = t[d].read();
                  null !== r &&
                    ((t[c] = null), (t[s] = null), (t[f] = null), e(p(r, !1)));
                }
              }
              function y(t) {
                n.nextTick(b, t);
              }
              var m = Object.getPrototypeOf(function () {}),
                g = Object.setPrototypeOf(
                  (i(
                    (o = {
                      get stream() {
                        return this[d];
                      },
                      next: function () {
                        var t,
                          e,
                          r = this,
                          i = this[u];
                        if (null !== i) return Promise.reject(i);
                        if (this[h]) return Promise.resolve(p(void 0, !0));
                        if (this[d].destroyed)
                          return new Promise(function (t, e) {
                            n.nextTick(function () {
                              r[u] ? e(r[u]) : t(p(void 0, !0));
                            });
                          });
                        var o = this[c];
                        if (o)
                          e = new Promise(
                            ((t = this),
                            function (e, r) {
                              o.then(function () {
                                if (t[h]) {
                                  e(p(void 0, !0));
                                  return;
                                }
                                t[l](e, r);
                              }, r);
                            })
                          );
                        else {
                          var a = this[d].read();
                          if (null !== a) return Promise.resolve(p(a, !1));
                          e = new Promise(this[l]);
                        }
                        return (this[c] = e), e;
                      },
                    }),
                    Symbol.asyncIterator,
                    function () {
                      return this;
                    }
                  ),
                  i(o, "return", function () {
                    var t = this;
                    return new Promise(function (e, r) {
                      t[d].destroy(null, function (t) {
                        if (t) {
                          r(t);
                          return;
                        }
                        e(p(void 0, !0));
                      });
                    });
                  }),
                  o),
                  m
                );
              t.exports = function (t) {
                var e,
                  r = Object.create(
                    g,
                    (i((e = {}), d, { value: t, writable: !0 }),
                    i(e, s, { value: null, writable: !0 }),
                    i(e, f, { value: null, writable: !0 }),
                    i(e, u, { value: null, writable: !0 }),
                    i(e, h, {
                      value: t._readableState.endEmitted,
                      writable: !0,
                    }),
                    i(e, l, {
                      value: function (t, e) {
                        var n = r[d].read();
                        n
                          ? ((r[c] = null),
                            (r[s] = null),
                            (r[f] = null),
                            t(p(n, !1)))
                          : ((r[s] = t), (r[f] = e));
                      },
                      writable: !0,
                    }),
                    e)
                  );
                return (
                  (r[c] = null),
                  a(t, function (t) {
                    if (t && "ERR_STREAM_PREMATURE_CLOSE" !== t.code) {
                      var e = r[f];
                      null !== e &&
                        ((r[c] = null), (r[s] = null), (r[f] = null), e(t)),
                        (r[u] = t);
                      return;
                    }
                    var n = r[s];
                    null !== n &&
                      ((r[c] = null),
                      (r[s] = null),
                      (r[f] = null),
                      n(p(void 0, !0))),
                      (r[h] = !0);
                  }),
                  t.on("readable", y.bind(null, r)),
                  r
                );
              };
            },
            379: function (t, e, r) {
              "use strict";
              function n(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(t);
                  e &&
                    (n = n.filter(function (e) {
                      return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })),
                    r.push.apply(r, n);
                }
                return r;
              }
              function i(t, e) {
                for (var r = 0; r < e.length; r++) {
                  var n = e[r];
                  (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n);
                }
              }
              var o = r(300).Buffer,
                a = r(837).inspect,
                s = (a && a.custom) || "inspect";
              t.exports = (function () {
                var t, e;
                function r() {
                  !(function (t, e) {
                    if (!(t instanceof e))
                      throw TypeError("Cannot call a class as a function");
                  })(this, r),
                    (this.head = null),
                    (this.tail = null),
                    (this.length = 0);
                }
                return (
                  (t = [
                    {
                      key: "push",
                      value: function (t) {
                        var e = { data: t, next: null };
                        this.length > 0
                          ? (this.tail.next = e)
                          : (this.head = e),
                          (this.tail = e),
                          ++this.length;
                      },
                    },
                    {
                      key: "unshift",
                      value: function (t) {
                        var e = { data: t, next: this.head };
                        0 === this.length && (this.tail = e),
                          (this.head = e),
                          ++this.length;
                      },
                    },
                    {
                      key: "shift",
                      value: function () {
                        if (0 !== this.length) {
                          var t = this.head.data;
                          return (
                            1 === this.length
                              ? (this.head = this.tail = null)
                              : (this.head = this.head.next),
                            --this.length,
                            t
                          );
                        }
                      },
                    },
                    {
                      key: "clear",
                      value: function () {
                        (this.head = this.tail = null), (this.length = 0);
                      },
                    },
                    {
                      key: "join",
                      value: function (t) {
                        if (0 === this.length) return "";
                        for (var e = this.head, r = "" + e.data; (e = e.next); )
                          r += t + e.data;
                        return r;
                      },
                    },
                    {
                      key: "concat",
                      value: function (t) {
                        if (0 === this.length) return o.alloc(0);
                        for (
                          var e,
                            r,
                            n = o.allocUnsafe(t >>> 0),
                            i = this.head,
                            a = 0;
                          i;

                        )
                          (e = i.data),
                            (r = a),
                            o.prototype.copy.call(e, n, r),
                            (a += i.data.length),
                            (i = i.next);
                        return n;
                      },
                    },
                    {
                      key: "consume",
                      value: function (t, e) {
                        var r;
                        return (
                          t < this.head.data.length
                            ? ((r = this.head.data.slice(0, t)),
                              (this.head.data = this.head.data.slice(t)))
                            : (r =
                                t === this.head.data.length
                                  ? this.shift()
                                  : e
                                  ? this._getString(t)
                                  : this._getBuffer(t)),
                          r
                        );
                      },
                    },
                    {
                      key: "first",
                      value: function () {
                        return this.head.data;
                      },
                    },
                    {
                      key: "_getString",
                      value: function (t) {
                        var e = this.head,
                          r = 1,
                          n = e.data;
                        for (t -= n.length; (e = e.next); ) {
                          var i = e.data,
                            o = t > i.length ? i.length : t;
                          if (
                            (o === i.length ? (n += i) : (n += i.slice(0, t)),
                            0 == (t -= o))
                          ) {
                            o === i.length
                              ? (++r,
                                e.next
                                  ? (this.head = e.next)
                                  : (this.head = this.tail = null))
                              : ((this.head = e), (e.data = i.slice(o)));
                            break;
                          }
                          ++r;
                        }
                        return (this.length -= r), n;
                      },
                    },
                    {
                      key: "_getBuffer",
                      value: function (t) {
                        var e = o.allocUnsafe(t),
                          r = this.head,
                          n = 1;
                        for (
                          r.data.copy(e), t -= r.data.length;
                          (r = r.next);

                        ) {
                          var i = r.data,
                            a = t > i.length ? i.length : t;
                          if ((i.copy(e, e.length - t, 0, a), 0 == (t -= a))) {
                            a === i.length
                              ? (++n,
                                r.next
                                  ? (this.head = r.next)
                                  : (this.head = this.tail = null))
                              : ((this.head = r), (r.data = i.slice(a)));
                            break;
                          }
                          ++n;
                        }
                        return (this.length -= n), e;
                      },
                    },
                    {
                      key: s,
                      value: function (t, e) {
                        return a(
                          this,
                          (function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                              var r = null != arguments[e] ? arguments[e] : {};
                              e % 2
                                ? n(Object(r), !0).forEach(function (e) {
                                    var n, i;
                                    (n = t),
                                      (i = r[e]),
                                      e in n
                                        ? Object.defineProperty(n, e, {
                                            value: i,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                          })
                                        : (n[e] = i);
                                  })
                                : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(
                                    t,
                                    Object.getOwnPropertyDescriptors(r)
                                  )
                                : n(Object(r)).forEach(function (e) {
                                    Object.defineProperty(
                                      t,
                                      e,
                                      Object.getOwnPropertyDescriptor(r, e)
                                    );
                                  });
                            }
                            return t;
                          })({}, e, { depth: 0, customInspect: !1 })
                        );
                      },
                    },
                  ]),
                  i(r.prototype, t),
                  e && i(r, e),
                  r
                );
              })();
            },
            25: function (t) {
              "use strict";
              function e(t, e) {
                i(t, e), r(t);
              }
              function r(t) {
                (!t._writableState || t._writableState.emitClose) &&
                  (!t._readableState || t._readableState.emitClose) &&
                  t.emit("close");
              }
              function i(t, e) {
                t.emit("error", e);
              }
              t.exports = {
                destroy: function (t, o) {
                  var a = this,
                    s = this._readableState && this._readableState.destroyed,
                    f = this._writableState && this._writableState.destroyed;
                  return s || f
                    ? (o
                        ? o(t)
                        : t &&
                          (this._writableState
                            ? this._writableState.errorEmitted ||
                              ((this._writableState.errorEmitted = !0),
                              n.nextTick(i, this, t))
                            : n.nextTick(i, this, t)),
                      this)
                    : (this._readableState &&
                        (this._readableState.destroyed = !0),
                      this._writableState &&
                        (this._writableState.destroyed = !0),
                      this._destroy(t || null, function (t) {
                        !o && t
                          ? a._writableState
                            ? a._writableState.errorEmitted
                              ? n.nextTick(r, a)
                              : ((a._writableState.errorEmitted = !0),
                                n.nextTick(e, a, t))
                            : n.nextTick(e, a, t)
                          : o
                          ? (n.nextTick(r, a), o(t))
                          : n.nextTick(r, a);
                      }),
                      this);
                },
                undestroy: function () {
                  this._readableState &&
                    ((this._readableState.destroyed = !1),
                    (this._readableState.reading = !1),
                    (this._readableState.ended = !1),
                    (this._readableState.endEmitted = !1)),
                    this._writableState &&
                      ((this._writableState.destroyed = !1),
                      (this._writableState.ended = !1),
                      (this._writableState.ending = !1),
                      (this._writableState.finalCalled = !1),
                      (this._writableState.prefinished = !1),
                      (this._writableState.finished = !1),
                      (this._writableState.errorEmitted = !1));
                },
                errorOrDestroy: function (t, e) {
                  var r = t._readableState,
                    n = t._writableState;
                  (r && r.autoDestroy) || (n && n.autoDestroy)
                    ? t.destroy(e)
                    : t.emit("error", e);
                },
              };
            },
            698: function (t, e, r) {
              "use strict";
              var n = r(646).q.ERR_STREAM_PREMATURE_CLOSE;
              function i() {}
              t.exports = function t(e, r, o) {
                if ("function" == typeof r) return t(e, null, r);
                r || (r = {}),
                  (a = o || i),
                  (s = !1),
                  (o = function () {
                    if (!s) {
                      s = !0;
                      for (
                        var t = arguments.length, e = Array(t), r = 0;
                        r < t;
                        r++
                      )
                        e[r] = arguments[r];
                      a.apply(this, e);
                    }
                  });
                var a,
                  s,
                  f = r.readable || (!1 !== r.readable && e.readable),
                  u = r.writable || (!1 !== r.writable && e.writable),
                  h = function () {
                    e.writable || l();
                  },
                  c = e._writableState && e._writableState.finished,
                  l = function () {
                    (u = !1), (c = !0), f || o.call(e);
                  },
                  d = e._readableState && e._readableState.endEmitted,
                  p = function () {
                    (f = !1), (d = !0), u || o.call(e);
                  },
                  b = function (t) {
                    o.call(e, t);
                  },
                  y = function () {
                    var t;
                    return f && !d
                      ? ((e._readableState && e._readableState.ended) ||
                          (t = new n()),
                        o.call(e, t))
                      : u && !c
                      ? ((e._writableState && e._writableState.ended) ||
                          (t = new n()),
                        o.call(e, t))
                      : void 0;
                  },
                  m = function () {
                    e.req.on("finish", l);
                  };
                return (
                  e.setHeader && "function" == typeof e.abort
                    ? (e.on("complete", l),
                      e.on("abort", y),
                      e.req ? m() : e.on("request", m))
                    : u &&
                      !e._writableState &&
                      (e.on("end", h), e.on("close", h)),
                  e.on("end", p),
                  e.on("finish", l),
                  !1 !== r.error && e.on("error", b),
                  e.on("close", y),
                  function () {
                    e.removeListener("complete", l),
                      e.removeListener("abort", y),
                      e.removeListener("request", m),
                      e.req && e.req.removeListener("finish", l),
                      e.removeListener("end", h),
                      e.removeListener("close", h),
                      e.removeListener("finish", l),
                      e.removeListener("end", p),
                      e.removeListener("error", b),
                      e.removeListener("close", y);
                  }
                );
              };
            },
            727: function (t, e, r) {
              "use strict";
              function n(t, e, r, n, i, o, a) {
                try {
                  var s = t[o](a),
                    f = s.value;
                } catch (t) {
                  r(t);
                  return;
                }
                s.done ? e(f) : Promise.resolve(f).then(n, i);
              }
              function i(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(t);
                  e &&
                    (n = n.filter(function (e) {
                      return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })),
                    r.push.apply(r, n);
                }
                return r;
              }
              var o = r(646).q.ERR_INVALID_ARG_TYPE;
              t.exports = function (t, e, r) {
                if (e && "function" == typeof e.next) a = e;
                else if (e && e[Symbol.asyncIterator])
                  a = e[Symbol.asyncIterator]();
                else if (e && e[Symbol.iterator]) a = e[Symbol.iterator]();
                else throw new o("iterable", ["Iterable"], e);
                var a,
                  s = new t(
                    (function (t) {
                      for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {};
                        e % 2
                          ? i(Object(r), !0).forEach(function (e) {
                              var n, i;
                              (n = t),
                                (i = r[e]),
                                e in n
                                  ? Object.defineProperty(n, e, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                    })
                                  : (n[e] = i);
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              t,
                              Object.getOwnPropertyDescriptors(r)
                            )
                          : i(Object(r)).forEach(function (e) {
                              Object.defineProperty(
                                t,
                                e,
                                Object.getOwnPropertyDescriptor(r, e)
                              );
                            });
                      }
                      return t;
                    })({ objectMode: !0 }, r)
                  ),
                  f = !1;
                function u() {
                  return h.apply(this, arguments);
                }
                function h() {
                  var t;
                  return (
                    (t = function* () {
                      try {
                        var t = yield a.next(),
                          e = t.value;
                        t.done
                          ? s.push(null)
                          : s.push(yield e)
                          ? u()
                          : (f = !1);
                      } catch (t) {
                        s.destroy(t);
                      }
                    }),
                    (h = function () {
                      var e = this,
                        r = arguments;
                      return new Promise(function (i, o) {
                        var a = t.apply(e, r);
                        function s(t) {
                          n(a, i, o, s, f, "next", t);
                        }
                        function f(t) {
                          n(a, i, o, s, f, "throw", t);
                        }
                        s(void 0);
                      });
                    }).apply(this, arguments)
                  );
                }
                return (
                  (s._read = function () {
                    f || ((f = !0), u());
                  }),
                  s
                );
              };
            },
            442: function (t, e, r) {
              "use strict";
              var n,
                i = r(646).q,
                o = i.ERR_MISSING_ARGS,
                a = i.ERR_STREAM_DESTROYED;
              function s(t) {
                if (t) throw t;
              }
              function f(t) {
                t();
              }
              function u(t, e) {
                return t.pipe(e);
              }
              t.exports = function () {
                for (
                  var t, e, i = arguments.length, h = Array(i), c = 0;
                  c < i;
                  c++
                )
                  h[c] = arguments[c];
                var l =
                  (t = h).length && "function" == typeof t[t.length - 1]
                    ? t.pop()
                    : s;
                if ((Array.isArray(h[0]) && (h = h[0]), h.length < 2))
                  throw new o("streams");
                var d = h.map(function (t, i) {
                  var o,
                    s,
                    u,
                    c,
                    p,
                    b = i < h.length - 1;
                  return (
                    (s = o =
                      function (t) {
                        e || (e = t),
                          t && d.forEach(f),
                          b || (d.forEach(f), l(e));
                      }),
                    (u = !1),
                    (o = function () {
                      u || ((u = !0), s.apply(void 0, arguments));
                    }),
                    (c = !1),
                    t.on("close", function () {
                      c = !0;
                    }),
                    void 0 === n && (n = r(698)),
                    n(t, { readable: b, writable: i > 0 }, function (t) {
                      if (t) return o(t);
                      (c = !0), o();
                    }),
                    (p = !1),
                    function (e) {
                      if (!c && !p) {
                        if (
                          ((p = !0),
                          t.setHeader && "function" == typeof t.abort)
                        )
                          return t.abort();
                        if ("function" == typeof t.destroy) return t.destroy();
                        o(e || new a("pipe"));
                      }
                    }
                  );
                });
                return h.reduce(u);
              };
            },
            776: function (t, e, r) {
              "use strict";
              var n = r(646).q.ERR_INVALID_OPT_VALUE;
              t.exports = {
                getHighWaterMark: function (t, e, r, i) {
                  var o =
                    null != e.highWaterMark ? e.highWaterMark : i ? e[r] : null;
                  if (null != o) {
                    if (!(isFinite(o) && Math.floor(o) === o) || o < 0)
                      throw new n(i ? r : "highWaterMark", o);
                    return Math.floor(o);
                  }
                  return t.objectMode ? 16 : 16384;
                },
              };
            },
            678: function (t, e, r) {
              t.exports = r(781);
            },
            55: function (t, e, r) {
              var n = r(300),
                i = n.Buffer;
              function o(t, e) {
                for (var r in t) e[r] = t[r];
              }
              function a(t, e, r) {
                return i(t, e, r);
              }
              i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
                ? (t.exports = n)
                : (o(n, e), (e.Buffer = a)),
                (a.prototype = Object.create(i.prototype)),
                o(i, a),
                (a.from = function (t, e, r) {
                  if ("number" == typeof t)
                    throw TypeError("Argument must not be a number");
                  return i(t, e, r);
                }),
                (a.alloc = function (t, e, r) {
                  if ("number" != typeof t)
                    throw TypeError("Argument must be a number");
                  var n = i(t);
                  return (
                    void 0 !== e
                      ? "string" == typeof r
                        ? n.fill(e, r)
                        : n.fill(e)
                      : n.fill(0),
                    n
                  );
                }),
                (a.allocUnsafe = function (t) {
                  if ("number" != typeof t)
                    throw TypeError("Argument must be a number");
                  return i(t);
                }),
                (a.allocUnsafeSlow = function (t) {
                  if ("number" != typeof t)
                    throw TypeError("Argument must be a number");
                  return n.SlowBuffer(t);
                });
            },
            173: function (t, e, r) {
              t.exports = i;
              var n = r(361).EventEmitter;
              function i() {
                n.call(this);
              }
              r(782)(i, n),
                (i.Readable = r(709)),
                (i.Writable = r(337)),
                (i.Duplex = r(403)),
                (i.Transform = r(170)),
                (i.PassThrough = r(889)),
                (i.finished = r(698)),
                (i.pipeline = r(442)),
                (i.Stream = i),
                (i.prototype.pipe = function (t, e) {
                  var r = this;
                  function i(e) {
                    t.writable && !1 === t.write(e) && r.pause && r.pause();
                  }
                  function o() {
                    r.readable && r.resume && r.resume();
                  }
                  r.on("data", i),
                    t.on("drain", o),
                    t._isStdio ||
                      (e && !1 === e.end) ||
                      (r.on("end", s), r.on("close", f));
                  var a = !1;
                  function s() {
                    a || ((a = !0), t.end());
                  }
                  function f() {
                    a ||
                      ((a = !0), "function" == typeof t.destroy && t.destroy());
                  }
                  function u(t) {
                    if ((h(), 0 === n.listenerCount(this, "error"))) throw t;
                  }
                  function h() {
                    r.removeListener("data", i),
                      t.removeListener("drain", o),
                      r.removeListener("end", s),
                      r.removeListener("close", f),
                      r.removeListener("error", u),
                      t.removeListener("error", u),
                      r.removeListener("end", h),
                      r.removeListener("close", h),
                      t.removeListener("close", h);
                  }
                  return (
                    r.on("error", u),
                    t.on("error", u),
                    r.on("end", h),
                    r.on("close", h),
                    t.on("close", h),
                    t.emit("pipe", r),
                    t
                  );
                });
            },
            704: function (t, e, r) {
              "use strict";
              var n = r(55).Buffer,
                i =
                  n.isEncoding ||
                  function (t) {
                    switch ((t = "" + t) && t.toLowerCase()) {
                      case "hex":
                      case "utf8":
                      case "utf-8":
                      case "ascii":
                      case "binary":
                      case "base64":
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                      case "raw":
                        return !0;
                      default:
                        return !1;
                    }
                  };
              function o(t) {
                var e;
                switch (
                  ((this.encoding = (function (t) {
                    var e = (function (t) {
                      var e;
                      if (!t) return "utf8";
                      for (;;)
                        switch (t) {
                          case "utf8":
                          case "utf-8":
                            return "utf8";
                          case "ucs2":
                          case "ucs-2":
                          case "utf16le":
                          case "utf-16le":
                            return "utf16le";
                          case "latin1":
                          case "binary":
                            return "latin1";
                          case "base64":
                          case "ascii":
                          case "hex":
                            return t;
                          default:
                            if (e) return;
                            (t = ("" + t).toLowerCase()), (e = !0);
                        }
                    })(t);
                    if ("string" != typeof e && (n.isEncoding === i || !i(t)))
                      throw Error("Unknown encoding: " + t);
                    return e || t;
                  })(t)),
                  this.encoding)
                ) {
                  case "utf16le":
                    (this.text = f), (this.end = u), (e = 4);
                    break;
                  case "utf8":
                    (this.fillLast = s), (e = 4);
                    break;
                  case "base64":
                    (this.text = h), (this.end = c), (e = 3);
                    break;
                  default:
                    (this.write = l), (this.end = d);
                    return;
                }
                (this.lastNeed = 0),
                  (this.lastTotal = 0),
                  (this.lastChar = n.allocUnsafe(e));
              }
              function a(t) {
                return t <= 127
                  ? 0
                  : t >> 5 == 6
                  ? 2
                  : t >> 4 == 14
                  ? 3
                  : t >> 3 == 30
                  ? 4
                  : t >> 6 == 2
                  ? -1
                  : -2;
              }
              function s(t) {
                var e = this.lastTotal - this.lastNeed,
                  r = (function (t, e, r) {
                    if ((192 & e[0]) != 128) return (t.lastNeed = 0), "�";
                    if (t.lastNeed > 1 && e.length > 1) {
                      if ((192 & e[1]) != 128) return (t.lastNeed = 1), "�";
                      if (t.lastNeed > 2 && e.length > 2 && (192 & e[2]) != 128)
                        return (t.lastNeed = 2), "�";
                    }
                  })(this, t, 0);
                return void 0 !== r
                  ? r
                  : this.lastNeed <= t.length
                  ? (t.copy(this.lastChar, e, 0, this.lastNeed),
                    this.lastChar.toString(this.encoding, 0, this.lastTotal))
                  : void (t.copy(this.lastChar, e, 0, t.length),
                    (this.lastNeed -= t.length));
              }
              function f(t, e) {
                if ((t.length - e) % 2 == 0) {
                  var r = t.toString("utf16le", e);
                  if (r) {
                    var n = r.charCodeAt(r.length - 1);
                    if (n >= 55296 && n <= 56319)
                      return (
                        (this.lastNeed = 2),
                        (this.lastTotal = 4),
                        (this.lastChar[0] = t[t.length - 2]),
                        (this.lastChar[1] = t[t.length - 1]),
                        r.slice(0, -1)
                      );
                  }
                  return r;
                }
                return (
                  (this.lastNeed = 1),
                  (this.lastTotal = 2),
                  (this.lastChar[0] = t[t.length - 1]),
                  t.toString("utf16le", e, t.length - 1)
                );
              }
              function u(t) {
                var e = t && t.length ? this.write(t) : "";
                if (this.lastNeed) {
                  var r = this.lastTotal - this.lastNeed;
                  return e + this.lastChar.toString("utf16le", 0, r);
                }
                return e;
              }
              function h(t, e) {
                var r = (t.length - e) % 3;
                return 0 === r
                  ? t.toString("base64", e)
                  : ((this.lastNeed = 3 - r),
                    (this.lastTotal = 3),
                    1 === r
                      ? (this.lastChar[0] = t[t.length - 1])
                      : ((this.lastChar[0] = t[t.length - 2]),
                        (this.lastChar[1] = t[t.length - 1])),
                    t.toString("base64", e, t.length - r));
              }
              function c(t) {
                var e = t && t.length ? this.write(t) : "";
                return this.lastNeed
                  ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
                  : e;
              }
              function l(t) {
                return t.toString(this.encoding);
              }
              function d(t) {
                return t && t.length ? this.write(t) : "";
              }
              (e.s = o),
                (o.prototype.write = function (t) {
                  var e, r;
                  if (0 === t.length) return "";
                  if (this.lastNeed) {
                    if (void 0 === (e = this.fillLast(t))) return "";
                    (r = this.lastNeed), (this.lastNeed = 0);
                  } else r = 0;
                  return r < t.length
                    ? e
                      ? e + this.text(t, r)
                      : this.text(t, r)
                    : e || "";
                }),
                (o.prototype.end = function (t) {
                  var e = t && t.length ? this.write(t) : "";
                  return this.lastNeed ? e + "�" : e;
                }),
                (o.prototype.text = function (t, e) {
                  var r = (function (t, e, r) {
                    var n = e.length - 1;
                    if (n < r) return 0;
                    var i = a(e[n]);
                    return i >= 0
                      ? (i > 0 && (t.lastNeed = i - 1), i)
                      : --n < r || -2 === i
                      ? 0
                      : (i = a(e[n])) >= 0
                      ? (i > 0 && (t.lastNeed = i - 2), i)
                      : --n < r || -2 === i
                      ? 0
                      : (i = a(e[n])) >= 0
                      ? (i > 0 && (2 === i ? (i = 0) : (t.lastNeed = i - 3)), i)
                      : 0;
                  })(this, t, e);
                  if (!this.lastNeed) return t.toString("utf8", e);
                  this.lastTotal = r;
                  var n = t.length - (r - this.lastNeed);
                  return t.copy(this.lastChar, 0, n), t.toString("utf8", e, n);
                }),
                (o.prototype.fillLast = function (t) {
                  if (this.lastNeed <= t.length)
                    return (
                      t.copy(
                        this.lastChar,
                        this.lastTotal - this.lastNeed,
                        0,
                        this.lastNeed
                      ),
                      this.lastChar.toString(this.encoding, 0, this.lastTotal)
                    );
                  t.copy(
                    this.lastChar,
                    this.lastTotal - this.lastNeed,
                    0,
                    t.length
                  ),
                    (this.lastNeed -= t.length);
                });
            },
            769: function (t) {
              t.exports = function (t, r) {
                if (e("noDeprecation")) return t;
                var n = !1;
                return function () {
                  if (!n) {
                    if (e("throwDeprecation")) throw Error(r);
                    e("traceDeprecation") ? console.trace(r) : console.warn(r),
                      (n = !0);
                  }
                  return t.apply(this, arguments);
                };
              };
              function e(t) {
                try {
                  if (!r.g.localStorage) return !1;
                } catch (t) {
                  return !1;
                }
                var e = r.g.localStorage[t];
                return null != e && "true" === String(e).toLowerCase();
              }
            },
            300: function (t) {
              "use strict";
              t.exports = r(8764);
            },
            361: function (t) {
              "use strict";
              t.exports = r(7187);
            },
            781: function (t) {
              "use strict";
              t.exports = r(7187).EventEmitter;
            },
            837: function (t) {
              "use strict";
              t.exports = r(9539);
            },
          },
          i = {};
        function o(t) {
          var r = i[t];
          if (void 0 !== r) return r.exports;
          var n = (i[t] = { exports: {} }),
            a = !0;
          try {
            e[t](n, n.exports, o), (a = !1);
          } finally {
            a && delete i[t];
          }
          return n.exports;
        }
        o.ab = "//";
        var a = o(173);
        t.exports = a;
      })();
    },
    5033: function (t, e, r) {
      !(function (t, e) {
        "use strict";
        function n(t, e) {
          if (!t) throw Error(e || "Assertion failed");
        }
        function i(t, e) {
          t.super_ = e;
          var r = function () {};
          (r.prototype = e.prototype),
            (t.prototype = new r()),
            (t.prototype.constructor = t);
        }
        function o(t, e, r) {
          if (o.isBN(t)) return t;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== t &&
              (("le" === e || "be" === e) && ((r = e), (e = 10)),
              this._init(t || 0, e || 10, r || "be"));
        }
        "object" == typeof t ? (t.exports = o) : (e.BN = o),
          (o.BN = o),
          (o.wordSize = 26);
        try {
          f = r(8764).Buffer;
        } catch (t) {}
        function a(t, e, r) {
          for (var n = 0, i = Math.min(t.length, r), o = e; o < i; o++) {
            var a = t.charCodeAt(o) - 48;
            (n <<= 4),
              a >= 49 && a <= 54
                ? (n |= a - 49 + 10)
                : a >= 17 && a <= 22
                ? (n |= a - 17 + 10)
                : (n |= 15 & a);
          }
          return n;
        }
        function s(t, e, r, n) {
          for (var i = 0, o = Math.min(t.length, r), a = e; a < o; a++) {
            var s = t.charCodeAt(a) - 48;
            (i *= n),
              s >= 49
                ? (i += s - 49 + 10)
                : s >= 17
                ? (i += s - 17 + 10)
                : (i += s);
          }
          return i;
        }
        (o.isBN = function (t) {
          return (
            t instanceof o ||
            (null !== t &&
              "object" == typeof t &&
              t.constructor.wordSize === o.wordSize &&
              Array.isArray(t.words))
          );
        }),
          (o.max = function (t, e) {
            return t.cmp(e) > 0 ? t : e;
          }),
          (o.min = function (t, e) {
            return 0 > t.cmp(e) ? t : e;
          }),
          (o.prototype._init = function (t, e, r) {
            if ("number" == typeof t) return this._initNumber(t, e, r);
            if ("object" == typeof t) return this._initArray(t, e, r);
            "hex" === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36);
            var i = 0;
            "-" === (t = t.toString().replace(/\s+/g, ""))[0] && i++,
              16 === e ? this._parseHex(t, i) : this._parseBase(t, e, i),
              "-" === t[0] && (this.negative = 1),
              this.strip(),
              "le" === r && this._initArray(this.toArray(), e, r);
          }),
          (o.prototype._initNumber = function (t, e, r) {
            t < 0 && ((this.negative = 1), (t = -t)),
              t < 67108864
                ? ((this.words = [67108863 & t]), (this.length = 1))
                : t < 4503599627370496
                ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                  (this.length = 2))
                : (n(t < 9007199254740992),
                  (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                  (this.length = 3)),
              "le" === r && this._initArray(this.toArray(), e, r);
          }),
          (o.prototype._initArray = function (t, e, r) {
            if ((n("number" == typeof t.length), t.length <= 0))
              return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(t.length / 3)),
              (this.words = Array(this.length));
            for (var i, o, a = 0; a < this.length; a++) this.words[a] = 0;
            var s = 0;
            if ("be" === r)
              for (a = t.length - 1, i = 0; a >= 0; a -= 3)
                (o = t[a] | (t[a - 1] << 8) | (t[a - 2] << 16)),
                  (this.words[i] |= (o << s) & 67108863),
                  (this.words[i + 1] = (o >>> (26 - s)) & 67108863),
                  (s += 24) >= 26 && ((s -= 26), i++);
            else if ("le" === r)
              for (a = 0, i = 0; a < t.length; a += 3)
                (o = t[a] | (t[a + 1] << 8) | (t[a + 2] << 16)),
                  (this.words[i] |= (o << s) & 67108863),
                  (this.words[i + 1] = (o >>> (26 - s)) & 67108863),
                  (s += 24) >= 26 && ((s -= 26), i++);
            return this.strip();
          }),
          (o.prototype._parseHex = function (t, e) {
            (this.length = Math.ceil((t.length - e) / 6)),
              (this.words = Array(this.length));
            for (var r, n, i = 0; i < this.length; i++) this.words[i] = 0;
            var o = 0;
            for (i = t.length - 6, r = 0; i >= e; i -= 6)
              (n = a(t, i, i + 6)),
                (this.words[r] |= (n << o) & 67108863),
                (this.words[r + 1] |= (n >>> (26 - o)) & 4194303),
                (o += 24) >= 26 && ((o -= 26), r++);
            i + 6 !== e &&
              ((n = a(t, e, i + 6)),
              (this.words[r] |= (n << o) & 67108863),
              (this.words[r + 1] |= (n >>> (26 - o)) & 4194303)),
              this.strip();
          }),
          (o.prototype._parseBase = function (t, e, r) {
            (this.words = [0]), (this.length = 1);
            for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
            n--, (i = (i / e) | 0);
            for (
              var o = t.length - r,
                a = o % n,
                f = Math.min(o, o - a) + r,
                u = 0,
                h = r;
              h < f;
              h += n
            )
              (u = s(t, h, h + n, e)),
                this.imuln(i),
                this.words[0] + u < 67108864
                  ? (this.words[0] += u)
                  : this._iaddn(u);
            if (0 !== a) {
              var c = 1;
              for (u = s(t, h, t.length, e), h = 0; h < a; h++) c *= e;
              this.imuln(c),
                this.words[0] + u < 67108864
                  ? (this.words[0] += u)
                  : this._iaddn(u);
            }
          }),
          (o.prototype.copy = function (t) {
            t.words = Array(this.length);
            for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
            (t.length = this.length),
              (t.negative = this.negative),
              (t.red = this.red);
          }),
          (o.prototype.clone = function () {
            var t = new o(null);
            return this.copy(t), t;
          }),
          (o.prototype._expand = function (t) {
            for (; this.length < t; ) this.words[this.length++] = 0;
            return this;
          }),
          (o.prototype.strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--;
            return this._normSign();
          }),
          (o.prototype._normSign = function () {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            );
          }),
          (o.prototype.inspect = function () {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          });
        var f,
          u = [
            "",
            "0",
            "00",
            "000",
            "0000",
            "00000",
            "000000",
            "0000000",
            "00000000",
            "000000000",
            "0000000000",
            "00000000000",
            "000000000000",
            "0000000000000",
            "00000000000000",
            "000000000000000",
            "0000000000000000",
            "00000000000000000",
            "000000000000000000",
            "0000000000000000000",
            "00000000000000000000",
            "000000000000000000000",
            "0000000000000000000000",
            "00000000000000000000000",
            "000000000000000000000000",
            "0000000000000000000000000",
          ],
          h = [
            0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
          ],
          c = [
            0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
            16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
            11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
            5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
            20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
            60466176,
          ];
        function l(t, e, r) {
          r.negative = e.negative ^ t.negative;
          var n = (t.length + e.length) | 0;
          (r.length = n), (n = (n - 1) | 0);
          var i = 0 | t.words[0],
            o = 0 | e.words[0],
            a = i * o,
            s = 67108863 & a,
            f = (a / 67108864) | 0;
          r.words[0] = s;
          for (var u = 1; u < n; u++) {
            for (
              var h = f >>> 26,
                c = 67108863 & f,
                l = Math.min(u, e.length - 1),
                d = Math.max(0, u - t.length + 1);
              d <= l;
              d++
            ) {
              var p = (u - d) | 0;
              (h +=
                ((a = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + c) /
                  67108864) |
                0),
                (c = 67108863 & a);
            }
            (r.words[u] = 0 | c), (f = 0 | h);
          }
          return 0 !== f ? (r.words[u] = 0 | f) : r.length--, r.strip();
        }
        (o.prototype.toString = function (t, e) {
          if (((e = 0 | e || 1), 16 === (t = t || 10) || "hex" === t)) {
            r = "";
            for (var r, i = 0, o = 0, a = 0; a < this.length; a++) {
              var s = this.words[a],
                f = (((s << i) | o) & 16777215).toString(16);
              (r =
                0 != (o = (s >>> (24 - i)) & 16777215) || a !== this.length - 1
                  ? u[6 - f.length] + f + r
                  : f + r),
                (i += 2) >= 26 && ((i -= 26), a--);
            }
            for (0 !== o && (r = o.toString(16) + r); r.length % e != 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          if (t === (0 | t) && t >= 2 && t <= 36) {
            var l = h[t],
              d = c[t];
            r = "";
            var p = this.clone();
            for (p.negative = 0; !p.isZero(); ) {
              var b = p.modn(d).toString(t);
              r = (p = p.idivn(d)).isZero() ? b + r : u[l - b.length] + b + r;
            }
            for (this.isZero() && (r = "0" + r); r.length % e != 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          n(!1, "Base should be between 2 and 36");
        }),
          (o.prototype.toNumber = function () {
            var t = this.words[0];
            return (
              2 === this.length
                ? (t += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (t += 4503599627370496 + 67108864 * this.words[1])
                : this.length > 2 &&
                  n(!1, "Number can only safely store up to 53 bits"),
              0 !== this.negative ? -t : t
            );
          }),
          (o.prototype.toJSON = function () {
            return this.toString(16);
          }),
          (o.prototype.toBuffer = function (t, e) {
            return n(void 0 !== f), this.toArrayLike(f, t, e);
          }),
          (o.prototype.toArray = function (t, e) {
            return this.toArrayLike(Array, t, e);
          }),
          (o.prototype.toArrayLike = function (t, e, r) {
            var i,
              o,
              a = this.byteLength(),
              s = r || Math.max(1, a);
            n(a <= s, "byte array longer than desired length"),
              n(s > 0, "Requested array length <= 0"),
              this.strip();
            var f = new t(s),
              u = this.clone();
            if ("le" === e) {
              for (o = 0; !u.isZero(); o++)
                (i = u.andln(255)), u.iushrn(8), (f[o] = i);
              for (; o < s; o++) f[o] = 0;
            } else {
              for (o = 0; o < s - a; o++) f[o] = 0;
              for (o = 0; !u.isZero(); o++)
                (i = u.andln(255)), u.iushrn(8), (f[s - o - 1] = i);
            }
            return f;
          }),
          Math.clz32
            ? (o.prototype._countBits = function (t) {
                return 32 - Math.clz32(t);
              })
            : (o.prototype._countBits = function (t) {
                var e = t,
                  r = 0;
                return (
                  e >= 4096 && ((r += 13), (e >>>= 13)),
                  e >= 64 && ((r += 7), (e >>>= 7)),
                  e >= 8 && ((r += 4), (e >>>= 4)),
                  e >= 2 && ((r += 2), (e >>>= 2)),
                  r + e
                );
              }),
          (o.prototype._zeroBits = function (t) {
            if (0 === t) return 26;
            var e = t,
              r = 0;
            return (
              (8191 & e) == 0 && ((r += 13), (e >>>= 13)),
              (127 & e) == 0 && ((r += 7), (e >>>= 7)),
              (15 & e) == 0 && ((r += 4), (e >>>= 4)),
              (3 & e) == 0 && ((r += 2), (e >>>= 2)),
              (1 & e) == 0 && r++,
              r
            );
          }),
          (o.prototype.bitLength = function () {
            var t = this.words[this.length - 1],
              e = this._countBits(t);
            return (this.length - 1) * 26 + e;
          }),
          (o.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var t = 0, e = 0; e < this.length; e++) {
              var r = this._zeroBits(this.words[e]);
              if (((t += r), 26 !== r)) break;
            }
            return t;
          }),
          (o.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }),
          (o.prototype.toTwos = function (t) {
            return 0 !== this.negative
              ? this.abs().inotn(t).iaddn(1)
              : this.clone();
          }),
          (o.prototype.fromTwos = function (t) {
            return this.testn(t - 1)
              ? this.notn(t).iaddn(1).ineg()
              : this.clone();
          }),
          (o.prototype.isNeg = function () {
            return 0 !== this.negative;
          }),
          (o.prototype.neg = function () {
            return this.clone().ineg();
          }),
          (o.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
          }),
          (o.prototype.iuor = function (t) {
            for (; this.length < t.length; ) this.words[this.length++] = 0;
            for (var e = 0; e < t.length; e++)
              this.words[e] = this.words[e] | t.words[e];
            return this.strip();
          }),
          (o.prototype.ior = function (t) {
            return n((this.negative | t.negative) == 0), this.iuor(t);
          }),
          (o.prototype.or = function (t) {
            return this.length > t.length
              ? this.clone().ior(t)
              : t.clone().ior(this);
          }),
          (o.prototype.uor = function (t) {
            return this.length > t.length
              ? this.clone().iuor(t)
              : t.clone().iuor(this);
          }),
          (o.prototype.iuand = function (t) {
            var e;
            e = this.length > t.length ? t : this;
            for (var r = 0; r < e.length; r++)
              this.words[r] = this.words[r] & t.words[r];
            return (this.length = e.length), this.strip();
          }),
          (o.prototype.iand = function (t) {
            return n((this.negative | t.negative) == 0), this.iuand(t);
          }),
          (o.prototype.and = function (t) {
            return this.length > t.length
              ? this.clone().iand(t)
              : t.clone().iand(this);
          }),
          (o.prototype.uand = function (t) {
            return this.length > t.length
              ? this.clone().iuand(t)
              : t.clone().iuand(this);
          }),
          (o.prototype.iuxor = function (t) {
            this.length > t.length
              ? ((e = this), (r = t))
              : ((e = t), (r = this));
            for (var e, r, n = 0; n < r.length; n++)
              this.words[n] = e.words[n] ^ r.words[n];
            if (this !== e)
              for (; n < e.length; n++) this.words[n] = e.words[n];
            return (this.length = e.length), this.strip();
          }),
          (o.prototype.ixor = function (t) {
            return n((this.negative | t.negative) == 0), this.iuxor(t);
          }),
          (o.prototype.xor = function (t) {
            return this.length > t.length
              ? this.clone().ixor(t)
              : t.clone().ixor(this);
          }),
          (o.prototype.uxor = function (t) {
            return this.length > t.length
              ? this.clone().iuxor(t)
              : t.clone().iuxor(this);
          }),
          (o.prototype.inotn = function (t) {
            n("number" == typeof t && t >= 0);
            var e = 0 | Math.ceil(t / 26),
              r = t % 26;
            this._expand(e), r > 0 && e--;
            for (var i = 0; i < e; i++)
              this.words[i] = 67108863 & ~this.words[i];
            return (
              r > 0 &&
                (this.words[i] = ~this.words[i] & (67108863 >> (26 - r))),
              this.strip()
            );
          }),
          (o.prototype.notn = function (t) {
            return this.clone().inotn(t);
          }),
          (o.prototype.setn = function (t, e) {
            n("number" == typeof t && t >= 0);
            var r = (t / 26) | 0,
              i = t % 26;
            return (
              this._expand(r + 1),
              e
                ? (this.words[r] = this.words[r] | (1 << i))
                : (this.words[r] = this.words[r] & ~(1 << i)),
              this.strip()
            );
          }),
          (o.prototype.iadd = function (t) {
            if (0 !== this.negative && 0 === t.negative)
              return (
                (this.negative = 0),
                (e = this.isub(t)),
                (this.negative ^= 1),
                this._normSign()
              );
            if (0 === this.negative && 0 !== t.negative)
              return (
                (t.negative = 0),
                (e = this.isub(t)),
                (t.negative = 1),
                e._normSign()
              );
            this.length > t.length
              ? ((r = this), (n = t))
              : ((r = t), (n = this));
            for (var e, r, n, i = 0, o = 0; o < n.length; o++)
              (e = (0 | r.words[o]) + (0 | n.words[o]) + i),
                (this.words[o] = 67108863 & e),
                (i = e >>> 26);
            for (; 0 !== i && o < r.length; o++)
              (e = (0 | r.words[o]) + i),
                (this.words[o] = 67108863 & e),
                (i = e >>> 26);
            if (((this.length = r.length), 0 !== i))
              (this.words[this.length] = i), this.length++;
            else if (r !== this)
              for (; o < r.length; o++) this.words[o] = r.words[o];
            return this;
          }),
          (o.prototype.add = function (t) {
            var e;
            return 0 !== t.negative && 0 === this.negative
              ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
              : 0 === t.negative && 0 !== this.negative
              ? ((this.negative = 0), (e = t.sub(this)), (this.negative = 1), e)
              : this.length > t.length
              ? this.clone().iadd(t)
              : t.clone().iadd(this);
          }),
          (o.prototype.isub = function (t) {
            if (0 !== t.negative) {
              t.negative = 0;
              var e,
                r,
                n = this.iadd(t);
              return (t.negative = 1), n._normSign();
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(t),
                (this.negative = 1),
                this._normSign()
              );
            var i = this.cmp(t);
            if (0 === i)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              );
            i > 0 ? ((e = this), (r = t)) : ((e = t), (r = this));
            for (var o = 0, a = 0; a < r.length; a++)
              (o = (n = (0 | e.words[a]) - (0 | r.words[a]) + o) >> 26),
                (this.words[a] = 67108863 & n);
            for (; 0 !== o && a < e.length; a++)
              (o = (n = (0 | e.words[a]) + o) >> 26),
                (this.words[a] = 67108863 & n);
            if (0 === o && a < e.length && e !== this)
              for (; a < e.length; a++) this.words[a] = e.words[a];
            return (
              (this.length = Math.max(this.length, a)),
              e !== this && (this.negative = 1),
              this.strip()
            );
          }),
          (o.prototype.sub = function (t) {
            return this.clone().isub(t);
          });
        var d = function (t, e, r) {
          var n,
            i,
            o,
            a = t.words,
            s = e.words,
            f = r.words,
            u = 0,
            h = 0 | a[0],
            c = 8191 & h,
            l = h >>> 13,
            d = 0 | a[1],
            p = 8191 & d,
            b = d >>> 13,
            y = 0 | a[2],
            m = 8191 & y,
            g = y >>> 13,
            v = 0 | a[3],
            w = 8191 & v,
            M = v >>> 13,
            _ = 0 | a[4],
            S = 8191 & _,
            A = _ >>> 13,
            E = 0 | a[5],
            x = 8191 & E,
            O = E >>> 13,
            k = 0 | a[6],
            R = 8191 & k,
            P = k >>> 13,
            j = 0 | a[7],
            I = 8191 & j,
            T = j >>> 13,
            B = 0 | a[8],
            N = 8191 & B,
            L = B >>> 13,
            C = 0 | a[9],
            q = 8191 & C,
            U = C >>> 13,
            F = 0 | s[0],
            D = 8191 & F,
            z = F >>> 13,
            H = 0 | s[1],
            W = 8191 & H,
            K = H >>> 13,
            V = 0 | s[2],
            Z = 8191 & V,
            G = V >>> 13,
            $ = 0 | s[3],
            J = 8191 & $,
            Y = $ >>> 13,
            X = 0 | s[4],
            Q = 8191 & X,
            tt = X >>> 13,
            te = 0 | s[5],
            tr = 8191 & te,
            tn = te >>> 13,
            ti = 0 | s[6],
            to = 8191 & ti,
            ta = ti >>> 13,
            ts = 0 | s[7],
            tf = 8191 & ts,
            tu = ts >>> 13,
            th = 0 | s[8],
            tc = 8191 & th,
            tl = th >>> 13,
            td = 0 | s[9],
            tp = 8191 & td,
            tb = td >>> 13;
          (r.negative = t.negative ^ e.negative), (r.length = 19);
          var ty =
            (((u + (n = Math.imul(c, D))) | 0) +
              ((8191 & (i = ((i = Math.imul(c, z)) + Math.imul(l, D)) | 0)) <<
                13)) |
            0;
          (u = ((((o = Math.imul(l, z)) + (i >>> 13)) | 0) + (ty >>> 26)) | 0),
            (ty &= 67108863),
            (n = Math.imul(p, D)),
            (i = ((i = Math.imul(p, z)) + Math.imul(b, D)) | 0),
            (o = Math.imul(b, z));
          var tm =
            (((u + (n = (n + Math.imul(c, W)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, K)) | 0) + Math.imul(l, W)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(l, K)) | 0) + (i >>> 13)) | 0) +
              (tm >>> 26)) |
            0),
            (tm &= 67108863),
            (n = Math.imul(m, D)),
            (i = ((i = Math.imul(m, z)) + Math.imul(g, D)) | 0),
            (o = Math.imul(g, z)),
            (n = (n + Math.imul(p, W)) | 0),
            (i = ((i = (i + Math.imul(p, K)) | 0) + Math.imul(b, W)) | 0),
            (o = (o + Math.imul(b, K)) | 0);
          var tg =
            (((u + (n = (n + Math.imul(c, Z)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, G)) | 0) + Math.imul(l, Z)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(l, G)) | 0) + (i >>> 13)) | 0) +
              (tg >>> 26)) |
            0),
            (tg &= 67108863),
            (n = Math.imul(w, D)),
            (i = ((i = Math.imul(w, z)) + Math.imul(M, D)) | 0),
            (o = Math.imul(M, z)),
            (n = (n + Math.imul(m, W)) | 0),
            (i = ((i = (i + Math.imul(m, K)) | 0) + Math.imul(g, W)) | 0),
            (o = (o + Math.imul(g, K)) | 0),
            (n = (n + Math.imul(p, Z)) | 0),
            (i = ((i = (i + Math.imul(p, G)) | 0) + Math.imul(b, Z)) | 0),
            (o = (o + Math.imul(b, G)) | 0);
          var tv =
            (((u + (n = (n + Math.imul(c, J)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, Y)) | 0) + Math.imul(l, J)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(l, Y)) | 0) + (i >>> 13)) | 0) +
              (tv >>> 26)) |
            0),
            (tv &= 67108863),
            (n = Math.imul(S, D)),
            (i = ((i = Math.imul(S, z)) + Math.imul(A, D)) | 0),
            (o = Math.imul(A, z)),
            (n = (n + Math.imul(w, W)) | 0),
            (i = ((i = (i + Math.imul(w, K)) | 0) + Math.imul(M, W)) | 0),
            (o = (o + Math.imul(M, K)) | 0),
            (n = (n + Math.imul(m, Z)) | 0),
            (i = ((i = (i + Math.imul(m, G)) | 0) + Math.imul(g, Z)) | 0),
            (o = (o + Math.imul(g, G)) | 0),
            (n = (n + Math.imul(p, J)) | 0),
            (i = ((i = (i + Math.imul(p, Y)) | 0) + Math.imul(b, J)) | 0),
            (o = (o + Math.imul(b, Y)) | 0);
          var tw =
            (((u + (n = (n + Math.imul(c, Q)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, tt)) | 0) + Math.imul(l, Q)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(l, tt)) | 0) + (i >>> 13)) | 0) +
              (tw >>> 26)) |
            0),
            (tw &= 67108863),
            (n = Math.imul(x, D)),
            (i = ((i = Math.imul(x, z)) + Math.imul(O, D)) | 0),
            (o = Math.imul(O, z)),
            (n = (n + Math.imul(S, W)) | 0),
            (i = ((i = (i + Math.imul(S, K)) | 0) + Math.imul(A, W)) | 0),
            (o = (o + Math.imul(A, K)) | 0),
            (n = (n + Math.imul(w, Z)) | 0),
            (i = ((i = (i + Math.imul(w, G)) | 0) + Math.imul(M, Z)) | 0),
            (o = (o + Math.imul(M, G)) | 0),
            (n = (n + Math.imul(m, J)) | 0),
            (i = ((i = (i + Math.imul(m, Y)) | 0) + Math.imul(g, J)) | 0),
            (o = (o + Math.imul(g, Y)) | 0),
            (n = (n + Math.imul(p, Q)) | 0),
            (i = ((i = (i + Math.imul(p, tt)) | 0) + Math.imul(b, Q)) | 0),
            (o = (o + Math.imul(b, tt)) | 0);
          var tM =
            (((u + (n = (n + Math.imul(c, tr)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, tn)) | 0) + Math.imul(l, tr)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(l, tn)) | 0) + (i >>> 13)) | 0) +
              (tM >>> 26)) |
            0),
            (tM &= 67108863),
            (n = Math.imul(R, D)),
            (i = ((i = Math.imul(R, z)) + Math.imul(P, D)) | 0),
            (o = Math.imul(P, z)),
            (n = (n + Math.imul(x, W)) | 0),
            (i = ((i = (i + Math.imul(x, K)) | 0) + Math.imul(O, W)) | 0),
            (o = (o + Math.imul(O, K)) | 0),
            (n = (n + Math.imul(S, Z)) | 0),
            (i = ((i = (i + Math.imul(S, G)) | 0) + Math.imul(A, Z)) | 0),
            (o = (o + Math.imul(A, G)) | 0),
            (n = (n + Math.imul(w, J)) | 0),
            (i = ((i = (i + Math.imul(w, Y)) | 0) + Math.imul(M, J)) | 0),
            (o = (o + Math.imul(M, Y)) | 0),
            (n = (n + Math.imul(m, Q)) | 0),
            (i = ((i = (i + Math.imul(m, tt)) | 0) + Math.imul(g, Q)) | 0),
            (o = (o + Math.imul(g, tt)) | 0),
            (n = (n + Math.imul(p, tr)) | 0),
            (i = ((i = (i + Math.imul(p, tn)) | 0) + Math.imul(b, tr)) | 0),
            (o = (o + Math.imul(b, tn)) | 0);
          var t_ =
            (((u + (n = (n + Math.imul(c, to)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, ta)) | 0) + Math.imul(l, to)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(l, ta)) | 0) + (i >>> 13)) | 0) +
              (t_ >>> 26)) |
            0),
            (t_ &= 67108863),
            (n = Math.imul(I, D)),
            (i = ((i = Math.imul(I, z)) + Math.imul(T, D)) | 0),
            (o = Math.imul(T, z)),
            (n = (n + Math.imul(R, W)) | 0),
            (i = ((i = (i + Math.imul(R, K)) | 0) + Math.imul(P, W)) | 0),
            (o = (o + Math.imul(P, K)) | 0),
            (n = (n + Math.imul(x, Z)) | 0),
            (i = ((i = (i + Math.imul(x, G)) | 0) + Math.imul(O, Z)) | 0),
            (o = (o + Math.imul(O, G)) | 0),
            (n = (n + Math.imul(S, J)) | 0),
            (i = ((i = (i + Math.imul(S, Y)) | 0) + Math.imul(A, J)) | 0),
            (o = (o + Math.imul(A, Y)) | 0),
            (n = (n + Math.imul(w, Q)) | 0),
            (i = ((i = (i + Math.imul(w, tt)) | 0) + Math.imul(M, Q)) | 0),
            (o = (o + Math.imul(M, tt)) | 0),
            (n = (n + Math.imul(m, tr)) | 0),
            (i = ((i = (i + Math.imul(m, tn)) | 0) + Math.imul(g, tr)) | 0),
            (o = (o + Math.imul(g, tn)) | 0),
            (n = (n + Math.imul(p, to)) | 0),
            (i = ((i = (i + Math.imul(p, ta)) | 0) + Math.imul(b, to)) | 0),
            (o = (o + Math.imul(b, ta)) | 0);
          var tS =
            (((u + (n = (n + Math.imul(c, tf)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, tu)) | 0) + Math.imul(l, tf)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(l, tu)) | 0) + (i >>> 13)) | 0) +
              (tS >>> 26)) |
            0),
            (tS &= 67108863),
            (n = Math.imul(N, D)),
            (i = ((i = Math.imul(N, z)) + Math.imul(L, D)) | 0),
            (o = Math.imul(L, z)),
            (n = (n + Math.imul(I, W)) | 0),
            (i = ((i = (i + Math.imul(I, K)) | 0) + Math.imul(T, W)) | 0),
            (o = (o + Math.imul(T, K)) | 0),
            (n = (n + Math.imul(R, Z)) | 0),
            (i = ((i = (i + Math.imul(R, G)) | 0) + Math.imul(P, Z)) | 0),
            (o = (o + Math.imul(P, G)) | 0),
            (n = (n + Math.imul(x, J)) | 0),
            (i = ((i = (i + Math.imul(x, Y)) | 0) + Math.imul(O, J)) | 0),
            (o = (o + Math.imul(O, Y)) | 0),
            (n = (n + Math.imul(S, Q)) | 0),
            (i = ((i = (i + Math.imul(S, tt)) | 0) + Math.imul(A, Q)) | 0),
            (o = (o + Math.imul(A, tt)) | 0),
            (n = (n + Math.imul(w, tr)) | 0),
            (i = ((i = (i + Math.imul(w, tn)) | 0) + Math.imul(M, tr)) | 0),
            (o = (o + Math.imul(M, tn)) | 0),
            (n = (n + Math.imul(m, to)) | 0),
            (i = ((i = (i + Math.imul(m, ta)) | 0) + Math.imul(g, to)) | 0),
            (o = (o + Math.imul(g, ta)) | 0),
            (n = (n + Math.imul(p, tf)) | 0),
            (i = ((i = (i + Math.imul(p, tu)) | 0) + Math.imul(b, tf)) | 0),
            (o = (o + Math.imul(b, tu)) | 0);
          var tA =
            (((u + (n = (n + Math.imul(c, tc)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, tl)) | 0) + Math.imul(l, tc)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(l, tl)) | 0) + (i >>> 13)) | 0) +
              (tA >>> 26)) |
            0),
            (tA &= 67108863),
            (n = Math.imul(q, D)),
            (i = ((i = Math.imul(q, z)) + Math.imul(U, D)) | 0),
            (o = Math.imul(U, z)),
            (n = (n + Math.imul(N, W)) | 0),
            (i = ((i = (i + Math.imul(N, K)) | 0) + Math.imul(L, W)) | 0),
            (o = (o + Math.imul(L, K)) | 0),
            (n = (n + Math.imul(I, Z)) | 0),
            (i = ((i = (i + Math.imul(I, G)) | 0) + Math.imul(T, Z)) | 0),
            (o = (o + Math.imul(T, G)) | 0),
            (n = (n + Math.imul(R, J)) | 0),
            (i = ((i = (i + Math.imul(R, Y)) | 0) + Math.imul(P, J)) | 0),
            (o = (o + Math.imul(P, Y)) | 0),
            (n = (n + Math.imul(x, Q)) | 0),
            (i = ((i = (i + Math.imul(x, tt)) | 0) + Math.imul(O, Q)) | 0),
            (o = (o + Math.imul(O, tt)) | 0),
            (n = (n + Math.imul(S, tr)) | 0),
            (i = ((i = (i + Math.imul(S, tn)) | 0) + Math.imul(A, tr)) | 0),
            (o = (o + Math.imul(A, tn)) | 0),
            (n = (n + Math.imul(w, to)) | 0),
            (i = ((i = (i + Math.imul(w, ta)) | 0) + Math.imul(M, to)) | 0),
            (o = (o + Math.imul(M, ta)) | 0),
            (n = (n + Math.imul(m, tf)) | 0),
            (i = ((i = (i + Math.imul(m, tu)) | 0) + Math.imul(g, tf)) | 0),
            (o = (o + Math.imul(g, tu)) | 0),
            (n = (n + Math.imul(p, tc)) | 0),
            (i = ((i = (i + Math.imul(p, tl)) | 0) + Math.imul(b, tc)) | 0),
            (o = (o + Math.imul(b, tl)) | 0);
          var tE =
            (((u + (n = (n + Math.imul(c, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, tb)) | 0) + Math.imul(l, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(l, tb)) | 0) + (i >>> 13)) | 0) +
              (tE >>> 26)) |
            0),
            (tE &= 67108863),
            (n = Math.imul(q, W)),
            (i = ((i = Math.imul(q, K)) + Math.imul(U, W)) | 0),
            (o = Math.imul(U, K)),
            (n = (n + Math.imul(N, Z)) | 0),
            (i = ((i = (i + Math.imul(N, G)) | 0) + Math.imul(L, Z)) | 0),
            (o = (o + Math.imul(L, G)) | 0),
            (n = (n + Math.imul(I, J)) | 0),
            (i = ((i = (i + Math.imul(I, Y)) | 0) + Math.imul(T, J)) | 0),
            (o = (o + Math.imul(T, Y)) | 0),
            (n = (n + Math.imul(R, Q)) | 0),
            (i = ((i = (i + Math.imul(R, tt)) | 0) + Math.imul(P, Q)) | 0),
            (o = (o + Math.imul(P, tt)) | 0),
            (n = (n + Math.imul(x, tr)) | 0),
            (i = ((i = (i + Math.imul(x, tn)) | 0) + Math.imul(O, tr)) | 0),
            (o = (o + Math.imul(O, tn)) | 0),
            (n = (n + Math.imul(S, to)) | 0),
            (i = ((i = (i + Math.imul(S, ta)) | 0) + Math.imul(A, to)) | 0),
            (o = (o + Math.imul(A, ta)) | 0),
            (n = (n + Math.imul(w, tf)) | 0),
            (i = ((i = (i + Math.imul(w, tu)) | 0) + Math.imul(M, tf)) | 0),
            (o = (o + Math.imul(M, tu)) | 0),
            (n = (n + Math.imul(m, tc)) | 0),
            (i = ((i = (i + Math.imul(m, tl)) | 0) + Math.imul(g, tc)) | 0),
            (o = (o + Math.imul(g, tl)) | 0);
          var tx =
            (((u + (n = (n + Math.imul(p, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(p, tb)) | 0) + Math.imul(b, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(b, tb)) | 0) + (i >>> 13)) | 0) +
              (tx >>> 26)) |
            0),
            (tx &= 67108863),
            (n = Math.imul(q, Z)),
            (i = ((i = Math.imul(q, G)) + Math.imul(U, Z)) | 0),
            (o = Math.imul(U, G)),
            (n = (n + Math.imul(N, J)) | 0),
            (i = ((i = (i + Math.imul(N, Y)) | 0) + Math.imul(L, J)) | 0),
            (o = (o + Math.imul(L, Y)) | 0),
            (n = (n + Math.imul(I, Q)) | 0),
            (i = ((i = (i + Math.imul(I, tt)) | 0) + Math.imul(T, Q)) | 0),
            (o = (o + Math.imul(T, tt)) | 0),
            (n = (n + Math.imul(R, tr)) | 0),
            (i = ((i = (i + Math.imul(R, tn)) | 0) + Math.imul(P, tr)) | 0),
            (o = (o + Math.imul(P, tn)) | 0),
            (n = (n + Math.imul(x, to)) | 0),
            (i = ((i = (i + Math.imul(x, ta)) | 0) + Math.imul(O, to)) | 0),
            (o = (o + Math.imul(O, ta)) | 0),
            (n = (n + Math.imul(S, tf)) | 0),
            (i = ((i = (i + Math.imul(S, tu)) | 0) + Math.imul(A, tf)) | 0),
            (o = (o + Math.imul(A, tu)) | 0),
            (n = (n + Math.imul(w, tc)) | 0),
            (i = ((i = (i + Math.imul(w, tl)) | 0) + Math.imul(M, tc)) | 0),
            (o = (o + Math.imul(M, tl)) | 0);
          var tO =
            (((u + (n = (n + Math.imul(m, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(m, tb)) | 0) + Math.imul(g, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(g, tb)) | 0) + (i >>> 13)) | 0) +
              (tO >>> 26)) |
            0),
            (tO &= 67108863),
            (n = Math.imul(q, J)),
            (i = ((i = Math.imul(q, Y)) + Math.imul(U, J)) | 0),
            (o = Math.imul(U, Y)),
            (n = (n + Math.imul(N, Q)) | 0),
            (i = ((i = (i + Math.imul(N, tt)) | 0) + Math.imul(L, Q)) | 0),
            (o = (o + Math.imul(L, tt)) | 0),
            (n = (n + Math.imul(I, tr)) | 0),
            (i = ((i = (i + Math.imul(I, tn)) | 0) + Math.imul(T, tr)) | 0),
            (o = (o + Math.imul(T, tn)) | 0),
            (n = (n + Math.imul(R, to)) | 0),
            (i = ((i = (i + Math.imul(R, ta)) | 0) + Math.imul(P, to)) | 0),
            (o = (o + Math.imul(P, ta)) | 0),
            (n = (n + Math.imul(x, tf)) | 0),
            (i = ((i = (i + Math.imul(x, tu)) | 0) + Math.imul(O, tf)) | 0),
            (o = (o + Math.imul(O, tu)) | 0),
            (n = (n + Math.imul(S, tc)) | 0),
            (i = ((i = (i + Math.imul(S, tl)) | 0) + Math.imul(A, tc)) | 0),
            (o = (o + Math.imul(A, tl)) | 0);
          var tk =
            (((u + (n = (n + Math.imul(w, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(w, tb)) | 0) + Math.imul(M, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(M, tb)) | 0) + (i >>> 13)) | 0) +
              (tk >>> 26)) |
            0),
            (tk &= 67108863),
            (n = Math.imul(q, Q)),
            (i = ((i = Math.imul(q, tt)) + Math.imul(U, Q)) | 0),
            (o = Math.imul(U, tt)),
            (n = (n + Math.imul(N, tr)) | 0),
            (i = ((i = (i + Math.imul(N, tn)) | 0) + Math.imul(L, tr)) | 0),
            (o = (o + Math.imul(L, tn)) | 0),
            (n = (n + Math.imul(I, to)) | 0),
            (i = ((i = (i + Math.imul(I, ta)) | 0) + Math.imul(T, to)) | 0),
            (o = (o + Math.imul(T, ta)) | 0),
            (n = (n + Math.imul(R, tf)) | 0),
            (i = ((i = (i + Math.imul(R, tu)) | 0) + Math.imul(P, tf)) | 0),
            (o = (o + Math.imul(P, tu)) | 0),
            (n = (n + Math.imul(x, tc)) | 0),
            (i = ((i = (i + Math.imul(x, tl)) | 0) + Math.imul(O, tc)) | 0),
            (o = (o + Math.imul(O, tl)) | 0);
          var tR =
            (((u + (n = (n + Math.imul(S, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(S, tb)) | 0) + Math.imul(A, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(A, tb)) | 0) + (i >>> 13)) | 0) +
              (tR >>> 26)) |
            0),
            (tR &= 67108863),
            (n = Math.imul(q, tr)),
            (i = ((i = Math.imul(q, tn)) + Math.imul(U, tr)) | 0),
            (o = Math.imul(U, tn)),
            (n = (n + Math.imul(N, to)) | 0),
            (i = ((i = (i + Math.imul(N, ta)) | 0) + Math.imul(L, to)) | 0),
            (o = (o + Math.imul(L, ta)) | 0),
            (n = (n + Math.imul(I, tf)) | 0),
            (i = ((i = (i + Math.imul(I, tu)) | 0) + Math.imul(T, tf)) | 0),
            (o = (o + Math.imul(T, tu)) | 0),
            (n = (n + Math.imul(R, tc)) | 0),
            (i = ((i = (i + Math.imul(R, tl)) | 0) + Math.imul(P, tc)) | 0),
            (o = (o + Math.imul(P, tl)) | 0);
          var tP =
            (((u + (n = (n + Math.imul(x, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(x, tb)) | 0) + Math.imul(O, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(O, tb)) | 0) + (i >>> 13)) | 0) +
              (tP >>> 26)) |
            0),
            (tP &= 67108863),
            (n = Math.imul(q, to)),
            (i = ((i = Math.imul(q, ta)) + Math.imul(U, to)) | 0),
            (o = Math.imul(U, ta)),
            (n = (n + Math.imul(N, tf)) | 0),
            (i = ((i = (i + Math.imul(N, tu)) | 0) + Math.imul(L, tf)) | 0),
            (o = (o + Math.imul(L, tu)) | 0),
            (n = (n + Math.imul(I, tc)) | 0),
            (i = ((i = (i + Math.imul(I, tl)) | 0) + Math.imul(T, tc)) | 0),
            (o = (o + Math.imul(T, tl)) | 0);
          var tj =
            (((u + (n = (n + Math.imul(R, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(R, tb)) | 0) + Math.imul(P, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(P, tb)) | 0) + (i >>> 13)) | 0) +
              (tj >>> 26)) |
            0),
            (tj &= 67108863),
            (n = Math.imul(q, tf)),
            (i = ((i = Math.imul(q, tu)) + Math.imul(U, tf)) | 0),
            (o = Math.imul(U, tu)),
            (n = (n + Math.imul(N, tc)) | 0),
            (i = ((i = (i + Math.imul(N, tl)) | 0) + Math.imul(L, tc)) | 0),
            (o = (o + Math.imul(L, tl)) | 0);
          var tI =
            (((u + (n = (n + Math.imul(I, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(I, tb)) | 0) + Math.imul(T, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(T, tb)) | 0) + (i >>> 13)) | 0) +
              (tI >>> 26)) |
            0),
            (tI &= 67108863),
            (n = Math.imul(q, tc)),
            (i = ((i = Math.imul(q, tl)) + Math.imul(U, tc)) | 0),
            (o = Math.imul(U, tl));
          var tT =
            (((u + (n = (n + Math.imul(N, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(N, tb)) | 0) + Math.imul(L, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(L, tb)) | 0) + (i >>> 13)) | 0) +
              (tT >>> 26)) |
            0),
            (tT &= 67108863);
          var tB =
            (((u + (n = Math.imul(q, tp))) | 0) +
              ((8191 & (i = ((i = Math.imul(q, tb)) + Math.imul(U, tp)) | 0)) <<
                13)) |
            0;
          return (
            (u =
              ((((o = Math.imul(U, tb)) + (i >>> 13)) | 0) + (tB >>> 26)) | 0),
            (tB &= 67108863),
            (f[0] = ty),
            (f[1] = tm),
            (f[2] = tg),
            (f[3] = tv),
            (f[4] = tw),
            (f[5] = tM),
            (f[6] = t_),
            (f[7] = tS),
            (f[8] = tA),
            (f[9] = tE),
            (f[10] = tx),
            (f[11] = tO),
            (f[12] = tk),
            (f[13] = tR),
            (f[14] = tP),
            (f[15] = tj),
            (f[16] = tI),
            (f[17] = tT),
            (f[18] = tB),
            0 !== u && ((f[19] = u), r.length++),
            r
          );
        };
        function p(t, e, r) {
          return new b().mulp(t, e, r);
        }
        function b(t, e) {
          (this.x = t), (this.y = e);
        }
        Math.imul || (d = l),
          (o.prototype.mulTo = function (t, e) {
            var r = this.length + t.length;
            return 10 === this.length && 10 === t.length
              ? d(this, t, e)
              : r < 63
              ? l(this, t, e)
              : r < 1024
              ? (function (t, e, r) {
                  (r.negative = e.negative ^ t.negative),
                    (r.length = t.length + e.length);
                  for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
                    var a = i;
                    i = 0;
                    for (
                      var s = 67108863 & n,
                        f = Math.min(o, e.length - 1),
                        u = Math.max(0, o - t.length + 1);
                      u <= f;
                      u++
                    ) {
                      var h = o - u,
                        c = (0 | t.words[h]) * (0 | e.words[u]),
                        l = 67108863 & c;
                      (a = (a + ((c / 67108864) | 0)) | 0),
                        (s = 67108863 & (l = (l + s) | 0)),
                        (i += (a = (a + (l >>> 26)) | 0) >>> 26),
                        (a &= 67108863);
                    }
                    (r.words[o] = s), (n = a), (a = i);
                  }
                  return 0 !== n ? (r.words[o] = n) : r.length--, r.strip();
                })(this, t, e)
              : p(this, t, e);
          }),
          (b.prototype.makeRBT = function (t) {
            for (
              var e = Array(t), r = o.prototype._countBits(t) - 1, n = 0;
              n < t;
              n++
            )
              e[n] = this.revBin(n, r, t);
            return e;
          }),
          (b.prototype.revBin = function (t, e, r) {
            if (0 === t || t === r - 1) return t;
            for (var n = 0, i = 0; i < e; i++)
              (n |= (1 & t) << (e - i - 1)), (t >>= 1);
            return n;
          }),
          (b.prototype.permute = function (t, e, r, n, i, o) {
            for (var a = 0; a < o; a++) (n[a] = e[t[a]]), (i[a] = r[t[a]]);
          }),
          (b.prototype.transform = function (t, e, r, n, i, o) {
            this.permute(o, t, e, r, n, i);
            for (var a = 1; a < i; a <<= 1)
              for (
                var s = a << 1,
                  f = Math.cos((2 * Math.PI) / s),
                  u = Math.sin((2 * Math.PI) / s),
                  h = 0;
                h < i;
                h += s
              )
                for (var c = f, l = u, d = 0; d < a; d++) {
                  var p = r[h + d],
                    b = n[h + d],
                    y = r[h + d + a],
                    m = n[h + d + a],
                    g = c * y - l * m;
                  (m = c * m + l * y),
                    (y = g),
                    (r[h + d] = p + y),
                    (n[h + d] = b + m),
                    (r[h + d + a] = p - y),
                    (n[h + d + a] = b - m),
                    d !== s &&
                      ((g = f * c - u * l), (l = f * l + u * c), (c = g));
                }
          }),
          (b.prototype.guessLen13b = function (t, e) {
            var r = 1 | Math.max(e, t),
              n = 1 & r,
              i = 0;
            for (r = (r / 2) | 0; r; r >>>= 1) i++;
            return 1 << (i + 1 + n);
          }),
          (b.prototype.conjugate = function (t, e, r) {
            if (!(r <= 1))
              for (var n = 0; n < r / 2; n++) {
                var i = t[n];
                (t[n] = t[r - n - 1]),
                  (t[r - n - 1] = i),
                  (i = e[n]),
                  (e[n] = -e[r - n - 1]),
                  (e[r - n - 1] = -i);
              }
          }),
          (b.prototype.normalize13b = function (t, e) {
            for (var r = 0, n = 0; n < e / 2; n++) {
              var i =
                8192 * Math.round(t[2 * n + 1] / e) +
                Math.round(t[2 * n] / e) +
                r;
              (t[n] = 67108863 & i),
                (r = i < 67108864 ? 0 : (i / 67108864) | 0);
            }
            return t;
          }),
          (b.prototype.convert13b = function (t, e, r, i) {
            for (var o = 0, a = 0; a < e; a++)
              (o += 0 | t[a]),
                (r[2 * a] = 8191 & o),
                (o >>>= 13),
                (r[2 * a + 1] = 8191 & o),
                (o >>>= 13);
            for (a = 2 * e; a < i; ++a) r[a] = 0;
            n(0 === o), n((-8192 & o) == 0);
          }),
          (b.prototype.stub = function (t) {
            for (var e = Array(t), r = 0; r < t; r++) e[r] = 0;
            return e;
          }),
          (b.prototype.mulp = function (t, e, r) {
            var n = 2 * this.guessLen13b(t.length, e.length),
              i = this.makeRBT(n),
              o = this.stub(n),
              a = Array(n),
              s = Array(n),
              f = Array(n),
              u = Array(n),
              h = Array(n),
              c = Array(n),
              l = r.words;
            (l.length = n),
              this.convert13b(t.words, t.length, a, n),
              this.convert13b(e.words, e.length, u, n),
              this.transform(a, o, s, f, n, i),
              this.transform(u, o, h, c, n, i);
            for (var d = 0; d < n; d++) {
              var p = s[d] * h[d] - f[d] * c[d];
              (f[d] = s[d] * c[d] + f[d] * h[d]), (s[d] = p);
            }
            return (
              this.conjugate(s, f, n),
              this.transform(s, f, l, o, n, i),
              this.conjugate(l, o, n),
              this.normalize13b(l, n),
              (r.negative = t.negative ^ e.negative),
              (r.length = t.length + e.length),
              r.strip()
            );
          }),
          (o.prototype.mul = function (t) {
            var e = new o(null);
            return (e.words = Array(this.length + t.length)), this.mulTo(t, e);
          }),
          (o.prototype.mulf = function (t) {
            var e = new o(null);
            return (e.words = Array(this.length + t.length)), p(this, t, e);
          }),
          (o.prototype.imul = function (t) {
            return this.clone().mulTo(t, this);
          }),
          (o.prototype.imuln = function (t) {
            n("number" == typeof t), n(t < 67108864);
            for (var e = 0, r = 0; r < this.length; r++) {
              var i = (0 | this.words[r]) * t,
                o = (67108863 & i) + (67108863 & e);
              (e >>= 26),
                (e += ((i / 67108864) | 0) + (o >>> 26)),
                (this.words[r] = 67108863 & o);
            }
            return 0 !== e && ((this.words[r] = e), this.length++), this;
          }),
          (o.prototype.muln = function (t) {
            return this.clone().imuln(t);
          }),
          (o.prototype.sqr = function () {
            return this.mul(this);
          }),
          (o.prototype.isqr = function () {
            return this.imul(this.clone());
          }),
          (o.prototype.pow = function (t) {
            var e = (function (t) {
              for (var e = Array(t.bitLength()), r = 0; r < e.length; r++) {
                var n = (r / 26) | 0,
                  i = r % 26;
                e[r] = (t.words[n] & (1 << i)) >>> i;
              }
              return e;
            })(t);
            if (0 === e.length) return new o(1);
            for (
              var r = this, n = 0;
              n < e.length && 0 === e[n];
              n++, r = r.sqr()
            );
            if (++n < e.length)
              for (var i = r.sqr(); n < e.length; n++, i = i.sqr())
                0 !== e[n] && (r = r.mul(i));
            return r;
          }),
          (o.prototype.iushln = function (t) {
            n("number" == typeof t && t >= 0);
            var e,
              r = t % 26,
              i = (t - r) / 26,
              o = (67108863 >>> (26 - r)) << (26 - r);
            if (0 !== r) {
              var a = 0;
              for (e = 0; e < this.length; e++) {
                var s = this.words[e] & o,
                  f = ((0 | this.words[e]) - s) << r;
                (this.words[e] = f | a), (a = s >>> (26 - r));
              }
              a && ((this.words[e] = a), this.length++);
            }
            if (0 !== i) {
              for (e = this.length - 1; e >= 0; e--)
                this.words[e + i] = this.words[e];
              for (e = 0; e < i; e++) this.words[e] = 0;
              this.length += i;
            }
            return this.strip();
          }),
          (o.prototype.ishln = function (t) {
            return n(0 === this.negative), this.iushln(t);
          }),
          (o.prototype.iushrn = function (t, e, r) {
            n("number" == typeof t && t >= 0),
              (i = e ? (e - (e % 26)) / 26 : 0);
            var i,
              o = t % 26,
              a = Math.min((t - o) / 26, this.length),
              s = 67108863 ^ ((67108863 >>> o) << o),
              f = r;
            if (((i -= a), (i = Math.max(0, i)), f)) {
              for (var u = 0; u < a; u++) f.words[u] = this.words[u];
              f.length = a;
            }
            if (0 === a);
            else if (this.length > a)
              for (this.length -= a, u = 0; u < this.length; u++)
                this.words[u] = this.words[u + a];
            else (this.words[0] = 0), (this.length = 1);
            var h = 0;
            for (u = this.length - 1; u >= 0 && (0 !== h || u >= i); u--) {
              var c = 0 | this.words[u];
              (this.words[u] = (h << (26 - o)) | (c >>> o)), (h = c & s);
            }
            return (
              f && 0 !== h && (f.words[f.length++] = h),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this.strip()
            );
          }),
          (o.prototype.ishrn = function (t, e, r) {
            return n(0 === this.negative), this.iushrn(t, e, r);
          }),
          (o.prototype.shln = function (t) {
            return this.clone().ishln(t);
          }),
          (o.prototype.ushln = function (t) {
            return this.clone().iushln(t);
          }),
          (o.prototype.shrn = function (t) {
            return this.clone().ishrn(t);
          }),
          (o.prototype.ushrn = function (t) {
            return this.clone().iushrn(t);
          }),
          (o.prototype.testn = function (t) {
            n("number" == typeof t && t >= 0);
            var e = t % 26,
              r = (t - e) / 26;
            return !(this.length <= r) && !!(this.words[r] & (1 << e));
          }),
          (o.prototype.imaskn = function (t) {
            n("number" == typeof t && t >= 0);
            var e = t % 26,
              r = (t - e) / 26;
            return (n(
              0 === this.negative,
              "imaskn works only with positive numbers"
            ),
            this.length <= r)
              ? this
              : (0 !== e && r++,
                (this.length = Math.min(r, this.length)),
                0 !== e &&
                  (this.words[this.length - 1] &=
                    67108863 ^ ((67108863 >>> e) << e)),
                this.strip());
          }),
          (o.prototype.maskn = function (t) {
            return this.clone().imaskn(t);
          }),
          (o.prototype.iaddn = function (t) {
            return (n("number" == typeof t), n(t < 67108864), t < 0)
              ? this.isubn(-t)
              : 0 !== this.negative
              ? 1 === this.length && (0 | this.words[0]) < t
                ? ((this.words[0] = t - (0 | this.words[0])),
                  (this.negative = 0),
                  this)
                : ((this.negative = 0),
                  this.isubn(t),
                  (this.negative = 1),
                  this)
              : this._iaddn(t);
          }),
          (o.prototype._iaddn = function (t) {
            this.words[0] += t;
            for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
              (this.words[e] -= 67108864),
                e === this.length - 1
                  ? (this.words[e + 1] = 1)
                  : this.words[e + 1]++;
            return (this.length = Math.max(this.length, e + 1)), this;
          }),
          (o.prototype.isubn = function (t) {
            if ((n("number" == typeof t), n(t < 67108864), t < 0))
              return this.iaddn(-t);
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(t), (this.negative = 1), this
              );
            if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var e = 0; e < this.length && this.words[e] < 0; e++)
                (this.words[e] += 67108864), (this.words[e + 1] -= 1);
            return this.strip();
          }),
          (o.prototype.addn = function (t) {
            return this.clone().iaddn(t);
          }),
          (o.prototype.subn = function (t) {
            return this.clone().isubn(t);
          }),
          (o.prototype.iabs = function () {
            return (this.negative = 0), this;
          }),
          (o.prototype.abs = function () {
            return this.clone().iabs();
          }),
          (o.prototype._ishlnsubmul = function (t, e, r) {
            var i,
              o,
              a = t.length + r;
            this._expand(a);
            var s = 0;
            for (i = 0; i < t.length; i++) {
              o = (0 | this.words[i + r]) + s;
              var f = (0 | t.words[i]) * e;
              (o -= 67108863 & f),
                (s = (o >> 26) - ((f / 67108864) | 0)),
                (this.words[i + r] = 67108863 & o);
            }
            for (; i < this.length - r; i++)
              (s = (o = (0 | this.words[i + r]) + s) >> 26),
                (this.words[i + r] = 67108863 & o);
            if (0 === s) return this.strip();
            for (n(-1 === s), s = 0, i = 0; i < this.length; i++)
              (s = (o = -(0 | this.words[i]) + s) >> 26),
                (this.words[i] = 67108863 & o);
            return (this.negative = 1), this.strip();
          }),
          (o.prototype._wordDiv = function (t, e) {
            var r,
              n = this.length - t.length,
              i = this.clone(),
              a = t,
              s = 0 | a.words[a.length - 1];
            0 != (n = 26 - this._countBits(s)) &&
              ((a = a.ushln(n)), i.iushln(n), (s = 0 | a.words[a.length - 1]));
            var f = i.length - a.length;
            if ("mod" !== e) {
              ((r = new o(null)).length = f + 1), (r.words = Array(r.length));
              for (var u = 0; u < r.length; u++) r.words[u] = 0;
            }
            var h = i.clone()._ishlnsubmul(a, 1, f);
            0 === h.negative && ((i = h), r && (r.words[f] = 1));
            for (var c = f - 1; c >= 0; c--) {
              var l =
                (0 | i.words[a.length + c]) * 67108864 +
                (0 | i.words[a.length + c - 1]);
              for (
                l = Math.min((l / s) | 0, 67108863), i._ishlnsubmul(a, l, c);
                0 !== i.negative;

              )
                l--,
                  (i.negative = 0),
                  i._ishlnsubmul(a, 1, c),
                  i.isZero() || (i.negative ^= 1);
              r && (r.words[c] = l);
            }
            return (
              r && r.strip(),
              i.strip(),
              "div" !== e && 0 !== n && i.iushrn(n),
              { div: r || null, mod: i }
            );
          }),
          (o.prototype.divmod = function (t, e, r) {
            var i, a, s;
            return (n(!t.isZero()), this.isZero())
              ? { div: new o(0), mod: new o(0) }
              : 0 !== this.negative && 0 === t.negative
              ? ((s = this.neg().divmod(t, e)),
                "mod" !== e && (i = s.div.neg()),
                "div" !== e &&
                  ((a = s.mod.neg()), r && 0 !== a.negative && a.iadd(t)),
                { div: i, mod: a })
              : 0 === this.negative && 0 !== t.negative
              ? ((s = this.divmod(t.neg(), e)),
                "mod" !== e && (i = s.div.neg()),
                { div: i, mod: s.mod })
              : (this.negative & t.negative) != 0
              ? ((s = this.neg().divmod(t.neg(), e)),
                "div" !== e &&
                  ((a = s.mod.neg()), r && 0 !== a.negative && a.isub(t)),
                { div: s.div, mod: a })
              : t.length > this.length || 0 > this.cmp(t)
              ? { div: new o(0), mod: this }
              : 1 === t.length
              ? "div" === e
                ? { div: this.divn(t.words[0]), mod: null }
                : "mod" === e
                ? { div: null, mod: new o(this.modn(t.words[0])) }
                : {
                    div: this.divn(t.words[0]),
                    mod: new o(this.modn(t.words[0])),
                  }
              : this._wordDiv(t, e);
          }),
          (o.prototype.div = function (t) {
            return this.divmod(t, "div", !1).div;
          }),
          (o.prototype.mod = function (t) {
            return this.divmod(t, "mod", !1).mod;
          }),
          (o.prototype.umod = function (t) {
            return this.divmod(t, "mod", !0).mod;
          }),
          (o.prototype.divRound = function (t) {
            var e = this.divmod(t);
            if (e.mod.isZero()) return e.div;
            var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
              n = t.ushrn(1),
              i = t.andln(1),
              o = r.cmp(n);
            return o < 0 || (1 === i && 0 === o)
              ? e.div
              : 0 !== e.div.negative
              ? e.div.isubn(1)
              : e.div.iaddn(1);
          }),
          (o.prototype.modn = function (t) {
            n(t <= 67108863);
            for (var e = 67108864 % t, r = 0, i = this.length - 1; i >= 0; i--)
              r = (e * r + (0 | this.words[i])) % t;
            return r;
          }),
          (o.prototype.idivn = function (t) {
            n(t <= 67108863);
            for (var e = 0, r = this.length - 1; r >= 0; r--) {
              var i = (0 | this.words[r]) + 67108864 * e;
              (this.words[r] = (i / t) | 0), (e = i % t);
            }
            return this.strip();
          }),
          (o.prototype.divn = function (t) {
            return this.clone().idivn(t);
          }),
          (o.prototype.egcd = function (t) {
            n(0 === t.negative), n(!t.isZero());
            var e = this,
              r = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (
              var i = new o(1), a = new o(0), s = new o(0), f = new o(1), u = 0;
              e.isEven() && r.isEven();

            )
              e.iushrn(1), r.iushrn(1), ++u;
            for (var h = r.clone(), c = e.clone(); !e.isZero(); ) {
              for (
                var l = 0, d = 1;
                (e.words[0] & d) == 0 && l < 26;
                ++l, d <<= 1
              );
              if (l > 0)
                for (e.iushrn(l); l-- > 0; )
                  (i.isOdd() || a.isOdd()) && (i.iadd(h), a.isub(c)),
                    i.iushrn(1),
                    a.iushrn(1);
              for (
                var p = 0, b = 1;
                (r.words[0] & b) == 0 && p < 26;
                ++p, b <<= 1
              );
              if (p > 0)
                for (r.iushrn(p); p-- > 0; )
                  (s.isOdd() || f.isOdd()) && (s.iadd(h), f.isub(c)),
                    s.iushrn(1),
                    f.iushrn(1);
              e.cmp(r) >= 0
                ? (e.isub(r), i.isub(s), a.isub(f))
                : (r.isub(e), s.isub(i), f.isub(a));
            }
            return { a: s, b: f, gcd: r.iushln(u) };
          }),
          (o.prototype._invmp = function (t) {
            n(0 === t.negative), n(!t.isZero());
            var e,
              r = this,
              i = t.clone();
            r = 0 !== r.negative ? r.umod(t) : r.clone();
            for (
              var a = new o(1), s = new o(0), f = i.clone();
              r.cmpn(1) > 0 && i.cmpn(1) > 0;

            ) {
              for (
                var u = 0, h = 1;
                (r.words[0] & h) == 0 && u < 26;
                ++u, h <<= 1
              );
              if (u > 0)
                for (r.iushrn(u); u-- > 0; )
                  a.isOdd() && a.iadd(f), a.iushrn(1);
              for (
                var c = 0, l = 1;
                (i.words[0] & l) == 0 && c < 26;
                ++c, l <<= 1
              );
              if (c > 0)
                for (i.iushrn(c); c-- > 0; )
                  s.isOdd() && s.iadd(f), s.iushrn(1);
              r.cmp(i) >= 0 ? (r.isub(i), a.isub(s)) : (i.isub(r), s.isub(a));
            }
            return 0 > (e = 0 === r.cmpn(1) ? a : s).cmpn(0) && e.iadd(t), e;
          }),
          (o.prototype.gcd = function (t) {
            if (this.isZero()) return t.abs();
            if (t.isZero()) return this.abs();
            var e = this.clone(),
              r = t.clone();
            (e.negative = 0), (r.negative = 0);
            for (var n = 0; e.isEven() && r.isEven(); n++)
              e.iushrn(1), r.iushrn(1);
            for (;;) {
              for (; e.isEven(); ) e.iushrn(1);
              for (; r.isEven(); ) r.iushrn(1);
              var i = e.cmp(r);
              if (i < 0) {
                var o = e;
                (e = r), (r = o);
              } else if (0 === i || 0 === r.cmpn(1)) break;
              e.isub(r);
            }
            return r.iushln(n);
          }),
          (o.prototype.invm = function (t) {
            return this.egcd(t).a.umod(t);
          }),
          (o.prototype.isEven = function () {
            return (1 & this.words[0]) == 0;
          }),
          (o.prototype.isOdd = function () {
            return (1 & this.words[0]) == 1;
          }),
          (o.prototype.andln = function (t) {
            return this.words[0] & t;
          }),
          (o.prototype.bincn = function (t) {
            n("number" == typeof t);
            var e = t % 26,
              r = (t - e) / 26,
              i = 1 << e;
            if (this.length <= r)
              return this._expand(r + 1), (this.words[r] |= i), this;
            for (var o = i, a = r; 0 !== o && a < this.length; a++) {
              var s = 0 | this.words[a];
              (s += o), (o = s >>> 26), (s &= 67108863), (this.words[a] = s);
            }
            return 0 !== o && ((this.words[a] = o), this.length++), this;
          }),
          (o.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }),
          (o.prototype.cmpn = function (t) {
            var e,
              r = t < 0;
            if (0 !== this.negative && !r) return -1;
            if (0 === this.negative && r) return 1;
            if ((this.strip(), this.length > 1)) e = 1;
            else {
              r && (t = -t), n(t <= 67108863, "Number is too big");
              var i = 0 | this.words[0];
              e = i === t ? 0 : i < t ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (o.prototype.cmp = function (t) {
            if (0 !== this.negative && 0 === t.negative) return -1;
            if (0 === this.negative && 0 !== t.negative) return 1;
            var e = this.ucmp(t);
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (o.prototype.ucmp = function (t) {
            if (this.length > t.length) return 1;
            if (this.length < t.length) return -1;
            for (var e = 0, r = this.length - 1; r >= 0; r--) {
              var n = 0 | this.words[r],
                i = 0 | t.words[r];
              if (n !== i) {
                n < i ? (e = -1) : n > i && (e = 1);
                break;
              }
            }
            return e;
          }),
          (o.prototype.gtn = function (t) {
            return 1 === this.cmpn(t);
          }),
          (o.prototype.gt = function (t) {
            return 1 === this.cmp(t);
          }),
          (o.prototype.gten = function (t) {
            return this.cmpn(t) >= 0;
          }),
          (o.prototype.gte = function (t) {
            return this.cmp(t) >= 0;
          }),
          (o.prototype.ltn = function (t) {
            return -1 === this.cmpn(t);
          }),
          (o.prototype.lt = function (t) {
            return -1 === this.cmp(t);
          }),
          (o.prototype.lten = function (t) {
            return 0 >= this.cmpn(t);
          }),
          (o.prototype.lte = function (t) {
            return 0 >= this.cmp(t);
          }),
          (o.prototype.eqn = function (t) {
            return 0 === this.cmpn(t);
          }),
          (o.prototype.eq = function (t) {
            return 0 === this.cmp(t);
          }),
          (o.red = function (t) {
            return new _(t);
          }),
          (o.prototype.toRed = function (t) {
            return (
              n(!this.red, "Already a number in reduction context"),
              n(0 === this.negative, "red works only with positives"),
              t.convertTo(this)._forceRed(t)
            );
          }),
          (o.prototype.fromRed = function () {
            return (
              n(
                this.red,
                "fromRed works only with numbers in reduction context"
              ),
              this.red.convertFrom(this)
            );
          }),
          (o.prototype._forceRed = function (t) {
            return (this.red = t), this;
          }),
          (o.prototype.forceRed = function (t) {
            return (
              n(!this.red, "Already a number in reduction context"),
              this._forceRed(t)
            );
          }),
          (o.prototype.redAdd = function (t) {
            return (
              n(this.red, "redAdd works only with red numbers"),
              this.red.add(this, t)
            );
          }),
          (o.prototype.redIAdd = function (t) {
            return (
              n(this.red, "redIAdd works only with red numbers"),
              this.red.iadd(this, t)
            );
          }),
          (o.prototype.redSub = function (t) {
            return (
              n(this.red, "redSub works only with red numbers"),
              this.red.sub(this, t)
            );
          }),
          (o.prototype.redISub = function (t) {
            return (
              n(this.red, "redISub works only with red numbers"),
              this.red.isub(this, t)
            );
          }),
          (o.prototype.redShl = function (t) {
            return (
              n(this.red, "redShl works only with red numbers"),
              this.red.shl(this, t)
            );
          }),
          (o.prototype.redMul = function (t) {
            return (
              n(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.mul(this, t)
            );
          }),
          (o.prototype.redIMul = function (t) {
            return (
              n(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.imul(this, t)
            );
          }),
          (o.prototype.redSqr = function () {
            return (
              n(this.red, "redSqr works only with red numbers"),
              this.red._verify1(this),
              this.red.sqr(this)
            );
          }),
          (o.prototype.redISqr = function () {
            return (
              n(this.red, "redISqr works only with red numbers"),
              this.red._verify1(this),
              this.red.isqr(this)
            );
          }),
          (o.prototype.redSqrt = function () {
            return (
              n(this.red, "redSqrt works only with red numbers"),
              this.red._verify1(this),
              this.red.sqrt(this)
            );
          }),
          (o.prototype.redInvm = function () {
            return (
              n(this.red, "redInvm works only with red numbers"),
              this.red._verify1(this),
              this.red.invm(this)
            );
          }),
          (o.prototype.redNeg = function () {
            return (
              n(this.red, "redNeg works only with red numbers"),
              this.red._verify1(this),
              this.red.neg(this)
            );
          }),
          (o.prototype.redPow = function (t) {
            return (
              n(this.red && !t.red, "redPow(normalNum)"),
              this.red._verify1(this),
              this.red.pow(this, t)
            );
          });
        var y = { k256: null, p224: null, p192: null, p25519: null };
        function m(t, e) {
          (this.name = t),
            (this.p = new o(e, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new o(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp());
        }
        function g() {
          m.call(
            this,
            "k256",
            "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
          );
        }
        function v() {
          m.call(
            this,
            "p224",
            "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
          );
        }
        function w() {
          m.call(
            this,
            "p192",
            "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
          );
        }
        function M() {
          m.call(
            this,
            "25519",
            "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
          );
        }
        function _(t) {
          if ("string" == typeof t) {
            var e = o._prime(t);
            (this.m = e.p), (this.prime = e);
          } else
            n(t.gtn(1), "modulus must be greater than 1"),
              (this.m = t),
              (this.prime = null);
        }
        function S(t) {
          _.call(this, t),
            (this.shift = this.m.bitLength()),
            this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new o(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv));
        }
        (m.prototype._tmp = function () {
          var t = new o(null);
          return (t.words = Array(Math.ceil(this.n / 13))), t;
        }),
          (m.prototype.ireduce = function (t) {
            var e,
              r = t;
            do
              this.split(r, this.tmp),
                (e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength());
            while (e > this.n);
            var n = e < this.n ? -1 : r.ucmp(this.p);
            return (
              0 === n
                ? ((r.words[0] = 0), (r.length = 1))
                : n > 0
                ? r.isub(this.p)
                : r.strip(),
              r
            );
          }),
          (m.prototype.split = function (t, e) {
            t.iushrn(this.n, 0, e);
          }),
          (m.prototype.imulK = function (t) {
            return t.imul(this.k);
          }),
          i(g, m),
          (g.prototype.split = function (t, e) {
            for (var r = Math.min(t.length, 9), n = 0; n < r; n++)
              e.words[n] = t.words[n];
            if (((e.length = r), t.length <= 9)) {
              (t.words[0] = 0), (t.length = 1);
              return;
            }
            var i = t.words[9];
            for (n = 10, e.words[e.length++] = 4194303 & i; n < t.length; n++) {
              var o = 0 | t.words[n];
              (t.words[n - 10] = ((4194303 & o) << 4) | (i >>> 22)), (i = o);
            }
            (i >>>= 22),
              (t.words[n - 10] = i),
              0 === i && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
          }),
          (g.prototype.imulK = function (t) {
            (t.words[t.length] = 0),
              (t.words[t.length + 1] = 0),
              (t.length += 2);
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = 0 | t.words[r];
              (e += 977 * n),
                (t.words[r] = 67108863 & e),
                (e = 64 * n + ((e / 67108864) | 0));
            }
            return (
              0 === t.words[t.length - 1] &&
                (t.length--, 0 === t.words[t.length - 1] && t.length--),
              t
            );
          }),
          i(v, m),
          i(w, m),
          i(M, m),
          (M.prototype.imulK = function (t) {
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = (0 | t.words[r]) * 19 + e,
                i = 67108863 & n;
              (n >>>= 26), (t.words[r] = i), (e = n);
            }
            return 0 !== e && (t.words[t.length++] = e), t;
          }),
          (o._prime = function (t) {
            var e;
            if (y[t]) return y[t];
            if ("k256" === t) e = new g();
            else if ("p224" === t) e = new v();
            else if ("p192" === t) e = new w();
            else if ("p25519" === t) e = new M();
            else throw Error("Unknown prime " + t);
            return (y[t] = e), e;
          }),
          (_.prototype._verify1 = function (t) {
            n(0 === t.negative, "red works only with positives"),
              n(t.red, "red works only with red numbers");
          }),
          (_.prototype._verify2 = function (t, e) {
            n((t.negative | e.negative) == 0, "red works only with positives"),
              n(t.red && t.red === e.red, "red works only with red numbers");
          }),
          (_.prototype.imod = function (t) {
            return this.prime
              ? this.prime.ireduce(t)._forceRed(this)
              : t.umod(this.m)._forceRed(this);
          }),
          (_.prototype.neg = function (t) {
            return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
          }),
          (_.prototype.add = function (t, e) {
            this._verify2(t, e);
            var r = t.add(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
          }),
          (_.prototype.iadd = function (t, e) {
            this._verify2(t, e);
            var r = t.iadd(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r;
          }),
          (_.prototype.sub = function (t, e) {
            this._verify2(t, e);
            var r = t.sub(e);
            return 0 > r.cmpn(0) && r.iadd(this.m), r._forceRed(this);
          }),
          (_.prototype.isub = function (t, e) {
            this._verify2(t, e);
            var r = t.isub(e);
            return 0 > r.cmpn(0) && r.iadd(this.m), r;
          }),
          (_.prototype.shl = function (t, e) {
            return this._verify1(t), this.imod(t.ushln(e));
          }),
          (_.prototype.imul = function (t, e) {
            return this._verify2(t, e), this.imod(t.imul(e));
          }),
          (_.prototype.mul = function (t, e) {
            return this._verify2(t, e), this.imod(t.mul(e));
          }),
          (_.prototype.isqr = function (t) {
            return this.imul(t, t.clone());
          }),
          (_.prototype.sqr = function (t) {
            return this.mul(t, t);
          }),
          (_.prototype.sqrt = function (t) {
            if (t.isZero()) return t.clone();
            var e = this.m.andln(3);
            if ((n(e % 2 == 1), 3 === e)) {
              var r = this.m.add(new o(1)).iushrn(2);
              return this.pow(t, r);
            }
            for (
              var i = this.m.subn(1), a = 0;
              !i.isZero() && 0 === i.andln(1);

            )
              a++, i.iushrn(1);
            n(!i.isZero());
            var s = new o(1).toRed(this),
              f = s.redNeg(),
              u = this.m.subn(1).iushrn(1),
              h = this.m.bitLength();
            for (
              h = new o(2 * h * h).toRed(this);
              0 !== this.pow(h, u).cmp(f);

            )
              h.redIAdd(f);
            for (
              var c = this.pow(h, i),
                l = this.pow(t, i.addn(1).iushrn(1)),
                d = this.pow(t, i),
                p = a;
              0 !== d.cmp(s);

            ) {
              for (var b = d, y = 0; 0 !== b.cmp(s); y++) b = b.redSqr();
              n(y < p);
              var m = this.pow(c, new o(1).iushln(p - y - 1));
              (l = l.redMul(m)), (c = m.redSqr()), (d = d.redMul(c)), (p = y);
            }
            return l;
          }),
          (_.prototype.invm = function (t) {
            var e = t._invmp(this.m);
            return 0 !== e.negative
              ? ((e.negative = 0), this.imod(e).redNeg())
              : this.imod(e);
          }),
          (_.prototype.pow = function (t, e) {
            if (e.isZero()) return new o(1);
            if (0 === e.cmpn(1)) return t.clone();
            var r = Array(16);
            (r[0] = new o(1).toRed(this)), (r[1] = t);
            for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
            var i = r[0],
              a = 0,
              s = 0,
              f = e.bitLength() % 26;
            for (0 === f && (f = 26), n = e.length - 1; n >= 0; n--) {
              for (var u = e.words[n], h = f - 1; h >= 0; h--) {
                var c = (u >> h) & 1;
                if ((i !== r[0] && (i = this.sqr(i)), 0 === c && 0 === a)) {
                  s = 0;
                  continue;
                }
                (a <<= 1),
                  (a |= c),
                  (4 == ++s || (0 === n && 0 === h)) &&
                    ((i = this.mul(i, r[a])), (s = 0), (a = 0));
              }
              f = 26;
            }
            return i;
          }),
          (_.prototype.convertTo = function (t) {
            var e = t.umod(this.m);
            return e === t ? e.clone() : e;
          }),
          (_.prototype.convertFrom = function (t) {
            var e = t.clone();
            return (e.red = null), e;
          }),
          (o.mont = function (t) {
            return new S(t);
          }),
          i(S, _),
          (S.prototype.convertTo = function (t) {
            return this.imod(t.ushln(this.shift));
          }),
          (S.prototype.convertFrom = function (t) {
            var e = this.imod(t.mul(this.rinv));
            return (e.red = null), e;
          }),
          (S.prototype.imul = function (t, e) {
            if (t.isZero() || e.isZero())
              return (t.words[0] = 0), (t.length = 1), t;
            var r = t.imul(e),
              n = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              o = i;
            return (
              i.cmp(this.m) >= 0
                ? (o = i.isub(this.m))
                : 0 > i.cmpn(0) && (o = i.iadd(this.m)),
              o._forceRed(this)
            );
          }),
          (S.prototype.mul = function (t, e) {
            if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
            var r = t.mul(e),
              n = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              a = i;
            return (
              i.cmp(this.m) >= 0
                ? (a = i.isub(this.m))
                : 0 > i.cmpn(0) && (a = i.iadd(this.m)),
              a._forceRed(this)
            );
          }),
          (S.prototype.invm = function (t) {
            return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
          });
      })((t = r.nmd(t)), this);
    },
    3206: function (t, e, r) {
      var n = r(5033),
        i = r(9604);
      t.exports = function (t) {
        if ("string" == typeof t || "number" == typeof t) {
          var e = new n(1),
            r = String(t).toLowerCase().trim(),
            o = "0x" === r.substr(0, 2) || "-0x" === r.substr(0, 3),
            a = i(r);
          if (
            ("-" === a.substr(0, 1) &&
              ((a = i(a.slice(1))), (e = new n(-1, 10))),
            (!(a = "" === a ? "0" : a).match(/^-?[0-9]+$/) &&
              a.match(/^[0-9A-Fa-f]+$/)) ||
              a.match(/^[a-fA-F]+$/) ||
              (!0 === o && a.match(/^[0-9A-Fa-f]+$/)))
          )
            return new n(a, 16).mul(e);
          if ((a.match(/^-?[0-9]+$/) || "" === a) && !1 === o)
            return new n(a, 10).mul(e);
        } else if (
          "object" == typeof t &&
          t.toString &&
          !t.pop &&
          !t.push &&
          t.toString(10).match(/^-?[0-9]+$/) &&
          (t.mul || t.dividedToIntegerBy)
        )
          return new n(t.toString(10), 10);
        throw Error(
          "[number-to-bn] while converting number " +
            JSON.stringify(t) +
            " to BN.js instance, error: invalid number value. Value must be an integer, hex string, BN or BigNumber instance. Note, decimals are not supported."
        );
      };
    },
    1798: function (t, e, r) {
      "use strict";
      var n = r(3454),
        i = r(9509).Buffer,
        o = r.g.crypto || r.g.msCrypto;
      o && o.getRandomValues
        ? (t.exports = function (t, e) {
            if (t > 4294967295)
              throw RangeError("requested too many random bytes");
            var r = i.allocUnsafe(t);
            if (t > 0) {
              if (t > 65536)
                for (var a = 0; a < t; a += 65536)
                  o.getRandomValues(r.slice(a, a + 65536));
              else o.getRandomValues(r);
            }
            return "function" == typeof e
              ? n.nextTick(function () {
                  e(null, r);
                })
              : r;
          })
        : (t.exports = function () {
            throw Error(
              "Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11"
            );
          });
    },
    4281: function (t) {
      "use strict";
      var e = {};
      function r(t, r, n) {
        n || (n = Error);
        var i = (function (t) {
          var e;
          function n(e, n, i) {
            return t.call(this, "string" == typeof r ? r : r(e, n, i)) || this;
          }
          return (
            ((e = n).prototype = Object.create(t.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = t),
            n
          );
        })(n);
        (i.prototype.name = n.name), (i.prototype.code = t), (e[t] = i);
      }
      function n(t, e) {
        if (!Array.isArray(t)) return "of ".concat(e, " ").concat(String(t));
        var r = t.length;
        return ((t = t.map(function (t) {
          return String(t);
        })),
        r > 2)
          ? "one of "
              .concat(e, " ")
              .concat(t.slice(0, r - 1).join(", "), ", or ") + t[r - 1]
          : 2 === r
          ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1])
          : "of ".concat(e, " ").concat(t[0]);
      }
      r(
        "ERR_INVALID_OPT_VALUE",
        function (t, e) {
          return 'The value "' + e + '" is invalid for option "' + t + '"';
        },
        TypeError
      ),
        r(
          "ERR_INVALID_ARG_TYPE",
          function (t, e, r) {
            if (
              ("string" == typeof e &&
              ((i = "not "), e.substr(!o || o < 0 ? 0 : +o, i.length) === i)
                ? ((u = "must not be"), (e = e.replace(/^not /, "")))
                : (u = "must be"),
              (a = " argument"),
              (void 0 === s || s > t.length) && (s = t.length),
              t.substring(s - a.length, s) === a)
            )
              h = "The ".concat(t, " ").concat(u, " ").concat(n(e, "type"));
            else {
              var i,
                o,
                a,
                s,
                f,
                u,
                h,
                c = ("number" != typeof f && (f = 0),
                f + 1 > t.length || -1 === t.indexOf(".", f))
                  ? "argument"
                  : "property";
              h = 'The "'
                .concat(t, '" ')
                .concat(c, " ")
                .concat(u, " ")
                .concat(n(e, "type"));
            }
            return h + ". Received type ".concat(typeof r);
          },
          TypeError
        ),
        r("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
        r("ERR_METHOD_NOT_IMPLEMENTED", function (t) {
          return "The " + t + " method is not implemented";
        }),
        r("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
        r("ERR_STREAM_DESTROYED", function (t) {
          return "Cannot call " + t + " after a stream was destroyed";
        }),
        r("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
        r("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
        r("ERR_STREAM_WRITE_AFTER_END", "write after end"),
        r(
          "ERR_STREAM_NULL_VALUES",
          "May not write null values to stream",
          TypeError
        ),
        r(
          "ERR_UNKNOWN_ENCODING",
          function (t) {
            return "Unknown encoding: " + t;
          },
          TypeError
        ),
        r(
          "ERR_STREAM_UNSHIFT_AFTER_END_EVENT",
          "stream.unshift() after end event"
        ),
        (t.exports.q = e);
    },
    6753: function (t, e, r) {
      "use strict";
      var n = r(3454),
        i =
          Object.keys ||
          function (t) {
            var e = [];
            for (var r in t) e.push(r);
            return e;
          };
      t.exports = h;
      var o = r(9481),
        a = r(4229);
      r(5717)(h, o);
      for (var s = i(a.prototype), f = 0; f < s.length; f++) {
        var u = s[f];
        h.prototype[u] || (h.prototype[u] = a.prototype[u]);
      }
      function h(t) {
        if (!(this instanceof h)) return new h(t);
        o.call(this, t),
          a.call(this, t),
          (this.allowHalfOpen = !0),
          t &&
            (!1 === t.readable && (this.readable = !1),
            !1 === t.writable && (this.writable = !1),
            !1 === t.allowHalfOpen &&
              ((this.allowHalfOpen = !1), this.once("end", c)));
      }
      function c() {
        this._writableState.ended || n.nextTick(l, this);
      }
      function l(t) {
        t.end();
      }
      Object.defineProperty(h.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function () {
          return this._writableState.highWaterMark;
        },
      }),
        Object.defineProperty(h.prototype, "writableBuffer", {
          enumerable: !1,
          get: function () {
            return this._writableState && this._writableState.getBuffer();
          },
        }),
        Object.defineProperty(h.prototype, "writableLength", {
          enumerable: !1,
          get: function () {
            return this._writableState.length;
          },
        }),
        Object.defineProperty(h.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              this._readableState.destroyed &&
              this._writableState.destroyed
            );
          },
          set: function (t) {
            void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              ((this._readableState.destroyed = t),
              (this._writableState.destroyed = t));
          },
        });
    },
    2725: function (t, e, r) {
      "use strict";
      t.exports = i;
      var n = r(4605);
      function i(t) {
        if (!(this instanceof i)) return new i(t);
        n.call(this, t);
      }
      r(5717)(i, n),
        (i.prototype._transform = function (t, e, r) {
          r(null, t);
        });
    },
    9481: function (t, e, r) {
      "use strict";
      var n,
        i,
        o,
        a,
        s,
        f = r(3454);
      (t.exports = E), (E.ReadableState = A), r(7187).EventEmitter;
      var u = function (t, e) {
          return t.listeners(e).length;
        },
        h = r(2503),
        c = r(8764).Buffer,
        l =
          (void 0 !== r.g
            ? r.g
            : "undefined" != typeof window
            ? window
            : "undefined" != typeof self
            ? self
            : {}
          ).Uint8Array || function () {},
        d = r(4616);
      i = d && d.debuglog ? d.debuglog("stream") : function () {};
      var p = r(7327),
        b = r(1195),
        y = r(2457).getHighWaterMark,
        m = r(4281).q,
        g = m.ERR_INVALID_ARG_TYPE,
        v = m.ERR_STREAM_PUSH_AFTER_EOF,
        w = m.ERR_METHOD_NOT_IMPLEMENTED,
        M = m.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
      r(5717)(E, h);
      var _ = b.errorOrDestroy,
        S = ["error", "close", "destroy", "pause", "resume"];
      function A(t, e, i) {
        (n = n || r(6753)),
          (t = t || {}),
          "boolean" != typeof i && (i = e instanceof n),
          (this.objectMode = !!t.objectMode),
          i && (this.objectMode = this.objectMode || !!t.readableObjectMode),
          (this.highWaterMark = y(this, t, "readableHighWaterMark", i)),
          (this.buffer = new p()),
          (this.length = 0),
          (this.pipes = null),
          (this.pipesCount = 0),
          (this.flowing = null),
          (this.ended = !1),
          (this.endEmitted = !1),
          (this.reading = !1),
          (this.sync = !0),
          (this.needReadable = !1),
          (this.emittedReadable = !1),
          (this.readableListening = !1),
          (this.resumeScheduled = !1),
          (this.paused = !0),
          (this.emitClose = !1 !== t.emitClose),
          (this.autoDestroy = !!t.autoDestroy),
          (this.destroyed = !1),
          (this.defaultEncoding = t.defaultEncoding || "utf8"),
          (this.awaitDrain = 0),
          (this.readingMore = !1),
          (this.decoder = null),
          (this.encoding = null),
          t.encoding &&
            (o || (o = r(2553).s),
            (this.decoder = new o(t.encoding)),
            (this.encoding = t.encoding));
      }
      function E(t) {
        if (((n = n || r(6753)), !(this instanceof E))) return new E(t);
        var e = this instanceof n;
        (this._readableState = new A(t, this, e)),
          (this.readable = !0),
          t &&
            ("function" == typeof t.read && (this._read = t.read),
            "function" == typeof t.destroy && (this._destroy = t.destroy)),
          h.call(this);
      }
      function x(t, e, r, n, o) {
        i("readableAddChunk", e);
        var a,
          s,
          f,
          u,
          h,
          d = t._readableState;
        if (null === e)
          (d.reading = !1),
            (function (t, e) {
              if ((i("onEofChunk"), !e.ended)) {
                if (e.decoder) {
                  var r = e.decoder.end();
                  r &&
                    r.length &&
                    (e.buffer.push(r),
                    (e.length += e.objectMode ? 1 : r.length));
                }
                (e.ended = !0),
                  e.sync
                    ? R(t)
                    : ((e.needReadable = !1),
                      e.emittedReadable || ((e.emittedReadable = !0), P(t)));
              }
            })(t, d);
        else {
          if (
            (o ||
              ((a = d),
              (s = e),
              c.isBuffer(s) ||
                s instanceof l ||
                "string" == typeof s ||
                void 0 === s ||
                a.objectMode ||
                (f = new g("chunk", ["string", "Buffer", "Uint8Array"], s)),
              (h = f)),
            h)
          )
            _(t, h);
          else if (d.objectMode || (e && e.length > 0)) {
            if (
              ("string" == typeof e ||
                d.objectMode ||
                Object.getPrototypeOf(e) === c.prototype ||
                ((u = e), (e = c.from(u))),
              n)
            )
              d.endEmitted ? _(t, new M()) : O(t, d, e, !0);
            else if (d.ended) _(t, new v());
            else {
              if (d.destroyed) return !1;
              (d.reading = !1),
                d.decoder && !r
                  ? ((e = d.decoder.write(e)),
                    d.objectMode || 0 !== e.length ? O(t, d, e, !1) : j(t, d))
                  : O(t, d, e, !1);
            }
          } else n || ((d.reading = !1), j(t, d));
        }
        return !d.ended && (d.length < d.highWaterMark || 0 === d.length);
      }
      function O(t, e, r, n) {
        e.flowing && 0 === e.length && !e.sync
          ? ((e.awaitDrain = 0), t.emit("data", r))
          : ((e.length += e.objectMode ? 1 : r.length),
            n ? e.buffer.unshift(r) : e.buffer.push(r),
            e.needReadable && R(t)),
          j(t, e);
      }
      function k(t, e) {
        if (t <= 0 || (0 === e.length && e.ended)) return 0;
        if (e.objectMode) return 1;
        if (t != t)
          return e.flowing && e.length ? e.buffer.head.data.length : e.length;
        if (t > e.highWaterMark) {
          var r;
          e.highWaterMark =
            ((r = t) >= 1073741824
              ? (r = 1073741824)
              : (r--,
                (r |= r >>> 1),
                (r |= r >>> 2),
                (r |= r >>> 4),
                (r |= r >>> 8),
                (r |= r >>> 16),
                r++),
            r);
        }
        return t <= e.length
          ? t
          : e.ended
          ? e.length
          : ((e.needReadable = !0), 0);
      }
      function R(t) {
        var e = t._readableState;
        i("emitReadable", e.needReadable, e.emittedReadable),
          (e.needReadable = !1),
          e.emittedReadable ||
            (i("emitReadable", e.flowing),
            (e.emittedReadable = !0),
            f.nextTick(P, t));
      }
      function P(t) {
        var e = t._readableState;
        i("emitReadable_", e.destroyed, e.length, e.ended),
          !e.destroyed &&
            (e.length || e.ended) &&
            (t.emit("readable"), (e.emittedReadable = !1)),
          (e.needReadable =
            !e.flowing && !e.ended && e.length <= e.highWaterMark),
          L(t);
      }
      function j(t, e) {
        e.readingMore || ((e.readingMore = !0), f.nextTick(I, t, e));
      }
      function I(t, e) {
        for (
          ;
          !e.reading &&
          !e.ended &&
          (e.length < e.highWaterMark || (e.flowing && 0 === e.length));

        ) {
          var r = e.length;
          if ((i("maybeReadMore read 0"), t.read(0), r === e.length)) break;
        }
        e.readingMore = !1;
      }
      function T(t) {
        var e = t._readableState;
        (e.readableListening = t.listenerCount("readable") > 0),
          e.resumeScheduled && !e.paused
            ? (e.flowing = !0)
            : t.listenerCount("data") > 0 && t.resume();
      }
      function B(t) {
        i("readable nexttick read 0"), t.read(0);
      }
      function N(t, e) {
        i("resume", e.reading),
          e.reading || t.read(0),
          (e.resumeScheduled = !1),
          t.emit("resume"),
          L(t),
          e.flowing && !e.reading && t.read(0);
      }
      function L(t) {
        var e = t._readableState;
        for (i("flow", e.flowing); e.flowing && null !== t.read(); );
      }
      function C(t, e) {
        var r;
        return 0 === e.length
          ? null
          : (e.objectMode
              ? (r = e.buffer.shift())
              : !t || t >= e.length
              ? ((r = e.decoder
                  ? e.buffer.join("")
                  : 1 === e.buffer.length
                  ? e.buffer.first()
                  : e.buffer.concat(e.length)),
                e.buffer.clear())
              : (r = e.buffer.consume(t, e.decoder)),
            r);
      }
      function q(t) {
        var e = t._readableState;
        i("endReadable", e.endEmitted),
          e.endEmitted || ((e.ended = !0), f.nextTick(U, e, t));
      }
      function U(t, e) {
        if (
          (i("endReadableNT", t.endEmitted, t.length),
          !t.endEmitted &&
            0 === t.length &&
            ((t.endEmitted = !0),
            (e.readable = !1),
            e.emit("end"),
            t.autoDestroy))
        ) {
          var r = e._writableState;
          (!r || (r.autoDestroy && r.finished)) && e.destroy();
        }
      }
      function F(t, e) {
        for (var r = 0, n = t.length; r < n; r++) if (t[r] === e) return r;
        return -1;
      }
      Object.defineProperty(E.prototype, "destroyed", {
        enumerable: !1,
        get: function () {
          return (
            void 0 !== this._readableState && this._readableState.destroyed
          );
        },
        set: function (t) {
          this._readableState && (this._readableState.destroyed = t);
        },
      }),
        (E.prototype.destroy = b.destroy),
        (E.prototype._undestroy = b.undestroy),
        (E.prototype._destroy = function (t, e) {
          e(t);
        }),
        (E.prototype.push = function (t, e) {
          var r,
            n = this._readableState;
          return (
            n.objectMode
              ? (r = !0)
              : "string" == typeof t &&
                ((e = e || n.defaultEncoding) !== n.encoding &&
                  ((t = c.from(t, e)), (e = "")),
                (r = !0)),
            x(this, t, e, !1, r)
          );
        }),
        (E.prototype.unshift = function (t) {
          return x(this, t, null, !0, !1);
        }),
        (E.prototype.isPaused = function () {
          return !1 === this._readableState.flowing;
        }),
        (E.prototype.setEncoding = function (t) {
          o || (o = r(2553).s);
          var e = new o(t);
          (this._readableState.decoder = e),
            (this._readableState.encoding =
              this._readableState.decoder.encoding);
          for (var n = this._readableState.buffer.head, i = ""; null !== n; )
            (i += e.write(n.data)), (n = n.next);
          return (
            this._readableState.buffer.clear(),
            "" !== i && this._readableState.buffer.push(i),
            (this._readableState.length = i.length),
            this
          );
        }),
        (E.prototype.read = function (t) {
          i("read", t), (t = parseInt(t, 10));
          var e,
            r = this._readableState,
            n = t;
          if (
            (0 !== t && (r.emittedReadable = !1),
            0 === t &&
              r.needReadable &&
              ((0 !== r.highWaterMark
                ? r.length >= r.highWaterMark
                : r.length > 0) ||
                r.ended))
          )
            return (
              i("read: emitReadable", r.length, r.ended),
              0 === r.length && r.ended ? q(this) : R(this),
              null
            );
          if (0 === (t = k(t, r)) && r.ended)
            return 0 === r.length && q(this), null;
          var o = r.needReadable;
          return (
            i("need readable", o),
            (0 === r.length || r.length - t < r.highWaterMark) &&
              i("length less than watermark", (o = !0)),
            r.ended || r.reading
              ? i("reading or ended", (o = !1))
              : o &&
                (i("do read"),
                (r.reading = !0),
                (r.sync = !0),
                0 === r.length && (r.needReadable = !0),
                this._read(r.highWaterMark),
                (r.sync = !1),
                r.reading || (t = k(n, r))),
            null === (e = t > 0 ? C(t, r) : null)
              ? ((r.needReadable = r.length <= r.highWaterMark), (t = 0))
              : ((r.length -= t), (r.awaitDrain = 0)),
            0 === r.length &&
              (r.ended || (r.needReadable = !0), n !== t && r.ended && q(this)),
            null !== e && this.emit("data", e),
            e
          );
        }),
        (E.prototype._read = function (t) {
          _(this, new w("_read()"));
        }),
        (E.prototype.pipe = function (t, e) {
          var r = this,
            n = this._readableState;
          switch (n.pipesCount) {
            case 0:
              n.pipes = t;
              break;
            case 1:
              n.pipes = [n.pipes, t];
              break;
            default:
              n.pipes.push(t);
          }
          (n.pipesCount += 1), i("pipe count=%d opts=%j", n.pipesCount, e);
          var o =
            (e && !1 === e.end) || t === f.stdout || t === f.stderr ? b : a;
          function a() {
            i("onend"), t.end();
          }
          n.endEmitted ? f.nextTick(o) : r.once("end", o),
            t.on("unpipe", function e(o, f) {
              i("onunpipe"),
                o === r &&
                  f &&
                  !1 === f.hasUnpiped &&
                  ((f.hasUnpiped = !0),
                  i("cleanup"),
                  t.removeListener("close", d),
                  t.removeListener("finish", p),
                  t.removeListener("drain", s),
                  t.removeListener("error", l),
                  t.removeListener("unpipe", e),
                  r.removeListener("end", a),
                  r.removeListener("end", b),
                  r.removeListener("data", c),
                  (h = !0),
                  n.awaitDrain &&
                    (!t._writableState || t._writableState.needDrain) &&
                    s());
            });
          var s = function () {
            var t = r._readableState;
            i("pipeOnDrain", t.awaitDrain),
              t.awaitDrain && t.awaitDrain--,
              0 === t.awaitDrain && u(r, "data") && ((t.flowing = !0), L(r));
          };
          t.on("drain", s);
          var h = !1;
          function c(e) {
            i("ondata");
            var o = t.write(e);
            i("dest.write", o),
              !1 === o &&
                (((1 === n.pipesCount && n.pipes === t) ||
                  (n.pipesCount > 1 && -1 !== F(n.pipes, t))) &&
                  !h &&
                  (i("false write response, pause", n.awaitDrain),
                  n.awaitDrain++),
                r.pause());
          }
          function l(e) {
            i("onerror", e),
              b(),
              t.removeListener("error", l),
              0 === u(t, "error") && _(t, e);
          }
          function d() {
            t.removeListener("finish", p), b();
          }
          function p() {
            i("onfinish"), t.removeListener("close", d), b();
          }
          function b() {
            i("unpipe"), r.unpipe(t);
          }
          return (
            r.on("data", c),
            (function (t, e, r) {
              if ("function" == typeof t.prependListener)
                return t.prependListener(e, r);
              t._events && t._events[e]
                ? Array.isArray(t._events[e])
                  ? t._events[e].unshift(r)
                  : (t._events[e] = [r, t._events[e]])
                : t.on(e, r);
            })(t, "error", l),
            t.once("close", d),
            t.once("finish", p),
            t.emit("pipe", r),
            n.flowing || (i("pipe resume"), r.resume()),
            t
          );
        }),
        (E.prototype.unpipe = function (t) {
          var e = this._readableState,
            r = { hasUnpiped: !1 };
          if (0 === e.pipesCount) return this;
          if (1 === e.pipesCount)
            return (
              (t && t !== e.pipes) ||
                (t || (t = e.pipes),
                (e.pipes = null),
                (e.pipesCount = 0),
                (e.flowing = !1),
                t && t.emit("unpipe", this, r)),
              this
            );
          if (!t) {
            var n = e.pipes,
              i = e.pipesCount;
            (e.pipes = null), (e.pipesCount = 0), (e.flowing = !1);
            for (var o = 0; o < i; o++)
              n[o].emit("unpipe", this, { hasUnpiped: !1 });
            return this;
          }
          var a = F(e.pipes, t);
          return (
            -1 === a ||
              (e.pipes.splice(a, 1),
              (e.pipesCount -= 1),
              1 === e.pipesCount && (e.pipes = e.pipes[0]),
              t.emit("unpipe", this, r)),
            this
          );
        }),
        (E.prototype.on = function (t, e) {
          var r = h.prototype.on.call(this, t, e),
            n = this._readableState;
          return (
            "data" === t
              ? ((n.readableListening = this.listenerCount("readable") > 0),
                !1 !== n.flowing && this.resume())
              : "readable" !== t ||
                n.endEmitted ||
                n.readableListening ||
                ((n.readableListening = n.needReadable = !0),
                (n.flowing = !1),
                (n.emittedReadable = !1),
                i("on readable", n.length, n.reading),
                n.length ? R(this) : n.reading || f.nextTick(B, this)),
            r
          );
        }),
        (E.prototype.addListener = E.prototype.on),
        (E.prototype.removeListener = function (t, e) {
          var r = h.prototype.removeListener.call(this, t, e);
          return "readable" === t && f.nextTick(T, this), r;
        }),
        (E.prototype.removeAllListeners = function (t) {
          var e = h.prototype.removeAllListeners.apply(this, arguments);
          return ("readable" === t || void 0 === t) && f.nextTick(T, this), e;
        }),
        (E.prototype.resume = function () {
          var t,
            e = this._readableState;
          return (
            e.flowing ||
              (i("resume"),
              (e.flowing = !e.readableListening),
              (t = e).resumeScheduled ||
                ((t.resumeScheduled = !0), f.nextTick(N, this, t))),
            (e.paused = !1),
            this
          );
        }),
        (E.prototype.pause = function () {
          return (
            i("call pause flowing=%j", this._readableState.flowing),
            !1 !== this._readableState.flowing &&
              (i("pause"),
              (this._readableState.flowing = !1),
              this.emit("pause")),
            (this._readableState.paused = !0),
            this
          );
        }),
        (E.prototype.wrap = function (t) {
          var e = this,
            r = this._readableState,
            n = !1;
          for (var o in (t.on("end", function () {
            if ((i("wrapped end"), r.decoder && !r.ended)) {
              var t = r.decoder.end();
              t && t.length && e.push(t);
            }
            e.push(null);
          }),
          t.on("data", function (o) {
            i("wrapped data"),
              r.decoder && (o = r.decoder.write(o)),
              (!r.objectMode || null != o) &&
                (r.objectMode || (o && o.length)) &&
                (e.push(o) || ((n = !0), t.pause()));
          }),
          t))
            void 0 === this[o] &&
              "function" == typeof t[o] &&
              (this[o] = (function (e) {
                return function () {
                  return t[e].apply(t, arguments);
                };
              })(o));
          for (var a = 0; a < S.length; a++)
            t.on(S[a], this.emit.bind(this, S[a]));
          return (
            (this._read = function (e) {
              i("wrapped _read", e), n && ((n = !1), t.resume());
            }),
            this
          );
        }),
        "function" == typeof Symbol &&
          (E.prototype[Symbol.asyncIterator] = function () {
            return void 0 === a && (a = r(5850)), a(this);
          }),
        Object.defineProperty(E.prototype, "readableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._readableState.highWaterMark;
          },
        }),
        Object.defineProperty(E.prototype, "readableBuffer", {
          enumerable: !1,
          get: function () {
            return this._readableState && this._readableState.buffer;
          },
        }),
        Object.defineProperty(E.prototype, "readableFlowing", {
          enumerable: !1,
          get: function () {
            return this._readableState.flowing;
          },
          set: function (t) {
            this._readableState && (this._readableState.flowing = t);
          },
        }),
        (E._fromList = C),
        Object.defineProperty(E.prototype, "readableLength", {
          enumerable: !1,
          get: function () {
            return this._readableState.length;
          },
        }),
        "function" == typeof Symbol &&
          (E.from = function (t, e) {
            return void 0 === s && (s = r(5167)), s(E, t, e);
          });
    },
    4605: function (t, e, r) {
      "use strict";
      t.exports = h;
      var n = r(4281).q,
        i = n.ERR_METHOD_NOT_IMPLEMENTED,
        o = n.ERR_MULTIPLE_CALLBACK,
        a = n.ERR_TRANSFORM_ALREADY_TRANSFORMING,
        s = n.ERR_TRANSFORM_WITH_LENGTH_0,
        f = r(6753);
      function u(t, e) {
        var r = this._transformState;
        r.transforming = !1;
        var n = r.writecb;
        if (null === n) return this.emit("error", new o());
        (r.writechunk = null),
          (r.writecb = null),
          null != e && this.push(e),
          n(t);
        var i = this._readableState;
        (i.reading = !1),
          (i.needReadable || i.length < i.highWaterMark) &&
            this._read(i.highWaterMark);
      }
      function h(t) {
        if (!(this instanceof h)) return new h(t);
        f.call(this, t),
          (this._transformState = {
            afterTransform: u.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null,
          }),
          (this._readableState.needReadable = !0),
          (this._readableState.sync = !1),
          t &&
            ("function" == typeof t.transform &&
              (this._transform = t.transform),
            "function" == typeof t.flush && (this._flush = t.flush)),
          this.on("prefinish", c);
      }
      function c() {
        var t = this;
        "function" != typeof this._flush || this._readableState.destroyed
          ? l(this, null, null)
          : this._flush(function (e, r) {
              l(t, e, r);
            });
      }
      function l(t, e, r) {
        if (e) return t.emit("error", e);
        if ((null != r && t.push(r), t._writableState.length)) throw new s();
        if (t._transformState.transforming) throw new a();
        return t.push(null);
      }
      r(5717)(h, f),
        (h.prototype.push = function (t, e) {
          return (
            (this._transformState.needTransform = !1),
            f.prototype.push.call(this, t, e)
          );
        }),
        (h.prototype._transform = function (t, e, r) {
          r(new i("_transform()"));
        }),
        (h.prototype._write = function (t, e, r) {
          var n = this._transformState;
          if (
            ((n.writecb = r),
            (n.writechunk = t),
            (n.writeencoding = e),
            !n.transforming)
          ) {
            var i = this._readableState;
            (n.needTransform || i.needReadable || i.length < i.highWaterMark) &&
              this._read(i.highWaterMark);
          }
        }),
        (h.prototype._read = function (t) {
          var e = this._transformState;
          null === e.writechunk || e.transforming
            ? (e.needTransform = !0)
            : ((e.transforming = !0),
              this._transform(e.writechunk, e.writeencoding, e.afterTransform));
        }),
        (h.prototype._destroy = function (t, e) {
          f.prototype._destroy.call(this, t, function (t) {
            e(t);
          });
        });
    },
    4229: function (t, e, r) {
      "use strict";
      var n,
        i,
        o = r(3454);
      function a(t) {
        var e = this;
        (this.next = null),
          (this.entry = null),
          (this.finish = function () {
            (function (t, e, r) {
              var n = t.entry;
              for (t.entry = null; n; ) {
                var i = n.callback;
                e.pendingcb--, i(void 0), (n = n.next);
              }
              e.corkedRequestsFree.next = t;
            })(e, t);
          });
      }
      (t.exports = E), (E.WritableState = A);
      var s = { deprecate: r(4927) },
        f = r(2503),
        u = r(8764).Buffer,
        h =
          (void 0 !== r.g
            ? r.g
            : "undefined" != typeof window
            ? window
            : "undefined" != typeof self
            ? self
            : {}
          ).Uint8Array || function () {},
        c = r(1195),
        l = r(2457).getHighWaterMark,
        d = r(4281).q,
        p = d.ERR_INVALID_ARG_TYPE,
        b = d.ERR_METHOD_NOT_IMPLEMENTED,
        y = d.ERR_MULTIPLE_CALLBACK,
        m = d.ERR_STREAM_CANNOT_PIPE,
        g = d.ERR_STREAM_DESTROYED,
        v = d.ERR_STREAM_NULL_VALUES,
        w = d.ERR_STREAM_WRITE_AFTER_END,
        M = d.ERR_UNKNOWN_ENCODING,
        _ = c.errorOrDestroy;
      function S() {}
      function A(t, e, i) {
        (n = n || r(6753)),
          (t = t || {}),
          "boolean" != typeof i && (i = e instanceof n),
          (this.objectMode = !!t.objectMode),
          i && (this.objectMode = this.objectMode || !!t.writableObjectMode),
          (this.highWaterMark = l(this, t, "writableHighWaterMark", i)),
          (this.finalCalled = !1),
          (this.needDrain = !1),
          (this.ending = !1),
          (this.ended = !1),
          (this.finished = !1),
          (this.destroyed = !1);
        var s = !1 === t.decodeStrings;
        (this.decodeStrings = !s),
          (this.defaultEncoding = t.defaultEncoding || "utf8"),
          (this.length = 0),
          (this.writing = !1),
          (this.corked = 0),
          (this.sync = !0),
          (this.bufferProcessing = !1),
          (this.onwrite = function (t) {
            (function (t, e) {
              var r,
                n,
                i = t._writableState,
                a = i.sync,
                s = i.writecb;
              if ("function" != typeof s) throw new y();
              if (
                (((r = i).writing = !1),
                (r.writecb = null),
                (r.length -= r.writelen),
                (r.writelen = 0),
                e)
              )
                (n = t),
                  --i.pendingcb,
                  a
                    ? (o.nextTick(s, e),
                      o.nextTick(j, n, i),
                      (n._writableState.errorEmitted = !0),
                      _(n, e))
                    : (s(e),
                      (n._writableState.errorEmitted = !0),
                      _(n, e),
                      j(n, i));
              else {
                var f = R(i) || t.destroyed;
                f ||
                  i.corked ||
                  i.bufferProcessing ||
                  !i.bufferedRequest ||
                  k(t, i),
                  a ? o.nextTick(O, t, i, f, s) : O(t, i, f, s);
              }
            })(e, t);
          }),
          (this.writecb = null),
          (this.writelen = 0),
          (this.bufferedRequest = null),
          (this.lastBufferedRequest = null),
          (this.pendingcb = 0),
          (this.prefinished = !1),
          (this.errorEmitted = !1),
          (this.emitClose = !1 !== t.emitClose),
          (this.autoDestroy = !!t.autoDestroy),
          (this.bufferedRequestCount = 0),
          (this.corkedRequestsFree = new a(this));
      }
      function E(t) {
        var e = this instanceof (n = n || r(6753));
        if (!e && !i.call(E, this)) return new E(t);
        (this._writableState = new A(t, this, e)),
          (this.writable = !0),
          t &&
            ("function" == typeof t.write && (this._write = t.write),
            "function" == typeof t.writev && (this._writev = t.writev),
            "function" == typeof t.destroy && (this._destroy = t.destroy),
            "function" == typeof t.final && (this._final = t.final)),
          f.call(this);
      }
      function x(t, e, r, n, i, o, a) {
        (e.writelen = n),
          (e.writecb = a),
          (e.writing = !0),
          (e.sync = !0),
          e.destroyed
            ? e.onwrite(new g("write"))
            : r
            ? t._writev(i, e.onwrite)
            : t._write(i, o, e.onwrite),
          (e.sync = !1);
      }
      function O(t, e, r, n) {
        var i;
        r ||
          (0 === (i = e).length &&
            i.needDrain &&
            ((i.needDrain = !1), t.emit("drain"))),
          e.pendingcb--,
          n(),
          j(t, e);
      }
      function k(t, e) {
        e.bufferProcessing = !0;
        var r = e.bufferedRequest;
        if (t._writev && r && r.next) {
          var n = Array(e.bufferedRequestCount),
            i = e.corkedRequestsFree;
          i.entry = r;
          for (var o = 0, s = !0; r; )
            (n[o] = r), r.isBuf || (s = !1), (r = r.next), (o += 1);
          (n.allBuffers = s),
            x(t, e, !0, e.length, n, "", i.finish),
            e.pendingcb++,
            (e.lastBufferedRequest = null),
            i.next
              ? ((e.corkedRequestsFree = i.next), (i.next = null))
              : (e.corkedRequestsFree = new a(e)),
            (e.bufferedRequestCount = 0);
        } else {
          for (; r; ) {
            var f = r.chunk,
              u = r.encoding,
              h = r.callback,
              c = e.objectMode ? 1 : f.length;
            if (
              (x(t, e, !1, c, f, u, h),
              (r = r.next),
              e.bufferedRequestCount--,
              e.writing)
            )
              break;
          }
          null === r && (e.lastBufferedRequest = null);
        }
        (e.bufferedRequest = r), (e.bufferProcessing = !1);
      }
      function R(t) {
        return (
          t.ending &&
          0 === t.length &&
          null === t.bufferedRequest &&
          !t.finished &&
          !t.writing
        );
      }
      function P(t, e) {
        t._final(function (r) {
          e.pendingcb--,
            r && _(t, r),
            (e.prefinished = !0),
            t.emit("prefinish"),
            j(t, e);
        });
      }
      function j(t, e) {
        var r,
          n = R(e);
        if (
          n &&
          ((r = e).prefinished ||
            r.finalCalled ||
            ("function" != typeof t._final || r.destroyed
              ? ((r.prefinished = !0), t.emit("prefinish"))
              : (r.pendingcb++, (r.finalCalled = !0), o.nextTick(P, t, r))),
          0 === e.pendingcb &&
            ((e.finished = !0), t.emit("finish"), e.autoDestroy))
        ) {
          var i = t._readableState;
          (!i || (i.autoDestroy && i.endEmitted)) && t.destroy();
        }
        return n;
      }
      r(5717)(E, f),
        (A.prototype.getBuffer = function () {
          for (var t = this.bufferedRequest, e = []; t; )
            e.push(t), (t = t.next);
          return e;
        }),
        (function () {
          try {
            Object.defineProperty(A.prototype, "buffer", {
              get: s.deprecate(
                function () {
                  return this.getBuffer();
                },
                "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                "DEP0003"
              ),
            });
          } catch (t) {}
        })(),
        "function" == typeof Symbol &&
        Symbol.hasInstance &&
        "function" == typeof Function.prototype[Symbol.hasInstance]
          ? ((i = Function.prototype[Symbol.hasInstance]),
            Object.defineProperty(E, Symbol.hasInstance, {
              value: function (t) {
                return (
                  !!i.call(this, t) ||
                  (this === E && t && t._writableState instanceof A)
                );
              },
            }))
          : (i = function (t) {
              return t instanceof this;
            }),
        (E.prototype.pipe = function () {
          _(this, new m());
        }),
        (E.prototype.write = function (t, e, r) {
          var n,
            i,
            a,
            s,
            f,
            c,
            l,
            d = this._writableState,
            b = !1,
            y = !d.objectMode && ((n = t), u.isBuffer(n) || n instanceof h);
          return (
            y && !u.isBuffer(t) && ((i = t), (t = u.from(i))),
            ("function" == typeof e && ((r = e), (e = null)),
            y ? (e = "buffer") : e || (e = d.defaultEncoding),
            "function" != typeof r && (r = S),
            d.ending)
              ? ((a = r), _(this, (s = new w())), o.nextTick(a, s))
              : (y ||
                  ((f = t),
                  (c = r),
                  null === f
                    ? (l = new v())
                    : "string" == typeof f ||
                      d.objectMode ||
                      (l = new p("chunk", ["string", "Buffer"], f)),
                  !l || (_(this, l), o.nextTick(c, l), 0))) &&
                (d.pendingcb++,
                (b = (function (t, e, r, n, i, o) {
                  if (!r) {
                    var a,
                      s,
                      f =
                        ((a = n),
                        (s = i),
                        e.objectMode ||
                          !1 === e.decodeStrings ||
                          "string" != typeof a ||
                          (a = u.from(a, s)),
                        a);
                    n !== f && ((r = !0), (i = "buffer"), (n = f));
                  }
                  var h = e.objectMode ? 1 : n.length;
                  e.length += h;
                  var c = e.length < e.highWaterMark;
                  if ((c || (e.needDrain = !0), e.writing || e.corked)) {
                    var l = e.lastBufferedRequest;
                    (e.lastBufferedRequest = {
                      chunk: n,
                      encoding: i,
                      isBuf: r,
                      callback: o,
                      next: null,
                    }),
                      l
                        ? (l.next = e.lastBufferedRequest)
                        : (e.bufferedRequest = e.lastBufferedRequest),
                      (e.bufferedRequestCount += 1);
                  } else x(t, e, !1, h, n, i, o);
                  return c;
                })(this, d, y, t, e, r))),
            b
          );
        }),
        (E.prototype.cork = function () {
          this._writableState.corked++;
        }),
        (E.prototype.uncork = function () {
          var t = this._writableState;
          !t.corked ||
            (t.corked--,
            t.writing ||
              t.corked ||
              t.bufferProcessing ||
              !t.bufferedRequest ||
              k(this, t));
        }),
        (E.prototype.setDefaultEncoding = function (t) {
          if (
            ("string" == typeof t && (t = t.toLowerCase()),
            !(
              [
                "hex",
                "utf8",
                "utf-8",
                "ascii",
                "binary",
                "base64",
                "ucs2",
                "ucs-2",
                "utf16le",
                "utf-16le",
                "raw",
              ].indexOf((t + "").toLowerCase()) > -1
            ))
          )
            throw new M(t);
          return (this._writableState.defaultEncoding = t), this;
        }),
        Object.defineProperty(E.prototype, "writableBuffer", {
          enumerable: !1,
          get: function () {
            return this._writableState && this._writableState.getBuffer();
          },
        }),
        Object.defineProperty(E.prototype, "writableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._writableState.highWaterMark;
          },
        }),
        (E.prototype._write = function (t, e, r) {
          r(new b("_write()"));
        }),
        (E.prototype._writev = null),
        (E.prototype.end = function (t, e, r) {
          var n,
            i,
            a,
            s = this._writableState;
          return (
            "function" == typeof t
              ? ((r = t), (t = null), (e = null))
              : "function" == typeof e && ((r = e), (e = null)),
            null != t && this.write(t, e),
            s.corked && ((s.corked = 1), this.uncork()),
            s.ending ||
              ((n = this),
              (i = s),
              (a = r),
              (i.ending = !0),
              j(n, i),
              a && (i.finished ? o.nextTick(a) : n.once("finish", a)),
              (i.ended = !0),
              (n.writable = !1)),
            this
          );
        }),
        Object.defineProperty(E.prototype, "writableLength", {
          enumerable: !1,
          get: function () {
            return this._writableState.length;
          },
        }),
        Object.defineProperty(E.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._writableState && this._writableState.destroyed
            );
          },
          set: function (t) {
            this._writableState && (this._writableState.destroyed = t);
          },
        }),
        (E.prototype.destroy = c.destroy),
        (E.prototype._undestroy = c.undestroy),
        (E.prototype._destroy = function (t, e) {
          e(t);
        });
    },
    5850: function (t, e, r) {
      "use strict";
      var n,
        i = r(3454);
      function o(t, e, r) {
        var n;
        return (
          (e =
            "symbol" ==
            typeof (n = (function (t, e) {
              if ("object" != typeof t || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" != typeof n) return n;
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === e ? String : Number)(t);
            })(e, "string"))
              ? n
              : String(n)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var a = r(8610),
        s = Symbol("lastResolve"),
        f = Symbol("lastReject"),
        u = Symbol("error"),
        h = Symbol("ended"),
        c = Symbol("lastPromise"),
        l = Symbol("handlePromise"),
        d = Symbol("stream");
      function p(t, e) {
        return { value: t, done: e };
      }
      function b(t) {
        var e = t[s];
        if (null !== e) {
          var r = t[d].read();
          null !== r &&
            ((t[c] = null), (t[s] = null), (t[f] = null), e(p(r, !1)));
        }
      }
      function y(t) {
        i.nextTick(b, t);
      }
      var m = Object.getPrototypeOf(function () {}),
        g = Object.setPrototypeOf(
          (o(
            (n = {
              get stream() {
                return this[d];
              },
              next: function () {
                var t,
                  e,
                  r = this,
                  n = this[u];
                if (null !== n) return Promise.reject(n);
                if (this[h]) return Promise.resolve(p(void 0, !0));
                if (this[d].destroyed)
                  return new Promise(function (t, e) {
                    i.nextTick(function () {
                      r[u] ? e(r[u]) : t(p(void 0, !0));
                    });
                  });
                var o = this[c];
                if (o)
                  e = new Promise(
                    ((t = this),
                    function (e, r) {
                      o.then(function () {
                        if (t[h]) {
                          e(p(void 0, !0));
                          return;
                        }
                        t[l](e, r);
                      }, r);
                    })
                  );
                else {
                  var a = this[d].read();
                  if (null !== a) return Promise.resolve(p(a, !1));
                  e = new Promise(this[l]);
                }
                return (this[c] = e), e;
              },
            }),
            Symbol.asyncIterator,
            function () {
              return this;
            }
          ),
          o(n, "return", function () {
            var t = this;
            return new Promise(function (e, r) {
              t[d].destroy(null, function (t) {
                if (t) {
                  r(t);
                  return;
                }
                e(p(void 0, !0));
              });
            });
          }),
          n),
          m
        );
      t.exports = function (t) {
        var e,
          r = Object.create(
            g,
            (o((e = {}), d, { value: t, writable: !0 }),
            o(e, s, { value: null, writable: !0 }),
            o(e, f, { value: null, writable: !0 }),
            o(e, u, { value: null, writable: !0 }),
            o(e, h, { value: t._readableState.endEmitted, writable: !0 }),
            o(e, l, {
              value: function (t, e) {
                var n = r[d].read();
                n
                  ? ((r[c] = null), (r[s] = null), (r[f] = null), t(p(n, !1)))
                  : ((r[s] = t), (r[f] = e));
              },
              writable: !0,
            }),
            e)
          );
        return (
          (r[c] = null),
          a(t, function (t) {
            if (t && "ERR_STREAM_PREMATURE_CLOSE" !== t.code) {
              var e = r[f];
              null !== e && ((r[c] = null), (r[s] = null), (r[f] = null), e(t)),
                (r[u] = t);
              return;
            }
            var n = r[s];
            null !== n &&
              ((r[c] = null), (r[s] = null), (r[f] = null), n(p(void 0, !0))),
              (r[h] = !0);
          }),
          t.on("readable", y.bind(null, r)),
          r
        );
      };
    },
    7327: function (t, e, r) {
      "use strict";
      function n(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function i(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? n(Object(r), !0).forEach(function (e) {
                var n, i, o;
                (n = t),
                  (i = e),
                  (o = r[e]),
                  (i = a(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = o);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : n(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function o(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, a(n.key), n);
        }
      }
      function a(t) {
        var e = (function (t, e) {
          if ("object" != typeof t || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != typeof n) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == typeof e ? e : String(e);
      }
      var s = r(8764).Buffer,
        f = r(2361).inspect,
        u = (f && f.custom) || "inspect";
      t.exports = (function () {
        var t, e;
        function r() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw TypeError("Cannot call a class as a function");
          })(this, r),
            (this.head = null),
            (this.tail = null),
            (this.length = 0);
        }
        return (
          (t = [
            {
              key: "push",
              value: function (t) {
                var e = { data: t, next: null };
                this.length > 0 ? (this.tail.next = e) : (this.head = e),
                  (this.tail = e),
                  ++this.length;
              },
            },
            {
              key: "unshift",
              value: function (t) {
                var e = { data: t, next: this.head };
                0 === this.length && (this.tail = e),
                  (this.head = e),
                  ++this.length;
              },
            },
            {
              key: "shift",
              value: function () {
                if (0 !== this.length) {
                  var t = this.head.data;
                  return (
                    1 === this.length
                      ? (this.head = this.tail = null)
                      : (this.head = this.head.next),
                    --this.length,
                    t
                  );
                }
              },
            },
            {
              key: "clear",
              value: function () {
                (this.head = this.tail = null), (this.length = 0);
              },
            },
            {
              key: "join",
              value: function (t) {
                if (0 === this.length) return "";
                for (var e = this.head, r = "" + e.data; (e = e.next); )
                  r += t + e.data;
                return r;
              },
            },
            {
              key: "concat",
              value: function (t) {
                if (0 === this.length) return s.alloc(0);
                for (
                  var e, r, n = s.allocUnsafe(t >>> 0), i = this.head, o = 0;
                  i;

                )
                  (e = i.data),
                    (r = o),
                    s.prototype.copy.call(e, n, r),
                    (o += i.data.length),
                    (i = i.next);
                return n;
              },
            },
            {
              key: "consume",
              value: function (t, e) {
                var r;
                return (
                  t < this.head.data.length
                    ? ((r = this.head.data.slice(0, t)),
                      (this.head.data = this.head.data.slice(t)))
                    : (r =
                        t === this.head.data.length
                          ? this.shift()
                          : e
                          ? this._getString(t)
                          : this._getBuffer(t)),
                  r
                );
              },
            },
            {
              key: "first",
              value: function () {
                return this.head.data;
              },
            },
            {
              key: "_getString",
              value: function (t) {
                var e = this.head,
                  r = 1,
                  n = e.data;
                for (t -= n.length; (e = e.next); ) {
                  var i = e.data,
                    o = t > i.length ? i.length : t;
                  if (
                    (o === i.length ? (n += i) : (n += i.slice(0, t)),
                    0 == (t -= o))
                  ) {
                    o === i.length
                      ? (++r,
                        e.next
                          ? (this.head = e.next)
                          : (this.head = this.tail = null))
                      : ((this.head = e), (e.data = i.slice(o)));
                    break;
                  }
                  ++r;
                }
                return (this.length -= r), n;
              },
            },
            {
              key: "_getBuffer",
              value: function (t) {
                var e = s.allocUnsafe(t),
                  r = this.head,
                  n = 1;
                for (r.data.copy(e), t -= r.data.length; (r = r.next); ) {
                  var i = r.data,
                    o = t > i.length ? i.length : t;
                  if ((i.copy(e, e.length - t, 0, o), 0 == (t -= o))) {
                    o === i.length
                      ? (++n,
                        r.next
                          ? (this.head = r.next)
                          : (this.head = this.tail = null))
                      : ((this.head = r), (r.data = i.slice(o)));
                    break;
                  }
                  ++n;
                }
                return (this.length -= n), e;
              },
            },
            {
              key: u,
              value: function (t, e) {
                return f(
                  this,
                  i(i({}, e), {}, { depth: 0, customInspect: !1 })
                );
              },
            },
          ]),
          o(r.prototype, t),
          e && o(r, e),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
      })();
    },
    1195: function (t, e, r) {
      "use strict";
      var n = r(3454);
      function i(t, e) {
        a(t, e), o(t);
      }
      function o(t) {
        (!t._writableState || t._writableState.emitClose) &&
          (!t._readableState || t._readableState.emitClose) &&
          t.emit("close");
      }
      function a(t, e) {
        t.emit("error", e);
      }
      t.exports = {
        destroy: function (t, e) {
          var r = this,
            s = this._readableState && this._readableState.destroyed,
            f = this._writableState && this._writableState.destroyed;
          return s || f
            ? (e
                ? e(t)
                : t &&
                  (this._writableState
                    ? this._writableState.errorEmitted ||
                      ((this._writableState.errorEmitted = !0),
                      n.nextTick(a, this, t))
                    : n.nextTick(a, this, t)),
              this)
            : (this._readableState && (this._readableState.destroyed = !0),
              this._writableState && (this._writableState.destroyed = !0),
              this._destroy(t || null, function (t) {
                !e && t
                  ? r._writableState
                    ? r._writableState.errorEmitted
                      ? n.nextTick(o, r)
                      : ((r._writableState.errorEmitted = !0),
                        n.nextTick(i, r, t))
                    : n.nextTick(i, r, t)
                  : e
                  ? (n.nextTick(o, r), e(t))
                  : n.nextTick(o, r);
              }),
              this);
        },
        undestroy: function () {
          this._readableState &&
            ((this._readableState.destroyed = !1),
            (this._readableState.reading = !1),
            (this._readableState.ended = !1),
            (this._readableState.endEmitted = !1)),
            this._writableState &&
              ((this._writableState.destroyed = !1),
              (this._writableState.ended = !1),
              (this._writableState.ending = !1),
              (this._writableState.finalCalled = !1),
              (this._writableState.prefinished = !1),
              (this._writableState.finished = !1),
              (this._writableState.errorEmitted = !1));
        },
        errorOrDestroy: function (t, e) {
          var r = t._readableState,
            n = t._writableState;
          (r && r.autoDestroy) || (n && n.autoDestroy)
            ? t.destroy(e)
            : t.emit("error", e);
        },
      };
    },
    8610: function (t, e, r) {
      "use strict";
      var n = r(4281).q.ERR_STREAM_PREMATURE_CLOSE;
      function i() {}
      t.exports = function t(e, r, o) {
        if ("function" == typeof r) return t(e, null, r);
        r || (r = {}),
          (a = o || i),
          (s = !1),
          (o = function () {
            if (!s) {
              s = !0;
              for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
                e[r] = arguments[r];
              a.apply(this, e);
            }
          });
        var a,
          s,
          f = r.readable || (!1 !== r.readable && e.readable),
          u = r.writable || (!1 !== r.writable && e.writable),
          h = function () {
            e.writable || l();
          },
          c = e._writableState && e._writableState.finished,
          l = function () {
            (u = !1), (c = !0), f || o.call(e);
          },
          d = e._readableState && e._readableState.endEmitted,
          p = function () {
            (f = !1), (d = !0), u || o.call(e);
          },
          b = function (t) {
            o.call(e, t);
          },
          y = function () {
            var t;
            return f && !d
              ? ((e._readableState && e._readableState.ended) || (t = new n()),
                o.call(e, t))
              : u && !c
              ? ((e._writableState && e._writableState.ended) || (t = new n()),
                o.call(e, t))
              : void 0;
          },
          m = function () {
            e.req.on("finish", l);
          };
        return (
          e.setHeader && "function" == typeof e.abort
            ? (e.on("complete", l),
              e.on("abort", y),
              e.req ? m() : e.on("request", m))
            : u && !e._writableState && (e.on("end", h), e.on("close", h)),
          e.on("end", p),
          e.on("finish", l),
          !1 !== r.error && e.on("error", b),
          e.on("close", y),
          function () {
            e.removeListener("complete", l),
              e.removeListener("abort", y),
              e.removeListener("request", m),
              e.req && e.req.removeListener("finish", l),
              e.removeListener("end", h),
              e.removeListener("close", h),
              e.removeListener("finish", l),
              e.removeListener("end", p),
              e.removeListener("error", b),
              e.removeListener("close", y);
          }
        );
      };
    },
    5167: function (t) {
      t.exports = function () {
        throw Error("Readable.from is not available in the browser");
      };
    },
    9946: function (t, e, r) {
      "use strict";
      var n,
        i = r(4281).q,
        o = i.ERR_MISSING_ARGS,
        a = i.ERR_STREAM_DESTROYED;
      function s(t) {
        if (t) throw t;
      }
      function f(t) {
        t();
      }
      function u(t, e) {
        return t.pipe(e);
      }
      t.exports = function () {
        for (var t, e, i = arguments.length, h = Array(i), c = 0; c < i; c++)
          h[c] = arguments[c];
        var l =
          (t = h).length && "function" == typeof t[t.length - 1] ? t.pop() : s;
        if ((Array.isArray(h[0]) && (h = h[0]), h.length < 2))
          throw new o("streams");
        var d = h.map(function (t, i) {
          var o,
            s,
            u,
            c,
            p,
            b = i < h.length - 1;
          return (
            (s = o =
              function (t) {
                e || (e = t), t && d.forEach(f), b || (d.forEach(f), l(e));
              }),
            (u = !1),
            (o = function () {
              u || ((u = !0), s.apply(void 0, arguments));
            }),
            (c = !1),
            t.on("close", function () {
              c = !0;
            }),
            void 0 === n && (n = r(8610)),
            n(t, { readable: b, writable: i > 0 }, function (t) {
              if (t) return o(t);
              (c = !0), o();
            }),
            (p = !1),
            function (e) {
              if (!c && !p) {
                if (((p = !0), t.setHeader && "function" == typeof t.abort))
                  return t.abort();
                if ("function" == typeof t.destroy) return t.destroy();
                o(e || new a("pipe"));
              }
            }
          );
        });
        return h.reduce(u);
      };
    },
    2457: function (t, e, r) {
      "use strict";
      var n = r(4281).q.ERR_INVALID_OPT_VALUE;
      t.exports = {
        getHighWaterMark: function (t, e, r, i) {
          var o = null != e.highWaterMark ? e.highWaterMark : i ? e[r] : null;
          if (null != o) {
            if (!(isFinite(o) && Math.floor(o) === o) || o < 0)
              throw new n(i ? r : "highWaterMark", o);
            return Math.floor(o);
          }
          return t.objectMode ? 16 : 16384;
        },
      };
    },
    2503: function (t, e, r) {
      t.exports = r(7187).EventEmitter;
    },
    8473: function (t, e, r) {
      ((e = t.exports = r(9481)).Stream = e),
        (e.Readable = e),
        (e.Writable = r(4229)),
        (e.Duplex = r(6753)),
        (e.Transform = r(4605)),
        (e.PassThrough = r(2725)),
        (e.finished = r(8610)),
        (e.pipeline = r(9946));
    },
    9785: function (t, e, r) {
      "use strict";
      var n = r(8764).Buffer,
        i = r(5717),
        o = r(3349),
        a = Array(16),
        s = [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10,
          6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7,
          0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5,
          6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
        ],
        f = [
          5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0,
          13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8,
          12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10,
          14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
        ],
        u = [
          11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13,
          11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13,
          15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5,
          6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5,
          6,
        ],
        h = [
          8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7,
          12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14,
          12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9,
          12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
        ];
      function c() {
        o.call(this, 64),
          (this._a = 1732584193),
          (this._b = 4023233417),
          (this._c = 2562383102),
          (this._d = 271733878),
          (this._e = 3285377520);
      }
      function l(t, e) {
        return (t << e) | (t >>> (32 - e));
      }
      i(c, o),
        (c.prototype._update = function () {
          for (
            var t,
              e,
              r,
              n,
              i,
              o,
              c,
              d,
              p,
              b,
              y,
              m,
              g,
              v,
              w,
              M,
              _,
              S,
              A,
              E,
              x,
              O,
              k,
              R,
              P,
              j,
              I,
              T,
              B,
              N,
              L,
              C,
              q,
              U,
              F,
              D,
              z,
              H,
              W,
              K,
              V,
              Z,
              G,
              $,
              J,
              Y,
              X,
              Q,
              tt,
              te,
              tr,
              tn,
              ti,
              to,
              ta,
              ts,
              tf,
              tu,
              th,
              tc,
              tl,
              td,
              tp,
              tb,
              ty,
              tm,
              tg,
              tv,
              tw,
              tM,
              t_,
              tS,
              tA = a,
              tE = 0;
            tE < 16;
            ++tE
          )
            tA[tE] = this._block.readInt32LE(4 * tE);
          for (
            var tx = 0 | this._a,
              tO = 0 | this._b,
              tk = 0 | this._c,
              tR = 0 | this._d,
              tP = 0 | this._e,
              tj = 0 | this._a,
              tI = 0 | this._b,
              tT = 0 | this._c,
              tB = 0 | this._d,
              tN = 0 | this._e,
              tL = 0;
            tL < 80;
            tL += 1
          )
            tL < 16
              ? ((t = tx),
                (e = tO),
                (r = tk),
                (n = tR),
                (i = tP),
                (t_ =
                  (l((t + (e ^ r ^ n) + tA[s[tL]] + 0) | 0, u[tL]) + i) | 0),
                (d = tj),
                (p = tI),
                (b = tT),
                (y = tB),
                (m = tN),
                (tS =
                  (l((d + (p ^ (b | ~y)) + tA[f[tL]] + 1352829926) | 0, h[tL]) +
                    m) |
                  0))
              : tL < 32
              ? ((w = tx),
                (M = tO),
                (_ = tk),
                (S = tR),
                (A = tP),
                (t_ =
                  (l(
                    (w + ((M & _) | (~M & S)) + tA[s[tL]] + 1518500249) | 0,
                    u[tL]
                  ) +
                    A) |
                  0),
                (O = tj),
                (k = tI),
                (R = tT),
                (P = tB),
                (j = tN),
                (tS =
                  (l(
                    (O + ((k & P) | (R & ~P)) + tA[f[tL]] + 1548603684) | 0,
                    h[tL]
                  ) +
                    j) |
                  0))
              : tL < 48
              ? ((B = tx),
                (N = tO),
                (L = tk),
                (C = tR),
                (q = tP),
                (t_ =
                  (l((B + ((N | ~L) ^ C) + tA[s[tL]] + 1859775393) | 0, u[tL]) +
                    q) |
                  0),
                (D = tj),
                (z = tI),
                (H = tT),
                (W = tB),
                (K = tN),
                (tS =
                  (l((D + ((z | ~H) ^ W) + tA[f[tL]] + 1836072691) | 0, h[tL]) +
                    K) |
                  0))
              : tL < 64
              ? ((G = tx),
                ($ = tO),
                (J = tk),
                (Y = tR),
                (X = tP),
                (t_ =
                  (l(
                    (G + (($ & Y) | (J & ~Y)) + tA[s[tL]] + 2400959708) | 0,
                    u[tL]
                  ) +
                    X) |
                  0),
                (te = tj),
                (tr = tI),
                (tn = tT),
                (ti = tB),
                (to = tN),
                (tS =
                  (l(
                    (te + ((tr & tn) | (~tr & ti)) + tA[f[tL]] + 2053994217) |
                      0,
                    h[tL]
                  ) +
                    to) |
                  0))
              : ((tf = tx),
                (tu = tO),
                (th = tk),
                (tc = tR),
                (tl = tP),
                (t_ =
                  (l(
                    (tf + (tu ^ (th | ~tc)) + tA[s[tL]] + 2840853838) | 0,
                    u[tL]
                  ) +
                    tl) |
                  0),
                (tb = tj),
                (ty = tI),
                (tm = tT),
                (tg = tB),
                (tv = tN),
                (tS =
                  (l((tb + (ty ^ tm ^ tg) + tA[f[tL]] + 0) | 0, h[tL]) + tv) |
                  0)),
              (tx = tP),
              (tP = tR),
              (tR = l(tk, 10)),
              (tk = tO),
              (tO = t_),
              (tj = tN),
              (tN = tB),
              (tB = l(tT, 10)),
              (tT = tI),
              (tI = tS);
          var tC = (this._b + tk + tB) | 0;
          (this._b = (this._c + tR + tN) | 0),
            (this._c = (this._d + tP + tj) | 0),
            (this._d = (this._e + tx + tI) | 0),
            (this._e = (this._a + tO + tT) | 0),
            (this._a = tC);
        }),
        (c.prototype._digest = function () {
          (this._block[this._blockOffset++] = 128),
            this._blockOffset > 56 &&
              (this._block.fill(0, this._blockOffset, 64),
              this._update(),
              (this._blockOffset = 0)),
            this._block.fill(0, this._blockOffset, 56),
            this._block.writeUInt32LE(this._length[0], 56),
            this._block.writeUInt32LE(this._length[1], 60),
            this._update();
          var t = n.alloc ? n.alloc(20) : new n(20);
          return (
            t.writeInt32LE(this._a, 0),
            t.writeInt32LE(this._b, 4),
            t.writeInt32LE(this._c, 8),
            t.writeInt32LE(this._d, 12),
            t.writeInt32LE(this._e, 16),
            t
          );
        }),
        (t.exports = c);
    },
    1675: function (t, e, r) {
      "use strict";
      var n = r(8764).Buffer,
        i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getLength = e.decode = e.encode = void 0);
      var o = i(r(3550));
      function a(t, e) {
        if ("0" === t[0] && "0" === t[1])
          throw Error("invalid RLP: extra zeros");
        return parseInt(t, e);
      }
      function s(t, e) {
        if (t < 56) return n.from([t + e]);
        var r = u(t),
          i = u(e + 55 + r.length / 2);
        return n.from(i + r, "hex");
      }
      function f(t) {
        return "0x" === t.slice(0, 2);
      }
      function u(t) {
        if (t < 0)
          throw Error("Invalid integer as argument, must be unsigned!");
        var e = t.toString(16);
        return e.length % 2 ? "0" + e : e;
      }
      function h(t) {
        if (!n.isBuffer(t)) {
          var e, r;
          if ("string" == typeof t)
            return f(t)
              ? n.from(
                  (e = "string" != typeof t ? t : f(t) ? t.slice(2) : t)
                    .length % 2
                    ? "0" + e
                    : e,
                  "hex"
                )
              : n.from(t);
          if ("number" == typeof t || "bigint" == typeof t)
            return t ? ((r = u(t)), n.from(r, "hex")) : n.from([]);
          if (null == t) return n.from([]);
          if (t instanceof Uint8Array) return n.from(t);
          else if (o.default.isBN(t)) return n.from(t.toArray());
          else throw Error("invalid type");
        }
        return t;
      }
      (e.encode = function t(e) {
        if (Array.isArray(e)) {
          for (var r = [], i = 0; i < e.length; i++) r.push(t(e[i]));
          var o = n.concat(r);
          return n.concat([s(o.length, 192), o]);
        }
        var a = h(e);
        return 1 === a.length && a[0] < 128
          ? a
          : n.concat([s(a.length, 128), a]);
      }),
        (e.decode = function (t, e) {
          if ((void 0 === e && (e = !1), !t || 0 === t.length))
            return n.from([]);
          var r = (function t(e) {
            var r,
              i,
              o,
              s,
              f,
              u = [],
              h = e[0];
            if (h <= 127) return { data: e.slice(0, 1), remainder: e.slice(1) };
            if (h <= 183) {
              if (
                ((r = h - 127),
                (o = 128 === h ? n.from([]) : e.slice(1, r)),
                2 === r && o[0] < 128)
              )
                throw Error("invalid rlp encoding: byte must be less 0x80");
              return { data: o, remainder: e.slice(r) };
            }
            if (h <= 191) {
              if (((i = h - 182), e.length - 1 < i))
                throw Error("invalid RLP: not enough bytes for string length");
              if ((r = a(e.slice(1, i).toString("hex"), 16)) <= 55)
                throw Error(
                  "invalid RLP: expected string length to be greater than 55"
                );
              if ((o = e.slice(i, r + i)).length < r)
                throw Error("invalid RLP: not enough bytes for string");
              return { data: o, remainder: e.slice(r + i) };
            }
            if (h <= 247) {
              for (r = h - 191, s = e.slice(1, r); s.length; )
                (f = t(s)), u.push(f.data), (s = f.remainder);
              return { data: u, remainder: e.slice(r) };
            }
            (i = h - 246), (r = a(e.slice(1, i).toString("hex"), 16));
            var c = i + r;
            if (c > e.length)
              throw Error("invalid rlp: total length is larger than the data");
            if (0 === (s = e.slice(i, c)).length)
              throw Error("invalid rlp, List has a invalid length");
            for (; s.length; ) (f = t(s)), u.push(f.data), (s = f.remainder);
            return { data: u, remainder: e.slice(c) };
          })(h(t));
          if (e) return r;
          if (0 !== r.remainder.length) throw Error("invalid remainder");
          return r.data;
        }),
        (e.getLength = function (t) {
          if (!t || 0 === t.length) return n.from([]);
          var e = h(t),
            r = e[0];
          if (r <= 127) return e.length;
          if (r <= 183) return r - 127;
          if (r <= 191) return r - 182;
          if (r <= 247) return r - 191;
          var i = r - 246,
            o = a(e.slice(1, i).toString("hex"), 16);
          return i + o;
        });
    },
    9509: function (t, e, r) {
      /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ var n =
          r(8764),
        i = n.Buffer;
      function o(t, e) {
        for (var r in t) e[r] = t[r];
      }
      function a(t, e, r) {
        return i(t, e, r);
      }
      i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
        ? (t.exports = n)
        : (o(n, e), (e.Buffer = a)),
        (a.prototype = Object.create(i.prototype)),
        o(i, a),
        (a.from = function (t, e, r) {
          if ("number" == typeof t)
            throw TypeError("Argument must not be a number");
          return i(t, e, r);
        }),
        (a.alloc = function (t, e, r) {
          if ("number" != typeof t)
            throw TypeError("Argument must be a number");
          var n = i(t);
          return (
            void 0 !== e
              ? "string" == typeof r
                ? n.fill(e, r)
                : n.fill(e)
              : n.fill(0),
            n
          );
        }),
        (a.allocUnsafe = function (t) {
          if ("number" != typeof t)
            throw TypeError("Argument must be a number");
          return i(t);
        }),
        (a.allocUnsafeSlow = function (t) {
          if ("number" != typeof t)
            throw TypeError("Argument must be a number");
          return n.SlowBuffer(t);
        });
    },
    7221: function (t, e, r) {
      t.exports = r(9119)(r(8573));
    },
    8573: function (t, e, r) {
      let n = r(6266).ec,
        i = new n("secp256k1"),
        o = i.curve,
        a = o.n.constructor;
      function s(t) {
        let e = t[0];
        switch (e) {
          case 2:
          case 3:
            if (33 !== t.length) return null;
            return (function (t, e) {
              let r = new a(e);
              if (r.cmp(o.p) >= 0) return null;
              let n = (r = r.toRed(o.red))
                .redSqr()
                .redIMul(r)
                .redIAdd(o.b)
                .redSqrt();
              return (
                (3 === t) !== n.isOdd() && (n = n.redNeg()),
                i.keyPair({ pub: { x: r, y: n } })
              );
            })(e, t.subarray(1, 33));
          case 4:
          case 6:
          case 7:
            if (65 !== t.length) return null;
            return (function (t, e, r) {
              let n = new a(e),
                s = new a(r);
              if (
                n.cmp(o.p) >= 0 ||
                s.cmp(o.p) >= 0 ||
                ((n = n.toRed(o.red)),
                (s = s.toRed(o.red)),
                (6 === t || 7 === t) && s.isOdd() !== (7 === t))
              )
                return null;
              let f = n.redSqr().redIMul(n);
              return s.redSqr().redISub(f.redIAdd(o.b)).isZero()
                ? i.keyPair({ pub: { x: n, y: s } })
                : null;
            })(e, t.subarray(1, 33), t.subarray(33, 65));
          default:
            return null;
        }
      }
      function f(t, e) {
        let r = e.encode(null, 33 === t.length);
        for (let e = 0; e < t.length; ++e) t[e] = r[e];
      }
      t.exports = {
        contextRandomize: () => 0,
        privateKeyVerify(t) {
          let e = new a(t);
          return 0 > e.cmp(o.n) && !e.isZero() ? 0 : 1;
        },
        privateKeyNegate(t) {
          let e = new a(t),
            r = o.n.sub(e).umod(o.n).toArrayLike(Uint8Array, "be", 32);
          return t.set(r), 0;
        },
        privateKeyTweakAdd(t, e) {
          let r = new a(e);
          if (
            r.cmp(o.n) >= 0 ||
            (r.iadd(new a(t)), r.cmp(o.n) >= 0 && r.isub(o.n), r.isZero())
          )
            return 1;
          let n = r.toArrayLike(Uint8Array, "be", 32);
          return t.set(n), 0;
        },
        privateKeyTweakMul(t, e) {
          let r = new a(e);
          if (r.cmp(o.n) >= 0 || r.isZero()) return 1;
          r.imul(new a(t)), r.cmp(o.n) >= 0 && (r = r.umod(o.n));
          let n = r.toArrayLike(Uint8Array, "be", 32);
          return t.set(n), 0;
        },
        publicKeyVerify(t) {
          let e = s(t);
          return null === e ? 1 : 0;
        },
        publicKeyCreate(t, e) {
          let r = new a(e);
          if (r.cmp(o.n) >= 0 || r.isZero()) return 1;
          let n = i.keyFromPrivate(e).getPublic();
          return f(t, n), 0;
        },
        publicKeyConvert(t, e) {
          let r = s(e);
          if (null === r) return 1;
          let n = r.getPublic();
          return f(t, n), 0;
        },
        publicKeyNegate(t, e) {
          let r = s(e);
          if (null === r) return 1;
          let n = r.getPublic();
          return (n.y = n.y.redNeg()), f(t, n), 0;
        },
        publicKeyCombine(t, e) {
          let r = Array(e.length);
          for (let t = 0; t < e.length; ++t)
            if (((r[t] = s(e[t])), null === r[t])) return 1;
          let n = r[0].getPublic();
          for (let t = 1; t < r.length; ++t) n = n.add(r[t].pub);
          return n.isInfinity() ? 2 : (f(t, n), 0);
        },
        publicKeyTweakAdd(t, e, r) {
          let n = s(e);
          if (null === n) return 1;
          if ((r = new a(r)).cmp(o.n) >= 0) return 2;
          let i = n.getPublic().add(o.g.mul(r));
          return i.isInfinity() ? 2 : (f(t, i), 0);
        },
        publicKeyTweakMul(t, e, r) {
          let n = s(e);
          if (null === n) return 1;
          if ((r = new a(r)).cmp(o.n) >= 0 || r.isZero()) return 2;
          let i = n.getPublic().mul(r);
          return f(t, i), 0;
        },
        signatureNormalize(t) {
          let e = new a(t.subarray(0, 32)),
            r = new a(t.subarray(32, 64));
          return e.cmp(o.n) >= 0 || r.cmp(o.n) >= 0
            ? 1
            : (1 === r.cmp(i.nh) &&
                t.set(o.n.sub(r).toArrayLike(Uint8Array, "be", 32), 32),
              0);
        },
        signatureExport(t, e) {
          let r = e.subarray(0, 32),
            n = e.subarray(32, 64);
          if (new a(r).cmp(o.n) >= 0 || new a(n).cmp(o.n) >= 0) return 1;
          let { output: i } = t,
            s = i.subarray(4, 37);
          (s[0] = 0), s.set(r, 1);
          let f = 33,
            u = 0;
          for (; f > 1 && 0 === s[u] && !(128 & s[u + 1]); --f, ++u);
          if (
            128 & (s = s.subarray(u))[0] ||
            (f > 1 && 0 === s[0] && !(128 & s[1]))
          )
            return 1;
          let h = i.subarray(39, 72);
          (h[0] = 0), h.set(n, 1);
          let c = 33,
            l = 0;
          for (; c > 1 && 0 === h[l] && !(128 & h[l + 1]); --c, ++l);
          return 128 & (h = h.subarray(l))[0] ||
            (c > 1 && 0 === h[0] && !(128 & h[1]))
            ? 1
            : ((t.outputlen = 6 + f + c),
              (i[0] = 48),
              (i[1] = t.outputlen - 2),
              (i[2] = 2),
              (i[3] = s.length),
              i.set(s, 4),
              (i[4 + f] = 2),
              (i[5 + f] = h.length),
              i.set(h, 6 + f),
              0);
        },
        signatureImport(t, e) {
          if (
            e.length < 8 ||
            e.length > 72 ||
            48 !== e[0] ||
            e[1] !== e.length - 2 ||
            2 !== e[2]
          )
            return 1;
          let r = e[3];
          if (0 === r || 5 + r >= e.length || 2 !== e[4 + r]) return 1;
          let n = e[5 + r];
          if (
            0 === n ||
            6 + r + n !== e.length ||
            128 & e[4] ||
            (r > 1 && 0 === e[4] && !(128 & e[5])) ||
            128 & e[r + 6] ||
            (n > 1 && 0 === e[r + 6] && !(128 & e[r + 7]))
          )
            return 1;
          let i = e.subarray(4, 4 + r);
          if (
            (33 === i.length && 0 === i[0] && (i = i.subarray(1)),
            i.length > 32)
          )
            return 1;
          let s = e.subarray(6 + r);
          if (
            (33 === s.length && 0 === s[0] && (s = s.slice(1)), s.length > 32)
          )
            throw Error("S length is too long");
          let f = new a(i);
          f.cmp(o.n) >= 0 && (f = new a(0));
          let u = new a(e.subarray(6 + r));
          return (
            u.cmp(o.n) >= 0 && (u = new a(0)),
            t.set(f.toArrayLike(Uint8Array, "be", 32), 0),
            t.set(u.toArrayLike(Uint8Array, "be", 32), 32),
            0
          );
        },
        ecdsaSign(t, e, r, n, s) {
          let f;
          if (s) {
            let t = s;
            s = (i) => {
              let o = t(e, r, null, n, i),
                s = o instanceof Uint8Array && 32 === o.length;
              if (!s) throw Error("This is the way");
              return new a(o);
            };
          }
          let u = new a(r);
          if (u.cmp(o.n) >= 0 || u.isZero()) return 1;
          try {
            f = i.sign(e, r, { canonical: !0, k: s, pers: n });
          } catch (t) {
            return 1;
          }
          return (
            t.signature.set(f.r.toArrayLike(Uint8Array, "be", 32), 0),
            t.signature.set(f.s.toArrayLike(Uint8Array, "be", 32), 32),
            (t.recid = f.recoveryParam),
            0
          );
        },
        ecdsaVerify(t, e, r) {
          let n = { r: t.subarray(0, 32), s: t.subarray(32, 64) },
            f = new a(n.r),
            u = new a(n.s);
          if (f.cmp(o.n) >= 0 || u.cmp(o.n) >= 0) return 1;
          if (1 === u.cmp(i.nh) || f.isZero() || u.isZero()) return 3;
          let h = s(r);
          if (null === h) return 2;
          let c = h.getPublic(),
            l = i.verify(e, n, c);
          return l ? 0 : 3;
        },
        ecdsaRecover(t, e, r, n) {
          let s;
          let u = { r: e.slice(0, 32), s: e.slice(32, 64) },
            h = new a(u.r),
            c = new a(u.s);
          if (h.cmp(o.n) >= 0 || c.cmp(o.n) >= 0) return 1;
          if (h.isZero() || c.isZero()) return 2;
          try {
            s = i.recoverPubKey(n, u, r);
          } catch (t) {
            return 2;
          }
          return f(t, s), 0;
        },
        ecdh(t, e, r, n, f, u, h) {
          let c = s(e);
          if (null === c) return 1;
          let l = new a(r);
          if (l.cmp(o.n) >= 0 || l.isZero()) return 2;
          let d = c.getPublic().mul(l);
          if (void 0 === f) {
            let e = d.encode(null, !0),
              r = i.hash().update(e).digest();
            for (let e = 0; e < 32; ++e) t[e] = r[e];
          } else {
            u || (u = new Uint8Array(32));
            let e = d.getX().toArray("be", 32);
            for (let t = 0; t < 32; ++t) u[t] = e[t];
            h || (h = new Uint8Array(32));
            let r = d.getY().toArray("be", 32);
            for (let t = 0; t < 32; ++t) h[t] = r[t];
            let i = f(u, h, n),
              o = i instanceof Uint8Array && i.length === t.length;
            if (!o) return 2;
            t.set(i);
          }
          return 0;
        },
      };
    },
    9119: function (t) {
      let e = {
        IMPOSSIBLE_CASE: "Impossible case. Please create issue.",
        TWEAK_ADD:
          "The tweak was out of range or the resulted private key is invalid",
        TWEAK_MUL: "The tweak was out of range or equal to zero",
        CONTEXT_RANDOMIZE_UNKNOW: "Unknow error on context randomization",
        SECKEY_INVALID: "Private Key is invalid",
        PUBKEY_PARSE: "Public Key could not be parsed",
        PUBKEY_SERIALIZE: "Public Key serialization error",
        PUBKEY_COMBINE: "The sum of the public keys is not valid",
        SIG_PARSE: "Signature could not be parsed",
        SIGN: "The nonce generation function failed, or the private key was invalid",
        RECOVER: "Public key could not be recover",
        ECDH: "Scalar was invalid (zero or overflow)",
      };
      function r(t, e) {
        if (!t) throw Error(e);
      }
      function n(t, e, n) {
        if (
          (r(e instanceof Uint8Array, `Expected ${t} to be an Uint8Array`),
          void 0 !== n)
        ) {
          if (Array.isArray(n)) {
            let i = n.join(", "),
              o = `Expected ${t} to be an Uint8Array with length [${i}]`;
            r(n.includes(e.length), o);
          } else {
            let i = `Expected ${t} to be an Uint8Array with length ${n}`;
            r(e.length === n, i);
          }
        }
      }
      function i(t) {
        r("Boolean" === a(t), "Expected compressed to be a Boolean");
      }
      function o(t = (t) => new Uint8Array(t), e) {
        return "function" == typeof t && (t = t(e)), n("output", t, e), t;
      }
      function a(t) {
        return Object.prototype.toString.call(t).slice(8, -1);
      }
      t.exports = (t) => ({
        contextRandomize(i) {
          if (
            (r(
              null === i || i instanceof Uint8Array,
              "Expected seed to be an Uint8Array or null"
            ),
            null !== i && n("seed", i, 32),
            1 === t.contextRandomize(i))
          )
            throw Error(e.CONTEXT_RANDOMIZE_UNKNOW);
        },
        privateKeyVerify: (e) => (
          n("private key", e, 32), 0 === t.privateKeyVerify(e)
        ),
        privateKeyNegate(r) {
          switch ((n("private key", r, 32), t.privateKeyNegate(r))) {
            case 0:
              return r;
            case 1:
              throw Error(e.IMPOSSIBLE_CASE);
          }
        },
        privateKeyTweakAdd(r, i) {
          switch (
            (n("private key", r, 32),
            n("tweak", i, 32),
            t.privateKeyTweakAdd(r, i))
          ) {
            case 0:
              return r;
            case 1:
              throw Error(e.TWEAK_ADD);
          }
        },
        privateKeyTweakMul(r, i) {
          switch (
            (n("private key", r, 32),
            n("tweak", i, 32),
            t.privateKeyTweakMul(r, i))
          ) {
            case 0:
              return r;
            case 1:
              throw Error(e.TWEAK_MUL);
          }
        },
        publicKeyVerify: (e) => (
          n("public key", e, [33, 65]), 0 === t.publicKeyVerify(e)
        ),
        publicKeyCreate(r, a = !0, s) {
          switch (
            (n("private key", r, 32),
            i(a),
            (s = o(s, a ? 33 : 65)),
            t.publicKeyCreate(s, r))
          ) {
            case 0:
              return s;
            case 1:
              throw Error(e.SECKEY_INVALID);
            case 2:
              throw Error(e.PUBKEY_SERIALIZE);
          }
        },
        publicKeyConvert(r, a = !0, s) {
          switch (
            (n("public key", r, [33, 65]),
            i(a),
            (s = o(s, a ? 33 : 65)),
            t.publicKeyConvert(s, r))
          ) {
            case 0:
              return s;
            case 1:
              throw Error(e.PUBKEY_PARSE);
            case 2:
              throw Error(e.PUBKEY_SERIALIZE);
          }
        },
        publicKeyNegate(r, a = !0, s) {
          switch (
            (n("public key", r, [33, 65]),
            i(a),
            (s = o(s, a ? 33 : 65)),
            t.publicKeyNegate(s, r))
          ) {
            case 0:
              return s;
            case 1:
              throw Error(e.PUBKEY_PARSE);
            case 2:
              throw Error(e.IMPOSSIBLE_CASE);
            case 3:
              throw Error(e.PUBKEY_SERIALIZE);
          }
        },
        publicKeyCombine(a, s = !0, f) {
          for (let t of (r(
            Array.isArray(a),
            "Expected public keys to be an Array"
          ),
          r(
            a.length > 0,
            "Expected public keys array will have more than zero items"
          ),
          a))
            n("public key", t, [33, 65]);
          switch ((i(s), (f = o(f, s ? 33 : 65)), t.publicKeyCombine(f, a))) {
            case 0:
              return f;
            case 1:
              throw Error(e.PUBKEY_PARSE);
            case 2:
              throw Error(e.PUBKEY_COMBINE);
            case 3:
              throw Error(e.PUBKEY_SERIALIZE);
          }
        },
        publicKeyTweakAdd(r, a, s = !0, f) {
          switch (
            (n("public key", r, [33, 65]),
            n("tweak", a, 32),
            i(s),
            (f = o(f, s ? 33 : 65)),
            t.publicKeyTweakAdd(f, r, a))
          ) {
            case 0:
              return f;
            case 1:
              throw Error(e.PUBKEY_PARSE);
            case 2:
              throw Error(e.TWEAK_ADD);
          }
        },
        publicKeyTweakMul(r, a, s = !0, f) {
          switch (
            (n("public key", r, [33, 65]),
            n("tweak", a, 32),
            i(s),
            (f = o(f, s ? 33 : 65)),
            t.publicKeyTweakMul(f, r, a))
          ) {
            case 0:
              return f;
            case 1:
              throw Error(e.PUBKEY_PARSE);
            case 2:
              throw Error(e.TWEAK_MUL);
          }
        },
        signatureNormalize(r) {
          switch ((n("signature", r, 64), t.signatureNormalize(r))) {
            case 0:
              return r;
            case 1:
              throw Error(e.SIG_PARSE);
          }
        },
        signatureExport(r, i) {
          n("signature", r, 64), (i = o(i, 72));
          let a = { output: i, outputlen: 72 };
          switch (t.signatureExport(a, r)) {
            case 0:
              return i.slice(0, a.outputlen);
            case 1:
              throw Error(e.SIG_PARSE);
            case 2:
              throw Error(e.IMPOSSIBLE_CASE);
          }
        },
        signatureImport(r, i) {
          switch (
            (n("signature", r), (i = o(i, 64)), t.signatureImport(i, r))
          ) {
            case 0:
              return i;
            case 1:
              throw Error(e.SIG_PARSE);
            case 2:
              throw Error(e.IMPOSSIBLE_CASE);
          }
        },
        ecdsaSign(i, s, f = {}, u) {
          n("message", i, 32),
            n("private key", s, 32),
            r("Object" === a(f), "Expected options to be an Object"),
            void 0 !== f.data && n("options.data", f.data),
            void 0 !== f.noncefn &&
              r(
                "Function" === a(f.noncefn),
                "Expected options.noncefn to be a Function"
              ),
            (u = o(u, 64));
          let h = { signature: u, recid: null };
          switch (t.ecdsaSign(h, i, s, f.data, f.noncefn)) {
            case 0:
              return h;
            case 1:
              throw Error(e.SIGN);
            case 2:
              throw Error(e.IMPOSSIBLE_CASE);
          }
        },
        ecdsaVerify(r, i, o) {
          switch (
            (n("signature", r, 64),
            n("message", i, 32),
            n("public key", o, [33, 65]),
            t.ecdsaVerify(r, i, o))
          ) {
            case 0:
              return !0;
            case 3:
              return !1;
            case 1:
              throw Error(e.SIG_PARSE);
            case 2:
              throw Error(e.PUBKEY_PARSE);
          }
        },
        ecdsaRecover(s, f, u, h = !0, c) {
          switch (
            (n("signature", s, 64),
            r(
              "Number" === a(f) && f >= 0 && f <= 3,
              "Expected recovery id to be a Number within interval [0, 3]"
            ),
            n("message", u, 32),
            i(h),
            (c = o(c, h ? 33 : 65)),
            t.ecdsaRecover(c, s, f, u))
          ) {
            case 0:
              return c;
            case 1:
              throw Error(e.SIG_PARSE);
            case 2:
              throw Error(e.RECOVER);
            case 3:
              throw Error(e.IMPOSSIBLE_CASE);
          }
        },
        ecdh(i, s, f = {}, u) {
          switch (
            (n("public key", i, [33, 65]),
            n("private key", s, 32),
            r("Object" === a(f), "Expected options to be an Object"),
            void 0 !== f.data && n("options.data", f.data),
            void 0 !== f.hashfn
              ? (r(
                  "Function" === a(f.hashfn),
                  "Expected options.hashfn to be a Function"
                ),
                void 0 !== f.xbuf && n("options.xbuf", f.xbuf, 32),
                void 0 !== f.ybuf && n("options.ybuf", f.ybuf, 32),
                n("output", u))
              : (u = o(u, 32)),
            t.ecdh(u, i, s, f.data, f.hashfn, f.xbuf, f.ybuf))
          ) {
            case 0:
              return u;
            case 1:
              throw Error(e.PUBKEY_PARSE);
            case 2:
              throw Error(e.ECDH);
          }
        },
      });
    },
    4189: function (t, e, r) {
      var n = r(9509).Buffer;
      function i(t, e) {
        (this._block = n.alloc(t)),
          (this._finalSize = e),
          (this._blockSize = t),
          (this._len = 0);
      }
      (i.prototype.update = function (t, e) {
        "string" == typeof t && ((e = e || "utf8"), (t = n.from(t, e)));
        for (
          var r = this._block,
            i = this._blockSize,
            o = t.length,
            a = this._len,
            s = 0;
          s < o;

        ) {
          for (var f = a % i, u = Math.min(o - s, i - f), h = 0; h < u; h++)
            r[f + h] = t[s + h];
          (a += u), (s += u), a % i == 0 && this._update(r);
        }
        return (this._len += o), this;
      }),
        (i.prototype.digest = function (t) {
          var e = this._len % this._blockSize;
          (this._block[e] = 128),
            this._block.fill(0, e + 1),
            e >= this._finalSize &&
              (this._update(this._block), this._block.fill(0));
          var r = 8 * this._len;
          if (r <= 4294967295)
            this._block.writeUInt32BE(r, this._blockSize - 4);
          else {
            var n = (4294967295 & r) >>> 0;
            this._block.writeUInt32BE(
              (r - n) / 4294967296,
              this._blockSize - 8
            ),
              this._block.writeUInt32BE(n, this._blockSize - 4);
          }
          this._update(this._block);
          var i = this._hash();
          return t ? i.toString(t) : i;
        }),
        (i.prototype._update = function () {
          throw Error("_update must be implemented by subclass");
        }),
        (t.exports = i);
    },
    9072: function (t, e, r) {
      var n = (t.exports = function (t) {
        var e = n[(t = t.toLowerCase())];
        if (!e) throw Error(t + " is not supported (we accept pull requests)");
        return new e();
      });
      (n.sha = r(2349)),
        (n.sha1 = r(8336)),
        (n.sha224 = r(8432)),
        (n.sha256 = r(7499)),
        (n.sha384 = r(1686)),
        (n.sha512 = r(7816));
    },
    2349: function (t, e, r) {
      var n = r(5717),
        i = r(4189),
        o = r(9509).Buffer,
        a = [1518500249, 1859775393, -1894007588, -899497514],
        s = Array(80);
      function f() {
        this.init(), (this._w = s), i.call(this, 64, 56);
      }
      n(f, i),
        (f.prototype.init = function () {
          return (
            (this._a = 1732584193),
            (this._b = 4023233417),
            (this._c = 2562383102),
            (this._d = 271733878),
            (this._e = 3285377520),
            this
          );
        }),
        (f.prototype._update = function (t) {
          for (
            var e = this._w,
              r = 0 | this._a,
              n = 0 | this._b,
              i = 0 | this._c,
              o = 0 | this._d,
              s = 0 | this._e,
              f = 0;
            f < 16;
            ++f
          )
            e[f] = t.readInt32BE(4 * f);
          for (; f < 80; ++f)
            e[f] = e[f - 3] ^ e[f - 8] ^ e[f - 14] ^ e[f - 16];
          for (var u = 0; u < 80; ++u) {
            var h,
              c,
              l,
              d,
              p,
              b = ~~(u / 20),
              y =
                ((((h = r) << 5) | (h >>> 27)) +
                  ((c = n),
                  (l = i),
                  (d = o),
                  0 === b
                    ? (c & l) | (~c & d)
                    : 2 === b
                    ? (c & l) | (c & d) | (l & d)
                    : c ^ l ^ d) +
                  s +
                  e[u] +
                  a[b]) |
                0;
            (s = o),
              (o = i),
              (i = ((p = n) << 30) | (p >>> 2)),
              (n = r),
              (r = y);
          }
          (this._a = (r + this._a) | 0),
            (this._b = (n + this._b) | 0),
            (this._c = (i + this._c) | 0),
            (this._d = (o + this._d) | 0),
            (this._e = (s + this._e) | 0);
        }),
        (f.prototype._hash = function () {
          var t = o.allocUnsafe(20);
          return (
            t.writeInt32BE(0 | this._a, 0),
            t.writeInt32BE(0 | this._b, 4),
            t.writeInt32BE(0 | this._c, 8),
            t.writeInt32BE(0 | this._d, 12),
            t.writeInt32BE(0 | this._e, 16),
            t
          );
        }),
        (t.exports = f);
    },
    8336: function (t, e, r) {
      var n = r(5717),
        i = r(4189),
        o = r(9509).Buffer,
        a = [1518500249, 1859775393, -1894007588, -899497514],
        s = Array(80);
      function f() {
        this.init(), (this._w = s), i.call(this, 64, 56);
      }
      n(f, i),
        (f.prototype.init = function () {
          return (
            (this._a = 1732584193),
            (this._b = 4023233417),
            (this._c = 2562383102),
            (this._d = 271733878),
            (this._e = 3285377520),
            this
          );
        }),
        (f.prototype._update = function (t) {
          for (
            var e = this._w,
              r = 0 | this._a,
              n = 0 | this._b,
              i = 0 | this._c,
              o = 0 | this._d,
              s = 0 | this._e,
              f = 0;
            f < 16;
            ++f
          )
            e[f] = t.readInt32BE(4 * f);
          for (; f < 80; ++f)
            e[f] =
              ((h = e[f - 3] ^ e[f - 8] ^ e[f - 14] ^ e[f - 16]) << 1) |
              (h >>> 31);
          for (var u = 0; u < 80; ++u) {
            var h,
              c,
              l,
              d,
              p,
              b,
              y = ~~(u / 20),
              m =
                ((((c = r) << 5) | (c >>> 27)) +
                  ((l = n),
                  (d = i),
                  (p = o),
                  0 === y
                    ? (l & d) | (~l & p)
                    : 2 === y
                    ? (l & d) | (l & p) | (d & p)
                    : l ^ d ^ p) +
                  s +
                  e[u] +
                  a[y]) |
                0;
            (s = o),
              (o = i),
              (i = ((b = n) << 30) | (b >>> 2)),
              (n = r),
              (r = m);
          }
          (this._a = (r + this._a) | 0),
            (this._b = (n + this._b) | 0),
            (this._c = (i + this._c) | 0),
            (this._d = (o + this._d) | 0),
            (this._e = (s + this._e) | 0);
        }),
        (f.prototype._hash = function () {
          var t = o.allocUnsafe(20);
          return (
            t.writeInt32BE(0 | this._a, 0),
            t.writeInt32BE(0 | this._b, 4),
            t.writeInt32BE(0 | this._c, 8),
            t.writeInt32BE(0 | this._d, 12),
            t.writeInt32BE(0 | this._e, 16),
            t
          );
        }),
        (t.exports = f);
    },
    8432: function (t, e, r) {
      var n = r(5717),
        i = r(7499),
        o = r(4189),
        a = r(9509).Buffer,
        s = Array(64);
      function f() {
        this.init(), (this._w = s), o.call(this, 64, 56);
      }
      n(f, i),
        (f.prototype.init = function () {
          return (
            (this._a = 3238371032),
            (this._b = 914150663),
            (this._c = 812702999),
            (this._d = 4144912697),
            (this._e = 4290775857),
            (this._f = 1750603025),
            (this._g = 1694076839),
            (this._h = 3204075428),
            this
          );
        }),
        (f.prototype._hash = function () {
          var t = a.allocUnsafe(28);
          return (
            t.writeInt32BE(this._a, 0),
            t.writeInt32BE(this._b, 4),
            t.writeInt32BE(this._c, 8),
            t.writeInt32BE(this._d, 12),
            t.writeInt32BE(this._e, 16),
            t.writeInt32BE(this._f, 20),
            t.writeInt32BE(this._g, 24),
            t
          );
        }),
        (t.exports = f);
    },
    7499: function (t, e, r) {
      var n = r(5717),
        i = r(4189),
        o = r(9509).Buffer,
        a = [
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ],
        s = Array(64);
      function f() {
        this.init(), (this._w = s), i.call(this, 64, 56);
      }
      n(f, i),
        (f.prototype.init = function () {
          return (
            (this._a = 1779033703),
            (this._b = 3144134277),
            (this._c = 1013904242),
            (this._d = 2773480762),
            (this._e = 1359893119),
            (this._f = 2600822924),
            (this._g = 528734635),
            (this._h = 1541459225),
            this
          );
        }),
        (f.prototype._update = function (t) {
          for (
            var e = this._w,
              r = 0 | this._a,
              n = 0 | this._b,
              i = 0 | this._c,
              o = 0 | this._d,
              s = 0 | this._e,
              f = 0 | this._f,
              u = 0 | this._g,
              h = 0 | this._h,
              c = 0;
            c < 16;
            ++c
          )
            e[c] = t.readInt32BE(4 * c);
          for (; c < 64; ++c)
            e[c] =
              (((((d = e[c - 2]) >>> 17) | (d << 15)) ^
                ((d >>> 19) | (d << 13)) ^
                (d >>> 10)) +
                e[c - 7] +
                ((((p = e[c - 15]) >>> 7) | (p << 25)) ^
                  ((p >>> 18) | (p << 14)) ^
                  (p >>> 3)) +
                e[c - 16]) |
              0;
          for (var l = 0; l < 64; ++l) {
            var d,
              p,
              b,
              y,
              m,
              g,
              v,
              w,
              M,
              _ =
                (h +
                  ((((b = s) >>> 6) | (b << 26)) ^
                    ((b >>> 11) | (b << 21)) ^
                    ((b >>> 25) | (b << 7))) +
                  ((y = s), (m = f), (g = u) ^ (y & (m ^ g))) +
                  a[l] +
                  e[l]) |
                0,
              S =
                (((((v = r) >>> 2) | (v << 30)) ^
                  ((v >>> 13) | (v << 19)) ^
                  ((v >>> 22) | (v << 10))) +
                  (((w = r) & (M = n)) | (i & (w | M)))) |
                0;
            (h = u),
              (u = f),
              (f = s),
              (s = (o + _) | 0),
              (o = i),
              (i = n),
              (n = r),
              (r = (_ + S) | 0);
          }
          (this._a = (r + this._a) | 0),
            (this._b = (n + this._b) | 0),
            (this._c = (i + this._c) | 0),
            (this._d = (o + this._d) | 0),
            (this._e = (s + this._e) | 0),
            (this._f = (f + this._f) | 0),
            (this._g = (u + this._g) | 0),
            (this._h = (h + this._h) | 0);
        }),
        (f.prototype._hash = function () {
          var t = o.allocUnsafe(32);
          return (
            t.writeInt32BE(this._a, 0),
            t.writeInt32BE(this._b, 4),
            t.writeInt32BE(this._c, 8),
            t.writeInt32BE(this._d, 12),
            t.writeInt32BE(this._e, 16),
            t.writeInt32BE(this._f, 20),
            t.writeInt32BE(this._g, 24),
            t.writeInt32BE(this._h, 28),
            t
          );
        }),
        (t.exports = f);
    },
    1686: function (t, e, r) {
      var n = r(5717),
        i = r(7816),
        o = r(4189),
        a = r(9509).Buffer,
        s = Array(160);
      function f() {
        this.init(), (this._w = s), o.call(this, 128, 112);
      }
      n(f, i),
        (f.prototype.init = function () {
          return (
            (this._ah = 3418070365),
            (this._bh = 1654270250),
            (this._ch = 2438529370),
            (this._dh = 355462360),
            (this._eh = 1731405415),
            (this._fh = 2394180231),
            (this._gh = 3675008525),
            (this._hh = 1203062813),
            (this._al = 3238371032),
            (this._bl = 914150663),
            (this._cl = 812702999),
            (this._dl = 4144912697),
            (this._el = 4290775857),
            (this._fl = 1750603025),
            (this._gl = 1694076839),
            (this._hl = 3204075428),
            this
          );
        }),
        (f.prototype._hash = function () {
          var t = a.allocUnsafe(48);
          function e(e, r, n) {
            t.writeInt32BE(e, n), t.writeInt32BE(r, n + 4);
          }
          return (
            e(this._ah, this._al, 0),
            e(this._bh, this._bl, 8),
            e(this._ch, this._cl, 16),
            e(this._dh, this._dl, 24),
            e(this._eh, this._el, 32),
            e(this._fh, this._fl, 40),
            t
          );
        }),
        (t.exports = f);
    },
    7816: function (t, e, r) {
      var n = r(5717),
        i = r(4189),
        o = r(9509).Buffer,
        a = [
          1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
          3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
          2453635748, 2937671579, 2870763221, 3664609560, 3624381080,
          2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987,
          3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103,
          633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774,
          944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983,
          1495990901, 1249150122, 1856431235, 1555081692, 3175218132,
          1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016,
          2952996808, 2566594879, 3210313671, 3203337956, 3336571891,
          1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895,
          168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372,
          1522805485, 1396182291, 2643833823, 1695183700, 2343527390,
          1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627,
          2730485921, 1290863460, 2820302411, 3158454273, 3259730800,
          3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804,
          1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734,
          3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877,
          3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063,
          2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
          2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
          2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
          3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
          3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
          174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
          685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
          1126000580, 2618297676, 1288033470, 3409855158, 1501505948,
          4234509866, 1607167915, 987167468, 1816402316, 1246189591,
        ],
        s = Array(160);
      function f() {
        this.init(), (this._w = s), i.call(this, 128, 112);
      }
      function u(t, e) {
        return (
          ((t >>> 28) | (e << 4)) ^
          ((e >>> 2) | (t << 30)) ^
          ((e >>> 7) | (t << 25))
        );
      }
      function h(t, e) {
        return (
          ((t >>> 14) | (e << 18)) ^
          ((t >>> 18) | (e << 14)) ^
          ((e >>> 9) | (t << 23))
        );
      }
      function c(t, e) {
        return t >>> 0 < e >>> 0 ? 1 : 0;
      }
      n(f, i),
        (f.prototype.init = function () {
          return (
            (this._ah = 1779033703),
            (this._bh = 3144134277),
            (this._ch = 1013904242),
            (this._dh = 2773480762),
            (this._eh = 1359893119),
            (this._fh = 2600822924),
            (this._gh = 528734635),
            (this._hh = 1541459225),
            (this._al = 4089235720),
            (this._bl = 2227873595),
            (this._cl = 4271175723),
            (this._dl = 1595750129),
            (this._el = 2917565137),
            (this._fl = 725511199),
            (this._gl = 4215389547),
            (this._hl = 327033209),
            this
          );
        }),
        (f.prototype._update = function (t) {
          for (
            var e = this._w,
              r = 0 | this._ah,
              n = 0 | this._bh,
              i = 0 | this._ch,
              o = 0 | this._dh,
              s = 0 | this._eh,
              f = 0 | this._fh,
              l = 0 | this._gh,
              d = 0 | this._hh,
              p = 0 | this._al,
              b = 0 | this._bl,
              y = 0 | this._cl,
              m = 0 | this._dl,
              g = 0 | this._el,
              v = 0 | this._fl,
              w = 0 | this._gl,
              M = 0 | this._hl,
              _ = 0;
            _ < 32;
            _ += 2
          )
            (e[_] = t.readInt32BE(4 * _)),
              (e[_ + 1] = t.readInt32BE(4 * _ + 4));
          for (; _ < 160; _ += 2) {
            var S,
              A,
              E,
              x,
              O,
              k,
              R,
              P,
              j = e[_ - 30],
              I = e[_ - 30 + 1],
              T =
                (((S = j) >>> 1) | ((A = I) << 31)) ^
                ((S >>> 8) | (A << 24)) ^
                (S >>> 7),
              B =
                (((E = I) >>> 1) | ((x = j) << 31)) ^
                ((E >>> 8) | (x << 24)) ^
                ((E >>> 7) | (x << 25));
            (j = e[_ - 4]), (I = e[_ - 4 + 1]);
            var N =
                (((O = j) >>> 19) | ((k = I) << 13)) ^
                ((k >>> 29) | (O << 3)) ^
                (O >>> 6),
              L =
                (((R = I) >>> 19) | ((P = j) << 13)) ^
                ((P >>> 29) | (R << 3)) ^
                ((R >>> 6) | (P << 26)),
              C = e[_ - 14],
              q = e[_ - 14 + 1],
              U = e[_ - 32],
              F = e[_ - 32 + 1],
              D = (B + q) | 0,
              z = (T + C + c(D, B)) | 0;
            (z =
              ((z = (z + N + c((D = (D + L) | 0), L)) | 0) +
                U +
                c((D = (D + F) | 0), F)) |
              0),
              (e[_] = z),
              (e[_ + 1] = D);
          }
          for (var H = 0; H < 160; H += 2) {
            (z = e[H]), (D = e[H + 1]);
            var W,
              K,
              V,
              Z,
              G,
              $,
              J,
              Y,
              X,
              Q,
              tt = ((W = r) & (K = n)) | (i & (W | K)),
              te = ((V = p) & (Z = b)) | (y & (V | Z)),
              tr = u(r, p),
              tn = u(p, r),
              ti = h(s, g),
              to = h(g, s),
              ta = a[H],
              ts = a[H + 1],
              tf = ((G = s), ($ = f), (J = l) ^ (G & ($ ^ J))),
              tu = ((Y = g), (X = v), (Q = w) ^ (Y & (X ^ Q))),
              th = (M + to) | 0,
              tc = (d + ti + c(th, M)) | 0;
            tc =
              ((tc =
                ((tc = (tc + tf + c((th = (th + tu) | 0), tu)) | 0) +
                  ta +
                  c((th = (th + ts) | 0), ts)) |
                0) +
                z +
                c((th = (th + D) | 0), D)) |
              0;
            var tl = (tn + te) | 0,
              td = (tr + tt + c(tl, tn)) | 0;
            (d = l),
              (M = w),
              (l = f),
              (w = v),
              (f = s),
              (v = g),
              (s = (o + tc + c((g = (m + th) | 0), m)) | 0),
              (o = i),
              (m = y),
              (i = n),
              (y = b),
              (n = r),
              (b = p),
              (r = (tc + td + c((p = (th + tl) | 0), th)) | 0);
          }
          (this._al = (this._al + p) | 0),
            (this._bl = (this._bl + b) | 0),
            (this._cl = (this._cl + y) | 0),
            (this._dl = (this._dl + m) | 0),
            (this._el = (this._el + g) | 0),
            (this._fl = (this._fl + v) | 0),
            (this._gl = (this._gl + w) | 0),
            (this._hl = (this._hl + M) | 0),
            (this._ah = (this._ah + r + c(this._al, p)) | 0),
            (this._bh = (this._bh + n + c(this._bl, b)) | 0),
            (this._ch = (this._ch + i + c(this._cl, y)) | 0),
            (this._dh = (this._dh + o + c(this._dl, m)) | 0),
            (this._eh = (this._eh + s + c(this._el, g)) | 0),
            (this._fh = (this._fh + f + c(this._fl, v)) | 0),
            (this._gh = (this._gh + l + c(this._gl, w)) | 0),
            (this._hh = (this._hh + d + c(this._hl, M)) | 0);
        }),
        (f.prototype._hash = function () {
          var t = o.allocUnsafe(64);
          function e(e, r, n) {
            t.writeInt32BE(e, n), t.writeInt32BE(r, n + 4);
          }
          return (
            e(this._ah, this._al, 0),
            e(this._bh, this._bl, 8),
            e(this._ch, this._cl, 16),
            e(this._dh, this._dl, 24),
            e(this._eh, this._el, 32),
            e(this._fh, this._fl, 40),
            e(this._gh, this._gl, 48),
            e(this._hh, this._hl, 56),
            t
          );
        }),
        (t.exports = f);
    },
    2553: function (t, e, r) {
      "use strict";
      var n = r(9509).Buffer,
        i =
          n.isEncoding ||
          function (t) {
            switch ((t = "" + t) && t.toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
              case "raw":
                return !0;
              default:
                return !1;
            }
          };
      function o(t) {
        var e;
        switch (
          ((this.encoding = (function (t) {
            var e = (function (t) {
              var e;
              if (!t) return "utf8";
              for (;;)
                switch (t) {
                  case "utf8":
                  case "utf-8":
                    return "utf8";
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return "utf16le";
                  case "latin1":
                  case "binary":
                    return "latin1";
                  case "base64":
                  case "ascii":
                  case "hex":
                    return t;
                  default:
                    if (e) return;
                    (t = ("" + t).toLowerCase()), (e = !0);
                }
            })(t);
            if ("string" != typeof e && (n.isEncoding === i || !i(t)))
              throw Error("Unknown encoding: " + t);
            return e || t;
          })(t)),
          this.encoding)
        ) {
          case "utf16le":
            (this.text = f), (this.end = u), (e = 4);
            break;
          case "utf8":
            (this.fillLast = s), (e = 4);
            break;
          case "base64":
            (this.text = h), (this.end = c), (e = 3);
            break;
          default:
            (this.write = l), (this.end = d);
            return;
        }
        (this.lastNeed = 0),
          (this.lastTotal = 0),
          (this.lastChar = n.allocUnsafe(e));
      }
      function a(t) {
        return t <= 127
          ? 0
          : t >> 5 == 6
          ? 2
          : t >> 4 == 14
          ? 3
          : t >> 3 == 30
          ? 4
          : t >> 6 == 2
          ? -1
          : -2;
      }
      function s(t) {
        var e = this.lastTotal - this.lastNeed,
          r = (function (t, e, r) {
            if ((192 & e[0]) != 128) return (t.lastNeed = 0), "�";
            if (t.lastNeed > 1 && e.length > 1) {
              if ((192 & e[1]) != 128) return (t.lastNeed = 1), "�";
              if (t.lastNeed > 2 && e.length > 2 && (192 & e[2]) != 128)
                return (t.lastNeed = 2), "�";
            }
          })(this, t, 0);
        return void 0 !== r
          ? r
          : this.lastNeed <= t.length
          ? (t.copy(this.lastChar, e, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal))
          : void (t.copy(this.lastChar, e, 0, t.length),
            (this.lastNeed -= t.length));
      }
      function f(t, e) {
        if ((t.length - e) % 2 == 0) {
          var r = t.toString("utf16le", e);
          if (r) {
            var n = r.charCodeAt(r.length - 1);
            if (n >= 55296 && n <= 56319)
              return (
                (this.lastNeed = 2),
                (this.lastTotal = 4),
                (this.lastChar[0] = t[t.length - 2]),
                (this.lastChar[1] = t[t.length - 1]),
                r.slice(0, -1)
              );
          }
          return r;
        }
        return (
          (this.lastNeed = 1),
          (this.lastTotal = 2),
          (this.lastChar[0] = t[t.length - 1]),
          t.toString("utf16le", e, t.length - 1)
        );
      }
      function u(t) {
        var e = t && t.length ? this.write(t) : "";
        if (this.lastNeed) {
          var r = this.lastTotal - this.lastNeed;
          return e + this.lastChar.toString("utf16le", 0, r);
        }
        return e;
      }
      function h(t, e) {
        var r = (t.length - e) % 3;
        return 0 === r
          ? t.toString("base64", e)
          : ((this.lastNeed = 3 - r),
            (this.lastTotal = 3),
            1 === r
              ? (this.lastChar[0] = t[t.length - 1])
              : ((this.lastChar[0] = t[t.length - 2]),
                (this.lastChar[1] = t[t.length - 1])),
            t.toString("base64", e, t.length - r));
      }
      function c(t) {
        var e = t && t.length ? this.write(t) : "";
        return this.lastNeed
          ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
          : e;
      }
      function l(t) {
        return t.toString(this.encoding);
      }
      function d(t) {
        return t && t.length ? this.write(t) : "";
      }
      (e.s = o),
        (o.prototype.write = function (t) {
          var e, r;
          if (0 === t.length) return "";
          if (this.lastNeed) {
            if (void 0 === (e = this.fillLast(t))) return "";
            (r = this.lastNeed), (this.lastNeed = 0);
          } else r = 0;
          return r < t.length
            ? e
              ? e + this.text(t, r)
              : this.text(t, r)
            : e || "";
        }),
        (o.prototype.end = function (t) {
          var e = t && t.length ? this.write(t) : "";
          return this.lastNeed ? e + "�" : e;
        }),
        (o.prototype.text = function (t, e) {
          var r = (function (t, e, r) {
            var n = e.length - 1;
            if (n < r) return 0;
            var i = a(e[n]);
            return i >= 0
              ? (i > 0 && (t.lastNeed = i - 1), i)
              : --n < r || -2 === i
              ? 0
              : (i = a(e[n])) >= 0
              ? (i > 0 && (t.lastNeed = i - 2), i)
              : --n < r || -2 === i
              ? 0
              : (i = a(e[n])) >= 0
              ? (i > 0 && (2 === i ? (i = 0) : (t.lastNeed = i - 3)), i)
              : 0;
          })(this, t, e);
          if (!this.lastNeed) return t.toString("utf8", e);
          this.lastTotal = r;
          var n = t.length - (r - this.lastNeed);
          return t.copy(this.lastChar, 0, n), t.toString("utf8", e, n);
        }),
        (o.prototype.fillLast = function (t) {
          if (this.lastNeed <= t.length)
            return (
              t.copy(
                this.lastChar,
                this.lastTotal - this.lastNeed,
                0,
                this.lastNeed
              ),
              this.lastChar.toString(this.encoding, 0, this.lastTotal)
            );
          t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length),
            (this.lastNeed -= t.length);
        });
    },
    9604: function (t, e, r) {
      var n = r(3944);
      t.exports = function (t) {
        return "string" != typeof t ? t : n(t) ? t.slice(2) : t;
      };
    },
    7458: function (t, e) {
      !(function (t) {
        var e,
          r,
          n,
          i = String.fromCharCode;
        function o(t) {
          for (var e, r, n = [], i = 0, o = t.length; i < o; )
            (e = t.charCodeAt(i++)) >= 55296 && e <= 56319 && i < o
              ? (64512 & (r = t.charCodeAt(i++))) == 56320
                ? n.push(((1023 & e) << 10) + (1023 & r) + 65536)
                : (n.push(e), i--)
              : n.push(e);
          return n;
        }
        function a(t) {
          if (t >= 55296 && t <= 57343)
            throw Error(
              "Lone surrogate U+" +
                t.toString(16).toUpperCase() +
                " is not a scalar value"
            );
        }
        function s(t, e) {
          return i(((t >> e) & 63) | 128);
        }
        function f() {
          if (n >= r) throw Error("Invalid byte index");
          var t = 255 & e[n];
          if ((n++, (192 & t) == 128)) return 63 & t;
          throw Error("Invalid continuation byte");
        }
        (t.version = "3.0.0"),
          (t.encode = function (t) {
            for (var e = o(t), r = e.length, n = -1, f = ""; ++n < r; )
              f += (function (t) {
                if ((4294967168 & t) == 0) return i(t);
                var e = "";
                return (
                  (4294965248 & t) == 0
                    ? (e = i(((t >> 6) & 31) | 192))
                    : (4294901760 & t) == 0
                    ? (a(t), (e = i(((t >> 12) & 15) | 224) + s(t, 6)))
                    : (4292870144 & t) == 0 &&
                      (e = i(((t >> 18) & 7) | 240) + s(t, 12) + s(t, 6)),
                  (e += i((63 & t) | 128))
                );
              })(e[n]);
            return f;
          }),
          (t.decode = function (t) {
            (r = (e = o(t)).length), (n = 0);
            for (
              var s, u = [];
              !1 !==
              (s = (function () {
                var t, i, o, s;
                if (n > r) throw Error("Invalid byte index");
                if (n == r) return !1;
                if (((t = 255 & e[n]), n++, (128 & t) == 0)) return t;
                if ((224 & t) == 192) {
                  if ((s = ((31 & t) << 6) | (i = f())) >= 128) return s;
                  throw Error("Invalid continuation byte");
                }
                if ((240 & t) == 224) {
                  if ((s = ((15 & t) << 12) | ((i = f()) << 6) | f()) >= 2048)
                    return a(s), s;
                  throw Error("Invalid continuation byte");
                }
                if (
                  (248 & t) == 240 &&
                  (s =
                    ((7 & t) << 18) | ((i = f()) << 12) | (f() << 6) | f()) >=
                    65536 &&
                  s <= 1114111
                )
                  return s;
                throw Error("Invalid UTF-8 detected");
              })());

            )
              u.push(s);
            return (function (t) {
              for (var e, r = t.length, n = -1, o = ""; ++n < r; )
                (e = t[n]) > 65535 &&
                  ((e -= 65536),
                  (o += i(((e >>> 10) & 1023) | 55296)),
                  (e = 56320 | (1023 & e))),
                  (o += i(e));
              return o;
            })(u);
          });
      })(e);
    },
    4927: function (t, e, r) {
      t.exports = function (t, e) {
        if (n("noDeprecation")) return t;
        var r = !1;
        return function () {
          if (!r) {
            if (n("throwDeprecation")) throw Error(e);
            n("traceDeprecation") ? console.trace(e) : console.warn(e),
              (r = !0);
          }
          return t.apply(this, arguments);
        };
      };
      function n(t) {
        try {
          if (!r.g.localStorage) return !1;
        } catch (t) {
          return !1;
        }
        var e = r.g.localStorage[t];
        return null != e && "true" === String(e).toLowerCase();
      }
    },
    384: function (t) {
      t.exports = function (t) {
        return (
          t &&
          "object" == typeof t &&
          "function" == typeof t.copy &&
          "function" == typeof t.fill &&
          "function" == typeof t.readUInt8
        );
      };
    },
    5955: function (t, e, r) {
      "use strict";
      var n = r(2584),
        i = r(8662),
        o = r(6430),
        a = r(5692);
      function s(t) {
        return t.call.bind(t);
      }
      var f = "undefined" != typeof BigInt,
        u = "undefined" != typeof Symbol,
        h = s(Object.prototype.toString),
        c = s(Number.prototype.valueOf),
        l = s(String.prototype.valueOf),
        d = s(Boolean.prototype.valueOf);
      if (f) var p = s(BigInt.prototype.valueOf);
      if (u) var b = s(Symbol.prototype.valueOf);
      function y(t, e) {
        if ("object" != typeof t) return !1;
        try {
          return e(t), !0;
        } catch (t) {
          return !1;
        }
      }
      function m(t) {
        return "[object Map]" === h(t);
      }
      function g(t) {
        return "[object Set]" === h(t);
      }
      function v(t) {
        return "[object WeakMap]" === h(t);
      }
      function w(t) {
        return "[object WeakSet]" === h(t);
      }
      function M(t) {
        return "[object ArrayBuffer]" === h(t);
      }
      function _(t) {
        return (
          "undefined" != typeof ArrayBuffer &&
          (M.working ? M(t) : t instanceof ArrayBuffer)
        );
      }
      function S(t) {
        return "[object DataView]" === h(t);
      }
      function A(t) {
        return (
          "undefined" != typeof DataView &&
          (S.working ? S(t) : t instanceof DataView)
        );
      }
      (e.isArgumentsObject = n),
        (e.isGeneratorFunction = i),
        (e.isTypedArray = a),
        (e.isPromise = function (t) {
          return (
            ("undefined" != typeof Promise && t instanceof Promise) ||
            (null !== t &&
              "object" == typeof t &&
              "function" == typeof t.then &&
              "function" == typeof t.catch)
          );
        }),
        (e.isArrayBufferView = function (t) {
          return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(t)
            : a(t) || A(t);
        }),
        (e.isUint8Array = function (t) {
          return "Uint8Array" === o(t);
        }),
        (e.isUint8ClampedArray = function (t) {
          return "Uint8ClampedArray" === o(t);
        }),
        (e.isUint16Array = function (t) {
          return "Uint16Array" === o(t);
        }),
        (e.isUint32Array = function (t) {
          return "Uint32Array" === o(t);
        }),
        (e.isInt8Array = function (t) {
          return "Int8Array" === o(t);
        }),
        (e.isInt16Array = function (t) {
          return "Int16Array" === o(t);
        }),
        (e.isInt32Array = function (t) {
          return "Int32Array" === o(t);
        }),
        (e.isFloat32Array = function (t) {
          return "Float32Array" === o(t);
        }),
        (e.isFloat64Array = function (t) {
          return "Float64Array" === o(t);
        }),
        (e.isBigInt64Array = function (t) {
          return "BigInt64Array" === o(t);
        }),
        (e.isBigUint64Array = function (t) {
          return "BigUint64Array" === o(t);
        }),
        (m.working = "undefined" != typeof Map && m(new Map())),
        (e.isMap = function (t) {
          return (
            "undefined" != typeof Map && (m.working ? m(t) : t instanceof Map)
          );
        }),
        (g.working = "undefined" != typeof Set && g(new Set())),
        (e.isSet = function (t) {
          return (
            "undefined" != typeof Set && (g.working ? g(t) : t instanceof Set)
          );
        }),
        (v.working = "undefined" != typeof WeakMap && v(new WeakMap())),
        (e.isWeakMap = function (t) {
          return (
            "undefined" != typeof WeakMap &&
            (v.working ? v(t) : t instanceof WeakMap)
          );
        }),
        (w.working = "undefined" != typeof WeakSet && w(new WeakSet())),
        (e.isWeakSet = function (t) {
          return w(t);
        }),
        (M.working = "undefined" != typeof ArrayBuffer && M(new ArrayBuffer())),
        (e.isArrayBuffer = _),
        (S.working =
          "undefined" != typeof ArrayBuffer &&
          "undefined" != typeof DataView &&
          S(new DataView(new ArrayBuffer(1), 0, 1))),
        (e.isDataView = A);
      var E =
        "undefined" != typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;
      function x(t) {
        return "[object SharedArrayBuffer]" === h(t);
      }
      function O(t) {
        return (
          void 0 !== E &&
          (void 0 === x.working && (x.working = x(new E())),
          x.working ? x(t) : t instanceof E)
        );
      }
      function k(t) {
        return y(t, c);
      }
      function R(t) {
        return y(t, l);
      }
      function P(t) {
        return y(t, d);
      }
      function j(t) {
        return f && y(t, p);
      }
      function I(t) {
        return u && y(t, b);
      }
      (e.isSharedArrayBuffer = O),
        (e.isAsyncFunction = function (t) {
          return "[object AsyncFunction]" === h(t);
        }),
        (e.isMapIterator = function (t) {
          return "[object Map Iterator]" === h(t);
        }),
        (e.isSetIterator = function (t) {
          return "[object Set Iterator]" === h(t);
        }),
        (e.isGeneratorObject = function (t) {
          return "[object Generator]" === h(t);
        }),
        (e.isWebAssemblyCompiledModule = function (t) {
          return "[object WebAssembly.Module]" === h(t);
        }),
        (e.isNumberObject = k),
        (e.isStringObject = R),
        (e.isBooleanObject = P),
        (e.isBigIntObject = j),
        (e.isSymbolObject = I),
        (e.isBoxedPrimitive = function (t) {
          return k(t) || R(t) || P(t) || j(t) || I(t);
        }),
        (e.isAnyArrayBuffer = function (t) {
          return "undefined" != typeof Uint8Array && (_(t) || O(t));
        }),
        ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function (
          t
        ) {
          Object.defineProperty(e, t, {
            enumerable: !1,
            value: function () {
              throw Error(t + " is not supported in userland");
            },
          });
        });
    },
    9539: function (t, e, r) {
      var n = r(3454),
        i =
          Object.getOwnPropertyDescriptors ||
          function (t) {
            for (var e = Object.keys(t), r = {}, n = 0; n < e.length; n++)
              r[e[n]] = Object.getOwnPropertyDescriptor(t, e[n]);
            return r;
          },
        o = /%[sdj%]/g;
      (e.format = function (t) {
        if (!v(t)) {
          for (var e = [], r = 0; r < arguments.length; r++)
            e.push(u(arguments[r]));
          return e.join(" ");
        }
        for (
          var r = 1,
            n = arguments,
            i = n.length,
            a = String(t).replace(o, function (t) {
              if ("%%" === t) return "%";
              if (r >= i) return t;
              switch (t) {
                case "%s":
                  return String(n[r++]);
                case "%d":
                  return Number(n[r++]);
                case "%j":
                  try {
                    return JSON.stringify(n[r++]);
                  } catch (t) {
                    return "[Circular]";
                  }
                default:
                  return t;
              }
            }),
            s = n[r];
          r < i;
          s = n[++r]
        )
          m(s) || !_(s) ? (a += " " + s) : (a += " " + u(s));
        return a;
      }),
        (e.deprecate = function (t, r) {
          if (void 0 !== n && !0 === n.noDeprecation) return t;
          if (void 0 === n)
            return function () {
              return e.deprecate(t, r).apply(this, arguments);
            };
          var i = !1;
          return function () {
            if (!i) {
              if (n.throwDeprecation) throw Error(r);
              n.traceDeprecation ? console.trace(r) : console.error(r),
                (i = !0);
            }
            return t.apply(this, arguments);
          };
        });
      var a = {},
        s = /^$/;
      if (n.env.NODE_DEBUG) {
        var f = n.env.NODE_DEBUG;
        s = RegExp(
          "^" +
            (f = f
              .replace(/[|\\{}()[\]^$+?.]/g, "\\$&")
              .replace(/\*/g, ".*")
              .replace(/,/g, "$|^")
              .toUpperCase()) +
            "$",
          "i"
        );
      }
      function u(t, r) {
        var n = { seen: [], stylize: c };
        return (
          arguments.length >= 3 && (n.depth = arguments[2]),
          arguments.length >= 4 && (n.colors = arguments[3]),
          y(r) ? (n.showHidden = r) : r && e._extend(n, r),
          w(n.showHidden) && (n.showHidden = !1),
          w(n.depth) && (n.depth = 2),
          w(n.colors) && (n.colors = !1),
          w(n.customInspect) && (n.customInspect = !0),
          n.colors && (n.stylize = h),
          l(n, t, n.depth)
        );
      }
      function h(t, e) {
        var r = u.styles[e];
        return r
          ? "\x1b[" + u.colors[r][0] + "m" + t + "\x1b[" + u.colors[r][1] + "m"
          : t;
      }
      function c(t, e) {
        return t;
      }
      function l(t, r, n) {
        if (
          t.customInspect &&
          r &&
          E(r.inspect) &&
          r.inspect !== e.inspect &&
          !(r.constructor && r.constructor.prototype === r)
        ) {
          var i,
            o,
            a,
            s,
            f,
            u = r.inspect(n, t);
          return v(u) || (u = l(t, u, n)), u;
        }
        var h = (function (t, e) {
          if (w(e)) return t.stylize("undefined", "undefined");
          if (v(e)) {
            var r =
              "'" +
              JSON.stringify(e)
                .replace(/^"|"$/g, "")
                .replace(/'/g, "\\'")
                .replace(/\\"/g, '"') +
              "'";
            return t.stylize(r, "string");
          }
          return g(e)
            ? t.stylize("" + e, "number")
            : y(e)
            ? t.stylize("" + e, "boolean")
            : m(e)
            ? t.stylize("null", "null")
            : void 0;
        })(t, r);
        if (h) return h;
        var c = Object.keys(r),
          _ =
            ((s = {}),
            c.forEach(function (t, e) {
              s[t] = !0;
            }),
            s);
        if (
          (t.showHidden && (c = Object.getOwnPropertyNames(r)),
          A(r) && (c.indexOf("message") >= 0 || c.indexOf("description") >= 0))
        )
          return d(r);
        if (0 === c.length) {
          if (E(r)) {
            var x = r.name ? ": " + r.name : "";
            return t.stylize("[Function" + x + "]", "special");
          }
          if (M(r))
            return t.stylize(RegExp.prototype.toString.call(r), "regexp");
          if (S(r)) return t.stylize(Date.prototype.toString.call(r), "date");
          if (A(r)) return d(r);
        }
        var O = "",
          k = !1,
          P = ["{", "}"];
        return (b(r) && ((k = !0), (P = ["[", "]"])),
        E(r) && (O = " [Function" + (r.name ? ": " + r.name : "") + "]"),
        M(r) && (O = " " + RegExp.prototype.toString.call(r)),
        S(r) && (O = " " + Date.prototype.toUTCString.call(r)),
        A(r) && (O = " " + d(r)),
        0 !== c.length || (k && 0 != r.length))
          ? n < 0
            ? M(r)
              ? t.stylize(RegExp.prototype.toString.call(r), "regexp")
              : t.stylize("[Object]", "special")
            : (t.seen.push(r),
              (f = k
                ? (function (t, e, r, n, i) {
                    for (var o = [], a = 0, s = e.length; a < s; ++a)
                      R(e, String(a))
                        ? o.push(p(t, e, r, n, String(a), !0))
                        : o.push("");
                    return (
                      i.forEach(function (i) {
                        i.match(/^\d+$/) || o.push(p(t, e, r, n, i, !0));
                      }),
                      o
                    );
                  })(t, r, n, _, c)
                : c.map(function (e) {
                    return p(t, r, n, _, e, k);
                  })),
              t.seen.pop(),
              (i = O),
              (o = P),
              (a = 0),
              f.reduce(function (t, e) {
                return (
                  a++,
                  e.indexOf("\n") >= 0 && a++,
                  t + e.replace(/\u001b\[\d\d?m/g, "").length + 1
                );
              }, 0) > 60
                ? o[0] +
                  ("" === i ? "" : i + "\n ") +
                  " " +
                  f.join(",\n  ") +
                  " " +
                  o[1]
                : o[0] + i + " " + f.join(", ") + " " + o[1])
          : P[0] + O + P[1];
      }
      function d(t) {
        return "[" + Error.prototype.toString.call(t) + "]";
      }
      function p(t, e, r, n, i, o) {
        var a, s, f;
        if (
          ((f = Object.getOwnPropertyDescriptor(e, i) || { value: e[i] }).get
            ? (s = f.set
                ? t.stylize("[Getter/Setter]", "special")
                : t.stylize("[Getter]", "special"))
            : f.set && (s = t.stylize("[Setter]", "special")),
          R(n, i) || (a = "[" + i + "]"),
          !s &&
            (0 > t.seen.indexOf(f.value)
              ? (s = m(r) ? l(t, f.value, null) : l(t, f.value, r - 1)).indexOf(
                  "\n"
                ) > -1 &&
                (s = o
                  ? s
                      .split("\n")
                      .map(function (t) {
                        return "  " + t;
                      })
                      .join("\n")
                      .slice(2)
                  : "\n" +
                    s
                      .split("\n")
                      .map(function (t) {
                        return "   " + t;
                      })
                      .join("\n"))
              : (s = t.stylize("[Circular]", "special"))),
          w(a))
        ) {
          if (o && i.match(/^\d+$/)) return s;
          (a = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
            ? ((a = a.slice(1, -1)), (a = t.stylize(a, "name")))
            : ((a = a
                .replace(/'/g, "\\'")
                .replace(/\\"/g, '"')
                .replace(/(^"|"$)/g, "'")),
              (a = t.stylize(a, "string")));
        }
        return a + ": " + s;
      }
      function b(t) {
        return Array.isArray(t);
      }
      function y(t) {
        return "boolean" == typeof t;
      }
      function m(t) {
        return null === t;
      }
      function g(t) {
        return "number" == typeof t;
      }
      function v(t) {
        return "string" == typeof t;
      }
      function w(t) {
        return void 0 === t;
      }
      function M(t) {
        return _(t) && "[object RegExp]" === x(t);
      }
      function _(t) {
        return "object" == typeof t && null !== t;
      }
      function S(t) {
        return _(t) && "[object Date]" === x(t);
      }
      function A(t) {
        return _(t) && ("[object Error]" === x(t) || t instanceof Error);
      }
      function E(t) {
        return "function" == typeof t;
      }
      function x(t) {
        return Object.prototype.toString.call(t);
      }
      function O(t) {
        return t < 10 ? "0" + t.toString(10) : t.toString(10);
      }
      (e.debuglog = function (t) {
        if (!a[(t = t.toUpperCase())]) {
          if (s.test(t)) {
            var r = n.pid;
            a[t] = function () {
              var n = e.format.apply(e, arguments);
              console.error("%s %d: %s", t, r, n);
            };
          } else a[t] = function () {};
        }
        return a[t];
      }),
        (e.inspect = u),
        (u.colors = {
          bold: [1, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          white: [37, 39],
          grey: [90, 39],
          black: [30, 39],
          blue: [34, 39],
          cyan: [36, 39],
          green: [32, 39],
          magenta: [35, 39],
          red: [31, 39],
          yellow: [33, 39],
        }),
        (u.styles = {
          special: "cyan",
          number: "yellow",
          boolean: "yellow",
          undefined: "grey",
          null: "bold",
          string: "green",
          date: "magenta",
          regexp: "red",
        }),
        (e.types = r(5955)),
        (e.isArray = b),
        (e.isBoolean = y),
        (e.isNull = m),
        (e.isNullOrUndefined = function (t) {
          return null == t;
        }),
        (e.isNumber = g),
        (e.isString = v),
        (e.isSymbol = function (t) {
          return "symbol" == typeof t;
        }),
        (e.isUndefined = w),
        (e.isRegExp = M),
        (e.types.isRegExp = M),
        (e.isObject = _),
        (e.isDate = S),
        (e.types.isDate = S),
        (e.isError = A),
        (e.types.isNativeError = A),
        (e.isFunction = E),
        (e.isPrimitive = function (t) {
          return (
            null === t ||
            "boolean" == typeof t ||
            "number" == typeof t ||
            "string" == typeof t ||
            "symbol" == typeof t ||
            void 0 === t
          );
        }),
        (e.isBuffer = r(384));
      var k = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      function R(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }
      (e.log = function () {
        var t, r;
        console.log(
          "%s - %s",
          ((r = [
            O((t = new Date()).getHours()),
            O(t.getMinutes()),
            O(t.getSeconds()),
          ].join(":")),
          [t.getDate(), k[t.getMonth()], r].join(" ")),
          e.format.apply(e, arguments)
        );
      }),
        (e.inherits = r(5717)),
        (e._extend = function (t, e) {
          if (!e || !_(e)) return t;
          for (var r = Object.keys(e), n = r.length; n--; ) t[r[n]] = e[r[n]];
          return t;
        });
      var P =
        "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;
      function j(t, e) {
        if (!t) {
          var r = Error("Promise was rejected with a falsy value");
          (r.reason = t), (t = r);
        }
        return e(t);
      }
      (e.promisify = function (t) {
        if ("function" != typeof t)
          throw TypeError('The "original" argument must be of type Function');
        if (P && t[P]) {
          var e = t[P];
          if ("function" != typeof e)
            throw TypeError(
              'The "util.promisify.custom" argument must be of type Function'
            );
          return (
            Object.defineProperty(e, P, {
              value: e,
              enumerable: !1,
              writable: !1,
              configurable: !0,
            }),
            e
          );
        }
        function e() {
          for (
            var e,
              r,
              n = new Promise(function (t, n) {
                (e = t), (r = n);
              }),
              i = [],
              o = 0;
            o < arguments.length;
            o++
          )
            i.push(arguments[o]);
          i.push(function (t, n) {
            t ? r(t) : e(n);
          });
          try {
            t.apply(this, i);
          } catch (t) {
            r(t);
          }
          return n;
        }
        return (
          Object.setPrototypeOf(e, Object.getPrototypeOf(t)),
          P &&
            Object.defineProperty(e, P, {
              value: e,
              enumerable: !1,
              writable: !1,
              configurable: !0,
            }),
          Object.defineProperties(e, i(t))
        );
      }),
        (e.promisify.custom = P),
        (e.callbackify = function (t) {
          if ("function" != typeof t)
            throw TypeError('The "original" argument must be of type Function');
          function e() {
            for (var e = [], r = 0; r < arguments.length; r++)
              e.push(arguments[r]);
            var i = e.pop();
            if ("function" != typeof i)
              throw TypeError("The last argument must be of type Function");
            var o = this,
              a = function () {
                return i.apply(o, arguments);
              };
            t.apply(this, e).then(
              function (t) {
                n.nextTick(a.bind(null, null, t));
              },
              function (t) {
                n.nextTick(j.bind(null, t, a));
              }
            );
          }
          return (
            Object.setPrototypeOf(e, Object.getPrototypeOf(t)),
            Object.defineProperties(e, i(t)),
            e
          );
        });
    },
    8269: function (t, e, r) {
      var n = r(4278),
        i = r(329),
        o = r(8668),
        a = r(1798),
        s = r(3550),
        f = function (t, e) {
          var r = [];
          return (
            e.forEach(function (e) {
              if ("object" == typeof e.components) {
                if ("tuple" !== e.type.substring(0, 5))
                  throw Error(
                    "components found but type is not tuple; report on GitHub"
                  );
                var n = "",
                  i = e.type.indexOf("[");
                i >= 0 && (n = e.type.substring(i));
                var o = f(t, e.components);
                Array.isArray(o) && t
                  ? r.push("tuple(" + o.join(",") + ")" + n)
                  : t
                  ? r.push("(" + o + ")")
                  : r.push("(" + o.join(",") + ")" + n);
              } else r.push(e.type);
            }),
            r
          );
        },
        u = function (t) {
          if (!i.isHexStrict(t))
            throw Error("The parameter must be a valid HEX string.");
          var e = "",
            r = 0,
            n = t.length;
          for ("0x" === t.substring(0, 2) && (r = 2); r < n; r += 2)
            e += String.fromCharCode(parseInt(t.slice(r, r + 2), 16));
          return e;
        },
        h = function (t) {
          if (!t) return "0x00";
          for (var e = "", r = 0; r < t.length; r++) {
            var n = t.charCodeAt(r).toString(16);
            e += n.length < 2 ? "0" + n : n;
          }
          return "0x" + e;
        },
        c = function (t) {
          if (((t = t ? t.toLowerCase() : "ether"), !n.unitMap[t]))
            throw Error(
              'This unit "' +
                t +
                "\" doesn't exist, please use the one of the following units" +
                JSON.stringify(n.unitMap, null, 2)
            );
          return t;
        };
      t.exports = {
        _fireError: function (t, e, r, n, i) {
          return (
            !t ||
              "object" != typeof t ||
              t instanceof Error ||
              !t.data ||
              (((t.data && "object" == typeof t.data) ||
                Array.isArray(t.data)) &&
                (t.data = JSON.stringify(t.data, null, 2)),
              (t = t.message + "\n" + t.data)),
            "string" == typeof t && (t = Error(t)),
            "function" == typeof n && n(t, i),
            "function" == typeof r &&
              (((e &&
                "function" == typeof e.listeners &&
                e.listeners("error").length) ||
                "function" == typeof n) &&
                e.catch(function () {}),
              setTimeout(function () {
                r(t);
              }, 1)),
            e &&
              "function" == typeof e.emit &&
              setTimeout(function () {
                e.emit("error", t, i), e.removeAllListeners();
              }, 1),
            e
          );
        },
        _jsonInterfaceMethodToString: function (t) {
          return t &&
            "object" == typeof t &&
            t.name &&
            -1 !== t.name.indexOf("(")
            ? t.name
            : t.name + "(" + f(!1, t.inputs).join(",") + ")";
        },
        _flattenTypes: f,
        randomHex: function (t) {
          return "0x" + a(t).toString("hex");
        },
        BN: i.BN,
        isBN: i.isBN,
        isBigNumber: i.isBigNumber,
        isHex: i.isHex,
        isHexStrict: i.isHexStrict,
        sha3: i.sha3,
        sha3Raw: i.sha3Raw,
        keccak256: i.sha3,
        soliditySha3: o.soliditySha3,
        soliditySha3Raw: o.soliditySha3Raw,
        encodePacked: o.encodePacked,
        isAddress: i.isAddress,
        checkAddressChecksum: i.checkAddressChecksum,
        toChecksumAddress: function (t) {
          if (void 0 === t) return "";
          if (!/^(0x)?[0-9a-f]{40}$/i.test(t))
            throw Error(
              'Given address "' + t + '" is not a valid Ethereum address.'
            );
          t = t.toLowerCase().replace(/^0x/i, "");
          for (
            var e = i.sha3(t).replace(/^0x/i, ""), r = "0x", n = 0;
            n < t.length;
            n++
          )
            parseInt(e[n], 16) > 7 ? (r += t[n].toUpperCase()) : (r += t[n]);
          return r;
        },
        toHex: i.toHex,
        toBN: i.toBN,
        bytesToHex: i.bytesToHex,
        hexToBytes: i.hexToBytes,
        hexToNumberString: i.hexToNumberString,
        hexToNumber: i.hexToNumber,
        toDecimal: i.hexToNumber,
        numberToHex: i.numberToHex,
        fromDecimal: i.numberToHex,
        hexToUtf8: i.hexToUtf8,
        hexToString: i.hexToUtf8,
        toUtf8: i.hexToUtf8,
        stripHexPrefix: i.stripHexPrefix,
        utf8ToHex: i.utf8ToHex,
        stringToHex: i.utf8ToHex,
        fromUtf8: i.utf8ToHex,
        hexToAscii: u,
        toAscii: u,
        asciiToHex: h,
        fromAscii: h,
        unitMap: n.unitMap,
        toWei: function (t, e) {
          if (((e = c(e)), !i.isBN(t) && "string" != typeof t))
            throw Error(
              "Please pass numbers as strings or BN objects to avoid precision errors."
            );
          return i.isBN(t) ? n.toWei(t, e) : n.toWei(t, e).toString(10);
        },
        fromWei: function (t, e) {
          if (((e = c(e)), !i.isBN(t) && "string" != typeof t))
            throw Error(
              "Please pass numbers as strings or BN objects to avoid precision errors."
            );
          return i.isBN(t) ? n.fromWei(t, e) : n.fromWei(t, e).toString(10);
        },
        padLeft: i.leftPad,
        leftPad: i.leftPad,
        padRight: i.rightPad,
        rightPad: i.rightPad,
        toTwosComplement: i.toTwosComplement,
        isBloom: i.isBloom,
        isUserEthereumAddressInBloom: i.isUserEthereumAddressInBloom,
        isContractAddressInBloom: i.isContractAddressInBloom,
        isTopic: i.isTopic,
        isTopicInBloom: i.isTopicInBloom,
        isInBloom: i.isInBloom,
        compareBlockNumbers: function (t, e) {
          if (
            t === e ||
            (("genesis" === t || "earliest" === t || 0 === t) &&
              ("genesis" === e || "earliest" === e || 0 === e))
          )
            return 0;
          if ("genesis" === t || "earliest" === t || 0 === t) return -1;
          {
            if ("genesis" === e || "earliest" === e || 0 === e) return 1;
            if ("latest" === t || "finalized" === t)
              return "pending" === e ? -1 : 1;
            if ("latest" === e || "finalized" === e)
              return "pending" === t ? 1 : -1;
            if ("pending" === t) return 1;
            if ("pending" === e) return -1;
            if ("safe" === t || "safe" === e) return;
            let r = new s(t),
              n = new s(e);
            return r.lt(n) ? -1 : r.eq(n) ? 0 : 1;
          }
        },
        toNumber: i.toNumber,
      };
    },
    8668: function (t, e, r) {
      var n = r(3550),
        i = r(329),
        o = function (t) {
          if (t.startsWith("int[")) return "int256" + t.slice(3);
          if ("int" === t) return "int256";
          if (t.startsWith("uint[")) return "uint256" + t.slice(4);
          if ("uint" === t) return "uint256";
          if (t.startsWith("fixed[")) return "fixed128x128" + t.slice(5);
          if ("fixed" === t) return "fixed128x128";
          if (t.startsWith("ufixed[")) return "ufixed128x128" + t.slice(6);
          else if ("ufixed" === t) return "ufixed128x128";
          return t;
        },
        a = function (t) {
          var e = /^\D+(\d+).*$/.exec(t);
          return e ? parseInt(e[1], 10) : null;
        },
        s = function (t) {
          var e = /^\D+\d*\[(\d+)\]$/.exec(t);
          return e ? parseInt(e[1], 10) : null;
        },
        f = function (t) {
          var e = typeof t;
          if ("string" === e)
            return i.isHexStrict(t)
              ? new n(t.replace(/0x/i, ""), 16)
              : new n(t, 10);
          if ("number" === e) return new n(t);
          if (i.isBigNumber(t)) return new n(t.toString(10));
          if (i.isBN(t)) return t;
          throw Error(t + " is not a number");
        },
        u = function (t, e, r) {
          var s, u;
          if ("bytes" === (t = o(t))) {
            if (e.replace(/^0x/i, "").length % 2 != 0)
              throw Error("Invalid bytes characters " + e.length);
            return e;
          }
          if ("string" === t) return i.utf8ToHex(e);
          if ("bool" === t) return e ? "01" : "00";
          if (t.startsWith("address")) {
            if (((s = r ? 64 : 40), !i.isAddress(e)))
              throw Error(
                e + " is not a valid address, or the checksum is invalid."
              );
            return i.leftPad(e.toLowerCase(), s);
          }
          if (((s = a(t)), t.startsWith("bytes"))) {
            if (!s) throw Error("bytes[] not yet supported in solidity");
            if (
              (r && (s = 32),
              s < 1 || s > 32 || s < e.replace(/^0x/i, "").length / 2)
            )
              throw Error("Invalid bytes" + s + " for " + e);
            return i.rightPad(e, 2 * s);
          }
          if (t.startsWith("uint")) {
            if (s % 8 || s < 8 || s > 256)
              throw Error("Invalid uint" + s + " size");
            if ((u = f(e)).bitLength() > s)
              throw Error(
                "Supplied uint exceeds width: " + s + " vs " + u.bitLength()
              );
            if (u.lt(new n(0)))
              throw Error("Supplied uint " + u.toString() + " is negative");
            return s ? i.leftPad(u.toString("hex"), (s / 8) * 2) : u;
          }
          if (t.startsWith("int")) {
            if (s % 8 || s < 8 || s > 256)
              throw Error("Invalid int" + s + " size");
            if ((u = f(e)).bitLength() > s)
              throw Error(
                "Supplied int exceeds width: " + s + " vs " + u.bitLength()
              );
            return u.lt(new n(0))
              ? u.toTwos(s).toString("hex")
              : s
              ? i.leftPad(u.toString("hex"), (s / 8) * 2)
              : u;
          }
          throw Error("Unsupported or invalid type: " + t);
        },
        h = function (t) {
          if (Array.isArray(t))
            throw Error("Autodetection of array types is not supported.");
          var e,
            r,
            o = "";
          if (
            (t &&
            "object" == typeof t &&
            (t.hasOwnProperty("v") ||
              t.hasOwnProperty("t") ||
              t.hasOwnProperty("value") ||
              t.hasOwnProperty("type"))
              ? ((r = t.hasOwnProperty("t") ? t.t : t.type),
                (o = t.hasOwnProperty("v") ? t.v : t.value))
              : ((r = i.toHex(t, !0)),
                (o = i.toHex(t)),
                r.startsWith("int") || r.startsWith("uint") || (r = "bytes")),
            (r.startsWith("int") || r.startsWith("uint")) &&
              "string" == typeof o &&
              !/^(-)?0x/i.test(o) &&
              (o = new n(o)),
            Array.isArray(o))
          ) {
            if ((e = s(r)) && o.length !== e)
              throw Error(
                r + " is not matching the given array " + JSON.stringify(o)
              );
            e = o.length;
          }
          return Array.isArray(o)
            ? o
                .map(function (t) {
                  return u(r, t, e).toString("hex").replace("0x", "");
                })
                .join("")
            : u(r, o, e).toString("hex").replace("0x", "");
        };
      t.exports = {
        soliditySha3: function () {
          var t = Array.prototype.slice.call(arguments),
            e = t.map(h);
          return i.sha3("0x" + e.join(""));
        },
        soliditySha3Raw: function () {
          return i.sha3Raw(
            "0x" + Array.prototype.slice.call(arguments).map(h).join("")
          );
        },
        encodePacked: function () {
          var t = Array.prototype.slice.call(arguments);
          return "0x" + t.map(h).join("").toLowerCase();
        },
      };
    },
    329: function (t, e, r) {
      var n = r(8764).Buffer,
        i = r(3550),
        o = r(3206),
        a = r(7458),
        s = r(2751),
        f = r(6877),
        u = function (t) {
          return i.isBN(t);
        },
        h = function (t) {
          return t && t.constructor && "BigNumber" === t.constructor.name;
        },
        c = function (t) {
          try {
            return o.apply(null, arguments);
          } catch (e) {
            throw Error(e + ' Given value: "' + t + '"');
          }
        },
        l = function (t) {
          return (
            !!/^(0x)?[0-9a-f]{40}$/i.test(t) &&
            (!!(
              /^(0x|0X)?[0-9a-f]{40}$/.test(t) ||
              /^(0x|0X)?[0-9A-F]{40}$/.test(t)
            ) ||
              d(t))
          );
        },
        d = function (t) {
          for (
            var e = M((t = t.replace(/^0x/i, "")).toLowerCase()).replace(
                /^0x/i,
                ""
              ),
              r = 0;
            r < 40;
            r++
          )
            if (
              (parseInt(e[r], 16) > 7 && t[r].toUpperCase() !== t[r]) ||
              (7 >= parseInt(e[r], 16) && t[r].toLowerCase() !== t[r])
            )
              return !1;
          return !0;
        },
        p = function (t) {
          t = a.encode(t);
          var e = "";
          t = (t = (t = (t = t.replace(/^(?:\u0000)*/, ""))
            .split("")
            .reverse()
            .join("")).replace(/^(?:\u0000)*/, ""))
            .split("")
            .reverse()
            .join("");
          for (var r = 0; r < t.length; r++) {
            var n = t.charCodeAt(r).toString(16);
            e += n.length < 2 ? "0" + n : n;
          }
          return "0x" + e;
        },
        b = function (t, e = !1) {
          if (!t) return t;
          if ("string" == typeof t && !g(t))
            throw Error('Given value "' + t + '" is not a valid hex string.');
          let r = c(t);
          return e &&
            (r > Number.MAX_SAFE_INTEGER || r < Number.MIN_SAFE_INTEGER)
            ? BigInt(r)
            : r.toNumber();
        },
        y = function (t) {
          if (null == t) return t;
          if (!isFinite(t) && !g(t))
            throw Error('Given input "' + t + '" is not a number.');
          var e = c(t),
            r = e.toString(16);
          return e.lt(new i(0)) ? "-0x" + r.slice(1) : "0x" + r;
        },
        m = function (t, e) {
          if (l(t))
            return e ? "address" : "0x" + t.toLowerCase().replace(/^0x/i, "");
          if ("boolean" == typeof t) return e ? "bool" : t ? "0x01" : "0x00";
          if (n.isBuffer(t)) return "0x" + t.toString("hex");
          if ("object" == typeof t && t && !h(t) && !u(t))
            return e ? "string" : p(JSON.stringify(t));
          if ("string" == typeof t) {
            if (0 === t.indexOf("-0x") || 0 === t.indexOf("-0X"))
              return e ? "int256" : y(t);
            if (0 === t.indexOf("0x") || 0 === t.indexOf("0X"))
              return e ? "bytes" : t;
            if (!isFinite(t)) return e ? "string" : p(t);
          }
          return e ? (t < 0 ? "int256" : "uint256") : y(t);
        },
        g = function (t) {
          return (
            ("string" == typeof t || "number" == typeof t) &&
            /^(-)?0x[0-9a-f]*$/i.test(t)
          );
        },
        v = function (t) {
          return (
            ("string" == typeof t || "number" == typeof t) &&
            /^(-0x|0x)?[0-9a-f]*$/i.test(t)
          );
        },
        w =
          "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
        M = function (t) {
          u(t) && (t = t.toString()),
            g(t) && /^0x/i.test(t.toString())
              ? (t = s.toBuffer(t))
              : "string" == typeof t && (t = n.from(t, "utf-8"));
          var e = s.bufferToHex(s.keccak256(t));
          return e === w ? null : e;
        };
      M._Hash = s.keccak256;
      var _ = function (t) {
        if (!("string" == typeof t && t.includes("0x"))) return new i(t);
        {
          let [e, r] = t.toLocaleLowerCase().startsWith("-")
            ? ["-", t.slice(3)]
            : ["", t.slice(2)];
          return new i(e + r, 16);
        }
      };
      Object.setPrototypeOf(_, i),
        Object.setPrototypeOf(_.prototype, i.prototype),
        (t.exports = {
          BN: _,
          isBN: u,
          isBigNumber: h,
          toBN: c,
          isAddress: l,
          isBloom: function (t) {
            return f.isBloom(t);
          },
          isUserEthereumAddressInBloom: function (t, e) {
            return f.isUserEthereumAddressInBloom(t, e);
          },
          isContractAddressInBloom: function (t, e) {
            return f.isContractAddressInBloom(t, e);
          },
          isTopic: function (t) {
            return f.isTopic(t);
          },
          isTopicInBloom: function (t, e) {
            return f.isTopicInBloom(t, e);
          },
          isInBloom: function (t, e) {
            return f.isInBloom(t, e);
          },
          checkAddressChecksum: d,
          utf8ToHex: p,
          hexToUtf8: function (t) {
            if (!g(t))
              throw Error(
                'The parameter "' + t + '" must be a valid HEX string.'
              );
            for (
              var e = "",
                r = (t = (t = (t = (t = (t = t.replace(/^0x/i, "")).replace(
                  /^(?:00)*/,
                  ""
                ))
                  .split("")
                  .reverse()
                  .join("")).replace(/^(?:00)*/, ""))
                  .split("")
                  .reverse()
                  .join("")).length,
                n = 0;
              n < r;
              n += 2
            )
              e += String.fromCharCode(parseInt(t.slice(n, n + 2), 16));
            return a.decode(e);
          },
          hexToNumber: b,
          hexToNumberString: function (t) {
            if (!t) return t;
            if ("string" == typeof t && !g(t))
              throw Error('Given value "' + t + '" is not a valid hex string.');
            return c(t).toString(10);
          },
          numberToHex: y,
          toHex: m,
          hexToBytes: function (t) {
            if (!g((t = t.toString(16))))
              throw Error('Given value "' + t + '" is not a valid hex string.');
            t = t.replace(/^0x/i, "");
            for (var e = [], r = 0; r < t.length; r += 2)
              e.push(parseInt(t.slice(r, r + 2), 16));
            return e;
          },
          bytesToHex: function (t) {
            for (var e = [], r = 0; r < t.length; r++)
              e.push((t[r] >>> 4).toString(16)),
                e.push((15 & t[r]).toString(16));
            return "0x" + e.join("");
          },
          isHex: v,
          isHexStrict: g,
          stripHexPrefix: function (t) {
            return 0 !== t && v(t) ? t.replace(/^(-)?0x/i, "$1") : t;
          },
          leftPad: function (t, e, r) {
            return (
              (/^0x/i.test(t) || "number" == typeof t ? "0x" : "") +
              Array(
                e - (t = t.toString(16).replace(/^0x/i, "")).length + 1 >= 0
                  ? e - t.length + 1
                  : 0
              ).join(r || "0") +
              t
            );
          },
          rightPad: function (t, e, r) {
            var n = /^0x/i.test(t) || "number" == typeof t,
              i =
                e - (t = t.toString(16).replace(/^0x/i, "")).length + 1 >= 0
                  ? e - t.length + 1
                  : 0;
            return (n ? "0x" : "") + t + Array(i).join(r || "0");
          },
          toTwosComplement: function (t) {
            return "0x" + c(t).toTwos(256).toString(16, 64);
          },
          sha3: M,
          sha3Raw: function (t) {
            return null === (t = M(t)) ? w : t;
          },
          toNumber: function (t, e = !1) {
            return "number" == typeof t ? t : b(m(t), e);
          },
        });
    },
    6430: function (t, e, r) {
      "use strict";
      var n = r(4029),
        i = r(3083),
        o = r(1924),
        a = r(7296),
        s = o("Object.prototype.toString"),
        f = r(6410)(),
        u = "undefined" == typeof globalThis ? r.g : globalThis,
        h = i(),
        c = o("String.prototype.slice"),
        l = {},
        d = Object.getPrototypeOf;
      f &&
        a &&
        d &&
        n(h, function (t) {
          if ("function" == typeof u[t]) {
            var e = new u[t]();
            if (Symbol.toStringTag in e) {
              var r = d(e),
                n = a(r, Symbol.toStringTag);
              n || (n = a(d(r), Symbol.toStringTag)), (l[t] = n.get);
            }
          }
        });
      var p = function (t) {
          var e = !1;
          return (
            n(l, function (r, n) {
              if (!e)
                try {
                  var i = r.call(t);
                  i === n && (e = i);
                } catch (t) {}
            }),
            e
          );
        },
        b = r(5692);
      t.exports = function (t) {
        return !!b(t) && (f && Symbol.toStringTag in t ? p(t) : c(s(t), 8, -1));
      };
    },
    3083: function (t, e, r) {
      "use strict";
      var n = [
          "BigInt64Array",
          "BigUint64Array",
          "Float32Array",
          "Float64Array",
          "Int16Array",
          "Int32Array",
          "Int8Array",
          "Uint16Array",
          "Uint32Array",
          "Uint8Array",
          "Uint8ClampedArray",
        ],
        i = "undefined" == typeof globalThis ? r.g : globalThis;
      t.exports = function () {
        for (var t = [], e = 0; e < n.length; e++)
          "function" == typeof i[n[e]] && (t[t.length] = n[e]);
        return t;
      };
    },
    8597: function (t) {
      "use strict";
      t.exports = { i8: "6.5.4" };
    },
  },
]);
