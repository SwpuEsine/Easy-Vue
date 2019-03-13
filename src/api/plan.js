import request from '@/utils/request'
import qs from "qs";

export function queryPlanList() {
  return request({
    url: '/plan/list',
    method: 'get'
  })
}


export function addPlan(quartzJob) {
  return request({
    url: '/plan/add',
    method: 'post',
    data:quartzJob
  })
}

export function getPlanInfo(jobId) {
  return request({
    url: '/plan/info',
    method: 'get',
    params:{jobId}
  })
}


export function updatePlan(quartzJob) {
  return request({
    url: '/plan/edit',
    method: 'post',
    data:quartzJob
  })
}


export function resumePlan(quartzJob) {
  return request({
    url: '/plan/resume',
    method: 'post',
    data:quartzJob
  })
}


export function executePlan(quartzJob) {
  return request({
    url: '/plan/execute',
    method: 'post',
    data:quartzJob
  })
}

export function pausePlan(quartzJob) {
  return request({
    url: '/plan/pause',
    method: 'post',
    data:quartzJob
  })
}

export function deletePlan(quartzJob) {
  return request({
    url: '/plan/delete',
    method: 'post',
    data:quartzJob
  })
}
