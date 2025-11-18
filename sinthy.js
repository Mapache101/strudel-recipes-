setcpm(120/4)


// kick
$: s("bd:9")
  .color("orange")
  .beat("<[0, 1, 2] <[0, 2]!3 [0,1,2,3]>>",4)
  ._punchcard()

// high-hat
$: s("<emudrumulator_hh:6>*16")
  .crush(3)
  .hpf(8000)
  .velocity(rand)
  .gain(rand)
  .color("gold")
  ._punchcard()

// bass
$: n("<0 2 0 3 0 2 0 3 0 2 0 3 0 2 3 [5 3 5 3]>")
  .scale("c:minor")
  .trans(-12, -24)
  .sound("sawtooth")
  .lpf(400)
  .lps(.3)
  .lpd(2)
  .lpe(3.6)
  .color("red")
  .gain(2)
  ._punchcard({
    overscan:10,
    autorange:true
  })  ._spectrum()

// bing bong
$: n("<0 2 4 6 8 4>*16")
  .scale("c:minor")
  .delay(.1)
  .gain(1.1)
  .sound("gm_overdriven_guitar")
  .lpf(400)
  .lpe(3)
  .gain(2)
  .room(.25)
  .color("cyan")
  ._punchcard()
  ._spectrum()

// goldeneye
//$: n("0 [1 1] [~ 0] 0".add("<0 2 [3 [5 4] ] [0 1 0 1]>"))
  .scale("c:minor")
  .trans(12)
  .s("supersaw")
  .fm(2)
  .delay(.2)
  .gain(1.5)
  .crush(4)
  .color("lightgreen")
  ._punchcard()
  ._spectrum()

// Lavender Town
$: n("[2 0 2 1]/2".add("<0 -2 0 [-2 0]>"))
  .sound("gm_steel_drums, gm_violin")
  .scale("eb:major")
  .trans(24)
  .attack(.2)
  .crush(8)
  .gain(.7)
  .hpf(2000)
  .color("yellow")
  ._punchcard()
  ._spectrum()

// lead
//$: n("<[2@3 3]!3 <[2] [2 3 4 3]*4 [2 1] [2 3 4]*4>>".add("<<0 7 3 4 5 4> <3 4> <4 5> 7>"))
  .scale("c:minor")
  .s("gm_overdriven_guitar, sawtooth")
  .delay(.5)
  .gain(2)
  .hpf(1000)
  .crush(4)
  .gain(-2)
  .lpf(400)
  .lpe(4)
  .lpd(.12)
  .lps(.2)
  .room(1)
  .color("purple")
  ._punchcard({
    autorange:true
  })
  ._spectrum()
