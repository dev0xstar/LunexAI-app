(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [366],
  {
    401: function (e, n, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/app",
        function () {
          return i(86);
        },
      ]);
    },
    3789: function (e, n, i) {
      "use strict";
      var t = i(5893),
        s = i(7294),
        r = i(7686),
        a = i.n(r),
        o = i(2489),
        l = i(9417),
        c = i(5675),
        d = i.n(c);
      let u = (e) => {
        let { options: n, selected: i, onSelect: r, customGroup: c } = e,
          [u, m] = (0, s.useState)(!1),
          [h, x] = (0, s.useState)(!1),
          [v, p] = (0, s.useState)(!1),
          _ = () => {
            let e = n[i] ? i : 0,
              t = n[e];
            void 0 != t &&
              (m(t.title), t.image && x(t.image), void 0 !== r && r(e)),
              p(!1);
          };
        (0, s.useEffect)(_, []), (0, s.useEffect)(_, [n]);
        let f = (e) => {
            var i, t, s;
            let a =
                null !== (i = e.target.getAttribute("data-index")) &&
                void 0 !== i
                  ? i
                  : 0,
              o = n[a];
            m(
              null !==
                (s = null !== (t = o.title) && void 0 !== t ? t : o.value) &&
                void 0 !== s
                ? s
                : ""
            ),
              o.image ? x(o.image) : x(!1),
              void 0 !== r && r(a),
              p(!1);
          },
          j = () => {
            p(!v);
          };
        return (0, t.jsxs)("div", {
          className: v
            ? "".concat(a().visible, " ").concat(a().select_box)
            : "".concat(a().select_box),
          onClick: j,
          children: [
            (0, t.jsxs)("div", {
              className: a().select_box__selected,
              children: [
                h &&
                  (0, t.jsx)("span", {
                    className: a().select_box__icon,
                    children: (0, t.jsx)(d(), { src: h, fill: !0 }),
                  }),
                " ",
                u,
                v
                  ? (0, t.jsx)(o.G, { icon: l.mTx })
                  : (0, t.jsx)(o.G, { icon: l.ptq }),
              ],
            }),
            (0, t.jsx)("div", {
              className: a().select_box__options,
              children: n.map((e, n) =>
                (0, t.jsxs)(
                  "div",
                  {
                    className: a().select_box__items,
                    children: [
                      (0, t.jsx)("input", {
                        id: c + "_" + n,
                        type: "radio",
                        "data-index": n,
                        name: (null != c ? c : "default") + "-checkbox",
                        onChange: f,
                      }),
                      (0, t.jsxs)("label", {
                        htmlFor: c + "_" + n,
                        children: [
                          h &&
                            (0, t.jsx)("span", {
                              className: a().select_box__icon,
                              children: (0, t.jsx)(d(), {
                                src: e.image,
                                fill: !0,
                              }),
                            }),
                          e.title,
                        ],
                      }),
                    ],
                  },
                  n
                )
              ),
            }),
          ],
        });
      };
      n.Z = u;
    },
    2005: function (e, n, i) {
      "use strict";
      var t = i(5893),
        s = i(7333),
        r = i(3789),
        a = i(7294);
      let o = (e) => {
        let {
            alt: n,
            key: i,
            selected: o,
            onSelect: l,
            purpose: c,
            forcedSelected: d,
          } = e,
          { networks: u, isLoading: m } = (0, s.e)(),
          [h, x] = (0, a.useState)([]),
          [v, p] = (0, a.useState)(null != o ? o : 0);
        return (
          (0, a.useEffect)(() => {
            void 0 !== l &&
              (console.log(
                "availableNetworks[selectedOption ?? 0]",
                h[null != v ? v : 0]
              ),
              l(h[null != v ? v : 0]));
          }, [v, h]),
          (0, a.useEffect)(() => {
            if (m) return !1;
            let e = [],
              n = Object.keys(u);
            for (let t = 0; t < n.length; t++) {
              let s = n[t];
              if (!(c && u[s].config.disabled_functions.includes(c))) {
                var i;
                d && u[s].chain_id == d && p(t),
                  (e[t] = {
                    currency: u[s].currency,
                    id: u[s].chain_id,
                    image: "/images/networks/" + u[s].chain_id + ".svg",
                    title: u[s].name,
                    value: u[s].chain_id,
                    config:
                      null !== (i = u[s].config[c]) && void 0 !== i ? i : [],
                    symbol: u[s].symbol,
                  });
              }
            }
            x(e);
          }, [u, m]),
          (0, t.jsx)(
            r.Z,
            {
              customGroup: null != n ? n : null,
              options: h,
              selected: v,
              onSelect: p,
            },
            null != i ? i : Date.now()
          )
        );
      };
      n.Z = o;
    },
    4430: function (e, n) {
      "use strict";
      let i = {
        api_url: "https://support.blockblend.io/",
        headers: {
          Accept: "*/*",
          "User-Agent": "BlockBlend Client (https://blockblend.io)",
          Authorization: "Bearer 6b1ac011a47b7720864a1dc32c22b11a4e20f6a3",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
        },
        get: (e, n) => (
          void 0 != n && (e += "?" + new URLSearchParams(n).toString()),
          new Promise((n, t) => {
            fetch(i.api_url + e, {
              method: "GET",
              headers: i.headers,
              mode: "cors",
            })
              .then(async (e) => {
                try {
                  let i = await e.json();
                  if (!i.success) return t(i);
                  return n(i.data);
                } catch (e) {
                  return t(
                    "error when trying to retrieve data from the server"
                  );
                }
              })
              .catch((e) =>
                t("error when trying to retrieve data from the server")
              );
          })
        ),
        post: (e, n) =>
          new Promise((t, s) => {
            fetch(i.api_url + e, {
              method: "post",
              headers: i.headers,
              body: JSON.stringify(n),
            })
              .then((e) => {
                e.json()
                  .then((e) => (e.error ? s(e.message) : t(e)))
                  .catch(() => s(!1));
              })
              .catch((e) => t(e));
          }),
      };
      n.Z = i;
    },
    86: function (e, n, i) {
      "use strict";
      i.r(n),
        i.d(n, {
          default: function () {
            return A;
          },
        });
      var t = i(5893),
        s = i(9008),
        r = i.n(s),
        a = i(4370),
        o = i(2953),
        l = i(6682),
        c = i(1664),
        d = i.n(c),
        u = i(7294),
        m = i(483),
        h = i.n(m),
        x = i(3282),
        v = i(765),
        p = i(5675),
        _ = i.n(p),
        f = i(3789),
        j = i(4759),
        g = i(2489),
        b = i(9417),
        y = i(2005),
        N = i(9077),
        C = i(5305),
        w = i(1163),
        k = i(4430),
        S = i(5678);
      let B = (e) => {
        var n;
        let { setBridgeData: i, bridgeData: s } = e,
          { chain: r } = (0, N.LN)(),
          { address: a, isConnected: c } = (0, N.mA)(),
          [d, m] = (0, u.useState)(!1),
          [x, v] = (0, u.useState)(!1),
          [p, B] = (0, u.useState)(!1),
          [Z, E] = (0, u.useState)(!1),
          [T, P] = (0, u.useState)(!1),
          [D, A] = (0, u.useState)(!1),
          [F, R] = (0, u.useState)("custom"),
          [I, O] = (0, u.useState)(""),
          [G, M] = (0, u.useState)([]),
          [H, L] = (0, u.useState)(0),
          [q, U] = (0, u.useState)([{ address: "", share: 0 }]),
          [z, K] = (0, u.useState)(!1),
          [J, X] = (0, u.useState)(!1),
          W = (e, n) => {
            let { name: i, value: t } = n.target,
              s = [...q];
            (s[e][i] = t), U(s);
          },
          V = () => {
            U([{ address: "", share: 0 }, ...q]);
          },
          Y = (e) => {
            let n = [...q];
            n.splice(e, 1), U(n);
          },
          $ = () => {
            var e;
            if ((K(!1), !G[H])) return;
            let n = null !== (e = G[H].value) && void 0 !== e ? e : 0;
            if (0 == n) return;
            let i = new Date((Date.now() / 6e4 + parseInt(n)) * 6e4);
            K(new Date(3e5 * Math.ceil(new Date(i).getTime() / 3e5)));
          };
        (0, u.useEffect)($, []),
          (0, u.useEffect)($, [H, p, Z, G]),
          (0, u.useEffect)(() => {
            if (p) {
              var e, n, i;
              R(
                null !== (e = p.config.amounts[0]) && void 0 !== e
                  ? e
                  : "custom"
              ),
                A(
                  null !== (n = p.config.amounts) && void 0 !== n
                    ? n
                    : ["custom"]
                ),
                P(
                  null !== (i = p.config.amounts) && void 0 !== i
                    ? i
                    : ["custom"]
                );
            }
          }, [p]),
          (0, u.useEffect)(() => {
            if ((M(!1), Z)) {
              let e = [],
                n = Object.keys(Z.config.delays);
              for (let i = 0; i < n.length; i++) {
                let t = n[i];
                e.push({ id: i, title: t, value: Z.config.delays[t] });
              }
              M(e);
            }
          }, [Z]);
        let Q = (0, w.useRouter)(),
          { ref: ee } = Q.query;
        (0, u.useEffect)(() => {
          ee ? O(ee) : O("");
        }, [ee]);
        let [en, ei] = (0, u.useState)(!1);
        (0, u.useEffect)(() => {
          ei(!1),
            Z &&
              p &&
              p.symbol != Z.symbol &&
              k.Z.get("pricing/swap", { from: p.symbol, to: Z.symbol })
                .then((e) => {
                  ei(e);
                })
                .catch((e) => {
                  ei(!1);
                });
        }, [p, Z]),
          (0, u.useEffect)(() => {
            k.Z.get("pricing/fees")
              .then((e) => {
                var n;
                m(
                  null !== (n = null == e ? void 0 : e.bridge) && void 0 !== n
                    ? n
                    : { random: [0, 0], base: 0 }
                );
              })
              .catch((e) => {});
          }, []);
        let et = () => {
          X(!0), i(!1);
          let e = {
            input: p.symbol,
            output: Z.symbol,
            recipients: q,
            delay: G[H].value,
          };
          c && "custom" != F && (e.amount = F.toString()),
            c && a && (e.caller = a),
            I.length > 0 && (e.referral = I),
            k.Z.post("bridge", e)
              .then((e) => {
                if (!e.success) {
                  var n;
                  S.Am.error(
                    null !== (n = e.message) && void 0 !== n
                      ? n
                      : "Error when trying to retrieve data from the network"
                  );
                }
                if (e.data) {
                  i(e.data);
                  return;
                }
              })
              .catch((e) => {
                i(!1), S.Am.error(e);
              })
              .finally(() => {
                X(!1);
              });
        };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("ul", {
              className: h().app__top,
              children: (0, t.jsx)("li", {
                className: h().active,
                children: "Lunex AI Cross-Chain Bridge",
              }),
            }),
            p &&
              Z &&
              (0, t.jsxs)("div", {
                className: h().app__top_icons,
                children: [
                  (0, t.jsx)("div", {
                    className: h().app__top_icon,
                    children: (0, t.jsx)("div", {
                      children: (0, t.jsx)("div", {
                        children: (0, t.jsx)(_(), {
                          src: p.image,
                          alt: p.name,
                          fill: !0,
                        }),
                      }),
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: h().app__top_svg,
                    children: (0, t.jsx)("object", {
                      type: "image/svg+xml",
                      data: "/images/wave.svg",
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: h().app__top_icon,
                    children: (0, t.jsx)("div", {
                      children: (0, t.jsx)("div", {
                        children: (0, t.jsx)(_(), {
                          src: Z.image,
                          alt: Z.name,
                          fill: !0,
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            (0, t.jsxs)("form", {
              children: [
                (0, t.jsxs)(o.Z, {
                  children: [
                    (0, t.jsx)(l.Z, {
                      xs: "12",
                      sm: "6",
                      children: (0, t.jsxs)("div", {
                        className: h().input__container,
                        children: [
                          (0, t.jsx)("label", { children: "From" }),
                          (0, t.jsx)(
                            y.Z,
                            {
                              alt: "bridge-input",
                              onSelect: B,
                              purpose: "bridge",
                              forcedSelected: !!r && r.id,
                            },
                            "bridge-input"
                          ),
                        ],
                      }),
                    }),
                    (0, t.jsx)(l.Z, {
                      xs: "12",
                      sm: "6",
                      children: (0, t.jsxs)("div", {
                        className: h().input__container,
                        children: [
                          (0, t.jsx)("label", { children: "To" }),
                          (0, t.jsx)(
                            y.Z,
                            {
                              alt: "bridge-output",
                              onSelect: E,
                              purpose: "bridge",
                              forcedSelected: !!r && r.id,
                            },
                            "bridge-output"
                          ),
                        ],
                      }),
                    }),
                    (0, t.jsxs)(l.Z, {
                      xs: "12",
                      children: [
                        (0, t.jsx)("div", {
                          className: h().input__container,
                          children: q.map((e, i) =>
                            (0, t.jsxs)("div", {
                              className: h().multi,
                              children: [
                                (0, t.jsxs)("div", {
                                  className: h().input__multi_recipient,
                                  children: [
                                    (0, t.jsx)("label", {
                                      htmlFor: "recipient",
                                      children: "Recipient (Wallet address)\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 ",
                                    }),
                                    (0, t.jsx)("input", {
                                      type: "text",
                                      id: "recipient",
                                      name: "address",
                                      value:
                                        null !== (n = e.address) && void 0 !== n
                                          ? n
                                          : "",
                                      onChange: (e) => W(i, e),
                                    }),
                                  ],
                                }),
                                q.length > 1 && i + 1 != q.length
                                  ? (0, t.jsxs)("div", {
                                      className: h().input__multi_amount,
                                      children: [
                                        (0, t.jsx)("label", {
                                          htmlFor: "share",
                                          children: "Amount",
                                        }),
                                        (0, t.jsx)("input", {
                                          type: "text",
                                          name: "share",
                                          value: e.share,
                                          onChange: (e) => W(i, e),
                                        }),
                                      ],
                                    })
                                  : null,
                                0 != i
                                  ? (0, t.jsx)("button", {
                                      className: h().app__remove_recipient,
                                      onClick: (e) => {
                                        e.preventDefault(), Y(i);
                                      },
                                      children: (0, t.jsx)(g.G, {
                                        icon: b.YIN,
                                      }),
                                    })
                                  : null,
                              ],
                            })
                          ),
                        }),
                      ],
                    }),
                    D && D.length > 1
                      ? (0, t.jsx)(l.Z, {
                          xs: "12",
                          children: (0, t.jsx)("div", {
                            className: h().input__container,
                            children: (0, t.jsxs)("div", {
                              className: ""
                                .concat(h().input__amount, " ")
                                .concat(h().input__amount_custom),
                              children: [
                                D.includes("custom")
                                  ? (0, t.jsx)("div", {
                                      children: (0, t.jsxs)("div", {
                                        onClick: (e) => {
                                          R("custom");
                                        },
                                        children: [
                                          (0, t.jsx)("input", {
                                            type: "radio",
                                            name: "input_amount",
                                            id: "amount_custom",
                                            checked: "custom" == F,
                                          }),
                                          (0, t.jsx)("label", {
                                            htmlFor: "amount_custom",
                                            children: "Custom",
                                          }),
                                        ],
                                      }),
                                    })
                                  : null,
                                (0, t.jsx)("div", {
                                  children: D.map((e, n) =>
                                    "custom" == e
                                      ? null
                                      : (0, t.jsxs)("div", {
                                          onClick: (n) => {
                                            R(e);
                                          },
                                          children: [
                                            (0, t.jsx)("input", {
                                              type: "radio",
                                              name: "input_amount",
                                              id: "amount_" + n,
                                              checked: F == e,
                                            }),
                                            (0, t.jsx)("label", {
                                              htmlFor: "amount_" + n,
                                              children:
                                                (e > 1e6
                                                  ? Math.floor(e / 1e6) + "m"
                                                  : e > 1e4
                                                  ? Math.floor(e / 1e3) + "k"
                                                  : e) +
                                                " " +
                                                p.currency,
                                            }),
                                          ],
                                        })
                                  ),
                                }),
                              ],
                            }),
                          }),
                        })
                      : null,
                    (0, t.jsx)(l.Z, {
                      xs: "12",
                      sm: "6",
                      children: (0, t.jsxs)(
                        "div",
                        {
                          className: h().input__container,
                          children: [
                            (0, t.jsx)("label", { children: "Security choice" }),
                            G &&
                              (0, t.jsx)(f.Z, {
                                selected: H,
                                customGroup: "delays",
                                options: G,
                                onSelect: L,
                              }),
                          ],
                        },
                        H
                      ),
                    }),
                    (0, t.jsx)(l.Z, {
                      xs: "12",
                      sm: "6",
                      children: (0, t.jsxs)("div", {
                        className: h().input__container,
                        children: [
                          (0, t.jsx)("label", {
                            children: "Promo Code",
                          }),
                          (0, t.jsx)("input", {
                            type: "text",
                            id: "referral",
                            name: "input_referral",
                            value: I,
                            onChange: (e) => {
                              O(e.currentTarget.value);
                            },
                          }),
                        ],
                      }),
                    }),
                    (0, t.jsx)(l.Z, {
                      xs: "12",
                      children: (0, t.jsxs)("div", {
                        className: h().app__fees,
                        onClick: () => v(!x),
                        children: [
                          (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsx)(g.G, { icon: b.DBf }),
                              (0, t.jsxs)("div", {
                                children: [
                                  "Release time:",
                                  " ",
                                  z
                                    ? z.toLocaleString("en-US", {
                                        year: "numeric",
                                        month: "numeric",
                                        day: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                      })
                                    : (0, t.jsx)(g.G, {
                                        icon: b.IJ7,
                                        width: 30,
                                        spin: !0,
                                      }),
                                ],
                              }),
                              x
                                ? (0, t.jsx)(g.G, { icon: b.mTx })
                                : (0, t.jsx)(g.G, { icon: b.ptq }),
                            ],
                          }),
                          x
                            ? (0, t.jsxs)("div", {
                                className: h().app__fees_details,
                                children: [
                                  (0, t.jsxs)("div", {
                                    children: [
                                      (0, t.jsx)("div", {
                                        children: "TX Fee:",
                                      }),
                                      " ",
                                      (0, t.jsx)("div", {
                                        children:
                                          !1 === d
                                            ? (0, t.jsx)(g.G, {
                                                icon: b.IJ7,
                                                width: 30,
                                                spin: !0,
                                              })
                                            : d.random[0] +
                                              "% - " +
                                              d.random[1] +
                                              "% + $" +
                                              d.base,
                                      }),
                                    ],
                                  }),
                                  p.symbol != Z.symbol && en
                                    ? (0, t.jsxs)("div", {
                                        children: [
                                          (0, t.jsx)("div", {
                                            children: "Exchange Rate:",
                                          }),
                                          " ",
                                          (0, t.jsxs)("div", {
                                            children: [
                                              "1 ",
                                              p.currency,
                                              " ≈",
                                              " " +
                                                (0 == parseFloat(en).toFixed(4)
                                                  ? parseFloat(en).toFixed(8)
                                                  : parseFloat(en).toFixed(4)),
                                              " " + Z.currency,
                                            ],
                                          }),
                                        ],
                                      })
                                    : null,
                                  I
                                    ? (0, t.jsxs)("div", {
                                        children: [
                                          (0, t.jsx)("div", {
                                            children: "Discount/Referral Code:",
                                          }),
                                          " ",
                                          (0, t.jsx)("div", { children: I }),
                                        ],
                                      })
                                    : null,
                                ],
                              })
                            : "",
                        ],
                      }),
                    }),
                  ],
                }),
                p
                  ? (0, t.jsx)(C.Z, {
                      conentionRequired: "custom" != F,
                      network: p.value,
                      children: (0, t.jsx)(j.Z, {
                        theme: "color",
                        block: "true",
                        mT: "10",
                        size: "xl",
                        loading: J,
                        onClick: (e) => {
                          e.preventDefault(), et();
                        },
                        children: "Confirm and Send Transaction",
                      }),
                    })
                  : null,
              ],
            }),
          ],
        });
      };
      var Z = i(2592),
        E = i(8130),
        T = i(7559);
      let P = i(7779);
      i(8269);
      let D = (e) => {
        var n, i, s, r, a, c, d, m;
        let { bridgeData: x, setBridgeData: v } = e,
          { SVG: p } = {
            Image:
              ((c = function (e) {
                var n = e.text,
                  i = e.options,
                  t = u.useRef(null);
                return (
                  u.useEffect(
                    function () {
                      t &&
                        t.current &&
                        Z.toDataURL(n, i, function (e, n) {
                          if (e) throw e;
                          t.current instanceof HTMLImageElement &&
                            (t.current.src = n);
                        });
                    },
                    [n, i, t]
                  ),
                  u.createElement("img", { ref: t })
                );
              }),
              u.useMemo(function () {
                return c;
              }, [])),
            Canvas:
              ((m = function (e) {
                var n = e.text,
                  i = e.options,
                  t = e.logo,
                  s = u.useRef(null);
                return (
                  u.useEffect(
                    function () {
                      var e, r, a, o, l, c, d, u, m;
                      if (
                        s &&
                        s.current &&
                        (Z.toCanvas(s.current, n, i, function (e) {
                          if (e) throw e;
                        }),
                        t)
                      ) {
                        var h = s.current.getContext("2d");
                        if (h) {
                          var x = new Image();
                          x.src = t.src;
                          var v =
                            (null === (e = null == t ? void 0 : t.options) ||
                            void 0 === e
                              ? void 0
                              : e.width) || 30;
                          if (
                            (null === (r = null == t ? void 0 : t.options) ||
                            void 0 === r
                              ? void 0
                              : r.hasOwnProperty("x")) &&
                            (null === (a = null == t ? void 0 : t.options) ||
                            void 0 === a
                              ? void 0
                              : a.hasOwnProperty("y"))
                          ) {
                            var p =
                                (null ===
                                  (o = null == t ? void 0 : t.options) ||
                                void 0 === o
                                  ? void 0
                                  : o.x) || 0,
                              _ =
                                (null ===
                                  (l = null == t ? void 0 : t.options) ||
                                void 0 === l
                                  ? void 0
                                  : l.y) || 0;
                            x.onload = function () {
                              h.drawImage(x, p, _, v, v);
                            };
                          }
                          if (
                            !(null === (c = null == t ? void 0 : t.options) ||
                            void 0 === c
                              ? void 0
                              : c.hasOwnProperty("x")) ||
                            !(null === (d = null == t ? void 0 : t.options) ||
                            void 0 === d
                              ? void 0
                              : d.hasOwnProperty("y")) ||
                            void 0 ===
                              (null === (u = null == t ? void 0 : t.options) ||
                              void 0 === u
                                ? void 0
                                : u.x) ||
                            void 0 ===
                              (null === (m = null == t ? void 0 : t.options) ||
                              void 0 === m
                                ? void 0
                                : m.y)
                          ) {
                            var f = null == i ? void 0 : i.margin;
                            f = f ? 8 * f : 0 === f ? 0 : 32;
                            var j =
                              (((null == i ? void 0 : i.width) || 116 + f) -
                                v) /
                              2;
                            x.onload = function () {
                              h.drawImage(x, j, j, v, v);
                            };
                          }
                        }
                      }
                    },
                    [s, n, i, t]
                  ),
                  u.createElement("canvas", { ref: s })
                );
              }),
              u.useMemo(function () {
                return m;
              }, [])),
            SVG:
              ((d = function (e) {
                var n = e.text,
                  i = e.options,
                  t = u.useRef(null);
                return (
                  u.useEffect(
                    function () {
                      Z.toString(n, i, function (e, n) {
                        if (e) throw e;
                        t.current instanceof HTMLDivElement &&
                          (t.current.innerHTML = n);
                      });
                    },
                    [n, i]
                  ),
                  u.createElement("div", { ref: t })
                );
              }),
              u.useMemo(function () {
                return d;
              }, [])),
          },
          [f, y] = (0, u.useState)(!1),
          [w, B] = (0, u.useState)(!1),
          { address: D } = (0, N.mA)(),
          A = (0, N.GG)({
            mode: "recklesslyUnprepared",
            address: null !== (n = x.action.contract) && void 0 !== n ? n : "",
            abi: null !== (i = x.action.abi) && void 0 !== i ? i : [],
            functionName:
              null !== (s = x.action.function) && void 0 !== s ? s : "",
            args: null !== (r = x.action.params) && void 0 !== r ? r : [],
            overrides: {
              from: D,
              value: x.confirmation.amount
                ? P.utils.parseEther(x.confirmation.amount)
                : 0,
            },
          }),
          F = async () => {
            if ("transfer" == x.action.type) {
              v(!1);
              return;
            }
            try {
              var e, n;
              let i = await S.Am.promise(A.writeAsync(), {
                pending: "Sending transaction",
                success: { render: () => "Transaction sent!" },
                error: {
                  render(e) {
                    var n;
                    let { data: i } = e;
                    return i &&
                      i.data &&
                      null !== (n = i.data.message) &&
                      void 0 !== n
                      ? n
                      : "Undefined error";
                  },
                },
              });
              k.Z.post("bridge/update", {
                id:
                  null !== (e = x.confirmation.job_id) && void 0 !== e ? e : 0,
                hash: null !== (n = i.hash) && void 0 !== n ? n : "",
              }).then(() => {
                v(!1);
              });
            } catch (e) {}
          };
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsxs)("div", {
            className: h().popup,
            children: [
              (0, t.jsxs)("div", {
                className: h().popup__top,
                children: [
                  (0, t.jsx)("button", {
                    href: "#BACK_TO_BRIDGE_SCREEN",
                    className: h().popup__back,
                    onClick: (e) => {
                      e.preventDefault(), v(!1);
                    },
                    children: (0, t.jsx)(g.G, { icon: b.acZ }),
                  }),
                  (0, t.jsx)("strong", {
                    children: f ? "Confirm Transaction" : "IMPORTANT",
                  }),
                ],
              }),
              f
                ? (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)("div", {
                        className: h().confirmation__time,
                        children: (0, t.jsx)(E.ZP, {
                          date: 1e3 * x.delivery.timestamp,
                          renderer: T.Z.countDownRender,
                        }),
                      }),
                      (0, t.jsxs)("div", {
                        className: "checkbox__custom",
                        style: { marginTop: "2rem" },
                        children: [
                          (0, t.jsx)("input", {
                            type: "checkbox",
                            name: "accept",
                            id: "accept",
                            onChange: () => {
                              B(!w);
                            },
                          }),
                        ],
                      }),
                      "transfer" == x.action.type
                        ? (0, t.jsxs)("div", {
                            className: h().confirmation__send,
                            children: [
                              (0, t.jsx)("div", {
                                className: h().confirmation__send_addr,
                                children: (0, t.jsxs)("div", {
                                  children: [
                                    (0, t.jsxs)("div", {
                                      className: h().confirmation__label,
                                      children: [
                                        "Send",
                                        " ",
                                        x.confirmation.input.currency,
                                        " ",
                                        "to",
                                      ],
                                    }),
                                    (0, t.jsx)("span", {
                                      className: w ? "" : "",
                                      style: { cursor: "pointer" },
                                      onClick: (e) => {
                                        e.preventDefault(),
                                          navigator.clipboard.writeText(
                                            x.action.treasury
                                          ),
                                          S.Am.success("Copied to clipboard");
                                      },
                                      children: x.action.treasury,
                                    }),
                                  ],
                                }),
                              }),
                              (0, t.jsx)(p, {
                                text: "ethereum:" + x.action.treasury,
                                options: {
                                  margin: 0,
                                  width: 64,
                                  color: { dark: "#6ad0cc", light: "#0E1025" },
                                },
                              }),
                            ],
                          })
                        : null,
                      (0, t.jsxs)(o.Z, {
                        children: [
                          (0, t.jsxs)(l.Z, {
                            xs: "12",
                            children: [
                              (0, t.jsx)("div", {
                                className: h().confirmation__label,
                                children: "Recipient",
                              }),
                              x.confirmation.recipients.map((e) =>
                                (0, t.jsx)("div", {
                                  className: h().confirmation__val,
                                  children: e.address,
                                })
                              ),
                            ],
                          }),
                          (0, t.jsxs)(l.Z, {
                            xs: "6",
                            children: [
                              (0, t.jsx)("div", {
                                className: h().confirmation__label,
                                children: "From",
                              }),
                              (0, t.jsxs)("div", {
                                className: h().confirmation__val,
                                children: [
                                  (0, t.jsx)("div", {
                                    className: h().confirmation__icon,
                                    children: (0, t.jsx)(_(), {
                                      src:
                                        "/images/networks/" +
                                        x.confirmation.input.chain_id +
                                        ".svg",
                                      alt: x.confirmation.input.name,
                                      fill: !0,
                                    }),
                                  }),
                                  (0, t.jsx)("span", {
                                    children: x.confirmation.input.name,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsxs)(l.Z, {
                            xs: "6",
                            children: [
                              (0, t.jsx)("div", {
                                className: h().confirmation__label,
                                children: "To",
                              }),
                              (0, t.jsxs)("div", {
                                className: h().confirmation__val,
                                children: [
                                  (0, t.jsx)("div", {
                                    className: h().confirmation__icon,
                                    children: (0, t.jsx)(_(), {
                                      src:
                                        "/images/networks/" +
                                        x.confirmation.output.chain_id +
                                        ".svg",
                                      alt: x.confirmation.output.name,
                                      fill: !0,
                                    }),
                                  }),
                                  (0, t.jsx)("span", {
                                    children: x.confirmation.output.name,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsxs)(l.Z, {
                            xs: "6",
                            children: [
                              (0, t.jsx)("div", {
                                className: h().confirmation__label,
                                children: "Amount",
                              }),
                              (0, t.jsx)("div", {
                                className: h().confirmation__val,
                                children: x.confirmation.amount
                                  ? x.confirmation.amount +
                                    " " +
                                    x.confirmation.input.currency
                                  : "min. " +
                                    x.limitation[0] +
                                    " " +
                                    x.confirmation.input.currency +
                                    " max. " +
                                    x.limitation[1] +
                                    " " +
                                    x.confirmation.input.currency,
                              }),
                            ],
                          }),
                          (0, t.jsxs)(l.Z, {
                            xs: "6",
                            children: [
                              (0, t.jsx)("div", {
                                className: h().confirmation__label,
                                children: "Scheduled to",
                              }),
                              (0, t.jsx)("div", {
                                className: h().confirmation__val,
                                children: new Date(
                                  1e3 * x.delivery.timestamp
                                ).toLocaleString("en-US", {
                                  year: "numeric",
                                  month: "numeric",
                                  day: "numeric",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                }),
                              }),
                            ],
                          }),
                          (0, t.jsxs)(l.Z, {
                            xs: "12",
                            children: [
                              (0, t.jsx)("div", {
                                className: h().confirmation__label,
                                children: "Backup your recovery key",
                              }),
                              (0, t.jsx)("div", {
                                className: h().confirmation__rec,
                                style: { cursor: "pointer" },
                                onClick: (e) => {
                                  e.preventDefault(),
                                    navigator.clipboard.writeText(
                                      x.delivery.recovery
                                    ),
                                    S.Am.success("Copied to clipboard");
                                },
                                children: x.delivery.recovery,
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: h().confirmation__btns,
                            children: [
                              (0, t.jsx)(l.Z, {
                                xs: "24",
                                sm: "12",
                                children: (0, t.jsx)(C.Z, {
                                  theme: "color",
                                  block: "true",
                                  size: "xl",
                                  mT: 0,
                                  conentionRequired:
                                    "transfer" != x.action.type,
                                  network:
                                    null !==
                                      (a = x.confirmation.input.chain_id) &&
                                    void 0 !== a
                                      ? a
                                      : 1,
                                  children: (0, t.jsx)(j.Z, {
                                    theme: "color",
                                    block: "true",
                                    size: "xl",
                                    onClick: (e) => {
                                      e.preventDefault(), F();
                                    },
                                    children:
                                      "transfer" == x.action.type
                                        ? "Close Window"
                                        : "Confirm Transaction",
                                  }),
                                }),
                              }),
                              
                            ],
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)("p", {
                        children: (0, t.jsx)("strong", {
                          children: "I accept these terms:",
                        }),
                      }),
                      (0, t.jsx)("p", {
                        children:
                          "1) The resources I am linking are not originating from any unlawful or illicit origins/activities. If these resources come under scrutiny, I am willing to acknowledge the outcome of having the resources suspended and my details shared with the relevant authorities.",
                      }),
                      (0, t.jsx)("p", {
                        children:
                          "2) I am not a resident of the United States, Iran, Iraq, North Korea, Belarus, or Russia, and I am not disallowed by any legal regulations to utilize the service.",
                      }),
                      (0, t.jsx)(o.Z, {
                        children: (0, t.jsx)("div", {
                          className: h().confirmation__btns,
                          children: (0, t.jsx)(l.Z, {
                            xs: "12",
                            children: (0, t.jsx)(j.Z, {
                              theme: "color",
                              block: "true",
                              size: "xl",
                              onClick: (e) => {
                                y(!0);
                              },
                              children: "Proceed",
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
            ],
          }),
        });
      };
      function A() {
        let [e, n] = (0, u.useState)(!1);
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)(r(), {
              children: [
                (0, t.jsx)("title", {
                  children:
                    "Lunex AI - Bridge",
                }),
                (0, t.jsx)("meta", {
                  name: "description",
                  content:
                    "Bridge built by Lunex AI team, Available now 8 Blockchain",
                }),
                (0, t.jsx)("meta", {
                  property: "og:title",
                  content:
                    "Lunex AI - Bridge",
                }),
                (0, t.jsx)("meta", {
                  property: "og:description",
                  content:
                    "Bridge built by Lunex AI team, Available now 8 Blockchain",
                }),
                (0, t.jsx)("meta", {
                  name: "twitter:title",
                  content:
                    "Lunex AI - Bridge",
                }),
                (0, t.jsx)("meta", {
                  name: "twitter:description",
                  content:
                    "Bridge built by Lunex AI team, Available now 8 Blockchain",
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: h().app,
              children: [
                (0, t.jsx)(x.Z, { page: "app" }),
                (0, t.jsxs)(a.Z, {
                  children: [
                    (0, t.jsx)(o.Z, {
                      customClass: "center-sm",
                      children: (0, t.jsx)(l.Z, {
                        xs: "12",
                        sm: "8",
                        md: "6",
                        lg: "5",
                        children: (0, t.jsx)("div", {
                          className: h().app__container,
                          children: e
                            ? (0, t.jsx)(D, { bridgeData: e, setBridgeData: n })
                            : (0, t.jsx)(B, {
                                bridgeData: e,
                                setBridgeData: n,
                              }),
                        }),
                      }),
                    }),
                  ],
                }),
                (0, t.jsx)(v.Z, {}),
              ],
            }),
          ],
        });
      }
    },
    7686: function (e) {
      e.exports = {
        select_box: "CustomSelect_select_box__Kcdeo",
        visible: "CustomSelect_visible__f9X0K",
        select_box__options: "CustomSelect_select_box__options__Cv_EH",
        select_box__selected: "CustomSelect_select_box__selected__U6J_t",
        select_box__items: "CustomSelect_select_box__items__gEK6B",
        select_box__icon: "CustomSelect_select_box__icon__jaP4_",
      };
    },
  },
  function (e) {
    e.O(
      0,
      [976, 948, 11, 764, 269, 322, 592, 549, 73, 426, 774, 888, 179],
      function () {
        return e((e.s = 401));
      }
    ),
      (_N_E = e.O());
  },
]);
