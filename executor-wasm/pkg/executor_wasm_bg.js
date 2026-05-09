/**
 * An opaque "handle" to platform-dependent audio output device.
 */
export class OutputDevice {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        OutputDeviceFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_outputdevice_free(ptr, 0);
    }
    /**
     * Closes the output device and release all system resources occupied by it. Any calls of this
     * method after the device was closed does nothing.
     */
    close() {
        wasm.outputdevice_close(this.__wbg_ptr);
    }
}
if (Symbol.dispose) OutputDevice.prototype[Symbol.dispose] = OutputDevice.prototype.free;

export function main() {
    wasm.main();
}
export function __wbg_Window_c7f91e3f80ae0a0e(arg0) {
    const ret = arg0.Window;
    return ret;
}
export function __wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff(arg0) {
    const v = arg0;
    const ret = typeof(v) === 'boolean' ? v : undefined;
    return isLikeNone(ret) ? 0xFFFFFF : ret ? 1 : 0;
}
export function __wbg___wbindgen_debug_string_ab4b34d23d6778bd(arg0, arg1) {
    const ret = debugString(arg1);
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg___wbindgen_is_function_3baa9db1a987f47d(arg0) {
    const ret = typeof(arg0) === 'function';
    return ret;
}
export function __wbg___wbindgen_is_object_63322ec0cd6ea4ef(arg0) {
    const val = arg0;
    const ret = typeof(val) === 'object' && val !== null;
    return ret;
}
export function __wbg___wbindgen_is_string_6df3bf7ef1164ed3(arg0) {
    const ret = typeof(arg0) === 'string';
    return ret;
}
export function __wbg___wbindgen_is_undefined_29a43b4d42920abd(arg0) {
    const ret = arg0 === undefined;
    return ret;
}
export function __wbg___wbindgen_number_get_c7f42aed0525c451(arg0, arg1) {
    const obj = arg1;
    const ret = typeof(obj) === 'number' ? obj : undefined;
    getDataViewMemory0().setFloat64(arg0 + 8 * 1, isLikeNone(ret) ? 0 : ret, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
}
export function __wbg___wbindgen_string_get_7ed5322991caaec5(arg0, arg1) {
    const obj = arg1;
    const ret = typeof(obj) === 'string' ? obj : undefined;
    var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg___wbindgen_throw_6b64449b9b9ed33c(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
}
export function __wbg__wbg_cb_unref_b46c9b5a9f08ec37(arg0) {
    arg0._wbg_cb_unref();
}
export function __wbg_abort_4ce5b484434ef6fd(arg0) {
    arg0.abort();
}
export function __wbg_activeElement_737cd2e5ce862ac0(arg0) {
    const ret = arg0.activeElement;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_activeTexture_3df5a43f55a69a6c(arg0, arg1) {
    arg0.activeTexture(arg1 >>> 0);
}
export function __wbg_activeTexture_546afc38eb98df71(arg0, arg1) {
    arg0.activeTexture(arg1 >>> 0);
}
export function __wbg_addEventListener_8176dab41b09531c() { return handleError(function (arg0, arg1, arg2, arg3) {
    arg0.addEventListener(getStringFromWasm0(arg1, arg2), arg3);
}, arguments); }
export function __wbg_addListener_7202e355ec2df79d() { return handleError(function (arg0, arg1) {
    arg0.addListener(arg1);
}, arguments); }
export function __wbg_altKey_3116112ec764f316(arg0) {
    const ret = arg0.altKey;
    return ret;
}
export function __wbg_altKey_c4f26b40f1b826b4(arg0) {
    const ret = arg0.altKey;
    return ret;
}
export function __wbg_animate_8f41e2f47c7d04ab(arg0, arg1, arg2) {
    const ret = arg0.animate(arg1, arg2);
    return ret;
}
export function __wbg_appendChild_e95c8b3b936d250a() { return handleError(function (arg0, arg1) {
    const ret = arg0.appendChild(arg1);
    return ret;
}, arguments); }
export function __wbg_arrayBuffer_848c392b70c67d3d() { return handleError(function (arg0) {
    const ret = arg0.arrayBuffer();
    return ret;
}, arguments); }
export function __wbg_attachShader_1eec3a0d2bfe6f83(arg0, arg1, arg2) {
    arg0.attachShader(arg1, arg2);
}
export function __wbg_attachShader_e1c4cb1f00f167df(arg0, arg1, arg2) {
    arg0.attachShader(arg1, arg2);
}
export function __wbg_beginQuery_330ed668ec983f20(arg0, arg1, arg2) {
    arg0.beginQuery(arg1 >>> 0, arg2);
}
export function __wbg_bindBufferBase_a0b97da288b2e5bc(arg0, arg1, arg2, arg3) {
    arg0.bindBufferBase(arg1 >>> 0, arg2 >>> 0, arg3);
}
export function __wbg_bindBufferRange_538b702311d21a3a(arg0, arg1, arg2, arg3, arg4, arg5) {
    arg0.bindBufferRange(arg1 >>> 0, arg2 >>> 0, arg3, arg4, arg5);
}
export function __wbg_bindBuffer_710a611286e86fe9(arg0, arg1, arg2) {
    arg0.bindBuffer(arg1 >>> 0, arg2);
}
export function __wbg_bindBuffer_b193f35215c88d5d(arg0, arg1, arg2) {
    arg0.bindBuffer(arg1 >>> 0, arg2);
}
export function __wbg_bindFramebuffer_8d7b9da43a5c1c2b(arg0, arg1, arg2) {
    arg0.bindFramebuffer(arg1 >>> 0, arg2);
}
export function __wbg_bindFramebuffer_fab857ccf69f3da9(arg0, arg1, arg2) {
    arg0.bindFramebuffer(arg1 >>> 0, arg2);
}
export function __wbg_bindSampler_2179eb28a43d1075(arg0, arg1, arg2) {
    arg0.bindSampler(arg1 >>> 0, arg2);
}
export function __wbg_bindTexture_a87fb41b3319bcb9(arg0, arg1, arg2) {
    arg0.bindTexture(arg1 >>> 0, arg2);
}
export function __wbg_bindTexture_c3fcb7dc0c448083(arg0, arg1, arg2) {
    arg0.bindTexture(arg1 >>> 0, arg2);
}
export function __wbg_bindVertexArrayOES_b0e8a5a6c8a88c84(arg0, arg1) {
    arg0.bindVertexArrayOES(arg1);
}
export function __wbg_bindVertexArray_ea785b5f2238eb93(arg0, arg1) {
    arg0.bindVertexArray(arg1);
}
export function __wbg_blendEquationSeparate_1dedaa54091b78a5(arg0, arg1, arg2) {
    arg0.blendEquationSeparate(arg1 >>> 0, arg2 >>> 0);
}
export function __wbg_blendEquationSeparate_8a6f5cdd3d6af806(arg0, arg1, arg2) {
    arg0.blendEquationSeparate(arg1 >>> 0, arg2 >>> 0);
}
export function __wbg_blendFuncSeparate_a1f8e0d6a1fa6fa6(arg0, arg1, arg2, arg3, arg4) {
    arg0.blendFuncSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
}
export function __wbg_blendFuncSeparate_d3b4bffd37fd37de(arg0, arg1, arg2, arg3, arg4) {
    arg0.blendFuncSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
}
export function __wbg_blitFramebuffer_796256485239eebc(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
    arg0.blitFramebuffer(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0);
}
export function __wbg_blockSize_9bfce6be11544dd1(arg0) {
    const ret = arg0.blockSize;
    return ret;
}
export function __wbg_body_c7b35a55457167ba(arg0) {
    const ret = arg0.body;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_brand_3bc196a43eceb8af(arg0, arg1) {
    const ret = arg1.brand;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_brands_b7dcf262485c3e7c(arg0) {
    const ret = arg0.brands;
    return ret;
}
export function __wbg_bufferData_5788346a959129ab(arg0, arg1, arg2, arg3) {
    arg0.bufferData(arg1 >>> 0, arg2, arg3 >>> 0);
}
export function __wbg_bufferData_6669d1a205932a9c(arg0, arg1, arg2, arg3) {
    arg0.bufferData(arg1 >>> 0, arg2, arg3 >>> 0);
}
export function __wbg_bufferData_f267cdc80efbd6a0(arg0, arg1, arg2, arg3) {
    arg0.bufferData(arg1 >>> 0, arg2, arg3 >>> 0);
}
export function __wbg_bufferData_f401229c915b8028(arg0, arg1, arg2, arg3) {
    arg0.bufferData(arg1 >>> 0, arg2, arg3 >>> 0);
}
export function __wbg_bufferSubData_3708c0445a03981a(arg0, arg1, arg2, arg3) {
    arg0.bufferSubData(arg1 >>> 0, arg2, arg3);
}
export function __wbg_bufferSubData_ade66d88865db9fc(arg0, arg1, arg2, arg3) {
    arg0.bufferSubData(arg1 >>> 0, arg2, arg3);
}
export function __wbg_button_c794bf4b1dcd7c4c(arg0) {
    const ret = arg0.button;
    return ret;
}
export function __wbg_buttons_9b45c5f89c8d91db(arg0) {
    const ret = arg0.buttons;
    return ret;
}
export function __wbg_call_a24592a6f349a97e() { return handleError(function (arg0, arg1, arg2) {
    const ret = arg0.call(arg1, arg2);
    return ret;
}, arguments); }
export function __wbg_cancelAnimationFrame_3fe3db137219c343() { return handleError(function (arg0, arg1) {
    arg0.cancelAnimationFrame(arg1);
}, arguments); }
export function __wbg_cancelIdleCallback_cc76338bb44d0b0a(arg0, arg1) {
    arg0.cancelIdleCallback(arg1 >>> 0);
}
export function __wbg_cancel_65f38182e2eeac5c(arg0) {
    arg0.cancel();
}
export function __wbg_catch_e9362815fd0b24cf(arg0, arg1) {
    const ret = arg0.catch(arg1);
    return ret;
}
export function __wbg_checkFramebufferStatus_4a0a0551232ef01e(arg0, arg1) {
    const ret = arg0.checkFramebufferStatus(arg1 >>> 0);
    return ret;
}
export function __wbg_checkFramebufferStatus_983fa09a4788864f(arg0, arg1) {
    const ret = arg0.checkFramebufferStatus(arg1 >>> 0);
    return ret;
}
export function __wbg_clearBufferfi_58fcc2a160322fa1(arg0, arg1, arg2, arg3, arg4) {
    arg0.clearBufferfi(arg1 >>> 0, arg2, arg3, arg4);
}
export function __wbg_clearBufferfv_715310a7cc30715d(arg0, arg1, arg2, arg3, arg4) {
    arg0.clearBufferfv(arg1 >>> 0, arg2, getArrayF32FromWasm0(arg3, arg4));
}
export function __wbg_clearBufferiv_a086fd83c8c5759c(arg0, arg1, arg2, arg3, arg4) {
    arg0.clearBufferiv(arg1 >>> 0, arg2, getArrayI32FromWasm0(arg3, arg4));
}
export function __wbg_clearBufferuiv_8260c12b38743ac5(arg0, arg1, arg2, arg3, arg4) {
    arg0.clearBufferuiv(arg1 >>> 0, arg2, getArrayU32FromWasm0(arg3, arg4));
}
export function __wbg_clearColor_2b334a2a4b9f1124(arg0, arg1, arg2, arg3, arg4) {
    arg0.clearColor(arg1, arg2, arg3, arg4);
}
export function __wbg_clearColor_6e92030afcf0f68f(arg0, arg1, arg2, arg3, arg4) {
    arg0.clearColor(arg1, arg2, arg3, arg4);
}
export function __wbg_clearDepth_6a75b6bfa763b04c(arg0, arg1) {
    arg0.clearDepth(arg1);
}
export function __wbg_clearDepth_e602528ddc745c62(arg0, arg1) {
    arg0.clearDepth(arg1);
}
export function __wbg_clearStencil_584a4c6144f1164d(arg0, arg1) {
    arg0.clearStencil(arg1);
}
export function __wbg_clearStencil_8a4463aa6ab4f980(arg0, arg1) {
    arg0.clearStencil(arg1);
}
export function __wbg_clearTimeout_1a62f3563b1611b3(arg0, arg1) {
    arg0.clearTimeout(arg1);
}
export function __wbg_clear_d82c0c485d1af30e(arg0, arg1) {
    arg0.clear(arg1 >>> 0);
}
export function __wbg_clear_e39cde04b063e709(arg0, arg1) {
    arg0.clear(arg1 >>> 0);
}
export function __wbg_clientWaitSync_ce22c6bcd7b1c355(arg0, arg1, arg2, arg3) {
    const ret = arg0.clientWaitSync(arg1, arg2 >>> 0, arg3 >>> 0);
    return ret;
}
export function __wbg_close_7e700111d27bdd8c(arg0) {
    arg0.close();
}
export function __wbg_close_cc91f5b0a1697e4f() { return handleError(function (arg0) {
    const ret = arg0.close();
    return ret;
}, arguments); }
export function __wbg_code_09d0c59f9029dd28(arg0, arg1) {
    const ret = arg1.code;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_colorMask_5e1ce60e460bf963(arg0, arg1, arg2, arg3, arg4) {
    arg0.colorMask(arg1 !== 0, arg2 !== 0, arg3 !== 0, arg4 !== 0);
}
export function __wbg_colorMask_71190391f59922fe(arg0, arg1, arg2, arg3, arg4) {
    arg0.colorMask(arg1 !== 0, arg2 !== 0, arg3 !== 0, arg4 !== 0);
}
export function __wbg_compileShader_b39b7d5caca97c9d(arg0, arg1) {
    arg0.compileShader(arg1);
}
export function __wbg_compileShader_fc084de511370bc0(arg0, arg1) {
    arg0.compileShader(arg1);
}
export function __wbg_compressedTexImage2D_9613b17f3a6eccd4(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
    arg0.compressedTexImage2D(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5, arg6, arg7);
}
export function __wbg_compressedTexImage2D_e5a0acc675b9e00e(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
    arg0.compressedTexImage2D(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5, arg6, arg7);
}
export function __wbg_compressedTexImage3D_39f98a17e44caf5a(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
    arg0.compressedTexImage3D(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5, arg6, arg7, arg8);
}
export function __wbg_connect_301bfaee317657e7() { return handleError(function (arg0, arg1) {
    const ret = arg0.connect(arg1);
    return ret;
}, arguments); }
export function __wbg_contains_495334b455843d23(arg0, arg1) {
    const ret = arg0.contains(arg1);
    return ret;
}
export function __wbg_contentRect_e3958925fadb3298(arg0) {
    const ret = arg0.contentRect;
    return ret;
}
export function __wbg_copyToChannel_346ff43ca43e57d1() { return handleError(function (arg0, arg1, arg2, arg3) {
    arg0.copyToChannel(getArrayF32FromWasm0(arg1, arg2), arg3);
}, arguments); }
export function __wbg_createBufferSource_08e05c18c42b3726() { return handleError(function (arg0) {
    const ret = arg0.createBufferSource();
    return ret;
}, arguments); }
export function __wbg_createBuffer_6ad9886c8fed1a21(arg0) {
    const ret = arg0.createBuffer();
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_createBuffer_f68202a47c36c3d6(arg0) {
    const ret = arg0.createBuffer();
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_createBuffer_fad6af7eb9950da0() { return handleError(function (arg0, arg1, arg2, arg3) {
    const ret = arg0.createBuffer(arg1 >>> 0, arg2 >>> 0, arg3);
    return ret;
}, arguments); }
export function __wbg_createElement_bbd4c90086fe6f7b() { return handleError(function (arg0, arg1, arg2) {
    const ret = arg0.createElement(getStringFromWasm0(arg1, arg2));
    return ret;
}, arguments); }
export function __wbg_createFramebuffer_03fa5aab12587b89(arg0) {
    const ret = arg0.createFramebuffer();
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_createFramebuffer_211e9c2acecac22f(arg0) {
    const ret = arg0.createFramebuffer();
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_createObjectURL_46e1b0c55389893b() { return handleError(function (arg0, arg1) {
    const ret = URL.createObjectURL(arg1);
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}, arguments); }
export function __wbg_createProgram_635f6f85c5f3c83d(arg0) {
    const ret = arg0.createProgram();
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_createProgram_bedc70c0d16e41df(arg0) {
    const ret = arg0.createProgram();
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_createQuery_276833144fe200cc(arg0) {
    const ret = arg0.createQuery();
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_createSampler_7a0e4bf12aad2139(arg0) {
    const ret = arg0.createSampler();
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_createShader_2c8d8c9f17967efe(arg0, arg1) {
    const ret = arg0.createShader(arg1 >>> 0);
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_createShader_5484e429d7514a9d(arg0, arg1) {
    const ret = arg0.createShader(arg1 >>> 0);
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_createTexture_caeb4349ae5c7a83(arg0) {
    const ret = arg0.createTexture();
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_createTexture_f9850d55f04c7883(arg0) {
    const ret = arg0.createTexture();
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_createVertexArrayOES_25823ca742b59551(arg0) {
    const ret = arg0.createVertexArrayOES();
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_createVertexArray_a8c3e6799bdb5af8(arg0) {
    const ret = arg0.createVertexArray();
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_crypto_38df2bab126b63dc(arg0) {
    const ret = arg0.crypto;
    return ret;
}
export function __wbg_ctrlKey_31968cccd46bdef6(arg0) {
    const ret = arg0.ctrlKey;
    return ret;
}
export function __wbg_ctrlKey_a49693667722b909(arg0) {
    const ret = arg0.ctrlKey;
    return ret;
}
export function __wbg_cullFace_87cf8b47e8d3edd2(arg0, arg1) {
    arg0.cullFace(arg1 >>> 0);
}
export function __wbg_cullFace_c35bb54d07e68290(arg0, arg1) {
    arg0.cullFace(arg1 >>> 0);
}
export function __wbg_currentTime_8e9bfa251075a7d7(arg0) {
    const ret = arg0.currentTime;
    return ret;
}
export function __wbg_deleteBuffer_521c77539f9941c1(arg0, arg1) {
    arg0.deleteBuffer(arg1);
}
export function __wbg_deleteBuffer_558c85bd550b15df(arg0, arg1) {
    arg0.deleteBuffer(arg1);
}
export function __wbg_deleteFramebuffer_2fb61c893f34a853(arg0, arg1) {
    arg0.deleteFramebuffer(arg1);
}
export function __wbg_deleteFramebuffer_a0b3386cb631ca92(arg0, arg1) {
    arg0.deleteFramebuffer(arg1);
}
export function __wbg_deleteProgram_6d3a2bdf7fc6d658(arg0, arg1) {
    arg0.deleteProgram(arg1);
}
export function __wbg_deleteProgram_8175823e816f19ed(arg0, arg1) {
    arg0.deleteProgram(arg1);
}
export function __wbg_deleteSampler_34704dd7176c6cb6(arg0, arg1) {
    arg0.deleteSampler(arg1);
}
export function __wbg_deleteShader_379785984071d8af(arg0, arg1) {
    arg0.deleteShader(arg1);
}
export function __wbg_deleteShader_460e3d0b80ea3790(arg0, arg1) {
    arg0.deleteShader(arg1);
}
export function __wbg_deleteSync_bdc4a0bdb747530d(arg0, arg1) {
    arg0.deleteSync(arg1);
}
export function __wbg_deleteTexture_6de16581bf7e5e00(arg0, arg1) {
    arg0.deleteTexture(arg1);
}
export function __wbg_deleteTexture_8714aac647598458(arg0, arg1) {
    arg0.deleteTexture(arg1);
}
export function __wbg_deleteVertexArrayOES_6bac63f2a6cf4257(arg0, arg1) {
    arg0.deleteVertexArrayOES(arg1);
}
export function __wbg_deleteVertexArray_c0c2dbbda37e677b(arg0, arg1) {
    arg0.deleteVertexArray(arg1);
}
export function __wbg_deltaMode_e3330902f10b9218(arg0) {
    const ret = arg0.deltaMode;
    return ret;
}
export function __wbg_deltaX_7f421a85054bc57c(arg0) {
    const ret = arg0.deltaX;
    return ret;
}
export function __wbg_deltaY_ca7744a8772482e1(arg0) {
    const ret = arg0.deltaY;
    return ret;
}
export function __wbg_depthFunc_2dcf4f6cd1ae352f(arg0, arg1) {
    arg0.depthFunc(arg1 >>> 0);
}
export function __wbg_depthFunc_477c738f0d31fb27(arg0, arg1) {
    arg0.depthFunc(arg1 >>> 0);
}
export function __wbg_depthMask_0212eafbadf5c510(arg0, arg1) {
    arg0.depthMask(arg1 !== 0);
}
export function __wbg_depthMask_79ce0d02cd6be571(arg0, arg1) {
    arg0.depthMask(arg1 !== 0);
}
export function __wbg_destination_7aa167ec1225162d(arg0) {
    const ret = arg0.destination;
    return ret;
}
export function __wbg_devicePixelContentBoxSize_c1a8da18615df561(arg0) {
    const ret = arg0.devicePixelContentBoxSize;
    return ret;
}
export function __wbg_devicePixelRatio_18e6533e6d7f4088(arg0) {
    const ret = arg0.devicePixelRatio;
    return ret;
}
export function __wbg_disable_c83e7f9d8a8660e6(arg0, arg1) {
    arg0.disable(arg1 >>> 0);
}
export function __wbg_disable_d115c77f70b6b789(arg0, arg1) {
    arg0.disable(arg1 >>> 0);
}
export function __wbg_disconnect_b688a8dfdd1f8a2e(arg0) {
    arg0.disconnect();
}
export function __wbg_disconnect_d173374266b80cfa(arg0) {
    arg0.disconnect();
}
export function __wbg_document_7a41071f2f439323(arg0) {
    const ret = arg0.document;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_drawBuffersWEBGL_674a96484245cee8(arg0, arg1) {
    arg0.drawBuffersWEBGL(arg1);
}
export function __wbg_drawBuffers_0808a2009fb32b11(arg0, arg1) {
    arg0.drawBuffers(arg1);
}
export function __wbg_drawElementsInstancedANGLE_01b7fe3dcfda1f57(arg0, arg1, arg2, arg3, arg4, arg5) {
    arg0.drawElementsInstancedANGLE(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5);
}
export function __wbg_drawElementsInstanced_9cdd75777f6fe52e(arg0, arg1, arg2, arg3, arg4, arg5) {
    arg0.drawElementsInstanced(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5);
}
export function __wbg_drawElements_46de48663337d73d(arg0, arg1, arg2, arg3, arg4) {
    arg0.drawElements(arg1 >>> 0, arg2, arg3 >>> 0, arg4);
}
export function __wbg_drawElements_fd9adcd1cc7deb47(arg0, arg1, arg2, arg3, arg4) {
    arg0.drawElements(arg1 >>> 0, arg2, arg3 >>> 0, arg4);
}
export function __wbg_enableVertexAttribArray_44d2f9d5bd7d4773(arg0, arg1) {
    arg0.enableVertexAttribArray(arg1 >>> 0);
}
export function __wbg_enableVertexAttribArray_a6fb4500c619f67f(arg0, arg1) {
    arg0.enableVertexAttribArray(arg1 >>> 0);
}
export function __wbg_enable_aafffd647725f82c(arg0, arg1) {
    arg0.enable(arg1 >>> 0);
}
export function __wbg_enable_e9e223bf04c318ac(arg0, arg1) {
    arg0.enable(arg1 >>> 0);
}
export function __wbg_endQuery_35c4e07c06fe3d01(arg0, arg1) {
    arg0.endQuery(arg1 >>> 0);
}
export function __wbg_error_51bed31492c9d057(arg0, arg1) {
    let deferred0_0;
    let deferred0_1;
    try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.error(getStringFromWasm0(arg0, arg1));
    } finally {
        wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
    }
}
export function __wbg_error_f536c7930d1c5c8d(arg0, arg1) {
    console.error(arg0, arg1);
}
export function __wbg_fenceSync_a6b717c8aa19605f(arg0, arg1, arg2) {
    const ret = arg0.fenceSync(arg1 >>> 0, arg2 >>> 0);
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_fetch_5ccc4e4f205384ba(arg0, arg1, arg2) {
    const ret = arg0.fetch(getStringFromWasm0(arg1, arg2));
    return ret;
}
export function __wbg_finish_89ccc89b376f4cb1(arg0) {
    arg0.finish();
}
export function __wbg_finish_9653cc0f8da43258(arg0) {
    arg0.finish();
}
export function __wbg_flush_83c9379ecf842793(arg0) {
    arg0.flush();
}
export function __wbg_flush_919dd5bcf0622389(arg0) {
    arg0.flush();
}
export function __wbg_focus_089295847acbfa20() { return handleError(function (arg0) {
    arg0.focus();
}, arguments); }
export function __wbg_framebufferTexture2D_44e56e9e14542bb5(arg0, arg1, arg2, arg3, arg4, arg5) {
    arg0.framebufferTexture2D(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4, arg5);
}
export function __wbg_framebufferTexture2D_f54db6e0dc9fac5e(arg0, arg1, arg2, arg3, arg4, arg5) {
    arg0.framebufferTexture2D(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4, arg5);
}
export function __wbg_fullscreenElement_2eed7fc26f0751e2(arg0) {
    const ret = arg0.fullscreenElement;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_generateMipmap_63267ff3c3360718(arg0, arg1) {
    arg0.generateMipmap(arg1 >>> 0);
}
export function __wbg_generateMipmap_e3c8922f41acbaa3(arg0, arg1) {
    arg0.generateMipmap(arg1 >>> 0);
}
export function __wbg_getBoundingClientRect_ddac06b2c6b52b98(arg0) {
    const ret = arg0.getBoundingClientRect();
    return ret;
}
export function __wbg_getBufferSubData_008fe53c81fd2c77(arg0, arg1, arg2, arg3) {
    arg0.getBufferSubData(arg1 >>> 0, arg2, arg3);
}
export function __wbg_getCoalescedEvents_08ae0f67553c536f(arg0) {
    const ret = arg0.getCoalescedEvents();
    return ret;
}
export function __wbg_getCoalescedEvents_3e003f63d9ebbc05(arg0) {
    const ret = arg0.getCoalescedEvents;
    return ret;
}
export function __wbg_getComputedStyle_a23c121719ab715c() { return handleError(function (arg0, arg1) {
    const ret = arg0.getComputedStyle(arg1);
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}, arguments); }
export function __wbg_getContext_367a8d870ace1970() { return handleError(function (arg0, arg1, arg2, arg3) {
    const ret = arg0.getContext(getStringFromWasm0(arg1, arg2), arg3);
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}, arguments); }
export function __wbg_getExtension_5228364a0715c7db() { return handleError(function (arg0, arg1, arg2) {
    const ret = arg0.getExtension(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}, arguments); }
export function __wbg_getOwnPropertyDescriptor_131bd582a45a6f5d(arg0, arg1) {
    const ret = Object.getOwnPropertyDescriptor(arg0, arg1);
    return ret;
}
export function __wbg_getParameter_594f21b1d26abeed() { return handleError(function (arg0, arg1) {
    const ret = arg0.getParameter(arg1 >>> 0);
    return ret;
}, arguments); }
export function __wbg_getParameter_e1c6e394a2959d43() { return handleError(function (arg0, arg1) {
    const ret = arg0.getParameter(arg1 >>> 0);
    return ret;
}, arguments); }
export function __wbg_getProgramInfoLog_00af0d3e29c73293(arg0, arg1, arg2) {
    const ret = arg1.getProgramInfoLog(arg2);
    var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_getProgramInfoLog_612d2724e854e752(arg0, arg1, arg2) {
    const ret = arg1.getProgramInfoLog(arg2);
    var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_getProgramParameter_6aa39c38709e0d9d(arg0, arg1, arg2) {
    const ret = arg0.getProgramParameter(arg1, arg2 >>> 0);
    return ret;
}
export function __wbg_getProgramParameter_d18275e84d037799(arg0, arg1, arg2) {
    const ret = arg0.getProgramParameter(arg1, arg2 >>> 0);
    return ret;
}
export function __wbg_getPropertyValue_0bc8c6164d246228() { return handleError(function (arg0, arg1, arg2, arg3) {
    const ret = arg1.getPropertyValue(getStringFromWasm0(arg2, arg3));
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}, arguments); }
export function __wbg_getQueryParameter_9a1b5a99c953b0de(arg0, arg1, arg2) {
    const ret = arg0.getQueryParameter(arg1, arg2 >>> 0);
    return ret;
}
export function __wbg_getRandomValues_c44a50d8cfdaebeb() { return handleError(function (arg0, arg1) {
    arg0.getRandomValues(arg1);
}, arguments); }
export function __wbg_getRandomValues_ef12552bf5acd2fe() { return handleError(function (arg0, arg1) {
    globalThis.crypto.getRandomValues(getArrayU8FromWasm0(arg0, arg1));
}, arguments); }
export function __wbg_getShaderInfoLog_57fd85336a768aa9(arg0, arg1, arg2) {
    const ret = arg1.getShaderInfoLog(arg2);
    var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_getShaderInfoLog_ef603aa10b52d639(arg0, arg1, arg2) {
    const ret = arg1.getShaderInfoLog(arg2);
    var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_getShaderParameter_4676ea57a8db83ec(arg0, arg1, arg2) {
    const ret = arg0.getShaderParameter(arg1, arg2 >>> 0);
    return ret;
}
export function __wbg_getShaderParameter_f1ed538581985875(arg0, arg1, arg2) {
    const ret = arg0.getShaderParameter(arg1, arg2 >>> 0);
    return ret;
}
export function __wbg_getSupportedExtensions_a6b7a4d43810c644(arg0) {
    const ret = arg0.getSupportedExtensions();
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_getUniformBlockIndex_79370b4799b9dd60(arg0, arg1, arg2, arg3) {
    const ret = arg0.getUniformBlockIndex(arg1, getStringFromWasm0(arg2, arg3));
    return ret;
}
export function __wbg_getUniformLocation_084155a4348002df(arg0, arg1, arg2, arg3) {
    const ret = arg0.getUniformLocation(arg1, getStringFromWasm0(arg2, arg3));
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_getUniformLocation_91e9e13f695e50c5(arg0, arg1, arg2, arg3) {
    const ret = arg0.getUniformLocation(arg1, getStringFromWasm0(arg2, arg3));
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_get_6011fa3a58f61074() { return handleError(function (arg0, arg1) {
    const ret = Reflect.get(arg0, arg1);
    return ret;
}, arguments); }
export function __wbg_get_8360291721e2339f(arg0, arg1) {
    const ret = arg0[arg1 >>> 0];
    return ret;
}
export function __wbg_get_unchecked_17f53dad852b9588(arg0, arg1) {
    const ret = arg0[arg1 >>> 0];
    return ret;
}
export function __wbg_height_f8efae863e677d02(arg0) {
    const ret = arg0.height;
    return ret;
}
export function __wbg_inlineSize_ade7bedbe596e98c(arg0) {
    const ret = arg0.inlineSize;
    return ret;
}
export function __wbg_instanceof_Response_9b2d111407865ff2(arg0) {
    let result;
    try {
        result = arg0 instanceof Response;
    } catch (_) {
        result = false;
    }
    const ret = result;
    return ret;
}
export function __wbg_instanceof_WebGl2RenderingContext_23f2da2f294d4c8e(arg0) {
    let result;
    try {
        result = arg0 instanceof WebGL2RenderingContext;
    } catch (_) {
        result = false;
    }
    const ret = result;
    return ret;
}
export function __wbg_instanceof_Window_cc64c86c8ef9e02b(arg0) {
    let result;
    try {
        result = arg0 instanceof Window;
    } catch (_) {
        result = false;
    }
    const ret = result;
    return ret;
}
export function __wbg_isIntersecting_10f717a22304a79d(arg0) {
    const ret = arg0.isIntersecting;
    return ret;
}
export function __wbg_is_8f7ba86b7f249abd(arg0, arg1) {
    const ret = Object.is(arg0, arg1);
    return ret;
}
export function __wbg_key_2cbc38fa83cdb336(arg0, arg1) {
    const ret = arg1.key;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_length_3d4ecd04bd8d22f1(arg0) {
    const ret = arg0.length;
    return ret;
}
export function __wbg_length_9f1775224cf1d815(arg0) {
    const ret = arg0.length;
    return ret;
}
export function __wbg_linkProgram_0f095b446d393a30(arg0, arg1) {
    arg0.linkProgram(arg1);
}
export function __wbg_linkProgram_aa5b01ff0fcf3a80(arg0, arg1) {
    arg0.linkProgram(arg1);
}
export function __wbg_location_8f2306ac5789eb87(arg0) {
    const ret = arg0.location;
    return ret;
}
export function __wbg_log_89fb8d8f550ab1bb(arg0, arg1) {
    console.log(getStringFromWasm0(arg0, arg1));
}
export function __wbg_matchMedia_ce9949babceac178() { return handleError(function (arg0, arg1, arg2) {
    const ret = arg0.matchMedia(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}, arguments); }
export function __wbg_matches_60339f60d9118f30(arg0) {
    const ret = arg0.matches;
    return ret;
}
export function __wbg_media_e755b0c3bda4816a(arg0, arg1) {
    const ret = arg1.media;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_metaKey_665498d01ebfd062(arg0) {
    const ret = arg0.metaKey;
    return ret;
}
export function __wbg_metaKey_f8f3c1d2a5b88850(arg0) {
    const ret = arg0.metaKey;
    return ret;
}
export function __wbg_movementX_cacb769bb4f92fb5(arg0) {
    const ret = arg0.movementX;
    return ret;
}
export function __wbg_movementY_6a643f8b43d5a15b(arg0) {
    const ret = arg0.movementY;
    return ret;
}
export function __wbg_msCrypto_bd5a034af96bcba6(arg0) {
    const ret = arg0.msCrypto;
    return ret;
}
export function __wbg_navigator_bc077756492232c5(arg0) {
    const ret = arg0.navigator;
    return ret;
}
export function __wbg_new_0c7403db6e782f19(arg0) {
    const ret = new Uint8Array(arg0);
    return ret;
}
export function __wbg_new_1b792d90f7c7a3b4() { return handleError(function () {
    const ret = new MessageChannel();
    return ret;
}, arguments); }
export function __wbg_new_65b56170be4b0eb3() {
    const ret = new Error();
    return ret;
}
export function __wbg_new_682678e2f47e32bc() {
    const ret = new Array();
    return ret;
}
export function __wbg_new_98c22165a42231aa() { return handleError(function () {
    const ret = new AbortController();
    return ret;
}, arguments); }
export function __wbg_new_a73bd86e73440d2f() { return handleError(function (arg0) {
    const ret = new IntersectionObserver(arg0);
    return ret;
}, arguments); }
export function __wbg_new_aa8d0fa9762c29bd() {
    const ret = new Object();
    return ret;
}
export function __wbg_new_ad8d9a2aa2624a65() { return handleError(function (arg0) {
    const ret = new ResizeObserver(arg0);
    return ret;
}, arguments); }
export function __wbg_new_d9e8ade8a7fba252() { return handleError(function (arg0, arg1) {
    const ret = new Worker(getStringFromWasm0(arg0, arg1));
    return ret;
}, arguments); }
export function __wbg_new_with_context_options_f909c1402cb9fe8c() { return handleError(function (arg0) {
    const ret = new lAudioContext(arg0);
    return ret;
}, arguments); }
export function __wbg_new_with_length_8c854e41ea4dae9b(arg0) {
    const ret = new Uint8Array(arg0 >>> 0);
    return ret;
}
export function __wbg_new_with_str_sequence_and_options_2cfc7ae8f9435aa4() { return handleError(function (arg0, arg1) {
    const ret = new Blob(arg0, arg1);
    return ret;
}, arguments); }
export function __wbg_node_84ea875411254db1(arg0) {
    const ret = arg0.node;
    return ret;
}
export function __wbg_now_36a3148ac47c4ad7(arg0) {
    const ret = arg0.now();
    return ret;
}
export function __wbg_now_e7c6795a7f81e10f(arg0) {
    const ret = arg0.now();
    return ret;
}
export function __wbg_observe_59e08e55b0dd238f(arg0, arg1) {
    arg0.observe(arg1);
}
export function __wbg_observe_5ea88d68554155e1(arg0, arg1, arg2) {
    arg0.observe(arg1, arg2);
}
export function __wbg_observe_c79fbdfb1452af30(arg0, arg1) {
    arg0.observe(arg1);
}
export function __wbg_of_07054ba808010e4f(arg0) {
    const ret = Array.of(arg0);
    return ret;
}
export function __wbg_of_7532e43da680ecb3(arg0, arg1) {
    const ret = Array.of(arg0, arg1);
    return ret;
}
export function __wbg_offsetX_a9bf2ea7f0575ac9(arg0) {
    const ret = arg0.offsetX;
    return ret;
}
export function __wbg_offsetY_10e5433a1bbd4c01(arg0) {
    const ret = arg0.offsetY;
    return ret;
}
export function __wbg_performance_3fcf6e32a7e1ed0a(arg0) {
    const ret = arg0.performance;
    return ret;
}
export function __wbg_persisted_bfebef6179ea1e1a(arg0) {
    const ret = arg0.persisted;
    return ret;
}
export function __wbg_pixelStorei_0da594e7ec84d2ef(arg0, arg1, arg2) {
    arg0.pixelStorei(arg1 >>> 0, arg2);
}
export function __wbg_pixelStorei_6f7ca5f58231a418(arg0, arg1, arg2) {
    arg0.pixelStorei(arg1 >>> 0, arg2);
}
export function __wbg_play_3997a1be51d27925(arg0) {
    arg0.play();
}
export function __wbg_pointerId_b99c11e1f5e3731d(arg0) {
    const ret = arg0.pointerId;
    return ret;
}
export function __wbg_pointerType_5c8062de6087884a(arg0, arg1) {
    const ret = arg1.pointerType;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_port1_8267146008301e78(arg0) {
    const ret = arg0.port1;
    return ret;
}
export function __wbg_port2_1742efa161730e58(arg0) {
    const ret = arg0.port2;
    return ret;
}
export function __wbg_postMessage_1f50a9885ee45fb0() { return handleError(function (arg0, arg1) {
    arg0.postMessage(arg1);
}, arguments); }
export function __wbg_postMessage_2e8ce5e10ce05091() { return handleError(function (arg0, arg1, arg2) {
    arg0.postMessage(arg1, arg2);
}, arguments); }
export function __wbg_postTask_e2439afddcdfbb55(arg0, arg1, arg2) {
    const ret = arg0.postTask(arg1, arg2);
    return ret;
}
export function __wbg_pressure_f5789eab65b5c2ae(arg0) {
    const ret = arg0.pressure;
    return ret;
}
export function __wbg_preventDefault_f55c01cb5fd2bcc0(arg0) {
    arg0.preventDefault();
}
export function __wbg_process_44c7a14e11e9f69e(arg0) {
    const ret = arg0.process;
    return ret;
}
export function __wbg_prototype_0d5bb2023db3bcfc() {
    const ret = ResizeObserverEntry.prototype;
    return ret;
}
export function __wbg_prototypesetcall_a6b02eb00b0f4ce2(arg0, arg1, arg2) {
    Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), arg2);
}
export function __wbg_push_471a5b068a5295f6(arg0, arg1) {
    const ret = arg0.push(arg1);
    return ret;
}
export function __wbg_queueMicrotask_0aed009ff060f723(arg0, arg1) {
    arg0.queueMicrotask(arg1);
}
export function __wbg_queueMicrotask_5d15a957e6aa920e(arg0) {
    queueMicrotask(arg0);
}
export function __wbg_queueMicrotask_f8819e5ffc402f36(arg0) {
    const ret = arg0.queueMicrotask;
    return ret;
}
export function __wbg_randomFillSync_6c25eac9869eb53c() { return handleError(function (arg0, arg1) {
    arg0.randomFillSync(arg1);
}, arguments); }
export function __wbg_readBuffer_a2d26b22c3faabd0(arg0, arg1) {
    arg0.readBuffer(arg1 >>> 0);
}
export function __wbg_readPixels_a78444c3ffa2ad18() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
    arg0.readPixels(arg1, arg2, arg3, arg4, arg5 >>> 0, arg6 >>> 0, arg7);
}, arguments); }
export function __wbg_readPixels_bfac0d542650a07a() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
    arg0.readPixels(arg1, arg2, arg3, arg4, arg5 >>> 0, arg6 >>> 0, arg7);
}, arguments); }
export function __wbg_readPixels_dd7e621f7a36e2ac() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
    arg0.readPixels(arg1, arg2, arg3, arg4, arg5 >>> 0, arg6 >>> 0, arg7);
}, arguments); }
export function __wbg_removeEventListener_7bdf07404d9b24bd() { return handleError(function (arg0, arg1, arg2, arg3) {
    arg0.removeEventListener(getStringFromWasm0(arg1, arg2), arg3);
}, arguments); }
export function __wbg_removeListener_dcb0b2ae1124b401() { return handleError(function (arg0, arg1) {
    arg0.removeListener(arg1);
}, arguments); }
export function __wbg_removeProperty_af5e61d737797fcc() { return handleError(function (arg0, arg1, arg2, arg3) {
    const ret = arg1.removeProperty(getStringFromWasm0(arg2, arg3));
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}, arguments); }
export function __wbg_repeat_f5ff89c357b71af1(arg0) {
    const ret = arg0.repeat;
    return ret;
}
export function __wbg_requestAnimationFrame_6f039d778639cc28() { return handleError(function (arg0, arg1) {
    const ret = arg0.requestAnimationFrame(arg1);
    return ret;
}, arguments); }
export function __wbg_requestFullscreen_3f16e43f398ce624(arg0) {
    const ret = arg0.requestFullscreen();
    return ret;
}
export function __wbg_requestFullscreen_b977a3a0697e883c(arg0) {
    const ret = arg0.requestFullscreen;
    return ret;
}
export function __wbg_requestIdleCallback_3689e3e38f6cfc02(arg0) {
    const ret = arg0.requestIdleCallback;
    return ret;
}
export function __wbg_requestIdleCallback_fd04869e36d71d03() { return handleError(function (arg0, arg1) {
    const ret = arg0.requestIdleCallback(arg1);
    return ret;
}, arguments); }
export function __wbg_require_b4edbdcf3e2a1ef0() { return handleError(function () {
    const ret = module.require;
    return ret;
}, arguments); }
export function __wbg_resolve_e6c466bc1052f16c(arg0) {
    const ret = Promise.resolve(arg0);
    return ret;
}
export function __wbg_resume_b12ef3046a46b3f7() { return handleError(function (arg0) {
    const ret = arg0.resume();
    return ret;
}, arguments); }
export function __wbg_revokeObjectURL_1d23b31dc4ef5f52() { return handleError(function (arg0, arg1) {
    URL.revokeObjectURL(getStringFromWasm0(arg0, arg1));
}, arguments); }
export function __wbg_samplerParameterf_974a275475147bd9(arg0, arg1, arg2, arg3) {
    arg0.samplerParameterf(arg1, arg2 >>> 0, arg3);
}
export function __wbg_samplerParameteri_8a634d1b1b1e79ad(arg0, arg1, arg2, arg3) {
    arg0.samplerParameteri(arg1, arg2 >>> 0, arg3);
}
export function __wbg_scheduler_a17d41c9c822fc26(arg0) {
    const ret = arg0.scheduler;
    return ret;
}
export function __wbg_scheduler_b35fe73ba70e89cc(arg0) {
    const ret = arg0.scheduler;
    return ret;
}
export function __wbg_scissor_a52de5e62ebadc16(arg0, arg1, arg2, arg3, arg4) {
    arg0.scissor(arg1, arg2, arg3, arg4);
}
export function __wbg_scissor_b71fb7e05633cf3d(arg0, arg1, arg2, arg3, arg4) {
    arg0.scissor(arg1, arg2, arg3, arg4);
}
export function __wbg_setAttribute_6fde4098d274155c() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    arg0.setAttribute(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
}, arguments); }
export function __wbg_setPointerCapture_0ade0346ebef3bfc() { return handleError(function (arg0, arg1) {
    arg0.setPointerCapture(arg1);
}, arguments); }
export function __wbg_setProperty_0d903d23a71dfe70() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    arg0.setProperty(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
}, arguments); }
export function __wbg_setTimeout_5a5ca8752c41f8ad() { return handleError(function (arg0, arg1) {
    const ret = arg0.setTimeout(arg1);
    return ret;
}, arguments); }
export function __wbg_setTimeout_d8786dd31f90da0f() { return handleError(function (arg0, arg1, arg2) {
    const ret = arg0.setTimeout(arg1, arg2);
    return ret;
}, arguments); }
export function __wbg_set_022bee52d0b05b19() { return handleError(function (arg0, arg1, arg2) {
    const ret = Reflect.set(arg0, arg1, arg2);
    return ret;
}, arguments); }
export function __wbg_set_6be42768c690e380(arg0, arg1, arg2) {
    arg0[arg1] = arg2;
}
export function __wbg_set_box_e76b1c9ae3cbed18(arg0, arg1) {
    arg0.box = __wbindgen_enum_ResizeObserverBoxOptions[arg1];
}
export function __wbg_set_buffer_c0b9567219746d80(arg0, arg1) {
    arg0.buffer = arg1;
}
export function __wbg_set_height_be9b2b920bd68401(arg0, arg1) {
    arg0.height = arg1 >>> 0;
}
export function __wbg_set_onended_c3a5254e19b266f8(arg0, arg1) {
    arg0.onended = arg1;
}
export function __wbg_set_onmessage_f25fb55032dd93eb(arg0, arg1) {
    arg0.onmessage = arg1;
}
export function __wbg_set_sample_rate_c698733b6083a69f(arg0, arg1) {
    arg0.sampleRate = arg1;
}
export function __wbg_set_type_8b2743f6b4de4035(arg0, arg1, arg2) {
    arg0.type = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_width_5cda41d4d06a14dd(arg0, arg1) {
    arg0.width = arg1 >>> 0;
}
export function __wbg_shaderSource_084cd6ed337b36be(arg0, arg1, arg2, arg3) {
    arg0.shaderSource(arg1, getStringFromWasm0(arg2, arg3));
}
export function __wbg_shaderSource_9b5906e1f027a314(arg0, arg1, arg2, arg3) {
    arg0.shaderSource(arg1, getStringFromWasm0(arg2, arg3));
}
export function __wbg_shiftKey_dcf8ee699c273ed2(arg0) {
    const ret = arg0.shiftKey;
    return ret;
}
export function __wbg_shiftKey_e483c13c966878f6(arg0) {
    const ret = arg0.shiftKey;
    return ret;
}
export function __wbg_signal_fdc54643b47bf85b(arg0) {
    const ret = arg0.signal;
    return ret;
}
export function __wbg_stack_08bff037946c727e(arg0, arg1) {
    const ret = arg1.stack;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_start_344d0f6ecabcdcb7() { return handleError(function (arg0, arg1) {
    arg0.start(arg1);
}, arguments); }
export function __wbg_start_fe881c7e1e08aeef(arg0) {
    arg0.start();
}
export function __wbg_static_accessor_GLOBAL_8cfadc87a297ca02() {
    const ret = typeof global === 'undefined' ? null : global;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf() {
    const ret = typeof globalThis === 'undefined' ? null : globalThis;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_static_accessor_SELF_e445c1c7484aecc3() {
    const ret = typeof self === 'undefined' ? null : self;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_static_accessor_WINDOW_f20e8576ef1e0f17() {
    const ret = typeof window === 'undefined' ? null : window;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_status_43e0d2f15b22d69f(arg0) {
    const ret = arg0.status;
    return ret;
}
export function __wbg_stencilFunc_5fd76b4724f9341a(arg0, arg1, arg2, arg3) {
    arg0.stencilFunc(arg1 >>> 0, arg2, arg3 >>> 0);
}
export function __wbg_stencilFunc_fdb015737c5c780f(arg0, arg1, arg2, arg3) {
    arg0.stencilFunc(arg1 >>> 0, arg2, arg3 >>> 0);
}
export function __wbg_stencilMask_38acb5180bfdee01(arg0, arg1) {
    arg0.stencilMask(arg1 >>> 0);
}
export function __wbg_stencilMask_7f6b699426cca747(arg0, arg1) {
    arg0.stencilMask(arg1 >>> 0);
}
export function __wbg_stencilOp_36eab248b4f3a677(arg0, arg1, arg2, arg3) {
    arg0.stencilOp(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0);
}
export function __wbg_stencilOp_4513227bdd11f42b(arg0, arg1, arg2, arg3) {
    arg0.stencilOp(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0);
}
export function __wbg_stringify_91082ed7a5a5769e() { return handleError(function (arg0) {
    const ret = JSON.stringify(arg0);
    return ret;
}, arguments); }
export function __wbg_style_c331a9f6564f8f62(arg0) {
    const ret = arg0.style;
    return ret;
}
export function __wbg_subarray_f8ca46a25b1f5e0d(arg0, arg1, arg2) {
    const ret = arg0.subarray(arg1 >>> 0, arg2 >>> 0);
    return ret;
}
export function __wbg_texImage2D_b17c7723201a6d5e() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
    arg0.texImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
}, arguments); }
export function __wbg_texImage2D_bd0466091ed50f83() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
    arg0.texImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
}, arguments); }
export function __wbg_texImage2D_f110542c571d15a4() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
    arg0.texImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
}, arguments); }
export function __wbg_texImage3D_4bd56d113304ee34() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
    arg0.texImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8 >>> 0, arg9 >>> 0, arg10);
}, arguments); }
export function __wbg_texImage3D_b197787478b2ebe9() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
    arg0.texImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8 >>> 0, arg9 >>> 0, arg10);
}, arguments); }
export function __wbg_texParameteri_83c7801427720baa(arg0, arg1, arg2, arg3) {
    arg0.texParameteri(arg1 >>> 0, arg2 >>> 0, arg3);
}
export function __wbg_texParameteri_bc24667dff936ebd(arg0, arg1, arg2, arg3) {
    arg0.texParameteri(arg1 >>> 0, arg2 >>> 0, arg3);
}
export function __wbg_then_792e0c862b060889(arg0, arg1, arg2) {
    const ret = arg0.then(arg1, arg2);
    return ret;
}
export function __wbg_then_8e16ee11f05e4827(arg0, arg1) {
    const ret = arg0.then(arg1);
    return ret;
}
export function __wbg_uniform1i_bde3c7d92bc444b2(arg0, arg1, arg2) {
    arg0.uniform1i(arg1, arg2);
}
export function __wbg_uniform1i_cfd4726efd9d58b4(arg0, arg1, arg2) {
    arg0.uniform1i(arg1, arg2);
}
export function __wbg_uniformBlockBinding_937f5d284b5d4fca(arg0, arg1, arg2, arg3) {
    arg0.uniformBlockBinding(arg1, arg2 >>> 0, arg3 >>> 0);
}
export function __wbg_unobserve_fba3a73b4a61a859(arg0, arg1) {
    arg0.unobserve(arg1);
}
export function __wbg_useProgram_6403314e6307ff8f(arg0, arg1) {
    arg0.useProgram(arg1);
}
export function __wbg_useProgram_b0607e62e147410b(arg0, arg1) {
    arg0.useProgram(arg1);
}
export function __wbg_userAgentData_31b8f893e8977e94(arg0) {
    const ret = arg0.userAgentData;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_userAgent_609f939440dc6b62() { return handleError(function (arg0, arg1) {
    const ret = arg1.userAgent;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}, arguments); }
export function __wbg_versions_276b2795b1c6a219(arg0) {
    const ret = arg0.versions;
    return ret;
}
export function __wbg_vertexAttribDivisorANGLE_49500429f99e1d27(arg0, arg1, arg2) {
    arg0.vertexAttribDivisorANGLE(arg1 >>> 0, arg2 >>> 0);
}
export function __wbg_vertexAttribDivisor_406c4f2dab66050b(arg0, arg1, arg2) {
    arg0.vertexAttribDivisor(arg1 >>> 0, arg2 >>> 0);
}
export function __wbg_vertexAttribPointer_89754c61239e5837(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    arg0.vertexAttribPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4 !== 0, arg5, arg6);
}
export function __wbg_vertexAttribPointer_dfec25e05e323ba4(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    arg0.vertexAttribPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4 !== 0, arg5, arg6);
}
export function __wbg_viewport_325ef6f6b074c24f(arg0, arg1, arg2, arg3, arg4) {
    arg0.viewport(arg1, arg2, arg3, arg4);
}
export function __wbg_viewport_b1858453ab05f289(arg0, arg1, arg2, arg3, arg4) {
    arg0.viewport(arg1, arg2, arg3, arg4);
}
export function __wbg_visibilityState_cbab2cc123aa13ec(arg0) {
    const ret = arg0.visibilityState;
    return (__wbindgen_enum_VisibilityState.indexOf(ret) + 1 || 3) - 1;
}
export function __wbg_webkitFullscreenElement_4055d847f8ff064e(arg0) {
    const ret = arg0.webkitFullscreenElement;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_webkitRequestFullscreen_c4ec4df7be373ffd(arg0) {
    arg0.webkitRequestFullscreen();
}
export function __wbg_width_ddbe321b233b5921(arg0) {
    const ret = arg0.width;
    return ret;
}
export function __wbg_x_0083194d4284e4b7(arg0) {
    const ret = arg0.x;
    return ret;
}
export function __wbg_y_749e1551b16245f8(arg0) {
    const ret = arg0.y;
    return ret;
}
export function __wbindgen_cast_0000000000000001(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [Externref], shim_idx: 17633, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm_bindgen__convert__closures_____invoke__h048f969c377d9bbd);
    return ret;
}
export function __wbindgen_cast_0000000000000002(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [Externref], shim_idx: 60212, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm_bindgen__convert__closures_____invoke__h6de0c161c138a18f);
    return ret;
}
export function __wbindgen_cast_0000000000000003(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("Array<any>"), NamedExternref("ResizeObserver")], shim_idx: 17638, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm_bindgen__convert__closures_____invoke__h36d0bc8f6ad74d1b);
    return ret;
}
export function __wbindgen_cast_0000000000000004(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("Array<any>")], shim_idx: 17633, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm_bindgen__convert__closures_____invoke__h048f969c377d9bbd_3);
    return ret;
}
export function __wbindgen_cast_0000000000000005(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("Event")], shim_idx: 17633, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm_bindgen__convert__closures_____invoke__h048f969c377d9bbd_4);
    return ret;
}
export function __wbindgen_cast_0000000000000006(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("FocusEvent")], shim_idx: 17633, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm_bindgen__convert__closures_____invoke__h048f969c377d9bbd_5);
    return ret;
}
export function __wbindgen_cast_0000000000000007(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("KeyboardEvent")], shim_idx: 17633, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm_bindgen__convert__closures_____invoke__h048f969c377d9bbd_6);
    return ret;
}
export function __wbindgen_cast_0000000000000008(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("PageTransitionEvent")], shim_idx: 17633, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm_bindgen__convert__closures_____invoke__h048f969c377d9bbd_7);
    return ret;
}
export function __wbindgen_cast_0000000000000009(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("PointerEvent")], shim_idx: 17633, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm_bindgen__convert__closures_____invoke__h048f969c377d9bbd_8);
    return ret;
}
export function __wbindgen_cast_000000000000000a(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("WheelEvent")], shim_idx: 17633, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm_bindgen__convert__closures_____invoke__h048f969c377d9bbd_9);
    return ret;
}
export function __wbindgen_cast_000000000000000b(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [], shim_idx: 16695, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm_bindgen__convert__closures_____invoke__h1c2ccf2c289a69ea);
    return ret;
}
export function __wbindgen_cast_000000000000000c(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [], shim_idx: 17644, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm_bindgen__convert__closures_____invoke__hdb00a705bfc8f094);
    return ret;
}
export function __wbindgen_cast_000000000000000d(arg0) {
    // Cast intrinsic for `F64 -> Externref`.
    const ret = arg0;
    return ret;
}
export function __wbindgen_cast_000000000000000e(arg0, arg1) {
    // Cast intrinsic for `Ref(Slice(F32)) -> NamedExternref("Float32Array")`.
    const ret = getArrayF32FromWasm0(arg0, arg1);
    return ret;
}
export function __wbindgen_cast_000000000000000f(arg0, arg1) {
    // Cast intrinsic for `Ref(Slice(I16)) -> NamedExternref("Int16Array")`.
    const ret = getArrayI16FromWasm0(arg0, arg1);
    return ret;
}
export function __wbindgen_cast_0000000000000010(arg0, arg1) {
    // Cast intrinsic for `Ref(Slice(I32)) -> NamedExternref("Int32Array")`.
    const ret = getArrayI32FromWasm0(arg0, arg1);
    return ret;
}
export function __wbindgen_cast_0000000000000011(arg0, arg1) {
    // Cast intrinsic for `Ref(Slice(I8)) -> NamedExternref("Int8Array")`.
    const ret = getArrayI8FromWasm0(arg0, arg1);
    return ret;
}
export function __wbindgen_cast_0000000000000012(arg0, arg1) {
    // Cast intrinsic for `Ref(Slice(U16)) -> NamedExternref("Uint16Array")`.
    const ret = getArrayU16FromWasm0(arg0, arg1);
    return ret;
}
export function __wbindgen_cast_0000000000000013(arg0, arg1) {
    // Cast intrinsic for `Ref(Slice(U32)) -> NamedExternref("Uint32Array")`.
    const ret = getArrayU32FromWasm0(arg0, arg1);
    return ret;
}
export function __wbindgen_cast_0000000000000014(arg0, arg1) {
    // Cast intrinsic for `Ref(Slice(U8)) -> NamedExternref("Uint8Array")`.
    const ret = getArrayU8FromWasm0(arg0, arg1);
    return ret;
}
export function __wbindgen_cast_0000000000000015(arg0, arg1) {
    // Cast intrinsic for `Ref(String) -> Externref`.
    const ret = getStringFromWasm0(arg0, arg1);
    return ret;
}
export function __wbindgen_init_externref_table() {
    const table = wasm.__wbindgen_externrefs;
    const offset = table.grow(4);
    table.set(0, undefined);
    table.set(offset + 0, undefined);
    table.set(offset + 1, null);
    table.set(offset + 2, true);
    table.set(offset + 3, false);
}
const lAudioContext = (typeof AudioContext !== 'undefined' ? AudioContext : (typeof webkitAudioContext !== 'undefined' ? webkitAudioContext : undefined));
function wasm_bindgen__convert__closures_____invoke__h1c2ccf2c289a69ea(arg0, arg1) {
    wasm.wasm_bindgen__convert__closures_____invoke__h1c2ccf2c289a69ea(arg0, arg1);
}

