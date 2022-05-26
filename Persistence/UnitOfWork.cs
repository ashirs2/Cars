using System;
using System.Threading.Tasks;

namespace Cars.Persistence
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly CarsDbContext context;

        public UnitOfWork(CarsDbContext context)
        {
            this.context = context;
        }

        public async Task CompleteAsync()
        {
            await context.SaveChangesAsync();
        }

    }
   
}
