import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({ params }) {
  const router = useRouter();
  const [title, id] = params || [];
  //params가 서버에서 아직 배열이 아닐때를 위하여 오류방지를 위해 || []를 넣어준다
  //객체 리터럴로 할당
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

//[id]라고 파일명을 지으면 property의 이름이 된다
// query:{id: "12336545"}

export async function getServerSideProps({ params: { params } }) {
  return {
    props: { params },
  };
}

// 서버에서 params데이터가 포함된 html문서를 browser에게 전달함으로 seo에 유리하고
// ssr 방식이기에 데이터에 대한 로딩을 보지않고 불러올 수 있다.