function wasm_bindgen__convert__closures_____invoke__hdb00a705bfc8f094(arg0, arg1) {
    wasm.wasm_bindgen__convert__closures_____invoke__hdb00a705bfc8f094(arg0, arg1);
}

function wasm_bindgen__convert__closures_____invoke__h048f969c377d9bbd(arg0, arg1, arg2) {
    wasm.wasm_bindgen__convert__closures_____invoke__h048f969c377d9bbd(arg0, arg1, arg2);
}

function wasm_bindgen__convert__closures_____invoke__h048f969c377d9bbd_3(arg0, arg1, arg2) {
    wasm.wasm_bindgen__convert__closures_____invoke__h048f969c377d9bbd_3(arg0, arg1, arg2);
}

function wasm_bindgen__convert__closures_____invoke__h048f969c377d9bbd_4(arg0, arg1, arg2) {
    wasm.wasm_bindgen__convert__closures_____invoke__h048f969c377d9bbd_4(arg0, arg1, arg2);
}

function wasm_bindgen__convert__closures_____invoke__h048f969c377d9bbd_5(arg0, arg1, arg2) {
    wasm.wasm_bindgen__convert__closures_____invoke__h048f969c377d9bbd_5(arg0, arg1, arg2);
}

function wasm_bindgen__convert__closures_____invoke__h048f969c377d9bbd_6(arg0, arg1, arg2) {
    wasm.wasm_bindgen__convert__closures_____invoke__h048f969c377d9bbd_6(arg0, arg1, arg2);
}

