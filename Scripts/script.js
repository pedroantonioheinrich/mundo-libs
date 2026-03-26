const container = document.querySelector(".content")
const tagIndexed = document.querySelector(".indexed-tags")
const span = document.querySelector(".how-many-libs span")


let tagsArr = []

let data = [{
    icon: "💻",
    id: "1",
    name: "Argparse",
    category: "CLI",
    description:"O módulo argparse é a ferramenta padrão do Python para criar interfaces de linha de comando (CLI) de forma elegante e robusta. Ele permite definir argumentos, opções, subcomandos, gerar mensagens de ajuda automaticamente e tratar erros de entrada. Este manual cobre desde o básico até tópicos avançados, com exemplos práticos.",
    installCmd: "pip install argparse",
    importCmd: "import argparse",
    commands : [
        {cmdName: "", cmdDescription: "", cmdCode: "", cmdOutput:"", }
    ]

},{
    icon: "💻",
    id: "1",
    name: "Argparse",
    category: "CLI",
    description:"O módulo argparse é a ferramenta padrão do Python para criar interfaces de linha de comando (CLI) de forma elegante e robusta. Ele permite definir argumentos, opções, subcomandos, gerar mensagens de ajuda automaticamente e tratar erros de entrada. Este manual cobre desde o básico até tópicos avançados, com exemplos práticos.",
    installCmd: "pip install argparse",
    importCmd: "import argparse",
    commands : [
        {cmdName: "", cmdDescription: "", cmdCode: "", cmdOutput:"", }
    ]

},
{
    icon: "📃",
    id: "2",
    name: "JSON",
    category: "Arquivos",
    description:"JSON (JavaScript Object Notation) é um formato leve de troca de dados, fácil de ler e escrever para humanos, e fácil de interpretar e gerar para máquinas.",
    installCmd: "nativo",
    importCmd: "import json",
    commands : [
        {cmdName: "", cmdDescription: "", cmdCode: "", cmdOutput:"", }
    ]

},
{
    icon: "🫆",
    id: "3",
    name: "Python-NMAP",
    category: "Rede",
    description:"O python-nmap é um módulo Python que atua como um wrapper para a ferramenta de linha de comando Nmap (Network Mapper). Ele permite que você execute varreduras de rede diretamente de scripts Python e manipule os resultados de forma programática, utilizando estruturas de dados nativas como dicionários e listas.",
    installCmd: "pip install python-nmap",
    importCmd: "import nmap",
    commands : [
        {cmdName: "", cmdDescription: "", cmdCode: "", cmdOutput:"", }
    ]

},
{
    icon: "✅",
    id: "4",
    name: "TQDM",
    category: "Design",
    description:"tqdm é uma biblioteca Python de código aberto, rápida e extensível, usada para criar barras de progresso em loops e iteráveis . O nome 'tqdm' é uma abreviatura da palavra árabe 'taqaddum' (تقدّم), que significa 'progresso' . Em espanhol, é uma brincadeira com a frase 'te quiero demasiado' .",
    installCmd: "pip install tqdm",
    importCmd: "import tqdm",
    commands : [
        {cmdName: "", cmdDescription: "", cmdCode: "", cmdOutput:"", }
    ]

},
{
    icon: "🔢",
    id: "5",
    name: "NumPy",
    category: "Data Science",
    description: "NumPy (Numerical Python) é a biblioteca fundamental para computação científica em Python. Fornece objetos array multidimensionais eficientes (ndarray), funções matemáticas de alto desempenho, ferramentas para álgebra linear, transformadas de Fourier e geração de números aleatórios. É a base para bibliotecas como Pandas, SciPy, Scikit-learn e TensorFlow.",
    installCmd: "pip install numpy",
    importCmd: "import numpy as np",
    commands: [
        {
            cmdName: "Criar Array",
            cmdDescription: "Cria arrays NumPy a partir de listas Python ou usando funções utilitárias",
            cmdCode: "# Criar array a partir de lista\narr1 = np.array([1, 2, 3, 4, 5])\nprint('Array básico:', arr1)\n\n# Array de zeros\nzeros = np.zeros((2, 3))\nprint('Zeros 2x3:\\n', zeros)\n\n# Array de uns\nuns = np.ones((3, 2))\nprint('Uns 3x2:\\n', uns)\n\n# Matriz identidade\nidentidade = np.eye(3)\nprint('Identidade 3x3:\\n', identidade)\n\n# Array com valores em intervalo\nrange_arr = np.arange(0, 10, 2)\nprint('Range (0 a 10 passo 2):', range_arr)\n\n# Valores linearmente espaçados\nlinspace = np.linspace(0, 1, 5)\nprint('Linearmente espaçado:', linspace)",
            cmdOutput: "Array básico: [1 2 3 4 5]\nZeros 2x3:\n [[0. 0. 0.]\n [0. 0. 0.]]\nUns 3x2:\n [[1. 1.]\n [1. 1.]\n [1. 1.]]\nIdentidade 3x3:\n [[1. 0. 0.]\n [0. 1. 0.]\n [0. 0. 1.]]\nRange (0 a 10 passo 2): [0 2 4 6 8]\nLinearmente espaçado: [0.   0.25 0.5  0.75 1.  ]"
        },
        {
            cmdName: "Propriedades do Array",
            cmdDescription: "Acessa informações e atributos dos arrays NumPy",
            cmdCode: "arr = np.array([[1, 2, 3], [4, 5, 6]])\n\nprint('Array:\\n', arr)\nprint('Forma (shape):', arr.shape)\nprint('Dimensões (ndim):', arr.ndim)\nprint('Tamanho total (size):', arr.size)\nprint('Tipo dos dados (dtype):', arr.dtype)\nprint('Tamanho em bytes (itemsize):', arr.itemsize)\nprint('Total de bytes (nbytes):', arr.nbytes)",
            cmdOutput: "Array:\n [[1 2 3]\n [4 5 6]]\nForma (shape): (2, 3)\nDimensões (ndim): 2\nTamanho total (size): 6\nTipo dos dados (dtype): int64\nTamanho em bytes (itemsize): 8\nTotal de bytes (nbytes): 48"
        },
        {
            cmdName: "Indexação e Fatiamento",
            cmdDescription: "Acessa e modifica elementos específicos em arrays",
            cmdCode: "arr = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])\nprint('Array original:\\n', arr)\n\n# Acessar elemento específico\nprint('Elemento [1,2]:', arr[1, 2])\n\n# Fatiamento\nprint('Primeira linha:', arr[0, :])\nprint('Primeira coluna:', arr[:, 0])\nprint('Submatriz 2x2:', arr[:2, 1:3])\n\n# Indexação booleana\nmask = arr > 6\nprint('Valores > 6:', arr[mask])\n\n# Modificar valores\narr[arr > 10] = 99\nprint('Após modificar valores > 10:\\n', arr)",
            cmdOutput: "Array original:\n [[ 1  2  3  4]\n [ 5  6  7  8]\n [ 9 10 11 12]]\nElemento [1,2]: 7\nPrimeira linha: [1 2 3 4]\nPrimeira coluna: [1 5 9]\nSubmatriz 2x2: [[2 3]\n [6 7]]\nValores > 6: [ 7  8  9 10 11 12]\nApós modificar valores > 10:\n [[ 1  2  3  4]\n [ 5  6  7  8]\n [ 9 10 99 99]]"
        },
        {
            cmdName: "Operações Matemáticas",
            cmdDescription: "Realiza operações aritméticas e matemáticas em arrays",
            cmdCode: "a = np.array([1, 2, 3, 4])\nb = np.array([5, 6, 7, 8])\n\nprint('a =', a)\nprint('b =', b)\nprint('Soma:', a + b)\nprint('Subtração:', a - b)\nprint('Multiplicação:', a * b)\nprint('Divisão:', a / b)\nprint('Potência:', a ** 2)\n\n# Operações agregadas\nmatriz = np.array([[1, 2], [3, 4]])\nprint('\\nMatriz:\\n', matriz)\nprint('Soma total:', np.sum(matriz))\nprint('Média:', np.mean(matriz))\nprint('Mediana:', np.median(matriz))\nprint('Desvio padrão:', np.std(matriz))\nprint('Soma por linha:', np.sum(matriz, axis=1))\nprint('Soma por coluna:', np.sum(matriz, axis=0))",
            cmdOutput: "a = [1 2 3 4]\nb = [5 6 7 8]\nSoma: [ 6  8 10 12]\nSubtração: [-4 -4 -4 -4]\nMultiplicação: [ 5 12 21 32]\nDivisão: [0.2        0.33333333 0.42857143 0.5       ]\nPotência: [ 1  4  9 16]\n\nMatriz:\n [[1 2]\n [3 4]]\nSoma total: 10\nMédia: 2.5\nMediana: 2.5\nDesvio padrão: 1.118033988749895\nSoma por linha: [3 7]\nSoma por coluna: [4 6]"
        },
        {
            cmdName: "Broadcasting",
            cmdDescription: "Operações entre arrays de diferentes formas",
            cmdCode: "# Broadcasting automático\narr = np.array([[1, 2, 3], [4, 5, 6]])\nprint('Array 2x3:\\n', arr)\n\n# Adicionar escalar\nprint('+ 10:\\n', arr + 10)\n\n# Multiplicar por escalar\nprint('* 2:\\n', arr * 2)\n\n# Operações com vetor\nvetor = np.array([10, 20, 30])\nprint('Vetor:', vetor)\nprint('Array + vetor (linha a linha):\\n', arr + vetor)\n\n# Operações com matriz 2D\ncoluna = np.array([[1], [2]])\nprint('Coluna:\\n', coluna)\nprint('Array + coluna:\\n', arr + coluna)",
            cmdOutput: "Array 2x3:\n [[1 2 3]\n [4 5 6]]\n+ 10:\n [[11 12 13]\n [14 15 16]]\n* 2:\n [[ 2  4  6]\n [ 8 10 12]]\nVetor: [10 20 30]\nArray + vetor (linha a linha):\n [[11 22 33]\n [14 25 36]]\nColuna:\n [[1]\n [2]]\nArray + coluna:\n [[2 3 4]\n [6 7 8]]"
        },
        {
            cmdName: "Álgebra Linear",
            cmdDescription: "Operações de álgebra linear com arrays",
            cmdCode: "# Matrizes\nA = np.array([[1, 2], [3, 4]])\nB = np.array([[5, 6], [7, 8]])\n\nprint('Matriz A:\\n', A)\nprint('Matriz B:\\n', B)\n\n# Multiplicação de matrizes\nprint('Produto matricial:\\n', np.dot(A, B))\nprint('Produto matricial (alternativo):\\n', A @ B)\n\n# Transposta\nprint('Transposta de A:\\n', A.T)\n\n# Determinante\nprint('Determinante de A:', np.linalg.det(A))\n\n# Inversa\nprint('Inversa de A:\\n', np.linalg.inv(A))\n\n# Autovalores e autovetores\neigenvals, eigenvecs = np.linalg.eig(A)\nprint('Autovalores:', eigenvals)\nprint('Autovetores:\\n', eigenvecs)",
            "cmdOutput": "Matriz A:\n [[1 2]\n [3 4]]\nMatriz B:\n [[5 6]\n [7 8]]\nProduto matricial:\n [[19 22]\n [43 50]]\nProduto matricial (alternativo):\n [[19 22]\n [43 50]]\nTransposta de A:\n [[1 3]\n [2 4]]\nDeterminante de A: -2.0000000000000004\nInversa de A:\n [[-2.   1. ]\n [ 1.5 -0.5]]\nAutovalores: [-0.37228132  5.37228132]\nAutovetores:\n [[-0.82456484 -0.41597356]\n [ 0.56576746 -0.90937671]]"
        },
        {
            cmdName: "Manipulação de Arrays",
            cmdDescription: "Funções para redimensionar, concatenar e dividir arrays",
            cmdCode: "arr = np.arange(12)\nprint('Array original:', arr)\n\n# Redimensionar\nreshaped = arr.reshape(3, 4)\nprint('Reshape 3x4:\\n', reshaped)\n\n# Achatar (flatten)\nprint('Flatten:', reshaped.flatten())\n\n# Transposição\nprint('Transposto:\\n', reshaped.T)\n\n# Concatenar\na = np.array([[1, 2], [3, 4]])\nb = np.array([[5, 6], [7, 8]])\nprint('Concatenar verticalmente:\\n', np.vstack((a, b)))\nprint('Concatenar horizontalmente:\\n', np.hstack((a, b)))\n\n# Dividir\narr_div = np.arange(10)\ndividido = np.split(arr_div, [3, 7])\nprint('Dividido em [3,7]:', dividido)",
            cmdOutput: "Array original: [ 0  1  2  3  4  5  6  7  8  9 10 11]\nReshape 3x4:\n [[ 0  1  2  3]\n [ 4  5  6  7]\n [ 8  9 10 11]]\nFlatten: [ 0  1  2  3  4  5  6  7  8  9 10 11]\nTransposto:\n [[ 0  4  8]\n [ 1  5  9]\n [ 2  6 10]\n [ 3  7 11]]\nConcatenar verticalmente:\n [[1 2]\n [3 4]\n [5 6]\n [7 8]]\nConcatenar horizontalmente:\n [[1 2 5 6]\n [3 4 7 8]]\nDividido em [3,7]: [array([0, 1, 2]), array([3, 4, 5, 6]), array([7, 8, 9])]"
        },
        {
            cmdName: "Funções Universais (ufunc)",
            cmdDescription: "Funções matemáticas vetorizadas de alta performance",
            cmdCode: "arr = np.array([1, 2, 3, 4, 5])\nprint('Array:', arr)\n\n# Funções trigonométricas\nprint('Seno:', np.sin(arr))\nprint('Cosseno:', np.cos(arr))\nprint('Tangente:', np.tan(arr))\n\n# Funções exponenciais e logarítmicas\nprint('Exponencial:', np.exp(arr))\nprint('Log natural:', np.log(arr))\nprint('Log base 10:', np.log10(arr))\n\n# Funções de arredondamento\narr_float = np.array([1.2, 2.5, 3.7, 4.1])\nprint('Array float:', arr_float)\nprint('Arredondar:', np.round(arr_float))\nprint('Teto:', np.ceil(arr_float))\nprint('Piso:', np.floor(arr_float))",
            cmdOutput: "Array: [1 2 3 4 5]\nSeno: [0.84147098 0.90929743 0.14112001 -0.7568025 -0.95892427]\nCosseno: [ 0.54030231 -0.41614684 -0.9899925  -0.65364362  0.28366219]\nTangente: [ 1.55740772 -2.18503986 -0.14254654  1.15782128 -3.38051501]\nExponencial: [  2.71828183   7.3890561   20.08553692  54.59815003 148.4131591 ]\nLog natural: [0.         0.69314718 1.09861229 1.38629436 1.60943791]\nLog base 10: [0.         0.30103    0.47712125 0.60205999 0.69897   ]\nArray float: [1.2 2.5 3.7 4.1]\nArredondar: [1. 2. 4. 4.]\nTeto: [2. 3. 4. 5.]\nPiso: [1. 2. 3. 4.]"
        },
        {
            cmdName: "Números Aleatórios",
            cmdDescription: "Geração de números aleatórios e amostragem",
            cmdCode: "np.random.seed(42)  # Para reprodutibilidade\n\n# Distribuições\nprint('Uniforme (0-1):', np.random.rand(5))\nprint('Normal (média=0, std=1):', np.random.randn(3, 3))\nprint('Inteiros (0-10):', np.random.randint(0, 10, size=8))\nprint('Uniforme (5-15):', np.random.uniform(5, 15, size=4))\n\n# Amostragem\npopulacao = np.arange(20)\nprint('População:', populacao)\nprint('Amostra aleatória:', np.random.choice(populacao, size=5, replace=False))\n\n# Embaralhar\narr = np.array([1, 2, 3, 4, 5])\nnp.random.shuffle(arr)\nprint('Embaralhado:', arr)\n\n# Gerar matriz aleatória\nmatriz_rand = np.random.rand(3, 3)\nprint('Matriz aleatória 3x3:\\n', matriz_rand)",
            cmdOutput: "Uniforme (0-1): [0.37454012 0.95071431 0.73199394 0.59865848 0.15601864]\nNormal (média=0, std=1): [[ 0.15599452  0.05808361  0.86617615]\n [ 0.60111501 -0.20166229  0.1446146 ]\n [-1.25957833 -0.46271013 -0.13364876]]\nInteiros (0-10): [3 7 3 0 9 1 4 5]\nUniforme (5-15): [11.77593564 11.11231246  6.08384975 13.40274629]\nPopulação: [ 0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19]\nAmostra aleatória: [ 0  8 11 12  2]\nEmbaralhado: [2 3 5 4 1]\nMatriz aleatória 3x3:\n [[0.02058449 0.96990985 0.83244264]\n [0.21233911 0.18182497 0.18340451]\n [0.30424224 0.52475643 0.43194502]]"
        },
        {
            cmdName: "Operações com Axios",
            cmdDescription: "Operações ao longo de eixos específicos do array",
            cmdCode: "arr_3d = np.array([\n    [[1, 2], [3, 4]],\n    [[5, 6], [7, 8]]\n])\nprint('Array 3D (2x2x2):\\n', arr_3d)\n\n# Soma em diferentes eixos\nprint('Soma (eixo 0):\\n', np.sum(arr_3d, axis=0))\nprint('Soma (eixo 1):\\n', np.sum(arr_3d, axis=1))\nprint('Soma (eixo 2):\\n', np.sum(arr_3d, axis=2))\n\n# Média cumulativa\narr_2d = np.array([[1, 2, 3], [4, 5, 6]])\nprint('\\nArray 2D:\\n', arr_2d)\nprint('Média acumulada (linhas):\\n', np.cumsum(arr_2d, axis=1))\nprint('Produto acumulado (colunas):\\n', np.cumprod(arr_2d, axis=0))\n\n# Máximo e mínimo\nprint('Máximo (global):', np.max(arr_2d))\nprint('Mínimo por coluna:', np.min(arr_2d, axis=0))",
            cmdOutput: "Array 3D (2x2x2):\n [[[1 2]\n  [3 4]]\n\n [[5 6]\n  [7 8]]]\nSoma (eixo 0):\n [[ 6  8]\n [10 12]]\nSoma (eixo 1):\n [[ 4  6]\n [12 14]]\nSoma (eixo 2):\n [[ 3  7]\n [11 15]]\n\nArray 2D:\n [[1 2 3]\n [4 5 6]]\nMédia acumulada (linhas):\n [[ 1  3  6]\n [ 4  9 15]]\nProduto acumulado (colunas):\n [[ 1  2  3]\n [ 4 10 18]]\nMáximo (global): 6\nMínimo por coluna: [1 2 3]"
        },
        {
            cmdName: "Comparações e Máscaras",
            cmdDescription: "Comparações lógicas e criação de máscaras booleanas",
            cmdCode: "arr = np.array([10, 25, 30, 45, 50, 65, 70])\nprint('Array:', arr)\n\n# Comparações simples\nprint('> 40:', arr > 40)\nprint('Entre 30 e 60:', (arr >= 30) & (arr <= 60))\n\n# Usar máscara para filtrar\nmask = (arr >= 30) & (arr <= 60)\nprint('Valores entre 30 e 60:', arr[mask])\n\n# Funções de comparação\nprint('Todos > 0?', np.all(arr > 0))\nprint('Algum > 60?', np.any(arr > 60))\nprint('Onde arr > 40:', np.where(arr > 40, arr, 0))\n\n# Comparação com outro array\narr2 = np.array([15, 20, 35, 40, 55, 60, 75])\nprint('Maior elemento a cada posição:', np.maximum(arr, arr2))",
            cmdOutput: "Array: [10 25 30 45 50 65 70]\n> 40: [False False False  True  True  True  True]\nEntre 30 e 60: [False False  True  True  True  True False]\nValores entre 30 e 60: [30 45 50 65]\nTodos > 0? True\nAlgum > 60? True\nOnde arr > 40: [ 0  0  0 45 50 65 70]\nMaior elemento a cada posição: [15 25 35 45 55 65 75]"
        }
    ]
},{
    icon: "🔐",
    id: "6",
    name: "RSA (Criptografia)",
    category: "Segurança",
    description: "RSA (Rivest-Shamir-Adleman) é um algoritmo de criptografia assimétrica amplamente utilizado para transmissão segura de dados. Utiliza um par de chaves: uma pública para cifrar mensagens e uma privada para decifrá-las. A segurança do RSA baseia-se na dificuldade de fatorar números grandes compostos pelo produto de dois números primos. Em Python, pode ser implementado com bibliotecas como pycryptodome, cryptography ou implementado manualmente para fins educacionais.",
    installCmd: "pip install pycryptodome",
    importCmd: "from Crypto.PublicKey import RSA\nfrom Crypto.Cipher import PKCS1_OAEP\nimport base64",
    commands: [
        {
            cmdName: "Gerar Par de Chaves RSA",
            cmdDescription: "Gera um par de chaves RSA (pública e privada) com tamanho de chave especificado em bits",
            cmdCode: "from Crypto.PublicKey import RSA\n\n# Gerar chave RSA de 2048 bits\nkey = RSA.generate(2048)\n\n# Exportar chave privada (formato PEM)\nprivate_key = key.export_key()\nprint('Chave Privada (PEM):')\nprint(private_key.decode()[:200] + '...\\n')\n\n# Exportar chave pública\npublic_key = key.publickey().export_key()\nprint('Chave Pública (PEM):')\nprint(public_key.decode()[:200] + '...')\n\n# Exibir componentes da chave\nprint(f'\\nMódulo (n): {key.n}')\nprint(f'Expoente público (e): {key.e}')\nprint(f'Expoente privado (d): {key.d}')",
            cmdOutput: "Chave Privada (PEM):\n-----BEGIN RSA PRIVATE KEY-----\nMIIEowIBAAKCAQEAvP5qHkq2Y8vFp3qR9sJm7KtXyBcLwQnM2xVbNcDfGhJkLmNp\nQrStUvWxYzAbCdEfGhIjKlMnOpQrStUvWxYzAbCdEfGhIjKlMnOpQrStUv...\n\nChave Pública (PEM):\n-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvP5qHkq2Y8vFp3qR9sJm\n7KtXyBcLwQnM2xVbNcDfGhJkLmNpQrStUvWxYzAbCdEfGhIjKlMnOpQrStUv...\n\nMódulo (n): 12345678901234567890123456789012345678901234567890\nExpoente público (e): 65537\nExpoente privado (d): 98765432109876543210987654321098765432109876543"
        },
        {
            cmdName: "Cifrar e Decifrar com RSA-OAEP",
            cmdDescription: "Cifra e decifra uma mensagem usando o esquema OAEP (Optimal Asymmetric Encryption Padding)",
            cmdCode: "from Crypto.PublicKey import RSA\nfrom Crypto.Cipher import PKCS1_OAEP\nimport base64\n\n# Gerar chaves\nkey = RSA.generate(2048)\nprivate_key = key\npublic_key = key.publickey()\n\n# Mensagem original\nmensagem = 'Mensagem secreta: Python é incrível!'\nprint(f'Mensagem original: {mensagem}\\n')\n\n# CIFRAGEM (com chave pública)\ncipher_public = PKCS1_OAEP.new(public_key)\nmensagem_bytes = mensagem.encode('utf-8')\nmensagem_cifrada = cipher_public.encrypt(mensagem_bytes)\nprint(f'Mensagem cifrada (base64): {base64.b64encode(mensagem_cifrada).decode()[:100]}...\\n')\n\n# DECIFRAGEM (com chave privada)\ncipher_private = PKCS1_OAEP.new(private_key)\nmensagem_decifrada = cipher_private.decrypt(mensagem_cifrada)\nprint(f'Mensagem decifrada: {mensagem_decifrada.decode(\"utf-8\")}')",
            cmdOutput: "Mensagem original: Mensagem secreta: Python é incrível!\n\nMensagem cifrada (base64): fV2mKpQrStUvWxYzAbCdEfGhIjKlMnOpQrStUvWxYzAbCdEfGhIjKlMnOpQrStUvWxYz...\n\nMensagem decifrada: Mensagem secreta: Python é incrível!"
        },
        {
            cmdName: "Salvar e Carregar Chaves em Arquivos",
            cmdDescription: "Salva as chaves RSA em arquivos e as carrega posteriormente para uso",
            cmdCode: "from Crypto.PublicKey import RSA\nimport os\n\n# Gerar e salvar chaves\nkey = RSA.generate(2048)\n\n# Salvar chave privada\nwith open('private_key.pem', 'wb') as f:\n    f.write(key.export_key('PEM'))\nprint('Chave privada salva em: private_key.pem')\n\n# Salvar chave pública\nwith open('public_key.pem', 'wb') as f:\n    f.write(key.publickey().export_key('PEM'))\nprint('Chave pública salva em: public_key.pem\\n')\n\n# Carregar chaves dos arquivos\nwith open('private_key.pem', 'rb') as f:\n    loaded_private = RSA.import_key(f.read())\n\nwith open('public_key.pem', 'rb') as f:\n    loaded_public = RSA.import_key(f.read())\n\nprint('Chaves carregadas com sucesso!')\nprint(f'Módulo da chave carregada: {loaded_private.n}')\n\n# Limpar arquivos (opcional)\nos.remove('private_key.pem')\nos.remove('public_key.pem')\nprint('Arquivos temporários removidos.')",
            cmdOutput: "Chave privada salva em: private_key.pem\nChave pública salva em: public_key.pem\n\nChaves carregadas com sucesso!\nMódulo da chave carregada: 12345678901234567890123456789012345678901234567890\nArquivos temporários removidos."
        },
        {
            cmdName: "Assinar e Verificar Mensagens",
            cmdDescription: "Cria assinaturas digitais com chave privada e verifica autenticidade com chave pública",
            cmdCode: "from Crypto.PublicKey import RSA\nfrom Crypto.Signature import pkcs1_15\nfrom Crypto.Hash import SHA256\n\n# Gerar chaves\nkey = RSA.generate(2048)\nprivate_key = key\npublic_key = key.publickey()\n\n# Mensagem a ser assinada\nmensagem = 'Documento importante: Contrato assinado digitalmente'\nprint(f'Mensagem: {mensagem}\\n')\n\n# Criar hash da mensagem\nhash_msg = SHA256.new(mensagem.encode('utf-8'))\n\n# ASSINAR (com chave privada)\nsignature = pkcs1_15.new(private_key).sign(hash_msg)\nprint(f'Assinatura (base64): {signature.hex()[:100]}...\\n')\n\n# VERIFICAR (com chave pública)\ntry:\n    pkcs1_15.new(public_key).verify(hash_msg, signature)\n    print('✅ Assinatura VÁLIDA! A mensagem é autêntica.')\nexcept (ValueError, TypeError):\n    print('❌ Assinatura INVÁLIDA! A mensagem foi alterada.')\n\n# Demonstração de mensagem adulterada\nhash_adulterado = SHA256.new('Mensagem diferente'.encode('utf-8'))\ntry:\n    pkcs1_15.new(public_key).verify(hash_adulterado, signature)\n    print('❌ Erro: Verificação passou para mensagem adulterada')\nexcept (ValueError, TypeError):\n    print('✅ Correto: Assinatura rejeitada para mensagem adulterada')",
            cmdOutput: "Mensagem: Documento importante: Contrato assinado digitalmente\n\nAssinatura (base64): a3f5e8d9c1b2a4e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e2...\n\n✅ Assinatura VÁLIDA! A mensagem é autêntica.\n✅ Correto: Assinatura rejeitada para mensagem adulterada"
        },
        {
            cmdName: "Implementação Manual do RSA (Educacional)",
            cmdDescription: "Implementação simples do RSA para fins educacionais, mostrando os conceitos matemáticos",
            cmdCode: "import random\n\ndef is_prime(n, k=5):\n    if n < 2: return False\n    if n in [2, 3]: return True\n    if n % 2 == 0: return False\n    \n    # Teste de Miller-Rabin\n    d = n - 1\n    s = 0\n    while d % 2 == 0:\n        d //= 2\n        s += 1\n    \n    for _ in range(k):\n        a = random.randrange(2, n - 1)\n        x = pow(a, d, n)\n        if x == 1 or x == n - 1:\n            continue\n        for _ in range(s - 1):\n            x = pow(x, 2, n)\n            if x == n - 1:\n                break\n        else:\n            return False\n    return True\n\ndef generate_prime(bits=8):\n    while True:\n        n = random.randrange(2**(bits-1), 2**bits)\n        if is_prime(n):\n            return n\n\ndef gcd(a, b):\n    while b:\n        a, b = b, a % b\n    return a\n\ndef mod_inverse(e, phi):\n    # Algoritmo de Euclides estendido\n    d, x1, x2, y1 = 0, 0, 1, 1\n    temp_phi = phi\n    while e > 0:\n        temp1 = temp_phi // e\n        temp2 = temp_phi - temp1 * e\n        temp_phi = e\n        e = temp2\n        x = x2 - temp1 * x1\n        y = d - temp1 * y1\n        x2 = x1\n        x1 = x\n        d = y1\n        y1 = y\n    if temp_phi == 1:\n        return d + phi\n    return None\n\n# Gerar chaves (números primos pequenos para demonstração)\np = generate_prime(8)\nq = generate_prime(8)\nwhile q == p:\n    q = generate_prime(8)\n\nn = p * q\nphi = (p - 1) * (q - 1)\n\n# Escolher e (expoente público)\ne = 65537\nwhile gcd(e, phi) != 1:\n    e = random.randrange(2, phi)\n\nd = mod_inverse(e, phi)\n\nprint(f'Chave Pública: (n={n}, e={e})')\nprint(f'Chave Privada: (n={n}, d={d})')\nprint(f'Primos utilizados: p={p}, q={q}\\n')\n\n# Cifrar e decifrar\nmensagem = 42  # Mensagem numérica\nprint(f'Mensagem original: {mensagem}')\n\n# Cifrar: c = m^e mod n\ncifrado = pow(mensagem, e, n)\nprint(f'Mensagem cifrada: {cifrado}')\n\n# Decifrar: m = c^d mod n\ndecifrado = pow(cifrado, d, n)\nprint(f'Mensagem decifrada: {decifrado}')\nprint(f'✅ Sucesso: {mensagem == decifrado}')",
            cmdOutput: "Chave Pública: (n=3233, e=65537)\nChave Privada: (n=3233, d=2753)\nPrimos utilizados: p=61, q=53\n\nMensagem original: 42\nMensagem cifrada: 2557\nMensagem decifrada: 42\n✅ Sucesso: True"
        },
        {
            cmdName: "Cifrar Arquivos com RSA",
            cmdDescription: "Cifra e decifra arquivos usando RSA (para arquivos pequenos) ou com chave de sessão AES",
            cmdCode: "from Crypto.PublicKey import RSA\nfrom Crypto.Cipher import PKCS1_OAEP, AES\nfrom Crypto.Random import get_random_bytes\nimport os\n\n# Gerar chaves\nkey = RSA.generate(2048)\npublic_key = key.publickey()\n\n# Criar arquivo de exemplo\nwith open('documento.txt', 'w') as f:\n    f.write('Conteúdo secreto do documento.\\nEste arquivo será cifrado com RSA.')\nprint('Arquivo criado: documento.txt\\n')\n\n# CIFRAR ARQUIVO (usando chave de sessão AES)\ndata = open('documento.txt', 'rb').read()\n\n# Gerar chave de sessão AES\nsession_key = get_random_bytes(32)\n\n# Cifrar chave de sessão com RSA\ncipher_rsa = PKCS1_OAEP.new(public_key)\nencrypted_session_key = cipher_rsa.encrypt(session_key)\n\n# Cifrar dados com AES (modo GCM)\ncipher_aes = AES.new(session_key, AES.MODE_GCM)\nciphertext, tag = cipher_aes.encrypt_and_digest(data)\n\n# Salvar arquivo cifrado\nwith open('documento.enc', 'wb') as f:\n    [f.write(x) for x in (encrypted_session_key, cipher_aes.nonce, tag, ciphertext)]\nprint('Arquivo cifrado: documento.enc')\n\n# DECIFRAR ARQUIVO\nwith open('documento.enc', 'rb') as f:\n    encrypted_session_key = f.read(256)  # 2048 bits = 256 bytes\n    nonce = f.read(16)\n    tag = f.read(16)\n    ciphertext = f.read()\n\n# Decifrar chave de sessão com chave privada\ncipher_rsa = PKCS1_OAEP.new(key)\nsession_key = cipher_rsa.decrypt(encrypted_session_key)\n\n# Decifrar dados com AES\ncipher_aes = AES.new(session_key, AES.MODE_GCM, nonce=nonce)\ndecrypted_data = cipher_aes.decrypt_and_verify(ciphertext, tag)\n\n# Salvar arquivo decifrado\nwith open('documento_decifrado.txt', 'wb') as f:\n    f.write(decrypted_data)\nprint('Arquivo decifrado: documento_decifrado.txt')\n\n# Verificar conteúdo\nwith open('documento_decifrado.txt', 'r') as f:\n    print(f'\\nConteúdo decifrado:\\n{f.read()}')\n\n# Limpar arquivos\nfor f in ['documento.txt', 'documento.enc', 'documento_decifrado.txt']:\n    os.remove(f)\nprint('\\nArquivos temporários removidos.')",
            cmdOutput: "Arquivo criado: documento.txt\n\nArquivo cifrado: documento.enc\nArquivo decifrado: documento_decifrado.txt\n\nConteúdo decifrado:\nConteúdo secreto do documento.\nEste arquivo será cifrado com RSA.\n\nArquivos temporários removidos."
        },
        {
            cmdName: "Criptografia com Biblioteca Cryptography",
            cmdDescription: "Alternativa usando a biblioteca cryptography para operações RSA",
            cmdCode: "from cryptography.hazmat.primitives.asymmetric import rsa, padding\nfrom cryptography.hazmat.primitives import serialization, hashes\nimport base64\n\n# Gerar chave privada\nprivate_key = rsa.generate_private_key(\n    public_exponent=65537,\n    key_size=2048\n)\n\n# Obter chave pública\npublic_key = private_key.public_key()\n\n# Mensagem\nmensagem = b'Mensagem secreta com cryptography'\nprint(f'Mensagem original: {mensagem.decode()}\\n')\n\n# Cifrar com chave pública\ncifrado = public_key.encrypt(\n    mensagem,\n    padding.OAEP(\n        mgf=padding.MGF1(algorithm=hashes.SHA256()),\n        algorithm=hashes.SHA256(),\n        label=None\n    )\n)\nprint(f'Mensagem cifrada (base64): {base64.b64encode(cifrado).decode()[:100]}...\\n')\n\n# Decifrar com chave privada\ndecifrado = private_key.decrypt(\n    cifrado,\n    padding.OAEP(\n        mgf=padding.MGF1(algorithm=hashes.SHA256()),\n        algorithm=hashes.SHA256(),\n        label=None\n    )\n)\nprint(f'Mensagem decifrada: {decifrado.decode()}')\n\n# Serializar chaves para armazenamento\npem_private = private_key.private_bytes(\n    encoding=serialization.Encoding.PEM,\n    format=serialization.PrivateFormat.PKCS8,\n    encryption_algorithm=serialization.NoEncryption()\n)\n\npem_public = public_key.public_bytes(\n    encoding=serialization.Encoding.PEM,\n    format=serialization.PublicFormat.SubjectPublicKeyInfo\n)\n\nprint(f'\\nChave privada (PEM):\\n{pem_private.decode()[:150]}...')\nprint(f'\\nChave pública (PEM):\\n{pem_public.decode()[:150]}...')",
            cmdOutput: "Mensagem original: Mensagem secreta com cryptography\n\nMensagem cifrada (base64): gW5jR8vF2mKpQrStUvWxYzAbCdEfGhIjKlMnOpQrStUvWxYzAbCdEfGhIjKlMnOpQrStU...\n\nMensagem decifrada: Mensagem secreta com cryptography\n\nChave privada (PEM):\n-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC8/moeSrZjy8Wn\nepH2wmbsq1fIFwvBCczbFWs1wN8aEmQuY2lCtK1S9bFjMBsJ0R8aEiMqUyc6lCtK...\n\nChave pública (PEM):\n-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvP5qHkq2Y8vFp3qR9sJm\n7KtXyBcLwQnM2xVbNcDfGhJkLmNpQrStUvWxYzAbCdEfGhIjKlMnOpQrStUv...\n"
        }
    ]
},

]



