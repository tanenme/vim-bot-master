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

const functionCookieLogin = (cookie) => new Promise((resolve, reject) => {
    fetch('https://www.vimmer.world/vim/login/login.php', {
        headers: {
          'authority': 'www.vimmer.world',
          'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
          'accept-language': 'en-US,en;q=0.9',
          'cookie': `${cookie}; _ga=GA1.1.929922692.1681369338; _fbp=fb.1.1681369338430.287495096; _ga_QV9WCWT6BL=GS1.1.1681369338.1.0.1681369348.50.0.0`,
          'referer': 'https://www.vimmer.world/',
          'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
          'sec-fetch-dest': 'document',
          'sec-fetch-mode': 'navigate',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-user': '?1',
          'upgrade-insecure-requests': '1',
          'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36'
        }
      })
    .then(res => res.text())
    .then(text => {
        resolve(text);
    })
    .catch(err => reject(err));
});


const functionLogin = (email) => new Promise((resolve, reject) => {
    fetch('https://www.vimmer.world/ajax/login_action.php', {
        method: 'POST',
        headers: {
          'authority': 'www.vimmer.world',
          'accept': 'application/json, text/javascript, */*; q=0.01',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'cookie': 'PHPSESSID=h1rrvr8cof7rmjvf0gmsjjik5j; _ga=GA1.1.929922692.1681369338; _fbp=fb.1.1681369338430.287495096; _ga_QV9WCWT6BL=GS1.1.1681369338.1.0.1681369348.50.0.0; _ga_0VHZYKTFZJ=GS1.1.1681369349.1.0.1681369349.0.0.0',
          'origin': 'https://www.vimmer.world',
          'referer': 'https://www.vimmer.world/vim/login/login.php',
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
          'ACCOUNT_EMAIL': `${email}`,
          'ACCOUNT_PASS': 'Toor2002'
        })
      })
    .then(res => res.text())
    .then(text => {
        resolve(text);
    })
    .catch(err => reject(err));
});

const functionWalletPin = () => new Promise((resolve, reject) => {
    fetch('https://www.vimmer.world/ajax/wallet_pw_insert.php', {
        method: 'POST',
        headers: {
            'authority': 'www.vimmer.world',
            'accept': 'application/json, text/javascript, */*; q=0.01',
            'accept-language': 'en-US,en;q=0.9',
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'cookie': 'PHPSESSID=h1rrvr8cof7rmjvf0gmsjjik5j; _ga=GA1.1.929922692.1681369338; _fbp=fb.1.1681369338430.287495096; _ga_QV9WCWT6BL=GS1.1.1681369338.1.0.1681369348.50.0.0; _ga_0VHZYKTFZJ=GS1.1.1681369349.1.0.1681369349.0.0.0',
            'origin': 'https://www.vimmer.world',
            'referer': 'https://www.vimmer.world/vim/login/login.php',
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
          'ActionGb': 'Check',
          'UI_WALLET_PW': '110102'
        })
      })
    .then(res => res.text())
    .then(text => {
        resolve(text);
    })
    .catch(err => reject(err));
});

const functionCekWallet = () => new Promise((resolve, reject) => {
    fetch('https://www.vimmer.world/vim/wallet/', {
        headers: {
          'authority': 'www.vimmer.world',
          'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
          'accept-language': 'en-US,en;q=0.9',
          'cookie': 'PHPSESSID=h1rrvr8cof7rmjvf0gmsjjik5j; _ga=GA1.1.929922692.1681369338; _fbp=fb.1.1681369338430.287495096; _ga_0VHZYKTFZJ=GS1.1.1681372467.2.1.1681372519.0.0.0; _ga_QV9WCWT6BL=GS1.1.1681371497.2.1.1681372536.53.0.0',
          'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
          'sec-fetch-dest': 'document',
          'sec-fetch-mode': 'navigate',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-user': '?1',
          'upgrade-insecure-requests': '1',
          'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36'
        }
      })      
    .then(res => res.text())
    .then(text => {
        const addressWallet = text.split(`onclick="copyToClipboard('`)[1].split("'")[0]
        const viuBalance = text.split(`./detail_viu.php'">`)[1].split(`class="value">`)[1].split(`<`)[0]
        resolve(viuBalance+"|"+addressWallet);
    })
    .catch(err => reject(err));
});



(async() => { 

    const dataEmail = fs.readFileSync('vimAkun.txt', 'utf-8')
    const dataEmailSplit = dataEmail.split("\n")
    for (let index = 0; index < dataEmailSplit.length; index++) { 
        const email = dataEmailSplit[index].split("|")[0].trim()
        console.log(email)
    
    //     const headers = {
    //         'authority': 'www.vimmer.world',
    //         'accept': 'application/json, text/javascript, */*; q=0.01',
    //         'accept-language': 'en-US,en;q=0.9',
    //         'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    //         'cookie': `_ga=GA1.1.1193912821.1681290305; _ga_0VHZYKTFZJ=GS1.1.1681290305.1.1.1681290316.0.0.0; ${cookie}; _fbp=fb.1.1681290475874.716297607; _ga_QV9WCWT6BL=GS1.1.1681290475.1.0.1681291459.57.0.0`,
    //         'origin': 'https://www.vimmer.world',
    //         'referer': 'https://www.vimmer.world/',
    //         'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
    //         'sec-ch-ua-mobile': '?0',
    //         'sec-ch-ua-platform': '"Linux"',
    //         'sec-fetch-dest': 'empty',
    //         'sec-fetch-mode': 'cors',
    //         'sec-fetch-site': 'same-origin',
    //         'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
    //         'x-requested-with': 'XMLHttpRequest'
    // }


    // const cookie = await funcGetCookies()
    // console.log(cookie)

    // const cookieLogin = await functionCookieLogin(cookie)
    // //console.log(cookieLogin)

    const login = await functionLogin(email)
    console.log(login)

    const walletPin = await functionWalletPin()
    //console.log(walletPin)

    let i = 0
    do{
    const cekWallet1 = await functionCekWallet()
    console.log(cekWallet1)
    console.log(i)
    i++
    }while(i<5)

    const cekWallet = await functionCekWallet()
    console.log(cekWallet)

    }
})();