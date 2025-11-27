setcps(.90)

const loopAx = register('loopAx', 
  (l, pat) => pat.loopAt(l).chop(l*2).legato(.5).mul(speed(0.99))
);

register('meatenvelope', (x, pat) => pat.lpf(500)
         .lpenv(x * 9).lps(.2).lpd(.12)
         .ftype("<0 1 2>").lpq(1)
        )

register('grillmeat', (x, pat) => pat.phaser(x)
         .lpf(500).lpenv(x * 9).lps(.2).lpd(.12)
         .ftype("<0 1 2>").lpq(1)
        )

const GLOBAL_DELAY = slider(0.3673, .1, 1)

const TRAILMIX = n("<0 6 4 9 7 6>*8").add("<7 _ _ 6 5 _ _ 6>*2")
  .scale("a:minor").trans(-12)
  .s("sawtooth:<1 2 3 4>")
  .meatenvelope(slider(0.4971, .1, 2))
  .distort(1).pan(sine.fast(6))
  .gain(slider(0.3147, .1, 2))

const FRUITSTICK = n("<0 2 5 6 9>*8").add("<7 _ _ 6 5 _ <5 3> <6 4>>*2")
  .scale("a:minor").trans(-24).detune(rand)
  .s("sawtooth:<1 2 3 4>")
  .meatenvelope(sine.range(1,2).slow(2)).shape(.3).delay(GLOBAL_DELAY)
  .distort(2).pan(sine.fast(2))
  .gain(slider(0.2862, .1, 2))

const BEARTOUCH = s("bd:<0>")
  .struct("<x*3 x x*2 x>")//.slow(2)
  .room("<.4 .6>").compressor("-20:20:10:.002:.02")
  .gain(slider(1.0804, .1, 2))
  .phaser(7).fm(sine.range(3,8).slow(8))
  .bank('yamahary30')

const CELERY = n("[0 <1 3>]*<2!3 4>")
  .s("hh").gain(perlin.range(.8, 1)).velocity(".8 .6")
  .bank('yamahary30')

const BEEFSLAP = s("bd:0")
  .struct("<x><x*2>").slow(2).early(.1)
  .duck("3:4:5:6").duckdepth(.8).duckattack(.16)
  .room("<.4 .6>").compressor("-20:20:10:.002:.02")
  .gain(slider(0.3147, .1, 2))
  .bank('yamahary30')

const HAMSLAP = s("bd:1")
  .struct("<x><x*2><x*4><~ x>").slow(2)
  .duck("3:4:5:6").duckdepth(.8).duckattack(.16)
  .room("<.4 .6>").compressor("-20:20:10:.002:.02")
  .gain(slider(1.3559, .1, 2))
  .bank('yamahary30')

const BEEZ = n(irand(10).sub(5).seg(16).rib(30, 1))
     .add(2, 4, 6, 9)
     .mode("above:a3")
     .scale("a:minor")
     .s("triangle")
     .gain(slider(1.0652, 0.1, 2))
     .fm(sine.range(.5, 2).slow(4))
     .slow(2).distort(sine.range(.1, 1.5).slow(4))
     .grillmeat(slider(0.6263, .1, 2))

const FRESHMINT = s("tha:1/2").fit()
     .gain(slider(0.4439, 0.1, 2))
     .compressor("-20:20:10:.002:.02")
     .distort(1)
     .bank('mridangam')

const FRESHOLIVES = s("ki:1*2 ki:<0 2 3>*2").fit().late(.5)
     .gain(slider(0.271, 0.1, 2))
     .distort(1)
     .pan(sine.fast(9))
     .fm(sine.range(.1, 1.5).slow(4)).pan(sine.fast(3))
     //.scrub(irand(8).seg(2).div(4)).clip(.5)
     .bank('mridangam')

const BITEDZ = 
  sound("bd:1 - bd*2 bd:3*4, - - - sd:5 bd:2 - [- hh hh:2] -, hh [- hh]")
  .slow(2)
  .bank('yamahary30')
  .gain(slider(0.3682, .1, 1))
  .fm(sine.range(.1, 1.5).slow(4)).pan(sine.fast(2))

const GINGER = n("<[9 4 7] 4 [8 5 2] 6>/2")
     .add("<7 6 3 5 1 <5 3> <6 4>>*2")
     .mode("above:a2")
     .scale("a:minor")
     .s("bytebeat:<4>").clip(.8)
     .dist("2:.2").att(.1)
     .meatenvelope(slider(1.4661, .1, 2))
     .compressor("-20:20:10:.002:.02")
     .scrub(irand(16).seg(4).div(16)).clip(.5)
     .room("<1 2>")
     .pan(sine.fast(7))
     .delay(GLOBAL_DELAY)
     .gain(slider(0.2296, .1, 1))
     .grillmeat(sine.range(.1, 1.5).slow(4))

