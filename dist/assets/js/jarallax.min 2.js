/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.12.0
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */ !(function(n) {
  var o = {};
  function i(e) {
    if (o[e]) return o[e].exports;
    var t = (o[e] = { i: e, l: !1, exports: {} });
    return n[e].call(t.exports, t, t.exports, i), (t.l = !0), t.exports;
  }
  (i.m = n),
    (i.c = o),
    (i.d = function(e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (i.t = function(t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var o in t)
          i.d(
            n,
            o,
            function(e) {
              return t[e];
            }.bind(null, o)
          );
      return n;
    }),
    (i.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return i.d(t, 'a', t), t;
    }),
    (i.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = ''),
    i((i.s = 11));
})([
  ,
  ,
  function(e, t) {
    e.exports = function(e) {
      'complete' === document.readyState ||
      'interactive' === document.readyState
        ? e.call()
        : document.attachEvent
        ? document.attachEvent('onreadystatechange', function() {
            'interactive' === document.readyState && e.call();
          })
        : document.addEventListener &&
          document.addEventListener('DOMContentLoaded', e);
    };
  },
  ,
  function(n, e, t) {
    (function(e) {
      var t;
      (t =
        'undefined' != typeof window
          ? window
          : void 0 !== e
          ? e
          : 'undefined' != typeof self
          ? self
          : {}),
        (n.exports = t);
    }.call(this, t(5)));
  },
  function(e, t) {
    function n(e) {
      return (n =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            })(e);
    }
    var o;
    o = (function() {
      return this;
    })();
    try {
      o = o || new Function('return this')();
    } catch (e) {
      'object' === ('undefined' == typeof window ? 'undefined' : n(window)) &&
        (o = window);
    }
    e.exports = o;
  },
  ,
  ,
  ,
  ,
  ,
  function(e, t, n) {
    e.exports = n(12);
  },
  function(e, t, n) {
    'use strict';
    n.r(t);
    var o = n(2),
      i = n.n(o),
      a = n(4),
      r = n(13);
    function l(e) {
      return (l =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            })(e);
    }
    var s = a.window.jarallax;
    if (
      ((a.window.jarallax = r.default),
      (a.window.jarallax.noConflict = function() {
        return (a.window.jarallax = s), this;
      }),
      void 0 !== a.jQuery)
    ) {
      var c = function() {
        var e = arguments || [];
        Array.prototype.unshift.call(e, this);
        var t = r.default.apply(a.window, e);
        return 'object' !== l(t) ? t : this;
      };
      c.constructor = r.default.constructor;
      var u = a.jQuery.fn.jarallax;
      (a.jQuery.fn.jarallax = c),
        (a.jQuery.fn.jarallax.noConflict = function() {
          return (a.jQuery.fn.jarallax = u), this;
        });
    }
    i()(function() {
      Object(r.default)(document.querySelectorAll('[data-jarallax]'));
    });
  },
  function(e, t, n) {
    'use strict';
    n.r(t);
    var o = n(2),
      i = n.n(o),
      a = n(14),
      r = n.n(a),
      b = n(4);
    function c(e, t) {
      return (
        (function(e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function(e, t) {
          if (
            !(
              Symbol.iterator in Object(e) ||
              '[object Arguments]' === Object.prototype.toString.call(e)
            )
          )
            return;
          var n = [],
            o = !0,
            i = !1,
            a = void 0;
          try {
            for (
              var r, l = e[Symbol.iterator]();
              !(o = (r = l.next()).done) &&
              (n.push(r.value), !t || n.length !== t);
              o = !0
            );
          } catch (e) {
            (i = !0), (a = e);
          } finally {
            try {
              o || null == l.return || l.return();
            } finally {
              if (i) throw a;
            }
          }
          return n;
        })(e, t) ||
        (function() {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          );
        })()
      );
    }
    function u(e) {
      return (u =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            })(e);
    }
    function l(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          'value' in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    var s,
      v,
      m =
        -1 < navigator.userAgent.indexOf('MSIE ') ||
        -1 < navigator.userAgent.indexOf('Trident/') ||
        -1 < navigator.userAgent.indexOf('Edge/'),
      p = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ),
      d = (function() {
        for (
          var e = 'transform WebkitTransform MozTransform'.split(' '),
            t = document.createElement('div'),
            n = 0;
          n < e.length;
          n++
        )
          if (t && void 0 !== t.style[e[n]]) return e[n];
        return !1;
      })();
    function f() {
      v = p
        ? (!s &&
            document.body &&
            (((s = document.createElement('div')).style.cssText =
              'position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;'),
            document.body.appendChild(s)),
          (s ? s.clientHeight : 0) ||
            b.window.innerHeight ||
            document.documentElement.clientHeight)
        : b.window.innerHeight || document.documentElement.clientHeight;
    }
    f(),
      b.window.addEventListener('resize', f),
      b.window.addEventListener('orientationchange', f),
      b.window.addEventListener('load', f),
      i()(function() {
        f();
      });
    var g = [];
    function y() {
      g.length &&
        (g.forEach(function(e, t) {
          var n = e.instance,
            o = e.oldData,
            i = n.$item.getBoundingClientRect(),
            a = {
              width: i.width,
              height: i.height,
              top: i.top,
              bottom: i.bottom,
              wndW: b.window.innerWidth,
              wndH: v,
            },
            r =
              !o ||
              o.wndW !== a.wndW ||
              o.wndH !== a.wndH ||
              o.width !== a.width ||
              o.height !== a.height,
            l = r || !o || o.top !== a.top || o.bottom !== a.bottom;
          (g[t].oldData = a), r && n.onResize(), l && n.onScroll();
        }),
        r()(y));
    }
    function h(e, t) {
      ('object' ===
      ('undefined' == typeof HTMLElement ? 'undefined' : u(HTMLElement))
        ? e instanceof HTMLElement
        : e &&
          'object' === u(e) &&
          null !== e &&
          1 === e.nodeType &&
          'string' == typeof e.nodeName) && (e = [e]);
      for (
        var n,
          o = t,
          i = Array.prototype.slice.call(arguments, 2),
          a = e.length,
          r = 0;
        r < a;
        r++
      )
        if (
          ('object' === u(o) || void 0 === o
            ? e[r].jarallax || (e[r].jarallax = new w(e[r], o))
            : e[r].jarallax && (n = e[r].jarallax[o].apply(e[r].jarallax, i)),
          void 0 !== n)
        )
          return n;
      return e;
    }
    var x = 0,
      w = (function() {
        function s(e, t) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, s);
          var n = this;
          (n.instanceID = x++),
            (n.$item = e),
            (n.defaults = {
              type: 'scroll',
              speed: 0.5,
              imgSrc: null,
              imgElement: '.jarallax-img',
              imgSize: 'cover',
              imgPosition: '50% 50%',
              imgRepeat: 'no-repeat',
              keepImg: !1,
              elementInViewport: null,
              zIndex: -100,
              disableParallax: !1,
              disableVideo: !1,
              videoSrc: null,
              videoStartTime: 0,
              videoEndTime: 0,
              videoVolume: 0,
              videoLoop: !0,
              videoPlayOnlyVisible: !0,
              videoLazyLoading: !0,
              onScroll: null,
              onInit: null,
              onDestroy: null,
              onCoverImage: null,
            });
          var o = n.$item.dataset || {},
            i = {};
          if (
            (Object.keys(o).forEach(function(e) {
              var t = e.substr(0, 1).toLowerCase() + e.substr(1);
              t && void 0 !== n.defaults[t] && (i[t] = o[e]);
            }),
            (n.options = n.extend({}, n.defaults, i, t)),
            (n.pureOptions = n.extend({}, n.options)),
            Object.keys(n.options).forEach(function(e) {
              'true' === n.options[e]
                ? (n.options[e] = !0)
                : 'false' === n.options[e] && (n.options[e] = !1);
            }),
            (n.options.speed = Math.min(
              2,
              Math.max(-1, parseFloat(n.options.speed))
            )),
            'string' == typeof n.options.disableParallax &&
              (n.options.disableParallax = new RegExp(
                n.options.disableParallax
              )),
            n.options.disableParallax instanceof RegExp)
          ) {
            var a = n.options.disableParallax;
            n.options.disableParallax = function() {
              return a.test(navigator.userAgent);
            };
          }
          if (
            ('function' != typeof n.options.disableParallax &&
              (n.options.disableParallax = function() {
                return !1;
              }),
            'string' == typeof n.options.disableVideo &&
              (n.options.disableVideo = new RegExp(n.options.disableVideo)),
            n.options.disableVideo instanceof RegExp)
          ) {
            var r = n.options.disableVideo;
            n.options.disableVideo = function() {
              return r.test(navigator.userAgent);
            };
          }
          'function' != typeof n.options.disableVideo &&
            (n.options.disableVideo = function() {
              return !1;
            });
          var l = n.options.elementInViewport;
          l && 'object' === u(l) && void 0 !== l.length && (l = c(l, 1)[0]);
          l instanceof Element || (l = null),
            (n.options.elementInViewport = l),
            (n.image = {
              src: n.options.imgSrc || null,
              $container: null,
              useImgTag: !1,
              position: /iPad|iPhone|iPod|Android/.test(navigator.userAgent)
                ? 'absolute'
                : 'fixed',
            }),
            n.initImg() && n.canInitParallax() && n.init();
        }
        return (
          (function(e, t, n) {
            t && l(e.prototype, t), n && l(e, n);
          })(s, [
            {
              key: 'css',
              value: function(t, n) {
                return 'string' == typeof n
                  ? b.window.getComputedStyle(t).getPropertyValue(n)
                  : (n.transform && d && (n[d] = n.transform),
                    Object.keys(n).forEach(function(e) {
                      t.style[e] = n[e];
                    }),
                    t);
              },
            },
            {
              key: 'extend',
              value: function(n) {
                var o = arguments;
                return (
                  (n = n || {}),
                  Object.keys(arguments).forEach(function(t) {
                    o[t] &&
                      Object.keys(o[t]).forEach(function(e) {
                        n[e] = o[t][e];
                      });
                  }),
                  n
                );
              },
            },
            {
              key: 'getWindowData',
              value: function() {
                return {
                  width:
                    b.window.innerWidth || document.documentElement.clientWidth,
                  height: v,
                  y: document.documentElement.scrollTop,
                };
              },
            },
            {
              key: 'initImg',
              value: function() {
                var e = this,
                  t = e.options.imgElement;
                return (
                  t && 'string' == typeof t && (t = e.$item.querySelector(t)),
                  t instanceof Element ||
                    (e.options.imgSrc
                      ? ((t = new Image()).src = e.options.imgSrc)
                      : (t = null)),
                  t &&
                    (e.options.keepImg
                      ? (e.image.$item = t.cloneNode(!0))
                      : ((e.image.$item = t),
                        (e.image.$itemParent = t.parentNode)),
                    (e.image.useImgTag = !0)),
                  !!e.image.$item ||
                    (null === e.image.src &&
                      ((e.image.src =
                        'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'),
                      (e.image.bgImage = e.css(e.$item, 'background-image'))),
                    !(!e.image.bgImage || 'none' === e.image.bgImage))
                );
              },
            },
            {
              key: 'canInitParallax',
              value: function() {
                return d && !this.options.disableParallax();
              },
            },
            {
              key: 'init',
              value: function() {
                var e = this,
                  t = {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    pointerEvents: 'none',
                  },
                  n = {};
                if (!e.options.keepImg) {
                  var o = e.$item.getAttribute('style');
                  if (
                    (o &&
                      e.$item.setAttribute('data-jarallax-original-styles', o),
                    e.image.useImgTag)
                  ) {
                    var i = e.image.$item.getAttribute('style');
                    i &&
                      e.image.$item.setAttribute(
                        'data-jarallax-original-styles',
                        i
                      );
                  }
                }
                if (
                  ('static' === e.css(e.$item, 'position') &&
                    e.css(e.$item, { position: 'relative' }),
                  'auto' === e.css(e.$item, 'z-index') &&
                    e.css(e.$item, { zIndex: 0 }),
                  (e.image.$container = document.createElement('div')),
                  e.css(e.image.$container, t),
                  e.css(e.image.$container, { 'z-index': e.options.zIndex }),
                  m && e.css(e.image.$container, { opacity: 0.9999 }),
                  e.image.$container.setAttribute(
                    'id',
                    'jarallax-container-'.concat(e.instanceID)
                  ),
                  e.$item.appendChild(e.image.$container),
                  e.image.useImgTag
                    ? (n = e.extend(
                        {
                          'object-fit': e.options.imgSize,
                          'object-position': e.options.imgPosition,
                          'font-family': 'object-fit: '
                            .concat(e.options.imgSize, '; object-position: ')
                            .concat(e.options.imgPosition, ';'),
                          'max-width': 'none',
                        },
                        t,
                        n
                      ))
                    : ((e.image.$item = document.createElement('div')),
                      e.image.src &&
                        (n = e.extend(
                          {
                            'background-position': e.options.imgPosition,
                            'background-size': e.options.imgSize,
                            'background-repeat': e.options.imgRepeat,
                            'background-image':
                              e.image.bgImage ||
                              'url("'.concat(e.image.src, '")'),
                          },
                          t,
                          n
                        ))),
                  ('opacity' !== e.options.type &&
                    'scale' !== e.options.type &&
                    'scale-opacity' !== e.options.type &&
                    1 !== e.options.speed) ||
                    (e.image.position = 'absolute'),
                  'fixed' === e.image.position)
                ) {
                  var a = (function(e) {
                    for (var t = []; null !== e.parentElement; )
                      1 === (e = e.parentElement).nodeType && t.push(e);
                    return t;
                  })(e.$item).filter(function(e) {
                    var t = b.window.getComputedStyle(e),
                      n =
                        t['-webkit-transform'] ||
                        t['-moz-transform'] ||
                        t.transform;
                    return (
                      (n && 'none' !== n) ||
                      /(auto|scroll)/.test(
                        t.overflow + t['overflow-y'] + t['overflow-x']
                      )
                    );
                  });
                  e.image.position = a.length ? 'absolute' : 'fixed';
                }
                (n.position = e.image.position),
                  e.css(e.image.$item, n),
                  e.image.$container.appendChild(e.image.$item),
                  e.onResize(),
                  e.onScroll(!0),
                  e.options.onInit && e.options.onInit.call(e),
                  'none' !== e.css(e.$item, 'background-image') &&
                    e.css(e.$item, { 'background-image': 'none' }),
                  e.addToParallaxList();
              },
            },
            {
              key: 'addToParallaxList',
              value: function() {
                g.push({ instance: this }), 1 === g.length && y();
              },
            },
            {
              key: 'removeFromParallaxList',
              value: function() {
                var n = this;
                g.forEach(function(e, t) {
                  e.instance.instanceID === n.instanceID && g.splice(t, 1);
                });
              },
            },
            {
              key: 'destroy',
              value: function() {
                var e = this;
                e.removeFromParallaxList();
                var t = e.$item.getAttribute('data-jarallax-original-styles');
                if (
                  (e.$item.removeAttribute('data-jarallax-original-styles'),
                  t
                    ? e.$item.setAttribute('style', t)
                    : e.$item.removeAttribute('style'),
                  e.image.useImgTag)
                ) {
                  var n = e.image.$item.getAttribute(
                    'data-jarallax-original-styles'
                  );
                  e.image.$item.removeAttribute(
                    'data-jarallax-original-styles'
                  ),
                    n
                      ? e.image.$item.setAttribute('style', t)
                      : e.image.$item.removeAttribute('style'),
                    e.image.$itemParent &&
                      e.image.$itemParent.appendChild(e.image.$item);
                }
                e.$clipStyles &&
                  e.$clipStyles.parentNode.removeChild(e.$clipStyles),
                  e.image.$container &&
                    e.image.$container.parentNode.removeChild(
                      e.image.$container
                    ),
                  e.options.onDestroy && e.options.onDestroy.call(e),
                  delete e.$item.jarallax;
              },
            },
            {
              key: 'clipContainer',
              value: function() {
                if ('fixed' === this.image.position) {
                  var e = this,
                    t = e.image.$container.getBoundingClientRect(),
                    n = t.width,
                    o = t.height;
                  if (!e.$clipStyles)
                    (e.$clipStyles = document.createElement('style')),
                      e.$clipStyles.setAttribute('type', 'text/css'),
                      e.$clipStyles.setAttribute(
                        'id',
                        'jarallax-clip-'.concat(e.instanceID)
                      ),
                      (
                        document.head ||
                        document.getElementsByTagName('head')[0]
                      ).appendChild(e.$clipStyles);
                  var i = '#jarallax-container-'
                    .concat(e.instanceID, ' {\n           clip: rect(0 ')
                    .concat(n, 'px ')
                    .concat(o, 'px 0);\n           clip: rect(0, ')
                    .concat(n, 'px, ')
                    .concat(o, 'px, 0);\n        }');
                  e.$clipStyles.styleSheet
                    ? (e.$clipStyles.styleSheet.cssText = i)
                    : (e.$clipStyles.innerHTML = i);
                }
              },
            },
            {
              key: 'coverImage',
              value: function() {
                var e = this,
                  t = e.image.$container.getBoundingClientRect(),
                  n = t.height,
                  o = e.options.speed,
                  i =
                    'scroll' === e.options.type ||
                    'scroll-opacity' === e.options.type,
                  a = 0,
                  r = n,
                  l = 0;
                return (
                  i &&
                    (o < 0
                      ? ((a = o * Math.max(n, v)), v < n && (a -= o * (n - v)))
                      : (a = o * (n + v)),
                    1 < o
                      ? (r = Math.abs(a - v))
                      : o < 0
                      ? (r = a / o + Math.abs(a))
                      : (r += (v - n) * (1 - o)),
                    (a /= 2)),
                  (e.parallaxScrollDistance = a),
                  (l = i ? (v - r) / 2 : (n - r) / 2),
                  e.css(e.image.$item, {
                    height: ''.concat(r, 'px'),
                    marginTop: ''.concat(l, 'px'),
                    left:
                      'fixed' === e.image.position
                        ? ''.concat(t.left, 'px')
                        : '0',
                    width: ''.concat(t.width, 'px'),
                  }),
                  e.options.onCoverImage && e.options.onCoverImage.call(e),
                  { image: { height: r, marginTop: l }, container: t }
                );
              },
            },
            {
              key: 'isVisible',
              value: function() {
                return this.isElementInViewport || !1;
              },
            },
            {
              key: 'onScroll',
              value: function(e) {
                var t = this,
                  n = t.$item.getBoundingClientRect(),
                  o = n.top,
                  i = n.height,
                  a = {},
                  r = n;
                if (
                  (t.options.elementInViewport &&
                    (r = t.options.elementInViewport.getBoundingClientRect()),
                  (t.isElementInViewport =
                    0 <= r.bottom &&
                    0 <= r.right &&
                    r.top <= v &&
                    r.left <= b.window.innerWidth),
                  e || t.isElementInViewport)
                ) {
                  var l = Math.max(0, o),
                    s = Math.max(0, i + o),
                    c = Math.max(0, -o),
                    u = Math.max(0, o + i - v),
                    m = Math.max(0, i - (o + i - v)),
                    p = Math.max(0, -o + v - i),
                    d = 1 - (2 * (v - o)) / (v + i),
                    f = 1;
                  if (
                    (i < v
                      ? (f = 1 - (c || u) / i)
                      : s <= v
                      ? (f = s / v)
                      : m <= v && (f = m / v),
                    ('opacity' !== t.options.type &&
                      'scale-opacity' !== t.options.type &&
                      'scroll-opacity' !== t.options.type) ||
                      ((a.transform = 'translate3d(0,0,0)'), (a.opacity = f)),
                    'scale' === t.options.type ||
                      'scale-opacity' === t.options.type)
                  ) {
                    var g = 1;
                    t.options.speed < 0
                      ? (g -= t.options.speed * f)
                      : (g += t.options.speed * (1 - f)),
                      (a.transform = 'scale('.concat(
                        g,
                        ') translate3d(0,0,0)'
                      ));
                  }
                  if (
                    'scroll' === t.options.type ||
                    'scroll-opacity' === t.options.type
                  ) {
                    var y = t.parallaxScrollDistance * d;
                    'absolute' === t.image.position && (y -= o),
                      (a.transform = 'translate3d(0,'.concat(y, 'px,0)'));
                  }
                  t.css(t.image.$item, a),
                    t.options.onScroll &&
                      t.options.onScroll.call(t, {
                        section: n,
                        beforeTop: l,
                        beforeTopEnd: s,
                        afterTop: c,
                        beforeBottom: u,
                        beforeBottomEnd: m,
                        afterBottom: p,
                        visiblePercent: f,
                        fromViewportCenter: d,
                      });
                }
              },
            },
            {
              key: 'onResize',
              value: function() {
                this.coverImage(), this.clipContainer();
              },
            },
          ]),
          s
        );
      })();
    (h.constructor = w), (t.default = h);
  },
  function(e, t, n) {
    var o = n(15),
      i =
        o.requestAnimationFrame ||
        o.webkitRequestAnimationFrame ||
        o.mozRequestAnimationFrame ||
        function(e) {
          var t = +new Date(),
            n = Math.max(0, 16 - (t - a)),
            o = setTimeout(e, n);
          return (a = t), o;
        },
      a = +new Date();
    var r =
      o.cancelAnimationFrame ||
      o.webkitCancelAnimationFrame ||
      o.mozCancelAnimationFrame ||
      clearTimeout;
    Function.prototype.bind && ((i = i.bind(o)), (r = r.bind(o))),
      ((e.exports = i).cancel = r);
  },
  function(n, e, t) {
    (function(e) {
      var t;
      (t =
        'undefined' != typeof window
          ? window
          : void 0 !== e
          ? e
          : 'undefined' != typeof self
          ? self
          : {}),
        (n.exports = t);
    }.call(this, t(5)));
  },
]);
//# sourceMappingURL=jarallax.min.js.map
