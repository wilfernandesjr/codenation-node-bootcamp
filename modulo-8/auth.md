# Autenticação e Autorização

Ambos os termos são muito usados em conjunto quando o assunto é segurança, especialmente quando se trata de níveis de acesso a um sistema. Entretanto, ambos os termos são bem diferentes conceitualmente. É verdade que ambos são frequentemente usados em um mesmo contexto, com uma mesma ferramenta, mas ainda assim são bem distintos um do outro.

## Autenticação
- Verifica se vc é realmente quem vc diz que é;
- Métodos:
  - Formulário de Login
  - Autenticação HTTP
  - HTTP Digest
  - Métodos de autenticação customizados

Autenticação é sobre verificar / validar suas credenciais, como as de usuário e senha, afim de reconhecer a sua identidade. E somente isso. Não é responsável por definir nível de acesso e privilégios, ou até mesmo se vc pode acessar qualquer parte do sistema ou não.

### Fatores de Autenticação
Fatores de autenticação determina os vários elementos que um sistema usa para verificar a identidade de alguém. Essa identidade de um usuário pode ser determinada, por exemplo, verificando se ele sabe a senha que ele cadastrou, o que ele sabe, o que já foi, se ele está em posse de um celular e etc. Quantos mais fatores de autenticação são exigidos para executá-la, maior a garantia na confirmação da identidade, portanto, mais seguro.

#### Single-Factor Auth
#### Two-Factor Auth
#### Multi-Factor Auth

## Autorização
- Processo de decisão se você tem permissão para acessar um recurso que está tendo acessar;
- Métodos:
  - Controle de acesso para URLs
  - Métodos e objetos de acesso seguro
  - Listas de controle de acesso (ACL - Access Control Lists)

A autorização acontece após a sua identidade ter sido autenticada pelo sistema. Ela determina a sua capacidade de acessar o sistema e até que ponto. Resumindo, autorização é o processo que determina se um usuário autenticado tem acesso a um recurso.
