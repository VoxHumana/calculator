class ASTNode {
  constructor (token, left, right) {
    this.token = token
    this.left = left
    this.right = right
  }

  evaluate = () => {
    if (this.token.type === 'LITERAL') {
      return this.token.symbol
    } else if (this.token.type === 'FUNCTION') {
      switch (this.token.symbol) {
        case '!':
          function factorial(num) {
            if(num < 0) {
              return null
            }
            if (num === 0) {
              return 1
            } else {
              return factorial(num - 1)
            }
          }
          return factorial(this.right.evaluate())
        case '\u221A':
          return Math.sqrt(this.right.evaluate())
        default:
          return null
      }
    } else if (this.token.type === 'OPERATOR') {
      switch (this.token.symbol) {
        case '+':
          return this.left.evaluate() + this.right.evaluate()
        case '-':
          return this.left.evaluate() - this.right.evaluate()
        case '\u00D7':
          return this.left.evaluate() * this.right.evaluate()
        case '/':
          return this.left.evaluate() / this.right.evaluate()        
        case '^':
          return Math.pow(this.left.evaluate(), this.right.evaluate())
        default:
          return null
      }
    } else {
      return null
    }
  }
}

const tokenize = (buffer, createToken) => {
  let numBuffer = []
  let result = []
  let pushNumBufferToResult = () => {
    if (numBuffer.length) {
      result.push(createToken(parseFloat(numBuffer.join('')), 'LITERAL'))
      numBuffer = []
    }
  }
  for (let i = 0; i < buffer.length; i++) {
    let token = buffer[i]
    if (token.type === 'LITERAL' || token.type === 'DECIMAL') {
      if (token.symbol === '\u03A0') {
        numBuffer.push(Math.PI)
      } else {
        numBuffer.push(token.symbol)
      }
    } else if (token.type === 'OPERATOR' || token.type === 'LEFT_BRACKET' || token.type === 'RIGHT_BRACKET') {
      pushNumBufferToResult()
      result.push(token)
    }
  }
  if (numBuffer.length) {
    pushNumBufferToResult()
  }
  return result
}

const shuntingYard = (tokens) => {
  let retStack = []
  let opStack = []
  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i]
    if (token.type === 'LITERAL') {
      retStack.push(new ASTNode(token, null, null))
    } else if (token.type === 'FUNCTION') {
      opStack.push(token)
    } else if (token.type === 'OPERATOR') {
      while (opStack.length) {
        let top = opStack[opStack.length - 1]
        if ((token.associativity === 'LEFT' && token.precedence <= top.precedence) || (token.associativity === 'RIGHT' && token.precedence < top.precedence)) {
          let right = retStack.pop()
          let left = retStack.pop()
          retStack.push(new ASTNode(opStack.pop(), left, right))
        } else {
          break
        }
      }
      opStack.push(token)
    } else if (token.type === 'LEFT_BRACKET') {
      opStack.push(token)
    } else if (token.type === 'RIGHT_BRACKET') {
      while (opStack[opStack.length - 1].symbol !== '(') {
        let right = retStack.pop()
        let left = retStack.pop()
        retStack.push(new ASTNode(opStack.pop(), left, right))
      }
      opStack.pop()
    }
  }

  while (opStack.length) {
    let right = retStack.pop()
    let left = retStack.pop()
    retStack.push(new ASTNode(opStack.pop(), left, right))
  }
  return retStack.pop()
}

const createAST = (buffer, createToken) => {
  let tree = shuntingYard(tokenize(buffer, createToken))
  return tree.evaluate()
}

export default createAST
