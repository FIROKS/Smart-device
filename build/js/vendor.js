/* ! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-setclasses !*/
! function (e, n, A) {
  function o(e, n) {
    return typeof e === n
  }

  function t() {
    var e, n, A, t, a, i, l;
    for (var f in r)
      if (r.hasOwnProperty(f)) {
        if (e = [], n = r[f], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
          for (A = 0; A < n.options.aliases.length; A++) e.push(n.options.aliases[A].toLowerCase());
        for (t = o(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++) i = e[a], l = i.split("."), 1 === l.length ? Modernizr[l[0]] = t : (!Modernizr[l[0]] || Modernizr[l[0]] instanceof Boolean || (Modernizr[l[0]] = new Boolean(Modernizr[l[0]])), Modernizr[l[0]][l[1]] = t), s.push((t ? "" : "no-") + l.join("-"))
      }
  }

  function a(e) {
    var n = u.className,
      A = Modernizr._config.classPrefix || "";
    if (c && (n = n.baseVal), Modernizr._config.enableJSClass) {
      var o = new RegExp("(^|\\s)" + A + "no-js(\\s|$)");
      n = n.replace(o, "$1" + A + "js$2")
    }
    Modernizr._config.enableClasses && (n += " " + A + e.join(" " + A), c ? u.className.baseVal = n : u.className = n)
  }

  function i(e, n) {
    if ("object" == typeof e)
      for (var A in e) f(e, A) && i(A, e[A]);
    else {
      e = e.toLowerCase();
      var o = e.split("."),
        t = Modernizr[o[0]];
      if (2 == o.length && (t = t[o[1]]), "undefined" != typeof t) return Modernizr;
      n = "function" == typeof n ? n() : n, 1 == o.length ? Modernizr[o[0]] = n : (!Modernizr[o[0]] || Modernizr[o[0]] instanceof Boolean || (Modernizr[o[0]] = new Boolean(Modernizr[o[0]])), Modernizr[o[0]][o[1]] = n), a([(n && 0 != n ? "" : "no-") + o.join("-")]), Modernizr._trigger(e, n)
    }
    return Modernizr
  }
  var s = [],
    r = [],
    l = {
      _version: "3.6.0",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0
      },
      _q: [],
      on: function (e, n) {
        var A = this;
        setTimeout(function () {
          n(A[e])
        }, 0)
      },
      addTest: function (e, n, A) {
        r.push({
          name: e,
          fn: n,
          options: A
        })
      },
      addAsyncTest: function (e) {
        r.push({
          name: null,
          fn: e
        })
      }
    },
    Modernizr = function () {};
  Modernizr.prototype = l, Modernizr = new Modernizr;
  var f, u = n.documentElement,
    c = "svg" === u.nodeName.toLowerCase();
  ! function () {
    var e = {}.hasOwnProperty;
    f = o(e, "undefined") || o(e.call, "undefined") ? function (e, n) {
      return n in e && o(e.constructor.prototype[n], "undefined")
    } : function (n, A) {
      return e.call(n, A)
    }
  }(), l._l = {}, l.on = function (e, n) {
    this._l[e] || (this._l[e] = []), this._l[e].push(n), Modernizr.hasOwnProperty(e) && setTimeout(function () {
      Modernizr._trigger(e, Modernizr[e])
    }, 0)
  }, l._trigger = function (e, n) {
    if (this._l[e]) {
      var A = this._l[e];
      setTimeout(function () {
        var e, o;
        for (e = 0; e < A.length; e++)(o = A[e])(n)
      }, 0), delete this._l[e]
    }
  }, Modernizr._q.push(function () {
    l.addTest = i
  }), Modernizr.addAsyncTest(function () {
    function e(e, n, A) {
      function o(n) {
        var o = n && "load" === n.type ? 1 == t.width : !1,
          a = "webp" === e;
        i(e, a && o ? new Boolean(o) : o), A && A(n)
      }
      var t = new Image;
      t.onerror = o, t.onload = o, t.src = n
    }
    var n = [{
        uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",
        name: "webp"
      }, {
        uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",
        name: "webp.alpha"
      }, {
        uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
        name: "webp.animation"
      }, {
        uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
        name: "webp.lossless"
      }],
      A = n.shift();
    e(A.name, A.uri, function (A) {
      if (A && "load" === A.type)
        for (var o = 0; o < n.length; o++) e(n[o].name, n[o].uri)
    })
  }), t(), a(s), delete l.addTest, delete l.addAsyncTest;
  for (var p = 0; p < Modernizr._q.length; p++) Modernizr._q[p]();
  e.Modernizr = Modernizr
}(window, document);

/**
 * Zenscroll 4.0.2
 * https://github.com/zengabor/zenscroll/
 *
 * Copyright 2015–2018 Gabor Lenard
 *
 * This is free and unencumbered software released into the public domain.
 *
 * Anyone is free to copy, modify, publish, use, compile, sell, or
 * distribute this software, either in source code form or as a compiled
 * binary, for any purpose, commercial or non-commercial, and by any
 * means.
 *
 * In jurisdictions that recognize copyright laws, the author or authors
 * of this software dedicate any and all copyright interest in the
 * software to the public domain. We make this dedication for the benefit
 * of the public at large and to the detriment of our heirs and
 * successors. We intend this dedication to be an overt act of
 * relinquishment in perpetuity of all present and future rights to this
 * software under copyright law.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 * For more information, please refer to <http://unlicense.org>
 *
 */

/*jshint devel:true, asi:true */

/*global define, module */


(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory())
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory()
  } else {
    (function install() {
      // To make sure Zenscroll can be referenced from the header, before `body` is available
      if (document && document.body) {
        root.zenscroll = factory()
      } else {
        // retry 9ms later
        setTimeout(install, 9)
      }
    })()
  }
}(this, function () {
  "use strict"


  // Detect if the browser already supports native smooth scrolling (e.g., Firefox 36+ and Chrome 49+) and it is enabled:
  var isNativeSmoothScrollEnabledOn = function (elem) {
    return elem && "getComputedStyle" in window &&
      window.getComputedStyle(elem)["scroll-behavior"] === "smooth"
  }


  // Exit if it’s not a browser environment:
  if (typeof window === "undefined" || !("document" in window)) {
    return {}
  }


  var makeScroller = function (container, defaultDuration, edgeOffset) {

    // Use defaults if not provided
    defaultDuration = defaultDuration || 999 //ms
    if (!edgeOffset && edgeOffset !== 0) {
      // When scrolling, this amount of distance is kept from the edges of the container:
      edgeOffset = 9 //px
    }

    // Handling the life-cycle of the scroller
    var scrollTimeoutId
    var setScrollTimeoutId = function (newValue) {
      scrollTimeoutId = newValue
    }

    /**
     * Stop the current smooth scroll operation immediately
     */
    var stopScroll = function () {
      clearTimeout(scrollTimeoutId)
      setScrollTimeoutId(0)
    }

    var getTopWithEdgeOffset = function (elem) {
      return Math.max(0, container.getTopOf(elem) - edgeOffset)
    }

    /**
     * Scrolls to a specific vertical position in the document.
     *
     * @param {targetY} The vertical position within the document.
     * @param {duration} Optionally the duration of the scroll operation.
     *        If not provided the default duration is used.
     * @param {onDone} An optional callback function to be invoked once the scroll finished.
     */
    var scrollToY = function (targetY, duration, onDone) {
      stopScroll()
      if (duration === 0 || (duration && duration < 0) || isNativeSmoothScrollEnabledOn(container.body)) {
        container.toY(targetY)
        if (onDone) {
          onDone()
        }
      } else {
        var startY = container.getY()
        var distance = Math.max(0, targetY) - startY
        var startTime = new Date().getTime()
        duration = duration || Math.min(Math.abs(distance), defaultDuration);
        (function loopScroll() {
          setScrollTimeoutId(setTimeout(function () {
            // Calculate percentage:
            var p = Math.min(1, (new Date().getTime() - startTime) / duration)
            // Calculate the absolute vertical position:
            var y = Math.max(0, Math.floor(startY + distance * (p < 0.5 ? 2 * p * p : p * (4 - p * 2) - 1)))
            container.toY(y)
            if (p < 1 && (container.getHeight() + y) < container.body.scrollHeight) {
              loopScroll()
            } else {
              setTimeout(stopScroll, 99) // with cooldown time
              if (onDone) {
                onDone()
              }
            }
          }, 9))
        })()
      }
    }

    /**
     * Scrolls to the top of a specific element.
     *
     * @param {elem} The element to scroll to.
     * @param {duration} Optionally the duration of the scroll operation.
     * @param {onDone} An optional callback function to be invoked once the scroll finished.
     */
    var scrollToElem = function (elem, duration, onDone) {
      scrollToY(getTopWithEdgeOffset(elem), duration, onDone)
    }

    /**
     * Scrolls an element into view if necessary.
     *
     * @param {elem} The element.
     * @param {duration} Optionally the duration of the scroll operation.
     * @param {onDone} An optional callback function to be invoked once the scroll finished.
     */
    var scrollIntoView = function (elem, duration, onDone) {
      var elemHeight = elem.getBoundingClientRect().height
      var elemBottom = container.getTopOf(elem) + elemHeight
      var containerHeight = container.getHeight()
      var y = container.getY()
      var containerBottom = y + containerHeight
      if (getTopWithEdgeOffset(elem) < y || (elemHeight + edgeOffset) > containerHeight) {
        // Element is clipped at top or is higher than screen.
        scrollToElem(elem, duration, onDone)
      } else if ((elemBottom + edgeOffset) > containerBottom) {
        // Element is clipped at the bottom.
        scrollToY(elemBottom - containerHeight + edgeOffset, duration, onDone)
      } else if (onDone) {
        onDone()
      }
    }

    /**
     * Scrolls to the center of an element.
     *
     * @param {elem} The element.
     * @param {duration} Optionally the duration of the scroll operation.
     * @param {offset} Optionally the offset of the top of the element from the center of the screen.
     *        A value of 0 is ignored.
     * @param {onDone} An optional callback function to be invoked once the scroll finished.
     */
    var scrollToCenterOf = function (elem, duration, offset, onDone) {
      scrollToY(Math.max(0, container.getTopOf(elem) - container.getHeight() / 2 + (offset || elem.getBoundingClientRect().height / 2)), duration, onDone)
    }

    /**
     * Changes default settings for this scroller.
     *
     * @param {newDefaultDuration} Optionally a new value for default duration, used for each scroll method by default.
     *        Ignored if null or undefined.
     * @param {newEdgeOffset} Optionally a new value for the edge offset, used by each scroll method by default. Ignored if null or undefined.
     * @returns An object with the current values.
     */
    var setup = function (newDefaultDuration, newEdgeOffset) {
      if (newDefaultDuration === 0 || newDefaultDuration) {
        defaultDuration = newDefaultDuration
      }
      if (newEdgeOffset === 0 || newEdgeOffset) {
        edgeOffset = newEdgeOffset
      }
      return {
        defaultDuration: defaultDuration,
        edgeOffset: edgeOffset
      }
    }

    return {
      setup: setup,
      to: scrollToElem,
      toY: scrollToY,
      intoView: scrollIntoView,
      center: scrollToCenterOf,
      stop: stopScroll,
      moving: function () {
        return !!scrollTimeoutId
      },
      getY: container.getY,
      getTopOf: container.getTopOf
    }

  }


  var docElem = document.documentElement
  var getDocY = function () {
    return window.scrollY || docElem.scrollTop
  }

  // Create a scroller for the document:
  var zenscroll = makeScroller({
    body: document.scrollingElement || document.body,
    toY: function (y) {
      window.scrollTo(0, y)
    },
    getY: getDocY,
    getHeight: function () {
      return window.innerHeight || docElem.clientHeight
    },
    getTopOf: function (elem) {
      return elem.getBoundingClientRect().top + getDocY() - docElem.offsetTop
    }
  })


  /**
   * Creates a scroller from the provided container element (e.g., a DIV)
   *
   * @param {scrollContainer} The vertical position within the document.
   * @param {defaultDuration} Optionally a value for default duration, used for each scroll method by default.
   *        Ignored if 0 or null or undefined.
   * @param {edgeOffset} Optionally a value for the edge offset, used by each scroll method by default.
   *        Ignored if null or undefined.
   * @returns A scroller object, similar to `zenscroll` but controlling the provided element.
   */
  zenscroll.createScroller = function (scrollContainer, defaultDuration, edgeOffset) {
    return makeScroller({
      body: scrollContainer,
      toY: function (y) {
        scrollContainer.scrollTop = y
      },
      getY: function () {
        return scrollContainer.scrollTop
      },
      getHeight: function () {
        return Math.min(scrollContainer.clientHeight, window.innerHeight || docElem.clientHeight)
      },
      getTopOf: function (elem) {
        return elem.offsetTop
      }
    }, defaultDuration, edgeOffset)
  }


  // Automatic link-smoothing on achors
  // Exclude IE8- or when native is enabled or Zenscroll auto- is disabled
  if ("addEventListener" in window && !window.noZensmooth && !isNativeSmoothScrollEnabledOn(document.body)) {

    var isHistorySupported = "history" in window && "pushState" in history
    var isScrollRestorationSupported = isHistorySupported && "scrollRestoration" in history

    // On first load & refresh make sure the browser restores the position first
    if (isScrollRestorationSupported) {
      history.scrollRestoration = "auto"
    }

    window.addEventListener("load", function () {

      if (isScrollRestorationSupported) {
        // Set it to manual
        setTimeout(function () {
          history.scrollRestoration = "manual"
        }, 9)
        window.addEventListener("popstate", function (event) {
          if (event.state && "zenscrollY" in event.state) {
            zenscroll.toY(event.state.zenscrollY)
          }
        }, false)
      }

      // Add edge offset on first load if necessary
      // This may not work on IE (or older computer?) as it requires more timeout, around 100 ms
      if (window.location.hash) {
        setTimeout(function () {
          // Adjustment is only needed if there is an edge offset:
          var edgeOffset = zenscroll.setup().edgeOffset
          if (edgeOffset) {
            var targetElem = document.getElementById(window.location.href.split("#")[1])
            if (targetElem) {
              var targetY = Math.max(0, zenscroll.getTopOf(targetElem) - edgeOffset)
              var diff = zenscroll.getY() - targetY
              // Only do the adjustment if the browser is very close to the element:
              if (0 <= diff && diff < 9) {
                window.scrollTo(0, targetY)
              }
            }
          }
        }, 9)
      }

    }, false)

    // Handling clicks on anchors
    var RE_noZensmooth = new RegExp("(^|\\s)noZensmooth(\\s|$)")
    window.addEventListener("click", function (event) {
      var anchor = event.target
      while (anchor && anchor.tagName !== "A") {
        anchor = anchor.parentNode
      }
      // Let the browser handle the click if it wasn't with the primary button, or with some modifier keys:
      if (!anchor || event.which !== 1 || event.shiftKey || event.metaKey || event.ctrlKey || event.altKey) {
        return
      }
      // Save the current scrolling position so it can be used for scroll restoration:
      if (isScrollRestorationSupported) {
        var historyState = history.state && typeof history.state === "object" ? history.state : {}
        historyState.zenscrollY = zenscroll.getY()
        try {
          history.replaceState(historyState, "")
        } catch (e) {
          // Avoid the Chrome Security exception on file protocol, e.g., file://index.html
        }
      }
      // Find the referenced ID:
      var href = anchor.getAttribute("href") || ""
      if (href.indexOf("#") === 0 && !RE_noZensmooth.test(anchor.className)) {
        var targetY = 0
        var targetElem = document.getElementById(href.substring(1))
        if (href !== "#") {
          if (!targetElem) {
            // Let the browser handle the click if the target ID is not found.
            return
          }
          targetY = zenscroll.getTopOf(targetElem)
        }
        event.preventDefault()
        // By default trigger the browser's `hashchange` event...
        var onDone = function () {
          window.location = href
        }
        // ...unless there is an edge offset specified
        var edgeOffset = zenscroll.setup().edgeOffset
        if (edgeOffset) {
          targetY = Math.max(0, targetY - edgeOffset)
          if (isHistorySupported) {
            onDone = function () {
              history.pushState({}, "", href)
            }
          }
        }
        zenscroll.toY(targetY, null, onDone)
      }
    }, false)

  }


  return zenscroll


}));
