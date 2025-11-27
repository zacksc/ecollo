export const handleSupabaseError = (error) => {
  if (!error) return 'Erro desconhecido';

  const msg = error.message?.toLowerCase() || '';

  if (msg.includes('unable to validate email address') || msg.includes('invalid email')) {
    return 'E-mail inválido. Verifique o formato (ex: nome@exemplo.com)';
  }
  if (msg.includes('password should be at least')) {
    return 'A senha deve ter no mínimo 6 caracteres';
  }
  if (msg.includes('user already registered') || msg.includes('already exists')) {
    return 'Este e-mail já está cadastrado. Tente fazer login.';
  }
  if (msg.includes('email address not authorized')) {
    return 'Este e-mail não está autorizado para cadastro.';
  }
  if (msg.includes('signup disabled')) {
    return 'Cadastro temporariamente desativado. Tente novamente mais tarde.';
  }

  if (msg.includes('invalid login credentials') || msg.includes('invalid credentials')) {
    return 'E-mail ou senha incorretos';
  }
  if (msg.includes('email not confirmed')) {
    return 'Você ainda não confirmou seu e-mail. Verifique sua caixa de entrada!';
  }
  if (msg.includes('too many requests') || msg.includes('rate limit')) {
    return 'Muitas tentativas. Aguarde 1 minuto e tente novamente.';
  }

  if (msg.includes('network') || msg.includes('failed to fetch')) {
    return 'Sem conexão com a internet. Verifique sua rede.';
  }
  if (msg.includes('internal server error') || error.status >= 500) {
    return 'Erro no servidor. Tente novamente em alguns minutos.';
  }

  return error.message || 'Ocorreu um erro inesperado';
};