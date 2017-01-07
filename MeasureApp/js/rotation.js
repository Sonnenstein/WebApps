// A script to perform rotations in 3d space. All angles are meant to be polar coordinates.

// rotates arround x-Axis
function rotateX(vec, angle) {
	var res = [];
	res["x"] = vec["x"];
	res["y"] = Math.cos(angle) * vec["y"] - Math.sin(angle) * vec["z"]; 
	res["z"] = Math.sin(angle) * vec["y"] + Math.cos(angle) * vec["z"];
	return res;
}

// rotates arround y-Axis
function rotateY(vec, angle) {
	var res = [];
	res["x"] = Math.cos(angle) * vec["x"] - Math.sin(angle) * vec["z"];
	res["y"] = vec["y"];
	res["z"] = Math.sin(angle) * vec["x"] + Math.cos(angle) * vec["z"];
	return res
}

// rotates arround z-Axis
function rotateZ(vec, angle) {
	var res = [];
	res["x"] = Math.cos(angle) * vec["x"] - Math.sin(angle) * vec["y"]; 
	res["y"] = Math.sin(angle) * vec["x"] + Math.cos(angle) * vec["y"]; 
	res["z"] = vec["z"];
	return res;
} 

// transforms from device to world based on measurement of device
function transformDeviceToWorld(vec, angleAlpha, angleBeta, angleGamma) {
	var res = vec;
	res = rotateZ(res, -angleAlpha);
	res = rotateX(res, -angleBeta);
	res = rotateY(res, -angleGamma);
	return res;
}

// transforms from world to device based on measurement of device
function transformWorldtoDevice(vec, angleAlpha, angleBeta, angleGamma) {
	var res = vec;
	res = rotateY(res, angleGamma);
	res = rotateX(res, angleBeta);
	res = rotateZ(res, angleAlpha);
	return res;
}