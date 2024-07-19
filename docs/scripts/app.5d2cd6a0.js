'undefined' != typeof globalThis
  ? globalThis
  : 'undefined' != typeof window
  ? window
  : 'undefined' != typeof global
  ? global
  : 'undefined' != typeof self && self;
var I = { exports: {} };
!(function (I) {
  var t = '1.9.4';
  function E(I) {
    var t, E, _, T;
    for (E = 1, _ = arguments.length; E < _; E++)
      for (t in (T = arguments[E])) I[t] = T[t];
    return I;
  }
  var _ =
    Object.create ||
    (function () {
      function I() {}
      return function (t) {
        return (I.prototype = t), new I();
      };
    })();
  function T(I, t) {
    var E = Array.prototype.slice;
    if (I.bind) return I.bind.apply(I, E.call(arguments, 1));
    var _ = E.call(arguments, 2);
    return function () {
      return I.apply(t, _.length ? _.concat(E.call(arguments)) : arguments);
    };
  }
  var e = 0;
  function i(I) {
    return '_leaflet_id' in I || (I._leaflet_id = ++e), I._leaflet_id;
  }
  function n(I, t, E) {
    var _, T, e, i;
    return (
      (i = function () {
        (_ = !1), T && (e.apply(E, T), (T = !1));
      }),
      (e = function () {
        _
          ? (T = arguments)
          : (I.apply(E, arguments), setTimeout(i, t), (_ = !0));
      }),
      e
    );
  }
  function o(I, t, E) {
    var _ = t[1],
      T = t[0],
      e = _ - T;
    return I === _ && E ? I : ((((I - T) % e) + e) % e) + T;
  }
  function C() {
    return !1;
  }
  function D(I, t) {
    if (!1 === t) return I;
    var E = Math.pow(10, void 0 === t ? 6 : t);
    return Math.round(I * E) / E;
  }
  function N(I) {
    return I.trim ? I.trim() : I.replace(/^\s+|\s+$/g, '');
  }
  function A(I) {
    return N(I).split(/\s+/);
  }
  function O(I, t) {
    for (var E in (Object.prototype.hasOwnProperty.call(I, 'options') ||
      (I.options = I.options ? _(I.options) : {}),
    t))
      I.options[E] = t[E];
    return I.options;
  }
  function R(I, t, E) {
    var _ = [];
    for (var T in I)
      _.push(
        encodeURIComponent(E ? T.toUpperCase() : T) +
          '=' +
          encodeURIComponent(I[T])
      );
    return (t && -1 !== t.indexOf('?') ? '&' : '?') + _.join('&');
  }
  var s = /\{ *([\w_ -]+) *\}/g;
  function a(I, t) {
    return I.replace(s, function (I, E) {
      var _ = t[E];
      if (void 0 === _) throw new Error('No value provided for variable ' + I);
      return 'function' == typeof _ && (_ = _(t)), _;
    });
  }
  var r =
    Array.isArray ||
    function (I) {
      return '[object Array]' === Object.prototype.toString.call(I);
    };
  function M(I, t) {
    for (var E = 0; E < I.length; E++) if (I[E] === t) return E;
    return -1;
  }
  var S = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
  function h(I) {
    return window['webkit' + I] || window['moz' + I] || window['ms' + I];
  }
  var l = 0;
  function u(I) {
    var t = +new Date(),
      E = Math.max(0, 16 - (t - l));
    return (l = t + E), window.setTimeout(I, E);
  }
  var c = window.requestAnimationFrame || h('RequestAnimationFrame') || u,
    U =
      window.cancelAnimationFrame ||
      h('CancelAnimationFrame') ||
      h('CancelRequestAnimationFrame') ||
      function (I) {
        window.clearTimeout(I);
      };
  function d(I, t, E) {
    if (!E || c !== u) return c.call(window, T(I, t));
    I.call(t);
  }
  function H(I) {
    I && U.call(window, I);
  }
  var p = {
    __proto__: null,
    extend: E,
    create: _,
    bind: T,
    get lastId() {
      return e;
    },
    stamp: i,
    throttle: n,
    wrapNum: o,
    falseFn: C,
    formatNum: D,
    trim: N,
    splitWords: A,
    setOptions: O,
    getParamString: R,
    template: a,
    isArray: r,
    indexOf: M,
    emptyImageUrl: S,
    requestFn: c,
    cancelFn: U,
    requestAnimFrame: d,
    cancelAnimFrame: H,
  };
  function m() {}
  function f(I) {
    if ('undefined' != typeof L && L && L.Mixin) {
      I = r(I) ? I : [I];
      for (var t = 0; t < I.length; t++)
        I[t] === L.Mixin.Events &&
          console.warn(
            'Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.',
            new Error().stack
          );
    }
  }
  (m.extend = function (I) {
    var t = function () {
        O(this),
          this.initialize && this.initialize.apply(this, arguments),
          this.callInitHooks();
      },
      T = (t.__super__ = this.prototype),
      e = _(T);
    for (var i in ((e.constructor = t), (t.prototype = e), this))
      Object.prototype.hasOwnProperty.call(this, i) &&
        'prototype' !== i &&
        '__super__' !== i &&
        (t[i] = this[i]);
    return (
      I.statics && E(t, I.statics),
      I.includes && (f(I.includes), E.apply(null, [e].concat(I.includes))),
      E(e, I),
      delete e.statics,
      delete e.includes,
      e.options &&
        ((e.options = T.options ? _(T.options) : {}), E(e.options, I.options)),
      (e._initHooks = []),
      (e.callInitHooks = function () {
        if (!this._initHooksCalled) {
          T.callInitHooks && T.callInitHooks.call(this),
            (this._initHooksCalled = !0);
          for (var I = 0, t = e._initHooks.length; I < t; I++)
            e._initHooks[I].call(this);
        }
      }),
      t
    );
  }),
    (m.include = function (I) {
      var t = this.prototype.options;
      return (
        E(this.prototype, I),
        I.options &&
          ((this.prototype.options = t), this.mergeOptions(I.options)),
        this
      );
    }),
    (m.mergeOptions = function (I) {
      return E(this.prototype.options, I), this;
    }),
    (m.addInitHook = function (I) {
      var t = Array.prototype.slice.call(arguments, 1),
        E =
          'function' == typeof I
            ? I
            : function () {
                this[I].apply(this, t);
              };
      return (
        (this.prototype._initHooks = this.prototype._initHooks || []),
        this.prototype._initHooks.push(E),
        this
      );
    });
  var P = {
    on: function (I, t, E) {
      if ('object' == typeof I) for (var _ in I) this._on(_, I[_], t);
      else
        for (var T = 0, e = (I = A(I)).length; T < e; T++) this._on(I[T], t, E);
      return this;
    },
    off: function (I, t, E) {
      if (arguments.length)
        if ('object' == typeof I) for (var _ in I) this._off(_, I[_], t);
        else {
          I = A(I);
          for (var T = 1 === arguments.length, e = 0, i = I.length; e < i; e++)
            T ? this._off(I[e]) : this._off(I[e], t, E);
        }
      else delete this._events;
      return this;
    },
    _on: function (I, t, E, _) {
      if ('function' == typeof t) {
        if (!1 === this._listens(I, t, E)) {
          E === this && (E = void 0);
          var T = { fn: t, ctx: E };
          _ && (T.once = !0),
            (this._events = this._events || {}),
            (this._events[I] = this._events[I] || []),
            this._events[I].push(T);
        }
      } else console.warn('wrong listener type: ' + typeof t);
    },
    _off: function (I, t, E) {
      var _, T, e;
      if (this._events && (_ = this._events[I]))
        if (1 !== arguments.length)
          if ('function' == typeof t) {
            var i = this._listens(I, t, E);
            if (!1 !== i) {
              var n = _[i];
              this._firingCount &&
                ((n.fn = C), (this._events[I] = _ = _.slice())),
                _.splice(i, 1);
            }
          } else console.warn('wrong listener type: ' + typeof t);
        else {
          if (this._firingCount)
            for (T = 0, e = _.length; T < e; T++) _[T].fn = C;
          delete this._events[I];
        }
    },
    fire: function (I, t, _) {
      if (!this.listens(I, _)) return this;
      var T = E({}, t, {
        type: I,
        target: this,
        sourceTarget: (t && t.sourceTarget) || this,
      });
      if (this._events) {
        var e = this._events[I];
        if (e) {
          this._firingCount = this._firingCount + 1 || 1;
          for (var i = 0, n = e.length; i < n; i++) {
            var o = e[i],
              C = o.fn;
            o.once && this.off(I, C, o.ctx), C.call(o.ctx || this, T);
          }
          this._firingCount--;
        }
      }
      return _ && this._propagateEvent(T), this;
    },
    listens: function (I, t, E, _) {
      'string' != typeof I && console.warn('"string" type argument expected');
      var T = t;
      'function' != typeof t && ((_ = !!t), (T = void 0), (E = void 0));
      var e = this._events && this._events[I];
      if (e && e.length && !1 !== this._listens(I, T, E)) return !0;
      if (_)
        for (var i in this._eventParents)
          if (this._eventParents[i].listens(I, t, E, _)) return !0;
      return !1;
    },
    _listens: function (I, t, E) {
      if (!this._events) return !1;
      var _ = this._events[I] || [];
      if (!t) return !!_.length;
      E === this && (E = void 0);
      for (var T = 0, e = _.length; T < e; T++)
        if (_[T].fn === t && _[T].ctx === E) return T;
      return !1;
    },
    once: function (I, t, E) {
      if ('object' == typeof I) for (var _ in I) this._on(_, I[_], t, !0);
      else
        for (var T = 0, e = (I = A(I)).length; T < e; T++)
          this._on(I[T], t, E, !0);
      return this;
    },
    addEventParent: function (I) {
      return (
        (this._eventParents = this._eventParents || {}),
        (this._eventParents[i(I)] = I),
        this
      );
    },
    removeEventParent: function (I) {
      return this._eventParents && delete this._eventParents[i(I)], this;
    },
    _propagateEvent: function (I) {
      for (var t in this._eventParents)
        this._eventParents[t].fire(
          I.type,
          E({ layer: I.target, propagatedFrom: I.target }, I),
          !0
        );
    },
  };
  (P.addEventListener = P.on),
    (P.removeEventListener = P.clearAllEventListeners = P.off),
    (P.addOneTimeEventListener = P.once),
    (P.fireEvent = P.fire),
    (P.hasEventListeners = P.listens);
  var B = m.extend(P);
  function V(I, t, E) {
    (this.x = E ? Math.round(I) : I), (this.y = E ? Math.round(t) : t);
  }
  var g =
    Math.trunc ||
    function (I) {
      return I > 0 ? Math.floor(I) : Math.ceil(I);
    };
  function Z(I, t, E) {
    return I instanceof V
      ? I
      : r(I)
      ? new V(I[0], I[1])
      : null == I
      ? I
      : 'object' == typeof I && 'x' in I && 'y' in I
      ? new V(I.x, I.y)
      : new V(I, t, E);
  }
  function Y(I, t) {
    if (I)
      for (var E = t ? [I, t] : I, _ = 0, T = E.length; _ < T; _++)
        this.extend(E[_]);
  }
  function v(I, t) {
    return !I || I instanceof Y ? I : new Y(I, t);
  }
  function G(I, t) {
    if (I)
      for (var E = t ? [I, t] : I, _ = 0, T = E.length; _ < T; _++)
        this.extend(E[_]);
  }
  function F(I, t) {
    return I instanceof G ? I : new G(I, t);
  }
  function y(I, t, E) {
    if (isNaN(I) || isNaN(t))
      throw new Error('Invalid LatLng object: (' + I + ', ' + t + ')');
    (this.lat = +I), (this.lng = +t), void 0 !== E && (this.alt = +E);
  }
  function X(I, t, E) {
    return I instanceof y
      ? I
      : r(I) && 'object' != typeof I[0]
      ? 3 === I.length
        ? new y(I[0], I[1], I[2])
        : 2 === I.length
        ? new y(I[0], I[1])
        : null
      : null == I
      ? I
      : 'object' == typeof I && 'lat' in I
      ? new y(I.lat, 'lng' in I ? I.lng : I.lon, I.alt)
      : void 0 === t
      ? null
      : new y(I, t, E);
  }
  (V.prototype = {
    clone: function () {
      return new V(this.x, this.y);
    },
    add: function (I) {
      return this.clone()._add(Z(I));
    },
    _add: function (I) {
      return (this.x += I.x), (this.y += I.y), this;
    },
    subtract: function (I) {
      return this.clone()._subtract(Z(I));
    },
    _subtract: function (I) {
      return (this.x -= I.x), (this.y -= I.y), this;
    },
    divideBy: function (I) {
      return this.clone()._divideBy(I);
    },
    _divideBy: function (I) {
      return (this.x /= I), (this.y /= I), this;
    },
    multiplyBy: function (I) {
      return this.clone()._multiplyBy(I);
    },
    _multiplyBy: function (I) {
      return (this.x *= I), (this.y *= I), this;
    },
    scaleBy: function (I) {
      return new V(this.x * I.x, this.y * I.y);
    },
    unscaleBy: function (I) {
      return new V(this.x / I.x, this.y / I.y);
    },
    round: function () {
      return this.clone()._round();
    },
    _round: function () {
      return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
    },
    floor: function () {
      return this.clone()._floor();
    },
    _floor: function () {
      return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
    },
    ceil: function () {
      return this.clone()._ceil();
    },
    _ceil: function () {
      return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
    },
    trunc: function () {
      return this.clone()._trunc();
    },
    _trunc: function () {
      return (this.x = g(this.x)), (this.y = g(this.y)), this;
    },
    distanceTo: function (I) {
      var t = (I = Z(I)).x - this.x,
        E = I.y - this.y;
      return Math.sqrt(t * t + E * E);
    },
    equals: function (I) {
      return (I = Z(I)).x === this.x && I.y === this.y;
    },
    contains: function (I) {
      return (
        (I = Z(I)),
        Math.abs(I.x) <= Math.abs(this.x) && Math.abs(I.y) <= Math.abs(this.y)
      );
    },
    toString: function () {
      return 'Point(' + D(this.x) + ', ' + D(this.y) + ')';
    },
  }),
    (Y.prototype = {
      extend: function (I) {
        var t, E;
        if (!I) return this;
        if (I instanceof V || 'number' == typeof I[0] || 'x' in I) t = E = Z(I);
        else if (((t = (I = v(I)).min), (E = I.max), !t || !E)) return this;
        return (
          this.min || this.max
            ? ((this.min.x = Math.min(t.x, this.min.x)),
              (this.max.x = Math.max(E.x, this.max.x)),
              (this.min.y = Math.min(t.y, this.min.y)),
              (this.max.y = Math.max(E.y, this.max.y)))
            : ((this.min = t.clone()), (this.max = E.clone())),
          this
        );
      },
      getCenter: function (I) {
        return Z(
          (this.min.x + this.max.x) / 2,
          (this.min.y + this.max.y) / 2,
          I
        );
      },
      getBottomLeft: function () {
        return Z(this.min.x, this.max.y);
      },
      getTopRight: function () {
        return Z(this.max.x, this.min.y);
      },
      getTopLeft: function () {
        return this.min;
      },
      getBottomRight: function () {
        return this.max;
      },
      getSize: function () {
        return this.max.subtract(this.min);
      },
      contains: function (I) {
        var t, E;
        return (
          (I =
            'number' == typeof I[0] || I instanceof V ? Z(I) : v(I)) instanceof
          Y
            ? ((t = I.min), (E = I.max))
            : (t = E = I),
          t.x >= this.min.x &&
            E.x <= this.max.x &&
            t.y >= this.min.y &&
            E.y <= this.max.y
        );
      },
      intersects: function (I) {
        I = v(I);
        var t = this.min,
          E = this.max,
          _ = I.min,
          T = I.max,
          e = T.x >= t.x && _.x <= E.x,
          i = T.y >= t.y && _.y <= E.y;
        return e && i;
      },
      overlaps: function (I) {
        I = v(I);
        var t = this.min,
          E = this.max,
          _ = I.min,
          T = I.max,
          e = T.x > t.x && _.x < E.x,
          i = T.y > t.y && _.y < E.y;
        return e && i;
      },
      isValid: function () {
        return !(!this.min || !this.max);
      },
      pad: function (I) {
        var t = this.min,
          E = this.max,
          _ = Math.abs(t.x - E.x) * I,
          T = Math.abs(t.y - E.y) * I;
        return v(Z(t.x - _, t.y - T), Z(E.x + _, E.y + T));
      },
      equals: function (I) {
        return (
          !!I &&
          ((I = v(I)),
          this.min.equals(I.getTopLeft()) &&
            this.max.equals(I.getBottomRight()))
        );
      },
    }),
    (G.prototype = {
      extend: function (I) {
        var t,
          E,
          _ = this._southWest,
          T = this._northEast;
        if (I instanceof y) (t = I), (E = I);
        else {
          if (!(I instanceof G)) return I ? this.extend(X(I) || F(I)) : this;
          if (((t = I._southWest), (E = I._northEast), !t || !E)) return this;
        }
        return (
          _ || T
            ? ((_.lat = Math.min(t.lat, _.lat)),
              (_.lng = Math.min(t.lng, _.lng)),
              (T.lat = Math.max(E.lat, T.lat)),
              (T.lng = Math.max(E.lng, T.lng)))
            : ((this._southWest = new y(t.lat, t.lng)),
              (this._northEast = new y(E.lat, E.lng))),
          this
        );
      },
      pad: function (I) {
        var t = this._southWest,
          E = this._northEast,
          _ = Math.abs(t.lat - E.lat) * I,
          T = Math.abs(t.lng - E.lng) * I;
        return new G(new y(t.lat - _, t.lng - T), new y(E.lat + _, E.lng + T));
      },
      getCenter: function () {
        return new y(
          (this._southWest.lat + this._northEast.lat) / 2,
          (this._southWest.lng + this._northEast.lng) / 2
        );
      },
      getSouthWest: function () {
        return this._southWest;
      },
      getNorthEast: function () {
        return this._northEast;
      },
      getNorthWest: function () {
        return new y(this.getNorth(), this.getWest());
      },
      getSouthEast: function () {
        return new y(this.getSouth(), this.getEast());
      },
      getWest: function () {
        return this._southWest.lng;
      },
      getSouth: function () {
        return this._southWest.lat;
      },
      getEast: function () {
        return this._northEast.lng;
      },
      getNorth: function () {
        return this._northEast.lat;
      },
      contains: function (I) {
        I =
          'number' == typeof I[0] || I instanceof y || 'lat' in I ? X(I) : F(I);
        var t,
          E,
          _ = this._southWest,
          T = this._northEast;
        return (
          I instanceof G
            ? ((t = I.getSouthWest()), (E = I.getNorthEast()))
            : (t = E = I),
          t.lat >= _.lat && E.lat <= T.lat && t.lng >= _.lng && E.lng <= T.lng
        );
      },
      intersects: function (I) {
        I = F(I);
        var t = this._southWest,
          E = this._northEast,
          _ = I.getSouthWest(),
          T = I.getNorthEast(),
          e = T.lat >= t.lat && _.lat <= E.lat,
          i = T.lng >= t.lng && _.lng <= E.lng;
        return e && i;
      },
      overlaps: function (I) {
        I = F(I);
        var t = this._southWest,
          E = this._northEast,
          _ = I.getSouthWest(),
          T = I.getNorthEast(),
          e = T.lat > t.lat && _.lat < E.lat,
          i = T.lng > t.lng && _.lng < E.lng;
        return e && i;
      },
      toBBoxString: function () {
        return [
          this.getWest(),
          this.getSouth(),
          this.getEast(),
          this.getNorth(),
        ].join(',');
      },
      equals: function (I, t) {
        return (
          !!I &&
          ((I = F(I)),
          this._southWest.equals(I.getSouthWest(), t) &&
            this._northEast.equals(I.getNorthEast(), t))
        );
      },
      isValid: function () {
        return !(!this._southWest || !this._northEast);
      },
    }),
    (y.prototype = {
      equals: function (I, t) {
        return (
          !!I &&
          ((I = X(I)),
          Math.max(Math.abs(this.lat - I.lat), Math.abs(this.lng - I.lng)) <=
            (void 0 === t ? 1e-9 : t))
        );
      },
      toString: function (I) {
        return 'LatLng(' + D(this.lat, I) + ', ' + D(this.lng, I) + ')';
      },
      distanceTo: function (I) {
        return x.distance(this, X(I));
      },
      wrap: function () {
        return x.wrapLatLng(this);
      },
      toBounds: function (I) {
        var t = (180 * I) / 40075017,
          E = t / Math.cos((Math.PI / 180) * this.lat);
        return F([this.lat - t, this.lng - E], [this.lat + t, this.lng + E]);
      },
      clone: function () {
        return new y(this.lat, this.lng, this.alt);
      },
    });
  var w,
    b = {
      latLngToPoint: function (I, t) {
        var E = this.projection.project(I),
          _ = this.scale(t);
        return this.transformation._transform(E, _);
      },
      pointToLatLng: function (I, t) {
        var E = this.scale(t),
          _ = this.transformation.untransform(I, E);
        return this.projection.unproject(_);
      },
      project: function (I) {
        return this.projection.project(I);
      },
      unproject: function (I) {
        return this.projection.unproject(I);
      },
      scale: function (I) {
        return 256 * Math.pow(2, I);
      },
      zoom: function (I) {
        return Math.log(I / 256) / Math.LN2;
      },
      getProjectedBounds: function (I) {
        if (this.infinite) return null;
        var t = this.projection.bounds,
          E = this.scale(I);
        return new Y(
          this.transformation.transform(t.min, E),
          this.transformation.transform(t.max, E)
        );
      },
      infinite: !1,
      wrapLatLng: function (I) {
        var t = this.wrapLng ? o(I.lng, this.wrapLng, !0) : I.lng;
        return new y(
          this.wrapLat ? o(I.lat, this.wrapLat, !0) : I.lat,
          t,
          I.alt
        );
      },
      wrapLatLngBounds: function (I) {
        var t = I.getCenter(),
          E = this.wrapLatLng(t),
          _ = t.lat - E.lat,
          T = t.lng - E.lng;
        if (0 === _ && 0 === T) return I;
        var e = I.getSouthWest(),
          i = I.getNorthEast();
        return new G(new y(e.lat - _, e.lng - T), new y(i.lat - _, i.lng - T));
      },
    },
    x = E({}, b, {
      wrapLng: [-180, 180],
      R: 6371e3,
      distance: function (I, t) {
        var E = Math.PI / 180,
          _ = I.lat * E,
          T = t.lat * E,
          e = Math.sin(((t.lat - I.lat) * E) / 2),
          i = Math.sin(((t.lng - I.lng) * E) / 2),
          n = e * e + Math.cos(_) * Math.cos(T) * i * i,
          o = 2 * Math.atan2(Math.sqrt(n), Math.sqrt(1 - n));
        return this.R * o;
      },
    }),
    K = 6378137,
    W = {
      R: K,
      MAX_LATITUDE: 85.0511287798,
      project: function (I) {
        var t = Math.PI / 180,
          E = this.MAX_LATITUDE,
          _ = Math.max(Math.min(E, I.lat), -E),
          T = Math.sin(_ * t);
        return new V(
          this.R * I.lng * t,
          (this.R * Math.log((1 + T) / (1 - T))) / 2
        );
      },
      unproject: function (I) {
        var t = 180 / Math.PI;
        return new y(
          (2 * Math.atan(Math.exp(I.y / this.R)) - Math.PI / 2) * t,
          (I.x * t) / this.R
        );
      },
      bounds: ((w = K * Math.PI), new Y([-w, -w], [w, w])),
    };
  function k(I, t, E, _) {
    if (r(I))
      return (
        (this._a = I[0]),
        (this._b = I[1]),
        (this._c = I[2]),
        void (this._d = I[3])
      );
    (this._a = I), (this._b = t), (this._c = E), (this._d = _);
  }
  function z(I, t, E, _) {
    return new k(I, t, E, _);
  }
  k.prototype = {
    transform: function (I, t) {
      return this._transform(I.clone(), t);
    },
    _transform: function (I, t) {
      return (
        (t = t || 1),
        (I.x = t * (this._a * I.x + this._b)),
        (I.y = t * (this._c * I.y + this._d)),
        I
      );
    },
    untransform: function (I, t) {
      return (
        (t = t || 1),
        new V((I.x / t - this._b) / this._a, (I.y / t - this._d) / this._c)
      );
    },
  };
  var J = E({}, x, {
      code: 'EPSG:3857',
      projection: W,
      transformation: (function () {
        var I = 0.5 / (Math.PI * W.R);
        return z(I, 0.5, -I, 0.5);
      })(),
    }),
    Q = E({}, J, { code: 'EPSG:900913' });
  function j(I) {
    return document.createElementNS('http://www.w3.org/2000/svg', I);
  }
  function q(I, t) {
    var E,
      _,
      T,
      e,
      i,
      n,
      o = '';
    for (E = 0, T = I.length; E < T; E++) {
      for (_ = 0, e = (i = I[E]).length; _ < e; _++)
        o += (_ ? 'L' : 'M') + (n = i[_]).x + ' ' + n.y;
      o += t ? (GI.svg ? 'z' : 'x') : '';
    }
    return o || 'M0 0';
  }
  var $,
    II = document.documentElement.style,
    tI = 'ActiveXObject' in window,
    EI = tI && !document.addEventListener,
    _I = 'msLaunchUri' in navigator && !('documentMode' in document),
    TI = vI('webkit'),
    eI = vI('android'),
    iI = vI('android 2') || vI('android 3'),
    nI = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
    oI = eI && vI('Google') && nI < 537 && !('AudioNode' in window),
    CI = !!window.opera,
    DI = !_I && vI('chrome'),
    NI = vI('gecko') && !TI && !CI && !tI,
    AI = !DI && vI('safari'),
    OI = vI('phantom'),
    RI = 'OTransition' in II,
    sI = 0 === navigator.platform.indexOf('Win'),
    aI = tI && 'transition' in II,
    rI =
      'WebKitCSSMatrix' in window &&
      'm11' in new window.WebKitCSSMatrix() &&
      !iI,
    MI = 'MozPerspective' in II,
    SI = !window.L_DISABLE_3D && (aI || rI || MI) && !RI && !OI,
    hI = 'undefined' != typeof orientation || vI('mobile'),
    lI = hI && TI,
    uI = hI && rI,
    cI = !window.PointerEvent && window.MSPointerEvent,
    UI = !(!window.PointerEvent && !cI),
    dI = 'ontouchstart' in window || !!window.TouchEvent,
    HI = !window.L_NO_TOUCH && (dI || UI),
    pI = hI && CI,
    mI = hI && NI,
    fI =
      (window.devicePixelRatio ||
        window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
    PI = (function () {
      var I = !1;
      try {
        var t = Object.defineProperty({}, 'passive', {
          get: function () {
            I = !0;
          },
        });
        window.addEventListener('testPassiveEventSupport', C, t),
          window.removeEventListener('testPassiveEventSupport', C, t);
      } catch (E) {}
      return I;
    })(),
    LI = !!document.createElement('canvas').getContext,
    BI = !(!document.createElementNS || !j('svg').createSVGRect),
    VI =
      !!BI &&
      ((($ = document.createElement('div')).innerHTML = '<svg/>'),
      'http://www.w3.org/2000/svg' ===
        ($.firstChild && $.firstChild.namespaceURI)),
    gI =
      !BI &&
      (function () {
        try {
          var I = document.createElement('div');
          I.innerHTML = '<v:shape adj="1"/>';
          var t = I.firstChild;
          return (
            (t.style.behavior = 'url(#default#VML)'),
            t && 'object' == typeof t.adj
          );
        } catch (E) {
          return !1;
        }
      })(),
    ZI = 0 === navigator.platform.indexOf('Mac'),
    YI = 0 === navigator.platform.indexOf('Linux');
  function vI(I) {
    return navigator.userAgent.toLowerCase().indexOf(I) >= 0;
  }
  var GI = {
      ie: tI,
      ielt9: EI,
      edge: _I,
      webkit: TI,
      android: eI,
      android23: iI,
      androidStock: oI,
      opera: CI,
      chrome: DI,
      gecko: NI,
      safari: AI,
      phantom: OI,
      opera12: RI,
      win: sI,
      ie3d: aI,
      webkit3d: rI,
      gecko3d: MI,
      any3d: SI,
      mobile: hI,
      mobileWebkit: lI,
      mobileWebkit3d: uI,
      msPointer: cI,
      pointer: UI,
      touch: HI,
      touchNative: dI,
      mobileOpera: pI,
      mobileGecko: mI,
      retina: fI,
      passiveEvents: PI,
      canvas: LI,
      svg: BI,
      vml: gI,
      inlineSvg: VI,
      mac: ZI,
      linux: YI,
    },
    FI = GI.msPointer ? 'MSPointerDown' : 'pointerdown',
    yI = GI.msPointer ? 'MSPointerMove' : 'pointermove',
    XI = GI.msPointer ? 'MSPointerUp' : 'pointerup',
    wI = GI.msPointer ? 'MSPointerCancel' : 'pointercancel',
    bI = { touchstart: FI, touchmove: yI, touchend: XI, touchcancel: wI },
    xI = { touchstart: It, touchmove: $I, touchend: $I, touchcancel: $I },
    KI = {},
    WI = !1;
  function kI(I, t, E) {
    return (
      'touchstart' === t && qI(),
      xI[t]
        ? ((E = xI[t].bind(this, E)), I.addEventListener(bI[t], E, !1), E)
        : (console.warn('wrong event specified:', t), C)
    );
  }
  function zI(I, t, E) {
    bI[t]
      ? I.removeEventListener(bI[t], E, !1)
      : console.warn('wrong event specified:', t);
  }
  function JI(I) {
    KI[I.pointerId] = I;
  }
  function QI(I) {
    KI[I.pointerId] && (KI[I.pointerId] = I);
  }
  function jI(I) {
    delete KI[I.pointerId];
  }
  function qI() {
    WI ||
      (document.addEventListener(FI, JI, !0),
      document.addEventListener(yI, QI, !0),
      document.addEventListener(XI, jI, !0),
      document.addEventListener(wI, jI, !0),
      (WI = !0));
  }
  function $I(I, t) {
    if (t.pointerType !== (t.MSPOINTER_TYPE_MOUSE || 'mouse')) {
      for (var E in ((t.touches = []), KI)) t.touches.push(KI[E]);
      (t.changedTouches = [t]), I(t);
    }
  }
  function It(I, t) {
    t.MSPOINTER_TYPE_TOUCH && t.pointerType === t.MSPOINTER_TYPE_TOUCH && Jt(t),
      $I(I, t);
  }
  function tt(I) {
    var t,
      E,
      _ = {};
    for (E in I) (t = I[E]), (_[E] = t && t.bind ? t.bind(I) : t);
    return (
      (I = _),
      (_.type = 'dblclick'),
      (_.detail = 2),
      (_.isTrusted = !1),
      (_._simulated = !0),
      _
    );
  }
  var Et = 200;
  function _t(I, t) {
    I.addEventListener('dblclick', t);
    var E,
      _ = 0;
    function T(I) {
      if (1 === I.detail) {
        if (
          'mouse' !== I.pointerType &&
          (!I.sourceCapabilities || I.sourceCapabilities.firesTouchEvents)
        ) {
          var T = jt(I);
          if (
            !T.some(function (I) {
              return I instanceof HTMLLabelElement && I.attributes.for;
            }) ||
            T.some(function (I) {
              return (
                I instanceof HTMLInputElement || I instanceof HTMLSelectElement
              );
            })
          ) {
            var e = Date.now();
            e - _ <= Et ? 2 == ++E && t(tt(I)) : (E = 1), (_ = e);
          }
        }
      } else E = I.detail;
    }
    return I.addEventListener('click', T), { dblclick: t, simDblclick: T };
  }
  function Tt(I, t) {
    I.removeEventListener('dblclick', t.dblclick),
      I.removeEventListener('click', t.simDblclick);
  }
  var et,
    it,
    nt,
    ot,
    Ct,
    Dt = pt([
      'transform',
      'webkitTransform',
      'OTransform',
      'MozTransform',
      'msTransform',
    ]),
    Nt = pt([
      'webkitTransition',
      'transition',
      'OTransition',
      'MozTransition',
      'msTransition',
    ]),
    At =
      'webkitTransition' === Nt || 'OTransition' === Nt
        ? Nt + 'End'
        : 'transitionend';
  function Ot(I) {
    return 'string' == typeof I ? document.getElementById(I) : I;
  }
  function Rt(I, t) {
    var E = I.style[t] || (I.currentStyle && I.currentStyle[t]);
    if ((!E || 'auto' === E) && document.defaultView) {
      var _ = document.defaultView.getComputedStyle(I, null);
      E = _ ? _[t] : null;
    }
    return 'auto' === E ? null : E;
  }
  function st(I, t, E) {
    var _ = document.createElement(I);
    return (_.className = t || ''), E && E.appendChild(_), _;
  }
  function at(I) {
    var t = I.parentNode;
    t && t.removeChild(I);
  }
  function rt(I) {
    for (; I.firstChild; ) I.removeChild(I.firstChild);
  }
  function Mt(I) {
    var t = I.parentNode;
    t && t.lastChild !== I && t.appendChild(I);
  }
  function St(I) {
    var t = I.parentNode;
    t && t.firstChild !== I && t.insertBefore(I, t.firstChild);
  }
  function ht(I, t) {
    if (void 0 !== I.classList) return I.classList.contains(t);
    var E = Ut(I);
    return E.length > 0 && new RegExp('(^|\\s)' + t + '(\\s|$)').test(E);
  }
  function lt(I, t) {
    if (void 0 !== I.classList)
      for (var E = A(t), _ = 0, T = E.length; _ < T; _++) I.classList.add(E[_]);
    else if (!ht(I, t)) {
      var e = Ut(I);
      ct(I, (e ? e + ' ' : '') + t);
    }
  }
  function ut(I, t) {
    void 0 !== I.classList
      ? I.classList.remove(t)
      : ct(I, N((' ' + Ut(I) + ' ').replace(' ' + t + ' ', ' ')));
  }
  function ct(I, t) {
    void 0 === I.className.baseVal
      ? (I.className = t)
      : (I.className.baseVal = t);
  }
  function Ut(I) {
    return (
      I.correspondingElement && (I = I.correspondingElement),
      void 0 === I.className.baseVal ? I.className : I.className.baseVal
    );
  }
  function dt(I, t) {
    'opacity' in I.style
      ? (I.style.opacity = t)
      : 'filter' in I.style && Ht(I, t);
  }
  function Ht(I, t) {
    var E = !1,
      _ = 'DXImageTransform.Microsoft.Alpha';
    try {
      E = I.filters.item(_);
    } catch (T) {
      if (1 === t) return;
    }
    (t = Math.round(100 * t)),
      E
        ? ((E.Enabled = 100 !== t), (E.Opacity = t))
        : (I.style.filter += ' progid:' + _ + '(opacity=' + t + ')');
  }
  function pt(I) {
    for (var t = document.documentElement.style, E = 0; E < I.length; E++)
      if (I[E] in t) return I[E];
    return !1;
  }
  function mt(I, t, E) {
    var _ = t || new V(0, 0);
    I.style[Dt] =
      (GI.ie3d
        ? 'translate(' + _.x + 'px,' + _.y + 'px)'
        : 'translate3d(' + _.x + 'px,' + _.y + 'px,0)') +
      (E ? ' scale(' + E + ')' : '');
  }
  function ft(I, t) {
    (I._leaflet_pos = t),
      GI.any3d
        ? mt(I, t)
        : ((I.style.left = t.x + 'px'), (I.style.top = t.y + 'px'));
  }
  function Pt(I) {
    return I._leaflet_pos || new V(0, 0);
  }
  if ('onselectstart' in document)
    (et = function () {
      Ft(window, 'selectstart', Jt);
    }),
      (it = function () {
        Xt(window, 'selectstart', Jt);
      });
  else {
    var Lt = pt([
      'userSelect',
      'WebkitUserSelect',
      'OUserSelect',
      'MozUserSelect',
      'msUserSelect',
    ]);
    (et = function () {
      if (Lt) {
        var I = document.documentElement.style;
        (nt = I[Lt]), (I[Lt] = 'none');
      }
    }),
      (it = function () {
        Lt && ((document.documentElement.style[Lt] = nt), (nt = void 0));
      });
  }
  function Bt() {
    Ft(window, 'dragstart', Jt);
  }
  function Vt() {
    Xt(window, 'dragstart', Jt);
  }
  function gt(I) {
    for (; -1 === I.tabIndex; ) I = I.parentNode;
    I.style &&
      (Zt(),
      (ot = I),
      (Ct = I.style.outlineStyle),
      (I.style.outlineStyle = 'none'),
      Ft(window, 'keydown', Zt));
  }
  function Zt() {
    ot &&
      ((ot.style.outlineStyle = Ct),
      (ot = void 0),
      (Ct = void 0),
      Xt(window, 'keydown', Zt));
  }
  function Yt(I) {
    do {
      I = I.parentNode;
    } while (!((I.offsetWidth && I.offsetHeight) || I === document.body));
    return I;
  }
  function vt(I) {
    var t = I.getBoundingClientRect();
    return {
      x: t.width / I.offsetWidth || 1,
      y: t.height / I.offsetHeight || 1,
      boundingClientRect: t,
    };
  }
  var Gt = {
    __proto__: null,
    TRANSFORM: Dt,
    TRANSITION: Nt,
    TRANSITION_END: At,
    get: Ot,
    getStyle: Rt,
    create: st,
    remove: at,
    empty: rt,
    toFront: Mt,
    toBack: St,
    hasClass: ht,
    addClass: lt,
    removeClass: ut,
    setClass: ct,
    getClass: Ut,
    setOpacity: dt,
    testProp: pt,
    setTransform: mt,
    setPosition: ft,
    getPosition: Pt,
    get disableTextSelection() {
      return et;
    },
    get enableTextSelection() {
      return it;
    },
    disableImageDrag: Bt,
    enableImageDrag: Vt,
    preventOutline: gt,
    restoreOutline: Zt,
    getSizedParentNode: Yt,
    getScale: vt,
  };
  function Ft(I, t, E, _) {
    if (t && 'object' == typeof t) for (var T in t) xt(I, T, t[T], E);
    else for (var e = 0, i = (t = A(t)).length; e < i; e++) xt(I, t[e], E, _);
    return this;
  }
  var yt = '_leaflet_events';
  function Xt(I, t, E, _) {
    if (1 === arguments.length) wt(I), delete I[yt];
    else if (t && 'object' == typeof t) for (var T in t) Kt(I, T, t[T], E);
    else if (((t = A(t)), 2 === arguments.length))
      wt(I, function (I) {
        return -1 !== M(t, I);
      });
    else for (var e = 0, i = t.length; e < i; e++) Kt(I, t[e], E, _);
    return this;
  }
  function wt(I, t) {
    for (var E in I[yt]) {
      var _ = E.split(/\d/)[0];
      (t && !t(_)) || Kt(I, _, null, null, E);
    }
  }
  var bt = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout',
    wheel: !('onwheel' in window) && 'mousewheel',
  };
  function xt(I, t, E, _) {
    var T = t + i(E) + (_ ? '_' + i(_) : '');
    if (I[yt] && I[yt][T]) return this;
    var e = function (t) {
        return E.call(_ || I, t || window.event);
      },
      n = e;
    !GI.touchNative && GI.pointer && 0 === t.indexOf('touch')
      ? (e = kI(I, t, e))
      : GI.touch && 'dblclick' === t
      ? (e = _t(I, e))
      : 'addEventListener' in I
      ? 'touchstart' === t ||
        'touchmove' === t ||
        'wheel' === t ||
        'mousewheel' === t
        ? I.addEventListener(
            bt[t] || t,
            e,
            !!GI.passiveEvents && { passive: !1 }
          )
        : 'mouseenter' === t || 'mouseleave' === t
        ? ((e = function (t) {
            (t = t || window.event), tE(I, t) && n(t);
          }),
          I.addEventListener(bt[t], e, !1))
        : I.addEventListener(t, n, !1)
      : I.attachEvent('on' + t, e),
      (I[yt] = I[yt] || {}),
      (I[yt][T] = e);
  }
  function Kt(I, t, E, _, T) {
    T = T || t + i(E) + (_ ? '_' + i(_) : '');
    var e = I[yt] && I[yt][T];
    if (!e) return this;
    !GI.touchNative && GI.pointer && 0 === t.indexOf('touch')
      ? zI(I, t, e)
      : GI.touch && 'dblclick' === t
      ? Tt(I, e)
      : 'removeEventListener' in I
      ? I.removeEventListener(bt[t] || t, e, !1)
      : I.detachEvent('on' + t, e),
      (I[yt][T] = null);
  }
  function Wt(I) {
    return (
      I.stopPropagation
        ? I.stopPropagation()
        : I.originalEvent
        ? (I.originalEvent._stopped = !0)
        : (I.cancelBubble = !0),
      this
    );
  }
  function kt(I) {
    return xt(I, 'wheel', Wt), this;
  }
  function zt(I) {
    return (
      Ft(I, 'mousedown touchstart dblclick contextmenu', Wt),
      (I._leaflet_disable_click = !0),
      this
    );
  }
  function Jt(I) {
    return I.preventDefault ? I.preventDefault() : (I.returnValue = !1), this;
  }
  function Qt(I) {
    return Jt(I), Wt(I), this;
  }
  function jt(I) {
    if (I.composedPath) return I.composedPath();
    for (var t = [], E = I.target; E; ) t.push(E), (E = E.parentNode);
    return t;
  }
  function qt(I, t) {
    if (!t) return new V(I.clientX, I.clientY);
    var E = vt(t),
      _ = E.boundingClientRect;
    return new V(
      (I.clientX - _.left) / E.x - t.clientLeft,
      (I.clientY - _.top) / E.y - t.clientTop
    );
  }
  var $t =
    GI.linux && GI.chrome
      ? window.devicePixelRatio
      : GI.mac
      ? 3 * window.devicePixelRatio
      : window.devicePixelRatio > 0
      ? 2 * window.devicePixelRatio
      : 1;
  function IE(I) {
    return GI.edge
      ? I.wheelDeltaY / 2
      : I.deltaY && 0 === I.deltaMode
      ? -I.deltaY / $t
      : I.deltaY && 1 === I.deltaMode
      ? 20 * -I.deltaY
      : I.deltaY && 2 === I.deltaMode
      ? 60 * -I.deltaY
      : I.deltaX || I.deltaZ
      ? 0
      : I.wheelDelta
      ? (I.wheelDeltaY || I.wheelDelta) / 2
      : I.detail && Math.abs(I.detail) < 32765
      ? 20 * -I.detail
      : I.detail
      ? (I.detail / -32765) * 60
      : 0;
  }
  function tE(I, t) {
    var E = t.relatedTarget;
    if (!E) return !0;
    try {
      for (; E && E !== I; ) E = E.parentNode;
    } catch (_) {
      return !1;
    }
    return E !== I;
  }
  var EE = {
      __proto__: null,
      on: Ft,
      off: Xt,
      stopPropagation: Wt,
      disableScrollPropagation: kt,
      disableClickPropagation: zt,
      preventDefault: Jt,
      stop: Qt,
      getPropagationPath: jt,
      getMousePosition: qt,
      getWheelDelta: IE,
      isExternalTarget: tE,
      addListener: Ft,
      removeListener: Xt,
    },
    _E = B.extend({
      run: function (I, t, E, _) {
        this.stop(),
          (this._el = I),
          (this._inProgress = !0),
          (this._duration = E || 0.25),
          (this._easeOutPower = 1 / Math.max(_ || 0.5, 0.2)),
          (this._startPos = Pt(I)),
          (this._offset = t.subtract(this._startPos)),
          (this._startTime = +new Date()),
          this.fire('start'),
          this._animate();
      },
      stop: function () {
        this._inProgress && (this._step(!0), this._complete());
      },
      _animate: function () {
        (this._animId = d(this._animate, this)), this._step();
      },
      _step: function (I) {
        var t = +new Date() - this._startTime,
          E = 1e3 * this._duration;
        t < E
          ? this._runFrame(this._easeOut(t / E), I)
          : (this._runFrame(1), this._complete());
      },
      _runFrame: function (I, t) {
        var E = this._startPos.add(this._offset.multiplyBy(I));
        t && E._round(), ft(this._el, E), this.fire('step');
      },
      _complete: function () {
        H(this._animId), (this._inProgress = !1), this.fire('end');
      },
      _easeOut: function (I) {
        return 1 - Math.pow(1 - I, this._easeOutPower);
      },
    }),
    TE = B.extend({
      options: {
        crs: J,
        center: void 0,
        zoom: void 0,
        minZoom: void 0,
        maxZoom: void 0,
        layers: [],
        maxBounds: void 0,
        renderer: void 0,
        zoomAnimation: !0,
        zoomAnimationThreshold: 4,
        fadeAnimation: !0,
        markerZoomAnimation: !0,
        transform3DLimit: 8388608,
        zoomSnap: 1,
        zoomDelta: 1,
        trackResize: !0,
      },
      initialize: function (I, t) {
        (t = O(this, t)),
          (this._handlers = []),
          (this._layers = {}),
          (this._zoomBoundLayers = {}),
          (this._sizeChanged = !0),
          this._initContainer(I),
          this._initLayout(),
          (this._onResize = T(this._onResize, this)),
          this._initEvents(),
          t.maxBounds && this.setMaxBounds(t.maxBounds),
          void 0 !== t.zoom && (this._zoom = this._limitZoom(t.zoom)),
          t.center &&
            void 0 !== t.zoom &&
            this.setView(X(t.center), t.zoom, { reset: !0 }),
          this.callInitHooks(),
          (this._zoomAnimated =
            Nt && GI.any3d && !GI.mobileOpera && this.options.zoomAnimation),
          this._zoomAnimated &&
            (this._createAnimProxy(),
            Ft(this._proxy, At, this._catchTransitionEnd, this)),
          this._addLayers(this.options.layers);
      },
      setView: function (I, t, _) {
        return (
          (t = void 0 === t ? this._zoom : this._limitZoom(t)),
          (I = this._limitCenter(X(I), t, this.options.maxBounds)),
          (_ = _ || {}),
          this._stop(),
          this._loaded &&
          !_.reset &&
          !0 !== _ &&
          (void 0 !== _.animate &&
            ((_.zoom = E({ animate: _.animate }, _.zoom)),
            (_.pan = E({ animate: _.animate, duration: _.duration }, _.pan))),
          this._zoom !== t
            ? this._tryAnimatedZoom && this._tryAnimatedZoom(I, t, _.zoom)
            : this._tryAnimatedPan(I, _.pan))
            ? (clearTimeout(this._sizeTimer), this)
            : (this._resetView(I, t, _.pan && _.pan.noMoveStart), this)
        );
      },
      setZoom: function (I, t) {
        return this._loaded
          ? this.setView(this.getCenter(), I, { zoom: t })
          : ((this._zoom = I), this);
      },
      zoomIn: function (I, t) {
        return (
          (I = I || (GI.any3d ? this.options.zoomDelta : 1)),
          this.setZoom(this._zoom + I, t)
        );
      },
      zoomOut: function (I, t) {
        return (
          (I = I || (GI.any3d ? this.options.zoomDelta : 1)),
          this.setZoom(this._zoom - I, t)
        );
      },
      setZoomAround: function (I, t, E) {
        var _ = this.getZoomScale(t),
          T = this.getSize().divideBy(2),
          e = (I instanceof V ? I : this.latLngToContainerPoint(I))
            .subtract(T)
            .multiplyBy(1 - 1 / _),
          i = this.containerPointToLatLng(T.add(e));
        return this.setView(i, t, { zoom: E });
      },
      _getBoundsCenterZoom: function (I, t) {
        (t = t || {}), (I = I.getBounds ? I.getBounds() : F(I));
        var E = Z(t.paddingTopLeft || t.padding || [0, 0]),
          _ = Z(t.paddingBottomRight || t.padding || [0, 0]),
          T = this.getBoundsZoom(I, !1, E.add(_));
        if (
          (T = 'number' == typeof t.maxZoom ? Math.min(t.maxZoom, T) : T) ===
          1 / 0
        )
          return { center: I.getCenter(), zoom: T };
        var e = _.subtract(E).divideBy(2),
          i = this.project(I.getSouthWest(), T),
          n = this.project(I.getNorthEast(), T);
        return {
          center: this.unproject(i.add(n).divideBy(2).add(e), T),
          zoom: T,
        };
      },
      fitBounds: function (I, t) {
        if (!(I = F(I)).isValid()) throw new Error('Bounds are not valid.');
        var E = this._getBoundsCenterZoom(I, t);
        return this.setView(E.center, E.zoom, t);
      },
      fitWorld: function (I) {
        return this.fitBounds(
          [
            [-90, -180],
            [90, 180],
          ],
          I
        );
      },
      panTo: function (I, t) {
        return this.setView(I, this._zoom, { pan: t });
      },
      panBy: function (I, t) {
        if (((t = t || {}), !(I = Z(I).round()).x && !I.y))
          return this.fire('moveend');
        if (!0 !== t.animate && !this.getSize().contains(I))
          return (
            this._resetView(
              this.unproject(this.project(this.getCenter()).add(I)),
              this.getZoom()
            ),
            this
          );
        if (
          (this._panAnim ||
            ((this._panAnim = new _E()),
            this._panAnim.on(
              {
                step: this._onPanTransitionStep,
                end: this._onPanTransitionEnd,
              },
              this
            )),
          t.noMoveStart || this.fire('movestart'),
          !1 !== t.animate)
        ) {
          lt(this._mapPane, 'leaflet-pan-anim');
          var E = this._getMapPanePos().subtract(I).round();
          this._panAnim.run(
            this._mapPane,
            E,
            t.duration || 0.25,
            t.easeLinearity
          );
        } else this._rawPanBy(I), this.fire('move').fire('moveend');
        return this;
      },
      flyTo: function (I, t, E) {
        if (!1 === (E = E || {}).animate || !GI.any3d)
          return this.setView(I, t, E);
        this._stop();
        var _ = this.project(this.getCenter()),
          T = this.project(I),
          e = this.getSize(),
          i = this._zoom;
        (I = X(I)), (t = void 0 === t ? i : t);
        var n = Math.max(e.x, e.y),
          o = n * this.getZoomScale(i, t),
          C = T.distanceTo(_) || 1,
          D = 1.42,
          N = D * D;
        function A(I) {
          var t =
              (o * o - n * n + (I ? -1 : 1) * N * N * C * C) /
              (2 * (I ? o : n) * N * C),
            E = Math.sqrt(t * t + 1) - t;
          return E < 1e-9 ? -18 : Math.log(E);
        }
        function O(I) {
          return (Math.exp(I) - Math.exp(-I)) / 2;
        }
        function R(I) {
          return (Math.exp(I) + Math.exp(-I)) / 2;
        }
        function s(I) {
          return O(I) / R(I);
        }
        var a = A(0);
        function r(I) {
          return n * (R(a) / R(a + D * I));
        }
        function M(I) {
          return (n * (R(a) * s(a + D * I) - O(a))) / N;
        }
        function S(I) {
          return 1 - Math.pow(1 - I, 1.5);
        }
        var h = Date.now(),
          l = (A(1) - a) / D,
          u = E.duration ? 1e3 * E.duration : 1e3 * l * 0.8;
        function c() {
          var E = (Date.now() - h) / u,
            e = S(E) * l;
          E <= 1
            ? ((this._flyToFrame = d(c, this)),
              this._move(
                this.unproject(_.add(T.subtract(_).multiplyBy(M(e) / C)), i),
                this.getScaleZoom(n / r(e), i),
                { flyTo: !0 }
              ))
            : this._move(I, t)._moveEnd(!0);
        }
        return this._moveStart(!0, E.noMoveStart), c.call(this), this;
      },
      flyToBounds: function (I, t) {
        var E = this._getBoundsCenterZoom(I, t);
        return this.flyTo(E.center, E.zoom, t);
      },
      setMaxBounds: function (I) {
        return (
          (I = F(I)),
          this.listens('moveend', this._panInsideMaxBounds) &&
            this.off('moveend', this._panInsideMaxBounds),
          I.isValid()
            ? ((this.options.maxBounds = I),
              this._loaded && this._panInsideMaxBounds(),
              this.on('moveend', this._panInsideMaxBounds))
            : ((this.options.maxBounds = null), this)
        );
      },
      setMinZoom: function (I) {
        var t = this.options.minZoom;
        return (
          (this.options.minZoom = I),
          this._loaded &&
          t !== I &&
          (this.fire('zoomlevelschange'), this.getZoom() < this.options.minZoom)
            ? this.setZoom(I)
            : this
        );
      },
      setMaxZoom: function (I) {
        var t = this.options.maxZoom;
        return (
          (this.options.maxZoom = I),
          this._loaded &&
          t !== I &&
          (this.fire('zoomlevelschange'), this.getZoom() > this.options.maxZoom)
            ? this.setZoom(I)
            : this
        );
      },
      panInsideBounds: function (I, t) {
        this._enforcingBounds = !0;
        var E = this.getCenter(),
          _ = this._limitCenter(E, this._zoom, F(I));
        return (
          E.equals(_) || this.panTo(_, t), (this._enforcingBounds = !1), this
        );
      },
      panInside: function (I, t) {
        var E = Z((t = t || {}).paddingTopLeft || t.padding || [0, 0]),
          _ = Z(t.paddingBottomRight || t.padding || [0, 0]),
          T = this.project(this.getCenter()),
          e = this.project(I),
          i = this.getPixelBounds(),
          n = v([i.min.add(E), i.max.subtract(_)]),
          o = n.getSize();
        if (!n.contains(e)) {
          this._enforcingBounds = !0;
          var C = e.subtract(n.getCenter()),
            D = n.extend(e).getSize().subtract(o);
          (T.x += C.x < 0 ? -D.x : D.x),
            (T.y += C.y < 0 ? -D.y : D.y),
            this.panTo(this.unproject(T), t),
            (this._enforcingBounds = !1);
        }
        return this;
      },
      invalidateSize: function (I) {
        if (!this._loaded) return this;
        I = E({ animate: !1, pan: !0 }, !0 === I ? { animate: !0 } : I);
        var t = this.getSize();
        (this._sizeChanged = !0), (this._lastCenter = null);
        var _ = this.getSize(),
          e = t.divideBy(2).round(),
          i = _.divideBy(2).round(),
          n = e.subtract(i);
        return n.x || n.y
          ? (I.animate && I.pan
              ? this.panBy(n)
              : (I.pan && this._rawPanBy(n),
                this.fire('move'),
                I.debounceMoveend
                  ? (clearTimeout(this._sizeTimer),
                    (this._sizeTimer = setTimeout(
                      T(this.fire, this, 'moveend'),
                      200
                    )))
                  : this.fire('moveend')),
            this.fire('resize', { oldSize: t, newSize: _ }))
          : this;
      },
      stop: function () {
        return (
          this.setZoom(this._limitZoom(this._zoom)),
          this.options.zoomSnap || this.fire('viewreset'),
          this._stop()
        );
      },
      locate: function (I) {
        if (
          ((I = this._locateOptions = E({ timeout: 1e4, watch: !1 }, I)),
          !('geolocation' in navigator))
        )
          return (
            this._handleGeolocationError({
              code: 0,
              message: 'Geolocation not supported.',
            }),
            this
          );
        var t = T(this._handleGeolocationResponse, this),
          _ = T(this._handleGeolocationError, this);
        return (
          I.watch
            ? (this._locationWatchId = navigator.geolocation.watchPosition(
                t,
                _,
                I
              ))
            : navigator.geolocation.getCurrentPosition(t, _, I),
          this
        );
      },
      stopLocate: function () {
        return (
          navigator.geolocation &&
            navigator.geolocation.clearWatch &&
            navigator.geolocation.clearWatch(this._locationWatchId),
          this._locateOptions && (this._locateOptions.setView = !1),
          this
        );
      },
      _handleGeolocationError: function (I) {
        if (this._container._leaflet_id) {
          var t = I.code,
            E =
              I.message ||
              (1 === t
                ? 'permission denied'
                : 2 === t
                ? 'position unavailable'
                : 'timeout');
          this._locateOptions.setView && !this._loaded && this.fitWorld(),
            this.fire('locationerror', {
              code: t,
              message: 'Geolocation error: ' + E + '.',
            });
        }
      },
      _handleGeolocationResponse: function (I) {
        if (this._container._leaflet_id) {
          var t = new y(I.coords.latitude, I.coords.longitude),
            E = t.toBounds(2 * I.coords.accuracy),
            _ = this._locateOptions;
          if (_.setView) {
            var T = this.getBoundsZoom(E);
            this.setView(t, _.maxZoom ? Math.min(T, _.maxZoom) : T);
          }
          var e = { latlng: t, bounds: E, timestamp: I.timestamp };
          for (var i in I.coords)
            'number' == typeof I.coords[i] && (e[i] = I.coords[i]);
          this.fire('locationfound', e);
        }
      },
      addHandler: function (I, t) {
        if (!t) return this;
        var E = (this[I] = new t(this));
        return this._handlers.push(E), this.options[I] && E.enable(), this;
      },
      remove: function () {
        if (
          (this._initEvents(!0),
          this.options.maxBounds &&
            this.off('moveend', this._panInsideMaxBounds),
          this._containerId !== this._container._leaflet_id)
        )
          throw new Error('Map container is being reused by another instance');
        try {
          delete this._container._leaflet_id, delete this._containerId;
        } catch (t) {
          (this._container._leaflet_id = void 0), (this._containerId = void 0);
        }
        var I;
        for (I in (void 0 !== this._locationWatchId && this.stopLocate(),
        this._stop(),
        at(this._mapPane),
        this._clearControlPos && this._clearControlPos(),
        this._resizeRequest &&
          (H(this._resizeRequest), (this._resizeRequest = null)),
        this._clearHandlers(),
        this._loaded && this.fire('unload'),
        this._layers))
          this._layers[I].remove();
        for (I in this._panes) at(this._panes[I]);
        return (
          (this._layers = []),
          (this._panes = []),
          delete this._mapPane,
          delete this._renderer,
          this
        );
      },
      createPane: function (I, t) {
        var E = st(
          'div',
          'leaflet-pane' +
            (I ? ' leaflet-' + I.replace('Pane', '') + '-pane' : ''),
          t || this._mapPane
        );
        return I && (this._panes[I] = E), E;
      },
      getCenter: function () {
        return (
          this._checkIfLoaded(),
          this._lastCenter && !this._moved()
            ? this._lastCenter.clone()
            : this.layerPointToLatLng(this._getCenterLayerPoint())
        );
      },
      getZoom: function () {
        return this._zoom;
      },
      getBounds: function () {
        var I = this.getPixelBounds();
        return new G(
          this.unproject(I.getBottomLeft()),
          this.unproject(I.getTopRight())
        );
      },
      getMinZoom: function () {
        return void 0 === this.options.minZoom
          ? this._layersMinZoom || 0
          : this.options.minZoom;
      },
      getMaxZoom: function () {
        return void 0 === this.options.maxZoom
          ? void 0 === this._layersMaxZoom
            ? 1 / 0
            : this._layersMaxZoom
          : this.options.maxZoom;
      },
      getBoundsZoom: function (I, t, E) {
        (I = F(I)), (E = Z(E || [0, 0]));
        var _ = this.getZoom() || 0,
          T = this.getMinZoom(),
          e = this.getMaxZoom(),
          i = I.getNorthWest(),
          n = I.getSouthEast(),
          o = this.getSize().subtract(E),
          C = v(this.project(n, _), this.project(i, _)).getSize(),
          D = GI.any3d ? this.options.zoomSnap : 1,
          N = o.x / C.x,
          A = o.y / C.y,
          O = t ? Math.max(N, A) : Math.min(N, A);
        return (
          (_ = this.getScaleZoom(O, _)),
          D &&
            ((_ = Math.round(_ / (D / 100)) * (D / 100)),
            (_ = t ? Math.ceil(_ / D) * D : Math.floor(_ / D) * D)),
          Math.max(T, Math.min(e, _))
        );
      },
      getSize: function () {
        return (
          (this._size && !this._sizeChanged) ||
            ((this._size = new V(
              this._container.clientWidth || 0,
              this._container.clientHeight || 0
            )),
            (this._sizeChanged = !1)),
          this._size.clone()
        );
      },
      getPixelBounds: function (I, t) {
        var E = this._getTopLeftPoint(I, t);
        return new Y(E, E.add(this.getSize()));
      },
      getPixelOrigin: function () {
        return this._checkIfLoaded(), this._pixelOrigin;
      },
      getPixelWorldBounds: function (I) {
        return this.options.crs.getProjectedBounds(
          void 0 === I ? this.getZoom() : I
        );
      },
      getPane: function (I) {
        return 'string' == typeof I ? this._panes[I] : I;
      },
      getPanes: function () {
        return this._panes;
      },
      getContainer: function () {
        return this._container;
      },
      getZoomScale: function (I, t) {
        var E = this.options.crs;
        return (t = void 0 === t ? this._zoom : t), E.scale(I) / E.scale(t);
      },
      getScaleZoom: function (I, t) {
        var E = this.options.crs;
        t = void 0 === t ? this._zoom : t;
        var _ = E.zoom(I * E.scale(t));
        return isNaN(_) ? 1 / 0 : _;
      },
      project: function (I, t) {
        return (
          (t = void 0 === t ? this._zoom : t),
          this.options.crs.latLngToPoint(X(I), t)
        );
      },
      unproject: function (I, t) {
        return (
          (t = void 0 === t ? this._zoom : t),
          this.options.crs.pointToLatLng(Z(I), t)
        );
      },
      layerPointToLatLng: function (I) {
        var t = Z(I).add(this.getPixelOrigin());
        return this.unproject(t);
      },
      latLngToLayerPoint: function (I) {
        return this.project(X(I))._round()._subtract(this.getPixelOrigin());
      },
      wrapLatLng: function (I) {
        return this.options.crs.wrapLatLng(X(I));
      },
      wrapLatLngBounds: function (I) {
        return this.options.crs.wrapLatLngBounds(F(I));
      },
      distance: function (I, t) {
        return this.options.crs.distance(X(I), X(t));
      },
      containerPointToLayerPoint: function (I) {
        return Z(I).subtract(this._getMapPanePos());
      },
      layerPointToContainerPoint: function (I) {
        return Z(I).add(this._getMapPanePos());
      },
      containerPointToLatLng: function (I) {
        var t = this.containerPointToLayerPoint(Z(I));
        return this.layerPointToLatLng(t);
      },
      latLngToContainerPoint: function (I) {
        return this.layerPointToContainerPoint(this.latLngToLayerPoint(X(I)));
      },
      mouseEventToContainerPoint: function (I) {
        return qt(I, this._container);
      },
      mouseEventToLayerPoint: function (I) {
        return this.containerPointToLayerPoint(
          this.mouseEventToContainerPoint(I)
        );
      },
      mouseEventToLatLng: function (I) {
        return this.layerPointToLatLng(this.mouseEventToLayerPoint(I));
      },
      _initContainer: function (I) {
        var t = (this._container = Ot(I));
        if (!t) throw new Error('Map container not found.');
        if (t._leaflet_id)
          throw new Error('Map container is already initialized.');
        Ft(t, 'scroll', this._onScroll, this), (this._containerId = i(t));
      },
      _initLayout: function () {
        var I = this._container;
        (this._fadeAnimated = this.options.fadeAnimation && GI.any3d),
          lt(
            I,
            'leaflet-container' +
              (GI.touch ? ' leaflet-touch' : '') +
              (GI.retina ? ' leaflet-retina' : '') +
              (GI.ielt9 ? ' leaflet-oldie' : '') +
              (GI.safari ? ' leaflet-safari' : '') +
              (this._fadeAnimated ? ' leaflet-fade-anim' : '')
          );
        var t = Rt(I, 'position');
        'absolute' !== t &&
          'relative' !== t &&
          'fixed' !== t &&
          'sticky' !== t &&
          (I.style.position = 'relative'),
          this._initPanes(),
          this._initControlPos && this._initControlPos();
      },
      _initPanes: function () {
        var I = (this._panes = {});
        (this._paneRenderers = {}),
          (this._mapPane = this.createPane('mapPane', this._container)),
          ft(this._mapPane, new V(0, 0)),
          this.createPane('tilePane'),
          this.createPane('overlayPane'),
          this.createPane('shadowPane'),
          this.createPane('markerPane'),
          this.createPane('tooltipPane'),
          this.createPane('popupPane'),
          this.options.markerZoomAnimation ||
            (lt(I.markerPane, 'leaflet-zoom-hide'),
            lt(I.shadowPane, 'leaflet-zoom-hide'));
      },
      _resetView: function (I, t, E) {
        ft(this._mapPane, new V(0, 0));
        var _ = !this._loaded;
        (this._loaded = !0),
          (t = this._limitZoom(t)),
          this.fire('viewprereset');
        var T = this._zoom !== t;
        this._moveStart(T, E)._move(I, t)._moveEnd(T),
          this.fire('viewreset'),
          _ && this.fire('load');
      },
      _moveStart: function (I, t) {
        return I && this.fire('zoomstart'), t || this.fire('movestart'), this;
      },
      _move: function (I, t, E, _) {
        void 0 === t && (t = this._zoom);
        var T = this._zoom !== t;
        return (
          (this._zoom = t),
          (this._lastCenter = I),
          (this._pixelOrigin = this._getNewPixelOrigin(I)),
          _
            ? E && E.pinch && this.fire('zoom', E)
            : ((T || (E && E.pinch)) && this.fire('zoom', E),
              this.fire('move', E)),
          this
        );
      },
      _moveEnd: function (I) {
        return I && this.fire('zoomend'), this.fire('moveend');
      },
      _stop: function () {
        return H(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
      },
      _rawPanBy: function (I) {
        ft(this._mapPane, this._getMapPanePos().subtract(I));
      },
      _getZoomSpan: function () {
        return this.getMaxZoom() - this.getMinZoom();
      },
      _panInsideMaxBounds: function () {
        this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
      },
      _checkIfLoaded: function () {
        if (!this._loaded) throw new Error('Set map center and zoom first.');
      },
      _initEvents: function (I) {
        (this._targets = {}), (this._targets[i(this._container)] = this);
        var t = I ? Xt : Ft;
        t(
          this._container,
          'click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup',
          this._handleDOMEvent,
          this
        ),
          this.options.trackResize && t(window, 'resize', this._onResize, this),
          GI.any3d &&
            this.options.transform3DLimit &&
            (I ? this.off : this.on).call(this, 'moveend', this._onMoveEnd);
      },
      _onResize: function () {
        H(this._resizeRequest),
          (this._resizeRequest = d(function () {
            this.invalidateSize({ debounceMoveend: !0 });
          }, this));
      },
      _onScroll: function () {
        (this._container.scrollTop = 0), (this._container.scrollLeft = 0);
      },
      _onMoveEnd: function () {
        var I = this._getMapPanePos();
        Math.max(Math.abs(I.x), Math.abs(I.y)) >=
          this.options.transform3DLimit &&
          this._resetView(this.getCenter(), this.getZoom());
      },
      _findEventTargets: function (I, t) {
        for (
          var E,
            _ = [],
            T = 'mouseout' === t || 'mouseover' === t,
            e = I.target || I.srcElement,
            n = !1;
          e;

        ) {
          if (
            (E = this._targets[i(e)]) &&
            ('click' === t || 'preclick' === t) &&
            this._draggableMoved(E)
          ) {
            n = !0;
            break;
          }
          if (E && E.listens(t, !0)) {
            if (T && !tE(e, I)) break;
            if ((_.push(E), T)) break;
          }
          if (e === this._container) break;
          e = e.parentNode;
        }
        return _.length || n || T || !this.listens(t, !0) || (_ = [this]), _;
      },
      _isClickDisabled: function (I) {
        for (; I && I !== this._container; ) {
          if (I._leaflet_disable_click) return !0;
          I = I.parentNode;
        }
      },
      _handleDOMEvent: function (I) {
        var t = I.target || I.srcElement;
        if (
          !(
            !this._loaded ||
            t._leaflet_disable_events ||
            ('click' === I.type && this._isClickDisabled(t))
          )
        ) {
          var E = I.type;
          'mousedown' === E && gt(t), this._fireDOMEvent(I, E);
        }
      },
      _mouseEvents: [
        'click',
        'dblclick',
        'mouseover',
        'mouseout',
        'contextmenu',
      ],
      _fireDOMEvent: function (I, t, _) {
        if ('click' === I.type) {
          var T = E({}, I);
          (T.type = 'preclick'), this._fireDOMEvent(T, T.type, _);
        }
        var e = this._findEventTargets(I, t);
        if (_) {
          for (var i = [], n = 0; n < _.length; n++)
            _[n].listens(t, !0) && i.push(_[n]);
          e = i.concat(e);
        }
        if (e.length) {
          'contextmenu' === t && Jt(I);
          var o = e[0],
            C = { originalEvent: I };
          if (
            'keypress' !== I.type &&
            'keydown' !== I.type &&
            'keyup' !== I.type
          ) {
            var D = o.getLatLng && (!o._radius || o._radius <= 10);
            (C.containerPoint = D
              ? this.latLngToContainerPoint(o.getLatLng())
              : this.mouseEventToContainerPoint(I)),
              (C.layerPoint = this.containerPointToLayerPoint(
                C.containerPoint
              )),
              (C.latlng = D
                ? o.getLatLng()
                : this.layerPointToLatLng(C.layerPoint));
          }
          for (n = 0; n < e.length; n++)
            if (
              (e[n].fire(t, C, !0),
              C.originalEvent._stopped ||
                (!1 === e[n].options.bubblingMouseEvents &&
                  -1 !== M(this._mouseEvents, t)))
            )
              return;
        }
      },
      _draggableMoved: function (I) {
        return (
          ((I = I.dragging && I.dragging.enabled() ? I : this).dragging &&
            I.dragging.moved()) ||
          (this.boxZoom && this.boxZoom.moved())
        );
      },
      _clearHandlers: function () {
        for (var I = 0, t = this._handlers.length; I < t; I++)
          this._handlers[I].disable();
      },
      whenReady: function (I, t) {
        return (
          this._loaded
            ? I.call(t || this, { target: this })
            : this.on('load', I, t),
          this
        );
      },
      _getMapPanePos: function () {
        return Pt(this._mapPane) || new V(0, 0);
      },
      _moved: function () {
        var I = this._getMapPanePos();
        return I && !I.equals([0, 0]);
      },
      _getTopLeftPoint: function (I, t) {
        return (
          I && void 0 !== t
            ? this._getNewPixelOrigin(I, t)
            : this.getPixelOrigin()
        ).subtract(this._getMapPanePos());
      },
      _getNewPixelOrigin: function (I, t) {
        var E = this.getSize()._divideBy(2);
        return this.project(I, t)
          ._subtract(E)
          ._add(this._getMapPanePos())
          ._round();
      },
      _latLngToNewLayerPoint: function (I, t, E) {
        var _ = this._getNewPixelOrigin(E, t);
        return this.project(I, t)._subtract(_);
      },
      _latLngBoundsToNewLayerBounds: function (I, t, E) {
        var _ = this._getNewPixelOrigin(E, t);
        return v([
          this.project(I.getSouthWest(), t)._subtract(_),
          this.project(I.getNorthWest(), t)._subtract(_),
          this.project(I.getSouthEast(), t)._subtract(_),
          this.project(I.getNorthEast(), t)._subtract(_),
        ]);
      },
      _getCenterLayerPoint: function () {
        return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
      },
      _getCenterOffset: function (I) {
        return this.latLngToLayerPoint(I).subtract(this._getCenterLayerPoint());
      },
      _limitCenter: function (I, t, E) {
        if (!E) return I;
        var _ = this.project(I, t),
          T = this.getSize().divideBy(2),
          e = new Y(_.subtract(T), _.add(T)),
          i = this._getBoundsOffset(e, E, t);
        return Math.abs(i.x) <= 1 && Math.abs(i.y) <= 1
          ? I
          : this.unproject(_.add(i), t);
      },
      _limitOffset: function (I, t) {
        if (!t) return I;
        var E = this.getPixelBounds(),
          _ = new Y(E.min.add(I), E.max.add(I));
        return I.add(this._getBoundsOffset(_, t));
      },
      _getBoundsOffset: function (I, t, E) {
        var _ = v(
            this.project(t.getNorthEast(), E),
            this.project(t.getSouthWest(), E)
          ),
          T = _.min.subtract(I.min),
          e = _.max.subtract(I.max);
        return new V(this._rebound(T.x, -e.x), this._rebound(T.y, -e.y));
      },
      _rebound: function (I, t) {
        return I + t > 0
          ? Math.round(I - t) / 2
          : Math.max(0, Math.ceil(I)) - Math.max(0, Math.floor(t));
      },
      _limitZoom: function (I) {
        var t = this.getMinZoom(),
          E = this.getMaxZoom(),
          _ = GI.any3d ? this.options.zoomSnap : 1;
        return _ && (I = Math.round(I / _) * _), Math.max(t, Math.min(E, I));
      },
      _onPanTransitionStep: function () {
        this.fire('move');
      },
      _onPanTransitionEnd: function () {
        ut(this._mapPane, 'leaflet-pan-anim'), this.fire('moveend');
      },
      _tryAnimatedPan: function (I, t) {
        var E = this._getCenterOffset(I)._trunc();
        return !(
          (!0 !== (t && t.animate) && !this.getSize().contains(E)) ||
          (this.panBy(E, t), 0)
        );
      },
      _createAnimProxy: function () {
        var I = (this._proxy = st(
          'div',
          'leaflet-proxy leaflet-zoom-animated'
        ));
        this._panes.mapPane.appendChild(I),
          this.on(
            'zoomanim',
            function (I) {
              var t = Dt,
                E = this._proxy.style[t];
              mt(
                this._proxy,
                this.project(I.center, I.zoom),
                this.getZoomScale(I.zoom, 1)
              ),
                E === this._proxy.style[t] &&
                  this._animatingZoom &&
                  this._onZoomTransitionEnd();
            },
            this
          ),
          this.on('load moveend', this._animMoveEnd, this),
          this._on('unload', this._destroyAnimProxy, this);
      },
      _destroyAnimProxy: function () {
        at(this._proxy),
          this.off('load moveend', this._animMoveEnd, this),
          delete this._proxy;
      },
      _animMoveEnd: function () {
        var I = this.getCenter(),
          t = this.getZoom();
        mt(this._proxy, this.project(I, t), this.getZoomScale(t, 1));
      },
      _catchTransitionEnd: function (I) {
        this._animatingZoom &&
          I.propertyName.indexOf('transform') >= 0 &&
          this._onZoomTransitionEnd();
      },
      _nothingToAnimate: function () {
        return !this._container.getElementsByClassName('leaflet-zoom-animated')
          .length;
      },
      _tryAnimatedZoom: function (I, t, E) {
        if (this._animatingZoom) return !0;
        if (
          ((E = E || {}),
          !this._zoomAnimated ||
            !1 === E.animate ||
            this._nothingToAnimate() ||
            Math.abs(t - this._zoom) > this.options.zoomAnimationThreshold)
        )
          return !1;
        var _ = this.getZoomScale(t),
          T = this._getCenterOffset(I)._divideBy(1 - 1 / _);
        return !(
          (!0 !== E.animate && !this.getSize().contains(T)) ||
          (d(function () {
            this._moveStart(!0, E.noMoveStart || !1)._animateZoom(I, t, !0);
          }, this),
          0)
        );
      },
      _animateZoom: function (I, t, E, _) {
        this._mapPane &&
          (E &&
            ((this._animatingZoom = !0),
            (this._animateToCenter = I),
            (this._animateToZoom = t),
            lt(this._mapPane, 'leaflet-zoom-anim')),
          this.fire('zoomanim', { center: I, zoom: t, noUpdate: _ }),
          this._tempFireZoomEvent ||
            (this._tempFireZoomEvent = this._zoom !== this._animateToZoom),
          this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
          setTimeout(T(this._onZoomTransitionEnd, this), 250));
      },
      _onZoomTransitionEnd: function () {
        this._animatingZoom &&
          (this._mapPane && ut(this._mapPane, 'leaflet-zoom-anim'),
          (this._animatingZoom = !1),
          this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
          this._tempFireZoomEvent && this.fire('zoom'),
          delete this._tempFireZoomEvent,
          this.fire('move'),
          this._moveEnd(!0));
      },
    });
  function eE(I, t) {
    return new TE(I, t);
  }
  var iE = m.extend({
      options: { position: 'topright' },
      initialize: function (I) {
        O(this, I);
      },
      getPosition: function () {
        return this.options.position;
      },
      setPosition: function (I) {
        var t = this._map;
        return (
          t && t.removeControl(this),
          (this.options.position = I),
          t && t.addControl(this),
          this
        );
      },
      getContainer: function () {
        return this._container;
      },
      addTo: function (I) {
        this.remove(), (this._map = I);
        var t = (this._container = this.onAdd(I)),
          E = this.getPosition(),
          _ = I._controlCorners[E];
        return (
          lt(t, 'leaflet-control'),
          -1 !== E.indexOf('bottom')
            ? _.insertBefore(t, _.firstChild)
            : _.appendChild(t),
          this._map.on('unload', this.remove, this),
          this
        );
      },
      remove: function () {
        return this._map
          ? (at(this._container),
            this.onRemove && this.onRemove(this._map),
            this._map.off('unload', this.remove, this),
            (this._map = null),
            this)
          : this;
      },
      _refocusOnMap: function (I) {
        this._map &&
          I &&
          I.screenX > 0 &&
          I.screenY > 0 &&
          this._map.getContainer().focus();
      },
    }),
    nE = function (I) {
      return new iE(I);
    };
  TE.include({
    addControl: function (I) {
      return I.addTo(this), this;
    },
    removeControl: function (I) {
      return I.remove(), this;
    },
    _initControlPos: function () {
      var I = (this._controlCorners = {}),
        t = 'leaflet-',
        E = (this._controlContainer = st(
          'div',
          t + 'control-container',
          this._container
        ));
      function _(_, T) {
        var e = t + _ + ' ' + t + T;
        I[_ + T] = st('div', e, E);
      }
      _('top', 'left'),
        _('top', 'right'),
        _('bottom', 'left'),
        _('bottom', 'right');
    },
    _clearControlPos: function () {
      for (var I in this._controlCorners) at(this._controlCorners[I]);
      at(this._controlContainer),
        delete this._controlCorners,
        delete this._controlContainer;
    },
  });
  var oE = iE.extend({
      options: {
        collapsed: !0,
        position: 'topright',
        autoZIndex: !0,
        hideSingleBase: !1,
        sortLayers: !1,
        sortFunction: function (I, t, E, _) {
          return E < _ ? -1 : _ < E ? 1 : 0;
        },
      },
      initialize: function (I, t, E) {
        for (var _ in (O(this, E),
        (this._layerControlInputs = []),
        (this._layers = []),
        (this._lastZIndex = 0),
        (this._handlingClick = !1),
        (this._preventClick = !1),
        I))
          this._addLayer(I[_], _);
        for (_ in t) this._addLayer(t[_], _, !0);
      },
      onAdd: function (I) {
        this._initLayout(),
          this._update(),
          (this._map = I),
          I.on('zoomend', this._checkDisabledLayers, this);
        for (var t = 0; t < this._layers.length; t++)
          this._layers[t].layer.on('add remove', this._onLayerChange, this);
        return this._container;
      },
      addTo: function (I) {
        return iE.prototype.addTo.call(this, I), this._expandIfNotCollapsed();
      },
      onRemove: function () {
        this._map.off('zoomend', this._checkDisabledLayers, this);
        for (var I = 0; I < this._layers.length; I++)
          this._layers[I].layer.off('add remove', this._onLayerChange, this);
      },
      addBaseLayer: function (I, t) {
        return this._addLayer(I, t), this._map ? this._update() : this;
      },
      addOverlay: function (I, t) {
        return this._addLayer(I, t, !0), this._map ? this._update() : this;
      },
      removeLayer: function (I) {
        I.off('add remove', this._onLayerChange, this);
        var t = this._getLayer(i(I));
        return (
          t && this._layers.splice(this._layers.indexOf(t), 1),
          this._map ? this._update() : this
        );
      },
      expand: function () {
        lt(this._container, 'leaflet-control-layers-expanded'),
          (this._section.style.height = null);
        var I = this._map.getSize().y - (this._container.offsetTop + 50);
        return (
          I < this._section.clientHeight
            ? (lt(this._section, 'leaflet-control-layers-scrollbar'),
              (this._section.style.height = I + 'px'))
            : ut(this._section, 'leaflet-control-layers-scrollbar'),
          this._checkDisabledLayers(),
          this
        );
      },
      collapse: function () {
        return ut(this._container, 'leaflet-control-layers-expanded'), this;
      },
      _initLayout: function () {
        var I = 'leaflet-control-layers',
          t = (this._container = st('div', I)),
          E = this.options.collapsed;
        t.setAttribute('aria-haspopup', !0), zt(t), kt(t);
        var _ = (this._section = st('section', I + '-list'));
        E &&
          (this._map.on('click', this.collapse, this),
          Ft(
            t,
            { mouseenter: this._expandSafely, mouseleave: this.collapse },
            this
          ));
        var T = (this._layersLink = st('a', I + '-toggle', t));
        (T.href = '#'),
          (T.title = 'Layers'),
          T.setAttribute('role', 'button'),
          Ft(
            T,
            {
              keydown: function (I) {
                13 === I.keyCode && this._expandSafely();
              },
              click: function (I) {
                Jt(I), this._expandSafely();
              },
            },
            this
          ),
          E || this.expand(),
          (this._baseLayersList = st('div', I + '-base', _)),
          (this._separator = st('div', I + '-separator', _)),
          (this._overlaysList = st('div', I + '-overlays', _)),
          t.appendChild(_);
      },
      _getLayer: function (I) {
        for (var t = 0; t < this._layers.length; t++)
          if (this._layers[t] && i(this._layers[t].layer) === I)
            return this._layers[t];
      },
      _addLayer: function (I, t, E) {
        this._map && I.on('add remove', this._onLayerChange, this),
          this._layers.push({ layer: I, name: t, overlay: E }),
          this.options.sortLayers &&
            this._layers.sort(
              T(function (I, t) {
                return this.options.sortFunction(
                  I.layer,
                  t.layer,
                  I.name,
                  t.name
                );
              }, this)
            ),
          this.options.autoZIndex &&
            I.setZIndex &&
            (this._lastZIndex++, I.setZIndex(this._lastZIndex)),
          this._expandIfNotCollapsed();
      },
      _update: function () {
        if (!this._container) return this;
        rt(this._baseLayersList),
          rt(this._overlaysList),
          (this._layerControlInputs = []);
        var I,
          t,
          E,
          _,
          T = 0;
        for (E = 0; E < this._layers.length; E++)
          (_ = this._layers[E]),
            this._addItem(_),
            (t = t || _.overlay),
            (I = I || !_.overlay),
            (T += _.overlay ? 0 : 1);
        return (
          this.options.hideSingleBase &&
            ((I = I && T > 1),
            (this._baseLayersList.style.display = I ? '' : 'none')),
          (this._separator.style.display = t && I ? '' : 'none'),
          this
        );
      },
      _onLayerChange: function (I) {
        this._handlingClick || this._update();
        var t = this._getLayer(i(I.target)),
          E = t.overlay
            ? 'add' === I.type
              ? 'overlayadd'
              : 'overlayremove'
            : 'add' === I.type
            ? 'baselayerchange'
            : null;
        E && this._map.fire(E, t);
      },
      _createRadioElement: function (I, t) {
        var E =
            '<input type="radio" class="leaflet-control-layers-selector" name="' +
            I +
            '"' +
            (t ? ' checked="checked"' : '') +
            '/>',
          _ = document.createElement('div');
        return (_.innerHTML = E), _.firstChild;
      },
      _addItem: function (I) {
        var t,
          E = document.createElement('label'),
          _ = this._map.hasLayer(I.layer);
        I.overlay
          ? (((t = document.createElement('input')).type = 'checkbox'),
            (t.className = 'leaflet-control-layers-selector'),
            (t.defaultChecked = _))
          : (t = this._createRadioElement('leaflet-base-layers_' + i(this), _)),
          this._layerControlInputs.push(t),
          (t.layerId = i(I.layer)),
          Ft(t, 'click', this._onInputClick, this);
        var T = document.createElement('span');
        T.innerHTML = ' ' + I.name;
        var e = document.createElement('span');
        return (
          E.appendChild(e),
          e.appendChild(t),
          e.appendChild(T),
          (I.overlay ? this._overlaysList : this._baseLayersList).appendChild(
            E
          ),
          this._checkDisabledLayers(),
          E
        );
      },
      _onInputClick: function () {
        if (!this._preventClick) {
          var I,
            t,
            E = this._layerControlInputs,
            _ = [],
            T = [];
          this._handlingClick = !0;
          for (var e = E.length - 1; e >= 0; e--)
            (I = E[e]),
              (t = this._getLayer(I.layerId).layer),
              I.checked ? _.push(t) : I.checked || T.push(t);
          for (e = 0; e < T.length; e++)
            this._map.hasLayer(T[e]) && this._map.removeLayer(T[e]);
          for (e = 0; e < _.length; e++)
            this._map.hasLayer(_[e]) || this._map.addLayer(_[e]);
          (this._handlingClick = !1), this._refocusOnMap();
        }
      },
      _checkDisabledLayers: function () {
        for (
          var I,
            t,
            E = this._layerControlInputs,
            _ = this._map.getZoom(),
            T = E.length - 1;
          T >= 0;
          T--
        )
          (I = E[T]),
            (t = this._getLayer(I.layerId).layer),
            (I.disabled =
              (void 0 !== t.options.minZoom && _ < t.options.minZoom) ||
              (void 0 !== t.options.maxZoom && _ > t.options.maxZoom));
      },
      _expandIfNotCollapsed: function () {
        return this._map && !this.options.collapsed && this.expand(), this;
      },
      _expandSafely: function () {
        var I = this._section;
        (this._preventClick = !0), Ft(I, 'click', Jt), this.expand();
        var t = this;
        setTimeout(function () {
          Xt(I, 'click', Jt), (t._preventClick = !1);
        });
      },
    }),
    CE = function (I, t, E) {
      return new oE(I, t, E);
    },
    DE = iE.extend({
      options: {
        position: 'topleft',
        zoomInText: '<span aria-hidden="true">+</span>',
        zoomInTitle: 'Zoom in',
        zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
        zoomOutTitle: 'Zoom out',
      },
      onAdd: function (I) {
        var t = 'leaflet-control-zoom',
          E = st('div', t + ' leaflet-bar'),
          _ = this.options;
        return (
          (this._zoomInButton = this._createButton(
            _.zoomInText,
            _.zoomInTitle,
            t + '-in',
            E,
            this._zoomIn
          )),
          (this._zoomOutButton = this._createButton(
            _.zoomOutText,
            _.zoomOutTitle,
            t + '-out',
            E,
            this._zoomOut
          )),
          this._updateDisabled(),
          I.on('zoomend zoomlevelschange', this._updateDisabled, this),
          E
        );
      },
      onRemove: function (I) {
        I.off('zoomend zoomlevelschange', this._updateDisabled, this);
      },
      disable: function () {
        return (this._disabled = !0), this._updateDisabled(), this;
      },
      enable: function () {
        return (this._disabled = !1), this._updateDisabled(), this;
      },
      _zoomIn: function (I) {
        !this._disabled &&
          this._map._zoom < this._map.getMaxZoom() &&
          this._map.zoomIn(this._map.options.zoomDelta * (I.shiftKey ? 3 : 1));
      },
      _zoomOut: function (I) {
        !this._disabled &&
          this._map._zoom > this._map.getMinZoom() &&
          this._map.zoomOut(this._map.options.zoomDelta * (I.shiftKey ? 3 : 1));
      },
      _createButton: function (I, t, E, _, T) {
        var e = st('a', E, _);
        return (
          (e.innerHTML = I),
          (e.href = '#'),
          (e.title = t),
          e.setAttribute('role', 'button'),
          e.setAttribute('aria-label', t),
          zt(e),
          Ft(e, 'click', Qt),
          Ft(e, 'click', T, this),
          Ft(e, 'click', this._refocusOnMap, this),
          e
        );
      },
      _updateDisabled: function () {
        var I = this._map,
          t = 'leaflet-disabled';
        ut(this._zoomInButton, t),
          ut(this._zoomOutButton, t),
          this._zoomInButton.setAttribute('aria-disabled', 'false'),
          this._zoomOutButton.setAttribute('aria-disabled', 'false'),
          (this._disabled || I._zoom === I.getMinZoom()) &&
            (lt(this._zoomOutButton, t),
            this._zoomOutButton.setAttribute('aria-disabled', 'true')),
          (this._disabled || I._zoom === I.getMaxZoom()) &&
            (lt(this._zoomInButton, t),
            this._zoomInButton.setAttribute('aria-disabled', 'true'));
      },
    });
  TE.mergeOptions({ zoomControl: !0 }),
    TE.addInitHook(function () {
      this.options.zoomControl &&
        ((this.zoomControl = new DE()), this.addControl(this.zoomControl));
    });
  var NE = function (I) {
      return new DE(I);
    },
    AE = iE.extend({
      options: {
        position: 'bottomleft',
        maxWidth: 100,
        metric: !0,
        imperial: !0,
      },
      onAdd: function (I) {
        var t = 'leaflet-control-scale',
          E = st('div', t),
          _ = this.options;
        return (
          this._addScales(_, t + '-line', E),
          I.on(_.updateWhenIdle ? 'moveend' : 'move', this._update, this),
          I.whenReady(this._update, this),
          E
        );
      },
      onRemove: function (I) {
        I.off(
          this.options.updateWhenIdle ? 'moveend' : 'move',
          this._update,
          this
        );
      },
      _addScales: function (I, t, E) {
        I.metric && (this._mScale = st('div', t, E)),
          I.imperial && (this._iScale = st('div', t, E));
      },
      _update: function () {
        var I = this._map,
          t = I.getSize().y / 2,
          E = I.distance(
            I.containerPointToLatLng([0, t]),
            I.containerPointToLatLng([this.options.maxWidth, t])
          );
        this._updateScales(E);
      },
      _updateScales: function (I) {
        this.options.metric && I && this._updateMetric(I),
          this.options.imperial && I && this._updateImperial(I);
      },
      _updateMetric: function (I) {
        var t = this._getRoundNum(I),
          E = t < 1e3 ? t + ' m' : t / 1e3 + ' km';
        this._updateScale(this._mScale, E, t / I);
      },
      _updateImperial: function (I) {
        var t,
          E,
          _,
          T = 3.2808399 * I;
        T > 5280
          ? ((t = T / 5280),
            (E = this._getRoundNum(t)),
            this._updateScale(this._iScale, E + ' mi', E / t))
          : ((_ = this._getRoundNum(T)),
            this._updateScale(this._iScale, _ + ' ft', _ / T));
      },
      _updateScale: function (I, t, E) {
        (I.style.width = Math.round(this.options.maxWidth * E) + 'px'),
          (I.innerHTML = t);
      },
      _getRoundNum: function (I) {
        var t = Math.pow(10, (Math.floor(I) + '').length - 1),
          E = I / t;
        return (
          t * (E = E >= 10 ? 10 : E >= 5 ? 5 : E >= 3 ? 3 : E >= 2 ? 2 : 1)
        );
      },
    }),
    OE = function (I) {
      return new AE(I);
    },
    RE =
      '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',
    sE = iE.extend({
      options: {
        position: 'bottomright',
        prefix:
          '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' +
          (GI.inlineSvg ? RE + ' ' : '') +
          'Leaflet</a>',
      },
      initialize: function (I) {
        O(this, I), (this._attributions = {});
      },
      onAdd: function (I) {
        for (var t in ((I.attributionControl = this),
        (this._container = st('div', 'leaflet-control-attribution')),
        zt(this._container),
        I._layers))
          I._layers[t].getAttribution &&
            this.addAttribution(I._layers[t].getAttribution());
        return (
          this._update(),
          I.on('layeradd', this._addAttribution, this),
          this._container
        );
      },
      onRemove: function (I) {
        I.off('layeradd', this._addAttribution, this);
      },
      _addAttribution: function (I) {
        I.layer.getAttribution &&
          (this.addAttribution(I.layer.getAttribution()),
          I.layer.once(
            'remove',
            function () {
              this.removeAttribution(I.layer.getAttribution());
            },
            this
          ));
      },
      setPrefix: function (I) {
        return (this.options.prefix = I), this._update(), this;
      },
      addAttribution: function (I) {
        return I
          ? (this._attributions[I] || (this._attributions[I] = 0),
            this._attributions[I]++,
            this._update(),
            this)
          : this;
      },
      removeAttribution: function (I) {
        return I
          ? (this._attributions[I] && (this._attributions[I]--, this._update()),
            this)
          : this;
      },
      _update: function () {
        if (this._map) {
          var I = [];
          for (var t in this._attributions) this._attributions[t] && I.push(t);
          var E = [];
          this.options.prefix && E.push(this.options.prefix),
            I.length && E.push(I.join(', ')),
            (this._container.innerHTML = E.join(
              ' <span aria-hidden="true">|</span> '
            ));
        }
      },
    });
  TE.mergeOptions({ attributionControl: !0 }),
    TE.addInitHook(function () {
      this.options.attributionControl && new sE().addTo(this);
    });
  var aE = function (I) {
    return new sE(I);
  };
  (iE.Layers = oE),
    (iE.Zoom = DE),
    (iE.Scale = AE),
    (iE.Attribution = sE),
    (nE.layers = CE),
    (nE.zoom = NE),
    (nE.scale = OE),
    (nE.attribution = aE);
  var rE = m.extend({
    initialize: function (I) {
      this._map = I;
    },
    enable: function () {
      return this._enabled || ((this._enabled = !0), this.addHooks()), this;
    },
    disable: function () {
      return this._enabled
        ? ((this._enabled = !1), this.removeHooks(), this)
        : this;
    },
    enabled: function () {
      return !!this._enabled;
    },
  });
  rE.addTo = function (I, t) {
    return I.addHandler(t, this), this;
  };
  var ME = { Events: P },
    SE = GI.touch ? 'touchstart mousedown' : 'mousedown',
    hE = B.extend({
      options: { clickTolerance: 3 },
      initialize: function (I, t, E, _) {
        O(this, _),
          (this._element = I),
          (this._dragStartTarget = t || I),
          (this._preventOutline = E);
      },
      enable: function () {
        this._enabled ||
          (Ft(this._dragStartTarget, SE, this._onDown, this),
          (this._enabled = !0));
      },
      disable: function () {
        this._enabled &&
          (hE._dragging === this && this.finishDrag(!0),
          Xt(this._dragStartTarget, SE, this._onDown, this),
          (this._enabled = !1),
          (this._moved = !1));
      },
      _onDown: function (I) {
        if (
          this._enabled &&
          ((this._moved = !1), !ht(this._element, 'leaflet-zoom-anim'))
        )
          if (I.touches && 1 !== I.touches.length)
            hE._dragging === this && this.finishDrag();
          else if (
            !(
              hE._dragging ||
              I.shiftKey ||
              (1 !== I.which && 1 !== I.button && !I.touches) ||
              ((hE._dragging = this),
              this._preventOutline && gt(this._element),
              Bt(),
              et(),
              this._moving)
            )
          ) {
            this.fire('down');
            var t = I.touches ? I.touches[0] : I,
              E = Yt(this._element);
            (this._startPoint = new V(t.clientX, t.clientY)),
              (this._startPos = Pt(this._element)),
              (this._parentScale = vt(E));
            var _ = 'mousedown' === I.type;
            Ft(document, _ ? 'mousemove' : 'touchmove', this._onMove, this),
              Ft(
                document,
                _ ? 'mouseup' : 'touchend touchcancel',
                this._onUp,
                this
              );
          }
      },
      _onMove: function (I) {
        if (this._enabled)
          if (I.touches && I.touches.length > 1) this._moved = !0;
          else {
            var t = I.touches && 1 === I.touches.length ? I.touches[0] : I,
              E = new V(t.clientX, t.clientY)._subtract(this._startPoint);
            (E.x || E.y) &&
              (Math.abs(E.x) + Math.abs(E.y) < this.options.clickTolerance ||
                ((E.x /= this._parentScale.x),
                (E.y /= this._parentScale.y),
                Jt(I),
                this._moved ||
                  (this.fire('dragstart'),
                  (this._moved = !0),
                  lt(document.body, 'leaflet-dragging'),
                  (this._lastTarget = I.target || I.srcElement),
                  window.SVGElementInstance &&
                    this._lastTarget instanceof window.SVGElementInstance &&
                    (this._lastTarget =
                      this._lastTarget.correspondingUseElement),
                  lt(this._lastTarget, 'leaflet-drag-target')),
                (this._newPos = this._startPos.add(E)),
                (this._moving = !0),
                (this._lastEvent = I),
                this._updatePosition()));
          }
      },
      _updatePosition: function () {
        var I = { originalEvent: this._lastEvent };
        this.fire('predrag', I),
          ft(this._element, this._newPos),
          this.fire('drag', I);
      },
      _onUp: function () {
        this._enabled && this.finishDrag();
      },
      finishDrag: function (I) {
        ut(document.body, 'leaflet-dragging'),
          this._lastTarget &&
            (ut(this._lastTarget, 'leaflet-drag-target'),
            (this._lastTarget = null)),
          Xt(document, 'mousemove touchmove', this._onMove, this),
          Xt(document, 'mouseup touchend touchcancel', this._onUp, this),
          Vt(),
          it();
        var t = this._moved && this._moving;
        (this._moving = !1),
          (hE._dragging = !1),
          t &&
            this.fire('dragend', {
              noInertia: I,
              distance: this._newPos.distanceTo(this._startPos),
            });
      },
    });
  function lE(I, t, E) {
    var _,
      T,
      e,
      i,
      n,
      o,
      C,
      D,
      N,
      A = [1, 4, 2, 8];
    for (T = 0, C = I.length; T < C; T++) I[T]._code = gE(I[T], t);
    for (i = 0; i < 4; i++) {
      for (D = A[i], _ = [], T = 0, e = (C = I.length) - 1; T < C; e = T++)
        (n = I[T]),
          (o = I[e]),
          n._code & D
            ? o._code & D ||
              (((N = VE(o, n, D, t, E))._code = gE(N, t)), _.push(N))
            : (o._code & D &&
                (((N = VE(o, n, D, t, E))._code = gE(N, t)), _.push(N)),
              _.push(n));
      I = _;
    }
    return I;
  }
  function uE(I, t) {
    var E, _, T, e, i, n, o, C, D;
    if (!I || 0 === I.length) throw new Error('latlngs not passed');
    vE(I) ||
      (console.warn('latlngs are not flat! Only the first ring will be used'),
      (I = I[0]));
    var N = X([0, 0]),
      A = F(I);
    A.getNorthWest().distanceTo(A.getSouthWest()) *
      A.getNorthEast().distanceTo(A.getNorthWest()) <
      1700 && (N = cE(I));
    var O = I.length,
      R = [];
    for (E = 0; E < O; E++) {
      var s = X(I[E]);
      R.push(t.project(X([s.lat - N.lat, s.lng - N.lng])));
    }
    for (n = o = C = 0, E = 0, _ = O - 1; E < O; _ = E++)
      (T = R[E]),
        (e = R[_]),
        (i = T.y * e.x - e.y * T.x),
        (o += (T.x + e.x) * i),
        (C += (T.y + e.y) * i),
        (n += 3 * i);
    D = 0 === n ? R[0] : [o / n, C / n];
    var a = t.unproject(Z(D));
    return X([a.lat + N.lat, a.lng + N.lng]);
  }
  function cE(I) {
    for (var t = 0, E = 0, _ = 0, T = 0; T < I.length; T++) {
      var e = X(I[T]);
      (t += e.lat), (E += e.lng), _++;
    }
    return X([t / _, E / _]);
  }
  var UE,
    dE = { __proto__: null, clipPolygon: lE, polygonCenter: uE, centroid: cE };
  function HE(I, t) {
    if (!t || !I.length) return I.slice();
    var E = t * t;
    return (I = fE((I = LE(I, E)), E));
  }
  function pE(I, t, E) {
    return Math.sqrt(YE(I, t, E, !0));
  }
  function mE(I, t, E) {
    return YE(I, t, E);
  }
  function fE(I, t) {
    var E = I.length,
      _ = new (typeof Uint8Array != void 0 + '' ? Uint8Array : Array)(E);
    (_[0] = _[E - 1] = 1), PE(I, _, t, 0, E - 1);
    var T,
      e = [];
    for (T = 0; T < E; T++) _[T] && e.push(I[T]);
    return e;
  }
  function PE(I, t, E, _, T) {
    var e,
      i,
      n,
      o = 0;
    for (i = _ + 1; i <= T - 1; i++)
      (n = YE(I[i], I[_], I[T], !0)) > o && ((e = i), (o = n));
    o > E && ((t[e] = 1), PE(I, t, E, _, e), PE(I, t, E, e, T));
  }
  function LE(I, t) {
    for (var E = [I[0]], _ = 1, T = 0, e = I.length; _ < e; _++)
      ZE(I[_], I[T]) > t && (E.push(I[_]), (T = _));
    return T < e - 1 && E.push(I[e - 1]), E;
  }
  function BE(I, t, E, _, T) {
    var e,
      i,
      n,
      o = _ ? UE : gE(I, E),
      C = gE(t, E);
    for (UE = C; ; ) {
      if (!(o | C)) return [I, t];
      if (o & C) return !1;
      (n = gE((i = VE(I, t, (e = o || C), E, T)), E)),
        e === o ? ((I = i), (o = n)) : ((t = i), (C = n));
    }
  }
  function VE(I, t, E, _, T) {
    var e,
      i,
      n = t.x - I.x,
      o = t.y - I.y,
      C = _.min,
      D = _.max;
    return (
      8 & E
        ? ((e = I.x + (n * (D.y - I.y)) / o), (i = D.y))
        : 4 & E
        ? ((e = I.x + (n * (C.y - I.y)) / o), (i = C.y))
        : 2 & E
        ? ((e = D.x), (i = I.y + (o * (D.x - I.x)) / n))
        : 1 & E && ((e = C.x), (i = I.y + (o * (C.x - I.x)) / n)),
      new V(e, i, T)
    );
  }
  function gE(I, t) {
    var E = 0;
    return (
      I.x < t.min.x ? (E |= 1) : I.x > t.max.x && (E |= 2),
      I.y < t.min.y ? (E |= 4) : I.y > t.max.y && (E |= 8),
      E
    );
  }
  function ZE(I, t) {
    var E = t.x - I.x,
      _ = t.y - I.y;
    return E * E + _ * _;
  }
  function YE(I, t, E, _) {
    var T,
      e = t.x,
      i = t.y,
      n = E.x - e,
      o = E.y - i,
      C = n * n + o * o;
    return (
      C > 0 &&
        ((T = ((I.x - e) * n + (I.y - i) * o) / C) > 1
          ? ((e = E.x), (i = E.y))
          : T > 0 && ((e += n * T), (i += o * T))),
      (n = I.x - e),
      (o = I.y - i),
      _ ? n * n + o * o : new V(e, i)
    );
  }
  function vE(I) {
    return !r(I[0]) || ('object' != typeof I[0][0] && void 0 !== I[0][0]);
  }
  function GE(I) {
    return (
      console.warn(
        'Deprecated use of _flat, please use L.LineUtil.isFlat instead.'
      ),
      vE(I)
    );
  }
  function FE(I, t) {
    var E, _, T, e, i, n, o, C;
    if (!I || 0 === I.length) throw new Error('latlngs not passed');
    vE(I) ||
      (console.warn('latlngs are not flat! Only the first ring will be used'),
      (I = I[0]));
    var D = X([0, 0]),
      N = F(I);
    N.getNorthWest().distanceTo(N.getSouthWest()) *
      N.getNorthEast().distanceTo(N.getNorthWest()) <
      1700 && (D = cE(I));
    var A = I.length,
      O = [];
    for (E = 0; E < A; E++) {
      var R = X(I[E]);
      O.push(t.project(X([R.lat - D.lat, R.lng - D.lng])));
    }
    for (E = 0, _ = 0; E < A - 1; E++) _ += O[E].distanceTo(O[E + 1]) / 2;
    if (0 === _) C = O[0];
    else
      for (E = 0, e = 0; E < A - 1; E++)
        if (((i = O[E]), (n = O[E + 1]), (e += T = i.distanceTo(n)) > _)) {
          (o = (e - _) / T),
            (C = [n.x - o * (n.x - i.x), n.y - o * (n.y - i.y)]);
          break;
        }
    var s = t.unproject(Z(C));
    return X([s.lat + D.lat, s.lng + D.lng]);
  }
  var yE = {
      __proto__: null,
      simplify: HE,
      pointToSegmentDistance: pE,
      closestPointOnSegment: mE,
      clipSegment: BE,
      _getEdgeIntersection: VE,
      _getBitCode: gE,
      _sqClosestPointOnSegment: YE,
      isFlat: vE,
      _flat: GE,
      polylineCenter: FE,
    },
    XE = {
      project: function (I) {
        return new V(I.lng, I.lat);
      },
      unproject: function (I) {
        return new y(I.y, I.x);
      },
      bounds: new Y([-180, -90], [180, 90]),
    },
    wE = {
      R: 6378137,
      R_MINOR: 6356752.314245179,
      bounds: new Y(
        [-20037508.34279, -15496570.73972],
        [20037508.34279, 18764656.23138]
      ),
      project: function (I) {
        var t = Math.PI / 180,
          E = this.R,
          _ = I.lat * t,
          T = this.R_MINOR / E,
          e = Math.sqrt(1 - T * T),
          i = e * Math.sin(_),
          n =
            Math.tan(Math.PI / 4 - _ / 2) / Math.pow((1 - i) / (1 + i), e / 2);
        return (_ = -E * Math.log(Math.max(n, 1e-10))), new V(I.lng * t * E, _);
      },
      unproject: function (I) {
        for (
          var t,
            E = 180 / Math.PI,
            _ = this.R,
            T = this.R_MINOR / _,
            e = Math.sqrt(1 - T * T),
            i = Math.exp(-I.y / _),
            n = Math.PI / 2 - 2 * Math.atan(i),
            o = 0,
            C = 0.1;
          o < 15 && Math.abs(C) > 1e-7;
          o++
        )
          (t = e * Math.sin(n)),
            (t = Math.pow((1 - t) / (1 + t), e / 2)),
            (n += C = Math.PI / 2 - 2 * Math.atan(i * t) - n);
        return new y(n * E, (I.x * E) / _);
      },
    },
    bE = { __proto__: null, LonLat: XE, Mercator: wE, SphericalMercator: W },
    xE = E({}, x, {
      code: 'EPSG:3395',
      projection: wE,
      transformation: (function () {
        var I = 0.5 / (Math.PI * wE.R);
        return z(I, 0.5, -I, 0.5);
      })(),
    }),
    KE = E({}, x, {
      code: 'EPSG:4326',
      projection: XE,
      transformation: z(1 / 180, 1, -1 / 180, 0.5),
    }),
    WE = E({}, b, {
      projection: XE,
      transformation: z(1, 0, -1, 0),
      scale: function (I) {
        return Math.pow(2, I);
      },
      zoom: function (I) {
        return Math.log(I) / Math.LN2;
      },
      distance: function (I, t) {
        var E = t.lng - I.lng,
          _ = t.lat - I.lat;
        return Math.sqrt(E * E + _ * _);
      },
      infinite: !0,
    });
  (b.Earth = x),
    (b.EPSG3395 = xE),
    (b.EPSG3857 = J),
    (b.EPSG900913 = Q),
    (b.EPSG4326 = KE),
    (b.Simple = WE);
  var kE = B.extend({
    options: {
      pane: 'overlayPane',
      attribution: null,
      bubblingMouseEvents: !0,
    },
    addTo: function (I) {
      return I.addLayer(this), this;
    },
    remove: function () {
      return this.removeFrom(this._map || this._mapToAdd);
    },
    removeFrom: function (I) {
      return I && I.removeLayer(this), this;
    },
    getPane: function (I) {
      return this._map.getPane(I ? this.options[I] || I : this.options.pane);
    },
    addInteractiveTarget: function (I) {
      return (this._map._targets[i(I)] = this), this;
    },
    removeInteractiveTarget: function (I) {
      return delete this._map._targets[i(I)], this;
    },
    getAttribution: function () {
      return this.options.attribution;
    },
    _layerAdd: function (I) {
      var t = I.target;
      if (t.hasLayer(this)) {
        if (
          ((this._map = t),
          (this._zoomAnimated = t._zoomAnimated),
          this.getEvents)
        ) {
          var E = this.getEvents();
          t.on(E, this),
            this.once(
              'remove',
              function () {
                t.off(E, this);
              },
              this
            );
        }
        this.onAdd(t), this.fire('add'), t.fire('layeradd', { layer: this });
      }
    },
  });
  TE.include({
    addLayer: function (I) {
      if (!I._layerAdd) throw new Error('The provided object is not a Layer.');
      var t = i(I);
      return (
        this._layers[t] ||
          ((this._layers[t] = I),
          (I._mapToAdd = this),
          I.beforeAdd && I.beforeAdd(this),
          this.whenReady(I._layerAdd, I)),
        this
      );
    },
    removeLayer: function (I) {
      var t = i(I);
      return this._layers[t]
        ? (this._loaded && I.onRemove(this),
          delete this._layers[t],
          this._loaded &&
            (this.fire('layerremove', { layer: I }), I.fire('remove')),
          (I._map = I._mapToAdd = null),
          this)
        : this;
    },
    hasLayer: function (I) {
      return i(I) in this._layers;
    },
    eachLayer: function (I, t) {
      for (var E in this._layers) I.call(t, this._layers[E]);
      return this;
    },
    _addLayers: function (I) {
      for (var t = 0, E = (I = I ? (r(I) ? I : [I]) : []).length; t < E; t++)
        this.addLayer(I[t]);
    },
    _addZoomLimit: function (I) {
      (isNaN(I.options.maxZoom) && isNaN(I.options.minZoom)) ||
        ((this._zoomBoundLayers[i(I)] = I), this._updateZoomLevels());
    },
    _removeZoomLimit: function (I) {
      var t = i(I);
      this._zoomBoundLayers[t] &&
        (delete this._zoomBoundLayers[t], this._updateZoomLevels());
    },
    _updateZoomLevels: function () {
      var I = 1 / 0,
        t = -1 / 0,
        E = this._getZoomSpan();
      for (var _ in this._zoomBoundLayers) {
        var T = this._zoomBoundLayers[_].options;
        (I = void 0 === T.minZoom ? I : Math.min(I, T.minZoom)),
          (t = void 0 === T.maxZoom ? t : Math.max(t, T.maxZoom));
      }
      (this._layersMaxZoom = t === -1 / 0 ? void 0 : t),
        (this._layersMinZoom = I === 1 / 0 ? void 0 : I),
        E !== this._getZoomSpan() && this.fire('zoomlevelschange'),
        void 0 === this.options.maxZoom &&
          this._layersMaxZoom &&
          this.getZoom() > this._layersMaxZoom &&
          this.setZoom(this._layersMaxZoom),
        void 0 === this.options.minZoom &&
          this._layersMinZoom &&
          this.getZoom() < this._layersMinZoom &&
          this.setZoom(this._layersMinZoom);
    },
  });
  var zE = kE.extend({
      initialize: function (I, t) {
        var E, _;
        if ((O(this, t), (this._layers = {}), I))
          for (E = 0, _ = I.length; E < _; E++) this.addLayer(I[E]);
      },
      addLayer: function (I) {
        var t = this.getLayerId(I);
        return (this._layers[t] = I), this._map && this._map.addLayer(I), this;
      },
      removeLayer: function (I) {
        var t = I in this._layers ? I : this.getLayerId(I);
        return (
          this._map &&
            this._layers[t] &&
            this._map.removeLayer(this._layers[t]),
          delete this._layers[t],
          this
        );
      },
      hasLayer: function (I) {
        return ('number' == typeof I ? I : this.getLayerId(I)) in this._layers;
      },
      clearLayers: function () {
        return this.eachLayer(this.removeLayer, this);
      },
      invoke: function (I) {
        var t,
          E,
          _ = Array.prototype.slice.call(arguments, 1);
        for (t in this._layers) (E = this._layers[t])[I] && E[I].apply(E, _);
        return this;
      },
      onAdd: function (I) {
        this.eachLayer(I.addLayer, I);
      },
      onRemove: function (I) {
        this.eachLayer(I.removeLayer, I);
      },
      eachLayer: function (I, t) {
        for (var E in this._layers) I.call(t, this._layers[E]);
        return this;
      },
      getLayer: function (I) {
        return this._layers[I];
      },
      getLayers: function () {
        var I = [];
        return this.eachLayer(I.push, I), I;
      },
      setZIndex: function (I) {
        return this.invoke('setZIndex', I);
      },
      getLayerId: function (I) {
        return i(I);
      },
    }),
    JE = function (I, t) {
      return new zE(I, t);
    },
    QE = zE.extend({
      addLayer: function (I) {
        return this.hasLayer(I)
          ? this
          : (I.addEventParent(this),
            zE.prototype.addLayer.call(this, I),
            this.fire('layeradd', { layer: I }));
      },
      removeLayer: function (I) {
        return this.hasLayer(I)
          ? (I in this._layers && (I = this._layers[I]),
            I.removeEventParent(this),
            zE.prototype.removeLayer.call(this, I),
            this.fire('layerremove', { layer: I }))
          : this;
      },
      setStyle: function (I) {
        return this.invoke('setStyle', I);
      },
      bringToFront: function () {
        return this.invoke('bringToFront');
      },
      bringToBack: function () {
        return this.invoke('bringToBack');
      },
      getBounds: function () {
        var I = new G();
        for (var t in this._layers) {
          var E = this._layers[t];
          I.extend(E.getBounds ? E.getBounds() : E.getLatLng());
        }
        return I;
      },
    }),
    jE = function (I, t) {
      return new QE(I, t);
    },
    qE = m.extend({
      options: { popupAnchor: [0, 0], tooltipAnchor: [0, 0], crossOrigin: !1 },
      initialize: function (I) {
        O(this, I);
      },
      createIcon: function (I) {
        return this._createIcon('icon', I);
      },
      createShadow: function (I) {
        return this._createIcon('shadow', I);
      },
      _createIcon: function (I, t) {
        var E = this._getIconUrl(I);
        if (!E) {
          if ('icon' === I)
            throw new Error('iconUrl not set in Icon options (see the docs).');
          return null;
        }
        var _ = this._createImg(E, t && 'IMG' === t.tagName ? t : null);
        return (
          this._setIconStyles(_, I),
          (this.options.crossOrigin || '' === this.options.crossOrigin) &&
            (_.crossOrigin =
              !0 === this.options.crossOrigin ? '' : this.options.crossOrigin),
          _
        );
      },
      _setIconStyles: function (I, t) {
        var E = this.options,
          _ = E[t + 'Size'];
        'number' == typeof _ && (_ = [_, _]);
        var T = Z(_),
          e = Z(
            ('shadow' === t && E.shadowAnchor) ||
              E.iconAnchor ||
              (T && T.divideBy(2, !0))
          );
        (I.className = 'leaflet-marker-' + t + ' ' + (E.className || '')),
          e &&
            ((I.style.marginLeft = -e.x + 'px'),
            (I.style.marginTop = -e.y + 'px')),
          T && ((I.style.width = T.x + 'px'), (I.style.height = T.y + 'px'));
      },
      _createImg: function (I, t) {
        return ((t = t || document.createElement('img')).src = I), t;
      },
      _getIconUrl: function (I) {
        return (
          (GI.retina && this.options[I + 'RetinaUrl']) ||
          this.options[I + 'Url']
        );
      },
    });
  function $E(I) {
    return new qE(I);
  }
  var I_ = qE.extend({
      options: {
        iconUrl: 'marker-icon.png',
        iconRetinaUrl: 'marker-icon-2x.png',
        shadowUrl: 'marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41],
      },
      _getIconUrl: function (I) {
        return (
          'string' != typeof I_.imagePath &&
            (I_.imagePath = this._detectIconPath()),
          (this.options.imagePath || I_.imagePath) +
            qE.prototype._getIconUrl.call(this, I)
        );
      },
      _stripUrl: function (I) {
        var t = function (I, t, E) {
          var _ = t.exec(I);
          return _ && _[E];
        };
        return (
          (I = t(I, /^url\((['"])?(.+)\1\)$/, 2)) &&
          t(I, /^(.*)marker-icon\.png$/, 1)
        );
      },
      _detectIconPath: function () {
        var I = st('div', 'leaflet-default-icon-path', document.body),
          t = Rt(I, 'background-image') || Rt(I, 'backgroundImage');
        if ((document.body.removeChild(I), (t = this._stripUrl(t)))) return t;
        var E = document.querySelector('link[href$="leaflet.css"]');
        return E
          ? E.href.substring(0, E.href.length - 'leaflet.css'.length - 1)
          : '';
      },
    }),
    t_ = rE.extend({
      initialize: function (I) {
        this._marker = I;
      },
      addHooks: function () {
        var I = this._marker._icon;
        this._draggable || (this._draggable = new hE(I, I, !0)),
          this._draggable
            .on(
              {
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd,
              },
              this
            )
            .enable(),
          lt(I, 'leaflet-marker-draggable');
      },
      removeHooks: function () {
        this._draggable
          .off(
            {
              dragstart: this._onDragStart,
              predrag: this._onPreDrag,
              drag: this._onDrag,
              dragend: this._onDragEnd,
            },
            this
          )
          .disable(),
          this._marker._icon &&
            ut(this._marker._icon, 'leaflet-marker-draggable');
      },
      moved: function () {
        return this._draggable && this._draggable._moved;
      },
      _adjustPan: function (I) {
        var t = this._marker,
          E = t._map,
          _ = this._marker.options.autoPanSpeed,
          T = this._marker.options.autoPanPadding,
          e = Pt(t._icon),
          i = E.getPixelBounds(),
          n = E.getPixelOrigin(),
          o = v(i.min._subtract(n).add(T), i.max._subtract(n).subtract(T));
        if (!o.contains(e)) {
          var C = Z(
            (Math.max(o.max.x, e.x) - o.max.x) / (i.max.x - o.max.x) -
              (Math.min(o.min.x, e.x) - o.min.x) / (i.min.x - o.min.x),
            (Math.max(o.max.y, e.y) - o.max.y) / (i.max.y - o.max.y) -
              (Math.min(o.min.y, e.y) - o.min.y) / (i.min.y - o.min.y)
          ).multiplyBy(_);
          E.panBy(C, { animate: !1 }),
            this._draggable._newPos._add(C),
            this._draggable._startPos._add(C),
            ft(t._icon, this._draggable._newPos),
            this._onDrag(I),
            (this._panRequest = d(this._adjustPan.bind(this, I)));
        }
      },
      _onDragStart: function () {
        (this._oldLatLng = this._marker.getLatLng()),
          this._marker.closePopup && this._marker.closePopup(),
          this._marker.fire('movestart').fire('dragstart');
      },
      _onPreDrag: function (I) {
        this._marker.options.autoPan &&
          (H(this._panRequest),
          (this._panRequest = d(this._adjustPan.bind(this, I))));
      },
      _onDrag: function (I) {
        var t = this._marker,
          E = t._shadow,
          _ = Pt(t._icon),
          T = t._map.layerPointToLatLng(_);
        E && ft(E, _),
          (t._latlng = T),
          (I.latlng = T),
          (I.oldLatLng = this._oldLatLng),
          t.fire('move', I).fire('drag', I);
      },
      _onDragEnd: function (I) {
        H(this._panRequest),
          delete this._oldLatLng,
          this._marker.fire('moveend').fire('dragend', I);
      },
    }),
    E_ = kE.extend({
      options: {
        icon: new I_(),
        interactive: !0,
        keyboard: !0,
        title: '',
        alt: 'Marker',
        zIndexOffset: 0,
        opacity: 1,
        riseOnHover: !1,
        riseOffset: 250,
        pane: 'markerPane',
        shadowPane: 'shadowPane',
        bubblingMouseEvents: !1,
        autoPanOnFocus: !0,
        draggable: !1,
        autoPan: !1,
        autoPanPadding: [50, 50],
        autoPanSpeed: 10,
      },
      initialize: function (I, t) {
        O(this, t), (this._latlng = X(I));
      },
      onAdd: function (I) {
        (this._zoomAnimated =
          this._zoomAnimated && I.options.markerZoomAnimation),
          this._zoomAnimated && I.on('zoomanim', this._animateZoom, this),
          this._initIcon(),
          this.update();
      },
      onRemove: function (I) {
        this.dragging &&
          this.dragging.enabled() &&
          ((this.options.draggable = !0), this.dragging.removeHooks()),
          delete this.dragging,
          this._zoomAnimated && I.off('zoomanim', this._animateZoom, this),
          this._removeIcon(),
          this._removeShadow();
      },
      getEvents: function () {
        return { zoom: this.update, viewreset: this.update };
      },
      getLatLng: function () {
        return this._latlng;
      },
      setLatLng: function (I) {
        var t = this._latlng;
        return (
          (this._latlng = X(I)),
          this.update(),
          this.fire('move', { oldLatLng: t, latlng: this._latlng })
        );
      },
      setZIndexOffset: function (I) {
        return (this.options.zIndexOffset = I), this.update();
      },
      getIcon: function () {
        return this.options.icon;
      },
      setIcon: function (I) {
        return (
          (this.options.icon = I),
          this._map && (this._initIcon(), this.update()),
          this._popup && this.bindPopup(this._popup, this._popup.options),
          this
        );
      },
      getElement: function () {
        return this._icon;
      },
      update: function () {
        if (this._icon && this._map) {
          var I = this._map.latLngToLayerPoint(this._latlng).round();
          this._setPos(I);
        }
        return this;
      },
      _initIcon: function () {
        var I = this.options,
          t = 'leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide'),
          E = I.icon.createIcon(this._icon),
          _ = !1;
        E !== this._icon &&
          (this._icon && this._removeIcon(),
          (_ = !0),
          I.title && (E.title = I.title),
          'IMG' === E.tagName && (E.alt = I.alt || '')),
          lt(E, t),
          I.keyboard && ((E.tabIndex = '0'), E.setAttribute('role', 'button')),
          (this._icon = E),
          I.riseOnHover &&
            this.on({
              mouseover: this._bringToFront,
              mouseout: this._resetZIndex,
            }),
          this.options.autoPanOnFocus && Ft(E, 'focus', this._panOnFocus, this);
        var T = I.icon.createShadow(this._shadow),
          e = !1;
        T !== this._shadow && (this._removeShadow(), (e = !0)),
          T && (lt(T, t), (T.alt = '')),
          (this._shadow = T),
          I.opacity < 1 && this._updateOpacity(),
          _ && this.getPane().appendChild(this._icon),
          this._initInteraction(),
          T && e && this.getPane(I.shadowPane).appendChild(this._shadow);
      },
      _removeIcon: function () {
        this.options.riseOnHover &&
          this.off({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex,
          }),
          this.options.autoPanOnFocus &&
            Xt(this._icon, 'focus', this._panOnFocus, this),
          at(this._icon),
          this.removeInteractiveTarget(this._icon),
          (this._icon = null);
      },
      _removeShadow: function () {
        this._shadow && at(this._shadow), (this._shadow = null);
      },
      _setPos: function (I) {
        this._icon && ft(this._icon, I),
          this._shadow && ft(this._shadow, I),
          (this._zIndex = I.y + this.options.zIndexOffset),
          this._resetZIndex();
      },
      _updateZIndex: function (I) {
        this._icon && (this._icon.style.zIndex = this._zIndex + I);
      },
      _animateZoom: function (I) {
        var t = this._map
          ._latLngToNewLayerPoint(this._latlng, I.zoom, I.center)
          .round();
        this._setPos(t);
      },
      _initInteraction: function () {
        if (
          this.options.interactive &&
          (lt(this._icon, 'leaflet-interactive'),
          this.addInteractiveTarget(this._icon),
          t_)
        ) {
          var I = this.options.draggable;
          this.dragging &&
            ((I = this.dragging.enabled()), this.dragging.disable()),
            (this.dragging = new t_(this)),
            I && this.dragging.enable();
        }
      },
      setOpacity: function (I) {
        return (
          (this.options.opacity = I), this._map && this._updateOpacity(), this
        );
      },
      _updateOpacity: function () {
        var I = this.options.opacity;
        this._icon && dt(this._icon, I), this._shadow && dt(this._shadow, I);
      },
      _bringToFront: function () {
        this._updateZIndex(this.options.riseOffset);
      },
      _resetZIndex: function () {
        this._updateZIndex(0);
      },
      _panOnFocus: function () {
        var I = this._map;
        if (I) {
          var t = this.options.icon.options,
            E = t.iconSize ? Z(t.iconSize) : Z(0, 0),
            _ = t.iconAnchor ? Z(t.iconAnchor) : Z(0, 0);
          I.panInside(this._latlng, {
            paddingTopLeft: _,
            paddingBottomRight: E.subtract(_),
          });
        }
      },
      _getPopupAnchor: function () {
        return this.options.icon.options.popupAnchor;
      },
      _getTooltipAnchor: function () {
        return this.options.icon.options.tooltipAnchor;
      },
    });
  function __(I, t) {
    return new E_(I, t);
  }
  var T_ = kE.extend({
      options: {
        stroke: !0,
        color: '#3388ff',
        weight: 3,
        opacity: 1,
        lineCap: 'round',
        lineJoin: 'round',
        dashArray: null,
        dashOffset: null,
        fill: !1,
        fillColor: null,
        fillOpacity: 0.2,
        fillRule: 'evenodd',
        interactive: !0,
        bubblingMouseEvents: !0,
      },
      beforeAdd: function (I) {
        this._renderer = I.getRenderer(this);
      },
      onAdd: function () {
        this._renderer._initPath(this),
          this._reset(),
          this._renderer._addPath(this);
      },
      onRemove: function () {
        this._renderer._removePath(this);
      },
      redraw: function () {
        return this._map && this._renderer._updatePath(this), this;
      },
      setStyle: function (I) {
        return (
          O(this, I),
          this._renderer &&
            (this._renderer._updateStyle(this),
            this.options.stroke &&
              I &&
              Object.prototype.hasOwnProperty.call(I, 'weight') &&
              this._updateBounds()),
          this
        );
      },
      bringToFront: function () {
        return this._renderer && this._renderer._bringToFront(this), this;
      },
      bringToBack: function () {
        return this._renderer && this._renderer._bringToBack(this), this;
      },
      getElement: function () {
        return this._path;
      },
      _reset: function () {
        this._project(), this._update();
      },
      _clickTolerance: function () {
        return (
          (this.options.stroke ? this.options.weight / 2 : 0) +
          (this._renderer.options.tolerance || 0)
        );
      },
    }),
    e_ = T_.extend({
      options: { fill: !0, radius: 10 },
      initialize: function (I, t) {
        O(this, t), (this._latlng = X(I)), (this._radius = this.options.radius);
      },
      setLatLng: function (I) {
        var t = this._latlng;
        return (
          (this._latlng = X(I)),
          this.redraw(),
          this.fire('move', { oldLatLng: t, latlng: this._latlng })
        );
      },
      getLatLng: function () {
        return this._latlng;
      },
      setRadius: function (I) {
        return (this.options.radius = this._radius = I), this.redraw();
      },
      getRadius: function () {
        return this._radius;
      },
      setStyle: function (I) {
        var t = (I && I.radius) || this._radius;
        return T_.prototype.setStyle.call(this, I), this.setRadius(t), this;
      },
      _project: function () {
        (this._point = this._map.latLngToLayerPoint(this._latlng)),
          this._updateBounds();
      },
      _updateBounds: function () {
        var I = this._radius,
          t = this._radiusY || I,
          E = this._clickTolerance(),
          _ = [I + E, t + E];
        this._pxBounds = new Y(this._point.subtract(_), this._point.add(_));
      },
      _update: function () {
        this._map && this._updatePath();
      },
      _updatePath: function () {
        this._renderer._updateCircle(this);
      },
      _empty: function () {
        return (
          this._radius && !this._renderer._bounds.intersects(this._pxBounds)
        );
      },
      _containsPoint: function (I) {
        return (
          I.distanceTo(this._point) <= this._radius + this._clickTolerance()
        );
      },
    });
  function i_(I, t) {
    return new e_(I, t);
  }
  var n_ = e_.extend({
    initialize: function (I, t, _) {
      if (
        ('number' == typeof t && (t = E({}, _, { radius: t })),
        O(this, t),
        (this._latlng = X(I)),
        isNaN(this.options.radius))
      )
        throw new Error('Circle radius cannot be NaN');
      this._mRadius = this.options.radius;
    },
    setRadius: function (I) {
      return (this._mRadius = I), this.redraw();
    },
    getRadius: function () {
      return this._mRadius;
    },
    getBounds: function () {
      var I = [this._radius, this._radiusY || this._radius];
      return new G(
        this._map.layerPointToLatLng(this._point.subtract(I)),
        this._map.layerPointToLatLng(this._point.add(I))
      );
    },
    setStyle: T_.prototype.setStyle,
    _project: function () {
      var I = this._latlng.lng,
        t = this._latlng.lat,
        E = this._map,
        _ = E.options.crs;
      if (_.distance === x.distance) {
        var T = Math.PI / 180,
          e = this._mRadius / x.R / T,
          i = E.project([t + e, I]),
          n = E.project([t - e, I]),
          o = i.add(n).divideBy(2),
          C = E.unproject(o).lat,
          D =
            Math.acos(
              (Math.cos(e * T) - Math.sin(t * T) * Math.sin(C * T)) /
                (Math.cos(t * T) * Math.cos(C * T))
            ) / T;
        (isNaN(D) || 0 === D) && (D = e / Math.cos((Math.PI / 180) * t)),
          (this._point = o.subtract(E.getPixelOrigin())),
          (this._radius = isNaN(D) ? 0 : o.x - E.project([C, I - D]).x),
          (this._radiusY = o.y - i.y);
      } else {
        var N = _.unproject(
          _.project(this._latlng).subtract([this._mRadius, 0])
        );
        (this._point = E.latLngToLayerPoint(this._latlng)),
          (this._radius = this._point.x - E.latLngToLayerPoint(N).x);
      }
      this._updateBounds();
    },
  });
  function o_(I, t, E) {
    return new n_(I, t, E);
  }
  var C_ = T_.extend({
    options: { smoothFactor: 1, noClip: !1 },
    initialize: function (I, t) {
      O(this, t), this._setLatLngs(I);
    },
    getLatLngs: function () {
      return this._latlngs;
    },
    setLatLngs: function (I) {
      return this._setLatLngs(I), this.redraw();
    },
    isEmpty: function () {
      return !this._latlngs.length;
    },
    closestLayerPoint: function (I) {
      for (
        var t, E, _ = 1 / 0, T = null, e = YE, i = 0, n = this._parts.length;
        i < n;
        i++
      )
        for (var o = this._parts[i], C = 1, D = o.length; C < D; C++) {
          var N = e(I, (t = o[C - 1]), (E = o[C]), !0);
          N < _ && ((_ = N), (T = e(I, t, E)));
        }
      return T && (T.distance = Math.sqrt(_)), T;
    },
    getCenter: function () {
      if (!this._map)
        throw new Error('Must add layer to map before using getCenter()');
      return FE(this._defaultShape(), this._map.options.crs);
    },
    getBounds: function () {
      return this._bounds;
    },
    addLatLng: function (I, t) {
      return (
        (t = t || this._defaultShape()),
        (I = X(I)),
        t.push(I),
        this._bounds.extend(I),
        this.redraw()
      );
    },
    _setLatLngs: function (I) {
      (this._bounds = new G()), (this._latlngs = this._convertLatLngs(I));
    },
    _defaultShape: function () {
      return vE(this._latlngs) ? this._latlngs : this._latlngs[0];
    },
    _convertLatLngs: function (I) {
      for (var t = [], E = vE(I), _ = 0, T = I.length; _ < T; _++)
        E
          ? ((t[_] = X(I[_])), this._bounds.extend(t[_]))
          : (t[_] = this._convertLatLngs(I[_]));
      return t;
    },
    _project: function () {
      var I = new Y();
      (this._rings = []),
        this._projectLatlngs(this._latlngs, this._rings, I),
        this._bounds.isValid() &&
          I.isValid() &&
          ((this._rawPxBounds = I), this._updateBounds());
    },
    _updateBounds: function () {
      var I = this._clickTolerance(),
        t = new V(I, I);
      this._rawPxBounds &&
        (this._pxBounds = new Y([
          this._rawPxBounds.min.subtract(t),
          this._rawPxBounds.max.add(t),
        ]));
    },
    _projectLatlngs: function (I, t, E) {
      var _,
        T,
        e = I[0] instanceof y,
        i = I.length;
      if (e) {
        for (T = [], _ = 0; _ < i; _++)
          (T[_] = this._map.latLngToLayerPoint(I[_])), E.extend(T[_]);
        t.push(T);
      } else for (_ = 0; _ < i; _++) this._projectLatlngs(I[_], t, E);
    },
    _clipPoints: function () {
      var I = this._renderer._bounds;
      if (((this._parts = []), this._pxBounds && this._pxBounds.intersects(I)))
        if (this.options.noClip) this._parts = this._rings;
        else {
          var t,
            E,
            _,
            T,
            e,
            i,
            n,
            o = this._parts;
          for (t = 0, _ = 0, T = this._rings.length; t < T; t++)
            for (E = 0, e = (n = this._rings[t]).length; E < e - 1; E++)
              (i = BE(n[E], n[E + 1], I, E, !0)) &&
                ((o[_] = o[_] || []),
                o[_].push(i[0]),
                (i[1] === n[E + 1] && E !== e - 2) || (o[_].push(i[1]), _++));
        }
    },
    _simplifyPoints: function () {
      for (
        var I = this._parts, t = this.options.smoothFactor, E = 0, _ = I.length;
        E < _;
        E++
      )
        I[E] = HE(I[E], t);
    },
    _update: function () {
      this._map &&
        (this._clipPoints(), this._simplifyPoints(), this._updatePath());
    },
    _updatePath: function () {
      this._renderer._updatePoly(this);
    },
    _containsPoint: function (I, t) {
      var E,
        _,
        T,
        e,
        i,
        n,
        o = this._clickTolerance();
      if (!this._pxBounds || !this._pxBounds.contains(I)) return !1;
      for (E = 0, e = this._parts.length; E < e; E++)
        for (_ = 0, T = (i = (n = this._parts[E]).length) - 1; _ < i; T = _++)
          if ((t || 0 !== _) && pE(I, n[T], n[_]) <= o) return !0;
      return !1;
    },
  });
  function D_(I, t) {
    return new C_(I, t);
  }
  C_._flat = GE;
  var N_ = C_.extend({
    options: { fill: !0 },
    isEmpty: function () {
      return !this._latlngs.length || !this._latlngs[0].length;
    },
    getCenter: function () {
      if (!this._map)
        throw new Error('Must add layer to map before using getCenter()');
      return uE(this._defaultShape(), this._map.options.crs);
    },
    _convertLatLngs: function (I) {
      var t = C_.prototype._convertLatLngs.call(this, I),
        E = t.length;
      return E >= 2 && t[0] instanceof y && t[0].equals(t[E - 1]) && t.pop(), t;
    },
    _setLatLngs: function (I) {
      C_.prototype._setLatLngs.call(this, I),
        vE(this._latlngs) && (this._latlngs = [this._latlngs]);
    },
    _defaultShape: function () {
      return vE(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
    },
    _clipPoints: function () {
      var I = this._renderer._bounds,
        t = this.options.weight,
        E = new V(t, t);
      if (
        ((I = new Y(I.min.subtract(E), I.max.add(E))),
        (this._parts = []),
        this._pxBounds && this._pxBounds.intersects(I))
      )
        if (this.options.noClip) this._parts = this._rings;
        else
          for (var _, T = 0, e = this._rings.length; T < e; T++)
            (_ = lE(this._rings[T], I, !0)).length && this._parts.push(_);
    },
    _updatePath: function () {
      this._renderer._updatePoly(this, !0);
    },
    _containsPoint: function (I) {
      var t,
        E,
        _,
        T,
        e,
        i,
        n,
        o,
        C = !1;
      if (!this._pxBounds || !this._pxBounds.contains(I)) return !1;
      for (T = 0, n = this._parts.length; T < n; T++)
        for (e = 0, i = (o = (t = this._parts[T]).length) - 1; e < o; i = e++)
          (E = t[e]),
            (_ = t[i]),
            E.y > I.y != _.y > I.y &&
              I.x < ((_.x - E.x) * (I.y - E.y)) / (_.y - E.y) + E.x &&
              (C = !C);
      return C || C_.prototype._containsPoint.call(this, I, !0);
    },
  });
  function A_(I, t) {
    return new N_(I, t);
  }
  var O_ = QE.extend({
    initialize: function (I, t) {
      O(this, t), (this._layers = {}), I && this.addData(I);
    },
    addData: function (I) {
      var t,
        E,
        _,
        T = r(I) ? I : I.features;
      if (T) {
        for (t = 0, E = T.length; t < E; t++)
          ((_ = T[t]).geometries ||
            _.geometry ||
            _.features ||
            _.coordinates) &&
            this.addData(_);
        return this;
      }
      var e = this.options;
      if (e.filter && !e.filter(I)) return this;
      var i = R_(I, e);
      return i
        ? ((i.feature = l_(I)),
          (i.defaultOptions = i.options),
          this.resetStyle(i),
          e.onEachFeature && e.onEachFeature(I, i),
          this.addLayer(i))
        : this;
    },
    resetStyle: function (I) {
      return void 0 === I
        ? this.eachLayer(this.resetStyle, this)
        : ((I.options = E({}, I.defaultOptions)),
          this._setLayerStyle(I, this.options.style),
          this);
    },
    setStyle: function (I) {
      return this.eachLayer(function (t) {
        this._setLayerStyle(t, I);
      }, this);
    },
    _setLayerStyle: function (I, t) {
      I.setStyle &&
        ('function' == typeof t && (t = t(I.feature)), I.setStyle(t));
    },
  });
  function R_(I, t) {
    var E,
      _,
      T,
      e,
      i = 'Feature' === I.type ? I.geometry : I,
      n = i ? i.coordinates : null,
      o = [],
      C = t && t.pointToLayer,
      D = (t && t.coordsToLatLng) || a_;
    if (!n && !i) return null;
    switch (i.type) {
      case 'Point':
        return s_(C, I, (E = D(n)), t);
      case 'MultiPoint':
        for (T = 0, e = n.length; T < e; T++)
          (E = D(n[T])), o.push(s_(C, I, E, t));
        return new QE(o);
      case 'LineString':
      case 'MultiLineString':
        return (_ = r_(n, 'LineString' === i.type ? 0 : 1, D)), new C_(_, t);
      case 'Polygon':
      case 'MultiPolygon':
        return (_ = r_(n, 'Polygon' === i.type ? 1 : 2, D)), new N_(_, t);
      case 'GeometryCollection':
        for (T = 0, e = i.geometries.length; T < e; T++) {
          var N = R_(
            {
              geometry: i.geometries[T],
              type: 'Feature',
              properties: I.properties,
            },
            t
          );
          N && o.push(N);
        }
        return new QE(o);
      case 'FeatureCollection':
        for (T = 0, e = i.features.length; T < e; T++) {
          var A = R_(i.features[T], t);
          A && o.push(A);
        }
        return new QE(o);
      default:
        throw new Error('Invalid GeoJSON object.');
    }
  }
  function s_(I, t, E, _) {
    return I ? I(t, E) : new E_(E, _ && _.markersInheritOptions && _);
  }
  function a_(I) {
    return new y(I[1], I[0], I[2]);
  }
  function r_(I, t, E) {
    for (var _, T = [], e = 0, i = I.length; e < i; e++)
      (_ = t ? r_(I[e], t - 1, E) : (E || a_)(I[e])), T.push(_);
    return T;
  }
  function M_(I, t) {
    return void 0 !== (I = X(I)).alt
      ? [D(I.lng, t), D(I.lat, t), D(I.alt, t)]
      : [D(I.lng, t), D(I.lat, t)];
  }
  function S_(I, t, E, _) {
    for (var T = [], e = 0, i = I.length; e < i; e++)
      T.push(t ? S_(I[e], vE(I[e]) ? 0 : t - 1, E, _) : M_(I[e], _));
    return !t && E && T.length > 0 && T.push(T[0].slice()), T;
  }
  function h_(I, t) {
    return I.feature ? E({}, I.feature, { geometry: t }) : l_(t);
  }
  function l_(I) {
    return 'Feature' === I.type || 'FeatureCollection' === I.type
      ? I
      : { type: 'Feature', properties: {}, geometry: I };
  }
  var u_ = {
    toGeoJSON: function (I) {
      return h_(this, { type: 'Point', coordinates: M_(this.getLatLng(), I) });
    },
  };
  function c_(I, t) {
    return new O_(I, t);
  }
  E_.include(u_),
    n_.include(u_),
    e_.include(u_),
    C_.include({
      toGeoJSON: function (I) {
        var t = !vE(this._latlngs);
        return h_(this, {
          type: (t ? 'Multi' : '') + 'LineString',
          coordinates: S_(this._latlngs, t ? 1 : 0, !1, I),
        });
      },
    }),
    N_.include({
      toGeoJSON: function (I) {
        var t = !vE(this._latlngs),
          E = t && !vE(this._latlngs[0]),
          _ = S_(this._latlngs, E ? 2 : t ? 1 : 0, !0, I);
        return (
          t || (_ = [_]),
          h_(this, { type: (E ? 'Multi' : '') + 'Polygon', coordinates: _ })
        );
      },
    }),
    zE.include({
      toMultiPoint: function (I) {
        var t = [];
        return (
          this.eachLayer(function (E) {
            t.push(E.toGeoJSON(I).geometry.coordinates);
          }),
          h_(this, { type: 'MultiPoint', coordinates: t })
        );
      },
      toGeoJSON: function (I) {
        var t =
          this.feature && this.feature.geometry && this.feature.geometry.type;
        if ('MultiPoint' === t) return this.toMultiPoint(I);
        var E = 'GeometryCollection' === t,
          _ = [];
        return (
          this.eachLayer(function (t) {
            if (t.toGeoJSON) {
              var T = t.toGeoJSON(I);
              if (E) _.push(T.geometry);
              else {
                var e = l_(T);
                'FeatureCollection' === e.type
                  ? _.push.apply(_, e.features)
                  : _.push(e);
              }
            }
          }),
          E
            ? h_(this, { geometries: _, type: 'GeometryCollection' })
            : { type: 'FeatureCollection', features: _ }
        );
      },
    });
  var U_ = c_,
    d_ = kE.extend({
      options: {
        opacity: 1,
        alt: '',
        interactive: !1,
        crossOrigin: !1,
        errorOverlayUrl: '',
        zIndex: 1,
        className: '',
      },
      initialize: function (I, t, E) {
        (this._url = I), (this._bounds = F(t)), O(this, E);
      },
      onAdd: function () {
        this._image ||
          (this._initImage(),
          this.options.opacity < 1 && this._updateOpacity()),
          this.options.interactive &&
            (lt(this._image, 'leaflet-interactive'),
            this.addInteractiveTarget(this._image)),
          this.getPane().appendChild(this._image),
          this._reset();
      },
      onRemove: function () {
        at(this._image),
          this.options.interactive && this.removeInteractiveTarget(this._image);
      },
      setOpacity: function (I) {
        return (
          (this.options.opacity = I), this._image && this._updateOpacity(), this
        );
      },
      setStyle: function (I) {
        return I.opacity && this.setOpacity(I.opacity), this;
      },
      bringToFront: function () {
        return this._map && Mt(this._image), this;
      },
      bringToBack: function () {
        return this._map && St(this._image), this;
      },
      setUrl: function (I) {
        return (this._url = I), this._image && (this._image.src = I), this;
      },
      setBounds: function (I) {
        return (this._bounds = F(I)), this._map && this._reset(), this;
      },
      getEvents: function () {
        var I = { zoom: this._reset, viewreset: this._reset };
        return this._zoomAnimated && (I.zoomanim = this._animateZoom), I;
      },
      setZIndex: function (I) {
        return (this.options.zIndex = I), this._updateZIndex(), this;
      },
      getBounds: function () {
        return this._bounds;
      },
      getElement: function () {
        return this._image;
      },
      _initImage: function () {
        var I = 'IMG' === this._url.tagName,
          t = (this._image = I ? this._url : st('img'));
        lt(t, 'leaflet-image-layer'),
          this._zoomAnimated && lt(t, 'leaflet-zoom-animated'),
          this.options.className && lt(t, this.options.className),
          (t.onselectstart = C),
          (t.onmousemove = C),
          (t.onload = T(this.fire, this, 'load')),
          (t.onerror = T(this._overlayOnError, this, 'error')),
          (this.options.crossOrigin || '' === this.options.crossOrigin) &&
            (t.crossOrigin =
              !0 === this.options.crossOrigin ? '' : this.options.crossOrigin),
          this.options.zIndex && this._updateZIndex(),
          I
            ? (this._url = t.src)
            : ((t.src = this._url), (t.alt = this.options.alt));
      },
      _animateZoom: function (I) {
        var t = this._map.getZoomScale(I.zoom),
          E = this._map._latLngBoundsToNewLayerBounds(
            this._bounds,
            I.zoom,
            I.center
          ).min;
        mt(this._image, E, t);
      },
      _reset: function () {
        var I = this._image,
          t = new Y(
            this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
            this._map.latLngToLayerPoint(this._bounds.getSouthEast())
          ),
          E = t.getSize();
        ft(I, t.min),
          (I.style.width = E.x + 'px'),
          (I.style.height = E.y + 'px');
      },
      _updateOpacity: function () {
        dt(this._image, this.options.opacity);
      },
      _updateZIndex: function () {
        this._image &&
          void 0 !== this.options.zIndex &&
          null !== this.options.zIndex &&
          (this._image.style.zIndex = this.options.zIndex);
      },
      _overlayOnError: function () {
        this.fire('error');
        var I = this.options.errorOverlayUrl;
        I && this._url !== I && ((this._url = I), (this._image.src = I));
      },
      getCenter: function () {
        return this._bounds.getCenter();
      },
    }),
    H_ = function (I, t, E) {
      return new d_(I, t, E);
    },
    p_ = d_.extend({
      options: {
        autoplay: !0,
        loop: !0,
        keepAspectRatio: !0,
        muted: !1,
        playsInline: !0,
      },
      _initImage: function () {
        var I = 'VIDEO' === this._url.tagName,
          t = (this._image = I ? this._url : st('video'));
        if (
          (lt(t, 'leaflet-image-layer'),
          this._zoomAnimated && lt(t, 'leaflet-zoom-animated'),
          this.options.className && lt(t, this.options.className),
          (t.onselectstart = C),
          (t.onmousemove = C),
          (t.onloadeddata = T(this.fire, this, 'load')),
          I)
        ) {
          for (
            var E = t.getElementsByTagName('source'), _ = [], e = 0;
            e < E.length;
            e++
          )
            _.push(E[e].src);
          this._url = E.length > 0 ? _ : [t.src];
        } else {
          r(this._url) || (this._url = [this._url]),
            !this.options.keepAspectRatio &&
              Object.prototype.hasOwnProperty.call(t.style, 'objectFit') &&
              (t.style.objectFit = 'fill'),
            (t.autoplay = !!this.options.autoplay),
            (t.loop = !!this.options.loop),
            (t.muted = !!this.options.muted),
            (t.playsInline = !!this.options.playsInline);
          for (var i = 0; i < this._url.length; i++) {
            var n = st('source');
            (n.src = this._url[i]), t.appendChild(n);
          }
        }
      },
    });
  function m_(I, t, E) {
    return new p_(I, t, E);
  }
  var f_ = d_.extend({
    _initImage: function () {
      var I = (this._image = this._url);
      lt(I, 'leaflet-image-layer'),
        this._zoomAnimated && lt(I, 'leaflet-zoom-animated'),
        this.options.className && lt(I, this.options.className),
        (I.onselectstart = C),
        (I.onmousemove = C);
    },
  });
  function P_(I, t, E) {
    return new f_(I, t, E);
  }
  var L_ = kE.extend({
    options: {
      interactive: !1,
      offset: [0, 0],
      className: '',
      pane: void 0,
      content: '',
    },
    initialize: function (I, t) {
      I && (I instanceof y || r(I))
        ? ((this._latlng = X(I)), O(this, t))
        : (O(this, I), (this._source = t)),
        this.options.content && (this._content = this.options.content);
    },
    openOn: function (I) {
      return (
        (I = arguments.length ? I : this._source._map).hasLayer(this) ||
          I.addLayer(this),
        this
      );
    },
    close: function () {
      return this._map && this._map.removeLayer(this), this;
    },
    toggle: function (I) {
      return (
        this._map
          ? this.close()
          : (arguments.length ? (this._source = I) : (I = this._source),
            this._prepareOpen(),
            this.openOn(I._map)),
        this
      );
    },
    onAdd: function (I) {
      (this._zoomAnimated = I._zoomAnimated),
        this._container || this._initLayout(),
        I._fadeAnimated && dt(this._container, 0),
        clearTimeout(this._removeTimeout),
        this.getPane().appendChild(this._container),
        this.update(),
        I._fadeAnimated && dt(this._container, 1),
        this.bringToFront(),
        this.options.interactive &&
          (lt(this._container, 'leaflet-interactive'),
          this.addInteractiveTarget(this._container));
    },
    onRemove: function (I) {
      I._fadeAnimated
        ? (dt(this._container, 0),
          (this._removeTimeout = setTimeout(
            T(at, void 0, this._container),
            200
          )))
        : at(this._container),
        this.options.interactive &&
          (ut(this._container, 'leaflet-interactive'),
          this.removeInteractiveTarget(this._container));
    },
    getLatLng: function () {
      return this._latlng;
    },
    setLatLng: function (I) {
      return (
        (this._latlng = X(I)),
        this._map && (this._updatePosition(), this._adjustPan()),
        this
      );
    },
    getContent: function () {
      return this._content;
    },
    setContent: function (I) {
      return (this._content = I), this.update(), this;
    },
    getElement: function () {
      return this._container;
    },
    update: function () {
      this._map &&
        ((this._container.style.visibility = 'hidden'),
        this._updateContent(),
        this._updateLayout(),
        this._updatePosition(),
        (this._container.style.visibility = ''),
        this._adjustPan());
    },
    getEvents: function () {
      var I = { zoom: this._updatePosition, viewreset: this._updatePosition };
      return this._zoomAnimated && (I.zoomanim = this._animateZoom), I;
    },
    isOpen: function () {
      return !!this._map && this._map.hasLayer(this);
    },
    bringToFront: function () {
      return this._map && Mt(this._container), this;
    },
    bringToBack: function () {
      return this._map && St(this._container), this;
    },
    _prepareOpen: function (I) {
      var t = this._source;
      if (!t._map) return !1;
      if (t instanceof QE) {
        t = null;
        var E = this._source._layers;
        for (var _ in E)
          if (E[_]._map) {
            t = E[_];
            break;
          }
        if (!t) return !1;
        this._source = t;
      }
      if (!I)
        if (t.getCenter) I = t.getCenter();
        else if (t.getLatLng) I = t.getLatLng();
        else {
          if (!t.getBounds)
            throw new Error('Unable to get source layer LatLng.');
          I = t.getBounds().getCenter();
        }
      return this.setLatLng(I), this._map && this.update(), !0;
    },
    _updateContent: function () {
      if (this._content) {
        var I = this._contentNode,
          t =
            'function' == typeof this._content
              ? this._content(this._source || this)
              : this._content;
        if ('string' == typeof t) I.innerHTML = t;
        else {
          for (; I.hasChildNodes(); ) I.removeChild(I.firstChild);
          I.appendChild(t);
        }
        this.fire('contentupdate');
      }
    },
    _updatePosition: function () {
      if (this._map) {
        var I = this._map.latLngToLayerPoint(this._latlng),
          t = Z(this.options.offset),
          E = this._getAnchor();
        this._zoomAnimated
          ? ft(this._container, I.add(E))
          : (t = t.add(I).add(E));
        var _ = (this._containerBottom = -t.y),
          T = (this._containerLeft =
            -Math.round(this._containerWidth / 2) + t.x);
        (this._container.style.bottom = _ + 'px'),
          (this._container.style.left = T + 'px');
      }
    },
    _getAnchor: function () {
      return [0, 0];
    },
  });
  TE.include({
    _initOverlay: function (I, t, E, _) {
      var T = t;
      return (
        T instanceof I || (T = new I(_).setContent(t)), E && T.setLatLng(E), T
      );
    },
  }),
    kE.include({
      _initOverlay: function (I, t, E, _) {
        var T = E;
        return (
          T instanceof I
            ? (O(T, _), (T._source = this))
            : (T = t && !_ ? t : new I(_, this)).setContent(E),
          T
        );
      },
    });
  var B_ = L_.extend({
      options: {
        pane: 'popupPane',
        offset: [0, 7],
        maxWidth: 300,
        minWidth: 50,
        maxHeight: null,
        autoPan: !0,
        autoPanPaddingTopLeft: null,
        autoPanPaddingBottomRight: null,
        autoPanPadding: [5, 5],
        keepInView: !1,
        closeButton: !0,
        autoClose: !0,
        closeOnEscapeKey: !0,
        className: '',
      },
      openOn: function (I) {
        return (
          !(I = arguments.length ? I : this._source._map).hasLayer(this) &&
            I._popup &&
            I._popup.options.autoClose &&
            I.removeLayer(I._popup),
          (I._popup = this),
          L_.prototype.openOn.call(this, I)
        );
      },
      onAdd: function (I) {
        L_.prototype.onAdd.call(this, I),
          I.fire('popupopen', { popup: this }),
          this._source &&
            (this._source.fire('popupopen', { popup: this }, !0),
            this._source instanceof T_ || this._source.on('preclick', Wt));
      },
      onRemove: function (I) {
        L_.prototype.onRemove.call(this, I),
          I.fire('popupclose', { popup: this }),
          this._source &&
            (this._source.fire('popupclose', { popup: this }, !0),
            this._source instanceof T_ || this._source.off('preclick', Wt));
      },
      getEvents: function () {
        var I = L_.prototype.getEvents.call(this);
        return (
          (void 0 !== this.options.closeOnClick
            ? this.options.closeOnClick
            : this._map.options.closePopupOnClick) && (I.preclick = this.close),
          this.options.keepInView && (I.moveend = this._adjustPan),
          I
        );
      },
      _initLayout: function () {
        var I = 'leaflet-popup',
          t = (this._container = st(
            'div',
            I + ' ' + (this.options.className || '') + ' leaflet-zoom-animated'
          )),
          E = (this._wrapper = st('div', I + '-content-wrapper', t));
        if (
          ((this._contentNode = st('div', I + '-content', E)),
          zt(t),
          kt(this._contentNode),
          Ft(t, 'contextmenu', Wt),
          (this._tipContainer = st('div', I + '-tip-container', t)),
          (this._tip = st('div', I + '-tip', this._tipContainer)),
          this.options.closeButton)
        ) {
          var _ = (this._closeButton = st('a', I + '-close-button', t));
          _.setAttribute('role', 'button'),
            _.setAttribute('aria-label', 'Close popup'),
            (_.href = '#close'),
            (_.innerHTML = '<span aria-hidden="true">&#215;</span>'),
            Ft(
              _,
              'click',
              function (I) {
                Jt(I), this.close();
              },
              this
            );
        }
      },
      _updateLayout: function () {
        var I = this._contentNode,
          t = I.style;
        (t.width = ''), (t.whiteSpace = 'nowrap');
        var E = I.offsetWidth;
        (E = Math.min(E, this.options.maxWidth)),
          (E = Math.max(E, this.options.minWidth)),
          (t.width = E + 1 + 'px'),
          (t.whiteSpace = ''),
          (t.height = '');
        var _ = I.offsetHeight,
          T = this.options.maxHeight,
          e = 'leaflet-popup-scrolled';
        T && _ > T ? ((t.height = T + 'px'), lt(I, e)) : ut(I, e),
          (this._containerWidth = this._container.offsetWidth);
      },
      _animateZoom: function (I) {
        var t = this._map._latLngToNewLayerPoint(
            this._latlng,
            I.zoom,
            I.center
          ),
          E = this._getAnchor();
        ft(this._container, t.add(E));
      },
      _adjustPan: function () {
        if (this.options.autoPan)
          if (
            (this._map._panAnim && this._map._panAnim.stop(), this._autopanning)
          )
            this._autopanning = !1;
          else {
            var I = this._map,
              t = parseInt(Rt(this._container, 'marginBottom'), 10) || 0,
              E = this._container.offsetHeight + t,
              _ = this._containerWidth,
              T = new V(this._containerLeft, -E - this._containerBottom);
            T._add(Pt(this._container));
            var e = I.layerPointToContainerPoint(T),
              i = Z(this.options.autoPanPadding),
              n = Z(this.options.autoPanPaddingTopLeft || i),
              o = Z(this.options.autoPanPaddingBottomRight || i),
              C = I.getSize(),
              D = 0,
              N = 0;
            e.x + _ + o.x > C.x && (D = e.x + _ - C.x + o.x),
              e.x - D - n.x < 0 && (D = e.x - n.x),
              e.y + E + o.y > C.y && (N = e.y + E - C.y + o.y),
              e.y - N - n.y < 0 && (N = e.y - n.y),
              (D || N) &&
                (this.options.keepInView && (this._autopanning = !0),
                I.fire('autopanstart').panBy([D, N]));
          }
      },
      _getAnchor: function () {
        return Z(
          this._source && this._source._getPopupAnchor
            ? this._source._getPopupAnchor()
            : [0, 0]
        );
      },
    }),
    V_ = function (I, t) {
      return new B_(I, t);
    };
  TE.mergeOptions({ closePopupOnClick: !0 }),
    TE.include({
      openPopup: function (I, t, E) {
        return this._initOverlay(B_, I, t, E).openOn(this), this;
      },
      closePopup: function (I) {
        return (I = arguments.length ? I : this._popup) && I.close(), this;
      },
    }),
    kE.include({
      bindPopup: function (I, t) {
        return (
          (this._popup = this._initOverlay(B_, this._popup, I, t)),
          this._popupHandlersAdded ||
            (this.on({
              click: this._openPopup,
              keypress: this._onKeyPress,
              remove: this.closePopup,
              move: this._movePopup,
            }),
            (this._popupHandlersAdded = !0)),
          this
        );
      },
      unbindPopup: function () {
        return (
          this._popup &&
            (this.off({
              click: this._openPopup,
              keypress: this._onKeyPress,
              remove: this.closePopup,
              move: this._movePopup,
            }),
            (this._popupHandlersAdded = !1),
            (this._popup = null)),
          this
        );
      },
      openPopup: function (I) {
        return (
          this._popup &&
            (this instanceof QE || (this._popup._source = this),
            this._popup._prepareOpen(I || this._latlng) &&
              this._popup.openOn(this._map)),
          this
        );
      },
      closePopup: function () {
        return this._popup && this._popup.close(), this;
      },
      togglePopup: function () {
        return this._popup && this._popup.toggle(this), this;
      },
      isPopupOpen: function () {
        return !!this._popup && this._popup.isOpen();
      },
      setPopupContent: function (I) {
        return this._popup && this._popup.setContent(I), this;
      },
      getPopup: function () {
        return this._popup;
      },
      _openPopup: function (I) {
        if (this._popup && this._map) {
          Qt(I);
          var t = I.layer || I.target;
          this._popup._source !== t || t instanceof T_
            ? ((this._popup._source = t), this.openPopup(I.latlng))
            : this._map.hasLayer(this._popup)
            ? this.closePopup()
            : this.openPopup(I.latlng);
        }
      },
      _movePopup: function (I) {
        this._popup.setLatLng(I.latlng);
      },
      _onKeyPress: function (I) {
        13 === I.originalEvent.keyCode && this._openPopup(I);
      },
    });
  var g_ = L_.extend({
      options: {
        pane: 'tooltipPane',
        offset: [0, 0],
        direction: 'auto',
        permanent: !1,
        sticky: !1,
        opacity: 0.9,
      },
      onAdd: function (I) {
        L_.prototype.onAdd.call(this, I),
          this.setOpacity(this.options.opacity),
          I.fire('tooltipopen', { tooltip: this }),
          this._source &&
            (this.addEventParent(this._source),
            this._source.fire('tooltipopen', { tooltip: this }, !0));
      },
      onRemove: function (I) {
        L_.prototype.onRemove.call(this, I),
          I.fire('tooltipclose', { tooltip: this }),
          this._source &&
            (this.removeEventParent(this._source),
            this._source.fire('tooltipclose', { tooltip: this }, !0));
      },
      getEvents: function () {
        var I = L_.prototype.getEvents.call(this);
        return this.options.permanent || (I.preclick = this.close), I;
      },
      _initLayout: function () {
        var I =
          'leaflet-tooltip ' +
          (this.options.className || '') +
          ' leaflet-zoom-' +
          (this._zoomAnimated ? 'animated' : 'hide');
        (this._contentNode = this._container = st('div', I)),
          this._container.setAttribute('role', 'tooltip'),
          this._container.setAttribute('id', 'leaflet-tooltip-' + i(this));
      },
      _updateLayout: function () {},
      _adjustPan: function () {},
      _setPosition: function (I) {
        var t,
          E,
          _ = this._map,
          T = this._container,
          e = _.latLngToContainerPoint(_.getCenter()),
          i = _.layerPointToContainerPoint(I),
          n = this.options.direction,
          o = T.offsetWidth,
          C = T.offsetHeight,
          D = Z(this.options.offset),
          N = this._getAnchor();
        'top' === n
          ? ((t = o / 2), (E = C))
          : 'bottom' === n
          ? ((t = o / 2), (E = 0))
          : 'center' === n
          ? ((t = o / 2), (E = C / 2))
          : 'right' === n
          ? ((t = 0), (E = C / 2))
          : 'left' === n
          ? ((t = o), (E = C / 2))
          : i.x < e.x
          ? ((n = 'right'), (t = 0), (E = C / 2))
          : ((n = 'left'), (t = o + 2 * (D.x + N.x)), (E = C / 2)),
          (I = I.subtract(Z(t, E, !0)).add(D).add(N)),
          ut(T, 'leaflet-tooltip-right'),
          ut(T, 'leaflet-tooltip-left'),
          ut(T, 'leaflet-tooltip-top'),
          ut(T, 'leaflet-tooltip-bottom'),
          lt(T, 'leaflet-tooltip-' + n),
          ft(T, I);
      },
      _updatePosition: function () {
        var I = this._map.latLngToLayerPoint(this._latlng);
        this._setPosition(I);
      },
      setOpacity: function (I) {
        (this.options.opacity = I), this._container && dt(this._container, I);
      },
      _animateZoom: function (I) {
        var t = this._map._latLngToNewLayerPoint(
          this._latlng,
          I.zoom,
          I.center
        );
        this._setPosition(t);
      },
      _getAnchor: function () {
        return Z(
          this._source && this._source._getTooltipAnchor && !this.options.sticky
            ? this._source._getTooltipAnchor()
            : [0, 0]
        );
      },
    }),
    Z_ = function (I, t) {
      return new g_(I, t);
    };
  TE.include({
    openTooltip: function (I, t, E) {
      return this._initOverlay(g_, I, t, E).openOn(this), this;
    },
    closeTooltip: function (I) {
      return I.close(), this;
    },
  }),
    kE.include({
      bindTooltip: function (I, t) {
        return (
          this._tooltip && this.isTooltipOpen() && this.unbindTooltip(),
          (this._tooltip = this._initOverlay(g_, this._tooltip, I, t)),
          this._initTooltipInteractions(),
          this._tooltip.options.permanent &&
            this._map &&
            this._map.hasLayer(this) &&
            this.openTooltip(),
          this
        );
      },
      unbindTooltip: function () {
        return (
          this._tooltip &&
            (this._initTooltipInteractions(!0),
            this.closeTooltip(),
            (this._tooltip = null)),
          this
        );
      },
      _initTooltipInteractions: function (I) {
        if (I || !this._tooltipHandlersAdded) {
          var t = I ? 'off' : 'on',
            E = { remove: this.closeTooltip, move: this._moveTooltip };
          this._tooltip.options.permanent
            ? (E.add = this._openTooltip)
            : ((E.mouseover = this._openTooltip),
              (E.mouseout = this.closeTooltip),
              (E.click = this._openTooltip),
              this._map
                ? this._addFocusListeners()
                : (E.add = this._addFocusListeners)),
            this._tooltip.options.sticky && (E.mousemove = this._moveTooltip),
            this[t](E),
            (this._tooltipHandlersAdded = !I);
        }
      },
      openTooltip: function (I) {
        return (
          this._tooltip &&
            (this instanceof QE || (this._tooltip._source = this),
            this._tooltip._prepareOpen(I) &&
              (this._tooltip.openOn(this._map),
              this.getElement
                ? this._setAriaDescribedByOnLayer(this)
                : this.eachLayer &&
                  this.eachLayer(this._setAriaDescribedByOnLayer, this))),
          this
        );
      },
      closeTooltip: function () {
        if (this._tooltip) return this._tooltip.close();
      },
      toggleTooltip: function () {
        return this._tooltip && this._tooltip.toggle(this), this;
      },
      isTooltipOpen: function () {
        return this._tooltip.isOpen();
      },
      setTooltipContent: function (I) {
        return this._tooltip && this._tooltip.setContent(I), this;
      },
      getTooltip: function () {
        return this._tooltip;
      },
      _addFocusListeners: function () {
        this.getElement
          ? this._addFocusListenersOnLayer(this)
          : this.eachLayer &&
            this.eachLayer(this._addFocusListenersOnLayer, this);
      },
      _addFocusListenersOnLayer: function (I) {
        var t = 'function' == typeof I.getElement && I.getElement();
        t &&
          (Ft(
            t,
            'focus',
            function () {
              (this._tooltip._source = I), this.openTooltip();
            },
            this
          ),
          Ft(t, 'blur', this.closeTooltip, this));
      },
      _setAriaDescribedByOnLayer: function (I) {
        var t = 'function' == typeof I.getElement && I.getElement();
        t && t.setAttribute('aria-describedby', this._tooltip._container.id);
      },
      _openTooltip: function (I) {
        if (this._tooltip && this._map)
          if (
            this._map.dragging &&
            this._map.dragging.moving() &&
            !this._openOnceFlag
          ) {
            this._openOnceFlag = !0;
            var t = this;
            this._map.once('moveend', function () {
              (t._openOnceFlag = !1), t._openTooltip(I);
            });
          } else
            (this._tooltip._source = I.layer || I.target),
              this.openTooltip(
                this._tooltip.options.sticky ? I.latlng : void 0
              );
      },
      _moveTooltip: function (I) {
        var t,
          E,
          _ = I.latlng;
        this._tooltip.options.sticky &&
          I.originalEvent &&
          ((t = this._map.mouseEventToContainerPoint(I.originalEvent)),
          (E = this._map.containerPointToLayerPoint(t)),
          (_ = this._map.layerPointToLatLng(E))),
          this._tooltip.setLatLng(_);
      },
    });
  var Y_ = qE.extend({
    options: {
      iconSize: [12, 12],
      html: !1,
      bgPos: null,
      className: 'leaflet-div-icon',
    },
    createIcon: function (I) {
      var t = I && 'DIV' === I.tagName ? I : document.createElement('div'),
        E = this.options;
      if (
        (E.html instanceof Element
          ? (rt(t), t.appendChild(E.html))
          : (t.innerHTML = !1 !== E.html ? E.html : ''),
        E.bgPos)
      ) {
        var _ = Z(E.bgPos);
        t.style.backgroundPosition = -_.x + 'px ' + -_.y + 'px';
      }
      return this._setIconStyles(t, 'icon'), t;
    },
    createShadow: function () {
      return null;
    },
  });
  function v_(I) {
    return new Y_(I);
  }
  qE.Default = I_;
  var G_ = kE.extend({
    options: {
      tileSize: 256,
      opacity: 1,
      updateWhenIdle: GI.mobile,
      updateWhenZooming: !0,
      updateInterval: 200,
      zIndex: 1,
      bounds: null,
      minZoom: 0,
      maxZoom: void 0,
      maxNativeZoom: void 0,
      minNativeZoom: void 0,
      noWrap: !1,
      pane: 'tilePane',
      className: '',
      keepBuffer: 2,
    },
    initialize: function (I) {
      O(this, I);
    },
    onAdd: function () {
      this._initContainer(),
        (this._levels = {}),
        (this._tiles = {}),
        this._resetView();
    },
    beforeAdd: function (I) {
      I._addZoomLimit(this);
    },
    onRemove: function (I) {
      this._removeAllTiles(),
        at(this._container),
        I._removeZoomLimit(this),
        (this._container = null),
        (this._tileZoom = void 0);
    },
    bringToFront: function () {
      return (
        this._map && (Mt(this._container), this._setAutoZIndex(Math.max)), this
      );
    },
    bringToBack: function () {
      return (
        this._map && (St(this._container), this._setAutoZIndex(Math.min)), this
      );
    },
    getContainer: function () {
      return this._container;
    },
    setOpacity: function (I) {
      return (this.options.opacity = I), this._updateOpacity(), this;
    },
    setZIndex: function (I) {
      return (this.options.zIndex = I), this._updateZIndex(), this;
    },
    isLoading: function () {
      return this._loading;
    },
    redraw: function () {
      if (this._map) {
        this._removeAllTiles();
        var I = this._clampZoom(this._map.getZoom());
        I !== this._tileZoom && ((this._tileZoom = I), this._updateLevels()),
          this._update();
      }
      return this;
    },
    getEvents: function () {
      var I = {
        viewprereset: this._invalidateAll,
        viewreset: this._resetView,
        zoom: this._resetView,
        moveend: this._onMoveEnd,
      };
      return (
        this.options.updateWhenIdle ||
          (this._onMove ||
            (this._onMove = n(
              this._onMoveEnd,
              this.options.updateInterval,
              this
            )),
          (I.move = this._onMove)),
        this._zoomAnimated && (I.zoomanim = this._animateZoom),
        I
      );
    },
    createTile: function () {
      return document.createElement('div');
    },
    getTileSize: function () {
      var I = this.options.tileSize;
      return I instanceof V ? I : new V(I, I);
    },
    _updateZIndex: function () {
      this._container &&
        void 0 !== this.options.zIndex &&
        null !== this.options.zIndex &&
        (this._container.style.zIndex = this.options.zIndex);
    },
    _setAutoZIndex: function (I) {
      for (
        var t,
          E = this.getPane().children,
          _ = -I(-1 / 0, 1 / 0),
          T = 0,
          e = E.length;
        T < e;
        T++
      )
        (t = E[T].style.zIndex),
          E[T] !== this._container && t && (_ = I(_, +t));
      isFinite(_) &&
        ((this.options.zIndex = _ + I(-1, 1)), this._updateZIndex());
    },
    _updateOpacity: function () {
      if (this._map && !GI.ielt9) {
        dt(this._container, this.options.opacity);
        var I = +new Date(),
          t = !1,
          E = !1;
        for (var _ in this._tiles) {
          var T = this._tiles[_];
          if (T.current && T.loaded) {
            var e = Math.min(1, (I - T.loaded) / 200);
            dt(T.el, e),
              e < 1
                ? (t = !0)
                : (T.active ? (E = !0) : this._onOpaqueTile(T),
                  (T.active = !0));
          }
        }
        E && !this._noPrune && this._pruneTiles(),
          t &&
            (H(this._fadeFrame),
            (this._fadeFrame = d(this._updateOpacity, this)));
      }
    },
    _onOpaqueTile: C,
    _initContainer: function () {
      this._container ||
        ((this._container = st(
          'div',
          'leaflet-layer ' + (this.options.className || '')
        )),
        this._updateZIndex(),
        this.options.opacity < 1 && this._updateOpacity(),
        this.getPane().appendChild(this._container));
    },
    _updateLevels: function () {
      var I = this._tileZoom,
        t = this.options.maxZoom;
      if (void 0 !== I) {
        for (var E in this._levels)
          (E = Number(E)),
            this._levels[E].el.children.length || E === I
              ? ((this._levels[E].el.style.zIndex = t - Math.abs(I - E)),
                this._onUpdateLevel(E))
              : (at(this._levels[E].el),
                this._removeTilesAtZoom(E),
                this._onRemoveLevel(E),
                delete this._levels[E]);
        var _ = this._levels[I],
          T = this._map;
        return (
          _ ||
            (((_ = this._levels[I] = {}).el = st(
              'div',
              'leaflet-tile-container leaflet-zoom-animated',
              this._container
            )),
            (_.el.style.zIndex = t),
            (_.origin = T.project(T.unproject(T.getPixelOrigin()), I).round()),
            (_.zoom = I),
            this._setZoomTransform(_, T.getCenter(), T.getZoom()),
            C(_.el.offsetWidth),
            this._onCreateLevel(_)),
          (this._level = _),
          _
        );
      }
    },
    _onUpdateLevel: C,
    _onRemoveLevel: C,
    _onCreateLevel: C,
    _pruneTiles: function () {
      if (this._map) {
        var I,
          t,
          E = this._map.getZoom();
        if (E > this.options.maxZoom || E < this.options.minZoom)
          this._removeAllTiles();
        else {
          for (I in this._tiles) (t = this._tiles[I]).retain = t.current;
          for (I in this._tiles)
            if ((t = this._tiles[I]).current && !t.active) {
              var _ = t.coords;
              this._retainParent(_.x, _.y, _.z, _.z - 5) ||
                this._retainChildren(_.x, _.y, _.z, _.z + 2);
            }
          for (I in this._tiles) this._tiles[I].retain || this._removeTile(I);
        }
      }
    },
    _removeTilesAtZoom: function (I) {
      for (var t in this._tiles)
        this._tiles[t].coords.z === I && this._removeTile(t);
    },
    _removeAllTiles: function () {
      for (var I in this._tiles) this._removeTile(I);
    },
    _invalidateAll: function () {
      for (var I in this._levels)
        at(this._levels[I].el),
          this._onRemoveLevel(Number(I)),
          delete this._levels[I];
      this._removeAllTiles(), (this._tileZoom = void 0);
    },
    _retainParent: function (I, t, E, _) {
      var T = Math.floor(I / 2),
        e = Math.floor(t / 2),
        i = E - 1,
        n = new V(+T, +e);
      n.z = +i;
      var o = this._tileCoordsToKey(n),
        C = this._tiles[o];
      return C && C.active
        ? ((C.retain = !0), !0)
        : (C && C.loaded && (C.retain = !0),
          i > _ && this._retainParent(T, e, i, _));
    },
    _retainChildren: function (I, t, E, _) {
      for (var T = 2 * I; T < 2 * I + 2; T++)
        for (var e = 2 * t; e < 2 * t + 2; e++) {
          var i = new V(T, e);
          i.z = E + 1;
          var n = this._tileCoordsToKey(i),
            o = this._tiles[n];
          o && o.active
            ? (o.retain = !0)
            : (o && o.loaded && (o.retain = !0),
              E + 1 < _ && this._retainChildren(T, e, E + 1, _));
        }
    },
    _resetView: function (I) {
      var t = I && (I.pinch || I.flyTo);
      this._setView(this._map.getCenter(), this._map.getZoom(), t, t);
    },
    _animateZoom: function (I) {
      this._setView(I.center, I.zoom, !0, I.noUpdate);
    },
    _clampZoom: function (I) {
      var t = this.options;
      return void 0 !== t.minNativeZoom && I < t.minNativeZoom
        ? t.minNativeZoom
        : void 0 !== t.maxNativeZoom && t.maxNativeZoom < I
        ? t.maxNativeZoom
        : I;
    },
    _setView: function (I, t, E, _) {
      var T = Math.round(t);
      T =
        (void 0 !== this.options.maxZoom && T > this.options.maxZoom) ||
        (void 0 !== this.options.minZoom && T < this.options.minZoom)
          ? void 0
          : this._clampZoom(T);
      var e = this.options.updateWhenZooming && T !== this._tileZoom;
      (_ && !e) ||
        ((this._tileZoom = T),
        this._abortLoading && this._abortLoading(),
        this._updateLevels(),
        this._resetGrid(),
        void 0 !== T && this._update(I),
        E || this._pruneTiles(),
        (this._noPrune = !!E)),
        this._setZoomTransforms(I, t);
    },
    _setZoomTransforms: function (I, t) {
      for (var E in this._levels) this._setZoomTransform(this._levels[E], I, t);
    },
    _setZoomTransform: function (I, t, E) {
      var _ = this._map.getZoomScale(E, I.zoom),
        T = I.origin
          .multiplyBy(_)
          .subtract(this._map._getNewPixelOrigin(t, E))
          .round();
      GI.any3d ? mt(I.el, T, _) : ft(I.el, T);
    },
    _resetGrid: function () {
      var I = this._map,
        t = I.options.crs,
        E = (this._tileSize = this.getTileSize()),
        _ = this._tileZoom,
        T = this._map.getPixelWorldBounds(this._tileZoom);
      T && (this._globalTileRange = this._pxBoundsToTileRange(T)),
        (this._wrapX = t.wrapLng &&
          !this.options.noWrap && [
            Math.floor(I.project([0, t.wrapLng[0]], _).x / E.x),
            Math.ceil(I.project([0, t.wrapLng[1]], _).x / E.y),
          ]),
        (this._wrapY = t.wrapLat &&
          !this.options.noWrap && [
            Math.floor(I.project([t.wrapLat[0], 0], _).y / E.x),
            Math.ceil(I.project([t.wrapLat[1], 0], _).y / E.y),
          ]);
    },
    _onMoveEnd: function () {
      this._map && !this._map._animatingZoom && this._update();
    },
    _getTiledPixelBounds: function (I) {
      var t = this._map,
        E = t._animatingZoom
          ? Math.max(t._animateToZoom, t.getZoom())
          : t.getZoom(),
        _ = t.getZoomScale(E, this._tileZoom),
        T = t.project(I, this._tileZoom).floor(),
        e = t.getSize().divideBy(2 * _);
      return new Y(T.subtract(e), T.add(e));
    },
    _update: function (I) {
      var t = this._map;
      if (t) {
        var E = this._clampZoom(t.getZoom());
        if ((void 0 === I && (I = t.getCenter()), void 0 !== this._tileZoom)) {
          var _ = this._getTiledPixelBounds(I),
            T = this._pxBoundsToTileRange(_),
            e = T.getCenter(),
            i = [],
            n = this.options.keepBuffer,
            o = new Y(
              T.getBottomLeft().subtract([n, -n]),
              T.getTopRight().add([n, -n])
            );
          if (
            !(
              isFinite(T.min.x) &&
              isFinite(T.min.y) &&
              isFinite(T.max.x) &&
              isFinite(T.max.y)
            )
          )
            throw new Error('Attempted to load an infinite number of tiles');
          for (var C in this._tiles) {
            var D = this._tiles[C].coords;
            (D.z === this._tileZoom && o.contains(new V(D.x, D.y))) ||
              (this._tiles[C].current = !1);
          }
          if (Math.abs(E - this._tileZoom) > 1) this._setView(I, E);
          else {
            for (var N = T.min.y; N <= T.max.y; N++)
              for (var A = T.min.x; A <= T.max.x; A++) {
                var O = new V(A, N);
                if (((O.z = this._tileZoom), this._isValidTile(O))) {
                  var R = this._tiles[this._tileCoordsToKey(O)];
                  R ? (R.current = !0) : i.push(O);
                }
              }
            if (
              (i.sort(function (I, t) {
                return I.distanceTo(e) - t.distanceTo(e);
              }),
              0 !== i.length)
            ) {
              this._loading || ((this._loading = !0), this.fire('loading'));
              var s = document.createDocumentFragment();
              for (A = 0; A < i.length; A++) this._addTile(i[A], s);
              this._level.el.appendChild(s);
            }
          }
        }
      }
    },
    _isValidTile: function (I) {
      var t = this._map.options.crs;
      if (!t.infinite) {
        var E = this._globalTileRange;
        if (
          (!t.wrapLng && (I.x < E.min.x || I.x > E.max.x)) ||
          (!t.wrapLat && (I.y < E.min.y || I.y > E.max.y))
        )
          return !1;
      }
      if (!this.options.bounds) return !0;
      var _ = this._tileCoordsToBounds(I);
      return F(this.options.bounds).overlaps(_);
    },
    _keyToBounds: function (I) {
      return this._tileCoordsToBounds(this._keyToTileCoords(I));
    },
    _tileCoordsToNwSe: function (I) {
      var t = this._map,
        E = this.getTileSize(),
        _ = I.scaleBy(E),
        T = _.add(E);
      return [t.unproject(_, I.z), t.unproject(T, I.z)];
    },
    _tileCoordsToBounds: function (I) {
      var t = this._tileCoordsToNwSe(I),
        E = new G(t[0], t[1]);
      return this.options.noWrap || (E = this._map.wrapLatLngBounds(E)), E;
    },
    _tileCoordsToKey: function (I) {
      return I.x + ':' + I.y + ':' + I.z;
    },
    _keyToTileCoords: function (I) {
      var t = I.split(':'),
        E = new V(+t[0], +t[1]);
      return (E.z = +t[2]), E;
    },
    _removeTile: function (I) {
      var t = this._tiles[I];
      t &&
        (at(t.el),
        delete this._tiles[I],
        this.fire('tileunload', {
          tile: t.el,
          coords: this._keyToTileCoords(I),
        }));
    },
    _initTile: function (I) {
      lt(I, 'leaflet-tile');
      var t = this.getTileSize();
      (I.style.width = t.x + 'px'),
        (I.style.height = t.y + 'px'),
        (I.onselectstart = C),
        (I.onmousemove = C),
        GI.ielt9 && this.options.opacity < 1 && dt(I, this.options.opacity);
    },
    _addTile: function (I, t) {
      var E = this._getTilePos(I),
        _ = this._tileCoordsToKey(I),
        e = this.createTile(this._wrapCoords(I), T(this._tileReady, this, I));
      this._initTile(e),
        this.createTile.length < 2 && d(T(this._tileReady, this, I, null, e)),
        ft(e, E),
        (this._tiles[_] = { el: e, coords: I, current: !0 }),
        t.appendChild(e),
        this.fire('tileloadstart', { tile: e, coords: I });
    },
    _tileReady: function (I, t, E) {
      t && this.fire('tileerror', { error: t, tile: E, coords: I });
      var _ = this._tileCoordsToKey(I);
      (E = this._tiles[_]) &&
        ((E.loaded = +new Date()),
        this._map._fadeAnimated
          ? (dt(E.el, 0),
            H(this._fadeFrame),
            (this._fadeFrame = d(this._updateOpacity, this)))
          : ((E.active = !0), this._pruneTiles()),
        t ||
          (lt(E.el, 'leaflet-tile-loaded'),
          this.fire('tileload', { tile: E.el, coords: I })),
        this._noTilesToLoad() &&
          ((this._loading = !1),
          this.fire('load'),
          GI.ielt9 || !this._map._fadeAnimated
            ? d(this._pruneTiles, this)
            : setTimeout(T(this._pruneTiles, this), 250)));
    },
    _getTilePos: function (I) {
      return I.scaleBy(this.getTileSize()).subtract(this._level.origin);
    },
    _wrapCoords: function (I) {
      var t = new V(
        this._wrapX ? o(I.x, this._wrapX) : I.x,
        this._wrapY ? o(I.y, this._wrapY) : I.y
      );
      return (t.z = I.z), t;
    },
    _pxBoundsToTileRange: function (I) {
      var t = this.getTileSize();
      return new Y(
        I.min.unscaleBy(t).floor(),
        I.max.unscaleBy(t).ceil().subtract([1, 1])
      );
    },
    _noTilesToLoad: function () {
      for (var I in this._tiles) if (!this._tiles[I].loaded) return !1;
      return !0;
    },
  });
  function F_(I) {
    return new G_(I);
  }
  var y_ = G_.extend({
    options: {
      minZoom: 0,
      maxZoom: 18,
      subdomains: 'abc',
      errorTileUrl: '',
      zoomOffset: 0,
      tms: !1,
      zoomReverse: !1,
      detectRetina: !1,
      crossOrigin: !1,
      referrerPolicy: !1,
    },
    initialize: function (I, t) {
      (this._url = I),
        (t = O(this, t)).detectRetina && GI.retina && t.maxZoom > 0
          ? ((t.tileSize = Math.floor(t.tileSize / 2)),
            t.zoomReverse
              ? (t.zoomOffset--,
                (t.minZoom = Math.min(t.maxZoom, t.minZoom + 1)))
              : (t.zoomOffset++,
                (t.maxZoom = Math.max(t.minZoom, t.maxZoom - 1))),
            (t.minZoom = Math.max(0, t.minZoom)))
          : t.zoomReverse
          ? (t.minZoom = Math.min(t.maxZoom, t.minZoom))
          : (t.maxZoom = Math.max(t.minZoom, t.maxZoom)),
        'string' == typeof t.subdomains &&
          (t.subdomains = t.subdomains.split('')),
        this.on('tileunload', this._onTileRemove);
    },
    setUrl: function (I, t) {
      return (
        this._url === I && void 0 === t && (t = !0),
        (this._url = I),
        t || this.redraw(),
        this
      );
    },
    createTile: function (I, t) {
      var E = document.createElement('img');
      return (
        Ft(E, 'load', T(this._tileOnLoad, this, t, E)),
        Ft(E, 'error', T(this._tileOnError, this, t, E)),
        (this.options.crossOrigin || '' === this.options.crossOrigin) &&
          (E.crossOrigin =
            !0 === this.options.crossOrigin ? '' : this.options.crossOrigin),
        'string' == typeof this.options.referrerPolicy &&
          (E.referrerPolicy = this.options.referrerPolicy),
        (E.alt = ''),
        (E.src = this.getTileUrl(I)),
        E
      );
    },
    getTileUrl: function (I) {
      var t = {
        r: GI.retina ? '@2x' : '',
        s: this._getSubdomain(I),
        x: I.x,
        y: I.y,
        z: this._getZoomForUrl(),
      };
      if (this._map && !this._map.options.crs.infinite) {
        var _ = this._globalTileRange.max.y - I.y;
        this.options.tms && (t.y = _), (t['-y'] = _);
      }
      return a(this._url, E(t, this.options));
    },
    _tileOnLoad: function (I, t) {
      GI.ielt9 ? setTimeout(T(I, this, null, t), 0) : I(null, t);
    },
    _tileOnError: function (I, t, E) {
      var _ = this.options.errorTileUrl;
      _ && t.getAttribute('src') !== _ && (t.src = _), I(E, t);
    },
    _onTileRemove: function (I) {
      I.tile.onload = null;
    },
    _getZoomForUrl: function () {
      var I = this._tileZoom,
        t = this.options.maxZoom;
      return (
        this.options.zoomReverse && (I = t - I), I + this.options.zoomOffset
      );
    },
    _getSubdomain: function (I) {
      var t = Math.abs(I.x + I.y) % this.options.subdomains.length;
      return this.options.subdomains[t];
    },
    _abortLoading: function () {
      var I, t;
      for (I in this._tiles)
        if (
          this._tiles[I].coords.z !== this._tileZoom &&
          (((t = this._tiles[I].el).onload = C), (t.onerror = C), !t.complete)
        ) {
          t.src = S;
          var E = this._tiles[I].coords;
          at(t),
            delete this._tiles[I],
            this.fire('tileabort', { tile: t, coords: E });
        }
    },
    _removeTile: function (I) {
      var t = this._tiles[I];
      if (t)
        return (
          t.el.setAttribute('src', S), G_.prototype._removeTile.call(this, I)
        );
    },
    _tileReady: function (I, t, E) {
      if (this._map && (!E || E.getAttribute('src') !== S))
        return G_.prototype._tileReady.call(this, I, t, E);
    },
  });
  function X_(I, t) {
    return new y_(I, t);
  }
  var w_ = y_.extend({
    defaultWmsParams: {
      service: 'WMS',
      request: 'GetMap',
      layers: '',
      styles: '',
      format: 'image/jpeg',
      transparent: !1,
      version: '1.1.1',
    },
    options: { crs: null, uppercase: !1 },
    initialize: function (I, t) {
      this._url = I;
      var _ = E({}, this.defaultWmsParams);
      for (var T in t) T in this.options || (_[T] = t[T]);
      var e = (t = O(this, t)).detectRetina && GI.retina ? 2 : 1,
        i = this.getTileSize();
      (_.width = i.x * e), (_.height = i.y * e), (this.wmsParams = _);
    },
    onAdd: function (I) {
      (this._crs = this.options.crs || I.options.crs),
        (this._wmsVersion = parseFloat(this.wmsParams.version));
      var t = this._wmsVersion >= 1.3 ? 'crs' : 'srs';
      (this.wmsParams[t] = this._crs.code), y_.prototype.onAdd.call(this, I);
    },
    getTileUrl: function (I) {
      var t = this._tileCoordsToNwSe(I),
        E = this._crs,
        _ = v(E.project(t[0]), E.project(t[1])),
        T = _.min,
        e = _.max,
        i = (
          this._wmsVersion >= 1.3 && this._crs === KE
            ? [T.y, T.x, e.y, e.x]
            : [T.x, T.y, e.x, e.y]
        ).join(','),
        n = y_.prototype.getTileUrl.call(this, I);
      return (
        n +
        R(this.wmsParams, n, this.options.uppercase) +
        (this.options.uppercase ? '&BBOX=' : '&bbox=') +
        i
      );
    },
    setParams: function (I, t) {
      return E(this.wmsParams, I), t || this.redraw(), this;
    },
  });
  function b_(I, t) {
    return new w_(I, t);
  }
  (y_.WMS = w_), (X_.wms = b_);
  var x_ = kE.extend({
      options: { padding: 0.1 },
      initialize: function (I) {
        O(this, I), i(this), (this._layers = this._layers || {});
      },
      onAdd: function () {
        this._container ||
          (this._initContainer(), lt(this._container, 'leaflet-zoom-animated')),
          this.getPane().appendChild(this._container),
          this._update(),
          this.on('update', this._updatePaths, this);
      },
      onRemove: function () {
        this.off('update', this._updatePaths, this), this._destroyContainer();
      },
      getEvents: function () {
        var I = {
          viewreset: this._reset,
          zoom: this._onZoom,
          moveend: this._update,
          zoomend: this._onZoomEnd,
        };
        return this._zoomAnimated && (I.zoomanim = this._onAnimZoom), I;
      },
      _onAnimZoom: function (I) {
        this._updateTransform(I.center, I.zoom);
      },
      _onZoom: function () {
        this._updateTransform(this._map.getCenter(), this._map.getZoom());
      },
      _updateTransform: function (I, t) {
        var E = this._map.getZoomScale(t, this._zoom),
          _ = this._map.getSize().multiplyBy(0.5 + this.options.padding),
          T = this._map.project(this._center, t),
          e = _.multiplyBy(-E)
            .add(T)
            .subtract(this._map._getNewPixelOrigin(I, t));
        GI.any3d ? mt(this._container, e, E) : ft(this._container, e);
      },
      _reset: function () {
        for (var I in (this._update(),
        this._updateTransform(this._center, this._zoom),
        this._layers))
          this._layers[I]._reset();
      },
      _onZoomEnd: function () {
        for (var I in this._layers) this._layers[I]._project();
      },
      _updatePaths: function () {
        for (var I in this._layers) this._layers[I]._update();
      },
      _update: function () {
        var I = this.options.padding,
          t = this._map.getSize(),
          E = this._map.containerPointToLayerPoint(t.multiplyBy(-I)).round();
        (this._bounds = new Y(E, E.add(t.multiplyBy(1 + 2 * I)).round())),
          (this._center = this._map.getCenter()),
          (this._zoom = this._map.getZoom());
      },
    }),
    K_ = x_.extend({
      options: { tolerance: 0 },
      getEvents: function () {
        var I = x_.prototype.getEvents.call(this);
        return (I.viewprereset = this._onViewPreReset), I;
      },
      _onViewPreReset: function () {
        this._postponeUpdatePaths = !0;
      },
      onAdd: function () {
        x_.prototype.onAdd.call(this), this._draw();
      },
      _initContainer: function () {
        var I = (this._container = document.createElement('canvas'));
        Ft(I, 'mousemove', this._onMouseMove, this),
          Ft(
            I,
            'click dblclick mousedown mouseup contextmenu',
            this._onClick,
            this
          ),
          Ft(I, 'mouseout', this._handleMouseOut, this),
          (I._leaflet_disable_events = !0),
          (this._ctx = I.getContext('2d'));
      },
      _destroyContainer: function () {
        H(this._redrawRequest),
          delete this._ctx,
          at(this._container),
          Xt(this._container),
          delete this._container;
      },
      _updatePaths: function () {
        if (!this._postponeUpdatePaths) {
          for (var I in ((this._redrawBounds = null), this._layers))
            this._layers[I]._update();
          this._redraw();
        }
      },
      _update: function () {
        if (!this._map._animatingZoom || !this._bounds) {
          x_.prototype._update.call(this);
          var I = this._bounds,
            t = this._container,
            E = I.getSize(),
            _ = GI.retina ? 2 : 1;
          ft(t, I.min),
            (t.width = _ * E.x),
            (t.height = _ * E.y),
            (t.style.width = E.x + 'px'),
            (t.style.height = E.y + 'px'),
            GI.retina && this._ctx.scale(2, 2),
            this._ctx.translate(-I.min.x, -I.min.y),
            this.fire('update');
        }
      },
      _reset: function () {
        x_.prototype._reset.call(this),
          this._postponeUpdatePaths &&
            ((this._postponeUpdatePaths = !1), this._updatePaths());
      },
      _initPath: function (I) {
        this._updateDashArray(I), (this._layers[i(I)] = I);
        var t = (I._order = { layer: I, prev: this._drawLast, next: null });
        this._drawLast && (this._drawLast.next = t),
          (this._drawLast = t),
          (this._drawFirst = this._drawFirst || this._drawLast);
      },
      _addPath: function (I) {
        this._requestRedraw(I);
      },
      _removePath: function (I) {
        var t = I._order,
          E = t.next,
          _ = t.prev;
        E ? (E.prev = _) : (this._drawLast = _),
          _ ? (_.next = E) : (this._drawFirst = E),
          delete I._order,
          delete this._layers[i(I)],
          this._requestRedraw(I);
      },
      _updatePath: function (I) {
        this._extendRedrawBounds(I),
          I._project(),
          I._update(),
          this._requestRedraw(I);
      },
      _updateStyle: function (I) {
        this._updateDashArray(I), this._requestRedraw(I);
      },
      _updateDashArray: function (I) {
        if ('string' == typeof I.options.dashArray) {
          var t,
            E,
            _ = I.options.dashArray.split(/[, ]+/),
            T = [];
          for (E = 0; E < _.length; E++) {
            if (((t = Number(_[E])), isNaN(t))) return;
            T.push(t);
          }
          I.options._dashArray = T;
        } else I.options._dashArray = I.options.dashArray;
      },
      _requestRedraw: function (I) {
        this._map &&
          (this._extendRedrawBounds(I),
          (this._redrawRequest = this._redrawRequest || d(this._redraw, this)));
      },
      _extendRedrawBounds: function (I) {
        if (I._pxBounds) {
          var t = (I.options.weight || 0) + 1;
          (this._redrawBounds = this._redrawBounds || new Y()),
            this._redrawBounds.extend(I._pxBounds.min.subtract([t, t])),
            this._redrawBounds.extend(I._pxBounds.max.add([t, t]));
        }
      },
      _redraw: function () {
        (this._redrawRequest = null),
          this._redrawBounds &&
            (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()),
          this._clear(),
          this._draw(),
          (this._redrawBounds = null);
      },
      _clear: function () {
        var I = this._redrawBounds;
        if (I) {
          var t = I.getSize();
          this._ctx.clearRect(I.min.x, I.min.y, t.x, t.y);
        } else
          this._ctx.save(),
            this._ctx.setTransform(1, 0, 0, 1, 0, 0),
            this._ctx.clearRect(
              0,
              0,
              this._container.width,
              this._container.height
            ),
            this._ctx.restore();
      },
      _draw: function () {
        var I,
          t = this._redrawBounds;
        if ((this._ctx.save(), t)) {
          var E = t.getSize();
          this._ctx.beginPath(),
            this._ctx.rect(t.min.x, t.min.y, E.x, E.y),
            this._ctx.clip();
        }
        this._drawing = !0;
        for (var _ = this._drawFirst; _; _ = _.next)
          (I = _.layer),
            (!t || (I._pxBounds && I._pxBounds.intersects(t))) &&
              I._updatePath();
        (this._drawing = !1), this._ctx.restore();
      },
      _updatePoly: function (I, t) {
        if (this._drawing) {
          var E,
            _,
            T,
            e,
            i = I._parts,
            n = i.length,
            o = this._ctx;
          if (n) {
            for (o.beginPath(), E = 0; E < n; E++) {
              for (_ = 0, T = i[E].length; _ < T; _++)
                (e = i[E][_]), o[_ ? 'lineTo' : 'moveTo'](e.x, e.y);
              t && o.closePath();
            }
            this._fillStroke(o, I);
          }
        }
      },
      _updateCircle: function (I) {
        if (this._drawing && !I._empty()) {
          var t = I._point,
            E = this._ctx,
            _ = Math.max(Math.round(I._radius), 1),
            T = (Math.max(Math.round(I._radiusY), 1) || _) / _;
          1 !== T && (E.save(), E.scale(1, T)),
            E.beginPath(),
            E.arc(t.x, t.y / T, _, 0, 2 * Math.PI, !1),
            1 !== T && E.restore(),
            this._fillStroke(E, I);
        }
      },
      _fillStroke: function (I, t) {
        var E = t.options;
        E.fill &&
          ((I.globalAlpha = E.fillOpacity),
          (I.fillStyle = E.fillColor || E.color),
          I.fill(E.fillRule || 'evenodd')),
          E.stroke &&
            0 !== E.weight &&
            (I.setLineDash &&
              I.setLineDash((t.options && t.options._dashArray) || []),
            (I.globalAlpha = E.opacity),
            (I.lineWidth = E.weight),
            (I.strokeStyle = E.color),
            (I.lineCap = E.lineCap),
            (I.lineJoin = E.lineJoin),
            I.stroke());
      },
      _onClick: function (I) {
        for (
          var t,
            E,
            _ = this._map.mouseEventToLayerPoint(I),
            T = this._drawFirst;
          T;
          T = T.next
        )
          (t = T.layer).options.interactive &&
            t._containsPoint(_) &&
            (('click' !== I.type && 'preclick' !== I.type) ||
              !this._map._draggableMoved(t)) &&
            (E = t);
        this._fireEvent(!!E && [E], I);
      },
      _onMouseMove: function (I) {
        if (
          this._map &&
          !this._map.dragging.moving() &&
          !this._map._animatingZoom
        ) {
          var t = this._map.mouseEventToLayerPoint(I);
          this._handleMouseHover(I, t);
        }
      },
      _handleMouseOut: function (I) {
        var t = this._hoveredLayer;
        t &&
          (ut(this._container, 'leaflet-interactive'),
          this._fireEvent([t], I, 'mouseout'),
          (this._hoveredLayer = null),
          (this._mouseHoverThrottled = !1));
      },
      _handleMouseHover: function (I, t) {
        if (!this._mouseHoverThrottled) {
          for (var E, _, e = this._drawFirst; e; e = e.next)
            (E = e.layer).options.interactive && E._containsPoint(t) && (_ = E);
          _ !== this._hoveredLayer &&
            (this._handleMouseOut(I),
            _ &&
              (lt(this._container, 'leaflet-interactive'),
              this._fireEvent([_], I, 'mouseover'),
              (this._hoveredLayer = _))),
            this._fireEvent(!!this._hoveredLayer && [this._hoveredLayer], I),
            (this._mouseHoverThrottled = !0),
            setTimeout(
              T(function () {
                this._mouseHoverThrottled = !1;
              }, this),
              32
            );
        }
      },
      _fireEvent: function (I, t, E) {
        this._map._fireDOMEvent(t, E || t.type, I);
      },
      _bringToFront: function (I) {
        var t = I._order;
        if (t) {
          var E = t.next,
            _ = t.prev;
          E &&
            ((E.prev = _),
            _ ? (_.next = E) : E && (this._drawFirst = E),
            (t.prev = this._drawLast),
            (this._drawLast.next = t),
            (t.next = null),
            (this._drawLast = t),
            this._requestRedraw(I));
        }
      },
      _bringToBack: function (I) {
        var t = I._order;
        if (t) {
          var E = t.next,
            _ = t.prev;
          _ &&
            ((_.next = E),
            E ? (E.prev = _) : _ && (this._drawLast = _),
            (t.prev = null),
            (t.next = this._drawFirst),
            (this._drawFirst.prev = t),
            (this._drawFirst = t),
            this._requestRedraw(I));
        }
      },
    });
  function W_(I) {
    return GI.canvas ? new K_(I) : null;
  }
  var k_ = (function () {
      try {
        return (
          document.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml'),
          function (I) {
            return document.createElement('<lvml:' + I + ' class="lvml">');
          }
        );
      } catch (I) {}
      return function (I) {
        return document.createElement(
          '<' + I + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">'
        );
      };
    })(),
    z_ = {
      _initContainer: function () {
        this._container = st('div', 'leaflet-vml-container');
      },
      _update: function () {
        this._map._animatingZoom ||
          (x_.prototype._update.call(this), this.fire('update'));
      },
      _initPath: function (I) {
        var t = (I._container = k_('shape'));
        lt(t, 'leaflet-vml-shape ' + (this.options.className || '')),
          (t.coordsize = '1 1'),
          (I._path = k_('path')),
          t.appendChild(I._path),
          this._updateStyle(I),
          (this._layers[i(I)] = I);
      },
      _addPath: function (I) {
        var t = I._container;
        this._container.appendChild(t),
          I.options.interactive && I.addInteractiveTarget(t);
      },
      _removePath: function (I) {
        var t = I._container;
        at(t), I.removeInteractiveTarget(t), delete this._layers[i(I)];
      },
      _updateStyle: function (I) {
        var t = I._stroke,
          E = I._fill,
          _ = I.options,
          T = I._container;
        (T.stroked = !!_.stroke),
          (T.filled = !!_.fill),
          _.stroke
            ? (t || (t = I._stroke = k_('stroke')),
              T.appendChild(t),
              (t.weight = _.weight + 'px'),
              (t.color = _.color),
              (t.opacity = _.opacity),
              _.dashArray
                ? (t.dashStyle = r(_.dashArray)
                    ? _.dashArray.join(' ')
                    : _.dashArray.replace(/( *, *)/g, ' '))
                : (t.dashStyle = ''),
              (t.endcap = _.lineCap.replace('butt', 'flat')),
              (t.joinstyle = _.lineJoin))
            : t && (T.removeChild(t), (I._stroke = null)),
          _.fill
            ? (E || (E = I._fill = k_('fill')),
              T.appendChild(E),
              (E.color = _.fillColor || _.color),
              (E.opacity = _.fillOpacity))
            : E && (T.removeChild(E), (I._fill = null));
      },
      _updateCircle: function (I) {
        var t = I._point.round(),
          E = Math.round(I._radius),
          _ = Math.round(I._radiusY || E);
        this._setPath(
          I,
          I._empty()
            ? 'M0 0'
            : 'AL ' + t.x + ',' + t.y + ' ' + E + ',' + _ + ' 0,23592600'
        );
      },
      _setPath: function (I, t) {
        I._path.v = t;
      },
      _bringToFront: function (I) {
        Mt(I._container);
      },
      _bringToBack: function (I) {
        St(I._container);
      },
    },
    J_ = GI.vml ? k_ : j,
    Q_ = x_.extend({
      _initContainer: function () {
        (this._container = J_('svg')),
          this._container.setAttribute('pointer-events', 'none'),
          (this._rootGroup = J_('g')),
          this._container.appendChild(this._rootGroup);
      },
      _destroyContainer: function () {
        at(this._container),
          Xt(this._container),
          delete this._container,
          delete this._rootGroup,
          delete this._svgSize;
      },
      _update: function () {
        if (!this._map._animatingZoom || !this._bounds) {
          x_.prototype._update.call(this);
          var I = this._bounds,
            t = I.getSize(),
            E = this._container;
          (this._svgSize && this._svgSize.equals(t)) ||
            ((this._svgSize = t),
            E.setAttribute('width', t.x),
            E.setAttribute('height', t.y)),
            ft(E, I.min),
            E.setAttribute('viewBox', [I.min.x, I.min.y, t.x, t.y].join(' ')),
            this.fire('update');
        }
      },
      _initPath: function (I) {
        var t = (I._path = J_('path'));
        I.options.className && lt(t, I.options.className),
          I.options.interactive && lt(t, 'leaflet-interactive'),
          this._updateStyle(I),
          (this._layers[i(I)] = I);
      },
      _addPath: function (I) {
        this._rootGroup || this._initContainer(),
          this._rootGroup.appendChild(I._path),
          I.addInteractiveTarget(I._path);
      },
      _removePath: function (I) {
        at(I._path),
          I.removeInteractiveTarget(I._path),
          delete this._layers[i(I)];
      },
      _updatePath: function (I) {
        I._project(), I._update();
      },
      _updateStyle: function (I) {
        var t = I._path,
          E = I.options;
        t &&
          (E.stroke
            ? (t.setAttribute('stroke', E.color),
              t.setAttribute('stroke-opacity', E.opacity),
              t.setAttribute('stroke-width', E.weight),
              t.setAttribute('stroke-linecap', E.lineCap),
              t.setAttribute('stroke-linejoin', E.lineJoin),
              E.dashArray
                ? t.setAttribute('stroke-dasharray', E.dashArray)
                : t.removeAttribute('stroke-dasharray'),
              E.dashOffset
                ? t.setAttribute('stroke-dashoffset', E.dashOffset)
                : t.removeAttribute('stroke-dashoffset'))
            : t.setAttribute('stroke', 'none'),
          E.fill
            ? (t.setAttribute('fill', E.fillColor || E.color),
              t.setAttribute('fill-opacity', E.fillOpacity),
              t.setAttribute('fill-rule', E.fillRule || 'evenodd'))
            : t.setAttribute('fill', 'none'));
      },
      _updatePoly: function (I, t) {
        this._setPath(I, q(I._parts, t));
      },
      _updateCircle: function (I) {
        var t = I._point,
          E = Math.max(Math.round(I._radius), 1),
          _ =
            'a' +
            E +
            ',' +
            (Math.max(Math.round(I._radiusY), 1) || E) +
            ' 0 1,0 ',
          T = I._empty()
            ? 'M0 0'
            : 'M' +
              (t.x - E) +
              ',' +
              t.y +
              _ +
              2 * E +
              ',0 ' +
              _ +
              2 * -E +
              ',0 ';
        this._setPath(I, T);
      },
      _setPath: function (I, t) {
        I._path.setAttribute('d', t);
      },
      _bringToFront: function (I) {
        Mt(I._path);
      },
      _bringToBack: function (I) {
        St(I._path);
      },
    });
  function j_(I) {
    return GI.svg || GI.vml ? new Q_(I) : null;
  }
  GI.vml && Q_.include(z_),
    TE.include({
      getRenderer: function (I) {
        var t =
          I.options.renderer ||
          this._getPaneRenderer(I.options.pane) ||
          this.options.renderer ||
          this._renderer;
        return (
          t || (t = this._renderer = this._createRenderer()),
          this.hasLayer(t) || this.addLayer(t),
          t
        );
      },
      _getPaneRenderer: function (I) {
        if ('overlayPane' === I || void 0 === I) return !1;
        var t = this._paneRenderers[I];
        return (
          void 0 === t &&
            ((t = this._createRenderer({ pane: I })),
            (this._paneRenderers[I] = t)),
          t
        );
      },
      _createRenderer: function (I) {
        return (this.options.preferCanvas && W_(I)) || j_(I);
      },
    });
  var q_ = N_.extend({
    initialize: function (I, t) {
      N_.prototype.initialize.call(this, this._boundsToLatLngs(I), t);
    },
    setBounds: function (I) {
      return this.setLatLngs(this._boundsToLatLngs(I));
    },
    _boundsToLatLngs: function (I) {
      return [
        (I = F(I)).getSouthWest(),
        I.getNorthWest(),
        I.getNorthEast(),
        I.getSouthEast(),
      ];
    },
  });
  function $_(I, t) {
    return new q_(I, t);
  }
  (Q_.create = J_),
    (Q_.pointsToPath = q),
    (O_.geometryToLayer = R_),
    (O_.coordsToLatLng = a_),
    (O_.coordsToLatLngs = r_),
    (O_.latLngToCoords = M_),
    (O_.latLngsToCoords = S_),
    (O_.getFeature = h_),
    (O_.asFeature = l_),
    TE.mergeOptions({ boxZoom: !0 });
  var IT = rE.extend({
    initialize: function (I) {
      (this._map = I),
        (this._container = I._container),
        (this._pane = I._panes.overlayPane),
        (this._resetStateTimeout = 0),
        I.on('unload', this._destroy, this);
    },
    addHooks: function () {
      Ft(this._container, 'mousedown', this._onMouseDown, this);
    },
    removeHooks: function () {
      Xt(this._container, 'mousedown', this._onMouseDown, this);
    },
    moved: function () {
      return this._moved;
    },
    _destroy: function () {
      at(this._pane), delete this._pane;
    },
    _resetState: function () {
      (this._resetStateTimeout = 0), (this._moved = !1);
    },
    _clearDeferredResetState: function () {
      0 !== this._resetStateTimeout &&
        (clearTimeout(this._resetStateTimeout), (this._resetStateTimeout = 0));
    },
    _onMouseDown: function (I) {
      if (!I.shiftKey || (1 !== I.which && 1 !== I.button)) return !1;
      this._clearDeferredResetState(),
        this._resetState(),
        et(),
        Bt(),
        (this._startPoint = this._map.mouseEventToContainerPoint(I)),
        Ft(
          document,
          {
            contextmenu: Qt,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown,
          },
          this
        );
    },
    _onMouseMove: function (I) {
      this._moved ||
        ((this._moved = !0),
        (this._box = st('div', 'leaflet-zoom-box', this._container)),
        lt(this._container, 'leaflet-crosshair'),
        this._map.fire('boxzoomstart')),
        (this._point = this._map.mouseEventToContainerPoint(I));
      var t = new Y(this._point, this._startPoint),
        E = t.getSize();
      ft(this._box, t.min),
        (this._box.style.width = E.x + 'px'),
        (this._box.style.height = E.y + 'px');
    },
    _finish: function () {
      this._moved && (at(this._box), ut(this._container, 'leaflet-crosshair')),
        it(),
        Vt(),
        Xt(
          document,
          {
            contextmenu: Qt,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown,
          },
          this
        );
    },
    _onMouseUp: function (I) {
      if ((1 === I.which || 1 === I.button) && (this._finish(), this._moved)) {
        this._clearDeferredResetState(),
          (this._resetStateTimeout = setTimeout(T(this._resetState, this), 0));
        var t = new G(
          this._map.containerPointToLatLng(this._startPoint),
          this._map.containerPointToLatLng(this._point)
        );
        this._map.fitBounds(t).fire('boxzoomend', { boxZoomBounds: t });
      }
    },
    _onKeyDown: function (I) {
      27 === I.keyCode &&
        (this._finish(), this._clearDeferredResetState(), this._resetState());
    },
  });
  TE.addInitHook('addHandler', 'boxZoom', IT),
    TE.mergeOptions({ doubleClickZoom: !0 });
  var tT = rE.extend({
    addHooks: function () {
      this._map.on('dblclick', this._onDoubleClick, this);
    },
    removeHooks: function () {
      this._map.off('dblclick', this._onDoubleClick, this);
    },
    _onDoubleClick: function (I) {
      var t = this._map,
        E = t.getZoom(),
        _ = t.options.zoomDelta,
        T = I.originalEvent.shiftKey ? E - _ : E + _;
      'center' === t.options.doubleClickZoom
        ? t.setZoom(T)
        : t.setZoomAround(I.containerPoint, T);
    },
  });
  TE.addInitHook('addHandler', 'doubleClickZoom', tT),
    TE.mergeOptions({
      dragging: !0,
      inertia: !0,
      inertiaDeceleration: 3400,
      inertiaMaxSpeed: 1 / 0,
      easeLinearity: 0.2,
      worldCopyJump: !1,
      maxBoundsViscosity: 0,
    });
  var ET = rE.extend({
    addHooks: function () {
      if (!this._draggable) {
        var I = this._map;
        (this._draggable = new hE(I._mapPane, I._container)),
          this._draggable.on(
            {
              dragstart: this._onDragStart,
              drag: this._onDrag,
              dragend: this._onDragEnd,
            },
            this
          ),
          this._draggable.on('predrag', this._onPreDragLimit, this),
          I.options.worldCopyJump &&
            (this._draggable.on('predrag', this._onPreDragWrap, this),
            I.on('zoomend', this._onZoomEnd, this),
            I.whenReady(this._onZoomEnd, this));
      }
      lt(this._map._container, 'leaflet-grab leaflet-touch-drag'),
        this._draggable.enable(),
        (this._positions = []),
        (this._times = []);
    },
    removeHooks: function () {
      ut(this._map._container, 'leaflet-grab'),
        ut(this._map._container, 'leaflet-touch-drag'),
        this._draggable.disable();
    },
    moved: function () {
      return this._draggable && this._draggable._moved;
    },
    moving: function () {
      return this._draggable && this._draggable._moving;
    },
    _onDragStart: function () {
      var I = this._map;
      if (
        (I._stop(),
        this._map.options.maxBounds && this._map.options.maxBoundsViscosity)
      ) {
        var t = F(this._map.options.maxBounds);
        (this._offsetLimit = v(
          this._map.latLngToContainerPoint(t.getNorthWest()).multiplyBy(-1),
          this._map
            .latLngToContainerPoint(t.getSouthEast())
            .multiplyBy(-1)
            .add(this._map.getSize())
        )),
          (this._viscosity = Math.min(
            1,
            Math.max(0, this._map.options.maxBoundsViscosity)
          ));
      } else this._offsetLimit = null;
      I.fire('movestart').fire('dragstart'),
        I.options.inertia && ((this._positions = []), (this._times = []));
    },
    _onDrag: function (I) {
      if (this._map.options.inertia) {
        var t = (this._lastTime = +new Date()),
          E = (this._lastPos =
            this._draggable._absPos || this._draggable._newPos);
        this._positions.push(E), this._times.push(t), this._prunePositions(t);
      }
      this._map.fire('move', I).fire('drag', I);
    },
    _prunePositions: function (I) {
      for (; this._positions.length > 1 && I - this._times[0] > 50; )
        this._positions.shift(), this._times.shift();
    },
    _onZoomEnd: function () {
      var I = this._map.getSize().divideBy(2),
        t = this._map.latLngToLayerPoint([0, 0]);
      (this._initialWorldOffset = t.subtract(I).x),
        (this._worldWidth = this._map.getPixelWorldBounds().getSize().x);
    },
    _viscousLimit: function (I, t) {
      return I - (I - t) * this._viscosity;
    },
    _onPreDragLimit: function () {
      if (this._viscosity && this._offsetLimit) {
        var I = this._draggable._newPos.subtract(this._draggable._startPos),
          t = this._offsetLimit;
        I.x < t.min.x && (I.x = this._viscousLimit(I.x, t.min.x)),
          I.y < t.min.y && (I.y = this._viscousLimit(I.y, t.min.y)),
          I.x > t.max.x && (I.x = this._viscousLimit(I.x, t.max.x)),
          I.y > t.max.y && (I.y = this._viscousLimit(I.y, t.max.y)),
          (this._draggable._newPos = this._draggable._startPos.add(I));
      }
    },
    _onPreDragWrap: function () {
      var I = this._worldWidth,
        t = Math.round(I / 2),
        E = this._initialWorldOffset,
        _ = this._draggable._newPos.x,
        T = ((_ - t + E) % I) + t - E,
        e = ((_ + t + E) % I) - t - E,
        i = Math.abs(T + E) < Math.abs(e + E) ? T : e;
      (this._draggable._absPos = this._draggable._newPos.clone()),
        (this._draggable._newPos.x = i);
    },
    _onDragEnd: function (I) {
      var t = this._map,
        E = t.options,
        _ = !E.inertia || I.noInertia || this._times.length < 2;
      if ((t.fire('dragend', I), _)) t.fire('moveend');
      else {
        this._prunePositions(+new Date());
        var T = this._lastPos.subtract(this._positions[0]),
          e = (this._lastTime - this._times[0]) / 1e3,
          i = E.easeLinearity,
          n = T.multiplyBy(i / e),
          o = n.distanceTo([0, 0]),
          C = Math.min(E.inertiaMaxSpeed, o),
          D = n.multiplyBy(C / o),
          N = C / (E.inertiaDeceleration * i),
          A = D.multiplyBy(-N / 2).round();
        A.x || A.y
          ? ((A = t._limitOffset(A, t.options.maxBounds)),
            d(function () {
              t.panBy(A, {
                duration: N,
                easeLinearity: i,
                noMoveStart: !0,
                animate: !0,
              });
            }))
          : t.fire('moveend');
      }
    },
  });
  TE.addInitHook('addHandler', 'dragging', ET),
    TE.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 });
  var _T = rE.extend({
    keyCodes: {
      left: [37],
      right: [39],
      down: [40],
      up: [38],
      zoomIn: [187, 107, 61, 171],
      zoomOut: [189, 109, 54, 173],
    },
    initialize: function (I) {
      (this._map = I),
        this._setPanDelta(I.options.keyboardPanDelta),
        this._setZoomDelta(I.options.zoomDelta);
    },
    addHooks: function () {
      var I = this._map._container;
      I.tabIndex <= 0 && (I.tabIndex = '0'),
        Ft(
          I,
          {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown,
          },
          this
        ),
        this._map.on({ focus: this._addHooks, blur: this._removeHooks }, this);
    },
    removeHooks: function () {
      this._removeHooks(),
        Xt(
          this._map._container,
          {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown,
          },
          this
        ),
        this._map.off({ focus: this._addHooks, blur: this._removeHooks }, this);
    },
    _onMouseDown: function () {
      if (!this._focused) {
        var I = document.body,
          t = document.documentElement,
          E = I.scrollTop || t.scrollTop,
          _ = I.scrollLeft || t.scrollLeft;
        this._map._container.focus(), window.scrollTo(_, E);
      }
    },
    _onFocus: function () {
      (this._focused = !0), this._map.fire('focus');
    },
    _onBlur: function () {
      (this._focused = !1), this._map.fire('blur');
    },
    _setPanDelta: function (I) {
      var t,
        E,
        _ = (this._panKeys = {}),
        T = this.keyCodes;
      for (t = 0, E = T.left.length; t < E; t++) _[T.left[t]] = [-1 * I, 0];
      for (t = 0, E = T.right.length; t < E; t++) _[T.right[t]] = [I, 0];
      for (t = 0, E = T.down.length; t < E; t++) _[T.down[t]] = [0, I];
      for (t = 0, E = T.up.length; t < E; t++) _[T.up[t]] = [0, -1 * I];
    },
    _setZoomDelta: function (I) {
      var t,
        E,
        _ = (this._zoomKeys = {}),
        T = this.keyCodes;
      for (t = 0, E = T.zoomIn.length; t < E; t++) _[T.zoomIn[t]] = I;
      for (t = 0, E = T.zoomOut.length; t < E; t++) _[T.zoomOut[t]] = -I;
    },
    _addHooks: function () {
      Ft(document, 'keydown', this._onKeyDown, this);
    },
    _removeHooks: function () {
      Xt(document, 'keydown', this._onKeyDown, this);
    },
    _onKeyDown: function (I) {
      if (!(I.altKey || I.ctrlKey || I.metaKey)) {
        var t,
          E = I.keyCode,
          _ = this._map;
        if (E in this._panKeys) {
          if (!_._panAnim || !_._panAnim._inProgress)
            if (
              ((t = this._panKeys[E]),
              I.shiftKey && (t = Z(t).multiplyBy(3)),
              _.options.maxBounds &&
                (t = _._limitOffset(Z(t), _.options.maxBounds)),
              _.options.worldCopyJump)
            ) {
              var T = _.wrapLatLng(
                _.unproject(_.project(_.getCenter()).add(t))
              );
              _.panTo(T);
            } else _.panBy(t);
        } else if (E in this._zoomKeys)
          _.setZoom(_.getZoom() + (I.shiftKey ? 3 : 1) * this._zoomKeys[E]);
        else {
          if (27 !== E || !_._popup || !_._popup.options.closeOnEscapeKey)
            return;
          _.closePopup();
        }
        Qt(I);
      }
    },
  });
  TE.addInitHook('addHandler', 'keyboard', _T),
    TE.mergeOptions({
      scrollWheelZoom: !0,
      wheelDebounceTime: 40,
      wheelPxPerZoomLevel: 60,
    });
  var TT = rE.extend({
    addHooks: function () {
      Ft(this._map._container, 'wheel', this._onWheelScroll, this),
        (this._delta = 0);
    },
    removeHooks: function () {
      Xt(this._map._container, 'wheel', this._onWheelScroll, this);
    },
    _onWheelScroll: function (I) {
      var t = IE(I),
        E = this._map.options.wheelDebounceTime;
      (this._delta += t),
        (this._lastMousePos = this._map.mouseEventToContainerPoint(I)),
        this._startTime || (this._startTime = +new Date());
      var _ = Math.max(E - (+new Date() - this._startTime), 0);
      clearTimeout(this._timer),
        (this._timer = setTimeout(T(this._performZoom, this), _)),
        Qt(I);
    },
    _performZoom: function () {
      var I = this._map,
        t = I.getZoom(),
        E = this._map.options.zoomSnap || 0;
      I._stop();
      var _ = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
        T = (4 * Math.log(2 / (1 + Math.exp(-Math.abs(_))))) / Math.LN2,
        e = E ? Math.ceil(T / E) * E : T,
        i = I._limitZoom(t + (this._delta > 0 ? e : -e)) - t;
      (this._delta = 0),
        (this._startTime = null),
        i &&
          ('center' === I.options.scrollWheelZoom
            ? I.setZoom(t + i)
            : I.setZoomAround(this._lastMousePos, t + i));
    },
  });
  TE.addInitHook('addHandler', 'scrollWheelZoom', TT);
  var eT = 600;
  TE.mergeOptions({
    tapHold: GI.touchNative && GI.safari && GI.mobile,
    tapTolerance: 15,
  });
  var iT = rE.extend({
    addHooks: function () {
      Ft(this._map._container, 'touchstart', this._onDown, this);
    },
    removeHooks: function () {
      Xt(this._map._container, 'touchstart', this._onDown, this);
    },
    _onDown: function (I) {
      if ((clearTimeout(this._holdTimeout), 1 === I.touches.length)) {
        var t = I.touches[0];
        (this._startPos = this._newPos = new V(t.clientX, t.clientY)),
          (this._holdTimeout = setTimeout(
            T(function () {
              this._cancel(),
                this._isTapValid() &&
                  (Ft(document, 'touchend', Jt),
                  Ft(
                    document,
                    'touchend touchcancel',
                    this._cancelClickPrevent
                  ),
                  this._simulateEvent('contextmenu', t));
            }, this),
            eT
          )),
          Ft(document, 'touchend touchcancel contextmenu', this._cancel, this),
          Ft(document, 'touchmove', this._onMove, this);
      }
    },
    _cancelClickPrevent: function I() {
      Xt(document, 'touchend', Jt), Xt(document, 'touchend touchcancel', I);
    },
    _cancel: function () {
      clearTimeout(this._holdTimeout),
        Xt(document, 'touchend touchcancel contextmenu', this._cancel, this),
        Xt(document, 'touchmove', this._onMove, this);
    },
    _onMove: function (I) {
      var t = I.touches[0];
      this._newPos = new V(t.clientX, t.clientY);
    },
    _isTapValid: function () {
      return (
        this._newPos.distanceTo(this._startPos) <=
        this._map.options.tapTolerance
      );
    },
    _simulateEvent: function (I, t) {
      var E = new MouseEvent(I, {
        bubbles: !0,
        cancelable: !0,
        view: window,
        screenX: t.screenX,
        screenY: t.screenY,
        clientX: t.clientX,
        clientY: t.clientY,
      });
      (E._simulated = !0), t.target.dispatchEvent(E);
    },
  });
  TE.addInitHook('addHandler', 'tapHold', iT),
    TE.mergeOptions({ touchZoom: GI.touch, bounceAtZoomLimits: !0 });
  var nT = rE.extend({
    addHooks: function () {
      lt(this._map._container, 'leaflet-touch-zoom'),
        Ft(this._map._container, 'touchstart', this._onTouchStart, this);
    },
    removeHooks: function () {
      ut(this._map._container, 'leaflet-touch-zoom'),
        Xt(this._map._container, 'touchstart', this._onTouchStart, this);
    },
    _onTouchStart: function (I) {
      var t = this._map;
      if (
        I.touches &&
        2 === I.touches.length &&
        !t._animatingZoom &&
        !this._zooming
      ) {
        var E = t.mouseEventToContainerPoint(I.touches[0]),
          _ = t.mouseEventToContainerPoint(I.touches[1]);
        (this._centerPoint = t.getSize()._divideBy(2)),
          (this._startLatLng = t.containerPointToLatLng(this._centerPoint)),
          'center' !== t.options.touchZoom &&
            (this._pinchStartLatLng = t.containerPointToLatLng(
              E.add(_)._divideBy(2)
            )),
          (this._startDist = E.distanceTo(_)),
          (this._startZoom = t.getZoom()),
          (this._moved = !1),
          (this._zooming = !0),
          t._stop(),
          Ft(document, 'touchmove', this._onTouchMove, this),
          Ft(document, 'touchend touchcancel', this._onTouchEnd, this),
          Jt(I);
      }
    },
    _onTouchMove: function (I) {
      if (I.touches && 2 === I.touches.length && this._zooming) {
        var t = this._map,
          E = t.mouseEventToContainerPoint(I.touches[0]),
          _ = t.mouseEventToContainerPoint(I.touches[1]),
          e = E.distanceTo(_) / this._startDist;
        if (
          ((this._zoom = t.getScaleZoom(e, this._startZoom)),
          !t.options.bounceAtZoomLimits &&
            ((this._zoom < t.getMinZoom() && e < 1) ||
              (this._zoom > t.getMaxZoom() && e > 1)) &&
            (this._zoom = t._limitZoom(this._zoom)),
          'center' === t.options.touchZoom)
        ) {
          if (((this._center = this._startLatLng), 1 === e)) return;
        } else {
          var i = E._add(_)._divideBy(2)._subtract(this._centerPoint);
          if (1 === e && 0 === i.x && 0 === i.y) return;
          this._center = t.unproject(
            t.project(this._pinchStartLatLng, this._zoom).subtract(i),
            this._zoom
          );
        }
        this._moved || (t._moveStart(!0, !1), (this._moved = !0)),
          H(this._animRequest);
        var n = T(
          t._move,
          t,
          this._center,
          this._zoom,
          { pinch: !0, round: !1 },
          void 0
        );
        (this._animRequest = d(n, this, !0)), Jt(I);
      }
    },
    _onTouchEnd: function () {
      this._moved && this._zooming
        ? ((this._zooming = !1),
          H(this._animRequest),
          Xt(document, 'touchmove', this._onTouchMove, this),
          Xt(document, 'touchend touchcancel', this._onTouchEnd, this),
          this._map.options.zoomAnimation
            ? this._map._animateZoom(
                this._center,
                this._map._limitZoom(this._zoom),
                !0,
                this._map.options.zoomSnap
              )
            : this._map._resetView(
                this._center,
                this._map._limitZoom(this._zoom)
              ))
        : (this._zooming = !1);
    },
  });
  TE.addInitHook('addHandler', 'touchZoom', nT),
    (TE.BoxZoom = IT),
    (TE.DoubleClickZoom = tT),
    (TE.Drag = ET),
    (TE.Keyboard = _T),
    (TE.ScrollWheelZoom = TT),
    (TE.TapHold = iT),
    (TE.TouchZoom = nT),
    (I.Bounds = Y),
    (I.Browser = GI),
    (I.CRS = b),
    (I.Canvas = K_),
    (I.Circle = n_),
    (I.CircleMarker = e_),
    (I.Class = m),
    (I.Control = iE),
    (I.DivIcon = Y_),
    (I.DivOverlay = L_),
    (I.DomEvent = EE),
    (I.DomUtil = Gt),
    (I.Draggable = hE),
    (I.Evented = B),
    (I.FeatureGroup = QE),
    (I.GeoJSON = O_),
    (I.GridLayer = G_),
    (I.Handler = rE),
    (I.Icon = qE),
    (I.ImageOverlay = d_),
    (I.LatLng = y),
    (I.LatLngBounds = G),
    (I.Layer = kE),
    (I.LayerGroup = zE),
    (I.LineUtil = yE),
    (I.Map = TE),
    (I.Marker = E_),
    (I.Mixin = ME),
    (I.Path = T_),
    (I.Point = V),
    (I.PolyUtil = dE),
    (I.Polygon = N_),
    (I.Polyline = C_),
    (I.Popup = B_),
    (I.PosAnimation = _E),
    (I.Projection = bE),
    (I.Rectangle = q_),
    (I.Renderer = x_),
    (I.SVG = Q_),
    (I.SVGOverlay = f_),
    (I.TileLayer = y_),
    (I.Tooltip = g_),
    (I.Transformation = k),
    (I.Util = p),
    (I.VideoOverlay = p_),
    (I.bind = T),
    (I.bounds = v),
    (I.canvas = W_),
    (I.circle = o_),
    (I.circleMarker = i_),
    (I.control = nE),
    (I.divIcon = v_),
    (I.extend = E),
    (I.featureGroup = jE),
    (I.geoJSON = c_),
    (I.geoJson = U_),
    (I.gridLayer = F_),
    (I.icon = $E),
    (I.imageOverlay = H_),
    (I.latLng = X),
    (I.latLngBounds = F),
    (I.layerGroup = JE),
    (I.map = eE),
    (I.marker = __),
    (I.point = Z),
    (I.polygon = A_),
    (I.polyline = D_),
    (I.popup = V_),
    (I.rectangle = $_),
    (I.setOptions = O),
    (I.stamp = i),
    (I.svg = j_),
    (I.svgOverlay = P_),
    (I.tileLayer = X_),
    (I.tooltip = Z_),
    (I.transformation = z),
    (I.version = t),
    (I.videoOverlay = m_);
  var oT = window.L;
  (I.noConflict = function () {
    return (window.L = oT), this;
  }),
    (window.L = I);
})(I.exports);
var t = I.exports;
console.log('Hello bakers');
const E = t.map('map', { scrollWheelZoom: !1 });
t
  .tileLayer(
    'https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGF0aW1lcyIsImEiOiJjanJmNjg4ZzYweGtvNDNxa2ZpZ2lma3Z4In0.g0lYVIEs9Y5QcUOhXactHA',
    { minZoom: 13 }
  )
  .addTo(E),
  E.setView([41.79955, -87.596739], 15),
  [
    {
      rowid: 7565,
      CASE_NUMBER: 'JH150310',
      DATE: '2024-02-13',
      BLOCK: '1100 E 47TH ST',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-JH150310-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '40-49',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'JERMAINE',
      HOMICIDE_VICTIM_MI: 'white',
      HOMICIDE_VICTIM_LAST_NAME: 'HARRIS',
      MONTH: '2',
      DAY_OF_WEEK: '3',
      HOUR: '0',
      LOCATION_DESCRIPTION: 'YARD',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '02/14/2024 05:54:03 AM',
      LATITUDE: '41.810089669',
      LONGITUDE: '-87.598878547',
      LOCATION: 'POINT (-87.598878547471 41.810089668947)',
    },
    {
      rowid: 9565,
      CASE_NUMBER: 'JG381591',
      DATE: '2023-08-13',
      BLOCK: '5700 S PAYNE DR',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-JG381591-#4',
      ZIP_CODE: '60615',
      WARD: '20',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '233',
      AGE: '0-19',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'TYSHON',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'JOHNSON',
      MONTH: '8',
      DAY_OF_WEEK: '1',
      HOUR: '20',
      LOCATION_DESCRIPTION: 'PARK PROPERTY',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/14/2023 05:41:05 AM',
      LATITUDE: '41.802113092',
      LONGITUDE: '-87.604897447',
      LOCATION: 'POINT (-87.604897447315 41.802113092082)',
    },
    {
      rowid: 937,
      CASE_NUMBER: 'JG318304',
      DATE: '2023-06-27',
      BLOCK: '4300 S COTTAGE GROVE AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-JG318304-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '221',
      AGE: '30-39',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'DEDRICK',
      HOMICIDE_VICTIM_MI: 'D',
      HOMICIDE_VICTIM_LAST_NAME: 'BAKER',
      MONTH: '6',
      DAY_OF_WEEK: '3',
      HOUR: '15',
      LOCATION_DESCRIPTION: 'PARKING LOT',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '06/28/2023 05:40:50 AM',
      LATITUDE: '41.814836904',
      LONGITUDE: '-87.606260941',
      LOCATION: 'POINT (-87.606260941301 41.814836904142)',
    },
    {
      rowid: 11885,
      CASE_NUMBER: 'JG288488',
      DATE: '2023-06-05',
      BLOCK: '800 E 45TH ST',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-JG288488-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '221',
      AGE: '30-39',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'MICHAEL',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'MCCARTER',
      MONTH: '6',
      DAY_OF_WEEK: '2',
      HOUR: '3',
      LOCATION_DESCRIPTION: 'ALLEY',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '06/05/2023 11:14:38 AM',
      LATITUDE: '41.813488346',
      LONGITUDE: '-87.605665346',
      LOCATION: 'POINT (-87.60566534612 41.813488345858)',
    },
    {
      rowid: 18401,
      CASE_NUMBER: 'JG289764',
      DATE: '2023-06-05',
      BLOCK: '5100 S DORCHESTER AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-JG289764-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '234',
      AGE: '30-39',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'KEVIN',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'THUNDERBIRD',
      MONTH: '6',
      DAY_OF_WEEK: '2',
      HOUR: '23',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '06/07/2023 05:32:13 AM',
      LATITUDE: '41.800556904',
      LONGITUDE: '-87.591700941',
      LOCATION: 'POINT (-87.591700941301 41.800556904142)',
    },
    {
      rowid: 20867,
      CASE_NUMBER: 'JG169965',
      DATE: '2023-03-01',
      BLOCK: '4500 S DREXEL BLVD',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-JG169965-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '221',
      AGE: '0-19',
      SEX: 'female',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'DESHAWNAY',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'YOAKUM',
      MONTH: '3',
      DAY_OF_WEEK: '4',
      HOUR: '9',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '09/17/2023 05:07:57 AM',
      LATITUDE: '41.8117505',
      LONGITUDE: '-87.60458',
      LOCATION: 'POINT (-87.60458 41.8117505)',
    },
    {
      rowid: 9887,
      CASE_NUMBER: 'JF462199',
      DATE: '2022-11-04',
      BLOCK: '4600 S LAKE PARK AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-JF462199-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '30-39',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'JUSTIN',
      HOMICIDE_VICTIM_MI: 'E',
      HOMICIDE_VICTIM_LAST_NAME: 'JONES',
      MONTH: '11',
      DAY_OF_WEEK: '6',
      HOUR: '15',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '11/05/2022 06:12:36 AM',
      LATITUDE: '41.811340101',
      LONGITUDE: '-87.593331089',
      LOCATION: 'POINT (-87.593331088699 41.811340100858)',
    },
    {
      rowid: 7626,
      CASE_NUMBER: 'JF413198',
      DATE: '2022-09-27',
      BLOCK: '5500 S SHORE DR',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-JF413198-#1',
      ZIP_CODE: '60637',
      WARD: '5',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '235',
      AGE: '40-49',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'EARNEST',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'HARRIS',
      MONTH: '9',
      DAY_OF_WEEK: '3',
      HOUR: '21',
      LOCATION_DESCRIPTION: 'AUTO',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '09/28/2022 07:01:35 AM',
      LATITUDE: '41.795288346',
      LONGITUDE: '-87.581025346',
      LOCATION: 'POINT (-87.58102534612 41.795288345858)',
    },
    {
      rowid: 14308,
      CASE_NUMBER: 'JF389319',
      DATE: '2022-09-09',
      BLOCK: '1600 E 50TH ST',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-JF389319-#1',
      ZIP_CODE: '60615',
      WARD: '5',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '0-19',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'KANYE',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'PERKINS',
      MONTH: '9',
      DAY_OF_WEEK: '6',
      HOUR: '12',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '09/10/2022 05:58:19 AM',
      LATITUDE: '41.804753096',
      LONGITUDE: '-87.585989059',
      LOCATION: 'POINT (-87.585989058699 41.804753095858)',
    },
    {
      rowid: 5336,
      CASE_NUMBER: 'JF349782',
      DATE: '2022-08-09',
      BLOCK: '4700 S INGLESIDE AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-JF349782-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '20-29',
      SEX: 'female',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'CHICANA',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'ESSIE',
      MONTH: '8',
      DAY_OF_WEEK: '3',
      HOUR: '2',
      LOCATION_DESCRIPTION: 'HOUSE',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/30/2023 05:13:27 AM',
      LATITUDE: '41.808838346',
      LONGITUDE: '-87.602204654',
      LOCATION: 'POINT (-87.60220465388 41.808838345858)',
    },
    {
      rowid: 11056,
      CASE_NUMBER: 'JF300620',
      DATE: '2022-06-30',
      BLOCK: '4600 S ELLIS AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-JF300620-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'LAWRENCE',
      HOMICIDE_VICTIM_MI: 'J',
      HOMICIDE_VICTIM_LAST_NAME: 'LONGSTREET',
      MONTH: '6',
      DAY_OF_WEEK: '5',
      HOUR: '22',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '07/08/2022 09:02:28 AM',
      LATITUDE: '41.811199669',
      LONGITUDE: '-87.601728547',
      LOCATION: 'POINT (-87.601728547471 41.811199668947)',
    },
    {
      rowid: 2839,
      CASE_NUMBER: 'JF225642',
      DATE: '2022-04-30',
      BLOCK: '1300 E 47TH ST',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-JF225642-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'KIER',
      HOMICIDE_VICTIM_MI: 'T',
      HOMICIDE_VICTIM_LAST_NAME: 'CARMICHAEL-SMITH',
      MONTH: '4',
      DAY_OF_WEEK: '7',
      HOUR: '16',
      LOCATION_DESCRIPTION: 'PARKING LOT',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '10/04/2023 05:22:23 AM',
      LATITUDE: '41.809968346',
      LONGITUDE: '-87.593724654',
      LOCATION: 'POINT (-87.59372465388 41.809968345858)',
    },
    {
      rowid: 20176,
      CASE_NUMBER: 'JF158773',
      DATE: '2022-02-28',
      BLOCK: '4600 S COTTAGE GROVE AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-JF158773-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '221',
      AGE: '40-49',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'FLAMOND',
      HOMICIDE_VICTIM_MI: 'E',
      HOMICIDE_VICTIM_LAST_NAME: 'WILLIAMS',
      MONTH: '2',
      DAY_OF_WEEK: '2',
      HOUR: '14',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '03/01/2022 05:51:36 AM',
      LATITUDE: '41.809581654',
      LONGITUDE: '-87.605984654',
      LOCATION: 'POINT (-87.60598465388 41.809581654142)',
    },
    {
      rowid: 4211,
      CASE_NUMBER: 'JF155296',
      DATE: '2022-02-25',
      BLOCK: '4900 S GREENWOOD AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-JF155296-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '40-49',
      SEX: 'male',
      RACE: 'white',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'DIEGO',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'DAMIS',
      MONTH: '2',
      DAY_OF_WEEK: '6',
      HOUR: '4',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '03/06/2022 07:02:58 AM',
      LATITUDE: '41.804909008',
      LONGITUDE: '-87.599393021',
      LOCATION: 'POINT (-87.599393020699 41.804909008142)',
    },
    {
      rowid: 20796,
      CASE_NUMBER: 'JE438955',
      DATE: '2021-11-09',
      BLOCK: '5300 S COTTAGE GROVE AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-JE438955-#1',
      ZIP_CODE: '60615',
      WARD: '20',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '233',
      AGE: '30-39',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'TRACY',
      HOMICIDE_VICTIM_MI: 'T',
      HOMICIDE_VICTIM_LAST_NAME: 'WRIGHT',
      MONTH: '11',
      DAY_OF_WEEK: '3',
      HOUR: '6',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '11/26/2021 08:49:31 AM',
      LATITUDE: '41.7972405',
      LONGITUDE: '-87.60616',
      LOCATION: 'POINT (-87.60616 41.7972405)',
    },
    {
      rowid: 21004,
      CASE_NUMBER: 'JE439442',
      DATE: '2021-11-09',
      BLOCK: '900 E 54TH PL',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-JE439442-#1',
      ZIP_CODE: '60615',
      WARD: '5',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '233',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'API',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'SHAOXIONG',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'ZHENG',
      MONTH: '11',
      DAY_OF_WEEK: '3',
      HOUR: '14',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '11/13/2021 06:00:06 AM',
      LATITUDE: '41.796778346',
      LONGITUDE: '-87.601184654',
      LOCATION: 'POINT (-87.60118465388 41.796778345858)',
    },
    {
      rowid: 12243,
      CASE_NUMBER: 'JE382489',
      DATE: '2021-09-21',
      BLOCK: '5100 S HARPER AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-JE382489-#2',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '234',
      AGE: '0-19',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'KENTRELL',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'MCNEAL',
      MONTH: '9',
      DAY_OF_WEEK: '3',
      HOUR: '19',
      LOCATION_DESCRIPTION: 'AUTO',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '10/12/2022 05:46:42 AM',
      LATITUDE: '41.801913096',
      LONGITUDE: '-87.589259059',
      LOCATION: 'POINT (-87.589259058699 41.801913095858)',
    },
    {
      rowid: 1537,
      CASE_NUMBER: 'JE337556',
      DATE: '2021-08-14',
      BLOCK: '800 E 54TH ST',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-JE337556-#1',
      ZIP_CODE: '60615',
      WARD: '20',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '233',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'JAMOL',
      HOMICIDE_VICTIM_MI: 'R',
      HOMICIDE_VICTIM_LAST_NAME: 'BINION',
      MONTH: '8',
      DAY_OF_WEEK: '7',
      HOUR: '20',
      LOCATION_DESCRIPTION: 'ALLEY',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/15/2021 06:02:53 AM',
      LATITUDE: '41.796426904',
      LONGITUDE: '-87.605789059',
      LOCATION: 'POINT (-87.605789058699 41.796426904142)',
    },
    {
      rowid: 3793,
      CASE_NUMBER: 'JE301150',
      DATE: '2021-07-15',
      BLOCK: '1200 E 53RD ST',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-JE301150-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '234',
      AGE: '70-79',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'KEITH',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'COOPER',
      MONTH: '7',
      DAY_OF_WEEK: '5',
      HOUR: '0',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '11/10/2021 07:51:08 AM',
      LATITUDE: '41.800159669',
      LONGITUDE: '-87.595048547',
      LOCATION: 'POINT (-87.595048547471 41.800159668947)',
    },
    {
      rowid: 5442,
      CASE_NUMBER: 'JE108124',
      DATE: '2021-01-09',
      BLOCK: '5000 S EAST END AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-JE108124-#1',
      ZIP_CODE: '60615',
      WARD: '5',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '30-39',
      SEX: 'male',
      RACE: 'API',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'YIRAN',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'FAN',
      MONTH: '1',
      DAY_OF_WEEK: '7',
      HOUR: '14',
      LOCATION_DESCRIPTION: 'GARAGE',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '04/22/2021 11:23:41 AM',
      LATITUDE: '41.802786904',
      LONGITUDE: '-87.585020941',
      LOCATION: 'POINT (-87.585020941301 41.802786904142)',
    },
    {
      rowid: 13415,
      CASE_NUMBER: 'JE107997',
      DATE: '2021-01-09',
      BLOCK: '4900 S EAST END AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-JE107997-#2',
      ZIP_CODE: '60615',
      WARD: '5',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '40-49',
      SEX: 'female',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'AISHA',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'NEVELL',
      MONTH: '1',
      DAY_OF_WEEK: '7',
      HOUR: '14',
      LOCATION_DESCRIPTION: 'VESTIBULE',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '11/10/2021 10:01:04 AM',
      LATITUDE: '41.804701654',
      LONGITUDE: '-87.586035346',
      LOCATION: 'POINT (-87.58603534612 41.804701654142)',
    },
    {
      rowid: 4798,
      CASE_NUMBER: 'JC113053',
      DATE: '2019-01-11',
      BLOCK: '4600 S DREXEL BLVD',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-JC113053-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'LARELL',
      HOMICIDE_VICTIM_MI: 'K',
      HOMICIDE_VICTIM_LAST_NAME: 'DOBBS',
      MONTH: '1',
      DAY_OF_WEEK: '6',
      HOUR: '15',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '11/28/2019 05:36:18 AM',
      LATITUDE: '41.810761654',
      LONGITUDE: '-87.603344654',
      LOCATION: 'POINT (-87.60334465388 41.810761654142)',
    },
    {
      rowid: 7618,
      CASE_NUMBER: 'JB404886',
      DATE: '2018-08-23',
      BLOCK: '1200 E MIDWAY PLAISANCE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-JB404886-#1',
      ZIP_CODE: '60637',
      WARD: '5',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '235',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'ARMANI',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'HARRIS',
      MONTH: '8',
      DAY_OF_WEEK: '5',
      HOUR: '0',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/23/2018 06:26:42 AM',
      LATITUDE: '41.786856904',
      LONGITUDE: '-87.596549059',
      LOCATION: 'POINT (-87.596549058699 41.786856904142)',
    },
    {
      rowid: 10856,
      CASE_NUMBER: 'JB308785',
      DATE: '2018-06-15',
      BLOCK: '1600 E 53RD ST',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-JB308785-#1',
      ZIP_CODE: '60615',
      WARD: '5',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '234',
      AGE: '40-49',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'MAURICE',
      HOMICIDE_VICTIM_MI: 'L',
      HOMICIDE_VICTIM_LAST_NAME: 'LEWIS',
      MONTH: '6',
      DAY_OF_WEEK: '6',
      HOUR: '22',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '12/28/2019 05:24:51 AM',
      LATITUDE: '41.7988705',
      LONGITUDE: '-87.58537',
      LOCATION: 'POINT (-87.58537 41.7988705)',
    },
    {
      rowid: 14627,
      CASE_NUMBER: 'JB280624',
      DATE: '2018-05-27',
      BLOCK: '5000 S DREXEL BLVD',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-JB280624-#1',
      ZIP_CODE: '60615',
      WARD: '20',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'Acclivus Grand Boulevard',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '223',
      AGE: '60-69',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'DAMON',
      HOMICIDE_VICTIM_MI: 'E',
      HOMICIDE_VICTIM_LAST_NAME: 'PORTIS',
      MONTH: '5',
      DAY_OF_WEEK: '1',
      HOUR: '8',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '05/28/2018 05:20:58 AM',
      LATITUDE: '41.803246904',
      LONGITUDE: '-87.604130941',
      LOCATION: 'POINT (-87.604130941301 41.803246904142)',
    },
    {
      rowid: 11210,
      CASE_NUMBER: 'JB246307',
      DATE: '2018-05-02',
      BLOCK: '5300 S SHORE DR',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-JB246307-#1',
      ZIP_CODE: '60615',
      WARD: '5',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '234',
      AGE: '60-69',
      SEX: 'male',
      RACE: 'white',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'DANIEL',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'LUCHINS',
      MONTH: '5',
      DAY_OF_WEEK: '4',
      HOUR: '2',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '05/16/2018 08:03:26 AM',
      LATITUDE: '41.799311654',
      LONGITUDE: '-87.582895346',
      LOCATION: 'POINT (-87.58289534612 41.799311654142)',
    },
    {
      rowid: 12271,
      CASE_NUMBER: 'JB188628',
      DATE: '2018-03-16',
      BLOCK: '5400 S CORNELL AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-JB188628-#1',
      ZIP_CODE: '60615',
      WARD: '5',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '234',
      AGE: '30-39',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'JERAUN',
      HOMICIDE_VICTIM_MI: 'A',
      HOMICIDE_VICTIM_LAST_NAME: 'MCRAE',
      MONTH: '3',
      DAY_OF_WEEK: '6',
      HOUR: '21',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '12/13/2018 05:59:26 PM',
      LATITUDE: '41.796518346',
      LONGITUDE: '-87.585725346',
      LOCATION: 'POINT (-87.58572534612 41.796518345858)',
    },
    {
      rowid: 17219,
      CASE_NUMBER: 'JA305578',
      DATE: '2017-06-13',
      BLOCK: '5000 S DREXEL BLVD',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-JA305578-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'DANDRE',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'SMITH',
      MONTH: '6',
      DAY_OF_WEEK: '3',
      HOUR: '18',
      LOCATION_DESCRIPTION: 'GANGWAY',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '11/03/2020 05:42:40 AM',
      LATITUDE: '41.803018346',
      LONGITUDE: '-87.604045346',
      LOCATION: 'POINT (-87.60404534612 41.803018345858)',
    },
    {
      rowid: 4378,
      CASE_NUMBER: 'JA251972',
      DATE: '2017-05-05',
      BLOCK: '4500 S DREXEL BLVD',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-JA251972-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '0-19',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'HARRY',
      HOMICIDE_VICTIM_MI: 'J',
      HOMICIDE_VICTIM_LAST_NAME: 'DAVIS',
      MONTH: '5',
      DAY_OF_WEEK: '6',
      HOUR: '16',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '02/26/2018 05:55:14 AM',
      LATITUDE: '41.812558346',
      LONGITUDE: '-87.603374654',
      LOCATION: 'POINT (-87.60337465388 41.812558345858)',
    },
    {
      rowid: 16657,
      CASE_NUMBER: 'JA162768',
      DATE: '2017-02-22',
      BLOCK: '4500 S COTTAGE GROVE AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-JA162768-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '221',
      AGE: '50-59',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'WILLIE',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'SHAW JR',
      MONTH: '2',
      DAY_OF_WEEK: '4',
      HOUR: '0',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/29/2017 06:59:13 AM',
      LATITUDE: '41.812718346',
      LONGITUDE: '-87.606925346',
      LOCATION: 'POINT (-87.60692534612 41.812718345858)',
    },
    {
      rowid: 7105,
      CASE_NUMBER: 'JA119838',
      DATE: '2017-01-17',
      BLOCK: '5100 S BLACKSTONE AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-JA119838-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '234',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'ROBIN',
      HOMICIDE_VICTIM_MI: 'A',
      HOMICIDE_VICTIM_LAST_NAME: 'GUESS',
      MONTH: '1',
      DAY_OF_WEEK: '3',
      HOUR: '21',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/29/2017 06:54:38 AM',
      LATITUDE: '41.801488346',
      LONGITUDE: '-87.590775346',
      LOCATION: 'POINT (-87.59077534612 41.801488345858)',
    },
    {
      rowid: 17805,
      CASE_NUMBER: 'JA105744',
      DATE: '2017-01-05',
      BLOCK: '800 E 46TH ST',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-JA105744-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '221',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'DANTE',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'SWANSON',
      MONTH: '1',
      DAY_OF_WEEK: '5',
      HOUR: '23',
      LOCATION_DESCRIPTION: 'AUTO',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '06/04/2021 06:16:16 AM',
      LATITUDE: '41.810766904',
      LONGITUDE: '-87.604710941',
      LOCATION: 'POINT (-87.604710941301 41.810766904142)',
    },
    {
      rowid: 5047,
      CASE_NUMBER: 'HZ557762',
      DATE: '2016-12-19',
      BLOCK: '4300 S ELLIS AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-HZ557762-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '50-59',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'ANTHONY',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'DURHAM',
      MONTH: '12',
      DAY_OF_WEEK: '2',
      HOUR: '19',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '12/20/2017 10:55:24 AM',
      LATITUDE: '41.815768096',
      LONGITUDE: '-87.601536314',
      LOCATION: 'POINT (-87.60153631388 41.815768095858)',
    },
    {
      rowid: 13557,
      CASE_NUMBER: 'HZ537248',
      DATE: '2016-12-02',
      BLOCK: '5400 S CORNELL AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-HZ537248-#1',
      ZIP_CODE: '60615',
      WARD: '5',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '234',
      AGE: '30-39',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'CURTIS',
      HOMICIDE_VICTIM_MI: 'L',
      HOMICIDE_VICTIM_LAST_NAME: 'NOWELLS',
      MONTH: '12',
      DAY_OF_WEEK: '6',
      HOUR: '14',
      LOCATION_DESCRIPTION: 'PARK PROPERTY',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '12/03/2016 05:01:52 AM',
      LATITUDE: '41.796178346',
      LONGITUDE: '-87.585715346',
      LOCATION: 'POINT (-87.58571534612 41.796178345858)',
    },
    {
      rowid: 7815,
      CASE_NUMBER: 'HZ344119',
      DATE: '2016-07-11',
      BLOCK: '5000 S EAST END AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-HZ344119-#1',
      ZIP_CODE: '60615',
      WARD: '5',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '30-39',
      SEX: 'female',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'SHAMEKA',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'HEARD',
      MONTH: '7',
      DAY_OF_WEEK: '2',
      HOUR: '6',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '07/13/2016 05:45:40 AM',
      LATITUDE: '41.803333096',
      LONGITUDE: '-87.585829059',
      LOCATION: 'POINT (-87.585829058699 41.803333095858)',
    },
    {
      rowid: 16619,
      CASE_NUMBER: 'HZ312763',
      DATE: '2016-06-18',
      BLOCK: '1400 E 54TH ST',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-HZ312763-#1',
      ZIP_CODE: '60615',
      WARD: '5',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '234',
      AGE: '60-69',
      SEX: 'female',
      RACE: 'white',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'MARGARET',
      HOMICIDE_VICTIM_MI: 'L',
      HOMICIDE_VICTIM_LAST_NAME: 'SHANAHAN',
      MONTH: '6',
      DAY_OF_WEEK: '7',
      HOUR: '9',
      LOCATION_DESCRIPTION: 'HOUSE',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '05/15/2017 06:45:31 AM',
      LATITUDE: '41.797761654',
      LONGITUDE: '-87.590634654',
      LOCATION: 'POINT (-87.59063465388 41.797761654142)',
    },
    {
      rowid: 10407,
      CASE_NUMBER: 'HZ256874',
      DATE: '2016-05-09',
      BLOCK: '4500 S DREXEL BLVD',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-HZ256874-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '221',
      AGE: '50-59',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'KIMBLE',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'KNOX',
      MONTH: '5',
      DAY_OF_WEEK: '2',
      HOUR: '0',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '05/11/2016 05:39:50 AM',
      LATITUDE: '41.811866904',
      LONGITUDE: '-87.604310941',
      LOCATION: 'POINT (-87.604310941301 41.811866904142)',
    },
    {
      rowid: 14542,
      CASE_NUMBER: 'HY430167',
      DATE: '2015-09-19',
      BLOCK: '1100 E 44TH ST',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-HY430167-#2',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '0-19',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'TYJUAN',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'POINDEXTER',
      MONTH: '9',
      DAY_OF_WEEK: '7',
      HOUR: '19',
      LOCATION_DESCRIPTION: 'YARD',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '09/20/2015 05:47:58 AM',
      LATITUDE: '41.814551654',
      LONGITUDE: '-87.599405346',
      LOCATION: 'POINT (-87.59940534612 41.814551654142)',
    },
    {
      rowid: 9105,
      CASE_NUMBER: 'HY405177',
      DATE: '2015-08-31',
      BLOCK: '4900 S DREXEL BLVD',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-HY405177-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '30-39',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'TYRIS',
      HOMICIDE_VICTIM_MI: 'R',
      HOMICIDE_VICTIM_LAST_NAME: 'JACKSON',
      MONTH: '8',
      DAY_OF_WEEK: '2',
      HOUR: '20',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '09/01/2015 05:44:05 AM',
      LATITUDE: '41.805201654',
      LONGITUDE: '-87.604095346',
      LOCATION: 'POINT (-87.60409534612 41.805201654142)',
    },
    {
      rowid: 16343,
      CASE_NUMBER: 'HY397193',
      DATE: '2015-08-25',
      BLOCK: '5000 S DORCHESTER AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-HY397193-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'REGINALD',
      HOMICIDE_VICTIM_MI: 'P',
      HOMICIDE_VICTIM_LAST_NAME: 'SANSON',
      MONTH: '8',
      DAY_OF_WEEK: '3',
      HOUR: '18',
      LOCATION_DESCRIPTION: 'AUTO',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/26/2015 06:56:53 AM',
      LATITUDE: '41.803931654',
      LONGITUDE: '-87.591294654',
      LOCATION: 'POINT (-87.59129465388 41.803931654142)',
    },
    {
      rowid: 10299,
      CASE_NUMBER: 'HY365558',
      DATE: '2015-08-02',
      BLOCK: '4300 S LAKE SHORE DR SB',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-HY365558-#2',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'VAUGHN',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'KING',
      MONTH: '8',
      DAY_OF_WEEK: '1',
      HOUR: '3',
      LOCATION_DESCRIPTION: 'PARK PROPERTY',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/03/2015 05:52:52 AM',
      LATITUDE: '41.816908346',
      LONGITUDE: '-87.595695346',
      LOCATION: 'POINT (-87.59569534612 41.816908345858)',
    },
    {
      rowid: 4206,
      CASE_NUMBER: 'HY273621',
      DATE: '2015-05-24',
      BLOCK: '4400 S COTTAGE GROVE AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-HY273621-#2',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '221',
      AGE: '0-19',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'RAHEEM',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'DAMERON',
      MONTH: '5',
      DAY_OF_WEEK: '1',
      HOUR: '20',
      LOCATION_DESCRIPTION: 'ALLEY',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '05/17/2016 08:46:35 AM',
      LATITUDE: '41.813903096',
      LONGITUDE: '-87.606230941',
      LOCATION: 'POINT (-87.606230941301 41.813903095858)',
    },
    {
      rowid: 3212,
      CASE_NUMBER: 'HX460710',
      DATE: '2014-10-09',
      BLOCK: '5100 S HYDE PARK BLVD',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-HX460710-#1',
      ZIP_CODE: '60615',
      WARD: '5',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '234',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'DAMANI',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'CHENIER',
      MONTH: '10',
      DAY_OF_WEEK: '5',
      HOUR: '3',
      LOCATION_DESCRIPTION: 'HALLWAY',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '11/02/2014 05:20:13 AM',
      LATITUDE: '41.802309669',
      LONGITUDE: '-87.584878547',
      LOCATION: 'POINT (-87.584878547471 41.802309668947)',
    },
    {
      rowid: 3155,
      CASE_NUMBER: 'HX314624',
      DATE: '2014-06-22',
      BLOCK: '5600 S EVERETT DR',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-HX314624-#1',
      ZIP_CODE: '60637',
      WARD: '5',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'Claretian Associates South Shore',
      AREA: '1',
      DISTRICT: '3',
      BEAT: '331',
      AGE: '30-39',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'OVADIYAH',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'CHANDLER',
      MONTH: '6',
      DAY_OF_WEEK: '1',
      HOUR: '19',
      LOCATION_DESCRIPTION: 'PARK PROPERTY',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '01/24/2017 05:13:12 AM',
      LATITUDE: '41.792586904',
      LONGITUDE: '-87.581650941',
      LOCATION: 'POINT (-87.581650941301 41.792586904142)',
    },
    {
      rowid: 14338,
      CASE_NUMBER: 'HX293341',
      DATE: '2014-06-07',
      BLOCK: '4600 S ELLIS AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-HX293341-#2',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '20-29',
      SEX: 'female',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'MICHELLE',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'PERSON',
      MONTH: '6',
      DAY_OF_WEEK: '7',
      HOUR: '3',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '06/18/2021 05:56:36 AM',
      LATITUDE: '41.811513096',
      LONGITUDE: '-87.601610941',
      LOCATION: 'POINT (-87.601610941301 41.811513095858)',
    },
    {
      rowid: 16066,
      CASE_NUMBER: 'HX266600',
      DATE: '2014-05-18',
      BLOCK: '4600 S COTTAGE GROVE AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-HX266600-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '221',
      AGE: '0-19',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'AARON',
      HOMICIDE_VICTIM_MI: 'E',
      HOMICIDE_VICTIM_LAST_NAME: 'RUSHING',
      MONTH: '5',
      DAY_OF_WEEK: '1',
      HOUR: '15',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '10/23/2015 05:17:35 AM',
      LATITUDE: '41.810299669',
      LONGITUDE: '-87.606278547',
      LOCATION: 'POINT (-87.606278547471 41.810299668947)',
    },
    {
      rowid: 6186,
      CASE_NUMBER: 'HX168924',
      DATE: '2014-03-01',
      BLOCK: '5100 S HYDE PARK BLVD',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-HX168924-#1',
      ZIP_CODE: '60615',
      WARD: '5',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '234',
      AGE: '0-19',
      SEX: 'female',
      RACE: 'Hispanic',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'RACHEL',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'GARCIA',
      MONTH: '3',
      DAY_OF_WEEK: '7',
      HOUR: '14',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '03/16/2014 06:22:53 AM',
      LATITUDE: '41.800936904',
      LONGITUDE: '-87.584620941',
      LOCATION: 'POINT (-87.584620941301 41.800936904142)',
    },
    {
      rowid: 4771,
      CASE_NUMBER: 'HW289910',
      DATE: '2013-05-25',
      BLOCK: '1400 E 52ND ST',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-HW289910-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '234',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'GREGORY',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'DIXON',
      MONTH: '5',
      DAY_OF_WEEK: '7',
      HOUR: '1',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '10/31/2014 05:12:44 AM',
      LATITUDE: '41.801689669',
      LONGITUDE: '-87.589968547',
      LOCATION: 'POINT (-87.589968547471 41.801689668947)',
    },
    {
      rowid: 739,
      CASE_NUMBER: 'HW253509',
      DATE: '2013-04-30',
      BLOCK: '5200 S HARPER AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-HW253509-#2',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '234',
      AGE: '30-39',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'HENRY',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'ATKINS',
      MONTH: '4',
      DAY_OF_WEEK: '3',
      HOUR: '0',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/07/2013 08:35:02 AM',
      LATITUDE: '41.801413096',
      LONGITUDE: '-87.589489059',
      LOCATION: 'POINT (-87.589489058699 41.801413095858)',
    },
    {
      rowid: 14208,
      CASE_NUMBER: 'HW136256',
      DATE: '2013-01-29',
      BLOCK: '4400 S OAKENWALD AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-HW136256-#2',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '0-19',
      SEX: 'female',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'HADIYA',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'PENDLETON',
      MONTH: '1',
      DAY_OF_WEEK: '3',
      HOUR: '14',
      LOCATION_DESCRIPTION: 'PARK PROPERTY',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '05/08/2023 09:27:34 AM',
      LATITUDE: '41.813606904',
      LONGITUDE: '-87.595819059',
      LOCATION: 'POINT (-87.595819058699 41.813606904142)',
    },
    {
      rowid: 20242,
      CASE_NUMBER: 'HV445785',
      DATE: '2012-08-25',
      BLOCK: '4900 S DREXEL BLVD',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-HV445785-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'Acclivus Grand Boulevard',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '223',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'STEPHIN',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'WILLIAMS',
      MONTH: '8',
      DAY_OF_WEEK: '7',
      HOUR: '2',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '10/01/2012 10:21:16 AM',
      LATITUDE: '41.8039205',
      LONGITUDE: '-87.60441',
      LOCATION: 'POINT (-87.60441 41.8039205)',
    },
    {
      rowid: 18673,
      CASE_NUMBER: 'HV362300',
      DATE: '2012-07-01',
      BLOCK: '800 E 45TH ST',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-HV362300-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '221',
      AGE: '0-19',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'LEONARD',
      HOMICIDE_VICTIM_MI: 'J',
      HOMICIDE_VICTIM_LAST_NAME: 'TRUSS',
      MONTH: '7',
      DAY_OF_WEEK: '1',
      HOUR: '22',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '07/17/2012 10:31:27 AM',
      LATITUDE: '41.813649669',
      LONGITUDE: '-87.605648547',
      LOCATION: 'POINT (-87.605648547471 41.813649668947)',
    },
    {
      rowid: 7611,
      CASE_NUMBER: 'HV277350',
      DATE: '2012-05-08',
      BLOCK: '4600 S LAKE PARK AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-HV277350-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '20-29',
      SEX: 'female',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'RACSHELL',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'HARRIS',
      MONTH: '5',
      DAY_OF_WEEK: '3',
      HOUR: '16',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/13/2012 11:00:58 AM',
      LATITUDE: '41.811339669',
      LONGITUDE: '-87.593378547',
      LOCATION: 'POINT (-87.593378547471 41.811339668947)',
    },
    {
      rowid: 11967,
      CASE_NUMBER: 'HT400137',
      DATE: '2011-07-16',
      BLOCK: '1100 E 47TH ST',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-HT400137-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'TONY',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'MCCOY',
      MONTH: '7',
      DAY_OF_WEEK: '7',
      HOUR: '13',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '06/19/2020 04:52:35 AM',
      LATITUDE: '41.809341654',
      LONGITUDE: '-87.597845346',
      LOCATION: 'POINT (-87.59784534612 41.809341654142)',
    },
    {
      rowid: 15787,
      CASE_NUMBER: 'HT322177',
      DATE: '2011-05-30',
      BLOCK: '5700 S LAKE SHORE DR',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-HT322177-#2',
      ZIP_CODE: '60637',
      WARD: '5',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'Claretian Associates South Shore',
      AREA: '1',
      DISTRICT: '3',
      BEAT: '331',
      AGE: '20-29',
      SEX: 'female',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'AEYANUNA',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'ROGERS',
      MONTH: '5',
      DAY_OF_WEEK: '2',
      HOUR: '22',
      LOCATION_DESCRIPTION: 'PARK PROPERTY',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '11/17/2011 12:01:47 PM',
      LATITUDE: '41.791231654',
      LONGITUDE: '-87.580265346',
      LOCATION: 'POINT (-87.58026534612 41.791231654142)',
    },
    {
      rowid: 15539,
      CASE_NUMBER: 'HT272658',
      DATE: '2011-04-30',
      BLOCK: '5000 S DREXEL BLVD',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-HT272658-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'ISMAIL',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'ROBINSON',
      MONTH: '4',
      DAY_OF_WEEK: '7',
      HOUR: '2',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '07/11/2012 12:04:43 PM',
      LATITUDE: '41.803228346',
      LONGITUDE: '-87.604045346',
      LOCATION: 'POINT (-87.60404534612 41.803228345858)',
    },
    {
      rowid: 18710,
      CASE_NUMBER: 'HT240518',
      DATE: '2011-04-08',
      BLOCK: '800 E 46TH ST',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-HT240518-#3',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '221',
      AGE: '0-19',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'QUINTIN',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'TUNER',
      MONTH: '4',
      DAY_OF_WEEK: '6',
      HOUR: '16',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '11/17/2011 12:01:47 PM',
      LATITUDE: '41.811438346',
      LONGITUDE: '-87.606675346',
      LOCATION: 'POINT (-87.60667534612 41.811438345858)',
    },
    {
      rowid: 9663,
      CASE_NUMBER: 'HS551223',
      DATE: '2010-10-07',
      BLOCK: '5700 S LAKE SHORE DR',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-HS551223-#1',
      ZIP_CODE: '60637',
      WARD: '5',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'Claretian Associates South Shore',
      AREA: '1',
      DISTRICT: '3',
      BEAT: '331',
      AGE: '0-19',
      SEX: 'female',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'DONTRELL',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'JOHNSON',
      MONTH: '10',
      DAY_OF_WEEK: '5',
      HOUR: '13',
      LOCATION_DESCRIPTION: 'LAKE',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '02/14/2017 09:30:58 AM',
      LATITUDE: '41.791151654',
      LONGITUDE: '-87.579674654',
      LOCATION: 'POINT (-87.57967465388 41.791151654142)',
    },
    {
      rowid: 5203,
      CASE_NUMBER: 'HR704527',
      DATE: '2009-12-24',
      BLOCK: '800 E 47TH ST',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-HR704527-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '221',
      AGE: '70-79',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'RALPH',
      HOMICIDE_VICTIM_MI: 'C',
      HOMICIDE_VICTIM_LAST_NAME: 'ELLIOTT',
      MONTH: '12',
      DAY_OF_WEEK: '5',
      HOUR: '15',
      LOCATION_DESCRIPTION: 'PARKING LOT',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '11/17/2011 12:01:47 PM',
      LATITUDE: '41.809461654',
      LONGITUDE: '-87.606125346',
      LOCATION: 'POINT (-87.60612534612 41.809461654142)',
    },
    {
      rowid: 16503,
      CASE_NUMBER: 'HR397555',
      DATE: '2009-06-27',
      BLOCK: '1000 W 60TH ST',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-HR397555-#1',
      ZIP_CODE: '60637',
      WARD: '5',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '235',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'RODERICK',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'SCOTT',
      MONTH: '6',
      DAY_OF_WEEK: '7',
      HOUR: '2',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '11/17/2011 12:01:47 PM',
      LATITUDE: '41.7854405',
      LONGITUDE: '-87.59984',
      LOCATION: 'POINT (-87.59984 41.7854405)',
    },
    {
      rowid: 15469,
      CASE_NUMBER: 'HR378743',
      DATE: '2009-06-16',
      BLOCK: '4700 S ELLIS AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-HR378743-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '30-39',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'KEITH',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'ROBERTS',
      MONTH: '6',
      DAY_OF_WEEK: '3',
      HOUR: '18',
      LOCATION_DESCRIPTION: 'ALLEY',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '11/17/2011 12:01:47 PM',
      LATITUDE: '41.808461654',
      LONGITUDE: '-87.601394654',
      LOCATION: 'POINT (-87.60139465388 41.808461654142)',
    },
    {
      rowid: 12523,
      CASE_NUMBER: 'HR372962',
      DATE: '2009-06-13',
      BLOCK: '5400 S ELLIS AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-HR372962-#1',
      ZIP_CODE: '60615',
      WARD: '5',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '233',
      AGE: '50-59',
      SEX: 'female',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'CHARLENE',
      HOMICIDE_VICTIM_MI: 'E',
      HOMICIDE_VICTIM_LAST_NAME: 'MILLER',
      MONTH: '6',
      DAY_OF_WEEK: '7',
      HOUR: '9',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '11/17/2011 12:01:47 PM',
      LATITUDE: '41.797978346',
      LONGITUDE: '-87.600684654',
      LOCATION: 'POINT (-87.60068465388 41.797978345858)',
    },
    {
      rowid: 1910,
      CASE_NUMBER: 'HP737737',
      DATE: '2008-12-16',
      BLOCK: '1600 E 53RD ST',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-HP737737-#1',
      ZIP_CODE: '60615',
      WARD: '5',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '234',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'CYRDELL',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'BRAGG',
      MONTH: '12',
      DAY_OF_WEEK: '3',
      HOUR: '23',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '11/17/2011 12:01:47 PM',
      LATITUDE: '41.799291654',
      LONGITUDE: '-87.586325346',
      LOCATION: 'POINT (-87.58632534612 41.799291654142)',
    },
    {
      rowid: 18274,
      CASE_NUMBER: 'HP492847',
      DATE: '2008-08-04',
      BLOCK: '1100 E 48TH ST',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-HP492847-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '30-39',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'TERRANCE',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'THOMAS',
      MONTH: '8',
      DAY_OF_WEEK: '2',
      HOUR: '5',
      LOCATION_DESCRIPTION: 'PORCH',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '11/17/2011 12:01:47 PM',
      LATITUDE: '41.807501654',
      LONGITUDE: '-87.599425346',
      LOCATION: 'POINT (-87.59942534612 41.807501654142)',
    },
    {
      rowid: 12431,
      CASE_NUMBER: 'HP223238',
      DATE: '2008-03-13',
      BLOCK: '4800 S DREXEL BLVD',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-HP223238-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'CARLOS',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'MERRILLS',
      MONTH: '3',
      DAY_OF_WEEK: '5',
      HOUR: '14',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '01/09/2012 08:08:01 AM',
      LATITUDE: '41.807348346',
      LONGITUDE: '-87.604135346',
      LOCATION: 'POINT (-87.60413534612 41.807348345858)',
    },
    {
      rowid: 10814,
      CASE_NUMBER: 'HN706070',
      DATE: '2007-11-14',
      BLOCK: '800 E 50TH ST',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-HN706070-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'Acclivus Grand Boulevard',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '223',
      AGE: '50-59',
      SEX: 'female',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'HAZEL',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'LEWIS',
      MONTH: '11',
      DAY_OF_WEEK: '4',
      HOUR: '0',
      LOCATION_DESCRIPTION: 'ALLEY',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '11/17/2011 12:01:47 PM',
      LATITUDE: '41.804779669',
      LONGITUDE: '-87.604848547',
      LOCATION: 'POINT (-87.604848547471 41.804779668947)',
    },
    {
      rowid: 18967,
      CASE_NUMBER: 'HN412031',
      DATE: '2007-06-17',
      BLOCK: '4500 S WOODLAWN AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-HN412031-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'STEWART',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'VAUGHN',
      MONTH: '6',
      DAY_OF_WEEK: '1',
      HOUR: '23',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '11/17/2011 12:01:47 PM',
      LATITUDE: '41.813493096',
      LONGITUDE: '-87.596780941',
      LOCATION: 'POINT (-87.596780941301 41.813493095858)',
    },
    {
      rowid: 13735,
      CASE_NUMBER: 'HM677389',
      DATE: '2006-10-23',
      BLOCK: '1600 E 50TH ST',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-HM677389-#1',
      ZIP_CODE: '60615',
      WARD: '5',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '30-39',
      SEX: 'female',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'JANICE',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'ORDIDGE',
      MONTH: '10',
      DAY_OF_WEEK: '2',
      HOUR: '14',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '11/17/2011 12:01:47 PM',
      LATITUDE: '41.804763096',
      LONGITUDE: '-87.584609059',
      LOCATION: 'POINT (-87.584609058699 41.804763095858)',
    },
    {
      rowid: 5095,
      CASE_NUMBER: 'HM414793',
      DATE: '2006-06-15',
      BLOCK: '1200 E 53RD ST',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-HM414793-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '234',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'COREY',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'EBENCZER',
      MONTH: '6',
      DAY_OF_WEEK: '5',
      HOUR: '0',
      LOCATION_DESCRIPTION: 'RESTAURANT',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '11/17/2011 12:01:46 PM',
      LATITUDE: '41.799391654',
      LONGITUDE: '-87.594754654',
      LOCATION: 'POINT (-87.59475465388 41.799391654142)',
    },
    {
      rowid: 6502,
      CASE_NUMBER: 'HM235902',
      DATE: '2006-03-16',
      BLOCK: '5200 S CORNELL AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-HM235902-#1',
      ZIP_CODE: '60615',
      WARD: '5',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '234',
      AGE: '30-39',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '130',
      INCIDENT_IUCR_CD: '130',
      VICTIMIZATION_IUCR_SECONDARY: 'SECOND DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'SECOND DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'CARL',
      HOMICIDE_VICTIM_MI: 'male',
      HOMICIDE_VICTIM_LAST_NAME: 'GLASBY',
      MONTH: '3',
      DAY_OF_WEEK: '5',
      HOUR: '16',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '11/17/2011 12:01:46 PM',
      LATITUDE: '41.801148346',
      LONGITUDE: '-87.585444654',
      LOCATION: 'POINT (-87.58544465388 41.801148345858)',
    },
    {
      rowid: 2674,
      CASE_NUMBER: 'HL438340',
      DATE: '2005-06-23',
      BLOCK: '5400 S INGLESIDE AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-HL438340-#1',
      ZIP_CODE: '60615',
      WARD: '20',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '233',
      AGE: '0-19',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '130',
      INCIDENT_IUCR_CD: '130',
      VICTIMIZATION_IUCR_SECONDARY: 'SECOND DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'SECOND DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'PHILLIP',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'CALDWELL',
      MONTH: '6',
      DAY_OF_WEEK: '5',
      HOUR: '2',
      LOCATION_DESCRIPTION: 'ALLEY',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '11/17/2011 12:01:46 PM',
      LATITUDE: '41.797189669',
      LONGITUDE: '-87.602768547',
      LOCATION: 'POINT (-87.602768547471 41.797189668947)',
    },
    {
      rowid: 17204,
      CASE_NUMBER: 'HL373670',
      DATE: '2005-05-23',
      BLOCK: '4700 S ELLIS AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-HL373670-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'ROBERT',
      HOMICIDE_VICTIM_MI: 'male',
      HOMICIDE_VICTIM_LAST_NAME: 'SMITH',
      MONTH: '5',
      DAY_OF_WEEK: '2',
      HOUR: '11',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '11/17/2011 12:01:46 PM',
      LATITUDE: '41.809279669',
      LONGITUDE: '-87.601688547',
      LOCATION: 'POINT (-87.601688547471 41.809279668947)',
    },
    {
      rowid: 10697,
      CASE_NUMBER: 'HL361793',
      DATE: '2005-05-17',
      BLOCK: '5400 S DREXEL AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-HL361793-#1',
      ZIP_CODE: '60615',
      WARD: '20',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '233',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'ROBERT',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'LEE',
      MONTH: '5',
      DAY_OF_WEEK: '3',
      HOUR: '14',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '11/17/2011 12:01:46 PM',
      LATITUDE: '41.796441654',
      LONGITUDE: '-87.603284654',
      LOCATION: 'POINT (-87.60328465388 41.796441654142)',
    },
    {
      rowid: 2430,
      CASE_NUMBER: 'HL219488',
      DATE: '2005-03-06',
      BLOCK: '1300 E 53RD ST',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-HL219488-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '234',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'DION',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'BUFKIN',
      MONTH: '3',
      DAY_OF_WEEK: '1',
      HOUR: '22',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '11/17/2011 12:01:46 PM',
      LATITUDE: '41.799778346',
      LONGITUDE: '-87.594875346',
      LOCATION: 'POINT (-87.59487534612 41.799778345858)',
    },
    {
      rowid: 11160,
      CASE_NUMBER: 'HK677235',
      DATE: '2004-10-09',
      BLOCK: '800 E 53RD ST',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-HK677235-#1',
      ZIP_CODE: '60615',
      WARD: '20',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '233',
      AGE: '40-49',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'AUTRESS',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'LOWE',
      MONTH: '10',
      DAY_OF_WEEK: '7',
      HOUR: '19',
      LOCATION_DESCRIPTION: 'AUTO',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.7981405',
      LONGITUDE: '-87.60452',
      LOCATION: 'POINT (-87.60452 41.7981405)',
    },
    {
      rowid: 18717,
      CASE_NUMBER: 'HK647145',
      DATE: '2004-09-25',
      BLOCK: '1100 E 47TH ST',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-HK647145-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '80',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'WYMAN',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'TURMAN',
      MONTH: '9',
      DAY_OF_WEEK: '7',
      HOUR: '13',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.8091205',
      LONGITUDE: '-87.59835',
      LOCATION: 'POINT (-87.59835 41.8091205)',
    },
    {
      rowid: 7741,
      CASE_NUMBER: 'HK611468',
      DATE: '2004-09-08',
      BLOCK: '1200 E 46TH ST',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-HK611468-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '30-39',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'ROBERT',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'HAWKINS',
      MONTH: '9',
      DAY_OF_WEEK: '4',
      HOUR: '22',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.811228346',
      LONGITUDE: '-87.595955346',
      LOCATION: 'POINT (-87.59595534612 41.811228345858)',
    },
    {
      rowid: 16552,
      CASE_NUMBER: 'HK483176',
      DATE: '2004-07-08',
      BLOCK: '4600 S ELLIS AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-HK483176-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'AARON',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'SEAY',
      MONTH: '7',
      DAY_OF_WEEK: '5',
      HOUR: '21',
      LOCATION_DESCRIPTION: 'PARKING LOT',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.810126904',
      LONGITUDE: '-87.602139059',
      LOCATION: 'POINT (-87.602139058699 41.810126904142)',
    },
    {
      rowid: 12038,
      CASE_NUMBER: 'HK449695',
      DATE: '2004-06-23',
      BLOCK: '4500 S COTTAGE GROVE AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-HK449695-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '221',
      AGE: '50-59',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'JOE',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'MCDANIELS',
      MONTH: '6',
      DAY_OF_WEEK: '4',
      HOUR: '10',
      LOCATION_DESCRIPTION: 'GARAGE/AUTO REPAIR',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.8115505',
      LONGITUDE: '-87.60648',
      LOCATION: 'POINT (-87.60648 41.8115505)',
    },
    {
      rowid: 284,
      CASE_NUMBER: 'HK223040',
      DATE: '2004-03-06',
      BLOCK: '5100 S KENWOOD AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-HK223040-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '234',
      AGE: '40-49',
      SEX: 'female',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'ADA',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'ALLEN',
      MONTH: '3',
      DAY_OF_WEEK: '7',
      HOUR: '3',
      LOCATION_DESCRIPTION: 'YARD',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.801789669',
      LONGITUDE: '-87.593448547',
      LOCATION: 'POINT (-87.593448547471 41.801789668947)',
    },
    {
      rowid: 2375,
      CASE_NUMBER: 'HK165467',
      DATE: '2004-02-05',
      BLOCK: '5300 S ELLIS AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-HK165467-#1',
      ZIP_CODE: '60615',
      WARD: '5',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '233',
      AGE: '30-39',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'CAMERON',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'BRYANT',
      MONTH: '2',
      DAY_OF_WEEK: '5',
      HOUR: '3',
      LOCATION_DESCRIPTION: 'PARKING LOT',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.798201654',
      LONGITUDE: '-87.601565346',
      LOCATION: 'POINT (-87.60156534612 41.798201654142)',
    },
    {
      rowid: 3607,
      CASE_NUMBER: 'HH316539',
      DATE: '2002-04-18',
      BLOCK: '4700 S DREXEL AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-HH316539-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'Acclivus Grand Boulevard',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '223',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'TREMERE',
      HOMICIDE_VICTIM_MI: 'A',
      HOMICIDE_VICTIM_LAST_NAME: 'COLLINS',
      MONTH: '4',
      DAY_OF_WEEK: '5',
      HOUR: '21',
      LOCATION_DESCRIPTION: 'GANGWAY',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.809393096',
      LONGITUDE: '-87.604779059',
      LOCATION: 'POINT (-87.604779058699 41.809393095858)',
    },
    {
      rowid: 19933,
      CASE_NUMBER: 'G688481',
      DATE: '2001-11-15',
      BLOCK: '4700 S DREXEL AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-G688481-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '0-19',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '110',
      INCIDENT_IUCR_CD: '110',
      VICTIMIZATION_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      INCIDENT_IUCR_SECONDARY: 'FIRST DEGREE MURDER',
      HOMICIDE_VICTIM_FIRST_NAME: 'DEVON',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'WILEY',
      MONTH: '11',
      DAY_OF_WEEK: '5',
      HOUR: '19',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.809913096',
      LONGITUDE: '-87.603480941',
      LOCATION: 'POINT (-87.603480941301 41.809913095858)',
    },
    {
      rowid: 19432,
      CASE_NUMBER: 'F746059',
      DATE: '2000-12-02',
      BLOCK: '4900 S COTTAGE GROVE AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-F746059-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'Acclivus Grand Boulevard',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '223',
      AGE: '60-69',
      SEX: 'female',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'DOROTHY',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'WASHINGTON',
      MONTH: '12',
      DAY_OF_WEEK: '7',
      HOUR: '16',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.806003096',
      LONGITUDE: '-87.606599059',
      LOCATION: 'POINT (-87.606599058699 41.806003095858)',
    },
    {
      rowid: 14074,
      CASE_NUMBER: 'D754081',
      DATE: '1999-12-05',
      BLOCK: '4700 S DREXEL AV',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-D754081-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'Acclivus Grand Boulevard',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '223',
      AGE: '80',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'WILLIAM',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'PATTERSON',
      MONTH: '12',
      DAY_OF_WEEK: '1',
      HOUR: '11',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.809283098',
      LONGITUDE: '-87.60493793',
      LOCATION: 'POINT (-87.604937930301 41.809283097858)',
    },
    {
      rowid: 1988,
      CASE_NUMBER: 'D714491',
      DATE: '1999-11-16',
      BLOCK: '900 E 50 ST',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-D714491-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '30-39',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'BRENNAN',
      HOMICIDE_VICTIM_MI: 'L',
      HOMICIDE_VICTIM_LAST_NAME: 'BRIGGS',
      MONTH: '11',
      DAY_OF_WEEK: '3',
      HOUR: '5',
      LOCATION_DESCRIPTION: 'TRUCK',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.804723096',
      LONGITUDE: '-87.602180941',
      LOCATION: 'POINT (-87.602180941301 41.804723095858)',
    },
    {
      rowid: 11158,
      CASE_NUMBER: 'D712802',
      DATE: '1999-11-15',
      BLOCK: '5200 S CORNELL AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-D712802-#1',
      ZIP_CODE: '60615',
      WARD: '5',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '234',
      AGE: '50-59',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'HENRY',
      HOMICIDE_VICTIM_MI: 'A',
      HOMICIDE_VICTIM_LAST_NAME: 'LOWE',
      MONTH: '11',
      DAY_OF_WEEK: '2',
      HOUR: '11',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.800788346',
      LONGITUDE: '-87.585594654',
      LOCATION: 'POINT (-87.58559465388 41.800788345858)',
    },
    {
      rowid: 17366,
      CASE_NUMBER: 'D701040',
      DATE: '1999-11-09',
      BLOCK: '4900 S COTTAGE GROVE AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-D701040-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'Acclivus Grand Boulevard',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '223',
      AGE: '60-69',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'MAYNARD',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'SPEED',
      MONTH: '11',
      DAY_OF_WEEK: '3',
      HOUR: '18',
      LOCATION_DESCRIPTION: 'CHA APARTMENT',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.805089669',
      LONGITUDE: '-87.606168547',
      LOCATION: 'POINT (-87.606168547471 41.805089668947)',
    },
    {
      rowid: 20023,
      CASE_NUMBER: 'D527194',
      DATE: '1999-08-25',
      BLOCK: '800 E 52 ST',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-D527194-#1',
      ZIP_CODE: '60615',
      WARD: '20',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '233',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'MICHAEL',
      HOMICIDE_VICTIM_MI: 'L',
      HOMICIDE_VICTIM_LAST_NAME: 'WILLIAMS',
      MONTH: '8',
      DAY_OF_WEEK: '4',
      HOUR: '0',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.800066904',
      LONGITUDE: '-87.605020941',
      LOCATION: 'POINT (-87.605020941301 41.800066904142)',
    },
    {
      rowid: 16686,
      CASE_NUMBER: 'D461251',
      DATE: '1999-07-27',
      BLOCK: '5200 S DREXEL AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-D461251-#1',
      ZIP_CODE: '60615',
      WARD: '20',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '233',
      AGE: '40-49',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'JAMES',
      HOMICIDE_VICTIM_MI: 'white',
      HOMICIDE_VICTIM_LAST_NAME: 'SHELTON',
      MONTH: '7',
      DAY_OF_WEEK: '3',
      HOUR: '20',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.800393096',
      LONGITUDE: '-87.603810941',
      LOCATION: 'POINT (-87.603810941301 41.800393095858)',
    },
    {
      rowid: 1235,
      CASE_NUMBER: 'D412717',
      DATE: '1999-07-07',
      BLOCK: '1400 E 51 ST',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-D412717-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '20-29',
      SEX: 'female',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'RENNEE',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'BATTLE',
      MONTH: '7',
      DAY_OF_WEEK: '4',
      HOUR: '22',
      LOCATION_DESCRIPTION: 'AUTO',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.802361654',
      LONGITUDE: '-87.590275346',
      LOCATION: 'POINT (-87.59027534612 41.802361654142)',
    },
    {
      rowid: 3331,
      CASE_NUMBER: 'D328161',
      DATE: '1999-06-02',
      BLOCK: '4500 S OAKENWALD AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-D328161-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '30-39',
      SEX: 'female',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'BARBARA',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'CLARK',
      MONTH: '6',
      DAY_OF_WEEK: '4',
      HOUR: '3',
      LOCATION_DESCRIPTION: 'VACANT LOT',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.812273096',
      LONGITUDE: '-87.593200941',
      LOCATION: 'POINT (-87.593200941301 41.812273095858)',
    },
    {
      rowid: 13971,
      CASE_NUMBER: 'D292444',
      DATE: '1999-05-17',
      BLOCK: '800 E 50 ST',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-D292444-#1',
      ZIP_CODE: '60615',
      WARD: '20',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'Acclivus Grand Boulevard',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '223',
      AGE: '0-19',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'ANDRE',
      HOMICIDE_VICTIM_MI: 'D',
      HOMICIDE_VICTIM_LAST_NAME: 'PARKER',
      MONTH: '5',
      DAY_OF_WEEK: '2',
      HOUR: '20',
      LOCATION_DESCRIPTION: 'PARK PROPERTY',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.803486904',
      LONGITUDE: '-87.604840941',
      LOCATION: 'POINT (-87.604840941301 41.803486904142)',
    },
    {
      rowid: 2556,
      CASE_NUMBER: 'D248927',
      DATE: '1999-04-29',
      BLOCK: '4600 S GREENWOOD AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-D248927-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'STEVEN',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'BURTLEY',
      MONTH: '4',
      DAY_OF_WEEK: '5',
      HOUR: '6',
      LOCATION_DESCRIPTION: 'ALLEY',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.810811654',
      LONGITUDE: '-87.599585346',
      LOCATION: 'POINT (-87.59958534612 41.810811654142)',
    },
    {
      rowid: 12549,
      CASE_NUMBER: 'D199035',
      DATE: '1999-04-07',
      BLOCK: '5500 S CORNELL AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-D199035-#1',
      ZIP_CODE: '60637',
      WARD: '5',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '235',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'RANDOLPH',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'MILLER',
      MONTH: '4',
      DAY_OF_WEEK: '4',
      HOUR: '1',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.7936705',
      LONGITUDE: '-87.58554',
      LOCATION: 'POINT (-87.58554 41.7936705)',
    },
    {
      rowid: 8659,
      CASE_NUMBER: 'D082796',
      DATE: '1999-02-10',
      BLOCK: '5200 S CORNELL AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-D082796-#1',
      ZIP_CODE: '60615',
      WARD: '5',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '234',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'MAVERICK',
      HOMICIDE_VICTIM_MI: 'white',
      HOMICIDE_VICTIM_LAST_NAME: 'HUGHES',
      MONTH: '2',
      DAY_OF_WEEK: '4',
      HOUR: '8',
      LOCATION_DESCRIPTION: 'VACANT LOT',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.799516904',
      LONGITUDE: '-87.586059059',
      LOCATION: 'POINT (-87.586059058699 41.799516904142)',
    },
    {
      rowid: 12214,
      CASE_NUMBER: 'C678283',
      DATE: '1998-10-22',
      BLOCK: '5000 S WOODLAWN AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-C678283-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '80',
      SEX: 'female',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'WILMA',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'MCLEWIS',
      MONTH: '10',
      DAY_OF_WEEK: '5',
      HOUR: '10',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.803071654',
      LONGITUDE: '-87.596424654',
      LOCATION: 'POINT (-87.59642465388 41.803071654142)',
    },
    {
      rowid: 2094,
      CASE_NUMBER: 'C652905',
      DATE: '1998-10-11',
      BLOCK: '4400 S UNIVERSITY AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-C652905-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '40-49',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'DONALD',
      HOMICIDE_VICTIM_MI: 'T',
      HOMICIDE_VICTIM_LAST_NAME: 'BROWN',
      MONTH: '10',
      DAY_OF_WEEK: '1',
      HOUR: '18',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.8136505',
      LONGITUDE: '-87.59829',
      LOCATION: 'POINT (-87.59829 41.8136505)',
    },
    {
      rowid: 10600,
      CASE_NUMBER: 'C306266',
      DATE: '1998-05-19',
      BLOCK: '1200 E 53 ST',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-C306266-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '234',
      AGE: '70-79',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'JAMES',
      HOMICIDE_VICTIM_MI: 'male',
      HOMICIDE_VICTIM_LAST_NAME: 'LASLEY',
      MONTH: '5',
      DAY_OF_WEEK: '3',
      HOUR: '6',
      LOCATION_DESCRIPTION: 'ALLEY',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.799076904',
      LONGITUDE: '-87.596109059',
      LOCATION: 'POINT (-87.596109058699 41.799076904142)',
    },
    {
      rowid: 8447,
      CASE_NUMBER: 'C141649',
      DATE: '1998-03-06',
      BLOCK: '5400 S LAKE PARK AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-C141649-#1',
      ZIP_CODE: '60615',
      WARD: '5',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '234',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'DONALD',
      HOMICIDE_VICTIM_MI: 'JR',
      HOMICIDE_VICTIM_LAST_NAME: 'HORTON',
      MONTH: '3',
      DAY_OF_WEEK: '6',
      HOUR: '23',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.796923096',
      LONGITUDE: '-87.587759059',
      LOCATION: 'POINT (-87.587759058699 41.796923095858)',
    },
    {
      rowid: 3257,
      CASE_NUMBER: 'C022863',
      DATE: '1998-01-11',
      BLOCK: '4800 S LAKE PARK AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-C022863-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '70-79',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'JERRY',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'CHRISTMAS',
      MONTH: '1',
      DAY_OF_WEEK: '1',
      HOUR: '12',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.807611654',
      LONGITUDE: '-87.590174654',
      LOCATION: 'POINT (-87.59017465388 41.807611654142)',
    },
    {
      rowid: 17263,
      CASE_NUMBER: 'B435329',
      DATE: '1997-07-15',
      BLOCK: '1300 E 53RD ST',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-B435329-#1',
      ZIP_CODE: '60615',
      WARD: '5',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '234',
      AGE: '50-59',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'STANLEY',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'SNELL',
      MONTH: '7',
      DAY_OF_WEEK: '3',
      HOUR: '0',
      LOCATION_DESCRIPTION: 'RESTAURANT',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.799893096',
      LONGITUDE: '-87.592449059',
      LOCATION: 'POINT (-87.592449058699 41.799893095858)',
    },
    {
      rowid: 9975,
      CASE_NUMBER: 'B325830',
      DATE: '1997-05-29',
      BLOCK: '5700 S LAKE SHORE DR',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-B325830-#1',
      ZIP_CODE: '60637',
      WARD: '5',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'Claretian Associates South Shore',
      AREA: '1',
      DISTRICT: '3',
      BEAT: '331',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'JOSEPH',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'JONES',
      MONTH: '5',
      DAY_OF_WEEK: '5',
      HOUR: '20',
      LOCATION_DESCRIPTION: 'AUTO',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.791919669',
      LONGITUDE: '-87.579968547',
      LOCATION: 'POINT (-87.579968547471 41.791919668947)',
    },
    {
      rowid: 2082,
      CASE_NUMBER: 'B284678',
      DATE: '1997-05-10',
      BLOCK: '4300 S DREXEL AV',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-B284678-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '221',
      AGE: '0-19',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'LEONARDO',
      HOMICIDE_VICTIM_MI: 'male',
      HOMICIDE_VICTIM_LAST_NAME: 'BROWN',
      MONTH: '5',
      DAY_OF_WEEK: '7',
      HOUR: '23',
      LOCATION_DESCRIPTION: 'AUTO',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.816552361',
      LONGITUDE: '-87.605291384',
      LOCATION: 'POINT (-87.60529138412 41.816552360858)',
    },
    {
      rowid: 7011,
      CASE_NUMBER: 'B284678',
      DATE: '1997-05-10',
      BLOCK: '4300 S DREXEL AV',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-B284678-#2',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '221',
      AGE: '0-19',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'CORY',
      HOMICIDE_VICTIM_MI: 'Y',
      HOMICIDE_VICTIM_LAST_NAME: 'GRIFFIN',
      MONTH: '5',
      DAY_OF_WEEK: '7',
      HOUR: '23',
      LOCATION_DESCRIPTION: 'AUTO',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.816552361',
      LONGITUDE: '-87.605291384',
      LOCATION: 'POINT (-87.60529138412 41.816552360858)',
    },
    {
      rowid: 20691,
      CASE_NUMBER: 'B230717',
      DATE: '1997-04-17',
      BLOCK: '4500 S OAKENWALD AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-B230717-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '40-49',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'DENNIS C',
      HOMICIDE_VICTIM_MI: 'C',
      HOMICIDE_VICTIM_LAST_NAME: 'WOODS',
      MONTH: '4',
      DAY_OF_WEEK: '5',
      HOUR: '21',
      LOCATION_DESCRIPTION: 'AUTO',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.811891654',
      LONGITUDE: '-87.594465346',
      LOCATION: 'POINT (-87.59446534612 41.811891654142)',
    },
    {
      rowid: 19526,
      CASE_NUMBER: 'B178872',
      DATE: '1997-03-25',
      BLOCK: '4600 S ELLIS AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-B178872-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'ANTWUANE T',
      HOMICIDE_VICTIM_MI: 'T',
      HOMICIDE_VICTIM_LAST_NAME: 'WATERS',
      MONTH: '3',
      DAY_OF_WEEK: '3',
      HOUR: '20',
      LOCATION_DESCRIPTION: 'PORCH',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.810808346',
      LONGITUDE: '-87.601434654',
      LOCATION: 'POINT (-87.60143465388 41.810808345858)',
    },
    {
      rowid: 16961,
      CASE_NUMBER: 'A848879',
      DATE: '1996-11-23',
      BLOCK: '4800 S DORCHESTER AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-A848879-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '60-69',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'PAUL B',
      HOMICIDE_VICTIM_MI: 'B',
      HOMICIDE_VICTIM_LAST_NAME: 'SMITH',
      MONTH: '11',
      DAY_OF_WEEK: '7',
      HOUR: '8',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.807483096',
      LONGITUDE: '-87.592349059',
      LOCATION: 'POINT (-87.592349058699 41.807483095858)',
    },
    {
      rowid: 19765,
      CASE_NUMBER: 'A789717',
      DATE: '1996-10-27',
      BLOCK: '1700 E 56TH ST',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-A789717-#1',
      ZIP_CODE: '60637',
      WARD: '5',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'Claretian Associates South Shore',
      AREA: '1',
      DISTRICT: '3',
      BEAT: '331',
      AGE: '70-79',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'LARUE',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'WHEATLEY',
      MONTH: '10',
      DAY_OF_WEEK: '1',
      HOUR: '21',
      LOCATION_DESCRIPTION: 'AUTO',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.793151654',
      LONGITUDE: '-87.582055346',
      LOCATION: 'POINT (-87.58205534612 41.793151654142)',
    },
    {
      rowid: 10680,
      CASE_NUMBER: 'A787241',
      DATE: '1996-10-26',
      BLOCK: '4500 S COTTAGE GROVE AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-A787241-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '221',
      AGE: '30-39',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'REGINALD',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'LEE',
      MONTH: '10',
      DAY_OF_WEEK: '7',
      HOUR: '18',
      LOCATION_DESCRIPTION: 'GAS STATION DRIVE/PROP.',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.812653096',
      LONGITUDE: '-87.606210941',
      LOCATION: 'POINT (-87.606210941301 41.812653095858)',
    },
    {
      rowid: 14737,
      CASE_NUMBER: 'A776545',
      DATE: '1996-10-22',
      BLOCK: '4900 S LAKE SHORE DRIVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-A776545-#1',
      ZIP_CODE: '60615',
      WARD: '5',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '50-59',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'ROBERT',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'PRIESTER',
      MONTH: '10',
      DAY_OF_WEEK: '3',
      HOUR: '14',
      LOCATION_DESCRIPTION: 'HOTEL',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.8055605',
      LONGITUDE: '-87.5858',
      LOCATION: 'POINT (-87.5858 41.8055605)',
    },
    {
      rowid: 7235,
      CASE_NUMBER: 'A655738',
      DATE: '1996-09-05',
      BLOCK: '1000 E 47TH ST',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-A655738-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '70-79',
      SEX: 'female',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'BLANCHE',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'HALL',
      MONTH: '9',
      DAY_OF_WEEK: '5',
      HOUR: '7',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.809678346',
      LONGITUDE: '-87.601095346',
      LOCATION: 'POINT (-87.60109534612 41.809678345858)',
    },
    {
      rowid: 20873,
      CASE_NUMBER: 'A440290',
      DATE: '1996-06-29',
      BLOCK: '4300 S COTTAGE GROVE AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-A440290-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '221',
      AGE: '30-39',
      SEX: 'female',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'PEGGY',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'YOUNG',
      MONTH: '6',
      DAY_OF_WEEK: '7',
      HOUR: '8',
      LOCATION_DESCRIPTION: 'ALLEY',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.816359669',
      LONGITUDE: '-87.606398547',
      LOCATION: 'POINT (-87.606398547471 41.816359668947)',
    },
    {
      rowid: 12068,
      CASE_NUMBER: 'A353982',
      DATE: '1996-05-27',
      BLOCK: '4700 S ELLIS AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-A353982-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'MARTIN',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'MCFULSON',
      MONTH: '5',
      DAY_OF_WEEK: '2',
      HOUR: '1',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.808688346',
      LONGITUDE: '-87.601394654',
      LOCATION: 'POINT (-87.60139465388 41.808688345858)',
    },
    {
      rowid: 10280,
      CASE_NUMBER: 'A336517',
      DATE: '1996-05-18',
      BLOCK: '1000 E 47TH ST',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-A336517-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'CHARLES R',
      HOMICIDE_VICTIM_MI: 'R',
      HOMICIDE_VICTIM_LAST_NAME: 'KINDRED',
      MONTH: '5',
      DAY_OF_WEEK: '7',
      HOUR: '0',
      LOCATION_DESCRIPTION: 'ALLEY',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.809301654',
      LONGITUDE: '-87.601375346',
      LOCATION: 'POINT (-87.60137534612 41.809301654142)',
    },
    {
      rowid: 17823,
      CASE_NUMBER: 'A336604',
      DATE: '1996-05-18',
      BLOCK: '900 E 47TH ST',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-A336604-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'JUAN A',
      HOMICIDE_VICTIM_MI: 'A',
      HOMICIDE_VICTIM_LAST_NAME: 'SWINNEY',
      MONTH: '5',
      DAY_OF_WEEK: '7',
      HOUR: '3',
      LOCATION_DESCRIPTION: 'AUTO',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.809196904',
      LONGITUDE: '-87.602110941',
      LOCATION: 'POINT (-87.602110941301 41.809196904142)',
    },
    {
      rowid: 9737,
      CASE_NUMBER: 'A324196',
      DATE: '1996-05-10',
      BLOCK: '900 E 47TH ST',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-A324196-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '80',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'HENRY',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'JONES',
      MONTH: '5',
      DAY_OF_WEEK: '6',
      HOUR: '21',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.809196904',
      LONGITUDE: '-87.602649059',
      LOCATION: 'POINT (-87.602649058699 41.809196904142)',
    },
    {
      rowid: 16846,
      CASE_NUMBER: 'A155112',
      DATE: '1996-03-01',
      BLOCK: '4400 S DREXEL AV',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-A155112-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '221',
      AGE: '40-49',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'THOMAS L',
      HOMICIDE_VICTIM_MI: 'L',
      HOMICIDE_VICTIM_LAST_NAME: 'SIMS',
      MONTH: '3',
      DAY_OF_WEEK: '6',
      HOUR: '2',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.814754359',
      LONGITUDE: '-87.604860658',
      LOCATION: 'POINT (-87.60486065788 41.814754358858)',
    },
    {
      rowid: 8759,
      CASE_NUMBER: 'A091694',
      DATE: '1996-02-08',
      BLOCK: '800 E 50TH ST',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-A091694-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'Acclivus Grand Boulevard',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '223',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'ROBERT',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'HURD',
      MONTH: '2',
      DAY_OF_WEEK: '5',
      HOUR: '9',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.803706904',
      LONGITUDE: '-87.604720941',
      LOCATION: 'POINT (-87.604720941301 41.803706904142)',
    },
    {
      rowid: 731,
      CASE_NUMBER: 'Z168943',
      DATE: '1995-04-19',
      BLOCK: '4700 S LAKE SHORE DR',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-Z168943-#1',
      ZIP_CODE: '60615',
      WARD: '5',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'Hispanic',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'JORGE L',
      HOMICIDE_VICTIM_MI: 'L',
      HOMICIDE_VICTIM_LAST_NAME: 'ASTUDILLO',
      MONTH: '4',
      DAY_OF_WEEK: '4',
      HOUR: '1',
      LOCATION_DESCRIPTION: 'PARK PROPERTY',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.808671979',
      LONGITUDE: '-87.587324105',
      LOCATION: 'POINT (-87.58732410488 41.808671979142)',
    },
    {
      rowid: 3405,
      CASE_NUMBER: 'Y428563',
      DATE: '1994-09-14',
      BLOCK: '4800 S DREXEL BLVD',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-Y428563-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'Acclivus Grand Boulevard',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '223',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'FONTAINE I',
      HOMICIDE_VICTIM_MI: 'I',
      HOMICIDE_VICTIM_LAST_NAME: 'CLIFTON',
      MONTH: '9',
      DAY_OF_WEEK: '4',
      HOUR: '2',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.806111654',
      LONGITUDE: '-87.604014654',
      LOCATION: 'POINT (-87.60401465388 41.806111654142)',
    },
    {
      rowid: 12662,
      CASE_NUMBER: 'Y400191',
      DATE: '1994-08-29',
      BLOCK: '4500 S DREXEL BLVD',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-Y400191-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '221',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'STEVEN C',
      HOMICIDE_VICTIM_MI: 'C',
      HOMICIDE_VICTIM_LAST_NAME: 'MITCHELL',
      MONTH: '8',
      DAY_OF_WEEK: '2',
      HOUR: '0',
      LOCATION_DESCRIPTION: 'HALLWAY',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.812963096',
      LONGITUDE: '-87.604310941',
      LOCATION: 'POINT (-87.604310941301 41.812963095858)',
    },
    {
      rowid: 7089,
      CASE_NUMBER: 'Y376068',
      DATE: '1994-08-15',
      BLOCK: '1300 W 53RD. ST.',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-Y376068-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '234',
      AGE: '0-19',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'DANNY D',
      HOMICIDE_VICTIM_MI: 'D',
      HOMICIDE_VICTIM_LAST_NAME: 'GUENO',
      MONTH: '8',
      DAY_OF_WEEK: '2',
      HOUR: '23',
      LOCATION_DESCRIPTION: 'PARK PROPERTY',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.799768346',
      LONGITUDE: '-87.595345346',
      LOCATION: 'POINT (-87.59534534612 41.799768345858)',
    },
    {
      rowid: 17851,
      CASE_NUMBER: 'Y297624',
      DATE: '1994-07-04',
      BLOCK: '1000 E 47TH STREET',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-Y297624-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '30-39',
      SEX: 'female',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'ROSEMARIE',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'TABOR',
      MONTH: '7',
      DAY_OF_WEEK: '2',
      HOUR: '7',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.808996904',
      LONGITUDE: '-87.600450941',
      LOCATION: 'POINT (-87.600450941301 41.808996904142)',
    },
    {
      rowid: 17852,
      CASE_NUMBER: 'Y297624',
      DATE: '1994-07-04',
      BLOCK: '1000 E 47TH STREET',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-Y297624-#2',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '50-59',
      SEX: 'female',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'HENRY',
      HOMICIDE_VICTIM_MI: 'male',
      HOMICIDE_VICTIM_LAST_NAME: 'TABOR',
      MONTH: '7',
      DAY_OF_WEEK: '2',
      HOUR: '7',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.808996904',
      LONGITUDE: '-87.600450941',
      LOCATION: 'POINT (-87.600450941301 41.808996904142)',
    },
    {
      rowid: 18359,
      CASE_NUMBER: 'Y255983',
      DATE: '1994-06-11',
      BLOCK: '5200 S DREXEL AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-Y255983-#1',
      ZIP_CODE: '60615',
      WARD: '20',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '233',
      AGE: '30-39',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'WILLIE',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'THOMPSON',
      MONTH: '6',
      DAY_OF_WEEK: '7',
      HOUR: '16',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.800471654',
      LONGITUDE: '-87.603364654',
      LOCATION: 'POINT (-87.60336465388 41.800471654142)',
    },
    {
      rowid: 15632,
      CASE_NUMBER: 'Y218449',
      DATE: '1994-05-20',
      BLOCK: '5200 S WOODLAWN AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-Y218449-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '234',
      AGE: '30-39',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'LEON',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'ROBINSON',
      MONTH: '5',
      DAY_OF_WEEK: '6',
      HOUR: '17',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.800643096',
      LONGITUDE: '-87.596779059',
      LOCATION: 'POINT (-87.596779058699 41.800643095858)',
    },
    {
      rowid: 2406,
      CASE_NUMBER: 'Y042437',
      DATE: '1994-01-30',
      BLOCK: '4500 S DREXEL BLVD',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-Y042437-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '0-19',
      SEX: 'female',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'ROBIN',
      HOMICIDE_VICTIM_MI: 'A',
      HOMICIDE_VICTIM_LAST_NAME: 'BUCHANAN',
      MONTH: '1',
      DAY_OF_WEEK: '1',
      HOUR: '13',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.812181654',
      LONGITUDE: '-87.604245346',
      LOCATION: 'POINT (-87.60424534612 41.812181654142)',
    },
    {
      rowid: 11863,
      CASE_NUMBER: 'X582873',
      DATE: '1993-12-15',
      BLOCK: '4500 S COTTAGE GROVE AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-X582873-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '221',
      AGE: '0-19',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'TROY',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'MCBRIDE',
      MONTH: '12',
      DAY_OF_WEEK: '4',
      HOUR: '14',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.812801654',
      LONGITUDE: '-87.606064654',
      LOCATION: 'POINT (-87.60606465388 41.812801654142)',
    },
    {
      rowid: 13996,
      CASE_NUMBER: 'X546736',
      DATE: '1993-11-23',
      BLOCK: '5200 S DREXEL AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-X546736-#1',
      ZIP_CODE: '60615',
      WARD: '20',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '233',
      AGE: '70-79',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'CLOUDELL',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'PARKER',
      MONTH: '11',
      DAY_OF_WEEK: '3',
      HOUR: '9',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.798596904',
      LONGITUDE: '-87.604329059',
      LOCATION: 'POINT (-87.604329058699 41.798596904142)',
    },
    {
      rowid: 17137,
      CASE_NUMBER: 'X521268',
      DATE: '1993-11-08',
      BLOCK: '4400 S COTTAGE GROVE AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-X521268-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '221',
      AGE: '0-19',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'KYLER',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'SMITH',
      MONTH: '11',
      DAY_OF_WEEK: '2',
      HOUR: '1',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.814998346',
      LONGITUDE: '-87.606975346',
      LOCATION: 'POINT (-87.60697534612 41.814998345858)',
    },
    {
      rowid: 20611,
      CASE_NUMBER: 'X427506',
      DATE: '1993-09-13',
      BLOCK: '4300 S DREXEL BLVD',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-X427506-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '40-49',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'ANDRIELL',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'WINSTON',
      MONTH: '9',
      DAY_OF_WEEK: '2',
      HOUR: '15',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.815066904',
      LONGITUDE: '-87.604149059',
      LOCATION: 'POINT (-87.604149058699 41.815066904142)',
    },
    {
      rowid: 9934,
      CASE_NUMBER: 'X394232',
      DATE: '1993-08-25',
      BLOCK: '5300 S MARYLAND AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-X394232-#1',
      ZIP_CODE: '60615',
      WARD: '20',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '233',
      AGE: '0-19',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'JEREMIAH',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'JONES',
      MONTH: '8',
      DAY_OF_WEEK: '4',
      HOUR: '16',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.798488346',
      LONGITUDE: '-87.604834654',
      LOCATION: 'POINT (-87.60483465388 41.798488345858)',
    },
    {
      rowid: 319,
      CASE_NUMBER: 'X390357',
      DATE: '1993-08-23',
      BLOCK: '4800 S DREXEL BLVD',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-X390357-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'Acclivus Grand Boulevard',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '223',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'LORENZO',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'ALLEN',
      MONTH: '8',
      DAY_OF_WEEK: '2',
      HOUR: '13',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.806911654',
      LONGITUDE: '-87.604905346',
      LOCATION: 'POINT (-87.60490534612 41.806911654142)',
    },
    {
      rowid: 14964,
      CASE_NUMBER: 'X078610',
      DATE: '1993-02-21',
      BLOCK: '1600 E 53RD STREET',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-X078610-#1',
      ZIP_CODE: '60615',
      WARD: '5',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '234',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'CLAY M',
      HOMICIDE_VICTIM_MI: 'male',
      HOMICIDE_VICTIM_LAST_NAME: 'RANDALL',
      MONTH: '2',
      DAY_OF_WEEK: '1',
      HOUR: '21',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.800059669',
      LONGITUDE: '-87.584888547',
      LOCATION: 'POINT (-87.584888547471 41.800059668947)',
    },
    {
      rowid: 14166,
      CASE_NUMBER: 'X077383',
      DATE: '1993-02-20',
      BLOCK: '4300 S OAKENWALD AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-X077383-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '30-39',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'LEROY',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'PECK',
      MONTH: '2',
      DAY_OF_WEEK: '7',
      HOUR: '18',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.815571654',
      LONGITUDE: '-87.596014654',
      LOCATION: 'POINT (-87.59601465388 41.815571654142)',
    },
    {
      rowid: 7891,
      CASE_NUMBER: 'T500120',
      DATE: '1992-10-21',
      BLOCK: '4500 S COTTAGE GROVE AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-T500120-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '221',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'LEONARD',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'HENDERSON',
      MONTH: '10',
      DAY_OF_WEEK: '4',
      HOUR: '18',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.813569669',
      LONGITUDE: '-87.606358547',
      LOCATION: 'POINT (-87.606358547471 41.813569668947)',
    },
    {
      rowid: 7588,
      CASE_NUMBER: 'T467567',
      DATE: '1992-10-02',
      BLOCK: '4400 S DREXEL BLVD',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-T467567-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '221',
      AGE: '0-19',
      SEX: 'female',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'SUZANNE',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'HARRIS',
      MONTH: '10',
      DAY_OF_WEEK: '6',
      HOUR: '14',
      LOCATION_DESCRIPTION: 'GANGWAY',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.814291654',
      LONGITUDE: '-87.605065346',
      LOCATION: 'POINT (-87.60506534612 41.814291654142)',
    },
    {
      rowid: 7265,
      CASE_NUMBER: 'T434967',
      DATE: '1992-09-13',
      BLOCK: '5400 S DREXEL AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-T434967-#1',
      ZIP_CODE: '60615',
      WARD: '20',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '233',
      AGE: '0-19',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'JOHN',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'HALL',
      MONTH: '9',
      DAY_OF_WEEK: '1',
      HOUR: '21',
      LOCATION_DESCRIPTION: 'PARK PROPERTY',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.796401654',
      LONGITUDE: '-87.604155346',
      LOCATION: 'POINT (-87.60415534612 41.796401654142)',
    },
    {
      rowid: 14445,
      CASE_NUMBER: 'T434967',
      DATE: '1992-09-13',
      BLOCK: '5400 S DREXEL AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-T434967-#2',
      ZIP_CODE: '60615',
      WARD: '20',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '233',
      AGE: '0-19',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'SINCLAIR',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'PIERCE',
      MONTH: '9',
      DAY_OF_WEEK: '1',
      HOUR: '21',
      LOCATION_DESCRIPTION: 'PARK PROPERTY',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.796401654',
      LONGITUDE: '-87.604155346',
      LOCATION: 'POINT (-87.60415534612 41.796401654142)',
    },
    {
      rowid: 316,
      CASE_NUMBER: 'T422874',
      DATE: '1992-09-06',
      BLOCK: '800 E 48TH STREET',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-T422874-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'Acclivus Grand Boulevard',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '223',
      AGE: '40-49',
      SEX: 'female',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'SHEILA',
      HOMICIDE_VICTIM_MI: 'L',
      HOMICIDE_VICTIM_LAST_NAME: 'ALLEN',
      MONTH: '9',
      DAY_OF_WEEK: '1',
      HOUR: '14',
      LOCATION_DESCRIPTION: 'HOUSE',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.807126904',
      LONGITUDE: '-87.605200941',
      LOCATION: 'POINT (-87.605200941301 41.807126904142)',
    },
    {
      rowid: 7006,
      CASE_NUMBER: 'T384750',
      DATE: '1992-08-16',
      BLOCK: '5400 S LAKE SHORE DR',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-T384750-#1',
      ZIP_CODE: '60615',
      WARD: '5',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '234',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'GERARD',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'GREY',
      MONTH: '8',
      DAY_OF_WEEK: '1',
      HOUR: '20',
      LOCATION_DESCRIPTION: 'PARK PROPERTY',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.796947223',
      LONGITUDE: '-87.578957385',
      LOCATION: 'POINT (-87.578957385471 41.796947222947)',
    },
    {
      rowid: 12566,
      CASE_NUMBER: 'T313506',
      DATE: '1992-07-07',
      BLOCK: '900 E 52ND STREET',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-T313506-#1',
      ZIP_CODE: '60615',
      WARD: '5',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '233',
      AGE: '40-49',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'JESSIE',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'MILLER',
      MONTH: '7',
      DAY_OF_WEEK: '3',
      HOUR: '22',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.800256904',
      LONGITUDE: '-87.602619059',
      LOCATION: 'POINT (-87.602619058699 41.800256904142)',
    },
    {
      rowid: 12885,
      CASE_NUMBER: 'T265975',
      DATE: '1992-06-10',
      BLOCK: '4700 S DREXEL BLVD',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-T265975-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'Acclivus Grand Boulevard',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '223',
      AGE: '30-39',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'RODNEY',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'MOORE',
      MONTH: '6',
      DAY_OF_WEEK: '4',
      HOUR: '16',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.8087605',
      LONGITUDE: '-87.60452',
      LOCATION: 'POINT (-87.60452 41.8087605)',
    },
    {
      rowid: 9589,
      CASE_NUMBER: 'T219854',
      DATE: '1992-05-15',
      BLOCK: '4500 S DREXEL BLVD',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-T219854-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '70-79',
      SEX: 'female',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'THELMA',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'JOHNSON',
      MONTH: '5',
      DAY_OF_WEEK: '6',
      HOUR: '23',
      LOCATION_DESCRIPTION: 'NURSING HOME',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.811626904',
      LONGITUDE: '-87.603530941',
      LOCATION: 'POINT (-87.603530941301 41.811626904142)',
    },
    {
      rowid: 15629,
      CASE_NUMBER: 'T156718',
      DATE: '1992-04-08',
      BLOCK: '5300 S HYDE PARK BLVD',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-T156718-#1',
      ZIP_CODE: '60615',
      WARD: '5',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '234',
      AGE: '40-49',
      SEX: 'female',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'CAROLYNN',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'ROBINSON',
      MONTH: '4',
      DAY_OF_WEEK: '4',
      HOUR: '16',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.799498346',
      LONGITUDE: '-87.584335346',
      LOCATION: 'POINT (-87.58433534612 41.799498345858)',
    },
    {
      rowid: 5190,
      CASE_NUMBER: 'P608813',
      DATE: '1991-12-16',
      BLOCK: '1400 E HYDE PARK BLVD',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-P608813-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '234',
      AGE: '0-19',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'LAWRENCE',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'ELIZALDE',
      MONTH: '12',
      DAY_OF_WEEK: '2',
      HOUR: '15',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.802151654',
      LONGITUDE: '-87.588924654',
      LOCATION: 'POINT (-87.58892465388 41.802151654142)',
    },
    {
      rowid: 10927,
      CASE_NUMBER: 'P503178',
      DATE: '1991-10-13',
      BLOCK: '4700 S DREXEL BLVD',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-P503178-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'Acclivus Grand Boulevard',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '223',
      AGE: '0-19',
      SEX: 'female',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'TIFFANY',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'LINDSEY',
      MONTH: '10',
      DAY_OF_WEEK: '1',
      HOUR: '9',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '07/27/2011 07:21:07 AM',
      LATITUDE: '41.808958346',
      LONGITUDE: '-87.604935346',
      LOCATION: 'POINT (-87.60493534612 41.808958345858)',
    },
    {
      rowid: 19613,
      CASE_NUMBER: 'P495085',
      DATE: '1991-10-08',
      BLOCK: '900 E 46TH STREET',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-P495085-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'EARL',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'WATTS',
      MONTH: '10',
      DAY_OF_WEEK: '3',
      HOUR: '21',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.8109005',
      LONGITUDE: '-87.60245',
      LOCATION: 'POINT (-87.60245 41.8109005)',
    },
    {
      rowid: 20279,
      CASE_NUMBER: 'P457385',
      DATE: '1991-09-17',
      BLOCK: '800 E 45TH STREET',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-P457385-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '221',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'ARTHUR',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'WILLIAMS',
      MONTH: '9',
      DAY_OF_WEEK: '3',
      HOUR: '15',
      LOCATION_DESCRIPTION: 'AUTO',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.8124705',
      LONGITUDE: '-87.60535',
      LOCATION: 'POINT (-87.60535 41.8124705)',
    },
    {
      rowid: 6953,
      CASE_NUMBER: 'P446709',
      DATE: '1991-09-11',
      BLOCK: '4400 S GREENWOOD AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-P446709-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '30-39',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'ROBERT L',
      HOMICIDE_VICTIM_MI: 'L',
      HOMICIDE_VICTIM_LAST_NAME: 'GREEN',
      MONTH: '9',
      DAY_OF_WEEK: '4',
      HOUR: '21',
      LOCATION_DESCRIPTION: 'PORCH',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.815393096',
      LONGITUDE: '-87.599499059',
      LOCATION: 'POINT (-87.599499058699 41.815393095858)',
    },
    {
      rowid: 14014,
      CASE_NUMBER: 'P467045',
      DATE: '1991-09-06',
      BLOCK: '4700 S DREXEL BLVD',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-P467045-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'Acclivus Grand Boulevard',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '223',
      AGE: '60-69',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'HILLARD',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'PARKS',
      MONTH: '9',
      DAY_OF_WEEK: '6',
      HOUR: '4',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.8081605',
      LONGITUDE: '-87.6045',
      LOCATION: 'POINT (-87.6045 41.8081605)',
    },
    {
      rowid: 5094,
      CASE_NUMBER: 'P420728',
      DATE: '1991-08-29',
      BLOCK: '5400 S LAKE SHORE DR',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-P420728-#1',
      ZIP_CODE: '60615',
      WARD: '5',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '234',
      AGE: '20-29',
      SEX: 'female',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'KHARMELL',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'EBAH',
      MONTH: '8',
      DAY_OF_WEEK: '5',
      HOUR: '3',
      LOCATION_DESCRIPTION: 'PARK PROPERTY',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.795789931',
      LONGITUDE: '-87.579403293',
      LOCATION: 'POINT (-87.57940329312 41.795789930858)',
    },
    {
      rowid: 16537,
      CASE_NUMBER: 'P406857',
      DATE: '1991-08-22',
      BLOCK: '4600 S DREXEL BLVD',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-P406857-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '30-39',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'MICHAEL',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'SEALS',
      MONTH: '8',
      DAY_OF_WEEK: '5',
      HOUR: '1',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.810211654',
      LONGITUDE: '-87.604205346',
      LOCATION: 'POINT (-87.60420534612 41.810211654142)',
    },
    {
      rowid: 14765,
      CASE_NUMBER: 'P398799',
      DATE: '1991-08-17',
      BLOCK: '4400 S BERKELEY AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-P398799-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'ANTOINE',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'PRUITT',
      MONTH: '8',
      DAY_OF_WEEK: '7',
      HOUR: '22',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.815063096',
      LONGITUDE: '-87.600999059',
      LOCATION: 'POINT (-87.600999058699 41.815063095858)',
    },
    {
      rowid: 20200,
      CASE_NUMBER: 'P359775',
      DATE: '1991-07-28',
      BLOCK: '5000 S BLACKSTONE AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-P359775-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '30-39',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'FRANK',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'WILLIAMS',
      MONTH: '7',
      DAY_OF_WEEK: '1',
      HOUR: '23',
      LOCATION_DESCRIPTION: 'STREET',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.8029905',
      LONGITUDE: '-87.59068',
      LOCATION: 'POINT (-87.59068 41.8029905)',
    },
    {
      rowid: 7344,
      CASE_NUMBER: 'P344814',
      DATE: '1991-07-21',
      BLOCK: '4600 S ELLIS AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-P344814-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '0-19',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'DARIUS',
      HOMICIDE_VICTIM_MI: 'white',
      HOMICIDE_VICTIM_LAST_NAME: 'HAMPTON',
      MONTH: '7',
      DAY_OF_WEEK: '1',
      HOUR: '1',
      LOCATION_DESCRIPTION: 'ALLEY',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.810236904',
      LONGITUDE: '-87.601310941',
      LOCATION: 'POINT (-87.601310941301 41.810236904142)',
    },
    {
      rowid: 1239,
      CASE_NUMBER: 'P334411',
      DATE: '1991-07-15',
      BLOCK: '1500 E HYDE PARK BLVD',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-P334411-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '234',
      AGE: '30-39',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'GORDON',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'BATTLE',
      MONTH: '7',
      DAY_OF_WEEK: '2',
      HOUR: '18',
      LOCATION_DESCRIPTION: 'PARKING LOT',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.802853096',
      LONGITUDE: '-87.587840941',
      LOCATION: 'POINT (-87.587840941301 41.802853095858)',
    },
    {
      rowid: 4878,
      CASE_NUMBER: 'P320225',
      DATE: '1991-07-08',
      BLOCK: '5300 S HARPER AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-P320225-#1',
      ZIP_CODE: '60615',
      WARD: '5',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '234',
      AGE: '80',
      SEX: 'female',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'MARY',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'DOSSEY',
      MONTH: '7',
      DAY_OF_WEEK: '2',
      HOUR: '8',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.7979905',
      LONGITUDE: '-87.58922',
      LOCATION: 'POINT (-87.58922 41.7979905)',
    },
    {
      rowid: 3535,
      CASE_NUMBER: 'P304989',
      DATE: '1991-06-30',
      BLOCK: '4300 S LAKE SHORE DR',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-P304989-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'RONALD K',
      HOMICIDE_VICTIM_MI: 'K',
      HOMICIDE_VICTIM_LAST_NAME: 'COLEMAN',
      MONTH: '6',
      DAY_OF_WEEK: '1',
      HOUR: '3',
      LOCATION_DESCRIPTION: 'AUTO',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.817115002',
      LONGITUDE: '-87.594855996',
      LOCATION: 'POINT (-87.594855995699 41.817115001858)',
    },
    {
      rowid: 17122,
      CASE_NUMBER: 'P293571',
      DATE: '1991-06-24',
      BLOCK: '4800 S CORNELL AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-P293571-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '40-49',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'MICHAEL',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'SMITH',
      MONTH: '6',
      DAY_OF_WEEK: '2',
      HOUR: '4',
      LOCATION_DESCRIPTION: 'ALLEY',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.807403096',
      LONGITUDE: '-87.588120941',
      LOCATION: 'POINT (-87.588120941301 41.807403095858)',
    },
    {
      rowid: 10880,
      CASE_NUMBER: 'P247414',
      DATE: '1991-05-30',
      BLOCK: '4900 S DREXEL BLVD',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-P247414-#1',
      ZIP_CODE: '60615',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '20-29',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'HERBERT R',
      HOMICIDE_VICTIM_MI: 'R',
      HOMICIDE_VICTIM_LAST_NAME: 'LEWIS',
      MONTH: '5',
      DAY_OF_WEEK: '5',
      HOUR: '10',
      LOCATION_DESCRIPTION: 'AUTO',
      STATE_HOUSE_DISTRICT: '26',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.803796904',
      LONGITUDE: '-87.603370941',
      LOCATION: 'POINT (-87.603370941301 41.803796904142)',
    },
    {
      rowid: 4114,
      CASE_NUMBER: 'P231407',
      DATE: '1991-05-21',
      BLOCK: '1000 E 58TH STREET',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-P231407-#1',
      ZIP_CODE: '60637',
      WARD: '5',
      COMMUNITY_AREA: 'HYDE PARK',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '235',
      AGE: '40-49',
      SEX: 'male',
      RACE: 'white',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'IOAN P',
      HOMICIDE_VICTIM_MI: 'P',
      HOMICIDE_VICTIM_LAST_NAME: 'CULIANU',
      MONTH: '5',
      DAY_OF_WEEK: '3',
      HOUR: '13',
      LOCATION_DESCRIPTION: 'COLLEGE/UNIV. BUILDING',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.789231654',
      LONGITUDE: '-87.600495346',
      LOCATION: 'POINT (-87.60049534612 41.789231654142)',
    },
    {
      rowid: 20371,
      CASE_NUMBER: 'P123722',
      DATE: '1991-03-20',
      BLOCK: '4300 S GREENWOOD AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'NO',
      UNIQUE_ID: 'HOM-P123722-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '30-39',
      SEX: 'female',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'JOANNE',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'WILLIAMS',
      MONTH: '3',
      DAY_OF_WEEK: '4',
      HOUR: '7',
      LOCATION_DESCRIPTION: 'HOUSE',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.815488346',
      LONGITUDE: '-87.599094654',
      LOCATION: 'POINT (-87.59909465388 41.815488345858)',
    },
    {
      rowid: 1581,
      CASE_NUMBER: 'P028661',
      DATE: '1991-01-19',
      BLOCK: '4500 S GREENWOOD AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-P028661-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '60-69',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'WILLIAM',
      HOMICIDE_VICTIM_MI: '',
      HOMICIDE_VICTIM_LAST_NAME: 'BLACKLOCK',
      MONTH: '1',
      DAY_OF_WEEK: '7',
      HOUR: '17',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.813013096',
      LONGITUDE: '-87.599200941',
      LOCATION: 'POINT (-87.599200941301 41.813013095858)',
    },
    {
      rowid: 6765,
      CASE_NUMBER: 'P019241',
      DATE: '1991-01-13',
      BLOCK: '4600 S LAKE PARK AVE',
      VICTIMIZATION_PRIMARY: 'HOMICIDE',
      INCIDENT_PRIMARY: 'HOMICIDE',
      GUNSHOT_INJURY_I: 'YES',
      UNIQUE_ID: 'HOM-P019241-#1',
      ZIP_CODE: '60653',
      WARD: '4',
      COMMUNITY_AREA: 'KENWOOD',
      STREET_OUTREACH_ORGANIZATION: 'None',
      AREA: '1',
      DISTRICT: '2',
      BEAT: '222',
      AGE: '50-59',
      SEX: 'male',
      RACE: 'black',
      VICTIMIZATION_FBI_CD: '01A',
      INCIDENT_FBI_CD: '01A',
      VICTIMIZATION_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      INCIDENT_FBI_DESCR: 'HOMICIDE - 1ST OR 2ND DEGREE (INDEX)',
      VICTIMIZATION_IUCR_CD: '01XX',
      INCIDENT_IUCR_CD: '01XX',
      VICTIMIZATION_IUCR_SECONDARY: '',
      INCIDENT_IUCR_SECONDARY: '',
      HOMICIDE_VICTIM_FIRST_NAME: 'JOSEPH JR',
      HOMICIDE_VICTIM_MI: 'JR',
      HOMICIDE_VICTIM_LAST_NAME: 'GORDON',
      MONTH: '1',
      DAY_OF_WEEK: '1',
      HOUR: '17',
      LOCATION_DESCRIPTION: 'APARTMENT',
      STATE_HOUSE_DISTRICT: '25',
      STATE_SENATE_DISTRICT: '13',
      UPDATED: '08/25/2009 02:50:36 PM',
      LATITUDE: '41.810763096',
      LONGITUDE: '-87.593060941',
      LOCATION: 'POINT (-87.593060941301 41.810763095858)',
    },
  ].forEach((I) => {
    t.circleMarker([I.LATITUDE, I.LONGITUDE])
      .addTo(E)
      .bindTooltip(
        I.HOMICIDE_VICTIM_FIRST_NAME + ' ' + I.HOMICIDE_VICTIM_LAST_NAME
      );
  });
//# sourceMappingURL=app.5d2cd6a0.js.map
