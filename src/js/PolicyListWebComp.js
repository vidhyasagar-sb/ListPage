/* eslint-disable */
/*! For license information please see main.d3a4a228.js.LICENSE.txt */
(() => {
  var e = {
      144: (e, t, n) => {
        "use strict";
        var r = n(60),
          o = n(724);
        function a(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          s = {};
        function l(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (s[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function g(e, t, n, r, o, a, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = o),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = a),
            (this.removeEmptyString = i);
        }
        var m = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            m[e] = new g(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            m[t] = new g(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              m[e] = new g(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            m[e] = new g(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              m[e] = new g(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            m[e] = new g(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            m[e] = new g(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            m[e] = new g(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            m[e] = new g(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var v = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var o = m.hasOwnProperty(t) ? m[t] : null;
          (null !== o
            ? 0 !== o.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, o, r) && (n = null),
            r || null === o
              ? (function (e) {
                  return (
                    !!d.call(h, e) ||
                    (!d.call(p, e) &&
                      (f.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : o.mustUseProperty
              ? (e[o.propertyName] = null === n ? 3 !== o.type && "" : n)
              : ((t = o.attributeName),
                (r = o.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (o = o.type) || (4 === o && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(v, y);
            m[t] = new g(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(v, y);
              m[t] = new g(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(v, y);
            m[t] = new g(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            m[e] = new g(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (m.xlinkHref = new g(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            m[e] = new g(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          x = Symbol.for("react.element"),
          S = Symbol.for("react.portal"),
          k = Symbol.for("react.fragment"),
          E = Symbol.for("react.strict_mode"),
          C = Symbol.for("react.profiler"),
          O = Symbol.for("react.provider"),
          P = Symbol.for("react.context"),
          N = Symbol.for("react.forward_ref"),
          _ = Symbol.for("react.suspense"),
          L = Symbol.for("react.suspense_list"),
          T = Symbol.for("react.memo"),
          R = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var j = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var D = Symbol.iterator;
        function I(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (D && e[D]) || e["@@iterator"])
            ? e
            : null;
        }
        var A,
          F = Object.assign;
        function M(e) {
          if (void 0 === A)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              A = (t && t[1]) || "";
            }
          return "\n" + A + e;
        }
        var z = !1;
        function B(e, t) {
          if (!e || z) return "";
          z = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var o = u.stack.split("\n"),
                  a = r.stack.split("\n"),
                  i = o.length - 1,
                  s = a.length - 1;
                1 <= i && 0 <= s && o[i] !== a[s];

              )
                s--;
              for (; 1 <= i && 0 <= s; i--, s--)
                if (o[i] !== a[s]) {
                  if (1 !== i || 1 !== s)
                    do {
                      if ((i--, 0 > --s || o[i] !== a[s])) {
                        var l = "\n" + o[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            l.includes("<anonymous>") &&
                            (l = l.replace("<anonymous>", e.displayName)),
                          l
                        );
                      }
                    } while (1 <= i && 0 <= s);
                  break;
                }
            }
          } finally {
            (z = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? M(e) : "";
        }
        function U(e) {
          switch (e.tag) {
            case 5:
              return M(e.type);
            case 16:
              return M("Lazy");
            case 13:
              return M("Suspense");
            case 19:
              return M("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = B(e.type, !1));
            case 11:
              return (e = B(e.type.render, !1));
            case 1:
              return (e = B(e.type, !0));
            default:
              return "";
          }
        }
        function H(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case k:
              return "Fragment";
            case S:
              return "Portal";
            case C:
              return "Profiler";
            case E:
              return "StrictMode";
            case _:
              return "Suspense";
            case L:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case P:
                return (e.displayName || "Context") + ".Consumer";
              case O:
                return (e._context.displayName || "Context") + ".Provider";
              case N:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case T:
                return null !== (t = e.displayName || null)
                  ? t
                  : H(e.type) || "Memo";
              case R:
                (t = e._payload), (e = e._init);
                try {
                  return H(e(t));
                } catch (n) {}
            }
          return null;
        }
        function Z(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return H(t);
            case 8:
              return t === E ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function V(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function W(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function $(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = W(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var o = n.get,
                  a = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return o.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), a.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function K(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = W(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function q(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Q(e, t) {
          var n = t.checked;
          return F({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function J(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = V(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function G(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function Y(e, t) {
          G(e, t);
          var n = V(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, V(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function X(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && q(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
            for (n = 0; n < e.length; n++)
              (o = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + V(n), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === n)
                return (
                  (e[o].selected = !0), void (r && (e[o].defaultSelected = !0))
                );
              null !== t || e[o].disabled || (t = e[o]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
          return F({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function oe(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(a(92));
              if (te(n)) {
                if (1 < n.length) throw Error(a(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: V(n) };
        }
        function ae(e, t) {
          var n = V(t.value),
            r = V(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function se(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function le(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? se(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          ce,
          de =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function ge(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function me(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                o = ge(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, o) : (e[n] = o);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ve = F(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, t) {
          if (t) {
            if (
              ve[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(a(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(a(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(a(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(a(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function xe(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Se = null,
          ke = null,
          Ee = null;
        function Ce(e) {
          if ((e = wo(e))) {
            if ("function" !== typeof Se) throw Error(a(280));
            var t = e.stateNode;
            t && ((t = So(t)), Se(e.stateNode, e.type, t));
          }
        }
        function Oe(e) {
          ke ? (Ee ? Ee.push(e) : (Ee = [e])) : (ke = e);
        }
        function Pe() {
          if (ke) {
            var e = ke,
              t = Ee;
            if (((Ee = ke = null), Ce(e), t))
              for (e = 0; e < t.length; e++) Ce(t[e]);
          }
        }
        function Ne(e, t) {
          return e(t);
        }
        function _e() {}
        var Le = !1;
        function Te(e, t, n) {
          if (Le) return e(t, n);
          Le = !0;
          try {
            return Ne(e, t, n);
          } finally {
            (Le = !1), (null !== ke || null !== Ee) && (_e(), Pe());
          }
        }
        function Re(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = So(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(a(231, t, typeof n));
          return n;
        }
        var je = !1;
        if (c)
          try {
            var De = {};
            Object.defineProperty(De, "passive", {
              get: function () {
                je = !0;
              },
            }),
              window.addEventListener("test", De, De),
              window.removeEventListener("test", De, De);
          } catch (ce) {
            je = !1;
          }
        function Ie(e, t, n, r, o, a, i, s, l) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var Ae = !1,
          Fe = null,
          Me = !1,
          ze = null,
          Be = {
            onError: function (e) {
              (Ae = !0), (Fe = e);
            },
          };
        function Ue(e, t, n, r, o, a, i, s, l) {
          (Ae = !1), (Fe = null), Ie.apply(Be, arguments);
        }
        function He(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ze(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ve(e) {
          if (He(e) !== e) throw Error(a(188));
        }
        function We(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = He(e))) throw Error(a(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var o = n.return;
                if (null === o) break;
                var i = o.alternate;
                if (null === i) {
                  if (null !== (r = o.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (o.child === i.child) {
                  for (i = o.child; i; ) {
                    if (i === n) return Ve(o), e;
                    if (i === r) return Ve(o), t;
                    i = i.sibling;
                  }
                  throw Error(a(188));
                }
                if (n.return !== r.return) (n = o), (r = i);
                else {
                  for (var s = !1, l = o.child; l; ) {
                    if (l === n) {
                      (s = !0), (n = o), (r = i);
                      break;
                    }
                    if (l === r) {
                      (s = !0), (r = o), (n = i);
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!s) {
                    for (l = i.child; l; ) {
                      if (l === n) {
                        (s = !0), (n = i), (r = o);
                        break;
                      }
                      if (l === r) {
                        (s = !0), (r = i), (n = o);
                        break;
                      }
                      l = l.sibling;
                    }
                    if (!s) throw Error(a(189));
                  }
                }
                if (n.alternate !== r) throw Error(a(190));
              }
              if (3 !== n.tag) throw Error(a(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? $e(e)
            : null;
        }
        function $e(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = $e(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Ke = o.unstable_scheduleCallback,
          qe = o.unstable_cancelCallback,
          Qe = o.unstable_shouldYield,
          Je = o.unstable_requestPaint,
          Ge = o.unstable_now,
          Ye = o.unstable_getCurrentPriorityLevel,
          Xe = o.unstable_ImmediatePriority,
          et = o.unstable_UserBlockingPriority,
          tt = o.unstable_NormalPriority,
          nt = o.unstable_LowPriority,
          rt = o.unstable_IdlePriority,
          ot = null,
          at = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((st(e) / lt) | 0)) | 0;
              },
          st = Math.log,
          lt = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            o = e.suspendedLanes,
            a = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var s = i & ~o;
            0 !== s ? (r = dt(s)) : 0 !== (a &= i) && (r = dt(a));
          } else 0 !== (i = n & ~o) ? (r = dt(i)) : 0 !== a && (r = dt(a));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & o) &&
            ((o = r & -r) >= (a = t & -t) || (16 === o && 0 !== (4194240 & a)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (o = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~o);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function gt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function mt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function vt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              o = 1 << r;
            (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var xt,
          St,
          kt,
          Et,
          Ct,
          Ot = !1,
          Pt = [],
          Nt = null,
          _t = null,
          Lt = null,
          Tt = new Map(),
          Rt = new Map(),
          jt = [],
          Dt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function It(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Nt = null;
              break;
            case "dragenter":
            case "dragleave":
              _t = null;
              break;
            case "mouseover":
            case "mouseout":
              Lt = null;
              break;
            case "pointerover":
            case "pointerout":
              Tt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Rt.delete(t.pointerId);
          }
        }
        function At(e, t, n, r, o, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [o],
              }),
              null !== t && null !== (t = wo(t)) && St(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== o && -1 === t.indexOf(o) && t.push(o),
              e);
        }
        function Ft(e) {
          var t = bo(e.target);
          if (null !== t) {
            var n = He(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ze(n)))
                  return (
                    (e.blockedOn = t),
                    void Ct(e.priority, function () {
                      kt(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Mt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = wo(n)) && St(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function zt(e, t, n) {
          Mt(e) && n.delete(t);
        }
        function Bt() {
          (Ot = !1),
            null !== Nt && Mt(Nt) && (Nt = null),
            null !== _t && Mt(_t) && (_t = null),
            null !== Lt && Mt(Lt) && (Lt = null),
            Tt.forEach(zt),
            Rt.forEach(zt);
        }
        function Ut(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Ot ||
              ((Ot = !0),
              o.unstable_scheduleCallback(o.unstable_NormalPriority, Bt)));
        }
        function Ht(e) {
          function t(t) {
            return Ut(t, e);
          }
          if (0 < Pt.length) {
            Ut(Pt[0], e);
            for (var n = 1; n < Pt.length; n++) {
              var r = Pt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Nt && Ut(Nt, e),
              null !== _t && Ut(_t, e),
              null !== Lt && Ut(Lt, e),
              Tt.forEach(t),
              Rt.forEach(t),
              n = 0;
            n < jt.length;
            n++
          )
            (r = jt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < jt.length && null === (n = jt[0]).blockedOn; )
            Ft(n), null === n.blockedOn && jt.shift();
        }
        var Zt = w.ReactCurrentBatchConfig,
          Vt = !0;
        function Wt(e, t, n, r) {
          var o = bt,
            a = Zt.transition;
          Zt.transition = null;
          try {
            (bt = 1), Kt(e, t, n, r);
          } finally {
            (bt = o), (Zt.transition = a);
          }
        }
        function $t(e, t, n, r) {
          var o = bt,
            a = Zt.transition;
          Zt.transition = null;
          try {
            (bt = 4), Kt(e, t, n, r);
          } finally {
            (bt = o), (Zt.transition = a);
          }
        }
        function Kt(e, t, n, r) {
          if (Vt) {
            var o = Qt(e, t, n, r);
            if (null === o) Vr(e, t, r, qt, n), It(e, r);
            else if (
              (function (e, t, n, r, o) {
                switch (t) {
                  case "focusin":
                    return (Nt = At(Nt, e, t, n, r, o)), !0;
                  case "dragenter":
                    return (_t = At(_t, e, t, n, r, o)), !0;
                  case "mouseover":
                    return (Lt = At(Lt, e, t, n, r, o)), !0;
                  case "pointerover":
                    var a = o.pointerId;
                    return Tt.set(a, At(Tt.get(a) || null, e, t, n, r, o)), !0;
                  case "gotpointercapture":
                    return (
                      (a = o.pointerId),
                      Rt.set(a, At(Rt.get(a) || null, e, t, n, r, o)),
                      !0
                    );
                }
                return !1;
              })(o, e, t, n, r)
            )
              r.stopPropagation();
            else if ((It(e, r), 4 & t && -1 < Dt.indexOf(e))) {
              for (; null !== o; ) {
                var a = wo(o);
                if (
                  (null !== a && xt(a),
                  null === (a = Qt(e, t, n, r)) && Vr(e, t, r, qt, n),
                  a === o)
                )
                  break;
                o = a;
              }
              null !== o && r.stopPropagation();
            } else Vr(e, t, r, null, n);
          }
        }
        var qt = null;
        function Qt(e, t, n, r) {
          if (((qt = null), null !== (e = bo((e = xe(r))))))
            if (null === (t = He(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Ze(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (qt = e), null;
        }
        function Jt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ye()) {
                case Xe:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Gt = null,
          Yt = null,
          Xt = null;
        function en() {
          if (Xt) return Xt;
          var e,
            t,
            n = Yt,
            r = n.length,
            o = "value" in Gt ? Gt.value : Gt.textContent,
            a = o.length;
          for (e = 0; e < r && n[e] === o[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === o[a - t]; t++);
          return (Xt = o.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function on(e) {
          function t(t, n, r, o, a) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = o),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(o) : o[i]));
            return (
              (this.isDefaultPrevented = (
                null != o.defaultPrevented
                  ? o.defaultPrevented
                  : !1 === o.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            F(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var an,
          sn,
          ln,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = on(un),
          dn = F({}, un, { view: 0, detail: 0 }),
          fn = on(dn),
          pn = F({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== ln &&
                    (ln && "mousemove" === e.type
                      ? ((an = e.screenX - ln.screenX),
                        (sn = e.screenY - ln.screenY))
                      : (sn = an = 0),
                    (ln = e)),
                  an);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : sn;
            },
          }),
          hn = on(pn),
          gn = on(F({}, pn, { dataTransfer: 0 })),
          mn = on(F({}, dn, { relatedTarget: 0 })),
          vn = on(
            F({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = F({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = on(yn),
          wn = on(F({}, un, { data: 0 })),
          xn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          Sn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          kn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function En(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = kn[e]) && !!t[e];
        }
        function Cn() {
          return En;
        }
        var On = F({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = xn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? Sn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Pn = on(On),
          Nn = on(
            F({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          _n = on(
            F({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            })
          ),
          Ln = on(
            F({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Tn = F({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Rn = on(Tn),
          jn = [9, 13, 27, 32],
          Dn = c && "CompositionEvent" in window,
          In = null;
        c && "documentMode" in document && (In = document.documentMode);
        var An = c && "TextEvent" in window && !In,
          Fn = c && (!Dn || (In && 8 < In && 11 >= In)),
          Mn = String.fromCharCode(32),
          zn = !1;
        function Bn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== jn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Un(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Hn = !1;
        var Zn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Vn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Zn[e.type] : "textarea" === t;
        }
        function Wn(e, t, n, r) {
          Oe(r),
            0 < (t = $r(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var $n = null,
          Kn = null;
        function qn(e) {
          Mr(e, 0);
        }
        function Qn(e) {
          if (K(xo(e))) return e;
        }
        function Jn(e, t) {
          if ("change" === e) return t;
        }
        var Gn = !1;
        if (c) {
          var Yn;
          if (c) {
            var Xn = "oninput" in document;
            if (!Xn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Xn = "function" === typeof er.oninput);
            }
            Yn = Xn;
          } else Yn = !1;
          Gn = Yn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          $n && ($n.detachEvent("onpropertychange", nr), (Kn = $n = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Qn(Kn)) {
            var t = [];
            Wn(t, Kn, e, xe(e)), Te(qn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Kn = n), ($n = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function or(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Qn(Kn);
        }
        function ar(e, t) {
          if ("click" === e) return Qn(t);
        }
        function ir(e, t) {
          if ("input" === e || "change" === e) return Qn(t);
        }
        var sr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function lr(e, t) {
          if (sr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var o = n[r];
            if (!d.call(t, o) || !sr(e[o], t[o])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = q((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var o = n.textContent.length,
                  a = Math.min(r.start, o);
                (r = void 0 === r.end ? a : Math.min(r.end, o)),
                  !e.extend && a > r && ((o = r), (r = a), (a = o)),
                  (o = cr(n, a));
                var i = cr(n, r);
                o &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== o.node ||
                    e.anchorOffset !== o.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(o.node, o.offset),
                  e.removeAllRanges(),
                  a > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var gr = c && "documentMode" in document && 11 >= document.documentMode,
          mr = null,
          vr = null,
          yr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == mr ||
            mr !== q(r) ||
            ("selectionStart" in (r = mr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && lr(yr, r)) ||
              ((yr = r),
              0 < (r = $r(vr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = mr))));
        }
        function xr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var Sr = {
            animationend: xr("Animation", "AnimationEnd"),
            animationiteration: xr("Animation", "AnimationIteration"),
            animationstart: xr("Animation", "AnimationStart"),
            transitionend: xr("Transition", "TransitionEnd"),
          },
          kr = {},
          Er = {};
        function Cr(e) {
          if (kr[e]) return kr[e];
          if (!Sr[e]) return e;
          var t,
            n = Sr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Er) return (kr[e] = n[t]);
          return e;
        }
        c &&
          ((Er = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete Sr.animationend.animation,
            delete Sr.animationiteration.animation,
            delete Sr.animationstart.animation),
          "TransitionEvent" in window || delete Sr.transitionend.transition);
        var Or = Cr("animationend"),
          Pr = Cr("animationiteration"),
          Nr = Cr("animationstart"),
          _r = Cr("transitionend"),
          Lr = new Map(),
          Tr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Rr(e, t) {
          Lr.set(e, t), l(t, [e]);
        }
        for (var jr = 0; jr < Tr.length; jr++) {
          var Dr = Tr[jr];
          Rr(Dr.toLowerCase(), "on" + (Dr[0].toUpperCase() + Dr.slice(1)));
        }
        Rr(Or, "onAnimationEnd"),
          Rr(Pr, "onAnimationIteration"),
          Rr(Nr, "onAnimationStart"),
          Rr("dblclick", "onDoubleClick"),
          Rr("focusin", "onFocus"),
          Rr("focusout", "onBlur"),
          Rr(_r, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          l(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          l(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          l("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          l(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Ir =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Ar = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Ir)
          );
        function Fr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, o, i, s, l, u) {
              if ((Ue.apply(this, arguments), Ae)) {
                if (!Ae) throw Error(a(198));
                var c = Fe;
                (Ae = !1), (Fe = null), Me || ((Me = !0), (ze = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Mr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              o = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var s = r[i],
                    l = s.instance,
                    u = s.currentTarget;
                  if (((s = s.listener), l !== a && o.isPropagationStopped()))
                    break e;
                  Fr(o, s, u), (a = l);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((l = (s = r[i]).instance),
                    (u = s.currentTarget),
                    (s = s.listener),
                    l !== a && o.isPropagationStopped())
                  )
                    break e;
                  Fr(o, s, u), (a = l);
                }
            }
          }
          if (Me) throw ((e = ze), (Me = !1), (ze = null), e);
        }
        function zr(e, t) {
          var n = t[mo];
          void 0 === n && (n = t[mo] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Zr(t, e, 2, !1), n.add(r));
        }
        function Br(e, t, n) {
          var r = 0;
          t && (r |= 4), Zr(n, e, r, t);
        }
        var Ur = "_reactListening" + Math.random().toString(36).slice(2);
        function Hr(e) {
          if (!e[Ur]) {
            (e[Ur] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (Ar.has(t) || Br(t, !1, e), Br(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Ur] || ((t[Ur] = !0), Br("selectionchange", !1, t));
          }
        }
        function Zr(e, t, n, r) {
          switch (Jt(t)) {
            case 1:
              var o = Wt;
              break;
            case 4:
              o = $t;
              break;
            default:
              o = Kt;
          }
          (n = o.bind(null, t, n, e)),
            (o = void 0),
            !je ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (o = !0),
            r
              ? void 0 !== o
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
              : void 0 !== o
              ? e.addEventListener(t, n, { passive: o })
              : e.addEventListener(t, n, !1);
        }
        function Vr(e, t, n, r, o) {
          var a = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var s = r.stateNode.containerInfo;
                if (s === o || (8 === s.nodeType && s.parentNode === o)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var l = i.tag;
                    if (
                      (3 === l || 4 === l) &&
                      ((l = i.stateNode.containerInfo) === o ||
                        (8 === l.nodeType && l.parentNode === o))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== s; ) {
                  if (null === (i = bo(s))) return;
                  if (5 === (l = i.tag) || 6 === l) {
                    r = a = i;
                    continue e;
                  }
                  s = s.parentNode;
                }
              }
              r = r.return;
            }
          Te(function () {
            var r = a,
              o = xe(n),
              i = [];
            e: {
              var s = Lr.get(e);
              if (void 0 !== s) {
                var l = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    l = Pn;
                    break;
                  case "focusin":
                    (u = "focus"), (l = mn);
                    break;
                  case "focusout":
                    (u = "blur"), (l = mn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    l = mn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    l = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    l = gn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    l = _n;
                    break;
                  case Or:
                  case Pr:
                  case Nr:
                    l = vn;
                    break;
                  case _r:
                    l = Ln;
                    break;
                  case "scroll":
                    l = fn;
                    break;
                  case "wheel":
                    l = Rn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    l = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    l = Nn;
                }
                var c = 0 !== (4 & t),
                  d = !c && "scroll" === e,
                  f = c ? (null !== s ? s + "Capture" : null) : s;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var g = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== g &&
                      ((p = g),
                      null !== f &&
                        null != (g = Re(h, f)) &&
                        c.push(Wr(h, g, p))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((s = new l(s, u, null, n, o)),
                  i.push({ event: s, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((l = "mouseout" === e || "pointerout" === e),
                (!(s = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!bo(u) && !u[go])) &&
                  (l || s) &&
                  ((s =
                    o.window === o
                      ? o
                      : (s = o.ownerDocument)
                      ? s.defaultView || s.parentWindow
                      : window),
                  l
                    ? ((l = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? bo(u)
                          : null) &&
                        (u !== (d = He(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((l = null), (u = r)),
                  l !== u))
              ) {
                if (
                  ((c = hn),
                  (g = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Nn),
                    (g = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (h = "pointer")),
                  (d = null == l ? s : xo(l)),
                  (p = null == u ? s : xo(u)),
                  ((s = new c(g, h + "leave", l, n, o)).target = d),
                  (s.relatedTarget = p),
                  (g = null),
                  bo(o) === r &&
                    (((c = new c(f, h + "enter", u, n, o)).target = p),
                    (c.relatedTarget = d),
                    (g = c)),
                  (d = g),
                  l && u)
                )
                  e: {
                    for (f = u, h = 0, p = c = l; p; p = Kr(p)) h++;
                    for (p = 0, g = f; g; g = Kr(g)) p++;
                    for (; 0 < h - p; ) (c = Kr(c)), h--;
                    for (; 0 < p - h; ) (f = Kr(f)), p--;
                    for (; h--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = Kr(c)), (f = Kr(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== l && qr(i, s, l, c, !1),
                  null !== u && null !== d && qr(i, d, u, c, !0);
              }
              if (
                "select" ===
                  (l =
                    (s = r ? xo(r) : window).nodeName &&
                    s.nodeName.toLowerCase()) ||
                ("input" === l && "file" === s.type)
              )
                var m = Jn;
              else if (Vn(s))
                if (Gn) m = ir;
                else {
                  m = or;
                  var v = rr;
                }
              else
                (l = s.nodeName) &&
                  "input" === l.toLowerCase() &&
                  ("checkbox" === s.type || "radio" === s.type) &&
                  (m = ar);
              switch (
                (m && (m = m(e, r))
                  ? Wn(i, m, n, o)
                  : (v && v(e, s, r),
                    "focusout" === e &&
                      (v = s._wrapperState) &&
                      v.controlled &&
                      "number" === s.type &&
                      ee(s, "number", s.value)),
                (v = r ? xo(r) : window),
                e)
              ) {
                case "focusin":
                  (Vn(v) || "true" === v.contentEditable) &&
                    ((mr = v), (vr = r), (yr = null));
                  break;
                case "focusout":
                  yr = vr = mr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(i, n, o);
                  break;
                case "selectionchange":
                  if (gr) break;
                case "keydown":
                case "keyup":
                  wr(i, n, o);
              }
              var y;
              if (Dn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Hn
                  ? Bn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Fn &&
                  "ko" !== n.locale &&
                  (Hn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Hn && (y = en())
                    : ((Yt = "value" in (Gt = o) ? Gt.value : Gt.textContent),
                      (Hn = !0))),
                0 < (v = $r(r, b)).length &&
                  ((b = new wn(b, e, null, n, o)),
                  i.push({ event: b, listeners: v }),
                  y ? (b.data = y) : null !== (y = Un(n)) && (b.data = y))),
                (y = An
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Un(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((zn = !0), Mn);
                        case "textInput":
                          return (e = t.data) === Mn && zn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Hn)
                        return "compositionend" === e || (!Dn && Bn(e, t))
                          ? ((e = en()), (Xt = Yt = Gt = null), (Hn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Fn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = $r(r, "onBeforeInput")).length &&
                  ((o = new wn("onBeforeInput", "beforeinput", null, n, o)),
                  i.push({ event: o, listeners: r }),
                  (o.data = y));
            }
            Mr(i, t);
          });
        }
        function Wr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function $r(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var o = e,
              a = o.stateNode;
            5 === o.tag &&
              null !== a &&
              ((o = a),
              null != (a = Re(e, n)) && r.unshift(Wr(e, a, o)),
              null != (a = Re(e, t)) && r.push(Wr(e, a, o))),
              (e = e.return);
          }
          return r;
        }
        function Kr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function qr(e, t, n, r, o) {
          for (var a = t._reactName, i = []; null !== n && n !== r; ) {
            var s = n,
              l = s.alternate,
              u = s.stateNode;
            if (null !== l && l === r) break;
            5 === s.tag &&
              null !== u &&
              ((s = u),
              o
                ? null != (l = Re(n, a)) && i.unshift(Wr(n, l, s))
                : o || (null != (l = Re(n, a)) && i.push(Wr(n, l, s)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Qr = /\r\n?/g,
          Jr = /\u0000|\uFFFD/g;
        function Gr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Qr, "\n")
            .replace(Jr, "");
        }
        function Yr(e, t, n) {
          if (((t = Gr(t)), Gr(e) !== t && n)) throw Error(a(425));
        }
        function Xr() {}
        var eo = null,
          to = null;
        function no(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ro = "function" === typeof setTimeout ? setTimeout : void 0,
          oo = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ao = "function" === typeof Promise ? Promise : void 0,
          io =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ao
              ? function (e) {
                  return ao.resolve(null).then(e).catch(so);
                }
              : ro;
        function so(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function lo(e, t) {
          var n = t,
            r = 0;
          do {
            var o = n.nextSibling;
            if ((e.removeChild(n), o && 8 === o.nodeType))
              if ("/$" === (n = o.data)) {
                if (0 === r) return e.removeChild(o), void Ht(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = o;
          } while (n);
          Ht(t);
        }
        function uo(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function co(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fo = Math.random().toString(36).slice(2),
          po = "__reactFiber$" + fo,
          ho = "__reactProps$" + fo,
          go = "__reactContainer$" + fo,
          mo = "__reactEvents$" + fo,
          vo = "__reactListeners$" + fo,
          yo = "__reactHandles$" + fo;
        function bo(e) {
          var t = e[po];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[go] || n[po])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = co(e); null !== e; ) {
                  if ((n = e[po])) return n;
                  e = co(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function wo(e) {
          return !(e = e[po] || e[go]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function xo(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(a(33));
        }
        function So(e) {
          return e[ho] || null;
        }
        var ko = [],
          Eo = -1;
        function Co(e) {
          return { current: e };
        }
        function Oo(e) {
          0 > Eo || ((e.current = ko[Eo]), (ko[Eo] = null), Eo--);
        }
        function Po(e, t) {
          Eo++, (ko[Eo] = e.current), (e.current = t);
        }
        var No = {},
          _o = Co(No),
          Lo = Co(!1),
          To = No;
        function Ro(e, t) {
          var n = e.type.contextTypes;
          if (!n) return No;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var o,
            a = {};
          for (o in n) a[o] = t[o];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            a
          );
        }
        function jo(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Do() {
          Oo(Lo), Oo(_o);
        }
        function Io(e, t, n) {
          if (_o.current !== No) throw Error(a(168));
          Po(_o, t), Po(Lo, n);
        }
        function Ao(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var o in (r = r.getChildContext()))
            if (!(o in t)) throw Error(a(108, Z(e) || "Unknown", o));
          return F({}, n, r);
        }
        function Fo(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              No),
            (To = _o.current),
            Po(_o, e),
            Po(Lo, Lo.current),
            !0
          );
        }
        function Mo(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(a(169));
          n
            ? ((e = Ao(e, t, To)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Oo(Lo),
              Oo(_o),
              Po(_o, e))
            : Oo(Lo),
            Po(Lo, n);
        }
        var zo = null,
          Bo = !1,
          Uo = !1;
        function Ho(e) {
          null === zo ? (zo = [e]) : zo.push(e);
        }
        function Zo() {
          if (!Uo && null !== zo) {
            Uo = !0;
            var e = 0,
              t = bt;
            try {
              var n = zo;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (zo = null), (Bo = !1);
            } catch (o) {
              throw (null !== zo && (zo = zo.slice(e + 1)), Ke(Xe, Zo), o);
            } finally {
              (bt = t), (Uo = !1);
            }
          }
          return null;
        }
        var Vo = [],
          Wo = 0,
          $o = null,
          Ko = 0,
          qo = [],
          Qo = 0,
          Jo = null,
          Go = 1,
          Yo = "";
        function Xo(e, t) {
          (Vo[Wo++] = Ko), (Vo[Wo++] = $o), ($o = e), (Ko = t);
        }
        function ea(e, t, n) {
          (qo[Qo++] = Go), (qo[Qo++] = Yo), (qo[Qo++] = Jo), (Jo = e);
          var r = Go;
          e = Yo;
          var o = 32 - it(r) - 1;
          (r &= ~(1 << o)), (n += 1);
          var a = 32 - it(t) + o;
          if (30 < a) {
            var i = o - (o % 5);
            (a = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (o -= i),
              (Go = (1 << (32 - it(t) + o)) | (n << o) | r),
              (Yo = a + e);
          } else (Go = (1 << a) | (n << o) | r), (Yo = e);
        }
        function ta(e) {
          null !== e.return && (Xo(e, 1), ea(e, 1, 0));
        }
        function na(e) {
          for (; e === $o; )
            ($o = Vo[--Wo]), (Vo[Wo] = null), (Ko = Vo[--Wo]), (Vo[Wo] = null);
          for (; e === Jo; )
            (Jo = qo[--Qo]),
              (qo[Qo] = null),
              (Yo = qo[--Qo]),
              (qo[Qo] = null),
              (Go = qo[--Qo]),
              (qo[Qo] = null);
        }
        var ra = null,
          oa = null,
          aa = !1,
          ia = null;
        function sa(e, t) {
          var n = Ru(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function la(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (ra = e), (oa = uo(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ra = e), (oa = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Jo ? { id: Go, overflow: Yo } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Ru(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ra = e),
                (oa = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function ua(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ca(e) {
          if (aa) {
            var t = oa;
            if (t) {
              var n = t;
              if (!la(e, t)) {
                if (ua(e)) throw Error(a(418));
                t = uo(n.nextSibling);
                var r = ra;
                t && la(e, t)
                  ? sa(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (aa = !1), (ra = e));
              }
            } else {
              if (ua(e)) throw Error(a(418));
              (e.flags = (-4097 & e.flags) | 2), (aa = !1), (ra = e);
            }
          }
        }
        function da(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          ra = e;
        }
        function fa(e) {
          if (e !== ra) return !1;
          if (!aa) return da(e), (aa = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !no(e.type, e.memoizedProps)),
            t && (t = oa))
          ) {
            if (ua(e)) throw (pa(), Error(a(418)));
            for (; t; ) sa(e, t), (t = uo(t.nextSibling));
          }
          if ((da(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(a(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      oa = uo(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              oa = null;
            }
          } else oa = ra ? uo(e.stateNode.nextSibling) : null;
          return !0;
        }
        function pa() {
          for (var e = oa; e; ) e = uo(e.nextSibling);
        }
        function ha() {
          (oa = ra = null), (aa = !1);
        }
        function ga(e) {
          null === ia ? (ia = [e]) : ia.push(e);
        }
        var ma = w.ReactCurrentBatchConfig;
        function va(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = F({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var ya = Co(null),
          ba = null,
          wa = null,
          xa = null;
        function Sa() {
          xa = wa = ba = null;
        }
        function ka(e) {
          var t = ya.current;
          Oo(ya), (e._currentValue = t);
        }
        function Ea(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Ca(e, t) {
          (ba = e),
            (xa = wa = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (ws = !0), (e.firstContext = null));
        }
        function Oa(e) {
          var t = e._currentValue;
          if (xa !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === wa)
            ) {
              if (null === ba) throw Error(a(308));
              (wa = e), (ba.dependencies = { lanes: 0, firstContext: e });
            } else wa = wa.next = e;
          return t;
        }
        var Pa = null;
        function Na(e) {
          null === Pa ? (Pa = [e]) : Pa.push(e);
        }
        function _a(e, t, n, r) {
          var o = t.interleaved;
          return (
            null === o
              ? ((n.next = n), Na(t))
              : ((n.next = o.next), (o.next = n)),
            (t.interleaved = n),
            La(e, r)
          );
        }
        function La(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Ta = !1;
        function Ra(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function ja(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Da(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Ia(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & _l))) {
            var o = r.pending;
            return (
              null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)),
              (r.pending = t),
              La(e, n)
            );
          }
          return (
            null === (o = r.interleaved)
              ? ((t.next = t), Na(r))
              : ((t.next = o.next), (o.next = t)),
            (r.interleaved = t),
            La(e, n)
          );
        }
        function Aa(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Fa(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var o = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === a ? (o = a = i) : (a = a.next = i), (n = n.next);
              } while (null !== n);
              null === a ? (o = a = t) : (a = a.next = t);
            } else o = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: a,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Ma(e, t, n, r) {
          var o = e.updateQueue;
          Ta = !1;
          var a = o.firstBaseUpdate,
            i = o.lastBaseUpdate,
            s = o.shared.pending;
          if (null !== s) {
            o.shared.pending = null;
            var l = s,
              u = l.next;
            (l.next = null), null === i ? (a = u) : (i.next = u), (i = l);
            var c = e.alternate;
            null !== c &&
              (s = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === s ? (c.firstBaseUpdate = u) : (s.next = u),
              (c.lastBaseUpdate = l));
          }
          if (null !== a) {
            var d = o.baseState;
            for (i = 0, c = u = l = null, s = a; ; ) {
              var f = s.lane,
                p = s.eventTime;
              if ((r & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: s.tag,
                      payload: s.payload,
                      callback: s.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    g = s;
                  switch (((f = t), (p = n), g.tag)) {
                    case 1:
                      if ("function" === typeof (h = g.payload)) {
                        d = h.call(p, d, f);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (h = g.payload)
                              ? h.call(p, d, f)
                              : h) ||
                        void 0 === f
                      )
                        break e;
                      d = F({}, d, f);
                      break e;
                    case 2:
                      Ta = !0;
                  }
                }
                null !== s.callback &&
                  0 !== s.lane &&
                  ((e.flags |= 64),
                  null === (f = o.effects) ? (o.effects = [s]) : f.push(s));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (l = d)) : (c = c.next = p),
                  (i |= f);
              if (null === (s = s.next)) {
                if (null === (s = o.shared.pending)) break;
                (s = (f = s).next),
                  (f.next = null),
                  (o.lastBaseUpdate = f),
                  (o.shared.pending = null);
              }
            }
            if (
              (null === c && (l = d),
              (o.baseState = l),
              (o.firstBaseUpdate = u),
              (o.lastBaseUpdate = c),
              null !== (t = o.shared.interleaved))
            ) {
              o = t;
              do {
                (i |= o.lane), (o = o.next);
              } while (o !== t);
            } else null === a && (o.shared.lanes = 0);
            (Fl |= i), (e.lanes = i), (e.memoizedState = d);
          }
        }
        function za(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                o = r.callback;
              if (null !== o) {
                if (((r.callback = null), (r = n), "function" !== typeof o))
                  throw Error(a(191, o));
                o.call(r);
              }
            }
        }
        var Ba = new r.Component().refs;
        function Ua(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : F({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Ha = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && He(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              o = nu(e),
              a = Da(r, o);
            (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Ia(e, a, o)) && (ru(t, e, o, r), Aa(t, e, o));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              o = nu(e),
              a = Da(r, o);
            (a.tag = 1),
              (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Ia(e, a, o)) && (ru(t, e, o, r), Aa(t, e, o));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = tu(),
              r = nu(e),
              o = Da(n, r);
            (o.tag = 2),
              void 0 !== t && null !== t && (o.callback = t),
              null !== (t = Ia(e, o, r)) && (ru(t, e, r, n), Aa(t, e, r));
          },
        };
        function Za(e, t, n, r, o, a, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !lr(n, r) ||
                !lr(o, a);
        }
        function Va(e, t, n) {
          var r = !1,
            o = No,
            a = t.contextType;
          return (
            "object" === typeof a && null !== a
              ? (a = Oa(a))
              : ((o = jo(t) ? To : _o.current),
                (a = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Ro(e, o)
                  : No)),
            (t = new t(n, a)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Ha),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                o),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            t
          );
        }
        function Wa(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Ha.enqueueReplaceState(t, t.state, null);
        }
        function $a(e, t, n, r) {
          var o = e.stateNode;
          (o.props = n), (o.state = e.memoizedState), (o.refs = Ba), Ra(e);
          var a = t.contextType;
          "object" === typeof a && null !== a
            ? (o.context = Oa(a))
            : ((a = jo(t) ? To : _o.current), (o.context = Ro(e, a))),
            (o.state = e.memoizedState),
            "function" === typeof (a = t.getDerivedStateFromProps) &&
              (Ua(e, t, a, n), (o.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof o.getSnapshotBeforeUpdate ||
              ("function" !== typeof o.UNSAFE_componentWillMount &&
                "function" !== typeof o.componentWillMount) ||
              ((t = o.state),
              "function" === typeof o.componentWillMount &&
                o.componentWillMount(),
              "function" === typeof o.UNSAFE_componentWillMount &&
                o.UNSAFE_componentWillMount(),
              t !== o.state && Ha.enqueueReplaceState(o, o.state, null),
              Ma(e, n, o, r),
              (o.state = e.memoizedState)),
            "function" === typeof o.componentDidMount && (e.flags |= 4194308);
        }
        function Ka(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(a(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(a(147, e));
              var o = r,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = o.refs;
                    t === Ba && (t = o.refs = {}),
                      null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(a(284));
            if (!n._owner) throw Error(a(290, e));
          }
          return e;
        }
        function qa(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              a(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Qa(e) {
          return (0, e._init)(e._payload);
        }
        function Ja(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function o(e, t) {
            return ((e = Du(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function s(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function l(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Mu(n, e.mode, r)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var a = n.type;
            return a === k
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === a ||
                  ("object" === typeof a &&
                    null !== a &&
                    a.$$typeof === R &&
                    Qa(a) === t.type))
              ? (((r = o(t, n.props)).ref = Ka(e, t, n)), (r.return = e), r)
              : (((r = Iu(n.type, n.key, n.props, null, e.mode, r)).ref = Ka(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = zu(n, e.mode, r)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = Au(n, e.mode, r, a)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Mu("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case x:
                  return (
                    ((n = Iu(t.type, t.key, t.props, null, e.mode, n)).ref = Ka(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case S:
                  return ((t = zu(t, e.mode, n)).return = e), t;
                case R:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || I(t))
                return ((t = Au(t, e.mode, n, null)).return = e), t;
              qa(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== o ? null : l(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case x:
                  return n.key === o ? u(e, t, n, r) : null;
                case S:
                  return n.key === o ? c(e, t, n, r) : null;
                case R:
                  return p(e, t, (o = n._init)(n._payload), r);
              }
              if (te(n) || I(n)) return null !== o ? null : d(e, t, n, r, null);
              qa(e, n);
            }
            return null;
          }
          function h(e, t, n, r, o) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return l(t, (e = e.get(n) || null), "" + r, o);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case x:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o
                  );
                case S:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o
                  );
                case R:
                  return h(e, t, n, (0, r._init)(r._payload), o);
              }
              if (te(r) || I(r))
                return d(t, (e = e.get(n) || null), r, o, null);
              qa(t, r);
            }
            return null;
          }
          function g(o, a, s, l) {
            for (
              var u = null, c = null, d = a, g = (a = 0), m = null;
              null !== d && g < s.length;
              g++
            ) {
              d.index > g ? ((m = d), (d = null)) : (m = d.sibling);
              var v = p(o, d, s[g], l);
              if (null === v) {
                null === d && (d = m);
                break;
              }
              e && d && null === v.alternate && t(o, d),
                (a = i(v, a, g)),
                null === c ? (u = v) : (c.sibling = v),
                (c = v),
                (d = m);
            }
            if (g === s.length) return n(o, d), aa && Xo(o, g), u;
            if (null === d) {
              for (; g < s.length; g++)
                null !== (d = f(o, s[g], l)) &&
                  ((a = i(d, a, g)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return aa && Xo(o, g), u;
            }
            for (d = r(o, d); g < s.length; g++)
              null !== (m = h(d, o, g, s[g], l)) &&
                (e &&
                  null !== m.alternate &&
                  d.delete(null === m.key ? g : m.key),
                (a = i(m, a, g)),
                null === c ? (u = m) : (c.sibling = m),
                (c = m));
            return (
              e &&
                d.forEach(function (e) {
                  return t(o, e);
                }),
              aa && Xo(o, g),
              u
            );
          }
          function m(o, s, l, u) {
            var c = I(l);
            if ("function" !== typeof c) throw Error(a(150));
            if (null == (l = c.call(l))) throw Error(a(151));
            for (
              var d = (c = null), g = s, m = (s = 0), v = null, y = l.next();
              null !== g && !y.done;
              m++, y = l.next()
            ) {
              g.index > m ? ((v = g), (g = null)) : (v = g.sibling);
              var b = p(o, g, y.value, u);
              if (null === b) {
                null === g && (g = v);
                break;
              }
              e && g && null === b.alternate && t(o, g),
                (s = i(b, s, m)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (g = v);
            }
            if (y.done) return n(o, g), aa && Xo(o, m), c;
            if (null === g) {
              for (; !y.done; m++, y = l.next())
                null !== (y = f(o, y.value, u)) &&
                  ((s = i(y, s, m)),
                  null === d ? (c = y) : (d.sibling = y),
                  (d = y));
              return aa && Xo(o, m), c;
            }
            for (g = r(o, g); !y.done; m++, y = l.next())
              null !== (y = h(g, o, m, y.value, u)) &&
                (e &&
                  null !== y.alternate &&
                  g.delete(null === y.key ? m : y.key),
                (s = i(y, s, m)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y));
            return (
              e &&
                g.forEach(function (e) {
                  return t(o, e);
                }),
              aa && Xo(o, m),
              c
            );
          }
          return function e(r, a, i, l) {
            if (
              ("object" === typeof i &&
                null !== i &&
                i.type === k &&
                null === i.key &&
                (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case x:
                  e: {
                    for (var u = i.key, c = a; null !== c; ) {
                      if (c.key === u) {
                        if ((u = i.type) === k) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((a = o(c, i.props.children)).return = r),
                              (r = a);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === R &&
                            Qa(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((a = o(c, i.props)).ref = Ka(r, c, i)),
                            (a.return = r),
                            (r = a);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    i.type === k
                      ? (((a = Au(i.props.children, r.mode, l, i.key)).return =
                          r),
                        (r = a))
                      : (((l = Iu(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          l
                        )).ref = Ka(r, a, i)),
                        (l.return = r),
                        (r = l));
                  }
                  return s(r);
                case S:
                  e: {
                    for (c = i.key; null !== a; ) {
                      if (a.key === c) {
                        if (
                          4 === a.tag &&
                          a.stateNode.containerInfo === i.containerInfo &&
                          a.stateNode.implementation === i.implementation
                        ) {
                          n(r, a.sibling),
                            ((a = o(a, i.children || [])).return = r),
                            (r = a);
                          break e;
                        }
                        n(r, a);
                        break;
                      }
                      t(r, a), (a = a.sibling);
                    }
                    ((a = zu(i, r.mode, l)).return = r), (r = a);
                  }
                  return s(r);
                case R:
                  return e(r, a, (c = i._init)(i._payload), l);
              }
              if (te(i)) return g(r, a, i, l);
              if (I(i)) return m(r, a, i, l);
              qa(r, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== a && 6 === a.tag
                  ? (n(r, a.sibling), ((a = o(a, i)).return = r), (r = a))
                  : (n(r, a), ((a = Mu(i, r.mode, l)).return = r), (r = a)),
                s(r))
              : n(r, a);
          };
        }
        var Ga = Ja(!0),
          Ya = Ja(!1),
          Xa = {},
          ei = Co(Xa),
          ti = Co(Xa),
          ni = Co(Xa);
        function ri(e) {
          if (e === Xa) throw Error(a(174));
          return e;
        }
        function oi(e, t) {
          switch ((Po(ni, t), Po(ti, e), Po(ei, Xa), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : le(null, "");
              break;
            default:
              t = le(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Oo(ei), Po(ei, t);
        }
        function ai() {
          Oo(ei), Oo(ti), Oo(ni);
        }
        function ii(e) {
          ri(ni.current);
          var t = ri(ei.current),
            n = le(t, e.type);
          t !== n && (Po(ti, e), Po(ei, n));
        }
        function si(e) {
          ti.current === e && (Oo(ei), Oo(ti));
        }
        var li = Co(0);
        function ui(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ci = [];
        function di() {
          for (var e = 0; e < ci.length; e++)
            ci[e]._workInProgressVersionPrimary = null;
          ci.length = 0;
        }
        var fi = w.ReactCurrentDispatcher,
          pi = w.ReactCurrentBatchConfig,
          hi = 0,
          gi = null,
          mi = null,
          vi = null,
          yi = !1,
          bi = !1,
          wi = 0,
          xi = 0;
        function Si() {
          throw Error(a(321));
        }
        function ki(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!sr(e[n], t[n])) return !1;
          return !0;
        }
        function Ei(e, t, n, r, o, i) {
          if (
            ((hi = i),
            (gi = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fi.current = null === e || null === e.memoizedState ? ss : ls),
            (e = n(r, o)),
            bi)
          ) {
            i = 0;
            do {
              if (((bi = !1), (wi = 0), 25 <= i)) throw Error(a(301));
              (i += 1),
                (vi = mi = null),
                (t.updateQueue = null),
                (fi.current = us),
                (e = n(r, o));
            } while (bi);
          }
          if (
            ((fi.current = is),
            (t = null !== mi && null !== mi.next),
            (hi = 0),
            (vi = mi = gi = null),
            (yi = !1),
            t)
          )
            throw Error(a(300));
          return e;
        }
        function Ci() {
          var e = 0 !== wi;
          return (wi = 0), e;
        }
        function Oi() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === vi ? (gi.memoizedState = vi = e) : (vi = vi.next = e), vi
          );
        }
        function Pi() {
          if (null === mi) {
            var e = gi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = mi.next;
          var t = null === vi ? gi.memoizedState : vi.next;
          if (null !== t) (vi = t), (mi = e);
          else {
            if (null === e) throw Error(a(310));
            (e = {
              memoizedState: (mi = e).memoizedState,
              baseState: mi.baseState,
              baseQueue: mi.baseQueue,
              queue: mi.queue,
              next: null,
            }),
              null === vi ? (gi.memoizedState = vi = e) : (vi = vi.next = e);
          }
          return vi;
        }
        function Ni(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function _i(e) {
          var t = Pi(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = mi,
            o = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== o) {
              var s = o.next;
              (o.next = i.next), (i.next = s);
            }
            (r.baseQueue = o = i), (n.pending = null);
          }
          if (null !== o) {
            (i = o.next), (r = r.baseState);
            var l = (s = null),
              u = null,
              c = i;
            do {
              var d = c.lane;
              if ((hi & d) === d)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var f = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((l = u = f), (s = r)) : (u = u.next = f),
                  (gi.lanes |= d),
                  (Fl |= d);
              }
              c = c.next;
            } while (null !== c && c !== i);
            null === u ? (s = r) : (u.next = l),
              sr(r, t.memoizedState) || (ws = !0),
              (t.memoizedState = r),
              (t.baseState = s),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            o = e;
            do {
              (i = o.lane), (gi.lanes |= i), (Fl |= i), (o = o.next);
            } while (o !== e);
          } else null === o && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Li(e) {
          var t = Pi(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            o = n.pending,
            i = t.memoizedState;
          if (null !== o) {
            n.pending = null;
            var s = (o = o.next);
            do {
              (i = e(i, s.action)), (s = s.next);
            } while (s !== o);
            sr(i, t.memoizedState) || (ws = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function Ti() {}
        function Ri(e, t) {
          var n = gi,
            r = Pi(),
            o = t(),
            i = !sr(r.memoizedState, o);
          if (
            (i && ((r.memoizedState = o), (ws = !0)),
            (r = r.queue),
            Vi(Ii.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== vi && 1 & vi.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              zi(9, Di.bind(null, n, r, o, t), void 0, null),
              null === Ll)
            )
              throw Error(a(349));
            0 !== (30 & hi) || ji(n, t, o);
          }
          return o;
        }
        function ji(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = gi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (gi.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Di(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Ai(t) && Fi(e);
        }
        function Ii(e, t, n) {
          return n(function () {
            Ai(t) && Fi(e);
          });
        }
        function Ai(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !sr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Fi(e) {
          var t = La(e, 1);
          null !== t && ru(t, e, 1, -1);
        }
        function Mi(e) {
          var t = Oi();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Ni,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = ns.bind(null, gi, e)),
            [t.memoizedState, e]
          );
        }
        function zi(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = gi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (gi.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Bi() {
          return Pi().memoizedState;
        }
        function Ui(e, t, n, r) {
          var o = Oi();
          (gi.flags |= e),
            (o.memoizedState = zi(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Hi(e, t, n, r) {
          var o = Pi();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== mi) {
            var i = mi.memoizedState;
            if (((a = i.destroy), null !== r && ki(r, i.deps)))
              return void (o.memoizedState = zi(t, n, a, r));
          }
          (gi.flags |= e), (o.memoizedState = zi(1 | t, n, a, r));
        }
        function Zi(e, t) {
          return Ui(8390656, 8, e, t);
        }
        function Vi(e, t) {
          return Hi(2048, 8, e, t);
        }
        function Wi(e, t) {
          return Hi(4, 2, e, t);
        }
        function $i(e, t) {
          return Hi(4, 4, e, t);
        }
        function Ki(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function qi(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Hi(4, 4, Ki.bind(null, t, e), n)
          );
        }
        function Qi() {}
        function Ji(e, t) {
          var n = Pi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ki(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Gi(e, t) {
          var n = Pi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ki(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Yi(e, t, n) {
          return 0 === (21 & hi)
            ? (e.baseState && ((e.baseState = !1), (ws = !0)),
              (e.memoizedState = n))
            : (sr(n, t) ||
                ((n = gt()), (gi.lanes |= n), (Fl |= n), (e.baseState = !0)),
              t);
        }
        function Xi(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = pi.transition;
          pi.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (pi.transition = r);
          }
        }
        function es() {
          return Pi().memoizedState;
        }
        function ts(e, t, n) {
          var r = nu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            rs(e))
          )
            os(t, n);
          else if (null !== (n = _a(e, t, n, r))) {
            ru(n, e, r, tu()), as(n, t, r);
          }
        }
        function ns(e, t, n) {
          var r = nu(e),
            o = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rs(e)) os(t, o);
          else {
            var a = e.alternate;
            if (
              0 === e.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  s = a(i, n);
                if (((o.hasEagerState = !0), (o.eagerState = s), sr(s, i))) {
                  var l = t.interleaved;
                  return (
                    null === l
                      ? ((o.next = o), Na(t))
                      : ((o.next = l.next), (l.next = o)),
                    void (t.interleaved = o)
                  );
                }
              } catch (u) {}
            null !== (n = _a(e, t, o, r)) &&
              (ru(n, e, r, (o = tu())), as(n, t, r));
          }
        }
        function rs(e) {
          var t = e.alternate;
          return e === gi || (null !== t && t === gi);
        }
        function os(e, t) {
          bi = yi = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function as(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var is = {
            readContext: Oa,
            useCallback: Si,
            useContext: Si,
            useEffect: Si,
            useImperativeHandle: Si,
            useInsertionEffect: Si,
            useLayoutEffect: Si,
            useMemo: Si,
            useReducer: Si,
            useRef: Si,
            useState: Si,
            useDebugValue: Si,
            useDeferredValue: Si,
            useTransition: Si,
            useMutableSource: Si,
            useSyncExternalStore: Si,
            useId: Si,
            unstable_isNewReconciler: !1,
          },
          ss = {
            readContext: Oa,
            useCallback: function (e, t) {
              return (Oi().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Oa,
            useEffect: Zi,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Ui(4194308, 4, Ki.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Ui(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Ui(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Oi();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Oi();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = ts.bind(null, gi, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Oi().memoizedState = e);
            },
            useState: Mi,
            useDebugValue: Qi,
            useDeferredValue: function (e) {
              return (Oi().memoizedState = e);
            },
            useTransition: function () {
              var e = Mi(!1),
                t = e[0];
              return (
                (e = Xi.bind(null, e[1])), (Oi().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = gi,
                o = Oi();
              if (aa) {
                if (void 0 === n) throw Error(a(407));
                n = n();
              } else {
                if (((n = t()), null === Ll)) throw Error(a(349));
                0 !== (30 & hi) || ji(r, t, n);
              }
              o.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (o.queue = i),
                Zi(Ii.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                zi(9, Di.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Oi(),
                t = Ll.identifierPrefix;
              if (aa) {
                var n = Yo;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Go & ~(1 << (32 - it(Go) - 1))).toString(32) + n)),
                  0 < (n = wi++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = xi++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ls = {
            readContext: Oa,
            useCallback: Ji,
            useContext: Oa,
            useEffect: Vi,
            useImperativeHandle: qi,
            useInsertionEffect: Wi,
            useLayoutEffect: $i,
            useMemo: Gi,
            useReducer: _i,
            useRef: Bi,
            useState: function () {
              return _i(Ni);
            },
            useDebugValue: Qi,
            useDeferredValue: function (e) {
              return Yi(Pi(), mi.memoizedState, e);
            },
            useTransition: function () {
              return [_i(Ni)[0], Pi().memoizedState];
            },
            useMutableSource: Ti,
            useSyncExternalStore: Ri,
            useId: es,
            unstable_isNewReconciler: !1,
          },
          us = {
            readContext: Oa,
            useCallback: Ji,
            useContext: Oa,
            useEffect: Vi,
            useImperativeHandle: qi,
            useInsertionEffect: Wi,
            useLayoutEffect: $i,
            useMemo: Gi,
            useReducer: Li,
            useRef: Bi,
            useState: function () {
              return Li(Ni);
            },
            useDebugValue: Qi,
            useDeferredValue: function (e) {
              var t = Pi();
              return null === mi
                ? (t.memoizedState = e)
                : Yi(t, mi.memoizedState, e);
            },
            useTransition: function () {
              return [Li(Ni)[0], Pi().memoizedState];
            },
            useMutableSource: Ti,
            useSyncExternalStore: Ri,
            useId: es,
            unstable_isNewReconciler: !1,
          };
        function cs(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += U(r)), (r = r.return);
            } while (r);
            var o = n;
          } catch (a) {
            o = "\nError generating stack: " + a.message + "\n" + a.stack;
          }
          return { value: e, source: t, stack: o, digest: null };
        }
        function ds(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function fs(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var ps = "function" === typeof WeakMap ? WeakMap : Map;
        function hs(e, t, n) {
          ((n = Da(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Wl || ((Wl = !0), ($l = r)), fs(0, t);
            }),
            n
          );
        }
        function gs(e, t, n) {
          (n = Da(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var o = t.value;
            (n.payload = function () {
              return r(o);
            }),
              (n.callback = function () {
                fs(0, t);
              });
          }
          var a = e.stateNode;
          return (
            null !== a &&
              "function" === typeof a.componentDidCatch &&
              (n.callback = function () {
                fs(0, t),
                  "function" !== typeof r &&
                    (null === Kl ? (Kl = new Set([this])) : Kl.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function ms(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new ps();
            var o = new Set();
            r.set(t, o);
          } else void 0 === (o = r.get(t)) && ((o = new Set()), r.set(t, o));
          o.has(n) || (o.add(n), (e = Ou.bind(null, e, t, n)), t.then(e, e));
        }
        function vs(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function ys(e, t, n, r, o) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Da(-1, 1)).tag = 2), Ia(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = o), e);
        }
        var bs = w.ReactCurrentOwner,
          ws = !1;
        function xs(e, t, n, r) {
          t.child = null === e ? Ya(t, null, n, r) : Ga(t, e.child, n, r);
        }
        function Ss(e, t, n, r, o) {
          n = n.render;
          var a = t.ref;
          return (
            Ca(t, o),
            (r = Ei(e, t, n, r, a, o)),
            (n = Ci()),
            null === e || ws
              ? (aa && n && ta(t), (t.flags |= 1), xs(e, t, r, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~o),
                Ws(e, t, o))
          );
        }
        function ks(e, t, n, r, o) {
          if (null === e) {
            var a = n.type;
            return "function" !== typeof a ||
              ju(a) ||
              void 0 !== a.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Iu(n.type, null, r, t, t.mode, o)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = a), Es(e, t, a, r, o));
          }
          if (((a = e.child), 0 === (e.lanes & o))) {
            var i = a.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : lr)(i, r) &&
              e.ref === t.ref
            )
              return Ws(e, t, o);
          }
          return (
            (t.flags |= 1),
            ((e = Du(a, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Es(e, t, n, r, o) {
          if (null !== e) {
            var a = e.memoizedProps;
            if (lr(a, r) && e.ref === t.ref) {
              if (((ws = !1), (t.pendingProps = r = a), 0 === (e.lanes & o)))
                return (t.lanes = e.lanes), Ws(e, t, o);
              0 !== (131072 & e.flags) && (ws = !0);
            }
          }
          return Ps(e, t, n, r, o);
        }
        function Cs(e, t, n) {
          var r = t.pendingProps,
            o = r.children,
            a = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Po(Dl, jl),
                (jl |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== a ? a.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Po(Dl, jl),
                  (jl |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== a ? a.baseLanes : n),
                Po(Dl, jl),
                (jl |= r);
            }
          else
            null !== a
              ? ((r = a.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Po(Dl, jl),
              (jl |= r);
          return xs(e, t, o, n), t.child;
        }
        function Os(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Ps(e, t, n, r, o) {
          var a = jo(n) ? To : _o.current;
          return (
            (a = Ro(t, a)),
            Ca(t, o),
            (n = Ei(e, t, n, r, a, o)),
            (r = Ci()),
            null === e || ws
              ? (aa && r && ta(t), (t.flags |= 1), xs(e, t, n, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~o),
                Ws(e, t, o))
          );
        }
        function Ns(e, t, n, r, o) {
          if (jo(n)) {
            var a = !0;
            Fo(t);
          } else a = !1;
          if ((Ca(t, o), null === t.stateNode))
            Vs(e, t), Va(t, n, r), $a(t, n, r, o), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              s = t.memoizedProps;
            i.props = s;
            var l = i.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = Oa(u))
              : (u = Ro(t, (u = jo(n) ? To : _o.current)));
            var c = n.getDerivedStateFromProps,
              d =
                "function" === typeof c ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((s !== r || l !== u) && Wa(t, i, r, u)),
              (Ta = !1);
            var f = t.memoizedState;
            (i.state = f),
              Ma(t, r, i, o),
              (l = t.memoizedState),
              s !== r || f !== l || Lo.current || Ta
                ? ("function" === typeof c &&
                    (Ua(t, n, c, r), (l = t.memoizedState)),
                  (s = Ta || Za(t, n, s, r, f, l, u))
                    ? (d ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = l)),
                  (i.props = r),
                  (i.state = l),
                  (i.context = u),
                  (r = s))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              ja(e, t),
              (s = t.memoizedProps),
              (u = t.type === t.elementType ? s : va(t.type, s)),
              (i.props = u),
              (d = t.pendingProps),
              (f = i.context),
              "object" === typeof (l = n.contextType) && null !== l
                ? (l = Oa(l))
                : (l = Ro(t, (l = jo(n) ? To : _o.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((s !== d || f !== l) && Wa(t, i, r, l)),
              (Ta = !1),
              (f = t.memoizedState),
              (i.state = f),
              Ma(t, r, i, o);
            var h = t.memoizedState;
            s !== d || f !== h || Lo.current || Ta
              ? ("function" === typeof p &&
                  (Ua(t, n, p, r), (h = t.memoizedState)),
                (u = Ta || Za(t, n, u, r, f, h, l) || !1)
                  ? (c ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, l),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, l)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (s === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (s === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = l),
                (r = u))
              : ("function" !== typeof i.componentDidUpdate ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return _s(e, t, n, r, a, o);
        }
        function _s(e, t, n, r, o, a) {
          Os(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return o && Mo(t, n, !1), Ws(e, t, a);
          (r = t.stateNode), (bs.current = t);
          var s =
            i && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Ga(t, e.child, null, a)),
                (t.child = Ga(t, null, s, a)))
              : xs(e, t, s, a),
            (t.memoizedState = r.state),
            o && Mo(t, n, !0),
            t.child
          );
        }
        function Ls(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Io(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Io(0, t.context, !1),
            oi(e, t.containerInfo);
        }
        function Ts(e, t, n, r, o) {
          return ha(), ga(o), (t.flags |= 256), xs(e, t, n, r), t.child;
        }
        var Rs,
          js,
          Ds,
          Is,
          As = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Fs(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Ms(e, t, n) {
          var r,
            o = t.pendingProps,
            i = li.current,
            s = !1,
            l = 0 !== (128 & t.flags);
          if (
            ((r = l) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((s = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            Po(li, 1 & i),
            null === e)
          )
            return (
              ca(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((l = o.children),
                  (e = o.fallback),
                  s
                    ? ((o = t.mode),
                      (s = t.child),
                      (l = { mode: "hidden", children: l }),
                      0 === (1 & o) && null !== s
                        ? ((s.childLanes = 0), (s.pendingProps = l))
                        : (s = Fu(l, o, 0, null)),
                      (e = Au(e, o, n, null)),
                      (s.return = t),
                      (e.return = t),
                      (s.sibling = e),
                      (t.child = s),
                      (t.child.memoizedState = Fs(n)),
                      (t.memoizedState = As),
                      e)
                    : zs(t, l))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, o, i, s) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Bs(e, t, s, (r = ds(Error(a(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((i = r.fallback),
                    (o = t.mode),
                    (r = Fu(
                      { mode: "visible", children: r.children },
                      o,
                      0,
                      null
                    )),
                    ((i = Au(i, o, s, null)).flags |= 2),
                    (r.return = t),
                    (i.return = t),
                    (r.sibling = i),
                    (t.child = r),
                    0 !== (1 & t.mode) && Ga(t, e.child, null, s),
                    (t.child.memoizedState = Fs(s)),
                    (t.memoizedState = As),
                    i);
              if (0 === (1 & t.mode)) return Bs(e, t, s, null);
              if ("$!" === o.data) {
                if ((r = o.nextSibling && o.nextSibling.dataset))
                  var l = r.dgst;
                return (
                  (r = l), Bs(e, t, s, (r = ds((i = Error(a(419))), r, void 0)))
                );
              }
              if (((l = 0 !== (s & e.childLanes)), ws || l)) {
                if (null !== (r = Ll)) {
                  switch (s & -s) {
                    case 4:
                      o = 2;
                      break;
                    case 16:
                      o = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      o = 32;
                      break;
                    case 536870912:
                      o = 268435456;
                      break;
                    default:
                      o = 0;
                  }
                  0 !== (o = 0 !== (o & (r.suspendedLanes | s)) ? 0 : o) &&
                    o !== i.retryLane &&
                    ((i.retryLane = o), La(e, o), ru(r, e, o, -1));
                }
                return mu(), Bs(e, t, s, (r = ds(Error(a(421)))));
              }
              return "$?" === o.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Nu.bind(null, e)),
                  (o._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (oa = uo(o.nextSibling)),
                  (ra = t),
                  (aa = !0),
                  (ia = null),
                  null !== e &&
                    ((qo[Qo++] = Go),
                    (qo[Qo++] = Yo),
                    (qo[Qo++] = Jo),
                    (Go = e.id),
                    (Yo = e.overflow),
                    (Jo = t)),
                  (t = zs(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, l, o, r, i, n);
          if (s) {
            (s = o.fallback), (l = t.mode), (r = (i = e.child).sibling);
            var u = { mode: "hidden", children: o.children };
            return (
              0 === (1 & l) && t.child !== i
                ? (((o = t.child).childLanes = 0),
                  (o.pendingProps = u),
                  (t.deletions = null))
                : ((o = Du(i, u)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (s = Du(r, s))
                : ((s = Au(s, l, n, null)).flags |= 2),
              (s.return = t),
              (o.return = t),
              (o.sibling = s),
              (t.child = o),
              (o = s),
              (s = t.child),
              (l =
                null === (l = e.child.memoizedState)
                  ? Fs(n)
                  : {
                      baseLanes: l.baseLanes | n,
                      cachePool: null,
                      transitions: l.transitions,
                    }),
              (s.memoizedState = l),
              (s.childLanes = e.childLanes & ~n),
              (t.memoizedState = As),
              o
            );
          }
          return (
            (e = (s = e.child).sibling),
            (o = Du(s, { mode: "visible", children: o.children })),
            0 === (1 & t.mode) && (o.lanes = n),
            (o.return = t),
            (o.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = o),
            (t.memoizedState = null),
            o
          );
        }
        function zs(e, t) {
          return (
            ((t = Fu(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Bs(e, t, n, r) {
          return (
            null !== r && ga(r),
            Ga(t, e.child, null, n),
            ((e = zs(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Us(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Ea(e.return, t, n);
        }
        function Hs(e, t, n, r, o) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: o,
              })
            : ((a.isBackwards = t),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = r),
              (a.tail = n),
              (a.tailMode = o));
        }
        function Zs(e, t, n) {
          var r = t.pendingProps,
            o = r.revealOrder,
            a = r.tail;
          if ((xs(e, t, r.children, n), 0 !== (2 & (r = li.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Us(e, n, t);
                else if (19 === e.tag) Us(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Po(li, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (o) {
              case "forwards":
                for (n = t.child, o = null; null !== n; )
                  null !== (e = n.alternate) && null === ui(e) && (o = n),
                    (n = n.sibling);
                null === (n = o)
                  ? ((o = t.child), (t.child = null))
                  : ((o = n.sibling), (n.sibling = null)),
                  Hs(t, !1, o, n, a);
                break;
              case "backwards":
                for (n = null, o = t.child, t.child = null; null !== o; ) {
                  if (null !== (e = o.alternate) && null === ui(e)) {
                    t.child = o;
                    break;
                  }
                  (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                Hs(t, !0, n, null, a);
                break;
              case "together":
                Hs(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Vs(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Ws(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Fl |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(a(153));
          if (null !== t.child) {
            for (
              n = Du((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Du(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function $s(e, t) {
          if (!aa)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Ks(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= 14680064 & o.subtreeFlags),
                (r |= 14680064 & o.flags),
                (o.return = e),
                (o = o.sibling);
          else
            for (o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags),
                (r |= o.flags),
                (o.return = e),
                (o = o.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function qs(e, t, n) {
          var r = t.pendingProps;
          switch ((na(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Ks(t), null;
            case 1:
            case 17:
              return jo(t.type) && Do(), Ks(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ai(),
                Oo(Lo),
                Oo(_o),
                di(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fa(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ia && (su(ia), (ia = null)))),
                js(e, t),
                Ks(t),
                null
              );
            case 5:
              si(t);
              var o = ri(ni.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Ds(e, t, n, r, o),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(a(166));
                  return Ks(t), null;
                }
                if (((e = ri(ei.current)), fa(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((r[po] = t), (r[ho] = i), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      zr("cancel", r), zr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      zr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (o = 0; o < Ir.length; o++) zr(Ir[o], r);
                      break;
                    case "source":
                      zr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      zr("error", r), zr("load", r);
                      break;
                    case "details":
                      zr("toggle", r);
                      break;
                    case "input":
                      J(r, i), zr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        zr("invalid", r);
                      break;
                    case "textarea":
                      oe(r, i), zr("invalid", r);
                  }
                  for (var l in (ye(n, i), (o = null), i))
                    if (i.hasOwnProperty(l)) {
                      var u = i[l];
                      "children" === l
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Yr(r.textContent, u, e),
                            (o = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Yr(r.textContent, u, e),
                            (o = ["children", "" + u]))
                        : s.hasOwnProperty(l) &&
                          null != u &&
                          "onScroll" === l &&
                          zr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      $(r), X(r, i, !0);
                      break;
                    case "textarea":
                      $(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (r.onclick = Xr);
                  }
                  (r = o), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (l = 9 === o.nodeType ? o : o.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = se(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = l.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = l.createElement(n, { is: r.is }))
                        : ((e = l.createElement(n)),
                          "select" === n &&
                            ((l = e),
                            r.multiple
                              ? (l.multiple = !0)
                              : r.size && (l.size = r.size)))
                      : (e = l.createElementNS(e, n)),
                    (e[po] = t),
                    (e[ho] = r),
                    Rs(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((l = be(n, r)), n)) {
                      case "dialog":
                        zr("cancel", e), zr("close", e), (o = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        zr("load", e), (o = r);
                        break;
                      case "video":
                      case "audio":
                        for (o = 0; o < Ir.length; o++) zr(Ir[o], e);
                        o = r;
                        break;
                      case "source":
                        zr("error", e), (o = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        zr("error", e), zr("load", e), (o = r);
                        break;
                      case "details":
                        zr("toggle", e), (o = r);
                        break;
                      case "input":
                        J(e, r), (o = Q(e, r)), zr("invalid", e);
                        break;
                      case "option":
                      default:
                        o = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (o = F({}, r, { value: void 0 })),
                          zr("invalid", e);
                        break;
                      case "textarea":
                        oe(e, r), (o = re(e, r)), zr("invalid", e);
                    }
                    for (i in (ye(n, o), (u = o)))
                      if (u.hasOwnProperty(i)) {
                        var c = u[i];
                        "style" === i
                          ? me(e, c)
                          : "dangerouslySetInnerHTML" === i
                          ? null != (c = c ? c.__html : void 0) && de(e, c)
                          : "children" === i
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && fe(e, c)
                            : "number" === typeof c && fe(e, "" + c)
                          : "suppressContentEditableWarning" !== i &&
                            "suppressHydrationWarning" !== i &&
                            "autoFocus" !== i &&
                            (s.hasOwnProperty(i)
                              ? null != c && "onScroll" === i && zr("scroll", e)
                              : null != c && b(e, i, c, l));
                      }
                    switch (n) {
                      case "input":
                        $(e), X(e, r, !1);
                        break;
                      case "textarea":
                        $(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + V(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof o.onClick && (e.onclick = Xr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Ks(t), null;
            case 6:
              if (e && null != t.stateNode) Is(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(a(166));
                if (((n = ri(ni.current)), ri(ei.current), fa(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[po] = t),
                    (i = r.nodeValue !== n) && null !== (e = ra))
                  )
                    switch (e.tag) {
                      case 3:
                        Yr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Yr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[po] = t),
                    (t.stateNode = r);
              }
              return Ks(t), null;
            case 13:
              if (
                (Oo(li),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  aa &&
                  null !== oa &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  pa(), ha(), (t.flags |= 98560), (i = !1);
                else if (((i = fa(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(a(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(a(317));
                    i[po] = t;
                  } else
                    ha(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Ks(t), (i = !1);
                } else null !== ia && (su(ia), (ia = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & li.current)
                        ? 0 === Il && (Il = 3)
                        : mu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Ks(t),
                  null);
            case 4:
              return (
                ai(),
                js(e, t),
                null === e && Hr(t.stateNode.containerInfo),
                Ks(t),
                null
              );
            case 10:
              return ka(t.type._context), Ks(t), null;
            case 19:
              if ((Oo(li), null === (i = t.memoizedState))) return Ks(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (l = i.rendering)))
                if (r) $s(i, !1);
                else {
                  if (0 !== Il || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (l = ui(e))) {
                        for (
                          t.flags |= 128,
                            $s(i, !1),
                            null !== (r = l.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (l = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = l.childLanes),
                                (i.lanes = l.lanes),
                                (i.child = l.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = l.memoizedProps),
                                (i.memoizedState = l.memoizedState),
                                (i.updateQueue = l.updateQueue),
                                (i.type = l.type),
                                (e = l.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Po(li, (1 & li.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Ge() > Zl &&
                    ((t.flags |= 128),
                    (r = !0),
                    $s(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = ui(l))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      $s(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !l.alternate &&
                        !aa)
                    )
                      return Ks(t), null;
                  } else
                    2 * Ge() - i.renderingStartTime > Zl &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      $s(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((l.sibling = t.child), (t.child = l))
                  : (null !== (n = i.last) ? (n.sibling = l) : (t.child = l),
                    (i.last = l));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Ge()),
                  (t.sibling = null),
                  (n = li.current),
                  Po(li, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Ks(t), null);
            case 22:
            case 23:
              return (
                fu(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & jl) &&
                    (Ks(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Ks(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(a(156, t.tag));
        }
        function Qs(e, t) {
          switch ((na(t), t.tag)) {
            case 1:
              return (
                jo(t.type) && Do(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ai(),
                Oo(Lo),
                Oo(_o),
                di(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return si(t), null;
            case 13:
              if (
                (Oo(li),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(a(340));
                ha();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Oo(li), null;
            case 4:
              return ai(), null;
            case 10:
              return ka(t.type._context), null;
            case 22:
            case 23:
              return fu(), null;
            default:
              return null;
          }
        }
        (Rs = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (js = function () {}),
          (Ds = function (e, t, n, r) {
            var o = e.memoizedProps;
            if (o !== r) {
              (e = t.stateNode), ri(ei.current);
              var a,
                i = null;
              switch (n) {
                case "input":
                  (o = Q(e, o)), (r = Q(e, r)), (i = []);
                  break;
                case "select":
                  (o = F({}, o, { value: void 0 })),
                    (r = F({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (o = re(e, o)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" !== typeof o.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Xr);
              }
              for (c in (ye(n, r), (n = null), o))
                if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && null != o[c])
                  if ("style" === c) {
                    var l = o[c];
                    for (a in l)
                      l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (s.hasOwnProperty(c)
                        ? i || (i = [])
                        : (i = i || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((l = null != o ? o[c] : void 0),
                  r.hasOwnProperty(c) && u !== l && (null != u || null != l))
                )
                  if ("style" === c)
                    if (l) {
                      for (a in l)
                        !l.hasOwnProperty(a) ||
                          (u && u.hasOwnProperty(a)) ||
                          (n || (n = {}), (n[a] = ""));
                      for (a in u)
                        u.hasOwnProperty(a) &&
                          l[a] !== u[a] &&
                          (n || (n = {}), (n[a] = u[a]));
                    } else n || (i || (i = []), i.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (l = l ? l.__html : void 0),
                        null != u && l !== u && (i = i || []).push(c, u))
                      : "children" === c
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (i = i || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (s.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && zr("scroll", e),
                            i || l === u || (i = []))
                          : (i = i || []).push(c, u));
              }
              n && (i = i || []).push("style", n);
              var c = i;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Is = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Js = !1,
          Gs = !1,
          Ys = "function" === typeof WeakSet ? WeakSet : Set,
          Xs = null;
        function el(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Cu(e, t, r);
              }
            else n.current = null;
        }
        function tl(e, t, n) {
          try {
            n();
          } catch (r) {
            Cu(e, t, r);
          }
        }
        var nl = !1;
        function rl(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var o = (r = r.next);
            do {
              if ((o.tag & e) === e) {
                var a = o.destroy;
                (o.destroy = void 0), void 0 !== a && tl(t, n, a);
              }
              o = o.next;
            } while (o !== r);
          }
        }
        function ol(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function al(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function il(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), il(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[po],
              delete t[ho],
              delete t[mo],
              delete t[vo],
              delete t[yo]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function sl(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ll(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || sl(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ul(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Xr));
          else if (4 !== r && null !== (e = e.child))
            for (ul(e, t, n), e = e.sibling; null !== e; )
              ul(e, t, n), (e = e.sibling);
        }
        function cl(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cl(e, t, n), e = e.sibling; null !== e; )
              cl(e, t, n), (e = e.sibling);
        }
        var dl = null,
          fl = !1;
        function pl(e, t, n) {
          for (n = n.child; null !== n; ) hl(e, t, n), (n = n.sibling);
        }
        function hl(e, t, n) {
          if (at && "function" === typeof at.onCommitFiberUnmount)
            try {
              at.onCommitFiberUnmount(ot, n);
            } catch (s) {}
          switch (n.tag) {
            case 5:
              Gs || el(n, t);
            case 6:
              var r = dl,
                o = fl;
              (dl = null),
                pl(e, t, n),
                (fl = o),
                null !== (dl = r) &&
                  (fl
                    ? ((e = dl),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : dl.removeChild(n.stateNode));
              break;
            case 18:
              null !== dl &&
                (fl
                  ? ((e = dl),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? lo(e.parentNode, n)
                      : 1 === e.nodeType && lo(e, n),
                    Ht(e))
                  : lo(dl, n.stateNode));
              break;
            case 4:
              (r = dl),
                (o = fl),
                (dl = n.stateNode.containerInfo),
                (fl = !0),
                pl(e, t, n),
                (dl = r),
                (fl = o);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Gs &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                o = r = r.next;
                do {
                  var a = o,
                    i = a.destroy;
                  (a = a.tag),
                    void 0 !== i &&
                      (0 !== (2 & a) || 0 !== (4 & a)) &&
                      tl(n, t, i),
                    (o = o.next);
                } while (o !== r);
              }
              pl(e, t, n);
              break;
            case 1:
              if (
                !Gs &&
                (el(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (s) {
                  Cu(n, t, s);
                }
              pl(e, t, n);
              break;
            case 21:
              pl(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Gs = (r = Gs) || null !== n.memoizedState),
                  pl(e, t, n),
                  (Gs = r))
                : pl(e, t, n);
              break;
            default:
              pl(e, t, n);
          }
        }
        function gl(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Ys()),
              t.forEach(function (t) {
                var r = _u.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function ml(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var o = n[r];
              try {
                var i = e,
                  s = t,
                  l = s;
                e: for (; null !== l; ) {
                  switch (l.tag) {
                    case 5:
                      (dl = l.stateNode), (fl = !1);
                      break e;
                    case 3:
                    case 4:
                      (dl = l.stateNode.containerInfo), (fl = !0);
                      break e;
                  }
                  l = l.return;
                }
                if (null === dl) throw Error(a(160));
                hl(i, s, o), (dl = null), (fl = !1);
                var u = o.alternate;
                null !== u && (u.return = null), (o.return = null);
              } catch (c) {
                Cu(o, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) vl(t, e), (t = t.sibling);
        }
        function vl(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((ml(t, e), yl(e), 4 & r)) {
                try {
                  rl(3, e, e.return), ol(3, e);
                } catch (m) {
                  Cu(e, e.return, m);
                }
                try {
                  rl(5, e, e.return);
                } catch (m) {
                  Cu(e, e.return, m);
                }
              }
              break;
            case 1:
              ml(t, e), yl(e), 512 & r && null !== n && el(n, n.return);
              break;
            case 5:
              if (
                (ml(t, e),
                yl(e),
                512 & r && null !== n && el(n, n.return),
                32 & e.flags)
              ) {
                var o = e.stateNode;
                try {
                  fe(o, "");
                } catch (m) {
                  Cu(e, e.return, m);
                }
              }
              if (4 & r && null != (o = e.stateNode)) {
                var i = e.memoizedProps,
                  s = null !== n ? n.memoizedProps : i,
                  l = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === l &&
                      "radio" === i.type &&
                      null != i.name &&
                      G(o, i),
                      be(l, s);
                    var c = be(l, i);
                    for (s = 0; s < u.length; s += 2) {
                      var d = u[s],
                        f = u[s + 1];
                      "style" === d
                        ? me(o, f)
                        : "dangerouslySetInnerHTML" === d
                        ? de(o, f)
                        : "children" === d
                        ? fe(o, f)
                        : b(o, d, f, c);
                    }
                    switch (l) {
                      case "input":
                        Y(o, i);
                        break;
                      case "textarea":
                        ae(o, i);
                        break;
                      case "select":
                        var p = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        null != h
                          ? ne(o, !!i.multiple, h, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(o, !!i.multiple, i.defaultValue, !0)
                              : ne(o, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    o[ho] = i;
                  } catch (m) {
                    Cu(e, e.return, m);
                  }
              }
              break;
            case 6:
              if ((ml(t, e), yl(e), 4 & r)) {
                if (null === e.stateNode) throw Error(a(162));
                (o = e.stateNode), (i = e.memoizedProps);
                try {
                  o.nodeValue = i;
                } catch (m) {
                  Cu(e, e.return, m);
                }
              }
              break;
            case 3:
              if (
                (ml(t, e),
                yl(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Ht(t.containerInfo);
                } catch (m) {
                  Cu(e, e.return, m);
                }
              break;
            case 4:
            default:
              ml(t, e), yl(e);
              break;
            case 13:
              ml(t, e),
                yl(e),
                8192 & (o = e.child).flags &&
                  ((i = null !== o.memoizedState),
                  (o.stateNode.isHidden = i),
                  !i ||
                    (null !== o.alternate &&
                      null !== o.alternate.memoizedState) ||
                    (Hl = Ge())),
                4 & r && gl(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Gs = (c = Gs) || d), ml(t, e), (Gs = c))
                  : ml(t, e),
                yl(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                )
                  for (Xs = e, d = e.child; null !== d; ) {
                    for (f = Xs = d; null !== Xs; ) {
                      switch (((h = (p = Xs).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          rl(4, p, p.return);
                          break;
                        case 1:
                          el(p, p.return);
                          var g = p.stateNode;
                          if ("function" === typeof g.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (g.props = t.memoizedProps),
                                (g.state = t.memoizedState),
                                g.componentWillUnmount();
                            } catch (m) {
                              Cu(r, n, m);
                            }
                          }
                          break;
                        case 5:
                          el(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            Sl(f);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Xs = h)) : Sl(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (o = f.stateNode),
                          c
                            ? "function" === typeof (i = o.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((l = f.stateNode),
                              (s =
                                void 0 !== (u = f.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (l.style.display = ge("display", s)));
                      } catch (m) {
                        Cu(e, e.return, m);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                      } catch (m) {
                        Cu(e, e.return, m);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              ml(t, e), yl(e), 4 & r && gl(e);
            case 21:
          }
        }
        function yl(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (sl(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(a(160));
              }
              switch (r.tag) {
                case 5:
                  var o = r.stateNode;
                  32 & r.flags && (fe(o, ""), (r.flags &= -33)),
                    cl(e, ll(e), o);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  ul(e, ll(e), i);
                  break;
                default:
                  throw Error(a(161));
              }
            } catch (s) {
              Cu(e, e.return, s);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bl(e, t, n) {
          (Xs = e), wl(e, t, n);
        }
        function wl(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Xs; ) {
            var o = Xs,
              a = o.child;
            if (22 === o.tag && r) {
              var i = null !== o.memoizedState || Js;
              if (!i) {
                var s = o.alternate,
                  l = (null !== s && null !== s.memoizedState) || Gs;
                s = Js;
                var u = Gs;
                if (((Js = i), (Gs = l) && !u))
                  for (Xs = o; null !== Xs; )
                    (l = (i = Xs).child),
                      22 === i.tag && null !== i.memoizedState
                        ? kl(o)
                        : null !== l
                        ? ((l.return = i), (Xs = l))
                        : kl(o);
                for (; null !== a; ) (Xs = a), wl(a, t, n), (a = a.sibling);
                (Xs = o), (Js = s), (Gs = u);
              }
              xl(e);
            } else
              0 !== (8772 & o.subtreeFlags) && null !== a
                ? ((a.return = o), (Xs = a))
                : xl(e);
          }
        }
        function xl(e) {
          for (; null !== Xs; ) {
            var t = Xs;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gs || ol(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Gs)
                        if (null === n) r.componentDidMount();
                        else {
                          var o =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : va(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            o,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && za(t, i, r);
                      break;
                    case 3:
                      var s = t.updateQueue;
                      if (null !== s) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        za(t, s, n);
                      }
                      break;
                    case 5:
                      var l = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = l;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var d = c.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && Ht(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(a(163));
                  }
                Gs || (512 & t.flags && al(t));
              } catch (p) {
                Cu(t, t.return, p);
              }
            }
            if (t === e) {
              Xs = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Xs = n);
              break;
            }
            Xs = t.return;
          }
        }
        function Sl(e) {
          for (; null !== Xs; ) {
            var t = Xs;
            if (t === e) {
              Xs = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Xs = n);
              break;
            }
            Xs = t.return;
          }
        }
        function kl(e) {
          for (; null !== Xs; ) {
            var t = Xs;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    ol(4, t);
                  } catch (l) {
                    Cu(t, n, l);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var o = t.return;
                    try {
                      r.componentDidMount();
                    } catch (l) {
                      Cu(t, o, l);
                    }
                  }
                  var a = t.return;
                  try {
                    al(t);
                  } catch (l) {
                    Cu(t, a, l);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    al(t);
                  } catch (l) {
                    Cu(t, i, l);
                  }
              }
            } catch (l) {
              Cu(t, t.return, l);
            }
            if (t === e) {
              Xs = null;
              break;
            }
            var s = t.sibling;
            if (null !== s) {
              (s.return = t.return), (Xs = s);
              break;
            }
            Xs = t.return;
          }
        }
        var El,
          Cl = Math.ceil,
          Ol = w.ReactCurrentDispatcher,
          Pl = w.ReactCurrentOwner,
          Nl = w.ReactCurrentBatchConfig,
          _l = 0,
          Ll = null,
          Tl = null,
          Rl = 0,
          jl = 0,
          Dl = Co(0),
          Il = 0,
          Al = null,
          Fl = 0,
          Ml = 0,
          zl = 0,
          Bl = null,
          Ul = null,
          Hl = 0,
          Zl = 1 / 0,
          Vl = null,
          Wl = !1,
          $l = null,
          Kl = null,
          ql = !1,
          Ql = null,
          Jl = 0,
          Gl = 0,
          Yl = null,
          Xl = -1,
          eu = 0;
        function tu() {
          return 0 !== (6 & _l) ? Ge() : -1 !== Xl ? Xl : (Xl = Ge());
        }
        function nu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & _l) && 0 !== Rl
            ? Rl & -Rl
            : null !== ma.transition
            ? (0 === eu && (eu = gt()), eu)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Jt(e.type));
        }
        function ru(e, t, n, r) {
          if (50 < Gl) throw ((Gl = 0), (Yl = null), Error(a(185)));
          vt(e, n, r),
            (0 !== (2 & _l) && e === Ll) ||
              (e === Ll && (0 === (2 & _l) && (Ml |= n), 4 === Il && lu(e, Rl)),
              ou(e, r),
              1 === n &&
                0 === _l &&
                0 === (1 & t.mode) &&
                ((Zl = Ge() + 500), Bo && Zo()));
        }
        function ou(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                o = e.expirationTimes,
                a = e.pendingLanes;
              0 < a;

            ) {
              var i = 31 - it(a),
                s = 1 << i,
                l = o[i];
              -1 === l
                ? (0 !== (s & n) && 0 === (s & r)) || (o[i] = pt(s, t))
                : l <= t && (e.expiredLanes |= s),
                (a &= ~s);
            }
          })(e, t);
          var r = ft(e, e === Ll ? Rl : 0);
          if (0 === r)
            null !== n && qe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && qe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Bo = !0), Ho(e);
                  })(uu.bind(null, e))
                : Ho(uu.bind(null, e)),
                io(function () {
                  0 === (6 & _l) && Zo();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Xe;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Lu(n, au.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function au(e, t) {
          if (((Xl = -1), (eu = 0), 0 !== (6 & _l))) throw Error(a(327));
          var n = e.callbackNode;
          if (ku() && e.callbackNode !== n) return null;
          var r = ft(e, e === Ll ? Rl : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = vu(e, r);
          else {
            t = r;
            var o = _l;
            _l |= 2;
            var i = gu();
            for (
              (Ll === e && Rl === t) ||
              ((Vl = null), (Zl = Ge() + 500), pu(e, t));
              ;

            )
              try {
                bu();
                break;
              } catch (l) {
                hu(e, l);
              }
            Sa(),
              (Ol.current = i),
              (_l = o),
              null !== Tl ? (t = 0) : ((Ll = null), (Rl = 0), (t = Il));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (o = ht(e)) && ((r = o), (t = iu(e, o))),
              1 === t)
            )
              throw ((n = Al), pu(e, 0), lu(e, r), ou(e, Ge()), n);
            if (6 === t) lu(e, r);
            else {
              if (
                ((o = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var o = n[r],
                              a = o.getSnapshot;
                            o = o.value;
                            try {
                              if (!sr(a(), o)) return !1;
                            } catch (s) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(o) &&
                  (2 === (t = vu(e, r)) &&
                    0 !== (i = ht(e)) &&
                    ((r = i), (t = iu(e, i))),
                  1 === t))
              )
                throw ((n = Al), pu(e, 0), lu(e, r), ou(e, Ge()), n);
              switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(a(345));
                case 2:
                case 5:
                  Su(e, Ul, Vl);
                  break;
                case 3:
                  if (
                    (lu(e, r),
                    (130023424 & r) === r && 10 < (t = Hl + 500 - Ge()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((o = e.suspendedLanes) & r) !== r) {
                      tu(), (e.pingedLanes |= e.suspendedLanes & o);
                      break;
                    }
                    e.timeoutHandle = ro(Su.bind(null, e, Ul, Vl), t);
                    break;
                  }
                  Su(e, Ul, Vl);
                  break;
                case 4:
                  if ((lu(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, o = -1; 0 < r; ) {
                    var s = 31 - it(r);
                    (i = 1 << s), (s = t[s]) > o && (o = s), (r &= ~i);
                  }
                  if (
                    ((r = o),
                    10 <
                      (r =
                        (120 > (r = Ge() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Cl(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ro(Su.bind(null, e, Ul, Vl), r);
                    break;
                  }
                  Su(e, Ul, Vl);
                  break;
                default:
                  throw Error(a(329));
              }
            }
          }
          return ou(e, Ge()), e.callbackNode === n ? au.bind(null, e) : null;
        }
        function iu(e, t) {
          var n = Bl;
          return (
            e.current.memoizedState.isDehydrated && (pu(e, t).flags |= 256),
            2 !== (e = vu(e, t)) && ((t = Ul), (Ul = n), null !== t && su(t)),
            e
          );
        }
        function su(e) {
          null === Ul ? (Ul = e) : Ul.push.apply(Ul, e);
        }
        function lu(e, t) {
          for (
            t &= ~zl,
              t &= ~Ml,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function uu(e) {
          if (0 !== (6 & _l)) throw Error(a(327));
          ku();
          var t = ft(e, 0);
          if (0 === (1 & t)) return ou(e, Ge()), null;
          var n = vu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = iu(e, r)));
          }
          if (1 === n) throw ((n = Al), pu(e, 0), lu(e, t), ou(e, Ge()), n);
          if (6 === n) throw Error(a(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Su(e, Ul, Vl),
            ou(e, Ge()),
            null
          );
        }
        function cu(e, t) {
          var n = _l;
          _l |= 1;
          try {
            return e(t);
          } finally {
            0 === (_l = n) && ((Zl = Ge() + 500), Bo && Zo());
          }
        }
        function du(e) {
          null !== Ql && 0 === Ql.tag && 0 === (6 & _l) && ku();
          var t = _l;
          _l |= 1;
          var n = Nl.transition,
            r = bt;
          try {
            if (((Nl.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Nl.transition = n), 0 === (6 & (_l = t)) && Zo();
          }
        }
        function fu() {
          (jl = Dl.current), Oo(Dl);
        }
        function pu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), oo(n)), null !== Tl))
            for (n = Tl.return; null !== n; ) {
              var r = n;
              switch ((na(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Do();
                  break;
                case 3:
                  ai(), Oo(Lo), Oo(_o), di();
                  break;
                case 5:
                  si(r);
                  break;
                case 4:
                  ai();
                  break;
                case 13:
                case 19:
                  Oo(li);
                  break;
                case 10:
                  ka(r.type._context);
                  break;
                case 22:
                case 23:
                  fu();
              }
              n = n.return;
            }
          if (
            ((Ll = e),
            (Tl = e = Du(e.current, null)),
            (Rl = jl = t),
            (Il = 0),
            (Al = null),
            (zl = Ml = Fl = 0),
            (Ul = Bl = null),
            null !== Pa)
          ) {
            for (t = 0; t < Pa.length; t++)
              if (null !== (r = (n = Pa[t]).interleaved)) {
                n.interleaved = null;
                var o = r.next,
                  a = n.pending;
                if (null !== a) {
                  var i = a.next;
                  (a.next = o), (r.next = i);
                }
                n.pending = r;
              }
            Pa = null;
          }
          return e;
        }
        function hu(e, t) {
          for (;;) {
            var n = Tl;
            try {
              if ((Sa(), (fi.current = is), yi)) {
                for (var r = gi.memoizedState; null !== r; ) {
                  var o = r.queue;
                  null !== o && (o.pending = null), (r = r.next);
                }
                yi = !1;
              }
              if (
                ((hi = 0),
                (vi = mi = gi = null),
                (bi = !1),
                (wi = 0),
                (Pl.current = null),
                null === n || null === n.return)
              ) {
                (Il = 1), (Al = t), (Tl = null);
                break;
              }
              e: {
                var i = e,
                  s = n.return,
                  l = n,
                  u = t;
                if (
                  ((t = Rl),
                  (l.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    d = l,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var h = vs(s);
                  if (null !== h) {
                    (h.flags &= -257),
                      ys(h, s, l, 0, t),
                      1 & h.mode && ms(i, c, t),
                      (u = c);
                    var g = (t = h).updateQueue;
                    if (null === g) {
                      var m = new Set();
                      m.add(u), (t.updateQueue = m);
                    } else g.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    ms(i, c, t), mu();
                    break e;
                  }
                  u = Error(a(426));
                } else if (aa && 1 & l.mode) {
                  var v = vs(s);
                  if (null !== v) {
                    0 === (65536 & v.flags) && (v.flags |= 256),
                      ys(v, s, l, 0, t),
                      ga(cs(u, l));
                    break e;
                  }
                }
                (i = u = cs(u, l)),
                  4 !== Il && (Il = 2),
                  null === Bl ? (Bl = [i]) : Bl.push(i),
                  (i = s);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        Fa(i, hs(0, u, t));
                      break e;
                    case 1:
                      l = u;
                      var y = i.type,
                        b = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Kl || !Kl.has(b))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          Fa(i, gs(i, l, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              xu(n);
            } catch (w) {
              (t = w), Tl === n && null !== n && (Tl = n = n.return);
              continue;
            }
            break;
          }
        }
        function gu() {
          var e = Ol.current;
          return (Ol.current = is), null === e ? is : e;
        }
        function mu() {
          (0 !== Il && 3 !== Il && 2 !== Il) || (Il = 4),
            null === Ll ||
              (0 === (268435455 & Fl) && 0 === (268435455 & Ml)) ||
              lu(Ll, Rl);
        }
        function vu(e, t) {
          var n = _l;
          _l |= 2;
          var r = gu();
          for ((Ll === e && Rl === t) || ((Vl = null), pu(e, t)); ; )
            try {
              yu();
              break;
            } catch (o) {
              hu(e, o);
            }
          if ((Sa(), (_l = n), (Ol.current = r), null !== Tl))
            throw Error(a(261));
          return (Ll = null), (Rl = 0), Il;
        }
        function yu() {
          for (; null !== Tl; ) wu(Tl);
        }
        function bu() {
          for (; null !== Tl && !Qe(); ) wu(Tl);
        }
        function wu(e) {
          var t = El(e.alternate, e, jl);
          (e.memoizedProps = e.pendingProps),
            null === t ? xu(e) : (Tl = t),
            (Pl.current = null);
        }
        function xu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = qs(n, t, jl))) return void (Tl = n);
            } else {
              if (null !== (n = Qs(n, t)))
                return (n.flags &= 32767), void (Tl = n);
              if (null === e) return (Il = 6), void (Tl = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Tl = t);
            Tl = t = e;
          } while (null !== t);
          0 === Il && (Il = 5);
        }
        function Su(e, t, n) {
          var r = bt,
            o = Nl.transition;
          try {
            (Nl.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  ku();
                } while (null !== Ql);
                if (0 !== (6 & _l)) throw Error(a(327));
                n = e.finishedWork;
                var o = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(a(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var o = 31 - it(n),
                        a = 1 << o;
                      (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~a);
                    }
                  })(e, i),
                  e === Ll && ((Tl = Ll = null), (Rl = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    ql ||
                    ((ql = !0),
                    Lu(tt, function () {
                      return ku(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = Nl.transition), (Nl.transition = null);
                  var s = bt;
                  bt = 1;
                  var l = _l;
                  (_l |= 4),
                    (Pl.current = null),
                    (function (e, t) {
                      if (((eo = Vt), pr((e = fr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var o = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (x) {
                                n = null;
                                break e;
                              }
                              var s = 0,
                                l = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  f !== n ||
                                    (0 !== o && 3 !== f.nodeType) ||
                                    (l = s + o),
                                    f !== i ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (u = s + r),
                                    3 === f.nodeType &&
                                      (s += f.nodeValue.length),
                                    null !== (h = f.firstChild);

                                )
                                  (p = f), (f = h);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === n && ++c === o && (l = s),
                                    p === i && ++d === r && (u = s),
                                    null !== (h = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = h;
                              }
                              n =
                                -1 === l || -1 === u
                                  ? null
                                  : { start: l, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        to = { focusedElem: e, selectionRange: n },
                          Vt = !1,
                          Xs = t;
                        null !== Xs;

                      )
                        if (
                          ((e = (t = Xs).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Xs = e);
                        else
                          for (; null !== Xs; ) {
                            t = Xs;
                            try {
                              var g = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== g) {
                                      var m = g.memoizedProps,
                                        v = g.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? m
                                            : va(t.type, m),
                                          v
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(a(163));
                                }
                            } catch (x) {
                              Cu(t, t.return, x);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Xs = e);
                              break;
                            }
                            Xs = t.return;
                          }
                      (g = nl), (nl = !1);
                    })(e, n),
                    vl(n, e),
                    hr(to),
                    (Vt = !!eo),
                    (to = eo = null),
                    (e.current = n),
                    bl(n, e, o),
                    Je(),
                    (_l = l),
                    (bt = s),
                    (Nl.transition = i);
                } else e.current = n;
                if (
                  (ql && ((ql = !1), (Ql = e), (Jl = o)),
                  (i = e.pendingLanes),
                  0 === i && (Kl = null),
                  (function (e) {
                    if (at && "function" === typeof at.onCommitFiberRoot)
                      try {
                        at.onCommitFiberRoot(
                          ot,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  ou(e, Ge()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (o = t[n]),
                      r(o.value, { componentStack: o.stack, digest: o.digest });
                if (Wl) throw ((Wl = !1), (e = $l), ($l = null), e);
                0 !== (1 & Jl) && 0 !== e.tag && ku(),
                  (i = e.pendingLanes),
                  0 !== (1 & i)
                    ? e === Yl
                      ? Gl++
                      : ((Gl = 0), (Yl = e))
                    : (Gl = 0),
                  Zo();
              })(e, t, n, r);
          } finally {
            (Nl.transition = o), (bt = r);
          }
          return null;
        }
        function ku() {
          if (null !== Ql) {
            var e = wt(Jl),
              t = Nl.transition,
              n = bt;
            try {
              if (((Nl.transition = null), (bt = 16 > e ? 16 : e), null === Ql))
                var r = !1;
              else {
                if (((e = Ql), (Ql = null), (Jl = 0), 0 !== (6 & _l)))
                  throw Error(a(331));
                var o = _l;
                for (_l |= 4, Xs = e.current; null !== Xs; ) {
                  var i = Xs,
                    s = i.child;
                  if (0 !== (16 & Xs.flags)) {
                    var l = i.deletions;
                    if (null !== l) {
                      for (var u = 0; u < l.length; u++) {
                        var c = l[u];
                        for (Xs = c; null !== Xs; ) {
                          var d = Xs;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rl(8, d, i);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Xs = f);
                          else
                            for (; null !== Xs; ) {
                              var p = (d = Xs).sibling,
                                h = d.return;
                              if ((il(d), d === c)) {
                                Xs = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Xs = p);
                                break;
                              }
                              Xs = h;
                            }
                        }
                      }
                      var g = i.alternate;
                      if (null !== g) {
                        var m = g.child;
                        if (null !== m) {
                          g.child = null;
                          do {
                            var v = m.sibling;
                            (m.sibling = null), (m = v);
                          } while (null !== m);
                        }
                      }
                      Xs = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== s)
                    (s.return = i), (Xs = s);
                  else
                    e: for (; null !== Xs; ) {
                      if (0 !== (2048 & (i = Xs).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            rl(9, i, i.return);
                        }
                      var y = i.sibling;
                      if (null !== y) {
                        (y.return = i.return), (Xs = y);
                        break e;
                      }
                      Xs = i.return;
                    }
                }
                var b = e.current;
                for (Xs = b; null !== Xs; ) {
                  var w = (s = Xs).child;
                  if (0 !== (2064 & s.subtreeFlags) && null !== w)
                    (w.return = s), (Xs = w);
                  else
                    e: for (s = b; null !== Xs; ) {
                      if (0 !== (2048 & (l = Xs).flags))
                        try {
                          switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ol(9, l);
                          }
                        } catch (S) {
                          Cu(l, l.return, S);
                        }
                      if (l === s) {
                        Xs = null;
                        break e;
                      }
                      var x = l.sibling;
                      if (null !== x) {
                        (x.return = l.return), (Xs = x);
                        break e;
                      }
                      Xs = l.return;
                    }
                }
                if (
                  ((_l = o),
                  Zo(),
                  at && "function" === typeof at.onPostCommitFiberRoot)
                )
                  try {
                    at.onPostCommitFiberRoot(ot, e);
                  } catch (S) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Nl.transition = t);
            }
          }
          return !1;
        }
        function Eu(e, t, n) {
          (e = Ia(e, (t = hs(0, (t = cs(n, t)), 1)), 1)),
            (t = tu()),
            null !== e && (vt(e, 1, t), ou(e, t));
        }
        function Cu(e, t, n) {
          if (3 === e.tag) Eu(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Eu(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Kl || !Kl.has(r)))
                ) {
                  (t = Ia(t, (e = gs(t, (e = cs(n, e)), 1)), 1)),
                    (e = tu()),
                    null !== t && (vt(t, 1, e), ou(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Ou(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = tu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ll === e &&
              (Rl & n) === n &&
              (4 === Il ||
              (3 === Il && (130023424 & Rl) === Rl && 500 > Ge() - Hl)
                ? pu(e, 0)
                : (zl |= n)),
            ou(e, t);
        }
        function Pu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = tu();
          null !== (e = La(e, t)) && (vt(e, t, n), ou(e, n));
        }
        function Nu(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Pu(e, n);
        }
        function _u(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                o = e.memoizedState;
              null !== o && (n = o.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(a(314));
          }
          null !== r && r.delete(t), Pu(e, n);
        }
        function Lu(e, t) {
          return Ke(e, t);
        }
        function Tu(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Ru(e, t, n, r) {
          return new Tu(e, t, n, r);
        }
        function ju(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Du(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Ru(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Iu(e, t, n, r, o, i) {
          var s = 2;
          if (((r = e), "function" === typeof e)) ju(e) && (s = 1);
          else if ("string" === typeof e) s = 5;
          else
            e: switch (e) {
              case k:
                return Au(n.children, o, i, t);
              case E:
                (s = 8), (o |= 8);
                break;
              case C:
                return (
                  ((e = Ru(12, n, t, 2 | o)).elementType = C), (e.lanes = i), e
                );
              case _:
                return (
                  ((e = Ru(13, n, t, o)).elementType = _), (e.lanes = i), e
                );
              case L:
                return (
                  ((e = Ru(19, n, t, o)).elementType = L), (e.lanes = i), e
                );
              case j:
                return Fu(n, o, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case O:
                      s = 10;
                      break e;
                    case P:
                      s = 9;
                      break e;
                    case N:
                      s = 11;
                      break e;
                    case T:
                      s = 14;
                      break e;
                    case R:
                      (s = 16), (r = null);
                      break e;
                  }
                throw Error(a(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Ru(s, n, t, o)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function Au(e, t, n, r) {
          return ((e = Ru(7, e, r, t)).lanes = n), e;
        }
        function Fu(e, t, n, r) {
          return (
            ((e = Ru(22, e, r, t)).elementType = j),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Mu(e, t, n) {
          return ((e = Ru(6, e, null, t)).lanes = n), e;
        }
        function zu(e, t, n) {
          return (
            ((t = Ru(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Bu(e, t, n, r, o) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = mt(0)),
            (this.expirationTimes = mt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = mt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = o),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Uu(e, t, n, r, o, a, i, s, l) {
          return (
            (e = new Bu(e, t, n, s, l)),
            1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
            (a = Ru(3, null, null, t)),
            (e.current = a),
            (a.stateNode = e),
            (a.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Ra(a),
            e
          );
        }
        function Hu(e) {
          if (!e) return No;
          e: {
            if (He((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(a(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (jo(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(a(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (jo(n)) return Ao(e, n, t);
          }
          return t;
        }
        function Zu(e, t, n, r, o, a, i, s, l) {
          return (
            ((e = Uu(n, r, !0, e, 0, a, 0, s, l)).context = Hu(null)),
            (n = e.current),
            ((a = Da((r = tu()), (o = nu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Ia(n, a, o),
            (e.current.lanes = o),
            vt(e, o, r),
            ou(e, r),
            e
          );
        }
        function Vu(e, t, n, r) {
          var o = t.current,
            a = tu(),
            i = nu(o);
          return (
            (n = Hu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Da(a, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Ia(o, t, i)) && (ru(e, o, i, a), Aa(e, o, i)),
            i
          );
        }
        function Wu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function $u(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Ku(e, t) {
          $u(e, t), (e = e.alternate) && $u(e, t);
        }
        El = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Lo.current) ws = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (ws = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Ls(t), ha();
                        break;
                      case 5:
                        ii(t);
                        break;
                      case 1:
                        jo(t.type) && Fo(t);
                        break;
                      case 4:
                        oi(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          o = t.memoizedProps.value;
                        Po(ya, r._currentValue), (r._currentValue = o);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Po(li, 1 & li.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Ms(e, t, n)
                            : (Po(li, 1 & li.current),
                              null !== (e = Ws(e, t, n)) ? e.sibling : null);
                        Po(li, 1 & li.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Zs(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (o = t.memoizedState) &&
                            ((o.rendering = null),
                            (o.tail = null),
                            (o.lastEffect = null)),
                          Po(li, li.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Cs(e, t, n);
                    }
                    return Ws(e, t, n);
                  })(e, t, n)
                );
              ws = 0 !== (131072 & e.flags);
            }
          else (ws = !1), aa && 0 !== (1048576 & t.flags) && ea(t, Ko, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Vs(e, t), (e = t.pendingProps);
              var o = Ro(t, _o.current);
              Ca(t, n), (o = Ei(null, t, r, e, o, n));
              var i = Ci();
              return (
                (t.flags |= 1),
                "object" === typeof o &&
                null !== o &&
                "function" === typeof o.render &&
                void 0 === o.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    jo(r) ? ((i = !0), Fo(t)) : (i = !1),
                    (t.memoizedState =
                      null !== o.state && void 0 !== o.state ? o.state : null),
                    Ra(t),
                    (o.updater = Ha),
                    (t.stateNode = o),
                    (o._reactInternals = t),
                    $a(t, r, e, n),
                    (t = _s(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    aa && i && ta(t),
                    xs(null, t, o, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Vs(e, t),
                  (e = t.pendingProps),
                  (r = (o = r._init)(r._payload)),
                  (t.type = r),
                  (o = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return ju(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === N) return 11;
                        if (e === T) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = va(r, e)),
                  o)
                ) {
                  case 0:
                    t = Ps(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Ns(null, t, r, e, n);
                    break e;
                  case 11:
                    t = Ss(null, t, r, e, n);
                    break e;
                  case 14:
                    t = ks(null, t, r, va(r.type, e), n);
                    break e;
                }
                throw Error(a(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Ps(e, t, r, (o = t.elementType === r ? o : va(r, o)), n)
              );
            case 1:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Ns(e, t, r, (o = t.elementType === r ? o : va(r, o)), n)
              );
            case 3:
              e: {
                if ((Ls(t), null === e)) throw Error(a(387));
                (r = t.pendingProps),
                  (o = (i = t.memoizedState).element),
                  ja(e, t),
                  Ma(t, r, null, n);
                var s = t.memoizedState;
                if (((r = s.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: s.cache,
                      pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                      transitions: s.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = Ts(e, t, r, n, (o = cs(Error(a(423)), t)));
                    break e;
                  }
                  if (r !== o) {
                    t = Ts(e, t, r, n, (o = cs(Error(a(424)), t)));
                    break e;
                  }
                  for (
                    oa = uo(t.stateNode.containerInfo.firstChild),
                      ra = t,
                      aa = !0,
                      ia = null,
                      n = Ya(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ha(), r === o)) {
                    t = Ws(e, t, n);
                    break e;
                  }
                  xs(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ii(t),
                null === e && ca(t),
                (r = t.type),
                (o = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (s = o.children),
                no(r, o)
                  ? (s = null)
                  : null !== i && no(r, i) && (t.flags |= 32),
                Os(e, t),
                xs(e, t, s, n),
                t.child
              );
            case 6:
              return null === e && ca(t), null;
            case 13:
              return Ms(e, t, n);
            case 4:
              return (
                oi(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Ga(t, null, r, n)) : xs(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Ss(e, t, r, (o = t.elementType === r ? o : va(r, o)), n)
              );
            case 7:
              return xs(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return xs(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (o = t.pendingProps),
                  (i = t.memoizedProps),
                  (s = o.value),
                  Po(ya, r._currentValue),
                  (r._currentValue = s),
                  null !== i)
                )
                  if (sr(i.value, s)) {
                    if (i.children === o.children && !Lo.current) {
                      t = Ws(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var l = i.dependencies;
                      if (null !== l) {
                        s = i.child;
                        for (var u = l.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === i.tag) {
                              (u = Da(-1, n & -n)).tag = 2;
                              var c = i.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d
                                  ? (u.next = u)
                                  : ((u.next = d.next), (d.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (i.lanes |= n),
                              null !== (u = i.alternate) && (u.lanes |= n),
                              Ea(i.return, n, t),
                              (l.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === i.tag)
                        s = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (s = i.return)) throw Error(a(341));
                        (s.lanes |= n),
                          null !== (l = s.alternate) && (l.lanes |= n),
                          Ea(s, n, t),
                          (s = i.sibling);
                      } else s = i.child;
                      if (null !== s) s.return = i;
                      else
                        for (s = i; null !== s; ) {
                          if (s === t) {
                            s = null;
                            break;
                          }
                          if (null !== (i = s.sibling)) {
                            (i.return = s.return), (s = i);
                            break;
                          }
                          s = s.return;
                        }
                      i = s;
                    }
                xs(e, t, o.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (o = t.type),
                (r = t.pendingProps.children),
                Ca(t, n),
                (r = r((o = Oa(o)))),
                (t.flags |= 1),
                xs(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (o = va((r = t.type), t.pendingProps)),
                ks(e, t, r, (o = va(r.type, o)), n)
              );
            case 15:
              return Es(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : va(r, o)),
                Vs(e, t),
                (t.tag = 1),
                jo(r) ? ((e = !0), Fo(t)) : (e = !1),
                Ca(t, n),
                Va(t, r, o),
                $a(t, r, o, n),
                _s(null, t, r, !0, e, n)
              );
            case 19:
              return Zs(e, t, n);
            case 22:
              return Cs(e, t, n);
          }
          throw Error(a(156, t.tag));
        };
        var qu =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Qu(e) {
          this._internalRoot = e;
        }
        function Ju(e) {
          this._internalRoot = e;
        }
        function Gu(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Yu(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Xu() {}
        function ec(e, t, n, r, o) {
          var a = n._reactRootContainer;
          if (a) {
            var i = a;
            if ("function" === typeof o) {
              var s = o;
              o = function () {
                var e = Wu(i);
                s.call(e);
              };
            }
            Vu(t, i, e, o);
          } else
            i = (function (e, t, n, r, o) {
              if (o) {
                if ("function" === typeof r) {
                  var a = r;
                  r = function () {
                    var e = Wu(i);
                    a.call(e);
                  };
                }
                var i = Zu(t, r, e, 0, null, !1, 0, "", Xu);
                return (
                  (e._reactRootContainer = i),
                  (e[go] = i.current),
                  Hr(8 === e.nodeType ? e.parentNode : e),
                  du(),
                  i
                );
              }
              for (; (o = e.lastChild); ) e.removeChild(o);
              if ("function" === typeof r) {
                var s = r;
                r = function () {
                  var e = Wu(l);
                  s.call(e);
                };
              }
              var l = Uu(e, 0, !1, null, 0, !1, 0, "", Xu);
              return (
                (e._reactRootContainer = l),
                (e[go] = l.current),
                Hr(8 === e.nodeType ? e.parentNode : e),
                du(function () {
                  Vu(t, l, n, r);
                }),
                l
              );
            })(n, t, e, o, r);
          return Wu(i);
        }
        (Ju.prototype.render = Qu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(a(409));
            Vu(e, t, null, null);
          }),
          (Ju.prototype.unmount = Qu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                du(function () {
                  Vu(null, e, null, null);
                }),
                  (t[go] = null);
              }
            }),
          (Ju.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Et();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < jt.length && 0 !== t && t < jt[n].priority;
                n++
              );
              jt.splice(n, 0, e), 0 === n && Ft(e);
            }
          }),
          (xt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    ou(t, Ge()),
                    0 === (6 & _l) && ((Zl = Ge() + 500), Zo()));
                }
                break;
              case 13:
                du(function () {
                  var t = La(e, 1);
                  if (null !== t) {
                    var n = tu();
                    ru(t, e, 1, n);
                  }
                }),
                  Ku(e, 1);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = La(e, 134217728);
              if (null !== t) ru(t, e, 134217728, tu());
              Ku(e, 134217728);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = nu(e),
                n = La(e, t);
              if (null !== n) ru(n, e, t, tu());
              Ku(e, t);
            }
          }),
          (Et = function () {
            return bt;
          }),
          (Ct = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (Se = function (e, t, n) {
            switch (t) {
              case "input":
                if ((Y(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var o = So(r);
                      if (!o) throw Error(a(90));
                      K(r), Y(r, o);
                    }
                  }
                }
                break;
              case "textarea":
                ae(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Ne = cu),
          (_e = du);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [wo, xo, So, Oe, Pe, cu],
          },
          nc = {
            findFiberByHostInstance: bo,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = We(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var oc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!oc.isDisabled && oc.supportsFiber)
            try {
              (ot = oc.inject(rc)), (at = oc);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Gu(t)) throw Error(a(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: S,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Gu(e)) throw Error(a(299));
            var n = !1,
              r = "",
              o = qu;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (o = t.onRecoverableError)),
              (t = Uu(e, 1, !1, null, 0, n, 0, r, o)),
              (e[go] = t.current),
              Hr(8 === e.nodeType ? e.parentNode : e),
              new Qu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(a(188));
              throw ((e = Object.keys(e).join(",")), Error(a(268, e)));
            }
            return (e = null === (e = We(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return du(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Yu(t)) throw Error(a(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Gu(e)) throw Error(a(405));
            var r = (null != n && n.hydratedSources) || null,
              o = !1,
              i = "",
              s = qu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (o = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (s = n.onRecoverableError)),
              (t = Zu(t, null, e, 1, null != n ? n : null, o, 0, i, s)),
              (e[go] = t.current),
              Hr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (o = (o = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, o])
                    : t.mutableSourceEagerHydrationData.push(n, o);
            return new Ju(t);
          }),
          (t.render = function (e, t, n) {
            if (!Yu(t)) throw Error(a(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Yu(e)) throw Error(a(40));
            return (
              !!e._reactRootContainer &&
              (du(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[go] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Yu(n)) throw Error(a(200));
            if (null == e || void 0 === e._reactInternals) throw Error(a(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      292: (e, t, n) => {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(144));
      },
      36: (e, t, n) => {
        "use strict";
        var r = n(60),
          o = Symbol.for("react.element"),
          a = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          s =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          l = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            a = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            i.call(t, r) && !l.hasOwnProperty(r) && (a[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
          return {
            $$typeof: o,
            type: e,
            key: u,
            ref: c,
            props: a,
            _owner: s.current,
          };
        }
        (t.Fragment = a), (t.jsx = u), (t.jsxs = u);
      },
      564: (e, t) => {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          s = Symbol.for("react.provider"),
          l = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          g = Object.assign,
          m = {};
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = v.prototype);
        var w = (b.prototype = new y());
        (w.constructor = b), g(w, v.prototype), (w.isPureReactComponent = !0);
        var x = Array.isArray,
          S = Object.prototype.hasOwnProperty,
          k = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, t, r) {
          var o,
            a = {},
            i = null,
            s = null;
          if (null != t)
            for (o in (void 0 !== t.ref && (s = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              S.call(t, o) && !E.hasOwnProperty(o) && (a[o] = t[o]);
          var l = arguments.length - 2;
          if (1 === l) a.children = r;
          else if (1 < l) {
            for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
            a.children = u;
          }
          if (e && e.defaultProps)
            for (o in (l = e.defaultProps)) void 0 === a[o] && (a[o] = l[o]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: s,
            props: a,
            _owner: k.current,
          };
        }
        function O(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var P = /\/+/g;
        function N(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function _(e, t, o, a, i) {
          var s = typeof e;
          ("undefined" !== s && "boolean" !== s) || (e = null);
          var l = !1;
          if (null === e) l = !0;
          else
            switch (s) {
              case "string":
              case "number":
                l = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    l = !0;
                }
            }
          if (l)
            return (
              (i = i((l = e))),
              (e = "" === a ? "." + N(l, 0) : a),
              x(i)
                ? ((o = ""),
                  null != e && (o = e.replace(P, "$&/") + "/"),
                  _(i, t, o, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (O(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      o +
                        (!i.key || (l && l.key === i.key)
                          ? ""
                          : ("" + i.key).replace(P, "$&/") + "/") +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((l = 0), (a = "" === a ? "." : a + ":"), x(e)))
            for (var u = 0; u < e.length; u++) {
              var c = a + N((s = e[u]), u);
              l += _(s, t, o, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(s = e.next()).done; )
              l += _((s = s.value), t, o, (c = a + N(s, u++)), i);
          else if ("object" === s)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return l;
        }
        function L(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            _(e, r, "", "", function (e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function T(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var R = { current: null },
          j = { transition: null },
          D = {
            ReactCurrentDispatcher: R,
            ReactCurrentBatchConfig: j,
            ReactCurrentOwner: k,
          };
        (t.Children = {
          map: L,
          forEach: function (e, t, n) {
            L(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              L(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              L(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!O(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = v),
          (t.Fragment = o),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = a),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var o = g({}, e.props),
              a = e.key,
              i = e.ref,
              s = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (s = k.current)),
                void 0 !== t.key && (a = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var l = e.type.defaultProps;
              for (u in t)
                S.call(t, u) &&
                  !E.hasOwnProperty(u) &&
                  (o[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) o.children = r;
            else if (1 < u) {
              l = Array(u);
              for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
              o.children = l;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: a,
              ref: i,
              props: o,
              _owner: s,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: l,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: s, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = O),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: T,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = j.transition;
            j.transition = {};
            try {
              e();
            } finally {
              j.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return R.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return R.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return R.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return R.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return R.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return R.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return R.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return R.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return R.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return R.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return R.current.useRef(e);
          }),
          (t.useState = function (e) {
            return R.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return R.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return R.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      60: (e, t, n) => {
        "use strict";
        e.exports = n(564);
      },
      496: (e, t, n) => {
        "use strict";
        e.exports = n(36);
      },
      692: (e, t) => {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              o = e[r];
            if (!(0 < a(o, t))) break e;
            (e[r] = t), (e[n] = o), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function o(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, o = e.length, i = o >>> 1; r < i; ) {
              var s = 2 * (r + 1) - 1,
                l = e[s],
                u = s + 1,
                c = e[u];
              if (0 > a(l, n))
                u < o && 0 > a(c, l)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = l), (e[s] = n), (r = s));
              else {
                if (!(u < o && 0 > a(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function a(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var s = Date,
            l = s.now();
          t.unstable_now = function () {
            return s.now() - l;
          };
        }
        var u = [],
          c = [],
          d = 1,
          f = null,
          p = 3,
          h = !1,
          g = !1,
          m = !1,
          v = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) o(c);
            else {
              if (!(t.startTime <= e)) break;
              o(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function x(e) {
          if (((m = !1), w(e), !g))
            if (null !== r(u)) (g = !0), j(S);
            else {
              var t = r(c);
              null !== t && D(x, t.startTime - e);
            }
        }
        function S(e, n) {
          (g = !1), m && ((m = !1), y(O), (O = -1)), (h = !0);
          var a = p;
          try {
            for (
              w(n), f = r(u);
              null !== f && (!(f.expirationTime > n) || (e && !_()));

            ) {
              var i = f.callback;
              if ("function" === typeof i) {
                (f.callback = null), (p = f.priorityLevel);
                var s = i(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof s
                    ? (f.callback = s)
                    : f === r(u) && o(u),
                  w(n);
              } else o(u);
              f = r(u);
            }
            if (null !== f) var l = !0;
            else {
              var d = r(c);
              null !== d && D(x, d.startTime - n), (l = !1);
            }
            return l;
          } finally {
            (f = null), (p = a), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var k,
          E = !1,
          C = null,
          O = -1,
          P = 5,
          N = -1;
        function _() {
          return !(t.unstable_now() - N < P);
        }
        function L() {
          if (null !== C) {
            var e = t.unstable_now();
            N = e;
            var n = !0;
            try {
              n = C(!0, e);
            } finally {
              n ? k() : ((E = !1), (C = null));
            }
          } else E = !1;
        }
        if ("function" === typeof b)
          k = function () {
            b(L);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var T = new MessageChannel(),
            R = T.port2;
          (T.port1.onmessage = L),
            (k = function () {
              R.postMessage(null);
            });
        } else
          k = function () {
            v(L, 0);
          };
        function j(e) {
          (C = e), E || ((E = !0), k());
        }
        function D(e, n) {
          O = v(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            g || h || ((g = !0), j(S));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (P = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, o, a) {
            var i = t.unstable_now();
            switch (
              ("object" === typeof a && null !== a
                ? (a = "number" === typeof (a = a.delay) && 0 < a ? i + a : i)
                : (a = i),
              e)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: o,
                priorityLevel: e,
                startTime: a,
                expirationTime: (s = a + s),
                sortIndex: -1,
              }),
              a > i
                ? ((e.sortIndex = a),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (m ? (y(O), (O = -1)) : (m = !0), D(x, a - i)))
                : ((e.sortIndex = s), n(u, e), g || h || ((g = !0), j(S))),
              e
            );
          }),
          (t.unstable_shouldYield = _),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      724: (e, t, n) => {
        "use strict";
        e.exports = n(692);
      },
      20: (e) => {
        e.exports = function (e, t, n, r) {
          var o = n ? n.call(r, e, t) : void 0;
          if (void 0 !== o) return !!o;
          if (e === t) return !0;
          if ("object" !== typeof e || !e || "object" !== typeof t || !t)
            return !1;
          var a = Object.keys(e),
            i = Object.keys(t);
          if (a.length !== i.length) return !1;
          for (
            var s = Object.prototype.hasOwnProperty.bind(t), l = 0;
            l < a.length;
            l++
          ) {
            var u = a[l];
            if (!s(u)) return !1;
            var c = e[u],
              d = t[u];
            if (
              !1 === (o = n ? n.call(r, c, d, u) : void 0) ||
              (void 0 === o && c !== d)
            )
              return !1;
          }
          return !0;
        };
      },
      400: (e) => {
        e.exports = {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
        };
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (() => {
      var e,
        t = Object.getPrototypeOf
          ? (e) => Object.getPrototypeOf(e)
          : (e) => e.__proto__;
      n.t = function (r, o) {
        if ((1 & o && (r = this(r)), 8 & o)) return r;
        if ("object" === typeof r && r) {
          if (4 & o && r.__esModule) return r;
          if (16 & o && "function" === typeof r.then) return r;
        }
        var a = Object.create(null);
        n.r(a);
        var i = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var s = 2 & o && r;
          "object" == typeof s && !~e.indexOf(s);
          s = t(s)
        )
          Object.getOwnPropertyNames(s).forEach((e) => (i[e] = () => r[e]));
        return (i.default = () => r), n.d(a, i), a;
      };
    })(),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" === typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (n.nc = void 0),
    (() => {
      "use strict";
      var e = n(60),
        t = n(292);
      function r(e, t) {
        return (
          t.forEach(function (t) {
            t &&
              "string" !== typeof t &&
              !Array.isArray(t) &&
              Object.keys(t).forEach(function (n) {
                if ("default" !== n && !(n in e)) {
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  Object.defineProperty(
                    e,
                    n,
                    r.get
                      ? r
                      : {
                          enumerable: !0,
                          get: function () {
                            return t[n];
                          },
                        }
                  );
                }
              });
          }),
          Object.freeze(e)
        );
      }
      var o = function () {
        return (
          (o =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }),
          o.apply(this, arguments)
        );
      };
      function a(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, o = 0, a = t.length; o < a; o++)
            (!r && o in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      function i(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      "function" === typeof SuppressedError && SuppressedError;
      var s =
        "undefined" !== typeof globalThis
          ? globalThis
          : "undefined" !== typeof window
          ? window
          : "undefined" !== typeof n.g
          ? n.g
          : "undefined" !== typeof self
          ? self
          : {};
      function l(e) {
        return e &&
          e.__esModule &&
          Object.prototype.hasOwnProperty.call(e, "default")
          ? e.default
          : e;
      }
      var u = "-ms-",
        c = "-moz-",
        d = "-webkit-",
        f = "comm",
        p = "rule",
        h = "decl",
        g = "@import",
        m = "@keyframes",
        v = "@layer",
        y = Math.abs,
        b = String.fromCharCode,
        w = Object.assign;
      function x(e) {
        return e.trim();
      }
      function S(e, t) {
        return (e = t.exec(e)) ? e[0] : e;
      }
      function k(e, t, n) {
        return e.replace(t, n);
      }
      function E(e, t, n) {
        return e.indexOf(t, n);
      }
      function C(e, t) {
        return 0 | e.charCodeAt(t);
      }
      function O(e, t, n) {
        return e.slice(t, n);
      }
      function P(e) {
        return e.length;
      }
      function N(e) {
        return e.length;
      }
      function _(e, t) {
        return t.push(e), e;
      }
      function L(e, t) {
        return e.filter(function (e) {
          return !S(e, t);
        });
      }
      var T = 1,
        R = 1,
        j = 0,
        D = 0,
        I = 0,
        A = "";
      function F(e, t, n, r, o, a, i, s) {
        return {
          value: e,
          root: t,
          parent: n,
          type: r,
          props: o,
          children: a,
          line: T,
          column: R,
          length: i,
          return: "",
          siblings: s,
        };
      }
      function M(e, t) {
        return w(
          F("", null, null, "", null, null, 0, e.siblings),
          e,
          { length: -e.length },
          t
        );
      }
      function z(e) {
        for (; e.root; ) e = M(e.root, { children: [e] });
        _(e, e.siblings);
      }
      function B() {
        return (I = D > 0 ? C(A, --D) : 0), R--, 10 === I && ((R = 1), T--), I;
      }
      function U() {
        return (I = D < j ? C(A, D++) : 0), R++, 10 === I && ((R = 1), T++), I;
      }
      function H() {
        return C(A, D);
      }
      function Z() {
        return D;
      }
      function V(e, t) {
        return O(A, e, t);
      }
      function W(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function $(e) {
        return x(V(D - 1, Q(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
      }
      function K(e) {
        for (; (I = H()) && I < 33; ) U();
        return W(e) > 2 || W(I) > 3 ? "" : " ";
      }
      function q(e, t) {
        for (
          ;
          --t &&
          U() &&
          !(I < 48 || I > 102 || (I > 57 && I < 65) || (I > 70 && I < 97));

        );
        return V(e, Z() + (t < 6 && 32 == H() && 32 == U()));
      }
      function Q(e) {
        for (; U(); )
          switch (I) {
            case e:
              return D;
            case 34:
            case 39:
              34 !== e && 39 !== e && Q(I);
              break;
            case 40:
              41 === e && Q(e);
              break;
            case 92:
              U();
          }
        return D;
      }
      function J(e, t) {
        for (; U() && e + I !== 57 && (e + I !== 84 || 47 !== H()); );
        return "/*" + V(t, D - 1) + "*" + b(47 === e ? e : U());
      }
      function G(e) {
        for (; !W(H()); ) U();
        return V(e, D);
      }
      function Y(e) {
        return (function (e) {
          return (A = ""), e;
        })(
          X(
            "",
            null,
            null,
            null,
            [""],
            (e = (function (e) {
              return (T = R = 1), (j = P((A = e))), (D = 0), [];
            })(e)),
            0,
            [0],
            e
          )
        );
      }
      function X(e, t, n, r, o, a, i, s, l) {
        for (
          var u = 0,
            c = 0,
            d = i,
            f = 0,
            p = 0,
            h = 0,
            g = 1,
            m = 1,
            v = 1,
            w = 0,
            x = "",
            S = o,
            O = a,
            N = r,
            L = x;
          m;

        )
          switch (((h = w), (w = U()))) {
            case 40:
              if (108 != h && 58 == C(L, d - 1)) {
                -1 !=
                  E((L += k($(w), "&", "&\f")), "&\f", y(u ? s[u - 1] : 0)) &&
                  (v = -1);
                break;
              }
            case 34:
            case 39:
            case 91:
              L += $(w);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              L += K(h);
              break;
            case 92:
              L += q(Z() - 1, 7);
              continue;
            case 47:
              switch (H()) {
                case 42:
                case 47:
                  _(te(J(U(), Z()), t, n, l), l);
                  break;
                default:
                  L += "/";
              }
              break;
            case 123 * g:
              s[u++] = P(L) * v;
            case 125 * g:
            case 59:
            case 0:
              switch (w) {
                case 0:
                case 125:
                  m = 0;
                case 59 + c:
                  -1 == v && (L = k(L, /\f/g, "")),
                    p > 0 &&
                      P(L) - d &&
                      _(
                        p > 32
                          ? ne(L + ";", r, n, d - 1, l)
                          : ne(k(L, " ", "") + ";", r, n, d - 2, l),
                        l
                      );
                  break;
                case 59:
                  L += ";";
                default:
                  if (
                    (_(
                      (N = ee(
                        L,
                        t,
                        n,
                        u,
                        c,
                        o,
                        s,
                        x,
                        (S = []),
                        (O = []),
                        d,
                        a
                      )),
                      a
                    ),
                    123 === w)
                  )
                    if (0 === c) X(L, t, N, N, S, a, d, s, O);
                    else
                      switch (99 === f && 110 === C(L, 3) ? 100 : f) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                          X(
                            e,
                            N,
                            N,
                            r &&
                              _(
                                ee(e, N, N, 0, 0, o, s, x, o, (S = []), d, O),
                                O
                              ),
                            o,
                            O,
                            d,
                            s,
                            r ? S : O
                          );
                          break;
                        default:
                          X(L, N, N, N, [""], O, 0, s, O);
                      }
              }
              (u = c = p = 0), (g = v = 1), (x = L = ""), (d = i);
              break;
            case 58:
              (d = 1 + P(L)), (p = h);
            default:
              if (g < 1)
                if (123 == w) --g;
                else if (125 == w && 0 == g++ && 125 == B()) continue;
              switch (((L += b(w)), w * g)) {
                case 38:
                  v = c > 0 ? 1 : ((L += "\f"), -1);
                  break;
                case 44:
                  (s[u++] = (P(L) - 1) * v), (v = 1);
                  break;
                case 64:
                  45 === H() && (L += $(U())),
                    (f = H()),
                    (c = d = P((x = L += G(Z())))),
                    w++;
                  break;
                case 45:
                  45 === h && 2 == P(L) && (g = 0);
              }
          }
        return a;
      }
      function ee(e, t, n, r, o, a, i, s, l, u, c, d) {
        for (
          var f = o - 1, h = 0 === o ? a : [""], g = N(h), m = 0, v = 0, b = 0;
          m < r;
          ++m
        )
          for (
            var w = 0, S = O(e, f + 1, (f = y((v = i[m])))), E = e;
            w < g;
            ++w
          )
            (E = x(v > 0 ? h[w] + " " + S : k(S, /&\f/g, h[w]))) &&
              (l[b++] = E);
        return F(e, t, n, 0 === o ? p : s, l, u, c, d);
      }
      function te(e, t, n, r) {
        return F(e, t, n, f, b(I), O(e, 2, -2), 0, r);
      }
      function ne(e, t, n, r, o) {
        return F(e, t, n, h, O(e, 0, r), O(e, r + 1, -1), r, o);
      }
      function re(e, t, n) {
        switch (
          (function (e, t) {
            return 45 ^ C(e, 0)
              ? (((((((t << 2) ^ C(e, 0)) << 2) ^ C(e, 1)) << 2) ^ C(e, 2)) <<
                  2) ^
                  C(e, 3)
              : 0;
          })(e, t)
        ) {
          case 5103:
            return d + "print-" + e + e;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return d + e + e;
          case 4789:
            return c + e + e;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return d + e + c + e + u + e + e;
          case 5936:
            switch (C(e, t + 11)) {
              case 114:
                return d + e + u + k(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
              case 108:
                return d + e + u + k(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
              case 45:
                return d + e + u + k(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
            }
          case 6828:
          case 4268:
          case 2903:
            return d + e + u + e + e;
          case 6165:
            return d + e + u + "flex-" + e + e;
          case 5187:
            return (
              d +
              e +
              k(e, /(\w+).+(:[^]+)/, d + "box-$1$2" + u + "flex-$1$2") +
              e
            );
          case 5443:
            return (
              d +
              e +
              u +
              "flex-item-" +
              k(e, /flex-|-self/g, "") +
              (S(e, /flex-|baseline/)
                ? ""
                : u + "grid-row-" + k(e, /flex-|-self/g, "")) +
              e
            );
          case 4675:
            return (
              d +
              e +
              u +
              "flex-line-pack" +
              k(e, /align-content|flex-|-self/g, "") +
              e
            );
          case 5548:
            return d + e + u + k(e, "shrink", "negative") + e;
          case 5292:
            return d + e + u + k(e, "basis", "preferred-size") + e;
          case 6060:
            return (
              d +
              "box-" +
              k(e, "-grow", "") +
              d +
              e +
              u +
              k(e, "grow", "positive") +
              e
            );
          case 4554:
            return d + k(e, /([^-])(transform)/g, "$1" + d + "$2") + e;
          case 6187:
            return (
              k(
                k(k(e, /(zoom-|grab)/, d + "$1"), /(image-set)/, d + "$1"),
                e,
                ""
              ) + e
            );
          case 5495:
          case 3959:
            return k(e, /(image-set\([^]*)/, d + "$1$`$1");
          case 4968:
            return (
              k(
                k(
                  e,
                  /(.+:)(flex-)?(.*)/,
                  d + "box-pack:$3" + u + "flex-pack:$3"
                ),
                /s.+-b[^;]+/,
                "justify"
              ) +
              d +
              e +
              e
            );
          case 4200:
            if (!S(e, /flex-|baseline/))
              return u + "grid-column-align" + O(e, t) + e;
            break;
          case 2592:
          case 3360:
            return u + k(e, "template-", "") + e;
          case 4384:
          case 3616:
            return n &&
              n.some(function (e, n) {
                return (t = n), S(e.props, /grid-\w+-end/);
              })
              ? ~E(e + (n = n[t].value), "span", 0)
                ? e
                : u +
                  k(e, "-start", "") +
                  e +
                  u +
                  "grid-row-span:" +
                  (~E(n, "span", 0)
                    ? S(n, /\d+/)
                    : +S(n, /\d+/) - +S(e, /\d+/)) +
                  ";"
              : u + k(e, "-start", "") + e;
          case 4896:
          case 4128:
            return n &&
              n.some(function (e) {
                return S(e.props, /grid-\w+-start/);
              })
              ? e
              : u + k(k(e, "-end", "-span"), "span ", "") + e;
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return k(e, /(.+)-inline(.+)/, d + "$1$2") + e;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (P(e) - 1 - t > 6)
              switch (C(e, t + 1)) {
                case 109:
                  if (45 !== C(e, t + 4)) break;
                case 102:
                  return (
                    k(
                      e,
                      /(.+:)(.+)-([^]+)/,
                      "$1" +
                        d +
                        "$2-$3$1" +
                        c +
                        (108 == C(e, t + 3) ? "$3" : "$2-$3")
                    ) + e
                  );
                case 115:
                  return ~E(e, "stretch", 0)
                    ? re(k(e, "stretch", "fill-available"), t, n) + e
                    : e;
              }
            break;
          case 5152:
          case 5920:
            return k(
              e,
              /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
              function (t, n, r, o, a, i, s) {
                return (
                  u +
                  n +
                  ":" +
                  r +
                  s +
                  (o ? u + n + "-span:" + (a ? i : +i - +r) + s : "") +
                  e
                );
              }
            );
          case 4949:
            if (121 === C(e, t + 6)) return k(e, ":", ":" + d) + e;
            break;
          case 6444:
            switch (C(e, 45 === C(e, 14) ? 18 : 11)) {
              case 120:
                return (
                  k(
                    e,
                    /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
                    "$1" +
                      d +
                      (45 === C(e, 14) ? "inline-" : "") +
                      "box$3$1" +
                      d +
                      "$2$3$1" +
                      u +
                      "$2box$3"
                  ) + e
                );
              case 100:
                return k(e, ":", ":" + u) + e;
            }
            break;
          case 5719:
          case 2647:
          case 2135:
          case 3927:
          case 2391:
            return k(e, "scroll-", "scroll-snap-") + e;
        }
        return e;
      }
      function oe(e, t) {
        for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
        return n;
      }
      function ae(e, t, n, r) {
        switch (e.type) {
          case v:
            if (e.children.length) break;
          case g:
          case h:
            return (e.return = e.return || e.value);
          case f:
            return "";
          case m:
            return (e.return = e.value + "{" + oe(e.children, r) + "}");
          case p:
            if (!P((e.value = e.props.join(",")))) return "";
        }
        return P((n = oe(e.children, r)))
          ? (e.return = e.value + "{" + n + "}")
          : "";
      }
      function ie(e, t, n, r) {
        if (e.length > -1 && !e.return)
          switch (e.type) {
            case h:
              return void (e.return = re(e.value, e.length, n));
            case m:
              return oe([M(e, { value: k(e.value, "@", "@" + d) })], r);
            case p:
              if (e.length)
                return (function (e, t) {
                  return e.map(t).join("");
                })((n = e.props), function (t) {
                  switch (S(t, (r = /(::plac\w+|:read-\w+)/))) {
                    case ":read-only":
                    case ":read-write":
                      z(M(e, { props: [k(t, /:(read-\w+)/, ":" + c + "$1")] })),
                        z(M(e, { props: [t] })),
                        w(e, { props: L(n, r) });
                      break;
                    case "::placeholder":
                      z(
                        M(e, {
                          props: [k(t, /:(plac\w+)/, ":" + d + "input-$1")],
                        })
                      ),
                        z(
                          M(e, { props: [k(t, /:(plac\w+)/, ":" + c + "$1")] })
                        ),
                        z(
                          M(e, { props: [k(t, /:(plac\w+)/, u + "input-$1")] })
                        ),
                        z(M(e, { props: [t] })),
                        w(e, { props: L(n, r) });
                  }
                  return "";
                });
          }
      }
      var se = {
          animationIterationCount: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        },
        le =
          ("undefined" != typeof process &&
            void 0 !==
              {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
              } &&
            ({
              NODE_ENV: "production",
              PUBLIC_URL: "",
              WDS_SOCKET_HOST: void 0,
              WDS_SOCKET_PATH: void 0,
              WDS_SOCKET_PORT: void 0,
              FAST_REFRESH: !0,
            }.REACT_APP_SC_ATTR ||
              {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
              }.SC_ATTR)) ||
          "data-styled",
        ue = "active",
        ce = "data-styled-version",
        de = "6.1.8",
        fe = "/*!sc*/\n",
        pe = "undefined" != typeof window && "HTMLElement" in window,
        he = Boolean(
          "boolean" == typeof SC_DISABLE_SPEEDY
            ? SC_DISABLE_SPEEDY
            : "undefined" != typeof process &&
              void 0 !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                } &&
              void 0 !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.REACT_APP_SC_DISABLE_SPEEDY &&
              "" !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.REACT_APP_SC_DISABLE_SPEEDY
            ? "false" !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.REACT_APP_SC_DISABLE_SPEEDY &&
              {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
              }.REACT_APP_SC_DISABLE_SPEEDY
            : "undefined" != typeof process &&
              void 0 !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                } &&
              void 0 !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.SC_DISABLE_SPEEDY &&
              "" !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.SC_DISABLE_SPEEDY &&
              "false" !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.SC_DISABLE_SPEEDY &&
              {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
              }.SC_DISABLE_SPEEDY
        ),
        ge = (new Set(), Object.freeze([])),
        me = Object.freeze({});
      var ve = new Set([
          "a",
          "abbr",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "base",
          "bdi",
          "bdo",
          "big",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "cite",
          "code",
          "col",
          "colgroup",
          "data",
          "datalist",
          "dd",
          "del",
          "details",
          "dfn",
          "dialog",
          "div",
          "dl",
          "dt",
          "em",
          "embed",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "header",
          "hgroup",
          "hr",
          "html",
          "i",
          "iframe",
          "img",
          "input",
          "ins",
          "kbd",
          "keygen",
          "label",
          "legend",
          "li",
          "link",
          "main",
          "map",
          "mark",
          "menu",
          "menuitem",
          "meta",
          "meter",
          "nav",
          "noscript",
          "object",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "param",
          "picture",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "script",
          "section",
          "select",
          "small",
          "source",
          "span",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "tr",
          "track",
          "u",
          "ul",
          "use",
          "var",
          "video",
          "wbr",
          "circle",
          "clipPath",
          "defs",
          "ellipse",
          "foreignObject",
          "g",
          "image",
          "line",
          "linearGradient",
          "marker",
          "mask",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialGradient",
          "rect",
          "stop",
          "svg",
          "text",
          "tspan",
        ]),
        ye = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
        be = /(^-|-$)/g;
      function we(e) {
        return e.replace(ye, "-").replace(be, "");
      }
      var xe = /(a)(d)/gi,
        Se = 52,
        ke = function (e) {
          return String.fromCharCode(e + (e > 25 ? 39 : 97));
        };
      function Ee(e) {
        var t,
          n = "";
        for (t = Math.abs(e); t > Se; t = (t / Se) | 0) n = ke(t % Se) + n;
        return (ke(t % Se) + n).replace(xe, "$1-$2");
      }
      var Ce,
        Oe = function (e, t) {
          for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
          return e;
        },
        Pe = function (e) {
          return Oe(5381, e);
        };
      function Ne(e) {
        return "string" == typeof e && !0;
      }
      var _e = "function" == typeof Symbol && Symbol.for,
        Le = _e ? Symbol.for("react.memo") : 60115,
        Te = _e ? Symbol.for("react.forward_ref") : 60112,
        Re = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        je = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        De = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        Ie =
          (((Ce = {})[Te] = {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
          }),
          (Ce[Le] = De),
          Ce);
      function Ae(e) {
        return ("type" in (t = e) && t.type.$$typeof) === Le
          ? De
          : "$$typeof" in e
          ? Ie[e.$$typeof]
          : Re;
        var t;
      }
      var Fe = Object.defineProperty,
        Me = Object.getOwnPropertyNames,
        ze = Object.getOwnPropertySymbols,
        Be = Object.getOwnPropertyDescriptor,
        Ue = Object.getPrototypeOf,
        He = Object.prototype;
      function Ze(e, t, n) {
        if ("string" != typeof t) {
          if (He) {
            var r = Ue(t);
            r && r !== He && Ze(e, r, n);
          }
          var o = Me(t);
          ze && (o = o.concat(ze(t)));
          for (var a = Ae(e), i = Ae(t), s = 0; s < o.length; ++s) {
            var l = o[s];
            if (!(l in je || (n && n[l]) || (i && l in i) || (a && l in a))) {
              var u = Be(t, l);
              try {
                Fe(e, l, u);
              } catch (e) {}
            }
          }
        }
        return e;
      }
      function Ve(e) {
        return "function" == typeof e;
      }
      function We(e) {
        return "object" == typeof e && "styledComponentId" in e;
      }
      function $e(e, t) {
        return e && t ? "".concat(e, " ").concat(t) : e || t || "";
      }
      function Ke(e, t) {
        if (0 === e.length) return "";
        for (var n = e[0], r = 1; r < e.length; r++) n += t ? t + e[r] : e[r];
        return n;
      }
      function qe(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          e.constructor.name === Object.name &&
          !("props" in e && e.$$typeof)
        );
      }
      function Qe(e, t, n) {
        if ((void 0 === n && (n = !1), !n && !qe(e) && !Array.isArray(e)))
          return t;
        if (Array.isArray(t))
          for (var r = 0; r < t.length; r++) e[r] = Qe(e[r], t[r]);
        else if (qe(t)) for (var r in t) e[r] = Qe(e[r], t[r]);
        return e;
      }
      function Je(e, t) {
        Object.defineProperty(e, "toString", { value: t });
      }
      function Ge(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        return new Error(
          "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
            .concat(e, " for more information.")
            .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
        );
      }
      var Ye = (function () {
          function e(e) {
            (this.groupSizes = new Uint32Array(512)),
              (this.length = 512),
              (this.tag = e);
          }
          return (
            (e.prototype.indexOfGroup = function (e) {
              for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
              return t;
            }),
            (e.prototype.insertRules = function (e, t) {
              if (e >= this.groupSizes.length) {
                for (var n = this.groupSizes, r = n.length, o = r; e >= o; )
                  if ((o <<= 1) < 0) throw Ge(16, "".concat(e));
                (this.groupSizes = new Uint32Array(o)),
                  this.groupSizes.set(n),
                  (this.length = o);
                for (var a = r; a < o; a++) this.groupSizes[a] = 0;
              }
              for (
                var i = this.indexOfGroup(e + 1), s = ((a = 0), t.length);
                a < s;
                a++
              )
                this.tag.insertRule(i, t[a]) && (this.groupSizes[e]++, i++);
            }),
            (e.prototype.clearGroup = function (e) {
              if (e < this.length) {
                var t = this.groupSizes[e],
                  n = this.indexOfGroup(e),
                  r = n + t;
                this.groupSizes[e] = 0;
                for (var o = n; o < r; o++) this.tag.deleteRule(n);
              }
            }),
            (e.prototype.getGroup = function (e) {
              var t = "";
              if (e >= this.length || 0 === this.groupSizes[e]) return t;
              for (
                var n = this.groupSizes[e],
                  r = this.indexOfGroup(e),
                  o = r + n,
                  a = r;
                a < o;
                a++
              )
                t += "".concat(this.tag.getRule(a)).concat(fe);
              return t;
            }),
            e
          );
        })(),
        Xe = new Map(),
        et = new Map(),
        tt = 1,
        nt = function (e) {
          if (Xe.has(e)) return Xe.get(e);
          for (; et.has(tt); ) tt++;
          var t = tt++;
          return Xe.set(e, t), et.set(t, e), t;
        },
        rt = function (e, t) {
          (tt = t + 1), Xe.set(e, t), et.set(t, e);
        },
        ot = "style[".concat(le, "][").concat(ce, '="').concat(de, '"]'),
        at = new RegExp(
          "^".concat(le, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
        ),
        it = function (e, t, n) {
          for (var r, o = n.split(","), a = 0, i = o.length; a < i; a++)
            (r = o[a]) && e.registerName(t, r);
        },
        st = function (e, t) {
          for (
            var n,
              r = (null !== (n = t.textContent) && void 0 !== n ? n : "").split(
                fe
              ),
              o = [],
              a = 0,
              i = r.length;
            a < i;
            a++
          ) {
            var s = r[a].trim();
            if (s) {
              var l = s.match(at);
              if (l) {
                var u = 0 | parseInt(l[1], 10),
                  c = l[2];
                0 !== u &&
                  (rt(c, u), it(e, c, l[3]), e.getTag().insertRules(u, o)),
                  (o.length = 0);
              } else o.push(s);
            }
          }
        };
      var lt = function (e) {
          var t = document.head,
            r = e || t,
            o = document.createElement("style"),
            a = (function (e) {
              var t = Array.from(e.querySelectorAll("style[".concat(le, "]")));
              return t[t.length - 1];
            })(r),
            i = void 0 !== a ? a.nextSibling : null;
          o.setAttribute(le, ue), o.setAttribute(ce, de);
          var s = n.nc;
          return s && o.setAttribute("nonce", s), r.insertBefore(o, i), o;
        },
        ut = (function () {
          function e(e) {
            (this.element = lt(e)),
              this.element.appendChild(document.createTextNode("")),
              (this.sheet = (function (e) {
                if (e.sheet) return e.sheet;
                for (
                  var t = document.styleSheets, n = 0, r = t.length;
                  n < r;
                  n++
                ) {
                  var o = t[n];
                  if (o.ownerNode === e) return o;
                }
                throw Ge(17);
              })(this.element)),
              (this.length = 0);
          }
          return (
            (e.prototype.insertRule = function (e, t) {
              try {
                return this.sheet.insertRule(t, e), this.length++, !0;
              } catch (e) {
                return !1;
              }
            }),
            (e.prototype.deleteRule = function (e) {
              this.sheet.deleteRule(e), this.length--;
            }),
            (e.prototype.getRule = function (e) {
              var t = this.sheet.cssRules[e];
              return t && t.cssText ? t.cssText : "";
            }),
            e
          );
        })(),
        ct = (function () {
          function e(e) {
            (this.element = lt(e)),
              (this.nodes = this.element.childNodes),
              (this.length = 0);
          }
          return (
            (e.prototype.insertRule = function (e, t) {
              if (e <= this.length && e >= 0) {
                var n = document.createTextNode(t);
                return (
                  this.element.insertBefore(n, this.nodes[e] || null),
                  this.length++,
                  !0
                );
              }
              return !1;
            }),
            (e.prototype.deleteRule = function (e) {
              this.element.removeChild(this.nodes[e]), this.length--;
            }),
            (e.prototype.getRule = function (e) {
              return e < this.length ? this.nodes[e].textContent : "";
            }),
            e
          );
        })(),
        dt = (function () {
          function e(e) {
            (this.rules = []), (this.length = 0);
          }
          return (
            (e.prototype.insertRule = function (e, t) {
              return (
                e <= this.length &&
                (this.rules.splice(e, 0, t), this.length++, !0)
              );
            }),
            (e.prototype.deleteRule = function (e) {
              this.rules.splice(e, 1), this.length--;
            }),
            (e.prototype.getRule = function (e) {
              return e < this.length ? this.rules[e] : "";
            }),
            e
          );
        })(),
        ft = pe,
        pt = { isServer: !pe, useCSSOMInjection: !he },
        ht = (function () {
          function e(e, t, n) {
            void 0 === e && (e = me), void 0 === t && (t = {});
            var r = this;
            (this.options = o(o({}, pt), e)),
              (this.gs = t),
              (this.names = new Map(n)),
              (this.server = !!e.isServer),
              !this.server &&
                pe &&
                ft &&
                ((ft = !1),
                (function (e) {
                  for (
                    var t = document.querySelectorAll(ot), n = 0, r = t.length;
                    n < r;
                    n++
                  ) {
                    var o = t[n];
                    o &&
                      o.getAttribute(le) !== ue &&
                      (st(e, o), o.parentNode && o.parentNode.removeChild(o));
                  }
                })(this)),
              Je(this, function () {
                return (function (e) {
                  for (
                    var t = e.getTag(),
                      n = t.length,
                      r = "",
                      o = function (n) {
                        var o = (function (e) {
                          return et.get(e);
                        })(n);
                        if (void 0 === o) return "continue";
                        var a = e.names.get(o),
                          i = t.getGroup(n);
                        if (void 0 === a || 0 === i.length) return "continue";
                        var s = ""
                            .concat(le, ".g")
                            .concat(n, '[id="')
                            .concat(o, '"]'),
                          l = "";
                        void 0 !== a &&
                          a.forEach(function (e) {
                            e.length > 0 && (l += "".concat(e, ","));
                          }),
                          (r += ""
                            .concat(i)
                            .concat(s, '{content:"')
                            .concat(l, '"}')
                            .concat(fe));
                      },
                      a = 0;
                    a < n;
                    a++
                  )
                    o(a);
                  return r;
                })(r);
              });
          }
          return (
            (e.registerId = function (e) {
              return nt(e);
            }),
            (e.prototype.reconstructWithOptions = function (t, n) {
              return (
                void 0 === n && (n = !0),
                new e(
                  o(o({}, this.options), t),
                  this.gs,
                  (n && this.names) || void 0
                )
              );
            }),
            (e.prototype.allocateGSInstance = function (e) {
              return (this.gs[e] = (this.gs[e] || 0) + 1);
            }),
            (e.prototype.getTag = function () {
              return (
                this.tag ||
                (this.tag =
                  ((e = (function (e) {
                    var t = e.useCSSOMInjection,
                      n = e.target;
                    return e.isServer ? new dt(n) : t ? new ut(n) : new ct(n);
                  })(this.options)),
                  new Ye(e)))
              );
              var e;
            }),
            (e.prototype.hasNameForId = function (e, t) {
              return this.names.has(e) && this.names.get(e).has(t);
            }),
            (e.prototype.registerName = function (e, t) {
              if ((nt(e), this.names.has(e))) this.names.get(e).add(t);
              else {
                var n = new Set();
                n.add(t), this.names.set(e, n);
              }
            }),
            (e.prototype.insertRules = function (e, t, n) {
              this.registerName(e, t), this.getTag().insertRules(nt(e), n);
            }),
            (e.prototype.clearNames = function (e) {
              this.names.has(e) && this.names.get(e).clear();
            }),
            (e.prototype.clearRules = function (e) {
              this.getTag().clearGroup(nt(e)), this.clearNames(e);
            }),
            (e.prototype.clearTag = function () {
              this.tag = void 0;
            }),
            e
          );
        })(),
        gt = /&/g,
        mt = /^\s*\/\/.*$/gm;
      function vt(e, t) {
        return e.map(function (e) {
          return (
            "rule" === e.type &&
              ((e.value = "".concat(t, " ").concat(e.value)),
              (e.value = e.value.replaceAll(",", ",".concat(t, " "))),
              (e.props = e.props.map(function (e) {
                return "".concat(t, " ").concat(e);
              }))),
            Array.isArray(e.children) &&
              "@keyframes" !== e.type &&
              (e.children = vt(e.children, t)),
            e
          );
        });
      }
      var yt = new ht(),
        bt = (function (e) {
          var t,
            n,
            r,
            o = void 0 === e ? me : e,
            a = o.options,
            i = void 0 === a ? me : a,
            s = o.plugins,
            l = void 0 === s ? ge : s,
            u = function (e, r, o) {
              return o.startsWith(n) &&
                o.endsWith(n) &&
                o.replaceAll(n, "").length > 0
                ? ".".concat(t)
                : e;
            },
            c = l.slice();
          c.push(function (e) {
            e.type === p &&
              e.value.includes("&") &&
              (e.props[0] = e.props[0].replace(gt, n).replace(r, u));
          }),
            i.prefix && c.push(ie),
            c.push(ae);
          var d = function (e, o, a, s) {
            void 0 === o && (o = ""),
              void 0 === a && (a = ""),
              void 0 === s && (s = "&"),
              (t = s),
              (n = o),
              (r = new RegExp("\\".concat(n, "\\b"), "g"));
            var l = e.replace(mt, ""),
              u = Y(
                a || o ? "".concat(a, " ").concat(o, " { ").concat(l, " }") : l
              );
            i.namespace && (u = vt(u, i.namespace));
            var d,
              f = [];
            return (
              oe(
                u,
                (function (e) {
                  var t = N(e);
                  return function (n, r, o, a) {
                    for (var i = "", s = 0; s < t; s++)
                      i += e[s](n, r, o, a) || "";
                    return i;
                  };
                })(
                  c.concat(
                    ((d = function (e) {
                      return f.push(e);
                    }),
                    function (e) {
                      e.root || ((e = e.return) && d(e));
                    })
                  )
                )
              ),
              f
            );
          };
          return (
            (d.hash = l.length
              ? l
                  .reduce(function (e, t) {
                    return t.name || Ge(15), Oe(e, t.name);
                  }, 5381)
                  .toString()
              : ""),
            d
          );
        })(),
        wt = e.createContext({
          shouldForwardProp: void 0,
          styleSheet: yt,
          stylis: bt,
        });
      function xt() {
        return (0, e.useContext)(wt);
      }
      wt.Consumer, e.createContext(void 0);
      var St = (function () {
          function e(e, t) {
            var n = this;
            (this.inject = function (e, t) {
              void 0 === t && (t = bt);
              var r = n.name + t.hash;
              e.hasNameForId(n.id, r) ||
                e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
            }),
              (this.name = e),
              (this.id = "sc-keyframes-".concat(e)),
              (this.rules = t),
              Je(this, function () {
                throw Ge(12, String(n.name));
              });
          }
          return (
            (e.prototype.getName = function (e) {
              return void 0 === e && (e = bt), this.name + e.hash;
            }),
            e
          );
        })(),
        kt = function (e) {
          return e >= "A" && e <= "Z";
        };
      function Et(e) {
        for (var t = "", n = 0; n < e.length; n++) {
          var r = e[n];
          if (1 === n && "-" === r && "-" === e[0]) return e;
          kt(r) ? (t += "-" + r.toLowerCase()) : (t += r);
        }
        return t.startsWith("ms-") ? "-" + t : t;
      }
      var Ct = function (e) {
          return null == e || !1 === e || "" === e;
        },
        Ot = function (e) {
          var t,
            n,
            r = [];
          for (var o in e) {
            var i = e[o];
            e.hasOwnProperty(o) &&
              !Ct(i) &&
              ((Array.isArray(i) && i.isCss) || Ve(i)
                ? r.push("".concat(Et(o), ":"), i, ";")
                : qe(i)
                ? r.push.apply(
                    r,
                    a(a(["".concat(o, " {")], Ot(i), !1), ["}"], !1)
                  )
                : r.push(
                    ""
                      .concat(Et(o), ": ")
                      .concat(
                        ((t = o),
                        null == (n = i) || "boolean" == typeof n || "" === n
                          ? ""
                          : "number" != typeof n ||
                            0 === n ||
                            t in se ||
                            t.startsWith("--")
                          ? String(n).trim()
                          : "".concat(n, "px")),
                        ";"
                      )
                  ));
          }
          return r;
        };
      function Pt(e, t, n, r) {
        return Ct(e)
          ? []
          : We(e)
          ? [".".concat(e.styledComponentId)]
          : Ve(e)
          ? !Ve((o = e)) || (o.prototype && o.prototype.isReactComponent) || !t
            ? [e]
            : Pt(e(t), t, n, r)
          : e instanceof St
          ? n
            ? (e.inject(n, r), [e.getName(r)])
            : [e]
          : qe(e)
          ? Ot(e)
          : Array.isArray(e)
          ? Array.prototype.concat.apply(
              ge,
              e.map(function (e) {
                return Pt(e, t, n, r);
              })
            )
          : [e.toString()];
        var o;
      }
      var Nt = Pe(de),
        _t = (function () {
          function e(e, t, n) {
            (this.rules = e),
              (this.staticRulesId = ""),
              (this.isStatic =
                (void 0 === n || n.isStatic) &&
                (function (e) {
                  for (var t = 0; t < e.length; t += 1) {
                    var n = e[t];
                    if (Ve(n) && !We(n)) return !1;
                  }
                  return !0;
                })(e)),
              (this.componentId = t),
              (this.baseHash = Oe(Nt, t)),
              (this.baseStyle = n),
              ht.registerId(t);
          }
          return (
            (e.prototype.generateAndInjectStyles = function (e, t, n) {
              var r = this.baseStyle
                ? this.baseStyle.generateAndInjectStyles(e, t, n)
                : "";
              if (this.isStatic && !n.hash)
                if (
                  this.staticRulesId &&
                  t.hasNameForId(this.componentId, this.staticRulesId)
                )
                  r = $e(r, this.staticRulesId);
                else {
                  var o = Ke(Pt(this.rules, e, t, n)),
                    a = Ee(Oe(this.baseHash, o) >>> 0);
                  if (!t.hasNameForId(this.componentId, a)) {
                    var i = n(o, ".".concat(a), void 0, this.componentId);
                    t.insertRules(this.componentId, a, i);
                  }
                  (r = $e(r, a)), (this.staticRulesId = a);
                }
              else {
                for (
                  var s = Oe(this.baseHash, n.hash), l = "", u = 0;
                  u < this.rules.length;
                  u++
                ) {
                  var c = this.rules[u];
                  if ("string" == typeof c) l += c;
                  else if (c) {
                    var d = Ke(Pt(c, e, t, n));
                    (s = Oe(s, d + u)), (l += d);
                  }
                }
                if (l) {
                  var f = Ee(s >>> 0);
                  t.hasNameForId(this.componentId, f) ||
                    t.insertRules(
                      this.componentId,
                      f,
                      n(l, ".".concat(f), void 0, this.componentId)
                    ),
                    (r = $e(r, f));
                }
              }
              return r;
            }),
            e
          );
        })(),
        Lt = e.createContext(void 0);
      function Tt(t) {
        var n = e.useContext(Lt),
          r = (0, e.useMemo)(
            function () {
              return (function (e, t) {
                if (!e) throw Ge(14);
                if (Ve(e)) return e(t);
                if (Array.isArray(e) || "object" != typeof e) throw Ge(8);
                return t ? o(o({}, t), e) : e;
              })(t.theme, n);
            },
            [t.theme, n]
          );
        return t.children
          ? e.createElement(Lt.Provider, { value: r }, t.children)
          : null;
      }
      Lt.Consumer;
      var Rt = {};
      new Set();
      function jt(t, n, r) {
        var a = We(t),
          i = t,
          s = !Ne(t),
          l = n.attrs,
          u = void 0 === l ? ge : l,
          c = n.componentId,
          d =
            void 0 === c
              ? (function (e, t) {
                  var n = "string" != typeof e ? "sc" : we(e);
                  Rt[n] = (Rt[n] || 0) + 1;
                  var r = "".concat(n, "-").concat(
                    (function (e) {
                      return Ee(Pe(e) >>> 0);
                    })(de + n + Rt[n])
                  );
                  return t ? "".concat(t, "-").concat(r) : r;
                })(n.displayName, n.parentComponentId)
              : c,
          f = n.displayName,
          p =
            void 0 === f
              ? (function (e) {
                  return Ne(e)
                    ? "styled.".concat(e)
                    : "Styled(".concat(
                        (function (e) {
                          return e.displayName || e.name || "Component";
                        })(e),
                        ")"
                      );
                })(t)
              : f,
          h =
            n.displayName && n.componentId
              ? "".concat(we(n.displayName), "-").concat(n.componentId)
              : n.componentId || d,
          g = a && i.attrs ? i.attrs.concat(u).filter(Boolean) : u,
          m = n.shouldForwardProp;
        if (a && i.shouldForwardProp) {
          var v = i.shouldForwardProp;
          if (n.shouldForwardProp) {
            var y = n.shouldForwardProp;
            m = function (e, t) {
              return v(e, t) && y(e, t);
            };
          } else m = v;
        }
        var b = new _t(r, h, a ? i.componentStyle : void 0);
        function w(t, n) {
          return (function (t, n, r) {
            var a = t.attrs,
              i = t.componentStyle,
              s = t.defaultProps,
              l = t.foldedComponentIds,
              u = t.styledComponentId,
              c = t.target,
              d = e.useContext(Lt),
              f = xt(),
              p = t.shouldForwardProp || f.shouldForwardProp,
              h =
                (function (e, t, n) {
                  return (
                    void 0 === n && (n = me),
                    (e.theme !== n.theme && e.theme) || t || n.theme
                  );
                })(n, d, s) || me,
              g = (function (e, t, n) {
                for (
                  var r,
                    a = o(o({}, t), { className: void 0, theme: n }),
                    i = 0;
                  i < e.length;
                  i += 1
                ) {
                  var s = Ve((r = e[i])) ? r(a) : r;
                  for (var l in s)
                    a[l] =
                      "className" === l
                        ? $e(a[l], s[l])
                        : "style" === l
                        ? o(o({}, a[l]), s[l])
                        : s[l];
                }
                return (
                  t.className && (a.className = $e(a.className, t.className)), a
                );
              })(a, n, h),
              m = g.as || c,
              v = {};
            for (var y in g)
              void 0 === g[y] ||
                "$" === y[0] ||
                "as" === y ||
                ("theme" === y && g.theme === h) ||
                ("forwardedAs" === y
                  ? (v.as = g.forwardedAs)
                  : (p && !p(y, m)) || (v[y] = g[y]));
            var b = (function (e, t) {
                var n = xt();
                return e.generateAndInjectStyles(t, n.styleSheet, n.stylis);
              })(i, g),
              w = $e(l, u);
            return (
              b && (w += " " + b),
              g.className && (w += " " + g.className),
              (v[Ne(m) && !ve.has(m) ? "class" : "className"] = w),
              (v.ref = r),
              (0, e.createElement)(m, v)
            );
          })(x, t, n);
        }
        w.displayName = p;
        var x = e.forwardRef(w);
        return (
          (x.attrs = g),
          (x.componentStyle = b),
          (x.displayName = p),
          (x.shouldForwardProp = m),
          (x.foldedComponentIds = a
            ? $e(i.foldedComponentIds, i.styledComponentId)
            : ""),
          (x.styledComponentId = h),
          (x.target = a ? i.target : t),
          Object.defineProperty(x, "defaultProps", {
            get: function () {
              return this._foldedDefaultProps;
            },
            set: function (e) {
              this._foldedDefaultProps = a
                ? (function (e) {
                    for (var t = [], n = 1; n < arguments.length; n++)
                      t[n - 1] = arguments[n];
                    for (var r = 0, o = t; r < o.length; r++) Qe(e, o[r], !0);
                    return e;
                  })({}, i.defaultProps, e)
                : e;
            },
          }),
          Je(x, function () {
            return ".".concat(x.styledComponentId);
          }),
          s &&
            Ze(x, t, {
              attrs: !0,
              componentStyle: !0,
              displayName: !0,
              foldedComponentIds: !0,
              shouldForwardProp: !0,
              styledComponentId: !0,
              target: !0,
            }),
          x
        );
      }
      function Dt(e, t) {
        for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
          n.push(t[r], e[r + 1]);
        return n;
      }
      var It = function (e) {
        return Object.assign(e, { isCss: !0 });
      };
      function At(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        if (Ve(e) || qe(e)) return It(Pt(Dt(ge, a([e], t, !0))));
        var r = e;
        return 0 === t.length && 1 === r.length && "string" == typeof r[0]
          ? Pt(r)
          : It(Pt(Dt(r, t)));
      }
      function Ft(e, t, n) {
        if ((void 0 === n && (n = me), !t)) throw Ge(1, t);
        var r = function (r) {
          for (var o = [], i = 1; i < arguments.length; i++)
            o[i - 1] = arguments[i];
          return e(t, n, At.apply(void 0, a([r], o, !1)));
        };
        return (
          (r.attrs = function (r) {
            return Ft(
              e,
              t,
              o(o({}, n), {
                attrs: Array.prototype.concat(n.attrs, r).filter(Boolean),
              })
            );
          }),
          (r.withConfig = function (r) {
            return Ft(e, t, o(o({}, n), r));
          }),
          r
        );
      }
      var Mt = function (e) {
          return Ft(jt, e);
        },
        zt = Mt;
      ve.forEach(function (e) {
        zt[e] = Mt(e);
      });
      "__sc-".concat(le, "__");
      const Bt = {
        type: "logger",
        log(e) {
          this.output("log", e);
        },
        warn(e) {
          this.output("warn", e);
        },
        error(e) {
          this.output("error", e);
        },
        output(e, t) {
          console && console[e] && console[e].apply(console, t);
        },
      };
      class Ut {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          this.init(e, t);
        }
        init(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          (this.prefix = t.prefix || "i18next:"),
            (this.logger = e || Bt),
            (this.options = t),
            (this.debug = t.debug);
        }
        log() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.forward(t, "log", "", !0);
        }
        warn() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.forward(t, "warn", "", !0);
        }
        error() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.forward(t, "error", "");
        }
        deprecate() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
        }
        forward(e, t, n, r) {
          return r && !this.debug
            ? null
            : ("string" === typeof e[0] &&
                (e[0] = "".concat(n).concat(this.prefix, " ").concat(e[0])),
              this.logger[t](e));
        }
        create(e) {
          return new Ut(this.logger, {
            prefix: "".concat(this.prefix, ":").concat(e, ":"),
            ...this.options,
          });
        }
        clone(e) {
          return (
            ((e = e || this.options).prefix = e.prefix || this.prefix),
            new Ut(this.logger, e)
          );
        }
      }
      var Ht = new Ut();
      class Zt {
        constructor() {
          this.observers = {};
        }
        on(e, t) {
          return (
            e.split(" ").forEach((e) => {
              this.observers[e] || (this.observers[e] = new Map());
              const n = this.observers[e].get(t) || 0;
              this.observers[e].set(t, n + 1);
            }),
            this
          );
        }
        off(e, t) {
          this.observers[e] &&
            (t ? this.observers[e].delete(t) : delete this.observers[e]);
        }
        emit(e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          if (this.observers[e]) {
            Array.from(this.observers[e].entries()).forEach((e) => {
              let [t, r] = e;
              for (let o = 0; o < r; o++) t(...n);
            });
          }
          if (this.observers["*"]) {
            Array.from(this.observers["*"].entries()).forEach((t) => {
              let [r, o] = t;
              for (let a = 0; a < o; a++) r.apply(r, [e, ...n]);
            });
          }
        }
      }
      function Vt() {
        let e, t;
        const n = new Promise((n, r) => {
          (e = n), (t = r);
        });
        return (n.resolve = e), (n.reject = t), n;
      }
      function Wt(e) {
        return null == e ? "" : "" + e;
      }
      const $t = /###/g;
      function Kt(e, t, n) {
        function r(e) {
          return e && e.indexOf("###") > -1 ? e.replace($t, ".") : e;
        }
        function o() {
          return !e || "string" === typeof e;
        }
        const a = "string" !== typeof t ? t : t.split(".");
        let i = 0;
        for (; i < a.length - 1; ) {
          if (o()) return {};
          const t = r(a[i]);
          !e[t] && n && (e[t] = new n()),
            (e = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : {}),
            ++i;
        }
        return o() ? {} : { obj: e, k: r(a[i]) };
      }
      function qt(e, t, n) {
        const { obj: r, k: o } = Kt(e, t, Object);
        if (void 0 !== r || 1 === t.length) return void (r[o] = n);
        let a = t[t.length - 1],
          i = t.slice(0, t.length - 1),
          s = Kt(e, i, Object);
        for (; void 0 === s.obj && i.length; )
          (a = "".concat(i[i.length - 1], ".").concat(a)),
            (i = i.slice(0, i.length - 1)),
            (s = Kt(e, i, Object)),
            s &&
              s.obj &&
              "undefined" !== typeof s.obj["".concat(s.k, ".").concat(a)] &&
              (s.obj = void 0);
        s.obj["".concat(s.k, ".").concat(a)] = n;
      }
      function Qt(e, t) {
        const { obj: n, k: r } = Kt(e, t);
        if (n) return n[r];
      }
      function Jt(e, t, n) {
        for (const r in t)
          "__proto__" !== r &&
            "constructor" !== r &&
            (r in e
              ? "string" === typeof e[r] ||
                e[r] instanceof String ||
                "string" === typeof t[r] ||
                t[r] instanceof String
                ? n && (e[r] = t[r])
                : Jt(e[r], t[r], n)
              : (e[r] = t[r]));
        return e;
      }
      function Gt(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
      }
      var Yt = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
      };
      function Xt(e) {
        return "string" === typeof e
          ? e.replace(/[&<>"'\/]/g, (e) => Yt[e])
          : e;
      }
      const en = [" ", ",", "?", "!", ";"],
        tn = new (class {
          constructor(e) {
            (this.capacity = e),
              (this.regExpMap = new Map()),
              (this.regExpQueue = []);
          }
          getRegExp(e) {
            const t = this.regExpMap.get(e);
            if (void 0 !== t) return t;
            const n = new RegExp(e);
            return (
              this.regExpQueue.length === this.capacity &&
                this.regExpMap.delete(this.regExpQueue.shift()),
              this.regExpMap.set(e, n),
              this.regExpQueue.push(e),
              n
            );
          }
        })(20);
      function nn(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
        if (!e) return;
        if (e[t]) return e[t];
        const r = t.split(n);
        let o = e;
        for (let a = 0; a < r.length; ) {
          if (!o || "object" !== typeof o) return;
          let e,
            t = "";
          for (let i = a; i < r.length; ++i)
            if ((i !== a && (t += n), (t += r[i]), (e = o[t]), void 0 !== e)) {
              if (
                ["string", "number", "boolean"].indexOf(typeof e) > -1 &&
                i < r.length - 1
              )
                continue;
              a += i - a + 1;
              break;
            }
          o = e;
        }
        return o;
      }
      function rn(e) {
        return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e;
      }
      class on extends Zt {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { ns: ["translation"], defaultNS: "translation" };
          super(),
            (this.data = e || {}),
            (this.options = t),
            void 0 === this.options.keySeparator &&
              (this.options.keySeparator = "."),
            void 0 === this.options.ignoreJSONStructure &&
              (this.options.ignoreJSONStructure = !0);
        }
        addNamespaces(e) {
          this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
        }
        removeNamespaces(e) {
          const t = this.options.ns.indexOf(e);
          t > -1 && this.options.ns.splice(t, 1);
        }
        getResource(e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          const o =
              void 0 !== r.keySeparator
                ? r.keySeparator
                : this.options.keySeparator,
            a =
              void 0 !== r.ignoreJSONStructure
                ? r.ignoreJSONStructure
                : this.options.ignoreJSONStructure;
          let i;
          e.indexOf(".") > -1
            ? (i = e.split("."))
            : ((i = [e, t]),
              n &&
                (Array.isArray(n)
                  ? i.push(...n)
                  : "string" === typeof n && o
                  ? i.push(...n.split(o))
                  : i.push(n)));
          const s = Qt(this.data, i);
          return (
            !s &&
              !t &&
              !n &&
              e.indexOf(".") > -1 &&
              ((e = i[0]), (t = i[1]), (n = i.slice(2).join("."))),
            s || !a || "string" !== typeof n
              ? s
              : nn(this.data && this.data[e] && this.data[e][t], n, o)
          );
        }
        addResource(e, t, n, r) {
          let o =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : { silent: !1 };
          const a =
            void 0 !== o.keySeparator
              ? o.keySeparator
              : this.options.keySeparator;
          let i = [e, t];
          n && (i = i.concat(a ? n.split(a) : n)),
            e.indexOf(".") > -1 && ((i = e.split(".")), (r = t), (t = i[1])),
            this.addNamespaces(t),
            qt(this.data, i, r),
            o.silent || this.emit("added", e, t, n, r);
        }
        addResources(e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : { silent: !1 };
          for (const o in n)
            ("string" !== typeof n[o] &&
              "[object Array]" !== Object.prototype.toString.apply(n[o])) ||
              this.addResource(e, t, o, n[o], { silent: !0 });
          r.silent || this.emit("added", e, t, n);
        }
        addResourceBundle(e, t, n, r, o) {
          let a =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : { silent: !1 },
            i = [e, t];
          e.indexOf(".") > -1 &&
            ((i = e.split(".")), (r = n), (n = t), (t = i[1])),
            this.addNamespaces(t);
          let s = Qt(this.data, i) || {};
          r ? Jt(s, n, o) : (s = { ...s, ...n }),
            qt(this.data, i, s),
            a.silent || this.emit("added", e, t, n);
        }
        removeResourceBundle(e, t) {
          this.hasResourceBundle(e, t) && delete this.data[e][t],
            this.removeNamespaces(t),
            this.emit("removed", e, t);
        }
        hasResourceBundle(e, t) {
          return void 0 !== this.getResource(e, t);
        }
        getResourceBundle(e, t) {
          return (
            t || (t = this.options.defaultNS),
            "v1" === this.options.compatibilityAPI
              ? { ...this.getResource(e, t) }
              : this.getResource(e, t)
          );
        }
        getDataByLanguage(e) {
          return this.data[e];
        }
        hasLanguageSomeTranslations(e) {
          const t = this.getDataByLanguage(e);
          return !!((t && Object.keys(t)) || []).find(
            (e) => t[e] && Object.keys(t[e]).length > 0
          );
        }
        toJSON() {
          return this.data;
        }
      }
      var an = {
        processors: {},
        addPostProcessor(e) {
          this.processors[e.name] = e;
        },
        handle(e, t, n, r, o) {
          return (
            e.forEach((e) => {
              this.processors[e] &&
                (t = this.processors[e].process(t, n, r, o));
            }),
            t
          );
        },
      };
      const sn = {};
      class ln extends Zt {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          super(),
            (function (e, t, n) {
              e.forEach((e) => {
                t[e] && (n[e] = t[e]);
              });
            })(
              [
                "resourceStore",
                "languageUtils",
                "pluralResolver",
                "interpolator",
                "backendConnector",
                "i18nFormat",
                "utils",
              ],
              e,
              this
            ),
            (this.options = t),
            void 0 === this.options.keySeparator &&
              (this.options.keySeparator = "."),
            (this.logger = Ht.create("translator"));
        }
        changeLanguage(e) {
          e && (this.language = e);
        }
        exists(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { interpolation: {} };
          if (void 0 === e || null === e) return !1;
          const n = this.resolve(e, t);
          return n && void 0 !== n.res;
        }
        extractFromKey(e, t) {
          let n =
            void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
          void 0 === n && (n = ":");
          const r =
            void 0 !== t.keySeparator
              ? t.keySeparator
              : this.options.keySeparator;
          let o = t.ns || this.options.defaultNS || [];
          const a = n && e.indexOf(n) > -1,
            i =
              !this.options.userDefinedKeySeparator &&
              !t.keySeparator &&
              !this.options.userDefinedNsSeparator &&
              !t.nsSeparator &&
              !(function (e, t, n) {
                (t = t || ""), (n = n || "");
                const r = en.filter(
                  (e) => t.indexOf(e) < 0 && n.indexOf(e) < 0
                );
                if (0 === r.length) return !0;
                const o = tn.getRegExp(
                  "(".concat(
                    r.map((e) => ("?" === e ? "\\?" : e)).join("|"),
                    ")"
                  )
                );
                let a = !o.test(e);
                if (!a) {
                  const t = e.indexOf(n);
                  t > 0 && !o.test(e.substring(0, t)) && (a = !0);
                }
                return a;
              })(e, n, r);
          if (a && !i) {
            const t = e.match(this.interpolator.nestingRegexp);
            if (t && t.length > 0) return { key: e, namespaces: o };
            const a = e.split(n);
            (n !== r || (n === r && this.options.ns.indexOf(a[0]) > -1)) &&
              (o = a.shift()),
              (e = a.join(r));
          }
          return "string" === typeof o && (o = [o]), { key: e, namespaces: o };
        }
        translate(e, t, n) {
          if (
            ("object" !== typeof t &&
              this.options.overloadTranslationOptionHandler &&
              (t = this.options.overloadTranslationOptionHandler(arguments)),
            "object" === typeof t && (t = { ...t }),
            t || (t = {}),
            void 0 === e || null === e)
          )
            return "";
          Array.isArray(e) || (e = [String(e)]);
          const r =
              void 0 !== t.returnDetails
                ? t.returnDetails
                : this.options.returnDetails,
            o =
              void 0 !== t.keySeparator
                ? t.keySeparator
                : this.options.keySeparator,
            { key: a, namespaces: i } = this.extractFromKey(e[e.length - 1], t),
            s = i[i.length - 1],
            l = t.lng || this.language,
            u =
              t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
          if (l && "cimode" === l.toLowerCase()) {
            if (u) {
              const e = t.nsSeparator || this.options.nsSeparator;
              return r
                ? {
                    res: "".concat(s).concat(e).concat(a),
                    usedKey: a,
                    exactUsedKey: a,
                    usedLng: l,
                    usedNS: s,
                    usedParams: this.getUsedParamsDetails(t),
                  }
                : "".concat(s).concat(e).concat(a);
            }
            return r
              ? {
                  res: a,
                  usedKey: a,
                  exactUsedKey: a,
                  usedLng: l,
                  usedNS: s,
                  usedParams: this.getUsedParamsDetails(t),
                }
              : a;
          }
          const c = this.resolve(e, t);
          let d = c && c.res;
          const f = (c && c.usedKey) || a,
            p = (c && c.exactUsedKey) || a,
            h = Object.prototype.toString.apply(d),
            g =
              void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays,
            m = !this.i18nFormat || this.i18nFormat.handleAsObject;
          if (
            m &&
            d &&
            "string" !== typeof d &&
            "boolean" !== typeof d &&
            "number" !== typeof d &&
            ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(
              h
            ) < 0 &&
            ("string" !== typeof g || "[object Array]" !== h)
          ) {
            if (!t.returnObjects && !this.options.returnObjects) {
              this.options.returnedObjectHandler ||
                this.logger.warn(
                  "accessing an object - but returnObjects options is not enabled!"
                );
              const e = this.options.returnedObjectHandler
                ? this.options.returnedObjectHandler(f, d, { ...t, ns: i })
                : "key '"
                    .concat(a, " (")
                    .concat(
                      this.language,
                      ")' returned an object instead of string."
                    );
              return r
                ? ((c.res = e),
                  (c.usedParams = this.getUsedParamsDetails(t)),
                  c)
                : e;
            }
            if (o) {
              const e = "[object Array]" === h,
                n = e ? [] : {},
                r = e ? p : f;
              for (const a in d)
                if (Object.prototype.hasOwnProperty.call(d, a)) {
                  const e = "".concat(r).concat(o).concat(a);
                  (n[a] = this.translate(e, { ...t, joinArrays: !1, ns: i })),
                    n[a] === e && (n[a] = d[a]);
                }
              d = n;
            }
          } else if (m && "string" === typeof g && "[object Array]" === h)
            (d = d.join(g)), d && (d = this.extendTranslation(d, e, t, n));
          else {
            let r = !1,
              i = !1;
            const u = void 0 !== t.count && "string" !== typeof t.count,
              f = ln.hasDefaultValue(t),
              p = u ? this.pluralResolver.getSuffix(l, t.count, t) : "",
              h =
                t.ordinal && u
                  ? this.pluralResolver.getSuffix(l, t.count, { ordinal: !1 })
                  : "",
              g =
                u &&
                !t.ordinal &&
                0 === t.count &&
                this.pluralResolver.shouldUseIntlApi(),
              m =
                (g &&
                  t[
                    "defaultValue".concat(this.options.pluralSeparator, "zero")
                  ]) ||
                t["defaultValue".concat(p)] ||
                t["defaultValue".concat(h)] ||
                t.defaultValue;
            !this.isValidLookup(d) && f && ((r = !0), (d = m)),
              this.isValidLookup(d) || ((i = !0), (d = a));
            const v =
                (t.missingKeyNoValueFallbackToKey ||
                  this.options.missingKeyNoValueFallbackToKey) &&
                i
                  ? void 0
                  : d,
              y = f && m !== d && this.options.updateMissing;
            if (i || r || y) {
              if (
                (this.logger.log(
                  y ? "updateKey" : "missingKey",
                  l,
                  s,
                  a,
                  y ? m : d
                ),
                o)
              ) {
                const e = this.resolve(a, { ...t, keySeparator: !1 });
                e &&
                  e.res &&
                  this.logger.warn(
                    "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
                  );
              }
              let e = [];
              const n = this.languageUtils.getFallbackCodes(
                this.options.fallbackLng,
                t.lng || this.language
              );
              if ("fallback" === this.options.saveMissingTo && n && n[0])
                for (let t = 0; t < n.length; t++) e.push(n[t]);
              else
                "all" === this.options.saveMissingTo
                  ? (e = this.languageUtils.toResolveHierarchy(
                      t.lng || this.language
                    ))
                  : e.push(t.lng || this.language);
              const r = (e, n, r) => {
                const o = f && r !== d ? r : v;
                this.options.missingKeyHandler
                  ? this.options.missingKeyHandler(e, s, n, o, y, t)
                  : this.backendConnector &&
                    this.backendConnector.saveMissing &&
                    this.backendConnector.saveMissing(e, s, n, o, y, t),
                  this.emit("missingKey", e, s, n, d);
              };
              this.options.saveMissing &&
                (this.options.saveMissingPlurals && u
                  ? e.forEach((e) => {
                      const n = this.pluralResolver.getSuffixes(e, t);
                      g &&
                        t[
                          "defaultValue".concat(
                            this.options.pluralSeparator,
                            "zero"
                          )
                        ] &&
                        n.indexOf(
                          "".concat(this.options.pluralSeparator, "zero")
                        ) < 0 &&
                        n.push("".concat(this.options.pluralSeparator, "zero")),
                        n.forEach((n) => {
                          r([e], a + n, t["defaultValue".concat(n)] || m);
                        });
                    })
                  : r(e, a, m));
            }
            (d = this.extendTranslation(d, e, t, c, n)),
              i &&
                d === a &&
                this.options.appendNamespaceToMissingKey &&
                (d = "".concat(s, ":").concat(a)),
              (i || r) &&
                this.options.parseMissingKeyHandler &&
                (d =
                  "v1" !== this.options.compatibilityAPI
                    ? this.options.parseMissingKeyHandler(
                        this.options.appendNamespaceToMissingKey
                          ? "".concat(s, ":").concat(a)
                          : a,
                        r ? d : void 0
                      )
                    : this.options.parseMissingKeyHandler(d));
          }
          return r
            ? ((c.res = d), (c.usedParams = this.getUsedParamsDetails(t)), c)
            : d;
        }
        extendTranslation(e, t, n, r, o) {
          var a = this;
          if (this.i18nFormat && this.i18nFormat.parse)
            e = this.i18nFormat.parse(
              e,
              { ...this.options.interpolation.defaultVariables, ...n },
              n.lng || this.language || r.usedLng,
              r.usedNS,
              r.usedKey,
              { resolved: r }
            );
          else if (!n.skipInterpolation) {
            n.interpolation &&
              this.interpolator.init({
                ...n,
                interpolation: {
                  ...this.options.interpolation,
                  ...n.interpolation,
                },
              });
            const i =
              "string" === typeof e &&
              (n &&
              n.interpolation &&
              void 0 !== n.interpolation.skipOnVariables
                ? n.interpolation.skipOnVariables
                : this.options.interpolation.skipOnVariables);
            let s;
            if (i) {
              const t = e.match(this.interpolator.nestingRegexp);
              s = t && t.length;
            }
            let l = n.replace && "string" !== typeof n.replace ? n.replace : n;
            if (
              (this.options.interpolation.defaultVariables &&
                (l = { ...this.options.interpolation.defaultVariables, ...l }),
              (e = this.interpolator.interpolate(
                e,
                l,
                n.lng || this.language,
                n
              )),
              i)
            ) {
              const t = e.match(this.interpolator.nestingRegexp);
              s < (t && t.length) && (n.nest = !1);
            }
            !n.lng &&
              "v1" !== this.options.compatibilityAPI &&
              r &&
              r.res &&
              (n.lng = r.usedLng),
              !1 !== n.nest &&
                (e = this.interpolator.nest(
                  e,
                  function () {
                    for (
                      var e = arguments.length, r = new Array(e), i = 0;
                      i < e;
                      i++
                    )
                      r[i] = arguments[i];
                    return o && o[0] === r[0] && !n.context
                      ? (a.logger.warn(
                          "It seems you are nesting recursively key: "
                            .concat(r[0], " in key: ")
                            .concat(t[0])
                        ),
                        null)
                      : a.translate(...r, t);
                  },
                  n
                )),
              n.interpolation && this.interpolator.reset();
          }
          const i = n.postProcess || this.options.postProcess,
            s = "string" === typeof i ? [i] : i;
          return (
            void 0 !== e &&
              null !== e &&
              s &&
              s.length &&
              !1 !== n.applyPostProcessor &&
              (e = an.handle(
                s,
                e,
                t,
                this.options && this.options.postProcessPassResolved
                  ? {
                      i18nResolved: {
                        ...r,
                        usedParams: this.getUsedParamsDetails(n),
                      },
                      ...n,
                    }
                  : n,
                this
              )),
            e
          );
        }
        resolve(e) {
          let t,
            n,
            r,
            o,
            a,
            i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return (
            "string" === typeof e && (e = [e]),
            e.forEach((e) => {
              if (this.isValidLookup(t)) return;
              const s = this.extractFromKey(e, i),
                l = s.key;
              n = l;
              let u = s.namespaces;
              this.options.fallbackNS &&
                (u = u.concat(this.options.fallbackNS));
              const c = void 0 !== i.count && "string" !== typeof i.count,
                d =
                  c &&
                  !i.ordinal &&
                  0 === i.count &&
                  this.pluralResolver.shouldUseIntlApi(),
                f =
                  void 0 !== i.context &&
                  ("string" === typeof i.context ||
                    "number" === typeof i.context) &&
                  "" !== i.context,
                p = i.lngs
                  ? i.lngs
                  : this.languageUtils.toResolveHierarchy(
                      i.lng || this.language,
                      i.fallbackLng
                    );
              u.forEach((e) => {
                this.isValidLookup(t) ||
                  ((a = e),
                  !sn["".concat(p[0], "-").concat(e)] &&
                    this.utils &&
                    this.utils.hasLoadedNamespace &&
                    !this.utils.hasLoadedNamespace(a) &&
                    ((sn["".concat(p[0], "-").concat(e)] = !0),
                    this.logger.warn(
                      'key "'
                        .concat(n, '" for languages "')
                        .concat(
                          p.join(", "),
                          '" won\'t get resolved as namespace "'
                        )
                        .concat(a, '" was not yet loaded'),
                      "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
                    )),
                  p.forEach((n) => {
                    if (this.isValidLookup(t)) return;
                    o = n;
                    const a = [l];
                    if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                      this.i18nFormat.addLookupKeys(a, l, n, e, i);
                    else {
                      let e;
                      c && (e = this.pluralResolver.getSuffix(n, i.count, i));
                      const t = "".concat(this.options.pluralSeparator, "zero"),
                        r = ""
                          .concat(this.options.pluralSeparator, "ordinal")
                          .concat(this.options.pluralSeparator);
                      if (
                        (c &&
                          (a.push(l + e),
                          i.ordinal &&
                            0 === e.indexOf(r) &&
                            a.push(
                              l + e.replace(r, this.options.pluralSeparator)
                            ),
                          d && a.push(l + t)),
                        f)
                      ) {
                        const n = ""
                          .concat(l)
                          .concat(this.options.contextSeparator)
                          .concat(i.context);
                        a.push(n),
                          c &&
                            (a.push(n + e),
                            i.ordinal &&
                              0 === e.indexOf(r) &&
                              a.push(
                                n + e.replace(r, this.options.pluralSeparator)
                              ),
                            d && a.push(n + t));
                      }
                    }
                    let s;
                    for (; (s = a.pop()); )
                      this.isValidLookup(t) ||
                        ((r = s), (t = this.getResource(n, e, s, i)));
                  }));
              });
            }),
            { res: t, usedKey: n, exactUsedKey: r, usedLng: o, usedNS: a }
          );
        }
        isValidLookup(e) {
          return (
            void 0 !== e &&
            !(!this.options.returnNull && null === e) &&
            !(!this.options.returnEmptyString && "" === e)
          );
        }
        getResource(e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          return this.i18nFormat && this.i18nFormat.getResource
            ? this.i18nFormat.getResource(e, t, n, r)
            : this.resourceStore.getResource(e, t, n, r);
        }
        getUsedParamsDetails() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = [
              "defaultValue",
              "ordinal",
              "context",
              "replace",
              "lng",
              "lngs",
              "fallbackLng",
              "ns",
              "keySeparator",
              "nsSeparator",
              "returnObjects",
              "returnDetails",
              "joinArrays",
              "postProcess",
              "interpolation",
            ],
            n = e.replace && "string" !== typeof e.replace;
          let r = n ? e.replace : e;
          if (
            (n && "undefined" !== typeof e.count && (r.count = e.count),
            this.options.interpolation.defaultVariables &&
              (r = { ...this.options.interpolation.defaultVariables, ...r }),
            !n)
          ) {
            r = { ...r };
            for (const e of t) delete r[e];
          }
          return r;
        }
        static hasDefaultValue(e) {
          const t = "defaultValue";
          for (const n in e)
            if (
              Object.prototype.hasOwnProperty.call(e, n) &&
              t === n.substring(0, 12) &&
              void 0 !== e[n]
            )
              return !0;
          return !1;
        }
      }
      function un(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      class cn {
        constructor(e) {
          (this.options = e),
            (this.supportedLngs = this.options.supportedLngs || !1),
            (this.logger = Ht.create("languageUtils"));
        }
        getScriptPartFromCode(e) {
          if (!(e = rn(e)) || e.indexOf("-") < 0) return null;
          const t = e.split("-");
          return 2 === t.length
            ? null
            : (t.pop(),
              "x" === t[t.length - 1].toLowerCase()
                ? null
                : this.formatLanguageCode(t.join("-")));
        }
        getLanguagePartFromCode(e) {
          if (!(e = rn(e)) || e.indexOf("-") < 0) return e;
          const t = e.split("-");
          return this.formatLanguageCode(t[0]);
        }
        formatLanguageCode(e) {
          if ("string" === typeof e && e.indexOf("-") > -1) {
            const t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
            let n = e.split("-");
            return (
              this.options.lowerCaseLng
                ? (n = n.map((e) => e.toLowerCase()))
                : 2 === n.length
                ? ((n[0] = n[0].toLowerCase()),
                  (n[1] = n[1].toUpperCase()),
                  t.indexOf(n[1].toLowerCase()) > -1 &&
                    (n[1] = un(n[1].toLowerCase())))
                : 3 === n.length &&
                  ((n[0] = n[0].toLowerCase()),
                  2 === n[1].length && (n[1] = n[1].toUpperCase()),
                  "sgn" !== n[0] &&
                    2 === n[2].length &&
                    (n[2] = n[2].toUpperCase()),
                  t.indexOf(n[1].toLowerCase()) > -1 &&
                    (n[1] = un(n[1].toLowerCase())),
                  t.indexOf(n[2].toLowerCase()) > -1 &&
                    (n[2] = un(n[2].toLowerCase()))),
              n.join("-")
            );
          }
          return this.options.cleanCode || this.options.lowerCaseLng
            ? e.toLowerCase()
            : e;
        }
        isSupportedCode(e) {
          return (
            ("languageOnly" === this.options.load ||
              this.options.nonExplicitSupportedLngs) &&
              (e = this.getLanguagePartFromCode(e)),
            !this.supportedLngs ||
              !this.supportedLngs.length ||
              this.supportedLngs.indexOf(e) > -1
          );
        }
        getBestMatchFromCodes(e) {
          if (!e) return null;
          let t;
          return (
            e.forEach((e) => {
              if (t) return;
              const n = this.formatLanguageCode(e);
              (this.options.supportedLngs && !this.isSupportedCode(n)) ||
                (t = n);
            }),
            !t &&
              this.options.supportedLngs &&
              e.forEach((e) => {
                if (t) return;
                const n = this.getLanguagePartFromCode(e);
                if (this.isSupportedCode(n)) return (t = n);
                t = this.options.supportedLngs.find((e) =>
                  e === n
                    ? e
                    : e.indexOf("-") < 0 && n.indexOf("-") < 0
                    ? void 0
                    : 0 === e.indexOf(n)
                    ? e
                    : void 0
                );
              }),
            t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
            t
          );
        }
        getFallbackCodes(e, t) {
          if (!e) return [];
          if (
            ("function" === typeof e && (e = e(t)),
            "string" === typeof e && (e = [e]),
            "[object Array]" === Object.prototype.toString.apply(e))
          )
            return e;
          if (!t) return e.default || [];
          let n = e[t];
          return (
            n || (n = e[this.getScriptPartFromCode(t)]),
            n || (n = e[this.formatLanguageCode(t)]),
            n || (n = e[this.getLanguagePartFromCode(t)]),
            n || (n = e.default),
            n || []
          );
        }
        toResolveHierarchy(e, t) {
          const n = this.getFallbackCodes(
              t || this.options.fallbackLng || [],
              e
            ),
            r = [],
            o = (e) => {
              e &&
                (this.isSupportedCode(e)
                  ? r.push(e)
                  : this.logger.warn(
                      "rejecting language code not found in supportedLngs: ".concat(
                        e
                      )
                    ));
            };
          return (
            "string" === typeof e &&
            (e.indexOf("-") > -1 || e.indexOf("_") > -1)
              ? ("languageOnly" !== this.options.load &&
                  o(this.formatLanguageCode(e)),
                "languageOnly" !== this.options.load &&
                  "currentOnly" !== this.options.load &&
                  o(this.getScriptPartFromCode(e)),
                "currentOnly" !== this.options.load &&
                  o(this.getLanguagePartFromCode(e)))
              : "string" === typeof e && o(this.formatLanguageCode(e)),
            n.forEach((e) => {
              r.indexOf(e) < 0 && o(this.formatLanguageCode(e));
            }),
            r
          );
        }
      }
      let dn = [
          {
            lngs: [
              "ach",
              "ak",
              "am",
              "arn",
              "br",
              "fil",
              "gun",
              "ln",
              "mfe",
              "mg",
              "mi",
              "oc",
              "pt",
              "pt-BR",
              "tg",
              "tl",
              "ti",
              "tr",
              "uz",
              "wa",
            ],
            nr: [1, 2],
            fc: 1,
          },
          {
            lngs: [
              "af",
              "an",
              "ast",
              "az",
              "bg",
              "bn",
              "ca",
              "da",
              "de",
              "dev",
              "el",
              "en",
              "eo",
              "es",
              "et",
              "eu",
              "fi",
              "fo",
              "fur",
              "fy",
              "gl",
              "gu",
              "ha",
              "hi",
              "hu",
              "hy",
              "ia",
              "it",
              "kk",
              "kn",
              "ku",
              "lb",
              "mai",
              "ml",
              "mn",
              "mr",
              "nah",
              "nap",
              "nb",
              "ne",
              "nl",
              "nn",
              "no",
              "nso",
              "pa",
              "pap",
              "pms",
              "ps",
              "pt-PT",
              "rm",
              "sco",
              "se",
              "si",
              "so",
              "son",
              "sq",
              "sv",
              "sw",
              "ta",
              "te",
              "tk",
              "ur",
              "yo",
            ],
            nr: [1, 2],
            fc: 2,
          },
          {
            lngs: [
              "ay",
              "bo",
              "cgg",
              "fa",
              "ht",
              "id",
              "ja",
              "jbo",
              "ka",
              "km",
              "ko",
              "ky",
              "lo",
              "ms",
              "sah",
              "su",
              "th",
              "tt",
              "ug",
              "vi",
              "wo",
              "zh",
            ],
            nr: [1],
            fc: 3,
          },
          {
            lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
            nr: [1, 2, 5],
            fc: 4,
          },
          { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
          { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
          { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
          { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
          { lngs: ["fr"], nr: [1, 2], fc: 9 },
          { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
          { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
          { lngs: ["is"], nr: [1, 2], fc: 12 },
          { lngs: ["jv"], nr: [0, 1], fc: 13 },
          { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
          { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
          { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
          { lngs: ["mk"], nr: [1, 2], fc: 17 },
          { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
          { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
          { lngs: ["or"], nr: [2, 1], fc: 2 },
          { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
          { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
          { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
        ],
        fn = {
          1: function (e) {
            return Number(e > 1);
          },
          2: function (e) {
            return Number(1 != e);
          },
          3: function (e) {
            return 0;
          },
          4: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2
            );
          },
          5: function (e) {
            return Number(
              0 == e
                ? 0
                : 1 == e
                ? 1
                : 2 == e
                ? 2
                : e % 100 >= 3 && e % 100 <= 10
                ? 3
                : e % 100 >= 11
                ? 4
                : 5
            );
          },
          6: function (e) {
            return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2);
          },
          7: function (e) {
            return Number(
              1 == e
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2
            );
          },
          8: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3);
          },
          9: function (e) {
            return Number(e >= 2);
          },
          10: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4);
          },
          11: function (e) {
            return Number(
              1 == e || 11 == e
                ? 0
                : 2 == e || 12 == e
                ? 1
                : e > 2 && e < 20
                ? 2
                : 3
            );
          },
          12: function (e) {
            return Number(e % 10 != 1 || e % 100 == 11);
          },
          13: function (e) {
            return Number(0 !== e);
          },
          14: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3);
          },
          15: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2
            );
          },
          16: function (e) {
            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2);
          },
          17: function (e) {
            return Number(1 == e || (e % 10 == 1 && e % 100 != 11) ? 0 : 1);
          },
          18: function (e) {
            return Number(0 == e ? 0 : 1 == e ? 1 : 2);
          },
          19: function (e) {
            return Number(
              1 == e
                ? 0
                : 0 == e || (e % 100 > 1 && e % 100 < 11)
                ? 1
                : e % 100 > 10 && e % 100 < 20
                ? 2
                : 3
            );
          },
          20: function (e) {
            return Number(
              1 == e ? 0 : 0 == e || (e % 100 > 0 && e % 100 < 20) ? 1 : 2
            );
          },
          21: function (e) {
            return Number(
              e % 100 == 1
                ? 1
                : e % 100 == 2
                ? 2
                : e % 100 == 3 || e % 100 == 4
                ? 3
                : 0
            );
          },
          22: function (e) {
            return Number(
              1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3
            );
          },
        };
      const pn = ["v1", "v2", "v3"],
        hn = ["v4"],
        gn = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
      class mn {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          (this.languageUtils = e),
            (this.options = t),
            (this.logger = Ht.create("pluralResolver")),
            (this.options.compatibilityJSON &&
              !hn.includes(this.options.compatibilityJSON)) ||
              ("undefined" !== typeof Intl && Intl.PluralRules) ||
              ((this.options.compatibilityJSON = "v3"),
              this.logger.error(
                "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling."
              )),
            (this.rules = (function () {
              const e = {};
              return (
                dn.forEach((t) => {
                  t.lngs.forEach((n) => {
                    e[n] = { numbers: t.nr, plurals: fn[t.fc] };
                  });
                }),
                e
              );
            })());
        }
        addRule(e, t) {
          this.rules[e] = t;
        }
        getRule(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.shouldUseIntlApi())
            try {
              return new Intl.PluralRules(rn("dev" === e ? "en" : e), {
                type: t.ordinal ? "ordinal" : "cardinal",
              });
            } catch (n) {
              return;
            }
          return (
            this.rules[e] ||
            this.rules[this.languageUtils.getLanguagePartFromCode(e)]
          );
        }
        needsPlural(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const n = this.getRule(e, t);
          return this.shouldUseIntlApi()
            ? n && n.resolvedOptions().pluralCategories.length > 1
            : n && n.numbers.length > 1;
        }
        getPluralFormsOfKey(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return this.getSuffixes(e, n).map((e) => "".concat(t).concat(e));
        }
        getSuffixes(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const n = this.getRule(e, t);
          return n
            ? this.shouldUseIntlApi()
              ? n
                  .resolvedOptions()
                  .pluralCategories.sort((e, t) => gn[e] - gn[t])
                  .map((e) =>
                    ""
                      .concat(this.options.prepend)
                      .concat(
                        t.ordinal ? "ordinal".concat(this.options.prepend) : ""
                      )
                      .concat(e)
                  )
              : n.numbers.map((n) => this.getSuffix(e, n, t))
            : [];
        }
        getSuffix(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const r = this.getRule(e, n);
          return r
            ? this.shouldUseIntlApi()
              ? ""
                  .concat(this.options.prepend)
                  .concat(
                    n.ordinal ? "ordinal".concat(this.options.prepend) : ""
                  )
                  .concat(r.select(t))
              : this.getSuffixRetroCompatible(r, t)
            : (this.logger.warn("no plural rule found for: ".concat(e)), "");
        }
        getSuffixRetroCompatible(e, t) {
          const n = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t));
          let r = e.numbers[n];
          this.options.simplifyPluralSuffix &&
            2 === e.numbers.length &&
            1 === e.numbers[0] &&
            (2 === r ? (r = "plural") : 1 === r && (r = ""));
          const o = () =>
            this.options.prepend && r.toString()
              ? this.options.prepend + r.toString()
              : r.toString();
          return "v1" === this.options.compatibilityJSON
            ? 1 === r
              ? ""
              : "number" === typeof r
              ? "_plural_".concat(r.toString())
              : o()
            : "v2" === this.options.compatibilityJSON ||
              (this.options.simplifyPluralSuffix &&
                2 === e.numbers.length &&
                1 === e.numbers[0])
            ? o()
            : this.options.prepend && n.toString()
            ? this.options.prepend + n.toString()
            : n.toString();
        }
        shouldUseIntlApi() {
          return !pn.includes(this.options.compatibilityJSON);
        }
      }
      function vn(e, t, n) {
        let r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : ".",
          o =
            !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          a = (function (e, t, n) {
            const r = Qt(e, n);
            return void 0 !== r ? r : Qt(t, n);
          })(e, t, n);
        return (
          !a &&
            o &&
            "string" === typeof n &&
            ((a = nn(e, n, r)), void 0 === a && (a = nn(t, n, r))),
          a
        );
      }
      class yn {
        constructor() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (this.logger = Ht.create("interpolator")),
            (this.options = e),
            (this.format =
              (e.interpolation && e.interpolation.format) || ((e) => e)),
            this.init(e);
        }
        init() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          e.interpolation || (e.interpolation = { escapeValue: !0 });
          const t = e.interpolation;
          (this.escape = void 0 !== t.escape ? t.escape : Xt),
            (this.escapeValue = void 0 === t.escapeValue || t.escapeValue),
            (this.useRawValueToEscape =
              void 0 !== t.useRawValueToEscape && t.useRawValueToEscape),
            (this.prefix = t.prefix ? Gt(t.prefix) : t.prefixEscaped || "{{"),
            (this.suffix = t.suffix ? Gt(t.suffix) : t.suffixEscaped || "}}"),
            (this.formatSeparator = t.formatSeparator
              ? t.formatSeparator
              : t.formatSeparator || ","),
            (this.unescapePrefix = t.unescapeSuffix
              ? ""
              : t.unescapePrefix || "-"),
            (this.unescapeSuffix = this.unescapePrefix
              ? ""
              : t.unescapeSuffix || ""),
            (this.nestingPrefix = t.nestingPrefix
              ? Gt(t.nestingPrefix)
              : t.nestingPrefixEscaped || Gt("$t(")),
            (this.nestingSuffix = t.nestingSuffix
              ? Gt(t.nestingSuffix)
              : t.nestingSuffixEscaped || Gt(")")),
            (this.nestingOptionsSeparator = t.nestingOptionsSeparator
              ? t.nestingOptionsSeparator
              : t.nestingOptionsSeparator || ","),
            (this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3),
            (this.alwaysFormat = void 0 !== t.alwaysFormat && t.alwaysFormat),
            this.resetRegExp();
        }
        reset() {
          this.options && this.init(this.options);
        }
        resetRegExp() {
          const e = (e, t) =>
            e && e.source === t ? ((e.lastIndex = 0), e) : new RegExp(t, "g");
          (this.regexp = e(
            this.regexp,
            "".concat(this.prefix, "(.+?)").concat(this.suffix)
          )),
            (this.regexpUnescape = e(
              this.regexpUnescape,
              ""
                .concat(this.prefix)
                .concat(this.unescapePrefix, "(.+?)")
                .concat(this.unescapeSuffix)
                .concat(this.suffix)
            )),
            (this.nestingRegexp = e(
              this.nestingRegexp,
              "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix)
            ));
        }
        interpolate(e, t, n, r) {
          let o, a, i;
          const s =
            (this.options &&
              this.options.interpolation &&
              this.options.interpolation.defaultVariables) ||
            {};
          function l(e) {
            return e.replace(/\$/g, "$$$$");
          }
          const u = (e) => {
            if (e.indexOf(this.formatSeparator) < 0) {
              const o = vn(
                t,
                s,
                e,
                this.options.keySeparator,
                this.options.ignoreJSONStructure
              );
              return this.alwaysFormat
                ? this.format(o, void 0, n, { ...r, ...t, interpolationkey: e })
                : o;
            }
            const o = e.split(this.formatSeparator),
              a = o.shift().trim(),
              i = o.join(this.formatSeparator).trim();
            return this.format(
              vn(
                t,
                s,
                a,
                this.options.keySeparator,
                this.options.ignoreJSONStructure
              ),
              i,
              n,
              { ...r, ...t, interpolationkey: a }
            );
          };
          this.resetRegExp();
          const c =
              (r && r.missingInterpolationHandler) ||
              this.options.missingInterpolationHandler,
            d =
              r && r.interpolation && void 0 !== r.interpolation.skipOnVariables
                ? r.interpolation.skipOnVariables
                : this.options.interpolation.skipOnVariables;
          return (
            [
              { regex: this.regexpUnescape, safeValue: (e) => l(e) },
              {
                regex: this.regexp,
                safeValue: (e) => (this.escapeValue ? l(this.escape(e)) : l(e)),
              },
            ].forEach((t) => {
              for (i = 0; (o = t.regex.exec(e)); ) {
                const n = o[1].trim();
                if (((a = u(n)), void 0 === a))
                  if ("function" === typeof c) {
                    const t = c(e, o, r);
                    a = "string" === typeof t ? t : "";
                  } else if (r && Object.prototype.hasOwnProperty.call(r, n))
                    a = "";
                  else {
                    if (d) {
                      a = o[0];
                      continue;
                    }
                    this.logger.warn(
                      "missed to pass in variable "
                        .concat(n, " for interpolating ")
                        .concat(e)
                    ),
                      (a = "");
                  }
                else
                  "string" === typeof a ||
                    this.useRawValueToEscape ||
                    (a = Wt(a));
                const s = t.safeValue(a);
                if (
                  ((e = e.replace(o[0], s)),
                  d
                    ? ((t.regex.lastIndex += a.length),
                      (t.regex.lastIndex -= o[0].length))
                    : (t.regex.lastIndex = 0),
                  i++,
                  i >= this.maxReplaces)
                )
                  break;
              }
            }),
            e
          );
        }
        nest(e, t) {
          let n,
            r,
            o,
            a =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          function i(e, t) {
            const n = this.nestingOptionsSeparator;
            if (e.indexOf(n) < 0) return e;
            const r = e.split(new RegExp("".concat(n, "[ ]*{")));
            let a = "{".concat(r[1]);
            (e = r[0]), (a = this.interpolate(a, o));
            const i = a.match(/'/g),
              s = a.match(/"/g);
            ((i && i.length % 2 === 0 && !s) || s.length % 2 !== 0) &&
              (a = a.replace(/'/g, '"'));
            try {
              (o = JSON.parse(a)), t && (o = { ...t, ...o });
            } catch (l) {
              return (
                this.logger.warn(
                  "failed parsing options string in nesting for key ".concat(e),
                  l
                ),
                "".concat(e).concat(n).concat(a)
              );
            }
            return delete o.defaultValue, e;
          }
          for (; (n = this.nestingRegexp.exec(e)); ) {
            let s = [];
            (o = { ...a }),
              (o = o.replace && "string" !== typeof o.replace ? o.replace : o),
              (o.applyPostProcessor = !1),
              delete o.defaultValue;
            let l = !1;
            if (
              -1 !== n[0].indexOf(this.formatSeparator) &&
              !/{.*}/.test(n[1])
            ) {
              const e = n[1].split(this.formatSeparator).map((e) => e.trim());
              (n[1] = e.shift()), (s = e), (l = !0);
            }
            if (
              ((r = t(i.call(this, n[1].trim(), o), o)),
              r && n[0] === e && "string" !== typeof r)
            )
              return r;
            "string" !== typeof r && (r = Wt(r)),
              r ||
                (this.logger.warn(
                  "missed to resolve ".concat(n[1], " for nesting ").concat(e)
                ),
                (r = "")),
              l &&
                (r = s.reduce(
                  (e, t) =>
                    this.format(e, t, a.lng, {
                      ...a,
                      interpolationkey: n[1].trim(),
                    }),
                  r.trim()
                )),
              (e = e.replace(n[0], r)),
              (this.regexp.lastIndex = 0);
          }
          return e;
        }
      }
      function bn(e) {
        const t = {};
        return function (n, r, o) {
          const a = r + JSON.stringify(o);
          let i = t[a];
          return i || ((i = e(rn(r), o)), (t[a] = i)), i(n);
        };
      }
      class wn {
        constructor() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (this.logger = Ht.create("formatter")),
            (this.options = e),
            (this.formats = {
              number: bn((e, t) => {
                const n = new Intl.NumberFormat(e, { ...t });
                return (e) => n.format(e);
              }),
              currency: bn((e, t) => {
                const n = new Intl.NumberFormat(e, { ...t, style: "currency" });
                return (e) => n.format(e);
              }),
              datetime: bn((e, t) => {
                const n = new Intl.DateTimeFormat(e, { ...t });
                return (e) => n.format(e);
              }),
              relativetime: bn((e, t) => {
                const n = new Intl.RelativeTimeFormat(e, { ...t });
                return (e) => n.format(e, t.range || "day");
              }),
              list: bn((e, t) => {
                const n = new Intl.ListFormat(e, { ...t });
                return (e) => n.format(e);
              }),
            }),
            this.init(e);
        }
        init(e) {
          const t = (
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { interpolation: {} }
          ).interpolation;
          this.formatSeparator = t.formatSeparator
            ? t.formatSeparator
            : t.formatSeparator || ",";
        }
        add(e, t) {
          this.formats[e.toLowerCase().trim()] = t;
        }
        addCached(e, t) {
          this.formats[e.toLowerCase().trim()] = bn(t);
        }
        format(e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          const o = t.split(this.formatSeparator).reduce((e, t) => {
            const { formatName: o, formatOptions: a } = (function (e) {
              let t = e.toLowerCase().trim();
              const n = {};
              if (e.indexOf("(") > -1) {
                const r = e.split("(");
                t = r[0].toLowerCase().trim();
                const o = r[1].substring(0, r[1].length - 1);
                "currency" === t && o.indexOf(":") < 0
                  ? n.currency || (n.currency = o.trim())
                  : "relativetime" === t && o.indexOf(":") < 0
                  ? n.range || (n.range = o.trim())
                  : o.split(";").forEach((e) => {
                      if (!e) return;
                      const [t, ...r] = e.split(":"),
                        o = r
                          .join(":")
                          .trim()
                          .replace(/^'+|'+$/g, "");
                      n[t.trim()] || (n[t.trim()] = o),
                        "false" === o && (n[t.trim()] = !1),
                        "true" === o && (n[t.trim()] = !0),
                        isNaN(o) || (n[t.trim()] = parseInt(o, 10));
                    });
              }
              return { formatName: t, formatOptions: n };
            })(t);
            if (this.formats[o]) {
              let t = e;
              try {
                const i =
                    (r &&
                      r.formatParams &&
                      r.formatParams[r.interpolationkey]) ||
                    {},
                  s = i.locale || i.lng || r.locale || r.lng || n;
                t = this.formats[o](e, s, { ...a, ...r, ...i });
              } catch (i) {
                this.logger.warn(i);
              }
              return t;
            }
            return (
              this.logger.warn("there was no format function for ".concat(o)), e
            );
          }, e);
          return o;
        }
      }
      class xn extends Zt {
        constructor(e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          super(),
            (this.backend = e),
            (this.store = t),
            (this.services = n),
            (this.languageUtils = n.languageUtils),
            (this.options = r),
            (this.logger = Ht.create("backendConnector")),
            (this.waitingReads = []),
            (this.maxParallelReads = r.maxParallelReads || 10),
            (this.readingCalls = 0),
            (this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5),
            (this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350),
            (this.state = {}),
            (this.queue = []),
            this.backend &&
              this.backend.init &&
              this.backend.init(n, r.backend, r);
        }
        queueLoad(e, t, n, r) {
          const o = {},
            a = {},
            i = {},
            s = {};
          return (
            e.forEach((e) => {
              let r = !0;
              t.forEach((t) => {
                const i = "".concat(e, "|").concat(t);
                !n.reload && this.store.hasResourceBundle(e, t)
                  ? (this.state[i] = 2)
                  : this.state[i] < 0 ||
                    (1 === this.state[i]
                      ? void 0 === a[i] && (a[i] = !0)
                      : ((this.state[i] = 1),
                        (r = !1),
                        void 0 === a[i] && (a[i] = !0),
                        void 0 === o[i] && (o[i] = !0),
                        void 0 === s[t] && (s[t] = !0)));
              }),
                r || (i[e] = !0);
            }),
            (Object.keys(o).length || Object.keys(a).length) &&
              this.queue.push({
                pending: a,
                pendingCount: Object.keys(a).length,
                loaded: {},
                errors: [],
                callback: r,
              }),
            {
              toLoad: Object.keys(o),
              pending: Object.keys(a),
              toLoadLanguages: Object.keys(i),
              toLoadNamespaces: Object.keys(s),
            }
          );
        }
        loaded(e, t, n) {
          const r = e.split("|"),
            o = r[0],
            a = r[1];
          t && this.emit("failedLoading", o, a, t),
            n && this.store.addResourceBundle(o, a, n),
            (this.state[e] = t ? -1 : 2);
          const i = {};
          this.queue.forEach((n) => {
            !(function (e, t, n, r) {
              const { obj: o, k: a } = Kt(e, t, Object);
              (o[a] = o[a] || []),
                r && (o[a] = o[a].concat(n)),
                r || o[a].push(n);
            })(n.loaded, [o], a),
              (function (e, t) {
                void 0 !== e.pending[t] &&
                  (delete e.pending[t], e.pendingCount--);
              })(n, e),
              t && n.errors.push(t),
              0 !== n.pendingCount ||
                n.done ||
                (Object.keys(n.loaded).forEach((e) => {
                  i[e] || (i[e] = {});
                  const t = n.loaded[e];
                  t.length &&
                    t.forEach((t) => {
                      void 0 === i[e][t] && (i[e][t] = !0);
                    });
                }),
                (n.done = !0),
                n.errors.length ? n.callback(n.errors) : n.callback());
          }),
            this.emit("loaded", i),
            (this.queue = this.queue.filter((e) => !e.done));
        }
        read(e, t, n) {
          let r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0,
            o =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : this.retryTimeout,
            a = arguments.length > 5 ? arguments[5] : void 0;
          if (!e.length) return a(null, {});
          if (this.readingCalls >= this.maxParallelReads)
            return void this.waitingReads.push({
              lng: e,
              ns: t,
              fcName: n,
              tried: r,
              wait: o,
              callback: a,
            });
          this.readingCalls++;
          const i = (i, s) => {
              if ((this.readingCalls--, this.waitingReads.length > 0)) {
                const e = this.waitingReads.shift();
                this.read(e.lng, e.ns, e.fcName, e.tried, e.wait, e.callback);
              }
              i && s && r < this.maxRetries
                ? setTimeout(() => {
                    this.read.call(this, e, t, n, r + 1, 2 * o, a);
                  }, o)
                : a(i, s);
            },
            s = this.backend[n].bind(this.backend);
          if (2 !== s.length) return s(e, t, i);
          try {
            const n = s(e, t);
            n && "function" === typeof n.then
              ? n.then((e) => i(null, e)).catch(i)
              : i(null, n);
          } catch (l) {
            i(l);
          }
        }
        prepareLoading(e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = arguments.length > 3 ? arguments[3] : void 0;
          if (!this.backend)
            return (
              this.logger.warn(
                "No backend was added via i18next.use. Will not load resources."
              ),
              r && r()
            );
          "string" === typeof e &&
            (e = this.languageUtils.toResolveHierarchy(e)),
            "string" === typeof t && (t = [t]);
          const o = this.queueLoad(e, t, n, r);
          if (!o.toLoad.length) return o.pending.length || r(), null;
          o.toLoad.forEach((e) => {
            this.loadOne(e);
          });
        }
        load(e, t, n) {
          this.prepareLoading(e, t, {}, n);
        }
        reload(e, t, n) {
          this.prepareLoading(e, t, { reload: !0 }, n);
        }
        loadOne(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          const n = e.split("|"),
            r = n[0],
            o = n[1];
          this.read(r, o, "read", void 0, void 0, (n, a) => {
            n &&
              this.logger.warn(
                ""
                  .concat(t, "loading namespace ")
                  .concat(o, " for language ")
                  .concat(r, " failed"),
                n
              ),
              !n &&
                a &&
                this.logger.log(
                  ""
                    .concat(t, "loaded namespace ")
                    .concat(o, " for language ")
                    .concat(r),
                  a
                ),
              this.loaded(e, n, a);
          });
        }
        saveMissing(e, t, n, r, o) {
          let a =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : {},
            i =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : () => {};
          if (
            this.services.utils &&
            this.services.utils.hasLoadedNamespace &&
            !this.services.utils.hasLoadedNamespace(t)
          )
            this.logger.warn(
              'did not save key "'
                .concat(n, '" as the namespace "')
                .concat(t, '" was not yet loaded'),
              "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
            );
          else if (void 0 !== n && null !== n && "" !== n) {
            if (this.backend && this.backend.create) {
              const l = { ...a, isUpdate: o },
                u = this.backend.create.bind(this.backend);
              if (u.length < 6)
                try {
                  let o;
                  (o = 5 === u.length ? u(e, t, n, r, l) : u(e, t, n, r)),
                    o && "function" === typeof o.then
                      ? o.then((e) => i(null, e)).catch(i)
                      : i(null, o);
                } catch (s) {
                  i(s);
                }
              else u(e, t, n, r, i, l);
            }
            e && e[0] && this.store.addResource(e[0], t, n, r);
          }
        }
      }
      function Sn() {
        return {
          debug: !1,
          initImmediate: !0,
          ns: ["translation"],
          defaultNS: ["translation"],
          fallbackLng: ["dev"],
          fallbackNS: !1,
          supportedLngs: !1,
          nonExplicitSupportedLngs: !1,
          load: "all",
          preload: !1,
          simplifyPluralSuffix: !0,
          keySeparator: ".",
          nsSeparator: ":",
          pluralSeparator: "_",
          contextSeparator: "_",
          partialBundledLanguages: !1,
          saveMissing: !1,
          updateMissing: !1,
          saveMissingTo: "fallback",
          saveMissingPlurals: !0,
          missingKeyHandler: !1,
          missingInterpolationHandler: !1,
          postProcess: !1,
          postProcessPassResolved: !1,
          returnNull: !1,
          returnEmptyString: !0,
          returnObjects: !1,
          joinArrays: !1,
          returnedObjectHandler: !1,
          parseMissingKeyHandler: !1,
          appendNamespaceToMissingKey: !1,
          appendNamespaceToCIMode: !1,
          overloadTranslationOptionHandler: function (e) {
            let t = {};
            if (
              ("object" === typeof e[1] && (t = e[1]),
              "string" === typeof e[1] && (t.defaultValue = e[1]),
              "string" === typeof e[2] && (t.tDescription = e[2]),
              "object" === typeof e[2] || "object" === typeof e[3])
            ) {
              const n = e[3] || e[2];
              Object.keys(n).forEach((e) => {
                t[e] = n[e];
              });
            }
            return t;
          },
          interpolation: {
            escapeValue: !0,
            format: (e) => e,
            prefix: "{{",
            suffix: "}}",
            formatSeparator: ",",
            unescapePrefix: "-",
            nestingPrefix: "$t(",
            nestingSuffix: ")",
            nestingOptionsSeparator: ",",
            maxReplaces: 1e3,
            skipOnVariables: !0,
          },
        };
      }
      function kn(e) {
        return (
          "string" === typeof e.ns && (e.ns = [e.ns]),
          "string" === typeof e.fallbackLng &&
            (e.fallbackLng = [e.fallbackLng]),
          "string" === typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
          e.supportedLngs &&
            e.supportedLngs.indexOf("cimode") < 0 &&
            (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
          e
        );
      }
      function En() {}
      class Cn extends Zt {
        constructor() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          var n;
          if (
            (super(),
            (this.options = kn(e)),
            (this.services = {}),
            (this.logger = Ht),
            (this.modules = { external: [] }),
            (n = this),
            Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach(
              (e) => {
                "function" === typeof n[e] && (n[e] = n[e].bind(n));
              }
            ),
            t && !this.isInitialized && !e.isClone)
          ) {
            if (!this.options.initImmediate) return this.init(e, t), this;
            setTimeout(() => {
              this.init(e, t);
            }, 0);
          }
        }
        init() {
          var e = this;
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = arguments.length > 1 ? arguments[1] : void 0;
          "function" === typeof t && ((n = t), (t = {})),
            !t.defaultNS &&
              !1 !== t.defaultNS &&
              t.ns &&
              ("string" === typeof t.ns
                ? (t.defaultNS = t.ns)
                : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
          const r = Sn();
          function o(e) {
            return e ? ("function" === typeof e ? new e() : e) : null;
          }
          if (
            ((this.options = { ...r, ...this.options, ...kn(t) }),
            "v1" !== this.options.compatibilityAPI &&
              (this.options.interpolation = {
                ...r.interpolation,
                ...this.options.interpolation,
              }),
            void 0 !== t.keySeparator &&
              (this.options.userDefinedKeySeparator = t.keySeparator),
            void 0 !== t.nsSeparator &&
              (this.options.userDefinedNsSeparator = t.nsSeparator),
            !this.options.isClone)
          ) {
            let t;
            this.modules.logger
              ? Ht.init(o(this.modules.logger), this.options)
              : Ht.init(null, this.options),
              this.modules.formatter
                ? (t = this.modules.formatter)
                : "undefined" !== typeof Intl && (t = wn);
            const n = new cn(this.options);
            this.store = new on(this.options.resources, this.options);
            const a = this.services;
            (a.logger = Ht),
              (a.resourceStore = this.store),
              (a.languageUtils = n),
              (a.pluralResolver = new mn(n, {
                prepend: this.options.pluralSeparator,
                compatibilityJSON: this.options.compatibilityJSON,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix,
              })),
              !t ||
                (this.options.interpolation.format &&
                  this.options.interpolation.format !==
                    r.interpolation.format) ||
                ((a.formatter = o(t)),
                a.formatter.init(a, this.options),
                (this.options.interpolation.format = a.formatter.format.bind(
                  a.formatter
                ))),
              (a.interpolator = new yn(this.options)),
              (a.utils = {
                hasLoadedNamespace: this.hasLoadedNamespace.bind(this),
              }),
              (a.backendConnector = new xn(
                o(this.modules.backend),
                a.resourceStore,
                a,
                this.options
              )),
              a.backendConnector.on("*", function (t) {
                for (
                  var n = arguments.length,
                    r = new Array(n > 1 ? n - 1 : 0),
                    o = 1;
                  o < n;
                  o++
                )
                  r[o - 1] = arguments[o];
                e.emit(t, ...r);
              }),
              this.modules.languageDetector &&
                ((a.languageDetector = o(this.modules.languageDetector)),
                a.languageDetector.init &&
                  a.languageDetector.init(
                    a,
                    this.options.detection,
                    this.options
                  )),
              this.modules.i18nFormat &&
                ((a.i18nFormat = o(this.modules.i18nFormat)),
                a.i18nFormat.init && a.i18nFormat.init(this)),
              (this.translator = new ln(this.services, this.options)),
              this.translator.on("*", function (t) {
                for (
                  var n = arguments.length,
                    r = new Array(n > 1 ? n - 1 : 0),
                    o = 1;
                  o < n;
                  o++
                )
                  r[o - 1] = arguments[o];
                e.emit(t, ...r);
              }),
              this.modules.external.forEach((e) => {
                e.init && e.init(this);
              });
          }
          if (
            ((this.format = this.options.interpolation.format),
            n || (n = En),
            this.options.fallbackLng &&
              !this.services.languageDetector &&
              !this.options.lng)
          ) {
            const e = this.services.languageUtils.getFallbackCodes(
              this.options.fallbackLng
            );
            e.length > 0 && "dev" !== e[0] && (this.options.lng = e[0]);
          }
          this.services.languageDetector ||
            this.options.lng ||
            this.logger.warn(
              "init: no languageDetector is used and no lng is defined"
            );
          [
            "getResource",
            "hasResourceBundle",
            "getResourceBundle",
            "getDataByLanguage",
          ].forEach((t) => {
            this[t] = function () {
              return e.store[t](...arguments);
            };
          });
          [
            "addResource",
            "addResources",
            "addResourceBundle",
            "removeResourceBundle",
          ].forEach((t) => {
            this[t] = function () {
              return e.store[t](...arguments), e;
            };
          });
          const a = Vt(),
            i = () => {
              const e = (e, t) => {
                this.isInitialized &&
                  !this.initializedStoreOnce &&
                  this.logger.warn(
                    "init: i18next is already initialized. You should call init just once!"
                  ),
                  (this.isInitialized = !0),
                  this.options.isClone ||
                    this.logger.log("initialized", this.options),
                  this.emit("initialized", this.options),
                  a.resolve(t),
                  n(e, t);
              };
              if (
                this.languages &&
                "v1" !== this.options.compatibilityAPI &&
                !this.isInitialized
              )
                return e(null, this.t.bind(this));
              this.changeLanguage(this.options.lng, e);
            };
          return (
            this.options.resources || !this.options.initImmediate
              ? i()
              : setTimeout(i, 0),
            a
          );
        }
        loadResources(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : En;
          const n = "string" === typeof e ? e : this.language;
          if (
            ("function" === typeof e && (t = e),
            !this.options.resources || this.options.partialBundledLanguages)
          ) {
            if (
              n &&
              "cimode" === n.toLowerCase() &&
              (!this.options.preload || 0 === this.options.preload.length)
            )
              return t();
            const e = [],
              r = (t) => {
                if (!t) return;
                if ("cimode" === t) return;
                this.services.languageUtils
                  .toResolveHierarchy(t)
                  .forEach((t) => {
                    "cimode" !== t && e.indexOf(t) < 0 && e.push(t);
                  });
              };
            if (n) r(n);
            else {
              this.services.languageUtils
                .getFallbackCodes(this.options.fallbackLng)
                .forEach((e) => r(e));
            }
            this.options.preload && this.options.preload.forEach((e) => r(e)),
              this.services.backendConnector.load(e, this.options.ns, (e) => {
                e ||
                  this.resolvedLanguage ||
                  !this.language ||
                  this.setResolvedLanguage(this.language),
                  t(e);
              });
          } else t(null);
        }
        reloadResources(e, t, n) {
          const r = Vt();
          return (
            e || (e = this.languages),
            t || (t = this.options.ns),
            n || (n = En),
            this.services.backendConnector.reload(e, t, (e) => {
              r.resolve(), n(e);
            }),
            r
          );
        }
        use(e) {
          if (!e)
            throw new Error(
              "You are passing an undefined module! Please check the object you are passing to i18next.use()"
            );
          if (!e.type)
            throw new Error(
              "You are passing a wrong module! Please check the object you are passing to i18next.use()"
            );
          return (
            "backend" === e.type && (this.modules.backend = e),
            ("logger" === e.type || (e.log && e.warn && e.error)) &&
              (this.modules.logger = e),
            "languageDetector" === e.type &&
              (this.modules.languageDetector = e),
            "i18nFormat" === e.type && (this.modules.i18nFormat = e),
            "postProcessor" === e.type && an.addPostProcessor(e),
            "formatter" === e.type && (this.modules.formatter = e),
            "3rdParty" === e.type && this.modules.external.push(e),
            this
          );
        }
        setResolvedLanguage(e) {
          if (e && this.languages && !(["cimode", "dev"].indexOf(e) > -1))
            for (let t = 0; t < this.languages.length; t++) {
              const e = this.languages[t];
              if (
                !(["cimode", "dev"].indexOf(e) > -1) &&
                this.store.hasLanguageSomeTranslations(e)
              ) {
                this.resolvedLanguage = e;
                break;
              }
            }
        }
        changeLanguage(e, t) {
          var n = this;
          this.isLanguageChangingTo = e;
          const r = Vt();
          this.emit("languageChanging", e);
          const o = (e) => {
              (this.language = e),
                (this.languages =
                  this.services.languageUtils.toResolveHierarchy(e)),
                (this.resolvedLanguage = void 0),
                this.setResolvedLanguage(e);
            },
            a = (e, a) => {
              a
                ? (o(a),
                  this.translator.changeLanguage(a),
                  (this.isLanguageChangingTo = void 0),
                  this.emit("languageChanged", a),
                  this.logger.log("languageChanged", a))
                : (this.isLanguageChangingTo = void 0),
                r.resolve(function () {
                  return n.t(...arguments);
                }),
                t &&
                  t(e, function () {
                    return n.t(...arguments);
                  });
            },
            i = (t) => {
              e || t || !this.services.languageDetector || (t = []);
              const n =
                "string" === typeof t
                  ? t
                  : this.services.languageUtils.getBestMatchFromCodes(t);
              n &&
                (this.language || o(n),
                this.translator.language || this.translator.changeLanguage(n),
                this.services.languageDetector &&
                  this.services.languageDetector.cacheUserLanguage &&
                  this.services.languageDetector.cacheUserLanguage(n)),
                this.loadResources(n, (e) => {
                  a(e, n);
                });
            };
          return (
            e ||
            !this.services.languageDetector ||
            this.services.languageDetector.async
              ? !e &&
                this.services.languageDetector &&
                this.services.languageDetector.async
                ? 0 === this.services.languageDetector.detect.length
                  ? this.services.languageDetector.detect().then(i)
                  : this.services.languageDetector.detect(i)
                : i(e)
              : i(this.services.languageDetector.detect()),
            r
          );
        }
        getFixedT(e, t, n) {
          var r = this;
          const o = function (e, t) {
            let a;
            if ("object" !== typeof t) {
              for (
                var i = arguments.length,
                  s = new Array(i > 2 ? i - 2 : 0),
                  l = 2;
                l < i;
                l++
              )
                s[l - 2] = arguments[l];
              a = r.options.overloadTranslationOptionHandler([e, t].concat(s));
            } else a = { ...t };
            (a.lng = a.lng || o.lng),
              (a.lngs = a.lngs || o.lngs),
              (a.ns = a.ns || o.ns),
              (a.keyPrefix = a.keyPrefix || n || o.keyPrefix);
            const u = r.options.keySeparator || ".";
            let c;
            return (
              (c =
                a.keyPrefix && Array.isArray(e)
                  ? e.map((e) => "".concat(a.keyPrefix).concat(u).concat(e))
                  : a.keyPrefix
                  ? "".concat(a.keyPrefix).concat(u).concat(e)
                  : e),
              r.t(c, a)
            );
          };
          return (
            "string" === typeof e ? (o.lng = e) : (o.lngs = e),
            (o.ns = t),
            (o.keyPrefix = n),
            o
          );
        }
        t() {
          return this.translator && this.translator.translate(...arguments);
        }
        exists() {
          return this.translator && this.translator.exists(...arguments);
        }
        setDefaultNamespace(e) {
          this.options.defaultNS = e;
        }
        hasLoadedNamespace(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (!this.isInitialized)
            return (
              this.logger.warn(
                "hasLoadedNamespace: i18next was not initialized",
                this.languages
              ),
              !1
            );
          if (!this.languages || !this.languages.length)
            return (
              this.logger.warn(
                "hasLoadedNamespace: i18n.languages were undefined or empty",
                this.languages
              ),
              !1
            );
          const n = t.lng || this.resolvedLanguage || this.languages[0],
            r = !!this.options && this.options.fallbackLng,
            o = this.languages[this.languages.length - 1];
          if ("cimode" === n.toLowerCase()) return !0;
          const a = (e, t) => {
            const n =
              this.services.backendConnector.state["".concat(e, "|").concat(t)];
            return -1 === n || 2 === n;
          };
          if (t.precheck) {
            const e = t.precheck(this, a);
            if (void 0 !== e) return e;
          }
          return (
            !!this.hasResourceBundle(n, e) ||
            !(
              this.services.backendConnector.backend &&
              (!this.options.resources || this.options.partialBundledLanguages)
            ) ||
            !(!a(n, e) || (r && !a(o, e)))
          );
        }
        loadNamespaces(e, t) {
          const n = Vt();
          return this.options.ns
            ? ("string" === typeof e && (e = [e]),
              e.forEach((e) => {
                this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
              }),
              this.loadResources((e) => {
                n.resolve(), t && t(e);
              }),
              n)
            : (t && t(), Promise.resolve());
        }
        loadLanguages(e, t) {
          const n = Vt();
          "string" === typeof e && (e = [e]);
          const r = this.options.preload || [],
            o = e.filter((e) => r.indexOf(e) < 0);
          return o.length
            ? ((this.options.preload = r.concat(o)),
              this.loadResources((e) => {
                n.resolve(), t && t(e);
              }),
              n)
            : (t && t(), Promise.resolve());
        }
        dir(e) {
          if (
            (e ||
              (e =
                this.resolvedLanguage ||
                (this.languages && this.languages.length > 0
                  ? this.languages[0]
                  : this.language)),
            !e)
          )
            return "rtl";
          const t =
            (this.services && this.services.languageUtils) || new cn(Sn());
          return [
            "ar",
            "shu",
            "sqr",
            "ssh",
            "xaa",
            "yhd",
            "yud",
            "aao",
            "abh",
            "abv",
            "acm",
            "acq",
            "acw",
            "acx",
            "acy",
            "adf",
            "ads",
            "aeb",
            "aec",
            "afb",
            "ajp",
            "apc",
            "apd",
            "arb",
            "arq",
            "ars",
            "ary",
            "arz",
            "auz",
            "avl",
            "ayh",
            "ayl",
            "ayn",
            "ayp",
            "bbz",
            "pga",
            "he",
            "iw",
            "ps",
            "pbt",
            "pbu",
            "pst",
            "prp",
            "prd",
            "ug",
            "ur",
            "ydd",
            "yds",
            "yih",
            "ji",
            "yi",
            "hbo",
            "men",
            "xmn",
            "fa",
            "jpr",
            "peo",
            "pes",
            "prs",
            "dv",
            "sam",
            "ckb",
          ].indexOf(t.getLanguagePartFromCode(e)) > -1 ||
            e.toLowerCase().indexOf("-arab") > 1
            ? "rtl"
            : "ltr";
        }
        static createInstance() {
          return new Cn(
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            arguments.length > 1 ? arguments[1] : void 0
          );
        }
        cloneInstance() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : En;
          const n = e.forkResourceStore;
          n && delete e.forkResourceStore;
          const r = { ...this.options, ...e, isClone: !0 },
            o = new Cn(r);
          (void 0 === e.debug && void 0 === e.prefix) ||
            (o.logger = o.logger.clone(e));
          return (
            ["store", "services", "language"].forEach((e) => {
              o[e] = this[e];
            }),
            (o.services = { ...this.services }),
            (o.services.utils = {
              hasLoadedNamespace: o.hasLoadedNamespace.bind(o),
            }),
            n &&
              ((o.store = new on(this.store.data, r)),
              (o.services.resourceStore = o.store)),
            (o.translator = new ln(o.services, r)),
            o.translator.on("*", function (e) {
              for (
                var t = arguments.length,
                  n = new Array(t > 1 ? t - 1 : 0),
                  r = 1;
                r < t;
                r++
              )
                n[r - 1] = arguments[r];
              o.emit(e, ...n);
            }),
            o.init(r, t),
            (o.translator.options = r),
            (o.translator.backendConnector.services.utils = {
              hasLoadedNamespace: o.hasLoadedNamespace.bind(o),
            }),
            o
          );
        }
        toJSON() {
          return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage,
          };
        }
      }
      const On = Cn.createInstance();
      (On.createInstance = Cn.createInstance),
        On.createInstance,
        On.dir,
        On.init,
        On.loadResources,
        On.reloadResources,
        On.use,
        On.changeLanguage,
        On.getFixedT,
        On.t,
        On.exists,
        On.setDefaultNamespace,
        On.hasLoadedNamespace,
        On.loadNamespaces,
        On.loadLanguages;
      var Pn = e.createContext(null),
        Nn = function (t) {
          var n = t.locale,
            r = t.children;
          return (
            (0, e.useEffect)(
              function () {
                On.init({ lng: n });
              },
              [n]
            ),
            e.createElement(Pn.Provider, { value: On }, r)
          );
        };
      const _n = {};
      function Ln() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        ("string" === typeof t[0] && _n[t[0]]) ||
          ("string" === typeof t[0] && (_n[t[0]] = new Date()),
          (function () {
            if (console && console.warn) {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              "string" === typeof t[0] &&
                (t[0] = "react-i18next:: ".concat(t[0])),
                console.warn(...t);
            }
          })(...t));
      }
      const Tn = (e, t) => () => {
        if (e.isInitialized) t();
        else {
          const n = () => {
            setTimeout(() => {
              e.off("initialized", n);
            }, 0),
              t();
          };
          e.on("initialized", n);
        }
      };
      function Rn(e, t, n) {
        e.loadNamespaces(t, Tn(e, n));
      }
      function jn(e, t, n, r) {
        "string" === typeof n && (n = [n]),
          n.forEach((t) => {
            e.options.ns.indexOf(t) < 0 && e.options.ns.push(t);
          }),
          e.loadLanguages(t, Tn(e, r));
      }
      const Dn =
          /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
        In = {
          "&amp;": "&",
          "&#38;": "&",
          "&lt;": "<",
          "&#60;": "<",
          "&gt;": ">",
          "&#62;": ">",
          "&apos;": "'",
          "&#39;": "'",
          "&quot;": '"',
          "&#34;": '"',
          "&nbsp;": " ",
          "&#160;": " ",
          "&copy;": "\xa9",
          "&#169;": "\xa9",
          "&reg;": "\xae",
          "&#174;": "\xae",
          "&hellip;": "\u2026",
          "&#8230;": "\u2026",
          "&#x2F;": "/",
          "&#47;": "/",
        },
        An = (e) => In[e];
      let Fn,
        Mn = {
          bindI18n: "languageChanged",
          bindI18nStore: "",
          transEmptyNodeValue: "",
          transSupportBasicHtmlNodes: !0,
          transWrapTextNodes: "",
          transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
          useSuspense: !0,
          unescape: (e) => e.replace(Dn, An),
        };
      const zn = {
          type: "3rdParty",
          init(e) {
            !(function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              Mn = { ...Mn, ...e };
            })(e.options.react),
              (function (e) {
                Fn = e;
              })(e);
          },
        },
        Bn = (0, e.createContext)();
      class Un {
        constructor() {
          this.usedNamespaces = {};
        }
        addUsedNamespaces(e) {
          e.forEach((e) => {
            this.usedNamespaces[e] || (this.usedNamespaces[e] = !0);
          });
        }
        getUsedNamespaces() {
          return Object.keys(this.usedNamespaces);
        }
      }
      function Hn(e, t, n, r) {
        return e.getFixedT(t, n, r);
      }
      function Zn(t) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const { i18n: r } = n,
          { i18n: o, defaultNS: a } = (0, e.useContext)(Bn) || {},
          i = r || o || Fn;
        if ((i && !i.reportNamespaces && (i.reportNamespaces = new Un()), !i)) {
          Ln(
            "You will need to pass in an i18next instance by using initReactI18next"
          );
          const e = (e, t) =>
              "string" === typeof t
                ? t
                : t &&
                  "object" === typeof t &&
                  "string" === typeof t.defaultValue
                ? t.defaultValue
                : Array.isArray(e)
                ? e[e.length - 1]
                : e,
            t = [e, {}, !1];
          return (t.t = e), (t.i18n = {}), (t.ready = !1), t;
        }
        i.options.react &&
          void 0 !== i.options.react.wait &&
          Ln(
            "It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour."
          );
        const s = { ...Mn, ...i.options.react, ...n },
          { useSuspense: l, keyPrefix: u } = s;
        let c = t || a || (i.options && i.options.defaultNS);
        (c = "string" === typeof c ? [c] : c || ["translation"]),
          i.reportNamespaces.addUsedNamespaces &&
            i.reportNamespaces.addUsedNamespaces(c);
        const d =
            (i.isInitialized || i.initializedStoreOnce) &&
            c.every((e) =>
              (function (e, t) {
                let n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                return t.languages && t.languages.length
                  ? void 0 !== t.options.ignoreJSONStructure
                    ? t.hasLoadedNamespace(e, {
                        lng: n.lng,
                        precheck: (t, r) => {
                          if (
                            n.bindI18n &&
                            n.bindI18n.indexOf("languageChanging") > -1 &&
                            t.services.backendConnector.backend &&
                            t.isLanguageChangingTo &&
                            !r(t.isLanguageChangingTo, e)
                          )
                            return !1;
                        },
                      })
                    : (function (e, t) {
                        let n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {};
                        const r = t.languages[0],
                          o = !!t.options && t.options.fallbackLng,
                          a = t.languages[t.languages.length - 1];
                        if ("cimode" === r.toLowerCase()) return !0;
                        const i = (e, n) => {
                          const r =
                            t.services.backendConnector.state[
                              "".concat(e, "|").concat(n)
                            ];
                          return -1 === r || 2 === r;
                        };
                        return (
                          !(
                            n.bindI18n &&
                            n.bindI18n.indexOf("languageChanging") > -1 &&
                            t.services.backendConnector.backend &&
                            t.isLanguageChangingTo &&
                            !i(t.isLanguageChangingTo, e)
                          ) &&
                          (!!t.hasResourceBundle(r, e) ||
                            !(
                              t.services.backendConnector.backend &&
                              (!t.options.resources ||
                                t.options.partialBundledLanguages)
                            ) ||
                            !(!i(r, e) || (o && !i(a, e))))
                        );
                      })(e, t, n)
                  : (Ln("i18n.languages were undefined or empty", t.languages),
                    !0);
              })(e, i, s)
            ),
          f = (function (t, n, r, o) {
            return (0, e.useCallback)(Hn(t, n, r, o), [t, n, r, o]);
          })(i, n.lng || null, "fallback" === s.nsMode ? c : c[0], u),
          p = () => f,
          h = () => Hn(i, n.lng || null, "fallback" === s.nsMode ? c : c[0], u),
          [g, m] = (0, e.useState)(p);
        let v = c.join();
        n.lng && (v = "".concat(n.lng).concat(v));
        const y = ((t, n) => {
            const r = (0, e.useRef)();
            return (
              (0, e.useEffect)(() => {
                r.current = n ? r.current : t;
              }, [t, n]),
              r.current
            );
          })(v),
          b = (0, e.useRef)(!0);
        (0, e.useEffect)(() => {
          const { bindI18n: e, bindI18nStore: t } = s;
          function r() {
            b.current && m(h);
          }
          return (
            (b.current = !0),
            d ||
              l ||
              (n.lng
                ? jn(i, n.lng, c, () => {
                    b.current && m(h);
                  })
                : Rn(i, c, () => {
                    b.current && m(h);
                  })),
            d && y && y !== v && b.current && m(h),
            e && i && i.on(e, r),
            t && i && i.store.on(t, r),
            () => {
              (b.current = !1),
                e && i && e.split(" ").forEach((e) => i.off(e, r)),
                t && i && t.split(" ").forEach((e) => i.store.off(e, r));
            }
          );
        }, [i, v]);
        const w = (0, e.useRef)(!0);
        (0, e.useEffect)(() => {
          b.current && !w.current && m(p), (w.current = !1);
        }, [i, u]);
        const x = [g, i, d];
        if (((x.t = g), (x.i18n = i), (x.ready = d), d)) return x;
        if (!d && !l) return x;
        throw new Promise((e) => {
          n.lng ? jn(i, n.lng, c, () => e()) : Rn(i, c, () => e());
        });
      }
      function Vn(e) {
        return (
          (Vn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Vn(e)
        );
      }
      function Wn() {
        return (
          "function" === typeof XMLHttpRequest ||
          "object" ===
            ("undefined" === typeof XMLHttpRequest
              ? "undefined"
              : Vn(XMLHttpRequest))
        );
      }
      var $n,
        Kn = { exports: {} },
        qn = { exports: {} };
      function Qn() {
        return (
          $n ||
            (($n = 1),
            (function (e, t) {
              var n =
                  ("undefined" !== typeof globalThis && globalThis) ||
                  ("undefined" !== typeof self && self) ||
                  ("undefined" !== typeof s && s),
                r = (function () {
                  function e() {
                    (this.fetch = !1), (this.DOMException = n.DOMException);
                  }
                  return (e.prototype = n), new e();
                })();
              !(function (e) {
                !(function (t) {
                  var n =
                      ("undefined" !== typeof e && e) ||
                      ("undefined" !== typeof self && self) ||
                      ("undefined" !== typeof n && n),
                    r = "URLSearchParams" in n,
                    o = "Symbol" in n && "iterator" in Symbol,
                    a =
                      "FileReader" in n &&
                      "Blob" in n &&
                      (function () {
                        try {
                          return new Blob(), !0;
                        } catch (e) {
                          return !1;
                        }
                      })(),
                    i = "FormData" in n,
                    s = "ArrayBuffer" in n;
                  if (s)
                    var l = [
                        "[object Int8Array]",
                        "[object Uint8Array]",
                        "[object Uint8ClampedArray]",
                        "[object Int16Array]",
                        "[object Uint16Array]",
                        "[object Int32Array]",
                        "[object Uint32Array]",
                        "[object Float32Array]",
                        "[object Float64Array]",
                      ],
                      u =
                        ArrayBuffer.isView ||
                        function (e) {
                          return (
                            e &&
                            l.indexOf(Object.prototype.toString.call(e)) > -1
                          );
                        };
                  function c(e) {
                    if (
                      ("string" !== typeof e && (e = String(e)),
                      /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e)
                    )
                      throw new TypeError(
                        'Invalid character in header field name: "' + e + '"'
                      );
                    return e.toLowerCase();
                  }
                  function d(e) {
                    return "string" !== typeof e && (e = String(e)), e;
                  }
                  function f(e) {
                    var t = {
                      next: function () {
                        var t = e.shift();
                        return { done: void 0 === t, value: t };
                      },
                    };
                    return (
                      o &&
                        (t[Symbol.iterator] = function () {
                          return t;
                        }),
                      t
                    );
                  }
                  function p(e) {
                    (this.map = {}),
                      e instanceof p
                        ? e.forEach(function (e, t) {
                            this.append(t, e);
                          }, this)
                        : Array.isArray(e)
                        ? e.forEach(function (e) {
                            this.append(e[0], e[1]);
                          }, this)
                        : e &&
                          Object.getOwnPropertyNames(e).forEach(function (t) {
                            this.append(t, e[t]);
                          }, this);
                  }
                  function h(e) {
                    if (e.bodyUsed)
                      return Promise.reject(new TypeError("Already read"));
                    e.bodyUsed = !0;
                  }
                  function g(e) {
                    return new Promise(function (t, n) {
                      (e.onload = function () {
                        t(e.result);
                      }),
                        (e.onerror = function () {
                          n(e.error);
                        });
                    });
                  }
                  function m(e) {
                    var t = new FileReader(),
                      n = g(t);
                    return t.readAsArrayBuffer(e), n;
                  }
                  function v(e) {
                    if (e.slice) return e.slice(0);
                    var t = new Uint8Array(e.byteLength);
                    return t.set(new Uint8Array(e)), t.buffer;
                  }
                  function y() {
                    return (
                      (this.bodyUsed = !1),
                      (this._initBody = function (e) {
                        var t;
                        (this.bodyUsed = this.bodyUsed),
                          (this._bodyInit = e),
                          e
                            ? "string" === typeof e
                              ? (this._bodyText = e)
                              : a && Blob.prototype.isPrototypeOf(e)
                              ? (this._bodyBlob = e)
                              : i && FormData.prototype.isPrototypeOf(e)
                              ? (this._bodyFormData = e)
                              : r && URLSearchParams.prototype.isPrototypeOf(e)
                              ? (this._bodyText = e.toString())
                              : s &&
                                a &&
                                (t = e) &&
                                DataView.prototype.isPrototypeOf(t)
                              ? ((this._bodyArrayBuffer = v(e.buffer)),
                                (this._bodyInit = new Blob([
                                  this._bodyArrayBuffer,
                                ])))
                              : s &&
                                (ArrayBuffer.prototype.isPrototypeOf(e) || u(e))
                              ? (this._bodyArrayBuffer = v(e))
                              : (this._bodyText = e =
                                  Object.prototype.toString.call(e))
                            : (this._bodyText = ""),
                          this.headers.get("content-type") ||
                            ("string" === typeof e
                              ? this.headers.set(
                                  "content-type",
                                  "text/plain;charset=UTF-8"
                                )
                              : this._bodyBlob && this._bodyBlob.type
                              ? this.headers.set(
                                  "content-type",
                                  this._bodyBlob.type
                                )
                              : r &&
                                URLSearchParams.prototype.isPrototypeOf(e) &&
                                this.headers.set(
                                  "content-type",
                                  "application/x-www-form-urlencoded;charset=UTF-8"
                                ));
                      }),
                      a &&
                        ((this.blob = function () {
                          var e = h(this);
                          if (e) return e;
                          if (this._bodyBlob)
                            return Promise.resolve(this._bodyBlob);
                          if (this._bodyArrayBuffer)
                            return Promise.resolve(
                              new Blob([this._bodyArrayBuffer])
                            );
                          if (this._bodyFormData)
                            throw new Error(
                              "could not read FormData body as blob"
                            );
                          return Promise.resolve(new Blob([this._bodyText]));
                        }),
                        (this.arrayBuffer = function () {
                          if (this._bodyArrayBuffer) {
                            var e = h(this);
                            return (
                              e ||
                              (ArrayBuffer.isView(this._bodyArrayBuffer)
                                ? Promise.resolve(
                                    this._bodyArrayBuffer.buffer.slice(
                                      this._bodyArrayBuffer.byteOffset,
                                      this._bodyArrayBuffer.byteOffset +
                                        this._bodyArrayBuffer.byteLength
                                    )
                                  )
                                : Promise.resolve(this._bodyArrayBuffer))
                            );
                          }
                          return this.blob().then(m);
                        })),
                      (this.text = function () {
                        var e = h(this);
                        if (e) return e;
                        if (this._bodyBlob)
                          return (function (e) {
                            var t = new FileReader(),
                              n = g(t);
                            return t.readAsText(e), n;
                          })(this._bodyBlob);
                        if (this._bodyArrayBuffer)
                          return Promise.resolve(
                            (function (e) {
                              for (
                                var t = new Uint8Array(e),
                                  n = new Array(t.length),
                                  r = 0;
                                r < t.length;
                                r++
                              )
                                n[r] = String.fromCharCode(t[r]);
                              return n.join("");
                            })(this._bodyArrayBuffer)
                          );
                        if (this._bodyFormData)
                          throw new Error(
                            "could not read FormData body as text"
                          );
                        return Promise.resolve(this._bodyText);
                      }),
                      i &&
                        (this.formData = function () {
                          return this.text().then(x);
                        }),
                      (this.json = function () {
                        return this.text().then(JSON.parse);
                      }),
                      this
                    );
                  }
                  (p.prototype.append = function (e, t) {
                    (e = c(e)), (t = d(t));
                    var n = this.map[e];
                    this.map[e] = n ? n + ", " + t : t;
                  }),
                    (p.prototype.delete = function (e) {
                      delete this.map[c(e)];
                    }),
                    (p.prototype.get = function (e) {
                      return (e = c(e)), this.has(e) ? this.map[e] : null;
                    }),
                    (p.prototype.has = function (e) {
                      return this.map.hasOwnProperty(c(e));
                    }),
                    (p.prototype.set = function (e, t) {
                      this.map[c(e)] = d(t);
                    }),
                    (p.prototype.forEach = function (e, t) {
                      for (var n in this.map)
                        this.map.hasOwnProperty(n) &&
                          e.call(t, this.map[n], n, this);
                    }),
                    (p.prototype.keys = function () {
                      var e = [];
                      return (
                        this.forEach(function (t, n) {
                          e.push(n);
                        }),
                        f(e)
                      );
                    }),
                    (p.prototype.values = function () {
                      var e = [];
                      return (
                        this.forEach(function (t) {
                          e.push(t);
                        }),
                        f(e)
                      );
                    }),
                    (p.prototype.entries = function () {
                      var e = [];
                      return (
                        this.forEach(function (t, n) {
                          e.push([n, t]);
                        }),
                        f(e)
                      );
                    }),
                    o && (p.prototype[Symbol.iterator] = p.prototype.entries);
                  var b = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
                  function w(e, t) {
                    if (!(this instanceof w))
                      throw new TypeError(
                        'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
                      );
                    var n = (t = t || {}).body;
                    if (e instanceof w) {
                      if (e.bodyUsed) throw new TypeError("Already read");
                      (this.url = e.url),
                        (this.credentials = e.credentials),
                        t.headers || (this.headers = new p(e.headers)),
                        (this.method = e.method),
                        (this.mode = e.mode),
                        (this.signal = e.signal),
                        n ||
                          null == e._bodyInit ||
                          ((n = e._bodyInit), (e.bodyUsed = !0));
                    } else this.url = String(e);
                    if (
                      ((this.credentials =
                        t.credentials || this.credentials || "same-origin"),
                      (!t.headers && this.headers) ||
                        (this.headers = new p(t.headers)),
                      (this.method = (function (e) {
                        var t = e.toUpperCase();
                        return b.indexOf(t) > -1 ? t : e;
                      })(t.method || this.method || "GET")),
                      (this.mode = t.mode || this.mode || null),
                      (this.signal = t.signal || this.signal),
                      (this.referrer = null),
                      ("GET" === this.method || "HEAD" === this.method) && n)
                    )
                      throw new TypeError(
                        "Body not allowed for GET or HEAD requests"
                      );
                    if (
                      (this._initBody(n),
                      ("GET" === this.method || "HEAD" === this.method) &&
                        ("no-store" === t.cache || "no-cache" === t.cache))
                    ) {
                      var r = /([?&])_=[^&]*/;
                      if (r.test(this.url))
                        this.url = this.url.replace(
                          r,
                          "$1_=" + new Date().getTime()
                        );
                      else {
                        this.url +=
                          (/\?/.test(this.url) ? "&" : "?") +
                          "_=" +
                          new Date().getTime();
                      }
                    }
                  }
                  function x(e) {
                    var t = new FormData();
                    return (
                      e
                        .trim()
                        .split("&")
                        .forEach(function (e) {
                          if (e) {
                            var n = e.split("="),
                              r = n.shift().replace(/\+/g, " "),
                              o = n.join("=").replace(/\+/g, " ");
                            t.append(
                              decodeURIComponent(r),
                              decodeURIComponent(o)
                            );
                          }
                        }),
                      t
                    );
                  }
                  function S(e) {
                    var t = new p();
                    return (
                      e
                        .replace(/\r?\n[\t ]+/g, " ")
                        .split("\r")
                        .map(function (e) {
                          return 0 === e.indexOf("\n")
                            ? e.substr(1, e.length)
                            : e;
                        })
                        .forEach(function (e) {
                          var n = e.split(":"),
                            r = n.shift().trim();
                          if (r) {
                            var o = n.join(":").trim();
                            t.append(r, o);
                          }
                        }),
                      t
                    );
                  }
                  function k(e, t) {
                    if (!(this instanceof k))
                      throw new TypeError(
                        'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
                      );
                    t || (t = {}),
                      (this.type = "default"),
                      (this.status = void 0 === t.status ? 200 : t.status),
                      (this.ok = this.status >= 200 && this.status < 300),
                      (this.statusText =
                        void 0 === t.statusText ? "" : "" + t.statusText),
                      (this.headers = new p(t.headers)),
                      (this.url = t.url || ""),
                      this._initBody(e);
                  }
                  (w.prototype.clone = function () {
                    return new w(this, { body: this._bodyInit });
                  }),
                    y.call(w.prototype),
                    y.call(k.prototype),
                    (k.prototype.clone = function () {
                      return new k(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new p(this.headers),
                        url: this.url,
                      });
                    }),
                    (k.error = function () {
                      var e = new k(null, { status: 0, statusText: "" });
                      return (e.type = "error"), e;
                    });
                  var E = [301, 302, 303, 307, 308];
                  (k.redirect = function (e, t) {
                    if (-1 === E.indexOf(t))
                      throw new RangeError("Invalid status code");
                    return new k(null, { status: t, headers: { location: e } });
                  }),
                    (t.DOMException = n.DOMException);
                  try {
                    new t.DOMException();
                  } catch (O) {
                    (t.DOMException = function (e, t) {
                      (this.message = e), (this.name = t);
                      var n = Error(e);
                      this.stack = n.stack;
                    }),
                      (t.DOMException.prototype = Object.create(
                        Error.prototype
                      )),
                      (t.DOMException.prototype.constructor = t.DOMException);
                  }
                  function C(e, r) {
                    return new Promise(function (o, i) {
                      var l = new w(e, r);
                      if (l.signal && l.signal.aborted)
                        return i(new t.DOMException("Aborted", "AbortError"));
                      var u = new XMLHttpRequest();
                      function c() {
                        u.abort();
                      }
                      (u.onload = function () {
                        var e = {
                          status: u.status,
                          statusText: u.statusText,
                          headers: S(u.getAllResponseHeaders() || ""),
                        };
                        e.url =
                          "responseURL" in u
                            ? u.responseURL
                            : e.headers.get("X-Request-URL");
                        var t = "response" in u ? u.response : u.responseText;
                        setTimeout(function () {
                          o(new k(t, e));
                        }, 0);
                      }),
                        (u.onerror = function () {
                          setTimeout(function () {
                            i(new TypeError("Network request failed"));
                          }, 0);
                        }),
                        (u.ontimeout = function () {
                          setTimeout(function () {
                            i(new TypeError("Network request failed"));
                          }, 0);
                        }),
                        (u.onabort = function () {
                          setTimeout(function () {
                            i(new t.DOMException("Aborted", "AbortError"));
                          }, 0);
                        }),
                        u.open(
                          l.method,
                          (function (e) {
                            try {
                              return "" === e && n.location.href
                                ? n.location.href
                                : e;
                            } catch (t) {
                              return e;
                            }
                          })(l.url),
                          !0
                        ),
                        "include" === l.credentials
                          ? (u.withCredentials = !0)
                          : "omit" === l.credentials &&
                            (u.withCredentials = !1),
                        "responseType" in u &&
                          (a
                            ? (u.responseType = "blob")
                            : s &&
                              l.headers.get("Content-Type") &&
                              -1 !==
                                l.headers
                                  .get("Content-Type")
                                  .indexOf("application/octet-stream") &&
                              (u.responseType = "arraybuffer")),
                        !r ||
                        "object" !== typeof r.headers ||
                        r.headers instanceof p
                          ? l.headers.forEach(function (e, t) {
                              u.setRequestHeader(t, e);
                            })
                          : Object.getOwnPropertyNames(r.headers).forEach(
                              function (e) {
                                u.setRequestHeader(e, d(r.headers[e]));
                              }
                            ),
                        l.signal &&
                          (l.signal.addEventListener("abort", c),
                          (u.onreadystatechange = function () {
                            4 === u.readyState &&
                              l.signal.removeEventListener("abort", c);
                          })),
                        u.send(
                          "undefined" === typeof l._bodyInit
                            ? null
                            : l._bodyInit
                        );
                    });
                  }
                  (C.polyfill = !0),
                    n.fetch ||
                      ((n.fetch = C),
                      (n.Headers = p),
                      (n.Request = w),
                      (n.Response = k)),
                    (t.Headers = p),
                    (t.Request = w),
                    (t.Response = k),
                    (t.fetch = C);
                })({});
              })(r),
                (r.fetch.ponyfill = !0),
                delete r.fetch.polyfill;
              var o = n.fetch ? n : r;
              ((t = o.fetch).default = o.fetch),
                (t.fetch = o.fetch),
                (t.Headers = o.Headers),
                (t.Request = o.Request),
                (t.Response = o.Response),
                (e.exports = t);
            })(qn, qn.exports)),
          qn.exports
        );
      }
      !(function (e, t) {
        var n;
        if (
          ("function" === typeof fetch &&
            (n =
              "undefined" !== typeof s && s.fetch
                ? s.fetch
                : "undefined" !== typeof window && window.fetch
                ? window.fetch
                : fetch),
          "undefined" === typeof window ||
            "undefined" === typeof window.document)
        ) {
          var r = n || Qn();
          r.default && (r = r.default),
            (t.default = r),
            (e.exports = t.default);
        }
      })(Kn, Kn.exports);
      var Jn,
        Gn,
        Yn,
        Xn = Kn.exports,
        er = l(Xn),
        tr = r({ __proto__: null, default: er }, [Xn]);
      function nr(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function rr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? nr(Object(n), !0).forEach(function (t) {
                or(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : nr(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function or(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" !== ar(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" !== ar(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" === ar(t) ? t : String(t);
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function ar(e) {
        return (
          (ar =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          ar(e)
        );
      }
      "function" === typeof fetch &&
        (Jn =
          "undefined" !== typeof n.g && n.g.fetch
            ? n.g.fetch
            : "undefined" !== typeof window && window.fetch
            ? window.fetch
            : fetch),
        Wn() &&
          ("undefined" !== typeof n.g && n.g.XMLHttpRequest
            ? (Gn = n.g.XMLHttpRequest)
            : "undefined" !== typeof window &&
              window.XMLHttpRequest &&
              (Gn = window.XMLHttpRequest)),
        "function" === typeof ActiveXObject &&
          ("undefined" !== typeof n.g && n.g.ActiveXObject
            ? (Yn = n.g.ActiveXObject)
            : "undefined" !== typeof window &&
              window.ActiveXObject &&
              (Yn = window.ActiveXObject)),
        Jn || !tr || Gn || Yn || (Jn = er || tr),
        "function" !== typeof Jn && (Jn = void 0);
      var ir = function (e, t) {
          if (t && "object" === ar(t)) {
            var n = "";
            for (var r in t)
              n += "&" + encodeURIComponent(r) + "=" + encodeURIComponent(t[r]);
            if (!n) return e;
            e = e + (-1 !== e.indexOf("?") ? "&" : "?") + n.slice(1);
          }
          return e;
        },
        sr = function (e, t, n) {
          var r = function (e) {
            if (!e.ok) return n(e.statusText || "Error", { status: e.status });
            e.text()
              .then(function (t) {
                n(null, { status: e.status, data: t });
              })
              .catch(n);
          };
          "function" === typeof fetch
            ? fetch(e, t).then(r).catch(n)
            : Jn(e, t).then(r).catch(n);
        },
        lr = !1,
        ur = function (e, t, r, o) {
          return (
            "function" === typeof r && ((o = r), (r = void 0)),
            (o = o || function () {}),
            Jn && 0 !== t.indexOf("file:")
              ? (function (e, t, r, o) {
                  e.queryStringParams && (t = ir(t, e.queryStringParams));
                  var a = rr(
                    {},
                    "function" === typeof e.customHeaders
                      ? e.customHeaders()
                      : e.customHeaders
                  );
                  "undefined" === typeof window &&
                    "undefined" !== typeof n.g &&
                    "undefined" !== typeof n.g.process &&
                    n.g.process.versions &&
                    n.g.process.versions.node &&
                    (a["User-Agent"] = "i18next-http-backend (node/"
                      .concat(n.g.process.version, "; ")
                      .concat(n.g.process.platform, " ")
                      .concat(n.g.process.arch, ")")),
                    r && (a["Content-Type"] = "application/json");
                  var i =
                      "function" === typeof e.requestOptions
                        ? e.requestOptions(r)
                        : e.requestOptions,
                    s = rr(
                      {
                        method: r ? "POST" : "GET",
                        body: r ? e.stringify(r) : void 0,
                        headers: a,
                      },
                      lr ? {} : i
                    );
                  try {
                    sr(t, s, o);
                  } catch (l) {
                    if (
                      !i ||
                      0 === Object.keys(i).length ||
                      !l.message ||
                      l.message.indexOf("not implemented") < 0
                    )
                      return o(l);
                    try {
                      Object.keys(i).forEach(function (e) {
                        delete s[e];
                      }),
                        sr(t, s, o),
                        (lr = !0);
                    } catch (u) {
                      o(u);
                    }
                  }
                })(e, t, r, o)
              : Wn() || "function" === typeof ActiveXObject
              ? (function (e, t, n, r) {
                  n && "object" === ar(n) && (n = ir("", n).slice(1)),
                    e.queryStringParams && (t = ir(t, e.queryStringParams));
                  try {
                    var o;
                    (o = Gn ? new Gn() : new Yn("MSXML2.XMLHTTP.3.0")).open(
                      n ? "POST" : "GET",
                      t,
                      1
                    ),
                      e.crossDomain ||
                        o.setRequestHeader(
                          "X-Requested-With",
                          "XMLHttpRequest"
                        ),
                      (o.withCredentials = !!e.withCredentials),
                      n &&
                        o.setRequestHeader(
                          "Content-Type",
                          "application/x-www-form-urlencoded"
                        ),
                      o.overrideMimeType &&
                        o.overrideMimeType("application/json");
                    var a = e.customHeaders;
                    if ((a = "function" === typeof a ? a() : a))
                      for (var i in a) o.setRequestHeader(i, a[i]);
                    (o.onreadystatechange = function () {
                      o.readyState > 3 &&
                        r(o.status >= 400 ? o.statusText : null, {
                          status: o.status,
                          data: o.responseText,
                        });
                    }),
                      o.send(n);
                  } catch (s) {
                    console && console.log(s);
                  }
                })(e, t, r, o)
              : void o(new Error("No fetch and no xhr implementation found!"))
          );
        };
      function cr(e) {
        return (
          (cr =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          cr(e)
        );
      }
      function dr(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function fr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? dr(Object(n), !0).forEach(function (t) {
                hr(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : dr(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function pr(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, gr(r.key), r);
        }
      }
      function hr(e, t, n) {
        return (
          (t = gr(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function gr(e) {
        var t = (function (e, t) {
          if ("object" !== cr(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== cr(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === cr(t) ? t : String(t);
      }
      var mr = (function () {
        function e(t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.services = t),
            (this.options = n),
            (this.allOptions = r),
            (this.type = "backend"),
            this.init(t, n, r);
        }
        var t, n, r;
        return (
          (t = e),
          (n = [
            {
              key: "init",
              value: function (e) {
                var t = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                (this.services = e),
                  (this.options = fr(
                    fr(
                      fr(
                        {},
                        {
                          loadPath: "/locales/{{lng}}/{{ns}}.json",
                          addPath: "/locales/add/{{lng}}/{{ns}}",
                          parse: function (e) {
                            return JSON.parse(e);
                          },
                          stringify: JSON.stringify,
                          parsePayload: function (e, t, n) {
                            return hr({}, t, n || "");
                          },
                          parseLoadPayload: function (e, t) {},
                          request: ur,
                          reloadInterval: "undefined" === typeof window && 36e5,
                          customHeaders: {},
                          queryStringParams: {},
                          crossDomain: !1,
                          withCredentials: !1,
                          overrideMimeType: !1,
                          requestOptions: {
                            mode: "cors",
                            credentials: "same-origin",
                            cache: "default",
                          },
                        }
                      ),
                      this.options || {}
                    ),
                    n
                  )),
                  (this.allOptions = r),
                  this.services &&
                    this.options.reloadInterval &&
                    setInterval(function () {
                      return t.reload();
                    }, this.options.reloadInterval);
              },
            },
            {
              key: "readMulti",
              value: function (e, t, n) {
                this._readAny(e, e, t, t, n);
              },
            },
            {
              key: "read",
              value: function (e, t, n) {
                this._readAny([e], e, [t], t, n);
              },
            },
            {
              key: "_readAny",
              value: function (e, t, n, r, o) {
                var a,
                  i = this,
                  s = this.options.loadPath;
                "function" === typeof this.options.loadPath &&
                  (s = this.options.loadPath(e, n)),
                  (s = (function (e) {
                    return !!e && "function" === typeof e.then;
                  })((a = s))
                    ? a
                    : Promise.resolve(a)).then(function (a) {
                    if (!a) return o(null, {});
                    var s = i.services.interpolator.interpolate(a, {
                      lng: e.join("+"),
                      ns: n.join("+"),
                    });
                    i.loadUrl(s, o, t, r);
                  });
              },
            },
            {
              key: "loadUrl",
              value: function (e, t, n, r) {
                var o = this,
                  a = "string" === typeof n ? [n] : n,
                  i = "string" === typeof r ? [r] : r,
                  s = this.options.parseLoadPayload(a, i);
                this.options.request(this.options, e, s, function (a, i) {
                  if (i && ((i.status >= 500 && i.status < 600) || !i.status))
                    return t(
                      "failed loading " + e + "; status code: " + i.status,
                      !0
                    );
                  if (i && i.status >= 400 && i.status < 500)
                    return t(
                      "failed loading " + e + "; status code: " + i.status,
                      !1
                    );
                  if (
                    !i &&
                    a &&
                    a.message &&
                    a.message.indexOf("Failed to fetch") > -1
                  )
                    return t("failed loading " + e + ": " + a.message, !0);
                  if (a) return t(a, !1);
                  var s, l;
                  try {
                    s =
                      "string" === typeof i.data
                        ? o.options.parse(i.data, n, r)
                        : i.data;
                  } catch (u) {
                    l = "failed parsing " + e + " to json";
                  }
                  if (l) return t(l, !1);
                  t(null, s);
                });
              },
            },
            {
              key: "create",
              value: function (e, t, n, r, o) {
                var a = this;
                if (this.options.addPath) {
                  "string" === typeof e && (e = [e]);
                  var i = this.options.parsePayload(t, n, r),
                    s = 0,
                    l = [],
                    u = [];
                  e.forEach(function (n) {
                    var r = a.options.addPath;
                    "function" === typeof a.options.addPath &&
                      (r = a.options.addPath(n, t));
                    var c = a.services.interpolator.interpolate(r, {
                      lng: n,
                      ns: t,
                    });
                    a.options.request(a.options, c, i, function (t, n) {
                      (s += 1),
                        l.push(t),
                        u.push(n),
                        s === e.length && "function" === typeof o && o(l, u);
                    });
                  });
                }
              },
            },
            {
              key: "reload",
              value: function () {
                var e = this,
                  t = this.services,
                  n = t.backendConnector,
                  r = t.languageUtils,
                  o = t.logger,
                  a = n.language;
                if (!a || "cimode" !== a.toLowerCase()) {
                  var i = [],
                    s = function (e) {
                      r.toResolveHierarchy(e).forEach(function (e) {
                        i.indexOf(e) < 0 && i.push(e);
                      });
                    };
                  s(a),
                    this.allOptions.preload &&
                      this.allOptions.preload.forEach(function (e) {
                        return s(e);
                      }),
                    i.forEach(function (t) {
                      e.allOptions.ns.forEach(function (e) {
                        n.read(t, e, "read", null, null, function (r, a) {
                          r &&
                            o.warn(
                              "loading namespace "
                                .concat(e, " for language ")
                                .concat(t, " failed"),
                              r
                            ),
                            !r &&
                              a &&
                              o.log(
                                "loaded namespace "
                                  .concat(e, " for language ")
                                  .concat(t),
                                a
                              ),
                            n.loaded("".concat(t, "|").concat(e), r, a);
                        });
                      });
                    });
                }
              },
            },
          ]),
          n && pr(t.prototype, n),
          r && pr(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e
        );
      })();
      function vr(e) {
        return (
          (vr =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          vr(e)
        );
      }
      function yr(e) {
        var t = (function (e, t) {
          if ("object" != vr(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" != vr(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == vr(t) ? t : String(t);
      }
      function br(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, yr(r.key), r);
        }
      }
      mr.type = "backend";
      var wr = [],
        xr = wr.forEach,
        Sr = wr.slice;
      var kr = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
        Er = function (e, t, n, r) {
          var o =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : { path: "/", sameSite: "strict" };
          n &&
            ((o.expires = new Date()),
            o.expires.setTime(o.expires.getTime() + 60 * n * 1e3)),
            r && (o.domain = r),
            (document.cookie = (function (e, t, n) {
              var r = n || {};
              r.path = r.path || "/";
              var o = encodeURIComponent(t),
                a = "".concat(e, "=").concat(o);
              if (r.maxAge > 0) {
                var i = r.maxAge - 0;
                if (Number.isNaN(i))
                  throw new Error("maxAge should be a Number");
                a += "; Max-Age=".concat(Math.floor(i));
              }
              if (r.domain) {
                if (!kr.test(r.domain))
                  throw new TypeError("option domain is invalid");
                a += "; Domain=".concat(r.domain);
              }
              if (r.path) {
                if (!kr.test(r.path))
                  throw new TypeError("option path is invalid");
                a += "; Path=".concat(r.path);
              }
              if (r.expires) {
                if ("function" !== typeof r.expires.toUTCString)
                  throw new TypeError("option expires is invalid");
                a += "; Expires=".concat(r.expires.toUTCString());
              }
              if (
                (r.httpOnly && (a += "; HttpOnly"),
                r.secure && (a += "; Secure"),
                r.sameSite)
              )
                switch (
                  "string" === typeof r.sameSite
                    ? r.sameSite.toLowerCase()
                    : r.sameSite
                ) {
                  case !0:
                    a += "; SameSite=Strict";
                    break;
                  case "lax":
                    a += "; SameSite=Lax";
                    break;
                  case "strict":
                    a += "; SameSite=Strict";
                    break;
                  case "none":
                    a += "; SameSite=None";
                    break;
                  default:
                    throw new TypeError("option sameSite is invalid");
                }
              return a;
            })(e, encodeURIComponent(t), o));
        },
        Cr = function (e) {
          for (
            var t = "".concat(e, "="), n = document.cookie.split(";"), r = 0;
            r < n.length;
            r++
          ) {
            for (var o = n[r]; " " === o.charAt(0); )
              o = o.substring(1, o.length);
            if (0 === o.indexOf(t)) return o.substring(t.length, o.length);
          }
          return null;
        },
        Or = {
          name: "cookie",
          lookup: function (e) {
            var t;
            if (e.lookupCookie && "undefined" !== typeof document) {
              var n = Cr(e.lookupCookie);
              n && (t = n);
            }
            return t;
          },
          cacheUserLanguage: function (e, t) {
            t.lookupCookie &&
              "undefined" !== typeof document &&
              Er(
                t.lookupCookie,
                e,
                t.cookieMinutes,
                t.cookieDomain,
                t.cookieOptions
              );
          },
        },
        Pr = {
          name: "querystring",
          lookup: function (e) {
            var t;
            if ("undefined" !== typeof window) {
              var n = window.location.search;
              !window.location.search &&
                window.location.hash &&
                window.location.hash.indexOf("?") > -1 &&
                (n = window.location.hash.substring(
                  window.location.hash.indexOf("?")
                ));
              for (
                var r = n.substring(1).split("&"), o = 0;
                o < r.length;
                o++
              ) {
                var a = r[o].indexOf("=");
                if (a > 0)
                  r[o].substring(0, a) === e.lookupQuerystring &&
                    (t = r[o].substring(a + 1));
              }
            }
            return t;
          },
        },
        Nr = null,
        _r = function () {
          if (null !== Nr) return Nr;
          try {
            Nr = "undefined" !== window && null !== window.localStorage;
            var e = "i18next.translate.boo";
            window.localStorage.setItem(e, "foo"),
              window.localStorage.removeItem(e);
          } catch (t) {
            Nr = !1;
          }
          return Nr;
        },
        Lr = {
          name: "localStorage",
          lookup: function (e) {
            var t;
            if (e.lookupLocalStorage && _r()) {
              var n = window.localStorage.getItem(e.lookupLocalStorage);
              n && (t = n);
            }
            return t;
          },
          cacheUserLanguage: function (e, t) {
            t.lookupLocalStorage &&
              _r() &&
              window.localStorage.setItem(t.lookupLocalStorage, e);
          },
        },
        Tr = null,
        Rr = function () {
          if (null !== Tr) return Tr;
          try {
            Tr = "undefined" !== window && null !== window.sessionStorage;
            var e = "i18next.translate.boo";
            window.sessionStorage.setItem(e, "foo"),
              window.sessionStorage.removeItem(e);
          } catch (t) {
            Tr = !1;
          }
          return Tr;
        },
        jr = {
          name: "sessionStorage",
          lookup: function (e) {
            var t;
            if (e.lookupSessionStorage && Rr()) {
              var n = window.sessionStorage.getItem(e.lookupSessionStorage);
              n && (t = n);
            }
            return t;
          },
          cacheUserLanguage: function (e, t) {
            t.lookupSessionStorage &&
              Rr() &&
              window.sessionStorage.setItem(t.lookupSessionStorage, e);
          },
        },
        Dr = {
          name: "navigator",
          lookup: function (e) {
            var t = [];
            if ("undefined" !== typeof navigator) {
              if (navigator.languages)
                for (var n = 0; n < navigator.languages.length; n++)
                  t.push(navigator.languages[n]);
              navigator.userLanguage && t.push(navigator.userLanguage),
                navigator.language && t.push(navigator.language);
            }
            return t.length > 0 ? t : void 0;
          },
        },
        Ir = {
          name: "htmlTag",
          lookup: function (e) {
            var t,
              n =
                e.htmlTag ||
                ("undefined" !== typeof document
                  ? document.documentElement
                  : null);
            return (
              n &&
                "function" === typeof n.getAttribute &&
                (t = n.getAttribute("lang")),
              t
            );
          },
        },
        Ar = {
          name: "path",
          lookup: function (e) {
            var t;
            if ("undefined" !== typeof window) {
              var n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
              if (n instanceof Array)
                if ("number" === typeof e.lookupFromPathIndex) {
                  if ("string" !== typeof n[e.lookupFromPathIndex]) return;
                  t = n[e.lookupFromPathIndex].replace("/", "");
                } else t = n[0].replace("/", "");
            }
            return t;
          },
        },
        Fr = {
          name: "subdomain",
          lookup: function (e) {
            var t =
                "number" === typeof e.lookupFromSubdomainIndex
                  ? e.lookupFromSubdomainIndex + 1
                  : 1,
              n =
                "undefined" !== typeof window &&
                window.location &&
                window.location.hostname &&
                window.location.hostname.match(
                  /^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i
                );
            if (n) return n[t];
          },
        };
      var Mr = (function () {
        function e(t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.type = "languageDetector"),
            (this.detectors = {}),
            this.init(t, n);
        }
        var t, n, r;
        return (
          (t = e),
          (n = [
            {
              key: "init",
              value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                (this.services = e || { languageUtils: {} }),
                  (this.options = (function (e) {
                    return (
                      xr.call(Sr.call(arguments, 1), function (t) {
                        if (t)
                          for (var n in t) void 0 === e[n] && (e[n] = t[n]);
                      }),
                      e
                    );
                  })(t, this.options || {}, {
                    order: [
                      "querystring",
                      "cookie",
                      "localStorage",
                      "sessionStorage",
                      "navigator",
                      "htmlTag",
                    ],
                    lookupQuerystring: "lng",
                    lookupCookie: "i18next",
                    lookupLocalStorage: "i18nextLng",
                    lookupSessionStorage: "i18nextLng",
                    caches: ["localStorage"],
                    excludeCacheFor: ["cimode"],
                    convertDetectedLanguage: function (e) {
                      return e;
                    },
                  })),
                  "string" === typeof this.options.convertDetectedLanguage &&
                    this.options.convertDetectedLanguage.indexOf("15897") >
                      -1 &&
                    (this.options.convertDetectedLanguage = function (e) {
                      return e.replace("-", "_");
                    }),
                  this.options.lookupFromUrlIndex &&
                    (this.options.lookupFromPathIndex =
                      this.options.lookupFromUrlIndex),
                  (this.i18nOptions = n),
                  this.addDetector(Or),
                  this.addDetector(Pr),
                  this.addDetector(Lr),
                  this.addDetector(jr),
                  this.addDetector(Dr),
                  this.addDetector(Ir),
                  this.addDetector(Ar),
                  this.addDetector(Fr);
              },
            },
            {
              key: "addDetector",
              value: function (e) {
                this.detectors[e.name] = e;
              },
            },
            {
              key: "detect",
              value: function (e) {
                var t = this;
                e || (e = this.options.order);
                var n = [];
                return (
                  e.forEach(function (e) {
                    if (t.detectors[e]) {
                      var r = t.detectors[e].lookup(t.options);
                      r && "string" === typeof r && (r = [r]),
                        r && (n = n.concat(r));
                    }
                  }),
                  (n = n.map(function (e) {
                    return t.options.convertDetectedLanguage(e);
                  })),
                  this.services.languageUtils.getBestMatchFromCodes
                    ? n
                    : n.length > 0
                    ? n[0]
                    : null
                );
              },
            },
            {
              key: "cacheUserLanguage",
              value: function (e, t) {
                var n = this;
                t || (t = this.options.caches),
                  t &&
                    ((this.options.excludeCacheFor &&
                      this.options.excludeCacheFor.indexOf(e) > -1) ||
                      t.forEach(function (t) {
                        n.detectors[t] &&
                          n.detectors[t].cacheUserLanguage(e, n.options);
                      }));
              },
            },
          ]),
          n && br(t.prototype, n),
          r && br(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e
        );
      })();
      (Mr.type = "languageDetector"),
        On.use(Mr)
          .use(mr)
          .use(zn)
          .init({ fallbackLng: "en", interpolation: { escapeValue: !1 } });
      var zr = {
        theme1: { primaryBgColor: "#2563EB", backgroundColor: "#E2E8F0" },
        theme2: { primaryBgColor: "red", backgroundColor: "#2563EB" },
        theme3: { primaryBgColor: "orange", backgroundColor: "#DBEAFE" },
        theme4: { primaryBgColor: "green", backgroundColor: "yellow" },
      };
      var Br,
        Ur = "filled",
        Hr = "h-10 px-3 py-2 rounded-md font-semibold cursor-pointer",
        Zr = function (e) {
          return e === Ur
            ? "\n  "
                .concat(Hr, " ")
                .concat(
                  "bg-brand-600 border border-solid border-blue-200 text-white hover:bg-brand-700 hover:border-blue-200 outline-none",
                  "\n}"
                )
            : "outline" === e
            ? "\n  "
                .concat(Hr, " ")
                .concat(
                  "\n    bg-transparent border-[1.5px] border-solid border-black text-gray-700\n",
                  "\n"
                )
            : void 0;
        },
        Vr = e.forwardRef(function (t, n) {
          var r = t.children;
          t.description;
          var a = t.theme,
            i = void 0 === a ? Ur : a,
            s = t.className,
            l = (function (e, t) {
              var n = {};
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) &&
                  t.indexOf(r) < 0 &&
                  (n[r] = e[r]);
              if (
                null != e &&
                "function" === typeof Object.getOwnPropertySymbols
              ) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                  t.indexOf(r[o]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                    (n[r[o]] = e[r[o]]);
              }
              return n;
            })(t, ["children", "description", "theme", "className"]),
            u = (0, e.useRef)(null);
          return (
            (l.ref = n || u),
            e.createElement(
              "button",
              o({ className: "".concat(Zr(i), " ").concat(s || "") }, l),
              r
            )
          );
        }),
        Wr = function (t) {
          return e.createElement(
            "svg",
            o(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 20,
                height: 20,
                fill: "none",
              },
              t
            ),
            e.createElement("path", {
              stroke: "#94A3B8",
              strokeLinecap: "round",
              strokeWidth: 1.667,
              d: "M15.556 4.445 4.446 15.556m0-11.11 11.11 11.11",
            })
          );
        },
        $r = function (t) {
          return e.createElement(
            "svg",
            o(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 20,
                height: 20,
                fill: "none",
              },
              t
            ),
            e.createElement("path", {
              stroke: "#94A3B8",
              strokeLinecap: "round",
              strokeWidth: 1.25,
              d: "M15.83 10a5.835 5.835 0 0 1-9.957 4.124A5.832 5.832 0 0 1 4.164 10",
            }),
            e.createElement("path", {
              fill: "#94A3B8",
              d: "M9.375 17.5a.625.625 0 0 0 1.25 0h-1.25Zm0-1.666v1.667h1.25v-1.667h-1.25Z",
            }),
            e.createElement("rect", {
              width: 6.667,
              height: 10.833,
              x: 6.664,
              y: 2.5,
              stroke: "#94A3B8",
              strokeWidth: 1.25,
              rx: 3.333,
            })
          );
        },
        Kr = function (t) {
          return e.createElement(
            "svg",
            o(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 20,
                height: 20,
                fill: "none",
              },
              t
            ),
            e.createElement("circle", {
              cx: 8.336,
              cy: 8.334,
              r: 5,
              stroke: "#94A3B8",
              strokeWidth: 1.25,
            }),
            e.createElement("path", {
              fill: "#94A3B8",
              d: "M16.222 17.11a.625.625 0 1 0 .884-.884l-.884.884Zm-5-5 5 5 .884-.884-5-5-.884.884Z",
            })
          );
        },
        qr = function () {
          return e.createElement(
            "svg",
            {
              width: "20",
              height: "21",
              viewBox: "0 0 20 21",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e.createElement("path", {
              d: "M7 16.0469L13 10.0469L7 4.04687",
              stroke: "#94A3B8",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        },
        Qr = function (t) {
          return e.createElement(
            "svg",
            o(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "100%",
                height: "100%",
                fill: "none",
              },
              t
            ),
            e.createElement(
              "path",
              o(
                {
                  stroke: "#94A3B8",
                  strokeLinecap: "round",
                  strokeWidth: 1.667,
                  d: "M15.556 4.445 4.446 15.556m0-11.11 11.11 11.11",
                },
                t.style
              )
            )
          );
        },
        Jr = function () {
          return e.createElement(
            "svg",
            {
              width: "21",
              height: "20",
              viewBox: "0 0 21 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e.createElement("path", {
              d: "M18.0818 9.18974L17.5267 9.477L18.0818 9.18974ZM18.0818 10.81L18.6369 11.0972L18.0818 10.81ZM2.91982 9.18974L2.36475 8.90249L2.91982 9.18974ZM3.4749 9.477C4.84066 6.83788 7.48393 5.06934 10.5008 5.06934V3.81934C6.97454 3.81934 3.92514 5.88727 2.36475 8.90249L3.4749 9.477ZM10.5008 5.06934C13.5177 5.06934 16.161 6.83788 17.5267 9.477L18.6369 8.90249C17.0765 5.88728 14.0271 3.81934 10.5008 3.81934V5.06934ZM17.5267 10.5227C16.161 13.1618 13.5177 14.9304 10.5008 14.9304V16.1804C14.0271 16.1804 17.0765 14.1124 18.6369 11.0972L17.5267 10.5227ZM10.5008 14.9304C7.48393 14.9304 4.84066 13.1618 3.4749 10.5227L2.36475 11.0972C3.92514 14.1124 6.97454 16.1804 10.5008 16.1804V14.9304ZM17.5267 9.477C17.6964 9.80483 17.6964 10.1949 17.5267 10.5227L18.6369 11.0972C18.993 10.4091 18.993 9.59064 18.6369 8.90249L17.5267 9.477ZM2.36475 8.90249C2.00863 9.59063 2.00863 10.4091 2.36475 11.0972L3.4749 10.5227C3.30524 10.1949 3.30524 9.80483 3.4749 9.477L2.36475 8.90249Z",
              fill: "#475569",
            }),
            e.createElement("circle", {
              cx: "10.5005",
              cy: "9.99957",
              r: "2.22222",
              stroke: "#475569",
              strokeWidth: "1.25",
            })
          );
        },
        Gr = function (t) {
          var n = t.tabContent,
            r = t.handleChange,
            o = (0, e.useState)(""),
            a = o[0],
            i = o[1];
          return (
            (0, e.useEffect)(function () {
              var e;
              i(null === (e = n[0]) || void 0 === e ? void 0 : e.value);
            }, []),
            e.createElement(
              "div",
              {
                className:
                  "p-2 flex justify-between items-center rounded-[44px] bg-white shadow-[0px_0px_12px_0px_#0000000a]",
              },
              n.map(function (t, n) {
                return e.createElement(
                  "div",
                  {
                    key: n,
                    className: ""
                      .concat(
                        "flex justify-center items-center text-xs  leading-4 w-full cursor-pointer gap-1 py-2 px-4 rounded-[44px] border-[1px] border-white",
                        " "
                      )
                      .concat(
                        (null === t || void 0 === t ? void 0 : t.value) === a
                          ? "border-brand-300 bg-brand-100 text-brand-600 font-bold"
                          : "font-normal text-gray-700"
                      ),
                    onClick: function () {
                      i(null === t || void 0 === t ? void 0 : t.value),
                        r(null === t || void 0 === t ? void 0 : t.value);
                    },
                  },
                  e.createElement(
                    "div",
                    null,
                    null === t || void 0 === t ? void 0 : t.label
                  ),
                  "number" ===
                    typeof (null === t || void 0 === t ? void 0 : t.dataNo) &&
                    e.createElement(
                      "div",
                      {
                        className: "p-[10px] ".concat(
                          (null === t || void 0 === t ? void 0 : t.value) === a
                            ? "bg-brand-600 text-gray-25"
                            : "bg-gray-200 text-gray-800",
                          " flex h-5 justify-center items-center w-5 rounded-xl gap-[10px] max-w-5"
                        ),
                      },
                      e.createElement(
                        "span",
                        { className: "text-xs" },
                        null === t || void 0 === t ? void 0 : t.dataNo
                      )
                    )
                );
              })
            )
          );
        },
        Yr = zt.div(
          Br ||
            (Br = i(
              [
                "\n  input {\n    ::placeholder {\n      font-size: 16px;\n      font-weight: 400;\n      line-height: 25.6px;\n    }\n  }\n",
              ],
              [
                "\n  input {\n    ::placeholder {\n      font-size: 16px;\n      font-weight: 400;\n      line-height: 25.6px;\n    }\n  }\n",
              ]
            ))
        ),
        Xr = function (t) {
          var n = t.placeholder,
            r = void 0 === n ? "" : n,
            o = t.handleChange,
            a = void 0 === o ? function () {} : o,
            i = Zn().t,
            s = (0, e.useState)(""),
            l = s[0],
            u = s[1],
            c = (0, e.useState)(!1),
            d = c[0],
            f = c[1];
          return e.createElement(
            Yr,
            { className: "w-full" },
            e.createElement(
              "div",
              {
                className:
                  "rounded-md flex justify-between items-center w-full bg-white py-[10px] px-3 gap-[10px] border border-solid border-gray-200 ".concat(
                    d ? "border-brand-400" : ""
                  ),
              },
              e.createElement(
                "div",
                { className: "w-5 h-5 cursor-pointer" },
                e.createElement(Kr, null)
              ),
              e.createElement("input", {
                className:
                  "w-full text-base font-normal leading-6 border-none outline-none",
                onFocus: function () {
                  return f(!0);
                },
                onBlur: function () {
                  return f(!1);
                },
                placeholder: i(r),
                value: l,
                onChange: function (e) {
                  a(e), u(e.target.value);
                },
              }),
              e.createElement(
                "div",
                { className: "flex justify-center items-center gap-[10px]" },
                e.createElement(
                  "div",
                  { className: "w-5 h-5 cursor-pointer" },
                  d || (null === l || void 0 === l ? void 0 : l.length)
                    ? e.createElement(
                        "div",
                        {
                          className: "cursor-pointer",
                          onClick: function () {
                            return u("");
                          },
                        },
                        e.createElement(Wr, null)
                      )
                    : e.createElement($r, null)
                )
              )
            )
          );
        },
        eo = function (t) {
          var n = t.tagName,
            r = t.tagType;
          Zn().t;
          var o = (0, e.useState)(),
            a = o[0],
            i = o[1],
            s = [
              { tag: "info", textColor: "#475569", bgColor: "#DBEAFE" },
              { tag: "pending", textColor: "#A16207", bgColor: "#FEF9C3" },
              { tag: "warning", textColor: "#C2410C", bgColor: "#FFEDD5" },
              { tag: "success", textColor: "#166534", bgColor: "#DCFCE7" },
              { tag: "error", textColor: "#B91C1C", bgColor: "#FEE2E2" },
              { tag: "inActive", textColor: "#475569", bgColor: "#F1F5F9" },
              { tag: "default", textColor: "#040332", bgColor: "#E6F5F5" },
            ];
          return (
            (0, e.useEffect)(
              function () {
                n &&
                  r &&
                  i(
                    (function (e, t, n) {
                      var r = { tagName: "", textColor: "", bgColor: "" },
                        o = e.find(function (e) {
                          return e.tag === n;
                        });
                      return (
                        o &&
                          ((r.tagName = t),
                          (r.textColor = o.textColor),
                          (r.bgColor = o.bgColor)),
                        r
                      );
                    })(s, n, r)
                  );
              },
              [n, r]
            ),
            e.createElement(
              "div",
              {
                className:
                  "text-xs font-medium px-2 py-1 rounded-[4px] inline-block",
                style: {
                  backgroundColor:
                    null === a || void 0 === a ? void 0 : a.bgColor,
                  color: null === a || void 0 === a ? void 0 : a.textColor,
                },
              },
              null === a || void 0 === a ? void 0 : a.tagName
            )
          );
        },
        to =
          (e.createElement(function () {
            return e.createElement(
              "svg",
              {
                width: "32",
                height: "33",
                viewBox: "0 0 32 33",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e.createElement("path", {
                d: "M13.3333 13.3802H18.6667M13.3333 15.232H18.6667M17.1113 20.0469L13.3333 17.0837H14.6667C17.6296 17.0837 17.6296 13.3802 14.6667 13.3802",
                stroke: "#475569",
                strokeWidth: "1.33333",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              e.createElement("circle", {
                cx: "15.9964",
                cy: "16.0481",
                r: "7.04845",
                stroke: "#475569",
                strokeWidth: "1.33333",
              }),
              e.createElement("path", {
                d: "M26.0078 16.6695C26.0078 10.8389 23.4164 6.30404 16.5938 6.30404",
                stroke: "#475569",
                strokeWidth: "1.33333",
                strokeLinecap: "round",
              }),
              e.createElement("path", {
                d: "M17.8895 6.30426H16.5938L19.1852 3.71289",
                stroke: "#475569",
                strokeWidth: "1.33333",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              e.createElement("path", {
                d: "M6.0236 15.461C6.0236 21.2916 8.615 25.8265 15.4376 25.8265",
                stroke: "#475569",
                strokeWidth: "1.33333",
                strokeLinecap: "round",
              }),
              e.createElement("path", {
                d: "M14.1419 25.8263L15.4376 25.8263L12.8462 28.4176",
                stroke: "#475569",
                strokeWidth: "1.33333",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              })
            );
          }, null),
          e.createElement(function () {
            return e.createElement(
              "svg",
              {
                width: "36",
                height: "37",
                viewBox: "0 0 36 37",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e.createElement("rect", {
                y: "0.046875",
                width: "36",
                height: "36",
                rx: "4",
                fill: "#F1F5F9",
              }),
              e.createElement("path", {
                d: "M28.7948 8.44806H7.19478C6.87652 8.44806 6.5713 8.57449 6.34625 8.79953C6.12121 9.02457 5.99478 9.3298 5.99478 9.64806V26.4481C5.99478 26.7663 6.12121 27.0715 6.34625 27.2966C6.5713 27.5216 6.87652 27.6481 7.19478 27.6481H28.7948C29.113 27.6481 29.4183 27.5216 29.6433 27.2966C29.8684 27.0715 29.9948 26.7663 29.9948 26.4481V9.64806C29.9948 9.3298 29.8684 9.02457 29.6433 8.79953C29.4183 8.57449 29.113 8.44806 28.7948 8.44806Z",
                stroke: "#475569",
                strokeWidth: "1.33333",
                strokeLinejoin: "round",
              }),
              e.createElement("path", {
                d: "M25.1906 13.2477H20.3906V18.0477H25.1906V13.2477Z",
                stroke: "#475569",
                strokeWidth: "1.33333",
                strokeLinejoin: "round",
              }),
              e.createElement("path", {
                d: "M10.7969 22.8477H25.1969M10.7969 13.2477H14.3969M10.7969 18.0477H14.3969",
                stroke: "#475569",
                strokeWidth: "1.33333",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              })
            );
          }, null),
          e.createElement(function () {
            return e.createElement(
              "svg",
              {
                width: "36",
                height: "37",
                viewBox: "0 0 36 37",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e.createElement("rect", {
                y: "0.046875",
                width: "36",
                height: "36",
                rx: "4",
                fill: "#F1F5F9",
              }),
              e.createElement("path", {
                d: "M29.3409 29.4773H6.67969M6.67969 17.0137L15.8869 9.64881C16.4896 9.16668 17.2385 8.90402 18.0103 8.90402C18.7821 8.90402 19.5309 9.16668 20.1336 9.64881L29.3409 17.0137M21.976 10.7819V8.51575C21.976 8.3655 22.0357 8.2214 22.1419 8.11515C22.2482 8.00891 22.3923 7.94922 22.5425 7.94922H25.3752C25.5254 7.94922 25.6695 8.00891 25.7758 8.11515C25.882 8.2214 25.9417 8.3655 25.9417 8.51575V14.181M8.94581 29.4773V15.3141M27.0748 29.4773V15.3141",
                stroke: "#475569",
                strokeWidth: "1.33333",
                strokeLinecap: "round",
              }),
              e.createElement("path", {
                d: "M21.4051 29.4773V23.812C21.4051 22.2098 21.4051 21.4087 20.9066 20.9113C20.4103 20.4128 19.6092 20.4128 18.006 20.4128C16.4038 20.4128 15.6027 20.4128 15.1053 20.9113C14.6068 21.4076 14.6068 22.2087 14.6068 23.812V29.4773",
                stroke: "#475569",
                strokeWidth: "1.33333",
              }),
              e.createElement("path", {
                d: "M18.0026 12.7136V16.7136",
                stroke: "#475569",
                strokeWidth: "1.33333",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              e.createElement("path", {
                d: "M20.0026 14.7136L16.0026 14.7136",
                stroke: "#475569",
                strokeWidth: "1.33333",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              })
            );
          }, null),
          e.createElement(function () {
            return e.createElement(
              "svg",
              {
                width: "36",
                height: "37",
                viewBox: "0 0 36 37",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e.createElement("rect", {
                y: "0.046875",
                width: "36",
                height: "36",
                rx: "4",
                fill: "#F1F5F9",
              }),
              e.createElement("path", {
                d: "M13.9167 21.6469H22.0833M13.9167 25.2469H18M15.0833 13.8469H20.9167M18 16.8469V10.8469M26.1667 6.04688H9.83332C9.5239 6.04688 9.22716 6.1733 9.00837 6.39835C8.78957 6.62339 8.66666 6.92862 8.66666 7.24688V28.8469C8.66666 29.1651 8.78957 29.4704 9.00837 29.6954C9.22716 29.9204 9.5239 30.0469 9.83332 30.0469H26.1667C26.4761 30.0469 26.7728 29.9204 26.9916 29.6954C27.2104 29.4704 27.3333 29.1651 27.3333 28.8469V7.24688C27.3333 6.92862 27.2104 6.62339 26.9916 6.39835C26.7728 6.1733 26.4761 6.04688 26.1667 6.04688Z",
                stroke: "#475569",
                strokeWidth: "1.33333",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              })
            );
          }, null),
          function (t) {
            var n = t.claimsItems,
              r = t.handleClearAll,
              o = t.handleFilter,
              a = t.inputStyle,
              i = Zn().t;
            return e.createElement(
              "div",
              { className: "w-full overflow-y-hidden mb-6" },
              (null === n || void 0 === n
                ? void 0
                : n
                    .map(function (e) {
                      return null === e || void 0 === e ? void 0 : e.value;
                    })
                    .some(function (e) {
                      return null === e || void 0 === e ? void 0 : e.length;
                    })) &&
                e.createElement(
                  "div",
                  { className: "flex items-center gap-3 w-max", style: a },
                  e.createElement(
                    "p",
                    {
                      onClick: r,
                      className:
                        "cursor-pointer underline underline-offset-2 text-brand-700 text-center text-sm not-italic font-semibold",
                    },
                    i("clearAll")
                  ),
                  e.createElement(
                    "div",
                    { className: "flex items-center w-max gap-3" },
                    n.map(function (t, n) {
                      var r;
                      return null ===
                        (r = null === t || void 0 === t ? void 0 : t.value) ||
                        void 0 === r
                        ? void 0
                        : r.map(function (r) {
                            return e.createElement(
                              "div",
                              {
                                key: n,
                                className:
                                  "flex h-8 justify-center items-center rounded bg-brand-100 text-gray-700 text-xs font-medium leading-5 px-2 gap-[6px] w-fit",
                              },
                              e.createElement("p", null, r),
                              e.createElement(
                                "div",
                                {
                                  className:
                                    "w-[18px] h-[18px] cursor-pointer mb-1",
                                  onClick: function () {
                                    return o(
                                      r,
                                      null === t || void 0 === t
                                        ? void 0
                                        : t.title
                                    );
                                  },
                                },
                                e.createElement(Qr, {
                                  style: { stroke: "#475569" },
                                })
                              )
                            );
                          });
                    })
                  )
                )
            );
          }),
        no = function (t) {
          var n = t.label,
            r = void 0 === n ? "" : n,
            o = t.labelClassName,
            a = void 0 === o ? "" : o,
            i = t.isChecked,
            s = t.handleChange;
          return e.createElement(
            "div",
            { className: "w-4 h-4 cursor-pointer" },
            e.createElement(
              "div",
              {
                onClick: function (e) {
                  return s(e.target.checked);
                },
              },
              e.createElement("input", {
                className: "w-full h-full cursor-pointer",
                type: "checkbox",
                checked: i,
                onChange: function (e) {
                  var t;
                  return s(
                    null ===
                      (t = null === e || void 0 === e ? void 0 : e.target) ||
                      void 0 === t
                      ? void 0
                      : t.checked
                  );
                },
              }),
              e.createElement("label", { className: a }, r)
            )
          );
        },
        ro = { Dependents: [], "Claim type": [], "Policy period": [] },
        oo = function (t) {
          var n,
            r,
            i,
            s,
            l,
            u = (0, e.useState)(""),
            c = u[0],
            d = u[1],
            f = (0, e.useState)(ro),
            p = f[0],
            h = f[1],
            g = t.isFilter,
            m = t.setIsFilter,
            v = t.setChipContainer,
            y = t.chipData,
            b = t.filterData,
            w = Zn().t;
          (0, e.useEffect)(
            function () {
              h(y);
            },
            [y]
          ),
            (0, e.useEffect)(function () {
              var e;
              d(null === (e = Object.keys(y)) || void 0 === e ? void 0 : e[0]);
            }, []),
            (0, e.useEffect)(
              function () {
                document.body.style.overflow = g ? "hidden" : "auto";
              },
              [g]
            );
          var x = function (e) {
              var t,
                n,
                r,
                i,
                s =
                  null === (r = null === p || void 0 === p ? void 0 : p[c]) ||
                  void 0 === r
                    ? void 0
                    : r.some(function (t) {
                        return t === e;
                      });
              h(
                o(
                  o({}, p),
                  s
                    ? (((n = {})[c] =
                        null ===
                          (i = null === p || void 0 === p ? void 0 : p[c]) ||
                        void 0 === i
                          ? void 0
                          : i.filter(function (t) {
                              return t !== e;
                            })),
                      n)
                    : (((t = {})[c] = a(
                        a([], null === p || void 0 === p ? void 0 : p[c], !0),
                        [e],
                        !1
                      )),
                      t)
                )
              );
            },
            S = function () {
              var e,
                t,
                n,
                r,
                i,
                s,
                l,
                u =
                  (null === (n = null === p || void 0 === p ? void 0 : p[c]) ||
                  void 0 === n
                    ? void 0
                    : n.length) ===
                  (null === b || void 0 === b
                    ? void 0
                    : b.reduce(function (e, t) {
                        var n;
                        return (
                          (null === t || void 0 === t ? void 0 : t.title) ===
                            c &&
                            (e +=
                              null === (n = t.content) || void 0 === n
                                ? void 0
                                : n.length),
                          e
                        );
                      }, 0));
              h(
                o(
                  o({}, p),
                  u
                    ? (((t = {})[c] = []), t)
                    : (((e = {})[c] = a(
                        [],
                        null ===
                          (l =
                            null ===
                              (s =
                                null ===
                                  (i =
                                    null ===
                                      (r =
                                        null === b || void 0 === b
                                          ? void 0
                                          : b.filter) || void 0 === r
                                      ? void 0
                                      : r.call(b, function (e) {
                                          return (
                                            (null === e || void 0 === e
                                              ? void 0
                                              : e.title) === c
                                          );
                                        })) || void 0 === i
                                  ? void 0
                                  : i[0]) || void 0 === s
                              ? void 0
                              : s.content) || void 0 === l
                          ? void 0
                          : l.map(function (e) {
                              return null === e || void 0 === e
                                ? void 0
                                : e.label;
                            }),
                        !0
                      )),
                      e)
                )
              );
            },
            k = !Object.keys(p).reduce(function (e, t) {
              var n = null === p || void 0 === p ? void 0 : p[t];
              return (
                (null === n || void 0 === n ? void 0 : n.length) && (e = !0), e
              );
            }, !1);
          return e.createElement(
            "div",
            { className: "z-10 w-full" },
            e.createElement("div", {
              onClick: function () {
                return m(!1);
              },
              className: "".concat(
                g
                  ? "h-screen absolute top-0 bottom-0 left-0 right-0 bg-[#00000096] z-[6] transition-all ease-in-out duration-200"
                  : ""
              ),
            }),
            e.createElement(
              "div",
              {
                className:
                  "lg:max-w-[477px] fixed w-full top-0 bottom-0  ease-in-out duration-300 ".concat(
                    g ? "right-0 ease-in-out z-[7]" : "right-[-1375px]"
                  ),
              },
              e.createElement(
                "div",
                {
                  style: { borderBottom: "1px solid #ddd" },
                  className:
                    "flex items-center justify-between p-4 bg-white shadow-[4px 0px 8px 0px rgba(0, 0, 0, 0.05)]",
                },
                e.createElement("div", null, w("filterName")),
                e.createElement(
                  "div",
                  {
                    className: "w-5 h-5 cursor-pointer",
                    onClick: function (e) {
                      e.stopPropagation(), m(!1);
                    },
                  },
                  e.createElement(Wr, null)
                )
              ),
              e.createElement(
                "div",
                { className: "bg-white h-[calc(100vh-120px)]" },
                e.createElement(
                  "div",
                  { className: "flex h-full w-[200%] lg:w-full" },
                  e.createElement(
                    "div",
                    {
                      className:
                        "lg:w-[30%] w-32 p-2 bg-brand-50 flex flex-col items-start gap-2",
                    },
                    null === b || void 0 === b
                      ? void 0
                      : b.map(function (t) {
                          var n, r, o, a;
                          return e.createElement(
                            "div",
                            {
                              key: t.id,
                              onClick: function (e) {
                                e.stopPropagation(),
                                  d(
                                    null === t || void 0 === t
                                      ? void 0
                                      : t.title
                                  );
                              },
                              className:
                                "flex p-2 items-start justify-between text-sm font-normal leading-5 w-full cursor-pointer gap-1 ".concat(
                                  (null === t || void 0 === t
                                    ? void 0
                                    : t.title) === c
                                    ? "text-sm not-italic font-semibold leading-4 bg-brand-100 text-brand-600 whitespace-no-wrap"
                                    : "text-gray-600"
                                ),
                            },
                            null === t || void 0 === t ? void 0 : t.title,
                            (null === t || void 0 === t ? void 0 : t.title) ===
                              c &&
                              (null ===
                                (n =
                                  null === p || void 0 === p ? void 0 : p[c]) ||
                              void 0 === n
                                ? void 0
                                : n.length)
                              ? e.createElement(
                                  "span",
                                  {
                                    className:
                                      "text-blue-600 text-sm font-semibold",
                                  },
                                  null ===
                                    (r =
                                      null === p || void 0 === p
                                        ? void 0
                                        : p[c]) || void 0 === r
                                    ? void 0
                                    : r.length
                                )
                              : (
                                  null ===
                                    (o =
                                      null === p || void 0 === p
                                        ? void 0
                                        : p[
                                            null === t || void 0 === t
                                              ? void 0
                                              : t.title
                                          ]) || void 0 === o
                                    ? void 0
                                    : o.length
                                )
                              ? e.createElement(
                                  "span",
                                  null,
                                  null ===
                                    (a =
                                      null === p || void 0 === p
                                        ? void 0
                                        : p[
                                            null === t || void 0 === t
                                              ? void 0
                                              : t.title
                                          ]) || void 0 === a
                                    ? void 0
                                    : a.length
                                )
                              : ""
                          );
                        })
                  ),
                  e.createElement(
                    "div",
                    { className: "w-1/2 p-3 lg:w-[70%]" },
                    e.createElement(
                      "div",
                      {
                        style: { borderBottom: "1px solid #dbdbdb" },
                        className: "pb-4 mb-4",
                      },
                      e.createElement(
                        "div",
                        {
                          className: "cursor-pointer flex gap-[10px]",
                          onClick: S,
                        },
                        e.createElement(no, {
                          handleChange: S,
                          isChecked:
                            (null ===
                              (n =
                                null === p || void 0 === p ? void 0 : p[c]) ||
                            void 0 === n
                              ? void 0
                              : n.length) ===
                            (null ===
                              (l =
                                null ===
                                  (s =
                                    null ===
                                      (i =
                                        null ===
                                          (r =
                                            null === b || void 0 === b
                                              ? void 0
                                              : b.filter) || void 0 === r
                                          ? void 0
                                          : r.call(b, function (e) {
                                              return (
                                                (null === e || void 0 === e
                                                  ? void 0
                                                  : e.title) === c
                                              );
                                            })) || void 0 === i
                                      ? void 0
                                      : i[0]) || void 0 === s
                                  ? void 0
                                  : s.content) || void 0 === l
                              ? void 0
                              : l.length),
                        }),
                        e.createElement(
                          "p",
                          {
                            className:
                              "text-gray-600 text-sm not-italic font-normal",
                          },
                          w("selectAll")
                        )
                      )
                    ),
                    e.createElement(
                      "div",
                      { className: "flex flex-col items-start gap-4" },
                      null === b || void 0 === b
                        ? void 0
                        : b.map(function (t) {
                            var n;
                            if (
                              (null === t || void 0 === t
                                ? void 0
                                : t.title) === c
                            )
                              return null ===
                                (n =
                                  null === t || void 0 === t
                                    ? void 0
                                    : t.content) || void 0 === n
                                ? void 0
                                : n.map(function (t) {
                                    var n;
                                    return e.createElement(
                                      "div",
                                      {
                                        key:
                                          null === t || void 0 === t
                                            ? void 0
                                            : t.id,
                                        className:
                                          "cursor-pointer flex gap-[10px] w-full",
                                        onClick: function () {
                                          x(
                                            null === t || void 0 === t
                                              ? void 0
                                              : t.label
                                          );
                                        },
                                      },
                                      e.createElement(no, {
                                        handleChange: function (e) {
                                          return x(
                                            null === t || void 0 === t
                                              ? void 0
                                              : t.label
                                          );
                                        },
                                        isChecked:
                                          null ===
                                            (n =
                                              null === p || void 0 === p
                                                ? void 0
                                                : p[c]) || void 0 === n
                                            ? void 0
                                            : n.includes(
                                                null === t || void 0 === t
                                                  ? void 0
                                                  : t.label
                                              ),
                                      }),
                                      e.createElement(
                                        "p",
                                        {
                                          className:
                                            "text-gray-600 text-sm not-italic font-normal",
                                        },
                                        " ",
                                        null === t || void 0 === t
                                          ? void 0
                                          : t.label
                                      )
                                    );
                                  });
                          })
                    )
                  )
                )
              ),
              e.createElement(
                "div",
                {
                  style: { borderTop: "1px solid #dbdbdb" },
                  className:
                    "flex h-16 items-center bg-white p-4 gap-3 py-4 flex-grow-1 flex-shrink-0 flex-basis-0",
                },
                e.createElement(
                  Vr,
                  {
                    theme: "outline",
                    onClick: function () {
                      k || (h(ro), v(ro));
                    },
                    className:
                      "w-6/12 cursor-pointer rounded text-gray-700 text-center text-sm not-italic font-semibold leading-4 px-4 py-2 border border-solid border-gray-300 ".concat(
                        k &&
                          "border border-solid border-gray-200 bg-white cursor-default !text-gray-300"
                      ),
                  },
                  w("clearAll")
                ),
                e.createElement(
                  Vr,
                  {
                    onClick: function () {
                      Object.values(p)
                        .map(function (e) {
                          return e;
                        })
                        .some(function (e) {
                          return null === e || void 0 === e ? void 0 : e.length;
                        }) && (v(p), m(!1));
                    },
                    className:
                      "py-2 px-4 rounded border border-solid border-brand-600 bg-brand-600 w-2/4",
                  },
                  w("applyFilters")
                )
              )
            )
          );
        },
        ao = function (t) {
          var n = t.header,
            r = t.footer,
            o = t.children;
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              "div",
              {
                className:
                  "  md:max-w-96  w-full pt-4 bg-white rounded-lg border border-solid border-gray-200 sm:w-96 ",
              },
              e.createElement(
                "div",
                { className: "pt-0 pr-4 pb-3 pl-4" },
                e.createElement(
                  "div",
                  { className: "flex justify-between items-center mb-3" },
                  n,
                  e.createElement(
                    "div",
                    { className: "w-5 h-5 cursor-pointer" },
                    e.createElement(qr, null)
                  )
                ),
                o
              ),
              r
            )
          );
        },
        io = function (t) {
          var n = t.names;
          return e.createElement(
            "div",
            { className: "flex" },
            null === n || void 0 === n
              ? void 0
              : n.map(function (t, r) {
                  return e.createElement(
                    "div",
                    {
                      key: r,
                      className:
                        "w-8 h-8 bg-[#dbeafe] flex items-center justify-center -mr-1 rounded-full border-white border border-solid",
                      style: { zIndex: n.length + r },
                    },
                    e.createElement(
                      "div",
                      {
                        className: "text-brand-700 text-xs font-bold leading-4",
                      },
                      (function (e) {
                        if ("string" !== typeof e) return null;
                        var t = e.split(" ");
                        return t.length > 1
                          ? (t[0].charAt(0) + t[1].charAt(0)).toUpperCase()
                          : t[0].slice(0, 2).toUpperCase();
                      })(t)
                    )
                  );
                })
          );
        },
        so = function (t) {
          var n = Zn().t,
            r = t.data,
            o = t.currentTab;
          return e.createElement(
            ao,
            {
              header: e.createElement(io, {
                names: null === r || void 0 === r ? void 0 : r.names,
              }),
              footer: e.createElement(
                "div",
                {
                  className:
                    "flex items-center justify-center text-gray-700 text-xs font-semibold bg-gray-200 leading-4 gap-2 px-4 py-2",
                },
                e.createElement(Jr, null),
                e.createElement("div", null, n("exploreArea"))
              ),
            },
            e.createElement(
              "div",
              null,
              e.createElement(
                "div",
                {
                  className:
                    "truncate text-gray-800 whitespace-no-wrap text-sm font-semibold w-[90%]",
                },
                null === r || void 0 === r ? void 0 : r.insuranceName
              ),
              e.createElement(
                "div",
                { className: "text-gray-600 text-xs font-normal" },
                null === r || void 0 === r ? void 0 : r.policy_num
              ),
              e.createElement(
                "div",
                { className: "flex mt-3 mb-4 gap-[10px]" },
                (function () {
                  var e = [];
                  return (
                    e.push({ chipName: n("chipName1"), chipType: "info" }),
                    "active" === o &&
                      e.push({ chipName: n("chipName2"), chipType: "success" }),
                    "inActive" === o &&
                      e.push({
                        chipName: n("chipName3"),
                        chipType: "inActive",
                      }),
                    e
                  );
                })().map(function (t) {
                  return e.createElement(eo, {
                    tagName: null === t || void 0 === t ? void 0 : t.chipName,
                    tagType: null === t || void 0 === t ? void 0 : t.chipType,
                  });
                })
              ),
              e.createElement(
                "div",
                {
                  className:
                    "rounded bg-gray-50 p-2 mt-3 border border-solid border-gray-100",
                },
                e.createElement(
                  "div",
                  { className: "mb-3" },
                  e.createElement(
                    "h4",
                    { className: "text-gray-600 text-xs font-normal mb-1" },
                    n("coverageDuration")
                  ),
                  e.createElement(
                    "p",
                    { className: "text-gray-800 text-sm font-semibold" },
                    null === r || void 0 === r ? void 0 : r.duration
                  )
                ),
                e.createElement(
                  "div",
                  null,
                  e.createElement(
                    "h4",
                    { className: "text-gray-600 text-xs font-normal mb-1" },
                    n("areaOfCoverage")
                  ),
                  e.createElement(
                    "p",
                    { className: "text-gray-800 text-sm font-semibold" },
                    null === r || void 0 === r ? void 0 : r.area
                  )
                )
              )
            )
          );
        };
      !(function (e, t) {
        void 0 === t && (t = {});
        var n = t.insertAt;
        if (e && "undefined" !== typeof document) {
          var r = document.head || document.getElementsByTagName("head")[0],
            o = document.createElement("style");
          (o.type = "text/css"),
            "top" === n && r.firstChild
              ? r.insertBefore(o, r.firstChild)
              : r.appendChild(o),
            o.styleSheet
              ? (o.styleSheet.cssText = e)
              : o.appendChild(document.createTextNode(e));
        }
      })(
        "*, ::before, ::after {\n\n    --tw-border-spacing-x: 0;\n\n    --tw-border-spacing-y: 0;\n\n    --tw-translate-x: 0;\n\n    --tw-translate-y: 0;\n\n    --tw-rotate: 0;\n\n    --tw-skew-x: 0;\n\n    --tw-skew-y: 0;\n\n    --tw-scale-x: 1;\n\n    --tw-scale-y: 1;\n\n    --tw-pan-x:  ;\n\n    --tw-pan-y:  ;\n\n    --tw-pinch-zoom:  ;\n\n    --tw-scroll-snap-strictness: proximity;\n\n    --tw-gradient-from-position:  ;\n\n    --tw-gradient-via-position:  ;\n\n    --tw-gradient-to-position:  ;\n\n    --tw-ordinal:  ;\n\n    --tw-slashed-zero:  ;\n\n    --tw-numeric-figure:  ;\n\n    --tw-numeric-spacing:  ;\n\n    --tw-numeric-fraction:  ;\n\n    --tw-ring-inset:  ;\n\n    --tw-ring-offset-width: 0px;\n\n    --tw-ring-offset-color: #fff;\n\n    --tw-ring-color: rgb(59 130 246 / 0.5);\n\n    --tw-ring-offset-shadow: 0 0 #0000;\n\n    --tw-ring-shadow: 0 0 #0000;\n\n    --tw-shadow: 0 0 #0000;\n\n    --tw-shadow-colored: 0 0 #0000;\n\n    --tw-blur:  ;\n\n    --tw-brightness:  ;\n\n    --tw-contrast:  ;\n\n    --tw-grayscale:  ;\n\n    --tw-hue-rotate:  ;\n\n    --tw-invert:  ;\n\n    --tw-saturate:  ;\n\n    --tw-sepia:  ;\n\n    --tw-drop-shadow:  ;\n\n    --tw-backdrop-blur:  ;\n\n    --tw-backdrop-brightness:  ;\n\n    --tw-backdrop-contrast:  ;\n\n    --tw-backdrop-grayscale:  ;\n\n    --tw-backdrop-hue-rotate:  ;\n\n    --tw-backdrop-invert:  ;\n\n    --tw-backdrop-opacity:  ;\n\n    --tw-backdrop-saturate:  ;\n\n    --tw-backdrop-sepia:  \n}\n\n::backdrop {\n\n    --tw-border-spacing-x: 0;\n\n    --tw-border-spacing-y: 0;\n\n    --tw-translate-x: 0;\n\n    --tw-translate-y: 0;\n\n    --tw-rotate: 0;\n\n    --tw-skew-x: 0;\n\n    --tw-skew-y: 0;\n\n    --tw-scale-x: 1;\n\n    --tw-scale-y: 1;\n\n    --tw-pan-x:  ;\n\n    --tw-pan-y:  ;\n\n    --tw-pinch-zoom:  ;\n\n    --tw-scroll-snap-strictness: proximity;\n\n    --tw-gradient-from-position:  ;\n\n    --tw-gradient-via-position:  ;\n\n    --tw-gradient-to-position:  ;\n\n    --tw-ordinal:  ;\n\n    --tw-slashed-zero:  ;\n\n    --tw-numeric-figure:  ;\n\n    --tw-numeric-spacing:  ;\n\n    --tw-numeric-fraction:  ;\n\n    --tw-ring-inset:  ;\n\n    --tw-ring-offset-width: 0px;\n\n    --tw-ring-offset-color: #fff;\n\n    --tw-ring-color: rgb(59 130 246 / 0.5);\n\n    --tw-ring-offset-shadow: 0 0 #0000;\n\n    --tw-ring-shadow: 0 0 #0000;\n\n    --tw-shadow: 0 0 #0000;\n\n    --tw-shadow-colored: 0 0 #0000;\n\n    --tw-blur:  ;\n\n    --tw-brightness:  ;\n\n    --tw-contrast:  ;\n\n    --tw-grayscale:  ;\n\n    --tw-hue-rotate:  ;\n\n    --tw-invert:  ;\n\n    --tw-saturate:  ;\n\n    --tw-sepia:  ;\n\n    --tw-drop-shadow:  ;\n\n    --tw-backdrop-blur:  ;\n\n    --tw-backdrop-brightness:  ;\n\n    --tw-backdrop-contrast:  ;\n\n    --tw-backdrop-grayscale:  ;\n\n    --tw-backdrop-hue-rotate:  ;\n\n    --tw-backdrop-invert:  ;\n\n    --tw-backdrop-opacity:  ;\n\n    --tw-backdrop-saturate:  ;\n\n    --tw-backdrop-sepia:  \n}\n\n.fixed {\n\n    position: fixed\n}\n\n.absolute {\n\n    position: absolute\n}\n\n.bottom-0 {\n\n    bottom: 0px\n}\n\n.left-0 {\n\n    left: 0px\n}\n\n.right-0 {\n\n    right: 0px\n}\n\n.right-\\[-1375px\\] {\n\n    right: -1375px\n}\n\n.top-0 {\n\n    top: 0px\n}\n\n.z-10 {\n\n    z-index: 10\n}\n\n.z-\\[6\\] {\n\n    z-index: 6\n}\n\n.z-\\[7\\] {\n\n    z-index: 7\n}\n\n.col-auto {\n\n    grid-column: auto\n}\n\n.-mr-1 {\n\n    margin-right: -0.25rem\n}\n\n.mb-0 {\n\n    margin-bottom: 0px\n}\n\n.mb-1 {\n\n    margin-bottom: 0.25rem\n}\n\n.mb-3 {\n\n    margin-bottom: 0.75rem\n}\n\n.mb-4 {\n\n    margin-bottom: 1rem\n}\n\n.mb-6 {\n\n    margin-bottom: 1.5rem\n}\n\n.mb-\\[2px\\] {\n\n    margin-bottom: 2px\n}\n\n.mt-3 {\n\n    margin-top: 0.75rem\n}\n\n.inline-block {\n\n    display: inline-block\n}\n\n.flex {\n\n    display: flex\n}\n\n.hidden {\n\n    display: none\n}\n\n.h-10 {\n\n    height: 2.5rem\n}\n\n.h-16 {\n\n    height: 4rem\n}\n\n.h-4 {\n\n    height: 1rem\n}\n\n.h-5 {\n\n    height: 1.25rem\n}\n\n.h-8 {\n\n    height: 2rem\n}\n\n.h-\\[18px\\] {\n\n    height: 18px\n}\n\n.h-\\[calc\\(100vh-120px\\)\\] {\n\n    height: calc(100vh - 120px)\n}\n\n.h-full {\n\n    height: 100%\n}\n\n.h-screen {\n\n    height: 100vh\n}\n\n.w-1\\/2 {\n\n    width: 50%\n}\n\n.w-2\\/4 {\n\n    width: 50%\n}\n\n.w-32 {\n\n    width: 8rem\n}\n\n.w-4 {\n\n    width: 1rem\n}\n\n.w-5 {\n\n    width: 1.25rem\n}\n\n.w-6\\/12 {\n\n    width: 50%\n}\n\n.w-8 {\n\n    width: 2rem\n}\n\n.w-\\[18px\\] {\n\n    width: 18px\n}\n\n.w-\\[200\\%\\] {\n\n    width: 200%\n}\n\n.w-\\[90\\%\\] {\n\n    width: 90%\n}\n\n.w-fit {\n\n    width: -moz-fit-content;\n\n    width: fit-content\n}\n\n.w-full {\n\n    width: 100%\n}\n\n.w-max {\n\n    width: max-content\n}\n\n.max-w-5 {\n\n    max-width: 1.25rem\n}\n\n.max-w-\\[650px\\] {\n\n    max-width: 650px\n}\n\n.flex-shrink-0 {\n\n    flex-shrink: 0\n}\n\n.flex-grow {\n\n    flex-grow: 1\n}\n\n.basis-\\[48\\%\\] {\n\n    flex-basis: 48%\n}\n\n.transform {\n\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))\n}\n\n.cursor-default {\n\n    cursor: default\n}\n\n.cursor-pointer {\n\n    cursor: pointer\n}\n\n.flex-col {\n\n    flex-direction: column\n}\n\n.items-start {\n\n    align-items: flex-start\n}\n\n.items-center {\n\n    align-items: center\n}\n\n.justify-center {\n\n    justify-content: center\n}\n\n.justify-between {\n\n    justify-content: space-between\n}\n\n.gap-1 {\n\n    gap: 0.25rem\n}\n\n.gap-2 {\n\n    gap: 0.5rem\n}\n\n.gap-3 {\n\n    gap: 0.75rem\n}\n\n.gap-4 {\n\n    gap: 1rem\n}\n\n.gap-\\[10px\\] {\n\n    gap: 10px\n}\n\n.gap-\\[6px\\] {\n\n    gap: 6px\n}\n\n.overflow-y-hidden {\n\n    overflow-y: hidden\n}\n\n.truncate {\n\n    overflow: hidden;\n\n    text-overflow: ellipsis;\n\n    white-space: nowrap\n}\n\n.rounded {\n\n    border-radius: 0.25rem\n}\n\n.rounded-\\[44px\\] {\n\n    border-radius: 44px\n}\n\n.rounded-\\[4px\\] {\n\n    border-radius: 4px\n}\n\n.rounded-full {\n\n    border-radius: 9999px\n}\n\n.rounded-lg {\n\n    border-radius: 0.5rem\n}\n\n.rounded-md {\n\n    border-radius: 0.375rem\n}\n\n.rounded-xl {\n\n    border-radius: 0.75rem\n}\n\n.border {\n\n    border-width: 1px\n}\n\n.border-\\[1\\.5px\\] {\n\n    border-width: 1.5px\n}\n\n.border-\\[1px\\] {\n\n    border-width: 1px\n}\n\n.border-b-\\[1px\\] {\n\n    border-bottom-width: 1px\n}\n\n.border-solid {\n\n    border-style: solid\n}\n\n.border-none {\n\n    border-style: none\n}\n\n.border-black {\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(0 0 0 / var(--tw-border-opacity))\n}\n\n.border-blue-200 {\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(191 219 254 / var(--tw-border-opacity))\n}\n\n.border-brand-300 {\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(147 197 253 / var(--tw-border-opacity))\n}\n\n.border-brand-400 {\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(96 165 250 / var(--tw-border-opacity))\n}\n\n.border-brand-600 {\n\n    border-color: var(--primaryBgColor)\n}\n\n.border-gray-100 {\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(241 245 249 / var(--tw-border-opacity))\n}\n\n.border-gray-200 {\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(226 232 240 / var(--tw-border-opacity))\n}\n\n.border-gray-300 {\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(203 213 225 / var(--tw-border-opacity))\n}\n\n.border-white {\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(255 255 255 / var(--tw-border-opacity))\n}\n\n.bg-\\[\\#00000096\\] {\n\n    background-color: #00000096\n}\n\n.bg-\\[\\#dbeafe\\] {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(219 234 254 / var(--tw-bg-opacity))\n}\n\n.bg-brand-100 {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(219 234 254 / var(--tw-bg-opacity))\n}\n\n.bg-brand-50 {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(239 246 255 / var(--tw-bg-opacity))\n}\n\n.bg-brand-600 {\n\n    background-color: var(--primaryBgColor)\n}\n\n.bg-gray-200 {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(226 232 240 / var(--tw-bg-opacity))\n}\n\n.bg-gray-50 {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(248 250 252 / var(--tw-bg-opacity))\n}\n\n.bg-transparent {\n\n    background-color: transparent\n}\n\n.bg-white {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity))\n}\n\n.p-2 {\n\n    padding: 0.5rem\n}\n\n.p-3 {\n\n    padding: 0.75rem\n}\n\n.p-4 {\n\n    padding: 1rem\n}\n\n.p-\\[10px\\] {\n\n    padding: 10px\n}\n\n.px-2 {\n\n    padding-left: 0.5rem;\n\n    padding-right: 0.5rem\n}\n\n.px-3 {\n\n    padding-left: 0.75rem;\n\n    padding-right: 0.75rem\n}\n\n.px-4 {\n\n    padding-left: 1rem;\n\n    padding-right: 1rem\n}\n\n.py-1 {\n\n    padding-top: 0.25rem;\n\n    padding-bottom: 0.25rem\n}\n\n.py-2 {\n\n    padding-top: 0.5rem;\n\n    padding-bottom: 0.5rem\n}\n\n.py-4 {\n\n    padding-top: 1rem;\n\n    padding-bottom: 1rem\n}\n\n.py-\\[10px\\] {\n\n    padding-top: 10px;\n\n    padding-bottom: 10px\n}\n\n.pb-3 {\n\n    padding-bottom: 0.75rem\n}\n\n.pb-4 {\n\n    padding-bottom: 1rem\n}\n\n.pl-4 {\n\n    padding-left: 1rem\n}\n\n.pr-4 {\n\n    padding-right: 1rem\n}\n\n.pr-8 {\n\n    padding-right: 2rem\n}\n\n.pt-0 {\n\n    padding-top: 0px\n}\n\n.pt-4 {\n\n    padding-top: 1rem\n}\n\n.text-center {\n\n    text-align: center\n}\n\n.text-base {\n\n    font-size: 1rem;\n\n    line-height: 1.5rem\n}\n\n.text-sm {\n\n    font-size: 0.875rem;\n\n    line-height: 1.25rem\n}\n\n.text-xs {\n\n    font-size: 0.75rem;\n\n    line-height: 1rem\n}\n\n.font-bold {\n\n    font-weight: 700\n}\n\n.font-medium {\n\n    font-weight: 500\n}\n\n.font-normal {\n\n    font-weight: 400\n}\n\n.font-semibold {\n\n    font-weight: 600\n}\n\n.not-italic {\n\n    font-style: normal\n}\n\n.leading-4 {\n\n    line-height: 1rem\n}\n\n.leading-5 {\n\n    line-height: 1.25rem\n}\n\n.leading-6 {\n\n    line-height: 1.5rem\n}\n\n.\\!text-gray-300 {\n\n    --tw-text-opacity: 1 !important;\n\n    color: rgb(203 213 225 / var(--tw-text-opacity)) !important\n}\n\n.text-blue-600 {\n\n    --tw-text-opacity: 1;\n\n    color: rgb(37 99 235 / var(--tw-text-opacity))\n}\n\n.text-brand-600 {\n\n    color: var(--primaryBgColor)\n}\n\n.text-brand-700 {\n\n    --tw-text-opacity: 1;\n\n    color: rgb(29 78 216 / var(--tw-text-opacity))\n}\n\n.text-gray-25 {\n\n    --tw-text-opacity: 1;\n\n    color: rgb(252 252 253 / var(--tw-text-opacity))\n}\n\n.text-gray-600 {\n\n    --tw-text-opacity: 1;\n\n    color: rgb(100 116 139 / var(--tw-text-opacity))\n}\n\n.text-gray-700 {\n\n    --tw-text-opacity: 1;\n\n    color: rgb(71 85 105 / var(--tw-text-opacity))\n}\n\n.text-gray-800 {\n\n    --tw-text-opacity: 1;\n\n    color: rgb(51 65 85 / var(--tw-text-opacity))\n}\n\n.text-gray-900 {\n\n    --tw-text-opacity: 1;\n\n    color: rgb(30 41 59 / var(--tw-text-opacity))\n}\n\n.text-white {\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n.underline {\n\n    text-decoration-line: underline\n}\n\n.underline-offset-2 {\n\n    text-underline-offset: 2px\n}\n\n.shadow-\\[0px_0px_12px_0px_\\#0000000a\\] {\n\n    --tw-shadow: 0px 0px 12px 0px #0000000a;\n\n    --tw-shadow-colored: 0px 0px 12px 0px var(--tw-shadow-color);\n\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n\n.outline-none {\n\n    outline: 2px solid transparent;\n\n    outline-offset: 2px\n}\n\n.outline {\n\n    outline-style: solid\n}\n\n.filter {\n\n    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)\n}\n\n.transition {\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n    transition-duration: 150ms\n}\n\n.transition-all {\n\n    transition-property: all;\n\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n    transition-duration: 150ms\n}\n\n.duration-200 {\n\n    transition-duration: 200ms\n}\n\n.duration-300 {\n\n    transition-duration: 300ms\n}\n\n.ease-in-out {\n\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)\n}\n\n.hover\\:border-blue-200:hover {\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(191 219 254 / var(--tw-border-opacity))\n}\n\n.hover\\:bg-brand-700:hover {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(29 78 216 / var(--tw-bg-opacity))\n}\n\n@media (min-width: 640px) {\n\n    .sm\\:w-96 {\n\n        width: 24rem\n    }\n}\n\n@media (min-width: 768px) {\n\n    .md\\:max-w-96 {\n\n        max-width: 24rem\n    }\n}\n\n@media (min-width: 1024px) {\n\n    .lg\\:w-\\[30\\%\\] {\n\n        width: 30%\n    }\n\n    .lg\\:w-\\[70\\%\\] {\n\n        width: 70%\n    }\n\n    .lg\\:w-full {\n\n        width: 100%\n    }\n\n    .lg\\:max-w-\\[477px\\] {\n\n        max-width: 477px\n    }\n}\n"
      );
      var lo,
        uo = zt.div(
          lo ||
            (lo = i(
              ["\n  --primaryBgColor: ", ";\n"],
              ["\n  --primaryBgColor: ", ";\n"]
            )),
          function (e) {
            return e.theme.primaryBgColor;
          }
        ),
        co = function (t) {
          var n = t.projectThemeIdentifier,
            r = t.children,
            o = t.locale,
            a = (function (e) {
              return zr[e] || zr.theme1;
            })(n);
          return (
            (0, e.useLayoutEffect)(
              function () {
                On.changeLanguage(o);
              },
              [o]
            ),
            e.createElement(
              Nn,
              { locale: o },
              e.createElement(
                Tt,
                { theme: a },
                e.createElement(
                  "div",
                  { className: "libraryContainer" },
                  e.createElement(uo, null, r)
                )
              )
            )
          );
        };
      const fo = {
        type: "logger",
        log(e) {
          this.output("log", e);
        },
        warn(e) {
          this.output("warn", e);
        },
        error(e) {
          this.output("error", e);
        },
        output(e, t) {
          console && console[e] && console[e].apply(console, t);
        },
      };
      class po {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          this.init(e, t);
        }
        init(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          (this.prefix = t.prefix || "i18next:"),
            (this.logger = e || fo),
            (this.options = t),
            (this.debug = t.debug);
        }
        log() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.forward(t, "log", "", !0);
        }
        warn() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.forward(t, "warn", "", !0);
        }
        error() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.forward(t, "error", "");
        }
        deprecate() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
        }
        forward(e, t, n, r) {
          return r && !this.debug
            ? null
            : ("string" === typeof e[0] &&
                (e[0] = "".concat(n).concat(this.prefix, " ").concat(e[0])),
              this.logger[t](e));
        }
        create(e) {
          return new po(this.logger, {
            prefix: "".concat(this.prefix, ":").concat(e, ":"),
            ...this.options,
          });
        }
        clone(e) {
          return (
            ((e = e || this.options).prefix = e.prefix || this.prefix),
            new po(this.logger, e)
          );
        }
      }
      var ho = new po();
      class go {
        constructor() {
          this.observers = {};
        }
        on(e, t) {
          return (
            e.split(" ").forEach((e) => {
              this.observers[e] || (this.observers[e] = new Map());
              const n = this.observers[e].get(t) || 0;
              this.observers[e].set(t, n + 1);
            }),
            this
          );
        }
        off(e, t) {
          this.observers[e] &&
            (t ? this.observers[e].delete(t) : delete this.observers[e]);
        }
        emit(e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          if (this.observers[e]) {
            Array.from(this.observers[e].entries()).forEach((e) => {
              let [t, r] = e;
              for (let o = 0; o < r; o++) t(...n);
            });
          }
          if (this.observers["*"]) {
            Array.from(this.observers["*"].entries()).forEach((t) => {
              let [r, o] = t;
              for (let a = 0; a < o; a++) r.apply(r, [e, ...n]);
            });
          }
        }
      }
      function mo() {
        let e, t;
        const n = new Promise((n, r) => {
          (e = n), (t = r);
        });
        return (n.resolve = e), (n.reject = t), n;
      }
      function vo(e) {
        return null == e ? "" : "" + e;
      }
      const yo = /###/g;
      function bo(e, t, n) {
        function r(e) {
          return e && e.indexOf("###") > -1 ? e.replace(yo, ".") : e;
        }
        function o() {
          return !e || "string" === typeof e;
        }
        const a = "string" !== typeof t ? t : t.split(".");
        let i = 0;
        for (; i < a.length - 1; ) {
          if (o()) return {};
          const t = r(a[i]);
          !e[t] && n && (e[t] = new n()),
            (e = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : {}),
            ++i;
        }
        return o() ? {} : { obj: e, k: r(a[i]) };
      }
      function wo(e, t, n) {
        const { obj: r, k: o } = bo(e, t, Object);
        if (void 0 !== r || 1 === t.length) return void (r[o] = n);
        let a = t[t.length - 1],
          i = t.slice(0, t.length - 1),
          s = bo(e, i, Object);
        for (; void 0 === s.obj && i.length; )
          (a = "".concat(i[i.length - 1], ".").concat(a)),
            (i = i.slice(0, i.length - 1)),
            (s = bo(e, i, Object)),
            s &&
              s.obj &&
              "undefined" !== typeof s.obj["".concat(s.k, ".").concat(a)] &&
              (s.obj = void 0);
        s.obj["".concat(s.k, ".").concat(a)] = n;
      }
      function xo(e, t) {
        const { obj: n, k: r } = bo(e, t);
        if (n) return n[r];
      }
      function So(e, t, n) {
        for (const r in t)
          "__proto__" !== r &&
            "constructor" !== r &&
            (r in e
              ? "string" === typeof e[r] ||
                e[r] instanceof String ||
                "string" === typeof t[r] ||
                t[r] instanceof String
                ? n && (e[r] = t[r])
                : So(e[r], t[r], n)
              : (e[r] = t[r]));
        return e;
      }
      function ko(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
      }
      var Eo = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
      };
      function Co(e) {
        return "string" === typeof e
          ? e.replace(/[&<>"'\/]/g, (e) => Eo[e])
          : e;
      }
      const Oo = [" ", ",", "?", "!", ";"],
        Po = new (class {
          constructor(e) {
            (this.capacity = e),
              (this.regExpMap = new Map()),
              (this.regExpQueue = []);
          }
          getRegExp(e) {
            const t = this.regExpMap.get(e);
            if (void 0 !== t) return t;
            const n = new RegExp(e);
            return (
              this.regExpQueue.length === this.capacity &&
                this.regExpMap.delete(this.regExpQueue.shift()),
              this.regExpMap.set(e, n),
              this.regExpQueue.push(e),
              n
            );
          }
        })(20);
      function No(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
        if (!e) return;
        if (e[t]) return e[t];
        const r = t.split(n);
        let o = e;
        for (let a = 0; a < r.length; ) {
          if (!o || "object" !== typeof o) return;
          let e,
            t = "";
          for (let i = a; i < r.length; ++i)
            if ((i !== a && (t += n), (t += r[i]), (e = o[t]), void 0 !== e)) {
              if (
                ["string", "number", "boolean"].indexOf(typeof e) > -1 &&
                i < r.length - 1
              )
                continue;
              a += i - a + 1;
              break;
            }
          o = e;
        }
        return o;
      }
      function _o(e) {
        return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e;
      }
      class Lo extends go {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { ns: ["translation"], defaultNS: "translation" };
          super(),
            (this.data = e || {}),
            (this.options = t),
            void 0 === this.options.keySeparator &&
              (this.options.keySeparator = "."),
            void 0 === this.options.ignoreJSONStructure &&
              (this.options.ignoreJSONStructure = !0);
        }
        addNamespaces(e) {
          this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
        }
        removeNamespaces(e) {
          const t = this.options.ns.indexOf(e);
          t > -1 && this.options.ns.splice(t, 1);
        }
        getResource(e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          const o =
              void 0 !== r.keySeparator
                ? r.keySeparator
                : this.options.keySeparator,
            a =
              void 0 !== r.ignoreJSONStructure
                ? r.ignoreJSONStructure
                : this.options.ignoreJSONStructure;
          let i;
          e.indexOf(".") > -1
            ? (i = e.split("."))
            : ((i = [e, t]),
              n &&
                (Array.isArray(n)
                  ? i.push(...n)
                  : "string" === typeof n && o
                  ? i.push(...n.split(o))
                  : i.push(n)));
          const s = xo(this.data, i);
          return (
            !s &&
              !t &&
              !n &&
              e.indexOf(".") > -1 &&
              ((e = i[0]), (t = i[1]), (n = i.slice(2).join("."))),
            s || !a || "string" !== typeof n
              ? s
              : No(this.data && this.data[e] && this.data[e][t], n, o)
          );
        }
        addResource(e, t, n, r) {
          let o =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : { silent: !1 };
          const a =
            void 0 !== o.keySeparator
              ? o.keySeparator
              : this.options.keySeparator;
          let i = [e, t];
          n && (i = i.concat(a ? n.split(a) : n)),
            e.indexOf(".") > -1 && ((i = e.split(".")), (r = t), (t = i[1])),
            this.addNamespaces(t),
            wo(this.data, i, r),
            o.silent || this.emit("added", e, t, n, r);
        }
        addResources(e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : { silent: !1 };
          for (const o in n)
            ("string" !== typeof n[o] &&
              "[object Array]" !== Object.prototype.toString.apply(n[o])) ||
              this.addResource(e, t, o, n[o], { silent: !0 });
          r.silent || this.emit("added", e, t, n);
        }
        addResourceBundle(e, t, n, r, o) {
          let a =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : { silent: !1, skipCopy: !1 },
            i = [e, t];
          e.indexOf(".") > -1 &&
            ((i = e.split(".")), (r = n), (n = t), (t = i[1])),
            this.addNamespaces(t);
          let s = xo(this.data, i) || {};
          a.skipCopy || (n = JSON.parse(JSON.stringify(n))),
            r ? So(s, n, o) : (s = { ...s, ...n }),
            wo(this.data, i, s),
            a.silent || this.emit("added", e, t, n);
        }
        removeResourceBundle(e, t) {
          this.hasResourceBundle(e, t) && delete this.data[e][t],
            this.removeNamespaces(t),
            this.emit("removed", e, t);
        }
        hasResourceBundle(e, t) {
          return void 0 !== this.getResource(e, t);
        }
        getResourceBundle(e, t) {
          return (
            t || (t = this.options.defaultNS),
            "v1" === this.options.compatibilityAPI
              ? { ...this.getResource(e, t) }
              : this.getResource(e, t)
          );
        }
        getDataByLanguage(e) {
          return this.data[e];
        }
        hasLanguageSomeTranslations(e) {
          const t = this.getDataByLanguage(e);
          return !!((t && Object.keys(t)) || []).find(
            (e) => t[e] && Object.keys(t[e]).length > 0
          );
        }
        toJSON() {
          return this.data;
        }
      }
      var To = {
        processors: {},
        addPostProcessor(e) {
          this.processors[e.name] = e;
        },
        handle(e, t, n, r, o) {
          return (
            e.forEach((e) => {
              this.processors[e] &&
                (t = this.processors[e].process(t, n, r, o));
            }),
            t
          );
        },
      };
      const Ro = {};
      class jo extends go {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          super(),
            (function (e, t, n) {
              e.forEach((e) => {
                t[e] && (n[e] = t[e]);
              });
            })(
              [
                "resourceStore",
                "languageUtils",
                "pluralResolver",
                "interpolator",
                "backendConnector",
                "i18nFormat",
                "utils",
              ],
              e,
              this
            ),
            (this.options = t),
            void 0 === this.options.keySeparator &&
              (this.options.keySeparator = "."),
            (this.logger = ho.create("translator"));
        }
        changeLanguage(e) {
          e && (this.language = e);
        }
        exists(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { interpolation: {} };
          if (void 0 === e || null === e) return !1;
          const n = this.resolve(e, t);
          return n && void 0 !== n.res;
        }
        extractFromKey(e, t) {
          let n =
            void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
          void 0 === n && (n = ":");
          const r =
            void 0 !== t.keySeparator
              ? t.keySeparator
              : this.options.keySeparator;
          let o = t.ns || this.options.defaultNS || [];
          const a = n && e.indexOf(n) > -1,
            i =
              !this.options.userDefinedKeySeparator &&
              !t.keySeparator &&
              !this.options.userDefinedNsSeparator &&
              !t.nsSeparator &&
              !(function (e, t, n) {
                (t = t || ""), (n = n || "");
                const r = Oo.filter(
                  (e) => t.indexOf(e) < 0 && n.indexOf(e) < 0
                );
                if (0 === r.length) return !0;
                const o = Po.getRegExp(
                  "(".concat(
                    r.map((e) => ("?" === e ? "\\?" : e)).join("|"),
                    ")"
                  )
                );
                let a = !o.test(e);
                if (!a) {
                  const t = e.indexOf(n);
                  t > 0 && !o.test(e.substring(0, t)) && (a = !0);
                }
                return a;
              })(e, n, r);
          if (a && !i) {
            const t = e.match(this.interpolator.nestingRegexp);
            if (t && t.length > 0) return { key: e, namespaces: o };
            const a = e.split(n);
            (n !== r || (n === r && this.options.ns.indexOf(a[0]) > -1)) &&
              (o = a.shift()),
              (e = a.join(r));
          }
          return "string" === typeof o && (o = [o]), { key: e, namespaces: o };
        }
        translate(e, t, n) {
          if (
            ("object" !== typeof t &&
              this.options.overloadTranslationOptionHandler &&
              (t = this.options.overloadTranslationOptionHandler(arguments)),
            "object" === typeof t && (t = { ...t }),
            t || (t = {}),
            void 0 === e || null === e)
          )
            return "";
          Array.isArray(e) || (e = [String(e)]);
          const r =
              void 0 !== t.returnDetails
                ? t.returnDetails
                : this.options.returnDetails,
            o =
              void 0 !== t.keySeparator
                ? t.keySeparator
                : this.options.keySeparator,
            { key: a, namespaces: i } = this.extractFromKey(e[e.length - 1], t),
            s = i[i.length - 1],
            l = t.lng || this.language,
            u =
              t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
          if (l && "cimode" === l.toLowerCase()) {
            if (u) {
              const e = t.nsSeparator || this.options.nsSeparator;
              return r
                ? {
                    res: "".concat(s).concat(e).concat(a),
                    usedKey: a,
                    exactUsedKey: a,
                    usedLng: l,
                    usedNS: s,
                    usedParams: this.getUsedParamsDetails(t),
                  }
                : "".concat(s).concat(e).concat(a);
            }
            return r
              ? {
                  res: a,
                  usedKey: a,
                  exactUsedKey: a,
                  usedLng: l,
                  usedNS: s,
                  usedParams: this.getUsedParamsDetails(t),
                }
              : a;
          }
          const c = this.resolve(e, t);
          let d = c && c.res;
          const f = (c && c.usedKey) || a,
            p = (c && c.exactUsedKey) || a,
            h = Object.prototype.toString.apply(d),
            g =
              void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays,
            m = !this.i18nFormat || this.i18nFormat.handleAsObject;
          if (
            m &&
            d &&
            "string" !== typeof d &&
            "boolean" !== typeof d &&
            "number" !== typeof d &&
            ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(
              h
            ) < 0 &&
            ("string" !== typeof g || "[object Array]" !== h)
          ) {
            if (!t.returnObjects && !this.options.returnObjects) {
              this.options.returnedObjectHandler ||
                this.logger.warn(
                  "accessing an object - but returnObjects options is not enabled!"
                );
              const e = this.options.returnedObjectHandler
                ? this.options.returnedObjectHandler(f, d, { ...t, ns: i })
                : "key '"
                    .concat(a, " (")
                    .concat(
                      this.language,
                      ")' returned an object instead of string."
                    );
              return r
                ? ((c.res = e),
                  (c.usedParams = this.getUsedParamsDetails(t)),
                  c)
                : e;
            }
            if (o) {
              const e = "[object Array]" === h,
                n = e ? [] : {},
                r = e ? p : f;
              for (const a in d)
                if (Object.prototype.hasOwnProperty.call(d, a)) {
                  const e = "".concat(r).concat(o).concat(a);
                  (n[a] = this.translate(e, { ...t, joinArrays: !1, ns: i })),
                    n[a] === e && (n[a] = d[a]);
                }
              d = n;
            }
          } else if (m && "string" === typeof g && "[object Array]" === h)
            (d = d.join(g)), d && (d = this.extendTranslation(d, e, t, n));
          else {
            let r = !1,
              i = !1;
            const u = void 0 !== t.count && "string" !== typeof t.count,
              f = jo.hasDefaultValue(t),
              p = u ? this.pluralResolver.getSuffix(l, t.count, t) : "",
              h =
                t.ordinal && u
                  ? this.pluralResolver.getSuffix(l, t.count, { ordinal: !1 })
                  : "",
              g =
                u &&
                !t.ordinal &&
                0 === t.count &&
                this.pluralResolver.shouldUseIntlApi(),
              m =
                (g &&
                  t[
                    "defaultValue".concat(this.options.pluralSeparator, "zero")
                  ]) ||
                t["defaultValue".concat(p)] ||
                t["defaultValue".concat(h)] ||
                t.defaultValue;
            !this.isValidLookup(d) && f && ((r = !0), (d = m)),
              this.isValidLookup(d) || ((i = !0), (d = a));
            const v =
                (t.missingKeyNoValueFallbackToKey ||
                  this.options.missingKeyNoValueFallbackToKey) &&
                i
                  ? void 0
                  : d,
              y = f && m !== d && this.options.updateMissing;
            if (i || r || y) {
              if (
                (this.logger.log(
                  y ? "updateKey" : "missingKey",
                  l,
                  s,
                  a,
                  y ? m : d
                ),
                o)
              ) {
                const e = this.resolve(a, { ...t, keySeparator: !1 });
                e &&
                  e.res &&
                  this.logger.warn(
                    "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
                  );
              }
              let e = [];
              const n = this.languageUtils.getFallbackCodes(
                this.options.fallbackLng,
                t.lng || this.language
              );
              if ("fallback" === this.options.saveMissingTo && n && n[0])
                for (let t = 0; t < n.length; t++) e.push(n[t]);
              else
                "all" === this.options.saveMissingTo
                  ? (e = this.languageUtils.toResolveHierarchy(
                      t.lng || this.language
                    ))
                  : e.push(t.lng || this.language);
              const r = (e, n, r) => {
                const o = f && r !== d ? r : v;
                this.options.missingKeyHandler
                  ? this.options.missingKeyHandler(e, s, n, o, y, t)
                  : this.backendConnector &&
                    this.backendConnector.saveMissing &&
                    this.backendConnector.saveMissing(e, s, n, o, y, t),
                  this.emit("missingKey", e, s, n, d);
              };
              this.options.saveMissing &&
                (this.options.saveMissingPlurals && u
                  ? e.forEach((e) => {
                      const n = this.pluralResolver.getSuffixes(e, t);
                      g &&
                        t[
                          "defaultValue".concat(
                            this.options.pluralSeparator,
                            "zero"
                          )
                        ] &&
                        n.indexOf(
                          "".concat(this.options.pluralSeparator, "zero")
                        ) < 0 &&
                        n.push("".concat(this.options.pluralSeparator, "zero")),
                        n.forEach((n) => {
                          r([e], a + n, t["defaultValue".concat(n)] || m);
                        });
                    })
                  : r(e, a, m));
            }
            (d = this.extendTranslation(d, e, t, c, n)),
              i &&
                d === a &&
                this.options.appendNamespaceToMissingKey &&
                (d = "".concat(s, ":").concat(a)),
              (i || r) &&
                this.options.parseMissingKeyHandler &&
                (d =
                  "v1" !== this.options.compatibilityAPI
                    ? this.options.parseMissingKeyHandler(
                        this.options.appendNamespaceToMissingKey
                          ? "".concat(s, ":").concat(a)
                          : a,
                        r ? d : void 0
                      )
                    : this.options.parseMissingKeyHandler(d));
          }
          return r
            ? ((c.res = d), (c.usedParams = this.getUsedParamsDetails(t)), c)
            : d;
        }
        extendTranslation(e, t, n, r, o) {
          var a = this;
          if (this.i18nFormat && this.i18nFormat.parse)
            e = this.i18nFormat.parse(
              e,
              { ...this.options.interpolation.defaultVariables, ...n },
              n.lng || this.language || r.usedLng,
              r.usedNS,
              r.usedKey,
              { resolved: r }
            );
          else if (!n.skipInterpolation) {
            n.interpolation &&
              this.interpolator.init({
                ...n,
                interpolation: {
                  ...this.options.interpolation,
                  ...n.interpolation,
                },
              });
            const i =
              "string" === typeof e &&
              (n &&
              n.interpolation &&
              void 0 !== n.interpolation.skipOnVariables
                ? n.interpolation.skipOnVariables
                : this.options.interpolation.skipOnVariables);
            let s;
            if (i) {
              const t = e.match(this.interpolator.nestingRegexp);
              s = t && t.length;
            }
            let l = n.replace && "string" !== typeof n.replace ? n.replace : n;
            if (
              (this.options.interpolation.defaultVariables &&
                (l = { ...this.options.interpolation.defaultVariables, ...l }),
              (e = this.interpolator.interpolate(
                e,
                l,
                n.lng || this.language,
                n
              )),
              i)
            ) {
              const t = e.match(this.interpolator.nestingRegexp);
              s < (t && t.length) && (n.nest = !1);
            }
            !n.lng &&
              "v1" !== this.options.compatibilityAPI &&
              r &&
              r.res &&
              (n.lng = r.usedLng),
              !1 !== n.nest &&
                (e = this.interpolator.nest(
                  e,
                  function () {
                    for (
                      var e = arguments.length, r = new Array(e), i = 0;
                      i < e;
                      i++
                    )
                      r[i] = arguments[i];
                    return o && o[0] === r[0] && !n.context
                      ? (a.logger.warn(
                          "It seems you are nesting recursively key: "
                            .concat(r[0], " in key: ")
                            .concat(t[0])
                        ),
                        null)
                      : a.translate(...r, t);
                  },
                  n
                )),
              n.interpolation && this.interpolator.reset();
          }
          const i = n.postProcess || this.options.postProcess,
            s = "string" === typeof i ? [i] : i;
          return (
            void 0 !== e &&
              null !== e &&
              s &&
              s.length &&
              !1 !== n.applyPostProcessor &&
              (e = To.handle(
                s,
                e,
                t,
                this.options && this.options.postProcessPassResolved
                  ? {
                      i18nResolved: {
                        ...r,
                        usedParams: this.getUsedParamsDetails(n),
                      },
                      ...n,
                    }
                  : n,
                this
              )),
            e
          );
        }
        resolve(e) {
          let t,
            n,
            r,
            o,
            a,
            i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return (
            "string" === typeof e && (e = [e]),
            e.forEach((e) => {
              if (this.isValidLookup(t)) return;
              const s = this.extractFromKey(e, i),
                l = s.key;
              n = l;
              let u = s.namespaces;
              this.options.fallbackNS &&
                (u = u.concat(this.options.fallbackNS));
              const c = void 0 !== i.count && "string" !== typeof i.count,
                d =
                  c &&
                  !i.ordinal &&
                  0 === i.count &&
                  this.pluralResolver.shouldUseIntlApi(),
                f =
                  void 0 !== i.context &&
                  ("string" === typeof i.context ||
                    "number" === typeof i.context) &&
                  "" !== i.context,
                p = i.lngs
                  ? i.lngs
                  : this.languageUtils.toResolveHierarchy(
                      i.lng || this.language,
                      i.fallbackLng
                    );
              u.forEach((e) => {
                this.isValidLookup(t) ||
                  ((a = e),
                  !Ro["".concat(p[0], "-").concat(e)] &&
                    this.utils &&
                    this.utils.hasLoadedNamespace &&
                    !this.utils.hasLoadedNamespace(a) &&
                    ((Ro["".concat(p[0], "-").concat(e)] = !0),
                    this.logger.warn(
                      'key "'
                        .concat(n, '" for languages "')
                        .concat(
                          p.join(", "),
                          '" won\'t get resolved as namespace "'
                        )
                        .concat(a, '" was not yet loaded'),
                      "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
                    )),
                  p.forEach((n) => {
                    if (this.isValidLookup(t)) return;
                    o = n;
                    const a = [l];
                    if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                      this.i18nFormat.addLookupKeys(a, l, n, e, i);
                    else {
                      let e;
                      c && (e = this.pluralResolver.getSuffix(n, i.count, i));
                      const t = "".concat(this.options.pluralSeparator, "zero"),
                        r = ""
                          .concat(this.options.pluralSeparator, "ordinal")
                          .concat(this.options.pluralSeparator);
                      if (
                        (c &&
                          (a.push(l + e),
                          i.ordinal &&
                            0 === e.indexOf(r) &&
                            a.push(
                              l + e.replace(r, this.options.pluralSeparator)
                            ),
                          d && a.push(l + t)),
                        f)
                      ) {
                        const n = ""
                          .concat(l)
                          .concat(this.options.contextSeparator)
                          .concat(i.context);
                        a.push(n),
                          c &&
                            (a.push(n + e),
                            i.ordinal &&
                              0 === e.indexOf(r) &&
                              a.push(
                                n + e.replace(r, this.options.pluralSeparator)
                              ),
                            d && a.push(n + t));
                      }
                    }
                    let s;
                    for (; (s = a.pop()); )
                      this.isValidLookup(t) ||
                        ((r = s), (t = this.getResource(n, e, s, i)));
                  }));
              });
            }),
            { res: t, usedKey: n, exactUsedKey: r, usedLng: o, usedNS: a }
          );
        }
        isValidLookup(e) {
          return (
            void 0 !== e &&
            !(!this.options.returnNull && null === e) &&
            !(!this.options.returnEmptyString && "" === e)
          );
        }
        getResource(e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          return this.i18nFormat && this.i18nFormat.getResource
            ? this.i18nFormat.getResource(e, t, n, r)
            : this.resourceStore.getResource(e, t, n, r);
        }
        getUsedParamsDetails() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = [
              "defaultValue",
              "ordinal",
              "context",
              "replace",
              "lng",
              "lngs",
              "fallbackLng",
              "ns",
              "keySeparator",
              "nsSeparator",
              "returnObjects",
              "returnDetails",
              "joinArrays",
              "postProcess",
              "interpolation",
            ],
            n = e.replace && "string" !== typeof e.replace;
          let r = n ? e.replace : e;
          if (
            (n && "undefined" !== typeof e.count && (r.count = e.count),
            this.options.interpolation.defaultVariables &&
              (r = { ...this.options.interpolation.defaultVariables, ...r }),
            !n)
          ) {
            r = { ...r };
            for (const e of t) delete r[e];
          }
          return r;
        }
        static hasDefaultValue(e) {
          const t = "defaultValue";
          for (const n in e)
            if (
              Object.prototype.hasOwnProperty.call(e, n) &&
              t === n.substring(0, 12) &&
              void 0 !== e[n]
            )
              return !0;
          return !1;
        }
      }
      function Do(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      class Io {
        constructor(e) {
          (this.options = e),
            (this.supportedLngs = this.options.supportedLngs || !1),
            (this.logger = ho.create("languageUtils"));
        }
        getScriptPartFromCode(e) {
          if (!(e = _o(e)) || e.indexOf("-") < 0) return null;
          const t = e.split("-");
          return 2 === t.length
            ? null
            : (t.pop(),
              "x" === t[t.length - 1].toLowerCase()
                ? null
                : this.formatLanguageCode(t.join("-")));
        }
        getLanguagePartFromCode(e) {
          if (!(e = _o(e)) || e.indexOf("-") < 0) return e;
          const t = e.split("-");
          return this.formatLanguageCode(t[0]);
        }
        formatLanguageCode(e) {
          if ("string" === typeof e && e.indexOf("-") > -1) {
            const t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
            let n = e.split("-");
            return (
              this.options.lowerCaseLng
                ? (n = n.map((e) => e.toLowerCase()))
                : 2 === n.length
                ? ((n[0] = n[0].toLowerCase()),
                  (n[1] = n[1].toUpperCase()),
                  t.indexOf(n[1].toLowerCase()) > -1 &&
                    (n[1] = Do(n[1].toLowerCase())))
                : 3 === n.length &&
                  ((n[0] = n[0].toLowerCase()),
                  2 === n[1].length && (n[1] = n[1].toUpperCase()),
                  "sgn" !== n[0] &&
                    2 === n[2].length &&
                    (n[2] = n[2].toUpperCase()),
                  t.indexOf(n[1].toLowerCase()) > -1 &&
                    (n[1] = Do(n[1].toLowerCase())),
                  t.indexOf(n[2].toLowerCase()) > -1 &&
                    (n[2] = Do(n[2].toLowerCase()))),
              n.join("-")
            );
          }
          return this.options.cleanCode || this.options.lowerCaseLng
            ? e.toLowerCase()
            : e;
        }
        isSupportedCode(e) {
          return (
            ("languageOnly" === this.options.load ||
              this.options.nonExplicitSupportedLngs) &&
              (e = this.getLanguagePartFromCode(e)),
            !this.supportedLngs ||
              !this.supportedLngs.length ||
              this.supportedLngs.indexOf(e) > -1
          );
        }
        getBestMatchFromCodes(e) {
          if (!e) return null;
          let t;
          return (
            e.forEach((e) => {
              if (t) return;
              const n = this.formatLanguageCode(e);
              (this.options.supportedLngs && !this.isSupportedCode(n)) ||
                (t = n);
            }),
            !t &&
              this.options.supportedLngs &&
              e.forEach((e) => {
                if (t) return;
                const n = this.getLanguagePartFromCode(e);
                if (this.isSupportedCode(n)) return (t = n);
                t = this.options.supportedLngs.find((e) =>
                  e === n
                    ? e
                    : e.indexOf("-") < 0 && n.indexOf("-") < 0
                    ? void 0
                    : 0 === e.indexOf(n)
                    ? e
                    : void 0
                );
              }),
            t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
            t
          );
        }
        getFallbackCodes(e, t) {
          if (!e) return [];
          if (
            ("function" === typeof e && (e = e(t)),
            "string" === typeof e && (e = [e]),
            "[object Array]" === Object.prototype.toString.apply(e))
          )
            return e;
          if (!t) return e.default || [];
          let n = e[t];
          return (
            n || (n = e[this.getScriptPartFromCode(t)]),
            n || (n = e[this.formatLanguageCode(t)]),
            n || (n = e[this.getLanguagePartFromCode(t)]),
            n || (n = e.default),
            n || []
          );
        }
        toResolveHierarchy(e, t) {
          const n = this.getFallbackCodes(
              t || this.options.fallbackLng || [],
              e
            ),
            r = [],
            o = (e) => {
              e &&
                (this.isSupportedCode(e)
                  ? r.push(e)
                  : this.logger.warn(
                      "rejecting language code not found in supportedLngs: ".concat(
                        e
                      )
                    ));
            };
          return (
            "string" === typeof e &&
            (e.indexOf("-") > -1 || e.indexOf("_") > -1)
              ? ("languageOnly" !== this.options.load &&
                  o(this.formatLanguageCode(e)),
                "languageOnly" !== this.options.load &&
                  "currentOnly" !== this.options.load &&
                  o(this.getScriptPartFromCode(e)),
                "currentOnly" !== this.options.load &&
                  o(this.getLanguagePartFromCode(e)))
              : "string" === typeof e && o(this.formatLanguageCode(e)),
            n.forEach((e) => {
              r.indexOf(e) < 0 && o(this.formatLanguageCode(e));
            }),
            r
          );
        }
      }
      let Ao = [
          {
            lngs: [
              "ach",
              "ak",
              "am",
              "arn",
              "br",
              "fil",
              "gun",
              "ln",
              "mfe",
              "mg",
              "mi",
              "oc",
              "pt",
              "pt-BR",
              "tg",
              "tl",
              "ti",
              "tr",
              "uz",
              "wa",
            ],
            nr: [1, 2],
            fc: 1,
          },
          {
            lngs: [
              "af",
              "an",
              "ast",
              "az",
              "bg",
              "bn",
              "ca",
              "da",
              "de",
              "dev",
              "el",
              "en",
              "eo",
              "es",
              "et",
              "eu",
              "fi",
              "fo",
              "fur",
              "fy",
              "gl",
              "gu",
              "ha",
              "hi",
              "hu",
              "hy",
              "ia",
              "it",
              "kk",
              "kn",
              "ku",
              "lb",
              "mai",
              "ml",
              "mn",
              "mr",
              "nah",
              "nap",
              "nb",
              "ne",
              "nl",
              "nn",
              "no",
              "nso",
              "pa",
              "pap",
              "pms",
              "ps",
              "pt-PT",
              "rm",
              "sco",
              "se",
              "si",
              "so",
              "son",
              "sq",
              "sv",
              "sw",
              "ta",
              "te",
              "tk",
              "ur",
              "yo",
            ],
            nr: [1, 2],
            fc: 2,
          },
          {
            lngs: [
              "ay",
              "bo",
              "cgg",
              "fa",
              "ht",
              "id",
              "ja",
              "jbo",
              "ka",
              "km",
              "ko",
              "ky",
              "lo",
              "ms",
              "sah",
              "su",
              "th",
              "tt",
              "ug",
              "vi",
              "wo",
              "zh",
            ],
            nr: [1],
            fc: 3,
          },
          {
            lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
            nr: [1, 2, 5],
            fc: 4,
          },
          { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
          { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
          { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
          { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
          { lngs: ["fr"], nr: [1, 2], fc: 9 },
          { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
          { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
          { lngs: ["is"], nr: [1, 2], fc: 12 },
          { lngs: ["jv"], nr: [0, 1], fc: 13 },
          { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
          { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
          { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
          { lngs: ["mk"], nr: [1, 2], fc: 17 },
          { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
          { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
          { lngs: ["or"], nr: [2, 1], fc: 2 },
          { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
          { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
          { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
        ],
        Fo = {
          1: function (e) {
            return Number(e > 1);
          },
          2: function (e) {
            return Number(1 != e);
          },
          3: function (e) {
            return 0;
          },
          4: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2
            );
          },
          5: function (e) {
            return Number(
              0 == e
                ? 0
                : 1 == e
                ? 1
                : 2 == e
                ? 2
                : e % 100 >= 3 && e % 100 <= 10
                ? 3
                : e % 100 >= 11
                ? 4
                : 5
            );
          },
          6: function (e) {
            return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2);
          },
          7: function (e) {
            return Number(
              1 == e
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2
            );
          },
          8: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3);
          },
          9: function (e) {
            return Number(e >= 2);
          },
          10: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4);
          },
          11: function (e) {
            return Number(
              1 == e || 11 == e
                ? 0
                : 2 == e || 12 == e
                ? 1
                : e > 2 && e < 20
                ? 2
                : 3
            );
          },
          12: function (e) {
            return Number(e % 10 != 1 || e % 100 == 11);
          },
          13: function (e) {
            return Number(0 !== e);
          },
          14: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3);
          },
          15: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2
            );
          },
          16: function (e) {
            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2);
          },
          17: function (e) {
            return Number(1 == e || (e % 10 == 1 && e % 100 != 11) ? 0 : 1);
          },
          18: function (e) {
            return Number(0 == e ? 0 : 1 == e ? 1 : 2);
          },
          19: function (e) {
            return Number(
              1 == e
                ? 0
                : 0 == e || (e % 100 > 1 && e % 100 < 11)
                ? 1
                : e % 100 > 10 && e % 100 < 20
                ? 2
                : 3
            );
          },
          20: function (e) {
            return Number(
              1 == e ? 0 : 0 == e || (e % 100 > 0 && e % 100 < 20) ? 1 : 2
            );
          },
          21: function (e) {
            return Number(
              e % 100 == 1
                ? 1
                : e % 100 == 2
                ? 2
                : e % 100 == 3 || e % 100 == 4
                ? 3
                : 0
            );
          },
          22: function (e) {
            return Number(
              1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3
            );
          },
        };
      const Mo = ["v1", "v2", "v3"],
        zo = ["v4"],
        Bo = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
      class Uo {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          (this.languageUtils = e),
            (this.options = t),
            (this.logger = ho.create("pluralResolver")),
            (this.options.compatibilityJSON &&
              !zo.includes(this.options.compatibilityJSON)) ||
              ("undefined" !== typeof Intl && Intl.PluralRules) ||
              ((this.options.compatibilityJSON = "v3"),
              this.logger.error(
                "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling."
              )),
            (this.rules = (function () {
              const e = {};
              return (
                Ao.forEach((t) => {
                  t.lngs.forEach((n) => {
                    e[n] = { numbers: t.nr, plurals: Fo[t.fc] };
                  });
                }),
                e
              );
            })());
        }
        addRule(e, t) {
          this.rules[e] = t;
        }
        getRule(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.shouldUseIntlApi())
            try {
              return new Intl.PluralRules(_o("dev" === e ? "en" : e), {
                type: t.ordinal ? "ordinal" : "cardinal",
              });
            } catch (n) {
              return;
            }
          return (
            this.rules[e] ||
            this.rules[this.languageUtils.getLanguagePartFromCode(e)]
          );
        }
        needsPlural(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const n = this.getRule(e, t);
          return this.shouldUseIntlApi()
            ? n && n.resolvedOptions().pluralCategories.length > 1
            : n && n.numbers.length > 1;
        }
        getPluralFormsOfKey(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return this.getSuffixes(e, n).map((e) => "".concat(t).concat(e));
        }
        getSuffixes(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const n = this.getRule(e, t);
          return n
            ? this.shouldUseIntlApi()
              ? n
                  .resolvedOptions()
                  .pluralCategories.sort((e, t) => Bo[e] - Bo[t])
                  .map((e) =>
                    ""
                      .concat(this.options.prepend)
                      .concat(
                        t.ordinal ? "ordinal".concat(this.options.prepend) : ""
                      )
                      .concat(e)
                  )
              : n.numbers.map((n) => this.getSuffix(e, n, t))
            : [];
        }
        getSuffix(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const r = this.getRule(e, n);
          return r
            ? this.shouldUseIntlApi()
              ? ""
                  .concat(this.options.prepend)
                  .concat(
                    n.ordinal ? "ordinal".concat(this.options.prepend) : ""
                  )
                  .concat(r.select(t))
              : this.getSuffixRetroCompatible(r, t)
            : (this.logger.warn("no plural rule found for: ".concat(e)), "");
        }
        getSuffixRetroCompatible(e, t) {
          const n = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t));
          let r = e.numbers[n];
          this.options.simplifyPluralSuffix &&
            2 === e.numbers.length &&
            1 === e.numbers[0] &&
            (2 === r ? (r = "plural") : 1 === r && (r = ""));
          const o = () =>
            this.options.prepend && r.toString()
              ? this.options.prepend + r.toString()
              : r.toString();
          return "v1" === this.options.compatibilityJSON
            ? 1 === r
              ? ""
              : "number" === typeof r
              ? "_plural_".concat(r.toString())
              : o()
            : "v2" === this.options.compatibilityJSON ||
              (this.options.simplifyPluralSuffix &&
                2 === e.numbers.length &&
                1 === e.numbers[0])
            ? o()
            : this.options.prepend && n.toString()
            ? this.options.prepend + n.toString()
            : n.toString();
        }
        shouldUseIntlApi() {
          return !Mo.includes(this.options.compatibilityJSON);
        }
      }
      function Ho(e, t, n) {
        let r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : ".",
          o =
            !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          a = (function (e, t, n) {
            const r = xo(e, n);
            return void 0 !== r ? r : xo(t, n);
          })(e, t, n);
        return (
          !a &&
            o &&
            "string" === typeof n &&
            ((a = No(e, n, r)), void 0 === a && (a = No(t, n, r))),
          a
        );
      }
      class Zo {
        constructor() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (this.logger = ho.create("interpolator")),
            (this.options = e),
            (this.format =
              (e.interpolation && e.interpolation.format) || ((e) => e)),
            this.init(e);
        }
        init() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          e.interpolation || (e.interpolation = { escapeValue: !0 });
          const t = e.interpolation;
          (this.escape = void 0 !== t.escape ? t.escape : Co),
            (this.escapeValue = void 0 === t.escapeValue || t.escapeValue),
            (this.useRawValueToEscape =
              void 0 !== t.useRawValueToEscape && t.useRawValueToEscape),
            (this.prefix = t.prefix ? ko(t.prefix) : t.prefixEscaped || "{{"),
            (this.suffix = t.suffix ? ko(t.suffix) : t.suffixEscaped || "}}"),
            (this.formatSeparator = t.formatSeparator
              ? t.formatSeparator
              : t.formatSeparator || ","),
            (this.unescapePrefix = t.unescapeSuffix
              ? ""
              : t.unescapePrefix || "-"),
            (this.unescapeSuffix = this.unescapePrefix
              ? ""
              : t.unescapeSuffix || ""),
            (this.nestingPrefix = t.nestingPrefix
              ? ko(t.nestingPrefix)
              : t.nestingPrefixEscaped || ko("$t(")),
            (this.nestingSuffix = t.nestingSuffix
              ? ko(t.nestingSuffix)
              : t.nestingSuffixEscaped || ko(")")),
            (this.nestingOptionsSeparator = t.nestingOptionsSeparator
              ? t.nestingOptionsSeparator
              : t.nestingOptionsSeparator || ","),
            (this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3),
            (this.alwaysFormat = void 0 !== t.alwaysFormat && t.alwaysFormat),
            this.resetRegExp();
        }
        reset() {
          this.options && this.init(this.options);
        }
        resetRegExp() {
          const e = (e, t) =>
            e && e.source === t ? ((e.lastIndex = 0), e) : new RegExp(t, "g");
          (this.regexp = e(
            this.regexp,
            "".concat(this.prefix, "(.+?)").concat(this.suffix)
          )),
            (this.regexpUnescape = e(
              this.regexpUnescape,
              ""
                .concat(this.prefix)
                .concat(this.unescapePrefix, "(.+?)")
                .concat(this.unescapeSuffix)
                .concat(this.suffix)
            )),
            (this.nestingRegexp = e(
              this.nestingRegexp,
              "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix)
            ));
        }
        interpolate(e, t, n, r) {
          let o, a, i;
          const s =
            (this.options &&
              this.options.interpolation &&
              this.options.interpolation.defaultVariables) ||
            {};
          function l(e) {
            return e.replace(/\$/g, "$$$$");
          }
          const u = (e) => {
            if (e.indexOf(this.formatSeparator) < 0) {
              const o = Ho(
                t,
                s,
                e,
                this.options.keySeparator,
                this.options.ignoreJSONStructure
              );
              return this.alwaysFormat
                ? this.format(o, void 0, n, { ...r, ...t, interpolationkey: e })
                : o;
            }
            const o = e.split(this.formatSeparator),
              a = o.shift().trim(),
              i = o.join(this.formatSeparator).trim();
            return this.format(
              Ho(
                t,
                s,
                a,
                this.options.keySeparator,
                this.options.ignoreJSONStructure
              ),
              i,
              n,
              { ...r, ...t, interpolationkey: a }
            );
          };
          this.resetRegExp();
          const c =
              (r && r.missingInterpolationHandler) ||
              this.options.missingInterpolationHandler,
            d =
              r && r.interpolation && void 0 !== r.interpolation.skipOnVariables
                ? r.interpolation.skipOnVariables
                : this.options.interpolation.skipOnVariables;
          return (
            [
              { regex: this.regexpUnescape, safeValue: (e) => l(e) },
              {
                regex: this.regexp,
                safeValue: (e) => (this.escapeValue ? l(this.escape(e)) : l(e)),
              },
            ].forEach((t) => {
              for (i = 0; (o = t.regex.exec(e)); ) {
                const n = o[1].trim();
                if (((a = u(n)), void 0 === a))
                  if ("function" === typeof c) {
                    const t = c(e, o, r);
                    a = "string" === typeof t ? t : "";
                  } else if (r && Object.prototype.hasOwnProperty.call(r, n))
                    a = "";
                  else {
                    if (d) {
                      a = o[0];
                      continue;
                    }
                    this.logger.warn(
                      "missed to pass in variable "
                        .concat(n, " for interpolating ")
                        .concat(e)
                    ),
                      (a = "");
                  }
                else
                  "string" === typeof a ||
                    this.useRawValueToEscape ||
                    (a = vo(a));
                const s = t.safeValue(a);
                if (
                  ((e = e.replace(o[0], s)),
                  d
                    ? ((t.regex.lastIndex += a.length),
                      (t.regex.lastIndex -= o[0].length))
                    : (t.regex.lastIndex = 0),
                  i++,
                  i >= this.maxReplaces)
                )
                  break;
              }
            }),
            e
          );
        }
        nest(e, t) {
          let n,
            r,
            o,
            a =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          function i(e, t) {
            const n = this.nestingOptionsSeparator;
            if (e.indexOf(n) < 0) return e;
            const r = e.split(new RegExp("".concat(n, "[ ]*{")));
            let a = "{".concat(r[1]);
            (e = r[0]), (a = this.interpolate(a, o));
            const i = a.match(/'/g),
              s = a.match(/"/g);
            ((i && i.length % 2 === 0 && !s) || s.length % 2 !== 0) &&
              (a = a.replace(/'/g, '"'));
            try {
              (o = JSON.parse(a)), t && (o = { ...t, ...o });
            } catch (l) {
              return (
                this.logger.warn(
                  "failed parsing options string in nesting for key ".concat(e),
                  l
                ),
                "".concat(e).concat(n).concat(a)
              );
            }
            return delete o.defaultValue, e;
          }
          for (; (n = this.nestingRegexp.exec(e)); ) {
            let s = [];
            (o = { ...a }),
              (o = o.replace && "string" !== typeof o.replace ? o.replace : o),
              (o.applyPostProcessor = !1),
              delete o.defaultValue;
            let l = !1;
            if (
              -1 !== n[0].indexOf(this.formatSeparator) &&
              !/{.*}/.test(n[1])
            ) {
              const e = n[1].split(this.formatSeparator).map((e) => e.trim());
              (n[1] = e.shift()), (s = e), (l = !0);
            }
            if (
              ((r = t(i.call(this, n[1].trim(), o), o)),
              r && n[0] === e && "string" !== typeof r)
            )
              return r;
            "string" !== typeof r && (r = vo(r)),
              r ||
                (this.logger.warn(
                  "missed to resolve ".concat(n[1], " for nesting ").concat(e)
                ),
                (r = "")),
              l &&
                (r = s.reduce(
                  (e, t) =>
                    this.format(e, t, a.lng, {
                      ...a,
                      interpolationkey: n[1].trim(),
                    }),
                  r.trim()
                )),
              (e = e.replace(n[0], r)),
              (this.regexp.lastIndex = 0);
          }
          return e;
        }
      }
      function Vo(e) {
        const t = {};
        return function (n, r, o) {
          const a = r + JSON.stringify(o);
          let i = t[a];
          return i || ((i = e(_o(r), o)), (t[a] = i)), i(n);
        };
      }
      class Wo {
        constructor() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (this.logger = ho.create("formatter")),
            (this.options = e),
            (this.formats = {
              number: Vo((e, t) => {
                const n = new Intl.NumberFormat(e, { ...t });
                return (e) => n.format(e);
              }),
              currency: Vo((e, t) => {
                const n = new Intl.NumberFormat(e, { ...t, style: "currency" });
                return (e) => n.format(e);
              }),
              datetime: Vo((e, t) => {
                const n = new Intl.DateTimeFormat(e, { ...t });
                return (e) => n.format(e);
              }),
              relativetime: Vo((e, t) => {
                const n = new Intl.RelativeTimeFormat(e, { ...t });
                return (e) => n.format(e, t.range || "day");
              }),
              list: Vo((e, t) => {
                const n = new Intl.ListFormat(e, { ...t });
                return (e) => n.format(e);
              }),
            }),
            this.init(e);
        }
        init(e) {
          const t = (
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { interpolation: {} }
          ).interpolation;
          this.formatSeparator = t.formatSeparator
            ? t.formatSeparator
            : t.formatSeparator || ",";
        }
        add(e, t) {
          this.formats[e.toLowerCase().trim()] = t;
        }
        addCached(e, t) {
          this.formats[e.toLowerCase().trim()] = Vo(t);
        }
        format(e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          const o = t.split(this.formatSeparator).reduce((e, t) => {
            const { formatName: o, formatOptions: a } = (function (e) {
              let t = e.toLowerCase().trim();
              const n = {};
              if (e.indexOf("(") > -1) {
                const r = e.split("(");
                t = r[0].toLowerCase().trim();
                const o = r[1].substring(0, r[1].length - 1);
                "currency" === t && o.indexOf(":") < 0
                  ? n.currency || (n.currency = o.trim())
                  : "relativetime" === t && o.indexOf(":") < 0
                  ? n.range || (n.range = o.trim())
                  : o.split(";").forEach((e) => {
                      if (!e) return;
                      const [t, ...r] = e.split(":"),
                        o = r
                          .join(":")
                          .trim()
                          .replace(/^'+|'+$/g, "");
                      n[t.trim()] || (n[t.trim()] = o),
                        "false" === o && (n[t.trim()] = !1),
                        "true" === o && (n[t.trim()] = !0),
                        isNaN(o) || (n[t.trim()] = parseInt(o, 10));
                    });
              }
              return { formatName: t, formatOptions: n };
            })(t);
            if (this.formats[o]) {
              let t = e;
              try {
                const i =
                    (r &&
                      r.formatParams &&
                      r.formatParams[r.interpolationkey]) ||
                    {},
                  s = i.locale || i.lng || r.locale || r.lng || n;
                t = this.formats[o](e, s, { ...a, ...r, ...i });
              } catch (i) {
                this.logger.warn(i);
              }
              return t;
            }
            return (
              this.logger.warn("there was no format function for ".concat(o)), e
            );
          }, e);
          return o;
        }
      }
      class $o extends go {
        constructor(e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          super(),
            (this.backend = e),
            (this.store = t),
            (this.services = n),
            (this.languageUtils = n.languageUtils),
            (this.options = r),
            (this.logger = ho.create("backendConnector")),
            (this.waitingReads = []),
            (this.maxParallelReads = r.maxParallelReads || 10),
            (this.readingCalls = 0),
            (this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5),
            (this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350),
            (this.state = {}),
            (this.queue = []),
            this.backend &&
              this.backend.init &&
              this.backend.init(n, r.backend, r);
        }
        queueLoad(e, t, n, r) {
          const o = {},
            a = {},
            i = {},
            s = {};
          return (
            e.forEach((e) => {
              let r = !0;
              t.forEach((t) => {
                const i = "".concat(e, "|").concat(t);
                !n.reload && this.store.hasResourceBundle(e, t)
                  ? (this.state[i] = 2)
                  : this.state[i] < 0 ||
                    (1 === this.state[i]
                      ? void 0 === a[i] && (a[i] = !0)
                      : ((this.state[i] = 1),
                        (r = !1),
                        void 0 === a[i] && (a[i] = !0),
                        void 0 === o[i] && (o[i] = !0),
                        void 0 === s[t] && (s[t] = !0)));
              }),
                r || (i[e] = !0);
            }),
            (Object.keys(o).length || Object.keys(a).length) &&
              this.queue.push({
                pending: a,
                pendingCount: Object.keys(a).length,
                loaded: {},
                errors: [],
                callback: r,
              }),
            {
              toLoad: Object.keys(o),
              pending: Object.keys(a),
              toLoadLanguages: Object.keys(i),
              toLoadNamespaces: Object.keys(s),
            }
          );
        }
        loaded(e, t, n) {
          const r = e.split("|"),
            o = r[0],
            a = r[1];
          t && this.emit("failedLoading", o, a, t),
            n &&
              this.store.addResourceBundle(o, a, n, void 0, void 0, {
                skipCopy: !0,
              }),
            (this.state[e] = t ? -1 : 2);
          const i = {};
          this.queue.forEach((n) => {
            !(function (e, t, n, r) {
              const { obj: o, k: a } = bo(e, t, Object);
              (o[a] = o[a] || []),
                r && (o[a] = o[a].concat(n)),
                r || o[a].push(n);
            })(n.loaded, [o], a),
              (function (e, t) {
                void 0 !== e.pending[t] &&
                  (delete e.pending[t], e.pendingCount--);
              })(n, e),
              t && n.errors.push(t),
              0 !== n.pendingCount ||
                n.done ||
                (Object.keys(n.loaded).forEach((e) => {
                  i[e] || (i[e] = {});
                  const t = n.loaded[e];
                  t.length &&
                    t.forEach((t) => {
                      void 0 === i[e][t] && (i[e][t] = !0);
                    });
                }),
                (n.done = !0),
                n.errors.length ? n.callback(n.errors) : n.callback());
          }),
            this.emit("loaded", i),
            (this.queue = this.queue.filter((e) => !e.done));
        }
        read(e, t, n) {
          let r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0,
            o =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : this.retryTimeout,
            a = arguments.length > 5 ? arguments[5] : void 0;
          if (!e.length) return a(null, {});
          if (this.readingCalls >= this.maxParallelReads)
            return void this.waitingReads.push({
              lng: e,
              ns: t,
              fcName: n,
              tried: r,
              wait: o,
              callback: a,
            });
          this.readingCalls++;
          const i = (i, s) => {
              if ((this.readingCalls--, this.waitingReads.length > 0)) {
                const e = this.waitingReads.shift();
                this.read(e.lng, e.ns, e.fcName, e.tried, e.wait, e.callback);
              }
              i && s && r < this.maxRetries
                ? setTimeout(() => {
                    this.read.call(this, e, t, n, r + 1, 2 * o, a);
                  }, o)
                : a(i, s);
            },
            s = this.backend[n].bind(this.backend);
          if (2 !== s.length) return s(e, t, i);
          try {
            const n = s(e, t);
            n && "function" === typeof n.then
              ? n.then((e) => i(null, e)).catch(i)
              : i(null, n);
          } catch (l) {
            i(l);
          }
        }
        prepareLoading(e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = arguments.length > 3 ? arguments[3] : void 0;
          if (!this.backend)
            return (
              this.logger.warn(
                "No backend was added via i18next.use. Will not load resources."
              ),
              r && r()
            );
          "string" === typeof e &&
            (e = this.languageUtils.toResolveHierarchy(e)),
            "string" === typeof t && (t = [t]);
          const o = this.queueLoad(e, t, n, r);
          if (!o.toLoad.length) return o.pending.length || r(), null;
          o.toLoad.forEach((e) => {
            this.loadOne(e);
          });
        }
        load(e, t, n) {
          this.prepareLoading(e, t, {}, n);
        }
        reload(e, t, n) {
          this.prepareLoading(e, t, { reload: !0 }, n);
        }
        loadOne(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          const n = e.split("|"),
            r = n[0],
            o = n[1];
          this.read(r, o, "read", void 0, void 0, (n, a) => {
            n &&
              this.logger.warn(
                ""
                  .concat(t, "loading namespace ")
                  .concat(o, " for language ")
                  .concat(r, " failed"),
                n
              ),
              !n &&
                a &&
                this.logger.log(
                  ""
                    .concat(t, "loaded namespace ")
                    .concat(o, " for language ")
                    .concat(r),
                  a
                ),
              this.loaded(e, n, a);
          });
        }
        saveMissing(e, t, n, r, o) {
          let a =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : {},
            i =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : () => {};
          if (
            this.services.utils &&
            this.services.utils.hasLoadedNamespace &&
            !this.services.utils.hasLoadedNamespace(t)
          )
            this.logger.warn(
              'did not save key "'
                .concat(n, '" as the namespace "')
                .concat(t, '" was not yet loaded'),
              "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
            );
          else if (void 0 !== n && null !== n && "" !== n) {
            if (this.backend && this.backend.create) {
              const l = { ...a, isUpdate: o },
                u = this.backend.create.bind(this.backend);
              if (u.length < 6)
                try {
                  let o;
                  (o = 5 === u.length ? u(e, t, n, r, l) : u(e, t, n, r)),
                    o && "function" === typeof o.then
                      ? o.then((e) => i(null, e)).catch(i)
                      : i(null, o);
                } catch (s) {
                  i(s);
                }
              else u(e, t, n, r, i, l);
            }
            e && e[0] && this.store.addResource(e[0], t, n, r);
          }
        }
      }
      function Ko() {
        return {
          debug: !1,
          initImmediate: !0,
          ns: ["translation"],
          defaultNS: ["translation"],
          fallbackLng: ["dev"],
          fallbackNS: !1,
          supportedLngs: !1,
          nonExplicitSupportedLngs: !1,
          load: "all",
          preload: !1,
          simplifyPluralSuffix: !0,
          keySeparator: ".",
          nsSeparator: ":",
          pluralSeparator: "_",
          contextSeparator: "_",
          partialBundledLanguages: !1,
          saveMissing: !1,
          updateMissing: !1,
          saveMissingTo: "fallback",
          saveMissingPlurals: !0,
          missingKeyHandler: !1,
          missingInterpolationHandler: !1,
          postProcess: !1,
          postProcessPassResolved: !1,
          returnNull: !1,
          returnEmptyString: !0,
          returnObjects: !1,
          joinArrays: !1,
          returnedObjectHandler: !1,
          parseMissingKeyHandler: !1,
          appendNamespaceToMissingKey: !1,
          appendNamespaceToCIMode: !1,
          overloadTranslationOptionHandler: function (e) {
            let t = {};
            if (
              ("object" === typeof e[1] && (t = e[1]),
              "string" === typeof e[1] && (t.defaultValue = e[1]),
              "string" === typeof e[2] && (t.tDescription = e[2]),
              "object" === typeof e[2] || "object" === typeof e[3])
            ) {
              const n = e[3] || e[2];
              Object.keys(n).forEach((e) => {
                t[e] = n[e];
              });
            }
            return t;
          },
          interpolation: {
            escapeValue: !0,
            format: (e) => e,
            prefix: "{{",
            suffix: "}}",
            formatSeparator: ",",
            unescapePrefix: "-",
            nestingPrefix: "$t(",
            nestingSuffix: ")",
            nestingOptionsSeparator: ",",
            maxReplaces: 1e3,
            skipOnVariables: !0,
          },
        };
      }
      function qo(e) {
        return (
          "string" === typeof e.ns && (e.ns = [e.ns]),
          "string" === typeof e.fallbackLng &&
            (e.fallbackLng = [e.fallbackLng]),
          "string" === typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
          e.supportedLngs &&
            e.supportedLngs.indexOf("cimode") < 0 &&
            (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
          e
        );
      }
      function Qo() {}
      class Jo extends go {
        constructor() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          var n;
          if (
            (super(),
            (this.options = qo(e)),
            (this.services = {}),
            (this.logger = ho),
            (this.modules = { external: [] }),
            (n = this),
            Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach(
              (e) => {
                "function" === typeof n[e] && (n[e] = n[e].bind(n));
              }
            ),
            t && !this.isInitialized && !e.isClone)
          ) {
            if (!this.options.initImmediate) return this.init(e, t), this;
            setTimeout(() => {
              this.init(e, t);
            }, 0);
          }
        }
        init() {
          var e = this;
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = arguments.length > 1 ? arguments[1] : void 0;
          "function" === typeof t && ((n = t), (t = {})),
            !t.defaultNS &&
              !1 !== t.defaultNS &&
              t.ns &&
              ("string" === typeof t.ns
                ? (t.defaultNS = t.ns)
                : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
          const r = Ko();
          function o(e) {
            return e ? ("function" === typeof e ? new e() : e) : null;
          }
          if (
            ((this.options = { ...r, ...this.options, ...qo(t) }),
            "v1" !== this.options.compatibilityAPI &&
              (this.options.interpolation = {
                ...r.interpolation,
                ...this.options.interpolation,
              }),
            void 0 !== t.keySeparator &&
              (this.options.userDefinedKeySeparator = t.keySeparator),
            void 0 !== t.nsSeparator &&
              (this.options.userDefinedNsSeparator = t.nsSeparator),
            !this.options.isClone)
          ) {
            let t;
            this.modules.logger
              ? ho.init(o(this.modules.logger), this.options)
              : ho.init(null, this.options),
              this.modules.formatter
                ? (t = this.modules.formatter)
                : "undefined" !== typeof Intl && (t = Wo);
            const n = new Io(this.options);
            this.store = new Lo(this.options.resources, this.options);
            const a = this.services;
            (a.logger = ho),
              (a.resourceStore = this.store),
              (a.languageUtils = n),
              (a.pluralResolver = new Uo(n, {
                prepend: this.options.pluralSeparator,
                compatibilityJSON: this.options.compatibilityJSON,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix,
              })),
              !t ||
                (this.options.interpolation.format &&
                  this.options.interpolation.format !==
                    r.interpolation.format) ||
                ((a.formatter = o(t)),
                a.formatter.init(a, this.options),
                (this.options.interpolation.format = a.formatter.format.bind(
                  a.formatter
                ))),
              (a.interpolator = new Zo(this.options)),
              (a.utils = {
                hasLoadedNamespace: this.hasLoadedNamespace.bind(this),
              }),
              (a.backendConnector = new $o(
                o(this.modules.backend),
                a.resourceStore,
                a,
                this.options
              )),
              a.backendConnector.on("*", function (t) {
                for (
                  var n = arguments.length,
                    r = new Array(n > 1 ? n - 1 : 0),
                    o = 1;
                  o < n;
                  o++
                )
                  r[o - 1] = arguments[o];
                e.emit(t, ...r);
              }),
              this.modules.languageDetector &&
                ((a.languageDetector = o(this.modules.languageDetector)),
                a.languageDetector.init &&
                  a.languageDetector.init(
                    a,
                    this.options.detection,
                    this.options
                  )),
              this.modules.i18nFormat &&
                ((a.i18nFormat = o(this.modules.i18nFormat)),
                a.i18nFormat.init && a.i18nFormat.init(this)),
              (this.translator = new jo(this.services, this.options)),
              this.translator.on("*", function (t) {
                for (
                  var n = arguments.length,
                    r = new Array(n > 1 ? n - 1 : 0),
                    o = 1;
                  o < n;
                  o++
                )
                  r[o - 1] = arguments[o];
                e.emit(t, ...r);
              }),
              this.modules.external.forEach((e) => {
                e.init && e.init(this);
              });
          }
          if (
            ((this.format = this.options.interpolation.format),
            n || (n = Qo),
            this.options.fallbackLng &&
              !this.services.languageDetector &&
              !this.options.lng)
          ) {
            const e = this.services.languageUtils.getFallbackCodes(
              this.options.fallbackLng
            );
            e.length > 0 && "dev" !== e[0] && (this.options.lng = e[0]);
          }
          this.services.languageDetector ||
            this.options.lng ||
            this.logger.warn(
              "init: no languageDetector is used and no lng is defined"
            );
          [
            "getResource",
            "hasResourceBundle",
            "getResourceBundle",
            "getDataByLanguage",
          ].forEach((t) => {
            this[t] = function () {
              return e.store[t](...arguments);
            };
          });
          [
            "addResource",
            "addResources",
            "addResourceBundle",
            "removeResourceBundle",
          ].forEach((t) => {
            this[t] = function () {
              return e.store[t](...arguments), e;
            };
          });
          const a = mo(),
            i = () => {
              const e = (e, t) => {
                this.isInitialized &&
                  !this.initializedStoreOnce &&
                  this.logger.warn(
                    "init: i18next is already initialized. You should call init just once!"
                  ),
                  (this.isInitialized = !0),
                  this.options.isClone ||
                    this.logger.log("initialized", this.options),
                  this.emit("initialized", this.options),
                  a.resolve(t),
                  n(e, t);
              };
              if (
                this.languages &&
                "v1" !== this.options.compatibilityAPI &&
                !this.isInitialized
              )
                return e(null, this.t.bind(this));
              this.changeLanguage(this.options.lng, e);
            };
          return (
            this.options.resources || !this.options.initImmediate
              ? i()
              : setTimeout(i, 0),
            a
          );
        }
        loadResources(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Qo;
          const n = "string" === typeof e ? e : this.language;
          if (
            ("function" === typeof e && (t = e),
            !this.options.resources || this.options.partialBundledLanguages)
          ) {
            if (
              n &&
              "cimode" === n.toLowerCase() &&
              (!this.options.preload || 0 === this.options.preload.length)
            )
              return t();
            const e = [],
              r = (t) => {
                if (!t) return;
                if ("cimode" === t) return;
                this.services.languageUtils
                  .toResolveHierarchy(t)
                  .forEach((t) => {
                    "cimode" !== t && e.indexOf(t) < 0 && e.push(t);
                  });
              };
            if (n) r(n);
            else {
              this.services.languageUtils
                .getFallbackCodes(this.options.fallbackLng)
                .forEach((e) => r(e));
            }
            this.options.preload && this.options.preload.forEach((e) => r(e)),
              this.services.backendConnector.load(e, this.options.ns, (e) => {
                e ||
                  this.resolvedLanguage ||
                  !this.language ||
                  this.setResolvedLanguage(this.language),
                  t(e);
              });
          } else t(null);
        }
        reloadResources(e, t, n) {
          const r = mo();
          return (
            e || (e = this.languages),
            t || (t = this.options.ns),
            n || (n = Qo),
            this.services.backendConnector.reload(e, t, (e) => {
              r.resolve(), n(e);
            }),
            r
          );
        }
        use(e) {
          if (!e)
            throw new Error(
              "You are passing an undefined module! Please check the object you are passing to i18next.use()"
            );
          if (!e.type)
            throw new Error(
              "You are passing a wrong module! Please check the object you are passing to i18next.use()"
            );
          return (
            "backend" === e.type && (this.modules.backend = e),
            ("logger" === e.type || (e.log && e.warn && e.error)) &&
              (this.modules.logger = e),
            "languageDetector" === e.type &&
              (this.modules.languageDetector = e),
            "i18nFormat" === e.type && (this.modules.i18nFormat = e),
            "postProcessor" === e.type && To.addPostProcessor(e),
            "formatter" === e.type && (this.modules.formatter = e),
            "3rdParty" === e.type && this.modules.external.push(e),
            this
          );
        }
        setResolvedLanguage(e) {
          if (e && this.languages && !(["cimode", "dev"].indexOf(e) > -1))
            for (let t = 0; t < this.languages.length; t++) {
              const e = this.languages[t];
              if (
                !(["cimode", "dev"].indexOf(e) > -1) &&
                this.store.hasLanguageSomeTranslations(e)
              ) {
                this.resolvedLanguage = e;
                break;
              }
            }
        }
        changeLanguage(e, t) {
          var n = this;
          this.isLanguageChangingTo = e;
          const r = mo();
          this.emit("languageChanging", e);
          const o = (e) => {
              (this.language = e),
                (this.languages =
                  this.services.languageUtils.toResolveHierarchy(e)),
                (this.resolvedLanguage = void 0),
                this.setResolvedLanguage(e);
            },
            a = (e, a) => {
              a
                ? (o(a),
                  this.translator.changeLanguage(a),
                  (this.isLanguageChangingTo = void 0),
                  this.emit("languageChanged", a),
                  this.logger.log("languageChanged", a))
                : (this.isLanguageChangingTo = void 0),
                r.resolve(function () {
                  return n.t(...arguments);
                }),
                t &&
                  t(e, function () {
                    return n.t(...arguments);
                  });
            },
            i = (t) => {
              e || t || !this.services.languageDetector || (t = []);
              const n =
                "string" === typeof t
                  ? t
                  : this.services.languageUtils.getBestMatchFromCodes(t);
              n &&
                (this.language || o(n),
                this.translator.language || this.translator.changeLanguage(n),
                this.services.languageDetector &&
                  this.services.languageDetector.cacheUserLanguage &&
                  this.services.languageDetector.cacheUserLanguage(n)),
                this.loadResources(n, (e) => {
                  a(e, n);
                });
            };
          return (
            e ||
            !this.services.languageDetector ||
            this.services.languageDetector.async
              ? !e &&
                this.services.languageDetector &&
                this.services.languageDetector.async
                ? 0 === this.services.languageDetector.detect.length
                  ? this.services.languageDetector.detect().then(i)
                  : this.services.languageDetector.detect(i)
                : i(e)
              : i(this.services.languageDetector.detect()),
            r
          );
        }
        getFixedT(e, t, n) {
          var r = this;
          const o = function (e, t) {
            let a;
            if ("object" !== typeof t) {
              for (
                var i = arguments.length,
                  s = new Array(i > 2 ? i - 2 : 0),
                  l = 2;
                l < i;
                l++
              )
                s[l - 2] = arguments[l];
              a = r.options.overloadTranslationOptionHandler([e, t].concat(s));
            } else a = { ...t };
            (a.lng = a.lng || o.lng),
              (a.lngs = a.lngs || o.lngs),
              (a.ns = a.ns || o.ns),
              (a.keyPrefix = a.keyPrefix || n || o.keyPrefix);
            const u = r.options.keySeparator || ".";
            let c;
            return (
              (c =
                a.keyPrefix && Array.isArray(e)
                  ? e.map((e) => "".concat(a.keyPrefix).concat(u).concat(e))
                  : a.keyPrefix
                  ? "".concat(a.keyPrefix).concat(u).concat(e)
                  : e),
              r.t(c, a)
            );
          };
          return (
            "string" === typeof e ? (o.lng = e) : (o.lngs = e),
            (o.ns = t),
            (o.keyPrefix = n),
            o
          );
        }
        t() {
          return this.translator && this.translator.translate(...arguments);
        }
        exists() {
          return this.translator && this.translator.exists(...arguments);
        }
        setDefaultNamespace(e) {
          this.options.defaultNS = e;
        }
        hasLoadedNamespace(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (!this.isInitialized)
            return (
              this.logger.warn(
                "hasLoadedNamespace: i18next was not initialized",
                this.languages
              ),
              !1
            );
          if (!this.languages || !this.languages.length)
            return (
              this.logger.warn(
                "hasLoadedNamespace: i18n.languages were undefined or empty",
                this.languages
              ),
              !1
            );
          const n = t.lng || this.resolvedLanguage || this.languages[0],
            r = !!this.options && this.options.fallbackLng,
            o = this.languages[this.languages.length - 1];
          if ("cimode" === n.toLowerCase()) return !0;
          const a = (e, t) => {
            const n =
              this.services.backendConnector.state["".concat(e, "|").concat(t)];
            return -1 === n || 2 === n;
          };
          if (t.precheck) {
            const e = t.precheck(this, a);
            if (void 0 !== e) return e;
          }
          return (
            !!this.hasResourceBundle(n, e) ||
            !(
              this.services.backendConnector.backend &&
              (!this.options.resources || this.options.partialBundledLanguages)
            ) ||
            !(!a(n, e) || (r && !a(o, e)))
          );
        }
        loadNamespaces(e, t) {
          const n = mo();
          return this.options.ns
            ? ("string" === typeof e && (e = [e]),
              e.forEach((e) => {
                this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
              }),
              this.loadResources((e) => {
                n.resolve(), t && t(e);
              }),
              n)
            : (t && t(), Promise.resolve());
        }
        loadLanguages(e, t) {
          const n = mo();
          "string" === typeof e && (e = [e]);
          const r = this.options.preload || [],
            o = e.filter((e) => r.indexOf(e) < 0);
          return o.length
            ? ((this.options.preload = r.concat(o)),
              this.loadResources((e) => {
                n.resolve(), t && t(e);
              }),
              n)
            : (t && t(), Promise.resolve());
        }
        dir(e) {
          if (
            (e ||
              (e =
                this.resolvedLanguage ||
                (this.languages && this.languages.length > 0
                  ? this.languages[0]
                  : this.language)),
            !e)
          )
            return "rtl";
          const t =
            (this.services && this.services.languageUtils) || new Io(Ko());
          return [
            "ar",
            "shu",
            "sqr",
            "ssh",
            "xaa",
            "yhd",
            "yud",
            "aao",
            "abh",
            "abv",
            "acm",
            "acq",
            "acw",
            "acx",
            "acy",
            "adf",
            "ads",
            "aeb",
            "aec",
            "afb",
            "ajp",
            "apc",
            "apd",
            "arb",
            "arq",
            "ars",
            "ary",
            "arz",
            "auz",
            "avl",
            "ayh",
            "ayl",
            "ayn",
            "ayp",
            "bbz",
            "pga",
            "he",
            "iw",
            "ps",
            "pbt",
            "pbu",
            "pst",
            "prp",
            "prd",
            "ug",
            "ur",
            "ydd",
            "yds",
            "yih",
            "ji",
            "yi",
            "hbo",
            "men",
            "xmn",
            "fa",
            "jpr",
            "peo",
            "pes",
            "prs",
            "dv",
            "sam",
            "ckb",
          ].indexOf(t.getLanguagePartFromCode(e)) > -1 ||
            e.toLowerCase().indexOf("-arab") > 1
            ? "rtl"
            : "ltr";
        }
        static createInstance() {
          return new Jo(
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            arguments.length > 1 ? arguments[1] : void 0
          );
        }
        cloneInstance() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : Qo;
          const n = e.forkResourceStore;
          n && delete e.forkResourceStore;
          const r = { ...this.options, ...e, isClone: !0 },
            o = new Jo(r);
          (void 0 === e.debug && void 0 === e.prefix) ||
            (o.logger = o.logger.clone(e));
          return (
            ["store", "services", "language"].forEach((e) => {
              o[e] = this[e];
            }),
            (o.services = { ...this.services }),
            (o.services.utils = {
              hasLoadedNamespace: o.hasLoadedNamespace.bind(o),
            }),
            n &&
              ((o.store = new Lo(this.store.data, r)),
              (o.services.resourceStore = o.store)),
            (o.translator = new jo(o.services, r)),
            o.translator.on("*", function (e) {
              for (
                var t = arguments.length,
                  n = new Array(t > 1 ? t - 1 : 0),
                  r = 1;
                r < t;
                r++
              )
                n[r - 1] = arguments[r];
              o.emit(e, ...n);
            }),
            o.init(r, t),
            (o.translator.options = r),
            (o.translator.backendConnector.services.utils = {
              hasLoadedNamespace: o.hasLoadedNamespace.bind(o),
            }),
            o
          );
        }
        toJSON() {
          return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage,
          };
        }
      }
      const Go = Jo.createInstance();
      Go.createInstance = Jo.createInstance;
      Go.createInstance,
        Go.dir,
        Go.init,
        Go.loadResources,
        Go.reloadResources,
        Go.use,
        Go.changeLanguage,
        Go.getFixedT,
        Go.t,
        Go.exists,
        Go.setDefaultNamespace,
        Go.hasLoadedNamespace,
        Go.loadNamespaces,
        Go.loadLanguages;
      function Yo(e) {
        return (
          (Yo =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Yo(e)
        );
      }
      function Xo() {
        return (
          "function" === typeof XMLHttpRequest ||
          "object" ===
            ("undefined" === typeof XMLHttpRequest
              ? "undefined"
              : Yo(XMLHttpRequest))
        );
      }
      const ea = n.p + "static/media/getFetch.40f37ddea2378391108f.cjs";
      var ta,
        na,
        ra,
        oa = n.t(ea);
      function aa(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ia(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? aa(Object(n), !0).forEach(function (t) {
                sa(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : aa(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function sa(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" !== la(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" !== la(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" === la(t) ? t : String(t);
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function la(e) {
        return (
          (la =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          la(e)
        );
      }
      "function" === typeof fetch &&
        (ta =
          "undefined" !== typeof global && global.fetch
            ? global.fetch
            : "undefined" !== typeof window && window.fetch
            ? window.fetch
            : fetch),
        Xo() &&
          ("undefined" !== typeof global && global.XMLHttpRequest
            ? (na = global.XMLHttpRequest)
            : "undefined" !== typeof window &&
              window.XMLHttpRequest &&
              (na = window.XMLHttpRequest)),
        "function" === typeof ActiveXObject &&
          ("undefined" !== typeof global && global.ActiveXObject
            ? (ra = global.ActiveXObject)
            : "undefined" !== typeof window &&
              window.ActiveXObject &&
              (ra = window.ActiveXObject)),
        ta || !oa || na || ra || (ta = ea || oa),
        "function" !== typeof ta && (ta = void 0);
      var ua = function (e, t) {
          if (t && "object" === la(t)) {
            var n = "";
            for (var r in t)
              n += "&" + encodeURIComponent(r) + "=" + encodeURIComponent(t[r]);
            if (!n) return e;
            e = e + (-1 !== e.indexOf("?") ? "&" : "?") + n.slice(1);
          }
          return e;
        },
        ca = function (e, t, n) {
          var r = function (e) {
            if (!e.ok) return n(e.statusText || "Error", { status: e.status });
            e.text()
              .then(function (t) {
                n(null, { status: e.status, data: t });
              })
              .catch(n);
          };
          "function" === typeof fetch
            ? fetch(e, t).then(r).catch(n)
            : ta(e, t).then(r).catch(n);
        },
        da = !1;
      const fa = function (e, t, n, r) {
        return (
          "function" === typeof n && ((r = n), (n = void 0)),
          (r = r || function () {}),
          ta && 0 !== t.indexOf("file:")
            ? (function (e, t, n, r) {
                e.queryStringParams && (t = ua(t, e.queryStringParams));
                var o = ia(
                  {},
                  "function" === typeof e.customHeaders
                    ? e.customHeaders()
                    : e.customHeaders
                );
                "undefined" === typeof window &&
                  "undefined" !== typeof global &&
                  "undefined" !== typeof global.process &&
                  global.process.versions &&
                  global.process.versions.node &&
                  (o["User-Agent"] = "i18next-http-backend (node/"
                    .concat(global.process.version, "; ")
                    .concat(global.process.platform, " ")
                    .concat(global.process.arch, ")")),
                  n && (o["Content-Type"] = "application/json");
                var a =
                    "function" === typeof e.requestOptions
                      ? e.requestOptions(n)
                      : e.requestOptions,
                  i = ia(
                    {
                      method: n ? "POST" : "GET",
                      body: n ? e.stringify(n) : void 0,
                      headers: o,
                    },
                    da ? {} : a
                  );
                try {
                  ca(t, i, r);
                } catch (s) {
                  if (
                    !a ||
                    0 === Object.keys(a).length ||
                    !s.message ||
                    s.message.indexOf("not implemented") < 0
                  )
                    return r(s);
                  try {
                    Object.keys(a).forEach(function (e) {
                      delete i[e];
                    }),
                      ca(t, i, r),
                      (da = !0);
                  } catch (l) {
                    r(l);
                  }
                }
              })(e, t, n, r)
            : Xo() || "function" === typeof ActiveXObject
            ? (function (e, t, n, r) {
                n && "object" === la(n) && (n = ua("", n).slice(1)),
                  e.queryStringParams && (t = ua(t, e.queryStringParams));
                try {
                  var o;
                  (o = na ? new na() : new ra("MSXML2.XMLHTTP.3.0")).open(
                    n ? "POST" : "GET",
                    t,
                    1
                  ),
                    e.crossDomain ||
                      o.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    (o.withCredentials = !!e.withCredentials),
                    n &&
                      o.setRequestHeader(
                        "Content-Type",
                        "application/x-www-form-urlencoded"
                      ),
                    o.overrideMimeType &&
                      o.overrideMimeType("application/json");
                  var a = e.customHeaders;
                  if ((a = "function" === typeof a ? a() : a))
                    for (var i in a) o.setRequestHeader(i, a[i]);
                  (o.onreadystatechange = function () {
                    o.readyState > 3 &&
                      r(o.status >= 400 ? o.statusText : null, {
                        status: o.status,
                        data: o.responseText,
                      });
                  }),
                    o.send(n);
                } catch (s) {
                  console && console.log(s);
                }
              })(e, t, n, r)
            : void r(new Error("No fetch and no xhr implementation found!"))
        );
      };
      function pa(e) {
        return (
          (pa =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          pa(e)
        );
      }
      function ha(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ga(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ha(Object(n), !0).forEach(function (t) {
                va(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ha(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function ma(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, ya(r.key), r);
        }
      }
      function va(e, t, n) {
        return (
          (t = ya(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function ya(e) {
        var t = (function (e, t) {
          if ("object" !== pa(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== pa(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === pa(t) ? t : String(t);
      }
      var ba = (function () {
        function e(t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.services = t),
            (this.options = n),
            (this.allOptions = r),
            (this.type = "backend"),
            this.init(t, n, r);
        }
        var t, n, r;
        return (
          (t = e),
          (n = [
            {
              key: "init",
              value: function (e) {
                var t = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                (this.services = e),
                  (this.options = ga(
                    ga(
                      ga(
                        {},
                        {
                          loadPath: "/locales/{{lng}}/{{ns}}.json",
                          addPath: "/locales/add/{{lng}}/{{ns}}",
                          parse: function (e) {
                            return JSON.parse(e);
                          },
                          stringify: JSON.stringify,
                          parsePayload: function (e, t, n) {
                            return va({}, t, n || "");
                          },
                          parseLoadPayload: function (e, t) {},
                          request: fa,
                          reloadInterval: "undefined" === typeof window && 36e5,
                          customHeaders: {},
                          queryStringParams: {},
                          crossDomain: !1,
                          withCredentials: !1,
                          overrideMimeType: !1,
                          requestOptions: {
                            mode: "cors",
                            credentials: "same-origin",
                            cache: "default",
                          },
                        }
                      ),
                      this.options || {}
                    ),
                    n
                  )),
                  (this.allOptions = r),
                  this.services &&
                    this.options.reloadInterval &&
                    setInterval(function () {
                      return t.reload();
                    }, this.options.reloadInterval);
              },
            },
            {
              key: "readMulti",
              value: function (e, t, n) {
                this._readAny(e, e, t, t, n);
              },
            },
            {
              key: "read",
              value: function (e, t, n) {
                this._readAny([e], e, [t], t, n);
              },
            },
            {
              key: "_readAny",
              value: function (e, t, n, r, o) {
                var a,
                  i = this,
                  s = this.options.loadPath;
                "function" === typeof this.options.loadPath &&
                  (s = this.options.loadPath(e, n)),
                  (s = (function (e) {
                    return !!e && "function" === typeof e.then;
                  })((a = s))
                    ? a
                    : Promise.resolve(a)).then(function (a) {
                    if (!a) return o(null, {});
                    var s = i.services.interpolator.interpolate(a, {
                      lng: e.join("+"),
                      ns: n.join("+"),
                    });
                    i.loadUrl(s, o, t, r);
                  });
              },
            },
            {
              key: "loadUrl",
              value: function (e, t, n, r) {
                var o = this,
                  a = "string" === typeof n ? [n] : n,
                  i = "string" === typeof r ? [r] : r,
                  s = this.options.parseLoadPayload(a, i);
                this.options.request(this.options, e, s, function (a, i) {
                  if (i && ((i.status >= 500 && i.status < 600) || !i.status))
                    return t(
                      "failed loading " + e + "; status code: " + i.status,
                      !0
                    );
                  if (i && i.status >= 400 && i.status < 500)
                    return t(
                      "failed loading " + e + "; status code: " + i.status,
                      !1
                    );
                  if (
                    !i &&
                    a &&
                    a.message &&
                    a.message.indexOf("Failed to fetch") > -1
                  )
                    return t("failed loading " + e + ": " + a.message, !0);
                  if (a) return t(a, !1);
                  var s, l;
                  try {
                    s =
                      "string" === typeof i.data
                        ? o.options.parse(i.data, n, r)
                        : i.data;
                  } catch (u) {
                    l = "failed parsing " + e + " to json";
                  }
                  if (l) return t(l, !1);
                  t(null, s);
                });
              },
            },
            {
              key: "create",
              value: function (e, t, n, r, o) {
                var a = this;
                if (this.options.addPath) {
                  "string" === typeof e && (e = [e]);
                  var i = this.options.parsePayload(t, n, r),
                    s = 0,
                    l = [],
                    u = [];
                  e.forEach(function (n) {
                    var r = a.options.addPath;
                    "function" === typeof a.options.addPath &&
                      (r = a.options.addPath(n, t));
                    var c = a.services.interpolator.interpolate(r, {
                      lng: n,
                      ns: t,
                    });
                    a.options.request(a.options, c, i, function (t, n) {
                      (s += 1),
                        l.push(t),
                        u.push(n),
                        s === e.length && "function" === typeof o && o(l, u);
                    });
                  });
                }
              },
            },
            {
              key: "reload",
              value: function () {
                var e = this,
                  t = this.services,
                  n = t.backendConnector,
                  r = t.languageUtils,
                  o = t.logger,
                  a = n.language;
                if (!a || "cimode" !== a.toLowerCase()) {
                  var i = [],
                    s = function (e) {
                      r.toResolveHierarchy(e).forEach(function (e) {
                        i.indexOf(e) < 0 && i.push(e);
                      });
                    };
                  s(a),
                    this.allOptions.preload &&
                      this.allOptions.preload.forEach(function (e) {
                        return s(e);
                      }),
                    i.forEach(function (t) {
                      e.allOptions.ns.forEach(function (e) {
                        n.read(t, e, "read", null, null, function (r, a) {
                          r &&
                            o.warn(
                              "loading namespace "
                                .concat(e, " for language ")
                                .concat(t, " failed"),
                              r
                            ),
                            !r &&
                              a &&
                              o.log(
                                "loaded namespace "
                                  .concat(e, " for language ")
                                  .concat(t),
                                a
                              ),
                            n.loaded("".concat(t, "|").concat(e), r, a);
                        });
                      });
                    });
                }
              },
            },
          ]),
          n && ma(t.prototype, n),
          r && ma(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e
        );
      })();
      ba.type = "backend";
      const wa = ba;
      function xa(e) {
        return (
          (xa =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          xa(e)
        );
      }
      function Sa(e) {
        var t = (function (e, t) {
          if ("object" != xa(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" != xa(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == xa(t) ? t : String(t);
      }
      function ka(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, Sa(r.key), r);
        }
      }
      var Ea = [],
        Ca = Ea.forEach,
        Oa = Ea.slice;
      var Pa = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
        Na = function (e, t, n, r) {
          var o =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : { path: "/", sameSite: "strict" };
          n &&
            ((o.expires = new Date()),
            o.expires.setTime(o.expires.getTime() + 60 * n * 1e3)),
            r && (o.domain = r),
            (document.cookie = (function (e, t, n) {
              var r = n || {};
              r.path = r.path || "/";
              var o = encodeURIComponent(t),
                a = "".concat(e, "=").concat(o);
              if (r.maxAge > 0) {
                var i = r.maxAge - 0;
                if (Number.isNaN(i))
                  throw new Error("maxAge should be a Number");
                a += "; Max-Age=".concat(Math.floor(i));
              }
              if (r.domain) {
                if (!Pa.test(r.domain))
                  throw new TypeError("option domain is invalid");
                a += "; Domain=".concat(r.domain);
              }
              if (r.path) {
                if (!Pa.test(r.path))
                  throw new TypeError("option path is invalid");
                a += "; Path=".concat(r.path);
              }
              if (r.expires) {
                if ("function" !== typeof r.expires.toUTCString)
                  throw new TypeError("option expires is invalid");
                a += "; Expires=".concat(r.expires.toUTCString());
              }
              if (
                (r.httpOnly && (a += "; HttpOnly"),
                r.secure && (a += "; Secure"),
                r.sameSite)
              )
                switch (
                  "string" === typeof r.sameSite
                    ? r.sameSite.toLowerCase()
                    : r.sameSite
                ) {
                  case !0:
                    a += "; SameSite=Strict";
                    break;
                  case "lax":
                    a += "; SameSite=Lax";
                    break;
                  case "strict":
                    a += "; SameSite=Strict";
                    break;
                  case "none":
                    a += "; SameSite=None";
                    break;
                  default:
                    throw new TypeError("option sameSite is invalid");
                }
              return a;
            })(e, encodeURIComponent(t), o));
        },
        _a = function (e) {
          for (
            var t = "".concat(e, "="), n = document.cookie.split(";"), r = 0;
            r < n.length;
            r++
          ) {
            for (var o = n[r]; " " === o.charAt(0); )
              o = o.substring(1, o.length);
            if (0 === o.indexOf(t)) return o.substring(t.length, o.length);
          }
          return null;
        },
        La = {
          name: "cookie",
          lookup: function (e) {
            var t;
            if (e.lookupCookie && "undefined" !== typeof document) {
              var n = _a(e.lookupCookie);
              n && (t = n);
            }
            return t;
          },
          cacheUserLanguage: function (e, t) {
            t.lookupCookie &&
              "undefined" !== typeof document &&
              Na(
                t.lookupCookie,
                e,
                t.cookieMinutes,
                t.cookieDomain,
                t.cookieOptions
              );
          },
        },
        Ta = {
          name: "querystring",
          lookup: function (e) {
            var t;
            if ("undefined" !== typeof window) {
              var n = window.location.search;
              !window.location.search &&
                window.location.hash &&
                window.location.hash.indexOf("?") > -1 &&
                (n = window.location.hash.substring(
                  window.location.hash.indexOf("?")
                ));
              for (
                var r = n.substring(1).split("&"), o = 0;
                o < r.length;
                o++
              ) {
                var a = r[o].indexOf("=");
                if (a > 0)
                  r[o].substring(0, a) === e.lookupQuerystring &&
                    (t = r[o].substring(a + 1));
              }
            }
            return t;
          },
        },
        Ra = null,
        ja = function () {
          if (null !== Ra) return Ra;
          try {
            Ra = "undefined" !== window && null !== window.localStorage;
            var e = "i18next.translate.boo";
            window.localStorage.setItem(e, "foo"),
              window.localStorage.removeItem(e);
          } catch (t) {
            Ra = !1;
          }
          return Ra;
        },
        Da = {
          name: "localStorage",
          lookup: function (e) {
            var t;
            if (e.lookupLocalStorage && ja()) {
              var n = window.localStorage.getItem(e.lookupLocalStorage);
              n && (t = n);
            }
            return t;
          },
          cacheUserLanguage: function (e, t) {
            t.lookupLocalStorage &&
              ja() &&
              window.localStorage.setItem(t.lookupLocalStorage, e);
          },
        },
        Ia = null,
        Aa = function () {
          if (null !== Ia) return Ia;
          try {
            Ia = "undefined" !== window && null !== window.sessionStorage;
            var e = "i18next.translate.boo";
            window.sessionStorage.setItem(e, "foo"),
              window.sessionStorage.removeItem(e);
          } catch (t) {
            Ia = !1;
          }
          return Ia;
        },
        Fa = {
          name: "sessionStorage",
          lookup: function (e) {
            var t;
            if (e.lookupSessionStorage && Aa()) {
              var n = window.sessionStorage.getItem(e.lookupSessionStorage);
              n && (t = n);
            }
            return t;
          },
          cacheUserLanguage: function (e, t) {
            t.lookupSessionStorage &&
              Aa() &&
              window.sessionStorage.setItem(t.lookupSessionStorage, e);
          },
        },
        Ma = {
          name: "navigator",
          lookup: function (e) {
            var t = [];
            if ("undefined" !== typeof navigator) {
              if (navigator.languages)
                for (var n = 0; n < navigator.languages.length; n++)
                  t.push(navigator.languages[n]);
              navigator.userLanguage && t.push(navigator.userLanguage),
                navigator.language && t.push(navigator.language);
            }
            return t.length > 0 ? t : void 0;
          },
        },
        za = {
          name: "htmlTag",
          lookup: function (e) {
            var t,
              n =
                e.htmlTag ||
                ("undefined" !== typeof document
                  ? document.documentElement
                  : null);
            return (
              n &&
                "function" === typeof n.getAttribute &&
                (t = n.getAttribute("lang")),
              t
            );
          },
        },
        Ba = {
          name: "path",
          lookup: function (e) {
            var t;
            if ("undefined" !== typeof window) {
              var n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
              if (n instanceof Array)
                if ("number" === typeof e.lookupFromPathIndex) {
                  if ("string" !== typeof n[e.lookupFromPathIndex]) return;
                  t = n[e.lookupFromPathIndex].replace("/", "");
                } else t = n[0].replace("/", "");
            }
            return t;
          },
        },
        Ua = {
          name: "subdomain",
          lookup: function (e) {
            var t =
                "number" === typeof e.lookupFromSubdomainIndex
                  ? e.lookupFromSubdomainIndex + 1
                  : 1,
              n =
                "undefined" !== typeof window &&
                window.location &&
                window.location.hostname &&
                window.location.hostname.match(
                  /^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i
                );
            if (n) return n[t];
          },
        };
      var Ha = (function () {
        function e(t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.type = "languageDetector"),
            (this.detectors = {}),
            this.init(t, n);
        }
        var t, n, r;
        return (
          (t = e),
          (n = [
            {
              key: "init",
              value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                (this.services = e || { languageUtils: {} }),
                  (this.options = (function (e) {
                    return (
                      Ca.call(Oa.call(arguments, 1), function (t) {
                        if (t)
                          for (var n in t) void 0 === e[n] && (e[n] = t[n]);
                      }),
                      e
                    );
                  })(t, this.options || {}, {
                    order: [
                      "querystring",
                      "cookie",
                      "localStorage",
                      "sessionStorage",
                      "navigator",
                      "htmlTag",
                    ],
                    lookupQuerystring: "lng",
                    lookupCookie: "i18next",
                    lookupLocalStorage: "i18nextLng",
                    lookupSessionStorage: "i18nextLng",
                    caches: ["localStorage"],
                    excludeCacheFor: ["cimode"],
                    convertDetectedLanguage: function (e) {
                      return e;
                    },
                  })),
                  "string" === typeof this.options.convertDetectedLanguage &&
                    this.options.convertDetectedLanguage.indexOf("15897") >
                      -1 &&
                    (this.options.convertDetectedLanguage = function (e) {
                      return e.replace("-", "_");
                    }),
                  this.options.lookupFromUrlIndex &&
                    (this.options.lookupFromPathIndex =
                      this.options.lookupFromUrlIndex),
                  (this.i18nOptions = n),
                  this.addDetector(La),
                  this.addDetector(Ta),
                  this.addDetector(Da),
                  this.addDetector(Fa),
                  this.addDetector(Ma),
                  this.addDetector(za),
                  this.addDetector(Ba),
                  this.addDetector(Ua);
              },
            },
            {
              key: "addDetector",
              value: function (e) {
                this.detectors[e.name] = e;
              },
            },
            {
              key: "detect",
              value: function (e) {
                var t = this;
                e || (e = this.options.order);
                var n = [];
                return (
                  e.forEach(function (e) {
                    if (t.detectors[e]) {
                      var r = t.detectors[e].lookup(t.options);
                      r && "string" === typeof r && (r = [r]),
                        r && (n = n.concat(r));
                    }
                  }),
                  (n = n.map(function (e) {
                    return t.options.convertDetectedLanguage(e);
                  })),
                  this.services.languageUtils.getBestMatchFromCodes
                    ? n
                    : n.length > 0
                    ? n[0]
                    : null
                );
              },
            },
            {
              key: "cacheUserLanguage",
              value: function (e, t) {
                var n = this;
                t || (t = this.options.caches),
                  t &&
                    ((this.options.excludeCacheFor &&
                      this.options.excludeCacheFor.indexOf(e) > -1) ||
                      t.forEach(function (t) {
                        n.detectors[t] &&
                          n.detectors[t].cacheUserLanguage(e, n.options);
                      }));
              },
            },
          ]),
          n && ka(t.prototype, n),
          r && ka(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e
        );
      })();
      Ha.type = "languageDetector";
      n(400);
      Object.create(null);
      const Za = {};
      function Va() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        ("string" === typeof t[0] && Za[t[0]]) ||
          ("string" === typeof t[0] && (Za[t[0]] = new Date()),
          (function () {
            if (console && console.warn) {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              "string" === typeof t[0] &&
                (t[0] = "react-i18next:: ".concat(t[0])),
                console.warn(...t);
            }
          })(...t));
      }
      const Wa = (e, t) => () => {
        if (e.isInitialized) t();
        else {
          const n = () => {
            setTimeout(() => {
              e.off("initialized", n);
            }, 0),
              t();
          };
          e.on("initialized", n);
        }
      };
      function $a(e, t, n) {
        e.loadNamespaces(t, Wa(e, n));
      }
      function Ka(e, t, n, r) {
        "string" === typeof n && (n = [n]),
          n.forEach((t) => {
            e.options.ns.indexOf(t) < 0 && e.options.ns.push(t);
          }),
          e.loadLanguages(t, Wa(e, r));
      }
      const qa =
          /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
        Qa = {
          "&amp;": "&",
          "&#38;": "&",
          "&lt;": "<",
          "&#60;": "<",
          "&gt;": ">",
          "&#62;": ">",
          "&apos;": "'",
          "&#39;": "'",
          "&quot;": '"',
          "&#34;": '"',
          "&nbsp;": " ",
          "&#160;": " ",
          "&copy;": "\xa9",
          "&#169;": "\xa9",
          "&reg;": "\xae",
          "&#174;": "\xae",
          "&hellip;": "\u2026",
          "&#8230;": "\u2026",
          "&#x2F;": "/",
          "&#47;": "/",
        },
        Ja = (e) => Qa[e];
      let Ga,
        Ya = {
          bindI18n: "languageChanged",
          bindI18nStore: "",
          transEmptyNodeValue: "",
          transSupportBasicHtmlNodes: !0,
          transWrapTextNodes: "",
          transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
          useSuspense: !0,
          unescape: (e) => e.replace(qa, Ja),
        };
      const Xa = {
          type: "3rdParty",
          init(e) {
            !(function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              Ya = { ...Ya, ...e };
            })(e.options.react),
              (function (e) {
                Ga = e;
              })(e);
          },
        },
        ei = (0, e.createContext)();
      class ti {
        constructor() {
          this.usedNamespaces = {};
        }
        addUsedNamespaces(e) {
          e.forEach((e) => {
            this.usedNamespaces[e] || (this.usedNamespaces[e] = !0);
          });
        }
        getUsedNamespaces() {
          return Object.keys(this.usedNamespaces);
        }
      }
      function ni(e, t, n, r) {
        return e.getFixedT(t, n, r);
      }
      function ri(t) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const { i18n: r } = n,
          { i18n: o, defaultNS: a } = (0, e.useContext)(ei) || {},
          i = r || o || Ga;
        if ((i && !i.reportNamespaces && (i.reportNamespaces = new ti()), !i)) {
          Va(
            "You will need to pass in an i18next instance by using initReactI18next"
          );
          const e = (e, t) =>
              "string" === typeof t
                ? t
                : t &&
                  "object" === typeof t &&
                  "string" === typeof t.defaultValue
                ? t.defaultValue
                : Array.isArray(e)
                ? e[e.length - 1]
                : e,
            t = [e, {}, !1];
          return (t.t = e), (t.i18n = {}), (t.ready = !1), t;
        }
        i.options.react &&
          void 0 !== i.options.react.wait &&
          Va(
            "It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour."
          );
        const s = { ...Ya, ...i.options.react, ...n },
          { useSuspense: l, keyPrefix: u } = s;
        let c = t || a || (i.options && i.options.defaultNS);
        (c = "string" === typeof c ? [c] : c || ["translation"]),
          i.reportNamespaces.addUsedNamespaces &&
            i.reportNamespaces.addUsedNamespaces(c);
        const d =
            (i.isInitialized || i.initializedStoreOnce) &&
            c.every((e) =>
              (function (e, t) {
                let n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                return t.languages && t.languages.length
                  ? void 0 !== t.options.ignoreJSONStructure
                    ? t.hasLoadedNamespace(e, {
                        lng: n.lng,
                        precheck: (t, r) => {
                          if (
                            n.bindI18n &&
                            n.bindI18n.indexOf("languageChanging") > -1 &&
                            t.services.backendConnector.backend &&
                            t.isLanguageChangingTo &&
                            !r(t.isLanguageChangingTo, e)
                          )
                            return !1;
                        },
                      })
                    : (function (e, t) {
                        let n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {};
                        const r = t.languages[0],
                          o = !!t.options && t.options.fallbackLng,
                          a = t.languages[t.languages.length - 1];
                        if ("cimode" === r.toLowerCase()) return !0;
                        const i = (e, n) => {
                          const r =
                            t.services.backendConnector.state[
                              "".concat(e, "|").concat(n)
                            ];
                          return -1 === r || 2 === r;
                        };
                        return (
                          !(
                            n.bindI18n &&
                            n.bindI18n.indexOf("languageChanging") > -1 &&
                            t.services.backendConnector.backend &&
                            t.isLanguageChangingTo &&
                            !i(t.isLanguageChangingTo, e)
                          ) &&
                          (!!t.hasResourceBundle(r, e) ||
                            !(
                              t.services.backendConnector.backend &&
                              (!t.options.resources ||
                                t.options.partialBundledLanguages)
                            ) ||
                            !(!i(r, e) || (o && !i(a, e))))
                        );
                      })(e, t, n)
                  : (Va("i18n.languages were undefined or empty", t.languages),
                    !0);
              })(e, i, s)
            ),
          f = (function (t, n, r, o) {
            return (0, e.useCallback)(ni(t, n, r, o), [t, n, r, o]);
          })(i, n.lng || null, "fallback" === s.nsMode ? c : c[0], u),
          p = () => f,
          h = () => ni(i, n.lng || null, "fallback" === s.nsMode ? c : c[0], u),
          [g, m] = (0, e.useState)(p);
        let v = c.join();
        n.lng && (v = "".concat(n.lng).concat(v));
        const y = ((t, n) => {
            const r = (0, e.useRef)();
            return (
              (0, e.useEffect)(() => {
                r.current = n ? r.current : t;
              }, [t, n]),
              r.current
            );
          })(v),
          b = (0, e.useRef)(!0);
        (0, e.useEffect)(() => {
          const { bindI18n: e, bindI18nStore: t } = s;
          function r() {
            b.current && m(h);
          }
          return (
            (b.current = !0),
            d ||
              l ||
              (n.lng
                ? Ka(i, n.lng, c, () => {
                    b.current && m(h);
                  })
                : $a(i, c, () => {
                    b.current && m(h);
                  })),
            d && y && y !== v && b.current && m(h),
            e && i && i.on(e, r),
            t && i && i.store.on(t, r),
            () => {
              (b.current = !1),
                e && i && e.split(" ").forEach((e) => i.off(e, r)),
                t && i && t.split(" ").forEach((e) => i.store.off(e, r));
            }
          );
        }, [i, v]);
        const w = (0, e.useRef)(!0);
        (0, e.useEffect)(() => {
          b.current && !w.current && m(p), (w.current = !1);
        }, [i, u]);
        const x = [g, i, d];
        if (((x.t = g), (x.i18n = i), (x.ready = d), d)) return x;
        if (!d && !l) return x;
        throw new Promise((e) => {
          n.lng ? Ka(i, n.lng, c, () => e()) : $a(i, c, () => e());
        });
      }
      Go.use(wa)
        .use(Ha)
        .use(Xa)
        .init({
          ns: ["policyList", "translation"],
          debug: !0,
          defaultNS: "policyList",
          backend: { loadPath: "/locales/{{lng}}/{{ns}}.json" },
          interpolation: { escapeValue: !1 },
        });
      const oi = Go;
      var ai = n(496);
      const ii = (e) =>
          (0, ai.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: 20,
            height: 20,
            fill: "none",
            ...e,
            children: (0, ai.jsx)("path", {
              stroke: "#60A5FA",
              strokeWidth: 1.5,
              d: "m10.4 16.8-2-1.5a1 1 0 0 1-.4-.8V11L3.293 6.293A1 1 0 0 1 3 5.586V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1.586a1 1 0 0 1-.293.707L12 11v5a1 1 0 0 1-1.6.8Z",
            }),
          }),
        si = (e) =>
          (0, ai.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: 138,
            height: 112,
            fill: "none",
            ...e,
            children: [
              (0, ai.jsx)("path", {
                fill: "#F8BFDB",
                d: "M19.327 82.888c.076-1.96.05-3.921-.081-5.877a75.131 75.131 0 0 0-1.842-11.989c-.515-2.217-1.147-4.397-1.808-6.576-.02-.067-.125-.048-.107.02 2.04 7.68 3.714 15.604 3.599 23.589-.033 2.229-.292 4.428-.503 6.649 0 .058.092.083.106.022.42-1.907.557-3.897.636-5.838Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#F8BFDB",
                d: "M15.489 58.456S12.4 66.3 13.09 68.136c.692 1.835 2.118 2.228 2.118 2.228s-1.89 2.7-.57 5.23c1.322 2.532 4.256 2.412 4.459 5.282-.006.014.156-11.985-3.61-22.42Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#F8BFDB",
                d: "M18.756 75.936a.057.057 0 0 0 0-.04A71.801 71.801 0 0 0 15.76 60.12c0-.015-.03-.01-.027 0a117.126 117.126 0 0 1 1.622 6.918 3.418 3.418 0 0 0-1.476-.823s-.016.012 0 .016c.581.213 1.103.56 1.524 1.014.09.456.178.91.262 1.365-.691-.772-1.648-1.155-2.607-1.52a.013.013 0 0 0-.005.005.012.012 0 0 0 0 .014.013.013 0 0 0 .005.004c1 .405 1.993.928 2.67 1.79a91.08 91.08 0 0 1 .62 3.916 3.735 3.735 0 0 0-1.843-1.055c-.022 0-.034.026-.012.032.723.213 1.368.631 1.857 1.204h.012c.06.46.119.92.174 1.384a4.737 4.737 0 0 0-1.29-.778c-.013 0-.021.014 0 .018.478.207.916.498 1.294.857h.016c.05.44.102.88.146 1.32a6.283 6.283 0 0 0-2.62-1.873.016.016 0 0 0-.011.005.016.016 0 0 0 0 .023 6.826 6.826 0 0 1 2.593 1.993.06.06 0 0 0 .065.02c.066.675.127 1.35.176 2.026 0 .01.016.01.016 0-.053-.68-.108-1.366-.166-2.059Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#F8BFDB",
                d: "M16.273 65.445a3.868 3.868 0 0 0-1.856-.58.012.012 0 0 0-.009.022 7.328 7.328 0 0 1 1.845.612c.024.005.043-.037.02-.054ZM16.648 73.746a3.861 3.861 0 0 0-1.394-.477c-.016 0-.018.023 0 .027.48.096.943.258 1.378.482.018.01.035-.022.016-.032ZM27.45 68.274a21.019 21.019 0 0 0-3.577 3.125 12.803 12.803 0 0 0-2.507 4.256 31.801 31.801 0 0 0-1.868 10.173c-.04 1.921.145 3.841.55 5.72a.055.055 0 0 0 .107-.02 32.138 32.138 0 0 1 .056-10c.531-3.243 1.364-6.773 3.427-9.41 1.123-1.436 2.523-2.565 3.907-3.732.073-.065-.02-.164-.095-.112Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#F8BFDB",
                d: "M19.952 83.489a19.249 19.249 0 0 1 2.606-3.332c1.546-1.546 2.847-2.644 3.05-3.665.202-1.022-1.549-1.776-1.549-1.776s2.138.385 2.724-.512c.586-.898.867-6.098.867-6.098s-3.89 2.778-5.704 6.673c-1.814 3.895-1.994 8.71-1.994 8.71Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#F8BFDB",
                d: "M26.254 72.983a3.416 3.416 0 0 0-.774-.026c-.03 0-.029.052 0 .054.255 0 .512-.012.768 0a.016.016 0 0 0 .011-.012v-.009a.017.017 0 0 0-.005-.007ZM23.46 78.025c-.411.008-.818.09-1.2.239v.018c.405-.095.796-.133 1.197-.202a.03.03 0 0 0 .002-.055ZM22.62 76.284a2.67 2.67 0 0 0-.508.044.016.016 0 0 0-.008.024.017.017 0 0 0 .008.007c.17.01.34.002.509-.022a.026.026 0 0 0 .018-.008.026.026 0 0 0 .008-.019.026.026 0 0 0-.008-.019.026.026 0 0 0-.018-.007ZM8.544 73.788a17.66 17.66 0 0 1 3.617 1.704c1.18.75 2.204 1.722 3.014 2.861a26.792 26.792 0 0 1 3.862 7.8c.477 1.547.77 3.144.876 4.759a.046.046 0 0 1-.075.026.047.047 0 0 1-.016-.026 26.994 26.994 0 0 0-2.355-8.08c-1.182-2.503-2.671-5.165-4.949-6.823-1.24-.902-2.634-1.494-4.024-2.118-.073-.024-.023-.128.05-.103Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#F8BFDB",
                d: "M18.13 84.367a16.262 16.262 0 0 0-2.88-2.093c-1.609-.894-2.916-1.482-3.315-2.262-.4-.78.843-1.793.843-1.793s-1.642.81-2.323.213c-.68-.598-2.111-4.732-2.111-4.732s3.791 1.347 6.156 4.081c2.365 2.734 3.63 6.586 3.63 6.586Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#F8BFDB",
                d: "M14.983 80.565a2.911 2.911 0 0 0-1.103.136v.016c.363-.062.73-.1 1.097-.113.026 0 .032-.037.006-.039ZM11.675 76.226a1.862 1.862 0 0 0-.508.029c-.018 0-.012.032 0 .03.168-.018.332-.012.498-.016.006 0 .01-.001.015-.005a.022.022 0 0 0 .006-.027.022.022 0 0 0-.01-.01Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#FD8DC4",
                d: "M23.02 96.14H14.46l1.22-8.939.313-2.292h5.493l.312 2.292 1.22 8.939Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#F8BFDB",
                d: "M21.8 87.201h-6.118l.312-2.292h5.494l.312 2.292Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#F8BFDB",
                d: "M22.272 84.115h-7.064v1.942h7.064v-1.942Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#EFE6D0",
                d: "M68.529 111.803c37.847 0 68.528-3.362 68.528-7.509s-30.681-7.51-68.528-7.51C30.68 96.785 0 100.148 0 104.295s30.681 7.509 68.529 7.509Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#263238",
                d: "m90.18 80.438-.07-.333c.217-.047.43-.097.644-.154l.083.334c-.227.057-.437.107-.657.153Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#72B35A",
                d: "m92.13 79.902-.108-.314c.417-.143.835-.3 1.238-.47l.13.307c-.41.173-.834.333-1.26.477Zm2.485-1.065-.15-.294c.39-.203.781-.423 1.152-.667l.173.284c-.38.263-.777.487-1.175.677Zm2.297-1.412-.197-.27c.36-.264.707-.54 1.034-.824l.22.25c-.35.304-.684.587-1.06.858l.003-.013Zm2.035-1.775-.243-.23c.307-.334.597-.668.864-1.002l.264.204c-.277.367-.574.71-.878 1.041l-.007-.013Zm1.652-2.136-.283-.177c.23-.373.436-.76.614-1.161l.307.137c-.189.417-.403.823-.641 1.214l.003-.013Zm1.105-2.476-.334-.094c.122-.419.213-.846.271-1.278l.333.043a8.52 8.52 0 0 1-.273 1.342l.003-.013Zm.37-2.67h-.333v-.097c0-.404-.024-.814-.064-1.218l.334-.034c.044.416.066.834.067 1.252l-.004.097Zm-.6-2.613c-.09-.43-.201-.856-.334-1.275l.334-.1c.137.434.253.874.334 1.305l-.334.07Zm-.791-2.513a13.38 13.38 0 0 0-.548-1.205l.301-.15c.203.413.39.827.554 1.228l-.307.127Zm-1.168-2.38a72.906 72.906 0 0 0-.668-1.141l.284-.177c.244.397.474.784.667 1.155l-.283.163Zm-1.395-2.266c-.244-.367-.49-.738-.745-1.108l.277-.187c.254.37.501.74.745 1.115l-.277.18Zm-1.502-2.21c-.25-.367-.504-.737-.751-1.104l.277-.187c.247.367.497.738.747 1.101l-.273.19Zm-1.492-2.222c-.244-.374-.48-.754-.714-1.135l.283-.173c.234.38.471.754.711 1.128l-.28.18Zm-1.392-2.293a26.028 26.028 0 0 1-.627-1.188l.3-.15c.187.38.397.774.618 1.175l-.29.163Zm-1.184-2.403a22.383 22.383 0 0 1-.481-1.255l.334-.107c.14.404.297.822.47 1.232l-.323.13Zm-.868-2.546c-.11-.434-.207-.878-.28-1.335l.333-.054c.074.428.164.861.274 1.289l-.327.1Zm-.447-2.67a15.33 15.33 0 0 1-.05-1.238v-.11h.333v.106c0 .404 0 .811.05 1.212l-.333.03Zm.333-2.67-.333-.034c0-.09.016-.183.026-.28.04-.357.09-.714.15-1.054l.334.056c-.056.334-.107.684-.147 1.035a.687.687 0 0 1-.013.287l-.017-.01Zm.464-2.597-.334-.09c.124-.44.268-.87.428-1.281l.31.12c-.152.413-.28.834-.387 1.261l-.017-.01Zm16.631-1.945c-.187 0-.381-.027-.571-.054a15.24 15.24 0 0 1-.778-.13l.067-.334c.247.047.504.09.758.127.18.023.363.04.54.05l-.016.34Zm1.371-.104-.07-.334c.419-.086.82-.242 1.188-.46l.174.284c-.393.243-.824.419-1.275.52l-.017-.01Zm-17.04-.397-.298-.157c.213-.398.448-.783.705-1.155l.273.19c-.244.364-.465.742-.664 1.132l-.017-.01Zm13.015-.02a12.853 12.853 0 0 1-1.268-.477l.137-.307c.401.178.812.333 1.231.464l-.1.32Zm6.341-1.041-.277-.187c.238-.345.379-.747.408-1.165l.333.024a2.665 2.665 0 0 1-.454 1.338l-.01-.01Zm-8.81-.05a12.17 12.17 0 0 1-1.132-.745l.197-.267c.354.261.721.502 1.101.721l-.166.29Zm-9.045-1.042-.247-.223c.302-.336.624-.654.965-.951l.22.25c-.327.293-.637.605-.928.934l-.01-.01Zm6.872-.564c-.332-.306-.648-.63-.945-.97l.251-.221c.289.331.595.646.918.944l-.224.247Zm10.863-.904a3.26 3.26 0 0 0-.777-1.001l.22-.25c.354.306.646.68.858 1.097l-.301.154Zm-15.759-.264-.19-.273c.373-.255.76-.49 1.158-.704l.157.293c-.384.212-.756.444-1.115.694l-.01-.01Zm3.117-.867c-.127-.18-.25-.364-.367-.554l-.434.17-.127-.307.384-.154c-.06-.1-.12-.2-.177-.3l.29-.164c.067.117.134.234.204.334.187-.067.377-.13.57-.19l.098.334c-.164.05-.334.103-.488.16.104.163.21.334.334.477l-.287.194Zm10.79-.574a7.129 7.129 0 0 0-1.001-.408l-.221-.07.097-.333.227.073c.358.114.706.256 1.041.424l-.143.314Zm-9.071-.598-.07-.334c.43-.096.878-.176 1.335-.24l.05.334a20.4 20.4 0 0 0-1.305.25l-.01-.01Zm6.575-.18c-.418-.073-.858-.13-1.309-.17l.027-.334c.464.04.914.097 1.335.174l-.053.33Zm-3.955-.194-.024-.333c.398-.024.795-.037 1.189-.037h.163v.334h-.16c-.377.01-.771.02-1.158.046l-.01-.01Zm-5.64-.797c-.18-.407-.334-.831-.484-1.262l.333-.103c.14.42.297.834.471 1.231l-.32.134Zm-.845-2.563c-.1-.43-.183-.878-.247-1.335l.334-.047c.063.44.144.878.24 1.302l-.327.08Zm-.374-2.67c-.016-.3-.026-.608-.026-.915v-.434h.334v.428c0 .3 0 .604.023.894l-.33.027Zm.398-2.67-.334-.034c.046-.44.11-.89.187-1.335l.333.057c-.09.444-.153.871-.196 1.319l.01-.007Zm.457-2.607-.334-.08c.107-.43.23-.864.367-1.298l.334.103c-.15.438-.274.861-.377 1.282l.01-.007Zm.8-2.526-.31-.12c.164-.418.334-.835.538-1.239l.3.147c-.2.4-.377.808-.537 1.232l.01-.02Zm1.149-2.38-.29-.17c.226-.384.47-.768.724-1.135l.273.19c-.26.368-.497.742-.717 1.122l.01-.007Zm1.505-2.172-.26-.21c.28-.334.58-.688.891-1.002l.24.23a12.27 12.27 0 0 0-.881.988l.01-.006Zm1.816-1.923-.224-.247c.334-.297.667-.59 1.024-.874l.207.264c-.357.283-.697.574-1.017.864l.01-.007Zm2.072-1.648-.19-.277c.364-.25.744-.498 1.131-.731l.17.283c-.387.237-.747.481-1.121.731l.01-.006Zm2.266-1.379-.157-.293c.394-.21.801-.41 1.208-.598l.141.304c-.424.19-.815.39-1.202.594l.01-.007Zm2.413-1.108-.123-.313c.42-.164.844-.334 1.264-.458l.107.334c-.424.127-.844.28-1.258.444l.01-.007Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#263238",
                d: "m112.517 4.95-.083-.333c.413-.107.667-.154.667-.154l.06.334s-.24.05-.644.154Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#72B35A",
                d: "M118.418 2.796c-.852-2.637-6.552-1.689-5.44 1.759 1.111 3.447 6.291.88 5.44-1.76Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#EBEBEB",
                d: "M109.877 1.74c.044-1.158 1.652-2.049 3.928-1.638 2.277.41 4.416 1.945 4.416 1.945s-2.246 1.362-4.546 1.612c-2.299.25-3.841-.764-3.798-1.919Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#263238",
                d: "M118.221 2.043c-1.182 0-2.36-.033-3.538-.07a73.838 73.838 0 0 1-3.537-.19c1.181 0 2.362.03 3.54.066 1.179.037 2.36.097 3.535.194Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#263238",
                d: "M112.164.709c.67.32 1.303.716 1.885 1.178a8.908 8.908 0 0 1-.974-.534 9.44 9.44 0 0 1-.911-.644ZM115.257 1.93a10.85 10.85 0 0 1-1.952 1.261c.607-.49 1.264-.913 1.962-1.261h-.01ZM115.601 1.282c.336.162.631.4.861.694a2.411 2.411 0 0 1-.861-.694Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#EBEBEB",
                d: "M112.047 8.595c.71.915 2.536.695 4.141-.967 1.606-1.662 2.457-4.162 2.457-4.162s-2.63.2-4.636 1.335c-2.006 1.134-2.677 2.877-1.962 3.794Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#263238",
                d: "M118.644 3.473c-.961.667-1.895 1.408-2.833 2.126a67.205 67.205 0 0 0-2.753 2.222c.961-.667 1.895-1.405 2.83-2.122a78.36 78.36 0 0 0 2.756-2.226Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#263238",
                d: "M114.5 8.084a9.704 9.704 0 0 0 .837-2.056 9.261 9.261 0 0 0-.477 1.001 9.353 9.353 0 0 0-.36 1.055ZM116.308 5.293c-.781-.042-1.564 0-2.336.123.389.023.779.023 1.168 0 .392-.019.782-.06 1.168-.123ZM116.953 5.618a2.502 2.502 0 0 0 .293-1.071 2.48 2.48 0 0 0-.293 1.07Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#B1EB9B",
                d: "M118.418 2.798a1.003 1.003 0 0 1-1.201-1.409 1.006 1.006 0 0 1 .973-.541 1.002 1.002 0 0 1 .228 1.95Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#B1EB9B",
                d: "M119.032 4.696a1 1 0 1 1-.616-1.904 1 1 0 0 1 .616 1.904Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#E3F4DC",
                d: "m108.873 63.793-36.753-7.45 9.563-47.178 27.292 5.53 7.639 10.91-7.741 38.188Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#8CBA78",
                d: "m108.976 14.694 7.639 10.91-9.465-1.918 1.826-8.992ZM88.44 51.298l.138-1.086c.217-2.267 1.46-4.535 4.026-6.567 2.307-1.8 3.661-3.165 4.049-5.024.436-2.094-.585-3.764-3.162-4.344a7.446 7.446 0 0 0-4.411.408l-.445-2.79c1.57-.702 4.034-.871 6.209-.41 4.72.989 6.246 4.348 5.6 7.468-.582 2.791-2.56 4.476-5.02 6.405-2.253 1.756-3.284 3.425-3.599 5.541l-.181 1.078-3.205-.679Zm-2.104 5.555c.317-1.518 1.565-2.372 3-2.07 1.437.302 2.202 1.571 1.884 3.093-.301 1.436-1.474 2.344-2.993 2.027-1.45-.302-2.203-1.616-1.904-3.053l.013.003Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#BBE7AC",
                d: "m23.188 39.355-3.764-1.705L18.9 38.8a1.002 1.002 0 0 1-.858.574 4.84 4.84 0 0 0-.617.06 1.001 1.001 0 0 1-.951-.393l-.738-1.032-3.36 2.41.737 1.031a1.001 1.001 0 0 1 .067 1.025c-.096.183-.181.372-.258.564a1 1 0 0 1-.817.63l-1.258.124.404 4.115 1.264-.127a1.002 1.002 0 0 1 .925.46c.053.088.11.171.17.254.06.084.12.164.184.244a.981.981 0 0 1 .14 1.018l-.527 1.161 3.767 1.71.524-1.159a1 1 0 0 1 .861-.57 5.41 5.41 0 0 0 .611-.06 1.001 1.001 0 0 1 .951.393l.738 1.031 3.364-2.41-.738-1.03a.972.972 0 0 1-.066-1.025c.093-.183.176-.37.25-.56a.98.98 0 0 1 .818-.631l1.265-.127-.408-4.115-1.265.123a.98.98 0 0 1-.917-.457 6.78 6.78 0 0 0-.357-.497 1 1 0 0 1-.14-1.025l.523-1.155Zm-2.136 3.808a3.387 3.387 0 1 1-5.506 3.946 3.387 3.387 0 0 1 5.506-3.946ZM30.804 27.016l-2.3 1.762.531.705a.668.668 0 0 1 .07.717c-.064.13-.12.264-.167.4a.684.684 0 0 1-.557.458l-.881.113.374 2.874.88-.114a.688.688 0 0 1 .668.3c.08.117.168.228.26.334a.668.668 0 0 1 .12.711l-.333.821 2.67 1.112.334-.821a.684.684 0 0 1 .59-.417l.214-.024.21-.033a.687.687 0 0 1 .668.25l.544.71 2.3-1.761-.538-.704a.688.688 0 0 1-.07-.721c.063-.13.119-.262.167-.397a.684.684 0 0 1 .557-.458l.881-.113-.374-2.874-.88.114a.687.687 0 0 1-.668-.297 2.981 2.981 0 0 0-.264-.334.692.692 0 0 1-.1-.697l.334-.821-2.67-1.112-.334.821a.692.692 0 0 1-.59.417l-.214.02-.197.007a.688.688 0 0 1-.668-.25l-.567-.698Zm1.645 2.58a2.372 2.372 0 1 1 .606 4.706 2.372 2.372 0 0 1-.606-4.706ZM113.438 82.083l-2.299 1.762.53.704a.666.666 0 0 1 .071.718c-.064.13-.12.264-.167.4a.68.68 0 0 1-.558.458l-.881.113.374 2.874.881-.114a.688.688 0 0 1 .668.3c.08.117.167.228.26.334a.664.664 0 0 1 .12.711l-.334.821 2.67 1.112.334-.821a.682.682 0 0 1 .591-.418l.213-.023.211-.033a.685.685 0 0 1 .667.25l.544.71 2.3-1.761-.538-.705a.688.688 0 0 1-.07-.72c.063-.13.119-.262.167-.397a.68.68 0 0 1 .557-.458l.881-.113-.373-2.874-.881.114a.689.689 0 0 1-.668-.297 2.872 2.872 0 0 0-.264-.334.691.691 0 0 1-.1-.698l.334-.82-2.67-1.112-.334.821a.69.69 0 0 1-.59.417l-.214.02-.197.007a.69.69 0 0 1-.667-.25l-.568-.698Zm1.646 2.58a2.373 2.373 0 1 1 .605 4.706 2.373 2.373 0 0 1-.605-4.706Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#fff",
                d: "M51.97 11.458a5.788 5.788 0 0 1-9.673 3.663l-2.897.425 1.45-2.504a5.789 5.789 0 1 1 11.12-1.584Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#263238",
                d: "M51.969 11.459a5.808 5.808 0 0 1-1.161 2.933c-.318.431-.702.81-1.136 1.122a5.635 5.635 0 0 1-1.394.778 5.699 5.699 0 0 1-2.362.388 5.158 5.158 0 0 1-.802-.083 5.844 5.844 0 0 1-2.864-1.415l.068.02-2.892.445-.212.032.107-.186 1.44-2.508v.1a5.847 5.847 0 0 1 .358-5.16 5.932 5.932 0 0 1 1.812-1.932 5.893 5.893 0 0 1 5.09-.697 5.93 5.93 0 0 1 2.231 1.37 5.807 5.807 0 0 1 1.717 4.793Zm0 0a5.726 5.726 0 0 0-6.564-6.272 5.663 5.663 0 0 0-2.39.943 5.967 5.967 0 0 0-1.733 1.89 5.719 5.719 0 0 0-.328 4.99l.021.051-.028.05-1.459 2.498-.102-.153 2.9-.406h.039l.027.025a5.705 5.705 0 0 0 2.774 1.42c.259.052.521.084.785.095.264.018.528.018.792 0a5.808 5.808 0 0 0 1.547-.342 5.443 5.443 0 0 0 1.394-.752 5.29 5.29 0 0 0 1.138-1.108 5.807 5.807 0 0 0 1.187-2.93Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#72B35A",
                d: "M43.381 13.557a.562.562 0 0 1 .567-.594.595.595 0 1 1-.224 1.145.562.562 0 0 1-.343-.55Zm.233-1.372-.135-4.609h.929l-.135 4.609h-.66ZM45.59 13.557a.56.56 0 0 1 .565-.594.594.594 0 1 1-.223 1.144.562.562 0 0 1-.341-.55Zm.233-1.372-.128-4.609h.93l-.135 4.609h-.667ZM47.797 13.557a.564.564 0 0 1 .567-.594.594.594 0 1 1-.224 1.145.563.563 0 0 1-.343-.55Zm.233-1.372-.135-4.609h.929l-.132 4.609h-.662Z",
              }),
              (0, ai.jsx)("rect", {
                width: 48.184,
                height: 76.552,
                x: 45.16,
                y: 14.288,
                fill: "#C0E7B1",
                stroke: "#B4D3A8",
                strokeWidth: 0.209,
                rx: 0.73,
              }),
              (0, ai.jsx)("path", {
                fill: "#384734",
                d: "M56.515 58.798a3.117 3.117 0 1 0 0-6.233 3.117 3.117 0 0 0 0 6.233ZM81.153 58.798a3.117 3.117 0 1 0 0-6.233 3.117 3.117 0 0 0 0 6.233ZM73.31 65.297l-.173-.327c-.014-.03-1.625-3.006-4.865-3.006-2.947 0-3.684 2.802-3.703 2.923l-.089.356-.714-.172.086-.359c0-.034.879-3.485 4.42-3.485 3.684 0 5.445 3.262 5.519 3.402l.172.324-.654.344Z",
                opacity: 0.7,
              }),
              (0, ai.jsx)("path", {
                fill: "#72B35A",
                d: "M62.483 43.055c0 .044-2.736.076-6.108.076-3.372 0-6.108-.032-6.108-.076s2.733-.076 6.108-.076c3.374 0 6.108.04 6.108.076ZM89.81 86.848c0 .044-2.736.076-6.108.076-3.371 0-6.107-.032-6.107-.076 0-.043 2.733-.076 6.107-.076 3.375 0 6.108.041 6.108.076Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#000",
                d: "M64.359 30.871H48.393v4.81h15.966v-4.81Z",
                opacity: 0.2,
              }),
              (0, ai.jsx)("path", {
                fill: "#263238",
                d: "M50.228 21.776a.918.918 0 1 1-1.836 0 .918.918 0 0 1 1.836 0ZM53.065 21.776a.918.918 0 1 1-1.836 0 .918.918 0 0 1 1.836 0ZM55.902 21.776a.918.918 0 1 1-1.836 0 .918.918 0 0 1 1.836 0Z",
              }),
            ],
          }),
        li = (e) =>
          (0, ai.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: 16,
            height: 16,
            fill: "none",
            ...e,
            children: (0, ai.jsx)("path", {
              stroke: "#94A3B8",
              strokeWidth: 1.25,
              d: "m6.566 13.951 2.5 1.25a.417.417 0 0 0 .603-.373v-5.82c0-.11.044-.216.122-.294l4.756-4.756a.416.416 0 0 0 .122-.295v-1.91a.417.417 0 0 0-.416-.417h-12.5a.417.417 0 0 0-.417.417v1.91c0 .11.044.217.122.295l4.756 4.756a.417.417 0 0 1 .122.295v4.57c0 .157.09.301.23.372Z",
            }),
          }),
        ui = (e) =>
          (0, ai.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: 210,
            height: 171,
            fill: "none",
            ...e,
            children: [
              (0, ai.jsx)("path", {
                fill: "#F8BFDB",
                d: "M30.49 125.832a83.8 83.8 0 0 0-.121-8.816 112.7 112.7 0 0 0-2.763-17.983c-.772-3.325-1.72-6.596-2.712-9.864-.03-.1-.188-.073-.16.03 3.06 11.521 5.571 23.407 5.398 35.383-.049 3.344-.438 6.642-.754 9.974 0 .088.137.124.158.033.63-2.86.836-5.845.954-8.757Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#F8BFDB",
                d: "M24.733 89.185s-4.633 11.764-3.596 14.518c1.037 2.754 3.177 3.344 3.177 3.344s-2.837 4.048-.855 7.845c1.982 3.797 6.384 3.617 6.688 7.922-.01.021.234-17.977-5.414-33.629Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#F8BFDB",
                d: "M29.634 115.404a.083.083 0 0 0 0-.06 107.696 107.696 0 0 0-4.493-23.665c0-.021-.045-.015-.04 0a175.678 175.678 0 0 1 2.432 10.378 5.13 5.13 0 0 0-2.213-1.234s-.024.018 0 .024c.872.319 1.655.84 2.286 1.52.134.684.268 1.365.392 2.049-1.036-1.158-2.47-1.733-3.909-2.28a.016.016 0 0 0-.008.007.017.017 0 0 0-.003.01.02.02 0 0 0 .003.01.014.014 0 0 0 .008.006c1.499.608 2.988 1.393 4.004 2.685.352 1.951.662 3.91.93 5.875a5.598 5.598 0 0 0-2.763-1.583c-.034 0-.052.039-.019.048A5.825 5.825 0 0 1 29.026 111h.018c.091.689.178 1.381.261 2.076a7.097 7.097 0 0 0-1.936-1.167c-.018 0-.03.021 0 .027a6.643 6.643 0 0 1 1.943 1.286h.024c.076.66.152 1.319.219 1.979a9.424 9.424 0 0 0-3.93-2.809.027.027 0 0 0-.018.007.025.025 0 0 0-.007.017c0 .007.003.013.007.018a10.231 10.231 0 0 1 3.89 2.989.097.097 0 0 0 .044.03.097.097 0 0 0 .053 0c.1 1.012.192 2.025.265 3.04 0 .015.024.015.024 0-.079-1.02-.162-2.049-.25-3.089Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#F8BFDB",
                d: "M25.91 99.668a5.804 5.804 0 0 0-2.785-.87.018.018 0 0 0-.013.032.018.018 0 0 0 .013.005c.954.181 1.88.488 2.754.912.037.01.064-.055.03-.08ZM26.472 112.119a5.78 5.78 0 0 0-2.091-.714c-.025 0-.028.033 0 .039a7.9 7.9 0 0 1 2.067.724c.027.015.051-.034.024-.049ZM42.674 103.912a31.496 31.496 0 0 0-5.365 4.687 19.216 19.216 0 0 0-3.76 6.383 47.71 47.71 0 0 0-2.803 15.26c-.059 2.883.218 5.762.824 8.581a.083.083 0 0 0 .035.05.09.09 0 0 0 .06.012.083.083 0 0 0 .066-.092 48.205 48.205 0 0 1 .085-15.001c.796-4.864 2.046-10.159 5.14-14.114 1.684-2.155 3.785-3.848 5.86-5.599.11-.097-.03-.246-.142-.167Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#F8BFDB",
                d: "M31.427 126.734a28.886 28.886 0 0 1 3.91-4.997c2.319-2.32 4.27-3.967 4.574-5.499.304-1.532-2.322-2.663-2.322-2.663s3.207.578 4.085-.769c.879-1.347 1.301-9.147 1.301-9.147s-5.836 4.168-8.557 10.01c-2.72 5.843-2.99 13.065-2.99 13.065Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#F8BFDB",
                d: "M40.88 110.975a5.127 5.127 0 0 0-1.16-.04c-.047 0-.044.079 0 .082.382 0 .768-.018 1.151 0a.024.024 0 0 0 .012-.006.032.032 0 0 0 .006-.012l-.001-.013a.022.022 0 0 0-.008-.011ZM36.688 118.538a5.232 5.232 0 0 0-1.8.359v.027c.609-.143 1.196-.2 1.797-.304a.043.043 0 0 0 .02-.016.044.044 0 0 0 .002-.048.043.043 0 0 0-.019-.018ZM35.43 115.926a3.984 3.984 0 0 0-.763.067.026.026 0 0 0-.011.009.024.024 0 0 0-.004.014c0 .005.001.009.004.013a.017.017 0 0 0 .011.009c.255.015.51.004.763-.033.01 0 .021-.004.028-.012a.038.038 0 0 0 .012-.028c0-.01-.004-.02-.012-.028a.04.04 0 0 0-.028-.011ZM14.316 112.182a26.48 26.48 0 0 1 5.426 2.556 16.22 16.22 0 0 1 4.52 4.292 40.195 40.195 0 0 1 5.794 11.7 31.163 31.163 0 0 1 1.313 7.138.07.07 0 0 1-.068.055.071.071 0 0 1-.07-.055 40.49 40.49 0 0 0-3.531-12.12c-1.772-3.754-4.007-7.748-7.423-10.235-1.86-1.352-3.952-2.24-6.037-3.176-.11-.037-.034-.192.076-.155Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#F8BFDB",
                d: "M28.694 128.051a24.355 24.355 0 0 0-4.32-3.14c-2.413-1.341-4.374-2.222-4.973-3.392-.598-1.171 1.265-2.691 1.265-2.691s-2.462 1.216-3.483.32c-1.022-.897-3.168-7.098-3.168-7.098s5.688 2.021 9.235 6.122c3.547 4.1 5.444 9.879 5.444 9.879Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#F8BFDB",
                d: "M23.973 122.348c-.559-.039-1.12.03-1.653.203v.025a12.43 12.43 0 0 1 1.644-.171c.04 0 .049-.054.01-.057ZM19.013 115.839a2.83 2.83 0 0 0-.763.043c-.028 0-.019.049 0 .045.252-.027.498-.018.747-.024a.034.034 0 0 0 .022-.007.03.03 0 0 0 .012-.018.035.035 0 0 0-.002-.023.038.038 0 0 0-.016-.016Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#FD8DC4",
                d: "M36.029 145.71H23.192l1.83-13.408.468-3.438h8.24l.469 3.438 1.83 13.408Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#F8BFDB",
                d: "M34.199 132.302h-9.177l.468-3.438h8.24l.469 3.438Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#F8BFDB",
                d: "M34.907 127.673H24.311v2.912h10.596v-2.912Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#EFE6D0",
                d: "M104.293 169.204c56.771 0 102.793-5.043 102.793-11.264 0-6.22-46.022-11.263-102.793-11.263C47.522 146.677 1.5 151.72 1.5 157.94c0 6.221 46.022 11.264 102.793 11.264Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#263238",
                d: "m136.77 122.158-.105-.501c.325-.07.645-.145.966-.23l.125.5c-.341.085-.656.161-.986.231Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#72B35A",
                d: "m139.693 121.353-.16-.471a29.575 29.575 0 0 0 1.857-.706l.195.461a27.1 27.1 0 0 1-1.892.716Zm3.73-1.597-.226-.441a19.702 19.702 0 0 0 1.727-1.001l.261.425a12.88 12.88 0 0 1-1.762 1.017Zm3.444-2.118-.296-.406a23.763 23.763 0 0 0 1.552-1.236l.331.375c-.526.456-1.026.882-1.592 1.287l.005-.02Zm3.054-2.663-.366-.346a28.5 28.5 0 0 0 1.297-1.502l.395.306a21.072 21.072 0 0 1-1.316 1.562l-.01-.02Zm2.478-3.204-.426-.265c.346-.56.654-1.142.921-1.743l.461.206a16.925 16.925 0 0 1-.961 1.822l.005-.02Zm1.657-3.715-.501-.14c.183-.628.318-1.269.405-1.917l.501.065c-.083.681-.22 1.354-.41 2.012l.005-.02Zm.555-4.005h-.5v-.145c0-.605-.035-1.221-.095-1.827l.5-.05c.066.624.099 1.25.1 1.877l-.005.145Zm-.901-3.919a19.97 19.97 0 0 0-.5-1.913l.5-.15c.205.65.381 1.312.501 1.958l-.501.105Zm-1.186-3.77a20.637 20.637 0 0 0-.821-1.807l.45-.225c.306.62.586 1.241.831 1.842l-.46.19Zm-1.752-3.57c-.311-.545-.651-1.12-1.002-1.711l.426-.266a29.75 29.75 0 0 1 1.001 1.732l-.425.246Zm-2.093-3.398c-.365-.551-.736-1.107-1.116-1.662l.415-.28c.381.555.751 1.11 1.117 1.671l-.416.27Zm-2.253-3.314c-.375-.551-.756-1.107-1.126-1.657l.415-.28c.371.55.746 1.106 1.122 1.651l-.411.286Zm-2.237-3.334a74.845 74.845 0 0 1-1.072-1.703l.426-.26c.35.57.706 1.132 1.066 1.692l-.42.27Zm-2.088-3.44a39.089 39.089 0 0 1-.941-1.782l.45-.225c.281.57.596 1.161.927 1.762l-.436.245Zm-1.777-3.604a33.636 33.636 0 0 1-.721-1.882l.501-.16c.21.605.445 1.23.705 1.847l-.485.195Zm-1.302-3.82c-.165-.65-.31-1.316-.42-2.002l.5-.08c.111.64.246 1.291.411 1.932l-.491.15Zm-.671-4.005a22.968 22.968 0 0 1-.075-1.857v-.165h.501v.16c0 .606 0 1.217.075 1.817l-.501.045Zm.501-4.004-.501-.05c0-.136.026-.276.041-.421.06-.536.135-1.071.225-1.582l.5.085c-.085.5-.16 1.026-.22 1.552.02.155.02.29-.02.43l-.025-.014Zm.696-3.895-.501-.135c.186-.661.401-1.307.641-1.923l.466.18c-.228.62-.422 1.252-.581 1.893l-.025-.015Zm24.945-2.919c-.28 0-.57-.04-.856-.08-.39-.055-.781-.12-1.166-.195l.1-.5c.37.07.756.134 1.136.19.271.035.546.06.811.075l-.025.51Zm2.058-.155-.105-.5a5.783 5.783 0 0 0 1.782-.691l.26.425a6.23 6.23 0 0 1-1.912.781l-.025-.015Zm-25.561-.596-.446-.235c.319-.597.672-1.175 1.056-1.732l.411.285a16.197 16.197 0 0 0-.996 1.697l-.025-.015Zm19.523-.03a19.29 19.29 0 0 1-1.902-.716l.205-.46c.602.267 1.219.5 1.848.696l-.151.48Zm9.512-1.562-.415-.28c.356-.517.567-1.12.61-1.747l.501.035a4.011 4.011 0 0 1-.681 2.007l-.015-.015Zm-13.216-.075a18.373 18.373 0 0 1-1.697-1.116l.295-.4c.53.39 1.082.751 1.652 1.08l-.25.436Zm-13.567-1.562-.37-.335c.453-.504.936-.98 1.447-1.427l.33.376c-.491.44-.956.907-1.392 1.401l-.015-.015Zm10.308-.846c-.499-.459-.972-.945-1.417-1.456l.376-.33c.433.496.893.969 1.376 1.416l-.335.37Zm16.295-1.356a4.885 4.885 0 0 0-1.167-1.502l.331-.376c.532.46.969 1.02 1.286 1.647l-.45.23Zm-23.639-.396-.285-.41c.56-.383 1.14-.735 1.737-1.057l.235.441c-.575.318-1.133.665-1.672 1.041l-.015-.015Zm4.676-1.301a15.9 15.9 0 0 1-.551-.831l-.651.255-.19-.46.576-.23c-.09-.151-.18-.301-.266-.452l.436-.245c.1.175.2.35.305.5.281-.1.566-.194.856-.285l.146.501c-.246.075-.501.155-.731.24.155.246.315.501.5.716l-.43.29Zm16.184-.861a10.656 10.656 0 0 0-1.501-.611l-.331-.105.145-.5.341.11a10.88 10.88 0 0 1 1.562.635l-.216.47Zm-13.606-.897-.105-.5a24.508 24.508 0 0 1 2.002-.36l.075.5c-.661.105-1.316.23-1.957.376l-.015-.016Zm9.862-.27a23.234 23.234 0 0 0-1.963-.255l.041-.5c.695.06 1.371.144 2.002.26l-.08.495Zm-5.932-.29-.035-.5a30.4 30.4 0 0 1 1.782-.056h.245v.5h-.24c-.566.016-1.157.03-1.737.07l-.015-.014Zm-8.461-1.197c-.27-.61-.5-1.246-.726-1.892l.501-.155c.21.63.446 1.251.706 1.847l-.481.2Zm-1.266-3.844a22.532 22.532 0 0 1-.371-2.003l.501-.07c.095.661.215 1.317.36 1.953l-.49.12Zm-.561-4.005c-.025-.45-.04-.911-.04-1.372v-.65h.501v.64c0 .45 0 .906.035 1.342l-.496.04Zm.596-4.005-.501-.05c.07-.66.165-1.337.281-2.003l.5.085c-.135.666-.23 1.307-.295 1.978l.015-.01Zm.686-3.91-.501-.12c.16-.646.346-1.297.551-1.947l.5.155a22.27 22.27 0 0 0-.565 1.922l.015-.01Zm1.201-3.79-.465-.18c.245-.625.5-1.251.806-1.857l.45.22c-.3.601-.566 1.212-.806 1.848l.015-.03Zm1.722-3.569-.435-.255c.34-.576.706-1.151 1.086-1.702l.411.285c-.391.55-.746 1.111-1.077 1.682l.015-.01Zm2.258-3.259-.39-.315c.42-.5.871-1.031 1.336-1.502l.361.345c-.471.471-.912.972-1.322 1.482l.015-.01Zm2.723-2.883-.335-.37a35.81 35.81 0 0 1 1.537-1.312l.31.395a30.95 30.95 0 0 0-1.527 1.297l.015-.01Zm3.109-2.473-.285-.416a33.572 33.572 0 0 1 1.697-1.096l.255.425c-.581.356-1.121.721-1.682 1.097l.015-.01Zm3.399-2.068-.235-.44a33.783 33.783 0 0 1 1.812-.896l.21.455c-.635.286-1.221.586-1.802.891l.015-.01Zm3.62-1.662-.186-.47c.631-.246 1.267-.501 1.898-.686l.16.5c-.636.19-1.267.42-1.887.666l.015-.01Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#263238",
                d: "m170.275 8.926-.125-.5c.621-.16 1.001-.23 1.001-.23l.09.5s-.36.075-.966.23Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#72B35A",
                d: "M179.126 5.694c-1.277-3.955-9.827-2.533-8.16 2.638 1.667 5.171 9.437 1.322 8.16-2.638Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#EBEBEB",
                d: "M166.316 4.11c.065-1.737 2.478-3.073 5.892-2.458 3.414.616 6.623 2.919 6.623 2.919s-3.369 2.042-6.818 2.418c-3.449.375-5.762-1.147-5.697-2.879Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#263238",
                d: "M178.831 4.565c-1.772 0-3.54-.05-5.307-.106a110.771 110.771 0 0 1-5.306-.285c1.772 0 3.544.045 5.311.1 1.767.055 3.54.145 5.302.29Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#263238",
                d: "M169.745 2.563a14.908 14.908 0 0 1 2.829 1.767 13.283 13.283 0 0 1-1.462-.8 14.29 14.29 0 0 1-1.367-.967ZM174.386 4.394a16.283 16.283 0 0 1-2.929 1.893 16.23 16.23 0 0 1 2.944-1.893h-.015ZM174.9 3.424c.506.242.948.599 1.292 1.04a3.411 3.411 0 0 1-.706-.445 3.683 3.683 0 0 1-.586-.595Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#EBEBEB",
                d: "M169.569 14.393c1.067 1.372 3.805 1.041 6.213-1.452s3.684-6.242 3.684-6.242-3.944.3-6.953 2.002c-3.009 1.702-4.015 4.315-2.944 5.692Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#263238",
                d: "M179.467 6.709c-1.442 1.001-2.844 2.113-4.251 3.189a102.558 102.558 0 0 0-4.13 3.334c1.442-1.001 2.844-2.108 4.246-3.184a117.964 117.964 0 0 0 4.135-3.339Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#263238",
                d: "M173.249 13.626c.268-.487.507-.988.716-1.502.213-.516.393-1.044.541-1.582a13.71 13.71 0 0 0-.716 1.502 14.238 14.238 0 0 0-.541 1.582ZM175.963 9.439c-1.172-.063-2.347 0-3.505.185.584.035 1.169.035 1.752 0 .587-.029 1.172-.09 1.753-.185ZM176.929 9.927c.133-.247.238-.51.31-.781.074-.27.118-.547.13-.826a3.72 3.72 0 0 0-.44 1.607Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#B1EB9B",
                d: "M179.126 5.696a1.5 1.5 0 0 1-1.194-2.74 1.499 1.499 0 0 1 2.16.853 1.5 1.5 0 0 1-.966 1.887Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#B1EB9B",
                d: "M180.047 8.544a1.5 1.5 0 0 1-1.954-1.253 1.5 1.5 0 0 1 .759-1.486 1.503 1.503 0 1 1 1.195 2.74Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#E3F4DC",
                d: "m164.81 97.189-55.13-11.175 14.345-70.767 40.938 8.296 11.459 16.364-11.612 57.282Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#8CBA78",
                d: "m164.963 23.542 11.459 16.364-14.197-2.877 2.738-13.487ZM134.159 78.448l.208-1.629c.326-3.4 2.191-6.803 6.04-9.85 3.46-2.702 5.491-4.749 6.072-7.537.655-3.141-.877-5.646-4.743-6.516a11.168 11.168 0 0 0-6.616.612l-.667-4.185c2.355-1.054 6.051-1.307 9.312-.615 7.082 1.483 9.37 6.522 8.401 11.202-.873 4.187-3.841 6.714-7.529 9.607-3.38 2.634-4.927 5.138-5.399 8.312l-.273 1.617-4.806-1.018Zm-3.155 8.333c.475-2.278 2.347-3.559 4.501-3.106 2.154.453 3.302 2.357 2.826 4.639-.453 2.154-2.213 3.517-4.49 3.042-2.174-.454-3.305-2.425-2.857-4.58l.02.005Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#BBE7AC",
                d: "m36.282 60.533-5.647-2.558-.786 1.727a1.501 1.501 0 0 1-1.286.861c-.31.01-.62.04-.926.09a1.502 1.502 0 0 1-1.427-.59l-1.107-1.547-5.04 3.614 1.106 1.547a1.503 1.503 0 0 1 .1 1.537 9.177 9.177 0 0 0-.386.846 1.5 1.5 0 0 1-1.226.946l-1.887.185.605 6.173 1.898-.19a1.502 1.502 0 0 1 1.386.69c.08.13.166.256.256.38.09.126.18.246.275.366a1.471 1.471 0 0 1 .21 1.527l-.79 1.742 5.651 2.563.786-1.737a1.502 1.502 0 0 1 1.292-.856 8.13 8.13 0 0 0 .916-.09 1.502 1.502 0 0 1 1.427.59l1.106 1.548 5.046-3.615-1.106-1.546a1.457 1.457 0 0 1-.1-1.537c.139-.274.264-.555.375-.841a1.473 1.473 0 0 1 1.226-.947l1.898-.19-.611-6.172-1.897.185a1.472 1.472 0 0 1-1.377-.686c-.085-.13-.17-.255-.26-.38-.09-.126-.18-.25-.276-.366a1.501 1.501 0 0 1-.21-1.537l.786-1.732Zm-3.204 5.712a5.08 5.08 0 1 1-8.26 5.92 5.08 5.08 0 0 1 8.26-5.92ZM47.706 42.024l-3.449 2.644.796 1.056a1.002 1.002 0 0 1 .105 1.076c-.095.195-.179.396-.25.601a1.026 1.026 0 0 1-.836.686l-1.322.17.561 4.31 1.322-.17a1.031 1.031 0 0 1 1.001.45c.12.175.25.342.39.501a1.001 1.001 0 0 1 .18 1.066l-.5 1.232 4.005 1.667.5-1.232a1.027 1.027 0 0 1 .887-.625l.32-.035.315-.05a1.03 1.03 0 0 1 1.002.375l.816 1.066 3.449-2.643-.806-1.056a1.031 1.031 0 0 1-.105-1.081c.095-.194.178-.393.25-.596a1.027 1.027 0 0 1 .836-.686l1.322-.17-.561-4.31-1.322.17a1.032 1.032 0 0 1-1-.446 4.472 4.472 0 0 0-.396-.5 1.037 1.037 0 0 1-.15-1.047l.5-1.231-4.005-1.667-.5 1.231a1.036 1.036 0 0 1-.886.626l-.32.03-.296.01a1.03 1.03 0 0 1-1.001-.375l-.852-1.047Zm2.468 3.87a3.56 3.56 0 1 1 .908 7.062 3.56 3.56 0 0 1-.907-7.062ZM171.657 124.625l-3.449 2.643.796 1.056a1.003 1.003 0 0 1 .105 1.077 5.177 5.177 0 0 0-.25.601 1.028 1.028 0 0 1-.836.685l-1.322.171.561 4.31 1.321-.17a1.028 1.028 0 0 1 1.002.45 5.7 5.7 0 0 0 .39.501 1 1 0 0 1 .18 1.066l-.5 1.232 4.005 1.667.5-1.232c.075-.177.197-.329.354-.439a1.02 1.02 0 0 1 .532-.187l.321-.035.315-.05a1.032 1.032 0 0 1 1.001.376l.816 1.066 3.45-2.643-.806-1.057a1.026 1.026 0 0 1-.106-1.081c.095-.193.179-.392.251-.596a1.027 1.027 0 0 1 .836-.685l1.321-.171-.56-4.31-1.322.17a1.033 1.033 0 0 1-1.001-.445 4.368 4.368 0 0 0-.396-.501 1.036 1.036 0 0 1-.15-1.046l.501-1.232-4.005-1.667-.501 1.232a1.031 1.031 0 0 1-.886.626l-.32.03-.296.01a1.033 1.033 0 0 1-1.001-.376l-.851-1.046Zm2.468 3.87a3.56 3.56 0 0 1 4.006 3.766 3.565 3.565 0 0 1-2.406 3.134 3.564 3.564 0 0 1-3.817-1.018 3.558 3.558 0 0 1 2.217-5.882Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#fff",
                d: "M79.454 18.686a8.683 8.683 0 0 1-14.509 5.495l-4.344.638 2.174-3.756a8.683 8.683 0 1 1 16.679-2.377Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#263238",
                d: "M79.453 18.688a8.71 8.71 0 0 1-1.742 4.4 7.705 7.705 0 0 1-1.703 1.683 8.454 8.454 0 0 1-2.091 1.167 8.544 8.544 0 0 1-3.543.582 7.723 7.723 0 0 1-1.203-.125 8.766 8.766 0 0 1-4.296-2.122l.102.031-4.338.666-.318.048.16-.278 2.161-3.763v.15a8.774 8.774 0 0 1 .537-7.739 8.899 8.899 0 0 1 2.717-2.899 8.84 8.84 0 0 1 7.634-1.045A8.896 8.896 0 0 1 76.88 11.5a8.71 8.71 0 0 1 2.574 7.188Zm0 0a8.588 8.588 0 0 0-9.846-9.408 8.494 8.494 0 0 0-3.585 1.415 8.95 8.95 0 0 0-2.6 2.836 8.578 8.578 0 0 0-1.104 3.672 8.667 8.667 0 0 0 .613 3.812l.032.077-.042.073-2.188 3.749-.154-.23 4.349-.61h.059l.042.038a8.557 8.557 0 0 0 4.16 2.13c.388.078.782.126 1.178.142.395.028.792.028 1.188 0a8.715 8.715 0 0 0 2.32-.512 8.168 8.168 0 0 0 2.09-1.129 7.939 7.939 0 0 0 1.708-1.662 8.71 8.71 0 0 0 1.78-4.393Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#72B35A",
                d: "M66.572 21.836a.843.843 0 0 1 .85-.892.892.892 0 1 1-.336 1.718.844.844 0 0 1-.514-.826Zm.349-2.059-.202-6.913h1.393l-.202 6.913h-.99ZM69.886 21.836a.842.842 0 0 1 .846-.892.892.892 0 0 1 0 1.784.842.842 0 0 1-.846-.892Zm.348-2.059-.191-6.913h1.393l-.202 6.913h-1ZM73.196 21.836a.843.843 0 0 1 .85-.892.892.892 0 1 1-.337 1.718.842.842 0 0 1-.513-.826Zm.348-2.059-.202-6.913h1.394l-.199 6.913h-.993Z",
              }),
              (0, ai.jsx)("rect", {
                width: 72.275,
                height: 114.827,
                x: 69.239,
                y: 22.932,
                fill: "#C0E7B1",
                stroke: "#B4D3A8",
                strokeWidth: 0.313,
                rx: 1.095,
              }),
              (0, ai.jsx)("path", {
                fill: "#384734",
                d: "M86.272 89.697a4.675 4.675 0 1 0 0-9.35 4.675 4.675 0 0 0 0 9.35ZM123.229 89.697a4.675 4.675 0 1 0-.002-9.35 4.675 4.675 0 0 0 .002 9.35ZM111.463 99.445l-.257-.49c-.022-.044-2.439-4.51-7.298-4.51-4.42 0-5.526 4.204-5.555 4.385l-.133.534-1.072-.258.129-.538c0-.052 1.319-5.228 6.631-5.228 5.526 0 8.167 4.893 8.278 5.103l.257.486-.98.516Z",
                opacity: 0.7,
              }),
              (0, ai.jsx)("path", {
                fill: "#72B35A",
                d: "M95.224 66.082c0 .066-4.104.114-9.162.114-5.058 0-9.161-.048-9.161-.114s4.1-.114 9.161-.114c5.062 0 9.162.061 9.162.114ZM136.215 131.772c0 .066-4.104.114-9.162.114-5.058 0-9.161-.048-9.161-.114 0-.065 4.099-.114 9.161-.114 5.062 0 9.162.062 9.162.114Z",
              }),
              (0, ai.jsx)("path", {
                fill: "#000",
                d: "M98.038 47.806h-23.95v7.215h23.95v-7.215Z",
                opacity: 0.2,
              }),
              (0, ai.jsx)("path", {
                fill: "#263238",
                d: "M76.84 34.165a1.376 1.376 0 1 1-2.752 0 1.376 1.376 0 0 1 2.753 0ZM81.096 34.165a1.376 1.376 0 1 1-2.752 0 1.376 1.376 0 0 1 2.752 0ZM85.352 34.165a1.376 1.376 0 1 1-2.752 0 1.376 1.376 0 0 1 2.752 0Z",
              }),
            ],
          });
      var ci = function () {
        return (
          (ci =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }),
          ci.apply(this, arguments)
        );
      };
      Object.create;
      function di(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, o = 0, a = t.length; o < a; o++)
            (!r && o in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      Object.create;
      var fi = n(20),
        pi = n.n(fi),
        hi = "-ms-",
        gi = "-moz-",
        mi = "-webkit-",
        vi = "comm",
        yi = "rule",
        bi = "decl",
        wi = "@import",
        xi = "@keyframes",
        Si = "@layer",
        ki = Math.abs,
        Ei = String.fromCharCode,
        Ci = Object.assign;
      function Oi(e) {
        return e.trim();
      }
      function Pi(e, t) {
        return (e = t.exec(e)) ? e[0] : e;
      }
      function Ni(e, t, n) {
        return e.replace(t, n);
      }
      function _i(e, t, n) {
        return e.indexOf(t, n);
      }
      function Li(e, t) {
        return 0 | e.charCodeAt(t);
      }
      function Ti(e, t, n) {
        return e.slice(t, n);
      }
      function Ri(e) {
        return e.length;
      }
      function ji(e) {
        return e.length;
      }
      function Di(e, t) {
        return t.push(e), e;
      }
      function Ii(e, t) {
        return e.filter(function (e) {
          return !Pi(e, t);
        });
      }
      var Ai = 1,
        Fi = 1,
        Mi = 0,
        zi = 0,
        Bi = 0,
        Ui = "";
      function Hi(e, t, n, r, o, a, i, s) {
        return {
          value: e,
          root: t,
          parent: n,
          type: r,
          props: o,
          children: a,
          line: Ai,
          column: Fi,
          length: i,
          return: "",
          siblings: s,
        };
      }
      function Zi(e, t) {
        return Ci(
          Hi("", null, null, "", null, null, 0, e.siblings),
          e,
          { length: -e.length },
          t
        );
      }
      function Vi(e) {
        for (; e.root; ) e = Zi(e.root, { children: [e] });
        Di(e, e.siblings);
      }
      function Wi() {
        return (
          (Bi = zi < Mi ? Li(Ui, zi++) : 0),
          Fi++,
          10 === Bi && ((Fi = 1), Ai++),
          Bi
        );
      }
      function $i() {
        return Li(Ui, zi);
      }
      function Ki() {
        return zi;
      }
      function qi(e, t) {
        return Ti(Ui, e, t);
      }
      function Qi(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function Ji(e) {
        return (Ai = Fi = 1), (Mi = Ri((Ui = e))), (zi = 0), [];
      }
      function Gi(e) {
        return (Ui = ""), e;
      }
      function Yi(e) {
        return Oi(qi(zi - 1, ts(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
      }
      function Xi(e) {
        for (; (Bi = $i()) && Bi < 33; ) Wi();
        return Qi(e) > 2 || Qi(Bi) > 3 ? "" : " ";
      }
      function es(e, t) {
        for (
          ;
          --t &&
          Wi() &&
          !(
            Bi < 48 ||
            Bi > 102 ||
            (Bi > 57 && Bi < 65) ||
            (Bi > 70 && Bi < 97)
          );

        );
        return qi(e, Ki() + (t < 6 && 32 == $i() && 32 == Wi()));
      }
      function ts(e) {
        for (; Wi(); )
          switch (Bi) {
            case e:
              return zi;
            case 34:
            case 39:
              34 !== e && 39 !== e && ts(Bi);
              break;
            case 40:
              41 === e && ts(e);
              break;
            case 92:
              Wi();
          }
        return zi;
      }
      function ns(e, t) {
        for (; Wi() && e + Bi !== 57 && (e + Bi !== 84 || 47 !== $i()); );
        return "/*" + qi(t, zi - 1) + "*" + Ei(47 === e ? e : Wi());
      }
      function rs(e) {
        for (; !Qi($i()); ) Wi();
        return qi(e, zi);
      }
      function os(e, t) {
        for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
        return n;
      }
      function as(e, t, n, r) {
        switch (e.type) {
          case Si:
            if (e.children.length) break;
          case wi:
          case bi:
            return (e.return = e.return || e.value);
          case vi:
            return "";
          case xi:
            return (e.return = e.value + "{" + os(e.children, r) + "}");
          case yi:
            if (!Ri((e.value = e.props.join(",")))) return "";
        }
        return Ri((n = os(e.children, r)))
          ? (e.return = e.value + "{" + n + "}")
          : "";
      }
      function is(e, t, n) {
        switch (
          (function (e, t) {
            return 45 ^ Li(e, 0)
              ? (((((((t << 2) ^ Li(e, 0)) << 2) ^ Li(e, 1)) << 2) ^
                  Li(e, 2)) <<
                  2) ^
                  Li(e, 3)
              : 0;
          })(e, t)
        ) {
          case 5103:
            return mi + "print-" + e + e;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return mi + e + e;
          case 4789:
            return gi + e + e;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return mi + e + gi + e + hi + e + e;
          case 5936:
            switch (Li(e, t + 11)) {
              case 114:
                return mi + e + hi + Ni(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
              case 108:
                return mi + e + hi + Ni(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
              case 45:
                return mi + e + hi + Ni(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
            }
          case 6828:
          case 4268:
          case 2903:
            return mi + e + hi + e + e;
          case 6165:
            return mi + e + hi + "flex-" + e + e;
          case 5187:
            return (
              mi +
              e +
              Ni(e, /(\w+).+(:[^]+)/, mi + "box-$1$2" + hi + "flex-$1$2") +
              e
            );
          case 5443:
            return (
              mi +
              e +
              hi +
              "flex-item-" +
              Ni(e, /flex-|-self/g, "") +
              (Pi(e, /flex-|baseline/)
                ? ""
                : hi + "grid-row-" + Ni(e, /flex-|-self/g, "")) +
              e
            );
          case 4675:
            return (
              mi +
              e +
              hi +
              "flex-line-pack" +
              Ni(e, /align-content|flex-|-self/g, "") +
              e
            );
          case 5548:
            return mi + e + hi + Ni(e, "shrink", "negative") + e;
          case 5292:
            return mi + e + hi + Ni(e, "basis", "preferred-size") + e;
          case 6060:
            return (
              mi +
              "box-" +
              Ni(e, "-grow", "") +
              mi +
              e +
              hi +
              Ni(e, "grow", "positive") +
              e
            );
          case 4554:
            return mi + Ni(e, /([^-])(transform)/g, "$1" + mi + "$2") + e;
          case 6187:
            return (
              Ni(
                Ni(Ni(e, /(zoom-|grab)/, mi + "$1"), /(image-set)/, mi + "$1"),
                e,
                ""
              ) + e
            );
          case 5495:
          case 3959:
            return Ni(e, /(image-set\([^]*)/, mi + "$1$`$1");
          case 4968:
            return (
              Ni(
                Ni(
                  e,
                  /(.+:)(flex-)?(.*)/,
                  mi + "box-pack:$3" + hi + "flex-pack:$3"
                ),
                /s.+-b[^;]+/,
                "justify"
              ) +
              mi +
              e +
              e
            );
          case 4200:
            if (!Pi(e, /flex-|baseline/))
              return hi + "grid-column-align" + Ti(e, t) + e;
            break;
          case 2592:
          case 3360:
            return hi + Ni(e, "template-", "") + e;
          case 4384:
          case 3616:
            return n &&
              n.some(function (e, n) {
                return (t = n), Pi(e.props, /grid-\w+-end/);
              })
              ? ~_i(e + (n = n[t].value), "span", 0)
                ? e
                : hi +
                  Ni(e, "-start", "") +
                  e +
                  hi +
                  "grid-row-span:" +
                  (~_i(n, "span", 0)
                    ? Pi(n, /\d+/)
                    : +Pi(n, /\d+/) - +Pi(e, /\d+/)) +
                  ";"
              : hi + Ni(e, "-start", "") + e;
          case 4896:
          case 4128:
            return n &&
              n.some(function (e) {
                return Pi(e.props, /grid-\w+-start/);
              })
              ? e
              : hi + Ni(Ni(e, "-end", "-span"), "span ", "") + e;
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return Ni(e, /(.+)-inline(.+)/, mi + "$1$2") + e;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (Ri(e) - 1 - t > 6)
              switch (Li(e, t + 1)) {
                case 109:
                  if (45 !== Li(e, t + 4)) break;
                case 102:
                  return (
                    Ni(
                      e,
                      /(.+:)(.+)-([^]+)/,
                      "$1" +
                        mi +
                        "$2-$3$1" +
                        gi +
                        (108 == Li(e, t + 3) ? "$3" : "$2-$3")
                    ) + e
                  );
                case 115:
                  return ~_i(e, "stretch", 0)
                    ? is(Ni(e, "stretch", "fill-available"), t, n) + e
                    : e;
              }
            break;
          case 5152:
          case 5920:
            return Ni(
              e,
              /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
              function (t, n, r, o, a, i, s) {
                return (
                  hi +
                  n +
                  ":" +
                  r +
                  s +
                  (o ? hi + n + "-span:" + (a ? i : +i - +r) + s : "") +
                  e
                );
              }
            );
          case 4949:
            if (121 === Li(e, t + 6)) return Ni(e, ":", ":" + mi) + e;
            break;
          case 6444:
            switch (Li(e, 45 === Li(e, 14) ? 18 : 11)) {
              case 120:
                return (
                  Ni(
                    e,
                    /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
                    "$1" +
                      mi +
                      (45 === Li(e, 14) ? "inline-" : "") +
                      "box$3$1" +
                      mi +
                      "$2$3$1" +
                      hi +
                      "$2box$3"
                  ) + e
                );
              case 100:
                return Ni(e, ":", ":" + hi) + e;
            }
            break;
          case 5719:
          case 2647:
          case 2135:
          case 3927:
          case 2391:
            return Ni(e, "scroll-", "scroll-snap-") + e;
        }
        return e;
      }
      function ss(e, t, n, r) {
        if (e.length > -1 && !e.return)
          switch (e.type) {
            case bi:
              return void (e.return = is(e.value, e.length, n));
            case xi:
              return os([Zi(e, { value: Ni(e.value, "@", "@" + mi) })], r);
            case yi:
              if (e.length)
                return (function (e, t) {
                  return e.map(t).join("");
                })((n = e.props), function (t) {
                  switch (Pi(t, (r = /(::plac\w+|:read-\w+)/))) {
                    case ":read-only":
                    case ":read-write":
                      Vi(
                        Zi(e, {
                          props: [Ni(t, /:(read-\w+)/, ":" + gi + "$1")],
                        })
                      ),
                        Vi(Zi(e, { props: [t] })),
                        Ci(e, { props: Ii(n, r) });
                      break;
                    case "::placeholder":
                      Vi(
                        Zi(e, {
                          props: [Ni(t, /:(plac\w+)/, ":" + mi + "input-$1")],
                        })
                      ),
                        Vi(
                          Zi(e, {
                            props: [Ni(t, /:(plac\w+)/, ":" + gi + "$1")],
                          })
                        ),
                        Vi(
                          Zi(e, {
                            props: [Ni(t, /:(plac\w+)/, hi + "input-$1")],
                          })
                        ),
                        Vi(Zi(e, { props: [t] })),
                        Ci(e, { props: Ii(n, r) });
                  }
                  return "";
                });
          }
      }
      function ls(e) {
        return Gi(us("", null, null, null, [""], (e = Ji(e)), 0, [0], e));
      }
      function us(e, t, n, r, o, a, i, s, l) {
        for (
          var u = 0,
            c = 0,
            d = i,
            f = 0,
            p = 0,
            h = 0,
            g = 1,
            m = 1,
            v = 1,
            y = 0,
            b = "",
            w = o,
            x = a,
            S = r,
            k = b;
          m;

        )
          switch (((h = y), (y = Wi()))) {
            case 40:
              if (108 != h && 58 == Li(k, d - 1)) {
                -1 !=
                  _i(
                    (k += Ni(Yi(y), "&", "&\f")),
                    "&\f",
                    ki(u ? s[u - 1] : 0)
                  ) && (v = -1);
                break;
              }
            case 34:
            case 39:
            case 91:
              k += Yi(y);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              k += Xi(h);
              break;
            case 92:
              k += es(Ki() - 1, 7);
              continue;
            case 47:
              switch ($i()) {
                case 42:
                case 47:
                  Di(ds(ns(Wi(), Ki()), t, n, l), l);
                  break;
                default:
                  k += "/";
              }
              break;
            case 123 * g:
              s[u++] = Ri(k) * v;
            case 125 * g:
            case 59:
            case 0:
              switch (y) {
                case 0:
                case 125:
                  m = 0;
                case 59 + c:
                  -1 == v && (k = Ni(k, /\f/g, "")),
                    p > 0 &&
                      Ri(k) - d &&
                      Di(
                        p > 32
                          ? fs(k + ";", r, n, d - 1, l)
                          : fs(Ni(k, " ", "") + ";", r, n, d - 2, l),
                        l
                      );
                  break;
                case 59:
                  k += ";";
                default:
                  if (
                    (Di(
                      (S = cs(
                        k,
                        t,
                        n,
                        u,
                        c,
                        o,
                        s,
                        b,
                        (w = []),
                        (x = []),
                        d,
                        a
                      )),
                      a
                    ),
                    123 === y)
                  )
                    if (0 === c) us(k, t, S, S, w, a, d, s, x);
                    else
                      switch (99 === f && 110 === Li(k, 3) ? 100 : f) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                          us(
                            e,
                            S,
                            S,
                            r &&
                              Di(
                                cs(e, S, S, 0, 0, o, s, b, o, (w = []), d, x),
                                x
                              ),
                            o,
                            x,
                            d,
                            s,
                            r ? w : x
                          );
                          break;
                        default:
                          us(k, S, S, S, [""], x, 0, s, x);
                      }
              }
              (u = c = p = 0), (g = v = 1), (b = k = ""), (d = i);
              break;
            case 58:
              (d = 1 + Ri(k)), (p = h);
            default:
              if (g < 1)
                if (123 == y) --g;
                else if (
                  125 == y &&
                  0 == g++ &&
                  125 ==
                    ((Bi = zi > 0 ? Li(Ui, --zi) : 0),
                    Fi--,
                    10 === Bi && ((Fi = 1), Ai--),
                    Bi)
                )
                  continue;
              switch (((k += Ei(y)), y * g)) {
                case 38:
                  v = c > 0 ? 1 : ((k += "\f"), -1);
                  break;
                case 44:
                  (s[u++] = (Ri(k) - 1) * v), (v = 1);
                  break;
                case 64:
                  45 === $i() && (k += Yi(Wi())),
                    (f = $i()),
                    (c = d = Ri((b = k += rs(Ki())))),
                    y++;
                  break;
                case 45:
                  45 === h && 2 == Ri(k) && (g = 0);
              }
          }
        return a;
      }
      function cs(e, t, n, r, o, a, i, s, l, u, c, d) {
        for (
          var f = o - 1, p = 0 === o ? a : [""], h = ji(p), g = 0, m = 0, v = 0;
          g < r;
          ++g
        )
          for (
            var y = 0, b = Ti(e, f + 1, (f = ki((m = i[g])))), w = e;
            y < h;
            ++y
          )
            (w = Oi(m > 0 ? p[y] + " " + b : Ni(b, /&\f/g, p[y]))) &&
              (l[v++] = w);
        return Hi(e, t, n, 0 === o ? yi : s, l, u, c, d);
      }
      function ds(e, t, n, r) {
        return Hi(e, t, n, vi, Ei(Bi), Ti(e, 2, -2), 0, r);
      }
      function fs(e, t, n, r, o) {
        return Hi(e, t, n, bi, Ti(e, 0, r), Ti(e, r + 1, -1), r, o);
      }
      const ps = {
        animationIterationCount: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1,
      };
      var hs =
          ("undefined" != typeof process &&
            void 0 !==
              {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
              } &&
            ({
              NODE_ENV: "production",
              PUBLIC_URL: "",
              WDS_SOCKET_HOST: void 0,
              WDS_SOCKET_PATH: void 0,
              WDS_SOCKET_PORT: void 0,
              FAST_REFRESH: !0,
            }.REACT_APP_SC_ATTR ||
              {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
              }.SC_ATTR)) ||
          "data-styled",
        gs = "active",
        ms = "data-styled-version",
        vs = "6.1.8",
        ys = "/*!sc*/\n",
        bs = "undefined" != typeof window && "HTMLElement" in window,
        ws = Boolean(
          "boolean" == typeof SC_DISABLE_SPEEDY
            ? SC_DISABLE_SPEEDY
            : "undefined" != typeof process &&
              void 0 !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                } &&
              void 0 !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.REACT_APP_SC_DISABLE_SPEEDY &&
              "" !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.REACT_APP_SC_DISABLE_SPEEDY
            ? "false" !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.REACT_APP_SC_DISABLE_SPEEDY &&
              {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
              }.REACT_APP_SC_DISABLE_SPEEDY
            : "undefined" != typeof process &&
              void 0 !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                } &&
              void 0 !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.SC_DISABLE_SPEEDY &&
              "" !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.SC_DISABLE_SPEEDY &&
              "false" !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.SC_DISABLE_SPEEDY &&
              {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
              }.SC_DISABLE_SPEEDY
        ),
        xs = (new Set(), Object.freeze([])),
        Ss = Object.freeze({});
      function ks(e, t, n) {
        return (
          void 0 === n && (n = Ss),
          (e.theme !== n.theme && e.theme) || t || n.theme
        );
      }
      var Es = new Set([
          "a",
          "abbr",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "base",
          "bdi",
          "bdo",
          "big",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "cite",
          "code",
          "col",
          "colgroup",
          "data",
          "datalist",
          "dd",
          "del",
          "details",
          "dfn",
          "dialog",
          "div",
          "dl",
          "dt",
          "em",
          "embed",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "header",
          "hgroup",
          "hr",
          "html",
          "i",
          "iframe",
          "img",
          "input",
          "ins",
          "kbd",
          "keygen",
          "label",
          "legend",
          "li",
          "link",
          "main",
          "map",
          "mark",
          "menu",
          "menuitem",
          "meta",
          "meter",
          "nav",
          "noscript",
          "object",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "param",
          "picture",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "script",
          "section",
          "select",
          "small",
          "source",
          "span",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "tr",
          "track",
          "u",
          "ul",
          "use",
          "var",
          "video",
          "wbr",
          "circle",
          "clipPath",
          "defs",
          "ellipse",
          "foreignObject",
          "g",
          "image",
          "line",
          "linearGradient",
          "marker",
          "mask",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialGradient",
          "rect",
          "stop",
          "svg",
          "text",
          "tspan",
        ]),
        Cs = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
        Os = /(^-|-$)/g;
      function Ps(e) {
        return e.replace(Cs, "-").replace(Os, "");
      }
      var Ns = /(a)(d)/gi,
        _s = 52,
        Ls = function (e) {
          return String.fromCharCode(e + (e > 25 ? 39 : 97));
        };
      function Ts(e) {
        var t,
          n = "";
        for (t = Math.abs(e); t > _s; t = (t / _s) | 0) n = Ls(t % _s) + n;
        return (Ls(t % _s) + n).replace(Ns, "$1-$2");
      }
      var Rs,
        js = 5381,
        Ds = function (e, t) {
          for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
          return e;
        },
        Is = function (e) {
          return Ds(js, e);
        };
      function As(e) {
        return Ts(Is(e) >>> 0);
      }
      function Fs(e) {
        return e.displayName || e.name || "Component";
      }
      function Ms(e) {
        return "string" == typeof e && !0;
      }
      var zs = "function" == typeof Symbol && Symbol.for,
        Bs = zs ? Symbol.for("react.memo") : 60115,
        Us = zs ? Symbol.for("react.forward_ref") : 60112,
        Hs = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        Zs = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        Vs = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        Ws =
          (((Rs = {})[Us] = {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
          }),
          (Rs[Bs] = Vs),
          Rs);
      function $s(e) {
        return ("type" in (t = e) && t.type.$$typeof) === Bs
          ? Vs
          : "$$typeof" in e
          ? Ws[e.$$typeof]
          : Hs;
        var t;
      }
      var Ks = Object.defineProperty,
        qs = Object.getOwnPropertyNames,
        Qs = Object.getOwnPropertySymbols,
        Js = Object.getOwnPropertyDescriptor,
        Gs = Object.getPrototypeOf,
        Ys = Object.prototype;
      function Xs(e, t, n) {
        if ("string" != typeof t) {
          if (Ys) {
            var r = Gs(t);
            r && r !== Ys && Xs(e, r, n);
          }
          var o = qs(t);
          Qs && (o = o.concat(Qs(t)));
          for (var a = $s(e), i = $s(t), s = 0; s < o.length; ++s) {
            var l = o[s];
            if (!(l in Zs || (n && n[l]) || (i && l in i) || (a && l in a))) {
              var u = Js(t, l);
              try {
                Ks(e, l, u);
              } catch (e) {}
            }
          }
        }
        return e;
      }
      function el(e) {
        return "function" == typeof e;
      }
      function tl(e) {
        return "object" == typeof e && "styledComponentId" in e;
      }
      function nl(e, t) {
        return e && t ? "".concat(e, " ").concat(t) : e || t || "";
      }
      function rl(e, t) {
        if (0 === e.length) return "";
        for (var n = e[0], r = 1; r < e.length; r++) n += t ? t + e[r] : e[r];
        return n;
      }
      function ol(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          e.constructor.name === Object.name &&
          !("props" in e && e.$$typeof)
        );
      }
      function al(e, t, n) {
        if ((void 0 === n && (n = !1), !n && !ol(e) && !Array.isArray(e)))
          return t;
        if (Array.isArray(t))
          for (var r = 0; r < t.length; r++) e[r] = al(e[r], t[r]);
        else if (ol(t)) for (var r in t) e[r] = al(e[r], t[r]);
        return e;
      }
      function il(e, t) {
        Object.defineProperty(e, "toString", { value: t });
      }
      function sl(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        return new Error(
          "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
            .concat(e, " for more information.")
            .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
        );
      }
      var ll = (function () {
          function e(e) {
            (this.groupSizes = new Uint32Array(512)),
              (this.length = 512),
              (this.tag = e);
          }
          return (
            (e.prototype.indexOfGroup = function (e) {
              for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
              return t;
            }),
            (e.prototype.insertRules = function (e, t) {
              if (e >= this.groupSizes.length) {
                for (var n = this.groupSizes, r = n.length, o = r; e >= o; )
                  if ((o <<= 1) < 0) throw sl(16, "".concat(e));
                (this.groupSizes = new Uint32Array(o)),
                  this.groupSizes.set(n),
                  (this.length = o);
                for (var a = r; a < o; a++) this.groupSizes[a] = 0;
              }
              for (
                var i = this.indexOfGroup(e + 1), s = ((a = 0), t.length);
                a < s;
                a++
              )
                this.tag.insertRule(i, t[a]) && (this.groupSizes[e]++, i++);
            }),
            (e.prototype.clearGroup = function (e) {
              if (e < this.length) {
                var t = this.groupSizes[e],
                  n = this.indexOfGroup(e),
                  r = n + t;
                this.groupSizes[e] = 0;
                for (var o = n; o < r; o++) this.tag.deleteRule(n);
              }
            }),
            (e.prototype.getGroup = function (e) {
              var t = "";
              if (e >= this.length || 0 === this.groupSizes[e]) return t;
              for (
                var n = this.groupSizes[e],
                  r = this.indexOfGroup(e),
                  o = r + n,
                  a = r;
                a < o;
                a++
              )
                t += "".concat(this.tag.getRule(a)).concat(ys);
              return t;
            }),
            e
          );
        })(),
        ul = new Map(),
        cl = new Map(),
        dl = 1,
        fl = function (e) {
          if (ul.has(e)) return ul.get(e);
          for (; cl.has(dl); ) dl++;
          var t = dl++;
          return ul.set(e, t), cl.set(t, e), t;
        },
        pl = function (e, t) {
          (dl = t + 1), ul.set(e, t), cl.set(t, e);
        },
        hl = "style[".concat(hs, "][").concat(ms, '="').concat(vs, '"]'),
        gl = new RegExp(
          "^".concat(hs, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
        ),
        ml = function (e, t, n) {
          for (var r, o = n.split(","), a = 0, i = o.length; a < i; a++)
            (r = o[a]) && e.registerName(t, r);
        },
        vl = function (e, t) {
          for (
            var n,
              r = (null !== (n = t.textContent) && void 0 !== n ? n : "").split(
                ys
              ),
              o = [],
              a = 0,
              i = r.length;
            a < i;
            a++
          ) {
            var s = r[a].trim();
            if (s) {
              var l = s.match(gl);
              if (l) {
                var u = 0 | parseInt(l[1], 10),
                  c = l[2];
                0 !== u &&
                  (pl(c, u), ml(e, c, l[3]), e.getTag().insertRules(u, o)),
                  (o.length = 0);
              } else o.push(s);
            }
          }
        };
      function yl() {
        return n.nc;
      }
      var bl = function (e) {
          var t = document.head,
            n = e || t,
            r = document.createElement("style"),
            o = (function (e) {
              var t = Array.from(e.querySelectorAll("style[".concat(hs, "]")));
              return t[t.length - 1];
            })(n),
            a = void 0 !== o ? o.nextSibling : null;
          r.setAttribute(hs, gs), r.setAttribute(ms, vs);
          var i = yl();
          return i && r.setAttribute("nonce", i), n.insertBefore(r, a), r;
        },
        wl = (function () {
          function e(e) {
            (this.element = bl(e)),
              this.element.appendChild(document.createTextNode("")),
              (this.sheet = (function (e) {
                if (e.sheet) return e.sheet;
                for (
                  var t = document.styleSheets, n = 0, r = t.length;
                  n < r;
                  n++
                ) {
                  var o = t[n];
                  if (o.ownerNode === e) return o;
                }
                throw sl(17);
              })(this.element)),
              (this.length = 0);
          }
          return (
            (e.prototype.insertRule = function (e, t) {
              try {
                return this.sheet.insertRule(t, e), this.length++, !0;
              } catch (e) {
                return !1;
              }
            }),
            (e.prototype.deleteRule = function (e) {
              this.sheet.deleteRule(e), this.length--;
            }),
            (e.prototype.getRule = function (e) {
              var t = this.sheet.cssRules[e];
              return t && t.cssText ? t.cssText : "";
            }),
            e
          );
        })(),
        xl = (function () {
          function e(e) {
            (this.element = bl(e)),
              (this.nodes = this.element.childNodes),
              (this.length = 0);
          }
          return (
            (e.prototype.insertRule = function (e, t) {
              if (e <= this.length && e >= 0) {
                var n = document.createTextNode(t);
                return (
                  this.element.insertBefore(n, this.nodes[e] || null),
                  this.length++,
                  !0
                );
              }
              return !1;
            }),
            (e.prototype.deleteRule = function (e) {
              this.element.removeChild(this.nodes[e]), this.length--;
            }),
            (e.prototype.getRule = function (e) {
              return e < this.length ? this.nodes[e].textContent : "";
            }),
            e
          );
        })(),
        Sl = (function () {
          function e(e) {
            (this.rules = []), (this.length = 0);
          }
          return (
            (e.prototype.insertRule = function (e, t) {
              return (
                e <= this.length &&
                (this.rules.splice(e, 0, t), this.length++, !0)
              );
            }),
            (e.prototype.deleteRule = function (e) {
              this.rules.splice(e, 1), this.length--;
            }),
            (e.prototype.getRule = function (e) {
              return e < this.length ? this.rules[e] : "";
            }),
            e
          );
        })(),
        kl = bs,
        El = { isServer: !bs, useCSSOMInjection: !ws },
        Cl = (function () {
          function e(e, t, n) {
            void 0 === e && (e = Ss), void 0 === t && (t = {});
            var r = this;
            (this.options = ci(ci({}, El), e)),
              (this.gs = t),
              (this.names = new Map(n)),
              (this.server = !!e.isServer),
              !this.server &&
                bs &&
                kl &&
                ((kl = !1),
                (function (e) {
                  for (
                    var t = document.querySelectorAll(hl), n = 0, r = t.length;
                    n < r;
                    n++
                  ) {
                    var o = t[n];
                    o &&
                      o.getAttribute(hs) !== gs &&
                      (vl(e, o), o.parentNode && o.parentNode.removeChild(o));
                  }
                })(this)),
              il(this, function () {
                return (function (e) {
                  for (
                    var t = e.getTag(),
                      n = t.length,
                      r = "",
                      o = function (n) {
                        var o = (function (e) {
                          return cl.get(e);
                        })(n);
                        if (void 0 === o) return "continue";
                        var a = e.names.get(o),
                          i = t.getGroup(n);
                        if (void 0 === a || 0 === i.length) return "continue";
                        var s = ""
                            .concat(hs, ".g")
                            .concat(n, '[id="')
                            .concat(o, '"]'),
                          l = "";
                        void 0 !== a &&
                          a.forEach(function (e) {
                            e.length > 0 && (l += "".concat(e, ","));
                          }),
                          (r += ""
                            .concat(i)
                            .concat(s, '{content:"')
                            .concat(l, '"}')
                            .concat(ys));
                      },
                      a = 0;
                    a < n;
                    a++
                  )
                    o(a);
                  return r;
                })(r);
              });
          }
          return (
            (e.registerId = function (e) {
              return fl(e);
            }),
            (e.prototype.reconstructWithOptions = function (t, n) {
              return (
                void 0 === n && (n = !0),
                new e(
                  ci(ci({}, this.options), t),
                  this.gs,
                  (n && this.names) || void 0
                )
              );
            }),
            (e.prototype.allocateGSInstance = function (e) {
              return (this.gs[e] = (this.gs[e] || 0) + 1);
            }),
            (e.prototype.getTag = function () {
              return (
                this.tag ||
                (this.tag =
                  ((e = (function (e) {
                    var t = e.useCSSOMInjection,
                      n = e.target;
                    return e.isServer ? new Sl(n) : t ? new wl(n) : new xl(n);
                  })(this.options)),
                  new ll(e)))
              );
              var e;
            }),
            (e.prototype.hasNameForId = function (e, t) {
              return this.names.has(e) && this.names.get(e).has(t);
            }),
            (e.prototype.registerName = function (e, t) {
              if ((fl(e), this.names.has(e))) this.names.get(e).add(t);
              else {
                var n = new Set();
                n.add(t), this.names.set(e, n);
              }
            }),
            (e.prototype.insertRules = function (e, t, n) {
              this.registerName(e, t), this.getTag().insertRules(fl(e), n);
            }),
            (e.prototype.clearNames = function (e) {
              this.names.has(e) && this.names.get(e).clear();
            }),
            (e.prototype.clearRules = function (e) {
              this.getTag().clearGroup(fl(e)), this.clearNames(e);
            }),
            (e.prototype.clearTag = function () {
              this.tag = void 0;
            }),
            e
          );
        })(),
        Ol = /&/g,
        Pl = /^\s*\/\/.*$/gm;
      function Nl(e, t) {
        return e.map(function (e) {
          return (
            "rule" === e.type &&
              ((e.value = "".concat(t, " ").concat(e.value)),
              (e.value = e.value.replaceAll(",", ",".concat(t, " "))),
              (e.props = e.props.map(function (e) {
                return "".concat(t, " ").concat(e);
              }))),
            Array.isArray(e.children) &&
              "@keyframes" !== e.type &&
              (e.children = Nl(e.children, t)),
            e
          );
        });
      }
      function _l(e) {
        var t,
          n,
          r,
          o = void 0 === e ? Ss : e,
          a = o.options,
          i = void 0 === a ? Ss : a,
          s = o.plugins,
          l = void 0 === s ? xs : s,
          u = function (e, r, o) {
            return o.startsWith(n) &&
              o.endsWith(n) &&
              o.replaceAll(n, "").length > 0
              ? ".".concat(t)
              : e;
          },
          c = l.slice();
        c.push(function (e) {
          e.type === yi &&
            e.value.includes("&") &&
            (e.props[0] = e.props[0].replace(Ol, n).replace(r, u));
        }),
          i.prefix && c.push(ss),
          c.push(as);
        var d = function (e, o, a, s) {
          void 0 === o && (o = ""),
            void 0 === a && (a = ""),
            void 0 === s && (s = "&"),
            (t = s),
            (n = o),
            (r = new RegExp("\\".concat(n, "\\b"), "g"));
          var l = e.replace(Pl, ""),
            u = ls(
              a || o ? "".concat(a, " ").concat(o, " { ").concat(l, " }") : l
            );
          i.namespace && (u = Nl(u, i.namespace));
          var d,
            f = [];
          return (
            os(
              u,
              (function (e) {
                var t = ji(e);
                return function (n, r, o, a) {
                  for (var i = "", s = 0; s < t; s++)
                    i += e[s](n, r, o, a) || "";
                  return i;
                };
              })(
                c.concat(
                  ((d = function (e) {
                    return f.push(e);
                  }),
                  function (e) {
                    e.root || ((e = e.return) && d(e));
                  })
                )
              )
            ),
            f
          );
        };
        return (
          (d.hash = l.length
            ? l
                .reduce(function (e, t) {
                  return t.name || sl(15), Ds(e, t.name);
                }, js)
                .toString()
            : ""),
          d
        );
      }
      var Ll = new Cl(),
        Tl = _l(),
        Rl = e.createContext({
          shouldForwardProp: void 0,
          styleSheet: Ll,
          stylis: Tl,
        }),
        jl = (Rl.Consumer, e.createContext(void 0));
      function Dl() {
        return (0, e.useContext)(Rl);
      }
      function Il(t) {
        var n = (0, e.useState)(t.stylisPlugins),
          r = n[0],
          o = n[1],
          a = Dl().styleSheet,
          i = (0, e.useMemo)(
            function () {
              var e = a;
              return (
                t.sheet
                  ? (e = t.sheet)
                  : t.target &&
                    (e = e.reconstructWithOptions({ target: t.target }, !1)),
                t.disableCSSOMInjection &&
                  (e = e.reconstructWithOptions({ useCSSOMInjection: !1 })),
                e
              );
            },
            [t.disableCSSOMInjection, t.sheet, t.target, a]
          ),
          s = (0, e.useMemo)(
            function () {
              return _l({
                options: {
                  namespace: t.namespace,
                  prefix: t.enableVendorPrefixes,
                },
                plugins: r,
              });
            },
            [t.enableVendorPrefixes, t.namespace, r]
          );
        (0, e.useEffect)(
          function () {
            pi()(r, t.stylisPlugins) || o(t.stylisPlugins);
          },
          [t.stylisPlugins]
        );
        var l = (0, e.useMemo)(
          function () {
            return {
              shouldForwardProp: t.shouldForwardProp,
              styleSheet: i,
              stylis: s,
            };
          },
          [t.shouldForwardProp, i, s]
        );
        return e.createElement(
          Rl.Provider,
          { value: l },
          e.createElement(jl.Provider, { value: s }, t.children)
        );
      }
      var Al = (function () {
          function e(e, t) {
            var n = this;
            (this.inject = function (e, t) {
              void 0 === t && (t = Tl);
              var r = n.name + t.hash;
              e.hasNameForId(n.id, r) ||
                e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
            }),
              (this.name = e),
              (this.id = "sc-keyframes-".concat(e)),
              (this.rules = t),
              il(this, function () {
                throw sl(12, String(n.name));
              });
          }
          return (
            (e.prototype.getName = function (e) {
              return void 0 === e && (e = Tl), this.name + e.hash;
            }),
            e
          );
        })(),
        Fl = function (e) {
          return e >= "A" && e <= "Z";
        };
      function Ml(e) {
        for (var t = "", n = 0; n < e.length; n++) {
          var r = e[n];
          if (1 === n && "-" === r && "-" === e[0]) return e;
          Fl(r) ? (t += "-" + r.toLowerCase()) : (t += r);
        }
        return t.startsWith("ms-") ? "-" + t : t;
      }
      var zl = function (e) {
          return null == e || !1 === e || "" === e;
        },
        Bl = function (e) {
          var t,
            n,
            r = [];
          for (var o in e) {
            var a = e[o];
            e.hasOwnProperty(o) &&
              !zl(a) &&
              ((Array.isArray(a) && a.isCss) || el(a)
                ? r.push("".concat(Ml(o), ":"), a, ";")
                : ol(a)
                ? r.push.apply(
                    r,
                    di(di(["".concat(o, " {")], Bl(a), !1), ["}"], !1)
                  )
                : r.push(
                    ""
                      .concat(Ml(o), ": ")
                      .concat(
                        ((t = o),
                        null == (n = a) || "boolean" == typeof n || "" === n
                          ? ""
                          : "number" != typeof n ||
                            0 === n ||
                            t in ps ||
                            t.startsWith("--")
                          ? String(n).trim()
                          : "".concat(n, "px")),
                        ";"
                      )
                  ));
          }
          return r;
        };
      function Ul(e, t, n, r) {
        return zl(e)
          ? []
          : tl(e)
          ? [".".concat(e.styledComponentId)]
          : el(e)
          ? !el((o = e)) || (o.prototype && o.prototype.isReactComponent) || !t
            ? [e]
            : Ul(e(t), t, n, r)
          : e instanceof Al
          ? n
            ? (e.inject(n, r), [e.getName(r)])
            : [e]
          : ol(e)
          ? Bl(e)
          : Array.isArray(e)
          ? Array.prototype.concat.apply(
              xs,
              e.map(function (e) {
                return Ul(e, t, n, r);
              })
            )
          : [e.toString()];
        var o;
      }
      function Hl(e) {
        for (var t = 0; t < e.length; t += 1) {
          var n = e[t];
          if (el(n) && !tl(n)) return !1;
        }
        return !0;
      }
      var Zl = Is(vs),
        Vl = (function () {
          function e(e, t, n) {
            (this.rules = e),
              (this.staticRulesId = ""),
              (this.isStatic = (void 0 === n || n.isStatic) && Hl(e)),
              (this.componentId = t),
              (this.baseHash = Ds(Zl, t)),
              (this.baseStyle = n),
              Cl.registerId(t);
          }
          return (
            (e.prototype.generateAndInjectStyles = function (e, t, n) {
              var r = this.baseStyle
                ? this.baseStyle.generateAndInjectStyles(e, t, n)
                : "";
              if (this.isStatic && !n.hash)
                if (
                  this.staticRulesId &&
                  t.hasNameForId(this.componentId, this.staticRulesId)
                )
                  r = nl(r, this.staticRulesId);
                else {
                  var o = rl(Ul(this.rules, e, t, n)),
                    a = Ts(Ds(this.baseHash, o) >>> 0);
                  if (!t.hasNameForId(this.componentId, a)) {
                    var i = n(o, ".".concat(a), void 0, this.componentId);
                    t.insertRules(this.componentId, a, i);
                  }
                  (r = nl(r, a)), (this.staticRulesId = a);
                }
              else {
                for (
                  var s = Ds(this.baseHash, n.hash), l = "", u = 0;
                  u < this.rules.length;
                  u++
                ) {
                  var c = this.rules[u];
                  if ("string" == typeof c) l += c;
                  else if (c) {
                    var d = rl(Ul(c, e, t, n));
                    (s = Ds(s, d + u)), (l += d);
                  }
                }
                if (l) {
                  var f = Ts(s >>> 0);
                  t.hasNameForId(this.componentId, f) ||
                    t.insertRules(
                      this.componentId,
                      f,
                      n(l, ".".concat(f), void 0, this.componentId)
                    ),
                    (r = nl(r, f));
                }
              }
              return r;
            }),
            e
          );
        })(),
        Wl = e.createContext(void 0);
      Wl.Consumer;
      var $l = {};
      new Set();
      function Kl(t, n, r) {
        var o = tl(t),
          a = t,
          i = !Ms(t),
          s = n.attrs,
          l = void 0 === s ? xs : s,
          u = n.componentId,
          c =
            void 0 === u
              ? (function (e, t) {
                  var n = "string" != typeof e ? "sc" : Ps(e);
                  $l[n] = ($l[n] || 0) + 1;
                  var r = "".concat(n, "-").concat(As(vs + n + $l[n]));
                  return t ? "".concat(t, "-").concat(r) : r;
                })(n.displayName, n.parentComponentId)
              : u,
          d = n.displayName,
          f =
            void 0 === d
              ? (function (e) {
                  return Ms(e)
                    ? "styled.".concat(e)
                    : "Styled(".concat(Fs(e), ")");
                })(t)
              : d,
          p =
            n.displayName && n.componentId
              ? "".concat(Ps(n.displayName), "-").concat(n.componentId)
              : n.componentId || c,
          h = o && a.attrs ? a.attrs.concat(l).filter(Boolean) : l,
          g = n.shouldForwardProp;
        if (o && a.shouldForwardProp) {
          var m = a.shouldForwardProp;
          if (n.shouldForwardProp) {
            var v = n.shouldForwardProp;
            g = function (e, t) {
              return m(e, t) && v(e, t);
            };
          } else g = m;
        }
        var y = new Vl(r, p, o ? a.componentStyle : void 0);
        function b(t, n) {
          return (function (t, n, r) {
            var o = t.attrs,
              a = t.componentStyle,
              i = t.defaultProps,
              s = t.foldedComponentIds,
              l = t.styledComponentId,
              u = t.target,
              c = e.useContext(Wl),
              d = Dl(),
              f = t.shouldForwardProp || d.shouldForwardProp,
              p = ks(n, c, i) || Ss,
              h = (function (e, t, n) {
                for (
                  var r,
                    o = ci(ci({}, t), { className: void 0, theme: n }),
                    a = 0;
                  a < e.length;
                  a += 1
                ) {
                  var i = el((r = e[a])) ? r(o) : r;
                  for (var s in i)
                    o[s] =
                      "className" === s
                        ? nl(o[s], i[s])
                        : "style" === s
                        ? ci(ci({}, o[s]), i[s])
                        : i[s];
                }
                return (
                  t.className && (o.className = nl(o.className, t.className)), o
                );
              })(o, n, p),
              g = h.as || u,
              m = {};
            for (var v in h)
              void 0 === h[v] ||
                "$" === v[0] ||
                "as" === v ||
                ("theme" === v && h.theme === p) ||
                ("forwardedAs" === v
                  ? (m.as = h.forwardedAs)
                  : (f && !f(v, g)) || (m[v] = h[v]));
            var y = (function (e, t) {
                var n = Dl();
                return e.generateAndInjectStyles(t, n.styleSheet, n.stylis);
              })(a, h),
              b = nl(s, l);
            return (
              y && (b += " " + y),
              h.className && (b += " " + h.className),
              (m[Ms(g) && !Es.has(g) ? "class" : "className"] = b),
              (m.ref = r),
              (0, e.createElement)(g, m)
            );
          })(w, t, n);
        }
        b.displayName = f;
        var w = e.forwardRef(b);
        return (
          (w.attrs = h),
          (w.componentStyle = y),
          (w.displayName = f),
          (w.shouldForwardProp = g),
          (w.foldedComponentIds = o
            ? nl(a.foldedComponentIds, a.styledComponentId)
            : ""),
          (w.styledComponentId = p),
          (w.target = o ? a.target : t),
          Object.defineProperty(w, "defaultProps", {
            get: function () {
              return this._foldedDefaultProps;
            },
            set: function (e) {
              this._foldedDefaultProps = o
                ? (function (e) {
                    for (var t = [], n = 1; n < arguments.length; n++)
                      t[n - 1] = arguments[n];
                    for (var r = 0, o = t; r < o.length; r++) al(e, o[r], !0);
                    return e;
                  })({}, a.defaultProps, e)
                : e;
            },
          }),
          il(w, function () {
            return ".".concat(w.styledComponentId);
          }),
          i &&
            Xs(w, t, {
              attrs: !0,
              componentStyle: !0,
              displayName: !0,
              foldedComponentIds: !0,
              shouldForwardProp: !0,
              styledComponentId: !0,
              target: !0,
            }),
          w
        );
      }
      function ql(e, t) {
        for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
          n.push(t[r], e[r + 1]);
        return n;
      }
      var Ql = function (e) {
        return Object.assign(e, { isCss: !0 });
      };
      function Jl(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        if (el(e) || ol(e)) return Ql(Ul(ql(xs, di([e], t, !0))));
        var r = e;
        return 0 === t.length && 1 === r.length && "string" == typeof r[0]
          ? Ul(r)
          : Ql(Ul(ql(r, t)));
      }
      function Gl(e, t, n) {
        if ((void 0 === n && (n = Ss), !t)) throw sl(1, t);
        var r = function (r) {
          for (var o = [], a = 1; a < arguments.length; a++)
            o[a - 1] = arguments[a];
          return e(t, n, Jl.apply(void 0, di([r], o, !1)));
        };
        return (
          (r.attrs = function (r) {
            return Gl(
              e,
              t,
              ci(ci({}, n), {
                attrs: Array.prototype.concat(n.attrs, r).filter(Boolean),
              })
            );
          }),
          (r.withConfig = function (r) {
            return Gl(e, t, ci(ci({}, n), r));
          }),
          r
        );
      }
      var Yl = function (e) {
          return Gl(Kl, e);
        },
        Xl = Yl;
      Es.forEach(function (e) {
        Xl[e] = Yl(e);
      });
      !(function () {
        function e(e, t) {
          (this.rules = e),
            (this.componentId = t),
            (this.isStatic = Hl(e)),
            Cl.registerId(this.componentId + 1);
        }
        (e.prototype.createStyles = function (e, t, n, r) {
          var o = r(rl(Ul(this.rules, t, n, r)), ""),
            a = this.componentId + e;
          n.insertRules(a, a, o);
        }),
          (e.prototype.removeStyles = function (e, t) {
            t.clearRules(this.componentId + e);
          }),
          (e.prototype.renderStyles = function (e, t, n, r) {
            e > 2 && Cl.registerId(this.componentId + e),
              this.removeStyles(e, n),
              this.createStyles(e, t, n, r);
          });
      })();
      var eu;
      (function () {
        function t() {
          var t = this;
          (this._emitSheetCSS = function () {
            var e = t.instance.toString(),
              n = yl(),
              r = rl(
                [
                  n && 'nonce="'.concat(n, '"'),
                  "".concat(hs, '="true"'),
                  "".concat(ms, '="').concat(vs, '"'),
                ].filter(Boolean),
                " "
              );
            return "<style ".concat(r, ">").concat(e, "</style>");
          }),
            (this.getStyleTags = function () {
              if (t.sealed) throw sl(2);
              return t._emitSheetCSS();
            }),
            (this.getStyleElement = function () {
              var n;
              if (t.sealed) throw sl(2);
              var r =
                  (((n = {})[hs] = ""),
                  (n[ms] = vs),
                  (n.dangerouslySetInnerHTML = {
                    __html: t.instance.toString(),
                  }),
                  n),
                o = yl();
              return (
                o && (r.nonce = o),
                [e.createElement("style", ci({}, r, { key: "sc-0-0" }))]
              );
            }),
            (this.seal = function () {
              t.sealed = !0;
            }),
            (this.instance = new Cl({ isServer: !0 })),
            (this.sealed = !1);
        }
        (t.prototype.collectStyles = function (t) {
          if (this.sealed) throw sl(2);
          return e.createElement(Il, { sheet: this.instance }, t);
        }),
          (t.prototype.interleaveWithNodeStream = function (e) {
            throw sl(3);
          });
      })(),
        "__sc-".concat(hs, "__");
      const tu = Xl.div(
        eu ||
          ((nu = [
            "\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 107px;\n  p {\n    margin-top: 14px;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 18.2px;\n  }\n",
          ]),
          ru || (ru = nu.slice(0)),
          (eu = Object.freeze(
            Object.defineProperties(nu, { raw: { value: Object.freeze(ru) } })
          )))
      );
      var nu, ru;
      const ou = () =>
          (window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth) < 896,
        au = (e) => {
          let { content: t } = e;
          return (0, ai.jsxs)(tu, {
            children: [
              ou() ? (0, ai.jsx)(si, {}) : (0, ai.jsx)(ui, {}),
              (0, ai.jsx)("p", { children: t }),
            ],
          });
        },
        iu = { Type: [] },
        su = () => {
          var t;
          const [n, r] = (0, e.useState)(iu),
            [o, a] = (0, e.useState)(!1),
            [i, s] = (0, e.useState)("activeClaims"),
            { t: l } = ri("policyList"),
            u =
              null === (t = Object.entries(n)) || void 0 === t
                ? void 0
                : t.reduce(
                    (e, t) => (e.push({ value: [...t[1]], title: t[0] }), e),
                    []
                  ),
            c = [
              {
                data: {
                  insuranceName: l("insuranceName1"),
                  policy_num: "#123445523432423",
                  duration: "01 Jan 2023 - 01 Jan 2024",
                  area: "India",
                  names: ["Abhishek Singh", "Selva ganesh", "Karthik Subburaj"],
                },
                currentTab: "active",
              },
              {
                data: {
                  insuranceName: l("insuranceName1"),
                  policy_num: "#123445523432423",
                  duration: "01 Jan 2023 - 01 Jan 2024",
                  area: "India",
                  names: ["Abhishek Singh", "Selva ganesh", "Karthik Subburaj"],
                },
                currentTab: "active",
              },
            ],
            d = [
              {
                data: {
                  insuranceName: l("insuranceName1"),
                  policy_num: "#123445523432423",
                  duration: "01 Jan 2023 - 01 Jan 2024",
                  area: "India",
                  names: [
                    "Abhishek Singh",
                    "Selva ganesh",
                    "Karthik Subburaj",
                  ].map((e) => l(e)),
                },
                currentTab: "inActive",
              },
              {
                data: {
                  insuranceName: l("insuranceName1"),
                  policy_num: "#123445523432423",
                  duration: "01 Jan 2023 - 01 Jan 2024",
                  area: "India",
                  names: ["Abhishek Singh", "Selva ganesh", "Karthik Subburaj"],
                },
                currentTab: "inActive",
              },
              {
                data: {
                  insuranceName: l("insuranceName1"),
                  policy_num: "#123445523432423",
                  duration: "01 Jan 2023 - 01 Jan 2024",
                  area: "India",
                  names: ["Abhishek Singh", "Selva ganesh", "Karthik Subburaj"],
                },
                currentTab: "inActive",
              },
            ],
            f = [
              {
                label: l("activePolicies"),
                value: "activeClaims",
                dataNo: (null === c || void 0 === c ? void 0 : c.length) || 0,
              },
              {
                label: l("inactivePolicies"),
                value: "pastClaims",
                dataNo: (null === d || void 0 === d ? void 0 : d.length) || 0,
              },
            ],
            p = () => {
              r(iu);
            },
            h = (e, t) => {
              r({ ...n, [t]: n[t].filter((t) => t !== e) });
            };
          return (0, ai.jsxs)("div", {
            children: [
              (0, ai.jsx)("div", {
                className:
                  "md:text-[20px] md:leading-[26px] mb-[10px] text-[26px] font-semibold leading-[31.2px] ",
                children: l("policies"),
              }),
              (0, ai.jsxs)("div", {
                className:
                  "md:flex flex-row-reverse justify-between items-center gap-[10px] md:flex-wrap ",
                children: [
                  (0, ai.jsx)("div", {
                    className: "mb-[10px]",
                    children: (0, ai.jsxs)("div", {
                      className:
                        "md:max-w-[386px] md:flex-row-reverse flex justify-center items-center gap-3 w-full",
                      children: [
                        (0, ai.jsx)(Xr, {
                          placeholder: l("searchPolicies"),
                          handleChange: () => {},
                        }),
                        null !== u &&
                        void 0 !== u &&
                        u
                          .map((e) =>
                            null === e || void 0 === e ? void 0 : e.value
                          )
                          .some((e) =>
                            null === e || void 0 === e ? void 0 : e.length
                          )
                          ? (0, ai.jsxs)("div", {
                              onClick: () => a(!0),
                              className:
                                "border bg-white relative border-brand-500 border-solid p-[14px]  flex items-center justify-center rounded-md relative cursor-pointer text-base gap-10px not-italic font-normal leading-[20.6px] gap-[10px] p-[12px]",
                              children: [
                                (0, ai.jsx)("span", {
                                  className:
                                    "p-[7px] absolute top-[5px] right-[3px] text-xs bg-brand-600 text-gray-25 flex h-5 justify-center items-center w-5 rounded-xl gap-[10px] max-w-5",
                                  children: u.reduce(
                                    (e, t) => (
                                      e.push(
                                        ...(null === t || void 0 === t
                                          ? void 0
                                          : t.value)
                                      ),
                                      e
                                    ),
                                    []
                                  ).length,
                                }),
                                !ou() &&
                                  (0, ai.jsx)("p", {
                                    className: "text-brand-500",
                                    children: l("filter"),
                                  }),
                                (0, ai.jsx)(ii, {}),
                              ],
                            })
                          : ou()
                          ? (0, ai.jsx)("div", {
                              onClick: () => a(!0),
                              className:
                                "bg-white relative border border-gray-200 border-solid p-[14px] cursor-pointer rounded-md flex items-center justify-center text-base not-italic font-normal leading-6",
                              children: (0, ai.jsx)(li, {}),
                            })
                          : (0, ai.jsxs)("div", {
                              onClick: () => a(!0),
                              className:
                                " w-[37%] bg-white border border-gray-200 border-solid p-[12px] cursor-pointer rounded-md flex items-center justify-center text-[18px] not-italic font-normal leading-[23.4px] gap-[10px]",
                              children: [
                                (0, ai.jsx)("p", {
                                  className: "text-gray-600",
                                  children: l("filter"),
                                }),
                                (0, ai.jsx)(li, {}),
                              ],
                            }),
                      ],
                    }),
                  }),
                  ou() &&
                    Object.values(n)
                      .map((e) => e)
                      .some((e) =>
                        null === e || void 0 === e ? void 0 : e.length
                      ) &&
                    (0, ai.jsx)("div", {
                      children: (0, ai.jsx)(to, {
                        inputStyle: {},
                        claimsItems: u,
                        handleClearAll: p,
                        handleFilter: h,
                      }),
                    }),
                  (0, ai.jsx)("div", {
                    className: "xl:w-[30.3%] md:w-[44.3%]  mb-[10px] w-[100%]",
                    children: (0, ai.jsx)(Gr, {
                      tabContent: f,
                      handleChange: (e) => {
                        s(e);
                      },
                    }),
                  }),
                ],
              }),
              !ou() &&
                Object.values(n)
                  .map((e) => e)
                  .some((e) =>
                    null === e || void 0 === e ? void 0 : e.length
                  ) &&
                (null === u || void 0 === u ? void 0 : u.length) &&
                (0, ai.jsx)("div", {
                  children: (0, ai.jsx)(to, {
                    inputStyle: { marginLeft: "auto" },
                    claimsItems: u,
                    handleClearAll: p,
                    handleFilter: h,
                  }),
                }),
              "activeClaims" === i
                ? (0, ai.jsx)("div", {
                    className:
                      "mb-[10px] flex flex-wrap items-start gap-[24px]",
                    children:
                      null !== c && void 0 !== c && c.length
                        ? (0, ai.jsx)(ai.Fragment, {
                            children: c.map((e, t) =>
                              (0, ai.jsx)(so, {
                                data:
                                  null === e || void 0 === e ? void 0 : e.data,
                                currentTab:
                                  null === e || void 0 === e
                                    ? void 0
                                    : e.currentTab,
                              })
                            ),
                          })
                        : (0, ai.jsx)(au, {
                            content: "No Active Claims Found!",
                          }),
                  })
                : null !== d && void 0 !== d && d.length
                ? (0, ai.jsx)("div", {
                    className:
                      "mb-[10px] flex flex-wrap items-start gap-[24px]",
                    children: d.map((e, t) =>
                      (0, ai.jsx)(so, {
                        data: null === e || void 0 === e ? void 0 : e.data,
                        currentTab:
                          null === e || void 0 === e ? void 0 : e.currentTab,
                      })
                    ),
                  })
                : (0, ai.jsx)(au, { content: "No Claims Found!" }),
              (0, ai.jsx)(oo, {
                isFilter: o,
                setIsFilter: a,
                setChipContainer: r,
                chipData: n,
                filterData: [
                  {
                    id: 1,
                    title: "Type",
                    content: [
                      { id: 1, label: "Rohit Prakash", value: "rohitPrakash" },
                      { id: 2, label: "Ananya Rohit", value: "ananyaRohit" },
                      { id: 3, label: "Renjit Rohit", value: "renjitRohit" },
                      { id: 4, label: "Asha Rohit", value: "ashaRohit" },
                    ],
                  },
                ],
              }),
            ],
          });
        },
        lu = (t) => {
          let { locale: n } = t;
          return (
            (0, e.useEffect)(() => {
              oi.changeLanguage(n), console.log(n);
            }, [n]),
            (0, ai.jsx)(e.Suspense, {
              fallback: (0, ai.jsx)(ai.Fragment, { children: "loading..." }),
              children: (0, ai.jsx)("div", {
                className: "webContainer",
                children: (0, ai.jsx)(co, {
                  theme: "theme1",
                  locale: n,
                  children: (0, ai.jsx)(su, {}),
                }),
              }),
            })
          );
        };
      class uu extends HTMLElement {
        connectedCallback() {
          const e = this.getAttribute("locale"),
            n = this.getAttribute("theme");
          t.render(
            (0, ai.jsx)(ai.Fragment, {
              children: (0, ai.jsx)(co, {
                projectThemeIdentifier: n,
                locale: e,
                children: (0, ai.jsx)(lu, { locale: e }),
              }),
            }),
            this
          );
        }
      }
      window.customElements.define("policy-web-component", uu);
      const cu = function (e) {
        return (0, ai.jsx)("div", {
          className: "App sm-min-w-4xl",
          children: (0, ai.jsx)("policy-web-component", {
            locale: "en",
            theme: "theme1",
          }),
        });
      };
      t.createRoot(document.getElementById("root")).render(
        (0, ai.jsx)(e.StrictMode, { children: (0, ai.jsx)(cu, {}) })
      );
    })();
})();
//# sourceMappingURL=main.d3a4a228.js.map
