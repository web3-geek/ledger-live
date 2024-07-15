// @ts-nocheck
import { G as GoogleProtobuf } from "./google-protobuf-D-p9-2P9";
import { A as Any } from "./any_pb-CSdvY-Oh";
var goog$1 = GoogleProtobuf;
var global$1 = (function () {
  return this || window || global$1 || self || Function("return this")();
}).call(null);
goog$1.object.extend(proto, Any);
goog$1.exportSymbol("proto.protocol.AccountId", null, global$1);
goog$1.exportSymbol("proto.protocol.MarketOrderDetail", null, global$1);
goog$1.exportSymbol("proto.protocol.Transaction", null, global$1);
goog$1.exportSymbol("proto.protocol.Transaction.Contract", null, global$1);
goog$1.exportSymbol("proto.protocol.Transaction.Contract.ContractType", null, global$1);
goog$1.exportSymbol("proto.protocol.Transaction.Result", null, global$1);
goog$1.exportSymbol("proto.protocol.Transaction.Result.code", null, global$1);
goog$1.exportSymbol("proto.protocol.Transaction.Result.contractResult", null, global$1);
goog$1.exportSymbol("proto.protocol.Transaction.raw", null, global$1);
goog$1.exportSymbol("proto.protocol.authority", null, global$1);
proto.protocol.AccountId = function (opt_data) {
  GoogleProtobuf.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog$1.inherits(proto.protocol.AccountId, GoogleProtobuf.Message);
if (goog$1.DEBUG && !COMPILED) {
  proto.protocol.AccountId.displayName = "proto.protocol.AccountId";
}
proto.protocol.authority = function (opt_data) {
  GoogleProtobuf.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog$1.inherits(proto.protocol.authority, GoogleProtobuf.Message);
if (goog$1.DEBUG && !COMPILED) {
  proto.protocol.authority.displayName = "proto.protocol.authority";
}
proto.protocol.MarketOrderDetail = function (opt_data) {
  GoogleProtobuf.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog$1.inherits(proto.protocol.MarketOrderDetail, GoogleProtobuf.Message);
if (goog$1.DEBUG && !COMPILED) {
  proto.protocol.MarketOrderDetail.displayName = "proto.protocol.MarketOrderDetail";
}
proto.protocol.Transaction = function (opt_data) {
  GoogleProtobuf.Message.initialize(this, opt_data, 0, -1, proto.protocol.Transaction.repeatedFields_, null);
};
goog$1.inherits(proto.protocol.Transaction, GoogleProtobuf.Message);
if (goog$1.DEBUG && !COMPILED) {
  proto.protocol.Transaction.displayName = "proto.protocol.Transaction";
}
proto.protocol.Transaction.Contract = function (opt_data) {
  GoogleProtobuf.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog$1.inherits(proto.protocol.Transaction.Contract, GoogleProtobuf.Message);
if (goog$1.DEBUG && !COMPILED) {
  proto.protocol.Transaction.Contract.displayName = "proto.protocol.Transaction.Contract";
}
proto.protocol.Transaction.Result = function (opt_data) {
  GoogleProtobuf.Message.initialize(this, opt_data, 0, -1, proto.protocol.Transaction.Result.repeatedFields_, null);
};
goog$1.inherits(proto.protocol.Transaction.Result, GoogleProtobuf.Message);
if (goog$1.DEBUG && !COMPILED) {
  proto.protocol.Transaction.Result.displayName = "proto.protocol.Transaction.Result";
}
proto.protocol.Transaction.raw = function (opt_data) {
  GoogleProtobuf.Message.initialize(this, opt_data, 0, -1, proto.protocol.Transaction.raw.repeatedFields_, null);
};
goog$1.inherits(proto.protocol.Transaction.raw, GoogleProtobuf.Message);
if (goog$1.DEBUG && !COMPILED) {
  proto.protocol.Transaction.raw.displayName = "proto.protocol.Transaction.raw";
}
if (GoogleProtobuf.Message.GENERATE_TO_OBJECT) {
  proto.protocol.AccountId.prototype.toObject = function (opt_includeInstance) {
    return proto.protocol.AccountId.toObject(opt_includeInstance, this);
  };
  proto.protocol.AccountId.toObject = function (includeInstance, msg) {
    var obj = {
      name: msg.getName_asB64(),
      address: msg.getAddress_asB64()
    };
    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}
proto.protocol.AccountId.deserializeBinary = function (bytes) {
  var reader = new GoogleProtobuf.BinaryReader(bytes);
  var msg = new proto.protocol.AccountId();
  return proto.protocol.AccountId.deserializeBinaryFromReader(msg, reader);
};
proto.protocol.AccountId.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = (
          /** @type {!Uint8Array} */
          reader.readBytes()
        );
        msg.setName(value);
        break;
      case 2:
        var value = (
          /** @type {!Uint8Array} */
          reader.readBytes()
        );
        msg.setAddress(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};
proto.protocol.AccountId.prototype.serializeBinary = function () {
  var writer = new GoogleProtobuf.BinaryWriter();
  proto.protocol.AccountId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
proto.protocol.AccountId.serializeBinaryToWriter = function (message, writer) {
  var f = void 0;
  f = message.getName_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};
proto.protocol.AccountId.prototype.getName = function () {
  return (
    /** @type {!(string|Uint8Array)} */
    GoogleProtobuf.Message.getFieldWithDefault(this, 1, "")
  );
};
proto.protocol.AccountId.prototype.getName_asB64 = function () {
  return (
    /** @type {string} */
    GoogleProtobuf.Message.bytesAsB64(
      this.getName()
    )
  );
};
proto.protocol.AccountId.prototype.getName_asU8 = function () {
  return (
    /** @type {!Uint8Array} */
    GoogleProtobuf.Message.bytesAsU8(
      this.getName()
    )
  );
};
proto.protocol.AccountId.prototype.setName = function (value) {
  return GoogleProtobuf.Message.setProto3BytesField(this, 1, value);
};
proto.protocol.AccountId.prototype.getAddress = function () {
  return (
    /** @type {!(string|Uint8Array)} */
    GoogleProtobuf.Message.getFieldWithDefault(this, 2, "")
  );
};
proto.protocol.AccountId.prototype.getAddress_asB64 = function () {
  return (
    /** @type {string} */
    GoogleProtobuf.Message.bytesAsB64(
      this.getAddress()
    )
  );
};
proto.protocol.AccountId.prototype.getAddress_asU8 = function () {
  return (
    /** @type {!Uint8Array} */
    GoogleProtobuf.Message.bytesAsU8(
      this.getAddress()
    )
  );
};
proto.protocol.AccountId.prototype.setAddress = function (value) {
  return GoogleProtobuf.Message.setProto3BytesField(this, 2, value);
};
if (GoogleProtobuf.Message.GENERATE_TO_OBJECT) {
  proto.protocol.authority.prototype.toObject = function (opt_includeInstance) {
    return proto.protocol.authority.toObject(opt_includeInstance, this);
  };
  proto.protocol.authority.toObject = function (includeInstance, msg) {
    var f, obj = {
      account: (f = msg.getAccount()) && proto.protocol.AccountId.toObject(includeInstance, f),
      permissionName: msg.getPermissionName_asB64()
    };
    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}
proto.protocol.authority.deserializeBinary = function (bytes) {
  var reader = new GoogleProtobuf.BinaryReader(bytes);
  var msg = new proto.protocol.authority();
  return proto.protocol.authority.deserializeBinaryFromReader(msg, reader);
};
proto.protocol.authority.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.protocol.AccountId();
        reader.readMessage(value, proto.protocol.AccountId.deserializeBinaryFromReader);
        msg.setAccount(value);
        break;
      case 2:
        var value = (
          /** @type {!Uint8Array} */
          reader.readBytes()
        );
        msg.setPermissionName(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};
proto.protocol.authority.prototype.serializeBinary = function () {
  var writer = new GoogleProtobuf.BinaryWriter();
  proto.protocol.authority.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
proto.protocol.authority.serializeBinaryToWriter = function (message, writer) {
  var f = void 0;
  f = message.getAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.AccountId.serializeBinaryToWriter
    );
  }
  f = message.getPermissionName_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};
proto.protocol.authority.prototype.getAccount = function () {
  return (
    /** @type{?proto.protocol.AccountId} */
    GoogleProtobuf.Message.getWrapperField(this, proto.protocol.AccountId, 1)
  );
};
proto.protocol.authority.prototype.setAccount = function (value) {
  return GoogleProtobuf.Message.setWrapperField(this, 1, value);
};
proto.protocol.authority.prototype.clearAccount = function () {
  return this.setAccount(void 0);
};
proto.protocol.authority.prototype.hasAccount = function () {
  return GoogleProtobuf.Message.getField(this, 1) != null;
};
proto.protocol.authority.prototype.getPermissionName = function () {
  return (
    /** @type {!(string|Uint8Array)} */
    GoogleProtobuf.Message.getFieldWithDefault(this, 2, "")
  );
};
proto.protocol.authority.prototype.getPermissionName_asB64 = function () {
  return (
    /** @type {string} */
    GoogleProtobuf.Message.bytesAsB64(
      this.getPermissionName()
    )
  );
};
proto.protocol.authority.prototype.getPermissionName_asU8 = function () {
  return (
    /** @type {!Uint8Array} */
    GoogleProtobuf.Message.bytesAsU8(
      this.getPermissionName()
    )
  );
};
proto.protocol.authority.prototype.setPermissionName = function (value) {
  return GoogleProtobuf.Message.setProto3BytesField(this, 2, value);
};
if (GoogleProtobuf.Message.GENERATE_TO_OBJECT) {
  proto.protocol.MarketOrderDetail.prototype.toObject = function (opt_includeInstance) {
    return proto.protocol.MarketOrderDetail.toObject(opt_includeInstance, this);
  };
  proto.protocol.MarketOrderDetail.toObject = function (includeInstance, msg) {
    var obj = {
      makerorderid: msg.getMakerorderid_asB64(),
      takerorderid: msg.getTakerorderid_asB64(),
      fillsellquantity: GoogleProtobuf.Message.getFieldWithDefault(msg, 3, 0),
      fillbuyquantity: GoogleProtobuf.Message.getFieldWithDefault(msg, 4, 0)
    };
    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}
proto.protocol.MarketOrderDetail.deserializeBinary = function (bytes) {
  var reader = new GoogleProtobuf.BinaryReader(bytes);
  var msg = new proto.protocol.MarketOrderDetail();
  return proto.protocol.MarketOrderDetail.deserializeBinaryFromReader(msg, reader);
};
proto.protocol.MarketOrderDetail.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = (
          /** @type {!Uint8Array} */
          reader.readBytes()
        );
        msg.setMakerorderid(value);
        break;
      case 2:
        var value = (
          /** @type {!Uint8Array} */
          reader.readBytes()
        );
        msg.setTakerorderid(value);
        break;
      case 3:
        var value = (
          /** @type {number} */
          reader.readInt64()
        );
        msg.setFillsellquantity(value);
        break;
      case 4:
        var value = (
          /** @type {number} */
          reader.readInt64()
        );
        msg.setFillbuyquantity(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};
proto.protocol.MarketOrderDetail.prototype.serializeBinary = function () {
  var writer = new GoogleProtobuf.BinaryWriter();
  proto.protocol.MarketOrderDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
proto.protocol.MarketOrderDetail.serializeBinaryToWriter = function (message, writer) {
  var f = void 0;
  f = message.getMakerorderid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getTakerorderid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getFillsellquantity();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getFillbuyquantity();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};
proto.protocol.MarketOrderDetail.prototype.getMakerorderid = function () {
  return (
    /** @type {!(string|Uint8Array)} */
    GoogleProtobuf.Message.getFieldWithDefault(this, 1, "")
  );
};
proto.protocol.MarketOrderDetail.prototype.getMakerorderid_asB64 = function () {
  return (
    /** @type {string} */
    GoogleProtobuf.Message.bytesAsB64(
      this.getMakerorderid()
    )
  );
};
proto.protocol.MarketOrderDetail.prototype.getMakerorderid_asU8 = function () {
  return (
    /** @type {!Uint8Array} */
    GoogleProtobuf.Message.bytesAsU8(
      this.getMakerorderid()
    )
  );
};
proto.protocol.MarketOrderDetail.prototype.setMakerorderid = function (value) {
  return GoogleProtobuf.Message.setProto3BytesField(this, 1, value);
};
proto.protocol.MarketOrderDetail.prototype.getTakerorderid = function () {
  return (
    /** @type {!(string|Uint8Array)} */
    GoogleProtobuf.Message.getFieldWithDefault(this, 2, "")
  );
};
proto.protocol.MarketOrderDetail.prototype.getTakerorderid_asB64 = function () {
  return (
    /** @type {string} */
    GoogleProtobuf.Message.bytesAsB64(
      this.getTakerorderid()
    )
  );
};
proto.protocol.MarketOrderDetail.prototype.getTakerorderid_asU8 = function () {
  return (
    /** @type {!Uint8Array} */
    GoogleProtobuf.Message.bytesAsU8(
      this.getTakerorderid()
    )
  );
};
proto.protocol.MarketOrderDetail.prototype.setTakerorderid = function (value) {
  return GoogleProtobuf.Message.setProto3BytesField(this, 2, value);
};
proto.protocol.MarketOrderDetail.prototype.getFillsellquantity = function () {
  return (
    /** @type {number} */
    GoogleProtobuf.Message.getFieldWithDefault(this, 3, 0)
  );
};
proto.protocol.MarketOrderDetail.prototype.setFillsellquantity = function (value) {
  return GoogleProtobuf.Message.setProto3IntField(this, 3, value);
};
proto.protocol.MarketOrderDetail.prototype.getFillbuyquantity = function () {
  return (
    /** @type {number} */
    GoogleProtobuf.Message.getFieldWithDefault(this, 4, 0)
  );
};
proto.protocol.MarketOrderDetail.prototype.setFillbuyquantity = function (value) {
  return GoogleProtobuf.Message.setProto3IntField(this, 4, value);
};
proto.protocol.Transaction.repeatedFields_ = [2, 5];
if (GoogleProtobuf.Message.GENERATE_TO_OBJECT) {
  proto.protocol.Transaction.prototype.toObject = function (opt_includeInstance) {
    return proto.protocol.Transaction.toObject(opt_includeInstance, this);
  };
  proto.protocol.Transaction.toObject = function (includeInstance, msg) {
    var f, obj = {
      rawData: (f = msg.getRawData()) && proto.protocol.Transaction.raw.toObject(includeInstance, f),
      signatureList: msg.getSignatureList_asB64(),
      retList: GoogleProtobuf.Message.toObjectList(
        msg.getRetList(),
        proto.protocol.Transaction.Result.toObject,
        includeInstance
      )
    };
    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}
proto.protocol.Transaction.deserializeBinary = function (bytes) {
  var reader = new GoogleProtobuf.BinaryReader(bytes);
  var msg = new proto.protocol.Transaction();
  return proto.protocol.Transaction.deserializeBinaryFromReader(msg, reader);
};
proto.protocol.Transaction.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.protocol.Transaction.raw();
        reader.readMessage(value, proto.protocol.Transaction.raw.deserializeBinaryFromReader);
        msg.setRawData(value);
        break;
      case 2:
        var value = (
          /** @type {!Uint8Array} */
          reader.readBytes()
        );
        msg.addSignature(value);
        break;
      case 5:
        var value = new proto.protocol.Transaction.Result();
        reader.readMessage(value, proto.protocol.Transaction.Result.deserializeBinaryFromReader);
        msg.addRet(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};
proto.protocol.Transaction.prototype.serializeBinary = function () {
  var writer = new GoogleProtobuf.BinaryWriter();
  proto.protocol.Transaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
proto.protocol.Transaction.serializeBinaryToWriter = function (message, writer) {
  var f = void 0;
  f = message.getRawData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.Transaction.raw.serializeBinaryToWriter
    );
  }
  f = message.getSignatureList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      2,
      f
    );
  }
  f = message.getRetList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.protocol.Transaction.Result.serializeBinaryToWriter
    );
  }
};
if (GoogleProtobuf.Message.GENERATE_TO_OBJECT) {
  proto.protocol.Transaction.Contract.prototype.toObject = function (opt_includeInstance) {
    return proto.protocol.Transaction.Contract.toObject(opt_includeInstance, this);
  };
  proto.protocol.Transaction.Contract.toObject = function (includeInstance, msg) {
    var f, obj = {
      type: GoogleProtobuf.Message.getFieldWithDefault(msg, 1, 0),
      parameter: (f = msg.getParameter()) && Any.Any.toObject(includeInstance, f),
      provider: msg.getProvider_asB64(),
      contractname: msg.getContractname_asB64(),
      permissionId: GoogleProtobuf.Message.getFieldWithDefault(msg, 5, 0)
    };
    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}
proto.protocol.Transaction.Contract.deserializeBinary = function (bytes) {
  var reader = new GoogleProtobuf.BinaryReader(bytes);
  var msg = new proto.protocol.Transaction.Contract();
  return proto.protocol.Transaction.Contract.deserializeBinaryFromReader(msg, reader);
};
proto.protocol.Transaction.Contract.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = (
          /** @type {!proto.protocol.Transaction.Contract.ContractType} */
          reader.readEnum()
        );
        msg.setType(value);
        break;
      case 2:
        var value = new Any.Any();
        reader.readMessage(value, Any.Any.deserializeBinaryFromReader);
        msg.setParameter(value);
        break;
      case 3:
        var value = (
          /** @type {!Uint8Array} */
          reader.readBytes()
        );
        msg.setProvider(value);
        break;
      case 4:
        var value = (
          /** @type {!Uint8Array} */
          reader.readBytes()
        );
        msg.setContractname(value);
        break;
      case 5:
        var value = (
          /** @type {number} */
          reader.readInt32()
        );
        msg.setPermissionId(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};
proto.protocol.Transaction.Contract.prototype.serializeBinary = function () {
  var writer = new GoogleProtobuf.BinaryWriter();
  proto.protocol.Transaction.Contract.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
proto.protocol.Transaction.Contract.serializeBinaryToWriter = function (message, writer) {
  var f = void 0;
  f = message.getType();
  if (f !== 0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getParameter();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      Any.Any.serializeBinaryToWriter
    );
  }
  f = message.getProvider_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getContractname_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getPermissionId();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};
proto.protocol.Transaction.Contract.ContractType = {
  ACCOUNTCREATECONTRACT: 0,
  TRANSFERCONTRACT: 1,
  TRANSFERASSETCONTRACT: 2,
  VOTEASSETCONTRACT: 3,
  VOTEWITNESSCONTRACT: 4,
  WITNESSCREATECONTRACT: 5,
  ASSETISSUECONTRACT: 6,
  WITNESSUPDATECONTRACT: 8,
  PARTICIPATEASSETISSUECONTRACT: 9,
  ACCOUNTUPDATECONTRACT: 10,
  FREEZEBALANCECONTRACT: 11,
  UNFREEZEBALANCECONTRACT: 12,
  WITHDRAWBALANCECONTRACT: 13,
  UNFREEZEASSETCONTRACT: 14,
  UPDATEASSETCONTRACT: 15,
  PROPOSALCREATECONTRACT: 16,
  PROPOSALAPPROVECONTRACT: 17,
  PROPOSALDELETECONTRACT: 18,
  SETACCOUNTIDCONTRACT: 19,
  CUSTOMCONTRACT: 20,
  CREATESMARTCONTRACT: 30,
  TRIGGERSMARTCONTRACT: 31,
  GETCONTRACT: 32,
  UPDATESETTINGCONTRACT: 33,
  EXCHANGECREATECONTRACT: 41,
  EXCHANGEINJECTCONTRACT: 42,
  EXCHANGEWITHDRAWCONTRACT: 43,
  EXCHANGETRANSACTIONCONTRACT: 44,
  UPDATEENERGYLIMITCONTRACT: 45,
  ACCOUNTPERMISSIONUPDATECONTRACT: 46,
  CLEARABICONTRACT: 48,
  UPDATEBROKERAGECONTRACT: 49,
  SHIELDEDTRANSFERCONTRACT: 51,
  MARKETSELLASSETCONTRACT: 52,
  MARKETCANCELORDERCONTRACT: 53
};
proto.protocol.Transaction.Contract.prototype.getType = function () {
  return (
    /** @type {!proto.protocol.Transaction.Contract.ContractType} */
    GoogleProtobuf.Message.getFieldWithDefault(this, 1, 0)
  );
};
proto.protocol.Transaction.Contract.prototype.setType = function (value) {
  return GoogleProtobuf.Message.setProto3EnumField(this, 1, value);
};
proto.protocol.Transaction.Contract.prototype.getParameter = function () {
  return (
    /** @type{?proto.google.protobuf.Any} */
    GoogleProtobuf.Message.getWrapperField(this, Any.Any, 2)
  );
};
proto.protocol.Transaction.Contract.prototype.setParameter = function (value) {
  return GoogleProtobuf.Message.setWrapperField(this, 2, value);
};
proto.protocol.Transaction.Contract.prototype.clearParameter = function () {
  return this.setParameter(void 0);
};
proto.protocol.Transaction.Contract.prototype.hasParameter = function () {
  return GoogleProtobuf.Message.getField(this, 2) != null;
};
proto.protocol.Transaction.Contract.prototype.getProvider = function () {
  return (
    /** @type {!(string|Uint8Array)} */
    GoogleProtobuf.Message.getFieldWithDefault(this, 3, "")
  );
};
proto.protocol.Transaction.Contract.prototype.getProvider_asB64 = function () {
  return (
    /** @type {string} */
    GoogleProtobuf.Message.bytesAsB64(
      this.getProvider()
    )
  );
};
proto.protocol.Transaction.Contract.prototype.getProvider_asU8 = function () {
  return (
    /** @type {!Uint8Array} */
    GoogleProtobuf.Message.bytesAsU8(
      this.getProvider()
    )
  );
};
proto.protocol.Transaction.Contract.prototype.setProvider = function (value) {
  return GoogleProtobuf.Message.setProto3BytesField(this, 3, value);
};
proto.protocol.Transaction.Contract.prototype.getContractname = function () {
  return (
    /** @type {!(string|Uint8Array)} */
    GoogleProtobuf.Message.getFieldWithDefault(this, 4, "")
  );
};
proto.protocol.Transaction.Contract.prototype.getContractname_asB64 = function () {
  return (
    /** @type {string} */
    GoogleProtobuf.Message.bytesAsB64(
      this.getContractname()
    )
  );
};
proto.protocol.Transaction.Contract.prototype.getContractname_asU8 = function () {
  return (
    /** @type {!Uint8Array} */
    GoogleProtobuf.Message.bytesAsU8(
      this.getContractname()
    )
  );
};
proto.protocol.Transaction.Contract.prototype.setContractname = function (value) {
  return GoogleProtobuf.Message.setProto3BytesField(this, 4, value);
};
proto.protocol.Transaction.Contract.prototype.getPermissionId = function () {
  return (
    /** @type {number} */
    GoogleProtobuf.Message.getFieldWithDefault(this, 5, 0)
  );
};
proto.protocol.Transaction.Contract.prototype.setPermissionId = function (value) {
  return GoogleProtobuf.Message.setProto3IntField(this, 5, value);
};
proto.protocol.Transaction.Result.repeatedFields_ = [26];
if (GoogleProtobuf.Message.GENERATE_TO_OBJECT) {
  proto.protocol.Transaction.Result.prototype.toObject = function (opt_includeInstance) {
    return proto.protocol.Transaction.Result.toObject(opt_includeInstance, this);
  };
  proto.protocol.Transaction.Result.toObject = function (includeInstance, msg) {
    var obj = {
      fee: GoogleProtobuf.Message.getFieldWithDefault(msg, 1, 0),
      ret: GoogleProtobuf.Message.getFieldWithDefault(msg, 2, 0),
      contractret: GoogleProtobuf.Message.getFieldWithDefault(msg, 3, 0),
      assetissueid: GoogleProtobuf.Message.getFieldWithDefault(msg, 14, ""),
      withdrawAmount: GoogleProtobuf.Message.getFieldWithDefault(msg, 15, 0),
      unfreezeAmount: GoogleProtobuf.Message.getFieldWithDefault(msg, 16, 0),
      exchangeReceivedAmount: GoogleProtobuf.Message.getFieldWithDefault(msg, 18, 0),
      exchangeInjectAnotherAmount: GoogleProtobuf.Message.getFieldWithDefault(msg, 19, 0),
      exchangeWithdrawAnotherAmount: GoogleProtobuf.Message.getFieldWithDefault(msg, 20, 0),
      exchangeId: GoogleProtobuf.Message.getFieldWithDefault(msg, 21, 0),
      shieldedTransactionFee: GoogleProtobuf.Message.getFieldWithDefault(msg, 22, 0),
      orderid: msg.getOrderid_asB64(),
      orderdetailsList: GoogleProtobuf.Message.toObjectList(
        msg.getOrderdetailsList(),
        proto.protocol.MarketOrderDetail.toObject,
        includeInstance
      )
    };
    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}
proto.protocol.Transaction.Result.deserializeBinary = function (bytes) {
  var reader = new GoogleProtobuf.BinaryReader(bytes);
  var msg = new proto.protocol.Transaction.Result();
  return proto.protocol.Transaction.Result.deserializeBinaryFromReader(msg, reader);
};
proto.protocol.Transaction.Result.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = (
          /** @type {number} */
          reader.readInt64()
        );
        msg.setFee(value);
        break;
      case 2:
        var value = (
          /** @type {!proto.protocol.Transaction.Result.code} */
          reader.readEnum()
        );
        msg.setRet(value);
        break;
      case 3:
        var value = (
          /** @type {!proto.protocol.Transaction.Result.contractResult} */
          reader.readEnum()
        );
        msg.setContractret(value);
        break;
      case 14:
        var value = (
          /** @type {string} */
          reader.readString()
        );
        msg.setAssetissueid(value);
        break;
      case 15:
        var value = (
          /** @type {number} */
          reader.readInt64()
        );
        msg.setWithdrawAmount(value);
        break;
      case 16:
        var value = (
          /** @type {number} */
          reader.readInt64()
        );
        msg.setUnfreezeAmount(value);
        break;
      case 18:
        var value = (
          /** @type {number} */
          reader.readInt64()
        );
        msg.setExchangeReceivedAmount(value);
        break;
      case 19:
        var value = (
          /** @type {number} */
          reader.readInt64()
        );
        msg.setExchangeInjectAnotherAmount(value);
        break;
      case 20:
        var value = (
          /** @type {number} */
          reader.readInt64()
        );
        msg.setExchangeWithdrawAnotherAmount(value);
        break;
      case 21:
        var value = (
          /** @type {number} */
          reader.readInt64()
        );
        msg.setExchangeId(value);
        break;
      case 22:
        var value = (
          /** @type {number} */
          reader.readInt64()
        );
        msg.setShieldedTransactionFee(value);
        break;
      case 25:
        var value = (
          /** @type {!Uint8Array} */
          reader.readBytes()
        );
        msg.setOrderid(value);
        break;
      case 26:
        var value = new proto.protocol.MarketOrderDetail();
        reader.readMessage(value, proto.protocol.MarketOrderDetail.deserializeBinaryFromReader);
        msg.addOrderdetails(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};
proto.protocol.Transaction.Result.prototype.serializeBinary = function () {
  var writer = new GoogleProtobuf.BinaryWriter();
  proto.protocol.Transaction.Result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
proto.protocol.Transaction.Result.serializeBinaryToWriter = function (message, writer) {
  var f = void 0;
  f = message.getFee();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRet();
  if (f !== 0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getContractret();
  if (f !== 0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getAssetissueid();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getWithdrawAmount();
  if (f !== 0) {
    writer.writeInt64(
      15,
      f
    );
  }
  f = message.getUnfreezeAmount();
  if (f !== 0) {
    writer.writeInt64(
      16,
      f
    );
  }
  f = message.getExchangeReceivedAmount();
  if (f !== 0) {
    writer.writeInt64(
      18,
      f
    );
  }
  f = message.getExchangeInjectAnotherAmount();
  if (f !== 0) {
    writer.writeInt64(
      19,
      f
    );
  }
  f = message.getExchangeWithdrawAnotherAmount();
  if (f !== 0) {
    writer.writeInt64(
      20,
      f
    );
  }
  f = message.getExchangeId();
  if (f !== 0) {
    writer.writeInt64(
      21,
      f
    );
  }
  f = message.getShieldedTransactionFee();
  if (f !== 0) {
    writer.writeInt64(
      22,
      f
    );
  }
  f = message.getOrderid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      25,
      f
    );
  }
  f = message.getOrderdetailsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      26,
      f,
      proto.protocol.MarketOrderDetail.serializeBinaryToWriter
    );
  }
};
proto.protocol.Transaction.Result.code = {
  SUCESS: 0,
  FAILED: 1
};
proto.protocol.Transaction.Result.contractResult = {
  DEFAULT: 0,
  SUCCESS: 1,
  REVERT: 2,
  BAD_JUMP_DESTINATION: 3,
  OUT_OF_MEMORY: 4,
  PRECOMPILED_CONTRACT: 5,
  STACK_TOO_SMALL: 6,
  STACK_TOO_LARGE: 7,
  ILLEGAL_OPERATION: 8,
  STACK_OVERFLOW: 9,
  OUT_OF_ENERGY: 10,
  OUT_OF_TIME: 11,
  JVM_STACK_OVER_FLOW: 12,
  UNKNOWN: 13,
  TRANSFER_FAILED: 14,
  INVALID_CODE: 15
};
proto.protocol.Transaction.Result.prototype.getFee = function () {
  return (
    /** @type {number} */
    GoogleProtobuf.Message.getFieldWithDefault(this, 1, 0)
  );
};
proto.protocol.Transaction.Result.prototype.setFee = function (value) {
  return GoogleProtobuf.Message.setProto3IntField(this, 1, value);
};
proto.protocol.Transaction.Result.prototype.getRet = function () {
  return (
    /** @type {!proto.protocol.Transaction.Result.code} */
    GoogleProtobuf.Message.getFieldWithDefault(this, 2, 0)
  );
};
proto.protocol.Transaction.Result.prototype.setRet = function (value) {
  return GoogleProtobuf.Message.setProto3EnumField(this, 2, value);
};
proto.protocol.Transaction.Result.prototype.getContractret = function () {
  return (
    /** @type {!proto.protocol.Transaction.Result.contractResult} */
    GoogleProtobuf.Message.getFieldWithDefault(this, 3, 0)
  );
};
proto.protocol.Transaction.Result.prototype.setContractret = function (value) {
  return GoogleProtobuf.Message.setProto3EnumField(this, 3, value);
};
proto.protocol.Transaction.Result.prototype.getAssetissueid = function () {
  return (
    /** @type {string} */
    GoogleProtobuf.Message.getFieldWithDefault(this, 14, "")
  );
};
proto.protocol.Transaction.Result.prototype.setAssetissueid = function (value) {
  return GoogleProtobuf.Message.setProto3StringField(this, 14, value);
};
proto.protocol.Transaction.Result.prototype.getWithdrawAmount = function () {
  return (
    /** @type {number} */
    GoogleProtobuf.Message.getFieldWithDefault(this, 15, 0)
  );
};
proto.protocol.Transaction.Result.prototype.setWithdrawAmount = function (value) {
  return GoogleProtobuf.Message.setProto3IntField(this, 15, value);
};
proto.protocol.Transaction.Result.prototype.getUnfreezeAmount = function () {
  return (
    /** @type {number} */
    GoogleProtobuf.Message.getFieldWithDefault(this, 16, 0)
  );
};
proto.protocol.Transaction.Result.prototype.setUnfreezeAmount = function (value) {
  return GoogleProtobuf.Message.setProto3IntField(this, 16, value);
};
proto.protocol.Transaction.Result.prototype.getExchangeReceivedAmount = function () {
  return (
    /** @type {number} */
    GoogleProtobuf.Message.getFieldWithDefault(this, 18, 0)
  );
};
proto.protocol.Transaction.Result.prototype.setExchangeReceivedAmount = function (value) {
  return GoogleProtobuf.Message.setProto3IntField(this, 18, value);
};
proto.protocol.Transaction.Result.prototype.getExchangeInjectAnotherAmount = function () {
  return (
    /** @type {number} */
    GoogleProtobuf.Message.getFieldWithDefault(this, 19, 0)
  );
};
proto.protocol.Transaction.Result.prototype.setExchangeInjectAnotherAmount = function (value) {
  return GoogleProtobuf.Message.setProto3IntField(this, 19, value);
};
proto.protocol.Transaction.Result.prototype.getExchangeWithdrawAnotherAmount = function () {
  return (
    /** @type {number} */
    GoogleProtobuf.Message.getFieldWithDefault(this, 20, 0)
  );
};
proto.protocol.Transaction.Result.prototype.setExchangeWithdrawAnotherAmount = function (value) {
  return GoogleProtobuf.Message.setProto3IntField(this, 20, value);
};
proto.protocol.Transaction.Result.prototype.getExchangeId = function () {
  return (
    /** @type {number} */
    GoogleProtobuf.Message.getFieldWithDefault(this, 21, 0)
  );
};
proto.protocol.Transaction.Result.prototype.setExchangeId = function (value) {
  return GoogleProtobuf.Message.setProto3IntField(this, 21, value);
};
proto.protocol.Transaction.Result.prototype.getShieldedTransactionFee = function () {
  return (
    /** @type {number} */
    GoogleProtobuf.Message.getFieldWithDefault(this, 22, 0)
  );
};
proto.protocol.Transaction.Result.prototype.setShieldedTransactionFee = function (value) {
  return GoogleProtobuf.Message.setProto3IntField(this, 22, value);
};
proto.protocol.Transaction.Result.prototype.getOrderid = function () {
  return (
    /** @type {!(string|Uint8Array)} */
    GoogleProtobuf.Message.getFieldWithDefault(this, 25, "")
  );
};
proto.protocol.Transaction.Result.prototype.getOrderid_asB64 = function () {
  return (
    /** @type {string} */
    GoogleProtobuf.Message.bytesAsB64(
      this.getOrderid()
    )
  );
};
proto.protocol.Transaction.Result.prototype.getOrderid_asU8 = function () {
  return (
    /** @type {!Uint8Array} */
    GoogleProtobuf.Message.bytesAsU8(
      this.getOrderid()
    )
  );
};
proto.protocol.Transaction.Result.prototype.setOrderid = function (value) {
  return GoogleProtobuf.Message.setProto3BytesField(this, 25, value);
};
proto.protocol.Transaction.Result.prototype.getOrderdetailsList = function () {
  return (
    /** @type{!Array<!proto.protocol.MarketOrderDetail>} */
    GoogleProtobuf.Message.getRepeatedWrapperField(this, proto.protocol.MarketOrderDetail, 26)
  );
};
proto.protocol.Transaction.Result.prototype.setOrderdetailsList = function (value) {
  return GoogleProtobuf.Message.setRepeatedWrapperField(this, 26, value);
};
proto.protocol.Transaction.Result.prototype.addOrderdetails = function (opt_value, opt_index) {
  return GoogleProtobuf.Message.addToRepeatedWrapperField(this, 26, opt_value, proto.protocol.MarketOrderDetail, opt_index);
};
proto.protocol.Transaction.Result.prototype.clearOrderdetailsList = function () {
  return this.setOrderdetailsList([]);
};
proto.protocol.Transaction.raw.repeatedFields_ = [9, 11];
if (GoogleProtobuf.Message.GENERATE_TO_OBJECT) {
  proto.protocol.Transaction.raw.prototype.toObject = function (opt_includeInstance) {
    return proto.protocol.Transaction.raw.toObject(opt_includeInstance, this);
  };
  proto.protocol.Transaction.raw.toObject = function (includeInstance, msg) {
    var obj = {
      refBlockBytes: msg.getRefBlockBytes_asB64(),
      refBlockNum: GoogleProtobuf.Message.getFieldWithDefault(msg, 3, 0),
      refBlockHash: msg.getRefBlockHash_asB64(),
      expiration: GoogleProtobuf.Message.getFieldWithDefault(msg, 8, 0),
      authsList: GoogleProtobuf.Message.toObjectList(
        msg.getAuthsList(),
        proto.protocol.authority.toObject,
        includeInstance
      ),
      data: msg.getData_asB64(),
      contractList: GoogleProtobuf.Message.toObjectList(
        msg.getContractList(),
        proto.protocol.Transaction.Contract.toObject,
        includeInstance
      ),
      scripts: msg.getScripts_asB64(),
      timestamp: GoogleProtobuf.Message.getFieldWithDefault(msg, 14, 0),
      feeLimit: GoogleProtobuf.Message.getFieldWithDefault(msg, 18, 0)
    };
    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}
proto.protocol.Transaction.raw.deserializeBinary = function (bytes) {
  var reader = new GoogleProtobuf.BinaryReader(bytes);
  var msg = new proto.protocol.Transaction.raw();
  return proto.protocol.Transaction.raw.deserializeBinaryFromReader(msg, reader);
};
proto.protocol.Transaction.raw.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = (
          /** @type {!Uint8Array} */
          reader.readBytes()
        );
        msg.setRefBlockBytes(value);
        break;
      case 3:
        var value = (
          /** @type {number} */
          reader.readInt64()
        );
        msg.setRefBlockNum(value);
        break;
      case 4:
        var value = (
          /** @type {!Uint8Array} */
          reader.readBytes()
        );
        msg.setRefBlockHash(value);
        break;
      case 8:
        var value = (
          /** @type {number} */
          reader.readInt64()
        );
        msg.setExpiration(value);
        break;
      case 9:
        var value = new proto.protocol.authority();
        reader.readMessage(value, proto.protocol.authority.deserializeBinaryFromReader);
        msg.addAuths(value);
        break;
      case 10:
        var value = (
          /** @type {!Uint8Array} */
          reader.readBytes()
        );
        msg.setData(value);
        break;
      case 11:
        var value = new proto.protocol.Transaction.Contract();
        reader.readMessage(value, proto.protocol.Transaction.Contract.deserializeBinaryFromReader);
        msg.addContract(value);
        break;
      case 12:
        var value = (
          /** @type {!Uint8Array} */
          reader.readBytes()
        );
        msg.setScripts(value);
        break;
      case 14:
        var value = (
          /** @type {number} */
          reader.readInt64()
        );
        msg.setTimestamp(value);
        break;
      case 18:
        var value = (
          /** @type {number} */
          reader.readInt64()
        );
        msg.setFeeLimit(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};
proto.protocol.Transaction.raw.prototype.serializeBinary = function () {
  var writer = new GoogleProtobuf.BinaryWriter();
  proto.protocol.Transaction.raw.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
proto.protocol.Transaction.raw.serializeBinaryToWriter = function (message, writer) {
  var f = void 0;
  f = message.getRefBlockBytes_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getRefBlockNum();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getRefBlockHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getExpiration();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getAuthsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.protocol.authority.serializeBinaryToWriter
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      10,
      f
    );
  }
  f = message.getContractList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.protocol.Transaction.Contract.serializeBinaryToWriter
    );
  }
  f = message.getScripts_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      12,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      14,
      f
    );
  }
  f = message.getFeeLimit();
  if (f !== 0) {
    writer.writeInt64(
      18,
      f
    );
  }
};
proto.protocol.Transaction.raw.prototype.getRefBlockBytes = function () {
  return (
    /** @type {!(string|Uint8Array)} */
    GoogleProtobuf.Message.getFieldWithDefault(this, 1, "")
  );
};
proto.protocol.Transaction.raw.prototype.getRefBlockBytes_asB64 = function () {
  return (
    /** @type {string} */
    GoogleProtobuf.Message.bytesAsB64(
      this.getRefBlockBytes()
    )
  );
};
proto.protocol.Transaction.raw.prototype.getRefBlockBytes_asU8 = function () {
  return (
    /** @type {!Uint8Array} */
    GoogleProtobuf.Message.bytesAsU8(
      this.getRefBlockBytes()
    )
  );
};
proto.protocol.Transaction.raw.prototype.setRefBlockBytes = function (value) {
  return GoogleProtobuf.Message.setProto3BytesField(this, 1, value);
};
proto.protocol.Transaction.raw.prototype.getRefBlockNum = function () {
  return (
    /** @type {number} */
    GoogleProtobuf.Message.getFieldWithDefault(this, 3, 0)
  );
};
proto.protocol.Transaction.raw.prototype.setRefBlockNum = function (value) {
  return GoogleProtobuf.Message.setProto3IntField(this, 3, value);
};
proto.protocol.Transaction.raw.prototype.getRefBlockHash = function () {
  return (
    /** @type {!(string|Uint8Array)} */
    GoogleProtobuf.Message.getFieldWithDefault(this, 4, "")
  );
};
proto.protocol.Transaction.raw.prototype.getRefBlockHash_asB64 = function () {
  return (
    /** @type {string} */
    GoogleProtobuf.Message.bytesAsB64(
      this.getRefBlockHash()
    )
  );
};
proto.protocol.Transaction.raw.prototype.getRefBlockHash_asU8 = function () {
  return (
    /** @type {!Uint8Array} */
    GoogleProtobuf.Message.bytesAsU8(
      this.getRefBlockHash()
    )
  );
};
proto.protocol.Transaction.raw.prototype.setRefBlockHash = function (value) {
  return GoogleProtobuf.Message.setProto3BytesField(this, 4, value);
};
proto.protocol.Transaction.raw.prototype.getExpiration = function () {
  return (
    /** @type {number} */
    GoogleProtobuf.Message.getFieldWithDefault(this, 8, 0)
  );
};
proto.protocol.Transaction.raw.prototype.setExpiration = function (value) {
  return GoogleProtobuf.Message.setProto3IntField(this, 8, value);
};
proto.protocol.Transaction.raw.prototype.getAuthsList = function () {
  return (
    /** @type{!Array<!proto.protocol.authority>} */
    GoogleProtobuf.Message.getRepeatedWrapperField(this, proto.protocol.authority, 9)
  );
};
proto.protocol.Transaction.raw.prototype.setAuthsList = function (value) {
  return GoogleProtobuf.Message.setRepeatedWrapperField(this, 9, value);
};
proto.protocol.Transaction.raw.prototype.addAuths = function (opt_value, opt_index) {
  return GoogleProtobuf.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.protocol.authority, opt_index);
};
proto.protocol.Transaction.raw.prototype.clearAuthsList = function () {
  return this.setAuthsList([]);
};
proto.protocol.Transaction.raw.prototype.getData = function () {
  return (
    /** @type {!(string|Uint8Array)} */
    GoogleProtobuf.Message.getFieldWithDefault(this, 10, "")
  );
};
proto.protocol.Transaction.raw.prototype.getData_asB64 = function () {
  return (
    /** @type {string} */
    GoogleProtobuf.Message.bytesAsB64(
      this.getData()
    )
  );
};
proto.protocol.Transaction.raw.prototype.getData_asU8 = function () {
  return (
    /** @type {!Uint8Array} */
    GoogleProtobuf.Message.bytesAsU8(
      this.getData()
    )
  );
};
proto.protocol.Transaction.raw.prototype.setData = function (value) {
  return GoogleProtobuf.Message.setProto3BytesField(this, 10, value);
};
proto.protocol.Transaction.raw.prototype.getContractList = function () {
  return (
    /** @type{!Array<!proto.protocol.Transaction.Contract>} */
    GoogleProtobuf.Message.getRepeatedWrapperField(this, proto.protocol.Transaction.Contract, 11)
  );
};
proto.protocol.Transaction.raw.prototype.setContractList = function (value) {
  return GoogleProtobuf.Message.setRepeatedWrapperField(this, 11, value);
};
proto.protocol.Transaction.raw.prototype.addContract = function (opt_value, opt_index) {
  return GoogleProtobuf.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.protocol.Transaction.Contract, opt_index);
};
proto.protocol.Transaction.raw.prototype.clearContractList = function () {
  return this.setContractList([]);
};
proto.protocol.Transaction.raw.prototype.getScripts = function () {
  return (
    /** @type {!(string|Uint8Array)} */
    GoogleProtobuf.Message.getFieldWithDefault(this, 12, "")
  );
};
proto.protocol.Transaction.raw.prototype.getScripts_asB64 = function () {
  return (
    /** @type {string} */
    GoogleProtobuf.Message.bytesAsB64(
      this.getScripts()
    )
  );
};
proto.protocol.Transaction.raw.prototype.getScripts_asU8 = function () {
  return (
    /** @type {!Uint8Array} */
    GoogleProtobuf.Message.bytesAsU8(
      this.getScripts()
    )
  );
};
proto.protocol.Transaction.raw.prototype.setScripts = function (value) {
  return GoogleProtobuf.Message.setProto3BytesField(this, 12, value);
};
proto.protocol.Transaction.raw.prototype.getTimestamp = function () {
  return (
    /** @type {number} */
    GoogleProtobuf.Message.getFieldWithDefault(this, 14, 0)
  );
};
proto.protocol.Transaction.raw.prototype.setTimestamp = function (value) {
  return GoogleProtobuf.Message.setProto3IntField(this, 14, value);
};
proto.protocol.Transaction.raw.prototype.getFeeLimit = function () {
  return (
    /** @type {number} */
    GoogleProtobuf.Message.getFieldWithDefault(this, 18, 0)
  );
};
proto.protocol.Transaction.raw.prototype.setFeeLimit = function (value) {
  return GoogleProtobuf.Message.setProto3IntField(this, 18, value);
};
proto.protocol.Transaction.prototype.getRawData = function () {
  return (
    /** @type{?proto.protocol.Transaction.raw} */
    GoogleProtobuf.Message.getWrapperField(this, proto.protocol.Transaction.raw, 1)
  );
};
proto.protocol.Transaction.prototype.setRawData = function (value) {
  return GoogleProtobuf.Message.setWrapperField(this, 1, value);
};
proto.protocol.Transaction.prototype.clearRawData = function () {
  return this.setRawData(void 0);
};
proto.protocol.Transaction.prototype.hasRawData = function () {
  return GoogleProtobuf.Message.getField(this, 1) != null;
};
proto.protocol.Transaction.prototype.getSignatureList = function () {
  return (
    /** @type {!(Array<!Uint8Array>|Array<string>)} */
    GoogleProtobuf.Message.getRepeatedField(this, 2)
  );
};
proto.protocol.Transaction.prototype.getSignatureList_asB64 = function () {
  return (
    /** @type {!Array<string>} */
    GoogleProtobuf.Message.bytesListAsB64(
      this.getSignatureList()
    )
  );
};
proto.protocol.Transaction.prototype.getSignatureList_asU8 = function () {
  return (
    /** @type {!Array<!Uint8Array>} */
    GoogleProtobuf.Message.bytesListAsU8(
      this.getSignatureList()
    )
  );
};
proto.protocol.Transaction.prototype.setSignatureList = function (value) {
  return GoogleProtobuf.Message.setField(this, 2, value || []);
};
proto.protocol.Transaction.prototype.addSignature = function (value, opt_index) {
  return GoogleProtobuf.Message.addToRepeatedField(this, 2, value, opt_index);
};
proto.protocol.Transaction.prototype.clearSignatureList = function () {
  return this.setSignatureList([]);
};
proto.protocol.Transaction.prototype.getRetList = function () {
  return (
    /** @type{!Array<!proto.protocol.Transaction.Result>} */
    GoogleProtobuf.Message.getRepeatedWrapperField(this, proto.protocol.Transaction.Result, 5)
  );
};
proto.protocol.Transaction.prototype.setRetList = function (value) {
  return GoogleProtobuf.Message.setRepeatedWrapperField(this, 5, value);
};
proto.protocol.Transaction.prototype.addRet = function (opt_value, opt_index) {
  return GoogleProtobuf.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.protocol.Transaction.Result, opt_index);
};
proto.protocol.Transaction.prototype.clearRetList = function () {
  return this.setRetList([]);
};
const core_Tron_pb = proto.protocol;
var goog = GoogleProtobuf;
var global = (function () {
  return this || window || global || self || Function("return this")();
}).call(null);
goog.object.extend(proto, core_Tron_pb);
goog.exportSymbol("proto.protocol.TriggerSmartContract", null, global);
proto.protocol.TriggerSmartContract = function (opt_data) {
  GoogleProtobuf.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.TriggerSmartContract, GoogleProtobuf.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.TriggerSmartContract.displayName = "proto.protocol.TriggerSmartContract";
}
if (GoogleProtobuf.Message.GENERATE_TO_OBJECT) {
  proto.protocol.TriggerSmartContract.prototype.toObject = function (opt_includeInstance) {
    return proto.protocol.TriggerSmartContract.toObject(opt_includeInstance, this);
  };
  proto.protocol.TriggerSmartContract.toObject = function (includeInstance, msg) {
    var obj = {
      ownerAddress: msg.getOwnerAddress_asB64(),
      contractAddress: msg.getContractAddress_asB64(),
      callValue: GoogleProtobuf.Message.getFieldWithDefault(msg, 3, 0),
      data: msg.getData_asB64(),
      callTokenValue: GoogleProtobuf.Message.getFieldWithDefault(msg, 5, 0),
      tokenId: GoogleProtobuf.Message.getFieldWithDefault(msg, 6, 0)
    };
    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}
proto.protocol.TriggerSmartContract.deserializeBinary = function (bytes) {
  var reader = new GoogleProtobuf.BinaryReader(bytes);
  var msg = new proto.protocol.TriggerSmartContract();
  return proto.protocol.TriggerSmartContract.deserializeBinaryFromReader(msg, reader);
};
proto.protocol.TriggerSmartContract.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = (
          /** @type {!Uint8Array} */
          reader.readBytes()
        );
        msg.setOwnerAddress(value);
        break;
      case 2:
        var value = (
          /** @type {!Uint8Array} */
          reader.readBytes()
        );
        msg.setContractAddress(value);
        break;
      case 3:
        var value = (
          /** @type {number} */
          reader.readInt64()
        );
        msg.setCallValue(value);
        break;
      case 4:
        var value = (
          /** @type {!Uint8Array} */
          reader.readBytes()
        );
        msg.setData(value);
        break;
      case 5:
        var value = (
          /** @type {number} */
          reader.readInt64()
        );
        msg.setCallTokenValue(value);
        break;
      case 6:
        var value = (
          /** @type {number} */
          reader.readInt64()
        );
        msg.setTokenId(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};
proto.protocol.TriggerSmartContract.prototype.serializeBinary = function () {
  var writer = new GoogleProtobuf.BinaryWriter();
  proto.protocol.TriggerSmartContract.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
proto.protocol.TriggerSmartContract.serializeBinaryToWriter = function (message, writer) {
  var f = void 0;
  f = message.getOwnerAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getContractAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getCallValue();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getCallTokenValue();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getTokenId();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};
proto.protocol.TriggerSmartContract.prototype.getOwnerAddress = function () {
  return (
    /** @type {!(string|Uint8Array)} */
    GoogleProtobuf.Message.getFieldWithDefault(this, 1, "")
  );
};
proto.protocol.TriggerSmartContract.prototype.getOwnerAddress_asB64 = function () {
  return (
    /** @type {string} */
    GoogleProtobuf.Message.bytesAsB64(
      this.getOwnerAddress()
    )
  );
};
proto.protocol.TriggerSmartContract.prototype.getOwnerAddress_asU8 = function () {
  return (
    /** @type {!Uint8Array} */
    GoogleProtobuf.Message.bytesAsU8(
      this.getOwnerAddress()
    )
  );
};
proto.protocol.TriggerSmartContract.prototype.setOwnerAddress = function (value) {
  return GoogleProtobuf.Message.setProto3BytesField(this, 1, value);
};
proto.protocol.TriggerSmartContract.prototype.getContractAddress = function () {
  return (
    /** @type {!(string|Uint8Array)} */
    GoogleProtobuf.Message.getFieldWithDefault(this, 2, "")
  );
};
proto.protocol.TriggerSmartContract.prototype.getContractAddress_asB64 = function () {
  return (
    /** @type {string} */
    GoogleProtobuf.Message.bytesAsB64(
      this.getContractAddress()
    )
  );
};
proto.protocol.TriggerSmartContract.prototype.getContractAddress_asU8 = function () {
  return (
    /** @type {!Uint8Array} */
    GoogleProtobuf.Message.bytesAsU8(
      this.getContractAddress()
    )
  );
};
proto.protocol.TriggerSmartContract.prototype.setContractAddress = function (value) {
  return GoogleProtobuf.Message.setProto3BytesField(this, 2, value);
};
proto.protocol.TriggerSmartContract.prototype.getCallValue = function () {
  return (
    /** @type {number} */
    GoogleProtobuf.Message.getFieldWithDefault(this, 3, 0)
  );
};
proto.protocol.TriggerSmartContract.prototype.setCallValue = function (value) {
  return GoogleProtobuf.Message.setProto3IntField(this, 3, value);
};
proto.protocol.TriggerSmartContract.prototype.getData = function () {
  return (
    /** @type {!(string|Uint8Array)} */
    GoogleProtobuf.Message.getFieldWithDefault(this, 4, "")
  );
};
proto.protocol.TriggerSmartContract.prototype.getData_asB64 = function () {
  return (
    /** @type {string} */
    GoogleProtobuf.Message.bytesAsB64(
      this.getData()
    )
  );
};
proto.protocol.TriggerSmartContract.prototype.getData_asU8 = function () {
  return (
    /** @type {!Uint8Array} */
    GoogleProtobuf.Message.bytesAsU8(
      this.getData()
    )
  );
};
proto.protocol.TriggerSmartContract.prototype.setData = function (value) {
  return GoogleProtobuf.Message.setProto3BytesField(this, 4, value);
};
proto.protocol.TriggerSmartContract.prototype.getCallTokenValue = function () {
  return (
    /** @type {number} */
    GoogleProtobuf.Message.getFieldWithDefault(this, 5, 0)
  );
};
proto.protocol.TriggerSmartContract.prototype.setCallTokenValue = function (value) {
  return GoogleProtobuf.Message.setProto3IntField(this, 5, value);
};
proto.protocol.TriggerSmartContract.prototype.getTokenId = function () {
  return (
    /** @type {number} */
    GoogleProtobuf.Message.getFieldWithDefault(this, 6, 0)
  );
};
proto.protocol.TriggerSmartContract.prototype.setTokenId = function (value) {
  return GoogleProtobuf.Message.setProto3IntField(this, 6, value);
};
const smart_contract_pb = proto.protocol;
export {
  smart_contract_pb as default
};
