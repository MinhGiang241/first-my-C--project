using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Activity Activity { get; set; }
        }
        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activity.FindAsync(request.Activity.Id);
                if (activity == null) return null;
                // activity!.Title = request.Activity.Title ?? activity.Title;
                _mapper.Map(request.Activity, activity);
                // var activity = _mapper.Map<Activity>(request.Activity);
                // _context.Activity.Update(activity);

                var result = await _context.SaveChangesAsync() > 0;
                if (!result) return Result<Unit>.Failure("Failed to update activity");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}