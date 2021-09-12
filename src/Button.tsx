import React, { FC, ReactNode, useEffect } from 'react';
import classNames from 'classnames'

import s from './Button.module.css'


interface ButtonProps extends React.HTMLAttributes<'div'> {

  size?: 'xs' | 'sm' | 'base'

  type?:  'primary' | 'secondary'
}


const Button = React.forwardRef<HTMLDivElement, ButtonProps>(function Button(props, ref) {

  const { size = 'base', type = 'primary' } = props


  const style = s[type]

  const cls = classNames(s.style, s[size], style)

  console.log(cls)

  return <div ref={ref} className={cls}>aaaa</div>
});


export default Button
