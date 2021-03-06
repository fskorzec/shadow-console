/**
 * The MIT License (MIT)
 * Copyright (c) <2016> <Beewix Interactive>
 * Author <François Skorzec>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy,
 * modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software
 * is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 * BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
 * OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
export const EscOpeningChar         : string = "\x1B[" ;
export const EscPositionClosingChar : string = "H"     ;
export const EscColorClosingChar    : string = "m"     ;

export const endingForeColor = 39;
export const endingBackColor = 49;

export const Styles = {
  bold          : [1 , 22],
  dim           : [2 , 22],
  italic        : [3 , 23],
  underline     : [4 , 24],
  inverse       : [7 , 27],
  hidden        : [8 , 28],
  strikethrough : [9 , 29]
}

export const ForeColor = [
   31 ,
   30 ,
   32 ,
   33 ,
   34 ,
   35 ,
   36 ,
   37 ,
   90 ,
   91 ,
   92 ,
   93 ,
   94 ,
   95 ,
   96 ,
   97
];

export const BackColor = [
  41,
  40,
  42,
  43,
  44,
  45,
  46,
  47,
  100,
  101,
  102,
  103,
  104,
  105,
  106,
  107
];

export interface IColorTerminalDelegate<T> {
  (text?: string): T
}

export interface IColor16Terminal<T> {
  red            : IColorTerminalDelegate<T> ;
  black          : IColorTerminalDelegate<T> ;
  green          : IColorTerminalDelegate<T> ;
  yellow         : IColorTerminalDelegate<T> ;
  blue           : IColorTerminalDelegate<T> ;
  magenta        : IColorTerminalDelegate<T> ;
  cyan           : IColorTerminalDelegate<T> ;
  lightGray      : IColorTerminalDelegate<T> ;
  darkGray       : IColorTerminalDelegate<T> ;
  lightRed       : IColorTerminalDelegate<T> ;
  lightGreen     : IColorTerminalDelegate<T> ;
  lightYellow    : IColorTerminalDelegate<T> ;
  lightBlue      : IColorTerminalDelegate<T> ;
  lightMagenta   : IColorTerminalDelegate<T> ;
  lightCyan      : IColorTerminalDelegate<T> ;
  white          : IColorTerminalDelegate<T> ;
  bgRed          : IColorTerminalDelegate<T> ;
  bgBlack        : IColorTerminalDelegate<T> ;
  bgGreen        : IColorTerminalDelegate<T> ;
  bgYellow       : IColorTerminalDelegate<T> ;
  bgBlue         : IColorTerminalDelegate<T> ;
  bgMagenta      : IColorTerminalDelegate<T> ;
  bgCyan         : IColorTerminalDelegate<T> ;
  bgLightGray    : IColorTerminalDelegate<T> ;
  bgDarkGray     : IColorTerminalDelegate<T> ;
  bgLightRed     : IColorTerminalDelegate<T> ;
  bgLightGreen   : IColorTerminalDelegate<T> ;
  bgLightYellow  : IColorTerminalDelegate<T> ;
  bgLightBlue    : IColorTerminalDelegate<T> ;
  bgLightMagenta : IColorTerminalDelegate<T> ;
  bgLightCyan    : IColorTerminalDelegate<T> ;
  bgWhite        : IColorTerminalDelegate<T> 
}

export type Color16Type = {
  red          : string ,
  black        : string ,
  green        : string ,
  yellow       : string ,
  blue         : string ,
  magenta      : string ,
  cyan         : string ,
  lightGray    : string ,
  darkGray     : string ,
  lightRed     : string ,
  lightGreen   : string ,
  lightYellow  : string ,
  lightBlue    : string ,
  lightMagenta : string ,
  lightCyan    : string ,
  white        : string 
}

export type BgColor16Type = {
  bgRed          : string ,
  bgBlack        : string ,
  bgGreen        : string ,
  bgYellow       : string ,
  bgBlue         : string ,
  bgMagenta      : string ,
  bgCyan         : string ,
  bgLightGray    : string ,
  bgDarkGray     : string ,
  bgLightRed     : string ,
  bgLightGreen   : string ,
  bgLightYellow  : string ,
  bgLightBlue    : string ,
  bgLightMagenta : string ,
  bgLightCyan    : string ,
  bgWhite        : string 
}

export const Color16 = {
  red          : 0,
  black        : 1,
  green        : 2,
  yellow       : 3,
  blue         : 4,
  magenta      : 5,
  cyan         : 6,
  lightGray    : 7,
  darkGray     : 8,
  lightRed     : 9,
  lightGreen   : 10,
  lightYellow  : 11,
  lightBlue    : 12,
  lightMagenta : 13,
  lightCyan    : 14,
  white        : 15
}