function wasm_bindgen__convert__closures_____invoke__h048f969c377d9bbd_7(arg0, arg1, arg2) {
    wasm.wasm_bindgen__convert__closures_____invoke__h048f969c377d9bbd_7(arg0, arg1, arg2);
}

function wasm_bindgen__convert__closures_____invoke__h048f969c377d9bbd_8(arg0, arg1, arg2) {
    wasm.wasm_bindgen__convert__closures_____invoke__h048f969c377d9bbd_8(arg0, arg1, arg2);
}

function wasm_bindgen__convert__closures_____invoke__h048f969c377d9bbd_9(arg0, arg1, arg2) {
    wasm.wasm_bindgen__convert__closures_____invoke__h048f969c377d9bbd_9(arg0, arg1, arg2);
}

function wasm_bindgen__convert__closures_____invoke__h6de0c161c138a18f(arg0, arg1, arg2) {
    const ret = wasm.wasm_bindgen__convert__closures_____invoke__h6de0c161c138a18f(arg0, arg1, arg2);
    if (ret[1]) {
        throw takeFromExternrefTable0(ret[0]);
    }
}

function wasm_bindgen__convert__closures_____invoke__h36d0bc8f6ad74d1b(arg0, arg1, arg2, arg3) {
    wasm.wasm_bindgen__convert__closures_____invoke__h36d0bc8f6ad74d1b(arg0, arg1, arg2, arg3);
}


