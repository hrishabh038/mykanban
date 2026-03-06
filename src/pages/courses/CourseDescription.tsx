import React from 'react'
import { useLocation } from 'react-router-dom'

type Props = {}

const CourseDescription = (props: Props) => {
  const {pathname} = useLocation()
  return (
    <div>{pathname}</div>
  )
}

export default CourseDescription