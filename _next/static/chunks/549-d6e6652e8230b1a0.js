(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [549],
  {
    4759: function (e, r, n) {
      "use strict";
      var s = n(5893),
        t = n(5427),
        l = n.n(t),
        i = n(2489),
        o = n(9417);
      let c = (e) =>
        (0, s.jsx)("a", {
          onClick: e.loading ? void 0 : e.onClick,
          style: {
            marginRight: e.mR ? e.mR + "px" : "0",
            marginTop: e.mT ? e.mT + "px" : "0",
          },
          className: ""
            .concat(l().button, " \n      ")
            .concat("border" == e.theme ? l().button__border : "", "\n      ")
            .concat("color" == e.theme ? l().button__color : "", "\n      ")
            .concat("solid" == e.theme ? l().button__solid : "", "\n      ")
            .concat(
              "color_solid" == e.theme ? l().button__color_solid : "",
              "\n      "
            )
            .concat("xl" == e.size ? l().button__xl : "", "\n      ")
            .concat("s" == e.size ? l().button__s : "", "\n      ")
            .concat("true" == e.chain ? l().button__chain : "", "\n      ")
            .concat("true" == e.block ? l().button__block : ""),
          href: e.href,
          children: e.loading
            ? (0, s.jsx)(i.G, { icon: o.IJ7, width: 30, spin: !0 })
            : e.children,
        });
      r.Z = c;
    },
    765: function (e, r, n) {
      "use strict";
      var s = n(5893),
        t = n(5480),
        l = n.n(t),
        i = n(2953),
        o = n(4370),
        c = n(6682),
        d = n(1664),
        a = n.n(d),
        h = n(2489),
        _ = n(3024);
      let u = () =>
        (0, s.jsx)("footer", {
          className: l().footer,
          children: (0, s.jsx)(o.Z, {
            children: (0, s.jsxs)(i.Z, {
              children: [
                (0, s.jsxs)(c.Z, {
                  xs: "23",
                  sm: "12",
                  customClass: "text-center align-end",
                  children: [
                    (0, s.jsx)("p", {
                      children:
                        "Lunex AI \xa9 2025 • All rights reserved.",
                    }),
                    
                    
                  ],
                }),
              ],
            }),
          }),
        });
      r.Z = u;
    },
    6682: function (e, r, n) {
      "use strict";
      var s = n(5893),
        t = n(6010);
      let l = (e) => {
        let r, n, l, i;
        let o = e.customClass;
        return (
          e.xs ? (r = "col-xs-" + e.xs) : e.xs,
          e.sm ? (n = "col-sm-" + e.sm) : e.sm,
          e.md ? (l = "col-md-" + e.md) : e.md,
          e.lg ? (i = "col-lg-" + e.lg) : e.lg,
          (0, s.jsx)("div", {
            className: (0, t.Z)(r, n, l, i, o),
            children: e.children,
          })
        );
      };
      r.Z = l;
    },
    4370: function (e, r, n) {
      "use strict";
      var s = n(5893);
      let t = (e) =>
        (0, s.jsx)("div", { className: "grid", children: e.children });
      r.Z = t;
    },
    2953: function (e, r, n) {
      "use strict";
      var s = n(5893),
        t = n(6010);
      let l = (e) => {
        let r, n;
        return (
          void 0 != e.customClass && (r = e.customClass.split(" ")),
          void 0 != e.customClass &&
            (n = (function (e) {
              let r = [];
              for (let n = 0; n < e.length; n++) r.push(e[n]);
              return r;
            })(r)),
          (0, s.jsx)("div", {
            className: (0, t.Z)("row", n),
            children: e.children,
          })
        );
      };
      r.Z = l;
    },
    3282: function (e, r, n) {
      "use strict";
      n.d(r, {
        Z: function () {
          return g;
        },
      });
      var s = n(5893),
        t = n(7294),
        l = n(3734),
        i = n.n(l);
      n(2953);
      var o = n(4370);
      n(6682);
      var c = n(1664),
        d = n.n(c);
      n(2489);
      var a = n(5675),
        h = n.n(a),
        _ = n(4759),
        u = n(7559),
        x = n(9077),
        m = n(7333);
      let j = () => {
          var e;
          let { connect: r, connectors: n } = (0, x.$4)(),
            { address: t, isConnected: l } = (0, x.mA)(),
            { disconnect: o } = (0, x.qL)(),
            { chain: c } = (0, x.LN)(),
            { networks: d, isLoading: a } = (0, m.e)();
          return a
            ? (0, s.jsx)(s.Fragment, {})
            : (0, s.jsx)("div", {
                className: i().header__app_buttons,
                children: l
                  ? (0, s.jsxs)(s.Fragment, {
                      children: [
                        d
                          ? (0, s.jsx)(_.Z, {
                              theme: "color",
                              chain: "true",
                              mR: "10",
                              children:
                                void 0 !== d[c.id]
                                  ? (0, s.jsxs)(s.Fragment, {
                                      children: [
                                        (0, s.jsx)("div", {
                                          children: (0, s.jsx)(h(), {
                                            src:
                                              "/images/networks/" +
                                              c.id +
                                              ".svg",
                                            fill: !0,
                                          }),
                                        }),
                                        null !== (e = d[c.id].name) &&
                                        void 0 !== e
                                          ? e
                                          : "-",
                                      ],
                                    })
                                  : (0, s.jsxs)(s.Fragment, {
                                      children: [
                                        "Unknow network (",
                                        c.name,
                                        ")",
                                      ],
                                    }),
                            })
                          : null,
                        (0, s.jsxs)(_.Z, {
                          theme: "solid",
                          chain: "true",
                          onClick: o,
                          children: [
                            (0, s.jsx)("div", {
                              children: (0, s.jsx)(h(), {
                                src: "/images/wallet.svg",
                                fill: !0,
                              }),
                            }),
                            u.Z.shortAddress(t),
                          ],
                        }),
                      ],
                    })
                  : (0, s.jsxs)(_.Z, {
                      theme: "solid",
                      chain: "true",
                      onClick: () => {
                        r({ connector: n[0] });
                      },
                      children: [
                        (0, s.jsx)("div", {
                          children: (0, s.jsx)(h(), {
                            src: "/images/wallet.svg",
                            fill: !0,
                          }),
                        }),
                        "Connect ",
                        (0, s.jsx)("span", { children: "\xa0wallet" }),
                      ],
                    }),
              });
        },
        p = (e) =>
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)("nav", {
                children: (0, s.jsx)("ul", {
                  children:
                    "app" == e.page
                      ? (0, s.jsxs)(s.Fragment, {
                        })
                      : (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsx)("li", {
                              children: (0, s.jsx)(d(), {
                                href: "/",
                                children: "Home",
                              }),
                            }),
                            
                          ],
                        }),
                }),
              }),
              "app" != e.page
                ? (0, s.jsx)(_.Z, { href: "/app", children: "Launch App" })
                : (0, s.jsx)("div", {
                    className: i().header__app_buttons,
                    children: (0, s.jsx)(j, {}),
                  }),
            ],
          }),
        b = (e) => {
          let [r, n] = (0, t.useState)(!1),
            l = () => {
              n(!r);
            };
          return (0, s.jsx)("header", {
            className: ""
              .concat(i().header, " ")
              .concat(r ? i().header__mobile : "", " ")
              .concat("app" == e.page ? i().header__app : ""),
            children: (0, s.jsx)(o.Z, {
              children: (0, s.jsxs)("div", {
                className: i().header__inner,
                children: [
                  (0, s.jsx)(d(), {
                    href: "#",
                    children: (0, s.jsxs)("div", {
                      className: i().header__logo,
                      children: [
                        (0, s.jsx)(h(), {
                          src: "/logo22.svg",
                          alt: "Lunex AI",
                          width: 175,
                          height: 47,
                          style: { marginRight: "0.5rem" },
                        }),
                        (0, s.jsx)("span", { children: "" }),
                      ],
                    }),
                  }),
                  (0, s.jsx)(p, { page: e.page }),
                ],
              }),
            }),
          });
        };
      var g = b;
    },
    7559: function (e, r, n) {
      "use strict";
      var s = n(5893);
      let t = {
        networks: { 1: { name: "Ethereum" }, 56: { name: "BNB Chain" } },
        sleep: (e) =>
          new Promise((r) => {
            setTimeout(r, e);
          }),
        cardFormat: (e) => {
          let r = e
              .replace(/\s+/g, "")
              .replace(/[^0-9]/gi, "")
              .substr(0, 16),
            n = [];
          for (let e = 0; e < r.length; e += 4) n.push(r.substr(e, 4));
          return n.length > 1 ? n.join(" ") : e;
        },
        countDownRender: (e) => {
          let { days: r, hours: n, minutes: t, seconds: l, completed: i } = e;
          if (!i) {
            let e = "";
            return (
              r > 0 && (e = r + " day "),
              (n > 0 || r > 0) && (e += n + ":"),
              t < 10 && (t = "0" + t),
              l < 10 && 0 == r && (l = "0" + l),
              (e += t + ":" + l),
              (0, s.jsx)("span", { children: e })
            );
          }
          return (0, s.jsx)(s.Fragment, { children: "00:00" });
        },
        formatMoney: (e, r) =>
          (void 0 === r && (r = !1),
          (e = r ? parseFloat(e).toFixed(r) : parseFloat(e).toFixed(0)) < 1e3)
            ? e
            : Intl.NumberFormat("en-US").format(e),
        dollarFormat: (e) =>
          new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(e),
        shortAddress: (e) => {
          let r = "";
          for (let n = 0; n < 4; n++) r += e.charAt(n);
          r += "...";
          for (let n = e.length - 4; n < e.length; n++) r += e.charAt(n);
          return r;
        },
        postHelper: (e, r) =>
          new Promise((n, s) => {
            fetch(e, {
              body: JSON.stringify(r),
              headers: { "Content-Type": "application/json" },
              method: "POST",
            })
              .then((e) => {
                e.json(() => {})
                  .then((e) => {
                    n(e);
                  })
                  .catch((e) => {
                    n({ success: !1, message: e });
                  });
              })
              .catch((e) => {
                n({ success: !1, message: e });
              });
          }),
      };
      r.Z = t;
    },
    5427: function (e) {
      e.exports = {
        button: "Button_button__zojcg",
        button__border: "Button_button__border__qUCj0",
        button__xl: "Button_button__xl__WhGEK",
        button__s: "Button_button__s__J9fjk",
        button__color: "Button_button__color__jZoUp",
        pulse_color: "Button_pulse_color__7p444",
        button__color_solid: "Button_button__color_solid__PbnIO",
        button__solid: "Button_button__solid___DX7Z",
        button__block: "Button_button__block__nb0B5",
        button__chain: "Button_button__chain__hmGbf",
      };
    },
    5480: function (e) {
      e.exports = {
        footer: "Footer_footer__Ksopt",
        footer__socials: "Footer_footer__socials__bvuBr",
      };
    },
    3734: function (e) {
      e.exports = {
        header: "Header_header__Kpax6",
        header__app: "Header_header__app__H5rdD",
        header__logo: "Header_header__logo__Gat_c",
        header__inner: "Header_header__inner__ym8Bg",
        header__mobile_trigger: "Header_header__mobile_trigger__jUE0X",
        header__mobile: "Header_header__mobile__A0Zdl",
        header__app_buttons: "Header_header__app_buttons__aZDaL",
        growOut: "Header_growOut__bOgeP",
      };
    },
  },
]);
