/**
 * =============================================================================
 *  Scroll spy
 * =============================================================================
 *
 *  Active anchor element while scroll to target element
 *    Anchor: <a href="#target">
 *    Target: <div id="target">
 *  Useage:
 *    Single: window.scrollSpy(option);
 *    Hierarchy (need to call twice or more):
 *      window.scrollSpy({ anchorSelector: ".level-0", ... });
 *      window.scrollSpy({ anchorSelector: ".level-1", ... });
 *  Compatibility:
 *    Use ECMAScript 5: Array.forEach, Array.reduce
 *    Use DOM 3: querySelectorAll, classList
 *
 * =============================================================================
 *
 * @author dondevi
 * @create 2014-06-25
 *
 * @update 2017-04-12 dondevi
 *   1.Rebuild
 * @update 2017-09-20 dondevi
 *   1.Rebuild: getTargetsRect()
 * @update 2017-12-09 dondevi
 *   1.Rebuild & Update
 *
 */

(function (window, document) {

  "use strict";

  /**
   * Scroll Spy
   * @param {Object} option
   * @param {String} option.spyType        - The way to spy target elements. [continuous | accurate]
   * @param {Number} option.spyOffset      - Offset from top side of viewport
   * @param {String} option.activeClass    - CSS Class for active anchor
   * @param {String} option.anchorSelector - Selector for anchors which need to be spied
   */
  window.scrollSpy = function (option) {
    // Settings
    option = Object.assign({
      spyType:        "continuous",
      spyOffset:      130,
      activeClass:    "active",
      anchorSelector: "a[href^=\"#\"]",
    }, option);
    // Handle scroll event
    window.addEventListener("scroll", getScrollHandler(option));
  };

  /**
   * Get scroll event handler
   * @param  {Object} option - Option from scrollSpy()
   * @return {Function}
   */
  function getScrollHandler (option) {
    var anchors = getElements(option.anchorSelector);
    var targetsRect = getTargetsRect(anchors, option.spyType);

    var timer = -1;
    function scrollHandler (event) {
      window.clearTimeout(timer);
      timer = window.setTimeout(function () {
        checkAnchorActive(anchors, targetsRect, option.spyOffset, option.activeClass);
      }, 300);
    };

    scrollHandler(); // The first time
    return scrollHandler;
  }

  /**
   * Check which anchor show be actived
   */
  function checkAnchorActive (anchors, targetsRect, spyOffset, activeClass) {
    var scrollTop = getScrollTop(spyOffset);
    anchors.forEach(function (anchor) {
      var targetId   = anchor.hash.slice(1);
      var targetRect = targetsRect[targetId];
      if (targetRect.top < scrollTop && targetRect.bottom > scrollTop) {
        anchor.classList.add(activeClass);
        anchor.scrollIntoViewIfNeeded();
      } else {
        anchor.classList.remove(activeClass);
      }
    });
  }

  /**
   * Get position of each target elements
   * @param {NodeList} anchors
   * @param {String} spyType
   * @return {Object}
   */
  function getTargetsRect (anchors, spyType) {
    switch (spyType) {
      case "Accurate":
        return getTargetsRectAccurate(anchors);
      case "continuous":
        return getTargetsRectContinuous(anchors);
    }
  }

  /**
   * Get position of each target elements accurately
   * @param {NodeList} anchors
   * @return {Object}
   */
  function getTargetsRectAccurate (anchors) {
    var scrollTop = getScrollTop();
    return anchors.reduce(function (targetsRect, anchor) {
      var targetId = anchor.hash.slice(1);
      var target   = document.getElementById(targetId);
      if (target && target.offsetParent) {
        var targetRect = target.getBoundingClientRect();
        targetsRect[targetId] = {
          top: targetRect.top + scrollTop,
          bottom: targetRect.bottom + scrollTop,
        };
      }
      return targetsRect;
    }, {});
  }

  /**
   * Get position of each target elements continuously
   * @param {NodeList} anchors
   * @return {Object}
   */
  function getTargetsRectContinuous (anchors) {
    var scrollTop = getScrollTop();
    var targetsRectArray = anchors.map(function (anchor) {
      var targetId = anchor.hash.slice(1);
      var target   = document.getElementById(targetId);
      if (target && target.offsetParent) {
        var targetRect = target.getBoundingClientRect();
        return {
          id: targetId,
          top: targetRect.top + scrollTop,
          bottom: targetRect.bottom  + scrollTop,
        };
      }
    }).filter(function (targetRect) {
      return targetRect;
    }).sort(function (targetRectA, targetRectB) {
      return targetRectB.top - targetRectA.top;
    });

    targetsRectArray.reduce(function (targetsRectPre, targetsRectCur) {
      targetsRectCur.bottom = targetsRectPre.top;
      return targetsRectCur;
    }, { top: document.body.scrollHeight });

    return targetsRectArray.reduce(function (targetsRect, targetRect) {
      targetsRect[targetRect.id] = targetRect;
      return targetsRect;
    }, {});
  }

  /**
   * Get Elements Array
   * @param {String} selector
   * @return {Array[DOM]}
   */
  function getElements (selector) {
    var elements = document.querySelectorAll(selector);
    return toArray(elements);
  }

  /**
   * Get current scroll top
   * @param  {Number} offset
   * @return {Array}
   */
  function getScrollTop (offset) {
    var scrollTop = document.body.scrollTop ||
                    document.documentElement.scrollTop;
    return scrollTop + (offset || 0);
  }

  /**
   * Convert array-like object to array
   * @param  {Object} arrayLike
   * @return {Array}
   */
  function toArray (arrayLike) {
    return Array.prototype.slice.call(arrayLike);
  }


})(window, document);