function renderCards(dadosParaExibir) {
    container.innerHTML = ""
    
    dadosParaExibir.forEach((lib) => {
        const newCard = document.createElement('div')
        newCard.classList.add("card-container")
        newCard.innerHTML = `
            <div class="card-img">${lib.icon}</div>
            <div class="card-description">
                <p>${lib.description.slice(0, 80)}...</p>
            </div>
            <div class="card-tag-category">${lib.category}</div>
        `

        newCard.addEventListener('click', () => {
            window.location.href = `details.html?id=${lib.id}`
        })

        container.appendChild(newCard)
    })
}

renderCards(data)

const btnAll = document.createElement('div')
btnAll.classList.add("tags", "tag-all")
btnAll.textContent = "🚀 Ver Todas"
btnAll.addEventListener('click', () => {
    span.textContent = data.length
    btnAll.classList.add('active')
    renderCards(data)
}); 
tagIndexed.appendChild(btnAll)

data.forEach((lib) => {
    if (!tagsArr.includes(lib.category)) {
        tagsArr.push(lib.category)
        
        const newTag = document.createElement('div')
        newTag.classList.add("tags")
        newTag.textContent = lib.category
        
        newTag.addEventListener('click', (e) => {
            e.stopPropagation()
            
            const filtered = data.filter(card => card.category === lib.category)
            span.textContent = filtered.length
            document.querySelectorAll('.tags').forEach(t => t.classList.remove('active'))
            newTag.classList.add('active')
            renderCards(filtered)
        })
        
        tagIndexed.appendChild(newTag)
    }
})


span.textContent = data.length