const FRIES = note(`<
         [d4 d3 b f] a4 g4 c4@2 [a4 b4 e4]
         g4 b4 a4
     >,
     <
         A2@4
         D2@4
         A2@2 F2@2
     >`)
     .scale("a:minor")
     .s("gm_tinkle_bell:< 0 >").hpf("<1000>").clip(.6)
     .fm(sine.range(.1, 1.5).slow(4)).pan(sine.fast(2))
     .dist(1)
     .room(perlin.range(.4, 1)).delay(.8)
     .gain(slider(0.5572, .1, 1))
     .velocity(perlin.range(.4, .6))

const WEDGES = 
     note(`<
         [c4 d4 f4] [- b4 f4] a4 
         [d4@2 e4] - [d4 f4 b4]
     >,
     <
         [a d] [c b] [b c]
         [f a] [b a] [d c]
     >`)
     .mode("above:a2")
     .scale("a:minor")
     .s("gm_orchestral_harp:<3 4>")
     .grillmeat(sine.range(1, 2).slow(4))
     .dist(2)
     .room("<1 2>")
     .pan(sine.fast(8))
     .gain(slider(1, .1, 2))
     .velocity(perlin.range(.4, .6))

const CHEESE = note(`<
     [[e4 c3]*4]
     [[c4 a4]*4]
     [[eb2 c5]*2 [bb4 g3]*2]
     [[e4 c3]*4]
     [[e5 c2]*4]
     >`.scale('A minor'))
     .sound("bytebeat:< 1 2 4 5 >")
     .fm(sine.range(2, 8).slow(4)).pan(sine.fast(2))
     .grillmeat(slider(0.4173, .1, 2))
     .meatenvelope(slider(0.6282, .1, 2))
     .gain(slider(0.8029, .1, 1))

const MELT = note(`
    <
    [E2 A2]*2 [F2 B2]*4
    [F2 D2]*2 [C2 F2]*4
    D*4 E*4 D2*4
    >`)
    .sound("sawtooth:<0 1 2 3 4 5 6>")
    .meatenvelope(slider(1.2362, .1, 2))
    .fm(sine.range(2, 8).slow(4))
    .scrub(irand(16).seg(4).div(16)).clip(.5).pan(sine.fast(7))

const TANG = note(`
    <
    [A2 F2 A2] [A2 D2]*4
    [B2 D2]*2 [C2 A2]*4
    D*4 A*4 D2*4
    >,
    <
    A2@4
    D2@4
    A2@2 E2@2
    >`)
    .sound("gm_fx_crystal:<5 4 6>").detune(.5)
    .meatenvelope(slider(1.6523, .1, 2))
    .fm(sine.range(1, 8).slow(4)).distort(1)
    .scrub(irand(16).seg(4).div(16)).clip(.5).pan(sine.fast(7))
    .room("<0.5 0.8>")
    .gain(slider(0.3799, .1, 1))
    
/* drums */
const BEARGOGO = stack(
    HAMSLAP.mask("<1 1 0 0>/2"),
    BEEFSLAP.mask("<0 0 1 1>/2"),
  )

const WEASEL77 = stack(
    BITEDZ,
    BEARTOUCH,
    CELERY,
  )

const JUSTTHEPICKLES = stack(
    FRESHMINT, // POP
    FRESHOLIVES,
  )

stack(
  BEARGOGO.mask(      "<1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 >/16"), // beat start
  WEASEL77.mask(      "<0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 >/16"), // beat 1
  JUSTTHEPICKLES.mask("<0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 >/16"), // always
  
  /* fun sounds */
  FRUITSTICK.mask(    "<1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 >/16"), // always
  TRAILMIX.mask(      "<0 0 1 1 1 1 1 1 1 1 1 1 0 0 0 1 0 0 0 0 >/16"), // intersperse 1
  GINGER.mask(        "<0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 >/16"), // intersperse 2
  BEEZ.mask(          "<0 0 0 0 1 1 1 1 0 0 0 0 1 1 1 1 0 0 1 1 >/16"), // intersperse 1 & 2

  /* melody 1 */
  FRIES.mask(         "<0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 0 0 0 0 >/16"), // melody 1
  WEDGES.mask(        "<0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 0 0 0 0 >/16"), // melody 1

  /* melody 2 */
  CHEESE.mask(        "<0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 >/16"), // melody 2
  MELT.mask(          "<0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 >/16"), // melody 2
  TANG.mask(          "<0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 >/16"),
)
  .fontFamily("x3270")
  .theme("gruvboxDark ")
  .color("[ [aquamarine orange] [hotpink] red deeppink [cornsilk indigo] crimson]/27")
  .punchcard({fold:1,flipTime:1,vertical:1})
