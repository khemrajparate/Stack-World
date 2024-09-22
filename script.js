function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./img2/male0001.png
     ./img2/male0002.png
     ./img2/male0003.png
     ./img2/male0004.png
     ./img2/male0005.png
     ./img2/male0006.png
     ./img2/male0007.png
     ./img2/male0008.png
     ./img2/male0009.png
     ./img2/male0010.png
     ./img2/male0011.png
     ./img2/male0012.png
     ./img2/male0013.png
     ./img2/male0014.png
     ./img2/male0015.png
     ./img2/male0016.png
     ./img2/male0017.png
     ./img2/male0018.png
     ./img2/male0019.png
     ./img2/male0020.png
     ./img2/male0021.png
     ./img2/male0022.png
     ./img2/male0023.png
     ./img2/male0024.png
     ./img2/male0025.png
     ./img2/male0026.png
     ./img2/male0027.png
     ./img2/male0028.png
     ./img2/male0029.png
     ./img2/male0030.png
     ./img2/male0031.png
     ./img2/male0032.png
     ./img2/male0033.png
     ./img2/male0034.png
     ./img2/male0035.png
     ./img2/male0036.png
     ./img2/male0037.png
     ./img2/male0038.png
     ./img2/male0039.png
     ./img2/male0040.png
     ./img2/male0041.png
     ./img2/male0042.png
     ./img2/male0043.png
     ./img2/male0044.png
     ./img2/male0045.png
     ./img2/male0046.png
     ./img2/male0047.png
     ./img2/male0048.png
     ./img2/male0049.png
     ./img2/male0050.png
     ./img2/male0051.png
     ./img2/male0052.png
     ./img2/male0053.png
     ./img2/male0054.png
     ./img2/male0055.png
     ./img2/male0056.png
     ./img2/male0057.png
     ./img2/male0058.png
     ./img2/male0059.png
     ./img2/male0060.png
     ./img2/male0061.png
     ./img2/male0062.png
     ./img2/male0063.png
     ./img2/male0064.png
     ./img2/male0065.png
     ./img2/male0066.png
     ./img2/male0067.png
     ./img2/male0068.png
     ./img2/male0069.png
     ./img2/male0070.png
     ./img2/male0071.png
     ./img2/male0072.png
     ./img2/male0073.png
     ./img2/male0074.png
     ./img2/male0075.png
     ./img2/male0076.png
     ./img2/male0077.png
     ./img2/male0078.png
     ./img2/male0079.png
     ./img2/male0080.png
     ./img2/male0081.png
     ./img2/male0082.png
     ./img2/male0083.png
     ./img2/male0084.png
     ./img2/male0085.png
     ./img2/male0086.png
     ./img2/male0087.png
     ./img2/male0088.png
     ./img2/male0089.png
     ./img2/male0090.png
     ./img2/male0091.png
     ./img2/male0092.png
     ./img2/male0093.png
     ./img2/male0094.png
     ./img2/male0095.png
     ./img2/male0096.png
     ./img2/male0097.png
     ./img2/male0098.png
     ./img2/male0099.png
     ./img2/male0100.png
     ./img2/male0101.png
     ./img2/male0102.png
     ./img2/male0103.png
     ./img2/male0104.png
     ./img2/male0105.png
     ./img2/male0106.png
     ./img2/male0107.png
     ./img2/male0108.png
     ./img2/male0109.png
     ./img2/male0110.png
     ./img2/male0111.png
     ./img2/male0112.png
     ./img2/male0113.png
     ./img2/male0114.png
     ./img2/male0115.png
     ./img2/male0116.png
     ./img2/male0117.png
     ./img2/male0118.png
     ./img2/male0119.png
     ./img2/male0120.png
     ./img2/male0121.png
     ./img2/male0122.png
     ./img2/male0123.png
     ./img2/male0124.png
     ./img2/male0125.png
     ./img2/male0126.png
     ./img2/male0127.png
     ./img2/male0128.png
     ./img2/male0129.png
     ./img2/male0130.png
     ./img2/male0131.png
     ./img2/male0132.png
     ./img2/male0133.png
     ./img2/male0134.png
     ./img2/male0135.png
     ./img2/male0136.png
     ./img2/male0137.png
     ./img2/male0138.png
     ./img2/male0139.png
     ./img2/male0140.png
     ./img2/male0141.png
     ./img2/male0142.png
     ./img2/male0143.png
     ./img2/male0144.png
     ./img2/male0145.png
     ./img2/male0146.png
     ./img2/male0147.png
     ./img2/male0148.png
     ./img2/male0149.png
     ./img2/male0150.png
     ./img2/male0151.png
     ./img2/male0152.png
     ./img2/male0153.png
     ./img2/male0154.png
     ./img2/male0155.png
     ./img2/male0156.png
     ./img2/male0157.png
     ./img2/male0158.png
     ./img2/male0159.png
     ./img2/male0160.png
     ./img2/male0161.png
     ./img2/male0162.png
     ./img2/male0163.png
     ./img2/male0164.png
     ./img2/male0165.png
     ./img2/male0166.png
     ./img2/male0167.png
     ./img2/male0168.png
     ./img2/male0169.png
     ./img2/male0170.png
     ./img2/male0171.png
     ./img2/male0172.png
     ./img2/male0173.png
     ./img2/male0174.png
     ./img2/male0175.png
     ./img2/male0176.png
     ./img2/male0177.png
     ./img2/male0178.png
     ./img2/male0179.png
     ./img2/male0180.png
     ./img2/male0181.png
     ./img2/male0182.png
     ./img2/male0183.png
     ./img2/male0184.png
     ./img2/male0185.png
     ./img2/male0186.png
     ./img2/male0187.png
     ./img2/male0188.png
     ./img2/male0189.png
     ./img2/male0190.png
     ./img2/male0191.png
     ./img2/male0192.png
     ./img2/male0193.png
     ./img2/male0194.png
     ./img2/male0195.png
     ./img2/male0196.png
     ./img2/male0197.png
     ./img2/male0198.png
     ./img2/male0199.png
     ./img2/male0200.png
     ./img2/male0201.png
     ./img2/male0202.png
     ./img2/male0203.png
     ./img2/male0204.png
     ./img2/male0205.png
     ./img2/male0206.png
     ./img2/male0207.png
     ./img2/male0208.png
     ./img2/male0209.png
     ./img2/male0210.png
     ./img2/male0211.png
     ./img2/male0212.png
     ./img2/male0213.png
     ./img2/male0214.png
     ./img2/male0215.png
     ./img2/male0216.png
     ./img2/male0217.png
     ./img2/male0218.png
     ./img2/male0219.png
     ./img2/male0220.png
     ./img2/male0221.png
     ./img2/male0222.png
     ./img2/male0223.png
     ./img2/male0224.png
     ./img2/male0225.png
     ./img2/male0226.png
     ./img2/male0227.png
     ./img2/male0228.png
     ./img2/male0229.png
     ./img2/male0230.png
     ./img2/male0231.png
     ./img2/male0232.png
     ./img2/male0233.png
     ./img2/male0234.png
     ./img2/male0235.png
     ./img2/male0236.png
     ./img2/male0237.png
     ./img2/male0238.png
     ./img2/male0239.png
     ./img2/male0240.png
     ./img2/male0241.png
     ./img2/male0242.png
     ./img2/male0243.png
     ./img2/male0244.png
     ./img2/male0245.png
     ./img2/male0246.png
     ./img2/male0247.png
     ./img2/male0248.png
     ./img2/male0249.png
     ./img2/male0250.png
     ./img2/male0251.png
     ./img2/male0252.png
     ./img2/male0253.png
     ./img2/male0254.png
     ./img2/male0255.png
     ./img2/male0256.png
     ./img2/male0257.png
     ./img2/male0258.png
     ./img2/male0259.png
     ./img2/male0260.png
     ./img2/male0261.png
     ./img2/male0262.png
     ./img2/male0263.png
     ./img2/male0264.png
     ./img2/male0265.png
     ./img2/male0266.png
     ./img2/male0267.png
     ./img2/male0268.png
     ./img2/male0269.png
     ./img2/male0270.png
     ./img2/male0271.png
     ./img2/male0272.png
     ./img2/male0273.png
     ./img2/male0274.png
     ./img2/male0275.png
     ./img2/male0276.png
     ./img2/male0277.png
     ./img2/male0278.png
     ./img2/male0279.png
     ./img2/male0280.png
     ./img2/male0281.png
     ./img2/male0282.png
     ./img2/male0283.png
     ./img2/male0284.png
     ./img2/male0285.png
     ./img2/male0286.png
     ./img2/male0287.png
     ./img2/male0288.png
     ./img2/male0289.png
     ./img2/male0290.png
     ./img2/male0291.png
     ./img2/male0292.png
     ./img2/male0293.png
     ./img2/male0294.png
     ./img2/male0295.png
     ./img2/male0296.png
     ./img2/male0297.png
     ./img2/male0298.png
     ./img2/male0299.png
     ./img2/male0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
