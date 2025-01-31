(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [426],
  {
    5305: function (t, e, n) {
      "use strict";
      var o = n(5893),
        i = n(7333),
        r = n(9077),
        a = n(5678),
        s = n(4759),
        p = n(7294);
      let _ = (t) => {
        let {
            theme: e,
            block: n,
            mT: _,
            size: c,
            conentionRequired: u,
            network: l,
            children: m,
          } = t,
          {
            connect: f,
            connectors: d,
            isLoading: h,
          } = (0, r.$4)({ chainId: null != l ? l : 1 }),
          { isConnected: v } = (0, r.mA)(),
          { switchNetwork: y, isLoading: T, error: A } = (0, r.g0)(),
          { chain: S } = (0, r.LN)(),
          { networks: b, isLoading: g } = (0, i.e)();
        return ((0, p.useEffect)(() => {
          A &&
            a.Am.error("Error when trying to retrieve data from the network");
        }, [A]),
        g)
          ? (0, o.jsx)(o.Fragment, {})
          : u && !v
          ? (0, o.jsx)(s.Z, {
              theme: null != e ? e : "color",
              block: null != n ? n : "true",
              mT: null != _ ? _ : "10",
              size: null != c ? c : "xl",
              onClick: () => {
                f({ connector: d[0] });
              },
              loading: h,
              children: "Connect",
            })
          : v && S.id != l && !isNaN(l)
          ? (0, o.jsx)(s.Z, {
              theme: null != e ? e : "color",
              block: null != n ? n : "true",
              mT: null != _ ? _ : "10",
              size: null != c ? c : "xl",
              loading: T,
              onClick: () => {
                y(null != l ? l : 1);
              },
              children: "Switch to " + b[null != l ? l : 1].name,
            })
          : m;
      };
      e.Z = _;
    },
    483: function (t) {
      t.exports = {
        app: "App_app__W557_",
        app__container: "App_app__container__F0aeh",
        app__top: "App_app__top__Eq_GN",
        active: "App_active__wMivB",
        app__top_icon: "App_app__top_icon__jPrfj",
        pulse: "App_pulse__lxZN8",
        app__top_icons: "App_app__top_icons__dK7nH",
        app__top_svg: "App_app__top_svg__OAZiC",
        input__container: "App_input__container__XwDEJ",
        input__container_transparent: "App_input__container_transparent__5Z93S",
        input__container_token: "App_input__container_token__fTV7U",
        input__container_multi_radio: "App_input__container_multi_radio__EAUF_",
        multi: "App_multi__33pAO",
        input__multi_recipient: "App_input__multi_recipient__5Izde",
        input__multi_amount: "App_input__multi_amount__zFm0v",
        change_token: "App_change_token__cJwc5",
        input__token: "App_input__token__r3tPq",
        input__token_list: "App_input__token_list__P_OS4",
        input__amount: "App_input__amount__j4m4O",
        input__amount_custom: "App_input__amount_custom__hAcyp",
        app__remove_recipient: "App_app__remove_recipient__hNUrR",
        app__fees: "App_app__fees__T6olP",
        app__fees_details: "App_app__fees_details__JNo6L",
        cards__history: "App_cards__history__fBlcK",
        status__label: "App_status__label__8juts",
        status__val: "App_status__val__5p1c5",
        popup: "App_popup__MwNua",
        popup__top: "App_popup__top__5FW5L",
        popup__back: "App_popup__back__ociaW",
        confirmation__time: "App_confirmation__time__kVxJP",
        spin: "App_spin__cF3df",
        confirmation__send: "App_confirmation__send__dv2TL",
        confirmation__send_addr: "App_confirmation__send_addr__8ZgGS",
        confirmation__label: "App_confirmation__label__6I2Ko",
        confirmation__icon: "App_confirmation__icon__OP9sn",
        confirmation__val: "App_confirmation__val__Mer5z",
        confirmation__rec: "App_confirmation__rec__Uz3ia",
        confirmation__btns: "App_confirmation__btns__wtCFm",
        selecttoken__list: "App_selecttoken__list__l4bEe",
        question: "App_question__ziXfP",
        farms: "App_farms__T9WmK",
        farms__pool: "App_farms__pool__37QP0",
        farms__header: "App_farms__header__ImV3G",
        farms__body: "App_farms__body__bRJhm",
        farms__body_col: "App_farms__body_col__aOR7D",
        rotate: "App_rotate__z9Z35",
      };
    },
    8130: function (t, e, n) {
      "use strict";
      var o = n(7294),
        i = n(5697);
      function r(t, e) {
        if (!(t instanceof e))
          throw TypeError("Cannot call a class as a function");
      }
      function a(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function s(t, e, n) {
        return e && a(t.prototype, e), n && a(t, n), t;
      }
      function p(t, e) {
        if ("function" != typeof e && null !== e)
          throw TypeError("Super expression must either be null or a function");
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && c(t, e);
      }
      function _(t) {
        return (_ = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function c(t, e) {
        return (c =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function u(t) {
        var e = (function () {
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
        })();
        return function () {
          var n,
            o,
            i = _(t);
          if (e) {
            var r = _(this).constructor;
            o = Reflect.construct(i, arguments, r);
          } else o = i.apply(this, arguments);
          return (n = o) && ("object" == typeof n || "function" == typeof n)
            ? n
            : (function (t) {
                if (void 0 === t)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })(this);
        };
      }
      function l(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
        return o;
      }
      function m(t) {
        var e,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
          o = String(t);
        if (0 === n) return o;
        var i = o.match(/(.*?)([0-9]+)(.*)/),
          r = i ? i[1] : "",
          a = i ? i[3] : "",
          s = i ? i[2] : o,
          p =
            s.length >= n
              ? s
              : (
                  (
                    (function (t) {
                      if (Array.isArray(t)) return l(t);
                    })((e = Array(n))) ||
                    (function (t) {
                      if (
                        "undefined" != typeof Symbol &&
                        Symbol.iterator in Object(t)
                      )
                        return Array.from(t);
                    })(e) ||
                    (function (t, e) {
                      if (t) {
                        if ("string" == typeof t) return l(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        if (
                          ("Object" === n &&
                            t.constructor &&
                            (n = t.constructor.name),
                          "Map" === n || "Set" === n)
                        )
                          return Array.from(t);
                        if (
                          "Arguments" === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        )
                          return l(t, e);
                      }
                    })(e) ||
                    (function () {
                      throw TypeError(
                        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })()
                  )
                    .map(function () {
                      return "0";
                    })
                    .join("") + s
                ).slice(-1 * n);
        return "".concat(r).concat(p).concat(a);
      }
      var f = { daysInHours: !1, zeroPadTime: 2 },
        d = (function (t) {
          p(n, t);
          var e = u(n);
          function n() {
            var t;
            return (
              r(this, n),
              (t = e.apply(this, arguments)),
              (t.state = { count: t.props.count || 3 }),
              (t.startCountdown = function () {
                t.interval = window.setInterval(function () {
                  0 == t.state.count - 1
                    ? (t.stopCountdown(),
                      t.props.onComplete && t.props.onComplete())
                    : t.setState(function (t) {
                        return { count: t.count - 1 };
                      });
                }, 1e3);
              }),
              (t.stopCountdown = function () {
                clearInterval(t.interval);
              }),
              (t.addTime = function (e) {
                t.stopCountdown(),
                  t.setState(function (t) {
                    return { count: t.count + e };
                  }, t.startCountdown);
              }),
              t
            );
          }
          return (
            s(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.startCountdown();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  clearInterval(this.interval);
                },
              },
              {
                key: "render",
                value: function () {
                  return this.props.children
                    ? (0, o.cloneElement)(this.props.children, {
                        count: this.state.count,
                      })
                    : null;
                },
              },
            ]),
            n
          );
        })(o.Component);
      d.propTypes = {
        count: i.number,
        children: i.element,
        onComplete: i.func,
      };
      var h = (function (t) {
        p(n, t);
        var e = u(n);
        function n(t) {
          var i;
          if (
            (r(this, n),
            ((i = e.call(this, t)).mounted = !1),
            (i.initialTimestamp = i.calcOffsetStartTimestamp()),
            (i.offsetStartTimestamp = i.props.autoStart
              ? 0
              : i.initialTimestamp),
            (i.offsetTime = 0),
            (i.legacyMode = !1),
            (i.legacyCountdownRef = (0, o.createRef)()),
            (i.tick = function () {
              var t = i.calcTimeDelta(),
                e = t.completed && !i.props.overtime ? void 0 : i.props.onTick;
              i.setTimeDeltaState(t, void 0, e);
            }),
            (i.start = function () {
              if (!i.isStarted()) {
                var t = i.offsetStartTimestamp;
                (i.offsetStartTimestamp = 0),
                  (i.offsetTime += t ? i.calcOffsetStartTimestamp() - t : 0);
                var e = i.calcTimeDelta();
                i.setTimeDeltaState(e, "STARTED", i.props.onStart),
                  i.props.controlled ||
                    (e.completed && !i.props.overtime) ||
                    (i.clearTimer(),
                    (i.interval = window.setInterval(
                      i.tick,
                      i.props.intervalDelay
                    )));
              }
            }),
            (i.pause = function () {
              i.isPaused() ||
                (i.clearTimer(),
                (i.offsetStartTimestamp = i.calcOffsetStartTimestamp()),
                i.setTimeDeltaState(
                  i.state.timeDelta,
                  "PAUSED",
                  i.props.onPause
                ));
            }),
            (i.stop = function () {
              i.isStopped() ||
                (i.clearTimer(),
                (i.offsetStartTimestamp = i.calcOffsetStartTimestamp()),
                (i.offsetTime = i.offsetStartTimestamp - i.initialTimestamp),
                i.setTimeDeltaState(
                  i.calcTimeDelta(),
                  "STOPPED",
                  i.props.onStop
                ));
            }),
            (i.isStarted = function () {
              return i.isStatus("STARTED");
            }),
            (i.isPaused = function () {
              return i.isStatus("PAUSED");
            }),
            (i.isStopped = function () {
              return i.isStatus("STOPPED");
            }),
            (i.isCompleted = function () {
              return i.isStatus("COMPLETED");
            }),
            t.date)
          ) {
            var a = i.calcTimeDelta();
            i.state = {
              timeDelta: a,
              status: a.completed ? "COMPLETED" : "STOPPED",
            };
          } else i.legacyMode = !0;
          return i;
        }
        return (
          s(n, [
            {
              key: "componentDidMount",
              value: function () {
                !this.legacyMode &&
                  ((this.mounted = !0),
                  this.props.onMount &&
                    this.props.onMount(this.calcTimeDelta()),
                  this.props.autoStart && this.start());
              },
            },
            {
              key: "componentDidUpdate",
              value: function (t) {
                this.legacyMode ||
                  this.props.date === t.date ||
                  ((this.initialTimestamp = this.calcOffsetStartTimestamp()),
                  (this.offsetStartTimestamp = this.initialTimestamp),
                  (this.offsetTime = 0),
                  this.setTimeDeltaState(this.calcTimeDelta()));
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.legacyMode || ((this.mounted = !1), this.clearTimer());
              },
            },
            {
              key: "calcTimeDelta",
              value: function () {
                var t = this.props,
                  e = t.date,
                  n = t.now,
                  o = t.precision,
                  i = t.controlled,
                  r = t.overtime;
                return (function (t) {
                  var e,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    o = n.now,
                    i = void 0 === o ? Date.now : o,
                    r = n.precision,
                    a = n.controlled,
                    s = n.offsetTime,
                    p = n.overtime;
                  (e =
                    "string" == typeof t
                      ? new Date(t).getTime()
                      : t instanceof Date
                      ? t.getTime()
                      : t),
                    a || (e += void 0 === s ? 0 : s);
                  var _ = a ? e : e - i(),
                    c = Math.round(
                      1e3 *
                        parseFloat(
                          ((p ? _ : Math.max(0, _)) / 1e3).toFixed(
                            Math.min(20, Math.max(0, void 0 === r ? 0 : r))
                          )
                        )
                    ),
                    u = Math.abs(c) / 1e3;
                  return {
                    total: c,
                    days: Math.floor(u / 86400),
                    hours: Math.floor((u / 3600) % 24),
                    minutes: Math.floor((u / 60) % 60),
                    seconds: Math.floor(u % 60),
                    milliseconds: Number(((u % 1) * 1e3).toFixed()),
                    completed: c <= 0,
                  };
                })(e, {
                  now: n,
                  precision: o,
                  controlled: i,
                  offsetTime: this.offsetTime,
                  overtime: r,
                });
              },
            },
            {
              key: "calcOffsetStartTimestamp",
              value: function () {
                return Date.now();
              },
            },
            {
              key: "addTime",
              value: function (t) {
                this.legacyCountdownRef.current.addTime(t);
              },
            },
            {
              key: "clearTimer",
              value: function () {
                window.clearInterval(this.interval);
              },
            },
            {
              key: "isStatus",
              value: function (t) {
                return this.state.status === t;
              },
            },
            {
              key: "setTimeDeltaState",
              value: function (t, e, n) {
                var o = this;
                if (this.mounted) {
                  var i = t.completed && !this.state.timeDelta.completed,
                    r = t.completed && "STARTED" === e;
                  return (
                    i && !this.props.overtime && this.clearTimer(),
                    this.setState(
                      function (n) {
                        var i = e || n.status;
                        return (
                          t.completed && !o.props.overtime
                            ? (i = "COMPLETED")
                            : e || "COMPLETED" !== i || (i = "STOPPED"),
                          { timeDelta: t, status: i }
                        );
                      },
                      function () {
                        n && n(o.state.timeDelta),
                          o.props.onComplete &&
                            (i || r) &&
                            o.props.onComplete(t, r);
                      }
                    )
                  );
                }
              },
            },
            {
              key: "getApi",
              value: function () {
                return (this.api = this.api || {
                  start: this.start,
                  pause: this.pause,
                  stop: this.stop,
                  isStarted: this.isStarted,
                  isPaused: this.isPaused,
                  isStopped: this.isStopped,
                  isCompleted: this.isCompleted,
                });
              },
            },
            {
              key: "getRenderProps",
              value: function () {
                var t,
                  e,
                  n,
                  o,
                  i,
                  r,
                  a,
                  s,
                  p,
                  _,
                  c = this.props,
                  u = c.daysInHours,
                  l = c.zeroPadTime,
                  d = c.zeroPadDays,
                  h = this.state.timeDelta;
                return Object.assign(Object.assign({}, h), {
                  api: this.getApi(),
                  props: this.props,
                  formatted:
                    ((t = h.days),
                    (e = h.hours),
                    (n = h.minutes),
                    (o = h.seconds),
                    (r = (i = Object.assign(Object.assign({}, f), {
                      daysInHours: u,
                      zeroPadTime: l,
                      zeroPadDays: d,
                    })).daysInHours),
                    (a = i.zeroPadTime),
                    (s = i.zeroPadDays),
                    (p = Math.min(2, a)),
                    (_ = r ? m(e + 24 * t, a) : m(e, p)),
                    {
                      days: r ? "" : m(t, void 0 === s ? a : s),
                      hours: _,
                      minutes: m(n, p),
                      seconds: m(o, p),
                    }),
                });
              },
            },
            {
              key: "render",
              value: function () {
                if (this.legacyMode) {
                  var t = this.props,
                    e = t.count,
                    n = t.children,
                    i = t.onComplete;
                  return (0, o.createElement)(
                    d,
                    { ref: this.legacyCountdownRef, count: e, onComplete: i },
                    n
                  );
                }
                var r = this.props,
                  a = r.className,
                  s = r.overtime,
                  p = r.children,
                  _ = r.renderer,
                  c = this.getRenderProps();
                if (_) return _(c);
                if (p && this.state.timeDelta.completed && !s)
                  return (0, o.cloneElement)(p, { countdown: c });
                var u = c.formatted,
                  l = u.days,
                  m = u.hours,
                  f = u.minutes,
                  h = u.seconds;
                return (0, o.createElement)(
                  "span",
                  { className: a },
                  c.total < 0 ? "-" : "",
                  l,
                  l ? ":" : "",
                  m,
                  ":",
                  f,
                  ":",
                  h
                );
              },
            },
          ]),
          n
        );
      })(o.Component);
      (h.defaultProps = Object.assign(Object.assign({}, f), {
        controlled: !1,
        intervalDelay: 1e3,
        precision: 0,
        autoStart: !0,
      })),
        (h.propTypes = {
          date: (0, i.oneOfType)([(0, i.instanceOf)(Date), i.string, i.number]),
          daysInHours: i.bool,
          zeroPadTime: i.number,
          zeroPadDays: i.number,
          controlled: i.bool,
          intervalDelay: i.number,
          precision: i.number,
          autoStart: i.bool,
          overtime: i.bool,
          className: i.string,
          children: i.element,
          renderer: i.func,
          now: i.func,
          onMount: i.func,
          onStart: i.func,
          onPause: i.func,
          onStop: i.func,
          onTick: i.func,
          onComplete: i.func,
        }),
        (e.ZP = h);
    },
    9214: function () {},
    5568: function () {},
    2361: function () {},
    4616: function () {},
  },
]);
