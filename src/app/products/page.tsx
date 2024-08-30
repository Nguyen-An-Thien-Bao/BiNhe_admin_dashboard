import React from 'react';
import BreadCrumb from '@/components/BreadCrumb';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase';
import Table from '@/components/Table';

async function Products() {
    const querySnapshot = await getDocs(collection(db, 'collections'));
    const result = querySnapshot.docs.map((ele) => ({ id: ele.id, ...ele.data() }));

    return (
        <div>
            <BreadCrumb title="Products" />
            <Table data={result} title="overall" />
            <Table data={result} title="Trousers" />
        </div>
    );
}

export default Products;
