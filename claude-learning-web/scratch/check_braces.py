def check_braces(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    stack = []
    line_num = 1
    col_num = 1
    
    for i, char in enumerate(content):
        if char == '\n':
            line_num += 1
            col_num = 1
            continue
        
        if char == '{':
            stack.append(('{', line_num, col_num))
        elif char == '}':
            if not stack:
                print(f"Unexpected closing brace '}}' at line {line_num}, col {col_num}")
                return
            stack.pop()
            
        elif char == '(':
            stack.append(('(', line_num, col_num))
        elif char == ')':
            if not stack:
                print(f"Unexpected closing paren ')' at line {line_num}, col {col_num}")
                return
            matching, l, c = stack.pop()
            if matching != '(':
                print(f"Mismatched closing paren ')' at line {line_num}, col {col_num} matching '{matching}' at line {l}, col {c}")
                return
                
        elif char == '[':
            stack.append(('[', line_num, col_num))
        elif char == ']':
            if not stack:
                print(f"Unexpected closing bracket ']' at line {line_num}, col {col_num}")
                return
            matching, l, c = stack.pop()
            if matching != '[':
                print(f"Mismatched closing bracket ']' at line {line_num}, col {col_num} matching '{matching}' at line {l}, col {c}")
                return
        col_num += 1
        
    if stack:
        print(f"Unclosed open brackets/braces/parentheses: {len(stack)}")
        for item in stack[-5:]:
            print(f"  Unclosed '{item[0]}' at line {item[1]}, col {item[2]}")
    else:
        print("No mismatched brackets/braces/parentheses found!")

check_braces("c:/Users/Trungvt/Desktop/hinh thu/Claude/claude-learning-web/payment.js")
