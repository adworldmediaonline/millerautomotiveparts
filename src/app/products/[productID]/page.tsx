import { products } from '@/lib/data';
import { notFound } from 'next/navigation';
import { ProductGallery } from '@/components/ui/product-gallery';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ productID: string }>;
}): Promise<Metadata> {
  const productID = (await params).productID;
  const product = products.find(product => product.id === productID);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} - Miller Automotive Parts`,
    description: `View details and images of ${product.name} from Miller Automotive Parts`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ productID: string }>;
}) {
  const productID = (await params).productID;
  const product = products.find(product => product.id === productID);

  if (!product) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white px-4 py-8 md:px-8">
      <ProductGallery images={product.images} productName={product.name} />
    </div>
  );
}
