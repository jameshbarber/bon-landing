// ==================================================
// fancyBox v3.5.2
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2018 fancyApps
//
// ==================================================
!(function(t, e, n, o) {
  'use strict';
  function a(t, e) {
    var o,
      a,
      i,
      s = [],
      r = 0;
    (t && t.isDefaultPrevented()) ||
      (t.preventDefault(),
      (e = e || {}),
      t && t.data && (e = h(t.data.options, e)),
      (o = e.$target || n(t.currentTarget).trigger('blur')),
      (i = n.fancybox.getInstance()),
      (i && i.$trigger && i.$trigger.is(o)) ||
        (e.selector
          ? (s = n(e.selector))
          : ((a = o.attr('data-fancybox') || ''),
            a
              ? ((s = t.data ? t.data.items : []),
                (s = s.length
                  ? s.filter('[data-fancybox="' + a + '"]')
                  : n('[data-fancybox="' + a + '"]')))
              : (s = [o])),
        (r = n(s).index(o)),
        r < 0 && (r = 0),
        (i = n.fancybox.open(s, e, r)),
        (i.$trigger = o)));
  }
  if (((t.console = t.console || { info: function(t) {} }), n)) {
    if (n.fn.fancybox) return void console.info('fancyBox already initialized');
    var i = {
        closeExisting: !1,
        loop: !1,
        gutter: 50,
        keyboard: !0,
        preventCaptionOverlap: !0,
        arrows: !0,
        infobar: !0,
        smallBtn: 'auto',
        toolbar: 'auto',
        buttons: ['zoom', 'slideShow', 'thumbs', 'close'],
        idleTime: 3,
        protect: !1,
        modal: !1,
        image: { preload: !1 },
        ajax: { settings: { data: { fancybox: !0 } } },
        iframe: {
          tpl:
            '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen allow="autoplay; fullscreen" src=""></iframe>',
          preload: !0,
          css: {},
          attr: { scrolling: 'auto' },
        },
        video: {
          tpl:
            '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
          format: '',
          autoStart: !0,
        },
        defaultType: 'image',
        animationEffect: 'zoom',
        animationDuration: 366,
        zoomOpacity: 'auto',
        transitionEffect: 'fade',
        transitionDuration: 366,
        slideClass: '',
        baseClass: '',
        baseTpl:
          '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"></div></div></div>',
        spinnerTpl: '<div class="fancybox-loading"></div>',
        errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
        btnTpl: {
          download:
            '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
          zoom:
            '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
          close:
            '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
          arrowLeft:
            '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
          arrowRight:
            '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
          smallBtn:
            '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>',
        },
        parentEl: 'body',
        hideScrollbar: !0,
        autoFocus: !0,
        backFocus: !0,
        trapFocus: !0,
        fullScreen: { autoStart: !1 },
        touch: { vertical: !0, momentum: !0 },
        hash: null,
        media: {},
        slideShow: { autoStart: !1, speed: 3e3 },
        thumbs: {
          autoStart: !1,
          hideOnClose: !0,
          parentEl: '.fancybox-container',
          axis: 'y',
        },
        wheel: 'auto',
        onInit: n.noop,
        beforeLoad: n.noop,
        afterLoad: n.noop,
        beforeShow: n.noop,
        afterShow: n.noop,
        beforeClose: n.noop,
        afterClose: n.noop,
        onActivate: n.noop,
        onDeactivate: n.noop,
        clickContent: function(t, e) {
          return 'image' === t.type && 'zoom';
        },
        clickSlide: 'close',
        clickOutside: 'close',
        dblclickContent: !1,
        dblclickSlide: !1,
        dblclickOutside: !1,
        mobile: {
          preventCaptionOverlap: !1,
          idleTime: !1,
          clickContent: function(t, e) {
            return 'image' === t.type && 'toggleControls';
          },
          clickSlide: function(t, e) {
            return 'image' === t.type ? 'toggleControls' : 'close';
          },
          dblclickContent: function(t, e) {
            return 'image' === t.type && 'zoom';
          },
          dblclickSlide: function(t, e) {
            return 'image' === t.type && 'zoom';
          },
        },
        lang: 'en',
        i18n: {
          en: {
            CLOSE: 'Close',
            NEXT: 'Next',
            PREV: 'Previous',
            ERROR:
              'The requested content cannot be loaded. <br/> Please try again later.',
            PLAY_START: 'Start slideshow',
            PLAY_STOP: 'Pause slideshow',
            FULL_SCREEN: 'Full screen',
            THUMBS: 'Thumbnails',
            DOWNLOAD: 'Download',
            SHARE: 'Share',
            ZOOM: 'Zoom',
          },
          de: {
            CLOSE: 'Schliessen',
            NEXT: 'Weiter',
            PREV: 'Zurück',
            ERROR:
              'Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.',
            PLAY_START: 'Diaschau starten',
            PLAY_STOP: 'Diaschau beenden',
            FULL_SCREEN: 'Vollbild',
            THUMBS: 'Vorschaubilder',
            DOWNLOAD: 'Herunterladen',
            SHARE: 'Teilen',
            ZOOM: 'Maßstab',
          },
        },
      },
      s = n(t),
      r = n(e),
      c = 0,
      l = function(t) {
        return t && t.hasOwnProperty && t instanceof n;
      },
      d = (function() {
        return (
          t.requestAnimationFrame ||
          t.webkitRequestAnimationFrame ||
          t.mozRequestAnimationFrame ||
          t.oRequestAnimationFrame ||
          function(e) {
            return t.setTimeout(e, 1e3 / 60);
          }
        );
      })(),
      u = (function() {
        return (
          t.cancelAnimationFrame ||
          t.webkitCancelAnimationFrame ||
          t.mozCancelAnimationFrame ||
          t.oCancelAnimationFrame ||
          function(e) {
            t.clearTimeout(e);
          }
        );
      })(),
      f = (function() {
        var t,
          n = e.createElement('fakeelement'),
          a = {
            transition: 'transitionend',
            OTransition: 'oTransitionEnd',
            MozTransition: 'transitionend',
            WebkitTransition: 'webkitTransitionEnd',
          };
        for (t in a) if (n.style[t] !== o) return a[t];
        return 'transitionend';
      })(),
      p = function(t) {
        return t && t.length && t[0].offsetHeight;
      },
      h = function(t, e) {
        var o = n.extend(!0, {}, t, e);
        return (
          n.each(e, function(t, e) {
            n.isArray(e) && (o[t] = e);
          }),
          o
        );
      },
      g = function(t) {
        var o, a;
        return (
          !(!t || t.ownerDocument !== e) &&
          (n('.fancybox-container').css('pointer-events', 'none'),
          (o = {
            x: t.getBoundingClientRect().left + t.offsetWidth / 2,
            y: t.getBoundingClientRect().top + t.offsetHeight / 2,
          }),
          (a = e.elementFromPoint(o.x, o.y) === t),
          n('.fancybox-container').css('pointer-events', ''),
          a)
        );
      },
      b = function(t, e, o) {
        var a = this;
        (a.opts = h({ index: o }, n.fancybox.defaults)),
          n.isPlainObject(e) && (a.opts = h(a.opts, e)),
          n.fancybox.isMobile && (a.opts = h(a.opts, a.opts.mobile)),
          (a.id = a.opts.id || ++c),
          (a.currIndex = parseInt(a.opts.index, 10) || 0),
          (a.prevIndex = null),
          (a.prevPos = null),
          (a.currPos = 0),
          (a.firstRun = !0),
          (a.group = []),
          (a.slides = {}),
          a.addContent(t),
          a.group.length && a.init();
      };
    n.extend(b.prototype, {
      init: function() {
        var o,
          a,
          i = this,
          s = i.group[i.currIndex],
          r = s.opts;
        r.closeExisting && n.fancybox.close(!0),
          n('body').addClass('fancybox-active'),
          !n.fancybox.getInstance() &&
            r.hideScrollbar !== !1 &&
            !n.fancybox.isMobile &&
            e.body.scrollHeight > t.innerHeight &&
            (n('head').append(
              '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' +
                (t.innerWidth - e.documentElement.clientWidth) +
                'px;}</style>'
            ),
            n('body').addClass('compensate-for-scrollbar')),
          (a = ''),
          n.each(r.buttons, function(t, e) {
            a += r.btnTpl[e] || '';
          }),
          (o = n(
            i.translate(
              i,
              r.baseTpl
                .replace('{{buttons}}', a)
                .replace('{{arrows}}', r.btnTpl.arrowLeft + r.btnTpl.arrowRight)
            )
          )
            .attr('id', 'fancybox-container-' + i.id)
            .addClass(r.baseClass)
            .data('FancyBox', i)
            .appendTo(r.parentEl)),
          (i.$refs = { container: o }),
          [
            'bg',
            'inner',
            'infobar',
            'toolbar',
            'stage',
            'caption',
            'navigation',
          ].forEach(function(t) {
            i.$refs[t] = o.find('.fancybox-' + t);
          }),
          i.trigger('onInit'),
          i.activate(),
          i.jumpTo(i.currIndex);
      },
      translate: function(t, e) {
        var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
        return e.replace(/\{\{(\w+)\}\}/g, function(t, e) {
          var a = n[e];
          return a === o ? t : a;
        });
      },
      addContent: function(t) {
        var e,
          a = this,
          i = n.makeArray(t);
        n.each(i, function(t, e) {
          var i,
            s,
            r,
            c,
            l,
            d = {},
            u = {};
          n.isPlainObject(e)
            ? ((d = e), (u = e.opts || e))
            : 'object' === n.type(e) && n(e).length
            ? ((i = n(e)),
              (u = i.data() || {}),
              (u = n.extend(!0, {}, u, u.options)),
              (u.$orig = i),
              (d.src = a.opts.src || u.src || i.attr('href')),
              d.type || d.src || ((d.type = 'inline'), (d.src = e)))
            : (d = { type: 'html', src: e + '' }),
            (d.opts = n.extend(!0, {}, a.opts, u)),
            n.isArray(u.buttons) && (d.opts.buttons = u.buttons),
            n.fancybox.isMobile &&
              d.opts.mobile &&
              (d.opts = h(d.opts, d.opts.mobile)),
            (s = d.type || d.opts.type),
            (c = d.src || ''),
            !s &&
              c &&
              ((r = c.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
                ? ((s = 'video'),
                  d.opts.video.format ||
                    (d.opts.video.format =
                      'video/' + ('ogv' === r[1] ? 'ogg' : r[1])))
                : c.match(
                    /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
                  )
                ? (s = 'image')
                : c.match(/\.(pdf)((\?|#).*)?$/i)
                ? ((s = 'iframe'),
                  (d = n.extend(!0, d, {
                    contentType: 'pdf',
                    opts: { iframe: { preload: !1 } },
                  })))
                : '#' === c.charAt(0) && (s = 'inline')),
            s ? (d.type = s) : a.trigger('objectNeedsType', d),
            d.contentType ||
              (d.contentType =
                n.inArray(d.type, ['html', 'inline', 'ajax']) > -1
                  ? 'html'
                  : d.type),
            (d.index = a.group.length),
            'auto' == d.opts.smallBtn &&
              (d.opts.smallBtn =
                n.inArray(d.type, ['html', 'inline', 'ajax']) > -1),
            'auto' === d.opts.toolbar && (d.opts.toolbar = !d.opts.smallBtn),
            (d.$thumb = d.opts.$thumb || null),
            d.opts.$trigger &&
              d.index === a.opts.index &&
              ((d.$thumb = d.opts.$trigger.find('img:first')),
              d.$thumb.length && (d.opts.$orig = d.opts.$trigger)),
            (d.$thumb && d.$thumb.length) ||
              !d.opts.$orig ||
              (d.$thumb = d.opts.$orig.find('img:first')),
            d.$thumb && !d.$thumb.length && (d.$thumb = null),
            (d.thumb = d.opts.thumb || (d.$thumb ? d.$thumb[0].src : null)),
            'function' === n.type(d.opts.caption) &&
              (d.opts.caption = d.opts.caption.apply(e, [a, d])),
            'function' === n.type(a.opts.caption) &&
              (d.opts.caption = a.opts.caption.apply(e, [a, d])),
            d.opts.caption instanceof n ||
              (d.opts.caption =
                d.opts.caption === o ? '' : d.opts.caption + ''),
            'ajax' === d.type &&
              ((l = c.split(/\s+/, 2)),
              l.length > 1 &&
                ((d.src = l.shift()), (d.opts.filter = l.shift()))),
            d.opts.modal &&
              (d.opts = n.extend(!0, d.opts, {
                trapFocus: !0,
                infobar: 0,
                toolbar: 0,
                smallBtn: 0,
                keyboard: 0,
                slideShow: 0,
                fullScreen: 0,
                thumbs: 0,
                touch: 0,
                clickContent: !1,
                clickSlide: !1,
                clickOutside: !1,
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
              })),
            a.group.push(d);
        }),
          Object.keys(a.slides).length &&
            (a.updateControls(),
            (e = a.Thumbs),
            e && e.isActive && (e.create(), e.focus()));
      },
      addEvents: function() {
        var e = this;
        e.removeEvents(),
          e.$refs.container
            .on('click.fb-close', '[data-fancybox-close]', function(t) {
              t.stopPropagation(), t.preventDefault(), e.close(t);
            })
            .on(
              'touchstart.fb-prev click.fb-prev',
              '[data-fancybox-prev]',
              function(t) {
                t.stopPropagation(), t.preventDefault(), e.previous();
              }
            )
            .on(
              'touchstart.fb-next click.fb-next',
              '[data-fancybox-next]',
              function(t) {
                t.stopPropagation(), t.preventDefault(), e.next();
              }
            )
            .on('click.fb', '[data-fancybox-zoom]', function(t) {
              e[e.isScaledDown() ? 'scaleToActual' : 'scaleToFit']();
            }),
          s.on('orientationchange.fb resize.fb', function(t) {
            t && t.originalEvent && 'resize' === t.originalEvent.type
              ? (e.requestId && u(e.requestId),
                (e.requestId = d(function() {
                  e.update(t);
                })))
              : (e.current &&
                  'iframe' === e.current.type &&
                  e.$refs.stage.hide(),
                setTimeout(
                  function() {
                    e.$refs.stage.show(), e.update(t);
                  },
                  n.fancybox.isMobile ? 600 : 250
                ));
          }),
          r.on('keydown.fb', function(t) {
            var o = n.fancybox ? n.fancybox.getInstance() : null,
              a = o.current,
              i = t.keyCode || t.which;
            if (9 == i) return void (a.opts.trapFocus && e.focus(t));
            if (
              !(
                !a.opts.keyboard ||
                t.ctrlKey ||
                t.altKey ||
                t.shiftKey ||
                n(t.target).is('input') ||
                n(t.target).is('textarea')
              )
            )
              return 8 === i || 27 === i
                ? (t.preventDefault(), void e.close(t))
                : 37 === i || 38 === i
                ? (t.preventDefault(), void e.previous())
                : 39 === i || 40 === i
                ? (t.preventDefault(), void e.next())
                : void e.trigger('afterKeydown', t, i);
          }),
          e.group[e.currIndex].opts.idleTime &&
            ((e.idleSecondsCounter = 0),
            r.on(
              'mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle',
              function(t) {
                (e.idleSecondsCounter = 0),
                  e.isIdle && e.showControls(),
                  (e.isIdle = !1);
              }
            ),
            (e.idleInterval = t.setInterval(function() {
              e.idleSecondsCounter++,
                e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime &&
                  !e.isDragging &&
                  ((e.isIdle = !0),
                  (e.idleSecondsCounter = 0),
                  e.hideControls());
            }, 1e3)));
      },
      removeEvents: function() {
        var e = this;
        s.off('orientationchange.fb resize.fb'),
          r.off('keydown.fb .fb-idle'),
          this.$refs.container.off('.fb-close .fb-prev .fb-next'),
          e.idleInterval &&
            (t.clearInterval(e.idleInterval), (e.idleInterval = null));
      },
      previous: function(t) {
        return this.jumpTo(this.currPos - 1, t);
      },
      next: function(t) {
        return this.jumpTo(this.currPos + 1, t);
      },
      jumpTo: function(t, e) {
        var a,
          i,
          s,
          r,
          c,
          l,
          d,
          u,
          f,
          h = this,
          g = h.group.length;
        if (!(h.isDragging || h.isClosing || (h.isAnimating && h.firstRun))) {
          if (
            ((t = parseInt(t, 10)),
            (s = h.current ? h.current.opts.loop : h.opts.loop),
            !s && (t < 0 || t >= g))
          )
            return !1;
          if (
            ((a = h.firstRun = !Object.keys(h.slides).length),
            (c = h.current),
            (h.prevIndex = h.currIndex),
            (h.prevPos = h.currPos),
            (r = h.createSlide(t)),
            g > 1 &&
              ((s || r.index < g - 1) && h.createSlide(t + 1),
              (s || r.index > 0) && h.createSlide(t - 1)),
            (h.current = r),
            (h.currIndex = r.index),
            (h.currPos = r.pos),
            h.trigger('beforeShow', a),
            h.updateControls(),
            (r.forcedDuration = o),
            n.isNumeric(e)
              ? (r.forcedDuration = e)
              : (e = r.opts[a ? 'animationDuration' : 'transitionDuration']),
            (e = parseInt(e, 10)),
            (i = h.isMoved(r)),
            r.$slide.addClass('fancybox-slide--current'),
            a)
          )
            return (
              r.opts.animationEffect &&
                e &&
                h.$refs.container.css('transition-duration', e + 'ms'),
              h.$refs.container.addClass('fancybox-is-open').trigger('focus'),
              h.loadSlide(r),
              void h.preload('image')
            );
          (l = n.fancybox.getTranslate(c.$slide)),
            (d = n.fancybox.getTranslate(h.$refs.stage)),
            n.each(h.slides, function(t, e) {
              n.fancybox.stop(e.$slide, !0);
            }),
            c.pos !== r.pos && (c.isComplete = !1),
            c.$slide.removeClass(
              'fancybox-slide--complete fancybox-slide--current'
            ),
            i
              ? ((f = l.left - (c.pos * l.width + c.pos * c.opts.gutter)),
                n.each(h.slides, function(t, o) {
                  o.$slide
                    .removeClass('fancybox-animated')
                    .removeClass(function(t, e) {
                      return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(
                        ' '
                      );
                    });
                  var a = o.pos * l.width + o.pos * o.opts.gutter;
                  n.fancybox.setTranslate(o.$slide, {
                    top: 0,
                    left: a - d.left + f,
                  }),
                    o.pos !== r.pos &&
                      o.$slide.addClass(
                        'fancybox-slide--' +
                          (o.pos > r.pos ? 'next' : 'previous')
                      ),
                    p(o.$slide),
                    n.fancybox.animate(
                      o.$slide,
                      {
                        top: 0,
                        left:
                          (o.pos - r.pos) * l.width +
                          (o.pos - r.pos) * o.opts.gutter,
                      },
                      e,
                      function() {
                        o.$slide
                          .css({ transform: '', opacity: '' })
                          .removeClass(
                            'fancybox-slide--next fancybox-slide--previous'
                          ),
                          o.pos === h.currPos && h.complete();
                      }
                    );
                }))
              : e &&
                r.opts.transitionEffect &&
                ((u =
                  'fancybox-animated fancybox-fx-' + r.opts.transitionEffect),
                c.$slide.addClass(
                  'fancybox-slide--' + (c.pos > r.pos ? 'next' : 'previous')
                ),
                n.fancybox.animate(
                  c.$slide,
                  u,
                  e,
                  function() {
                    c.$slide
                      .removeClass(u)
                      .removeClass(
                        'fancybox-slide--next fancybox-slide--previous'
                      );
                  },
                  !1
                )),
            r.isLoaded ? h.revealContent(r) : h.loadSlide(r),
            h.preload('image');
        }
      },
      createSlide: function(t) {
        var e,
          o,
          a = this;
        return (
          (o = t % a.group.length),
          (o = o < 0 ? a.group.length + o : o),
          !a.slides[t] &&
            a.group[o] &&
            ((e = n('<div class="fancybox-slide"></div>').appendTo(
              a.$refs.stage
            )),
            (a.slides[t] = n.extend(!0, {}, a.group[o], {
              pos: t,
              $slide: e,
              isLoaded: !1,
            })),
            a.updateSlide(a.slides[t])),
          a.slides[t]
        );
      },
      scaleToActual: function(t, e, a) {
        var i,
          s,
          r,
          c,
          l,
          d = this,
          u = d.current,
          f = u.$content,
          p = n.fancybox.getTranslate(u.$slide).width,
          h = n.fancybox.getTranslate(u.$slide).height,
          g = u.width,
          b = u.height;
        d.isAnimating ||
          d.isMoved() ||
          !f ||
          'image' != u.type ||
          !u.isLoaded ||
          u.hasError ||
          ((d.isAnimating = !0),
          n.fancybox.stop(f),
          (t = t === o ? 0.5 * p : t),
          (e = e === o ? 0.5 * h : e),
          (i = n.fancybox.getTranslate(f)),
          (i.top -= n.fancybox.getTranslate(u.$slide).top),
          (i.left -= n.fancybox.getTranslate(u.$slide).left),
          (c = g / i.width),
          (l = b / i.height),
          (s = 0.5 * p - 0.5 * g),
          (r = 0.5 * h - 0.5 * b),
          g > p &&
            ((s = i.left * c - (t * c - t)),
            s > 0 && (s = 0),
            s < p - g && (s = p - g)),
          b > h &&
            ((r = i.top * l - (e * l - e)),
            r > 0 && (r = 0),
            r < h - b && (r = h - b)),
          d.updateCursor(g, b),
          n.fancybox.animate(
            f,
            { top: r, left: s, scaleX: c, scaleY: l },
            a || 330,
            function() {
              d.isAnimating = !1;
            }
          ),
          d.SlideShow && d.SlideShow.isActive && d.SlideShow.stop());
      },
      scaleToFit: function(t) {
        var e,
          o = this,
          a = o.current,
          i = a.$content;
        o.isAnimating ||
          o.isMoved() ||
          !i ||
          'image' != a.type ||
          !a.isLoaded ||
          a.hasError ||
          ((o.isAnimating = !0),
          n.fancybox.stop(i),
          (e = o.getFitPos(a)),
          o.updateCursor(e.width, e.height),
          n.fancybox.animate(
            i,
            {
              top: e.top,
              left: e.left,
              scaleX: e.width / i.width(),
              scaleY: e.height / i.height(),
            },
            t || 330,
            function() {
              o.isAnimating = !1;
            }
          ));
      },
      getFitPos: function(t) {
        var e,
          o,
          a,
          i,
          s = this,
          r = t.$content,
          c = t.$slide,
          l = t.width || t.opts.width,
          d = t.height || t.opts.height,
          u = {};
        return (
          !!(t.isLoaded && r && r.length) &&
          ((e = n.fancybox.getTranslate(s.$refs.stage).width),
          (o = n.fancybox.getTranslate(s.$refs.stage).height),
          (e -=
            parseFloat(c.css('paddingLeft')) +
            parseFloat(c.css('paddingRight')) +
            parseFloat(r.css('marginLeft')) +
            parseFloat(r.css('marginRight'))),
          (o -=
            parseFloat(c.css('paddingTop')) +
            parseFloat(c.css('paddingBottom')) +
            parseFloat(r.css('marginTop')) +
            parseFloat(r.css('marginBottom'))),
          (l && d) || ((l = e), (d = o)),
          (a = Math.min(1, e / l, o / d)),
          (l = a * l),
          (d = a * d),
          l > e - 0.5 && (l = e),
          d > o - 0.5 && (d = o),
          'image' === t.type
            ? ((u.top =
                Math.floor(0.5 * (o - d)) + parseFloat(c.css('paddingTop'))),
              (u.left =
                Math.floor(0.5 * (e - l)) + parseFloat(c.css('paddingLeft'))))
            : 'video' === t.contentType &&
              ((i =
                t.opts.width && t.opts.height ? l / d : t.opts.ratio || 16 / 9),
              d > l / i ? (d = l / i) : l > d * i && (l = d * i)),
          (u.width = l),
          (u.height = d),
          u)
        );
      },
      update: function(t) {
        var e = this;
        n.each(e.slides, function(n, o) {
          e.updateSlide(o, t);
        });
      },
      updateSlide: function(t, e) {
        var o = this,
          a = t && t.$content,
          i = t.width || t.opts.width,
          s = t.height || t.opts.height,
          r = t.$slide;
        o.adjustCaption(t),
          a &&
            (i || s || 'video' === t.contentType) &&
            !t.hasError &&
            (n.fancybox.stop(a),
            n.fancybox.setTranslate(a, o.getFitPos(t)),
            t.pos === o.currPos && ((o.isAnimating = !1), o.updateCursor())),
          o.adjustLayout(t),
          r.length &&
            (r.trigger('refresh'),
            t.pos === o.currPos &&
              o.$refs.toolbar
                .add(o.$refs.navigation.find('.fancybox-button--arrow_right'))
                .toggleClass(
                  'compensate-for-scrollbar',
                  r.get(0).scrollHeight > r.get(0).clientHeight
                )),
          o.trigger('onUpdate', t, e);
      },
      centerSlide: function(t) {
        var e = this,
          a = e.current,
          i = a.$slide;
        !e.isClosing &&
          a &&
          (i.siblings().css({ transform: '', opacity: '' }),
          i
            .parent()
            .children()
            .removeClass('fancybox-slide--previous fancybox-slide--next'),
          n.fancybox.animate(
            i,
            { top: 0, left: 0, opacity: 1 },
            t === o ? 0 : t,
            function() {
              i.css({ transform: '', opacity: '' }),
                a.isComplete || e.complete();
            },
            !1
          ));
      },
      isMoved: function(t) {
        var e,
          o,
          a = t || this.current;
        return (
          !!a &&
          ((o = n.fancybox.getTranslate(this.$refs.stage)),
          (e = n.fancybox.getTranslate(a.$slide)),
          !a.$slide.hasClass('fancybox-animated') &&
            (Math.abs(e.top - o.top) > 0.5 || Math.abs(e.left - o.left) > 0.5))
        );
      },
      updateCursor: function(t, e) {
        var o,
          a,
          i = this,
          s = i.current,
          r = i.$refs.container;
        s &&
          !i.isClosing &&
          i.Guestures &&
          (r.removeClass(
            'fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan'
          ),
          (o = i.canPan(t, e)),
          (a = !!o || i.isZoomable()),
          r.toggleClass('fancybox-is-zoomable', a),
          n('[data-fancybox-zoom]').prop('disabled', !a),
          o
            ? r.addClass('fancybox-can-pan')
            : a &&
              ('zoom' === s.opts.clickContent ||
                (n.isFunction(s.opts.clickContent) &&
                  'zoom' == s.opts.clickContent(s)))
            ? r.addClass('fancybox-can-zoomIn')
            : s.opts.touch &&
              (s.opts.touch.vertical || i.group.length > 1) &&
              'video' !== s.contentType &&
              r.addClass('fancybox-can-swipe'));
      },
      isZoomable: function() {
        var t,
          e = this,
          n = e.current;
        if (n && !e.isClosing && 'image' === n.type && !n.hasError) {
          if (!n.isLoaded) return !0;
          if (
            ((t = e.getFitPos(n)),
            t && (n.width > t.width || n.height > t.height))
          )
            return !0;
        }
        return !1;
      },
      isScaledDown: function(t, e) {
        var a = this,
          i = !1,
          s = a.current,
          r = s.$content;
        return (
          t !== o && e !== o
            ? (i = t < s.width && e < s.height)
            : r &&
              ((i = n.fancybox.getTranslate(r)),
              (i = i.width < s.width && i.height < s.height)),
          i
        );
      },
      canPan: function(t, e) {
        var a = this,
          i = a.current,
          s = null,
          r = !1;
        return (
          'image' === i.type &&
            (i.isComplete || (t && e)) &&
            !i.hasError &&
            ((r = a.getFitPos(i)),
            t !== o && e !== o
              ? (s = { width: t, height: e })
              : i.isComplete && (s = n.fancybox.getTranslate(i.$content)),
            s &&
              r &&
              (r =
                Math.abs(s.width - r.width) > 1.5 ||
                Math.abs(s.height - r.height) > 1.5)),
          r
        );
      },
      loadSlide: function(t) {
        var e,
          o,
          a,
          i = this;
        if (!t.isLoading && !t.isLoaded) {
          if (((t.isLoading = !0), i.trigger('beforeLoad', t) === !1))
            return (t.isLoading = !1), !1;
          switch (
            ((e = t.type),
            (o = t.$slide),
            o
              .off('refresh')
              .trigger('onReset')
              .addClass(t.opts.slideClass),
            e)
          ) {
            case 'image':
              i.setImage(t);
              break;
            case 'iframe':
              i.setIframe(t);
              break;
            case 'html':
              i.setContent(t, t.src || t.content);
              break;
            case 'video':
              i.setContent(
                t,
                t.opts.video.tpl
                  .replace(/\{\{src\}\}/gi, t.src)
                  .replace(
                    '{{format}}',
                    t.opts.videoFormat || t.opts.video.format || ''
                  )
                  .replace('{{poster}}', t.thumb || '')
              );
              break;
            case 'inline':
              n(t.src).length ? i.setContent(t, n(t.src)) : i.setError(t);
              break;
            case 'ajax':
              i.showLoading(t),
                (a = n.ajax(
                  n.extend({}, t.opts.ajax.settings, {
                    url: t.src,
                    success: function(e, n) {
                      'success' === n && i.setContent(t, e);
                    },
                    error: function(e, n) {
                      e && 'abort' !== n && i.setError(t);
                    },
                  })
                )),
                o.one('onReset', function() {
                  a.abort();
                });
              break;
            default:
              i.setError(t);
          }
          return !0;
        }
      },
      setImage: function(t) {
        var o,
          a = this;
        setTimeout(function() {
          var e = t.$image;
          a.isClosing ||
            !t.isLoading ||
            (e && e.length && e[0].complete) ||
            t.hasError ||
            a.showLoading(t);
        }, 50),
          a.checkSrcset(t),
          (t.$content = n('<div class="fancybox-content"></div>')
            .addClass('fancybox-is-hidden')
            .appendTo(t.$slide.addClass('fancybox-slide--image'))),
          t.opts.preload !== !1 &&
            t.opts.width &&
            t.opts.height &&
            t.thumb &&
            ((t.width = t.opts.width),
            (t.height = t.opts.height),
            (o = e.createElement('img')),
            (o.onerror = function() {
              n(this).remove(), (t.$ghost = null);
            }),
            (o.onload = function() {
              a.afterLoad(t);
            }),
            (t.$ghost = n(o)
              .addClass('fancybox-image')
              .appendTo(t.$content)
              .attr('src', t.thumb))),
          a.setBigImage(t);
      },
      checkSrcset: function(e) {
        var n,
          o,
          a,
          i,
          s = e.opts.srcset || e.opts.image.srcset;
        if (s) {
          (a = t.devicePixelRatio || 1),
            (i = t.innerWidth * a),
            (o = s.split(',').map(function(t) {
              var e = {};
              return (
                t
                  .trim()
                  .split(/\s+/)
                  .forEach(function(t, n) {
                    var o = parseInt(t.substring(0, t.length - 1), 10);
                    return 0 === n
                      ? (e.url = t)
                      : void (
                          o && ((e.value = o), (e.postfix = t[t.length - 1]))
                        );
                  }),
                e
              );
            })),
            o.sort(function(t, e) {
              return t.value - e.value;
            });
          for (var r = 0; r < o.length; r++) {
            var c = o[r];
            if (
              ('w' === c.postfix && c.value >= i) ||
              ('x' === c.postfix && c.value >= a)
            ) {
              n = c;
              break;
            }
          }
          !n && o.length && (n = o[o.length - 1]),
            n &&
              ((e.src = n.url),
              e.width &&
                e.height &&
                'w' == n.postfix &&
                ((e.height = (e.width / e.height) * n.value),
                (e.width = n.value)),
              (e.opts.srcset = s));
        }
      },
      setBigImage: function(t) {
        var o = this,
          a = e.createElement('img'),
          i = n(a);
        (t.$image = i
          .one('error', function() {
            o.setError(t);
          })
          .one('load', function() {
            var e;
            t.$ghost ||
              (o.resolveImageSlideSize(
                t,
                this.naturalWidth,
                this.naturalHeight
              ),
              o.afterLoad(t)),
              o.isClosing ||
                (t.opts.srcset &&
                  ((e = t.opts.sizes),
                  (e && 'auto' !== e) ||
                    (e =
                      (t.width / t.height > 1 && s.width() / s.height() > 1
                        ? '100'
                        : Math.round((t.width / t.height) * 100)) + 'vw'),
                  i.attr('sizes', e).attr('srcset', t.opts.srcset)),
                t.$ghost &&
                  setTimeout(function() {
                    t.$ghost && !o.isClosing && t.$ghost.hide();
                  }, Math.min(300, Math.max(1e3, t.height / 1600))),
                o.hideLoading(t));
          })
          .addClass('fancybox-image')
          .attr('src', t.src)
          .appendTo(t.$content)),
          (a.complete || 'complete' == a.readyState) &&
          i.naturalWidth &&
          i.naturalHeight
            ? i.trigger('load')
            : a.error && i.trigger('error');
      },
      resolveImageSlideSize: function(t, e, n) {
        var o = parseInt(t.opts.width, 10),
          a = parseInt(t.opts.height, 10);
        (t.width = e),
          (t.height = n),
          o > 0 && ((t.width = o), (t.height = Math.floor((o * n) / e))),
          a > 0 && ((t.width = Math.floor((a * e) / n)), (t.height = a));
      },
      setIframe: function(t) {
        var e,
          a = this,
          i = t.opts.iframe,
          s = t.$slide;
        n.fancybox.isMobile && (i.css.overflow = 'scroll'),
          (t.$content = n(
            '<div class="fancybox-content' +
              (i.preload ? ' fancybox-is-hidden' : '') +
              '"></div>'
          )
            .css(i.css)
            .appendTo(s)),
          s.addClass('fancybox-slide--' + t.contentType),
          (t.$iframe = e = n(i.tpl.replace(/\{rnd\}/g, new Date().getTime()))
            .attr(i.attr)
            .appendTo(t.$content)),
          i.preload
            ? (a.showLoading(t),
              e.on('load.fb error.fb', function(e) {
                (this.isReady = 1), t.$slide.trigger('refresh'), a.afterLoad(t);
              }),
              s.on('refresh.fb', function() {
                var n,
                  a,
                  r = t.$content,
                  c = i.css.width,
                  l = i.css.height;
                if (1 === e[0].isReady) {
                  try {
                    (n = e.contents()), (a = n.find('body'));
                  } catch (t) {}
                  a &&
                    a.length &&
                    a.children().length &&
                    (s.css('overflow', 'visible'),
                    r.css({
                      width: '100%',
                      'max-width': '100%',
                      height: '9999px',
                    }),
                    c === o &&
                      (c = Math.ceil(
                        Math.max(a[0].clientWidth, a.outerWidth(!0))
                      )),
                    r.css('width', c ? c : '').css('max-width', ''),
                    l === o &&
                      (l = Math.ceil(
                        Math.max(a[0].clientHeight, a.outerHeight(!0))
                      )),
                    r.css('height', l ? l : ''),
                    s.css('overflow', 'auto')),
                    r.removeClass('fancybox-is-hidden');
                }
              }))
            : a.afterLoad(t),
          e.attr('src', t.src),
          s.one('onReset', function() {
            try {
              n(this)
                .find('iframe')
                .hide()
                .unbind()
                .attr('src', '//about:blank');
            } catch (t) {}
            n(this)
              .off('refresh.fb')
              .empty(),
              (t.isLoaded = !1),
              (t.isRevealed = !1);
          });
      },
      setContent: function(t, e) {
        var o = this;
        o.isClosing ||
          (o.hideLoading(t),
          t.$content && n.fancybox.stop(t.$content),
          t.$slide.empty(),
          l(e) && e.parent().length
            ? ((e.hasClass('fancybox-content') ||
                e.parent().hasClass('fancybox-content')) &&
                e.parents('.fancybox-slide').trigger('onReset'),
              (t.$placeholder = n('<div>')
                .hide()
                .insertAfter(e)),
              e.css('display', 'inline-block'))
            : t.hasError ||
              ('string' === n.type(e) &&
                (e = n('<div>')
                  .append(n.trim(e))
                  .contents()),
              t.opts.filter &&
                (e = n('<div>')
                  .html(e)
                  .find(t.opts.filter))),
          t.$slide.one('onReset', function() {
            n(this)
              .find('video,audio')
              .trigger('pause'),
              t.$placeholder &&
                (t.$placeholder
                  .after(e.removeClass('fancybox-content').hide())
                  .remove(),
                (t.$placeholder = null)),
              t.$smallBtn && (t.$smallBtn.remove(), (t.$smallBtn = null)),
              t.hasError ||
                (n(this).empty(), (t.isLoaded = !1), (t.isRevealed = !1));
          }),
          n(e).appendTo(t.$slide),
          n(e).is('video,audio') &&
            (n(e).addClass('fancybox-video'),
            n(e).wrap('<div></div>'),
            (t.contentType = 'video'),
            (t.opts.width = t.opts.width || n(e).attr('width')),
            (t.opts.height = t.opts.height || n(e).attr('height'))),
          (t.$content = t.$slide
            .children()
            .filter('div,form,main,video,audio,article,.fancybox-content')
            .first()),
          t.$content.siblings().hide(),
          t.$content.length ||
            (t.$content = t.$slide
              .wrapInner('<div></div>')
              .children()
              .first()),
          t.$content.addClass('fancybox-content'),
          t.$slide.addClass('fancybox-slide--' + t.contentType),
          o.afterLoad(t));
      },
      setError: function(t) {
        (t.hasError = !0),
          t.$slide
            .trigger('onReset')
            .removeClass('fancybox-slide--' + t.contentType)
            .addClass('fancybox-slide--error'),
          (t.contentType = 'html'),
          this.setContent(t, this.translate(t, t.opts.errorTpl)),
          t.pos === this.currPos && (this.isAnimating = !1);
      },
      showLoading: function(t) {
        var e = this;
        (t = t || e.current),
          t &&
            !t.$spinner &&
            (t.$spinner = n(e.translate(e, e.opts.spinnerTpl))
              .appendTo(t.$slide)
              .hide()
              .fadeIn('fast'));
      },
      hideLoading: function(t) {
        var e = this;
        (t = t || e.current),
          t && t.$spinner && (t.$spinner.stop().remove(), delete t.$spinner);
      },
      afterLoad: function(t) {
        var e = this;
        e.isClosing ||
          ((t.isLoading = !1),
          (t.isLoaded = !0),
          e.trigger('afterLoad', t),
          e.hideLoading(t),
          !t.opts.smallBtn ||
            (t.$smallBtn && t.$smallBtn.length) ||
            (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(
              t.$content
            )),
          t.opts.protect &&
            t.$content &&
            !t.hasError &&
            (t.$content.on('contextmenu.fb', function(t) {
              return 2 == t.button && t.preventDefault(), !0;
            }),
            'image' === t.type &&
              n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),
          e.adjustCaption(t),
          e.adjustLayout(t),
          t.pos === e.currPos && e.updateCursor(),
          e.revealContent(t));
      },
      adjustCaption: function(t) {
        var e = this,
          n = t || e.current,
          o = n.opts.caption,
          a = e.$refs.caption,
          i = !1;
        n.opts.preventCaptionOverlap &&
          o &&
          o.length &&
          (n.pos !== e.currPos
            ? ((a = a
                .clone()
                .empty()
                .appendTo(a.parent())),
              a.html(o),
              (i = a.outerHeight(!0)),
              a.empty().remove())
            : e.$caption && (i = e.$caption.outerHeight(!0)),
          n.$slide.css('padding-bottom', i || ''));
      },
      adjustLayout: function(t) {
        var e,
          n,
          o,
          a,
          i = this,
          s = t || i.current;
        s.isLoaded &&
          s.opts.disableLayoutFix !== !0 &&
          (s.$content.css('margin-bottom', ''),
          s.$content.outerHeight() > s.$slide.height() + 0.5 &&
            ((o = s.$slide[0].style['padding-bottom']),
            (a = s.$slide.css('padding-bottom')),
            parseFloat(a) > 0 &&
              ((e = s.$slide[0].scrollHeight),
              s.$slide.css('padding-bottom', 0),
              Math.abs(e - s.$slide[0].scrollHeight) < 1 && (n = a),
              s.$slide.css('padding-bottom', o))),
          s.$content.css('margin-bottom', n));
      },
      revealContent: function(t) {
        var e,
          a,
          i,
          s,
          r = this,
          c = t.$slide,
          l = !1,
          d = !1,
          u = r.isMoved(t),
          f = t.isRevealed;
        return (
          (t.isRevealed = !0),
          (e = t.opts[r.firstRun ? 'animationEffect' : 'transitionEffect']),
          (i = t.opts[r.firstRun ? 'animationDuration' : 'transitionDuration']),
          (i = parseInt(t.forcedDuration === o ? i : t.forcedDuration, 10)),
          (!u && t.pos === r.currPos && i) || (e = !1),
          'zoom' === e &&
            (t.pos === r.currPos &&
            i &&
            'image' === t.type &&
            !t.hasError &&
            (d = r.getThumbPos(t))
              ? (l = r.getFitPos(t))
              : (e = 'fade')),
          'zoom' === e
            ? ((r.isAnimating = !0),
              (l.scaleX = l.width / d.width),
              (l.scaleY = l.height / d.height),
              (s = t.opts.zoomOpacity),
              'auto' == s &&
                (s = Math.abs(t.width / t.height - d.width / d.height) > 0.1),
              s && ((d.opacity = 0.1), (l.opacity = 1)),
              n.fancybox.setTranslate(
                t.$content.removeClass('fancybox-is-hidden'),
                d
              ),
              p(t.$content),
              void n.fancybox.animate(t.$content, l, i, function() {
                (r.isAnimating = !1), r.complete();
              }))
            : (r.updateSlide(t),
              e
                ? (n.fancybox.stop(c),
                  (a =
                    'fancybox-slide--' +
                    (t.pos >= r.prevPos ? 'next' : 'previous') +
                    ' fancybox-animated fancybox-fx-' +
                    e),
                  c.addClass(a).removeClass('fancybox-slide--current'),
                  t.$content.removeClass('fancybox-is-hidden'),
                  p(c),
                  'image' !== t.type && t.$content.hide().show(0),
                  void n.fancybox.animate(
                    c,
                    'fancybox-slide--current',
                    i,
                    function() {
                      c.removeClass(a).css({ transform: '', opacity: '' }),
                        t.pos === r.currPos && r.complete();
                    },
                    !0
                  ))
                : (t.$content.removeClass('fancybox-is-hidden'),
                  f ||
                    !u ||
                    'image' !== t.type ||
                    t.hasError ||
                    t.$content.hide().fadeIn('fast'),
                  void (t.pos === r.currPos && r.complete())))
        );
      },
      getThumbPos: function(t) {
        var e,
          o,
          a,
          i,
          s,
          r = !1,
          c = t.$thumb;
        return (
          !(!c || !g(c[0])) &&
          ((e = n.fancybox.getTranslate(c)),
          (o = parseFloat(c.css('border-top-width') || 0)),
          (a = parseFloat(c.css('border-right-width') || 0)),
          (i = parseFloat(c.css('border-bottom-width') || 0)),
          (s = parseFloat(c.css('border-left-width') || 0)),
          (r = {
            top: e.top + o,
            left: e.left + s,
            width: e.width - a - s,
            height: e.height - o - i,
            scaleX: 1,
            scaleY: 1,
          }),
          e.width > 0 && e.height > 0 && r)
        );
      },
      complete: function() {
        var t,
          e = this,
          o = e.current,
          a = {};
        !e.isMoved() &&
          o.isLoaded &&
          (o.isComplete ||
            ((o.isComplete = !0),
            o.$slide.siblings().trigger('onReset'),
            e.preload('inline'),
            p(o.$slide),
            o.$slide.addClass('fancybox-slide--complete'),
            n.each(e.slides, function(t, o) {
              o.pos >= e.currPos - 1 && o.pos <= e.currPos + 1
                ? (a[o.pos] = o)
                : o && (n.fancybox.stop(o.$slide), o.$slide.off().remove());
            }),
            (e.slides = a)),
          (e.isAnimating = !1),
          e.updateCursor(),
          e.trigger('afterShow'),
          o.opts.video.autoStart &&
            o.$slide
              .find('video,audio')
              .filter(':visible:first')
              .trigger('play')
              .one('ended', function() {
                this.webkitExitFullscreen && this.webkitExitFullscreen(),
                  e.next();
              }),
          o.opts.autoFocus &&
            'html' === o.contentType &&
            ((t = o.$content.find('input[autofocus]:enabled:visible:first')),
            t.length ? t.trigger('focus') : e.focus(null, !0)),
          o.$slide.scrollTop(0).scrollLeft(0));
      },
      preload: function(t) {
        var e,
          n,
          o = this;
        o.group.length < 2 ||
          ((n = o.slides[o.currPos + 1]),
          (e = o.slides[o.currPos - 1]),
          e && e.type === t && o.loadSlide(e),
          n && n.type === t && o.loadSlide(n));
      },
      focus: function(t, o) {
        var a,
          i,
          s = this,
          r = [
            'a[href]',
            'area[href]',
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            'select:not([disabled]):not([aria-hidden])',
            'textarea:not([disabled]):not([aria-hidden])',
            'button:not([disabled]):not([aria-hidden])',
            'iframe',
            'object',
            'embed',
            '[contenteditable]',
            '[tabindex]:not([tabindex^="-"])',
          ].join(',');
        s.isClosing ||
          ((a =
            !t && s.current && s.current.isComplete
              ? s.current.$slide.find(
                  '*:visible' + (o ? ':not(.fancybox-close-small)' : '')
                )
              : s.$refs.container.find('*:visible')),
          (a = a.filter(r).filter(function() {
            return (
              'hidden' !== n(this).css('visibility') &&
              !n(this).hasClass('disabled')
            );
          })),
          a.length
            ? ((i = a.index(e.activeElement)),
              t && t.shiftKey
                ? (i < 0 || 0 == i) &&
                  (t.preventDefault(), a.eq(a.length - 1).trigger('focus'))
                : (i < 0 || i == a.length - 1) &&
                  (t && t.preventDefault(), a.eq(0).trigger('focus')))
            : s.$refs.container.trigger('focus'));
      },
      activate: function() {
        var t = this;
        n('.fancybox-container').each(function() {
          var e = n(this).data('FancyBox');
          e &&
            e.id !== t.id &&
            !e.isClosing &&
            (e.trigger('onDeactivate'), e.removeEvents(), (e.isVisible = !1));
        }),
          (t.isVisible = !0),
          (t.current || t.isIdle) && (t.update(), t.updateControls()),
          t.trigger('onActivate'),
          t.addEvents();
      },
      close: function(t, e) {
        var o,
          a,
          i,
          s,
          r,
          c,
          l,
          u = this,
          f = u.current,
          h = function() {
            u.cleanUp(t);
          };
        return (
          !u.isClosing &&
          ((u.isClosing = !0),
          u.trigger('beforeClose', t) === !1
            ? ((u.isClosing = !1),
              d(function() {
                u.update();
              }),
              !1)
            : (u.removeEvents(),
              (i = f.$content),
              (o = f.opts.animationEffect),
              (a = n.isNumeric(e) ? e : o ? f.opts.animationDuration : 0),
              f.$slide.removeClass(
                'fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated'
              ),
              t !== !0 ? n.fancybox.stop(f.$slide) : (o = !1),
              f.$slide
                .siblings()
                .trigger('onReset')
                .remove(),
              a &&
                u.$refs.container
                  .removeClass('fancybox-is-open')
                  .addClass('fancybox-is-closing')
                  .css('transition-duration', a + 'ms'),
              u.hideLoading(f),
              u.hideControls(!0),
              u.updateCursor(),
              'zoom' !== o ||
                (i &&
                  a &&
                  'image' === f.type &&
                  !u.isMoved() &&
                  !f.hasError &&
                  (l = u.getThumbPos(f))) ||
                (o = 'fade'),
              'zoom' === o
                ? (n.fancybox.stop(i),
                  (s = n.fancybox.getTranslate(i)),
                  (c = {
                    top: s.top,
                    left: s.left,
                    scaleX: s.width / l.width,
                    scaleY: s.height / l.height,
                    width: l.width,
                    height: l.height,
                  }),
                  (r = f.opts.zoomOpacity),
                  'auto' == r &&
                    (r =
                      Math.abs(f.width / f.height - l.width / l.height) > 0.1),
                  r && (l.opacity = 0),
                  n.fancybox.setTranslate(i, c),
                  p(i),
                  n.fancybox.animate(i, l, a, h),
                  !0)
                : (o && a
                    ? n.fancybox.animate(
                        f.$slide
                          .addClass('fancybox-slide--previous')
                          .removeClass('fancybox-slide--current'),
                        'fancybox-animated fancybox-fx-' + o,
                        a,
                        h
                      )
                    : t === !0
                    ? setTimeout(h, a)
                    : h(),
                  !0)))
        );
      },
      cleanUp: function(e) {
        var o,
          a,
          i,
          s = this,
          r = s.current.opts.$orig;
        s.current.$slide.trigger('onReset'),
          s.$refs.container.empty().remove(),
          s.trigger('afterClose', e),
          s.current.opts.backFocus &&
            ((r && r.length && r.is(':visible')) || (r = s.$trigger),
            r &&
              r.length &&
              ((a = t.scrollX),
              (i = t.scrollY),
              r.trigger('focus'),
              n('html, body')
                .scrollTop(i)
                .scrollLeft(a))),
          (s.current = null),
          (o = n.fancybox.getInstance()),
          o
            ? o.activate()
            : (n('body').removeClass(
                'fancybox-active compensate-for-scrollbar'
              ),
              n('#fancybox-style-noscroll').remove());
      },
      trigger: function(t, e) {
        var o,
          a = Array.prototype.slice.call(arguments, 1),
          i = this,
          s = e && e.opts ? e : i.current;
        return (
          s ? a.unshift(s) : (s = i),
          a.unshift(i),
          n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, a)),
          o === !1
            ? o
            : void ('afterClose' !== t && i.$refs
                ? i.$refs.container.trigger(t + '.fb', a)
                : r.trigger(t + '.fb', a))
        );
      },
      updateControls: function() {
        var t = this,
          o = t.current,
          a = o.index,
          i = t.$refs.container,
          s = t.$refs.caption,
          r = o.opts.caption;
        o.$slide.trigger('refresh'),
          (t.$caption = r && r.length ? s.html(r) : null),
          t.hasHiddenControls || t.isIdle || t.showControls(),
          i.find('[data-fancybox-count]').html(t.group.length),
          i.find('[data-fancybox-index]').html(a + 1),
          i
            .find('[data-fancybox-prev]')
            .prop('disabled', !o.opts.loop && a <= 0),
          i
            .find('[data-fancybox-next]')
            .prop('disabled', !o.opts.loop && a >= t.group.length - 1),
          'image' === o.type
            ? i
                .find('[data-fancybox-zoom]')
                .show()
                .end()
                .find('[data-fancybox-download]')
                .attr('href', o.opts.image.src || o.src)
                .show()
            : o.opts.toolbar &&
              i.find('[data-fancybox-download],[data-fancybox-zoom]').hide(),
          n(e.activeElement).is(':hidden,[disabled]') &&
            t.$refs.container.trigger('focus');
      },
      hideControls: function(t) {
        var e = this,
          n = ['infobar', 'toolbar', 'nav'];
        (!t && e.current.opts.preventCaptionOverlap) || n.push('caption'),
          this.$refs.container.removeClass(
            n
              .map(function(t) {
                return 'fancybox-show-' + t;
              })
              .join(' ')
          ),
          (this.hasHiddenControls = !0);
      },
      showControls: function() {
        var t = this,
          e = t.current ? t.current.opts : t.opts,
          n = t.$refs.container;
        (t.hasHiddenControls = !1),
          (t.idleSecondsCounter = 0),
          n
            .toggleClass('fancybox-show-toolbar', !(!e.toolbar || !e.buttons))
            .toggleClass(
              'fancybox-show-infobar',
              !!(e.infobar && t.group.length > 1)
            )
            .toggleClass('fancybox-show-caption', !!t.$caption)
            .toggleClass(
              'fancybox-show-nav',
              !!(e.arrows && t.group.length > 1)
            )
            .toggleClass('fancybox-is-modal', !!e.modal);
      },
      toggleControls: function() {
        this.hasHiddenControls ? this.showControls() : this.hideControls();
      },
    }),
      (n.fancybox = {
        version: '3.5.2',
        defaults: i,
        getInstance: function(t) {
          var e = n(
              '.fancybox-container:not(".fancybox-is-closing"):last'
            ).data('FancyBox'),
            o = Array.prototype.slice.call(arguments, 1);
          return (
            e instanceof b &&
            ('string' === n.type(t)
              ? e[t].apply(e, o)
              : 'function' === n.type(t) && t.apply(e, o),
            e)
          );
        },
        open: function(t, e, n) {
          return new b(t, e, n);
        },
        close: function(t) {
          var e = this.getInstance();
          e && (e.close(), t === !0 && this.close(t));
        },
        destroy: function() {
          this.close(!0), r.add('body').off('click.fb-start', '**');
        },
        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ),
        use3d: (function() {
          var n = e.createElement('div');
          return (
            t.getComputedStyle &&
            t.getComputedStyle(n) &&
            t.getComputedStyle(n).getPropertyValue('transform') &&
            !(e.documentMode && e.documentMode < 11)
          );
        })(),
        getTranslate: function(t) {
          var e;
          return (
            !(!t || !t.length) &&
            ((e = t[0].getBoundingClientRect()),
            {
              top: e.top || 0,
              left: e.left || 0,
              width: e.width,
              height: e.height,
              opacity: parseFloat(t.css('opacity')),
            })
          );
        },
        setTranslate: function(t, e) {
          var n = '',
            a = {};
          if (t && e)
            return (
              (e.left === o && e.top === o) ||
                ((n =
                  (e.left === o ? t.position().left : e.left) +
                  'px, ' +
                  (e.top === o ? t.position().top : e.top) +
                  'px'),
                (n = this.use3d
                  ? 'translate3d(' + n + ', 0px)'
                  : 'translate(' + n + ')')),
              e.scaleX !== o && e.scaleY !== o
                ? (n += ' scale(' + e.scaleX + ', ' + e.scaleY + ')')
                : e.scaleX !== o && (n += ' scaleX(' + e.scaleX + ')'),
              n.length && (a.transform = n),
              e.opacity !== o && (a.opacity = e.opacity),
              e.width !== o && (a.width = e.width),
              e.height !== o && (a.height = e.height),
              t.css(a)
            );
        },
        animate: function(t, e, a, i, s) {
          var r,
            c = this;
          n.isFunction(a) && ((i = a), (a = null)),
            c.stop(t),
            (r = c.getTranslate(t)),
            t.on(f, function(l) {
              (!l ||
                !l.originalEvent ||
                (t.is(l.originalEvent.target) &&
                  'z-index' != l.originalEvent.propertyName)) &&
                (c.stop(t),
                n.isNumeric(a) && t.css('transition-duration', ''),
                n.isPlainObject(e)
                  ? e.scaleX !== o &&
                    e.scaleY !== o &&
                    c.setTranslate(t, {
                      top: e.top,
                      left: e.left,
                      width: r.width * e.scaleX,
                      height: r.height * e.scaleY,
                      scaleX: 1,
                      scaleY: 1,
                    })
                  : s !== !0 && t.removeClass(e),
                n.isFunction(i) && i(l));
            }),
            n.isNumeric(a) && t.css('transition-duration', a + 'ms'),
            n.isPlainObject(e)
              ? (e.scaleX !== o &&
                  e.scaleY !== o &&
                  (delete e.width,
                  delete e.height,
                  t.parent().hasClass('fancybox-slide--image') &&
                    t.parent().addClass('fancybox-is-scaling')),
                n.fancybox.setTranslate(t, e))
              : t.addClass(e),
            t.data(
              'timer',
              setTimeout(function() {
                t.trigger(f);
              }, a + 33)
            );
        },
        stop: function(t, e) {
          t &&
            t.length &&
            (clearTimeout(t.data('timer')),
            e && t.trigger(f),
            t.off(f).css('transition-duration', ''),
            t.parent().removeClass('fancybox-is-scaling'));
        },
      }),
      (n.fn.fancybox = function(t) {
        var e;
        return (
          (t = t || {}),
          (e = t.selector || !1),
          e
            ? n('body')
                .off('click.fb-start', e)
                .on('click.fb-start', e, { options: t }, a)
            : this.off('click.fb-start').on(
                'click.fb-start',
                { items: this, options: t },
                a
              ),
          this
        );
      }),
      r.on('click.fb-start', '[data-fancybox]', a),
      r.on('click.fb-start', '[data-fancybox-trigger]', function(t) {
        n('[data-fancybox="' + n(this).attr('data-fancybox-trigger') + '"]')
          .eq(n(this).attr('data-fancybox-index') || 0)
          .trigger('click.fb-start', { $trigger: n(this) });
      }),
      (function() {
        var t = '.fancybox-button',
          e = 'fancybox-focus',
          o = null;
        r.on('mousedown mouseup focus blur', t, function(a) {
          switch (a.type) {
            case 'mousedown':
              o = n(this);
              break;
            case 'mouseup':
              o = null;
              break;
            case 'focusin':
              n(t).removeClass(e),
                n(this).is(o) ||
                  n(this).is('[disabled]') ||
                  n(this).addClass(e);
              break;
            case 'focusout':
              n(t).removeClass(e);
          }
        });
      })();
  }
})(window, document, jQuery),
  (function(t) {
    'use strict';
    var e = {
        youtube: {
          matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
          params: {
            autoplay: 1,
            autohide: 1,
            fs: 1,
            rel: 0,
            hd: 1,
            wmode: 'transparent',
            enablejsapi: 1,
            html5: 1,
          },
          paramPlace: 8,
          type: 'iframe',
          url: '//www.youtube-nocookie.com/embed/$4',
          thumb: '//img.youtube.com/vi/$4/hqdefault.jpg',
        },
        vimeo: {
          matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
          params: {
            autoplay: 1,
            hd: 1,
            show_title: 1,
            show_byline: 1,
            show_portrait: 0,
            fullscreen: 1,
          },
          paramPlace: 3,
          type: 'iframe',
          url: '//player.vimeo.com/video/$2',
        },
        instagram: {
          matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
          type: 'image',
          url: '//$1/p/$2/media/?size=l',
        },
        gmap_place: {
          matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
          type: 'iframe',
          url: function(t) {
            return (
              '//maps.google.' +
              t[2] +
              '/?ll=' +
              (t[9]
                ? t[9] +
                  '&z=' +
                  Math.floor(t[10]) +
                  (t[12] ? t[12].replace(/^\//, '&') : '')
                : t[12] + ''
              ).replace(/\?/, '&') +
              '&output=' +
              (t[12] && t[12].indexOf('layer=c') > 0 ? 'svembed' : 'embed')
            );
          },
        },
        gmap_search: {
          matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
          type: 'iframe',
          url: function(t) {
            return (
              '//maps.google.' +
              t[2] +
              '/maps?q=' +
              t[5].replace('query=', 'q=').replace('api=1', '') +
              '&output=embed'
            );
          },
        },
      },
      n = function(e, n, o) {
        if (e)
          return (
            (o = o || ''),
            'object' === t.type(o) && (o = t.param(o, !0)),
            t.each(n, function(t, n) {
              e = e.replace('$' + t, n || '');
            }),
            o.length && (e += (e.indexOf('?') > 0 ? '&' : '?') + o),
            e
          );
      };
    t(document).on('objectNeedsType.fb', function(o, a, i) {
      var s,
        r,
        c,
        l,
        d,
        u,
        f,
        p = i.src || '',
        h = !1;
      (s = t.extend(!0, {}, e, i.opts.media)),
        t.each(s, function(e, o) {
          if ((c = p.match(o.matcher))) {
            if (
              ((h = o.type), (f = e), (u = {}), o.paramPlace && c[o.paramPlace])
            ) {
              (d = c[o.paramPlace]),
                '?' == d[0] && (d = d.substring(1)),
                (d = d.split('&'));
              for (var a = 0; a < d.length; ++a) {
                var s = d[a].split('=', 2);
                2 == s.length &&
                  (u[s[0]] = decodeURIComponent(s[1].replace(/\+/g, ' ')));
              }
            }
            return (
              (l = t.extend(!0, {}, o.params, i.opts[e], u)),
              (p =
                'function' === t.type(o.url)
                  ? o.url.call(this, c, l, i)
                  : n(o.url, c, l)),
              (r =
                'function' === t.type(o.thumb)
                  ? o.thumb.call(this, c, l, i)
                  : n(o.thumb, c)),
              'youtube' === e
                ? (p = p.replace(/&t=((\d+)m)?(\d+)s/, function(t, e, n, o) {
                    return (
                      '&start=' +
                      ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10))
                    );
                  }))
                : 'vimeo' === e && (p = p.replace('&%23', '#')),
              !1
            );
          }
        }),
        h
          ? (i.opts.thumb ||
              (i.opts.$thumb && i.opts.$thumb.length) ||
              (i.opts.thumb = r),
            'iframe' === h &&
              (i.opts = t.extend(!0, i.opts, {
                iframe: { preload: !1, attr: { scrolling: 'no' } },
              })),
            t.extend(i, {
              type: h,
              src: p,
              origSrc: i.src,
              contentSource: f,
              contentType:
                'image' === h
                  ? 'image'
                  : 'gmap_place' == f || 'gmap_search' == f
                  ? 'map'
                  : 'video',
            }))
          : p && (i.type = i.opts.defaultType);
    });
    var o = {
      youtube: {
        src: 'https://www.youtube.com/iframe_api',
        class: 'YT',
        loading: !1,
        loaded: !1,
      },
      vimeo: {
        src: 'https://player.vimeo.com/api/player.js',
        class: 'Vimeo',
        loading: !1,
        loaded: !1,
      },
      load: function(t) {
        var e,
          n = this;
        return this[t].loaded
          ? void setTimeout(function() {
              n.done(t);
            })
          : void (
              this[t].loading ||
              ((this[t].loading = !0),
              (e = document.createElement('script')),
              (e.type = 'text/javascript'),
              (e.src = this[t].src),
              'youtube' === t
                ? (window.onYouTubeIframeAPIReady = function() {
                    (n[t].loaded = !0), n.done(t);
                  })
                : (e.onload = function() {
                    (n[t].loaded = !0), n.done(t);
                  }),
              document.body.appendChild(e))
            );
      },
      done: function(e) {
        var n, o, a;
        'youtube' === e && delete window.onYouTubeIframeAPIReady,
          (n = t.fancybox.getInstance()),
          n &&
            ((o = n.current.$content.find('iframe')),
            'youtube' === e && void 0 !== YT && YT
              ? (a = new YT.Player(o.attr('id'), {
                  events: {
                    onStateChange: function(t) {
                      0 == t.data && n.next();
                    },
                  },
                }))
              : 'vimeo' === e &&
                void 0 !== Vimeo &&
                Vimeo &&
                ((a = new Vimeo.Player(o)),
                a.on('ended', function() {
                  n.next();
                })));
      },
    };
    t(document).on({
      'afterShow.fb': function(t, e, n) {
        e.group.length > 1 &&
          ('youtube' === n.contentSource || 'vimeo' === n.contentSource) &&
          o.load(n.contentSource);
      },
    });
  })(jQuery),
  (function(t, e, n) {
    'use strict';
    var o = (function() {
        return (
          t.requestAnimationFrame ||
          t.webkitRequestAnimationFrame ||
          t.mozRequestAnimationFrame ||
          t.oRequestAnimationFrame ||
          function(e) {
            return t.setTimeout(e, 1e3 / 60);
          }
        );
      })(),
      a = (function() {
        return (
          t.cancelAnimationFrame ||
          t.webkitCancelAnimationFrame ||
          t.mozCancelAnimationFrame ||
          t.oCancelAnimationFrame ||
          function(e) {
            t.clearTimeout(e);
          }
        );
      })(),
      i = function(e) {
        var n = [];
        (e = e.originalEvent || e || t.e),
          (e =
            e.touches && e.touches.length
              ? e.touches
              : e.changedTouches && e.changedTouches.length
              ? e.changedTouches
              : [e]);
        for (var o in e)
          e[o].pageX
            ? n.push({ x: e[o].pageX, y: e[o].pageY })
            : e[o].clientX && n.push({ x: e[o].clientX, y: e[o].clientY });
        return n;
      },
      s = function(t, e, n) {
        return e && t
          ? 'x' === n
            ? t.x - e.x
            : 'y' === n
            ? t.y - e.y
            : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
          : 0;
      },
      r = function(t) {
        if (
          t.is(
            'a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe'
          ) ||
          n.isFunction(t.get(0).onclick) ||
          t.data('selectable')
        )
          return !0;
        for (var e = 0, o = t[0].attributes, a = o.length; e < a; e++)
          if ('data-fancybox-' === o[e].nodeName.substr(0, 14)) return !0;
        return !1;
      },
      c = function(e) {
        var n = t.getComputedStyle(e)['overflow-y'],
          o = t.getComputedStyle(e)['overflow-x'],
          a =
            ('scroll' === n || 'auto' === n) && e.scrollHeight > e.clientHeight,
          i = ('scroll' === o || 'auto' === o) && e.scrollWidth > e.clientWidth;
        return a || i;
      },
      l = function(t) {
        for (var e = !1; ; ) {
          if ((e = c(t.get(0)))) break;
          if (
            ((t = t.parent()),
            !t.length || t.hasClass('fancybox-stage') || t.is('body'))
          )
            break;
        }
        return e;
      },
      d = function(t) {
        var e = this;
        (e.instance = t),
          (e.$bg = t.$refs.bg),
          (e.$stage = t.$refs.stage),
          (e.$container = t.$refs.container),
          e.destroy(),
          e.$container.on(
            'touchstart.fb.touch mousedown.fb.touch',
            n.proxy(e, 'ontouchstart')
          );
      };
    (d.prototype.destroy = function() {
      var t = this;
      t.$container.off('.fb.touch'),
        n(e).off('.fb.touch'),
        t.requestId && (a(t.requestId), (t.requestId = null)),
        t.tapped && (clearTimeout(t.tapped), (t.tapped = null));
    }),
      (d.prototype.ontouchstart = function(o) {
        var a = this,
          c = n(o.target),
          d = a.instance,
          u = d.current,
          f = u.$slide,
          p = u.$content,
          h = 'touchstart' == o.type;
        if (
          (h && a.$container.off('mousedown.fb.touch'),
          (!o.originalEvent || 2 != o.originalEvent.button) &&
            f.length &&
            c.length &&
            !r(c) &&
            !r(c.parent()) &&
            (c.is('img') ||
              !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left)))
        ) {
          if (!u || d.isAnimating || u.$slide.hasClass('fancybox-animated'))
            return o.stopPropagation(), void o.preventDefault();
          (a.realPoints = a.startPoints = i(o)),
            a.startPoints.length &&
              (u.touch && o.stopPropagation(),
              (a.startEvent = o),
              (a.canTap = !0),
              (a.$target = c),
              (a.$content = p),
              (a.opts = u.opts.touch),
              (a.isPanning = !1),
              (a.isSwiping = !1),
              (a.isZooming = !1),
              (a.isScrolling = !1),
              (a.canPan = d.canPan()),
              (a.startTime = new Date().getTime()),
              (a.distanceX = a.distanceY = a.distance = 0),
              (a.canvasWidth = Math.round(f[0].clientWidth)),
              (a.canvasHeight = Math.round(f[0].clientHeight)),
              (a.contentLastPos = null),
              (a.contentStartPos = n.fancybox.getTranslate(a.$content) || {
                top: 0,
                left: 0,
              }),
              (a.sliderStartPos = n.fancybox.getTranslate(f)),
              (a.stagePos = n.fancybox.getTranslate(d.$refs.stage)),
              (a.sliderStartPos.top -= a.stagePos.top),
              (a.sliderStartPos.left -= a.stagePos.left),
              (a.contentStartPos.top -= a.stagePos.top),
              (a.contentStartPos.left -= a.stagePos.left),
              n(e)
                .off('.fb.touch')
                .on(
                  h
                    ? 'touchend.fb.touch touchcancel.fb.touch'
                    : 'mouseup.fb.touch mouseleave.fb.touch',
                  n.proxy(a, 'ontouchend')
                )
                .on(
                  h ? 'touchmove.fb.touch' : 'mousemove.fb.touch',
                  n.proxy(a, 'ontouchmove')
                ),
              n.fancybox.isMobile &&
                e.addEventListener('scroll', a.onscroll, !0),
              (((a.opts || a.canPan) &&
                (c.is(a.$stage) || a.$stage.find(c).length)) ||
                (c.is('.fancybox-image') && o.preventDefault(),
                n.fancybox.isMobile && c.hasClass('fancybox-caption'))) &&
                ((a.isScrollable = l(c) || l(c.parent())),
                (n.fancybox.isMobile && a.isScrollable) || o.preventDefault(),
                (1 === a.startPoints.length || u.hasError) &&
                  (a.canPan
                    ? (n.fancybox.stop(a.$content), (a.isPanning = !0))
                    : (a.isSwiping = !0),
                  a.$container.addClass('fancybox-is-grabbing')),
                2 === a.startPoints.length &&
                  'image' === u.type &&
                  (u.isLoaded || u.$ghost) &&
                  ((a.canTap = !1),
                  (a.isSwiping = !1),
                  (a.isPanning = !1),
                  (a.isZooming = !0),
                  n.fancybox.stop(a.$content),
                  (a.centerPointStartX =
                    0.5 * (a.startPoints[0].x + a.startPoints[1].x) -
                    n(t).scrollLeft()),
                  (a.centerPointStartY =
                    0.5 * (a.startPoints[0].y + a.startPoints[1].y) -
                    n(t).scrollTop()),
                  (a.percentageOfImageAtPinchPointX =
                    (a.centerPointStartX - a.contentStartPos.left) /
                    a.contentStartPos.width),
                  (a.percentageOfImageAtPinchPointY =
                    (a.centerPointStartY - a.contentStartPos.top) /
                    a.contentStartPos.height),
                  (a.startDistanceBetweenFingers = s(
                    a.startPoints[0],
                    a.startPoints[1]
                  )))));
        }
      }),
      (d.prototype.onscroll = function(t) {
        var n = this;
        (n.isScrolling = !0), e.removeEventListener('scroll', n.onscroll, !0);
      }),
      (d.prototype.ontouchmove = function(t) {
        var e = this;
        return void 0 !== t.originalEvent.buttons &&
          0 === t.originalEvent.buttons
          ? void e.ontouchend(t)
          : e.isScrolling
          ? void (e.canTap = !1)
          : ((e.newPoints = i(t)),
            void (
              (e.opts || e.canPan) &&
              e.newPoints.length &&
              e.newPoints.length &&
              ((e.isSwiping && e.isSwiping === !0) || t.preventDefault(),
              (e.distanceX = s(e.newPoints[0], e.startPoints[0], 'x')),
              (e.distanceY = s(e.newPoints[0], e.startPoints[0], 'y')),
              (e.distance = s(e.newPoints[0], e.startPoints[0])),
              e.distance > 0 &&
                (e.isSwiping
                  ? e.onSwipe(t)
                  : e.isPanning
                  ? e.onPan()
                  : e.isZooming && e.onZoom()))
            ));
      }),
      (d.prototype.onSwipe = function(e) {
        var i,
          s = this,
          r = s.instance,
          c = s.isSwiping,
          l = s.sliderStartPos.left || 0;
        if (c !== !0)
          'x' == c &&
            (s.distanceX > 0 &&
            (s.instance.group.length < 2 ||
              (0 === s.instance.current.index && !s.instance.current.opts.loop))
              ? (l += Math.pow(s.distanceX, 0.8))
              : s.distanceX < 0 &&
                (s.instance.group.length < 2 ||
                  (s.instance.current.index === s.instance.group.length - 1 &&
                    !s.instance.current.opts.loop))
              ? (l -= Math.pow(-s.distanceX, 0.8))
              : (l += s.distanceX)),
            (s.sliderLastPos = {
              top: 'x' == c ? 0 : s.sliderStartPos.top + s.distanceY,
              left: l,
            }),
            s.requestId && (a(s.requestId), (s.requestId = null)),
            (s.requestId = o(function() {
              s.sliderLastPos &&
                (n.each(s.instance.slides, function(t, e) {
                  var o = e.pos - s.instance.currPos;
                  n.fancybox.setTranslate(e.$slide, {
                    top: s.sliderLastPos.top,
                    left:
                      s.sliderLastPos.left +
                      o * s.canvasWidth +
                      o * e.opts.gutter,
                  });
                }),
                s.$container.addClass('fancybox-is-sliding'));
            }));
        else if (Math.abs(s.distance) > 10) {
          if (
            ((s.canTap = !1),
            r.group.length < 2 && s.opts.vertical
              ? (s.isSwiping = 'y')
              : r.isDragging ||
                s.opts.vertical === !1 ||
                ('auto' === s.opts.vertical && n(t).width() > 800)
              ? (s.isSwiping = 'x')
              : ((i = Math.abs(
                  (180 * Math.atan2(s.distanceY, s.distanceX)) / Math.PI
                )),
                (s.isSwiping = i > 45 && i < 135 ? 'y' : 'x')),
            'y' === s.isSwiping && n.fancybox.isMobile && s.isScrollable)
          )
            return void (s.isScrolling = !0);
          (r.isDragging = s.isSwiping),
            (s.startPoints = s.newPoints),
            n.each(r.slides, function(t, e) {
              var o, a;
              n.fancybox.stop(e.$slide),
                (o = n.fancybox.getTranslate(e.$slide)),
                (a = n.fancybox.getTranslate(r.$refs.stage)),
                e.$slide
                  .css({
                    transform: '',
                    opacity: '',
                    'transition-duration': '',
                  })
                  .removeClass('fancybox-animated')
                  .removeClass(function(t, e) {
                    return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(' ');
                  }),
                e.pos === r.current.pos &&
                  ((s.sliderStartPos.top = o.top - a.top),
                  (s.sliderStartPos.left = o.left - a.left)),
                n.fancybox.setTranslate(e.$slide, {
                  top: o.top - a.top,
                  left: o.left - a.left,
                });
            }),
            r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop();
        }
      }),
      (d.prototype.onPan = function() {
        var t = this;
        return s(t.newPoints[0], t.realPoints[0]) <
          (n.fancybox.isMobile ? 10 : 5)
          ? void (t.startPoints = t.newPoints)
          : ((t.canTap = !1),
            (t.contentLastPos = t.limitMovement()),
            t.requestId && a(t.requestId),
            void (t.requestId = o(function() {
              n.fancybox.setTranslate(t.$content, t.contentLastPos);
            })));
      }),
      (d.prototype.limitMovement = function() {
        var t,
          e,
          n,
          o,
          a,
          i,
          s = this,
          r = s.canvasWidth,
          c = s.canvasHeight,
          l = s.distanceX,
          d = s.distanceY,
          u = s.contentStartPos,
          f = u.left,
          p = u.top,
          h = u.width,
          g = u.height;
        return (
          (a = h > r ? f + l : f),
          (i = p + d),
          (t = Math.max(0, 0.5 * r - 0.5 * h)),
          (e = Math.max(0, 0.5 * c - 0.5 * g)),
          (n = Math.min(r - h, 0.5 * r - 0.5 * h)),
          (o = Math.min(c - g, 0.5 * c - 0.5 * g)),
          l > 0 && a > t && (a = t - 1 + Math.pow(-t + f + l, 0.8) || 0),
          l < 0 && a < n && (a = n + 1 - Math.pow(n - f - l, 0.8) || 0),
          d > 0 && i > e && (i = e - 1 + Math.pow(-e + p + d, 0.8) || 0),
          d < 0 && i < o && (i = o + 1 - Math.pow(o - p - d, 0.8) || 0),
          { top: i, left: a }
        );
      }),
      (d.prototype.limitPosition = function(t, e, n, o) {
        var a = this,
          i = a.canvasWidth,
          s = a.canvasHeight;
        return (
          n > i
            ? ((t = t > 0 ? 0 : t), (t = t < i - n ? i - n : t))
            : (t = Math.max(0, i / 2 - n / 2)),
          o > s
            ? ((e = e > 0 ? 0 : e), (e = e < s - o ? s - o : e))
            : (e = Math.max(0, s / 2 - o / 2)),
          { top: e, left: t }
        );
      }),
      (d.prototype.onZoom = function() {
        var e = this,
          i = e.contentStartPos,
          r = i.width,
          c = i.height,
          l = i.left,
          d = i.top,
          u = s(e.newPoints[0], e.newPoints[1]),
          f = u / e.startDistanceBetweenFingers,
          p = Math.floor(r * f),
          h = Math.floor(c * f),
          g = (r - p) * e.percentageOfImageAtPinchPointX,
          b = (c - h) * e.percentageOfImageAtPinchPointY,
          m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
          v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
          y = m - e.centerPointStartX,
          x = v - e.centerPointStartY,
          w = l + (g + y),
          $ = d + (b + x),
          S = { top: $, left: w, scaleX: f, scaleY: f };
        (e.canTap = !1),
          (e.newWidth = p),
          (e.newHeight = h),
          (e.contentLastPos = S),
          e.requestId && a(e.requestId),
          (e.requestId = o(function() {
            n.fancybox.setTranslate(e.$content, e.contentLastPos);
          }));
      }),
      (d.prototype.ontouchend = function(t) {
        var o = this,
          s = o.isSwiping,
          r = o.isPanning,
          c = o.isZooming,
          l = o.isScrolling;
        return (
          (o.endPoints = i(t)),
          (o.dMs = Math.max(new Date().getTime() - o.startTime, 1)),
          o.$container.removeClass('fancybox-is-grabbing'),
          n(e).off('.fb.touch'),
          e.removeEventListener('scroll', o.onscroll, !0),
          o.requestId && (a(o.requestId), (o.requestId = null)),
          (o.isSwiping = !1),
          (o.isPanning = !1),
          (o.isZooming = !1),
          (o.isScrolling = !1),
          (o.instance.isDragging = !1),
          o.canTap
            ? o.onTap(t)
            : ((o.speed = 100),
              (o.velocityX = (o.distanceX / o.dMs) * 0.5),
              (o.velocityY = (o.distanceY / o.dMs) * 0.5),
              void (r
                ? o.endPanning()
                : c
                ? o.endZooming()
                : o.endSwiping(s, l)))
        );
      }),
      (d.prototype.endSwiping = function(t, e) {
        var o = this,
          a = !1,
          i = o.instance.group.length,
          s = Math.abs(o.distanceX),
          r = 'x' == t && i > 1 && ((o.dMs > 130 && s > 10) || s > 50),
          c = 300;
        (o.sliderLastPos = null),
          'y' == t && !e && Math.abs(o.distanceY) > 50
            ? (n.fancybox.animate(
                o.instance.current.$slide,
                {
                  top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY,
                  opacity: 0,
                },
                200
              ),
              (a = o.instance.close(!0, 250)))
            : r && o.distanceX > 0
            ? (a = o.instance.previous(c))
            : r && o.distanceX < 0 && (a = o.instance.next(c)),
          a !== !1 || ('x' != t && 'y' != t) || o.instance.centerSlide(200),
          o.$container.removeClass('fancybox-is-sliding');
      }),
      (d.prototype.endPanning = function() {
        var t,
          e,
          o,
          a = this;
        a.contentLastPos &&
          (a.opts.momentum === !1 || a.dMs > 350
            ? ((t = a.contentLastPos.left), (e = a.contentLastPos.top))
            : ((t = a.contentLastPos.left + 500 * a.velocityX),
              (e = a.contentLastPos.top + 500 * a.velocityY)),
          (o = a.limitPosition(
            t,
            e,
            a.contentStartPos.width,
            a.contentStartPos.height
          )),
          (o.width = a.contentStartPos.width),
          (o.height = a.contentStartPos.height),
          n.fancybox.animate(a.$content, o, 330));
      }),
      (d.prototype.endZooming = function() {
        var t,
          e,
          o,
          a,
          i = this,
          s = i.instance.current,
          r = i.newWidth,
          c = i.newHeight;
        i.contentLastPos &&
          ((t = i.contentLastPos.left),
          (e = i.contentLastPos.top),
          (a = { top: e, left: t, width: r, height: c, scaleX: 1, scaleY: 1 }),
          n.fancybox.setTranslate(i.$content, a),
          r < i.canvasWidth && c < i.canvasHeight
            ? i.instance.scaleToFit(150)
            : r > s.width || c > s.height
            ? i.instance.scaleToActual(
                i.centerPointStartX,
                i.centerPointStartY,
                150
              )
            : ((o = i.limitPosition(t, e, r, c)),
              n.fancybox.animate(i.$content, o, 150)));
      }),
      (d.prototype.onTap = function(e) {
        var o,
          a = this,
          s = n(e.target),
          r = a.instance,
          c = r.current,
          l = (e && i(e)) || a.startPoints,
          d = l[0] ? l[0].x - n(t).scrollLeft() - a.stagePos.left : 0,
          u = l[0] ? l[0].y - n(t).scrollTop() - a.stagePos.top : 0,
          f = function(t) {
            var o = c.opts[t];
            if ((n.isFunction(o) && (o = o.apply(r, [c, e])), o))
              switch (o) {
                case 'close':
                  r.close(a.startEvent);
                  break;
                case 'toggleControls':
                  r.toggleControls();
                  break;
                case 'next':
                  r.next();
                  break;
                case 'nextOrClose':
                  r.group.length > 1 ? r.next() : r.close(a.startEvent);
                  break;
                case 'zoom':
                  'image' == c.type &&
                    (c.isLoaded || c.$ghost) &&
                    (r.canPan()
                      ? r.scaleToFit()
                      : r.isScaledDown()
                      ? r.scaleToActual(d, u)
                      : r.group.length < 2 && r.close(a.startEvent));
              }
          };
        if (
          (!e.originalEvent || 2 != e.originalEvent.button) &&
          (s.is('img') || !(d > s[0].clientWidth + s.offset().left))
        ) {
          if (
            s.is(
              '.fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container'
            )
          )
            o = 'Outside';
          else if (s.is('.fancybox-slide')) o = 'Slide';
          else {
            if (
              !r.current.$content ||
              !r.current.$content
                .find(s)
                .addBack()
                .filter(s).length
            )
              return;
            o = 'Content';
          }
          if (a.tapped) {
            if (
              (clearTimeout(a.tapped),
              (a.tapped = null),
              Math.abs(d - a.tapX) > 50 || Math.abs(u - a.tapY) > 50)
            )
              return this;
            f('dblclick' + o);
          } else
            (a.tapX = d),
              (a.tapY = u),
              c.opts['dblclick' + o] &&
              c.opts['dblclick' + o] !== c.opts['click' + o]
                ? (a.tapped = setTimeout(function() {
                    (a.tapped = null), r.isAnimating || f('click' + o);
                  }, 500))
                : f('click' + o);
          return this;
        }
      }),
      n(e)
        .on('onActivate.fb', function(t, e) {
          e && !e.Guestures && (e.Guestures = new d(e));
        })
        .on('beforeClose.fb', function(t, e) {
          e && e.Guestures && e.Guestures.destroy();
        });
  })(window, document, jQuery),
  (function(t, e) {
    'use strict';
    e.extend(!0, e.fancybox.defaults, {
      btnTpl: {
        slideShow:
          '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>',
      },
      slideShow: { autoStart: !1, speed: 3e3, progress: !0 },
    });
    var n = function(t) {
      (this.instance = t), this.init();
    };
    e.extend(n.prototype, {
      timer: null,
      isActive: !1,
      $button: null,
      init: function() {
        var t = this,
          n = t.instance,
          o = n.group[n.currIndex].opts.slideShow;
        (t.$button = n.$refs.toolbar
          .find('[data-fancybox-play]')
          .on('click', function() {
            t.toggle();
          })),
          n.group.length < 2 || !o
            ? t.$button.hide()
            : o.progress &&
              (t.$progress = e(
                '<div class="fancybox-progress"></div>'
              ).appendTo(n.$refs.inner));
      },
      set: function(t) {
        var n = this,
          o = n.instance,
          a = o.current;
        a && (t === !0 || a.opts.loop || o.currIndex < o.group.length - 1)
          ? n.isActive &&
            'video' !== a.contentType &&
            (n.$progress &&
              e.fancybox.animate(
                n.$progress.show(),
                { scaleX: 1 },
                a.opts.slideShow.speed
              ),
            (n.timer = setTimeout(function() {
              o.current.opts.loop || o.current.index != o.group.length - 1
                ? o.next()
                : o.jumpTo(0);
            }, a.opts.slideShow.speed)))
          : (n.stop(), (o.idleSecondsCounter = 0), o.showControls());
      },
      clear: function() {
        var t = this;
        clearTimeout(t.timer),
          (t.timer = null),
          t.$progress && t.$progress.removeAttr('style').hide();
      },
      start: function() {
        var t = this,
          e = t.instance.current;
        e &&
          (t.$button
            .attr(
              'title',
              (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP
            )
            .removeClass('fancybox-button--play')
            .addClass('fancybox-button--pause'),
          (t.isActive = !0),
          e.isComplete && t.set(!0),
          t.instance.trigger('onSlideShowChange', !0));
      },
      stop: function() {
        var t = this,
          e = t.instance.current;
        t.clear(),
          t.$button
            .attr(
              'title',
              (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START
            )
            .removeClass('fancybox-button--pause')
            .addClass('fancybox-button--play'),
          (t.isActive = !1),
          t.instance.trigger('onSlideShowChange', !1),
          t.$progress && t.$progress.removeAttr('style').hide();
      },
      toggle: function() {
        var t = this;
        t.isActive ? t.stop() : t.start();
      },
    }),
      e(t).on({
        'onInit.fb': function(t, e) {
          e && !e.SlideShow && (e.SlideShow = new n(e));
        },
        'beforeShow.fb': function(t, e, n, o) {
          var a = e && e.SlideShow;
          o
            ? a && n.opts.slideShow.autoStart && a.start()
            : a && a.isActive && a.clear();
        },
        'afterShow.fb': function(t, e, n) {
          var o = e && e.SlideShow;
          o && o.isActive && o.set();
        },
        'afterKeydown.fb': function(n, o, a, i, s) {
          var r = o && o.SlideShow;
          !r ||
            !a.opts.slideShow ||
            (80 !== s && 32 !== s) ||
            e(t.activeElement).is('button,a,input') ||
            (i.preventDefault(), r.toggle());
        },
        'beforeClose.fb onDeactivate.fb': function(t, e) {
          var n = e && e.SlideShow;
          n && n.stop();
        },
      }),
      e(t).on('visibilitychange', function() {
        var n = e.fancybox.getInstance(),
          o = n && n.SlideShow;
        o && o.isActive && (t.hidden ? o.clear() : o.set());
      });
  })(document, jQuery),
  (function(t, e) {
    'use strict';
    var n = (function() {
      for (
        var e = [
            [
              'requestFullscreen',
              'exitFullscreen',
              'fullscreenElement',
              'fullscreenEnabled',
              'fullscreenchange',
              'fullscreenerror',
            ],
            [
              'webkitRequestFullscreen',
              'webkitExitFullscreen',
              'webkitFullscreenElement',
              'webkitFullscreenEnabled',
              'webkitfullscreenchange',
              'webkitfullscreenerror',
            ],
            [
              'webkitRequestFullScreen',
              'webkitCancelFullScreen',
              'webkitCurrentFullScreenElement',
              'webkitCancelFullScreen',
              'webkitfullscreenchange',
              'webkitfullscreenerror',
            ],
            [
              'mozRequestFullScreen',
              'mozCancelFullScreen',
              'mozFullScreenElement',
              'mozFullScreenEnabled',
              'mozfullscreenchange',
              'mozfullscreenerror',
            ],
            [
              'msRequestFullscreen',
              'msExitFullscreen',
              'msFullscreenElement',
              'msFullscreenEnabled',
              'MSFullscreenChange',
              'MSFullscreenError',
            ],
          ],
          n = {},
          o = 0;
        o < e.length;
        o++
      ) {
        var a = e[o];
        if (a && a[1] in t) {
          for (var i = 0; i < a.length; i++) n[e[0][i]] = a[i];
          return n;
        }
      }
      return !1;
    })();
    if (n) {
      var o = {
        request: function(e) {
          (e = e || t.documentElement),
            e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);
        },
        exit: function() {
          t[n.exitFullscreen]();
        },
        toggle: function(e) {
          (e = e || t.documentElement),
            this.isFullscreen() ? this.exit() : this.request(e);
        },
        isFullscreen: function() {
          return Boolean(t[n.fullscreenElement]);
        },
        enabled: function() {
          return Boolean(t[n.fullscreenEnabled]);
        },
      };
      e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
          fullScreen:
            '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>',
        },
        fullScreen: { autoStart: !1 },
      }),
        e(t).on(n.fullscreenchange, function() {
          var t = o.isFullscreen(),
            n = e.fancybox.getInstance();
          n &&
            (n.current &&
              'image' === n.current.type &&
              n.isAnimating &&
              (n.current.$content.css('transition', 'none'),
              (n.isAnimating = !1),
              n.update(!0, !0, 0)),
            n.trigger('onFullscreenChange', t),
            n.$refs.container.toggleClass('fancybox-is-fullscreen', t),
            n.$refs.toolbar
              .find('[data-fancybox-fullscreen]')
              .toggleClass('fancybox-button--fsenter', !t)
              .toggleClass('fancybox-button--fsexit', t));
        });
    }
    e(t).on({
      'onInit.fb': function(t, e) {
        var a;
        return n
          ? void (e && e.group[e.currIndex].opts.fullScreen
              ? ((a = e.$refs.container),
                a.on(
                  'click.fb-fullscreen',
                  '[data-fancybox-fullscreen]',
                  function(t) {
                    t.stopPropagation(), t.preventDefault(), o.toggle();
                  }
                ),
                e.opts.fullScreen &&
                  e.opts.fullScreen.autoStart === !0 &&
                  o.request(),
                (e.FullScreen = o))
              : e && e.$refs.toolbar.find('[data-fancybox-fullscreen]').hide())
          : void e.$refs.toolbar.find('[data-fancybox-fullscreen]').remove();
      },
      'afterKeydown.fb': function(t, e, n, o, a) {
        e &&
          e.FullScreen &&
          70 === a &&
          (o.preventDefault(), e.FullScreen.toggle());
      },
      'beforeClose.fb': function(t, e) {
        e &&
          e.FullScreen &&
          e.$refs.container.hasClass('fancybox-is-fullscreen') &&
          o.exit();
      },
    });
  })(document, jQuery),
  (function(t, e) {
    'use strict';
    var n = 'fancybox-thumbs',
      o = n + '-active';
    e.fancybox.defaults = e.extend(
      !0,
      {
        btnTpl: {
          thumbs:
            '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>',
        },
        thumbs: {
          autoStart: !1,
          hideOnClose: !0,
          parentEl: '.fancybox-container',
          axis: 'y',
        },
      },
      e.fancybox.defaults
    );
    var a = function(t) {
      this.init(t);
    };
    e.extend(a.prototype, {
      $button: null,
      $grid: null,
      $list: null,
      isVisible: !1,
      isActive: !1,
      init: function(t) {
        var e = this,
          n = t.group,
          o = 0;
        (e.instance = t),
          (e.opts = n[t.currIndex].opts.thumbs),
          (t.Thumbs = e),
          (e.$button = t.$refs.toolbar.find('[data-fancybox-thumbs]'));
        for (
          var a = 0, i = n.length;
          a < i && (n[a].thumb && o++, !(o > 1));
          a++
        );
        o > 1 && e.opts
          ? (e.$button.removeAttr('style').on('click', function() {
              e.toggle();
            }),
            (e.isActive = !0))
          : e.$button.hide();
      },
      create: function() {
        var t,
          o = this,
          a = o.instance,
          i = o.opts.parentEl,
          s = [];
        o.$grid ||
          ((o.$grid = e(
            '<div class="' + n + ' ' + n + '-' + o.opts.axis + '"></div>'
          ).appendTo(
            a.$refs.container
              .find(i)
              .addBack()
              .filter(i)
          )),
          o.$grid.on('click', 'a', function() {
            a.jumpTo(e(this).attr('data-index'));
          })),
          o.$list ||
            (o.$list = e('<div class="' + n + '__list">').appendTo(o.$grid)),
          e.each(a.group, function(e, n) {
            (t = n.thumb),
              t || 'image' !== n.type || (t = n.src),
              s.push(
                '<a href="javascript:;" tabindex="0" data-index="' +
                  e +
                  '"' +
                  (t && t.length
                    ? ' style="background-image:url(' + t + ')"'
                    : 'class="fancybox-thumbs-missing"') +
                  '></a>'
              );
          }),
          (o.$list[0].innerHTML = s.join('')),
          'x' === o.opts.axis &&
            o.$list.width(
              parseInt(o.$grid.css('padding-right'), 10) +
                a.group.length *
                  o.$list
                    .children()
                    .eq(0)
                    .outerWidth(!0)
            );
      },
      focus: function(t) {
        var e,
          n,
          a = this,
          i = a.$list,
          s = a.$grid;
        a.instance.current &&
          ((e = i
            .children()
            .removeClass(o)
            .filter('[data-index="' + a.instance.current.index + '"]')
            .addClass(o)),
          (n = e.position()),
          'y' === a.opts.axis &&
          (n.top < 0 || n.top > i.height() - e.outerHeight())
            ? i.stop().animate({ scrollTop: i.scrollTop() + n.top }, t)
            : 'x' === a.opts.axis &&
              (n.left < s.scrollLeft() ||
                n.left > s.scrollLeft() + (s.width() - e.outerWidth())) &&
              i
                .parent()
                .stop()
                .animate({ scrollLeft: n.left }, t));
      },
      update: function() {
        var t = this;
        t.instance.$refs.container.toggleClass(
          'fancybox-show-thumbs',
          this.isVisible
        ),
          t.isVisible
            ? (t.$grid || t.create(),
              t.instance.trigger('onThumbsShow'),
              t.focus(0))
            : t.$grid && t.instance.trigger('onThumbsHide'),
          t.instance.update();
      },
      hide: function() {
        (this.isVisible = !1), this.update();
      },
      show: function() {
        (this.isVisible = !0), this.update();
      },
      toggle: function() {
        (this.isVisible = !this.isVisible), this.update();
      },
    }),
      e(t).on({
        'onInit.fb': function(t, e) {
          var n;
          e &&
            !e.Thumbs &&
            ((n = new a(e)), n.isActive && n.opts.autoStart === !0 && n.show());
        },
        'beforeShow.fb': function(t, e, n, o) {
          var a = e && e.Thumbs;
          a && a.isVisible && a.focus(o ? 0 : 250);
        },
        'afterKeydown.fb': function(t, e, n, o, a) {
          var i = e && e.Thumbs;
          i && i.isActive && 71 === a && (o.preventDefault(), i.toggle());
        },
        'beforeClose.fb': function(t, e) {
          var n = e && e.Thumbs;
          n && n.isVisible && n.opts.hideOnClose !== !1 && n.$grid.hide();
        },
      });
  })(document, jQuery),
  (function(t, e) {
    'use strict';
    function n(t) {
      var e = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;',
        '`': '&#x60;',
        '=': '&#x3D;',
      };
      return String(t).replace(/[&<>"'`=\/]/g, function(t) {
        return e[t];
      });
    }
    e.extend(!0, e.fancybox.defaults, {
      btnTpl: {
        share:
          '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>',
      },
      share: {
        url: function(t, e) {
          return (
            (!t.currentHash &&
              'inline' !== e.type &&
              'html' !== e.type &&
              (e.origSrc || e.src)) ||
            window.location
          );
        },
        tpl:
          '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>',
      },
    }),
      e(t).on('click', '[data-fancybox-share]', function() {
        var t,
          o,
          a = e.fancybox.getInstance(),
          i = a.current || null;
        i &&
          ('function' === e.type(i.opts.share.url) &&
            (t = i.opts.share.url.apply(i, [a, i])),
          (o = i.opts.share.tpl
            .replace(
              /\{\{media\}\}/g,
              'image' === i.type ? encodeURIComponent(i.src) : ''
            )
            .replace(/\{\{url\}\}/g, encodeURIComponent(t))
            .replace(/\{\{url_raw\}\}/g, n(t))
            .replace(
              /\{\{descr\}\}/g,
              a.$caption ? encodeURIComponent(a.$caption.text()) : ''
            )),
          e.fancybox.open({
            src: a.translate(a, o),
            type: 'html',
            opts: {
              touch: !1,
              animationEffect: !1,
              afterLoad: function(t, e) {
                a.$refs.container.one('beforeClose.fb', function() {
                  t.close(null, 0);
                }),
                  e.$content.find('.fancybox-share__button').click(function() {
                    return (
                      window.open(this.href, 'Share', 'width=550, height=450'),
                      !1
                    );
                  });
              },
              mobile: { autoFocus: !1 },
            },
          }));
      });
  })(document, jQuery),
  (function(t, e, n) {
    'use strict';
    function o() {
      var e = t.location.hash.substr(1),
        n = e.split('-'),
        o =
          n.length > 1 && /^\+?\d+$/.test(n[n.length - 1])
            ? parseInt(n.pop(-1), 10) || 1
            : 1,
        a = n.join('-');
      return { hash: e, index: o < 1 ? 1 : o, gallery: a };
    }
    function a(t) {
      '' !== t.gallery &&
        n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']")
          .eq(t.index - 1)
          .focus()
          .trigger('click.fb-start');
    }
    function i(t) {
      var e, n;
      return (
        !!t &&
        ((e = t.current ? t.current.opts : t.opts),
        (n =
          e.hash ||
          (e.$orig
            ? e.$orig.data('fancybox') || e.$orig.data('fancybox-trigger')
            : '')),
        '' !== n && n)
      );
    }
    n.escapeSelector ||
      (n.escapeSelector = function(t) {
        var e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
          n = function(t, e) {
            return e
              ? '\0' === t
                ? '�'
                : t.slice(0, -1) +
                  '\\' +
                  t.charCodeAt(t.length - 1).toString(16) +
                  ' '
              : '\\' + t;
          };
        return (t + '').replace(e, n);
      }),
      n(function() {
        n.fancybox.defaults.hash !== !1 &&
          (n(e).on({
            'onInit.fb': function(t, e) {
              var n, a;
              e.group[e.currIndex].opts.hash !== !1 &&
                ((n = o()),
                (a = i(e)),
                a &&
                  n.gallery &&
                  a == n.gallery &&
                  (e.currIndex = n.index - 1));
            },
            'beforeShow.fb': function(n, o, a, s) {
              var r;
              a &&
                a.opts.hash !== !1 &&
                ((r = i(o)),
                r &&
                  ((o.currentHash =
                    r + (o.group.length > 1 ? '-' + (a.index + 1) : '')),
                  t.location.hash !== '#' + o.currentHash &&
                    (s && !o.origHash && (o.origHash = t.location.hash),
                    o.hashTimer && clearTimeout(o.hashTimer),
                    (o.hashTimer = setTimeout(function() {
                      'replaceState' in t.history
                        ? (t.history[s ? 'pushState' : 'replaceState'](
                            {},
                            e.title,
                            t.location.pathname +
                              t.location.search +
                              '#' +
                              o.currentHash
                          ),
                          s && (o.hasCreatedHistory = !0))
                        : (t.location.hash = o.currentHash),
                        (o.hashTimer = null);
                    }, 300)))));
            },
            'beforeClose.fb': function(n, o, a) {
              a.opts.hash !== !1 &&
                (clearTimeout(o.hashTimer),
                o.currentHash && o.hasCreatedHistory
                  ? t.history.back()
                  : o.currentHash &&
                    ('replaceState' in t.history
                      ? t.history.replaceState(
                          {},
                          e.title,
                          t.location.pathname +
                            t.location.search +
                            (o.origHash || '')
                        )
                      : (t.location.hash = o.origHash)),
                (o.currentHash = null));
            },
          }),
          n(t).on('hashchange.fb', function() {
            var t = o(),
              e = null;
            n.each(
              n('.fancybox-container')
                .get()
                .reverse(),
              function(t, o) {
                var a = n(o).data('FancyBox');
                if (a && a.currentHash) return (e = a), !1;
              }
            ),
              e
                ? e.currentHash === t.gallery + '-' + t.index ||
                  (1 === t.index && e.currentHash == t.gallery) ||
                  ((e.currentHash = null), e.close())
                : '' !== t.gallery && a(t);
          }),
          setTimeout(function() {
            n.fancybox.getInstance() || a(o());
          }, 50));
      });
  })(window, document, jQuery),
  (function(t, e) {
    'use strict';
    var n = new Date().getTime();
    e(t).on({
      'onInit.fb': function(t, e, o) {
        e.$refs.stage.on(
          'mousewheel DOMMouseScroll wheel MozMousePixelScroll',
          function(t) {
            var o = e.current,
              a = new Date().getTime();
            e.group.length < 2 ||
              o.opts.wheel === !1 ||
              ('auto' === o.opts.wheel && 'image' !== o.type) ||
              (t.preventDefault(),
              t.stopPropagation(),
              o.$slide.hasClass('fancybox-animated') ||
                ((t = t.originalEvent || t),
                a - n < 250 ||
                  ((n = a),
                  e[
                    (-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0
                      ? 'next'
                      : 'previous'
                  ]())));
          }
        );
      },
    });
  })(document, jQuery);