const __wbindgen_enum_ResizeObserverBoxOptions = ["border-box", "content-box", "device-pixel-content-box"];


const __wbindgen_enum_VisibilityState = ["hidden", "visible"];
const OutputDeviceFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_outputdevice_free(ptr >>> 0, 1));

function addToExternrefTable0(obj) {
    const idx = wasm.__externref_table_alloc();
    wasm.__wbindgen_externrefs.set(idx, obj);
    return idx;
}

const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(state => wasm.__wbindgen_destroy_closure(state.a, state.b));

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches && builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

function getArrayF32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getFloat32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}

function getArrayI16FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getInt16ArrayMemory0().subarray(ptr / 2, ptr / 2 + len);
}

function getArrayI32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getInt32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}

function getArrayI8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getInt8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

function getArrayU16FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint16ArrayMemory0().subarray(ptr / 2, ptr / 2 + len);
}

function getArrayU32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

let cachedFloat32ArrayMemory0 = null;
function getFloat32ArrayMemory0() {
    if (cachedFloat32ArrayMemory0 === null || cachedFloat32ArrayMemory0.byteLength === 0) {
        cachedFloat32ArrayMemory0 = new Float32Array(wasm.memory.buffer);
    }
    return cachedFloat32ArrayMemory0;
}

