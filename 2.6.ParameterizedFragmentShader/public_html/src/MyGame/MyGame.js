/*
 * File: MyGame.js 
 * This is the logic of our game. For now, this is very simple.
 */
/*jslint node: true, vars: true */
/*global gEngine: false, SimpleShader: false */
/* find out more about jslint: http://www.jslint.com/help.html */

"use strict";  // Operate in Strict mode such that variables must be declared before used!

function MyGame(htmlCanvasID) {
    // The shader for drawing
    this.mShader = null;
    this.mShaderTri = null;
    // Step A: Initialize the webGL Context and the VertexBuffer
    gEngine.Core.initializeWebGL(htmlCanvasID);
    var gl = gEngine.Core.getGL();
    // Step B: Create, load and compile the shaders
    this.mShader = new SimpleShader(
        "src/GLSLShaders/SimpleVS.glsl",        // Path to the VertexShader 
        "src/GLSLShaders/SimpleFS.glsl",
	true);       // Path to the FragmentShader
	
    // Step C: Draw!
    // Step C1: Clear the canvas
    // clearCanvas transport a color to gEngine.Core.clear
    gEngine.Core.clearCanvas([0, 0.8, 0, 1]);

    // Step C2: Activate the proper shader
    // also transport a color

    this.mShader.activateShader([0, 0, 1, 1], 0.3, 0.3);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    this.mShader.activateShader([1, 1, 0, 1], -0.3, 0.3);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    this.mShader.activateShader([1, 0, 0, 1], -0.5, -0.5);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 3);

    // draw tri 
    this.mShaderTri = new SimpleShader(
        "src/GLSLShaders/SimpleVS.glsl",        // Path to the VertexShader 
        "src/GLSLShaders/SimpleFS.glsl",
	false);       // Path to the FragmentShader
    this.mShaderTri.activateShader([1, 1, 1, 1], -0.3, -0.2);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 3);
    this.mShaderTri.activateShader([0, 0, 1, 1], 0.3, -0.4);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 3);
    // Step C3: Draw with the currently activated geometry and the activated shader
    
}