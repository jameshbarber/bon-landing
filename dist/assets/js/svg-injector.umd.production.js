!(function(t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], e)
    : e(((t = t || self).SVGInjector = {}));
})(this, function(t) {
  'use strict';
  var e,
    r = function(t) {
      return t.cloneNode(!0);
    },
    n = function() {
      return 'file:' === window.location.protocol;
    },
    i = new Map(),
    o = {},
    a = function(t, e) {
      (o[t] = o[t] || []), o[t].push(e);
    },
    l = function(t) {
      for (
        var e = function(e, n) {
            setTimeout(function() {
              if (Array.isArray(o[t])) {
                var n = i.get(t),
                  a = o[t][e];
                (n instanceof SVGSVGElement || n instanceof HTMLElement) &&
                  a(null, r(n)),
                  n instanceof Error && a(n),
                  e === o[t].length - 1 && delete o[t];
              }
            }, 0);
          },
          n = 0,
          a = o[t].length;
        n < a;
        n++
      )
        e(n);
    },
    s = 0,
    c = function() {
      for (var t = 0, e = 0, r = arguments.length; e < r; e++)
        t += arguments[e].length;
      var n = Array(t),
        i = 0;
      for (e = 0; e < r; e++)
        for (var o = arguments[e], a = 0, l = o.length; a < l; a++, i++)
          n[i] = o[a];
      return n;
    },
    u = [],
    f = {},
    d = 'http://www.w3.org/1999/xlink',
    v = function(t, e, o, v, p) {
      var h = t.getAttribute('data-src') || t.getAttribute('src');
      if (h && /\.svg/i.test(h)) {
        if (-1 !== u.indexOf(t))
          return u.splice(u.indexOf(t), 1), void (t = null);
        u.push(t),
          t.setAttribute('src', ''),
          (function(t, e) {
            if (i.has(t)) {
              var o = i.get(t);
              return o instanceof SVGSVGElement || o instanceof HTMLElement
                ? void e(null, r(o))
                : o instanceof Error
                ? void e(o)
                : void a(t, e);
            }
            i.set(t, void 0), a(t, e);
            var s = new XMLHttpRequest();
            (s.onreadystatechange = function() {
              try {
                if (4 === s.readyState) {
                  if (404 === s.status || null === s.responseXML)
                    throw new Error(
                      n()
                        ? 'Note: SVG injection ajax calls do not work locally without adjusting security setting in your browser. Or consider using a local webserver.'
                        : 'Unable to load SVG file: ' + t
                    );
                  if (!(200 === s.status || (n() && 0 === s.status)))
                    throw new Error(
                      'There was a problem injecting the SVG: ' +
                        s.status +
                        ' ' +
                        s.statusText
                    );
                  s.responseXML instanceof Document &&
                    s.responseXML.documentElement &&
                    i.set(t, s.responseXML.documentElement),
                    l(t);
                }
              } catch (e) {
                i.set(t, e), l(t);
              }
            }),
              s.open('GET', t),
              s.overrideMimeType && s.overrideMimeType('text/xml'),
              s.send();
          })(h, function(r, n) {
            if (!n) return u.splice(u.indexOf(t), 1), (t = null), void p(r);
            var i = t.getAttribute('id');
            i && n.setAttribute('id', i);
            var a = t.getAttribute('title');
            a && n.setAttribute('title', a);
            var l = t.getAttribute('width');
            l && n.setAttribute('width', l);
            var g = t.getAttribute('height');
            g && n.setAttribute('height', g);
            var A = Array.from(
              new Set(
                c(
                  (n.getAttribute('class') || '').split(' '),
                  ['injected-svg'],
                  (t.getAttribute('class') || '').split(' ')
                )
              )
            )
              .join(' ')
              .trim();
            n.setAttribute('class', A);
            var m = t.getAttribute('style');
            m && n.setAttribute('style', m), n.setAttribute('data-src', h);
            var b = [].filter.call(t.attributes, function(t) {
              return /^data-\w[\w-]*$/.test(t.name);
            });
            if (
              (Array.prototype.forEach.call(b, function(t) {
                t.name && t.value && n.setAttribute(t.name, t.value);
              }),
              o)
            ) {
              var w,
                y,
                E,
                S,
                x = {
                  clipPath: ['clip-path'],
                  'color-profile': ['color-profile'],
                  cursor: ['cursor'],
                  filter: ['filter'],
                  linearGradient: ['fill', 'stroke'],
                  marker: [
                    'marker',
                    'marker-start',
                    'marker-mid',
                    'marker-end',
                  ],
                  mask: ['mask'],
                  path: [],
                  pattern: ['fill', 'stroke'],
                  radialGradient: ['fill', 'stroke'],
                };
              Object.keys(x).forEach(function(t) {
                y = x[t];
                for (
                  var e = function(t, e) {
                      var r;
                      (S = (E = w[t].id) + '-' + ++s),
                        Array.prototype.forEach.call(y, function(t) {
                          for (
                            var e = 0,
                              i = (r = n.querySelectorAll(
                                '[' + t + '*="' + E + '"]'
                              )).length;
                            e < i;
                            e++
                          ) {
                            var o = r[e].getAttribute(t);
                            (o &&
                              !o.match(new RegExp('url\\(#' + E + '\\)'))) ||
                              r[e].setAttribute(t, 'url(#' + S + ')');
                          }
                        });
                      for (
                        var i = n.querySelectorAll('[*|href]'),
                          o = [],
                          a = 0,
                          l = i.length;
                        a < l;
                        a++
                      ) {
                        var c = i[a].getAttributeNS(d, 'href');
                        c && c.toString() === '#' + w[t].id && o.push(i[a]);
                      }
                      for (var u = 0, f = o.length; u < f; u++)
                        o[u].setAttributeNS(d, 'href', '#' + S);
                      w[t].id = S;
                    },
                    r = 0,
                    i = (w = n.querySelectorAll(t + '[id]')).length;
                  r < i;
                  r++
                )
                  e(r);
              });
            }
            n.removeAttribute('xmlns:a');
            for (
              var j,
                k,
                G = n.querySelectorAll('script'),
                M = [],
                T = 0,
                V = G.length;
              T < V;
              T++
            )
              ((k = G[T].getAttribute('type')) &&
                'application/ecmascript' !== k &&
                'application/javascript' !== k &&
                'text/javascript' !== k) ||
                ((j = G[T].innerText || G[T].textContent) && M.push(j),
                n.removeChild(G[T]));
            if (M.length > 0 && ('always' === e || ('once' === e && !f[h]))) {
              for (var N = 0, O = M.length; N < O; N++)
                new Function(M[N])(window);
              f[h] = !0;
            }
            var L = n.querySelectorAll('style');
            Array.prototype.forEach.call(L, function(t) {
              t.textContent += '';
            }),
              n.setAttribute('xmlns', 'http://www.w3.org/2000/svg'),
              n.setAttribute('xmlns:xlink', d),
              v(n),
              t.parentNode && t.parentNode.replaceChild(n, t),
              u.splice(u.indexOf(t), 1),
              (t = null),
              p(null, n);
          });
      } else
        p(
          new Error('Attempted to inject a file with a non-svg extension: ' + h)
        );
    };
  ((e = t.EvalScripts || (t.EvalScripts = {})).Always = 'always'),
    (e.Once = 'once'),
    (e.Never = 'never');
  (t.SVGInjector = function(e, r) {
    var n = void 0 === r ? {} : r,
      i = n.afterAll,
      o = void 0 === i ? function() {} : i,
      a = n.afterEach,
      l = void 0 === a ? function() {} : a,
      s = n.beforeEach,
      c = void 0 === s ? function() {} : s,
      u = n.evalScripts,
      f = void 0 === u ? t.EvalScripts.Never : u,
      d = n.renumerateIRIElements,
      p = void 0 === d || d;
    if (e && 'length' in e)
      for (var h = 0, g = 0, A = e.length; g < A; g++)
        v(e[g], f, p, c, function(t, r) {
          l(t, r), e && 'length' in e && e.length === ++h && o(h);
        });
    else
      e
        ? v(e, f, p, c, function(t, r) {
            l(t, r), o(1), (e = null);
          })
        : o(0);
  }),
    Object.defineProperty(t, '__esModule', { value: !0 });
});
//# sourceMappingURL=svg-injector.umd.production.js.map
