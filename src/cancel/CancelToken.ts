import { CancelExcutor, CancelTokenSource, Canceler } from '../types/index'
import Cancel from './Cancel'

interface ResolvePromise {
  (reason?: Cancel): void
}

export default class CancelToken {
  promise: Promise<Cancel>
  reason?: Cancel

  constructor(excutor: CancelExcutor) {
    let resolvePromise: ResolvePromise

    this.promise = new Promise<Cancel>((resolve) => {
      resolvePromise = resolve as ResolvePromise
    })

    excutor((message) => {
      if (this.reason) return
      this.reason = new Cancel(message)
      resolvePromise(this.reason)
    })
  }

  throwIfRequested() {
    if (this.reason) {
      throw this.reason
    }
  }

  static source(): CancelTokenSource {
    let cancel!: Canceler
    const token = new CancelToken((c) => {
      cancel = c
    })
    return {
      cancel,
      token,
    }
  }
}
