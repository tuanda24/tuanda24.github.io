let reset = () => {
    document.getElementById("form").reset();
}
//Ramdom number
let generateRandomBigInt = (lowBigInt, highBigInt) => {
    if (lowBigInt >= highBigInt) {
        throw new Error('lowBigInt must be smaller than highBigInt');
    }

    const difference = highBigInt - lowBigInt;
    const differenceLength = difference.toString().length;
    let multiplier = '';
    while (multiplier.length < differenceLength) {
        multiplier += Math.random()
            .toString()
            .split('.')[1];
    }
    multiplier = multiplier.slice(0, differenceLength);
    const divisor = '1' + '0'.repeat(differenceLength);

    const randomDifference = (difference * BigInt(multiplier)) / BigInt(divisor);

    return lowBigInt + randomDifference;
}
// beta = alp^x mod p
let squareMulti = (bas, exp, mod) => {
    let t = 1n;
    while (exp > 0n) {
        if (exp % 2n != 0n)
            t = (t * bas) % mod;

        bas = (bas * bas) % mod;
        exp >>= 1n;
    }
    return t % mod;
}
// gdc
let gcd = (a, b) => {
    return (b == 0n) ? a : gcd(b, a % b);
}
let modInverse = (a, m) => {
    let mod = m;
    let y0 = 0n, y1 = 1n, y = -1n;
    while (a > 1n) {
        let r = m % a;
        if (r == 0n) break;
        let q = m / a;
        y = y0 - y1 * q;
        m = a;
        a = r;
        y0 = y1;
        y1 = y;
    }
    if (a > 1n) return -1n;
    return (y + mod) % mod;
}

let sqrt = (value) => {
    if (value < 0n) {
        throw 'square root of negative numbers is not supported'
    }

    if (value < 2n) {
        return value;
    }

    let newtonIteration = (n, x0) => {
        const x1 = ((n / x0) + x0) >> 1n;
        if (x0 === x1 || x0 === (x1 - 1n)) {
            return x0;
        }
        return newtonIteration(n, x1);
    }

    return newtonIteration(value, 1n);
}

let isPrime = (n) => {
    if (n < 2n) return false;
    for (let i = 2n; i <= sqrt(BigInt(n)); i++) {
        if (n % i === 0n) return false;
    }
    return true;
}

let onMyfileChange = (fileInput) => {
    let display = document.getElementById('hashFile');
    if (fileInput.files[0] == undefined) {
        return;
    }

    var reader = new FileReader();
    reader.onload = (ev) => {
        crypto.subtle.digest('SHA-256', ev.target.result).then(hashBuffer => {
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
            display.value = hashHex;
            console.log('Hash: ', hashHex);
        });
    };
    reader.onerror = function (err) {
        console.error("Failed to read file", err);
    }
    reader.readAsArrayBuffer(fileInput.files[0]);
}

let readFileA = () => {
    let selected = document.getElementById("inputFile").files[0];
    let reader = new FileReader();
    reader.addEventListener("loadend", () => {
        document.getElementById("file-preview").value = reader.result;
    });
    reader.readAsText(selected);
}

//Convert string to bigint
let hexToBigInt = (hex) => {
    return BigInt(parseInt(hex, 16));
}

let destroyClickedElement = (event) => {
    document.body.removeChild(event.target);
}

let onMyfileChange_value = (fileInput) => {
    let display = document.getElementById('hashFile-txt');
    if (fileInput.files[0] == undefined) {
        return;
    }

    var reader = new FileReader();
    reader.onload = (ev) => {
        crypto.subtle.digest('SHA-256', ev.target.result).then(hashBuffer => {
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
            display.value = hashHex;
            console.log('Hash: ', hashHex);
        });
    };
    reader.onerror = function (err) {
        console.error("Failed to read file", err);
    }
    reader.readAsArrayBuffer(fileInput.files[0]);
}

let readFileB = () => {
    let selected = document.getElementById("selected-file").files[0];
    let reader = new FileReader();
    reader.addEventListener("loadend", () => {
        document.getElementById("after-file-preview").value = reader.result;
    });
    reader.readAsText(selected);
}

let checkTaoKhoa = () => {
    let P = BigInt(document.getElementById('soNguyenTo').value);
    let alpha = BigInt(document.getElementById('soAlpha').value);
    let a = BigInt(document.getElementById('soA').value);
    // Kiểm tra P
    if (!P) {
        alert("ERR: Chưa nhập số P!");
        return false;
    } else {
        if (!isPrime(P)) {
            alert("ERR: Số vừa nhập không phải số nguyên tố!");
            return false;
        }
    }
    if (!alpha) {
        alert("ERR: Chưa nhập số alpha!");
        return false;
    } else {
        if (alpha < 1n || alpha > P - 1n) {
            alert("ERR: alpha phải thuộc Zp*!");
            return false;
        }
    }
    if (!a) {
        alert("ERR: Chưa nhập số x!");
        return false;
    } else {
        if (a < 2n || a > P - 2n) {
            alert("ERR: x phải thuộc {2,3,..,p-2}!");
            return false;
        }
    }
    return true;
}

