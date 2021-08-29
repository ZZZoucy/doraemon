const string = `
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
*::before,
*::after {
    box-sizing: border-box;
}
body {
    background: rgb(167, 216, 253);
}
.doraemon {
    position: relative;
    width: 500px;
    height: 500px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
}
.face {
    border: 3px solid rgb(1, 21, 101);
    position: absolute;
    width: 350px;
    height: 320px;
    border-radius: 50%;
    background: rgb(86, 198, 250);
}
.face::before {
    content: "";
    display: block;
    width: 300px;
    height: 270px;
    background: white;
    border-radius: 50%;
    position: absolute;
    top: 170px;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid black;
}
.face .eyes {
    position: absolute;
    top: 37px;
    left: 50%;
    transform: translate(-50%, -50%);
}
.face .eyes .eyes_left {
    border: 1px solid black;
    float: left;
    width: 60px;
    height: 70px;
    border-radius: 50%;
    top: 0px;
    left: 160px;
    right: 0;
    background: white;
}
.face .eyes .eyes_right {
    border: 1px solid black;
    float: right;
    width: 60px;
    height: 70px;
    border-radius: 50%;
    top: 0px;
    left: 250px;
    right: 0;
    background: white;
}
.inner {
    border: 1px solid black;
    width: 28px;
    height: 36px;
    background: black;
    border-radius: 45%;
    position: relative;
    top: 26px;
    left: 3px;
}
.inner::before {
    content: "";
    display: block;
    border: 1px solid white;
    width: 12px;
    height: 12px;
    background: white;
    border-radius: 50%;
    position: relative;
    top: 8px;
    left: 4px;
}
.nose {
    position: absolute;
    border: 1px solid black;
    background: red;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    top: 81px;
    left: 50%;
    transform: translate(-50%, -50%);
}
.nose::before {
    content: "";
    display: block;
    border: 1px solid white;
    width: 15px;
    height: 15px;
    background: white;
    border-radius: 50%;
    position: relative;
    top: 6px;
    left: 4px;
}
.face_inner .nodeline {
    position: relative;
    top: 173px;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid black;
    background: black;
    height: 145px;
    width: 0;
}

.face_inner .faceline_left .f1 {
    position: relative;
    top: -45px;
    left: 40px;
    transform: rotate(15deg);
    border: 1px solid black;
    background: black;
    width: 80px;
}
.face_inner .faceline_left .f2 {
    position: relative;
    top: -20px;
    left: 40px;
    transform: rotate(0deg);
    border: 1px solid black;
    background: black;
    width: 80px;
}
.face_inner .faceline_left .f3 {
    position: relative;
    top: 5px;
    left: 40px;
    transform: rotate(-15deg);
    border: 1px solid black;
    background: black;
    width: 80px;
}
.face_inner .faceline_right .f1 {
    position: relative;
    top: -60px;
    left: -20px;
    transform: rotate(15deg) translateX(250px);
    border: 1px solid black;
    background: black;
    width: 80px;
}
.face_inner .faceline_right .f2 {
    position: relative;
    top: -25px;
    left: -30px;
    transform: rotate(0deg) translateX(250px);
    border: 1px solid black;
    background: black;
    width: 80px;
}
.face_inner .faceline_right .f3 {
    position: relative;
    top: 10px;
    left: -20px;
    transform: rotate(-15deg) translateX(250px);
    border: 1px solid black;
    background: black;
    width: 80px;
}
.face_inner .mouth {
    position: absolute;
    border: 2px solid black;
    width: 310px;
    height: 400px;
    top: 47px;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border-color: transparent transparent black;
}
.necklace {
    border: 1px solid black;
    width: 310px;
    height: 28px;
    position: relative;
    left: 50%;
    top: 145px;
    transform: translate(-50%, -50%);
    border-radius: 20px/20px;
    background: red;
}
.necklace .ring {
    border: 1px solid black;
    width: 45px;
    height: 45px;
    position: relative;
    left: 50%;
    top: 15px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: rgb(250, 153, 8);
}
.necklace .ring .up {
    border: 1px solid black;
    width: 50px;
    height: 10px;
    position: relative;
    left: 50%;
    top: 15px;
    transform: translate(-50%, -50%);
    border-radius: 20px/20px;
    background: rgb(250, 153, 8);
}
.necklace .ring .down {
    border: 1px solid black;
    width: 15px;
    height: 15px;
    position: relative;
    left: 50%;
    top: 18px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: black;
}
.necklace .ring .down::before {
    content: "";
    display: block;
    border: 1px solid black;
    width: 3px;
    height: 12px;
    position: relative;
    left: 50%;
    top: 16px;
    transform: translate(-50%, -50%);
    background: black;
}
`;
export default string;
