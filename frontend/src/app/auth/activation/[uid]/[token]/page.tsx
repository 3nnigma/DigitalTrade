import Activation from "@/modules/auth/Activation/Activation";

type Props = {
  params: {
    uid: string;
    token: string;
  };
};

export default function page({ params }: Props) {
  return <Activation params={params} />;
}