let checkKy = () => {
    let P = BigInt(document.getElementById('soNguyenTo').value);
    let k = BigInt(document.getElementById('soK').value);
    let display = document.getElementById('hashFile').value;
    if (!k) {
        alert("ERR: Chưa nhập số k!");
        return false;
    } else {
        if (k < 1n || k > P - 1n) {
            alert('ERR: k phải thuộc Zp-1!');
            return false;
        }
    }
    if (gcd(k, P - 1n) != 1) {
        alert("ERR: GCD(k, P - 1) != 1");
        return false;
    }
    if (!display) {
        alert("ERR: Chưa chọn file!");
        return false;
    }
    return true;
}

let khoaNgauNhien = () => {
    try {
        let P = document.getElementById('soNguyenTo')
        let alpha = document.getElementById('soAlpha');
        let a = document.getElementById('soA');
        let display = document.getElementById('soBeta');
        let k = document.getElementById('soK');
        let randomP = randomAlpha = randomA = 0n;
        do {
            randomP = generateRandomBigInt(100n, 100000000n);
            randomA = generateRandomBigInt(2n, randomP - 2n);
            randomAlpha = generateRandomBigInt(1n, randomP);
        } while (!isPrime(randomP));

        let randomK = generateRandomBigInt(100n, randomP);
        while (gcd(randomK, randomP - 1n) != 1n) {
            randomK = generateRandomBigInt(100n, randomP);
        }

        P.value = randomP;
        alpha.value = randomAlpha;
        a.value = randomA;
        k.value = randomK;
        let beta = squareMulti(randomAlpha, randomA, randomP);
        display.value = beta;
        console.log('Kpub: ', P.value, alpha.value, display.value);
        console.log('Kpr: ', a.value);
        console.log(randomP, randomAlpha, randomK, randomA);
    } catch (error) {
        alert(error)
    }

}

let khoaTuyChon = () => {
    if (checkTaoKhoa()) {
        try {
            let P = BigInt(document.getElementById('soNguyenTo').value);
            let alpha = BigInt(document.getElementById('soAlpha').value);
            let a = BigInt(document.getElementById('soA').value);
            let display = document.getElementById('soBeta');

            let beta = squareMulti(alpha, a, P);
            display.value = beta;
            alert("Tạo khoá thành công!");
        } catch (error) {
            alert(error)
        }
    }

}

let kyVanBan = () => {
    if (checkKy()) {
        try {
            let P = BigInt(document.getElementById('soNguyenTo').value);
            let alpha = BigInt(document.getElementById('soAlpha').value);
            let delta;
            let k = BigInt(document.getElementById('soK').value);
            let a = BigInt(document.getElementById('soA').value);
            let msg = document.getElementById('hashFile').value;
            let soY = document.getElementById('soY');
            let gamal = squareMulti(alpha, k, P);
            let convertMsg = hexToBigInt(msg);
            let displayGamal = document.getElementById('displayGamal');
            let displayDelta = document.getElementById('displayDelta');
            soY.value = gamal;
            delta = ((convertMsg - a * gamal) * modInverse(k, P - 1n)) % (P - 1n);
            console.log('Covert: ', convertMsg);
            console.log("Gamal: ", gamal);
            console.log("Delta: ", delta);
            displayGamal.value = gamal;
            displayDelta.value = delta;
            alert("Ký văn bản thành công!");
        } catch (error) {
            alert(error);
        }
    }
}

let kiemTraVanBan = () => {
    try {
        let P = BigInt(document.getElementById('soNguyenTo').value);
        let alpha = BigInt(document.getElementById('soAlpha').value);
        let beta = BigInt(document.getElementById('soBeta').value);
        let k = BigInt(document.getElementById('soK').value);
        let a = BigInt(document.getElementById('soA').value);
        let displayGamal = BigInt(document.getElementById('displayGamal').value);
        let displayDelta = BigInt(document.getElementById('displayDelta').value);
        let msg = document.getElementById('hashFile-txt').value;
        let x = hexToBigInt(msg);
        let check1 = ((squareMulti(beta, displayGamal, P) * squareMulti(displayGamal, displayDelta, P)) % P);
        let check2 = squareMulti(alpha, x, P);
        console.log(check1, check2);
        if (check1 == check2) {
            alert("Văn bản không bị thay đổi!");
        } else {
            alert("Văn bản đã bị thay đổi!");
        }
    } catch (error) {
        alert(error)
    }
}