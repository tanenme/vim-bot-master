const fetch = require('node-fetch'); 
const random = require('random-name');
const fs = require("fs-extra");

const randstr = (length) => new Promise((resolve) => {
    var text = "";
    var possible =
        "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    resolve(text);
});

const funcGetCookies = () => new Promise((resolve, reject) => {
    fetch('https://www.vimmer.world/', {
        headers: {
          'authority': 'www.vimmer.world',
          'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
          'accept-language': 'en-US,en;q=0.9',
          'cookie': '_ga=GA1.1.1193912821.1681290305; _ga_0VHZYKTFZJ=GS1.1.1681290305.1.1.1681290316.0.0.0',
          'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
          'sec-fetch-dest': 'document',
          'sec-fetch-mode': 'navigate',
          'sec-fetch-site': 'none',
          'sec-fetch-user': '?1',
          'upgrade-insecure-requests': '1',
          'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36'
        }
      })
.then(res => {
    const cookie = res.headers.raw()['set-cookie']
    const realCookie = String(cookie).split(";")[0]
    resolve(realCookie)
})
.catch(err => reject(err));
});

const functionChecTiket = (headers, icCode) => new Promise((resolve, reject) => {
    fetch('https://www.vimmer.world/ajax/invitation_code.php', {
        method: 'POST',
        headers: headers,
        body: new URLSearchParams({
          'IC_CODE': `${icCode}`
        })
      })
    .then(res => res.text())
    .then(text => {
        resolve(text);
    })
    .catch(err => reject(err));
});

const functionSendEmailCode = (headers,email) => new Promise((resolve, reject) => {
    fetch('https://www.vimmer.world/ajax/SendCode.php', {
        method: 'POST',
        headers: headers,
        body: new URLSearchParams({
          'USER_EMAIL': `${email}`
        })
    })
    .then(res => res.text())
    .then(text => {
        resolve(text);
    })
    .catch(err => reject(err));
});

const functionVerifEmailCode = (headers, email, code) => new Promise((resolve, reject) => {
    fetch('https://www.vimmer.world/ajax/VerificationCode_imsi.php', {
        method: 'POST',
        headers: headers,
        body: new URLSearchParams({
          'VERIFICATION_EMAIL': `${email}`,
          'VERIFICATION_CODE': `${code}`
        })
    })
    .then(res => res.text())
    .then(text => {
        resolve(text);
    })
    .catch(err => reject(err));
});

const functionGetIdOTP = (name,domain) => new Promise((resolve, reject) => {
    fetch(`https://www.1secmail.com/api/v1/?action=getMessages&login=${name}&domain=${domain}`, {
        headers: {
            'authority': 'www.1secmail.com',
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
            'cookie': 'PHPSESSID=bc9b4e93213f4e5d3cdfd0bbc6543794',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'document',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-site': 'none',
            'sec-fetch-user': '?1',
            'upgrade-insecure-requests': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.67 Safari/537.36'
        }
    })
    .then(res => res.text())
    .then(text => {
        resolve(text);
    })
    .catch(err => reject(err));
});

const functionGetOTP = (name,domain,id) => new Promise((resolve, reject) => {
    fetch(`https://www.1secmail.com/api/v1/?action=readMessage&login=${name}&domain=${domain}&id=${id}`, {
        method: 'GET'
    })
    .then(res => res.json())
    .then(text => {
        const OTP = text.body
        resolve(OTP)
    })
    .catch(err => reject(err));
});

const functionSubmitRegist = (headers, email, name, icCode, cookie) => new Promise((resolve, reject) => {
    fetch('https://www.vimmer.world/ajax/join_action.php', {
        method: 'POST',
        headers: {
          'authority': 'www.vimmer.world',
          'accept': 'application/json, text/javascript, */*; q=0.01',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryILVV5OKESlEfb5Bc',
          'cookie': `_ga=GA1.1.1193912821.1681290305; ${cookie}; _fbp=fb.1.1681290475874.716297607; _ga_QV9WCWT6BL=GS1.1.1681290475.1.0.1681291459.57.0.0; _ga_0VHZYKTFZJ=GS1.1.1681290305.1.1.1681294167.0.0.0`,
          'origin': 'https://www.vimmer.world',
          'referer': 'https://www.vimmer.world/vim/login/join5.php',
          'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
          'x-requested-with': 'XMLHttpRequest'
        },
    body: `------WebKitFormBoundaryILVV5OKESlEfb5Bc\r\nContent-Disposition: form-data; name="IC_CODE"\r\n\r\n${icCode}\r\n------WebKitFormBoundaryILVV5OKESlEfb5Bc\r\nContent-Disposition: form-data; name="USER_EMAIL"\r\n\r\n${email}\r\n------WebKitFormBoundaryILVV5OKESlEfb5Bc\r\nContent-Disposition: form-data; name="UI_PW"\r\n\r\nhwWRzZuqEORtSVxUJg3swQ==\r\n------WebKitFormBoundaryILVV5OKESlEfb5Bc\r\nContent-Disposition: form-data; name="UI_SEX"\r\n\r\nF\r\n------WebKitFormBoundaryILVV5OKESlEfb5Bc\r\nContent-Disposition: form-data; name="AREA_NAME"\r\n\r\nAntarctica & ETC\r\n------WebKitFormBoundaryILVV5OKESlEfb5Bc\r\nContent-Disposition: form-data; name="COUNTRY_CODE"\r\n\r\nAQ\r\n------WebKitFormBoundaryILVV5OKESlEfb5Bc\r\nContent-Disposition: form-data; name="UI_PROFILEIMG"; filename=""\r\nContent-Type: application/octet-stream\r\n\r\n\r\n------WebKitFormBoundaryILVV5OKESlEfb5Bc\r\nContent-Disposition: form-data; name="UI_NAME"\r\n\r\n${name}\r\n------WebKitFormBoundaryILVV5OKESlEfb5Bc--\r\n`
      })
    .then(res => res.text())
    .then(text => {
        resolve(text);
    })
    .catch(err => reject(err));
});

