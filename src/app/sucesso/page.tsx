import { Metadata } from 'next';
import { SucessoContent } from '@/components/SucessoContent';

export const metadata: Metadata = {
  title: "Solicitação Recebida | Música para Eventos",
  description: "Sua solicitação de amostra foi enviada com sucesso. Em breve entraremos em contato.",
};

export default function SucessoPage() {
  return <SucessoContent />;
}
