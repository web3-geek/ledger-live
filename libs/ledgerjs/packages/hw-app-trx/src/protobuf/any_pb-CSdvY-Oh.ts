// @ts-nocheck
import { g as getDefaultExportFromCjs, a as googleProtobuf } from "./google-protobuf-D-p9-2P9";
var any_pb = {};
(function (exports) {
  var jspb = googleProtobuf;
  var goog = jspb;
  var global = typeof globalThis !== "undefined" && globalThis || typeof window !== "undefined" && window || typeof global !== "undefined" && global || typeof self !== "undefined" && self || (function () {
    return this;
  }).call(null) || Function("return this")();
  goog.exportSymbol("proto.google.protobuf.Any", null, global);
  proto.google.protobuf.Any = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
  };
  goog.inherits(proto.google.protobuf.Any, jspb.Message);
  if (goog.DEBUG && !COMPILED) {
    proto.google.protobuf.Any.displayName = "proto.google.protobuf.Any";
  }
  if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.google.protobuf.Any.prototype.toObject = function (opt_includeInstance) {
      return proto.google.protobuf.Any.toObject(opt_includeInstance, this);
    };
    proto.google.protobuf.Any.toObject = function (includeInstance, msg) {
      var obj = {
        typeUrl: jspb.Message.getFieldWithDefault(msg, 1, ""),
        value: msg.getValue_asB64()
      };
      if (includeInstance) {
        obj.$jspbMessageInstance = msg;
      }
      return obj;
    };
  }
  proto.google.protobuf.Any.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.google.protobuf.Any();
    return proto.google.protobuf.Any.deserializeBinaryFromReader(msg, reader);
  };
  proto.google.protobuf.Any.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = (
            /** @type {string} */
            reader.readString()
          );
          msg.setTypeUrl(value);
          break;
        case 2:
          var value = (
            /** @type {!Uint8Array} */
            reader.readBytes()
          );
          msg.setValue(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };
  proto.google.protobuf.Any.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.google.protobuf.Any.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  };
  proto.google.protobuf.Any.serializeBinaryToWriter = function (message, writer) {
    var f = void 0;
    f = message.getTypeUrl();
    if (f.length > 0) {
      writer.writeString(
        1,
        f
      );
    }
    f = message.getValue_asU8();
    if (f.length > 0) {
      writer.writeBytes(
        2,
        f
      );
    }
  };
  proto.google.protobuf.Any.prototype.getTypeUrl = function () {
    return (
      /** @type {string} */
      jspb.Message.getFieldWithDefault(this, 1, "")
    );
  };
  proto.google.protobuf.Any.prototype.setTypeUrl = function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };
  proto.google.protobuf.Any.prototype.getValue = function () {
    return (
      /** @type {!(string|Uint8Array)} */
      jspb.Message.getFieldWithDefault(this, 2, "")
    );
  };
  proto.google.protobuf.Any.prototype.getValue_asB64 = function () {
    return (
      /** @type {string} */
      jspb.Message.bytesAsB64(
        this.getValue()
      )
    );
  };
  proto.google.protobuf.Any.prototype.getValue_asU8 = function () {
    return (
      /** @type {!Uint8Array} */
      jspb.Message.bytesAsU8(
        this.getValue()
      )
    );
  };
  proto.google.protobuf.Any.prototype.setValue = function (value) {
    return jspb.Message.setProto3BytesField(this, 2, value);
  };
  goog.object.extend(exports, proto.google.protobuf);
  proto.google.protobuf.Any.prototype.getTypeName = function () {
    return this.getTypeUrl().split("/").pop();
  };
  proto.google.protobuf.Any.prototype.pack = function (serialized, name, opt_typeUrlPrefix) {
    if (!opt_typeUrlPrefix) {
      opt_typeUrlPrefix = "type.googleapis.com/";
    }
    if (opt_typeUrlPrefix.substr(-1) != "/") {
      this.setTypeUrl(opt_typeUrlPrefix + "/" + name);
    } else {
      this.setTypeUrl(opt_typeUrlPrefix + name);
    }
    this.setValue(serialized);
  };
  proto.google.protobuf.Any.prototype.unpack = function (deserialize, name) {
    if (this.getTypeName() == name) {
      return deserialize(this.getValue_asU8());
    } else {
      return null;
    }
  };
})(any_pb);
const Any = /* @__PURE__ */ getDefaultExportFromCjs(any_pb);
export {
  Any as A
};
