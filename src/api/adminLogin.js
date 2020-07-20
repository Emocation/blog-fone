import request from '@/utils/request'

export function adminLogin(data) {
  return request({
    url: '/person/adminLogin',
    method: 'POST',
    data
  })
}

export function sign(data) {
  return request({
    url: '/person/signIn',
    method: 'POST',
    data
  })
}