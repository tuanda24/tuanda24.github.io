const _0x322251 = _0x15bc;
(function (_0x3f94b3, _0x55d485) {
  const _0x5007da = _0x15bc,
    _0x36fec5 = _0x3f94b3();
  while (!![]) {
    try {
      const _0x1f97d3 =
        parseInt(_0x5007da(0xfb)) / 0x1 +
        (parseInt(_0x5007da(0x116)) / 0x2) *
          (-parseInt(_0x5007da(0x11e)) / 0x3) +
        (-parseInt(_0x5007da(0x10c)) / 0x4) *
          (parseInt(_0x5007da(0x108)) / 0x5) +
        -parseInt(_0x5007da(0x12c)) / 0x6 +
        parseInt(_0x5007da(0x11a)) / 0x7 +
        (parseInt(_0x5007da(0x102)) / 0x8) *
          (parseInt(_0x5007da(0x100)) / 0x9) +
        parseInt(_0x5007da(0x134)) / 0xa;
      if (_0x1f97d3 === _0x55d485) break;
      else _0x36fec5["push"](_0x36fec5["shift"]());
    } catch (_0x50b9ca) {
      _0x36fec5["push"](_0x36fec5["shift"]());
    }
  }
})(_0x25e5, 0x38057),
  console[_0x322251(0x132)]();
const scene = new THREE[_0x322251(0x131)](),
  camera = new THREE[_0x322251(0xf6)](
    0x4b,
    window[_0x322251(0x137)] / window[_0x322251(0x130)],
    0.1,
    0x3e8
  ),
  renderer = new THREE[_0x322251(0x12a)]({ antialias: !![] });
renderer["setClearColor"](0xff5555),
  renderer[_0x322251(0xef)](window[_0x322251(0x137)], window["innerHeight"]),
  document[_0x322251(0x136)]["appendChild"](renderer["domElement"]),
  (camera["position"]["z"] = 0x1);
function _0x25e5() {
  const _0x2f1d4b = [
    "Scene",
    "clear",
    "rotateX",
    "8954190RKfBZC",
    "material",
    "body",
    "innerWidth",
    "16px",
    "multiplyScalar",
    "setSize",
    "textAlign",
    "position",
    "load",
    "MeshSurfaceSampler",
    "rotation",
    "PerspectiveCamera",
    "push",
    "TrackballControls",
    "createElement",
    "one",
    "29058EmMWEw",
    "updateProjectionMatrix",
    "LineSegments",
    "Vector3",
    "build",
    "603yaYdLy",
    "random",
    "13728vlYphV",
    "appendChild",
    "needsUpdate",
    "resize",
    "forEach",
    "color",
    "10415wMeNis",
    "style",
    "domElement",
    "sample",
    "188qxoneb",
    "add",
    "noise4D",
    "clone",
    "length",
    "maxDistance",
    "Group",
    "two",
    "div",
    "attributes",
    "779398YdyQnY",
    "scale",
    "geometry",
    "children",
    "308455XCWhvU",
    "setAttribute",
    "10px\x200",
    "minDistance",
    "3NnDwQD",
    "zIndex",
    "left",
    "BufferGeometry",
    "BufferAttribute",
    "white",
    "aspect",
    "padding",
    "fontSize",
    "from",
    "9999",
    "update",
    "WebGLRenderer",
    "MeshBasicMaterial",
    "2198706AVSuZk",
    "setLength",
    "none",
    "array",
    "innerHeight",
  ];
  _0x25e5 = function () {
    return _0x2f1d4b;
  };
  return _0x25e5();
}
const controls = new THREE[_0x322251(0xf8)](camera, renderer[_0x322251(0x10a)]);
(controls["noPan"] = !![]),
  (controls[_0x322251(0x111)] = 0x3),
  (controls[_0x322251(0x11d)] = 0.7);
const group = new THREE[_0x322251(0x112)]();
scene["add"](group);
let heart = null,
  sampler = null,
  originHeart = null;