const functionCreateWallet = (headers) => new Promise((resolve, reject) => {
    fetch('https://www.vimmer.world/ajax/CreateAddress.php', {
        method: 'POST',
        headers: headers
    })
    .then(res => res.text())
    .then(text => {
        resolve(text);
    })
    .catch(err => reject(err));
});

const functionWalletPin = (headers) => new Promise((resolve, reject) => {
    fetch('https://www.vimmer.world/ajax/wallet_pw_insert.php', {
        method: 'POST',
        headers: headers,
        body: new URLSearchParams({
          'ActionGb': 'Insert',
          'UI_WALLET_PW': '110102'
        })
      })
    .then(res => res.text())
    .then(text => {
        resolve(text);
    })
    .catch(err => reject(err));
});

const functionEnterEvent = (cookie) => new Promise((resolve, reject) => {
    fetch('https://www.vimmer.world/ajax/tiketaction.php', {
        method: 'POST',
        headers: {
          'authority': 'www.vimmer.world',
          'accept': 'application/json, text/javascript, */*; q=0.01',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'cookie': `${cookie}; _ga=GA1.1.1165820126.1681299307; _fbp=fb.1.1681299307108.1918177725; _ga_0VHZYKTFZJ=GS1.1.1681299329.1.1.1681299353.0.0.0; _ga_QV9WCWT6BL=GS1.1.1681299306.1.1.1681299631.17.0.0`,
          'origin': 'https://www.vimmer.world',
          'referer': 'https://www.vimmer.world/vim/vquest/t2_quest.php?mv_data=UUlJX1NFUT0zNzIxNQ==||',
          'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
          'x-requested-with': 'XMLHttpRequest'
        },
        body: new URLSearchParams({
          'VII_SEQ_ARRAY': '44',
          'BQT_SEQ': '71',
          'QII_SEQ': '37215'
        })
      })
    .then(res => res.text())
    .then(text => {
        resolve(text);
    })
    .catch(err => reject(err));
});

const functionGetTiket = (headers) => new Promise((resolve, reject) => {
    fetch('https://www.vimmer.world/vim/vquest/ticket.php', {
        headers: headers
      })
    .then(res => res.text())
    .then(text => {
        resolve(text);
    })
    .catch(err => reject(err));
});

(async() => { 

    let icCode = ''
    icCode = '619355'

    for(let i = 0; i<200; i++){

    console.log(icCode)

    const listdomain = ["dcctb.com"];
    const email = `${random.first()}${random.middle()}${await randstr(5)}@${listdomain[Math.floor(Math.random() * listdomain.length)]}`.toLowerCase();
    console.log("email : "+email)

    const name = email.split("@")[0]
    const domain = email.split("@")[1]

    const cookie = await funcGetCookies()
    console.log(cookie)

    const headers = {
            'authority': 'www.vimmer.world',
            'accept': 'application/json, text/javascript, */*; q=0.01',
            'accept-language': 'en-US,en;q=0.9',
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'cookie': `_ga=GA1.1.1193912821.1681290305; _ga_0VHZYKTFZJ=GS1.1.1681290305.1.1.1681290316.0.0.0; ${cookie}; _fbp=fb.1.1681290475874.716297607; _ga_QV9WCWT6BL=GS1.1.1681290475.1.0.1681291459.57.0.0`,
            'origin': 'https://www.vimmer.world',
            'referer': 'https://www.vimmer.world/',
            'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
            'x-requested-with': 'XMLHttpRequest'
    }

    const checkTiket = await functionChecTiket(headers, cookie, icCode)
    console.log(checkTiket)

    const sendEmailCode = await functionSendEmailCode(headers,email)
    console.log(sendEmailCode)

    do {
        getIdOTP = await functionGetIdOTP(name,domain)
        console.log(getIdOTP)
    }while(getIdOTP === '[]')
    const id = getIdOTP.split(":")[1].split(",")[0].replace(" ","")
    const message = await functionGetOTP(name,domain,id)
    const code = message.split("is:")[1].split("Please complete")[0]
    console.log(code)

    const verifEmail = await functionVerifEmailCode(headers, email, code) 
    console.log(verifEmail)

    const submitRegist = await functionSubmitRegist(headers, email, name, icCode, cookie)
    console.log(submitRegist)

    const createWallet = await functionCreateWallet(headers)
    console.log(createWallet)

    const walletPin = await functionWalletPin(headers)
    console.log(walletPin)

    const enterEvent = await functionEnterEvent(cookie)
    console.log(enterEvent)

    const getTiket = await functionGetTiket(headers)
    //console.log(getTiket)

    const tiket = getTiket.split(`class="ticket_num">`)[1].split(`</span>`)[0]
    console.log(tiket)

    icCode = tiket

    fs.appendFileSync(`vimAkun.txt`, `${email} | ${icCode} | ${cookie}\n`);

    }
})();