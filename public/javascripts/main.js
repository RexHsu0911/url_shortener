const inputUrl = document.getElementById('inputUrl')
const shortenUrl = document.getElementById('shorten-url')
const showUrl = document.getElementById('show-url')
const urlCopy = document.getElementById('url-copy')
// const urlRecord = document.getElementById('url-record')

// function addShortUrlRecords(records) {
//   let html = ''
//   for (let i = 0; i < records.length; i++) {
//     html += `
//     <tr>
//         <th>${i}</th>
//         <td><a href="${record[i].longUrl}"></a>${record[i].longUrl}</td>
//         <td><a href="${host}${record[i].shortenUrl.value}">${host}${record[i].shortenUrl.value}</a></td>
//       </tr>
//     `
//   }
//   urlRecord.innerHTML = html
// }

// function clickShortenBtn() {
shortenUrl.addEventListener('click', () => {
  let longUrl = inputUrl.value
  if (!longUrl) {
    alert('Enter valid url')
    return
  }
  console.log(longUrl)
  // fetch 回傳帶有 Response 的物件資料(與 promise 相似)
  fetch(`https://api.shrtco.de/v2/shorten?url=${longUrl}`)
    .then((res) => res.json())
    .then((value) => {
      console.log(value)
      // shortenUrl.value = value.result.short_link
      // console.log(shortenUrl.value)
    })

    .catch((err) => {
      alert('Please check this url is correct')
    })
})
// }

// copy button
// function copyShortenUrl() {
//   urlCopy.addEventListener('click', () => {
//     // navigator.clipboard 取得的是當下視窗的系統剪貼簿
//     // clipboard.writeText 修改目前使用者儲存在剪貼簿的內容
//     navigator.clipboard.writeText(shortenUrl.value)
//     urlCopy.innerHTML = "Copied!"
//     setTimeout(() => {
//       urlCopy.innerHTML = "Copied!"
//     }, 1000)
//   })
// }

// clickShortenBtn();