new THREE["OBJLoader"]()[_0x322251(0xf2)](
  "https://assets.codepen.io/127738/heart_2.obj",
  (_0x1f833d) => {
    const _0x33f6af = _0x322251;
    (heart = _0x1f833d[_0x33f6af(0x119)][0x0]),
      heart[_0x33f6af(0x118)][_0x33f6af(0x133)](-Math["PI"] * 0.5),
      heart[_0x33f6af(0x118)][_0x33f6af(0x117)](0.04, 0.04, 0.04),
      heart["geometry"]["translate"](0x0, -0.4, 0x0),
      group[_0x33f6af(0x10d)](heart),
      (heart[_0x33f6af(0x135)] = new THREE[_0x33f6af(0x12b)]({
        color: 0xff5555,
      })),
      (originHeart = Array[_0x33f6af(0x127)](
        heart[_0x33f6af(0x118)]["attributes"][_0x33f6af(0xf1)][_0x33f6af(0x12f)]
      )),
      (sampler = new THREE[_0x33f6af(0xf4)](heart)[_0x33f6af(0xff)]()),
      init(),
      renderer["setAnimationLoop"](render);
  }
);
let positions = [];
const geometry = new THREE[_0x322251(0x121)](),
  material = new THREE["LineBasicMaterial"]({ color: 0xffffff }),
  lines = new THREE[_0x322251(0xfd)](geometry, material);
group[_0x322251(0x10d)](lines);
const simplex = new SimplexNoise(),
  pos = new THREE["Vector3"]();
class Grass {
  constructor() {
    const _0x393942 = _0x322251;
    sampler[_0x393942(0x10b)](pos),
      (this["pos"] = pos[_0x393942(0x10f)]()),
      (this["scale"] = Math[_0x393942(0x101)]() * 0.01 + 0.001),
      (this[_0x393942(0xfa)] = null),
      (this["two"] = null);
  }
  [_0x322251(0x129)](_0x250fdd) {
    const _0x50eb29 = _0x322251,
      _0xc4e1cf =
        simplex["noise4D"](
          this["pos"]["x"] * 1.5,
          this["pos"]["y"] * 1.5,
          this["pos"]["z"] * 1.5,
          _0x250fdd * 0.0005
        ) + 0x1;
    (this[_0x50eb29(0xfa)] = this["pos"]
      [_0x50eb29(0x10f)]()
      [_0x50eb29(0xee)](1.01 + _0xc4e1cf * 0.15 * beat["a"])),
      (this[_0x50eb29(0x113)] = this[_0x50eb29(0xfa)]
        [_0x50eb29(0x10f)]()
        [_0x50eb29(0x10d)](
          this["one"]
            [_0x50eb29(0x10f)]()
            [_0x50eb29(0x12d)](this[_0x50eb29(0x117)])
        ));
  }
}
let spikes = [];
function _0x15bc(_0x115458, _0x130bb9) {
  const _0x25e5cd = _0x25e5();
  return (
    (_0x15bc = function (_0x15bcfe, _0x13db06) {
      _0x15bcfe = _0x15bcfe - 0xed;
      let _0x1cfe24 = _0x25e5cd[_0x15bcfe];
      return _0x1cfe24;
    }),
    _0x15bc(_0x115458, _0x130bb9)
  );
}
function init(_0x1b9867) {
  const _0x1d0cff = _0x322251;
  positions = [];
  for (let _0x3919e2 = 0x0; _0x3919e2 < 0x4e20; _0x3919e2++) {
    const _0x464ff0 = new Grass();
    spikes[_0x1d0cff(0xf7)](_0x464ff0);
  }
}
const beat = { a: 0x0 };
gsap["timeline"]({ repeat: -0x1, repeatDelay: 0.3 })
  ["to"](beat, { a: 1.2, duration: 0.6, ease: "power2.in" })
  ["to"](beat, { a: 0x0, duration: 0.6, ease: "power3.out" }),
  gsap["to"](group[_0x322251(0xf5)], {
    y: Math["PI"] * 0x2,
    duration: 0xc,
    ease: _0x322251(0x12e),
    repeat: -0x1,
  });
