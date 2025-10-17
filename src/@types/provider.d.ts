interface InitStateObject {
  state: boolean
}

type GlobalContextType = [
  InitStateObject,

  {
    dispatch: (data: Partial<InitStateObject>) => void
  }
]