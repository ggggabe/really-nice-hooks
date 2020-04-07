import { useState } from 'react'

export const useRefs = (...targets) => useState(ref => ({current: ref}))[0]