function render(_0x4931bc) {
  const _0x121496 = _0x322251;
  (positions = []),
    spikes[_0x121496(0x106)]((_0x26179a) => {
      const _0x27e4f4 = _0x121496;
      _0x26179a[_0x27e4f4(0x129)](_0x4931bc),
        positions[_0x27e4f4(0xf7)](
          _0x26179a[_0x27e4f4(0xfa)]["x"],
          _0x26179a[_0x27e4f4(0xfa)]["y"],
          _0x26179a[_0x27e4f4(0xfa)]["z"]
        ),
        positions[_0x27e4f4(0xf7)](
          _0x26179a[_0x27e4f4(0x113)]["x"],
          _0x26179a[_0x27e4f4(0x113)]["y"],
          _0x26179a[_0x27e4f4(0x113)]["z"]
        );
    }),
    geometry[_0x121496(0x11b)](
      "position",
      new THREE[_0x121496(0x122)](new Float32Array(positions), 0x3)
    );
  const _0x2dc0e7 =
    heart[_0x121496(0x118)]["attributes"][_0x121496(0xf1)][_0x121496(0x12f)];
  for (
    let _0x57b4ed = 0x0;
    _0x57b4ed < _0x2dc0e7[_0x121496(0x110)];
    _0x57b4ed += 0x3
  ) {
    const _0xdaeddc = new THREE[_0x121496(0xfe)](
        originHeart[_0x57b4ed],
        originHeart[_0x57b4ed + 0x1],
        originHeart[_0x57b4ed + 0x2]
      ),
      _0x107151 =
        simplex[_0x121496(0x10e)](
          originHeart[_0x57b4ed] * 1.5,
          originHeart[_0x57b4ed + 0x1] * 1.5,
          originHeart[_0x57b4ed + 0x2] * 1.5,
          _0x4931bc * 0.0005
        ) + 0x1;
    _0xdaeddc["multiplyScalar"](0x1 + _0x107151 * 0.15 * beat["a"]),
      (_0x2dc0e7[_0x57b4ed] = _0xdaeddc["x"]),
      (_0x2dc0e7[_0x57b4ed + 0x1] = _0xdaeddc["y"]),
      (_0x2dc0e7[_0x57b4ed + 0x2] = _0xdaeddc["z"]);
  }
  (heart["geometry"][_0x121496(0x115)][_0x121496(0xf1)][_0x121496(0x104)] =
    !![]),
    controls[_0x121496(0x129)](),
    renderer["render"](scene, camera);
}
window["addEventListener"](_0x322251(0x105), onWindowResize, ![]);
function onWindowResize() {
  const _0x398dfe = _0x322251;
  (camera[_0x398dfe(0x124)] =
    window[_0x398dfe(0x137)] / window[_0x398dfe(0x130)]),
    camera[_0x398dfe(0xfc)](),
    renderer["setSize"](window[_0x398dfe(0x137)], window["innerHeight"]);
}
const footer = document[_0x322251(0xf9)](_0x322251(0x114));
(footer["innerText"] = _0x322251(0xf3)),
  (footer["style"][_0x322251(0xf1)] = "fixed"),
  (footer[_0x322251(0x109)][_0x322251(0x120)] = "0"),
  (footer[_0x322251(0x109)]["bottom"] = "0"),
  (footer["style"]["width"] = "100%"),
  (footer["style"][_0x322251(0xf0)] = "center"),
  (footer[_0x322251(0x109)][_0x322251(0x125)] = _0x322251(0x11c)),
  (footer[_0x322251(0x109)][_0x322251(0x126)] = _0x322251(0xed)),
  (footer[_0x322251(0x109)][_0x322251(0x107)] = _0x322251(0x123)),
  (footer[_0x322251(0x109)][_0x322251(0x11f)] = _0x322251(0x128)),
  document[_0x322251(0x136)][_0x322251(0x103)](footer);
