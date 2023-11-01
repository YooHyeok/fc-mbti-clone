import { results, mbtis } from "./data.js"

const mbti = new URLSearchParams(location.search).get('mbti') /* location.search: url파라미터 쿼리스트링 정보 */
const result = results[mbtis[mbti]] /* mbtis object의 key로 접근 */

const titleEl = document.querySelector('.page-title')
const characterEl = document.querySelector('.character')
const boxEls = document.querySelectorAll('.box') /* 복수 엘리먼트 */
const jobEls = document.querySelectorAll('.job') /* 복수 엘리먼트 */
const lectureEl = document.querySelector('.lecture')
const lectureImgEl = document.querySelector('.lecture img')

titleEl.innerHTML = result.title
characterEl.src = result.character
boxEls.innerHTML = result.results[0]
boxEls.forEach(function (obj, index) {
  obj.innerHTML = result.results[index]
})
jobEls.forEach(function (obj, index) {
  obj.innerHTML = result.jobs[index]
})
/* lectureEl.href = result.lectureUrl
lectureImgEl.src = result.lectureImg */
