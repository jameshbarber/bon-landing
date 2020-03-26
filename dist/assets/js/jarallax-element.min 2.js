/*!
 * Name    : Elements Extension for Jarallax
 * Version : 1.0.0
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */ !(function(n) {
  var o = {};
  function r(t) {
    if (o[t]) return o[t].exports;
    var e = (o[t] = { i: t, l: !1, exports: {} });
    return n[t].call(e.exports, e, e.exports, r), (e.l = !0), e.exports;
  }
  (r.m = n),
    (r.c = o),
    (r.d = function(t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function(t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (r.t = function(e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          r.d(
            n,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return r.d(e, 'a', e), e;
    }),
    (r.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = ''),
    r((r.s = 0));
})([
  function(t, e, n) {
    t.exports = n(1);
  },
  function(t, e, n) {
    'use strict';
    n.r(e);
    var o = n(2),
      r = n.n(o),
      i = n(3);
    Object(i.default)(),
      r()(function() {
        'undefined' != typeof jarallax &&
          jarallax(document.querySelectorAll('[data-jarallax-element]'));
      });
  },
  function(t, e) {
    t.exports = function(t) {
      'complete' === document.readyState ||
      'interactive' === document.readyState
        ? t.call()
        : document.attachEvent
        ? document.attachEvent('onreadystatechange', function() {
            'interactive' === document.readyState && t.call();
          })
        : document.addEventListener &&
          document.addEventListener('DOMContentLoaded', t);
    };
  },
  function(t, e, n) {
    'use strict';
    n.r(e),
      n.d(e, 'default', function() {
        return i;
      });
    var o = n(4),
      r = n.n(o);
    function i() {
      var t =
        0 < arguments.length && void 0 !== arguments[0]
          ? arguments[0]
          : r.a.jarallax;
      if (void 0 !== t) {
        var e = t.constructor;
        [
          'initImg',
          'canInitParallax',
          'init',
          'destroy',
          'clipContainer',
          'coverImage',
          'isVisible',
          'onScroll',
          'onResize',
        ].forEach(function(f) {
          var m = e.prototype[f];
          e.prototype[f] = function() {
            var t = this,
              e = arguments || [];
            if (
              ('initImg' === f &&
                null !== t.$item.getAttribute('data-jarallax-element') &&
                ((t.options.type = 'element'),
                (t.pureOptions.speed =
                  t.$item.getAttribute('data-jarallax-element') ||
                  t.pureOptions.speed)),
              'element' !== t.options.type)
            )
              return m.apply(t, e);
            switch (
              ((t.pureOptions.threshold =
                t.$item.getAttribute('data-threshold') || ''),
              f)
            ) {
              case 'init':
                var n = t.pureOptions.speed.split(' ');
                (t.options.speed = t.pureOptions.speed || 0),
                  (t.options.speedY = n[0] ? parseFloat(n[0]) : 0),
                  (t.options.speedX = n[1] ? parseFloat(n[1]) : 0);
                var o = t.pureOptions.threshold.split(' ');
                (t.options.thresholdY = o[0] ? parseFloat(o[0]) : null),
                  (t.options.thresholdX = o[1] ? parseFloat(o[1]) : null),
                  m.apply(t, e);
                var r = t.$item.getAttribute('data-jarallax-original-styles');
                return r && t.$item.setAttribute('style', r), !0;
              case 'onResize':
                var i = t.css(t.$item, 'transform');
                t.css(t.$item, { transform: '' });
                var a = t.$item.getBoundingClientRect();
                (t.itemData = {
                  width: a.width,
                  height: a.height,
                  y: a.top + t.getWindowData().y,
                  x: a.left,
                }),
                  t.css(t.$item, { transform: i });
                break;
              case 'onScroll':
                var l = t.getWindowData(),
                  s =
                    (l.y +
                      l.height / 2 -
                      t.itemData.y -
                      t.itemData.height / 2) /
                    (l.height / 2),
                  u = s * t.options.speedY,
                  c = s * t.options.speedX,
                  p = u,
                  d = c;
                null !== t.options.thresholdY &&
                  u > t.options.thresholdY &&
                  (p = 0),
                  null !== t.options.thresholdX &&
                    c > t.options.thresholdX &&
                    (d = 0),
                  t.css(t.$item, {
                    transform: 'translate3d('
                      .concat(d, 'px,')
                      .concat(p, 'px,0)'),
                  });
                break;
              case 'initImg':
              case 'isVisible':
              case 'clipContainer':
              case 'coverImage':
                return !0;
            }
            return m.apply(t, e);
          };
        });
      }
    }
  },
  function(n, t, e) {
    (function(t) {
      var e;
      (e =
        'undefined' != typeof window
          ? window
          : void 0 !== t
          ? t
          : 'undefined' != typeof self
          ? self
          : {}),
        (n.exports = e);
    }.call(this, e(5)));
  },
  function(t, e) {
    function n(t) {
      return (n =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(t) {
              return typeof t;
            }
          : function(t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    var o;
    o = (function() {
      return this;
    })();
    try {
      o = o || new Function('return this')();
    } catch (t) {
      'object' === ('undefined' == typeof window ? 'undefined' : n(window)) &&
        (o = window);
    }
    t.exports = o;
  },
]);
//# sourceMappingURL=jarallax-element.min.js.map