let cachedInt16ArrayMemory0 = null;
function getInt16ArrayMemory0() {
    if (cachedInt16ArrayMemory0 === null || cachedInt16ArrayMemory0.byteLength === 0) {
        cachedInt16ArrayMemory0 = new Int16Array(wasm.memory.buffer);
    }
    return cachedInt16ArrayMemory0;
}

let cachedInt32ArrayMemory0 = null;
function getInt32ArrayMemory0() {
    if (cachedInt32ArrayMemory0 === null || cachedInt32ArrayMemory0.byteLength === 0) {
        cachedInt32ArrayMemory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32ArrayMemory0;
}

let cachedInt8ArrayMemory0 = null;
function getInt8ArrayMemory0() {
    if (cachedInt8ArrayMemory0 === null || cachedInt8ArrayMemory0.byteLength === 0) {
        cachedInt8ArrayMemory0 = new Int8Array(wasm.memory.buffer);
    }
    return cachedInt8ArrayMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return decodeText(ptr, len);
}

let cachedUint16ArrayMemory0 = null;
function getUint16ArrayMemory0() {
    if (cachedUint16ArrayMemory0 === null || cachedUint16ArrayMemory0.byteLength === 0) {
        cachedUint16ArrayMemory0 = new Uint16Array(wasm.memory.buffer);
    }
    return cachedUint16ArrayMemory0;
}

let cachedUint32ArrayMemory0 = null;
function getUint32ArrayMemory0() {
    if (cachedUint32ArrayMemory0 === null || cachedUint32ArrayMemory0.byteLength === 0) {
        cachedUint32ArrayMemory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachedUint32ArrayMemory0;
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        const idx = addToExternrefTable0(e);
        wasm.__wbindgen_exn_store(idx);
    }
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function makeMutClosure(arg0, arg1, f) {
    const state = { a: arg0, b: arg1, cnt: 1 };
    const real = (...args) => {

        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            state.a = a;
            real._wbg_cb_unref();
        }
    };
    real._wbg_cb_unref = () => {
        if (--state.cnt === 0) {
            wasm.__wbindgen_destroy_closure(state.a, state.b);
            state.a = 0;
            CLOSURE_DTORS.unregister(state);
        }
    };
    CLOSURE_DTORS.register(real, state, state);
    return real;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_externrefs.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;


let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}
